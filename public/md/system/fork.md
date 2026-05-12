# 8. `fork`: 프로세스 복제

`fork()`는 현재 프로세스를 복제해서 자식 프로세스를 만듭니다.

가장 중요한 특징은 다음입니다.

- `fork()` 이후 같은 코드가 부모와 자식에서 모두 실행된다.
- 부모와 자식은 서로 다른 PID를 가진다.
- 자식은 부모의 메모리 값을 복사해서 시작한다.
- 복사 후에는 각자 독립된 메모리를 사용한다.

### 8.1 가장 단순한 예제

```c
#include <stdio.h>
#include <unistd.h>

int main(void) {
    fork();
    printf("hello\n");
    return 0;
}
```

출력은 보통 다음처럼 두 번 나옵니다.

```text
hello
hello
```

`fork()`가 한 번 호출되면 프로세스가 2개가 되고, 두 프로세스가 모두 `printf`를 실행하기 때문입니다.

### 8.2 `fork`의 반환값

```c
pid_t pid = fork();
```

반환값은 부모와 자식에서 다르게 보입니다.

- 실패: `-1`
- 자식 프로세스: `0`
- 부모 프로세스: 자식의 PID

그래서 보통 다음 형태로 나눕니다.

```c
#include <stdio.h>
#include <unistd.h>

int main(void) {
    pid_t pid = fork();

    if (pid < 0) {
        perror("fork");
        return 1;
    }

    if (pid == 0) {
        printf("child: PID=%d, PPID=%d\n", getpid(), getppid());
    } else {
        printf("parent: PID=%d, child PID=%d\n", getpid(), pid);
    }

    return 0;
}
```

### 8.3 변수는 복사된다

```c
#include <stdio.h>
#include <unistd.h>

int main(void) {
    int value = 10;
    pid_t pid = fork();

    if (pid == 0) {
        value = 20;
        printf("child value=%d, address=%p\n", value, (void *)&value);
    } else {
        value = 30;
        printf("parent value=%d, address=%p\n", value, (void *)&value);
    }

    return 0;
}
```

부모가 `value`를 30으로 바꾸고, 자식이 20으로 바꿔도 서로에게 직접 영향을 주지 않습니다. `fork()` 후에는 각자 독립된 가상 주소 공간을 갖기 때문입니다.

주소 출력이 같아 보일 수 있지만, 그것은 가상 주소가 같다는 뜻입니다. 실제 물리 메모리를 완전히 같은 방식으로 공유한다는 뜻은 아닙니다.

### 8.4 출력 순서는 보장되지 않는다

부모가 먼저 출력될 수도 있고, 자식이 먼저 출력될 수도 있습니다.

운영체제 스케줄러가 어느 프로세스에 CPU를 먼저 줄지 상황마다 다르기 때문입니다.

순서를 보장하고 싶다면 `wait()`를 사용합니다.

[AD]

---

[이전: 프로세스 개념](/system/process) | [목차](/system/complete) | [다음: wait 자식 종료 대기](/system/wait)
