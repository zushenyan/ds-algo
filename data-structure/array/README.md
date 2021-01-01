# Array

### Definition

- `static array` a fixed length of container that contains elements with the range `[0, n - 1]`.
- `dynamic array` a container with a flexible size that can grow or shrink for better utilizing the memory usage.

### Usage

1. Sorting and accessing sequential data.
2. Buffer
3. Lookup table or inverse lookup table.
4. As cache in dynamic programming to solve subproblems.

### Complexity

| Operation | Static Array | Dynamic Array |
| --------- | ------------ | ------------- |
| Access    | O(1)         | O(1)          |
| Search    | O(n)         | O(n)          |
| Insertion | n/a          | O(n)          |
| Appending | n/a          | O(1)          |
| Deletion  | n/a          | O(n)          |
