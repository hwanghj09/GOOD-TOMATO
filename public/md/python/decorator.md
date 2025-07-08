# 데코레이터 (Decorator)

데코레이터는 기존 함수의 코드를 수정하지 않으면서, 그 함수에 새로운 기능을 덧붙이거나 감싸서(wrap) 행동을 수정할 수 있게 해주는 디자인 패턴입니다. 파이썬에서는 `@` 기호를 사용하여 간결하게 적용할 수 있습니다.

## 왜 데코레이터를 사용할까?

-   **코드 중복 제거:** 여러 함수에 공통적으로 적용되어야 하는 기능(로깅, 실행 시간 측정, 접근 제어 등)을 데코레이터로 만들어 재사용할 수 있습니다.
-   **가독성 및 유지보수:** 원래 함수의 핵심 로직과 부가 기능을 분리하여 코드를 더 깨끗하고 이해하기 쉽게 만듭니다.

## 데코레이터의 구조

1.  데코레이터는 함수를 인자로 받는 함수입니다.
2.  내부에 '래퍼(wrapper)' 함수를 정의합니다.
3.  래퍼 함수 안에서 인자로 받은 원래 함수를 실행하고, 그 앞뒤로 부가 기능을 추가합니다.
4.  데코레이터는 이 래퍼 함수를 반환합니다.

### 코드 예시: 함수 실행 시간 측정

```python
import time

# 데코레이터 정의
def measure_time(func):
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs) # 원래 함수 실행
        end_time = time.time()
        print(f"함수 '{func.__name__}' 실행 시간: {end_time - start_time:.5f}초")
        return result
    return wrapper

# 데코레이터 적용
@measure_time
def calculate_sum(n):
    """1부터 n까지의 합계를 계산합니다."""
    total = 0
    for i in range(n + 1):
        total += i
    return total

# 함수 호출
sum_result = calculate_sum(1000000)
# 출력: 함수 'calculate_sum' 실행 시간: 0.05211초
```

## 매개변수를 받는 데코레이터

데코레이터 자체에 매개변수를 전달해야 할 때, 데코레이터를 반환하는 함수를 한 번 더 감싸는 형태로 구현할 수 있습니다.

```python
def repeat(num_times):
    def decorator_repeat(func):
        def wrapper(*args, **kwargs):
            for _ in range(num_times):
                func(*args, **kwargs)
        return wrapper
    return decorator_repeat

@repeat(num_times=3)
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")
# 출력:
# Hello, Alice!
# Hello, Alice!
# Hello, Alice!
```

---

- [다음 - 모듈과 패키지](./module)
- [이전 - 예외 처리](./exception)