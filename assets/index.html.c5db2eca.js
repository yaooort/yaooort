import{_ as n,o as s,c as a,a as t}from"./app.97bc6cd8.js";var p="/img/in-post/2025-06-20/123.png",e="/img/in-post/2025-06-20/456.png",o="/img/in-post/2025-06-20/789.png";const c={},u=t(`<p>\u6700\u8FD1\u5728\u505A\u4E00\u4E9B\u670D\u52A1\u76D1\u63A7\u548C\u53EF\u89C6\u5316\u9700\u6C42\uFF0C\u51B3\u5B9A\u7528\u6700\u6D41\u884C\u7684 Prometheus + Grafana \u7EC4\u5408\uFF0C\u914D\u5408 Docker Compose \u4E00\u952E\u642D\u5EFA\u4E00\u5957\u5355\u673A\u73AF\u5883\uFF0C\u987A\u4FBF\u76D1\u63A7 mysql\u3001redis\u3001go/gin \u670D\u52A1\u3001clickhouse\u3001nsq\u3001\u5BBF\u4E3B\u673A\u7B49\uFF0C\u8BB0\u5F55\u4E00\u4E0B\u8E29\u8FC7\u7684\u5751\u548C\u5B8C\u6574\u6D41\u7A0B\uFF0C\u65B9\u4FBF\u5927\u5BB6\u5FEB\u901F\u4E0A\u624B\u548C\u590D\u73B0\u3002</p><h2 id="\u4E00\u3001\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> \u4E00\u3001\u76EE\u5F55\u7ED3\u6784</h2><p>\u9879\u76EE\u76EE\u5F55\u5982\u4E0B\uFF0C\u65B9\u4FBF\u540E\u7EED\u6301\u4E45\u5316\u548C\u81EA\u5B9A\u4E49\u914D\u7F6E\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>.
\u251C\u2500\u2500 clickhouse
\u2502   \u251C\u2500\u2500 data
\u2502   \u2514\u2500\u2500 source
\u2502       \u2514\u2500\u2500 init.sql
\u251C\u2500\u2500 create_docker_net.sh
\u251C\u2500\u2500 docker-compose.yaml
\u251C\u2500\u2500 grafana
\u2502   \u2514\u2500\u2500 data
\u2502       \u251C\u2500\u2500 csv
\u2502       \u251C\u2500\u2500 grafana.db
\u2502       \u251C\u2500\u2500 pdf
\u2502       \u251C\u2500\u2500 plugins
\u2502       \u2514\u2500\u2500 png
\u251C\u2500\u2500 nsq
\u2502   \u2514\u2500\u2500 data
\u251C\u2500\u2500 prometheus
\u2502   \u2514\u2500\u2500 prometheus.yml
\u251C\u2500\u2500 redis
\u2502   \u251C\u2500\u2500 data
\u2502   \u2502   \u2514\u2500\u2500 dump.rdb
\u2502   \u251C\u2500\u2500 logs
\u2502   \u2514\u2500\u2500 redis.conf
\u2514\u2500\u2500 server
    \u251C\u2500\u2500 config.docker.yaml
</code></pre></div><h2 id="\u4E8C\u3001docker-compose-\u670D\u52A1\u7F16\u6392" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001docker-compose-\u670D\u52A1\u7F16\u6392" aria-hidden="true">#</a> \u4E8C\u3001Docker Compose \u670D\u52A1\u7F16\u6392</h2><p>\u91CD\u70B9\u662F docker-compose.yaml \u6587\u4EF6\uFF0C\u6838\u5FC3\u670D\u52A1\u5305\u62EC\uFF1A</p><ul><li>prometheus</li><li>grafana</li><li>redis_exporter</li><li>mysqld_exporter</li><li>clickhouse_exporter</li><li>nsq_exporter</li><li>node_exporter\uFF08\u5BBF\u4E3B\u673A\u6307\u6807\u91C7\u96C6\uFF09</li></ul><p><strong>docker-compose.yaml \u7247\u6BB5\u5982\u4E0B\uFF1A</strong></p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">prometheus</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> prom/prometheus<span class="token punctuation">:</span>latest
  <span class="token key atrule">container_name</span><span class="token punctuation">:</span> prometheus
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> $PWD/prometheus/prometheus.yml<span class="token punctuation">:</span>/etc/prometheus/prometheus.yml
  <span class="token key atrule">command</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;--config.file=/etc/prometheus/prometheus.yml&quot;</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;--storage.tsdb.retention.time=3d&quot;</span>
  <span class="token comment">#    ports:</span>
  <span class="token comment">#      - &quot;9090:9090&quot;</span>
  <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> mysqld_exporter
    <span class="token punctuation">-</span> redis_exporter
    <span class="token punctuation">-</span> clickhouse_exporter
    <span class="token punctuation">-</span> nsq_exporter
    <span class="token punctuation">-</span> server
  <span class="token key atrule">networks</span><span class="token punctuation">:</span>
    <span class="token key atrule">app_net</span><span class="token punctuation">:</span>
      <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 188.8.8.41

<span class="token key atrule">grafana</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> grafana/grafana<span class="token punctuation">:</span>latest
  <span class="token key atrule">container_name</span><span class="token punctuation">:</span> grafana
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;3000:3000&quot;</span>
  <span class="token key atrule">environment</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> GF_SECURITY_ADMIN_PASSWORD=admin <span class="token comment"># \u7BA1\u7406\u5458\u5BC6\u7801</span>
    <span class="token punctuation">-</span> TZ=Asia/Shanghai
  <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> prometheus
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> $PWD/grafana/data<span class="token punctuation">:</span>/var/lib/grafana <span class="token comment"># \u6301\u4E45\u5316\u6570\u636E</span>
  <span class="token key atrule">networks</span><span class="token punctuation">:</span>
    <span class="token key atrule">app_net</span><span class="token punctuation">:</span>
      <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 188.8.8.42

<span class="token key atrule">redis_exporter</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> oliver006/redis_exporter<span class="token punctuation">:</span>v1.61.0
  <span class="token key atrule">container_name</span><span class="token punctuation">:</span> redis_exporter
  <span class="token key atrule">environment</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> REDIS_ADDR=redis<span class="token punctuation">:</span>//127.0.0.1<span class="token punctuation">:</span><span class="token number">6379</span>
    <span class="token punctuation">-</span> REDIS_PASSWORD=123456
  <span class="token comment">#    ports:</span>
  <span class="token comment">#      - &quot;9121:9121&quot;</span>
  <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> redis
  <span class="token key atrule">networks</span><span class="token punctuation">:</span>
    <span class="token key atrule">app_net</span><span class="token punctuation">:</span>
      <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 188.8.8.43

<span class="token key atrule">mysqld_exporter</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> prom/mysqld<span class="token punctuation">-</span>exporter<span class="token punctuation">:</span>latest
  <span class="token key atrule">container_name</span><span class="token punctuation">:</span> mysqld_exporter
  <span class="token comment">#    ports:</span>
  <span class="token comment">#      - &quot;9104:9104&quot;</span>
  <span class="token key atrule">command</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;--mysqld.username=root:123456&quot;</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;--mysqld.address=127.0.0.1:3306&quot;</span>
  <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
  <span class="token key atrule">networks</span><span class="token punctuation">:</span>
    <span class="token key atrule">app_net</span><span class="token punctuation">:</span>
      <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 188.8.8.44

<span class="token key atrule">clickhouse_exporter</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> f1yegor/clickhouse<span class="token punctuation">-</span>exporter<span class="token punctuation">:</span>latest
  <span class="token key atrule">container_name</span><span class="token punctuation">:</span> clickhouse_exporter
  <span class="token key atrule">command</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;-scrape_uri=http://root:123456@127.0.0.1:8123/&quot;</span>
  <span class="token comment">#    ports:</span>
  <span class="token comment">#      - &quot;9116:9116&quot;</span>
  <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
  <span class="token key atrule">networks</span><span class="token punctuation">:</span>
    <span class="token key atrule">app_net</span><span class="token punctuation">:</span>
      <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 188.8.8.45

<span class="token key atrule">nsq_exporter</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> emaincourt/nsq_exporter<span class="token punctuation">:</span>latest
  <span class="token key atrule">container_name</span><span class="token punctuation">:</span> nsq_exporter
  <span class="token key atrule">command</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;-nsqd.addr=http://nsqd:4151/stats&quot;</span>
  <span class="token comment">#    ports:</span>
  <span class="token comment">#      - &quot;9117:9117&quot;</span>
  <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> nsqlookupd
    <span class="token punctuation">-</span> nsqd
    <span class="token punctuation">-</span> nsqadmin
  <span class="token key atrule">networks</span><span class="token punctuation">:</span>
    <span class="token key atrule">app_net</span><span class="token punctuation">:</span>
      <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 188.8.8.46

<span class="token comment"># \u5BBF\u4E3B\u673A\u7684\u91C7\u96C6\u5668</span>
<span class="token key atrule">node_exporter</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> prom/node<span class="token punctuation">-</span>exporter<span class="token punctuation">:</span>latest
  <span class="token key atrule">container_name</span><span class="token punctuation">:</span> node_exporter
  <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> <span class="token string">&quot;host&quot;</span>
  <span class="token key atrule">pid</span><span class="token punctuation">:</span> <span class="token string">&quot;host&quot;</span>
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> /proc<span class="token punctuation">:</span>/host/proc<span class="token punctuation">:</span>ro
    <span class="token punctuation">-</span> /sys<span class="token punctuation">:</span>/host/sys<span class="token punctuation">:</span>ro
    <span class="token punctuation">-</span> /<span class="token punctuation">:</span>/rootfs<span class="token punctuation">:</span>ro
  <span class="token key atrule">command</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;--path.procfs=/host/proc&quot;</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;--path.rootfs=/rootfs&quot;</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;--path.sysfs=/host/sys&quot;</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;--collector.filesystem.ignored-mount-points=^/(sys|proc|dev|host|etc)($|/)&quot;</span>
</code></pre></div><p><strong>\u6CE8\u610F\u4E8B\u9879\uFF1A</strong></p><ul><li>\u5EFA\u8BAE\u5C06\u7AEF\u53E3\u5F00\u653E\u6CE8\u91CA\u53BB\u6389\uFF0C\u6211\u4E60\u60EF\u4F7F\u7528 docker \u5185\u7F51\uFF0C\u4E0D\u5360\u7528\u5BBF\u4E3B\u673A\u7AEF\u53E3\u3002</li><li><code>network_mode: host</code> \u9002\u5408\u5355\u673A\u73AF\u5883\u4E0B node_exporter \u91C7\u96C6\u5BBF\u4E3B\u673A\u4FE1\u606F\u3002</li><li>\u5404 exporter \u9700\u8981\u4E0E\u88AB\u76D1\u63A7\u670D\u52A1\uFF08\u5982 redis\u3001mysql \u7B49\uFF09\u5728\u540C\u4E00\u7F51\u6BB5\uFF0C\u6216\u786E\u8BA4\u5730\u5740\u7AEF\u53E3\u53EF\u901A\u3002</li></ul><h2 id="\u4E09\u3001prometheus-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001prometheus-\u914D\u7F6E" aria-hidden="true">#</a> \u4E09\u3001Prometheus \u914D\u7F6E</h2><p>prometheus.yml \u8D1F\u8D23\u91C7\u96C6\u5404 exporter \u6307\u6807\uFF1A</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">global</span><span class="token punctuation">:</span>
  <span class="token key atrule">scrape_interval</span><span class="token punctuation">:</span> 15s

<span class="token key atrule">scrape_configs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&quot;node&quot;</span>
    <span class="token key atrule">static_configs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">targets</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;172.17.0.1:9100&quot;</span><span class="token punctuation">]</span>

  <span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&quot;prometheus&quot;</span>
    <span class="token key atrule">static_configs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">targets</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;188.8.8.41:9090&quot;</span><span class="token punctuation">]</span>

  <span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&quot;redis&quot;</span>
    <span class="token key atrule">static_configs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">targets</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;188.8.8.43:9121&quot;</span><span class="token punctuation">]</span>

  <span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&quot;mysql&quot;</span>
    <span class="token key atrule">static_configs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">targets</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;188.8.8.44:9104&quot;</span><span class="token punctuation">]</span>

  <span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&quot;clickhouse&quot;</span>
    <span class="token key atrule">static_configs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">targets</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;188.8.8.45:9116&quot;</span><span class="token punctuation">]</span>

  <span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&quot;nsq&quot;</span>
    <span class="token key atrule">static_configs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">targets</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;188.8.8.46:9117&quot;</span><span class="token punctuation">]</span>

  <span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&quot;server&quot;</span>
    <span class="token key atrule">static_configs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">targets</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;188.8.8.11:8888&quot;</span><span class="token punctuation">]</span> <span class="token comment"># \u4F60\u9700\u8981\u8BA9server\u66B4\u9732metrics\u7AEF\u53E3</span>
</code></pre></div><p><strong>\u6CE8\u610F\uFF1A</strong></p><ul><li>\u8BF7\u6839\u636E\u81EA\u5DF1\u5B9E\u9645 docker \u7F51\u7EDC\u73AF\u5883\u548C exporter \u5BB9\u5668 IP \u4FEE\u6539 targets\u3002</li><li>\u5404 exporter \u9ED8\u8BA4\u7AEF\u53E3\u53EF\u5728\u5BF9\u5E94\u5B98\u65B9\u6587\u6863\u6216 DockerHub \u67E5\u770B\u3002</li></ul><h2 id="\u56DB\u3001golang-gin-\u670D\u52A1\u63A5\u5165-prometheus" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001golang-gin-\u670D\u52A1\u63A5\u5165-prometheus" aria-hidden="true">#</a> \u56DB\u3001Golang Gin \u670D\u52A1\u63A5\u5165 Prometheus</h2><p>\u4EE5 gin \u6846\u67B6\u4E3A\u4F8B\uFF0C\u63A8\u8350\u4F7F\u7528 <code>go-gin-prometheus</code> \u63D2\u4EF6\u5B9E\u73B0\u96F6\u4FB5\u5165\u91C7\u96C6\u3002</p><p><strong>\u5B89\u88C5\u4F9D\u8D56\uFF1A</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code>go get github.com/zsais/go-gin-prometheus
go get github.com/prometheus/client_golang/prometheus/promhttp
go get github.com/prometheus/client_golang/prometheus
</code></pre></div><p><strong>\u4EE3\u7801\u96C6\u6210\uFF1A</strong></p><div class="language-go ext-go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
    ginprometheus <span class="token string">&quot;github.com/zsais/go-gin-prometheus&quot;</span>
    <span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    router <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// \u96C6\u6210 Prometheus \u5230 Gin</span>
    p <span class="token operator">:=</span> ginprometheus<span class="token punctuation">.</span><span class="token function">NewPrometheus</span><span class="token punctuation">(</span><span class="token string">&quot;gin&quot;</span><span class="token punctuation">)</span>
    p<span class="token punctuation">.</span><span class="token function">Use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span> <span class="token comment">// \u8FD9\u884C\u81EA\u52A8\u6CE8\u518C\u4E86 /metrics \u8DEF\u7531</span>

    <span class="token comment">// \u4F60\u7684\u8DEF\u7531\u6CE8\u518C</span>
    router<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/ping&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>ctx <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ctx<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;pong&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    router<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token string">&quot;:8888&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>\u6548\u679C\uFF1A</strong></p><ul><li>\u542F\u52A8\u540E\u81EA\u52A8\u66B4\u9732 <code>/metrics</code> \u6307\u6807\u63A5\u53E3\u3002</li><li>prometheus \u914D\u7F6E\u4E2D\u6DFB\u52A0\u8BE5\u670D\u52A1\u5373\u53EF\u91C7\u96C6 gin \u8BF7\u6C42\u8017\u65F6\u3001QPS \u7B49\u57FA\u7840\u6307\u6807\u3002</li></ul><h2 id="\u4E94\u3001grafana-\u53EF\u89C6\u5316" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001grafana-\u53EF\u89C6\u5316" aria-hidden="true">#</a> \u4E94\u3001Grafana \u53EF\u89C6\u5316</h2><ul><li>\u8BBF\u95EE http://localhost:3000\uFF0C\u9ED8\u8BA4\u8D26\u53F7\u5BC6\u7801\u5747\u4E3A <code>admin</code>\u3002</li><li>\u6DFB\u52A0 Prometheus \u6570\u636E\u6E90\uFF08URL \u586B\u5199 <code>http://prometheus:9090</code> \u6216\u5BBF\u4E3B\u673A\u7AEF\u53E3\uFF09\u3002</li><li>\u53EF\u4EE5\u4ECE Grafana \u5B98\u65B9\u7F51\u7AD9\u6216 <a href="https://grafana.com/grafana/dashboards/" target="_blank" rel="noopener noreferrer">Grafana.com Dashboards</a> \u4E0B\u8F7D\u4E30\u5BCC\u7684\u6A21\u677F\uFF0C\u4E5F\u53EF\u81EA\u5B9A\u4E49\u914D\u7F6E\u56FE\u8868\u3002</li></ul><blockquote><p>\u4EEA\u8868\u76D8\u6A21\u677F\u5F88\u591A\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u4E00\u4E00\u8D34\u51FA\u4E86\uFF0C\u6309\u9700\u5BFC\u5165\u5373\u53EF\u3002</p></blockquote><p><img src="`+p+'" alt="123"></p><p><img src="'+e+'" alt="456"></p><p><img src="'+o+'" alt="789"></p><h2 id="\u516D\u3001\u5E38\u89C1\u95EE\u9898\u4E0E-tips" tabindex="-1"><a class="header-anchor" href="#\u516D\u3001\u5E38\u89C1\u95EE\u9898\u4E0E-tips" aria-hidden="true">#</a> \u516D\u3001\u5E38\u89C1\u95EE\u9898\u4E0E Tips</h2><ul><li><strong>\u7F51\u7EDC\u8054\u901A</strong>\uFF1A\u5EFA\u8BAE\u6240\u6709\u670D\u52A1\u548C exporter \u4F7F\u7528\u540C\u4E00\u81EA\u5B9A\u4E49\u7F51\u7EDC\uFF08\u5982 app_net\uFF09\uFF0C\u786E\u4FDD IP \u53EF\u8FBE\u3002</li><li><strong>\u6570\u636E\u6301\u4E45\u5316</strong>\uFF1A\u6302\u8F7D\u6570\u636E\u5377\uFF0C\u907F\u514D\u91CD\u542F\u4E22\u5931\u5386\u53F2\u6570\u636E\u548C\u4EEA\u8868\u76D8\u914D\u7F6E\u3002</li><li><strong>exporter \u914D\u7F6E</strong>\uFF1A\u90E8\u5206 exporter \u9700\u914D\u7F6E\u5BC6\u7801\u3001\u5730\u5740\uFF0C\u5EFA\u8BAE\u7528\u73AF\u5883\u53D8\u91CF\u4F20\u9012\uFF0C\u6CE8\u610F\u5B89\u5168\u3002</li><li><strong>\u6027\u80FD\u8C03\u4F18</strong>\uFF1A\u5355\u673A\u6D4B\u8BD5\u5EFA\u8BAE Prometheus \u4FDD\u7559 3 \u5929\u6570\u636E\uFF0C\u751F\u4EA7\u53EF\u6309\u9700\u8C03\u6574\u3002</li><li><strong>metrics \u5B9A\u5236</strong>\uFF1A\u5982\u9700\u91C7\u96C6\u81EA\u5B9A\u4E49\u4E1A\u52A1\u6307\u6807\uFF0C\u5EFA\u8BAE\u76F4\u63A5\u7528 <code>prometheus/client_golang</code> \u5E93\u57CB\u70B9\u4E0A\u62A5\u3002</li></ul><h2 id="\u4E03\u3001\u7ED3\u8BED" tabindex="-1"><a class="header-anchor" href="#\u4E03\u3001\u7ED3\u8BED" aria-hidden="true">#</a> \u4E03\u3001\u7ED3\u8BED</h2><p>\u901A\u8FC7 docker compose \u4E00\u7AD9\u5F0F\u90E8\u7F72 Prometheus + Grafana \u53CA\u5404\u7C7B exporter\uFF0C\u53EF\u4EE5\u6781\u5927\u63D0\u5347\u670D\u52A1\u7684\u53EF\u89C2\u6D4B\u6027\u548C\u8FD0\u7EF4\u6548\u7387\u3002\u65E0\u8BBA\u662F\u5355\u673A\u5B9E\u9A8C\u8FD8\u662F\u751F\u4EA7\u73AF\u5883\u5165\u95E8\uFF0C\u8FD9\u5957\u65B9\u6848\u90FD\u503C\u5F97\u63A8\u8350\u3002</p><p>\u5982\u679C\u4F60\u6709\u66F4\u4E30\u5BCC\u7684 exporter \u7EC4\u5408\u6216\u8005\u4EEA\u8868\u76D8\u6A21\u677F\u63A8\u8350\uFF0C\u6B22\u8FCE\u7559\u8A00\u4EA4\u6D41\uFF01</p><hr><blockquote><p>\u53C2\u8003\u8D44\u6599\uFF1A</p><ul><li><a href="https://prometheus.io/docs/" target="_blank" rel="noopener noreferrer">Prometheus \u5B98\u65B9\u6587\u6863</a></li><li><a href="https://grafana.com/docs/" target="_blank" rel="noopener noreferrer">Grafana \u5B98\u65B9\u6587\u6863</a></li><li><a href="https://github.com/prometheus/docs/blob/main/content/docs/instrumenting/exporters.md" target="_blank" rel="noopener noreferrer">Awesome Prometheus Exporters</a></li></ul></blockquote>',37),l=[u];function r(i,k){return s(),a("div",null,l)}var g=n(c,[["render",r],["__file","index.html.vue"]]);export{g as default};
