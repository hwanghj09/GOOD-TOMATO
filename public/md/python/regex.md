
# 정규 표현식 (Regular Expressions, Regex)

정규 표현식은 문자열에서 특정 패턴을 찾거나, 추출하거나, 대체하는 데 사용되는 강력한 도구입니다. 복잡한 문자열 처리 작업을 효율적으로 수행할 수 있게 해줍니다.

## 1. `re` 모듈

파이썬에서 정규 표현식을 사용하려면 내장 모듈인 `re`를 임포트해야 합니다.

```python
import re
```

## 2. 주요 함수

### `re.match(pattern, string)`

문자열의 **시작**부터 패턴과 일치하는지 확인합니다. 일치하면 `Match` 객체를 반환하고, 아니면 `None`을 반환합니다.

```python
import re

text = "Hello, world!"
pattern = "Hello"

match = re.match(pattern, text)
if match:
    print("매치 발견:", match.group()) # 매치 발견: Hello
else:
    print("매치 없음")

match = re.match("world", text)
if match:
    print("매치 발견:", match.group())
else:
    print("매치 없음") # 매치 없음 (시작부터 일치하지 않음)
```

### `re.search(pattern, string)`

문자열 전체에서 패턴과 일치하는 첫 번째 부분을 찾습니다. 일치하면 `Match` 객체를 반환하고, 아니면 `None`을 반환합니다.

```python
import re

text = "Hello, world!"
pattern = "world"

search = re.search(pattern, text)
if search:
    print("검색 발견:", search.group()) # 검색 발견: world
else:
    print("검색 없음")
```

### `re.findall(pattern, string)`

문자열 전체에서 패턴과 일치하는 모든 부분을 리스트로 반환합니다.

```python
import re

text = "사과 10개, 바나나 5개, 오렌지 3개"
numbers = re.findall(r'\d+', text) # \d+는 하나 이상의 숫자를 의미
print(numbers) # ['10', '5', '3']

words = re.findall(r'[가-힣]+', text) # [가-힣]+는 하나 이상의 한글 문자를 의미
print(words) # ['사과', '개', '바나나', '개', '오렌지', '개']
```

### `re.sub(pattern, repl, string)`

문자열에서 패턴과 일치하는 부분을 다른 문자열로 대체합니다.

```python
import re

text = "전화번호: 010-1234-5678"
# 숫자를 X로 대체
new_text = re.sub(r'\d', 'X', text)
print(new_text) # 전화번호: XXX-XXXX-XXXX

# 이메일 주소 마스킹
email = "user@example.com"
masked_email = re.sub(r'(?<=.{3})[^@.\s]', '*', email)
print(masked_email) # use***@ex*****e.com
```

## 3. 정규 표현식 문법 (자주 사용되는 것들)

| 패턴       | 설명                                       | 예시 (`re.findall`)           |
| :--------- | :----------------------------------------- | :---------------------------- |
| `.`        | 모든 단일 문자 (줄바꿈 제외)               | `re.findall(r'.', 'abc')` -> `['a', 'b', 'c']` |
| `\d`       | 모든 숫자 (0-9)                            | `re.findall(r'\d', 'abc123')` -> `['1', '2', '3']` |
| `\D`       | 숫자가 아닌 모든 문자                      | `re.findall(r'\D', 'abc123')` -> `['a', 'b', 'c']` |
| `\w`       | 모든 단어 문자 (알파벳, 숫자, 언더스코어)  | `re.findall(r'\w', 'a_b-c')` -> `['a', '_', 'b', 'c']` |
| `\W`       | 단어 문자가 아닌 모든 문자                 | `re.findall(r'\W', 'a_b-c')` -> `['-']` |
| `\s`       | 모든 공백 문자 (스페이스, 탭, 줄바꿈)      | `re.findall(r'\s', 'a b\nc')` -> `[' ', '\n']` |
| `\S`       | 공백이 아닌 모든 문자                      | `re.findall(r'\S', 'a b\nc')` -> `['a', 'b', 'c']` |
| `^`        | 문자열의 시작                              | `re.findall(r'^Hello', 'Hello World')` -> `['Hello']` |
| `$`        | 문자열의 끝                                | `re.findall(r'World$', 'Hello World')` -> `['World']` |
| `*`        | 0회 이상 반복                              | `re.findall(r'a*', 'aaab')` -> `['aaa', '', '', '']` |
| `+`        | 1회 이상 반복                              | `re.findall(r'a+', 'aaab')` -> `['aaa']` |
| `?`        | 0회 또는 1회 반복                          | `re.findall(r'colou?r', 'color colour')` -> `['color', 'colour']` |
| `{n}`      | n회 반복                                   | `re.findall(r'a{3}', 'aaab')` -> `['aaa']` |
| `{n,m}`    | n회 이상 m회 이하 반복                     | `re.findall(r'a{1,3}', 'aaab')` -> `['aaa']` |
| `[]`       | 문자 클래스 (괄호 안의 문자 중 하나)       | `re.findall(r'[aeiou]', 'hello')` -> `['e', 'o']` |
| `[^]`      | 부정 문자 클래스 (괄호 안의 문자 제외)     | `re.findall(r'[^aeiou]', 'hello')` -> `['h', 'l', 'l']` |
| `|`        | OR (둘 중 하나)                           | `re.findall(r'apple|banana', 'I like apple and banana')` -> `['apple', 'banana']` |
| `()`       | 그룹화                                     | `re.findall(r'(ab)+', 'ababab')` -> `['ab', 'ab', 'ab']` |
| `\`        | 특수 문자를 일반 문자로 취급               | `re.findall(r'\.', 'a.b')` -> `['.']` |
| `r''`      | Raw String (이스케이프 문자 처리 안 함)    | `re.findall(r'\n', 'a\nb')` -> `['\n']` |

---

- [다음 - (아직 없음)]
- [이전 - 람다, map, filter](./lambda_map_filter)
