# 리스트

리스트는 여러 값을 **순서대로 저장**하며, 값 추가/삭제가 쉽습니다.  
서로 다른 타입도 함께 담을 수 있습니다.

[AD]

## 기본 사용

```python
nums = [1, 2, 3]
nums.append(4)
print(nums)
```

## 인덱싱

```python
print(nums[0])   # 첫 번째
print(nums[-1])  # 마지막
```

## 슬라이싱

```python
print(nums[0:2])   # 0~1
print(nums[:3])    # 처음부터 2까지
print(nums[::2])   # 2칸씩
```

## 추가/삭제

```python
nums.insert(1, 99)   # 위치에 추가
nums.remove(2)       # 값으로 삭제
nums.pop()           # 마지막 삭제
```

## 길이와 포함 확인

```python
print(len(nums))
print(3 in nums)
```

## 정렬

```python
nums.sort()
nums.reverse()
```
