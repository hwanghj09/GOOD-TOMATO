# Python - 리스트(List)

## 리스트란?
리스트는 **여러 개의 값을 순서대로 저장**하는 자료형입니다. 하나의 변수에 많은 데이터를 담을 수 있어요.

### 리스트의 특징

- **순서가 있음** (인덱스로 접근 가능)
- **중복 허용** (같은 값 여러 개 저장 가능)
- **변경 가능** (값 추가, 삭제, 수정 가능)
- **다양한 타입** (숫자, 문자, 불린 등 섞어서 저장 가능)

### 인덱스(index)와 요소(element)란?

- 리스트에 들어 있는 각각의 값을 **요소(element)** 라고 합니다.
- 각 요소는 **인덱스(index)** 라는 번호를 가지며, **0부터 시작**합니다.
- 이 인덱스를 이용해 원하는 값을 꺼내 쓸 수 있어요.

예시:
```python
fruits = ['사과', '바나나', '체리']
# 인덱스:    0       1        2

print(fruits[0])  # '사과'
print(fruits[2])  # '체리'
```

## 리스트 만들기

### 빈 리스트 만들기
```python
empty_list = []
print(empty_list)  # []
```

### 값이 있는 리스트 만들기
```python
numbers = [1, 2, 3, 4, 5]
fruits = ['사과', '바나나', '오렌지']
mixed = [1, '안녕', True, 3.14]

print(numbers)  # [1, 2, 3, 4, 5]
print(fruits)   # ['사과', '바나나', '오렌지']
print(mixed)    # [1, '안녕', True, 3.14]
```

### list() 함수로 만들기
```python
text = "hello"
char_list = list(text)
print(char_list)  # ['h', 'e', 'l', 'l', 'o']

range_list = list(range(1, 6))
print(range_list)  # [1, 2, 3, 4, 5]
```

---

# 인덱싱 (Indexing)

## 인덱스란?
인덱스는 리스트에서 **각 요소의 위치를 나타내는 번호**입니다.

### 인덱스 (앞에서부터)
```python
fruits = ['사과', '바나나', '오렌지', '포도', '딸기']
#         [0]    [1]     [2]      [3]   [4]
```

**인덱스는 0부터 시작합니다!**

## 인덱싱 예시

### 기본 인덱싱
```python
fruits = ['사과', '바나나', '오렌지', '포도', '딸기']

print(fruits[0])   # 사과 (첫 번째)
print(fruits[1])   # 바나나 (두 번째)
print(fruits[2])   # 오렌지 (세 번째)
```

### 인덱스 오류 주의
```python
fruits = ['사과', '바나나', '오렌지']

print(fruits[2])   # 오렌지 (정상)
print(fruits[3])   # ❌ IndexError: list index out of range
```

### 중첩 리스트 인덱싱
```python
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

print(matrix[0])     # [1, 2, 3]
print(matrix[0][0])  # 1
print(matrix[1][2])  # 6
```

---

# 슬라이싱 (Slicing)

## 슬라이싱이란?
슬라이싱은 리스트에서 **여러 개의 요소를 한 번에 가져오는** 방법입니다.

### 기본 문법
```python
리스트[시작:끝]      # 시작부터 끝-1까지
리스트[시작:끝:스텝]  # 시작부터 끝-1까지 스텝 간격으로
```

**중요**: 끝 인덱스는 **포함되지 않습니다**!

## 기본 슬라이싱

### 범위 지정
```python
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

print(numbers[2:5])   # [2, 3, 4] (인덱스 2, 3, 4)
print(numbers[1:4])   # [1, 2, 3] (인덱스 1, 2, 3)
print(numbers[0:3])   # [0, 1, 2] (인덱스 0, 1, 2)
```

### 처음부터 또는 끝까지
```python
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

print(numbers[:5])    # [0, 1, 2, 3, 4] (처음부터 인덱스 4까지)
print(numbers[5:])    # [5, 6, 7, 8, 9] (인덱스 5부터 끝까지)
print(numbers[:])     # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] (전체 복사)
```

