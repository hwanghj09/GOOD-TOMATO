# Python - 리스트(List)

## 리스트란?
리스트는 **여러 개의 값을 순서대로 저장**하는 자료형입니다. 하나의 변수에 많은 데이터를 담을 수 있어요.

### 리스트의 특징
- **순서가 있음** (인덱스로 접근 가능)
- **중복 허용** (같은 값 여러 개 저장 가능)
- **변경 가능** (값 추가, 삭제, 수정 가능)
- **다양한 타입** (숫자, 문자, 불린 등 섞어서 저장 가능)

---

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

### 양의 인덱스 (앞에서부터)
```python
fruits = ['사과', '바나나', '오렌지', '포도', '딸기']
#         [0]    [1]     [2]      [3]   [4]
```

**인덱스는 0부터 시작합니다!**

### 음의 인덱스 (뒤에서부터)
```python
fruits = ['사과', '바나나', '오렌지', '포도', '딸기']
#         [-5]   [-4]    [-3]     [-2]  [-1]
```

## 인덱싱 예시

### 기본 인덱싱
```python
fruits = ['사과', '바나나', '오렌지', '포도', '딸기']

print(fruits[0])   # 사과 (첫 번째)
print(fruits[1])   # 바나나 (두 번째)
print(fruits[2])   # 오렌지 (세 번째)
print(fruits[-1])  # 딸기 (마지막)
print(fruits[-2])  # 포도 (뒤에서 두 번째)
```

### 인덱스 오류 주의
```python
fruits = ['사과', '바나나', '오렌지']

print(fruits[2])   # 오렌지 (정상)
print(fruits[3])   # ❌ IndexError: list index out of range
print(fruits[-4])  # ❌ IndexError: list index out of range
```

### 중첩 리스트 인덱싱
```python
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

print(matrix[0])     # [1, 2, 3]
print(matrix[0][0])  # 1
print(matrix[1][2])  # 6
print(matrix[-1][-1]) # 9
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

### 음의 인덱스 활용
```python
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

print(numbers[-3:])   # [7, 8, 9] (뒤에서 3개)
print(numbers[:-2])   # [0, 1, 2, 3, 4, 5, 6, 7] (뒤에서 2개 제외)
print(numbers[-5:-2]) # [5, 6, 7] (뒤에서 5번째부터 3번째까지)
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
# 직접 생성
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print(matrix)

# 리스트 컴프리헨션으로 생성
matrix = [[0] * 3 for _ in range(3)]
print(matrix)  # [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
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

## 주의사항 - 얕은 복사
```python
# ❌ 잘못된 방법
matrix = [[0] * 3] * 3
matrix[0][0] = 1
print(matrix)  # [[1, 0, 0], [1, 0, 0], [1, 0, 0]] - 모든 행이 같이 변경됨!

# ✅ 올바른 방법
matrix = [[0] * 3 for _ in range(3)]
matrix[0][0] = 1
print(matrix)  # [[1, 0, 0], [0, 0, 0], [0, 0, 0]] - 첫 번째 행만 변경됨
```

---

# 리스트와 반복문

## for문으로 리스트 순회

### 값으로 순회
```python
fruits = ['사과', '바나나', '오렌지']
for fruit in fruits:
    print(f"과일: {fruit}")
```

### 인덱스와 값 함께 순회 - enumerate()
```python
fruits = ['사과', '바나나', '오렌지']
for i, fruit in enumerate(fruits):
    print(f"{i}번째: {fruit}")

# 시작 인덱스 지정
for i, fruit in enumerate(fruits, 1):
    print(f"{i}번째: {fruit}")
```

### 인덱스로 순회
```python
fruits = ['사과', '바나나', '오렌지']
for i in range(len(fruits)):
    print(f"{i}번째: {fruits[i]}")
```

## 여러 리스트 동시 순회 - zip()
```python
names = ['철수', '영희', '민수']
ages = [25, 30, 28]
cities = ['서울', '부산', '대구']

for name, age, city in zip(names, ages, cities):
    print(f"{name}({age}세): {city}")
```

---

# 실전 예제

## 1. 성적 관리 프로그램
```python
students = []
scores = []

while True:
    print("\n=== 성적 관리 ===")
    print("1. 학생 추가")
    print("2. 성적 확인")
    print("3. 평균 계산")
    print("4. 종료")
    
    choice = input("선택: ")
    
    if choice == '1':
        name = input("학생 이름: ")
        score = int(input("점수: "))
        students.append(name)
        scores.append(score)
        print(f"{name} 학생이 추가되었습니다.")
    
    elif choice == '2':
        if students:
            for i, (name, score) in enumerate(zip(students, scores)):
                print(f"{i+1}. {name}: {score}점")
        else:
            print("등록된 학생이 없습니다.")
    
    elif choice == '3':
        if scores:
            average = sum(scores) / len(scores)
            print(f"평균 점수: {average:.1f}점")
        else:
            print("등록된 점수가 없습니다.")
    
    elif choice == '4':
        print("프로그램을 종료합니다.")
        break
```

## 2. 숫자 야구 게임
```python
import random

def number_baseball():
    # 정답 생성 (1~9 중복 없는 3자리)
    answer = random.sample(range(1, 10), 3)
    attempts = 0
    
    print("숫자 야구 게임 시작! (1~9 중복 없는 3자리 숫자)")
    
    while True:
        attempts += 1
        guess_str = input(f"{attempts}번째 시도: ")
        
        if len(guess_str) != 3 or not guess_str.isdigit():
            print("3자리 숫자를 입력하세요!")
            attempts -= 1
            continue
        
        guess = [int(x) for x in guess_str]
        
        if len(set(guess)) != 3:
            print("중복된 숫자가 있습니다!")
            attempts -= 1
            continue
        
        strikes = 0
        balls = 0
        
        for i in range(3):
            if guess[i] == answer[i]:
                strikes += 1
            elif guess[i] in answer:
                balls += 1
        
        if strikes == 3:
            print(f"축하합니다! {attempts}번 만에 맞췄습니다!")
            print(f"정답: {answer}")
            break
        else:
            print(f"{strikes} Strike, {balls} Ball")

number_baseball()
```

## 3. 단어 빈도 분석
```python
def word_frequency(text):
    # 문장부호 제거하고 소문자로 변환
    import string
    for punct in string.punctuation:
        text = text.replace(punct, '')
    
    words = text.lower().split()
    word_count = {}
    
    for word in words:
        if word in word_count:
            word_count[word] += 1
        else:
            word_count[word] = 1
    
    # 빈도순으로 정렬
    sorted_words = sorted(word_count.items(), key=lambda x: x[1], reverse=True)
    
    print("단어 빈도 분석 결과:")
    for word, count in sorted_words:
        print(f"{word}: {count}번")

text = input("분석할 텍스트를 입력하세요: ")
word_frequency(text)
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

## 2. 리스트 복사 주의
```python
# ❌ 얕은 복사 (같은 객체를 참조)
list1 = [1, 2, 3]
list2 = list1
list2.append(4)
print(list1)  # [1, 2, 3, 4] - 원본도 변경됨!

# ✅ 깊은 복사 (새로운 객체 생성)
list1 = [1, 2, 3]
list2 = list1.copy()  # 또는 list2 = list1[:]
list2.append(4)
print(list1)  # [1, 2, 3] - 원본 유지
```


---

- [이전 - while 반복문](./while)