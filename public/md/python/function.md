# Python - 함수

## 함수란?

함수는 **어떤 작업을 반복적으로 수행할 수 있도록 미리 정의해둔 코드 블록**입니다.

### 함수의 특징

* 재사용이 가능하다 (한 번 정의하면 여러 번 호출 가능)
* 유지보수가 편하다 (수정할 코드가 한 곳에 집중됨)
* 코드를 구조화할 수 있다

## 사용자 정의 함수

사용자가 직접 만드는 함수로, `def` 키워드를 사용하여 정의합니다.

```python
def say_hello():
    print("안녕하세요!")

say_hello()  # 함수 호출
```

### 함수명 규칙

* 영문자, 숫자, 밑줄(\_)로 구성할 수 있음
* 숫자로 시작할 수 없음
* 예약어 사용 불가
* 관례적으로 소문자와 밑줄을 사용 (예: my\_function)

## 함수 설명: 매개변수와 반환값

```python
def greet(name):  # name은 매개변수
    print("안녕하세요", name)

greet("재오")  # 인수로 "재오" 전달
```

```python
def add(a, b):
    return a + b

result = add(3, 5)
print("결과:", result)  # 결과: 8
```

## 지역변수와 전역변수

* 지역변수: 함수 내부에서 선언된 변수 (함수 밖에서 사용 불가)
* 전역변수: 함수 밖에서 선언된 변수 (모든 곳에서 사용 가능)

```python
def func():
    local_var = 10  # 지역변수
    print("지역 변수:", local_var)

global_var = 20  # 전역변수
func()
print("전역 변수:", global_var)
```

## 함수 종류

### 1. 내장 함수 (Built-in Functions)

파이썬이 기본적으로 제공하며, import 없이 사용 가능

* `abs(x)`: 절댓값 반환

```python
print(abs(-5))  # 5
```

* `chr(x)`: 유니코드 숫자를 문자로 변환

```python
print(chr(65))  # A
```

* `ord(x)`: 문자를 유니코드 숫자로 변환

```python
print(ord('A'))  # 65
```

* `int(x)`: 정수로 변환

```python
print(int("10"))  # 10
```

* `float(x)`: 실수로 변환

```python
print(float("3.14"))  # 3.14
```

* `str(x)`: 문자열로 변환

```python
print(str(123))  # '123'
```

* `len(x)`: 요소 개수 반환

```python
print(len([1, 2, 3]))  # 3
```

* `list(x)`: 리스트로 변환

```python
print(list("abc"))  # ['a', 'b', 'c']
```

* `max(x)`: 최대값 반환

```python
print(max(1, 5, 3))  # 5
```

* `min(x)`: 최소값 반환

```python
print(min(1, 5, 3))  # 1
```

* `sum(x)`: 합계 반환

```python
print(sum([1, 2, 3]))  # 6
```

### 2. 외장 함수 (External Functions)

모듈을 import 해야 사용 가능

* `random`: 난수 생성

```python
import random
print(random.randint(1, 10))  # 1~10 사이 정수
```

* `math`: 수학 관련 함수

```python
import math
print(math.sqrt(16))  # 4.0
```

* `datetime`: 날짜/시간 관련 함수

```python
import datetime
now = datetime.datetime.now()
print("현재 시각:", now)
```

## 시퀀스 자료형

시퀀스란 **여러 데이터를 순서대로 나열한 자료형**을 말합니다. 문자열, 리스트, 튜플 등이 포함됩니다.

* 순서가 있고
* 인덱스로 접근 가능하며
* 반복문 사용이 가능합니다.

예시:

```python
text = "hello"
print(text[1])  # 'e'

for char in text:
    print(char)
```

- [다음 - 정렬](./array)
- [이전 - 리스트](./list)
