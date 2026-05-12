# 10. `exec`: 실행 중인 프로그램 교체

프린트에는 다음 흐름의 예제가 나옵니다.

```c
printf("변신 전: 현재 프로세스입니다.\n");
execlp("ls", "ls", "-l", NULL);
printf("이 문구가 보인다면 exec가 실패한 것입니다.\n");
```

핵심은 `exec`가 새 프로세스를 만드는 함수가 아니라는 점입니다.

> `exec`는 현재 프로세스의 프로그램 내용을 다른 프로그램으로 교체한다.

### 10.1 `execlp` 예제

```c
#include <stdio.h>
#include <unistd.h>

int main(void) {
    printf("before exec\n");

    execlp("ls", "ls", "-l", NULL);

    perror("execlp");
    return 1;
}
```

성공하면 `ls -l`이 실행되고, `execlp` 아래의 코드는 실행되지 않습니다.

실패할 때만 `perror("execlp")`가 실행됩니다.

### 10.2 왜 `printf`가 실행되지 않는가

`exec`가 성공하면 현재 프로그램의 코드, 데이터, 힙, 스택이 새 프로그램의 것으로 바뀝니다. 따라서 `exec` 뒤에 있던 기존 코드로 돌아올 수 없습니다.

즉 다음 코드는 성공 시 실행되지 않습니다.

```c
printf("exec 뒤 코드\n");
```

### 10.3 `fork`와 `exec`의 역할 차이

- `fork`: 현재 프로세스를 복제한다.
- `exec`: 현재 프로세스의 프로그램을 다른 프로그램으로 바꾼다.

새로운 프로그램을 실행하는 전형적인 흐름은 다음입니다.

1. 부모가 `fork()`로 자식을 만든다.
2. 자식이 `exec()`로 다른 프로그램이 된다.
3. 부모가 `wait()`로 자식 종료를 기다린다.

### 10.4 표준 패턴

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
        return 1;
    }

    int status;
    wait(&status);
    printf("child finished\n");
    return 0;
}
```

이 구조가 셸이 명령을 실행하는 기본 모델입니다.

[AD]

---

[이전: wait 자식 종료 대기](/system/wait) | [목차](/system/complete) | [다음: 프로세스 종료](/system/process-exit)
