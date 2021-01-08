# Hash Table

### Definition

It's a data structure provide `key-value pairs` by mapping from keys to valuse using `hashing`. The keys need to be **hashable**.

| Key  | Value |
| ---- | ----- |
| Jack | red   |
| John | blue  |
| Leah | green |

###### Hash Function

A hash function `H(x)` is a function that maps a key `x` to a number in a fixed range.

We ca define a forumla for hashing keys to the range [0,9]

```
H(x) = (x^2 - 6x + 9) mod 10

H(4) = 1
H(-7) = 0
H(0) = 9
```

The hash function has to be **deterministic**, which means with the same input, it should return the same output.

###### Hash Collision

In some scenario we might end up having items with the same hash number. It is called `hash collision`.

| Name | Age | Hash |
| ---- | --- | ---- |
| John | 10  | 5    |
| Mary | 12  | 5    |
| Bob  | 15  | 1    |

###### How does it work

Suppose we have a formula like this `H(x) = (x^2 + 3) mod 5`, and we want to insert a data into our hash table. The size of this hash table is 5.

```
The insertion takes (key, value) type

# Insert (5, "foo")
| Hash | Key | Value |
| ---- | --- | ----- |
| 0    |     |       |
| 1    |     |       |
| 2    |     |       |
| 3    | 5   | "foo" |
| 4    |     |       |

# Insert (2, "bar")
| Hash | Key | Value |
| ---- | --- | ----- |
| 0    |     |       |
| 1    |     |       |
| 2    | 2   | "bar" |
| 3    | 5   | "foo" |
| 4    |     |       |
```

However with this size, we will quickly hit `hash collision`. To resolve this, we can use techniques like `separate chaining` or `open addressing`.

###### separate chaining

It uses a data structure (mostly a linked list due to performance wise) to hold all the values for a hash number.

```
# Insert (5, "foo")
| Hash | Data       |
| ---- | ---------- |
| 0    |            |
| 1    |            |
| 2    |            |
| 3    | (5, "foo") |
| 4    |            |

# Insert (1, "cat")
| Hash | Data       |
| ---- | ---------- |
| 0    |            |
| 1    |            |
| 2    |            |
| 3    | (5, "foo") |
| 4    | (1, "cat") |

# Insert (3, "bar")
| Hash | Data                     |
| ---- | ------------------------ |
| 0    |                          |
| 1    |                          |
| 2    |                          |
| 3    | (5, "foo") -> (0, "bar") |
| 4    | (1,"cat")                |
```

When it grows larger we might have a lot of elements that we no longer maintain `O(1)` for our hash table. In that case, consider to create a larger size of hash table and rehash elements.

###### open addressing

It finds another place for storing whithin the hash table by offsetting from the position to which it hashed to. Repeating this approach until a slot is found is called `probing sequence P(x)`.

`Key-value pairs` are stored in the table itself as opposed to separate chaining.

We need a load factor to determine if we hit the threshold of a hash table

```
Load Factor = items in the table / size of the table
```

There are many ways of probing seuqences. However, all of them cause **infinite loop**.

```
Assume we have a hash table below.
The probing sequence is P(x) = 4x
The hash function is H(x) = 2

0     1     2     3
null  null  null  null

# index = H(k) = (2 + 0) mod 4 = 2
0     1     2     3
null  null  (k,v) null

# index = H(k) + P(1) = (2 + 4) mod 4 = 2
// collision!
```

To resolve this, we restrict the domain of probing functions to those which produce a cycle of exactly length N. Please look up `linear probing`, `quadratic probing`, `double hashing` for detail.

### Application Scenarios

- Track for frequencies.

### Complexity

| Operation | Average | Worst |
| --------- | ------- | ----- |
| Insertion | O(1)\*  | O(n)  |
| Removal   | O(1)\*  | O(n)  |
| search    | O(1)\*  | O(n)  |

\* It is only true when we have a **uniform hash function** (a well made formula for hashing).
