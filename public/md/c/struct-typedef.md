# 구조체(struct)와 typedef

구조체는 **여러 변수를 하나로 묶는 타입**입니다. 
`typedef`는 **타입 이름을 새로 붙이는 문법**입니다.

---

## 1. 구조체 기본

```c
#include <stdio.h>

struct Student {
    int id;
    char name[20];
};

int main(void) {
    struct Student s1 = {1, "Tom"};

    printf("id: %d\n", s1.id);
    printf("name: %s\n", s1.name);
    return 0;
}
```

* `.` 연산자로 멤버에 접근합니다.

---

## 2. typedef로 이름 간단하게

```c
#include <stdio.h>

typedef struct {
    int id;
    char name[20];
} Student;

int main(void) {
    Student s1 = {2, "Jane"};
    printf("id: %d\n", s1.id);
    printf("name: %s\n", s1.name);
    return 0;
}
```

* `typedef`를 쓰면 `struct`를 반복해서 쓰지 않아도 됩니다.

---

## 3. 구조체 포인터

```c
#include <stdio.h>

typedef struct {
    int id;
    char name[20];
} Student;

int main(void) {
    Student s1 = {3, "Kim"};
    Student *p = &s1;

    printf("id: %d\n", p->id);
    printf("name: %s\n", p->name);
    return 0;
}
```

* 포인터로 접근할 때는 `->` 연산자를 사용합니다.

---

## 핵심 정리

* 구조체는 **여러 변수를 하나로 묶는 타입**
* `typedef`로 **이름을 간단히** 할 수 있음
* 포인터 접근은 `->`
