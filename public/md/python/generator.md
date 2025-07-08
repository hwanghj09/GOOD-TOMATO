# 제너레이터 (Generator)

제너레이터는 모든 값을 메모리에 올리지 않고, 필요할 때마다 값을 하나씩 생성하여 반환하는 특별한 종류의 이터레이터(iterator)입니다. `yield` 키워드를 사용하여 만듭니다.

## 왜 제너레이터를 사용할까?

-   **메모리 효율성:** 대용량의 데이터 시퀀스를 처리할 때, 모든 데이터를 메모리에 저장하지 않고 필요할 때마다 하나씩 처리하므로 메모리 사용량을 크게 줄일 수 있습니다.
-   **지연 평가 (Lazy Evaluation):** 값이 실제로 필요한 시점까지 계산을 미룹니다. 이는 불필요한 계산을 피하게 해줍니다.

## `yield` 키워드

`yield`는 제너레이터 함수의 실행을 일시 중지하고 값을 호출자에게 반환합니다. 함수는 다음 번에 `next()`가 호출될 때까지 마지막 실행 상태를 기억하고 있다가, 중지된 지점부터 실행을 재개합니다.

### 코드 예시: 무한 수열 생성

```python
def infinite_sequence():
    num = 0
    while True:
        yield num
        num += 1

# 제너레이터 객체 생성
gen = infinite_sequence()

# 필요할 때마다 값을 하나씩 가져옴
print(next(gen)) # 0
print(next(gen)) # 1
print(next(gen)) # 2
```

## 제너레이터 표현식

리스트 컴프리헨션과 유사한 문법으로, `[]` 대신 `()`를 사용하여 제너레이터를 간결하게 만들 수 있습니다.

```python
# 리스트 컴프리헨션 (모든 값을 메모리에 저장)
list_comp = [x*x for x in range(1000)]

# 제너레이터 표현식 (필요할 때 값을 생성)
gen_exp = (x*x for x in range(1000))

print(next(gen_exp)) # 0
print(next(gen_exp)) # 1
```

## `send()` 메서드

제너레이터의 `send()` 메서드를 사용하면 제너레이터 함수 내부로 값을 보낼 수 있습니다. `yield` 표현식은 값을 반환하는 동시에 외부로부터 값을 받을 수도 있습니다.

```python
def simple_generator():
    value = yield 1
    print(f"Received: {value}")
    value = yield 2
    print(f"Received: {value}")

gen = simple_generator()
print(next(gen)) # 1
print(gen.send("Hello")) # Received: Hello, 2
print(next(gen)) # Received: None, StopIteration
```

---

- [다음 - 비동기 프로그래밍](./asyncio)
- [이전 - 모듈과 패키지](./module)