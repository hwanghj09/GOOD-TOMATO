# 시스템 프로그래밍 - fork() (쉬운 설명)

`fork()`는 **현재 프로세스를 복사해서 자식 프로세스를 만드는 함수**입니다.

쉽게 말하면:

* **부모 프로세스가 자기 복사본을 만든다**
* 그래서 **같은 코드가 두 번** 실행됩니다

---
[AD]

## 1단계: fork()를 부르면

```c
fork();
```

이 순간부터 **부모와 자식이 각각 실행**합니다.

---
[AD]

## 2단계: 실행 흐름 그림 (기본)

```
시작
  |
  v
부모 프로세스 실행
  |
  v
fork() 호출
  |
  +------------------+
  |                  |
  v                  v
부모 계속 실행     자식 생성 및 실행
  |                  |
  v                  v
각자 다음 코드 수행 (동시에 진행)
```

---
[AD]

## 예시 1: 가장 단순한 fork()

```c
#include <stdio.h>
#include <unistd.h>

int main(){
    fork();
    printf("hello\n");
    return 0;
}
```

### 실행 흐름 그림

```
시작
  |
  v
fork() 호출
  |
  +-------------+
  |             |
  v             v
부모 실행       자식 실행
  |             |
  v             v
printf("hello")  printf("hello")
  |             |
  v             v
부모 종료       자식 종료
```

### 설명

* `fork()` 이후에는 **부모와 자식이 모두** `printf`를 실행합니다.
* 그래서 `hello`가 **두 번 출력**됩니다.

---
[AD]

## 예시 2: 부모/자식에서 변수 값이 달라짐

```c
#include <stdio.h>
#include <unistd.h>

int main()
{
    int x = 10;
    if (fork() == 0)
    {
        x = 20;
        printf("Child : %d %p\n", x, &x);
    }
    else
    {
        printf("Parent: %d %p\n", x, &x);
    }
    return 0;
}
```

### 실행 흐름 그림

```
시작
  |
  v
x = 10
  |
  v
fork() 호출
  |
  +---------------------+
  |                     |
  v                     v
자식 (fork==0)         부모 (fork>0)
  |                     |
  v                     v
x = 20                 x는 10 유지
  |                     |
  v                     v
printf("Child...", x)  printf("Parent...", x)
  |                     |
  v                     v
자식 종료              부모 종료
```

### 설명

* `fork()`로 부모와 자식이 **각자 실행**됩니다.
* **자식**은 `x`를 20으로 바꾸고 출력합니다.
* **부모**는 그대로 10을 출력합니다.
* 둘 다 `&x`를 찍지만 **서로 다른 메모리 공간**이라 값이 달라 보일 수 있습니다.

---
[AD]

## 예시 3: fork()를 두 번 호출

```c
#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>

int main()
{
    sleep(1);
    printf("%d\n", fork());
    sleep(1);
    printf("%d\n", fork());
    return 0;
}
```

### 실행 흐름 그림

```
시작
  |
  v
sleep(1)
  |
  v
첫 번째 fork()
  |
  +-------------+
  |             |
  v             v
프로세스 A      프로세스 B
  |             |
  v             v
printf(첫 fork)  printf(첫 fork)
  |             |
  v             v
sleep(1)        sleep(1)
  |             |
  v             v
두 번째 fork()  두 번째 fork()
  |             |
  +-----+       +-----+
  |     |       |     |
  v     v       v     v
A1    A2      B1    B2
  |     |       |     |
  v     v       v     v
printf(둘째 fork) 총 4번 실행
```

### 설명

* 첫 번째 `fork()`로 **프로세스 수가 2개**가 됩니다.
* 두 번째 `fork()`는 **각 프로세스가 또 복사**되므로 **총 4개**가 됩니다.
* 출력 횟수도 많아지며, 실행 순서는 **매번 달라질 수** 있습니다.

---
[AD]

## 예시 4: 포인터 주소 출력

```c
#include <stdio.h>
#include <unistd.h>

int main()
{
    int a = 10;
    int *p = &a;
    fork();
    printf("%p\n", p);
    return 0;
}
```

### 실행 흐름 그림

```
시작
  |
  v
a = 10
p = &a
  |
  v
fork() 호출
  |
  +-------------+
  |             |
  v             v
부모 실행       자식 실행
  |             |
  v             v
printf(p)       printf(p)
  |             |
  v             v
부모 종료       자식 종료
```

### 설명

* `fork()` 이후 부모/자식이 **각자** `printf`를 실행합니다.
* 포인터 값(주소)이 **같아 보일 수** 있지만,
  실제로는 **각자 자기 메모리 공간**입니다.

---
[AD]

## 핵심 정리

* `fork()`는 **프로세스 복사**
* 부모와 자식이 **각자 실행**
* 같은 코드가 **두 번 실행**될 수 있다
