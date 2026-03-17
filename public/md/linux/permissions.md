# 권한과 소유권

리눅스는 사용자와 그룹 단위로 권한을 관리합니다. 권한을 이해하면 보안과 운영이 쉬워집니다.

## 기본 개념

- 읽기/쓰기/실행 권한
- 소유자/그룹/기타 사용자
- 권한 변경: `chmod`, 소유자 변경: `chown`

## 예시

```bash
ls -l
chmod 644 file.txt
chown user:group file.txt
```
