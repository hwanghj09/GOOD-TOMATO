# C 언어 변수들
---

## 주요 변수 종류

int
정수형 (소수점 없는 숫자)
예시: 
```c
int age = 25;
```

float

실수형 (소수점 있는 숫자, 단정도)

예시:
```c
float pi = 3.14;
```

double

배정도 실수형 (더 정밀한 실수)

예시:
```c
double weight = 65.432;
```

char

문자형 (한 글자 저장)

예시:
```c
char grade = 'A';
```

short

짧은 정수형 (작은 범위의 정수 저장)

예시: 
```c
short s = 1234;
```

long

긴 정수형 (큰 범위의 정수 저장)

예시:
```c
long l = 123456789;
```

bool

불리언형 (참/거짓 저장)

사용하려면 #include <stdbool.h> 필요

```c
bool flag = true;
```
---
[AD]
```c
#include <stdio.h>
#include <stdbool.h>

int main()
{
    int num1 = 10;
    float num2 = 11.53f;
    double num3 = 1.24;
    char a = 'A';
    short s = 2323;
    long l = 53;
    bool flag = true;

    printf("%d\n", num1);
    printf("%.2f\n", num2);
    printf("%.2f\n", num3);
    printf("%c\n", a);
    printf("%d\n", s);
    printf("%ld\n", l);
    printf("%d\n", flag); // true는 1, false는 0으로 출력됨
}
```

```c
결과

10
11.53
1.24
A
2323
53
1
``` 