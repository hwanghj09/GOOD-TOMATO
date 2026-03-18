# import 기본

`import`는 다른 파일이나 모듈을 가져올 때 사용합니다.

[AD]

## 기본 사용

```python
import math
print(math.sqrt(9))
```

## 특정 함수만 가져오기

```python
from math import sqrt
print(sqrt(16))
```

## 별칭 사용

```python
import numpy as np
```

## 여러 함수 가져오기

```python
from math import sqrt, sin, cos
```

## 같은 폴더 모듈 가져오기

`util.py`가 같은 폴더에 있을 때:

```python
from util import my_func
my_func()
```

## 주의

`from module import *`는 이름 충돌 위험이 있어서 추천하지 않습니다.



## random 모듈

랜덤 숫자나 선택을 위해 `random`을 사용합니다.

```python
import random

print(random.randint(1, 10))    # 1~10 정수
print(random.choice([1, 2, 3])) # 리스트에서 하나 선택
```
