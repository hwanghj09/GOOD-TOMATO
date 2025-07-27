# Python - 변수와 데이터 타입

## 변수 (Variables)

변수는 데이터를 저장하기 위한 메모리 공간에 붙이는 이름입니다. 파이썬에서는 변수를 만들 때 별도의 선언 과정 없이 값을 할당하면 됩니다.

```python
# 변수명 = 값
x = 10
name = "Alice"
pi = 3.14
is_active = True
```

### 변수 이름 규칙

*   영문자, 숫자, 밑줄(`_`)을 사용할 수 있습니다.
*   숫자로 시작할 수 없습니다.
*   대소문자를 구분합니다 (`myVar`와 `myvar`는 다른 변수입니다).
*   파이썬의 예약어(키워드)는 변수 이름으로 사용할 수 없습니다.

## 데이터 타입 (Data Types)

파이썬은 다양한 종류의 데이터를 다룰 수 있으며, 각 데이터 종류를 **데이터 타입**이라고 합니다. 파이썬의 주요 내장 데이터 타입은 다음과 같습니다.

### 1. 숫자형 (Numeric Types)

*   **정수 (Integer)**: `int` - 소수점이 없는 숫자 (예: `10`, `-5`, `0`)
*   **실수 (Float)**: `float` - 소수점이 있는 숫자 (예: `3.14`, `-0.5`)

```python
# 정수
my_integer = 10

# 실수
my_float = 3.14

# 사칙연산
add = 10 + 5       # 15
subtract = 10 - 5    # 5
multiply = 10 * 5    # 50
divide = 10 / 5      # 2.0 (나누기 결과는 항상 float)
floor_divide = 10 // 3 # 3 (몫)
remainder = 10 % 3   # 1 (나머지)
exponent = 2 ** 3    # 8 (거듭제곱)
```

### 2. 문자열 (String)

*   **문자열 (String)**: `str` - 텍스트 데이터를 나타냅니다. 작은따옴표(`'`)나 큰따옴표(`"`)로 묶어서 표현합니다.

```python
# 문자열 생성
hello = "Hello, World!"
name = 'Alice'

# 문자열 연결 (Concatenation)
greeting = "Hello, " + name  # "Hello, Alice"

# f-string (Formatted String Literals)
message = f"안녕하세요, {name}님!"

# 문자열 길이
length = len(message)

# 인덱싱과 슬라이싱
first_char = message[0]  # '안'
last_char = message[-1] # '!'
substring = message[7:9] # 'Alice'
```

### 3. 불리언 (Boolean)

*   **불리언 (Boolean)**: `bool` - `True` 또는 `False` 두 가지 값을 가집니다. 주로 조건문이나 반복문에서 논리적인 판단을 할 때 사용됩니다.

```python
# 불리언 값
is_true = True
is_false = False

# 비교 연산자
print(5 > 3)    # True
print(5 == 5)   # True
print(5 != 5)   # False

# 논리 연산자
print(True and False) # False
print(True or False)  # True
print(not True)       # False
```

[AD]

## 타입 확인 및 변환

*   `type()`: 변수의 데이터 타입을 확인할 수 있습니다.
*   `int()`, `float()`, `str()`: 다른 데이터 타입으로 변환할 수 있습니다.

```python
# 타입 확인
x = 10
print(type(x))  # <class 'int'>

# 타입 변환
num_str = "123"
number = int(num_str)
print(number + 1) # 124

pi_str = str(3.14)
print(pi_str) # "3.14"
```

이제 변수와 기본 데이터 타입을 이해했으니, 다음 단계로 넘어가 조건문을 사용하여 프로그램의 흐름을 제어하는 방법을 알아보겠습니다.

[이전 - 입출력](./io) | [다음 - 조건문](./if)
