# Python - 세트 (Set)

## 세트란?

세트(Set)는 **순서가 없고 중복을 허용하지 않는** 유일한 값들의 모음입니다. 수학의 집합과 유사하며, 합집합, 교집합, 차집합 등의 연산을 지원합니다.

세트는 중괄호(`{}`) 안에 값들을 쉼표(`,`)로 구분하여 생성합니다.

```python
# 세트 생성
my_set = {1, 2, 3, 4, 5}

# 중복된 값은 자동으로 제거됨
numbers = {1, 2, 2, 3, 3, 3}
print(numbers)  # {1, 2, 3}

# 빈 세트 생성 (주의: {}는 빈 딕셔너리)
empty_set = set()
```

## 세트의 특징

*   **순서가 없음 (Unordered)**: 세트는 요소들을 저장할 때 순서를 유지하지 않습니다. 따라서 인덱싱을 통해 요소에 접근할 수 없습니다.
*   **중복을 허용하지 않음 (Unique)**: 세트는 동일한 값을 중복해서 가질 수 없습니다.

```python
my_set = {1, 2, 3}
# print(my_set[0])  # TypeError: 'set' object is not subscriptable
```

[AD]

## 세트 연산

세트는 집합 연산을 위한 다양한 메서드와 연산자를 제공합니다.

*   **합집합 (Union)**: `|` 연산자 또는 `union()` 메서드
*   **교집합 (Intersection)**: `&` 연산자 또는 `intersection()` 메서드
*   **차집합 (Difference)**: `-` 연산자 또는 `difference()` 메서드
*   **대칭 차집합 (Symmetric Difference)**: `^` 연산자 또는 `symmetric_difference()` 메서드

```python
set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}

# 합집합
print(set1 | set2)  # {1, 2, 3, 4, 5, 6, 7, 8}
print(set1.union(set2))

# 교집합
print(set1 & set2)  # {4, 5}
print(set1.intersection(set2))

# 차집합
print(set1 - set2)  # {1, 2, 3}
print(set1.difference(set2))

# 대칭 차집합
print(set1 ^ set2)  # {1, 2, 3, 6, 7, 8}
print(set1.symmetric_difference(set2))
```

## 세트 관련 메서드

*   `add()`: 세트에 요소를 추가합니다.
*   `update()`: 여러 요소를 한 번에 추가합니다.
*   `remove()`: 특정 요소를 제거합니다. 요소가 없으면 `KeyError`가 발생합니다.
*   `discard()`: 특정 요소를 제거합니다. 요소가 없어도 에러가 발생하지 않습니다.
*   `pop()`: 임의의 요소를 제거하고 반환합니다.
*   `clear()`: 모든 요소를 제거합니다.

```python
my_set = {1, 2, 3}

# 요소 추가
my_set.add(4)
print(my_set)  # {1, 2, 3, 4}

# 여러 요소 추가
my_set.update([5, 6])
print(my_set)  # {1, 2, 3, 4, 5, 6}

# 요소 제거
my_set.remove(6)
print(my_set)  # {1, 2, 3, 4, 5}

my_set.discard(5)
print(my_set)  # {1, 2, 3, 4}

my_set.discard(10) # 에러 발생하지 않음

# 임의의 요소 제거
popped_item = my_set.pop()
print(f"꺼낸 항목: {popped_item}, 남은 세트: {my_set}")

# 모든 요소 제거
my_set.clear()
print(my_set)  # set()
```

세트는 중복을 제거하거나 멤버십 테스트에 유용하게 사용됩니다. 다음으로는 키-값 쌍으로 데이터를 저장하는 딕셔너리에 대해 알아보겠습니다.

[이전 - 튜플](./tuple) | [다음 - 딕셔너리](./dictionary)
