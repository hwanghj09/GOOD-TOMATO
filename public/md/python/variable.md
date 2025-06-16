# Python - 변수와 데이터 타입

## 변수란?
변수는 데이터를 저장하는 **공간**입니다. 쉽게 말하면 **어떤 값을 담는 그릇**이라고 생각하면 돼요.

### 변수 만들기

```python
a = 10
```
> 변수 `a`에 숫자 10을 저장

```python
name = '토마토'
```
> 변수 `name`에 문자열 '토마토'를 저장

---

## 변수명 짓는 규칙

### 가능한 변수명
- 영문자로 시작: `name`, `age`, `score`
- 숫자 포함 가능 (첫 글자 제외): `name1`, `score2`
- 언더바(_) 사용 가능: `user_name`, `_count`
- 한글도 가능: `이름`, `나이` (권장하지 않음)

### 불가능한 변수명
- 숫자로 시작: `1name`, `2score`
- 특수문자 사용: `name@`, `score!`
- 공백 포함: `user name`
- 예약어 사용: `if`, `for`, `while`

### 주요 예약어 (사용 불가)
```
and, or, not, if, else, elif, for, while, def, class, 
return, break, continue, pass, try, except, finally, 
import, from, as, True, False, None
```

### 변수명 권장 스타일
- **스네이크 케이스**: `user_name`, `total_score`
- **의미있는 이름**: `age` (좋음) vs `a` (나쁨)
- **소문자 사용**: `name` (좋음) vs `NAME` (상수용)

---

## 변수에 값 더하기 / 빼기

### 일반 방식
```python
a = 5
a = a + 3  # a는 이제 8
a = a - 2  # a는 이제 6
```

### 축약 방식 (더 간단!)
```python
a += 3   # → a = a + 3
a -= 2   # → a = a - 2
```

**축약 연산자 정리:**
- `a += 3` → `a = a + 3` (더하기)
- `a -= 2` → `a = a - 2` (빼기)  
- `a *= 4` → `a = a * 4` (곱하기)
- `a /= 2` → `a = a / 2` (나누기)
- `a //= 3` → `a = a // 3` (몫)
- `a %= 4` → `a = a % 4` (나머지)
- `a **= 2` → `a = a ** 2` (거듭제곱)

---

## 변수에 입력값 저장하기

### 기본 형식
```python
id = input()
```
> 사용자가 입력한 값을 변수 `id`에 저장

### 안내 문구 포함
```python
id = input('아이디를 입력하세요: ')
print('입력하신 id는', id, '입니다.')
```

**실행 결과:**
```
아이디를 입력하세요: tomato
입력하신 id는 tomato 입니다.
```

---

# 데이터 타입 (자료형)

## 파이썬의 기본 데이터 타입

### 1. 숫자형 (Numeric Types)
- **`int`** : 정수 (예: `10`, `-5`, `0`)
- **`float`** : 실수 (예: `3.14`, `-2.5`, `0.0`)

### 2. 문자형 (String Type)
- **`str`** : 문자열 (예: `'안녕'`, `"Python"`, `'''여러줄'''`)

### 3. 불린형 (Boolean Type)
- **`bool`** : 참/거짓 (예: `True`, `False`)

> `bool`형의 `True/False`는 첫글자가 항상 대문자여야합니다
---

## `type()` 함수로 데이터 타입 확인

```python
a = 3
print(type(a))
```
**출력 결과:** `<class 'int'>`

```python
b = 3.14
print(type(b))
```
**출력 결과:** `<class 'float'>`

```python
c = '파이썬'
print(type(c))
```
**출력 결과:** `<class 'str'>`

```python
d = True
print(type(d))
```
**출력 결과:** `<class 'bool'>`

---

# 연산자

## 산술 연산자

**산술 연산자:**
- `+` (더하기): `5 + 3` → `8`
- `-` (빼기): `5 - 3` → `2`
- `*` (곱하기): `5 * 3` → `15`
- `/` (나누기): `10 / 3` → `3.333...`
- `//` (몫): `10 // 3` → `3`
- `%` (나머지): `10 % 3` → `1`
- `**` (거듭제곱): `2 ** 3` → `8`

