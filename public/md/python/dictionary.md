# Python - 딕셔너리 (Dictionary)

## 딕셔너리란?

딕셔너리는 **키(Key)와 값(Value)을 한 쌍으로** 묶어서 저장하는 자료구조입니다. 순서가 없는(Python 3.7+ 부터는 입력 순서 유지) 컬렉션으로, 키를 통해 값을 빠르게 찾아낼 수 있습니다.

딕셔너리는 중괄호(`{}`) 안에 `키: 값` 형태의 쌍들을 쉼표(`,`)로 구분하여 생성합니다.

```python
# 빈 딕셔너리 생성
empty_dict = {}

# 딕셔너리 생성
person = {
    "name": "Alice",
    "age": 30,
    "city": "New York"
}

print(person)
```

## 딕셔너리 요소 접근

딕셔너리의 값에는 키를 사용하여 접근합니다. 인덱스 번호로는 접근할 수 없습니다.

```python
person = {"name": "Alice", "age": 30}

# 키를 이용한 값 접근
print(person["name"])  # Alice
print(person["age"])   # 30

# get() 메서드 사용
# 키가 존재하지 않을 때 에러 대신 None이나 기본값을 반환
print(person.get("city")) # None
print(person.get("city", "Unknown")) # Unknown
```

## 딕셔너리 수정, 추가, 삭제

*   **추가/수정**: 새로운 키에 값을 할당하면 추가되고, 기존 키에 값을 할당하면 수정됩니다.
*   **삭제**: `del` 키워드나 `pop()` 메서드를 사용합니다.

```python
person = {"name": "Alice", "age": 30}

# 요소 추가
person["city"] = "New York"
print(person)  # {'name': 'Alice', 'age': 30, 'city': 'New York'}

# 요소 수정
person["age"] = 31
print(person)  # {'name': 'Alice', 'age': 31, 'city': 'New York'}

# 요소 삭제 (del)
del person["city"]
print(person)  # {'name': 'Alice', 'age': 31}

# 요소 삭제 (pop)
age = person.pop("age")
print(f"삭제된 값: {age}, 남은 딕셔너리: {person}") # 삭제된 값: 31, 남은 딕셔너리: {'name': 'Alice'}
```

[AD]

## 유용한 딕셔너리 메서드

*   `keys()`: 딕셔너리의 모든 키를 모은 객체를 반환합니다.
*   `values()`: 딕셔너리의 모든 값을 모은 객체를 반환합니다.
*   `items()`: 딕셔너리의 모든 (키, 값) 쌍을 모은 객체를 반환합니다.
*   `clear()`: 딕셔너리의 모든 요소를 삭제합니다.
*   `in`: 특정 키가 딕셔너리에 있는지 확인합니다.

```python
person = {"name": "Alice", "age": 30, "city": "New York"}

# 키 확인
print("name" in person)  # True
print("email" in person) # False

# keys()
for key in person.keys():
    print(key)

# values()
for value in person.values():
    print(value)

# items()
for key, value in person.items():
    print(f"{key}: {value}")
```

딕셔너리는 관련된 정보를 구조적으로 저장하고 관리하는 데 매우 유용합니다. 다음으로는 코드의 재사용성을 높여주는 함수에 대해 알아보겠습니다.

[이전 - 세트](./set) | [다음 - 함수](./function)
