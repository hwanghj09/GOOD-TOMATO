# 쉘 스크립팅

쉘 스크립트는 Linux/Unix 쉘(Bash, Zsh 등)에서 실행되는 명령어들의 집합입니다. 반복적인 작업을 자동화하거나, 복잡한 작업을 순차적으로 실행하는 데 사용됩니다.

## 1. 쉘 스크립트 기본

### 1) 스크립트 생성 및 실행

- **스크립트 파일 생성**:
    - 텍스트 에디터(vi, nano 등)를 사용하여 `.sh` 확장자를 가진 파일을 생성합니다.
    - 예: `my_script.sh`

- **쉬뱅 (Shebang)**:
    - 스크립트 파일의 첫 줄은 항상 `#!`로 시작하는 쉬뱅 라인이어야 합니다.
    - 이 라인은 스크립트를 실행할 인터프리터(쉘)를 지정합니다.
    - 예: `#!/bin/bash` (Bash 쉘 사용), `#!/bin/sh` (기본 쉘 사용)

- **실행 권한 부여**:
    - 스크립트 파일을 실행하려면 실행 권한(`x`)이 있어야 합니다.
    - `chmod +x my_script.sh`

- **스크립트 실행**:
    - `./my_script.sh`: 현재 디렉토리에서 스크립트 실행
    - `bash my_script.sh`: 명시적으로 bash 인터프리터로 실행 (실행 권한 없어도 가능)

### 2) 주석

- `#`: `#` 뒤에 오는 내용은 주석으로 처리되어 실행되지 않습니다.

### 3) 변수

- **변수 선언 및 할당**:
    - `변수명=값` (변수명과 `=` 사이에 공백이 없어야 합니다.)
    - 예: `NAME="World"`, `COUNT=10`
- **변수 사용**:
    - `$변수명` 또는 `${변수명}`
    - 예: `echo "Hello, $NAME!"`

### 4) 특수 변수

- `$0`: 스크립트 파일명
    - **예시**: `myscript.sh`를 실행하면 `$0`은 `myscript.sh`
- `$1`, `$2`, ...: 스크립트에 전달된 첫 번째, 두 번째 인자
    - **예시**: `./myscript.sh arg1 arg2` 실행 시 `$1`은 `arg1`, `$2`는 `arg2`
- `$#`: 스크립트에 전달된 인자의 총 개수
    - **예시**: `./myscript.sh arg1 arg2` 실행 시 `$#`은 `2`
- `$*`: 스크립트에 전달된 모든 인자를 하나의 문자열로
    - **예시**: `./myscript.sh arg1 arg2` 실행 시 `"$*"`는 `"arg1 arg2"`
- `$@`: 스크립트에 전달된 모든 인자를 각각의 문자열로
    - **예시**: `./myscript.sh arg1 arg2` 실행 시 `"$@"`는 `"arg1" "arg2"`
- `$?`: 마지막으로 실행된 명령어의 종료 상태 (0: 성공, 0이 아닌 값: 실패)
    - **예시**: `ls /tmp && echo "성공"` (ls 성공 시 "성공" 출력)
- `$`: 현재 쉘 스크립트의 PID
    - **예시**: `echo "현재 스크립트 PID: $"`
- `$!`: 마지막으로 백그라운드에서 실행된 명령어의 PID
    - **예시**: `sleep 100 & echo "Sleep PID: $!"`

## 2. 조건문

### `if` 문

```bash
# 예시 1: 파일 존재 여부 확인
FILE="/tmp/test_file.txt"
if [ -f "$FILE" ]; then
  echo "$FILE이 존재합니다."
else
  echo "$FILE이 존재하지 않습니다."
fi

# 예시 2: 숫자 비교
NUM1=10
NUM2=20
if [ "$NUM1" -lt "$NUM2" ]; then
  echo "$NUM1은 $NUM2보다 작습니다."
elif [ "$NUM1" -eq "$NUM2" ]; then
  echo "$NUM1은 $NUM2와 같습니다."
else
  echo "$NUM1은 $NUM2보다 큽니다."
fi

# 예시 3: 문자열 비교
STR1="hello"
STR2="world"
if [ "$STR1" = "$STR2" ]; then
  echo "두 문자열이 같습니다."
else
  echo "두 문자열이 다릅니다."
fi
```

