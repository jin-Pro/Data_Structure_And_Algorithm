# 힙


## 힙이란?

- 완전 이진 트리의 일종으로 우선순위 큐를 위하여 만들어진 자료구조이다.
- 여러 개의 값들 중에 최댓값이나 최솟값을 빠르게 찾아내도록 만들어진 자료구조이다.
- 부모 노드의 값이 자식 노드의 값보다 항상 크거나 작다.
- 이진 트리에서는 중복된 값을 허용하지 않지만, 힙에서는 중복된 값을 허용한다.

## 힙의 종류
- 최소 힙
- 최대 힙

## 메서드

### add

- tree 에 node를 push한다.
- length 정리
- bottomUp 정리

#### bottomUp

- 추가한 데이터는 제일 마지막 노드이다.
- 부모 노드관련 데이터를 구한다. ( feat : getBottomUpData = (idx,tree) => parentIdx,parent )
- 부모 노드와 target(자식노드)를 비교하여 바꿔준다.
- 반복한다.

---

### delete

- 가장 마지막 노드를 최상단으로 올린다.
- topDown 정리를 진행한다.

#### topDown

- 최상단의 노드와 그의 자식 노드를 비교하여 바꿔준다.

---

