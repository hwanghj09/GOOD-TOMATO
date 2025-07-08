
# 퀵 정렬 (Quick Sort)

퀵 정렬은 '분할 정복(Divide and Conquer)' 패러다임을 기반으로 하는 매우 빠른 정렬 알고리즘입니다. 평균적으로 가장 빠른 성능을 보여 널리 사용됩니다.

## 동작 방식

1.  **피벗(Pivot) 선택:** 리스트에서 기준이 될 원소(피벗)를 하나 선택합니다.
2.  **분할(Partition):** 피벗을 기준으로 피벗보다 작은 원소들은 왼쪽, 큰 원소들은 오른쪽으로 옮깁니다.
3.  **재귀(Recursion):** 분할된 왼쪽과 오른쪽 리스트에 대해 1~2 과정을 재귀적으로 반복합니다.
4.  리스트의 크기가 0이나 1이 되면 재귀 호출이 멈춥니다.

## 장점

-   평균 시간 복잡도가 O(n log n)으로 매우 빠릅니다.
-   추가적인 메모리 공간을 거의 사용하지 않습니다. (공간 복잡도: O(log n))

## 단점

-   최악의 경우(리스트가 이미 정렬된 경우) 시간 복잡도가 O(n²)으로 저하될 수 있습니다.
-   불안정 정렬(Unstable Sort)입니다.

## 코드 예시

```python
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    
    pivot = arr[len(arr) // 2] # 중간 값을 피벗으로 선택
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    
    return quick_sort(left) + middle + quick_sort(right)

# 테스트
my_list = [64, 34, 25, 12, 22, 11, 90]
sorted_list = quick_sort(my_list)
print("정렬된 리스트:", sorted_list)
```
