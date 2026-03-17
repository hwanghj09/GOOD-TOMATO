# C언어 while 반복문

## 구조
```c
while (조건) {
    실행문
}
```

**조건**이 참인 동안에 계속 반복합니다. 조건이 처음부터 거짓이면 한 번도 실행되지 않습니다.

[AD]
예시
--
```c
int a = 1;
while (a <= 10) {
    printf("현재 a의 값: %d\n", a);
    a++;
}
```

결과
--
```
현재 a의 값: 1
현재 a의 값: 2
현재 a의 값: 3
현재 a의 값: 4
현재 a의 값: 5
현재 a의 값: 6
현재 a의 값: 7
현재 a의 값: 8
현재 a의 값: 9
현재 a의 값: 10
```

## 언제 while을 쓰나요?

- 반복 횟수가 정해져 있지 않을 때
- 입력값이 특정 조건을 만족할 때까지 반복할 때

예시 (입력 종료)
--
```c
int x;
while (1) {
    scanf("%d", &x);
    if (x == -1) break;
    printf("입력: %d\n", x);
}
```

## do-while (최소 1회 실행)

```c
do {
    실행문
} while (조건);
```

예시
--
```c
int n = 0;
do {
    printf("n = %d\n", n);
    n++;
} while (n < 3);
```

## while의 무한 반복

```c
while (1) {
    printf("무한 반복\n");
}
```

## break / continue

**break**: 반복문 즉시 종료

**continue**: 현재 반복만 건너뛰고 다음 반복 진행

break 예시
--
```c
int a = 1;
while (a <= 10) {
    if (a == 5) {
        break;
    }
    printf("%d\n", a);
    a++;
}
```

continue 예시
--
```c
int a = 0;
while (a < 10) {
    a++;
    if (a % 2 == 0) {
        continue;
    }
    printf("%d\n", a);
}
```
