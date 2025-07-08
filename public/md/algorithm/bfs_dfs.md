# BFS와 DFS (너비 우선 탐색과 깊이 우선 탐색)

BFS(Breadth-First Search)와 DFS(Depth-First Search)는 그래프나 트리 구조에서 원하는 데이터를 탐색하거나 모든 노드를 방문할 때 사용하는 가장 대표적인 알고리즘입니다.

## BFS (너비 우선 탐색)

BFS는 시작 노드에서 가장 가까운, 즉 같은 레벨에 있는 노드들을 먼저 방문하고 다음 레벨로 나아가는 방식입니다. 마치 물결이 퍼져나가는 모습과 같습니다.

### 핵심 원리
- **큐(Queue)** 자료구조를 사용합니다. (선입선출, FIFO)
- 시작 노드를 큐에 넣고 방문 처리합니다.
- 큐에서 노드를 하나 꺼내, 그 노드와 인접한 모든 노드 중 아직 방문하지 않은 노드를 큐에 넣고 방문 처리합니다.
- 큐가 빌 때까지 이 과정을 반복합니다.

### 장점
- 시작점에서 목표점까지의 **최단 경로**를 찾는 데 유용합니다.

### 단점
- 경로가 매우 길 경우, 탐색해야 할 노드가 많아져 많은 메모리를 필요로 할 수 있습니다.

### 코드 예시
```python
from collections import deque

def bfs(graph, start_node):
    visited = set() # 방문한 노드를 기록
    queue = deque([start_node])
    visited.add(start_node)

    path = [] # 방문 순서를 저장할 리스트

    while queue:
        node = queue.popleft()
        path.append(node)

        for neighbor in graph.get(node, []):
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
    return path

# 테스트
graph = {'A': ['B', 'C'], 'B': ['D'], 'C': ['E'], 'D': [], 'E': []}
print("BFS 방문 순서:", bfs(graph, 'A')) # 출력: ['A', 'B', 'C', 'D', 'E']
```

## DFS (깊이 우선 탐색)

DFS는 시작 노드에서 한 방향으로 갈 수 있는 가장 먼 경로까지 탐색한 후, 더 이상 갈 곳이 없으면 이전 분기점으로 돌아와 다른 방향으로 탐색을 계속하는 방식입니다.

### 핵심 원리
- **스택(Stack)** 자료구조(또는 재귀 함수)를 사용합니다. (후입선출, LIFO)
- 시작 노드를 스택에 넣습니다.
- 스택에서 노드를 하나 꺼내, 그 노드가 방문하지 않았다면 방문 처리하고 인접 노드를 스택에 넣습니다.
- 스택이 빌 때까지 이 과정을 반복합니다.

### 장점
- 현재 경로상의 노드들만 기억하면 되므로 BFS보다 메모리를 적게 사용합니다.
- 모든 노드를 방문해야 하는 경우에 간단하게 구현할 수 있습니다.

### 단점
- 최단 경로를 보장하지 않습니다.
- 잘못된 경로에 깊이 빠지면 해를 찾는데 오랜 시간이 걸릴 수 있습니다.

### 코드 예시 (재귀 사용)
```python
def dfs(graph, start_node, visited=None):
    if visited is None:
        visited = set()
    
    visited.add(start_node)
    path = [start_node]

    for neighbor in graph.get(start_node, []):
        if neighbor not in visited:
            path.extend(dfs(graph, neighbor, visited))
            
    return path

# 테스트
graph = {'A': ['B', 'C'], 'B': ['D'], 'C': ['E'], 'D': [], 'E': []}
print("DFS 방문 순서:", dfs(graph, 'A')) # 출력: ['A', 'B', 'D', 'C', 'E']
```