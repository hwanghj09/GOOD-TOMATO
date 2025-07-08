# 모듈과 패키지 (Modules and Packages)

파이썬에서 코드를 체계적으로 관리하고 재사용하기 위해 모듈과 패키지 개념을 사용합니다.

## 모듈 (Module)

모듈은 함수, 변수, 클래스 등을 모아놓은 하나의 파이썬 파일(`.py`)입니다. 관련된 코드들을 하나의 파일에 묶어 관리함으로써 코드의 재사용성과 유지보수성을 높입니다.

### 모듈 사용법 (`import`)

```python
# math 모듈 전체를 가져오기
import math
print(math.pi)

# random 모듈에서 randint 함수만 가져오기
from random import randint
print(randint(1, 10))

# numpy 모듈에 별명(alias) 'np'를 붙여 가져오기
import numpy as np
arr = np.array([1, 2, 3])
```

## 패키지 (Package)

패키지는 여러 관련 모듈들을 모아놓은 디렉토리 구조입니다. 패키지를 사용하면 더 큰 규모의 프로젝트에서 코드를 계층적으로 관리할 수 있습니다.

### 패키지 구조 예시

```
my_package/
├── __init__.py
├── calculator/
│   ├── __init__.py
│   ├── add.py
│   └── subtract.py
└── utils/
    ├── __init__.py
    └── logger.py
```

-   `__init__.py`: 이 파일이 있는 디렉토리는 파이썬 패키지로 인식됩니다. 패키지 초기화 코드를 담을 수 있습니다.

### 패키지 사용법

```python
# calculator 패키지의 add 모듈에서 add_func 함수를 가져오기
from my_package.calculator.add import add_func

# utils 패키지의 logger 모듈을 가져오기
from my_package.utils import logger
```

## `__name__ == "__main__"`

파이썬 스크립트가 직접 실행될 때와 모듈로 임포트될 때를 구분하여 코드를 실행할 수 있도록 해주는 관용적인 표현입니다.

```python
# my_script.py
def main():
    print("이 스크립트가 직접 실행되었습니다.")

if __name__ == "__main__":
    main()

# 다른 파일에서 import 할 경우 main()은 실행되지 않음
```

---

- [다음 - 제너레이터](./generator)
- [이전 - 데코레이터](./decorator)