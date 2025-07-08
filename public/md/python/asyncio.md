# 비동기 프로그래밍 (Asyncio)

`asyncio`는 파이썬의 표준 라이브러리로, `async`와 `await` 키워드를 사용하여 동시성(Concurrency) 코드를 작성할 수 있게 해줍니다. 주로 네트워크 통신이나 파일 I/O와 같이 대기 시간이 긴(I/O-bound) 작업들을 효율적으로 처리하는 데 사용됩니다.

## 동기 vs 비동기

-   **동기(Synchronous):** 한 작업이 끝날 때까지 다음 작업은 기다립니다. (예: 전화 통화)
-   **비동기(Asynchronous):** 한 작업을 시작하고 끝날 때까지 기다리지 않고 바로 다음 작업을 시작합니다. 먼저 시작한 작업은 나중에 완료되면 결과를 알립니다. (예: 문자 메시지)

## 주요 개념

-   **`async def`:** 비동기 함수(코루틴)를 정의합니다.
-   **`await`:** 비동기 함수의 실행을 기다립니다. `await`를 만나면, 해당 작업이 완료될 때까지 이벤트 루프에 제어권을 넘기고 다른 작업을 수행할 수 있게 합니다.
-   **이벤트 루프(Event Loop):** 비동기 작업들을 스케줄링하고 실행 순서를 관리합니다.

### 코드 예시: 여러 웹사이트 동시에 가져오기

```python
import asyncio
import aiohttp

async def fetch(session, url):
    async with session.get(url) as response:
        return await response.text()

async def main():
    urls = [
        "https://www.python.org",
        "https://www.google.com",
        "https://www.github.com"
    ]
    
    async with aiohttp.ClientSession() as session:
        tasks = [fetch(session, url) for url in urls]
        # 여러 작업을 동시에 실행하고 모두 끝날 때까지 기다림
        results = await asyncio.gather(*tasks)
        for i, result in enumerate(results):
            print(f"{urls[i]}의 내용 일부: {result[:50]}...")

# asyncio 이벤트 루프에서 main 함수 실행
if __name__ == "__main__":
    asyncio.run(main())
```

## `asyncio.sleep()`과 `asyncio.gather()`

`asyncio.sleep()`은 비동기적으로 일정 시간 동안 대기하는 함수입니다. `await`와 함께 사용하여 다른 코루틴이 실행될 수 있도록 제어권을 넘겨줍니다.

`asyncio.gather()`는 여러 코루틴을 동시에 실행하고, 모든 코루틴이 완료될 때까지 기다립니다. 각 코루틴의 결과를 리스트 형태로 반환합니다.

```python
import asyncio
import time

async def task(name, delay):
    print(f"Task {name}: 시작")
    await asyncio.sleep(delay) # 비동기적으로 대기
    print(f"Task {name}: 완료")
    return f"Task {name} finished in {delay}s"

async def main_tasks():
    start_time = time.time()
    
    # 두 개의 작업을 동시에 실행
    results = await asyncio.gather(
        task("A", 2),
        task("B", 1)
    )
    
    end_time = time.time()
    print(f"모든 작업 완료. 총 소요 시간: {end_time - start_time:.2f}초")
    print(f"결과: {results}")

if __name__ == "__main__":
    asyncio.run(main_tasks())
# 예상 출력 (순서는 다를 수 있음):
# Task A: 시작
# Task B: 시작
# Task B: 완료
# Task A: 완료
# 모든 작업 완료. 총 소요 시간: 2.00초
# 결과: ['Task A finished in 2s', 'Task B finished in 1s']
```

---

- [다음 - 메타클래스](./metaclass)
- [이전 - 제너레이터](./generator)