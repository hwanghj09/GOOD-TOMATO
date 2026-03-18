# ls
[AD]

`ls`는 현재 디렉토리의 파일과 폴더 목록을 보여줍니다.

## 사용법

```bash
ls
```

## 자주 쓰는 옵션

- `-l` : 자세히 보기
- `-a` : 숨김 파일 포함

예시
--
```bash
ls
ls -a
ls -l
ls -al
```

출력 예시
```bash
hwanghj09@hwang:~$ ls
Documents  c  project
hwanghj09@hwang:~$
```

```bash
hwanghj09@hwang:~$ ls -a
.              .buildozer  .dotnet           .mysql_history  .streamlit                 Documents
..             .bun        .git-credentials  .npm            .sudo_as_admin_successful  c
.android       .cache      .gitconfig        .nvm            .viminfo                   project
.aws           .claude     .gradle           .opencode       .vscode-remote-containers
.azure         .codex      .landscape        .paddlex        .vscode-server
.bash_history  .config     .lesshst          .profile        .wdm
.bash_logout   .copilot    .local            .pyenv          .wget-hsts
.bashrc        .docker     .motd_shown       .ssh            .wsl-config
hwanghj09@hwang:~$
```

```bash
hwanghj09@hwang:~$ ls -l
total 12
drwxr-xr-x  3 hwanghj09 hwanghj09 4096 Feb 18 23:01 Documents
drwxr-xr-x  2 hwanghj09 hwanghj09 4096 Mar 17 20:50 c
drwxr-xr-x 19 hwanghj09 hwanghj09 4096 Mar 17 20:16 project
hwanghj09@hwang:~$
```
```bash
hwanghj09@hwang:~$ ls -al
total 200
drwxr-x--- 28 hwanghj09 hwanghj09  4096 Mar 18 15:00 .
drwxr-xr-x  3 root      root       4096 Jul 28  2024 ..
drwxr-xr-x  3 hwanghj09 hwanghj09  4096 Dec  6  2024 .android
lrwxrwxrwx  1 hwanghj09 hwanghj09    23 Sep  9  2025 .aws -> /mnt/c/Users/hwang/.aws
lrwxrwxrwx  1 hwanghj09 hwanghj09    25 Sep  9  2025 .azure -> /mnt/c/Users/hwang/.azure
-rw-------  1 hwanghj09 hwanghj09 41221 Mar 17 22:25 .bash_history
-rw-r--r--  1 hwanghj09 hwanghj09   220 Jul 28  2024 .bash_logout
-rw-r--r--  1 hwanghj09 hwanghj09  4028 Feb 20 01:45 .bashrc
drwxr-xr-x  4 hwanghj09 hwanghj09  4096 Jul 28  2024 .buildozer
drwxr-xr-x  3 hwanghj09 hwanghj09  4096 Feb 20 01:46 .bun
drwx------ 17 hwanghj09 hwanghj09  4096 Mar  5 23:03 .cache
drwxr-xr-x  3 hwanghj09 hwanghj09  4096 Feb 20 01:57 .claude
drwxr-xr-x  8 hwanghj09 hwanghj09  4096 Mar 17 21:51 .codex
drwxr-xr-x 10 hwanghj09 hwanghj09  4096 Mar  5 23:03 .config
drwx------  3 hwanghj09 hwanghj09  4096 Feb 14 01:10 .copilot
drwxr-xr-x  4 hwanghj09 hwanghj09  4096 Sep  9  2025 .docker
drwxr-xr-x  3 hwanghj09 hwanghj09  4096 Jul 28  2024 .dotnet
-rw-------  1 hwanghj09 hwanghj09    70 Mar 18 15:00 .git-credentials
-rw-r--r--  1 hwanghj09 hwanghj09   106 Feb 18 23:54 .gitconfig
drwxr-xr-x 10 hwanghj09 hwanghj09  4096 Dec  6  2024 .gradle
drwxr-xr-x  2 hwanghj09 hwanghj09  4096 Dec  8  2024 .landscape
-rw-------  1 hwanghj09 hwanghj09    20 Feb 13 22:43 .lesshst
drwxr-xr-x  6 hwanghj09 hwanghj09  4096 Feb 20 01:46 .local
-rw-r--r--  1 hwanghj09 hwanghj09     0 Mar 18 14:56 .motd_shown
-rw-------  1 hwanghj09 hwanghj09   873 Feb 23 02:40 .mysql_history
drwxr-xr-x  6 hwanghj09 hwanghj09  4096 Feb 20 02:03 .npm
drwxr-xr-x  8 hwanghj09 hwanghj09  4096 Jan 21 20:39 .nvm
drwxr-xr-x  4 hwanghj09 hwanghj09  4096 Feb 20 01:46 .opencode
drwxr-xr-x  6 hwanghj09 hwanghj09  4096 Mar  5 23:03 .paddlex
-rw-r--r--  1 hwanghj09 hwanghj09   807 Jul 28  2024 .profile
drwxr-xr-x 14 hwanghj09 hwanghj09  4096 Jul 28  2024 .pyenv
drwx------  2 hwanghj09 hwanghj09  4096 Feb 16 21:48 .ssh
drwxr-xr-x  2 hwanghj09 hwanghj09  4096 Mar  5 23:15 .streamlit
-rw-r--r--  1 hwanghj09 hwanghj09     0 Jul 28  2024 .sudo_as_admin_successful
-rw-------  1 hwanghj09 hwanghj09  3687 Mar 17 19:31 .viminfo
drwxr-xr-x  3 hwanghj09 hwanghj09  4096 Oct 30 23:39 .vscode-remote-containers
drwxr-xr-x  5 hwanghj09 hwanghj09  4096 Jul 28  2024 .vscode-server
drwxr-xr-x  3 hwanghj09 hwanghj09  4096 Feb 27 23:08 .wdm
-rw-r--r--  1 hwanghj09 hwanghj09   183 Feb 22 22:56 .wget-hsts
-rw-r--r--  1 hwanghj09 hwanghj09  1933 Feb 13 20:02 .wsl-config
drwxr-xr-x  3 hwanghj09 hwanghj09  4096 Feb 18 23:01 Documents
drwxr-xr-x  2 hwanghj09 hwanghj09  4096 Mar 17 20:50 c
drwxr-xr-x 19 hwanghj09 hwanghj09  4096 Mar 17 20:16 project
```