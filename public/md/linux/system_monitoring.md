# 시스템 모니터링

Linux 시스템을 안정적으로 운영하기 위해서는 시스템의 자원 사용량(CPU, 메모리, 디스크, 네트워크)을 지속적으로 모니터링하고, 문제가 발생했을 때 원인을 파악하는 것이 중요합니다.

## 1. CPU 모니터링

### `top` / `htop`
실시간으로 CPU 사용률, 로드 에버리지, 각 프로세스의 CPU 점유율 등을 보여줍니다.
- `top`: 기본적으로 CPU 사용률이 높은 순서로 프로세스를 정렬합니다.
    - **예시**: `top` (실시간 CPU 및 프로세스 모니터링)
- `htop`: `top`보다 시각적으로 더 풍부하고 사용자 친화적인 인터페이스를 제공합니다. (설치 필요)
    - **예시**: `htop` (설시간 CPU 및 프로세스 모니터링, 시각적)

### `mpstat` (Multi-Processor Statistics)
CPU별 사용률을 상세하게 보여줍니다. `sysstat` 패키지의 일부입니다.
- `sudo apt install sysstat` (Debian/Ubuntu)
- `sudo dnf install sysstat` (CentOS/RHEL)
- `mpstat -P ALL`: 모든 CPU 코어의 사용률을 보여줍니다.
    - **예시**: `mpstat -P ALL` (모든 CPU 코어의 현재 사용률 확인)
- `mpstat 1 5`: 1초 간격으로 5번 CPU 사용률을 업데이트합니다.
    - **예시**: `mpstat 1 5` (1초 간격으로 5번 CPU 사용률 업데이트)

### `vmstat` (Virtual Memory Statistics)
프로세스, 메모리, 페이징, 블록 I/O, CPU 활동에 대한 정보를 보고합니다.
- `vmstat 1`: 1초 간격으로 지속적으로 업데이트합니다.
    - **예시**: `vmstat 1` (1초마다 시스템 통계 업데이트)

## 2. 메모리 모니터링

### `free`
시스템의 물리 메모리 및 스왑 메모리 사용량을 보여줍니다.
- `free -h`: 사람이 읽기 쉬운 형식(KB, MB, GB)으로 메모리 사용량을 보여줍니다.
    - `total`: 전체 메모리
    - `used`: 사용 중인 메모리
    - `free`: 사용 가능한 메모리
    - `shared`: 여러 프로세스가 공유하는 메모리
    - `buff/cache`: 버퍼 및 캐시로 사용되는 메모리
    - `available`: 실제 사용 가능한 메모리 (버퍼/캐시 포함)
    - **예시**: `free -h` (현재 메모리 사용량 확인)
```
              total        used        free      shared  buff/cache   available
Mem:           7.7G        3.2G        1.5G        300M        3.0G        4.0G
Swap:          2.0G        0B          2.0G
```

### `top` / `htop`
각 프로세스의 메모리 사용량(`%MEM`, `VSZ`, `RSS`)을 확인할 수 있습니다.

## 3. 디스크 모니터링

### `df` (disk free)
파일 시스템의 디스크 공간 사용량을 보고합니다.
- `df -h`: 사람이 읽기 쉬운 형식으로 각 마운트된 파일 시스템의 사용량을 보여줍니다.
    - **예시**: `df -h` (디스크 공간 사용량 확인)
```
Filesystem      Size  Used Avail Use% Mounted on
/dev/sda1        50G   10G   38G  21% /
tmpfs           3.9G     0  3.9G   0% /dev/shm
/dev/sdb1       100G   50G   50G  50% /data
```

### `du` (disk usage)
파일 또는 디렉토리의 디스크 사용량을 보고합니다.
- `du -sh [경로]`: 지정된 경로의 총 크기를 사람이 읽기 쉬운 형식으로 보여줍니다.
    - **예시**: `du -sh /var/log` (`/var/log` 디렉토리의 총 크기 확인)
- `du -ah --max-depth=1 [경로]`: 지정된 경로의 하위 디렉토리별 크기를 보여줍니다.
    - **예시**: `du -ah --max-depth=1 /home/user` (`/home/user` 하위 디렉토리별 크기 확인)

### `iostat` (Input/Output Statistics)
CPU 사용률 및 장치 I/O 통계를 보고합니다. `sysstat` 패키지의 일부입니다.
- `iostat -x 1`: 1초 간격으로 장치별 상세 I/O 통계를 보여줍니다.
    - **예시**: `iostat -x 1` (1초마다 디스크 I/O 통계 업데이트)

## 4. 네트워크 모니터링

