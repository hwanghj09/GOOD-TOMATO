# 파일 시스템

## 1. Linux 파일 시스템의 구조

Linux 파일 시스템은 단일 계층 구조를 가집니다. 모든 파일과 디렉토리는 `/` (루트 디렉토리) 아래에 계층적으로 구성됩니다. Windows의 드라이브 문자(C:, D:)와 달리, Linux에서는 모든 장치(하드 디스크, USB 등)가 특정 디렉토리에 마운트되어 파일 시스템의 일부가 됩니다.

### 주요 디렉토리 구조

- `/`: 루트 디렉토리. 모든 파일 시스템의 최상위입니다.
- `/bin`: (binary) 필수 사용자 명령어가 저장됩니다. (예: `ls`, `cp`, `mv`)
- `/sbin`: (system binary) 시스템 관리 명령어가 저장됩니다. 일반 사용자는 접근이 제한될 수 있습니다. (예: `fdisk`, `ifconfig`)
- `/etc`: (editable text configuration) 시스템 전체의 설정 파일이 저장됩니다. (예: `passwd`, `fstab`)
- `/home`: 일반 사용자들의 홈 디렉토리입니다. 각 사용자마다 자신의 홈 디렉토리(`~/`)를 가집니다. (예: `/home/user1`, `/home/user2`)
- `/root`: root 사용자의 홈 디렉토리입니다.
- `/dev`: (device) 장치 파일이 저장됩니다. 하드웨어 장치(디스크, 터미널 등)를 파일처럼 다룹니다. (예: `/dev/sda`, `/dev/tty`)
- `/proc`: (process) 실행 중인 프로세스 및 시스템 정보에 대한 가상 파일 시스템입니다. 실제 파일이 아닌 커널 정보에 대한 인터페이스입니다.
- `/sys`: (system) `/proc`과 유사하게 시스템 하드웨어에 대한 정보를 제공하는 가상 파일 시스템입니다.
- `/tmp`: (temporary) 임시 파일이 저장되는 디렉토리입니다. 시스템 재부팅 시 내용이 삭제될 수 있습니다.
- `/usr`: (Unix System Resources) 사용자 프로그램 및 라이브러리가 저장됩니다.
    - `/usr/bin`: 대부분의 사용자 실행 파일
    - `/usr/sbin`: 시스템 관리 실행 파일
    - `/usr/local`: 로컬에서 컴파일된 프로그램 설치 경로
    - `/usr/share`: 아키텍처 독립적인 공유 데이터 (문서, 아이콘 등)
- `/var`: (variable) 시스템 운영 중에 내용이 자주 변경되는 파일(로그, 스풀, 캐시 등)이 저장됩니다.
    - `/var/log`: 시스템 로그 파일
    - `/var/www`: 웹 서버의 기본 문서 루트 (Apache, Nginx 등)
- `/opt`: (optional) 추가적인 소프트웨어 패키지가 설치되는 디렉토리입니다.
- `/mnt`: (mount) 임시 마운트 지점으로 사용됩니다. (예: USB 드라이브)
- `/media`: 이동식 미디어(CD-ROM, USB 드라이브 등)가 자동으로 마운트되는 지점입니다.
- `/boot`: 부팅 관련 파일(커널, GRUB 설정 등)이 저장됩니다.
- `/lib`: (library) 필수 라이브러리 파일이 저장됩니다.
- `/lib64`: 64비트 시스템의 라이브러리 파일입니다.

## 2. 파일 경로

Linux에서 파일 경로는 절대 경로와 상대 경로로 구분됩니다.

### 절대 경로 (Absolute Path)
루트 디렉토리(`/`)부터 시작하여 파일 또는 디렉토리의 전체 경로를 나타냅니다.
- 예: `/home/user/documents/report.txt`

### 상대 경로 (Relative Path)
현재 작업 중인 디렉토리를 기준으로 파일 또는 디렉토리의 경로를 나타냅니다.
- `.` (점 하나): 현재 디렉토리
- `..` (점 두 개): 상위 디렉토리
- 예: 현재 디렉토리가 `/home/user`일 때, `documents/report.txt`는 `/home/user/documents/report.txt`를 의미합니다.
- 예: 현재 디렉토리가 `/home/user/documents`일 때, `../pictures/photo.jpg`는 `/home/user/pictures/photo.jpg`를 의미합니다.

## 3. 파일 시스템 관련 명령어

### `mount`
파일 시스템을 특정 디렉토리(마운트 포인트)에 연결합니다.
- `mount /dev/sdb1 /mnt/usb`: `/dev/sdb1` 장치를 `/mnt/usb` 디렉토리에 마운트합니다.
    - **예시**: `sudo mount /dev/sdb1 /mnt/myusb` (USB 드라이브를 `/mnt/myusb`에 마운트)
- `mount`: 현재 마운트된 모든 파일 시스템을 출력합니다.
    - **예시**: `mount` (현재 시스템에 마운트된 파일 시스템 목록 확인)

### `umount`
마운트된 파일 시스템을 해제합니다.
- `umount /mnt/usb`: `/mnt/usb`에 마운트된 파일 시스템을 해제합니다.
    - **예시**: `sudo umount /mnt/myusb` (마운트된 USB 드라이브 해제)

### `df` (disk free)
디스크 공간 사용량을 보고합니다.
- `df -h`: 사람이 읽기 쉬운 형식으로 디스크 사용량을 보여줍니다.
    - **예시**: `df -h` (현재 디스크 사용량 확인)
```
Filesystem      Size  Used Avail Use% Mounted on
/dev/sda1        50G   10G   38G  21% /
tmpfs           3.9G     0  3.9G   0% /dev/shm
```

### `du` (disk usage)
파일 또는 디렉토리의 디스크 사용량을 보고합니다.
- `du -sh [디렉토리명]`: 지정된 디렉토리의 총 크기를 사람이 읽기 쉬운 형식으로 보여줍니다.
    - **예시**: `du -sh /home/user` (`/home/user` 디렉토리의 총 크기 확인)

### `lsblk` (list block devices)
블록 장치(하드 디스크, 파티션 등) 정보를 트리 형태로 보여줍니다.
    - **예시**: `lsblk` (시스템의 블록 장치 구조 확인)
```
NAME        MAJ:MIN RM   SIZE RO type mountpoint
sda           8:0    0    50G  0 disk 
├─sda1        8:1    0    48G  0 part /
└─sda2        8:2    0     2G  0 part [SWAP]
sdb           8:16   1     8G  0 disk 
└─sdb1        8:17   1     8G  0 part /mnt/myusb
```

### `fdisk` / `parted`
디스크 파티션을 관리하는 도구입니다. (주의: 잘못 사용하면 데이터 손실 위험)
    - **예시**: `sudo fdisk -l` (시스템의 디스크 파티션 정보 확인)

Linux 파일 시스템의 이해는 시스템 관리 및 문제 해결에 매우 중요합니다. 각 디렉토리의 용도를 파악하고 파일 경로를 정확히 사용하는 연습을 해야 합니다.

[AD]