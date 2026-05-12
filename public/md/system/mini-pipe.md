# 22. 미니 프로젝트 2: 부모-자식 메시지 전달

아래 코드는 부모가 자식에게 문자열을 보내는 파이프 예제입니다.

```c
#include <stdio.h>
#include <unistd.h>
#include <string.h>
#include <sys/wait.h>

int main(void) {
    int fd[2];
    char buf[128];

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
        int n = read(fd[0], buf, sizeof(buf) - 1);
        if (n > 0) {
            buf[n] = '\0';
            printf("child got: %s\n", buf);
        }
        close(fd[0]);
        return 0;
    }

    close(fd[0]);
    const char *msg = "system programming";
    write(fd[1], msg, strlen(msg));
    close(fd[1]);

    wait(NULL);
    return 0;
}
```

확인할 것:

- `close(fd[1])`을 빼면 어떤 일이 생기는지
- 메시지를 여러 번 보내면 어떻게 읽히는지
- 자식이 부모에게 답장하려면 파이프가 몇 개 필요한지

답: 일반 pipe는 단방향이므로 양방향 통신에는 보통 파이프 2개가 필요합니다.

[AD]

---

[이전: 미니 프로젝트: 명령 실행기](/system/mini-shell) | [목차](/system/complete) | [다음: 디버깅 체크리스트](/system/debugging)
