# 변수

파이썬은 타입을 미리 선언하지 않고 **바로 값을 넣어 변수를 만듭니다**.  
필요하면 값을 바꾸거나 다른 타입으로 재할당하는 것도 가능합니다.

[AD]

## 기본 예시

```python
x = 10
name = "Alice"
pi = 3.14
is_ok = True
print(x, name, pi, is_ok)
```

## 타입과 재할당

```python
x = 10        # int
x = "hello"   # str (다른 타입으로 재할당 가능)
```

## 변수 이름 규칙

- 문자 또는 `_`로 시작
- 대소문자를 구분 (`value`와 `Value`는 다름)
- 예약어는 사용 불가 (`for`, `if`, `class` 등)
- 공백/특수문자 사용 불가 (`-` 대신 `_` 사용)

## 여러 개 한 번에 할당

```python
a, b, c = 1, 2, 3
```

## 값 교환 (스왑)

```python
a, b = b, a
```

## 숫자 변수 증가

```python
count = 0
count += 1
count -= 1
```

## None

값이 아직 없음을 나타낼 때 `None`을 사용합니다.

```python
value = None
```
