# 방화벽

방화벽은 네트워크 보안의 핵심 요소로, 미리 정의된 규칙에 따라 네트워크 트래픽을 허용하거나 차단하여 시스템을 보호합니다. Linux에서는 다양한 방화벽 도구가 사용됩니다.

## 1. 방화벽의 기본 개념

- **패킷 필터링**: 네트워크를 통해 들어오고 나가는 데이터 패킷을 검사하여 허용 여부를 결정합니다.
- **규칙 기반**: 특정 IP 주소, 포트 번호, 프로토콜 등을 기준으로 규칙을 설정합니다.
- **기본 정책**: 일반적으로 모든 인바운드(Inbound) 트래픽은 기본적으로 차단하고, 아웃바운드(Outbound) 트래픽은 허용하는 정책을 사용합니다.

## 2. 주요 방화벽 도구

Linux에서 가장 널리 사용되는 방화벽 도구는 `iptables`와 `firewalld`입니다.

### 1) `iptables`

`iptables`는 Linux 커널의 Netfilter 프레임워크를 제어하는 사용자 공간 도구입니다. 매우 강력하고 유연하지만, 규칙 설정이 복잡할 수 있습니다.

- **테이블 (Tables)**:
    - `filter`: 패킷 필터링 (가장 일반적)
    - `nat`: 네트워크 주소 변환 (NAT)
    - `mangle`: 패킷 헤더 수정
    - `raw`: 상태 추적 비활성화

- **체인 (Chains)**:
    - `INPUT`: 시스템으로 들어오는 패킷
    - `OUTPUT`: 시스템에서 나가는 패킷
    - `FORWARD`: 시스템을 통과하는 패킷 (라우터 역할 시)
    - `PREROUTING`: 라우팅 결정 전 패킷 처리 (NAT)
    - `POSTROUTING`: 라우팅 결정 후 패킷 처리 (NAT)

- **기본 정책 설정**:
    `sudo iptables -P INPUT DROP` (모든 인바운드 트래픽 차단)
    - **예시**: `sudo iptables -P INPUT DROP` (기본적으로 들어오는 모든 연결 차단)
    `sudo iptables -P FORWARD DROP`
    `sudo iptables -P OUTPUT ACCEPT` (모든 아웃바운드 트래픽 허용)

- **규칙 추가/삭제**:
    - `sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT`: TCP 22번 포트(SSH) 인바운드 허용
    - **예시**: `sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT` (웹 서버 포트 80번 허용)
    - `sudo iptables -A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT`: 이미 설정된 연결 허용
    - **예시**: `sudo iptables -A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT` (기존 연결에 대한 응답 허용)
    - `sudo iptables -D INPUT -p tcp --dport 22 -j ACCEPT`: 규칙 삭제 (정확히 일치해야 함)
    - **예시**: `sudo iptables -D INPUT -p tcp --dport 80 -j ACCEPT` (80번 포트 허용 규칙 삭제)
    - `sudo iptables -F`: 모든 규칙 삭제 (플러시)
    - **예시**: `sudo iptables -F` (모든 방화벽 규칙 초기화)
    - `sudo iptables -L -n -v`: 현재 규칙 목록 확인 (숫자 형식, 상세 정보)
    - **예시**: `sudo iptables -L -n -v` (현재 설정된 iptables 규칙 상세 보기)

- **규칙 저장 및 로드**:
    `iptables` 규칙은 재부팅 시 사라지므로, 저장하고 로드해야 합니다.
    - `sudo apt install iptables-persistent` (Debian/Ubuntu)
    - `sudo service netfilter-persistent save`
    - **예시**: `sudo service netfilter-persistent save` (현재 iptables 규칙 저장)
    - `sudo service netfilter-persistent reload`
    - **예시**: `sudo service netfilter-persistent reload` (저장된 iptables 규칙 로드)

### 2) `firewalld`

`firewalld`는 `iptables`의 복잡성을 추상화하여 더 쉽게 방화벽을 관리할 수 있도록 하는 동적 방화벽 관리 서비스입니다. CentOS/RHEL 7+ 및 Fedora에서 기본으로 사용됩니다.

- **영역 (Zones)**: 네트워크 연결을 신뢰 수준에 따라 분류합니다. (예: `public`, `internal`, `trusted`, `home` 등) 각 영역에는 고유한 규칙 집합이 있습니다.
- **서비스 (Services)**: 미리 정의된 서비스(ssh, http, https 등)를 사용하여 포트 번호를 직접 지정할 필요 없이 규칙을 추가할 수 있습니다.

