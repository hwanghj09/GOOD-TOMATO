# Python - while 반복문

## while문이란?
while문은 **조건이 참인 동안 계속 반복**하는 문법입니다. 조건이 거짓이 되면 반복을 멈춥니다.

### 기본 구조
```python
while 조건:
    실행할 코드
```

---

## 기본 while문 예시

### 1부터 5까지 출력하기
```python
i = 1
while i <= 5:
    print(i)
    i += 1
```

**실행 결과:**
```
1
2
3
4
5
```

**동작 과정:**
1. `i = 1`, 조건 `i <= 5`는 참이므로 `print(1)` 실행, `i`는 2가 됨
2. `i = 2`, 조건 `i <= 5`는 참이므로 `print(2)` 실행, `i`는 3이 됨
3. `i = 3`, 조건 `i <= 5`는 참이므로 `print(3)` 실행, `i`는 4가 됨
4. `i = 4`, 조건 `i <= 5`는 참이므로 `print(4)` 실행, `i`는 5가 됨
5. `i = 5`, 조건 `i <= 5`는 참이므로 `print(5)` 실행, `i`는 6이 됨
6. `i = 6`, 조건 `i <= 5`는 거짓이므로 반복 종료

---

## 다양한 while문 예시

### 1. 카운트다운
```python
count = 5
while count > 0:
    print(f"{count}초 남았습니다!")
    count -= 1
print("시간 종료!")
```

**실행 결과:**
```
5초 남았습니다!
4초 남았습니다!
3초 남았습니다!
2초 남았습니다!
1초 남았습니다!
시간 종료!
```

### 2. 합계 구하기 (1부터 10까지)
```python
i = 1
total = 0
while i <= 10:
    total += i
    i += 1
print(f"1부터 10까지의 합: {total}")
```

**실행 결과:**
```
1부터 10까지의 합: 55
```

### 3. 구구단 출력 (3단)
```python
dan = 3
i = 1
while i <= 9:
    print(f"{dan} × {i} = {dan * i}")
    i += 1
```

**실행 결과:**
```
3 × 1 = 3
3 × 2 = 6
3 × 3 = 9
3 × 4 = 12
3 × 5 = 15
3 × 6 = 18
3 × 7 = 21
3 × 8 = 24
3 × 9 = 27
```

---

## 사용자 입력과 while문

### 올바른 입력을 받을 때까지 반복
```python
password = ""
while password != "1234":
    password = input("비밀번호를 입력하세요: ")
    if password != "1234":
        print("비밀번호가 틀렸습니다!")
print("로그인 성공!")
```

**실행 결과:**
```
비밀번호를 입력하세요: 123
비밀번호가 틀렸습니다!
비밀번호를 입력하세요: abc
비밀번호가 틀렸습니다!
비밀번호를 입력하세요: 1234
로그인 성공!
```

### 메뉴 시스템
```python
menu = ""
while menu != "4":
    print("\n=== 메뉴 ===")
    print("1. 게임하기")
    print("2. 설정")
    print("3. 도움말")
    print("4. 종료")
    menu = input("선택하세요: ")
    
    if menu == "1":
        print("게임을 시작합니다!")
    elif menu == "2":
        print("설정 화면입니다.")
    elif menu == "3":
        print("도움말을 표시합니다.")
    elif menu == "4":
        print("프로그램을 종료합니다.")
    else:
        print("잘못된 선택입니다!")
```

---

## 무한 루프 (Infinite Loop)

### 무한 루프란?
조건이 항상 참이어서 **끝나지 않는 반복문**입니다.

```python
# ⚠️ 주의: 무한 루프 - 실행하지 마세요!
while True:
    print("무한히 반복됩니다!")
```

### 무한 루프를 활용한 프로그램
```python
while True:
    user_input = input("명령어를 입력하세요 (종료: quit): ")
    if user_input == "quit":
        print("프로그램을 종료합니다.")
        break
    else:
        print(f"입력하신 명령어: {user_input}")
```

---

## break문 - 반복 중단하기

### break문이란?
반복문을 **강제로 종료**하는 명령어입니다.

```python
i = 1
while i <= 10:
    if i == 5:
        break  # i가 5일 때 반복 종료
    print(i)
    i += 1
print("반복 종료")
```

**실행 결과:**
```
1
2
3
4
반복 종료
```

### break 활용 예시 - 숫자 맞추기 게임
```python
import random

answer = random.randint(1, 10)  # 1~10 사이 랜덤 숫자
attempts = 0

while True:
    guess = int(input("1~10 사이의 숫자를 맞춰보세요: "))
    attempts += 1
    
    if guess == answer:
        print(f"정답! {attempts}번 만에 맞췄습니다!")
        break
    elif guess < answer:
        print("더 큰 숫자입니다!")
    else:
        print("더 작은 숫자입니다!")
```

---

## continue문 - 다음 반복으로 건너뛰기

### continue문이란?
현재 반복을 **건너뛰고 다음 반복**으로 넘어가는 명령어입니다.

```python
i = 0
while i < 10:
    i += 1
    if i % 2 == 0:  # 짝수일 때
        continue    # 아래 코드 건너뛰고 다음 반복
    print(i)        # 홀수만 출력됨
```

**실행 결과:**
```
1
3
5
7
9
```

### continue 활용 예시
```python
# 양수만 합계 구하기
total = 0
i = 0

while i < 5:
    num = int(input(f"{i+1}번째 숫자 입력: "))
    i += 1
    
    if num <= 0:  # 0이나 음수이면
        print("양수가 아닙니다. 합계에 포함하지 않습니다.")
        continue  # 다음 반복으로
    
    total += num

print(f"양수들의 합계: {total}")
```
---

- [다음 - 리스트](./list)
- [이전 - 반복문 - for](./for)
