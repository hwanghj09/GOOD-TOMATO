
# 딥러닝 예시 코드

이 문서에서는 다양한 딥러닝 모델의 파이썬 구현 예시를 제공합니다. 각 예시는 데이터 생성부터 모델 훈련, 평가, 예측까지의 과정을 포함합니다.

## 1. 간단한 신경망 모델 (Dense Layer)

가장 기본적인 형태의 신경망으로, 각 층의 모든 뉴런이 이전 층의 모든 뉴런과 연결된 구조입니다. 이진 분류 문제에 적용합니다.

```python
import numpy as np
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
import matplotlib.pyplot as plt

print("--- 간단한 신경망 모델 예시 ---")

# 1.1. 데이터 생성 (간단한 분류 문제)
# 0과 1로 이루어진 2차원 데이터 생성
np.random.seed(42)
X = np.random.rand(100, 2) * 10
y = ((X[:, 0] + X[:, 1]) > 10).astype(int) # X[0] + X[1] > 10 이면 1, 아니면 0

# 데이터 시각화
plt.figure(figsize=(8, 6))
plt.scatter(X[y == 0, 0], X[y == 0, 1], label='Class 0', alpha=0.7)
plt.scatter(X[y == 1, 0], X[y == 1, 1], label='Class 1', alpha=0.7)
plt.title('생성된 분류 데이터')
plt.xlabel('Feature 1')
plt.ylabel('Feature 2')
plt.legend()
plt.grid(True)
plt.show()

# 1.2. 모델 정의
model = keras.Sequential([
    layers.Dense(16, activation='relu', input_shape=(2,)), # 입력층 (2개 특성), 은닉층 (16개 뉴런)
    layers.Dense(8, activation='relu'), # 은닉층 (8개 뉴런)
    layers.Dense(1, activation='sigmoid') # 출력층 (1개 뉴런, 이진 분류이므로 sigmoid)
])

# 1.3. 모델 컴파일
model.compile(
    optimizer='adam',
    loss='binary_crossentropy', # 이진 분류 손실 함수
    metrics=['accuracy']
)

# 모델 요약
model.summary()

# 1.4. 모델 훈련
print("\n--- 모델 훈련 ---")
history = model.fit(
    X,
    y,
    epochs=50, # 훈련 반복 횟수
    batch_size=32, # 한 번에 처리할 데이터 샘플 수
    validation_split=0.2, # 훈련 데이터의 20%를 검증 데이터로 사용
    verbose=0 # 훈련 과정 출력 끄기
)

# 훈련 과정 시각화
plt.figure(figsize=(12, 5))

plt.subplot(1, 2, 1)
plt.plot(history.history['loss'], label='훈련 손실')
plt.plot(history.history['val_loss'], label='검증 손실')
plt.title('손실 (Loss)')
plt.xlabel('Epoch')
plt.ylabel('Loss')
plt.legend()

plt.subplot(1, 2, 2)
plt.plot(history.history['accuracy'], label='훈련 정확도')
plt.plot(history.history['val_accuracy'], label='검증 정확도')
plt.title('정확도 (Accuracy)')
plt.xlabel('Epoch')
plt.ylabel('Accuracy')
plt.legend()

plt.tight_layout()
plt.show()

# 1.5. 모델 평가
print("\n--- 모델 평가 ---")
loss, accuracy = model.evaluate(X, y, verbose=0)
print(f"전체 데이터셋에 대한 손실: {loss:.4f}")
print(f"전체 데이터셋에 대한 정확도: {accuracy:.4f}")

# 1.6. 예측
print("\n--- 예측 ---")
new_data = np.array([[2, 3], [8, 9], [1, 1], [9, 2]])
predictions = model.predict(new_data)

print("새로운 데이터에 대한 예측:")
for i, data_point in enumerate(new_data):
    predicted_class = (predictions[i] > 0.5).astype(int)[0]
    print(f"  데이터: {data_point}, 예측 확률: {predictions[i][0]:.4f}, 예측 클래스: {predicted_class}")
print("\n")
```