**조건 표현식:**
- `[ -f 파일 ]`: 파일이 존재하는지 (일반 파일)
- `[ -d 디렉토리 ]`: 디렉토리가 존재하는지
- `[ -z 문자열 ]`: 문자열이 비어있는지
- `[ -n 문자열 ]`: 문자열이 비어있지 않은지
- `[ "문자열1" = "문자열2" ]`: 두 문자열이 같은지
- `[ "문자열1" != "문자열2" ]`: 두 문자열이 다른지
- `[ 숫자1 -eq 숫자2 ]`: 두 숫자가 같은지 (equal)
- `[ 숫자1 -ne 숫자2 ]`: 두 숫자가 다른지 (not equal)
- `[ 숫자1 -gt 숫자2 ]`: 숫자1이 숫자2보다 큰지 (greater than)
- `[ 숫자1 -lt 숫자2 ]`: 숫자1이 숫자2보다 작은지 (less than)
- `[ 숫자1 -ge 숫자2 ]`: 숫자1이 숫자2보다 크거나 같은지 (greater than or equal)
- `[ 숫자1 -le 숫자2 ]`: 숫자1이 숫자2보다 작거나 같은지 (less than or equal)

### `case` 문

```bash
# 예시: 사용자 입력에 따른 동작
read -p "Enter your choice (y/n): " CHOICE
case "$CHOICE" in
  y|Y|yes|YES)
    echo "You chose Yes."
    ;;
  n|N|no|NO)
    echo "You chose No."
    ;;
  *)
    echo "Invalid choice."
    ;;
esac
```

## 3. 반복문

### `for` 문

```bash
# 1) 목록 반복
for 변수 in 항목1 항목2 항목3; do
  echo "현재 항목: $변수"
done
# 예시: 파일 목록 반복
for file in *.txt; do
  echo "텍스트 파일: $file"
done

# 2) 숫자 범위 반복 (Bash 전용)
for i in {1..5}; do
  echo "숫자: $i"
done
# 예시: 1부터 3까지 반복
for i in {1..3}; do
  echo "Count: $i"
done

# 3) C-스타일 반복
for (( i=1; i<=5; i++ )); do
  echo "숫자: $i"
done
# 예시: 짝수만 출력
for (( i=2; i<=10; i+=2 )); do
  echo "Even number: $i"
done
```

### `while` 문

```bash
# 예시: 카운트 다운
COUNT=5
while [ "$COUNT" -gt 0 ]; do
  echo "$COUNT..."
  COUNT=$((COUNT - 1))
  sleep 1
done
echo "Blast off!"
```

## 4. 함수

```bash
# 함수 정의
my_function() {
  echo "함수 실행!"
  echo "첫 번째 인자: $1"
  return 0 # 종료 상태 반환
}

# 함수 호출
my_function "Hello"

# 예시: 두 숫자를 더하는 함수
add_numbers() {
  SUM=$(( $1 + $2 ))
  echo "두 숫자의 합: $SUM"
  return $SUM
}

add_numbers 5 3 # 함수 호출
RESULT=$? # 함수의 반환 값 (return 값)은 $?로 확인
echo "함수 반환 값: $RESULT"
```

## 5. 입출력 리다이렉션 및 파이프

- `>`: 표준 출력을 파일로 리다이렉션 (파일이 존재하면 덮어씀)
    - `echo "Hello" > output.txt`
    - **예시**: `ls -l > file_list.txt` (현재 디렉토리 파일 목록을 `file_list.txt`에 저장)
- `>>`: 표준 출력을 파일 끝에 추가 (append)
    - `echo "World" >> output.txt`
    - **예시**: `echo "Another line" >> file_list.txt` (`file_list.txt`에 내용 추가)
- `<`: 표준 입력을 파일에서 가져옴
    - `cat < input.txt`
    - **예시**: `sort < names.txt` (`names.txt` 파일의 내용을 정렬하여 출력)
- `2>`: 표준 에러를 파일로 리다이렉션
    - `command 2> error.log`
    - **예시**: `ls non_existent_dir 2> error.log` (존재하지 않는 디렉토리 접근 시 에러를 `error.log`에 저장)
- `&>`: 표준 출력과 표준 에러를 모두 파일로 리다이렉션
    - `command &> all_output.log`
    - **예시**: `ls -l /tmp non_existent_dir &> combined_output.log` (정상 출력과 에러를 모두 `combined_output.log`에 저장)
- `|` (파이프): 한 명령어의 출력을 다른 명령어의 입력으로 전달
    - `ls -l | grep ".txt"`: `ls -l`의 결과를 `grep` 명령어로 전달하여 `.txt` 파일을 검색
    - **예시**: `ps aux | grep sshd | awk '{print $2}'` (sshd 프로세스의 PID만 추출)

쉘 스크립팅은 Linux 시스템 관리 및 개발 작업의 효율성을 크게 높여줍니다. 위에서 설명한 기본 문법과 개념을 익히면 다양한 자동화 스크립트를 작성할 수 있습니다.
[AD]