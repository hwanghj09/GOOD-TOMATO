
# 람다 (Lambda), map, filter

파이썬은 함수형 프로그래밍 패러다임의 일부 개념을 지원하며, `lambda`, `map`, `filter`는 이를 위한 유용한 도구들입니다.

## 1. 람다 (Lambda) 함수

람다 함수는 이름 없는(익명) 함수를 한 줄로 간결하게 정의할 때 사용됩니다. 주로 간단한 기능을 수행하는 함수를 임시적으로 사용할 때 유용합니다.

### 기본 문법

```python
lambda arguments: expression
```

-   `arguments`: 함수가 받을 인자들 (여러 개 가능)
-   `expression`: 함수가 반환할 값 (단일 표현식만 가능)

### 일반 함수 vs 람다 함수

```python
# 일반 함수
def add(x, y):
    return x + y
print(add(1, 2)) # 3

# 람다 함수
add_lambda = lambda x, y: x + y
print(add_lambda(1, 2)) # 3
```

### 람다 함수의 활용

주로 `map()`, `filter()`, `sorted()`와 같은 고차 함수(함수를 인자로 받거나 함수를 반환하는 함수)와 함께 사용됩니다.

```python
# 리스트 정렬 시 람다 사용 (두 번째 요소를 기준으로 정렬)
points = [(1, 2), (3, 1), (5, 0)]
sorted_points = sorted(points, key=lambda p: p[1])
print(sorted_points) # [(5, 0), (3, 1), (1, 2)]
```

## 2. `map()` 함수

`map()` 함수는 이터러블(리스트, 튜플 등)의 각 요소에 함수를 적용한 결과를 새로운 이터레이터로 반환합니다.

### 기본 문법

```python
map(function, iterable)
```

### `map()` 활용 예시

```python
numbers = [1, 2, 3, 4, 5]

# 각 숫자를 제곱하기
squared_numbers = list(map(lambda x: x * x, numbers))
print(squared_numbers) # [1, 4, 9, 16, 25]

# 문자열을 정수로 변환
str_numbers = ['1', '2', '3']
int_numbers = list(map(int, str_numbers))
print(int_numbers) # [1, 2, 3]
```

## 3. `filter()` 함수

`filter()` 함수는 이터러블의 각 요소에 함수를 적용하여, 결과가 `True`인 요소들만 필터링하여 새로운 이터레이터로 반환합니다.

### 기본 문법

```python
filter(function, iterable)
```

### `filter()` 활용 예시

```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# 짝수만 필터링하기
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(even_numbers) # [2, 4, 6, 8, 10]

# 5보다 큰 숫자만 필터링하기
greater_than_5 = list(filter(lambda x: x > 5, numbers))
print(greater_than_5) # [6, 7, 8, 9, 10]
```

---

- [다음 - 정규 표현식](./regex)
- [이전 - 딕셔너리](./dictionary)