## 스텝(Step) 활용

### 기본 스텝
```python
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

print(numbers[::2])   # [0, 2, 4, 6, 8] (2칸씩 건너뛰기)
print(numbers[1::2])  # [1, 3, 5, 7, 9] (1부터 2칸씩)
print(numbers[::3])   # [0, 3, 6, 9] (3칸씩 건너뛰기)
```

### 역순으로 슬라이싱
```python
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

print(numbers[::-1])  # [9, 8, 7, 6, 5, 4, 3, 2, 1, 0] (전체 역순)
print(numbers[::-2])  # [9, 7, 5, 3, 1] (역순으로 2칸씩)
print(numbers[8:2:-1]) # [8, 7, 6, 5, 4, 3] (8부터 3까지 역순)
```

## 문자열과 슬라이싱
```python
text = "Python Programming"

print(text[0:6])     # "Python"
print(text[7:])      # "Programming"
print(text[::-1])    # "gnimmargorP nohtyP" (역순)
print(text[::2])     # "Pto rgamn" (2칸씩)
```

---

# 리스트 조작하기

## 값 변경하기

### 단일 값 변경
```python
fruits = ['사과', '바나나', '오렌지']
fruits[1] = '망고'
print(fruits)  # ['사과', '망고', '오렌지']
```

### 슬라이싱으로 여러 값 변경
```python
numbers = [1, 2, 3, 4, 5]
numbers[1:4] = [20, 30, 40]
print(numbers)  # [1, 20, 30, 40, 5]

# 길이가 다른 리스트로 교체
numbers[1:4] = [100, 200]
print(numbers)  # [1, 100, 200, 5]
```

---

# 리스트 메서드

## 요소 추가하기

### append() - 끝에 추가
```python
fruits = ['사과', '바나나']
fruits.append('오렌지')
print(fruits)  # ['사과', '바나나', '오렌지']

fruits.append('포도')
print(fruits)  # ['사과', '바나나', '오렌지', '포도']
```

### insert() - 특정 위치에 추가
```python
fruits = ['사과', '바나나', '오렌지']
fruits.insert(1, '망고')  # 인덱스 1에 '망고' 삽입
print(fruits)  # ['사과', '망고', '바나나', '오렌지']

fruits.insert(0, '딸기')  # 맨 앞에 '딸기' 삽입
print(fruits)  # ['딸기', '사과', '망고', '바나나', '오렌지']
```

### extend() - 여러 요소 추가
```python
fruits = ['사과', '바나나']
more_fruits = ['오렌지', '포도']

fruits.extend(more_fruits)
print(fruits)  # ['사과', '바나나', '오렌지', '포도']

# 문자열도 가능 (각 문자가 개별 요소로 추가)
fruits.extend('12')
print(fruits)  # ['사과', '바나나', '오렌지', '포도', '1', '2']
```

## 요소 제거하기

### remove() - 값으로 제거 (첫 번째만)
```python
fruits = ['사과', '바나나', '사과', '오렌지']
fruits.remove('사과')  # 첫 번째 '사과'만 제거
print(fruits)  # ['바나나', '사과', '오렌지']
```

### pop() - 인덱스로 제거하고 반환
```python
fruits = ['사과', '바나나', '오렌지']

removed = fruits.pop()    # 마지막 요소 제거
print(removed)            # 오렌지
print(fruits)            # ['사과', '바나나']

removed = fruits.pop(0)   # 인덱스 0 요소 제거
print(removed)            # 사과
print(fruits)            # ['바나나']
```

### clear() - 모든 요소 제거
```python
fruits = ['사과', '바나나', '오렌지']
fruits.clear()
print(fruits)  # []
```

