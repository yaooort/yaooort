---
layout: Post
title: Prometheus+Grafana Docker部署初体验
subtitle: Prometheus+Grafana docker compose 单机监控 mysql redis go gin clickhouse nsq
author: Oort
date: 2025-06-20
useHeaderImage: true
headerImage: /img/in-post/2025-06-20/header.jpeg
headerMask: rgb(14, 21, 5, .2)
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
  - 运维
---

<!-- more -->

最近在做一些服务监控和可视化需求，决定用最流行的 Prometheus + Grafana 组合，配合 Docker Compose 一键搭建一套单机环境，顺便监控 mysql、redis、go/gin 服务、clickhouse、nsq、宿主机等，记录一下踩过的坑和完整流程，方便大家快速上手和复现。

## 一、目录结构

项目目录如下，方便后续持久化和自定义配置：

```
.
├── clickhouse
│   ├── data
│   └── source
│       └── init.sql
├── create_docker_net.sh
├── docker-compose.yaml
├── grafana
│   └── data
│       ├── csv
│       ├── grafana.db
│       ├── pdf
│       ├── plugins
│       └── png
├── nsq
│   └── data
├── prometheus
│   └── prometheus.yml
├── redis
│   ├── data
│   │   └── dump.rdb
│   ├── logs
│   └── redis.conf
└── server
    ├── config.docker.yaml
```

## 二、Docker Compose 服务编排

重点是 docker-compose.yaml 文件，核心服务包括：

- prometheus
- grafana
- redis_exporter
- mysqld_exporter
- clickhouse_exporter
- nsq_exporter
- node_exporter（宿主机指标采集）

**docker-compose.yaml 片段如下：**

```yaml
prometheus:
  image: prom/prometheus:latest
  container_name: prometheus
  volumes:
    - $PWD/prometheus/prometheus.yml:/etc/prometheus/prometheus.yml
  command:
    - "--config.file=/etc/prometheus/prometheus.yml"
    - "--storage.tsdb.retention.time=3d"
  #    ports:
  #      - "9090:9090"
  depends_on:
    - mysqld_exporter
    - redis_exporter
    - clickhouse_exporter
    - nsq_exporter
    - server
  networks:
    app_net:
      ipv4_address: 188.8.8.41

grafana:
  image: grafana/grafana:latest
  container_name: grafana
  ports:
    - "3000:3000"
  environment:
    - GF_SECURITY_ADMIN_PASSWORD=admin # 管理员密码
    - TZ=Asia/Shanghai
  depends_on:
    - prometheus
  volumes:
    - $PWD/grafana/data:/var/lib/grafana # 持久化数据
  networks:
    app_net:
      ipv4_address: 188.8.8.42

redis_exporter:
  image: oliver006/redis_exporter:v1.61.0
  container_name: redis_exporter
  environment:
    - REDIS_ADDR=redis://127.0.0.1:6379
    - REDIS_PASSWORD=123456
  #    ports:
  #      - "9121:9121"
  depends_on:
    - redis
  networks:
    app_net:
      ipv4_address: 188.8.8.43

mysqld_exporter:
  image: prom/mysqld-exporter:latest
  container_name: mysqld_exporter
  #    ports:
  #      - "9104:9104"
  command:
    - "--mysqld.username=root:123456"
    - "--mysqld.address=127.0.0.1:3306"
  restart: always
  networks:
    app_net:
      ipv4_address: 188.8.8.44

clickhouse_exporter:
  image: f1yegor/clickhouse-exporter:latest
  container_name: clickhouse_exporter
  command:
    - "-scrape_uri=http://root:123456@127.0.0.1:8123/"
  #    ports:
  #      - "9116:9116"
  restart: always
  networks:
    app_net:
      ipv4_address: 188.8.8.45

nsq_exporter:
  image: emaincourt/nsq_exporter:latest
  container_name: nsq_exporter
  command:
    - "-nsqd.addr=http://nsqd:4151/stats"
  #    ports:
  #      - "9117:9117"
  depends_on:
    - nsqlookupd
    - nsqd
    - nsqadmin
  networks:
    app_net:
      ipv4_address: 188.8.8.46

# 宿主机的采集器
node_exporter:
  image: prom/node-exporter:latest
  container_name: node_exporter
  network_mode: "host"
  pid: "host"
  volumes:
    - /proc:/host/proc:ro
    - /sys:/host/sys:ro
    - /:/rootfs:ro
  command:
    - "--path.procfs=/host/proc"
    - "--path.rootfs=/rootfs"
    - "--path.sysfs=/host/sys"
    - "--collector.filesystem.ignored-mount-points=^/(sys|proc|dev|host|etc)($|/)"
```

