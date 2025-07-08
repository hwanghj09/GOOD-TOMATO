# Python - 반복문 `for`

`for` 문은 **반복문** 중 하나로, 정해진 횟수만큼 어떤 코드를 반복할 때 사용됩니다.

## 기본 구조

```python
for 변수 in 반복가능한_데이터:
    실행할_코드
```

예를 들어 5번 "안녕"을 출력하려면:

```python
for i in range(5):
    print("안녕")
```

결과:
```
안녕
안녕
안녕
안녕
안녕
```

---

## `range()` 함수

`for` 문에서 가장 자주 쓰이는 도구는 `range()` 함수입니다.

### 형식

- `range(끝)` : 0부터 `끝 - 1`까지
- `range(시작, 끝)` : `시작`부터 `끝 - 1`까지
- `range(시작, 끝, 증가값)` : `시작`부터 `끝 - 1`까지 `증가값`만큼 증가하며 반복

### 예시: 증가값 사용

```python
for i in range(1, 10, 2):
    print(i)
```

결과:
```
1
3
5
7
9
```

> `range(1, 10, 2)`은 1부터 9까지 **2씩 증가**하면서 반복합니다.

---

## 예시: 구구단 출력 (2단)

```python
for i in range(1, 10):
    print("2 x", i, "=", 2*i)
```

---

## 예시: 감소하는 `for` 문

증가값을 **음수로 주면 감소**도 가능합니다.

```python
for i in range(5, 0, -1):
    print(i)
```

결과:
```
5
4
3
2
1
```

---

## `range()` 외의 반복가능한 데이터

`for`문은 `range()` 함수 외에도 리스트, 문자열 등 다양한 데이터를 반복할 수 있습니다.

### 리스트(List) 반복

```python
fruits = ['사과', '바나나', '딸기']
for fruit in fruits:
    print(fruit)
```

결과:
```
사과
바나나
딸기
```

### 문자열(String) 반복

```python
for char in "안녕하세요":
    print(char)
```

결과:
```
안
녕
하
세
요
```

---

## `for` 반복문과 함께 자주 사용되는 함수들

### `enumerate()`: 인덱스와 값 함께 가져오기

`enumerate()` 함수는 리스트나 튜플과 같은 순서가 있는 자료형을 반복할 때, 각 요소의 인덱스와 값을 동시에 가져올 수 있게 해줍니다.

```python
fruits = ['사과', '바나나', '딸기']
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")
```

결과:
```
0: 사과
1: 바나나
2: 딸기
```

### `zip()`: 여러 개의 이터러블 동시에 반복하기

`zip()` 함수는 여러 개의 이터러블(리스트, 튜플 등)을 병렬로 묶어서 반복할 수 있게 해줍니다. 길이가 다른 이터러블이 주어지면 가장 짧은 이터러블의 길이에 맞춰 반복합니다.

```python
names = ['Alice', 'Bob', 'Charlie']
ages = [25, 30, 35]

for name, age in zip(names, ages):
    print(f"{name}은(는) {age}살입니다.")
```

결과:
```
Alice은(는) 25살입니다.
Bob은(는) 30살입니다.
Charlie은(는) 35살입니다.
```

### 딕셔너리 `items()`: 키와 값 함께 반복하기

딕셔너리의 `items()` 메서드를 사용하면 딕셔너리의 모든 키(key)와 값(value) 쌍을 동시에 반복할 수 있습니다.

```python
person = {'name': 'Alice', 'age': 30, 'city': 'New York'}

for key, value in person.items():
    print(f"{key}: {value}")
```

결과:
```
name: Alice
age: 30
city: New York
```

### `sorted()`: 정렬된 순서로 반복하기

`sorted()` 함수는 이터러블의 정렬된 새 리스트를 반환합니다. 원본 이터러블은 변경되지 않습니다.

```python
numbers = [3, 1, 4, 1, 5, 9, 2]
for num in sorted(numbers):
    print(num, end=' ')
# 출력: 1 1 2 3 4 5 9

print()

words = ['banana', 'apple', 'cherry']
for word in sorted(words, reverse=True):
    print(word, end=' ')
# 출력: cherry banana apple
```

### `reversed()`: 역순으로 반복하기

`reversed()` 함수는 이터러블의 요소를 역순으로 반복할 수 있는 이터레이터를 반환합니다. 원본 이터러블은 변경되지 않습니다.

```python
numbers = [1, 2, 3, 4, 5]
for num in reversed(numbers):
    print(num, end=' ')
# 출력: 5 4 3 2 1

print()

text = "Python"
for char in reversed(text):
    print(char, end=' ')
# 출력: n o h t y P
```

---

## 정리

- `for` 문은 **정해진 횟수 반복**에 적합
- `range()`로 반복 횟수와 시작/끝/증가값 조절 가능
- 리스트, 문자열 등 다양한 **반복가능한 데이터**를 순회할 수 있음
- `enumerate()`, `zip()`, `items()`, `sorted()`, `reversed()` 등 다양한 내장 함수와 함께 사용하여 `for` 반복문의 활용도를 높일 수 있음
- 증가값은 양수(증가), 음수(감소) 모두 가능

---

- [다음 - while](./while)
- [이전 - 조건문](./if)