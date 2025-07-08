
# 딕셔너리 (Dictionary)

딕셔너리(Dictionary)는 **키(key)와 값(value)의 쌍으로 이루어진** 자료형입니다. 순서가 없으며, 키를 통해 값에 접근합니다. 마치 실제 사전에서 단어(키)를 찾아 그 의미(값)를 얻는 것과 같습니다.

## 딕셔너리의 특징

-   **키-값 쌍:** 각 요소는 고유한 키와 그에 해당하는 값으로 구성됩니다.
-   **순서 없음 (Python 3.7+ 부터는 삽입 순서 유지):** 이전 버전에서는 순서가 없었으나, Python 3.7부터는 삽입된 순서를 유지합니다. 하지만 인덱싱은 지원하지 않습니다.
-   **키는 고유해야 함:** 딕셔너리 내에서 키는 중복될 수 없습니다. 중복된 키를 사용하면 나중에 추가된 값이 이전 값을 덮어씁니다.
-   **키는 변경 불가능(Immutable) 객체여야 함:** 키로는 숫자, 문자열, 튜플 등 변경 불가능한 객체만 사용할 수 있습니다. (리스트는 키로 사용 불가)
-   **값은 어떤 타입이든 가능:** 값은 숫자, 문자열, 리스트, 딕셔너리 등 어떤 자료형이든 될 수 있습니다.

## 딕셔너리 만들기

딕셔너리는 중괄호 `{}`를 사용하고, 각 키-값 쌍은 콜론 `:`으로 구분하며, 쌍과 쌍 사이는 쉼표 `,`로 구분합니다.

```python
# 빈 딕셔너리
empty_dict = {}
print(empty_dict) # {}

# 키-값 쌍을 가진 딕셔너리
person = {'name': 'Alice', 'age': 30, 'city': 'New York'}
print(person) # {'name': 'Alice', 'age': 30, 'city': 'New York'}

# dict() 생성자 사용
another_dict = dict(name='Bob', age=25)
print(another_dict) # {'name': 'Bob', 'age': 25}

# 리스트의 튜플 쌍으로 생성
items = [('apple', 1), ('banana', 2)]
fruit_counts = dict(items)
print(fruit_counts) # {'apple': 1, 'banana': 2}
```

## 딕셔너리 요소 접근

키를 사용하여 딕셔너리의 값에 접근합니다.

### 대괄호 `[]` 사용

```python
person = {'name': 'Alice', 'age': 30}
print(person['name']) # Alice

# 존재하지 않는 키에 접근 시 KeyError 발생
# print(person['country']) # KeyError
```

### `get()` 메서드 사용

`get()` 메서드를 사용하면 존재하지 않는 키에 접근해도 오류 대신 `None`을 반환하거나, 기본값을 지정할 수 있습니다.

```python
person = {'name': 'Alice', 'age': 30}
print(person.get('name'))    # Alice
print(person.get('country')) # None
print(person.get('country', 'Unknown')) # Unknown (기본값 지정)
```

## 딕셔너리 요소 추가 및 변경

새로운 키-값 쌍을 추가하거나 기존 키의 값을 변경할 수 있습니다.

```python
person = {'name': 'Alice', 'age': 30}

# 요소 추가
person['city'] = 'New York'
print(person) # {'name': 'Alice', 'age': 30, 'city': 'New York'}

# 요소 변경
person['age'] = 31
print(person) # {'name': 'Alice', 'age': 31, 'city': 'New York'}
```

## 딕셔너리 요소 제거

### `del` 키워드

특정 키-값 쌍을 제거합니다. 존재하지 않는 키를 제거하려 하면 `KeyError`가 발생합니다.

```python
person = {'name': 'Alice', 'age': 30, 'city': 'New York'}
del person['city']
print(person) # {'name': 'Alice', 'age': 30}
```

### `pop()` 메서드

특정 키에 해당하는 값을 제거하고 그 값을 반환합니다. 키가 없으면 `KeyError`가 발생하거나, 기본값을 지정할 수 있습니다.

```python
person = {'name': 'Alice', 'age': 30}
age = person.pop('age')
print(f"제거된 나이: {age}, 남은 딕셔너리: {person}") # 제거된 나이: 30, 남은 딕셔너리: {'name': 'Alice'}

# 기본값 지정
country = person.pop('country', 'Unknown')
print(country) # Unknown
```

### `clear()`: 모든 요소 제거

딕셔너리의 모든 요소를 제거하여 빈 딕셔너리로 만듭니다.

```python
person = {'name': 'Alice', 'age': 30}
person.clear()
print(person) # {}
```

## 딕셔너리 메서드

### `keys()`: 모든 키 반환

딕셔너리의 모든 키를 `dict_keys` 객체로 반환합니다.

```python
person = {'name': 'Alice', 'age': 30}
print(person.keys()) # dict_keys(['name', 'age'])
for key in person.keys():
    print(key)
```

### `values()`: 모든 값 반환

딕셔너리의 모든 값을 `dict_values` 객체로 반환합니다.

```python
person = {'name': 'Alice', 'age': 30}
print(person.values()) # dict_values(['Alice', 30])
for value in person.values():
    print(value)
```

### `items()`: 모든 키-값 쌍 반환

딕셔너리의 모든 키-값 쌍을 튜플 형태의 `dict_items` 객체로 반환합니다.

```python
person = {'name': 'Alice', 'age': 30}
print(person.items()) # dict_items([('name', 'Alice'), ('age', 30)])
for key, value in person.items():
    print(f"{key}: {value}")
```

## 딕셔너리 활용

-   **데이터 매핑:** 특정 키에 해당하는 값을 빠르게 찾아야 할 때 유용합니다.
-   **설정 관리:** 프로그램의 다양한 설정을 키-값 형태로 저장하고 관리할 때 사용됩니다.
-   **데이터 집계:** 특정 항목의 개수를 세거나, 그룹별로 데이터를 집계할 때 효율적입니다.

---

- [다음 - 람다, map, filter](./lambda_map_filter)
- [이전 - 세트](./set)
