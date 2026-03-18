# 조건문

파이썬의 조건문은 **들여쓰기(Indentation)** 로 블록을 구분합니다.  
조건은 `if`, `elif`, `else`로 연결합니다.

[AD]

## 기본 구조

```python
if 조건:
    실행문
elif 다른조건:
    실행문
else:
    실행문
```

## 예시

```python
x = 7
if x > 10:
    print("크다")
elif x > 5:
    print("중간")
else:
    print("작다")
```

## 비교/논리 연산자

- 비교: `>`, `<`, `>=`, `<=`, `==`, `!=`
- 논리: `and`, `or`, `not`

```python
age = 20
if age >= 19 and age < 30:
    print("20대")
```

## 여러 조건 한 줄로

파이썬은 다음처럼 읽기 쉬운 비교가 가능합니다.

```python
score = 85
if 80 <= score < 90:
    print("B")
```

## 중첩 조건문

```python
x = 5
if x > 0:
    if x % 2 == 0:
        print("양수이면서 짝수")
    else:
        print("양수이면서 홀수")
```
