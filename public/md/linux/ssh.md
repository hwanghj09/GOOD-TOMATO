# SSH (Secure Shell)

SSH는 원격 컴퓨터에 안전하게 접속하고, 파일을 전송하며, 명령어를 실행할 수 있도록 해주는 네트워크 프로토콜입니다. 암호화된 통신을 제공하여 보안에 강점을 가집니다.

## 1. SSH의 기본 개념

- **클라이언트-서버 모델**: SSH는 클라이언트(접속을 시도하는 컴퓨터)와 서버(접속을 허용하는 컴퓨터) 간의 통신으로 이루어집니다.
- **암호화**: 모든 통신(로그인 정보, 명령어, 파일 전송 등)은 암호화되어 중간에 가로채더라도 내용을 알 수 없습니다.
- **포트**: 기본적으로 TCP 22번 포트를 사용합니다. 보안을 위해 다른 포트로 변경하여 사용하는 경우도 많습니다.

## 2. SSH 클라이언트 사용법

Linux/macOS에서는 기본적으로 `ssh` 명령어가 설치되어 있습니다. Windows 10 이상에서는 PowerShell이나 CMD에서 `ssh` 명령어를 사용할 수 있습니다.

### 1) 기본 접속

```bash
ssh [사용자명]@[원격_호스트_IP_또는_도메인]
```
- 예: `ssh user@192.168.1.100`
- 예: `ssh admin@mywebserver.com`

접속 시도 시, 해당 원격 호스트에 처음 접속하는 경우 호스트 키 지문(fingerprint)을 확인하라는 메시지가 나타납니다. `yes`를 입력하면 해당 호스트 키가 `~/.ssh/known_hosts` 파일에 저장됩니다. 이후에는 비밀번호를 입력하여 로그인합니다.

### 2) 포트 지정 접속

SSH 서버가 기본 22번 포트가 아닌 다른 포트를 사용하는 경우 `-p` 옵션을 사용합니다.
```bash
ssh -p [포트번호] [사용자명]@[원격_호스트]
```
- 예: `ssh -p 2222 user@192.168.1.100`

### 3) SSH 키 기반 인증 (Passwordless Login)

비밀번호 대신 SSH 키를 사용하여 로그인하는 방식은 보안성이 더 높고 편리합니다.

- **키 쌍 생성**:
    `ssh-keygen`
    - 이 명령어를 실행하면 공개 키(public key, `.pub` 확장자)와 개인 키(private key) 쌍이 생성됩니다.
    - 기본적으로 `~/.ssh/id_rsa` (개인 키)와 `~/.ssh/id_rsa.pub` (공개 키) 파일이 생성됩니다.
    - 개인 키는 절대로 외부에 노출되어서는 안 됩니다.
    - passphrase를 설정하여 개인 키를 추가로 보호할 수 있습니다.

- **공개 키를 원격 서버에 복사**:
    `ssh-copy-id [사용자명]@[원격_호스트]`
    - 이 명령어가 가장 편리한 방법입니다. 로컬의 공개 키(`~/.ssh/id_rsa.pub`)를 원격 서버의 `~/.ssh/authorized_keys` 파일에 자동으로 추가해줍니다.
    - 처음 실행 시 원격 서버의 비밀번호를 한 번 입력해야 합니다.

    수동으로 복사하는 방법:
    ```bash
    cat ~/.ssh/id_rsa.pub | ssh [사용자명]@[원격_호스트] "mkdir -p ~/.ssh && chmod 700 ~/.ssh && cat >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys"
    ```

- **키 기반 로그인**:
    공개 키가 원격 서버에 성공적으로 복사되면, 다음부터는 비밀번호 입력 없이 SSH 접속이 가능합니다.
    `ssh [사용자명]@[원격_호스트]`

### 4) SSH 설정 파일 (`~/.ssh/config`)

자주 접속하는 원격 호스트에 대한 설정을 `~/.ssh/config` 파일에 저장하여 편리하게 접속할 수 있습니다.

