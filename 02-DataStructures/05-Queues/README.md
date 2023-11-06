# Queues

- Full example: [Archives](archives/)

## Overview

> Linear Data Structure (dữ liệu tuyến tính): lần lượt đi qua từng phần tử
>
> - **FIFO** - **First In First Out** (Vào trước ra trước)

- **Note**: Không random access (index) như trong Array
- **Usage**:
  - Dùng trong các tthao tác có lập trình theo thứ tự: print, CPU task scheduling
  - Callback queue in JS runtime.

### Operators

| Operators |                                                   | Big-O  |
| --------- | ------------------------------------------------- | ------ |
| Access    |                                                   | `O(n)` |
| Enqueue   | Thêm item vào cuối Queue (Back/Rear)              | `O(1)` |
| Dequeue   | Xóa item ở đầu Queue (Front/Head)                 | `O(1)` |
| Peek      | Lấy item đầu tiên được thêm vào (Item in a Front) | `O(1)` |

### Implement Queues

``` text
  /**
  * Queues
  * 01. isEmpty()
  * 02. peek() - Get first of Queues
  * 03. enqueue(value) - Add value on first
  * 04. dequeue() - Remove last value
  * 
  */
```

| With Arrays                                                                   | With Linked Lists                                    |
| ----------------------------------------------------------------------------- | ---------------------------------------------------- |
| Có index, vùng nhớ gần nhau nên khi remove sẽ phải dời các item khác → `O(n)` | Sử dụng pointer và trỏ tới địa chỉ vùng nhớ → `O(1)` |

## Pros and Cons

| Pros                           | Cons        |
| ------------------------------ | ----------- |
| Fast peek: Access first item   | Slow lookup |
| Ordered                        |             |
| Fast operations: remove/insert |             |
