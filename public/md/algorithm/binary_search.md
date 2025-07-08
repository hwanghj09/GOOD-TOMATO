
# 이진 탐색 (Binary Search)

이진 탐색은 **정렬된** 리스트에서 탐색 범위를 절반씩 줄여나가며 원하는 값을 찾는 매우 효율적인 알고리즘입니다.

## 전제 조건

-   **리스트가 반드시 정렬되어 있어야 합니다.** (보통 오름차순)

## 동작 방식

1.  리스트의 시작(left), 중간(mid), 끝(right) 인덱스를 설정합니다.
2.  중간(mid) 위치의 값과 찾으려는 값을 비교합니다.
3.  -   **값이 같으면:** 탐색을 성공적으로 마치고 해당 인덱스를 반환합니다.
    -   **찾으려는 값이 더 크면:** 탐색 범위를 오른쪽 절반(mid + 1 ~ right)으로 좁힙니다.
    -   **찾으려는 값이 더 작으면:** 탐색 범위를 왼쪽 절반(left ~ mid - 1)으로 좁힙니다.
4.  탐색 범위가 더 이상 존재하지 않을 때까지(left > right) 2~3 과정을 반복합니다. 값을 찾지 못하면 -1을 반환합니다.

## 장점

-   탐색 범위가 절반씩 줄어들기 때문에 매우 빠릅니다.
-   시간 복잡도는 O(log n)으로, 데이터가 아무리 많아도 효율적으로 탐색할 수 있습니다.

## 단점

-   탐색을 시작하기 전에 반드시 데이터가 정렬되어 있어야 합니다.

## 코드 예시 (반복문 사용)

```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = (left + right) // 2
        
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
            
    return -1 # 값을 찾지 못한 경우

# 테스트 (반드시 정렬된 리스트 사용)
my_list = [11, 12, 22, 25, 34, 64, 90]

# 34 찾기
index = binary_search(my_list, 34)
if index != -1:
    print(f"값 34는 인덱스 {index}에 있습니다.")
else:
    print("값 34를 찾지 못했습니다.")
```