### `netstat` / `ss`
네트워크 연결, 라우팅 테이블, 인터페이스 통계 등을 보여줍니다.
- `netstat -tuln`: 현재 열려있는 TCP/UDP 포트와 리스닝 상태를 보여줍니다.
    - **예시**: `netstat -tuln` (현재 열려있는 포트 확인)
- `ss -tuln`: `netstat`의 현대적인 대안으로 동일한 정보를 제공합니다.
    - **예시**: `ss -tuln` (현재 열려있는 포트 확인)
- `netstat -s`: 네트워크 프로토콜별 통계를 보여줍니다.
    - **예시**: `netstat -s` (네트워크 프로토콜 통계 확인)

### `iftop`
네트워크 인터페이스별 실시간 대역폭 사용량을 보여줍니다. (설치 필요)
- `sudo apt install iftop`
- `sudo dnf install iftop`
- `sudo iftop -i [인터페이스명]`: 특정 인터페이스의 대역폭 사용량을 모니터링합니다.
    - **예시**: `sudo iftop -i eth0` (eth0 인터페이스의 실시간 트래픽 모니터링)

### `nload`
네트워크 트래픽을 시각적으로 보여주는 도구입니다. (설치 필요)
- `sudo apt install nload`
- `sudo dnf install nload`
- `nload`: 실시간 네트워크 트래픽을 그래프로 보여줍니다.
    - **예시**: `nload` (실시간 네트워크 트래픽 그래프 확인)

## 5. 로그 파일 모니터링

시스템 및 애플리케이션 로그 파일은 문제 해결의 핵심 정보원입니다. 로그 파일은 주로 `/var/log` 디렉토리에 저장됩니다.

### `tail -f`
로그 파일의 내용이 추가될 때마다 실시간으로 출력합니다.
- `tail -f /var/log/syslog`: 시스템 로그를 실시간으로 모니터링합니다.
- `tail -f /var/log/auth.log`: 인증 관련 로그를 모니터링합니다.
- `tail -f /var/log/apache2/access.log`: Apache 웹 서버 접근 로그를 모니터링합니다.
    - **예시**: `tail -f /var/log/syslog` (시스템 로그 실시간 확인)

### `journalctl` (Systemd Journal)
Systemd를 사용하는 시스템에서 통합된 로그 관리 도구입니다.
- `journalctl`: 모든 시스템 로그를 보여줍니다.
    - **예시**: `journalctl` (모든 시스템 로그 출력)
- `journalctl -f`: 실시간으로 로그를 모니터링합니다.
    - **예시**: `journalctl -f` (실시간 로그 모니터링)
- `journalctl -u [서비스명]`: 특정 서비스의 로그만 보여줍니다. (예: `journalctl -u nginx`)
    - **예시**: `journalctl -u sshd` (SSH 서비스 로그 확인)
- `journalctl --since "2023-01-01 00:00:00"`: 특정 시간 이후의 로그를 보여줍니다.
    - **예시**: `journalctl --since "2 hours ago"` (2시간 전부터의 로그 확인)

## 6. 시스템 정보 확인

### `uname`
시스템 정보를 출력합니다.
- `uname -a`: 모든 시스템 정보를 출력합니다. (커널 이름, 호스트명, 커널 버전, 아키텍처 등)
    - **예시**: `uname -a` (시스템 정보 확인)
```
Linux myhostname 5.15.0-76-generic #83-Ubuntu SMP Mon Jun 19 16:32:06 UTC 2023 x86_64 x86_64 x86_64 GNU/Linux
```

### `hostname`
시스템의 호스트명을 출력하거나 설정합니다.
    - **예시**: `hostname` (현재 호스트명 확인)

### `uptime`
시스템이 얼마나 오랫동안 실행되었는지, 현재 시간, 로그인 사용자 수, 로드 에버리지를 보여줍니다.
    - **예시**: `uptime` (시스템 가동 시간 및 로드 에버리지 확인)
```
 10:30:00 up 2 days, 15:30,  1 user,  load average: 0.00, 0.01, 0.05
```

### `dmesg`
커널 메시지 버퍼의 내용을 출력합니다. 부팅 시 발생하는 메시지나 하드웨어 관련 오류를 확인할 때 유용합니다.
    - **예시**: `dmesg | grep -i error` (커널 메시지에서 'error' 키워드 검색)

시스템 모니터링은 Linux 시스템 관리자의 중요한 역할 중 하나입니다. 다양한 도구들을 활용하여 시스템의 상태를 파악하고, 잠재적인 문제를 미리 감지하여 안정적인 서비스를 제공할 수 있습니다.
[AD]