## 2. 컨볼루션 신경망 (CNN) 예시 - MNIST 숫자 분류

CNN은 이미지와 같은 격자형 데이터 처리에 특화된 신경망입니다. 여기서는 손글씨 숫자 데이터셋인 MNIST를 사용하여 간단한 CNN 모델을 구축하고 훈련하는 예시를 보여줍니다.

```python
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
import numpy as np
import matplotlib.pyplot as plt

print("--- CNN (MNIST 숫자 분류) 예시 ---")

# 2.1. 데이터 로드 및 전처리
(x_train, y_train), (x_test, y_test) = keras.datasets.mnist.load_data()

# 이미지 정규화 (0-255 -> 0-1)
x_train = x_train.astype("float32") / 255.0
x_test = x_test.astype("float32") / 255.0

# CNN 입력 형태에 맞게 차원 확장 (batch, height, width, channels)
x_train = np.expand_dims(x_train, -1)
x_test = np.expand_dims(x_test, -1)

print(f"훈련 데이터 형태: {x_train.shape}") # (60000, 28, 28, 1)
print(f"테스트 데이터 형태: {x_test.shape}")  # (10000, 28, 28, 1)

# 2.2. 모델 정의
model_cnn = keras.Sequential([
    keras.Input(shape=(28, 28, 1)), # 28x28 흑백 이미지
    layers.Conv2D(32, kernel_size=(3, 3), activation="relu"), # 32개 필터, 3x3 커널
    layers.MaxPooling2D(pool_size=(2, 2)), # 2x2 풀링
    layers.Conv2D(64, kernel_size=(3, 3), activation="relu"),
    layers.MaxPooling2D(pool_size=(2, 2)),
    layers.Flatten(), # 1차원으로 평탄화
    layers.Dropout(0.5), # 과적합 방지
    layers.Dense(10, activation="softmax"), # 10개 클래스 (0-9 숫자)
])

# 모델 요약
model_cnn.summary()

# 2.3. 모델 컴파일
model_cnn.compile(optimizer="adam", loss="sparse_categorical_crossentropy", metrics=["accuracy"])

# 2.4. 모델 훈련
print("\n--- CNN 모델 훈련 (MNIST) ---")
history_cnn = model_cnn.fit(x_train, y_train, epochs=5, batch_size=128, validation_split=0.1, verbose=0)

# 훈련 과정 시각화
plt.figure(figsize=(12, 5))

plt.subplot(1, 2, 1)
plt.plot(history_cnn.history['loss'], label='훈련 손실')
plt.plot(history_cnn.history['val_loss'], label='검증 손실')
plt.title('CNN 손실 (Loss)')
plt.xlabel('Epoch')
plt.ylabel('Loss')
plt.legend()

plt.subplot(1, 2, 2)
plt.plot(history_cnn.history['accuracy'], label='훈련 정확도')
plt.plot(history_cnn.history['val_accuracy'], label='검증 정확도')
plt.title('CNN 정확도 (Accuracy)')
plt.xlabel('Epoch')
plt.ylabel('Accuracy')
plt.legend()

plt.tight_layout()
plt.show()

# 2.5. 모델 평가
print("\n--- CNN 모델 평가 ---")
loss_cnn, accuracy_cnn = model_cnn.evaluate(x_test, y_test, verbose=0)
print(f"테스트 데이터셋 손실: {loss_cnn:.4f}")
print(f"테스트 데이터셋 정확도: {accuracy_cnn:.4f}")

# 2.6. 예측
print("\n--- CNN 예측 ---")
predictions_cnn = model_cnn.predict(x_test[:5]) # 첫 5개 이미지 예측
predicted_labels = np.argmax(predictions_cnn, axis=1)

print("첫 5개 테스트 이미지에 대한 예측:")
for i in range(5):
    print(f"  실제: {y_test[i]}, 예측: {predicted_labels[i]}")

print("\n")
```

---

- [다음 - (아직 없음)]
- [이전 - 딥러닝 소개](./intro)
