# 입력

`input()`은 **사용자에게서 한 줄을 입력받아 문자열(str)로 반환**합니다.  
숫자가 필요하면 `int()`, `float()` 등으로 형변환을 해야 합니다.

[AD]

## 기본 사용

```python
name = input("이름: ")
print("안녕하세요,", name)
```

## 숫자 입력 (형변환)

```python
age = int(input("나이: "))
height = float(input("키(cm): "))
print(age, height)
```

## 여러 값 입력

공백으로 구분된 입력은 `split()`으로 나눕니다.

```python
a, b = input("두 수: ").split()
a = int(a)
b = int(b)
print(a + b)
```

## 한 줄 요약

- `input()` 결과는 **항상 문자열**
- 숫자로 쓰려면 **형변환 필수**
