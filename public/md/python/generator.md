# Python - 제너레이터 (Generator)

## 제너레이터란?

제너레이터는 이터레이터(iterator)를 생성하는 특별한 종류의 함수입니다. 일반 함수와 달리 `return` 대신 `yield` 키워드를 사용하여 값을 반환하며, 함수가 호출될 때마다 값을 한 번에 모두 반환하는 것이 아니라, 필요할 때마다 하나씩 값을 생성(yield)합니다.

이러한 특성 때문에 제너레이터는 메모리 효율적이며, 대량의 데이터를 처리하거나 무한한 시퀀스를 다룰 때 유용합니다.

## `yield` 키워드

`yield`는 함수의 실행을 일시 중지하고 값을 호출자에게 반환합니다. 다음 번에 함수가 호출되면 `yield`가 있었던 지점부터 실행을 재개합니다.

```python
def my_generator():
    print("첫 번째 yield")
    yield 1
    print("두 번째 yield")
    yield 2
    print("세 번째 yield")
    yield 3

# 제너레이터 객체 생성
gen = my_generator()

# next() 함수로 값 하나씩 가져오기
print(next(gen)) # 첫 번째 yield, 1
print(next(gen)) # 두 번째 yield, 2
print(next(gen)) # 세 번째 yield, 3
# print(next(gen)) # StopIteration 에러 발생
```

## 제너레이터의 장점

1.  **메모리 효율성 (Lazy Evaluation)**: 모든 값을 한꺼번에 메모리에 로드하지 않고, 필요할 때마다 값을 생성하므로 메모리 사용량이 적습니다. 대용량 파일 처리나 무한 시퀀스 생성에 적합합니다.
2.  **코드 간결성**: 이터레이터를 직접 구현하는 것보다 훨씬 간결하게 코드를 작성할 수 있습니다.

```python
# 1부터 n까지의 제곱수를 생성하는 제너레이터
def squares_generator(n):
    for i in range(1, n + 1):
        yield i * i

# 리스트로 모든 값을 생성하는 경우 (메모리 사용)
def squares_list(n):
    return [i * i for i in range(1, n + 1)]

# 제너레이터 사용
for sq in squares_generator(5):
    print(sq) # 1, 4, 9, 16, 25

# 리스트 사용
print(squares_list(5)) # [1, 4, 9, 16, 25]
```

[AD]

## 제너레이터 표현식 (Generator Expression)

리스트 컴프리헨션과 유사하게, 제너레이터도 한 줄로 간결하게 표현할 수 있습니다. 대괄호(`[]`) 대신 소괄호(`()`)를 사용합니다.

```python
# 제너레이터 표현식
gen_exp = (i * i for i in range(1, 6))

print(next(gen_exp)) # 1
print(next(gen_exp)) # 4

# for 문으로 순회 가능
for sq in gen_exp:
    print(sq)
```

## 제너레이터의 활용 예시

*   **대용량 파일 읽기**: 파일을 한 줄씩 읽어 처리할 때.
*   **무한 시퀀스 생성**: 피보나치 수열처럼 끝없이 이어지는 시퀀스를 생성할 때.
*   **데이터 파이프라인**: 데이터를 단계별로 처리할 때.

제너레이터는 파이썬에서 효율적인 코드 작성을 위한 강력한 도구입니다. 다음으로는 비동기 프로그래밍에 대해 알아보겠습니다.

[이전 - 모듈과 패키지](./module) | [다음 - 비동기 프로그래밍](./asyncio)
