# Python - 파일 입출력

파이썬에서 파일을 읽고 쓰는 작업은 매우 직관적이며, `open()` 함수를 통해 파일을 열고, 내용을 읽거나 쓸 수 있습니다.

---

## 기본 문법

```python
f = open("파일이름", "모드")
# 작업 수행
f.close()
```

- `"파일이름"`: 열고자 하는 파일 경로  
- `"모드"`: 파일을 여는 방법  
  - `"r"`: 읽기 (기본값, 파일이 존재해야 함)
  - `"w"`: 쓰기 (기존 파일이 있으면 덮어씀)
  - `"a"`: 추가 (파일 끝에 내용 추가)

---

## 참고

\n은 한자로 개행, 한국어로 줄바꿈

---

## 파일 읽기

### 1. 전체 읽기

```python
# example.txt 내용: Hello\nWorld
f = open("example.txt", "r")
data = f.read()
print(data)  # Hello\nWorld 출력
f.close()
```

### 2. 한 줄씩 읽기

```python
# example.txt 내용: Hello\nWorld
f = open("example.txt", "r")
line = f.readline()
print(line)  # Hello 출력
line = f.readline()
print(line)  # World 출력
f.close()
```

### 3. 모든 줄을 리스트로 읽기

```python
# example.txt 내용: Hello\nWorld
f = open("example.txt", "r")
lines = f.readlines()
print(lines)  # ['Hello\n', 'World']
f.close()
```

---

## 파일 쓰기

### 1. 쓰기 모드 (`w`)

```python
f = open("output.txt", "w")
f.write("안녕하세요!\n")
f.write("파일에 내용을 씁니다.\n")
f.close()

# output.txt 내용:
# 안녕하세요!
# 파일에 내용을 씁니다.
```

### 2. 추가 모드 (`a`)

```python
f = open("output.txt", "a")
f.write("새로운 줄을 추가합니다.\n")
f.close()

# output.txt에 줄이 추가됨:
# 새로운 줄을 추가합니다.
```

---

## 참고 사항

- 파일 경로는 상대경로(`data.txt`) 또는 절대경로(`C:/folder/data.txt`) 모두 사용 가능
- 파일이 없는데 `"r"` 모드로 열면 오류 발생
- `"w"` 모드는 파일을 덮어쓰기 때문에 주의해서 사용

---

- [다음 - 조건문](./if)
- [이전 - 변수와 데이터 타입](./variable)
