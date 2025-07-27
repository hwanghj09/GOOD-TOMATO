# 네트워킹

Linux 시스템에서 네트워크를 설정하고 관리하는 것은 서버 운영 및 문제 해결에 필수적인 기술입니다. 이 문서에서는 Linux 네트워킹의 기본 개념과 주요 명령어들을 다룹니다.

## 1. 네트워크 인터페이스 확인

### `ip a` 또는 `ip addr show` (IP Address)
시스템의 네트워크 인터페이스와 할당된 IP 주소 정보를 보여줍니다.
- `lo`: 루프백(Loopback) 인터페이스. 자기 자신을 가리키는 가상 인터페이스로, 주로 시스템 내부 통신에 사용됩니다. (IP: 127.0.0.1)
- `eth0`, `enpXsY`, `ensX`: 이더넷(Ethernet) 인터페이스. 유선 네트워크 카드입니다.
- `wlan0`, `wlpXsY`: 무선 LAN(Wireless LAN) 인터페이스. Wi-Fi 카드입니다.
- **예시**: `ip a` 명령어를 실행하면 다음과 유사한 출력을 볼 수 있습니다.
```
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether 00:11:22:33:44:55 brd ff:ff:ff:ff:ff:ff
    inet 192.168.1.100/24 brd 192.168.1.255 scope global dynamic eth0
       valid_lft 86399sec preferred_lft 86399sec
```

### `ifconfig` (Interface Configuration) - (Deprecated, but still widely used)
`ip` 명령어가 나오기 전부터 사용되던 명령어입니다. `ip a`와 유사하게 네트워크 인터페이스 정보를 보여줍니다.
- `ifconfig`: 모든 활성 인터페이스 정보를 보여줍니다.
- **예시**: `ifconfig` 명령어를 실행하면 다음과 유사한 출력을 볼 수 있습니다.
```
eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.1.100  netmask 255.255.255.0  broadcast 192.168.1.255
        ether 00:11:22:33:44:55  txqueuelen 1000  (Ethernet)
        RX packets 12345  bytes 1234567 (1.2 MB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 54321  bytes 7654321 (7.6 MB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        loop  txqueuelen 1000  (Local Loopback)
        RX packets 10  bytes 620 (620.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 10  bytes 620 (620.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```
- `ifconfig eth0`: 특정 인터페이스(eth0)의 정보만 보여줍니다.

## 2. 네트워크 연결 테스트

### `ping` (Packet Internet Groper)
네트워크 호스트의 도달 가능성을 테스트하고, 패킷 손실률 및 왕복 시간을 측정합니다.
- `ping [IP 주소 또는 도메인명]`: 지정된 호스트로 ICMP 에코 요청을 보냅니다.
- **예시**: `ping google.com` (google.com으로 지속적으로 ping을 보냄, `Ctrl+C`로 중지)
```
PING google.com (142.250.199.142) 56(84) bytes of data.
64 bytes from sea09s01-in-f14.1e100.net (142.250.199.142): icmp_seq=1 ttl=117 time=12.3 ms
64 bytes from sea09s01-in-f14.1e100.net (142.250.199.142): icmp_seq=2 ttl=117 time=12.5 ms
```
- `ping -c 4 google.com`: google.com으로 4개의 패킷만 보냅니다.

### `traceroute` / `tracert`
패킷이 목적지에 도달하기까지 거치는 네트워크 경로(홉)를 추적합니다.
- `traceroute [IP 주소 또는 도메인명]` (Linux)
- **예시**: `traceroute google.com` (google.com까지의 네트워크 경로 추적)
- `tracert [IP 주소 또는 도메인명]` (Windows)

### `netstat` (Network Statistics) - (Deprecated, use `ss` instead)
네트워크 연결, 라우팅 테이블, 인터페이스 통계 등을 보여줍니다.
- `netstat -tuln`: 현재 열려있는 TCP/UDP 포트와 리스닝 상태를 보여줍니다.
    - `t`: TCP 연결
    - `u`: UDP 연결
    - `l`: 리스닝 상태 (Listening)
    - `n`: 호스트명 대신 IP 주소와 포트 번호로 표시 (숫자 형식)
- **예시**: `netstat -tuln` (현재 시스템에서 열려있는 포트 확인)
```
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN
tcp        0      0 127.0.0.1:631           0.0.0.0:*               LISTEN
tcp6       0      0 :::80                   :::*                    LISTEN
udp        0      0 0.0.0.0:68              0.0.0.0:* 
```
- `netstat -r`: 라우팅 테이블을 보여줍니다.

### `ss` (Socket Statistics)
`netstat`의 현대적인 대안으로, 더 빠르고 효율적으로 소켓 정보를 보여줍니다.
- `ss -tuln`: `netstat -tuln`과 동일한 정보를 보여줍니다.
- **예시**: `ss -tuln` (현재 시스템에서 열려있는 포트 확인)

## 3. DNS (Domain Name System) 관련 명령어

