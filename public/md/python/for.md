# for 반복문

파이썬의 `for`는 **컬렉션(리스트, 문자열 등)을 순회**할 때 자주 사용합니다.  
`range()`를 이용하면 특정 횟수만큼 반복할 수 있습니다.

[AD]

## 기본 예시

```python
for i in range(5):
    print(i)
```

## 범위 지정

```python
for i in range(2, 6):   # 2~5
    print(i)
```

```python
for i in range(10, 0, -2):  # 10부터 2까지, -2씩
    print(i)
```

## 리스트/문자열 순회

```python
items = ["a", "b", "c"]
for item in items:
    print(item)
```

```python
for ch in "hello":
    print(ch)
```

## 인덱스와 값 함께

```python
items = ["a", "b", "c"]
for idx, item in enumerate(items):
    print(idx, item)
```

## break / continue

```python
for i in range(1, 6):
    if i == 3:
        continue
    if i == 5:
        break
    print(i)
```
