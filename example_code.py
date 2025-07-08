# example_code.py

# 1. 변수와 기본 데이터 타입
print("--- 1. 변수와 기본 데이터 타입 ---")
integer_var = 10
float_var = 3.14
string_var = "Hello, Python!"
boolean_var = True

print(f"정수: {integer_var}, 타입: {type(integer_var)}")
print(f"실수: {float_var}, 타입: {type(float_var)}")
print(f"문자열: '{string_var}', 타입: {type(string_var)}")
print(f"불린: {boolean_var}, 타입: {type(boolean_var)}")
print("-" * 30)

# 2. 리스트 (List) - 순서 O, 중복 O, 변경 O
print("--- 2. 리스트 ---")
my_list = [1, 2, 3, "apple", "banana", True]
print(f"원본 리스트: {my_list}")
print(f"리스트 길이: {len(my_list)}")
print(f"첫 번째 요소: {my_list[0]}")
print(f"마지막 요소: {my_list[-1]}")

my_list.append("cherry") # 요소 추가
print(f"요소 추가 후: {my_list}")
my_list[1] = 20 # 요소 변경
print(f"요소 변경 후: {my_list}")
print("-" * 30)

# 3. 튜플 (Tuple) - 순서 O, 중복 O, 변경 X
print("--- 3. 튜플 ---")
my_tuple = (10, 20, "orange", False)
print(f"원본 튜플: {my_tuple}")
print(f"튜플 길이: {len(my_tuple)}")
print(f"두 번째 요소: {my_tuple[1]}")
# my_tuple[0] = 100 # TypeError 발생 (변경 불가)
print("-" * 30)

# 4. 세트 (Set) - 순서 X, 중복 X, 변경 O (요소 추가/삭제)
print("--- 4. 세트 ---")
my_set = {1, 2, 3, 2, 1, "hello"}
print(f"원본 세트 (중복 제거): {my_set}")
my_set.add("world") # 요소 추가
print(f"요소 추가 후: {my_set}")
my_set.remove(3) # 요소 제거
print(f"요소 제거 후: {my_set}")

set1 = {1, 2, 3}
set2 = {3, 4, 5}
print(f"합집합: {set1.union(set2)}")
print(f"교집합: {set1.intersection(set2)}")
print("-" * 30)

# 5. 딕셔너리 (Dictionary) - 키-값 쌍, 순서 X (Python 3.7+ 부터는 삽입 순서 유지)
print("--- 5. 딕셔너리 ---")
my_dict = {"name": "Alice", "age": 25, "city": "Seoul"}
print(f"원본 딕셔너리: {my_dict}")
print(f"이름: {my_dict['name']}")

my_dict["age"] = 26 # 값 변경
print(f"나이 변경 후: {my_dict}")
my_dict["country"] = "Korea" # 새 키-값 추가
print(f"새 키-값 추가 후: {my_dict}")

print(f"모든 키: {my_dict.keys()}")
print(f"모든 값: {my_dict.values()}")
print("-" * 30)

# 6. 조건문 (if, elif, else)
print("--- 6. 조건문 ---")
score = 85
if score >= 90:
    print("A 학점")
elif score >= 80:
    print("B 학점")
else:
    print("C 학점 이하")
print("-" * 30)

# 7. 반복문 (for, while)
print("--- 7. 반복문 ---")
print("for 루프 (리스트 순회):")
for item in my_list:
    print(f"  {item}")

print("for 루프 (range 사용):")
for i in range(3): # 0, 1, 2
    print(f"  반복 {i}")

print("while 루프:")
count = 0
while count < 3:
    print(f"  카운트: {count}")
    count += 1
print("-" * 30)

# 8. 함수 (Function)
print("--- 8. 함수 ---")
def greet(name):
    return f"안녕하세요, {name}님!"

message = greet("김철수")
print(message)

def add_numbers(a, b):
    return a + b

result = add_numbers(10, 5)
print(f"10 + 5 = {result}")
print("-" * 30)

# 9. 클래스 (Class) - 객체 지향 프로그래밍
print("--- 9. 클래스 ---")
class Dog:
    def __init__(self, name, breed):
        self.name = name
        self.breed = breed

    def bark(self):
        return f"{self.name} (종: {self.breed})이(가) 멍멍 짖습니다!"

my_dog = Dog("바둑이", "진돗개")
print(my_dog.bark())

your_dog = Dog("초코", "푸들")
print(your_dog.bark())
print("-" * 30)

# 10. 파일 입출력 (File I/O)
print("--- 10. 파일 입출력 ---")
file_name = "sample.txt"

# 파일 쓰기
with open(file_name, "w", encoding="utf-8") as f:
    f.write("파이썬 파일 입출력 예제입니다.\n")
    f.write("두 번째 줄입니다.\n")
print(f"'{file_name}' 파일에 내용을 작성했습니다.")

# 파일 읽기
with open(file_name, "r", encoding="utf-8") as f:
    content = f.read()
    print(f"'{file_name}' 파일 내용:\n{content}")
print("-" * 30)

# 11. 예외 처리 (Error Handling)
print("--- 11. 예외 처리 ---")
try:
    num1 = 10
    num2 = 0
    division_result = num1 / num2
    print(f"나눗셈 결과: {division_result}")
except ZeroDivisionError:
    print("오류: 0으로 나눌 수 없습니다!")
except TypeError:
    print("오류: 잘못된 타입의 연산입니다!")
finally:
    print("예외 처리 블록이 종료되었습니다.")
print("-" * 30)

# 12. 리스트 컴프리헨션 (List Comprehension)
print("--- 12. 리스트 컴프리헨션 ---")
numbers = [1, 2, 3, 4, 5]
squared_numbers = [x * x for x in numbers]
print(f"원본 숫자: {numbers}")
print(f"제곱된 숫자: {squared_numbers}")

even_numbers = [x for x in numbers if x % 2 == 0]
print(f"짝수만 필터링: {even_numbers}")
print("-" * 30)

# 13. 람다 (Lambda), map, filter
print("--- 13. 람다, map, filter ---")
# 람다 함수
multiply = lambda x, y: x * y
print(f"람다 곱셈 (3 * 4): {multiply(3, 4)}")

# map 함수
numbers_map = [1, 2, 3]
add_ten = list(map(lambda x: x + 10, numbers_map))
print(f"map으로 10 더하기: {add_ten}")

# filter 함수
numbers_filter = [1, 2, 3, 4, 5, 6]
odd_numbers = list(filter(lambda x: x % 2 != 0, numbers_filter))
print(f"filter로 홀수만: {odd_numbers}")
print("-" * 30)

# 14. 모듈 임포트 (예: math 모듈)
print("--- 14. 모듈 임포트 ---")
import math

radius = 5
area = math.pi * (radius ** 2)
print(f"반지름 {radius}인 원의 넓이: {area:.2f}")
print("-" * 30)

print("--- 예제 코드 실행 완료 ---")