```
Host myserver
  HostName 192.168.1.100
  User user
  Port 2222
  IdentityFile ~/.ssh/id_rsa

Host another_server
  HostName example.com
  User admin
```
위와 같이 설정하면, `ssh myserver` 또는 `ssh another_server` 명령어로 접속할 수 있습니다.

## 3. SSH를 이용한 파일 전송

### 1) `scp` (Secure Copy)
SSH를 통해 파일을 안전하게 복사합니다.

- **로컬에서 원격으로 파일 복사**:
    `scp [로컬파일경로] [사용자명]@[원격_호스트]:[원격경로]`
    - **예시**: `scp my_local_file.txt user@remote_server:/home/user/documents/` (로컬의 `my_local_file.txt`를 원격 서버의 `/home/user/documents/`로 복사)

- **원격에서 로컬로 파일 복사**:
    `scp [사용자명]@[원격_호스트]:[원격파일경로] [로컬경로]`
    - **예시**: `scp user@remote_server:/home/user/documents/report.pdf .` (원격 서버의 `report.pdf`를 현재 로컬 디렉토리로 복사)

- **디렉토리 복사**: `-r` 옵션 사용
    `scp -r [로컬디렉토리] [사용자명]@[원격_호스트]:[원격경로]`
    - **예시**: `scp -r my_local_dir user@remote_server:/home/user/backups/` (로컬의 `my_local_dir` 디렉토리를 원격 서버로 복사)

- **포트 지정**: `-P` 옵션 사용 (대문자 P)
    `scp -P [포트번호] [로컬파일경로] [사용자명]@[원격_호스트]:[원격경로]`
    - **예시**: `scp -P 2222 my_file.txt user@remote_server:/home/user/` (2222번 포트를 사용하여 파일 복사)

### 2) `sftp` (SSH File Transfer Protocol)
FTP와 유사한 인터페이스로 SSH를 통해 파일을 전송합니다.
- `sftp [사용자명]@[원격_호스트]`
- **예시**: `sftp user@remote_server` (sftp 세션 시작)
```
sftp> ls
my_file.txt  documents/  public_html/
sftp> get my_file.txt
Fetching /home/user/my_file.txt to my_file.txt
sftp> put new_file.txt
Uploading new_file.txt to /home/user/new_file.txt
sftp> bye
```
- `sftp` 프롬프트에서 `ls`, `cd`, `get` (다운로드), `put` (업로드) 등의 명령어를 사용할 수 있습니다.

## 4. SSH 서버 설정 (OpenSSH Server)

원격에서 SSH 접속을 허용하려면 서버에 OpenSSH Server가 설치되어 있어야 합니다.

- **설치 (Debian/Ubuntu)**:
    `sudo apt update`
    `sudo apt install openssh-server`
    - **예시**: `sudo apt install openssh-server` (Ubuntu에서 SSH 서버 설치)

- **설치 (CentOS/RHEL)**:
    `sudo dnf install openssh-server`
    `sudo systemctl enable sshd --now`
    - **예시**: `sudo dnf install openssh-server` (CentOS에서 SSH 서버 설치)

- **설정 파일**: `/etc/ssh/sshd_config`
    - `Port 22`: SSH 포트 변경 (보안 권장)
        - **예시**: `Port 2222` (SSH 접속 포트를 2222로 변경)
    - `PermitRootLogin no`: root 계정 직접 로그인 허용 여부 (보안 권장: `no`)
        - **예시**: `PermitRootLogin no` (root 계정으로 직접 로그인 금지)
    - `PasswordAuthentication no`: 비밀번호 인증 허용 여부 (키 기반 인증만 허용하려면 `no`)
        - **예시**: `PasswordAuthentication no` (비밀번호 인증 비활성화, 키 기반 인증만 허용)
    - 설정 변경 후에는 SSH 서비스 재시작: `sudo systemctl restart sshd`
        - **예시**: `sudo systemctl restart sshd` (설정 변경 후 SSH 서비스 재시작)

SSH는 Linux 시스템 관리에서 가장 중요한 도구 중 하나입니다. 안전하고 효율적인 원격 접속 및 파일 전송을 위해 SSH의 다양한 기능을 숙지하는 것이 필수적.
[AD]