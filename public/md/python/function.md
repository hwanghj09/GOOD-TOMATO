# 함수

함수는 `def`로 정의하고, **재사용 가능한 코드 블록**을 만듭니다.  
필요하면 값을 반환(`return`)할 수 있습니다.

[AD]

## 기본 예시

```python
def add(a, b):
    return a + b

print(add(2, 3))
```

## 반환값이 없는 함수

```python
def hello(name):
    print("안녕,", name)

hello("Tom")
```

## 기본값(디폴트 인자)

```python
def greet(name="Guest"):
    print("Hello", name)

greet()
greet("Alice")
```

## 키워드 인자

```python
def profile(name, age):
    print(name, age)

profile(age=20, name="Kim")
```

## 여러 값 반환

```python
def calc(a, b):
    return a + b, a - b

plus, minus = calc(5, 2)
```

## 내부 함수(중첩 함수)

함수 안에 함수를 정의할 수 있습니다.

```python
def outer(x):
    def inner(y):
        return x + y
    return inner(5)

print(outer(3))  # 8
```

## 외부 함수

일반적으로 파일(모듈) 최상단에 정의한 함수를 말합니다.

```python
def add(a, b):
    return a + b

print(add(1, 2))
```
