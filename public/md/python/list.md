# Python - 리스트 (List)

## 리스트란?

리스트는 여러 개의 값을 순서대로 저장하는 자료구조입니다. 파이썬에서 가장 많이 사용되는 자료구조 중 하나로, 대괄호(`[]`) 안에 값들을 쉼표(`,`)로 구분하여 생성합니다. 리스트 안에는 숫자, 문자열, 불리언 등 다양한 데이터 타입을 함께 저장할 수 있습니다.

```python
# 빈 리스트 생성
empty_list = []

# 다양한 타입을 가진 리스트
my_list = [1, "Hello", 3.14, True]

# 숫자 리스트
numbers = [10, 20, 30, 40, 50]
```

## 리스트 인덱싱과 슬라이싱

리스트에 저장된 각 값(요소)에는 순서대로 번호(인덱스)가 붙어있습니다. 인덱스는 0부터 시작합니다.

*   **인덱싱 (Indexing)**: 특정 위치의 요소를 하나만 선택합니다.
*   **슬라이싱 (Slicing)**: 특정 범위의 요소들을 잘라내어 새로운 리스트를 만듭니다.

```python
numbers = [10, 20, 30, 40, 50]

# 인덱싱
print(numbers[0])   # 10 (첫 번째 요소)
print(numbers[2])   # 30 (세 번째 요소)
print(numbers[-1])  # 50 (마지막 요소)

# 슬라이싱 [start:stop:step]
print(numbers[1:4]) # [20, 30, 40] (인덱스 1부터 3까지)
print(numbers[:3])  # [10, 20, 30] (처음부터 인덱스 2까지)
print(numbers[2:])  # [30, 40, 50] (인덱스 2부터 끝까지)
print(numbers[::2]) # [10, 30, 50] (처음부터 끝까지 2칸 간격으로)
```

## 리스트 수정 및 추가

리스트는 **변경 가능한(mutable)** 객체이므로, 생성된 후에도 요소를 수정, 추가, 삭제할 수 있습니다.

```python
my_list = [1, 2, 3]

# 요소 변경
my_list[1] = 200
print(my_list)  # [1, 200, 3]

# 요소 추가 (append: 맨 뒤에 추가)
my_list.append(4)
print(my_list)  # [1, 200, 3, 4]

# 요소 삽입 (insert: 특정 위치에 추가)
my_list.insert(1, 100)
print(my_list)  # [1, 100, 200, 3, 4]

# 리스트 확장 (extend: 다른 리스트를 이어붙임)
extra_list = [5, 6]
my_list.extend(extra_list)
print(my_list)  # [1, 100, 200, 3, 4, 5, 6]
```

[AD]

## 리스트 삭제

*   `del`: 특정 인덱스의 요소를 삭제합니다.
*   `pop()`: 특정 인덱스의 요소를 꺼내고(반환하고) 삭제합니다. 인덱스를 지정하지 않으면 마지막 요소를 꺼냅니다.
*   `remove()`: 특정 값을 찾아 첫 번째로 일치하는 요소를 삭제합니다.

```python
my_list = [10, 20, 30, 40, 20]

# del로 삭제
del my_list[1]
print(my_list)  # [10, 30, 40, 20]

# pop으로 삭제
popped_item = my_list.pop(2)
print(f"꺼낸 항목: {popped_item}, 남은 리스트: {my_list}") # 꺼낸 항목: 40, 남은 리스트: [10, 30, 20]

# remove로 삭제
my_list.remove(20)
print(my_list)  # [10, 30] (첫 번째 20만 삭제됨)
```

## 유용한 리스트 메서드

*   `len()`: 리스트의 길이를 반환합니다.
*   `sort()`: 리스트를 정렬합니다 (원본 리스트를 변경).
*   `sorted()`: 정렬된 새로운 리스트를 반환합니다 (원본 리스트는 유지).
*   `reverse()`: 리스트의 순서를 뒤집습니다 (원본 리스트를 변경).
*   `index()`: 특정 값의 인덱스를 반환합니다.
*   `count()`: 특정 값의 개수를 셉니다.

```python
numbers = [3, 1, 4, 1, 5, 9, 2]

print(f"리스트 길이: {len(numbers)}")

# 정렬
numbers.sort() # 오름차순 정렬
print(f"정렬된 리스트: {numbers}")
numbers.sort(reverse=True) # 내림차순 정렬
print(f"내림차순 정렬된 리스트: {numbers}")

print(f"값 1의 개수: {numbers.count(1)}")
```

리스트는 파이썬 프로그래밍의 핵심적인 부분이므로, 자유자재로 다룰 수 있도록 연습하는 것이 중요합니다.

[이전 - 반복문 (while)](./while) | [다음 - 튜플](./tuple)
