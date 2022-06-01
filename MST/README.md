# MST

> 최소의 간선비용으로 그래프 내의 모든 노드를 연결하는 트리이다.

- Cycle을 만들면 안됀다.
- 간선의 갯수가 적다고 MST인 것은 아니다.
- n개의 정점의 갯수를 갖을 때, n - 1 개의 간선을 가져야 한다.

---

## 종류

### Kruskal 알고리즘

- 간선의 비용으로 간선을 정렬한다.
- 정렬된 간선 중, Cycle을 형성하지 않는 간선을 선택한다.
  - Cycle 형성을 체크하는 방법은 Union Find를 사용한다.
- 간선을 선택할때 Greedy 알고리즘을 사용한다.
- 시간 복잡도는 O(NlogN) 이다

### Kruskal 메서드

- getMST

  - 새로 추가할 간선의 시작점과 끝점을통해 Cycle을 이루는지 확인한다. ( === checkCycle method )
  - 싸이클을 이루지 않는다면 linkVertex ( 연결한 간선 )에 추가한다.
  - Cycle을 확인할 Union 에 등록해준다. ( === addUnion )
  - MST인지 확인한다. ( === checkMST )

- checkMST

  - linkVertex ( 연결한 간선 )의 수가 Node - 1 인지 비교한다.
  - 같다면, 간선의 비용을 더해 반환한다.
  - 다르다면 -1을 반환한다. ( It is not Spanning Tree)

- countVertex

  - Spanning Tree의 간선의 cost를 모두 더한다.

- checkCycle

  - 연결할 간선의 출발 노드와 도착 노드의 Parent가 동일하다면 인자로 넣어준 간선은 Cycle을 이룬다.
  - Parent를 확인하는 메서드 findParent

- findParent

  - getParent를 실행한다. 실상 동일하다.

- getParent

  - getParent는 union 배열에서 자기의 parent를 찾아서 반환한다.
  - 재귀적으로 unionFind 배열의 값이 자기 자신과 동일하지 않다면, 그 값의 unionFind 배열의 값을 찾는다.

- addUnion
  - Cycle을 이루지 않았을 경우 UnionFind 배열을 갱신해주어야한다.
  - 시작 노드의 parent 노드와 도착 노드의 parent노드를 찾아준다. ( 어차피, 시작 노드와 도착 노드는 연결이 될 것이니 parent를 변경해주어야한다. )
  - 시작 노드의 parent 노드와 도착 노드의 parent 노드의 unionFind 배열의 값을 갱신시켜준다.

---

### Prim 알고리즘

- 최초 노드를 선택한다.
- 해당 노드와 연결된 간선 중 Cycle을 이루지 않고 가장 비용이 적은 간선을 선택한다.
- N-1개의 간선을 선택할 때 까지 반복한다.
- 시간 복잡도는 O(N^2) 이다
