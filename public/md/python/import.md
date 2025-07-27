# Python - 모듈과 import

## 모듈이란?

모듈(Module)은 함수, 변수, 클래스를 모아놓은 파이썬 파일(`.py`)입니다. 모듈을 사용하면 코드를 기능별로 분리하여 관리하기 쉽고, 다른 프로그램에서 재사용할 수 있습니다.

## `import` 문

`import` 문은 다른 모듈에 있는 코드를 현재 파일에서 사용할 수 있도록 가져오는 역할을 합니다.

### 모듈 전체 가져오기

```python
# import 모듈이름

import math

print(math.pi)      # 3.141592653589793
print(math.sqrt(16)) # 4.0
```

### 모듈에 별칭(alias) 부여하기

모듈 이름이 길거나 다른 이름과 충돌할 경우, `as` 키워드를 사용하여 별칭을 붙일 수 있습니다.

```python
# import 모듈이름 as 별칭

import math as m

print(m.pi)
print(m.sqrt(16))
```

[AD]

## `from ... import ...` 문

모듈의 특정 함수, 변수, 또는 클래스만 가져오고 싶을 때 사용합니다. 이 방법을 사용하면 모듈 이름을 앞에 붙이지 않고 바로 사용할 수 있습니다.

```python
# from 모듈이름 import 가져올_것

from math import pi, sqrt

print(pi)
print(sqrt(16))
```

### 모든 것 가져오기 (`*`)

`*`를 사용하면 모듈에 있는 모든 것을 가져올 수 있습니다. 하지만 어떤 이름이 현재 네임스페이스로 들어오는지 명확하지 않아 코드의 가독성을 해치고, 이름 충돌을 일으킬 수 있으므로 **권장되지 않는 방법**입니다.

```python
# from 모듈이름 import *

from math import *

print(pi)
print(sqrt(16))
```

## 패키지 (Package)

패키지는 여러 모듈들을 모아놓은 디렉토리 구조입니다. 패키지를 사용하면 관련된 모듈들을 체계적으로 관리할 수 있습니다. 패키지 디렉토리 안에는 `__init__.py` 파일이 포함될 수 있으며, 이 파일은 해당 디렉토리가 패키지임을 나타냅니다 (Python 3.3+ 부터는 필수는 아님).

```
my_package/
├── __init__.py
├── module1.py
└── module2.py
```

패키지 안의 모듈을 가져올 때는 `.`을 사용하여 경로를 지정합니다.

```python
# from 패키지이름 import 모듈이름
from my_package import module1

# from 패키지이름.모듈이름 import 함수이름
from my_package.module2 import my_function

module1.some_function()
my_function()
```

모듈과 패키지를 사용하면 코드를 효율적으로 구성하고 재사용성을 극대화할 수 있습니다. 이것으로 파이썬 기초 과정의 주요 내용을 모두 마쳤습니다.

[이전 - 함수](./function)
