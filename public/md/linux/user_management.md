# 사용자 관리

Linux 시스템은 다중 사용자 시스템으로 설계되어 있어, 여러 사용자가 동시에 시스템에 접근하고 자원을 공유할 수 있습니다. 사용자 관리는 시스템의 보안과 자원 할당을 효율적으로 제어하는 데 필수적입니다.

## 1. 사용자 및 그룹 개념

- **사용자 (User)**: 시스템에 로그인하여 작업을 수행하는 개별 엔티티입니다. 각 사용자는 고유한 사용자 ID (UID)를 가집니다.
- **그룹 (Group)**: 여러 사용자를 묶어 관리하는 논리적인 단위입니다. 그룹에 속한 사용자들은 그룹에 부여된 파일 및 디렉토리 권한을 공유할 수 있습니다. 각 그룹은 고유한 그룹 ID (GID)를 가집니다.

### 주요 파일
- `/etc/passwd`: 사용자 계정 정보 (사용자명, UID, GID, 홈 디렉토리, 쉘 등)
- `/etc/shadow`: 사용자 비밀번호 정보 (암호화된 비밀번호, 비밀번호 만료 정책 등) - 보안상 일반 사용자는 접근 불가
- `/etc/group`: 그룹 정보 (그룹명, GID, 그룹에 속한 사용자 목록)
- `/etc/gshadow`: 그룹 비밀번호 정보 (그룹 비밀번호, 그룹 관리자 등) - 보안상 일반 사용자는 접근 불가

## 2. 사용자 관리 명령어

### 1) 사용자 추가: `useradd`

새로운 사용자 계정을 생성합니다.
- `sudo useradd [사용자명]`: 새로운 사용자를 생성합니다. (기본 설정으로 홈 디렉토리 생성 안 함)
    - **예시**: `sudo useradd newuser` (새로운 사용자 `newuser` 생성)
- `sudo useradd -m [사용자명]`: 홈 디렉토리(`/home/[사용자명]`)를 생성하고 기본 스켈레톤 파일(`etc/skel`의 내용)을 복사합니다.
    - **예시**: `sudo useradd -m testuser` (홈 디렉토리를 포함하여 `testuser` 생성)
- `sudo useradd -m -s /bin/bash [사용자명]`: 홈 디렉토리를 생성하고 로그인 쉘을 `/bin/bash`로 지정합니다.
    - **예시**: `sudo useradd -m -s /bin/bash devuser` (`devuser`를 생성하고 쉘을 bash로 설정)
- `sudo useradd -m -g [기본그룹] -G [추가그룹1,추가그룹2] [사용자명]`: 기본 그룹과 추가 그룹을 지정하여 사용자를 생성합니다.
    - **예시**: `sudo useradd -m -g users -G sudo,developers projectuser` (`projectuser`를 `users` 그룹에 속하게 하고 `sudo`, `developers` 그룹에도 추가)

### 2) 비밀번호 설정: `passwd`

사용자 계정의 비밀번호를 설정하거나 변경합니다.
- `sudo passwd [사용자명]`: 지정된 사용자의 비밀번호를 설정/변경합니다. (root는 모든 사용자 비밀번호 변경 가능)
    - **예시**: `sudo passwd newuser` (`newuser`의 비밀번호 설정)
- `passwd`: 현재 로그인한 사용자의 비밀번호를 변경합니다.
    - **예시**: `passwd` (현재 로그인한 사용자의 비밀번호 변경)

### 3) 사용자 정보 변경: `usermod`

생성된 사용자 계정의 속성을 변경합니다.
- `sudo usermod -l [새사용자명] [기존사용자명]`: 사용자 이름을 변경합니다.
    - **예시**: `sudo usermod -l newname oldname` (`oldname` 사용자의 이름을 `newname`으로 변경)
