# 배열과 문자열

배열은 **같은 타입의 값을 연속된 메모리에 저장**하는 자료구조입니다. 
문자열은 **문자(char) 배열**로 표현됩니다.

---

## 1. 배열 기본

```c
int arr[5] = {1, 2, 3, 4, 5};
printf("%d\n", arr[0]); // 1
printf("%d\n", arr[3]); // 4
```

* 인덱스는 **0부터 시작**합니다.
* `arr[0]`이 첫 번째 원소입니다.

---

## 2. 배열 크기 구하기

```c
int arr[5] = {1, 2, 3, 4, 5};
int size = sizeof(arr) / sizeof(arr[0]);
printf("size = %d\n", size); // 5
```

---

## 3. 문자열은 char 배열

```c
char name[] = "tomato"; // 마지막에 '\0' 자동 포함
printf("%s\n", name);
```

* 문자열 끝에는 **널 문자('\0')**가 들어갑니다.

---

## 4. 문자열 입력 예시

```c
#include <stdio.h>

int main(void) {
    char buf[100];

    printf("이름 입력: ");
    fgets(buf, sizeof(buf), stdin);

    printf("입력한 값: %s", buf);
    return 0;
}
```

* `fgets`는 **공백 포함 입력**이 가능하고 안전합니다.

---

## 핵심 정리

* 배열은 **연속된 메모리 공간**
* 문자열은 **char 배열 + '\0'**
* 인덱스는 **0부터 시작**
