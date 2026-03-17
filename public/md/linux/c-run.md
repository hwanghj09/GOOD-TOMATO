# C 언어 실행
[AD]

간단한 C 프로그램을 작성하고 GCC로 컴파일한 뒤 실행합니다.

## 1. 소스 코드 작성

`hello.c` 파일을 만들고 아래 내용을 입력합니다.

```c
#include <stdio.h>

int main() {
    printf("Hello, Linux!\n");
    return 0;
}
```

## 2. 컴파일

```bash
gcc hello.c -o hello
```

### 명령어 설명

- `gcc`: C 컴파일러 실행
- `hello.c`: 컴파일할 소스 파일
- `-o hello`: 출력 파일(실행 파일) 이름을 `hello`로 지정  
  이 옵션이 없으면 기본 출력 파일은 `a.out`입니다.

예시 (옵션 생략)\n
```bash
gcc hello.c
./a.out
```

## 3. 실행

```bash
./hello
```

## 한 줄 요약

```bash
gcc hello.c -o hello && ./hello
```