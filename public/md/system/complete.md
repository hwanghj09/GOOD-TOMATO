# 시스템 프로그래밍 학습 목차

프린트 기반 완성본을 파트별 파일로 나눴습니다. 처음 공부할 때는 위에서 아래 순서대로 읽고, 시험 직전에는 복습 자료만 빠르게 보면 됩니다.

> 추천 순서: 전체 지도 -> 리눅스 실습 -> C와 메모리 -> 프로세스 API -> 시그널과 IPC -> 복습 자료

## 학습 순서

- [0. 전체 지도](/system/overview)

[AD]

## 리눅스 실습

- [1. 리눅스 접속과 환경 확인](/system/linux-environment)
- [2. 프로세스 관찰](/system/process-observation)
- [3. 백그라운드와 종료](/system/process-control)
- [4. 사용자와 권한](/system/permissions)

## C와 메모리

- [5. C 컴파일과 실행](/system/c-build)
- [6. 포인터와 메모리](/system/pointer)

[AD]

## 프로세스 API

- [7. 프로세스 개념](/system/process)
- [8. fork 프로세스 복제](/system/fork)
- [9. wait 자식 종료 대기](/system/wait)
- [10. exec 실행 교체](/system/exec)
- [11. 프로세스 종료](/system/process-exit)

## 시그널과 IPC

- [12. 시그널](/system/signal)
- [13. IPC와 파이프](/system/ipc)
- [14. 파이프와 exec 연결](/system/pipe-exec)
- [15. 파일 디스크립터](/system/file-descriptor)

[AD]

## 복습 자료

- [16. 프린트 실습 흐름 정리](/system/print-practice)
- [17. 명령어 모음](/system/commands)
- [18. C 함수 모음](/system/c-functions)
- [19. 자주 헷갈리는 것](/system/faq)
- [20. 시험 핵심 답안](/system/exam)
- [23. 디버깅 체크리스트](/system/debugging)
- [24. 마지막 압축 정리](/system/summary)

## 미니 프로젝트

- [21. 미니 프로젝트: 명령 실행기](/system/mini-shell)
- [22. 미니 프로젝트: 메시지 전달](/system/mini-pipe)

[AD]

## 빠른 선택

- 프로세스 명령어가 헷갈리면 [프로세스 관찰](/system/process-observation)
- `fork`, `exec`, `wait` 흐름이 헷갈리면 [fork 프로세스 복제](/system/fork)부터 순서대로 읽기
- 권한 문제가 나오면 [사용자와 권한](/system/permissions)
- 파이프 문제가 나오면 [IPC와 파이프](/system/ipc)와 [파이프와 exec 연결](/system/pipe-exec)
- 시험 답안 문장이 필요하면 [시험 핵심 답안](/system/exam)
