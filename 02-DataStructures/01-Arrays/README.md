# Array

- Full example: [Archives](archives/)

## Overview

| Operators | Methods built-in | Big-O  |
| --------- | ---------------- | ------ |
| Access    | index            | `O(1)` |
| Insert    | splice()         | `O(n)` |
|           | unshift()        | `O(n)` |
| Append    | push()           | `O(1)` |
| Delete    | pop()            | `O(1)` |
|           | shift()          | `O(n)` |
| Search    | for,..           | `O(n)` |

## Static and Dynamic array

|                    | Static array                | Dynamic array                                     |
| ------------------ | --------------------------- | ------------------------------------------------- |
| Size               | Cố định                     | Thay đổi được                                     |
| Add a new element  | ❌Error: Index out of bounds | ✅Khi vùng nhớ hết sẽ chuyển sang vùng nhớ khác    |
| Number of elements | n                           | n                                                 |
| Indexable          | 0 → n-1                     | 0 → n-1                                           |
| Big O              |                             |                                                   |
| + Access           | O(1)                        | O(1)                                              |
| + Search           | O(n)                        | O(n)                                              |
| + Insert           | N/A                         | O(n)                                              |
| + Append           | N/A                         | O(1) or O(n) - khi phải chuyển sang vùng nhớ khác |
| + Delete           | N/A                         | O(n)                                              |

## Pros and Cons

| Pros            | Cons                         |
| --------------- | ---------------------------- |
| Push/Pop        | Insert/ Delete               |
| Access by index | Fixed size - if static array |
| Ordered         |                              |
