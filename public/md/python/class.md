# 클래스 (Class)

클래스는 **객체 지향 프로그래밍(OOP)**의 핵심 개념으로, 특정 종류의 객체가 가질 수 있는 속성(데이터)과 행위(메서드)를 정의하는 '설계도' 또는 '틀'입니다.

## 왜 클래스를 사용할까?

-   **코드 재사용성:** 잘 만들어진 클래스는 다른 프로그램에서 쉽게 가져와 재사용할 수 있습니다.
-   **데이터 추상화:** 사용자는 객체의 복잡한 내부 동작을 몰라도, 제공되는 메서드를 통해 쉽게 객체를 조작할 수 있습니다.
-   **관련 데이터와 함수 묶기:** 관련된 데이터(변수)와 이를 처리하는 함수(메서드)를 하나의 단위로 묶어 코드를 체계적으로 관리할 수 있습니다.

## 주요 용어

-   **클래스(Class):** 객체를 만들기 위한 설계도. (예: `붕어빵 틀`)
-   **객체(Object) 또는 인스턴스(Instance):** 클래스로부터 생성된 실체. (예: `붕어빵`)
-   **속성(Attribute):** 객체가 가지는 데이터. (예: 붕어빵의 `팥` 또는 `슈크림`)
-   **메서드(Method):** 객체가 수행할 수 있는 동작(함수). (예: `붕어빵을 굽는다()`)

## 코드 예시

```python
class Car:
    # __init__ 메서드: 객체가 생성될 때 호출되는 초기화 메서드(생성자)
    def __init__(self, brand, model, year):
        # 인스턴스 속성(변수) 정의
        self.brand = brand
        self.model = model
        self.year = year
        self.speed = 0

    # 인스턴스 메서드 정의
    def accelerate(self, value):
        """속도를 높입니다."""
        self.speed += value
        print(f"{self.brand} {self.model}의 현재 속도: {self.speed}km/h")

    def brake(self, value):
        """속도를 줄입니다."""
        self.speed -= value
        print(f"{self.brand} {self.model}의 현재 속도: {self.speed}km/h")

# 'Car' 클래스로부터 'my_car' 인스턴스(객체) 생성
my_car = Car("현대", "쏘나타", 2023)

# 속성 접근
print(f"내 차는 {my_car.year}년식 {my_car.brand} {my_car.model}입니다.")

# 메서드 호출
my_car.accelerate(50)
my_car.brake(20)
```

## 상속 (Inheritance)

상속은 기존 클래스(부모 클래스)의 속성과 메서드를 물려받아 새로운 클래스(자식 클래스)를 만드는 기능입니다. 코드 재사용성을 높이고, 클래스 간의 계층 관계를 구축할 수 있습니다.

```python
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        raise NotImplementedError("Subclass must implement abstract method")

class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

my_dog = Dog("Buddy")
my_cat = Cat("Whiskers")

print(my_dog.speak()) # Buddy says Woof!
print(my_cat.speak()) # Whiskers says Meow!
```

## 다형성 (Polymorphism)

다형성은 서로 다른 클래스의 객체가 동일한 메서드 이름을 가질 때, 각 객체에 따라 다르게 동작하는 것을 의미합니다. 상속과 함께 객체 지향 프로그래밍의 중요한 특징 중 하나입니다.

```python
def make_animal_speak(animal):
    print(animal.speak())

make_animal_speak(my_dog)
make_animal_speak(my_cat)
```

---

- [다음 - 예외 처리](./exception)
- [이전 - 파일 입출력](./file_io)