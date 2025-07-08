
# Python - 모듈과 import

## 모듈(Module)이란?

모듈은 파이썬 코드의 묶음입니다. 함수, 변수, 클래스 등을 모아놓은 파일(`.py`)을 의미하며, 다른 파이썬 프로그램에서 가져와 사용할 수 있습니다.

**모듈을 사용하는 이유:**

- **코드 재사용:** 반복되는 코드를 모듈로 만들어두면 여러 곳에서 쉽게 가져다 쓸 수 있습니다.
- **코드 관리:** 관련된 코드를 하나의 파일로 묶어 관리하기 용이합니다.
- **이름 충돌 방지:** 다른 모듈에 있는 같은 이름의 함수나 변수와 충돌하는 것을 막아줍니다.

## `import` 문법

`import`는 다른 모듈의 코드를 현재 파일로 가져오는 명령어입니다.

### 1. 모듈 전체 가져오기

```python
import 모듈이름

# 사용할 때: 모듈이름.함수()
import math
print(math.pi)  # 3.141592653589793
print(math.sqrt(16)) # 4.0
```

### 2. 모듈에서 특정 부분만 가져오기

`from 모듈이름 import 가져올것`

```python
from math import pi, sqrt

# 사용할 때: 함수() (모듈 이름 없이 바로 사용)
print(pi)      # 3.141592653589793
print(sqrt(16)) # 4.0
```

### 3. 모듈의 모든 것 가져오기 (`*`)

`from 모듈이름 import *`

```python
from math import *

print(pi)      # 3.141592653589793
print(sqrt(16)) # 4.0
```

> **주의:** `*`를 사용하면 어떤 함수가 어디서 왔는지 알기 어려워져서 코드의 가독성을 해칠 수 있으므로, 꼭 필요한 경우에만 사용하는 것이 좋습니다.

### 4. 별명(alias) 붙여서 가져오기

`import 모듈이름 as 별명`

```python
import math as m

print(m.pi)
print(m.sqrt(16))

# from ... import ... as ... 도 가능
from math import sqrt as s
print(s(16))
```

## 유용한 내장 모듈 예시

- **`math`**: 수학 관련 함수 및 상수 (sin, cos, sqrt, pi 등)
- **`random`**: 무작위 수 생성 (randint, choice, shuffle 등)
- **`datetime`**: 날짜 및 시간 처리
- **`os`**: 운영체제와 상호작용 (파일 시스템 접근, 환경 변수 등)
- **`sys`**: 파이썬 인터프리터 제어

```python
import random

# 1부터 10 사이의 임의의 정수 생성
random_number = random.randint(1, 10)
print(random_number)

# 리스트에서 임의의 요소 선택
my_list = ['사과', '바나나', '딸기']
random_fruit = random.choice(my_list)
print(random_fruit)
```
