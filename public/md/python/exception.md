# 예외 처리 (Exception Handling)

예외 처리는 프로그램이 실행되는 동안 발생할 수 있는 예기치 않은 오류(예외)에 대처하고, 프로그램이 비정상적으로 종료되는 것을 방지하는 중요한 메커니즘입니다.

## 왜 예외 처리가 필요한가?

-   **프로그램 안정성:** 오류가 발생했을 때 프로그램이 갑자기 멈추는 것을 막고, 오류 상황을 우아하게 처리하여 계속 실행되도록 할 수 있습니다.
-   **오류 추적:** 오류의 원인을 파악하고 사용자에게 적절한 피드백을 제공할 수 있습니다.
-   **자원 관리:** 파일 핸들이나 네트워크 연결과 같이 사용 후 반드시 닫아야 하는 자원을 오류 발생 여부와 상관없이 안전하게 해제할 수 있습니다.

## `try...except` 기본 구조

```python
try:
    # 예외가 발생할 가능성이 있는 코드 블록
    # ...
except [발생할_예외_타입]:
    # 지정된 예외가 발생했을 때 실행될 코드 블록
    # ...
```

## 다양한 예외 처리 구문

-   **`else`:** `try` 블록에서 예외가 발생하지 않았을 때만 실행됩니다.
-   **`finally`:** 예외 발생 여부와 상관없이 항상 실행됩니다. (주로 자원 해제에 사용)

### 코드 예시

```python
def divide(x, y):
    try:
        result = x / y
    except ZeroDivisionError:
        print("오류: 0으로 나눌 수 없습니다.")
    except TypeError:
        print("오류: 숫자 타입이 아닌 데이터로 연산을 시도했습니다.")
    else:
        print(f"결과: {result}")
    finally:
        print("나눗셈 연산이 종료되었습니다.")

# 정상 실행
divide(10, 2)

# ZeroDivisionError 발생
divide(10, 0)

# TypeError 발생
divide(10, 'a')
```

## 사용자 정의 예외 (Custom Exceptions)

파이썬에서는 내장된 예외 외에도, 특정 상황에 맞는 사용자 정의 예외를 만들어 사용할 수 있습니다. 이는 프로그램의 가독성과 유지보수성을 높이는 데 도움이 됩니다.

```python
class NegativeNumberError(Exception):
    """음수가 입력되었을 때 발생하는 사용자 정의 예외"""
    def __init__(self, message="음수는 허용되지 않습니다."):
        self.message = message
        super().__init__(self.message)

def process_positive_number(number):
    if number < 0:
        raise NegativeNumberError(f"입력된 숫자 {number}는 음수입니다.")
    print(f"처리된 양수: {number}")

try:
    process_positive_number(10)
    process_positive_number(-5)
except NegativeNumberError as e:
    print(f"사용자 정의 예외 발생: {e}")
```

---

- [다음 - 데코레이터](./decorator)
- [이전 - 클래스](./class)