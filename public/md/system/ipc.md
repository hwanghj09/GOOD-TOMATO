# 13. IPC: 프로세스 간 통신

IPC는 Inter-Process Communication의 약자입니다. 프로세스끼리 데이터를 주고받는 방법을 말합니다.

왜 IPC가 필요할까요?

- 프로세스는 기본적으로 각자 독립된 메모리를 가진다.
- `fork()` 후에도 부모와 자식의 변수 변경은 서로에게 직접 전달되지 않는다.
- 그래서 데이터를 주고받으려면 운영체제가 제공하는 통신 방법이 필요하다.

대표적인 IPC 방식은 다음과 같습니다.

- pipe
- named pipe
- signal
- shared memory
- message queue
- socket

프린트에서는 주로 pipe 흐름을 다룹니다.

### 13.1 파이프의 구조

```c
int fd[2];
pipe(fd);
```

`pipe`를 만들면 파일 디스크립터 2개가 생깁니다.

- `fd[0]`: 읽는 쪽
- `fd[1]`: 쓰는 쪽

그림으로 보면 다음과 같습니다.

```text
write fd[1]  --->  pipe buffer  --->  read fd[0]
```

한쪽 프로세스가 `fd[1]`에 쓰면, 다른 프로세스가 `fd[0]`에서 읽습니다.

### 13.2 부모가 쓰고 자식이 읽는 예제

```c
#include <stdio.h>
#include <unistd.h>
#include <string.h>
#include <sys/wait.h>

int main(void) {
    int fd[2];
    char buffer[100];

    if (pipe(fd) == -1) {
        perror("pipe");
        return 1;
    }

    pid_t pid = fork();

    if (pid < 0) {
        perror("fork");
        return 1;
    }

    if (pid == 0) {
        close(fd[1]);
        int n = read(fd[0], buffer, sizeof(buffer) - 1);
        if (n > 0) {
            buffer[n] = '\0';
            printf("child received: %s\n", buffer);
        }
        close(fd[0]);
        return 0;
    }

    close(fd[0]);
    const char *msg = "hello from parent";
    write(fd[1], msg, strlen(msg));
    close(fd[1]);

    wait(NULL);
    return 0;
}
```

### 13.3 왜 안 쓰는 쪽을 닫는가

파이프는 한 방향 통신입니다. 부모가 쓰기만 한다면 부모는 읽기 쪽 `fd[0]`을 닫습니다. 자식이 읽기만 한다면 자식은 쓰기 쪽 `fd[1]`을 닫습니다.

안 쓰는 파일 디스크립터를 닫아야 하는 이유는 다음입니다.

- 자원 낭비를 막는다.
- 읽는 쪽이 EOF를 정확히 감지할 수 있다.
- 프로그램의 의도가 명확해진다.

### 13.4 `read`가 멈춰 있는 이유

파이프에서 읽을 데이터가 없는데 쓰기 쪽이 아직 열려 있으면 `read`는 기다릴 수 있습니다.

반대로 쓰기 쪽이 모두 닫히면 `read`는 0을 반환하여 EOF를 알립니다.

이것이 파이프 예제에서 `close(fd[1])`이 중요한 이유입니다.

[AD]

---

[이전: 시그널](/system/signal) | [목차](/system/complete) | [다음: 파이프와 exec 연결](/system/pipe-exec)
