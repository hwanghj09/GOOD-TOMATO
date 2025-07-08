
# 메타클래스 (Metaclass)

메타클래스는 **클래스를 만드는 클래스**입니다. 파이썬에서 모든 것은 객체이며, 클래스 역시 'type' 클래스의 인스턴스(객체)입니다. 메타클래스는 이 'type'을 상속받아 클래스의 생성 과정 자체를 제어하고 커스터마이징하는 고급 기능입니다.

## 왜 메타클래스를 사용할까?

일반적인 애플리케이션 개발에서는 거의 사용되지 않지만, 다음과 같은 경우에 강력한 힘을 발휘합니다.

-   **API/프레임워크 개발:** Django의 모델(Model)이나 SQLAlchemy의 ORM처럼, 특정 규칙에 따라 클래스가 자동으로 속성이나 메서드를 갖도록 강제할 수 있습니다.
-   **코드 자동화:** 클래스 정의 시점에 코드를 자동으로 추가하거나 변경할 수 있습니다.
-   **싱글턴(Singleton) 패턴 구현:** 애플리케이션 전체에서 단 하나의 인스턴스만 존재하도록 보장할 수 있습니다.

## `__new__`와 `__init__`

메타클래스는 주로 `__new__` 메서드를 오버라이딩하여 클래스 생성을 제어합니다.

-   `type.__new__(cls, name, bases, dct)`:
    -   `cls`: 메타클래스 자신
    -   `name`: 생성될 클래스의 이름 (문자열)
    -   `bases`: 부모 클래스들의 튜플
    -   `dct`: 클래스의 속성(변수, 메서드)들을 담은 딕셔너리

### 코드 예시: 클래스의 모든 속성을 대문자로 바꾸기

```python
class UpperAttrMetaclass(type):
    def __new__(cls, name, bases, dct):
        # 속성 딕셔너리를 순회하며 새로운 딕셔너리 생성
        uppercase_dct = {}
        for key, value in dct.items():
            if not key.startswith('__'):
                uppercase_dct[key.upper()] = value
            else:
                uppercase_dct[key] = value
        
        # 부모 클래스의 __new__를 호출하여 클래스 생성
        return super().__new__(cls, name, bases, uppercase_dct)

# 메타클래스 적용
class MyClass(metaclass=UpperAttrMetaclass):
    my_attr = "Hello"

# 인스턴스 생성
instance = MyClass()

# 원래 속성 이름으로는 접근 불가
# print(instance.my_attr) # AttributeError

# 대문자 속성 이름으로 접근 가능
print(instance.MY_ATTR) # Hello
```

---

- [다음 - 입출력 기초 문제](./beginner-io-test)
- [이전 - 비동기 프로그래밍](./asyncio)