### del 키워드 - 인덱스/슬라이스로 제거
```python
fruits = ['사과', '바나나', '오렌지', '포도', '딸기']

del fruits[1]      # 인덱스 1 제거
print(fruits)      # ['사과', '오렌지', '포도', '딸기']

del fruits[1:3]    # 인덱스 1~2 제거
print(fruits)      # ['사과', '딸기']
```

## 검색과 정보

### index() - 값의 인덱스 찾기
```python
fruits = ['사과', '바나나', '오렌지', '바나나']
print(fruits.index('바나나'))    # 1 (첫 번째 '바나나'의 인덱스)
print(fruits.index('오렌지'))    # 2

# 범위 지정 검색
print(fruits.index('바나나', 2))  # 3 (인덱스 2부터 검색)
```

### count() - 값의 개수 세기
```python
numbers = [1, 2, 2, 3, 2, 4, 2]
print(numbers.count(2))  # 4 (2가 4개)
print(numbers.count(5))  # 0 (5는 없음)
```

### in 연산자 - 값 존재 여부 확인
```python
fruits = ['사과', '바나나', '오렌지']
print('사과' in fruits)      # True
print('포도' in fruits)      # False
print('망고' not in fruits)  # True
```

## 정렬과 순서

### sort() - 리스트 자체를 정렬
```python
numbers = [3, 1, 4, 1, 5, 9, 2]
numbers.sort()  # 오름차순 정렬
print(numbers)  # [1, 1, 2, 3, 4, 5, 9]

numbers.sort(reverse=True)  # 내림차순 정렬
print(numbers)  # [9, 5, 4, 3, 2, 1, 1]

# 문자열 정렬
fruits = ['포도', '사과', '바나나', '오렌지']
fruits.sort()
print(fruits)  # ['바나나', '사과', '오렌지', '포도']
```

### sorted() - 새로운 정렬된 리스트 반환
```python
numbers = [3, 1, 4, 1, 5, 9, 2]
sorted_numbers = sorted(numbers)
print(numbers)         # [3, 1, 4, 1, 5, 9, 2] (원본 유지)
print(sorted_numbers)  # [1, 1, 2, 3, 4, 5, 9] (새로운 리스트)
```

### reverse() - 순서 뒤집기
```python
numbers = [1, 2, 3, 4, 5]
numbers.reverse()
print(numbers)  # [5, 4, 3, 2, 1]
```

---

# 리스트 연산

## 덧셈 (+) - 리스트 연결
```python
list1 = [1, 2, 3]
list2 = [4, 5, 6]
result = list1 + list2
print(result)  # [1, 2, 3, 4, 5, 6]
print(list1)   # [1, 2, 3] (원본 유지)
```

## 곱셈 (*) - 리스트 반복
```python
numbers = [1, 2, 3]
repeated = numbers * 3
print(repeated)  # [1, 2, 3, 1, 2, 3, 1, 2, 3]

zeros = [0] * 5
print(zeros)     # [0, 0, 0, 0, 0]
```

## 길이 확인 - len()
```python
fruits = ['사과', '바나나', '오렌지']
print(len(fruits))  # 3

empty_list = []
print(len(empty_list))  # 0
```

---

# 다차원 리스트

## 2차원 리스트 만들기
```python
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print(matrix)
```

## 2차원 리스트 접근
```python
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

print(matrix[0])     # [1, 2, 3] (첫 번째 행)
print(matrix[1][2])  # 6 (두 번째 행, 세 번째 열)

# 전체 출력
for row in matrix:
    for col in row:
        print(col, end=' ')
    print()  # 줄바꿈
```

---

# 자주 하는 실수와 주의사항

## 1. 인덱스 오류
```python
# ❌ 잘못된 예시
fruits = ['사과', '바나나']
print(fruits[2])  # IndexError!

# ✅ 올바른 예시
if len(fruits) > 2:
    print(fruits[2])
else:
    print("인덱스가 범위를 벗어났습니다.")
```


---


- [다음 - 함수](./function)
- [이전 - while 반복문](./while)
