# C언어 반복문 - for

## 구조
```c
for (초기식, 조건식, 증감식){
    실행문
}
```
**초기식** : 반복 시작할 때 한 번 실행됨 주로 반복 횟수 제어할 변수 선언 및 초기화

**조건식** : 조건식이 True인 동안에 반복

**증감식** : 조건이 True일 때마다 반복이 끝난 후 실행
[AD]
예시
--
```c
for(int i=0; i<5; i++)
{
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

## 이중 반복문

```c
for(int i=0; i<5; i++)
{
    for(int j=0; j<3; j++)
    {
        printf("i: %d, j: %d\n", i, j);
    }
}
```

결과
--
```
i: 0, j: 2
i: 1, j: 0
i: 1, j: 1
i: 1, j: 2
i: 2, j: 0
i: 2, j: 1
i: 2, j: 2
i: 3, j: 0
i: 3, j: 1
i: 3, j: 2
i: 4, j: 0
i: 4, j: 1
i: 4, j: 2
```


## 구구단 만들기 예시

```c
#include<stdio.h>

int main()
{
    int a;
    print("몇단까지 출력할까요? : ");
    scanf("%d",&a);

    for(int i=1; i<=a; i++)
    {
        for(int j=1; j<=9; j++)
        {
            printf("%d * %d = %d\n", i, j, i*j);
        }
        printf("\n");
    }
    return 0;
}
```