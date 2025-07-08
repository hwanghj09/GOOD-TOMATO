# 그리디 알고리즘 (Greedy Algorithm)

그리디 알고리즘(탐욕 알고리즘)은 각 단계에서 그 순간 가장 최적이라고 생각되는 선택(Greedy Choice)을 하는 방식으로 최종적인 해답에 도달하려는 알고리즘 설계 기법입니다.

## 핵심 아이디어

'지금 당장 가장 좋아 보이는 것'을 선택하는 것입니다. 이 선택이 미래에 어떤 영향을 미칠지는 고려하지 않습니다. 이러한 단순함 덕분에 구현이 쉽고 빠르지만, 항상 최적의 해를 보장하지는 않습니다.

## 그리디 알고리즘이 유효한 경우

그리디 알고리즘으로 최적해를 구할 수 있으려면 문제가 다음 두 가지 속성을 만족해야 합니다.

1.  **탐욕적 선택 속성 (Greedy Choice Property):** 각 단계에서 하는 탐욕적인 선택이 항상 최적해로 이어져야 합니다.
2.  **최적 부분 구조 (Optimal Substructure):** 한 단계에서 탐욕적인 선택을 하고 난 후 남은 하위 문제의 최적해가 원래 문제의 최적해와 결합될 수 있어야 합니다.

## 거스름돈 문제 예시

가장 대표적인 그리디 알고리즘 예시입니다. 가지고 있는 동전으로 최소 개수의 거스름돈을 주는 문제입니다. (단, 동전의 단위가 서로 배수 관계여야 최적해가 보장됩니다.)

```python
def give_change(amount, coins):
    coins.sort(reverse=True) # 가장 큰 단위의 동전부터 확인
    change_count = 0
    
    print(f"{amount}원을 다음 동전으로 거슬러 줍니다: {coins}")
    
    for coin in coins:
        # 현재 동전으로 줄 수 있는 최대 개수 계산
        count = amount // coin
        if count > 0:
            print(f"{coin}원짜리 {count}개")
            change_count += count
            amount %= coin # 남은 금액 갱신
            
    return change_count

# 테스트
coin_units = [500, 100, 50, 10]
total_coins = give_change(1260, coin_units)
print(f"총 동전 개수: {total_coins}")
```