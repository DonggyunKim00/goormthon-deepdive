## 💡자료구조💡

- **자료구조란?**
  - 데이터를 특정한 방식으로 구성하여 효율적으로 접근, 수정하게 해주는 것
- **대표적인 자료구조**

  - [**연결 리스트**](https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/linked-list/LinkedList.js): 물리적 순서가 없는 대신, 각각의 원소들이 자신의 다음 원소의 주소를 가리키는 자료구조
  <br><br><img width="600" alt="스크린샷 2024-08-29 오후 2 48 45" src="https://github.com/user-attachments/assets/0cf622c5-54bb-40f6-9b09-34488fbc5d12">
  <hr>

  - [**스택**](https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/stack/Stack.js): 각 요소들은 LIFO(Last In First Out)을 따르며
  PUSH, POP 두가지 연산으로 이루어진 자료구조
  <br><br><img width="600" alt="스크린샷 2024-08-29 오후 2 55 15" src="https://github.com/user-attachments/assets/21c882b2-eff1-4cf0-8b4c-d0540ef4279a">
     <hr>

  - [**큐**](https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/queue/Queue.js): 각 요소들은 FIFO(First In First Out)을 따르며
  ENQUEUE(unshift), DEQUEUE(pop) 두가지 연산으로 이루어진 자료구조
  <br><br><img width="600" alt="스크린샷 2024-08-29 오후 2 57 07" src="https://github.com/user-attachments/assets/89de53f3-0a4d-48f7-b8c2-5e06369a413b">
     <hr>

  - [**힙**](https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/heap/Heap.js): 힙 속성을 만족하는 전문화된 트리 기반 데이터구조, 최소힙과 최대힙으로 구분되며 최소힙은 루트노드가 값이 가장 작고, 최대힙은 루트노드가 값이 가장 크다
    <br><img width="600" alt="스크린샷 2024-08-29 오후 3 11 06" src="https://github.com/user-attachments/assets/7c54d99c-2c86-4966-b7f8-28fc2d5c0e45"><img width="600" alt="스크린샷 2024-08-29 오후 3 11 29" src="https://github.com/user-attachments/assets/008b6982-b7ab-4e03-880e-d9c43968b94f"><img width="600" alt="스크린샷 2024-08-29 오후 3 11 52" src="https://github.com/user-attachments/assets/d2ff3f16-eac1-4865-95b6-a809b72aca10">

     <hr>
     
     - [**트리**](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree): 트리의 종류는 이진 탐색 트리, AVL 트리, Red-Black 트리 등등 여러가지가 있고, 아래 사진과 같이 Root,Child,Leaf 노드가 있는것이 특징이다.
     <br><img width="337" alt="스크린샷 2024-08-29 오후 3 15 59" src="https://github.com/user-attachments/assets/cd48082e-f353-47e0-9fac-0caf61469f5a">
     <hr>
     
     - [**그래프**](https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/graph/Graph.js): 그래프는 유방향, 무방향 그래프가 있으며 연결되어 있는 객체 간의 관계를 표현할 수 있는 자료 구조이다.
     <br><img width="600" alt="스크린샷 2024-08-29 오후 3 19 00" src="https://github.com/user-attachments/assets/770a03e9-3d11-49f0-80ef-e0b3dc2dc250">
     <br>

## 💡알고리즘💡

- **알고리즘이란?**
  - 알고리즘은 어떤 종류의 문제를 풀 수 있는 정확한 방법이며, 일련의 작업을 정확하게 정의해 놓은 규칙들이다.
- **대표적인 알고리즘 패러다임**
  - **브루트 포스(Brute Force)**: 모든 경우를 탐색한 뒤 최적을 찾아내는 방식
  - **탐욕 알고리즘(Greedy)**: 이후를 배제하고 현재 시점에서 가장 최적인 선택을 하는 방식
  - **분할 정복법(Divide and Conquer)**: 문제를 여러 작은 문제로 분할한 뒤 해결하는 방식
  - **동적 계획법(Dynamic Programming)**: 이전에 찾은 결과를 이용하여 최종적으로 해결하는 방식

<br>

#### 📚참고 자료

- [MDN 자바스크립트의 타입과 자료구조](https://developer.mozilla.org/ko/docs/Web/JavaScript/Data_structures)
- [모던 JS 튜토리얼 데이터 타입](https://ko.javascript.info/data-types)
- [자바스크립트 알고리즘](https://github.com/trekhleb/javascript-algorithms)