**注意事项：**

- 建议将端口开放注释去掉，我习惯使用 docker 内网，不占用宿主机端口。
- `network_mode: host` 适合单机环境下 node_exporter 采集宿主机信息。
- 各 exporter 需要与被监控服务（如 redis、mysql 等）在同一网段，或确认地址端口可通。

## 三、Prometheus 配置

prometheus.yml 负责采集各 exporter 指标：

```yaml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: "node"
    static_configs:
      - targets: ["172.17.0.1:9100"]

  - job_name: "prometheus"
    static_configs:
      - targets: ["188.8.8.41:9090"]

  - job_name: "redis"
    static_configs:
      - targets: ["188.8.8.43:9121"]

  - job_name: "mysql"
    static_configs:
      - targets: ["188.8.8.44:9104"]

  - job_name: "clickhouse"
    static_configs:
      - targets: ["188.8.8.45:9116"]

  - job_name: "nsq"
    static_configs:
      - targets: ["188.8.8.46:9117"]

  - job_name: "server"
    static_configs:
      - targets: ["188.8.8.11:8888"] # 你需要让server暴露metrics端口
```

**注意：**

- 请根据自己实际 docker 网络环境和 exporter 容器 IP 修改 targets。
- 各 exporter 默认端口可在对应官方文档或 DockerHub 查看。

## 四、Golang Gin 服务接入 Prometheus

以 gin 框架为例，推荐使用 `go-gin-prometheus` 插件实现零侵入采集。

**安装依赖：**

```shell
go get github.com/zsais/go-gin-prometheus
go get github.com/prometheus/client_golang/prometheus/promhttp
go get github.com/prometheus/client_golang/prometheus
```

**代码集成：**

```go
import (
    ginprometheus "github.com/zsais/go-gin-prometheus"
    "github.com/gin-gonic/gin"
)

func main() {
    router := gin.Default()
    // 集成 Prometheus 到 Gin
    p := ginprometheus.NewPrometheus("gin")
    p.Use(router) // 这行自动注册了 /metrics 路由

    // 你的路由注册
    router.GET("/ping", func(ctx *gin.Context) {
        ctx.JSON(200, gin.H{"message": "pong"})
    })

    router.Run(":8888")
}
```

**效果：**

- 启动后自动暴露 `/metrics` 指标接口。
- prometheus 配置中添加该服务即可采集 gin 请求耗时、QPS 等基础指标。

## 五、Grafana 可视化

- 访问 http://localhost:3000，默认账号密码均为 `admin`。
- 添加 Prometheus 数据源（URL 填写 `http://prometheus:9090` 或宿主机端口）。
- 可以从 Grafana 官方网站或 [Grafana.com Dashboards](https://grafana.com/grafana/dashboards/) 下载丰富的模板，也可自定义配置图表。

> 仪表盘模板很多，这里就不一一贴出了，按需导入即可。

![123](/img/in-post/2025-06-20/123.png)

![456](/img/in-post/2025-06-20/456.png)

![789](/img/in-post/2025-06-20/789.png)

## 六、常见问题与 Tips

- **网络联通**：建议所有服务和 exporter 使用同一自定义网络（如 app_net），确保 IP 可达。
- **数据持久化**：挂载数据卷，避免重启丢失历史数据和仪表盘配置。
- **exporter 配置**：部分 exporter 需配置密码、地址，建议用环境变量传递，注意安全。
- **性能调优**：单机测试建议 Prometheus 保留 3 天数据，生产可按需调整。
- **metrics 定制**：如需采集自定义业务指标，建议直接用 `prometheus/client_golang` 库埋点上报。

## 七、结语

通过 docker compose 一站式部署 Prometheus + Grafana 及各类 exporter，可以极大提升服务的可观测性和运维效率。无论是单机实验还是生产环境入门，这套方案都值得推荐。

如果你有更丰富的 exporter 组合或者仪表盘模板推荐，欢迎留言交流！

---

> 参考资料：
>
> - [Prometheus 官方文档](https://prometheus.io/docs/)
> - [Grafana 官方文档](https://grafana.com/docs/)
> - [Awesome Prometheus Exporters](https://github.com/prometheus/docs/blob/main/content/docs/instrumenting/exporters.md)
