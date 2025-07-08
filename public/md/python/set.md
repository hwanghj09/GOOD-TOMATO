
# 세트 (Set)

세트(Set)는 **중복을 허용하지 않으며, 순서가 없는** 자료형입니다. 수학의 집합 개념과 유사하며, 주로 중복 제거, 교집합, 합집합, 차집합 등의 집합 연산에 사용됩니다.

## 세트의 특징

-   **중복 불가능:** 같은 값을 여러 번 저장할 수 없습니다. 중복된 값을 추가하면 무시됩니다.
-   **순서 없음:** 요소들이 저장되는 순서가 없으므로 인덱싱이나 슬라이싱을 사용할 수 없습니다.
-   **변경 가능(Mutable):** 세트 자체는 요소를 추가하거나 삭제할 수 있습니다.
-   **다양한 타입:** 숫자, 문자열, 튜플 등 다양한 타입의 데이터를 저장할 수 있습니다. (단, 세트의 요소는 변경 불가능한(immutable) 객체여야 합니다. 리스트나 딕셔너리는 세트의 요소가 될 수 없습니다.)

## 세트 만들기

세트는 중괄호 `{}`를 사용하거나 `set()` 생성자를 사용하여 만듭니다. 빈 세트를 만들 때는 반드시 `set()`을 사용해야 합니다. ( `{}`는 빈 딕셔너리를 만듭니다.)

```python
# 중괄호를 사용하여 세트 생성
my_set = {1, 2, 3, 3, 4}
print(my_set) # {1, 2, 3, 4} (중복 제거됨)

# set() 생성자를 사용하여 세트 생성
another_set = set(['apple', 'banana', 'apple'])
print(another_set) # {'apple', 'banana'}

# 빈 세트 생성 (주의: {}는 빈 딕셔너리)
empty_set = set()
print(empty_set) # set()
print(type({})) # <class 'dict'>
```

## 세트 요소 추가 및 제거

### `add()`: 요소 추가

세트에 단일 요소를 추가합니다. 이미 존재하는 요소를 추가하면 아무런 변화가 없습니다.

```python
my_set = {1, 2, 3}
my_set.add(4)
print(my_set) # {1, 2, 3, 4}
my_set.add(2) # 이미 존재하므로 변화 없음
print(my_set) # {1, 2, 3, 4}
```

### `update()`: 여러 요소 추가

다른 이터러블(리스트, 튜플 등)의 요소들을 세트에 추가합니다.

```python
my_set = {1, 2, 3}
my_set.update([4, 5, 6])
print(my_set) # {1, 2, 3, 4, 5, 6}
my_set.update({6, 7, 8}) # 세트도 가능
print(my_set) # {1, 2, 3, 4, 5, 6, 7, 8}
```

### `remove()`: 특정 요소 제거

세트에서 특정 요소를 제거합니다. 만약 제거하려는 요소가 세트에 없으면 `KeyError`가 발생합니다.

```python
my_set = {1, 2, 3}
my_set.remove(2)
print(my_set) # {1, 3}
# my_set.remove(5) # KeyError: 5
```

### `discard()`: 특정 요소 제거 (오류 없음)

`remove()`와 유사하지만, 제거하려는 요소가 세트에 없어도 오류가 발생하지 않습니다.

```python
my_set = {1, 2, 3}
my_set.discard(2)
print(my_set) # {1, 3}
my_set.discard(5) # 오류 없이 실행
print(my_set) # {1, 3}
```

### `pop()`: 임의의 요소 제거 및 반환

세트에서 임의의 요소를 제거하고 그 값을 반환합니다. 세트는 순서가 없으므로 어떤 요소가 제거될지는 알 수 없습니다. 세트가 비어있으면 `KeyError`가 발생합니다.

```python
my_set = {1, 2, 3}
item = my_set.pop()
print(f"제거된 항목: {item}, 남은 세트: {my_set}")
```

### `clear()`: 모든 요소 제거

세트의 모든 요소를 제거하여 빈 세트로 만듭니다.

```python
my_set = {1, 2, 3}
my_set.clear()
print(my_set) # set()
```

## 세트 연산 (집합 연산)

세트는 수학의 집합 연산을 지원합니다.

```python
A = {1, 2, 3, 4}
B = {3, 4, 5, 6}

# 합집합 (Union): A 또는 B에 있는 모든 요소
print(A | B)       # {1, 2, 3, 4, 5, 6}
print(A.union(B))  # {1, 2, 3, 4, 5, 6}

# 교집합 (Intersection): A와 B 모두에 있는 요소
print(A & B)             # {3, 4}
print(A.intersection(B)) # {3, 4}

# 차집합 (Difference): A에는 있고 B에는 없는 요소
print(A - B)           # {1, 2}
print(A.difference(B)) # {1, 2}

# 대칭 차집합 (Symmetric Difference): A 또는 B에 있지만 둘 다에는 없는 요소
print(A ^ B)                     # {1, 2, 5, 6}
print(A.symmetric_difference(B)) # {1, 2, 5, 6}
```

## 세트 활용

-   **중복 제거:** 리스트나 다른 이터러블에서 중복된 요소를 제거할 때 가장 효율적입니다.
    ```python
    my_list = [1, 2, 2, 3, 4, 4, 5]
    unique_elements = list(set(my_list))
    print(unique_elements) # [1, 2, 3, 4, 5]
    ```
-   **요소 존재 여부 확인:** 특정 요소가 세트 안에 있는지 빠르게 확인할 수 있습니다. (평균 O(1) 시간 복잡도)
    ```python
    my_set = {'apple', 'banana', 'cherry'}
    print('apple' in my_set) # True
    print('grape' in my_set) # False
    ```

---

- [다음 - 딕셔너리](./dictionary)
- [이전 - 튜플](./tuple)
