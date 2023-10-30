# Big-O

- Full example: [Archives](archives/)

> **Big-O**: Đại diện cho trường hợp tệ nhất, phức tạp nhất của thuật toán.
> Ước tính được hiệu năng của thuật toán khi số lượng input lớn

## Overview

### Rule

- Rule 1: Always worst Case
- Rule 2: Remove Constants
- Rule 3: Different inputs should have different variables.
  - `+` For steps in order: `O(a + b)`.
  - `*` For nested step: `O(a * b)`
- Rule 4: Drop Non-dominant terms

### Common BigO

  | O(1)         | Constant    | no loops                                                                                   |
  | ------------ | ----------- | ------------------------------------------------------------------------------------------ |
  | `O(logN)`    | Logarithmic | usually searching algorithms have log n if they are sorted (Binary Search)                 |
  | `O(n)`       | Linear      | for loops, while loops through n items                                                     |
  | `O(nlog(n))` | Log Linear  | usually sorting operations                                                                 |
  | `O(n^2)`     | Quadratic   | every element in a collection needs to be compared to ever other element. Two nested loops |
  | `O(2^n)`     | Exponential | recursive algorithms that solves a problem of size N                                       |
  | `O(n!)`      | Factorial   | you are adding a loop for every element                                                    |

### Which code is best?

- **Readable**: dễ đọc, dễ bảo trì.
- Memory (**Space Complexity**): Dung lượng bộ nhớ cần khi thực thi
- Speed (**Time Complexity**): Tìm ra thời gian thực thi khi số lượng input tăng

## Time and Space complexity

| Time complexity                          | Space complexity                                            |
| ---------------------------------------- | ----------------------------------------------------------- |
| Thời gian cần thiết                      | Không gian (bộ nhớ) cần thiết                               |
| Tổng thời gian thực thi tất cả điều kiện | Tổng bộ nhớ cần thiết (bao gồm input và output) để thực thi |
| Phụ thuộc vào input data size            | Hầu như phụ thuộc vào input data size                       |
| Quan trọng khi Optimization              | Quan trọng cho Hardwares                                    |
| ✅ Tốc độ nhanh                           | ❌ Bộ nhớ nhiều                                              |
| ❌ Tốc độ chậm                            | ✅ Bộ nhớ ít                                                 |

### What is cause Time complexity?

- Operations (+, -, *, /)
- Comparisons (<, >, ==)
- Looping (for, while)
- Outside Function call (function())

### What is cause Space complexity?

- Variables
- Data Structures
- Function Call
- Allocations
