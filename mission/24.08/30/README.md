## ⏰ 시간 복잡도

- 수행 시간에 해당하는 것
- 특정 크기의 입력을 기준으로 할 때 필요한 연산의 횟수
- `🚨 TIP: 컴퓨터는 1초에 3~5억회 연산을 할 수 있다!!`

> 💡 알고리즘은 Best, Average, Worst 케이스로 나눌 수 있으며, 보통 Worst 케이스를 기준으로 시간 복잡도를 계산한다!

<br>

## 💽 공간 복잡도

- 메모리 사용량에 해당하는 것
- 프로그램 실행과 완료에 얼마나 많은 공간(메모리)가 필요한지

<br>

## 빅오 표기법

> 빅오란? 복잡도를 나타내는 점근 표기법 중 가장 많이 사용되는 표기법으로 <br> 최악의 경우를 고려하는 데 가장 좋은 표기법이다.

- 종류

  - O(1): 상수 시간 스택에서 Push, Pop
  - O(log n): 로그 시간 이진 트리
  - O(n): 직선적 시간 for 문
  - O(n log n): 선형 로그 시간 퀵 정렬(quick sort), 병합 정렬(merge sort), 힙 정렬(heap sort)
  - O(n^2): 2차 시간 이중 for 문, 삽입 정렬(insertion sort), 거품 정렬(bubble sort), 선택 정렬(selection sort)
  - O(C^n): 지수 시간 피보나치 수열
    <img width="600" src="https://github.com/user-attachments/assets/a752719a-7295-493c-aeea-aef6efaf3400">

- 특징
  1. 상수항 제거 ex) O(2N) → O(N)
  2. 영향이 큰 항만 남김 ex) O(2N^2 + 4N) → O(N^2)

<br>

## 자료구조별 시간 복잡도 정리

> ⏰ 아래 시간복잡도 정리한 것은 Worst를 기준으로 정리한 것! ⏰

#### 1️⃣ Array(Sorted Array)

<table>
  <tr>
    <th>Search</th>
    <th>Insert</th>
    <th>Delete</th>
  </tr>
  <tr>
    <td>O(㏒ N)</td>
    <td>O(N)</td>
    <td>O(N)</td>
  </tr>
</table>

#### 2️⃣ Linked List

<table>
  <tr>
    <th>Search</th>
    <th>Insert</th>
    <th>Delete</th>
  </tr>
  <tr>
    <td>O(N)</td>
    <td>O(1)</td>
    <td>O(1)</td>
  </tr>
</table>

#### 3️⃣ Stack

<table>
  <tr>
    <th>Search</th>
    <th>Insert</th>
    <th>Delete</th>
  </tr>
  <tr>
    <td>O(N)</td>
    <td>O(1)</td>
    <td>O(1)</td>
  </tr>
</table>

#### 4️⃣ Hash Table

<table>
  <tr>
    <th>Search</th>
    <th>Insert</th>
    <th>Delete</th>
  </tr>
  <tr>
    <td>O(N)</td>
    <td>O(N)</td>
    <td>O(N)</td>
  </tr>
</table>

#### 5️⃣ Binary Search Tree

<table>
  <tr>
    <th>Search</th>
    <th>Insert</th>
    <th>Delete</th>
  </tr>
  <tr>
    <td>O(N)</td>
    <td>O(N)</td>
    <td>O(N)</td>
  </tr>
</table>

#### 6️⃣ Other Tree

<table>
  <tr>
    <th>Search</th>
    <th>Insert</th>
    <th>Delete</th>
  </tr>
  <tr>
    <td>O(㏒ N)</td>
    <td>O(㏒ N)</td>
    <td>O(㏒ N)</td>
  </tr>
</table>

## Reference

- [블로그 글1](https://velog.io/@on-n-on-turtle/%EB%88%84%EA%B5%AC%EB%82%98-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0%EC%99%80-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%B9%85%EC%98%A4%ED%91%9C%EA%B8%B0%EB%B2%95)
- [블로그 글2](https://velog.io/@welloff_jj/Complexity-and-Big-O-notation)
- [바킹독의 실전 알고리즘 Youtube](https://www.youtube.com/watch?v=9MMKsrvRiw4&list=PLtqbFd2VIQv4O6D6l9HcD732hdrnYb6CY&index=2)
