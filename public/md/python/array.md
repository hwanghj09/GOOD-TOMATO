# Python - 정렬

## 정렬 쓰는 이유

컴퓨터는 데이터를 순서대로 잘 정리하는 방법이 필요하다. 이를 **정렬(정리)**이라고 부른다.

---

## 1. 버블 정렬 (Bubble Sort)

### 버블 정렬이란?

버블 정렬은 **인접한 두 원소를 비교하여 순서가 잘못되어 있으면 서로 교환하는** 정렬 방법입니다. 가장 간단하지만 비효율적인 정렬 알고리즘 중 하나입니다. 이름이 "버블"인 이유는 정렬 과정에서 큰 원소가 배열의 끝으로 **거품처럼 떠오르기** 때문입니다.

### 어떻게 정렬할까?

1. **첫 번째 단계**: 배열의 첫 번째 원소부터 시작하여 인접한 두 원소를 비교합니다.
2. **비교와 교환**: 앞의 원소가 뒤의 원소보다 크면 두 원소의 위치를 바꿉니다.
3. **반복**: 이 과정을 배열의 끝까지 반복합니다. 한 번의 순회가 끝나면 가장 큰 원소가 배열의 마지막에 위치하게 됩니다.
4. **다음 라운드**: 이미 정렬된 마지막 원소를 제외하고 같은 과정을 반복합니다.
5. **완료**: 모든 원소가 정렬될 때까지 이 과정을 계속합니다.

**예시**: [64, 34, 25, 12, 22, 11, 90]
- 1라운드: 64↔34, 64↔25, 64↔12, 64↔22, 64↔11, 90은 그대로 → [34, 25, 12, 22, 11, 64, 90]
- 2라운드: 34↔25, 34↔12, 34↔22, 34↔11, 64는 그대로 → [25, 12, 22, 11, 34, 64, 90]
- 이런 식으로 계속...

### 코드 예시

```python
def bubble_sort(arr):
    n = len(arr) # 리스트의 길이를 구합니다.
    # 배열의 모든 요소를 순회합니다.
    for i in range(n):
        # 마지막 i개의 요소는 이미 정렬되었으므로 제외합니다.
        for j in range(0, n - i - 1):
            # 현재 요소가 다음 요소보다 크면 위치를 바꿉니다. (오름차순 정렬)
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr
```

## 2. 선택 정렬 (Selection Sort)

### 선택 정렬이란?

선택 정렬은 **배열에서 가장 작은(또는 큰) 원소를 찾아서 맨 앞(또는 뒤)으로 보내는** 정렬 방법입니다. 매번 남은 원소들 중에서 최솟값을 **선택**해서 정렬된 부분에 추가하기 때문에 "선택 정렬"이라고 불립니다.

### 어떻게 정렬할까?

1. **최솟값 찾기**: 전체 배열에서 가장 작은 원소를 찾습니다.
2. **교환**: 찾은 최솟값을 배열의 첫 번째 위치에 있는 원소와 교환합니다.
3. **범위 축소**: 이제 첫 번째 위치는 정렬되었으므로, 두 번째 위치부터 시작하여 같은 과정을 반복합니다.
4. **반복**: 남은 부분에서 최솟값을 찾아 해당 위치에 놓는 과정을 배열 전체가 정렬될 때까지 반복합니다.

**예시**: [64, 25, 12, 22, 11]
- 1라운드: 최솟값 11을 찾아 첫 번째와 교환 → [11, 25, 12, 22, 64]
- 2라운드: 남은 부분[25, 12, 22, 64]에서 최솟값 12를 찾아 두 번째와 교환 → [11, 12, 25, 22, 64]
- 3라운드: 남은 부분[25, 22, 64]에서 최솟값 22를 찾아 세 번째와 교환 → [11, 12, 22, 25, 64]

### 코드 예시

```python
def selection_sort(arr):
    n = len(arr)  # 리스트의 길이를 구합니다.
    # 배열의 모든 요소를 순회합니다.
    for i in range(n):
        # 현재 위치를 최소값의 인덱스로 설정합니다.
        min_idx = i
        # 현재 위치 다음부터 마지막 요소까지 순회하며 최소값을 찾습니다.
        for j in range(i + 1, n):
            if arr[min_idx] > arr[j]:
                min_idx = j
        # 찾은 최소값의 위치와 현재 위치의 요소를 바꿉니다.
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr
```

## 3. 삽입 정렬 (Insertion Sort)

### 삽입 정렬이란?

삽입 정렬은 **배열을 정렬된 부분과 정렬되지 않은 부분으로 나누고, 정렬되지 않은 부분의 원소를 하나씩 정렬된 부분의 적절한 위치에 삽입**하는 정렬 방법입니다. 카드 게임에서 패를 정리할 때 사용하는 방법과 매우 유사합니다.

### 어떻게 정렬할까?

1. **시작**: 첫 번째 원소는 이미 정렬되었다고 가정하고, 두 번째 원소부터 시작합니다.
2. **현재 원소 선택**: 정렬되지 않은 부분의 첫 번째 원소를 선택합니다.
3. **위치 찾기**: 선택한 원소를 이미 정렬된 부분에서 적절한 위치를 찾습니다.
4. **삽입**: 다른 원소들을 한 칸씩 뒤로 밀고, 선택한 원소를 올바른 위치에 삽입합니다.
5. **반복**: 모든 원소가 정렬될 때까지 2-4단계를 반복합니다.

**예시**: [5, 2, 4, 6, 1, 3]
- 초기: [5] | [2, 4, 6, 1, 3] (정렬된 부분 | 정렬되지 않은 부분)
- 1단계: 2를 삽입 → [2, 5] | [4, 6, 1, 3]
- 2단계: 4를 삽입 → [2, 4, 5] | [6, 1, 3]
- 3단계: 6을 삽입 → [2, 4, 5, 6] | [1, 3]
- 4단계: 1을 삽입 → [1, 2, 4, 5, 6] | [3]
- 5단계: 3을 삽입 → [1, 2, 3, 4, 5, 6]

### 코드 예시

```python
def insertion_sort(arr):
    n = len(arr)  # 리스트의 길이를 구합니다.
    # 두 번째 요소부터 시작하여 모든 요소를 순회합니다.
    for i in range(1, n):
        key = arr[i]  # 현재 삽입할 요소
        # 현재 요소의 앞 부분을 순회하며 삽입할 위치를 찾습니다.
        j = i - 1
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]  # 현재 요소보다 큰 요소들을 한 칸 뒤로 이동시킵니다.
            j -= 1
        arr[j + 1] = key  # 현재 요소를 올바른 위치에 삽입합니다.
    return arr
```

## 정렬 알고리즘 비교

버블 정렬 | O(n²) | 가장 간단하지만 비효율적

선택 정렬 | O(n²) | 교환 횟수가 적음

삽입 정렬 | O(n²) | 거의 정렬된 배열에서 효율적


#

- [다음 - 탐색](./search)
- [이전 - 함수](./function)