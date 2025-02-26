#!/bin/bash
set -euo pipefail

# 定义颜色代码
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NC='\033[0m' # 恢复默认颜色

show_help() {
    echo -e "${GREEN}用法: $0 <域名> [模式]"
    echo "可选模式:"
    echo "  --issue   仅生成TXT记录（申请证书）"
    echo "  --auth    仅进行验证并获取证书"
    echo "  不指定模式则执行完整流程"
    echo -e "示例:${NC}"
    echo "  $0 example.com           # 完整流程"
    echo "  $0 example.com --issue   # 仅申请证书"
    echo "  $0 example.com --auth    # 仅验证证书"
}

# 检查参数
if [ "$#" -lt 1 ] || [ "$1" == "-h" ] || [ "$1" == "--help" ]; then
    show_help
    exit 0
fi

DOMAIN="$1"
MODE="${2:-full}"
ACME_DIR="$HOME/.acme.sh"
ACME_SCRIPT="$ACME_DIR/acme.sh"
ACME_DOMAIN_DIR="$ACME_DIR/$DOMAIN"

# 基本域名验证
validate_domain() {
    if [[ ! "$DOMAIN" =~ ^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$ ]]; then
        echo -e "${RED}错误：域名格式无效！${NC}"
        exit 1
    fi
}

# 安装acme.sh
install_acme() {
    if [ ! -f "$ACME_SCRIPT" ]; then
        echo -e "${YELLOW}正在安装acme.sh...${NC}"
        curl https://get.acme.sh | sh || {
            echo -e "${RED}acme.sh安装失败！${NC}"
            exit 1
        }
    fi
}

# 注册账户
register_account() {
    if [ ! -f "$ACME_DIR/account.conf" ]; then
        echo -e "${YELLOW}注册ACME账户...${NC}"
        "$ACME_SCRIPT" --register-account -m "yaooort@163.com"
    fi
}

# 提取TXT记录信息
extract_txt_record() {
    echo -e "${YELLOW}正在申请证书...${NC}"
    local output
    output=$("$ACME_SCRIPT" --issue -d "$DOMAIN" --dns --yes-I-know-dns-manual-mode-enough-go-ahead-please 2>&1)
    
    # 解析TXT记录
    TXT_NAME=$(echo "$output" | grep -oP "_acme-challenge\.$DOMAIN")
    TXT_VALUE=$(echo "$output" | grep -oP "TXT value: '\K[^']+")

    if [ -z "$TXT_NAME" ] || [ -z "$TXT_VALUE" ]; then
        echo -e "${RED}无法提取TXT记录，请检查输出：${NC}"
        echo "$output"
        exit 1
    fi

    echo -e "${GREEN}========================================"
    echo "请为域名添加以下DNS TXT记录："
    echo "记录名称: $TXT_NAME"
    echo "记录值:   $TXT_VALUE"
    echo -e "========================================${NC}"
}

# 验证DNS记录
verify_dns() {
    local attempts=10
    local wait_seconds=30

    echo -e "${YELLOW}正在等待DNS记录生效...${NC}"
    for ((i=1; i<=attempts; i++)); do
        echo "尝试 #$i/$attempts..."
        local dns_value
        dns_value=$(dig +short TXT "$TXT_NAME" | tr -d '"')
        
        if [ "$dns_value" == "$TXT_VALUE" ]; then
            echo -e "${GREEN}DNS记录验证成功！${NC}"
            return 0
        fi
        
        if [ $i -ne $attempts ]; then
            sleep $wait_seconds
        fi
    done

    echo -e "${RED}错误：DNS记录未生效，请检查DNS配置！${NC}"
    exit 1
}

# 执行完整流程
full_flow() {
    validate_domain
    install_acme
    register_account
    extract_txt_record
    
    echo -e "${YELLOW}请将上述TXT记录添加到DNS配置后继续...${NC}"
    read -r -p "是否已完成DNS配置？(y/N): " answer
    
    if [[ ! "$answer" =~ ^[Yy]$ ]]; then
        echo -e "${RED}操作已取消${NC}"
        exit 1
    fi

    verify_dns
    
    echo -e "${YELLOW}正在颁发证书...${NC}"
    "$ACME_SCRIPT" --renew -d "$DOMAIN"
    
    show_success
}

# 仅申请模式
issue_mode() {
    validate_domain
    install_acme
    register_account
    extract_txt_record
    echo -e "${GREEN}请手动添加上述DNS记录后使用 --auth 模式完成验证${NC}"
}

# 仅验证模式
auth_mode() {
    if [ ! -d "$ACME_DOMAIN_DIR" ]; then
        echo -e "${RED}错误：找不到域名配置，请先执行 --issue 模式${NC}"
        exit 1
    fi
    
    extract_txt_record  # 需要重新获取TXT记录用于验证
    verify_dns
    
    echo -e "${YELLOW}正在颁发证书...${NC}"
    "$ACME_SCRIPT" --renew -d "$DOMAIN"
    
    show_success
}

show_success() {
    echo -e "${GREEN}========================================"
    echo "证书申请成功！"
    echo "证书文件位置:"
    echo "  证书文件: $ACME_DOMAIN_DIR/$DOMAIN.cer"
    echo "  私钥文件: $ACME_DOMAIN_DIR/$DOMAIN.key"
    echo "  完整链文件: $ACME_DOMAIN_DIR/fullchain.cer"
    echo -e "========================================${NC}"
}

# 主程序流程
case "$MODE" in
    --issue)
        issue_mode
        ;;
    --auth)
        auth_mode
        ;;
    full)
        full_flow
        ;;
    *)
        echo -e "${RED}错误：未知模式 '$MODE'${NC}"
        show_help
        exit 1
        ;;
esac