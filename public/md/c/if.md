# C언어 if

C언어에서 조건문, if의 구조는

```c
if(조건)
{
    실행문
}
```

이렇게 구성되어있다.    

조건에는

```c
a > b   : a가 b보다 크다
a < b   : a가 b보다 작다
a >= b  : a가 b 이상
a <= b  : a가 b 이하
a == b  : a랑 b랑 같다
a != b  : a는 b와 같지 않다
```

조건문으로 짝수 확인하기 예시
--
```c
int a;
printf("숫자를 입력하세요 : ");
scanf("%d", &a);

if(a%2==0)
{
    printf("짝수입니다.");
}
else
{
    printf("홀수입니다.");
}
```

결과
--
```c
숫자를 입력하세요 : 5  //사용자 입력
홀수입니다.
```
[AD]

조건문으로 성적 확인하기 예시
--
```c
int score;
printf("점수를 입력하세요 : ");
scanf("%d", &score);

if(score>=90)
{
    printf("A");
}
else if(score>=80)
{
    printf("B");
}
else if(score>=70)
{
    printf("머저리");
}
```

결과
--
```c
점수를 입력하세요 : 50  //사용자 입력
머저리
```


## AND와 OR

**AND** : `&&` : 모두 만족해야 참  

**OR**  : `||` : 하나만 만족해도 참

AND, OR 예시
--
```c
int a = 5;
int b= 6;
int c = 1;
int d = 13;

if(a == 5 && b<10)
{
    printf("a는 5이고 10보다 작습니다.\n");
}
if(c==1 || d<10)
{
    printf("c는 1이거나 d는 10보다 작습니다.\n");
}
```

결과
--
```c
a는 5이고 10보다 작습니다.
c는 1이거나 d는 10보다 작습니다.
```