### 산술 연산자 예시
```python
a = 10
b = 3

print(a + b)    # 13
print(a - b)    # 7
print(a * b)    # 30
print(a / b)    # 3.333...
print(a // b)   # 3 (몫)
print(a % b)    # 1 (나머지)
print(a ** b)   # 1000 (10의 3제곱)
```

---

## 비교 연산자

**비교 연산자:**
- `==` (같다): `5 == 5` → `True`
- `!=` (다르다): `5 != 3` → `True`
- `>` (크다): `5 > 3` → `True`
- `<` (작다): `5 < 3` → `False`
- `>=` (크거나 같다): `5 >= 5` → `True`
- `<=` (작거나 같다): `3 <= 5` → `True`

### 비교 연산자 예시
```python
a = 10
b = 5

print(a == b)   # False
print(a != b)   # True
print(a > b)    # True
print(a < b)    # False
print(a >= 10)  # True
print(b <= 5)   # True
```

---

## 논리 연산자

**논리 연산자:**
- `and` (논리곱): 둘 다 참이면 참
- `or` (논리합): 하나라도 참이면 참  
- `not` (논리부정): 참이면 거짓, 거짓이면 참

### 논리 연산자 진리표
```
A=True,  B=True   → A and B = True,  A or B = True
A=True,  B=False  → A and B = False, A or B = True  
A=False, B=True   → A and B = False, A or B = True
A=False, B=False  → A and B = False, A or B = False

not True = False
not False = True
```

### 논리 연산자 예시
```python
a = True
b = False

print(a and b)  # False
print(a or b)   # True
print(not a)    # False
print(not b)    # True

# 실제 조건문에서 사용
age = 20
height = 175

print(age >= 18 and height >= 170)  # True
print(age < 18 or height < 160)     # False
print(not (age >= 18))              # False
```

---

# 형변환 (데이터 타입 바꾸기)

## 정수로 변환 – `int()`

```python
a = '5'
print(int(a))
```
**출력 결과:** `5`

```python
b = 3.7
print(int(b))
```
**출력 결과:** `3` (소수점 버림)

> **주의:** `'hello'` 같은 문자는 `int()` 변환 불가능!

## 실수로 변환 – `float()`

```python
a = '3.14'
print(float(a))
```
**출력 결과:** `3.14`

```python
b = 5
print(float(b))
```
**출력 결과:** `5.0`

## 문자로 변환 – `str()`

```python
a = 123
print(str(a))
```
**출력 결과:** `'123'`

```python
b = 3.14
print(str(b))
```
**출력 결과:** `'3.14'`

## 불린으로 변환 – `bool()`

```python
print(bool(1))      # True
print(bool(0))      # False
print(bool(''))     # False (빈 문자열)
print(bool('hi'))   # True
print(bool([]))     # False (빈 리스트)
print(bool([1,2]))  # True
```

---

## 실전 예시: 입력 후 더하기

### 잘못된 방법
```python
x = input('첫 번째 숫자: ')  # 문자열로 저장됨
y = input('두 번째 숫자: ')  # 문자열로 저장됨
print('두 수의 합:', x + y)  # 문자열 연결됨
```
**결과:** `1`, `2` 입력 시 → `'1' + '2' = '12'` (숫자 덧셈이 아님!)

### 올바른 방법
```python
x = input('첫 번째 숫자: ')
y = input('두 번째 숫자: ')

x = int(x)  # 문자열 → 정수 변환
y = int(y)  # 문자열 → 정수 변환

print('두 수의 합:', x + y)
```
**결과:** `1`, `2` 입력 시 → `1 + 2 = 3` (올바른 덧셈!)

### 더 간단한 방법
```python
x = int(input('첫 번째 숫자: '))
y = int(input('두 번째 숫자: '))
print('두 수의 합:', x + y)
```

---

## 형변환 에러 예시

```python
a = 'hello'
print(int(a))
```
**오류 발생:** `ValueError: invalid literal for int()`
**이유:** 문자열이 숫자가 아니기 때문에 `int()` 변환 불가능

---

- [다음 - 조건문](./if)
- [이전 - 입출력](./io)
