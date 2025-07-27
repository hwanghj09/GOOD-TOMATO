# 패키지 관리

Linux에서 소프트웨어는 "패키지" 형태로 배포되고 관리됩니다. 패키지 관리 시스템은 소프트웨어의 설치, 업데이트, 제거 및 의존성 관리를 자동화하여 사용자가 편리하게 소프트웨어를 사용할 수 있도록 돕습니다.

## 1. 주요 패키지 관리 시스템

Linux 배포판마다 사용하는 패키지 관리 시스템이 다릅니다.

### 1) APT (Advanced Package Tool) - Debian, Ubuntu, Mint 등
Debian 계열의 배포판에서 사용되는 강력한 패키지 관리 시스템입니다. `.deb` 확장자를 가진 패키지를 사용합니다.

- **패키지 목록 업데이트**:
    `sudo apt update`
    - 저장소에서 사용 가능한 패키지 목록을 최신 상태로 업데이트합니다. 실제 패키지를 다운로드하지는 않습니다.

- **패키지 설치**:
    `sudo apt install [패키지명]`
    - 지정된 패키지와 그 의존성을 자동으로 설치합니다.
    - **예시**: `sudo apt install nginx` (Nginx 웹 서버 설치), `sudo apt install git` (Git 버전 관리 시스템 설치)

- **패키지 업그레이드**:
    `sudo apt upgrade`
    - 설치된 모든 패키지를 최신 버전으로 업그레이드합니다.
    - **예시**: `sudo apt upgrade` (모든 설치된 패키지 업그레이드)
    `sudo apt full-upgrade`
    - `upgrade`와 유사하지만, 새로운 의존성을 설치하거나 기존 패키지를 제거하여 복잡한 업그레이드를 처리할 수 있습니다.
    - **예시**: `sudo apt full-upgrade` (시스템 전체 업그레이드, 커널 업데이트 등)

- **패키지 제거**:
    `sudo apt remove [패키지명]`
    - 지정된 패키지를 제거하지만, 설정 파일은 남겨둡니다.
    - **예시**: `sudo apt remove nginx` (Nginx 패키지 제거)
    `sudo apt purge [패키지명]`
    - 지정된 패키지와 함께 모든 설정 파일까지 완전히 제거합니다.
    - **예시**: `sudo apt purge nginx` (Nginx 패키지와 설정 파일 완전 제거)

- **사용되지 않는 의존성 제거**:
    `sudo apt autoremove`
    - 더 이상 필요 없는(다른 패키지에 의해 의존되지 않는) 패키지들을 제거합니다.
    - **예시**: `sudo apt autoremove` (불필요한 의존성 패키지 제거)

- **캐시된 패키지 파일 정리**:
    `sudo apt clean`
    - 다운로드된 패키지 파일(deb 파일)을 로컬 저장소에서 삭제하여 디스크 공간을 확보합니다.
    - **예시**: `sudo apt clean` (다운로드된 패키지 파일 삭제)

- **패키지 검색**:
    `apt search [키워드]`
    - 패키지 목록에서 키워드를 포함하는 패키지를 검색합니다.
    - **예시**: `apt search web server` (웹 서버 관련 패키지 검색)

- **패키지 정보 확인**:
    `apt show [패키지명]`
    - 특정 패키지의 상세 정보(버전, 의존성, 설명 등)를 출력합니다.
    - **예시**: `apt show nginx` (Nginx 패키지 정보 확인)

### 2) YUM / DNF (Yellowdog Updater, Modified / Dandified YUM) - CentOS, RHEL, Fedora 등
Red Hat 계열의 배포판에서 사용되는 패키지 관리 시스템입니다. `.rpm` 확장자를 가진 패키지를 사용합니다. DNF는 YUM의 차세대 버전으로, 더 나은 성능과 의존성 해결 기능을 제공합니다.

- **패키지 목록 업데이트**:
    `sudo dnf check-update` (YUM: `sudo yum check-update`)
    - 저장소에서 사용 가능한 패키지 목록을 확인합니다.
    - **예시**: `sudo dnf check-update` (업데이트 가능한 패키지 목록 확인)

