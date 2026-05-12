# 11. 프로세스 종료

프로세스는 여러 방식으로 종료됩니다.

- `return`으로 `main` 종료
- `exit()` 호출
- `_exit()` 호출
- 시그널로 종료
- 치명적 오류로 종료

### 11.1 `return`과 `exit`

```c
int main(void) {
    return 0;
}
```

`main`에서 `return 0`은 정상 종료를 뜻합니다. 일반적으로 종료 코드는 `0`이면 성공, 0이 아니면 실패로 해석합니다.

```c
#include <stdlib.h>

int main(void) {
    exit(0);
}
```

`exit()`도 프로세스를 종료합니다. `exit()`는 표준 입출력 버퍼를 비우고, 등록된 종료 처리 함수를 실행하는 등 정리 작업을 합니다.

### 11.2 `_exit`

```c
#include <unistd.h>

_exit(0);
```

`_exit()`는 더 낮은 수준의 종료입니다. 표준 입출력 버퍼 정리 같은 C 라이브러리 수준의 처리를 거의 하지 않고 바로 종료합니다.

`fork()` 후 자식이 `exec()` 실패로 바로 죽어야 할 때는 `_exit()`를 쓰는 경우가 있습니다.

### 11.3 종료 상태 확인

부모는 `wait()`로 자식의 종료 상태를 확인할 수 있습니다.

```c
if (WIFEXITED(status)) {
    printf("exit code=%d\n", WEXITSTATUS(status));
}

if (WIFSIGNALED(status)) {
    printf("signal=%d\n", WTERMSIG(status));
}
```

- `WIFEXITED`: 정상 종료인지
- `WEXITSTATUS`: 종료 코드
- `WIFSIGNALED`: 시그널 때문에 종료됐는지
- `WTERMSIG`: 종료시킨 시그널 번호

[AD]

---

[이전: exec 실행 교체](/system/exec) | [목차](/system/complete) | [다음: 시그널](/system/signal)
