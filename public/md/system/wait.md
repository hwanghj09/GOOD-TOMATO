# 9. `wait`: 자식 종료 기다리기

부모 프로세스는 `wait()`로 자식 프로세스가 끝날 때까지 기다릴 수 있습니다.

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
        printf("child start\n");
        return 7;
    }

    int status;
    wait(&status);

    if (WIFEXITED(status)) {
        printf("child exit code = %d\n", WEXITSTATUS(status));
    }

    printf("parent end\n");
    return 0;
}
```

### 9.1 왜 `wait`가 필요한가

자식이 종료되면 운영체제는 자식의 종료 상태를 부모가 가져갈 수 있도록 잠시 보관합니다. 이 상태를 부모가 회수하지 않으면 자식은 좀비 프로세스가 됩니다.

좀비 프로세스는 이미 실행은 끝났지만, 프로세스 테이블에 종료 정보가 남아 있는 상태입니다.

### 9.2 `waitpid`

특정 자식만 기다리고 싶으면 `waitpid`를 사용합니다.

```c
waitpid(pid, &status, 0);
```

옵션에 `WNOHANG`을 주면 자식이 아직 끝나지 않았을 때 기다리지 않고 바로 돌아올 수 있습니다.

```c
pid_t result = waitpid(pid, &status, WNOHANG);
```

[AD]

---

[이전: fork 프로세스 복제](/system/fork) | [목차](/system/complete) | [다음: exec 실행 교체](/system/exec)