- **패키지 설치**:
    `sudo dnf install [패키지명]` (YUM: `sudo yum install [패키지명]`)
    - 지정된 패키지와 그 의존성을 자동으로 설치합니다.
    - **예시**: `sudo dnf install httpd` (Apache 웹 서버 설치), `sudo dnf install mariadb-server` (MariaDB 서버 설치)

- **패키지 업그레이드**:
    `sudo dnf update` (YUM: `sudo yum update`)
    - 설치된 모든 패키지를 최신 버전으로 업그레이드합니다.
    - **예시**: `sudo dnf update` (모든 설치된 패키지 업그레이드)

- **패키지 제거**:
    `sudo dnf remove [패키지명]` (YUM: `sudo yum remove [패키지명]`)
    - 지정된 패키지를 제거합니다.
    - **예시**: `sudo dnf remove httpd` (Apache 패키지 제거)

- **사용되지 않는 의존성 제거**:
    `sudo dnf autoremove` (YUM: `sudo yum autoremove`)
    - **예시**: `sudo dnf autoremove` (불필요한 의존성 패키지 제거)

- **패키지 검색**:
    `dnf search [키워드]` (YUM: `yum search [키워드]`)
    - **예시**: `dnf search database` (데이터베이스 관련 패키지 검색)

- **패키지 정보 확인**:
    `dnf info [패키지명]` (YUM: `yum info [패키지명]`)
    - **예시**: `dnf info httpd` (Apache 패키지 정보 확인)

## 2. 스냅 (Snap) 및 플랫팩 (Flatpak)

최근에는 배포판에 관계없이 사용할 수 있는 범용 패키지 관리 시스템도 등장했습니다. 이들은 애플리케이션과 그 의존성을 하나의 패키지로 묶어 격리된 환경에서 실행합니다.

### 스냅 (Snap)
Canonical (Ubuntu 개발사)에서 개발한 패키지 시스템입니다.
- **설치**: `sudo snap install [패키지명]`
- **예시**: `sudo snap install code --classic` (VS Code 설치)
- **업데이트**: `sudo snap refresh`
- **예시**: `sudo snap refresh` (설치된 모든 스냅 패키지 업데이트)
- **제거**: `sudo snap remove [패키지명]`
- **예시**: `sudo snap remove code` (VS Code 제거)

### 플랫팩 (Flatpak)
Red Hat에서 지원하는 패키지 시스템입니다.
- **설치**: `flatpak install [저장소] [패키지명]`
- **예시**: `flatpak install flathub org.gimp.GIMP` (GIMP 설치)
- **업데이트**: `flatpak update`
- **예시**: `flatpak update` (설치된 모든 플랫팩 패키지 업데이트)
- **제거**: `flatpak uninstall [패키지명]`
- **예시**: `flatpak uninstall org.gimp.GIMP` (GIMP 제거)

## 3. 소스 코드 컴파일 설치 (고급)

패키지 관리 시스템을 사용하지 않고, 소프트웨어의 소스 코드를 직접 다운로드하여 컴파일하고 설치하는 방법도 있습니다. 이 방법은 최신 버전의 소프트웨어를 사용하거나, 특정 옵션으로 컴파일해야 할 때 유용하지만, 의존성 관리가 복잡하고 오류 발생 가능성이 높습니다.

일반적인 절차:
1. 소스 코드 다운로드 (tar.gz, zip 등)
2. 압축 해제
3. `configure` 스크립트 실행 (환경 설정 및 의존성 확인)
4. `make` 실행 (컴파일)
5. `sudo make install` 실행 (설치)

**예시**: Nginx를 소스 코드로 설치하는 경우
```bash
# 1. 소스 코드 다운로드 및 압축 해제
wget http://nginx.org/download/nginx-1.24.0.tar.gz
tar -zxvf nginx-1.24.0.tar.gz
cd nginx-1.24.0

# 2. configure 실행 (필요한 모듈 활성화 등)
./configure --prefix=/usr/local/nginx --with-http_ssl_module

# 3. make 실행
make

# 4. make install 실행
sudo make install
```

패키지 관리 시스템은 Linux 시스템을 효율적으로 운영하고 소프트웨어를 관리하는 데 필수적인 도구입니다. 사용하는 배포판에 맞는 명령어를 숙지하고 활용하는 것이 중요합니다.
[AD]