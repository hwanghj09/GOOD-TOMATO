# 14. 파이프와 `exec` 연결

셸에서 다음 명령을 실행하면:

```bash
ls | wc -l
```

`ls`의 출력이 `wc -l`의 입력으로 들어갑니다. 이것도 파이프입니다.

이 구조는 대략 다음 순서로 구현됩니다.

1. 부모가 `pipe()`를 만든다.
2. 첫 번째 자식은 표준 출력을 파이프 쓰기 쪽으로 바꾼다.
3. 첫 번째 자식은 `exec("ls")` 한다.
4. 두 번째 자식은 표준 입력을 파이프 읽기 쪽으로 바꾼다.
5. 두 번째 자식은 `exec("wc", "-l")` 한다.
6. 부모는 사용하지 않는 fd를 닫고 두 자식을 기다린다.

### 14.1 `dup2`

파일 디스크립터를 표준 입력/출력으로 연결할 때 `dup2`를 씁니다.

```c
dup2(fd[1], STDOUT_FILENO);
dup2(fd[0], STDIN_FILENO);
```

- `STDIN_FILENO`는 0
- `STDOUT_FILENO`는 1
- `STDERR_FILENO`는 2

### 14.2 `ls | wc -l` 예제

```c
#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>
#include <stdlib.h>

int main(void) {
    int fd[2];

    if (pipe(fd) == -1) {
        perror("pipe");
        return 1;
    }

    pid_t left = fork();
    if (left == 0) {
        dup2(fd[1], STDOUT_FILENO);
        close(fd[0]);
        close(fd[1]);
        execlp("ls", "ls", NULL);
        perror("execlp ls");
        _exit(1);
    }

    pid_t right = fork();
    if (right == 0) {
        dup2(fd[0], STDIN_FILENO);
        close(fd[0]);
        close(fd[1]);
        execlp("wc", "wc", "-l", NULL);
        perror("execlp wc");
        _exit(1);
    }

    close(fd[0]);
    close(fd[1]);

    waitpid(left, NULL, 0);
    waitpid(right, NULL, 0);

    return 0;
}
```

이 예제는 시스템 프로그래밍 핵심이 한꺼번에 들어 있습니다.

- `pipe`
- `fork`
- `dup2`
- `exec`
- `close`
- `waitpid`

[AD]

---

[이전: IPC와 파이프](/system/ipc) | [목차](/system/complete) | [다음: 파일 디스크립터](/system/file-descriptor)
