# C언어 for 반복문

## 구조
```c
for (초기식; 조건식; 증감식) {
    실행문
}
```

**초기식**: 반복을 시작할 때 한 번 실행됨. 보통 반복 변수 선언/초기화

**조건식**: 조건이 참인 동안 반복

**증감식**: 매 반복이 끝난 뒤 실행 (증가/감소)

## 동작 순서

1. 초기식 실행
2. 조건식 검사
3. 조건이 참이면 실행문 수행
4. 증감식 실행
5. 2~4를 반복

[AD]
예시
--
```c
for (int i = 0; i < 5; i++) {
    printf("%d\n", i);
}
```
결과
--
```
0
1
2
3
4
```

## 자주 쓰는 패턴

합 구하기
--
```c
int sum = 0;
for (int i = 1; i <= 10; i++) {
    sum += i;
}
printf("sum = %d\n", sum);
```

역순 반복
--
```c
for (int i = 10; i >= 1; i--) {
    printf("%d ", i);
}
```

## 이중 반복문

```c
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        printf("i: %d, j: %d\n", i, j);
    }
}
```

결과
--
```
i: 0, j: 0
i: 0, j: 1
i: 0, j: 2
i: 1, j: 0
i: 1, j: 1
i: 1, j: 2
i: 2, j: 0
i: 2, j: 1
i: 2, j: 2
```

## break / continue

- `break`: 반복문 즉시 종료
- `continue`: 이번 반복만 건너뛰고 다음 반복 진행

예시
--
```c
for (int i = 1; i <= 10; i++) {
    if (i == 5) break;
    if (i % 2 == 0) continue;
    printf("%d ", i); // 1 3
}
```

## 구구단 만들기 예시

```c
#include <stdio.h>

int main() {
    int a;
    printf("몇단까지 출력할까요? : ");
    scanf("%d", &a);

    for (int i = 1; i <= a; i++) {
        for (int j = 1; j <= 9; j++) {
            printf("%d * %d = %d\n", i, j, i * j);
        }
        printf("\n");
    }
    return 0;
}
```
