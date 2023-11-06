# Hash Table

- Full example: [Archives](archives/)

## Overview

> Hash Table (mảng băm) trong JS nó có thể xem là Object
>
> - Lưu trữ theo dạng: `key`: `value` (key-value pair)

- **Flow**
  - Sử dụng `key` → Thông qua `Hash Function` → Return chuỗi bất kỳ → Trỏ tới địa chỉ của vùng nhớ chứa `value` (Tham chiếu)
- **Note**:
  - Hash function: hàm tạo ra giá trị có độ dài cố định cho mỗi input. Cung cấp cùng 1 input sẽ trả về cùng 1 output (idempotent - độc lập)
  - Khi hash trùng key (hash collison): phải xứ lý để không ghi đè value → Fix: Lưu thành Linked list để lưu nhiều thông tin.

## Hash collision

- Hash function sẽ tạo ra 1 chuỗi bất kỳ, chỉ định ngẫu nhiên address để lưu value (Hash function có thể phân bố không đồng đều, có thể trùng address trước đó) → **Hash collision**.
- Khi xảy ra collision: làm chậm tốc độ đọc/ghi → `O(n)`

## Operators

| Operators | Big-O  |
| --------- | ------ |
| Access    | `O(1)` |
| Insert    | `O(1)` |
| Delete    | `O(1)` |
| Search    | `O(1)` |

### Implement a Hash Table

  ``` text
  /**
  * Hash Table
  * 01. _hash()
  * 02 .set(key, value)
  * 03 .get(key)
  * 04 .keys()
  * 05 .values()
  * 
  */
  ```

## Hash Table vs Array/Object/Map/Set

- **Hash Table vs Array**

  |        | Hash Table                       | Array                               |
  | ------ | -------------------------------- | ----------------------------------- |
  | Search | `O(1)`                           | `O(n)`                              |
  | Access | `O(1)`                           | `O(1)`                              |
  | Insert | `O(1)` or `O(n)`- when collision | `O(n)`- at start, or `O(1)`- at end |
  | Delete | `O(1)`                           | `O(n)`- at start, or `O(1)`- at end |
  | Orderd | ✅                                | ❌                                   |
- **Using Object, Set and Map such as Hash Table**

  |              | Object                 | Map           | Set         |
  | ------------ | ---------------------- | ------------- | ----------- |
  | Syntax       | `{}` or `new Object()` | `new Map()`   | `new Set()` |
  | Iterables    | ❌                      | ✅             | ✅           |
  | Ordered      | ✅                      | ✅             | ❌           |
  | Type         | `KEY : VALUE`          | `KEY : VALUE` | `VALUE`     |
  | Key          | string, number         | any type      | N/A         |
  | Unique value | ❌                      | ❌             | ✅           |

## Pros and Cons

| Pros                                          | Cons                               |
| --------------------------------------------- | ---------------------------------- |
| Insert                                        | Unordered                          |
| Access - if collision resolution needed       | Slow key iteration - loop get keys |
| Improve Time complexity: Fast access (`O(1)`) | Tradeoff: More memory (`O(n)`)     |
| Flexible key                                  |                                    |
