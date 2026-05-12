# 15. 표준 입출력과 파일 디스크립터

리눅스에서 열린 파일, 터미널, 파이프, 소켓은 파일 디스크립터라는 숫자로 다뤄집니다.

기본 번호는 다음과 같습니다.

```text
0: 표준 입력 stdin
1: 표준 출력 stdout
2: 표준 에러 stderr
```

### 15.1 `read`와 `write`

```c
#include <unistd.h>

char buf[100];
int n = read(0, buf, sizeof(buf));
write(1, buf, n);
```

이 코드는 표준 입력에서 읽고 표준 출력으로 씁니다.

`printf`는 C 표준 라이브러리 함수이고, `write`는 운영체제에 더 가까운 시스템 호출입니다.

### 15.2 버퍼 차이

`printf`는 내부 버퍼를 사용합니다. 그래서 출력이 바로 보이지 않을 수 있습니다.

`write`는 지정한 바이트를 바로 파일 디스크립터로 보냅니다.

`fork` 전에 `printf`로 출력한 내용이 버퍼에 남아 있으면, 부모와 자식이 같은 버퍼 내용을 각각 flush해서 출력이 중복될 수 있습니다.

예방하려면 다음 중 하나를 사용합니다.

```c
fflush(stdout);
```

또는 줄바꿈을 넣습니다.

```c
printf("message\n");
```

[AD]

---

[이전: 파이프와 exec 연결](/system/pipe-exec) | [목차](/system/complete) | [다음: 프린트 실습 흐름 정리](/system/print-practice)
