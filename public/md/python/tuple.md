# Python - 튜플 (Tuple)

## 튜플이란?

튜플은 리스트와 유사하게 여러 개의 값을 순서대로 저장하는 자료구조입니다. 하지만 리스트와 가장 큰 차이점은 **변경 불가능(immutable)** 하다는 것입니다. 즉, 한 번 생성된 튜플은 그 내용을 수정, 추가, 삭제할 수 없습니다.

튜플은 소괄호(`()`) 안에 값들을 쉼표(`,`)로 구분하여 생성합니다.

```python
# 빈 튜플 생성
empty_tuple = ()

# 다양한 타입을 가진 튜플
my_tuple = (1, "Hello", 3.14, True)

# 숫자 튜플
numbers = (10, 20, 30, 40, 50)

# 괄호 없이도 튜플 생성 가능
my_tuple2 = 1, "Hello", 3.14, True

# 단일 요소를 가진 튜플 (주의: 쉼표가 필수)
single_tuple = (1,)
not_a_tuple = (1)
```

## 튜플 인덱싱과 슬라이싱

튜플은 리스트와 마찬가지로 인덱싱과 슬라이싱을 지원합니다. 사용 방법은 리스트와 동일합니다.

```python
numbers = (10, 20, 30, 40, 50)

# 인덱싱
print(numbers[0])   # 10
print(numbers[-1])  # 50

# 슬라이싱
print(numbers[1:4]) # (20, 30, 40)
print(numbers[:3])  # (10, 20, 30)
print(numbers[2:])  # (30, 40, 50)
```

## 튜플의 불변성 (Immutability)

튜플은 생성된 후에 그 내용을 변경할 수 없습니다. 이는 프로그램의 안정성을 높이고, 딕셔너리의 키로 사용될 수 있는 등의 장점을 가집니다.

```python
my_tuple = (1, 2, 3)

# my_tuple[0] = 100  # TypeError: 'tuple' object does not support item assignment
# my_tuple.append(4) # AttributeError: 'tuple' object has no attribute 'append'
```

[AD]

## 튜플의 활용

*   **함수에서 여러 값 반환**: 함수가 여러 값을 반환할 때 튜플을 사용하면 편리합니다.
*   **딕셔너리의 키**: 리스트는 변경 가능하여 딕셔너리의 키로 사용할 수 없지만, 튜플은 변경 불가능하므로 키로 사용할 수 있습니다.
*   **데이터의 안전한 보관**: 변경되어서는 안 되는 중요한 데이터를 저장할 때 사용합니다.

```python
# 여러 값 반환
def get_user_info():
    name = "Alice"
    age = 30
    return name, age

user_info = get_user_info()
print(user_info)  # ('Alice', 30)

# 튜플을 딕셔너리 키로 사용
location = {
    (37.5665, 126.9780): "서울 시청",
    (35.1796, 129.0756): "부산 시청"
}
print(location[(37.5665, 126.9780)]) # 서울 시청
```

## 유용한 튜플 메서드

튜플은 변경 불가능하므로 메서드가 많지 않지만, 다음과 같은 유용한 메서드를 제공합니다.

*   `count()`: 특정 값의 개수를 셉니다.
*   `index()`: 특정 값의 인덱스를 반환합니다.

```python
my_tuple = (1, 2, 3, 1, 4, 1)

print(f"값 1의 개수: {my_tuple.count(1)}") # 3
print(f"값 3의 인덱스: {my_tuple.index(3)}") # 2
```

튜플은 리스트와 함께 파이썬에서 중요한 자료구조 중 하나입니다. 다음으로는 중복을 허용하지 않는 집합 자료구조인 세트(Set)에 대해 알아보겠습니다.

[이전 - 리스트](./list) | [다음 - 세트](./set)
