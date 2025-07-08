
# 머신러닝 예시 코드

이 문서에서는 다양한 머신러닝 알고리즘의 파이썬 구현 예시를 제공합니다. 각 예시는 데이터 생성부터 모델 훈련, 평가, 시각화까지의 과정을 포함합니다.

## 1. 데이터 전처리 및 분할

머신러닝 모델을 훈련하기 전에 데이터를 준비하는 과정은 매우 중요합니다. 여기에는 데이터 스케일링, 훈련/테스트 세트 분할 등이 포함됩니다.

```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

print("--- 데이터 전처리 및 분할 예시 ---")

# 데이터 생성 (예시용)
np.random.seed(42)
# 회귀 데이터
X_reg = 2 * np.random.rand(100, 1)
y_reg = 4 + 3 * X_reg + np.random.randn(100, 1)

# 분류 데이터 (2개 클래스)
X_clf = np.random.rand(100, 2)
y_clf = (X_clf[:, 0] + X_clf[:, 1] > 1).astype(int)

# 군집 데이터
X_cluster = np.vstack([
    np.random.randn(50, 2) * 0.5 + [1, 1],
    np.random.randn(50, 2) * 0.5 + [-1, -1],
    np.random.randn(50, 2) * 0.5 + [1, -1]
])

# 데이터 스케일링 (회귀 데이터 예시)
scaler = StandardScaler()
X_reg_scaled = scaler.fit_transform(X_reg)
print(f"원본 X_reg 평균: {np.mean(X_reg):.2f}, 스케일링된 X_reg_scaled 평균: {np.mean(X_reg_scaled):.2f}")

# 훈련/테스트 세트 분할 (분류 데이터 예시)
X_train_clf, X_test_clf, y_train_clf, y_test_clf = train_test_split(X_clf, y_clf, test_size=0.2, random_state=42)
print(f"훈련 세트 크기: {X_train_clf.shape[0]}, 테스트 세트 크기: {X_test_clf.shape[0]}")
print("\n")
```

## 2. 지도 학습 (Supervised Learning)

정답(레이블)이 있는 데이터를 사용하여 모델을 훈련합니다. 회귀와 분류가 대표적입니다.

### 2.1. 선형 회귀 (Linear Regression)

연속적인 값을 예측하는 데 사용되는 가장 기본적인 회귀 모델입니다.

```python
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error

print("--- 선형 회귀 예시 ---")
lin_reg = LinearRegression()
lin_reg.fit(X_reg_scaled, y_reg)
y_pred_reg = lin_reg.predict(X_reg_scaled) # 훈련 데이터에 대한 예측

print(f"회귀 계수 (기울기): {lin_reg.coef_[0][0]:.2f}")
print(f"절편: {lin_reg.intercept_[0]:.2f}")
print(f"평균 제곱 오차 (MSE): {mean_squared_error(y_reg, y_pred_reg):.2f}")

# 시각화
plt.figure(figsize=(8, 6))
plt.scatter(X_reg_scaled, y_reg, label='실제 값')
plt.plot(X_reg_scaled, y_pred_reg, color='red', label='예측 선')
plt.title('선형 회귀')
plt.xlabel('X (스케일링됨)')
plt.ylabel('y')
plt.legend()
plt.grid(True)
plt.show()
print("\n")
```

### 2.2. 로지스틱 회귀 (Logistic Regression) - 분류

이진 분류 문제에 주로 사용되는 모델입니다. 선형 회귀와 달리 확률을 예측하고 이를 기반으로 클래스를 분류합니다.

```python
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

print("--- 로지스틱 회귀 (분류) 예시 ---")
log_reg = LogisticRegression(random_state=42)
log_reg.fit(X_train_clf, y_train_clf)
y_pred_log_reg = log_reg.predict(X_test_clf)

print(f"로지스틱 회귀 정확도: {accuracy_score(y_test_clf, y_pred_log_reg):.2f}")
print("\n")
```

### 2.3. 결정 트리 분류 (Decision Tree Classifier)

데이터의 특징을 기반으로 '예/아니오' 질문을 통해 데이터를 분할하여 분류하는 트리 형태의 모델입니다.

```python
from sklearn.tree import DecisionTreeClassifier

print("--- 결정 트리 분류 예시 ---")
tree_clf = DecisionTreeClassifier(max_depth=3, random_state=42)
tree_clf.fit(X_train_clf, y_train_clf)
y_pred_tree = tree_clf.predict(X_test_clf)

print(f"결정 트리 정확도: {accuracy_score(y_test_clf, y_pred_tree):.2f}")
print("\n")
```

### 2.4. 서포트 벡터 머신 (Support Vector Machine, SVM) - 분류

데이터를 분류하는 최적의 '결정 경계'를 찾는 알고리즘입니다. 선형 및 비선형 분류에 모두 사용될 수 있습니다.

```python
from sklearn.svm import SVC

print("--- SVM 분류 예시 ---")
svm_clf = SVC(kernel='linear', random_state=42) # 선형 커널 사용
svm_clf.fit(X_train_clf, y_train_clf)
y_pred_svm = svm_clf.predict(X_test_clf)

print(f"SVM 정확도: {accuracy_score(y_test_clf, y_pred_svm):.2f}")
print("\n")
```

## 3. 비지도 학습 (Unsupervised Learning)

정답(레이블)이 없는 데이터를 사용하여 데이터의 숨겨진 구조나 패턴을 발견합니다.

### 3.1. K-평균 군집 (K-Means Clustering)

데이터를 미리 정해진 K개의 군집으로 나누는 알고리즘입니다. 각 데이터 포인트를 가장 가까운 군집 중심에 할당하고, 군집 중심을 업데이트하는 과정을 반복합니다.

```python
from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_score

print("--- K-평균 군집 예시 ---")
kmeans = KMeans(n_clusters=3, random_state=42, n_init=10) # n_init 추가
kmeans.fit(X_cluster)
labels = kmeans.labels_
centroids = kmeans.cluster_centers_

print(f"군집 레이블 (처음 10개): {labels[:10]}")
print(f"군집 중심: {centroids}")
print(f"실루엣 점수: {silhouette_score(X_cluster, labels):.2f}") # 군집 성능 평가

# 시각화
plt.figure(figsize=(8, 6))
plt.scatter(X_cluster[:, 0], X_cluster[:, 1], c=labels, cmap='viridis', s=50, alpha=0.8)
plt.scatter(centroids[:, 0], centroids[:, 1], c='red', marker='X', s=200, label='군집 중심')
plt.title('K-평균 군집')
plt.xlabel('특징 1')
plt.ylabel('특징 2')
plt.legend()
plt.grid(True)
plt.show()
print("\n")
```

---

- [다음 - (아직 없음)]
- [이전 - 머신러닝 소개](./intro)

