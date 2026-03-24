# 시간 측정(time.h, clock)

C에서 시간 측정은 **실제 시간** 또는 **CPU 사용 시간**을 볼 수 있습니다.

---

## 1. time()으로 현재 시간 확인

```c
#include <stdio.h>
#include <time.h>

int main(void) {
    time_t now = time(NULL);
    printf("현재 시간(초): %ld\n", (long)now);
    return 0;
}
```

* `time()`은 **1970년 1월 1일 이후 초**를 반환합니다.

---

## 2. 시간 차이 계산 (difftime)

```c
#include <stdio.h>
#include <time.h>

int main(void) {
    time_t start = time(NULL);
    // 작업이라고 가정
    for (volatile int i = 0; i < 100000000; i++) {}
    time_t end = time(NULL);

    double diff = difftime(end, start);
    printf("걸린 시간: %.0f초\n", diff);
    return 0;
}
```

---

## 3. clock()으로 CPU 시간 측정

```c
#include <stdio.h>
#include <time.h>

int main(void) {
    clock_t start = clock();

    for (volatile int i = 0; i < 100000000; i++) {}

    clock_t end = clock();
    double cpu_time = (double)(end - start) / CLOCKS_PER_SEC;

    printf("CPU 시간: %.3f초\n", cpu_time);
    return 0;
}
```

* `clock()`은 **CPU가 실제로 일한 시간**을 계산합니다.

---

## 핵심 정리

* `time()`은 **벽시계 시간(초)**
* `difftime()`으로 **시간 차이** 계산
* `clock()`은 **CPU 사용 시간** 측정
