# 공통 기초 - 프로세스

프로세스(process)는 **실행 중인 프로그램**이다. 실행 파일을 메모리에 올리고 OS가 자원(CPU, 메모리, 파일 등)을 할당하면 하나의 프로세스가 된다.

---

## 프로세스가 가진 것

* **PID (Process ID)**: 프로세스를 구분하는 고유 번호
* **가상 주소 공간**: 코드, 전역 데이터, 힙, 스택 영역 등
* **CPU 상태**: 레지스터, 프로그램 카운터 등
* **열린 파일 목록**: 파일 디스크립터
* **부모/자식 관계**: 부모 프로세스가 생성한 자식 프로세스

---

## 프로세스 상태

* **Running**: CPU에서 실행 중
* **Ready**: 실행 가능하지만 CPU 대기
* **Blocked/Waiting**: I/O 등 이벤트 대기
* **Terminated**: 실행 종료

OS는 **컨텍스트 스위칭**을 통해 여러 프로세스를 번갈아 실행한다.

---

## 예시: PID/PPID 확인

```c
#include <stdio.h>
#include <unistd.h>

int main(void) {
    printf("PID: %d\n", getpid());
    printf("PPID: %d\n", getppid());
    return 0;
}
```

* `getpid()`는 내 PID, `getppid()`는 부모 PID를 반환한다.

---

## 프로세스 생성과 종료 흐름

* **생성**: `fork()`로 복제
* **실행 변경**: `exec()` 계열로 새로운 프로그램 실행
* **대기**: `wait()`로 자식 종료 대기

보통 다음 흐름을 사용한다.

1. `fork()`로 자식 생성
2. 자식은 `exec()`로 다른 프로그램 실행
3. 부모는 `wait()`로 자식 종료 대기

---

## 예시: 자식 프로세스 대기

```c
#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>

int main(void) {
    pid_t pid = fork();

    if (pid == 0) {
        printf("[Child] PID=%d\n", getpid());
        return 0;
    } else {
        int status;
        wait(&status);
        printf("[Parent] child exit status=%d\n", WEXITSTATUS(status));
    }
    return 0;
}
```

---

## 핵심 정리

* 프로세스는 **실행 중인 프로그램**
* OS는 각 프로세스에 자원을 할당하고 스케줄링한다
* `fork()`/`exec()`/`wait()`가 기본 흐름이다
