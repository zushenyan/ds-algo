# Fenwick Tree (Binary Indexed Tree)

### Definition

This is a data structure that supports both setting and queries for sum range in a static array.

In this data structure, a node is responsible for other cells as well. The position of the **least significant bit (LSB)** determines the range of responsibility that cell has to the cells below itself.

```
8 1000    |
7 0111 |  |
6 0110  | |
5 0101 || |
4 0100   ||
3 0011 | ||
2 0010  |||
1 0001 ||||
```

Take index `8` for example, the binary representation is 1000. The LSB is at posiion 4. That means it is responsible for 2^4 - 1 = 7 cells below itself.

Take Index 4 for example, the binary representation is 0100, The LSB is at position 3. That means it is responsible for 2^3 - 1 = 4 cells below itself.

The `|` represents the repsonsiblility for that cell.

All the odd numbers are responsible for themselves, which is 1, for index 2 is 2, index 4 is 4, for index 6 is 2 since index 1 ~ 4 have been covered already. Repeat this process until all the elements have been covered.

###### Query

```
8 1000    |
7 0111 |  |
6 0110  | |
5 0101 || |
4 0100   ||
3 0011 | ||
2 0010  |||
1 0001 ||||
```

To query a range sum, we cascaded down from the current index by **continuously removing the LSB**.

```
7 = 0111, 0111 - 0001 = 0110
6 = 0110, 0110 - 0010 = 0100
4 = 0100, 0100 - 0100 = 0000
0 = 0000
```

To find the sum of index 7, we can do `sum = A[7] + A[6] + A[4]`
To find the sum of index 4, we can do `sum = A[4]`
To find the sum of [5,7] (range query), we can do

```
sum of [1,7] = A[7] + A[6] + A[4]
sum of [1,5) = A[4]
range sum of [5,7] = (A[7] + A[6] + A[4]) - A[4]
```

###### Update

```
8 1000    |
7 0111 |  |
6 0110  | |
5 0101 || |
4 0100   ||
3 0011 | ||
2 0010  |||
1 0001 ||||
```

To update a point, we cascaded up from the current index by **adding the LSB**.

To update index 5:

```
5 = 0101, 0101 + 0001 = 0110
6 = 0110, 0110 + 0010 = 1000
8 = 1000
```

Total operations for a update:

```
A[5] = A[5] + x
A[6] = A[6] + x
A[8] = A[8] + x
```

###### Construction

```
Suppose we have an array like below
6 0110  |    14
5 0101 ||    3
4 0100   |   12
3 0011 | |   -2
2 0010  ||   7
1 0001 |||   3

# Step 1
6 0110  |    14
5 0101 ||    3
4 0100   |   12
3 0011 | |   -2
2 0010  ||   7   10 (3+7)
1 0001 |||   3

# Step 2
6 0110  |    14
5 0101 ||    3
4 0100   |   12  22(10+12)
3 0011 | |   -2
2 0010  ||   7   10
1 0001 |||   3

# Step 3
6 0110  |    14
5 0101 ||    3
4 0100   |   12  20(22-2)
3 0011 | |   -2
2 0010  ||   7   10
1 0001 |||   3

# Step 4 (Done)
6 0110  |    14  17(14+3)
5 0101 ||    3
4 0100   |   12  20
3 0011 | |   -2
2 0010  ||   7   10
1 0001 |||   3
```

### Application Scenarios

- Efficiently setting and query a sum up range in a static array.

### Complexity

| Operation      | Complexity |
| -------------- | ---------- |
| Construction   | O(n)       |
| Point Update   | O(log(n))  |
| Range Sum      | O(log(n))  |
| Range Update   | O(log(n))  |
| Adding Index   | N/A        |
| Removing Index | N/A        |
