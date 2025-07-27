# Python - 함수 (Function)

## 함수란?

함수는 특정 작업을 수행하는 코드의 묶음입니다. 함수를 사용하면 반복되는 코드를 재사용하고, 코드의 구조를 명확하게 만들어 유지보수를 쉽게 할 수 있습니다.

## 함수 정의와 호출

*   **정의 (Definition)**: `def` 키워드를 사용하여 함수를 만듭니다.
*   **호출 (Call)**: 함수의 이름을 사용하여 함수를 실행합니다.

```python
# 함수 정의
def greet():
    print("안녕하세요!")
    print("파이썬의 세계에 오신 것을 환영합니다.")

# 함수 호출
greet()
```

## 매개변수 (Parameter)와 인자 (Argument)

*   **매개변수 (Parameter)**: 함수를 정의할 때, 함수가 받을 수 있는 값을 나타내는 변수입니다.
*   **인자 (Argument)**: 함수를 호출할 때, 실제로 전달하는 값입니다.

```python
# name이라는 매개변수를 받는 함수 정의
def greet_by_name(name):
    print(f"안녕하세요, {name}님!")

# "Alice"와 "Bob"을 인자로 전달하여 함수 호출
greet_by_name("Alice")
greet_by_name("Bob")
```

### 기본값 (Default Argument)

매개변수에 기본값을 설정할 수 있습니다. 함수 호출 시 인자가 전달되지 않으면 기본값이 사용됩니다.

```python
def greet_default(name="손님"):
    print(f"안녕하세요, {name}님!")

greet_default()         # 안녕하세요, 손님님!
greet_default("Charlie") # 안녕하세요, Charlie님!
```

### 키워드 인자 (Keyword Argument)

인자의 순서와 상관없이 매개변수의 이름을 직접 지정하여 값을 전달할 수 있습니다.

```python
def get_user_info(name, age, city):
    print(f"이름: {name}, 나이: {age}, 도시: {city}")

get_user_info(age=30, city="Seoul", name="David")
```

[AD]

## 반환 값 (Return Value)

함수는 `return` 키워드를 사용하여 결과를 반환할 수 있습니다. `return`을 만나면 함수는 즉시 종료되고, 지정된 값을 호출한 곳으로 돌려줍니다.

```python
# 두 수를 더한 결과를 반환하는 함수
def add(a, b):
    result = a + b
    return result

sum_value = add(10, 5)
print(sum_value)  # 15

# return이 없는 함수는 None을 반환합니다.
result = greet() # 안녕하세요! ...
print(result)    # None
```

### 여러 값 반환하기

파이썬 함수는 튜플을 사용하여 여러 개의 값을 한 번에 반환할 수 있습니다.

```python
def get_min_max(numbers):
    return min(numbers), max(numbers)

my_list = [1, 5, 2, 8, 3]
min_val, max_val = get_min_max(my_list)

print(f"최소값: {min_val}, 최대값: {max_val}") # 최소값: 1, 최대값: 8
```

## 변수의 유효 범위 (Scope)

*   **전역 변수 (Global Variable)**: 함수 바깥에서 정의된 변수로, 프로그램 전체에서 접근 가능합니다.
*   **지역 변수 (Local Variable)**: 함수 안에서 정의된 변수로, 해당 함수 안에서만 접근 가능합니다.

```python
global_var = 10  # 전역 변수

def my_function():
    local_var = 20 # 지역 변수
    print(f"함수 안에서 전역 변수 접근: {global_var}")
    print(f"함수 안에서 지역 변수 접근: {local_var}")

my_function()
# print(local_var) # NameError: name 'local_var' is not defined
```

함수는 프로그램을 구조화하는 데 필수적인 요소입니다. 다음으로는 다른 파일에 작성된 코드를 가져와 사용하는 모듈과 import에 대해 알아보겠습니다.

[이전 - 딕셔너리](./dictionary) | [다음 - 모듈과 import](./import)
