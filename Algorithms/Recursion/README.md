# Recursion

- Full example: [Archives](archives/)

> **Recursion**: Quá trình function tự gọi lại chính nó (trực tiếp/ gián tiếp)
>
> - Hàm này gọi là **Recursive function**.

## Overview

- Rule of Recursion:
  - Xác định **Base Case** (termination point / điểm dừng) → Không có dẫn đến Stack Overflow.
  - Luôn đảm bảo phải có giá trị trả về (`return`)
- Số lượng recursion càng nhiều thì bộ nhớ cần sử dụng cần lớn.
- Một số loại:

  | Name                         | Description                                                                           |
  | ---------------------------- | ------------------------------------------------------------------------------------- |
  | Primitive recursion          | Có thể chuyển đổi sang dạng loop                                                      |
  | Tail recursion               | Là một dạng primitive recursion mà lời gọi recursive function nó nằm ở cuối hàm.      |
  | Single recursion             | Chỉ có một lời gọi recursive function                                                 |
  | Multiple recursion           | Có nhiều lời gọi recursive function                                                   |
  | Mutual or Indirect recursion | Có ít nhất từ 2 functions trở lên tạo nên recursion này. A -> B -> C → A              |
  | General recursion            | Trái ngược với Primitive recursion, chỉ có thể biểu diễn dưới dạng recursive function |

## Recursion vs Iterative

> Anything you do with a recursion CAN be done iteratively (loop)

| Recursion    | Iterative       |
| ------------ | --------------- |
| ✅Readability | ❌Un-readability |
| ❌Large Stack | ✅Small stack    |

## When to use Recursion?

- Khi sử dụng Trees hoặc chuyển đổi về dạng Trees
- Vấn để có thể chia nhỏ thành vấn đề nhỏ hơn của cùng 1 vấn đề.
- Vấn đề con này đều giống nhau (thực hiện logic tương tự)
- Các vấn đề con phải kết hợp lại để giái quyết vấn đề chính ban đầu.