- `sudo usermod -d /new/home/dir -m [사용자명]`: 홈 디렉토리를 변경하고 기존 파일을 새 디렉토리로 이동합니다.
    - **예시**: `sudo usermod -d /home/newhome -m testuser` (`testuser`의 홈 디렉토리를 `/home/newhome`으로 변경)
- `sudo usermod -s /bin/sh [사용자명]`: 로그인 쉘을 변경합니다.
    - **예시**: `sudo usermod -s /bin/sh testuser` (`testuser`의 쉘을 `/bin/sh`로 변경)
- `sudo usermod -aG [추가그룹] [사용자명]`: 사용자에게 추가 그룹을 할당합니다. (`-a`는 append, `-G`는 group)
    - **예시**: `sudo usermod -aG docker testuser` (`testuser`를 `docker` 그룹에 추가)

### 4) 사용자 삭제: `userdel`

사용자 계정을 삭제합니다.
- `sudo userdel [사용자명]`: 사용자 계정을 삭제하지만, 홈 디렉토리와 메일 스풀은 남겨둡니다.
    - **예시**: `sudo userdel olduser` (`olduser` 계정 삭제)
- `sudo userdel -r [사용자명]`: 사용자 계정과 함께 홈 디렉토리 및 메일 스풀을 완전히 삭제합니다.
    - **예시**: `sudo userdel -r olduser` (`olduser` 계정과 홈 디렉토리 완전 삭제)

## 3. 그룹 관리 명령어

### 1) 그룹 추가: `groupadd`

새로운 그룹을 생성합니다.
- `sudo groupadd [그룹명]`: 새로운 그룹을 생성합니다.
    - **예시**: `sudo groupadd developers` (`developers` 그룹 생성)

### 2) 그룹 정보 변경: `groupmod`

생성된 그룹의 속성을 변경합니다.
- `sudo groupmod -n [새그룹명] [기존그룹명]`: 그룹 이름을 변경합니다.
    - **예시**: `sudo groupmod -n newgroup oldgroup` (`oldgroup`의 이름을 `newgroup`으로 변경)

### 3) 그룹 삭제: `groupdel`

그룹을 삭제합니다.
- `sudo groupdel [그룹명]`: 지정된 그룹을 삭제합니다.
    - **예시**: `sudo groupdel oldgroup` (`oldgroup` 삭제)

## 4. 사용자 및 그룹 정보 확인

### `id`
현재 사용자 또는 지정된 사용자의 UID, GID, 소속 그룹 정보를 보여줍니다.
- `id`: 현재 사용자의 정보
    - **예시**: `id` (현재 로그인한 사용자의 UID, GID, 그룹 정보 출력)
- `id [사용자명]`: 지정된 사용자의 정보
    - **예시**: `id testuser` (`testuser`의 UID, GID, 그룹 정보 출력)

### `groups`
현재 사용자 또는 지정된 사용자가 속한 그룹 목록을 보여줍니다.
- `groups`: 현재 사용자가 속한 그룹
    - **예시**: `groups` (현재 사용자가 속한 그룹 목록 출력)
- `groups [사용자명]`: 지정된 사용자가 속한 그룹
    - **예시**: `groups testuser` (`testuser`가 속한 그룹 목록 출력)

### `who` / `w`
현재 시스템에 로그인한 사용자 정보를 보여줍니다.
- `who`: 로그인한 사용자명, 터미널, 로그인 시간
    - **예시**: `who` (현재 로그인한 사용자 정보 출력)
- `w`: `who`보다 더 상세한 정보 (로그인 시간, idle 시간, 현재 실행 중인 프로세스 등)
    - **예시**: `w` (현재 로그인한 사용자 및 그들의 활동 정보 출력)

### `last`
시스템에 로그인했던 사용자들의 기록을 보여줍니다.
- **예시**: `last` (최근 로그인 기록 출력)

사용자 및 그룹 관리는 Linux 시스템의 보안과 자원 관리에 매우 중요합니다. 각 명령어의 사용법을 정확히 익히고, 필요한 경우에 적절하게 활용해야 합니다.
[AD]