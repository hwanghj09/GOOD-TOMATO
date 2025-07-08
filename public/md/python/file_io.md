# Python - 파일 입출력

파이썬에서 파일 입출력은 프로그램이 외부 파일과 데이터를 주고받는 기본적인 방법입니다. 텍스트 파일이나 이진 파일 등 다양한 형식의 파일을 다룰 수 있습니다.

## 1. 파일 열기: `open()` 함수

파일을 읽거나 쓰기 위해서는 먼저 `open()` 함수를 사용하여 파일을 열어야 합니다.

```python
file_object = open("파일경로", "모드", encoding="인코딩")
```

-   `"파일경로"`: 열고자 하는 파일의 이름 또는 절대/상대 경로입니다.
-   `"모드"`: 파일을 어떤 목적으로 열 것인지 지정합니다. (필수)
    -   `'r'` (read): 읽기 모드. 파일이 없으면 `FileNotFoundError` 발생.
    -   `'w'` (write): 쓰기 모드. 파일이 없으면 새로 생성하고, 있으면 **기존 내용을 모두 지우고** 덮어씁니다. (주의!)
    -   `'a'` (append): 추가 모드. 파일이 없으면 새로 생성하고, 있으면 파일의 **끝에 내용을 추가**합니다.
    -   `'x'` (exclusive creation): 독점 생성 모드. 파일이 없으면 새로 생성하고, 있으면 `FileExistsError` 발생.
    -   `'b'` (binary): 이진 모드. 이미지, 동영상 등 이진 데이터를 다룰 때 사용합니다. (`'rb'`, `'wb'`, `'ab'`)
    -   `'t'` (text): 텍스트 모드. 기본값입니다. (`'rt'`, `'wt'`, `'at'`)
    -   `'+'` (update): 읽기/쓰기 모드. 다른 모드와 함께 사용합니다. (`'r+'`, `'w+'`, `'a+'`)
-   `encoding`: 텍스트 파일을 다룰 때 인코딩 방식을 지정합니다. (예: `'utf-8'`, `'cp949'`). 지정하지 않으면 시스템 기본 인코딩을 사용합니다.

## 2. 파일 닫기: `close()` 메서드

파일 작업을 마친 후에는 반드시 `close()` 메서드를 사용하여 파일을 닫아야 합니다. 파일을 닫지 않으면 데이터 손실이나 다른 프로그램에서 파일을 사용하지 못하는 문제가 발생할 수 있습니다.

```python
f = open("my_file.txt", "w")
f.write("Hello, World!")
f.close()
```

## 3. `with` 문을 사용한 파일 처리 (권장)

`with` 문을 사용하면 파일을 열고 닫는 과정을 자동으로 처리해주므로, `close()`를 명시적으로 호출할 필요가 없어 편리하고 안전합니다. 예외 발생 시에도 파일이 자동으로 닫힙니다.

```python
with open("my_file.txt", "w") as f:
    f.write("Hello, World!\n")
    f.write("This is a safe way to handle files.")
# with 블록을 벗어나면 파일이 자동으로 닫힙니다.
```

## 4. 파일 읽기 예시

`example.txt` 파일 내용:
```
첫 번째 줄입니다.
두 번째 줄입니다.
세 번째 줄입니다.
```

### `read()`: 파일 전체 내용 읽기

```python
with open("example.txt", "r", encoding="utf-8") as f:
    content = f.read()
    print(content)
# 출력:
# 첫 번째 줄입니다.
# 두 번째 줄입니다.
# 세 번째 줄입니다.
```

### `readline()`: 한 줄씩 읽기

```python
with open("example.txt", "r", encoding="utf-8") as f:
    line1 = f.readline()
    line2 = f.readline()
    print(line1, end='') # readline()은 줄바꿈 문자를 포함하므로 end=''로 중복 방지
    print(line2, end='')
# 출력:
# 첫 번째 줄입니다.
# 두 번째 줄입니다.
```

### `readlines()`: 모든 줄을 리스트로 읽기

```python
with open("example.txt", "r", encoding="utf-8") as f:
    lines = f.readlines()
    print(lines)
# 출력: ['첫 번째 줄입니다.\n', '두 번째 줄입니다.\n', '세 번째 줄입니다.\n']
```

### 파일 객체를 직접 반복하기 (가장 효율적)

```python
with open("example.txt", "r", encoding="utf-8") as f:
    for line in f:
        print(line, end='')
# 출력:
# 첫 번째 줄입니다.
# 두 번째 줄입니다.
# 세 번째 줄입니다.
```

## 5. 파일 쓰기 예시

### `write()`: 문자열 쓰기

`'w'` 모드는 기존 파일을 덮어쓰므로 주의해야 합니다.

```python
with open("output.txt", "w", encoding="utf-8") as f:
    f.write("안녕하세요!\n")
    f.write("이것은 새로운 파일입니다.\n")
# output.txt 내용:
# 안녕하세요!
# 이것은 새로운 파일입니다.
```

### `writelines()`: 리스트의 문자열 쓰기

리스트의 각 문자열을 파일에 씁니다. 각 문자열 끝에 줄바꿈 문자를 직접 추가해야 합니다.

```python
lines_to_write = [
    "첫 번째 줄\n",
    "두 번째 줄\n",
    "세 번째 줄\n"
]
with open("new_output.txt", "w", encoding="utf-8") as f:
    f.writelines(lines_to_write)
# new_output.txt 내용:
# 첫 번째 줄
# 두 번째 줄
# 세 번째 줄
```

### `'a'` (append) 모드: 파일 끝에 내용 추가

```python
# output.txt에 내용이 이미 있다고 가정
with open("output.txt", "a", encoding="utf-8") as f:
    f.write("추가된 새로운 내용입니다.\n")
# output.txt 내용 (기존 내용 + 추가된 내용):
# 안녕하세요!
# 이것은 새로운 파일입니다.
# 추가된 새로운 내용입니다.
```

---

- [다음 - 클래스](./class)
- [이전 - 모듈과 import](./import)