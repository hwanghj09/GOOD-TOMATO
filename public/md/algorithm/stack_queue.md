# 스택(Stack)과 큐(Queue)

스택과 큐는 데이터를 일시적으로 저장하고 관리하는 기본적인 자료구조입니다. 데이터가 들어오고 나가는 방식에 따라 구분됩니다.

## 스택 (Stack)

스택은 **'마지막에 들어온 데이터가 가장 먼저 나가는' (LIFO, Last-In, First-Out)** 구조를 가집니다. 마치 접시를 쌓아 올리고, 가장 위(마지막)에 올린 접시부터 사용하는 것과 같습니다.

### 주요 연산
-   **push:** 스택의 가장 위에 데이터를 추가합니다.
-   **pop:** 스택의 가장 위에서 데이터를 제거하고 그 값을 반환합니다.
-   **peek (또는 top):** 스택의 가장 위에 있는 데이터를 제거하지 않고 확인합니다.

### 활용 예시
-   함수 호출 및 재귀 알고리즘
-   웹 브라우저의 '뒤로 가기' 기능
-   괄호 검사

### 코드 예시 (Python 리스트 사용)
```python
stack = []

# push 연산
stack.append('A')
stack.append('B')
stack.append('C')
print(f"스택 상태: {stack}")

# pop 연산
item = stack.pop()
print(f"꺼낸 항목: {item}, 스택 상태: {stack}")

# peek 연산
top_item = stack[-1]
print(f"맨 위 항목: {top_item}, 스택 상태: {stack}")
```

## 큐 (Queue)

큐는 **'가장 먼저 들어온 데이터가 가장 먼저 나가는' (FIFO, First-In, First-Out)** 구조를 가집니다. 마치 은행 창구에서 줄을 선 순서대로 업무를 처리하는 것과 같습니다.

### 주요 연산
-   **enqueue:** 큐의 맨 뒤에 데이터를 추가합니다.
-   **dequeue:** 큐의 맨 앞에서 데이터를 제거하고 그 값을 반환합니다.
-   **front:** 큐의 맨 앞에 있는 데이터를 제거하지 않고 확인합니다.

### 활용 예시
-   너비 우선 탐색(BFS) 알고리즘
-   프린터의 인쇄 작업 대기열
-   운영체제의 작업 스케줄링

### 코드 예시 (Python `collections.deque` 사용)
`deque`는 양쪽 끝에서 빠르게 추가하고 제거할 수 있어 큐 구현에 효율적입니다.
```python
from collections import deque

queue = deque()

# enqueue 연산
queue.append('A')
queue.append('B')
queue.append('C')
print(f"큐 상태: {queue}")

# dequeue 연산
item = queue.popleft()
print(f"꺼낸 항목: {item}, 큐 상태: {queue}")

# front 연산
front_item = queue[0]
print(f"맨 앞 항목: {front_item}, 큐 상태: {queue}")
```