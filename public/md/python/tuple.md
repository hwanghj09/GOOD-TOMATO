
# 튜플 (Tuple)

튜플은 리스트와 유사하게 여러 개의 값을 순서대로 저장하는 자료형입니다. 하지만 리스트와 달리 한 번 생성되면 **내용을 변경할 수 없는(immutable)** 특징을 가집니다.

## 튜플의 특징

-   **순서가 있음:** 인덱스를 통해 요소에 접근할 수 있습니다.
-   **변경 불가능(Immutable):** 생성된 후에는 요소의 추가, 삭제, 변경이 불가능합니다.
-   **중복 허용:** 같은 값을 여러 번 저장할 수 있습니다.
-   **다양한 타입:** 숫자, 문자열, 리스트 등 여러 타입의 데이터를 함께 저장할 수 있습니다.

## 튜플 만들기

튜플은 주로 괄호 `()`를 사용하여 만듭니다. 요소가 하나인 튜플을 만들 때는 요소 뒤에 쉼표(`,`)를 반드시 붙여야 합니다.

```python
# 빈 튜플
empty_tuple = ()
print(empty_tuple) # ()

# 여러 요소를 가진 튜플
my_tuple = (1, 2, 'hello', True)
print(my_tuple) # (1, 2, 'hello', True)

# 괄호 없이 튜플 생성 (튜플 패킹)
another_tuple = 1, 2, 3
print(another_tuple) # (1, 2, 3)

# 요소가 하나인 튜플 (쉼표 필수!)
single_item_tuple = (1,)
print(single_item_tuple) # (1,)

# 쉼표가 없으면 튜플이 아닌 일반 변수로 인식
not_a_tuple = (1)
print(type(not_a_tuple)) # <class 'int'>
```

## 튜플 요소 접근 (인덱싱과 슬라이싱)

리스트와 동일하게 인덱싱과 슬라이싱을 사용하여 튜플의 요소에 접근할 수 있습니다.

```python
my_tuple = ('apple', 'banana', 'cherry', 'date')

# 인덱싱
print(my_tuple[0])  # apple
print(my_tuple[-1]) # date

# 슬라이싱
print(my_tuple[1:3]) # ('banana', 'cherry')
print(my_tuple[:2])  # ('apple', 'banana')
```

## 튜플의 불변성

튜플은 한 번 생성되면 요소를 변경할 수 없습니다. 변경을 시도하면 `TypeError`가 발생합니다.

```python
my_tuple = (1, 2, 3)
# my_tuple[0] = 10 # TypeError: 'tuple' object does not support item assignment
```

하지만 튜플 안에 변경 가능한(mutable) 객체(예: 리스트)가 포함되어 있다면, 그 내부의 변경 가능한 객체는 수정할 수 있습니다.

```python
mutable_in_tuple = (1, [2, 3], 4)
mutable_in_tuple[1][0] = 99
print(mutable_in_tuple) # (1, [99, 3], 4)
```

## 튜플 연산

### 튜플 합치기 (`+`)

```python
tuple1 = (1, 2)
tuple2 = (3, 4)
combined_tuple = tuple1 + tuple2
print(combined_tuple) # (1, 2, 3, 4)
```

### 튜플 반복하기 (`*`)

```python
repeated_tuple = ('a', 'b') * 3
print(repeated_tuple) # ('a', 'b', 'a', 'b', 'a', 'b')
```

### 튜플 길이 (`len()`)

```python
my_tuple = (1, 2, 3)
print(len(my_tuple)) # 3
```

## 튜플 언패킹 (Tuple Unpacking)

튜플의 요소를 여러 변수에 한 번에 할당하는 기능입니다. 함수의 반환 값을 여러 개 받을 때 유용하게 사용됩니다.

```python
coordinates = (10, 20)
x, y = coordinates
print(f"x: {x}, y: {y}") # x: 10, y: 20

def get_user_info():
    return "Alice", 30, "Female"

name, age, gender = get_user_info()
print(f"이름: {name}, 나이: {age}, 성별: {gender}")
```

## 튜플을 사용하는 경우

-   **데이터의 불변성 보장:** 한 번 저장된 데이터가 변경되지 않아야 할 때 사용합니다.
-   **함수의 여러 값 반환:** 함수가 여러 값을 반환할 때 튜플 형태로 반환하는 것이 일반적입니다.
-   **딕셔너리의 키:** 튜플은 불변하므로 딕셔너리의 키로 사용될 수 있습니다. (리스트는 불변하지 않아 키로 사용 불가)

---

- [다음 - 세트](./set)
- [이전 - 리스트](./list)