- **`firewalld` 명령어**:
    - `sudo systemctl start firewalld`: `firewalld` 서비스 시작
    - **예시**: `sudo systemctl start firewalld` (firewalld 서비스 시작)
    - `sudo systemctl enable firewalld`: 부팅 시 자동 시작 설정
    - **예시**: `sudo systemctl enable firewalld` (시스템 부팅 시 firewalld 자동 시작)
    - `sudo systemctl status firewalld`: 서비스 상태 확인
    - **예시**: `sudo systemctl status firewalld` (firewalld 서비스 상태 확인)
    - `sudo firewall-cmd --state`: `firewalld` 상태 확인
    - **예시**: `sudo firewall-cmd --state` (firewalld가 실행 중인지 확인)
    - `sudo firewall-cmd --get-active-zones`: 활성화된 영역 확인
    - **예시**: `sudo firewall-cmd --get-active-zones` (현재 활성화된 방화벽 영역 확인)
    - `sudo firewall-cmd --list-all --zone=public`: `public` 영역의 모든 규칙 확인
    - **예시**: `sudo firewall-cmd --list-all --zone=public` (public 영역에 설정된 모든 규칙 확인)

- **서비스 허용**:
    - `sudo firewall-cmd --zone=public --add-service=ssh --permanent`: `public` 영역에 SSH 서비스 영구적으로 허용
    - **예시**: `sudo firewall-cmd --zone=public --add-service=http --permanent` (public 영역에 HTTP 서비스 영구적으로 허용)
    - `sudo firewall-cmd --reload`: 변경된 규칙 적용 (서비스 재시작 없이)
    - **예시**: `sudo firewall-cmd --reload` (방화벽 규칙 변경 사항 적용)

- **포트 허용**:
    - `sudo firewall-cmd --zone=public --add-port=8080/tcp --permanent`: `public` 영역에 TCP 8080 포트 영구적으로 허용
    - **예시**: `sudo firewall-cmd --zone=public --add-port=3306/tcp --permanent` (public 영역에 MySQL 기본 포트 3306/tcp 허용)

- **포트 포워딩**:
    - `sudo firewall-cmd --zone=public --add-forward-port=port=80:proto=tcp:toport=8080 --permanent`: 80번 포트로 들어오는 트래픽을 8080번 포트로 포워딩
    - **예시**: `sudo firewall-cmd --zone=public --add-forward-port=port=443:proto=tcp:toport=8443 --permanent` (443번 포트 트래픽을 8443번 포트로 포워딩)

- **IP 주소 차단**:
    - `sudo firewall-cmd --zone=public --add-rich-rule='rule family="ipv4" source address="192.168.1.10" reject' --permanent`: 특정 IP 주소에서 오는 트래픽 차단
    - **예시**: `sudo firewall-cmd --zone=public --add-rich-rule='rule family="ipv4" source address="192.168.1.20" drop' --permanent` (192.168.1.20 IP 주소에서 오는 모든 트래픽 차단)

## 3. UFW (Uncomplicated Firewall)

UFW는 `iptables`를 더 쉽게 사용할 수 있도록 만든 Ubuntu/Debian 계열의 방화벽 관리 도구입니다.

- **설치**: `sudo apt install ufw`
- **활성화**: `sudo ufw enable`
    - **예시**: `sudo ufw enable` (UFW 방화벽 활성화)
- **비활성화**: `sudo ufw disable`
    - **예시**: `sudo ufw disable` (UFW 방화벽 비활성화)
- **상태 확인**: `sudo ufw status`
    - **예시**: `sudo ufw status` (UFW 방화벽 상태 및 규칙 확인)

- **규칙 추가**:
    - `sudo ufw allow ssh`: SSH 서비스 허용 (기본 22번 포트)
    - **예시**: `sudo ufw allow 22/tcp` (TCP 22번 포트 허용)
    - `sudo ufw allow http`: HTTP 서비스 허용 (기본 80번 포트)
    - **예시**: `sudo ufw allow 80/tcp` (TCP 80번 포트 허용)
    - `sudo ufw allow 8080/tcp`: TCP 8080 포트 허용
    - **예시**: `sudo ufw allow 8080` (TCP 8080 포트 허용, 기본적으로 TCP)
    - `sudo ufw allow from 192.168.1.10 to any port 22`: 특정 IP에서 SSH 접속 허용
    - **예시**: `sudo ufw allow from 192.168.1.0/24 to any port 22` (특정 서브넷에서 SSH 접속 허용)

- **규칙 삭제**:
    - `sudo ufw delete allow ssh`
    - **예시**: `sudo ufw delete allow 22/tcp` (TCP 22번 포트 허용 규칙 삭제)

방화벽 설정은 시스템 보안에 매우 중요합니다. 사용하는 Linux 배포판에 맞는 방화벽 도구를 선택하고, 필요한 서비스만 허용하며 불필요한 접근은 차단하는 정책을 수립해야 합니다.
[AD]