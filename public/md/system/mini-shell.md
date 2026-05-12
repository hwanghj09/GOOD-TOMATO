# 21. 미니 프로젝트 1: 명령 실행기

아래 코드는 셸처럼 자식 프로세스를 만들고 `ls -l`을 실행합니다.

```c
#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>

int main(void) {
    pid_t pid = fork();

    if (pid < 0) {
        perror("fork");
        return 1;
    }

    if (pid == 0) {
        execlp("ls", "ls", "-l", NULL);
        perror("execlp");
        _exit(1);
    }

    int status;
    waitpid(pid, &status, 0);
    printf("done\n");

    return 0;
}
```

실행:

```bash
gcc mini_shell.c -o mini_shell
./mini_shell
```

확인할 것:

- 부모 PID와 자식 PID를 출력해 보기
- `ls` 대신 `pwd` 실행해 보기
- 없는 명령을 넣었을 때 `perror`가 실행되는지 보기

[AD]

---

[이전: 시험 핵심 답안](/system/exam) | [목차](/system/complete) | [다음: 미니 프로젝트: 메시지 전달](/system/mini-pipe)
