# Python - 메타클래스 (Metaclass)

## 메타클래스란?

파이썬에서 모든 것은 객체(Object)입니다. 클래스도 객체이며, 이 클래스 객체를 만드는 것이 바로 **메타클래스(Metaclass)** 입니다. 즉, 메타클래스는 **클래스를 만드는 클래스**라고 할 수 있습니다.

기본적으로 파이썬의 모든 클래스는 `type`이라는 내장 메타클래스를 사용하여 생성됩니다.

```python
class MyClass:
    pass

# MyClass는 type 클래스의 인스턴스입니다.
print(type(MyClass)) # <class 'type'>

# MyClass의 인스턴스 생성
obj = MyClass()
print(type(obj))     # <class '__main__.MyClass'>
```

## 메타클래스 사용의 필요성

일반적으로 메타클래스를 직접 정의하여 사용할 일은 많지 않습니다. 하지만 다음과 같은 경우에 유용하게 사용될 수 있습니다.

*   클래스가 생성될 때 자동으로 특정 속성이나 메서드를 추가하고 싶을 때
*   클래스 생성 규칙을 강제하고 싶을 때 (예: 모든 클래스가 특정 인터페이스를 구현하도록)
*   프레임워크나 ORM(Object-Relational Mapping) 라이브러리에서 클래스 정의를 동적으로 변경하거나 확장할 때

## 메타클래스 정의하기

메타클래스를 정의하려면 `type`을 상속받아 `__new__` 또는 `__init__` 메서드를 오버라이드합니다.

*   `__new__(mcs, name, bases, attrs)`:
    *   `mcs`: 메타클래스 자신
    *   `name`: 생성될 클래스의 이름 (문자열)
    *   `bases`: 상속받을 부모 클래스들의 튜플
    *   `attrs`: 클래스의 속성(메서드, 변수 등)을 담고 있는 딕셔너리
    클래스 객체를 생성하는 역할을 합니다.

*   `__init__(cls, name, bases, attrs)`:
    *   `cls`: 생성된 클래스 객체
    클래스 객체를 초기화하는 역할을 합니다.

```python
class MyMetaclass(type):
    def __new__(mcs, name, bases, attrs):
        # 클래스 생성 전에 특정 속성 추가
        attrs['added_attribute'] = "This is added by metaclass"
        attrs['new_method'] = lambda self: print("New method called!")
        print(f"클래스 {name} 생성 중...")
        return super().__new__(mcs, name, bases, attrs)

    def __init__(cls, name, bases, attrs):
        super().__init__(cls, name, bases, attrs)
        print(f"클래스 {name} 초기화 완료!")

# 메타클래스를 지정하여 클래스 정의
class MyClass(metaclass=MyMetaclass):
    def original_method(self):
        print("Original method called!")

# 클래스 사용
obj = MyClass()
print(obj.added_attribute)
obj.new_method()
obj.original_method()
```

[AD]

## 메타클래스의 동작 원리

1.  클래스를 정의하면 파이썬은 먼저 해당 클래스의 `metaclass` 속성을 찾습니다.
2.  `metaclass`가 지정되어 있지 않으면 기본 메타클래스인 `type`을 사용합니다.
3.  메타클래스의 `__new__` 메서드가 호출되어 클래스 객체를 생성합니다.
4.  메타클래스의 `__init__` 메서드가 호출되어 생성된 클래스 객체를 초기화합니다.
5.  이렇게 생성된 클래스 객체를 사용하여 인스턴스를 생성할 수 있습니다.

## 주의사항

메타클래스는 파이썬의 매우 고급 기능이며, 잘못 사용하면 코드를 이해하기 어렵게 만들 수 있습니다. 대부분의 경우 데코레이터나 클래스 상속만으로도 충분히 원하는 기능을 구현할 수 있으므로, 메타클래스는 정말 필요한 경우에만 사용하는 것이 좋습니다.

메타클래스는 파이썬의 객체 모델에 대한 깊은 이해를 요구하며, 프레임워크 개발 등 특정 고급 시나리오에서 강력한 도구로 활용될 수 있습니다.

[이전 - 비동기 프로그래밍](./asyncio)