### `nslookup` (Name Server Lookup)
도메인 이름에 대한 IP 주소를 조회하거나, IP 주소에 대한 도메인 이름을 조회합니다.
- `nslookup google.com`: google.com의 IP 주소를 조회합니다.
- **예시**: `nslookup google.com`
```
Server:         127.0.0.53
Address:        127.0.0.53#53

Non-authoritative answer:
Name:   google.com
Address: 142.250.199.142
```
- `nslookup 8.8.8.8`: 8.8.8.8 IP 주소의 도메인 이름을 조회합니다.

### `dig` (Domain Information Groper)
DNS 서버에 직접 쿼리하여 도메인 정보를 상세하게 조회합니다. `nslookup`보다 더 많은 정보를 제공합니다.
- `dig google.com`: google.com에 대한 DNS 정보를 조회합니다.
- **예시**: `dig google.com` (google.com에 대한 상세 DNS 정보 확인)

## 4. 네트워크 설정 파일

Linux에서 네트워크 설정은 주로 `/etc` 디렉토리 아래의 파일들에 저장됩니다. 배포판마다 설정 파일의 위치와 형식이 다를 수 있습니다.

### `/etc/network/interfaces` (Debian/Ubuntu)
네트워크 인터페이스의 정적 IP 주소, DHCP 설정 등을 정의합니다.
- **예시**: 정적 IP 주소 설정
```
auto eth0
iface eth0 inet static
    address 192.168.1.100
    netmask 255.255.255.0
    gateway 192.168.1.1
    dns-nameservers 8.8.8.8 8.8.4.4
```

### `/etc/sysconfig/network-scripts/ifcfg-eth0` (CentOS/RHEL)
각 네트워크 인터페이스(`ifcfg-eth0`, `ifcfg-ens33` 등)의 설정을 담고 있습니다.
- **예시**: DHCP 설정
```
TYPE=Ethernet
BOOTPROTO=dhcp
DEFROUTE=yes
PEERDNS=yes
PEERROUTES=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTE=yes
IPV6_PEERDNS=yes
IPV6_PEERROUTES=yes
IPV6_FAILURE_FATAL=no
NAME=eth0
UUID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
DEVICE=eth0
ONBOOT=yes
```

### `/etc/resolv.conf`
DNS 서버의 IP 주소를 설정합니다. 시스템이 도메인 이름을 IP 주소로 변환할 때 이 파일을 참조합니다.
- `nameserver 8.8.8.8`
- `nameserver 8.8.4.4`
- **예시**: `cat /etc/resolv.conf`
```
nameserver 8.8.8.8
nameserver 8.8.4.4
```

### `/etc/hosts`
로컬 호스트명과 IP 주소 매핑을 정의합니다. DNS 서버보다 우선적으로 참조됩니다.
- `127.0.0.1 localhost`
- `192.168.1.100 mywebserver`
- **예시**: `cat /etc/hosts`
```
127.0.0.1       localhost
127.0.1.1       myhostname
192.168.1.10    myserver.local myserver
```

## 5. 네트워크 서비스 관리

네트워크 관련 서비스(예: 웹 서버, SSH 서버)는 시스템의 서비스 관리 도구를 통해 시작, 중지, 재시작할 수 있습니다.

### `systemctl` (Systemd)
최신 Linux 배포판에서 서비스 관리에 사용되는 표준 도구입니다.
- `sudo systemctl start [서비스명]`: 서비스 시작
- **예시**: `sudo systemctl start apache2` (Apache 웹 서버 시작)
- `sudo systemctl stop [서비스명]`: 서비스 중지
- **예시**: `sudo systemctl stop apache2` (Apache 웹 서버 중지)
- `sudo systemctl restart [서비스명]`: 서비스 재시작
- **예시**: `sudo systemctl restart apache2` (Apache 웹 서버 재시작)
- `sudo systemctl enable [서비스명]`: 시스템 부팅 시 서비스 자동 시작 설정
- **예시**: `sudo systemctl enable apache2` (부팅 시 Apache 자동 시작)
- `sudo systemctl disable [서비스명]`: 시스템 부팅 시 서비스 자동 시작 해제
- **예시**: `sudo systemctl disable apache2` (부팅 시 Apache 자동 시작 해제)
- `sudo systemctl status [서비스명]`: 서비스 상태 확인
- **예시**: `sudo systemctl status apache2` (Apache 웹 서버 상태 확인)

### `service` (SysVinit/Upstart) - (Older systems)
이전 시스템에서 사용되던 서비스 관리 명령어입니다.
- `sudo service [서비스명] start`
- `sudo service [서비스명] stop`
- `sudo service [서비스명] restart`
- `sudo service [서비스명] status`

네트워킹은 Linux 시스템 관리의 핵심 부분입니다. 위에서 설명한 명령어와 설정 파일들을 이해하고 활용하는 것은 네트워크 문제 해결 및 서비스 운영에 큰 도움이 될 것입니다.
[AD]