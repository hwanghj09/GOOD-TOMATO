# 12. 시그널

시그널은 프로세스에게 전달되는 짧은 이벤트입니다. 사용자가 `Ctrl + C`를 누르거나, 다른 프로세스가 `kill` 명령을 사용하거나, 타이머가 끝났을 때 시그널이 발생할 수 있습니다.

### 12.1 시그널 목록 보기

```bash
kill -l
```

자주 보는 시그널은 다음과 같습니다.

- `SIGINT`: 인터럽트. 보통 `Ctrl + C`
- `SIGTERM`: 정상 종료 요청. `kill PID`의 기본값
- `SIGKILL`: 강제 종료. 잡거나 무시할 수 없음
- `SIGSTOP`: 강제 정지. 잡거나 무시할 수 없음
- `SIGTSTP`: 터미널 정지. 보통 `Ctrl + Z`
- `SIGCHLD`: 자식 프로세스 상태 변화
- `SIGALRM`: 알람 타이머 만료
- `SIGSEGV`: 잘못된 메모리 접근

### 12.2 `kill`은 시그널 전송 명령

```bash
kill PID
kill -TERM PID
kill -INT PID
kill -9 PID
```

`kill`이라는 이름 때문에 "무조건 죽인다"로 생각하기 쉽지만, 실제로는 지정한 시그널을 보내는 명령입니다.

### 12.3 `Ctrl + C`와 `SIGINT`

터미널에서 실행 중인 프로그램에 `Ctrl + C`를 누르면 보통 `SIGINT`가 전달됩니다. 기본 동작은 종료입니다.

```bash
sleep 100
Ctrl + C
```

### 12.4 시그널 핸들러

프로그램이 특정 시그널을 받았을 때 직접 처리하게 만들 수 있습니다.

```c
#include <stdio.h>
#include <signal.h>
#include <unistd.h>

void handler(int signo) {
    printf("signal received: %d\n", signo);
}

int main(void) {
    signal(SIGINT, handler);

    while (1) {
        printf("running...\n");
        sleep(1);
    }
}
```

이 프로그램은 `Ctrl + C`를 눌렀을 때 바로 종료되지 않고 핸들러를 실행합니다.

### 12.5 더 안전한 `sigaction`

실무에서는 `signal()`보다 `sigaction()`을 더 권장합니다.

```c
#include <stdio.h>
#include <signal.h>
#include <unistd.h>

void handler(int signo) {
    write(1, "SIGINT\n", 7);
}

int main(void) {
    struct sigaction sa;
    sa.sa_handler = handler;
    sigemptyset(&sa.sa_mask);
    sa.sa_flags = 0;

    sigaction(SIGINT, &sa, NULL);

    while (1) {
        pause();
    }
}
```

시그널 핸들러 안에서는 아무 함수나 마음대로 호출하면 위험할 수 있습니다. 그래서 예제처럼 `write` 같은 안전한 함수만 사용하는 습관이 좋습니다.

### 12.6 처리할 수 없는 시그널

다음 시그널은 프로그램이 잡거나 무시할 수 없습니다.

- `SIGKILL`
- `SIGSTOP`

그래서 `kill -9 PID`는 거의 항상 프로세스를 끝냅니다.

[AD]

---

[이전: 프로세스 종료](/system/process-exit) | [목차](/system/complete) | [다음: IPC와 파이프](/system/ipc)
