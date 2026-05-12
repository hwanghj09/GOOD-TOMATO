# 6. 포인터와 메모리

프린트의 포인터/메모리 단원은 시스템 프로그래밍의 바닥입니다. 프로세스, 파이프, 파일, 동적 할당은 결국 메모리 주소를 이해해야 제대로 설명할 수 있습니다.

### 6.1 포인터는 주소를 저장하는 변수

```c
#include <stdio.h>

int main(void) {
    int x = 10;
    int *p = &x;

    printf("x value   = %d\n", x);
    printf("x address = %p\n", (void *)&x);
    printf("p value   = %p\n", (void *)p);
    printf("*p value  = %d\n", *p);

    return 0;
}
```

핵심은 두 기호입니다.

- `&x`: 변수 `x`의 주소
- `*p`: 포인터 `p`가 가리키는 곳의 값

`int *p = &x;`는 "p는 int를 가리키는 포인터이고, x의 주소를 저장한다"는 뜻입니다.

### 6.2 주소와 값 구분

```c
int x = 10;
int *p = &x;
```

이 상황을 그림으로 보면 다음과 같습니다.

```text
변수 x
주소: 0x1000
값:   10

변수 p
주소: 0x2000
값:   0x1000
```

`p`도 변수이므로 자기 주소가 있습니다. 하지만 `p` 안에 들어 있는 값은 `x`의 주소입니다.

### 6.3 포인터로 값 바꾸기

```c
int x = 10;
int *p = &x;

*p = 99;
printf("%d\n", x);
```

출력은 `99`입니다. `*p = 99`는 `p`가 가리키는 곳, 즉 `x`의 값을 바꾸기 때문입니다.

### 6.4 배열과 포인터

```c
int arr[3] = {10, 20, 30};
int *p = arr;

printf("%d\n", arr[0]);
printf("%d\n", *p);
printf("%d\n", *(p + 1));
```

배열 이름 `arr`은 많은 상황에서 첫 번째 원소의 주소처럼 동작합니다.

- `arr`은 대체로 `&arr[0]`처럼 사용된다.
- `p + 1`은 1바이트 뒤가 아니라 `int` 한 칸 뒤를 의미한다.
- `*(p + 1)`은 `arr[1]`과 같다.

### 6.5 메모리 영역

프로세스의 메모리는 대략 다음과 같이 나뉩니다.

```text
낮은 주소

코드 영역        실행할 기계어 코드
데이터 영역      전역 변수, static 변수
힙 영역          malloc/free로 관리되는 동적 메모리
빈 공간
스택 영역        지역 변수, 함수 호출 정보

높은 주소
```

중요한 감각은 다음과 같습니다.

- 지역 변수는 보통 스택에 생긴다.
- `malloc`으로 받은 메모리는 힙에 생긴다.
- 전역 변수는 데이터 영역에 생긴다.
- 함수 코드는 코드 영역에 있다.

### 6.6 동적 메모리 할당

```c
#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int *arr = malloc(sizeof(int) * 3);
    if (arr == NULL) {
        perror("malloc");
        return 1;
    }

    arr[0] = 10;
    arr[1] = 20;
    arr[2] = 30;

    printf("%d %d %d\n", arr[0], arr[1], arr[2]);

    free(arr);
    arr = NULL;

    return 0;
}
```

`malloc`은 필요한 크기만큼 힙 메모리를 빌려 줍니다. 다 쓰면 `free`로 반납해야 합니다.

### 6.7 `malloc`에서 자주 나는 버그

가장 흔한 실수는 다음 네 가지입니다.

- `malloc` 실패 확인을 안 함
- 할당한 크기보다 많이 씀
- `free`를 안 해서 메모리 누수 발생
- `free`한 뒤 다시 사용함

잘못된 예시는 다음과 같습니다.

```c
int *p = malloc(sizeof(int));
free(p);
*p = 10;   // 위험: 이미 반납한 메모리 사용
```

`free` 후에는 포인터를 `NULL`로 바꿔 두면 실수를 줄일 수 있습니다.

```c
free(p);
p = NULL;
```

[AD]

---

[이전: C 컴파일과 실행](/system/c-build) | [목차](/system/complete) | [다음: 프로세스 개념](/system/process)
