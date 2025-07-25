
# 선택 정렬 (Selection Sort)

선택 정렬은 전체 데이터 중에서 가장 작은 값(또는 가장 큰 값)을 찾아 첫 번째 위치의 데이터와 교환하는 방식으로 정렬하는 알고리즘입니다.

## 동작 방식

1. 주어진 리스트에서 최솟값을 찾습니다.
2. 그 최솟값을 리스트의 맨 앞에 있는 원소와 교환합니다.
3. 맨 앞의 원소를 제외한 나머지 리스트를 대상으로 1~2 과정을 반복합니다.
4. 전체 리스트의 크기만큼 이 과정을 반복하면 정렬이 완료됩니다.

## 장점

- 알고리즘의 동작 방식이 직관적이고 이해하기 쉽습니다.
- 데이터의 교환 횟수가 버블 정렬이나 삽입 정렬에 비해 적습니다.

## 단점

- 데이터의 양이 많아질수록 성능이 급격하게 저하됩니다.
- 시간 복잡도는 평균적으로 O(n²)으로, 비효율적인 정렬 방식에 속합니다.
- 데이터가 이미 정렬된 상태라도 항상 최솟값을 찾기 위해 전체를 비교해야 하므로 비효율적입니다.

## 코드 예시

```python
def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_index = i
        # i번째 원소부터 끝까지 중 최솟값의 인덱스를 찾음
        for j in range(i + 1, n):
            if arr[j] < arr[min_index]:
                min_index = j
        # 찾은 최솟값을 i번째 원소와 교환
        arr[i], arr[min_index] = arr[min_index], arr[i]
    return arr

# 테스트
my_list = [64, 34, 25, 12, 22, 11, 90]
selection_sort(my_list)
print("정렬된 리스트:", my_list) # 출력: [11, 12, 22, 25, 34, 64, 90]
```
