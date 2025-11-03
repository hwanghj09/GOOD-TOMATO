# C언어 함수

함수의 기본 구조
```c
반환형 함수이름(매개변수 목록) {
    // 실행문
    return 값; // 반환형이 void이면 return 생략 가능
}
```
**반환형** : 함수가 돌려주는 값의 타입. 없으면 void.

**함수 이름** : 호출할 때 쓰는 이름.

**매개변수** : 함수에 입력으로 주는 값.

**return 값** : 함수가 실행 후 돌려주는 값.

예시
--
```c
void hello() //hello 함수 정의
{
    printf("hello");
}
int main()
{
    hello(); //hello 함수 호출
    return 0;
}
```

결과
--
```c
hello
```

예시
--
```c
int sum(int x, int y)   //sum 함수 정의 및 매개변수로 x, y를 사용
{
    return x+y;         //x+y의 값 return
}

int main()
{
    int a=5;
    int b=9;
    int c;

    c=sum(a,b);         //sum 함수 호출
    printf("%d",c);
    return 0;
}

```
a가 sum의 매개변수 x가 되고, b가 sum의 매개변수 y가 된다

즉 a+b -> x+y -> 5+9

14가 c에 저장된다

결과
--
```c
14
```

예시
--
```c
void himaster(char name[]) {
    printf("안녕하세요, %s!\n", name);
}

int main() {
    himaster("멋쟁이");
    himaster("토마토");
    return 0;
}
```

결과
--
```c
안녕하세요, 멋쟁이!
안녕하세요, 토마토!
```

