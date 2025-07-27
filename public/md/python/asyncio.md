# Python - 비동기 프로그래밍 (Asyncio)

## 비동기 프로그래밍이란?

비동기 프로그래밍은 프로그램이 작업을 수행하는 동안 다른 작업을 기다리지 않고 동시에 여러 작업을 처리할 수 있도록 하는 프로그래밍 패러다임입니다. 이는 주로 I/O(입출력) 작업(네트워크 요청, 파일 읽기/쓰기, 데이터베이스 쿼리 등)에서 프로그램이 멈추는 것을 방지하여 효율성을 높입니다.

파이썬에서는 `asyncio` 라이브러리를 통해 비동기 프로그래밍을 지원하며, `async`와 `await` 키워드를 사용합니다.

## `async`와 `await`

*   `async def`: 함수를 비동기 함수(코루틴)로 정의할 때 사용합니다.
*   `await`: 비동기 작업이 완료될 때까지 기다리도록 지시합니다. `await`는 반드시 `async` 함수 내에서만 사용할 수 있습니다.

```python
import asyncio
import time

async def say_hello(name, delay):
    print(f"{name}: 시작")
    await asyncio.sleep(delay) # 비동기적으로 delay 시간만큼 기다림
    print(f"{name}: 끝")
    return f"Hello, {name}!"

async def main():
    start_time = time.time()

    # 두 작업을 동시에 시작하고 기다림
    task1 = asyncio.create_task(say_hello("Alice", 2))
    task2 = asyncio.create_task(say_hello("Bob", 1))

    # 작업이 완료될 때까지 기다림
    result1 = await task1
    result2 = await task2

    print(result1)
    print(result2)
    end_time = time.time()
    print(f"총 실행 시간: {end_time - start_time:.2f}초")

# 비동기 함수 실행
# Python 3.7+ 에서는 asyncio.run() 사용
asyncio.run(main())
```

위 예시에서 `say_hello("Alice", 2)`와 `say_hello("Bob", 1)`는 거의 동시에 시작됩니다. `await asyncio.sleep()` 덕분에 한 작업이 기다리는 동안 다른 작업이 실행될 수 있습니다. 따라서 총 실행 시간은 가장 오래 걸리는 작업의 시간(2초)에 가깝게 됩니다.

[AD]

## `asyncio`의 주요 구성 요소

*   **이벤트 루프 (Event Loop)**: 비동기 작업을 스케줄링하고 실행하는 핵심 구성 요소입니다. `asyncio.run()`이 내부적으로 이벤트 루프를 관리합니다.
*   **코루틴 (Coroutines)**: `async def`로 정의된 함수입니다. `await`를 사용하여 다른 코루틴의 완료를 기다릴 수 있습니다.
*   **태스크 (Tasks)**: 코루틴을 이벤트 루프에서 실행할 수 있도록 감싸는 객체입니다. `asyncio.create_task()`로 생성합니다.

## 비동기 프로그래밍의 장점

*   **높은 동시성**: 단일 스레드에서 여러 I/O 바운드 작업을 효율적으로 처리하여 높은 동시성을 달성할 수 있습니다.
*   **자원 효율성**: 스레드나 프로세스를 생성하는 오버헤드 없이 작업을 전환하므로 자원 사용량이 적습니다.
*   **응답성**: I/O 작업으로 인해 프로그램이 멈추는 것을 방지하여 사용자 인터페이스나 서버의 응답성을 유지할 수 있습니다.

## 언제 비동기 프로그래밍을 사용할까?

비동기 프로그래밍은 주로 다음과 같은 I/O 바운드 작업이 많은 애플리케이션에 적합합니다.

*   웹 서버 (FastAPI, Sanic, Aiohttp)
*   데이터베이스 접근
*   네트워크 통신 (API 호출, 웹 스크래핑)
*   파일 I/O

CPU 바운드 작업(복잡한 계산 등)이 많은 경우에는 비동기 프로그래밍보다는 멀티프로세싱(multiprocessing)을 고려하는 것이 더 효율적일 수 있습니다.

비동기 프로그래밍은 현대 웹 서비스 및 고성능 애플리케이션 개발에 필수적인 기술입니다. 다음으로는 파이썬의 고급 개념인 메타클래스에 대해 알아보겠습니다.

[이전 - 제너레이터](./generator) | [다음 - 메타클래스](./metaclass)
