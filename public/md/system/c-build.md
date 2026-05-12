# 5. C 컴파일과 실행 기본

시스템 프로그래밍 실습은 C로 진행되는 경우가 많습니다. C 코드는 직접 컴파일해서 실행 파일을 만들어야 합니다.

### 5.1 기본 컴파일

```bash
gcc main.c
./a.out
```

출력 파일 이름을 정하려면 `-o`를 씁니다.

```bash
gcc main.c -o main
./main
```

### 5.2 경고 켜기

```bash
gcc -Wall -Wextra -g main.c -o main
```

- `-Wall`: 일반적인 경고 켜기
- `-Wextra`: 추가 경고 켜기
- `-g`: 디버깅 정보 포함

시스템 프로그래밍에서는 포인터와 시스템 호출을 많이 쓰므로 경고를 켜는 것이 좋습니다.

### 5.3 자주 쓰는 헤더

```c
#include <stdio.h>      // printf, perror
#include <stdlib.h>     // malloc, free, exit
#include <unistd.h>     // fork, exec, pipe, read, write, getpid
#include <sys/wait.h>   // wait, waitpid
#include <signal.h>     // signal, sigaction, kill
#include <errno.h>      // errno
#include <string.h>     // strerror
```

### 5.4 에러 확인 습관

시스템 호출은 실패할 수 있습니다. 실패하면 보통 `-1`을 반환하고, 실패 이유는 `errno`에 저장됩니다.

```c
if (fork() == -1) {
    perror("fork");
    return 1;
}
```

`perror("fork")`는 `fork: Resource temporarily unavailable`처럼 어떤 호출에서 어떤 문제가 났는지 알려 줍니다.

[AD]

---

[이전: 사용자와 권한](/system/permissions) | [목차](/system/complete) | [다음: 포인터와 메모리](/system/pointer)
