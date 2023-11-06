# Stacks

- Full example: [Archives](archives/)

## Overview

> Linear Data Structure (dữ liệu tuyến tính): lần lượt đi qua từng phần tử
>
> - **LIFO** - **Last In First Out** (Vào sau ra trước)

- **Note**: Không random access (index) như trong Array
- **Usage**: Theo dõi các thao tác trước đó: Browser history tracking, hoàn tác

## Operators

| Operators     |                                           | Big-O  |
| ------------- | ----------------------------------------- | ------ |
| Access        |                                           | `O(n)` |
| Append (Push) | Thêm item vào trên cùng (top of Stack)    | `O(1)` |
| Peek          | Lấy item trên cùng (top of Stack)         | `O(1)` |
| Delete (Pop)  | Xóa item top of Stack (Thêm vào gần nhất) | `O(1)` |

## Implement Stacks

``` text
  /**
  * Stack
  * 01. isEmpty()
  * 02. peek() - Get top of Stack
  * 03. push(value) - Add value on top
  * 04. pop() - Remove top value
  * 
  */
```

| With Arrays                                                        | With Linked Lists                                                                                   |
| ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| Có index → Vùng nhớ gần nhau → truy xuất nhanh hơn (cache locally) | Linked List nằm rải rác trong vùng nhớ và cần thêm con trỏ để giữ liên kết với các địa chỉ với nhau |
| Size array có giới hạn, phải tìm vùng nhớ khác nếu đầy.            | Size linh động, vì chỉ cần trỏ tới địa chỉ của vùng nhớ tiếp theo cho item mới.                     |

## Pros and Cons

| Pros                           | Cons        |
| ------------------------------ | ----------- |
| Fast peek: Access top item     | Slow lookup |
| Ordered                        |             |
| Fast operations: remove/insert |             |
