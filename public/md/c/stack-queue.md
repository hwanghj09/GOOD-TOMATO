# 간단한 데이터 구조 (스택/큐)

스택과 큐는 **자료를 넣고 빼는 규칙**이 다른 구조입니다.

---

## 1. 스택(Stack)

* **LIFO**: 마지막에 넣은 것이 먼저 나옴

### 간단한 스택 예시

```c
#include <stdio.h>
#define MAX 5

typedef struct {
    int data[MAX];
    int top;
} Stack;

void init(Stack *s) { s->top = -1; }
int isEmpty(Stack *s) { return s->top == -1; }
int isFull(Stack *s) { return s->top == MAX - 1; }

void push(Stack *s, int x) {
    if (isFull(s)) return;
    s->data[++(s->top)] = x;
}

int pop(Stack *s) {
    if (isEmpty(s)) return -1;
    return s->data[(s->top)--];
}

int main(void) {
    Stack s; init(&s);
    push(&s, 10); push(&s, 20);
    printf("%d\n", pop(&s)); // 20
    printf("%d\n", pop(&s)); // 10
    return 0;
}
```

---

## 2. 큐(Queue)

* **FIFO**: 먼저 넣은 것이 먼저 나옴

### 간단한 큐 예시

```c
#include <stdio.h>
#define MAX 5

typedef struct {
    int data[MAX];
    int front;
    int rear;
} Queue;

void init(Queue *q) { q->front = 0; q->rear = 0; }
int isEmpty(Queue *q) { return q->front == q->rear; }
int isFull(Queue *q) { return (q->rear + 1) % MAX == q->front; }

void enqueue(Queue *q, int x) {
    if (isFull(q)) return;
    q->data[q->rear] = x;
    q->rear = (q->rear + 1) % MAX;
}

int dequeue(Queue *q) {
    if (isEmpty(q)) return -1;
    int x = q->data[q->front];
    q->front = (q->front + 1) % MAX;
    return x;
}

int main(void) {
    Queue q; init(&q);
    enqueue(&q, 10); enqueue(&q, 20);
    printf("%d\n", dequeue(&q)); // 10
    printf("%d\n", dequeue(&q)); // 20
    return 0;
}
```

---

## 핵심 정리

* 스택: **LIFO**
* 큐: **FIFO**
* 배열로도 간단히 구현 가능
