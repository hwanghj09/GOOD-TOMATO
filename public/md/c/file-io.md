# 파일 입출력(fopen / fprintf / fgets)

파일 입출력은 **파일을 열고, 쓰고, 읽는 작업**입니다.

---

## 1. 파일 열기

```c
FILE *fp = fopen("data.txt", "w");
```

* `w` : 쓰기 모드 (기존 파일 덮어쓰기)
* `r` : 읽기 모드
* `a` : 추가 모드

---

## 2. 파일에 쓰기 (fprintf)

```c
#include <stdio.h>

int main(void) {
    FILE *fp = fopen("data.txt", "w");
    if (fp == NULL) return 1;

    fprintf(fp, "hello file\n");
    fprintf(fp, "number: %d\n", 123);

    fclose(fp);
    return 0;
}
```

---

## 3. 파일 읽기 (fgets)

```c
#include <stdio.h>

int main(void) {
    char buf[100];
    FILE *fp = fopen("data.txt", "r");
    if (fp == NULL) return 1;

    fgets(buf, sizeof(buf), fp);
    printf("%s", buf);

    fclose(fp);
    return 0;
}
```

* `fgets`는 **한 줄씩 읽기**에 안전합니다.

---

## 4. 쓰고 읽기 한 번에 보기

```c
#include <stdio.h>

int main(void) {
    FILE *fp = fopen("data.txt", "w");
    if (fp == NULL) return 1;
    fprintf(fp, "tomato\n");
    fclose(fp);

    fp = fopen("data.txt", "r");
    if (fp == NULL) return 1;
    char buf[100];
    fgets(buf, sizeof(buf), fp);
    printf("%s", buf);
    fclose(fp);
    return 0;
}
```

---

## 핵심 정리

* `fopen`으로 파일 열기
* `fprintf`로 쓰기
* `fgets`로 읽기
* 마지막에 `fclose`로 닫기
