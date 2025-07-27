# Python - 반복문 (while)

## `while` 문이란?

`while` 문은 특정 조건이 참(True)인 동안 코드 블록을 계속해서 반복 실행합니다. `for` 문이 정해진 횟수만큼 반복하는 데 적합하다면, `while` 문은 특정 조건이 만족될 때까지 반복해야 할 때 유용합니다.

## `while` 문의 기본 구조

```python
# while 조건:
#     <실행할 코드>

count = 0
while count < 5:
    print(f"현재 카운트: {count}")
    count += 1  # 조건을 거짓으로 만들 변화가 반드시 필요합니다.

print("반복이 종료되었습니다.")
```

**주의**: `while` 문을 사용할 때는 반복문 내에서 조건이 언젠가는 거짓(False)이 되도록 상태를 변경하는 코드가 반드시 포함되어야 합니다. 그렇지 않으면 프로그램이 무한 루프(Infinite Loop)에 빠져 멈추지 않게 됩니다.

## `break` 문

`break` 문은 반복문을 즉시 중단하고 빠져나올 때 사용합니다. 특정 조건을 만족했을 때 더 이상 반복이 필요 없을 경우에 유용합니다.

```python
# 무한 루프와 break를 이용한 입력 처리
while True:
    user_input = input("명령어를 입력하세요 ('종료'를 입력하면 끝납니다): ")
    if user_input == "종료":
        print("프로그램을 종료합니다.")
        break  # while 문을 빠져나감
    print(f"입력한 명령어: {user_input}")
```

[AD]

## `continue` 문

`continue` 문은 현재 반복을 건너뛰고 다음 반복으로 바로 넘어갈 때 사용합니다. 특정 조건에서는 현재 반복의 나머지 코드를 실행하고 싶지 않을 때 유용합니다.

```python
# 1부터 10까지의 숫자 중 홀수만 출력하기
number = 0
while number < 10:
    number += 1
    if number % 2 == 0:  # 숫자가 짝수이면
        continue         # 현재 반복을 건너뛰고 다음 반복으로
    print(number)
```

## `while-else` 문

`while` 문은 `else` 절을 가질 수 있습니다. `else` 절은 `while` 문의 조건이 거짓이 되어 반복문이 정상적으로 종료되었을 때 한 번 실행됩니다. (`break` 문으로 반복문이 중단된 경우에는 실행되지 않습니다.)

```python
count = 0
while count < 5:
    print(count)
    count += 1
else:
    print("반복문이 정상적으로 종료되었습니다.")

# break로 종료되는 경우
count = 0
while count < 5:
    if count == 3:
        print("count가 3이 되어 break합니다.")
        break
    print(count)
    count += 1
else:
    # 이 부분은 실행되지 않습니다.
    print("이 메시지는 출력되지 않습니다.")
```

`while` 문을 사용하면 유연한 조건 기반의 반복을 구현할 수 있습니다. 다음으로는 여러 데이터를 효율적으로 관리하는 자료구조인 리스트에 대해 알아보겠습니다.

[이전 - 반복문 (for)](./for) | [다음 - 리스트](./list)