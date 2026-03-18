# while 반복문

`while`은 **조건이 참인 동안 계속 반복**합니다.  
조건이 거짓이면 한 번도 실행되지 않을 수 있습니다.

[AD]

## 기본 예시

```python
n = 0
while n < 3:
    print(n)
    n += 1
```

## 무한 반복과 종료

```python
while True:
    cmd = input("명령어: ")
    if cmd == "exit":
        break
```

## continue 사용

```python
n = 0
while n < 5:
    n += 1
    if n % 2 == 0:
        continue
    print(n)  # 1, 3, 5
```

## 주의사항

- 반복문 안에서 **조건이 언젠가 거짓이 되도록** 반드시 갱신해야 합니다.  
  그렇지 않으면 무한 반복이 됩니다.
