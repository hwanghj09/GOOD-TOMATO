# 17. 반드시 외워야 하는 명령 모음

### 17.1 위치와 사용자

```bash
whoami
hostname
pwd
id
groups
```

### 17.2 파일과 권한

```bash
ls -l
chmod 644 file.txt
chmod 755 program
chown user:group file.txt
cat file.txt
```

### 17.3 프로세스

```bash
ps
ps -ef
ps -ef | grep 이름
top
pstree
pstree -p
sleep 100 &
jobs
kill PID
kill -9 PID
```

### 17.4 컴파일

```bash
gcc -Wall -Wextra -g main.c -o main
./main
echo $?
```

`echo $?`는 직전에 실행한 명령의 종료 코드를 보여 줍니다.

[AD]

---

[이전: 프린트 실습 흐름 정리](/system/print-practice) | [목차](/system/complete) | [다음: C 함수 모음](/system/c-functions)
