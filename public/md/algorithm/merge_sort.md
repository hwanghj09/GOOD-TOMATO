
# 병합 정렬 (Merge Sort)

병합 정렬은 '분할 정복(Divide and Conquer)' 패러다임을 기반으로 하는 효율적인 정렬 알고리즘입니다.

## 동작 방식

1.  **분할(Divide):** 리스트를 더 이상 나눌 수 없을 때까지(원소가 하나만 남을 때까지) 절반으로 계속 나눕니다.
2.  **정복(Conquer):** 나누어진 각 리스트를 정렬합니다. (원소가 하나인 리스트는 이미 정렬된 것으로 간주합니다.)
3.  **결합(Combine):** 정렬된 두 개의 부분 리스트를 하나의 정렬된 리스트로 병합합니다. 이 과정을 재귀적으로 반복하여 전체 리스트를 정렬합니다.

## 장점

-   시간 복잡도가 평균과 최악 모두 O(n log n)으로 매우 안정적이고 효율적입니다.
-   안정 정렬(Stable Sort)이 가능합니다.

## 단점

-   정렬 과정에서 추가적인 메모리 공간(임시 배열)이 필요합니다. (공간 복잡도: O(n))
-   재귀 호출로 인해 데이터가 매우 많은 경우 오버헤드가 발생할 수 있습니다.

## 코드 예시

```python
def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        left_half = arr[:mid]
        right_half = arr[mid:]

        # 재귀적으로 분할
        merge_sort(left_half)
        merge_sort(right_half)

        i = j = k = 0

        # 두 부분 리스트를 병합
        while i < len(left_half) and j < len(right_half):
            if left_half[i] < right_half[j]:
                arr[k] = left_half[i]
                i += 1
            else:
                arr[k] = right_half[j]
                j += 1
            k += 1

        while i < len(left_half):
            arr[k] = left_half[i]
            i += 1
            k += 1

        while j < len(right_half):
            arr[k] = right_half[j]
            j += 1
            k += 1
    return arr

# 테스트
my_list = [64, 34, 25, 12, 22, 11, 90]
merge_sort(my_list)
print("정렬된 리스트:", my_list)
```
