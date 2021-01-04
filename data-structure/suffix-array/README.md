# Suffix Arrays & LCP(Longest Common Prefixes) & LCS(Longest Common Substrings) & LRS(Longest Repeated Substrings)

### Definition

###### Suffix Arrays

We have to talk about Suffix Array (SA) first. Suffix array is an array which contains all the sorted suffixes of a string:

Normal array:

| Index | String |
| ----- | ------ |
| 0     | camel  |
| 1     | amel   |
| 2     | mel    |
| 3     | el     |
| 4     | l      |

Suffix array:

| Index | String |
| ----- | ------ |
| 1     | amel   |
| 0     | camel  |
| 3     | el     |
| 4     | l      |
| 2     | mel    |

However we only store the `index` in the memory. This is a space efficient to a suffix tree. Suffix arrays can do everything suffix trees can, with some additional information such as a Longest Common Prefix (LCP) array.

###### Longest Common Prefix (LCP)

The definition is an array in which every index tracks **how many characters two sorted adjacent suffixes have in common**.

We need to find the longest common prefix for a string, take `ABABBAB` for example, the constructed data structure would be like below:

| Sorted Index | LCP Value | Suffix  |
| ------------ | --------- | ------- |
| 5            | 0         | AB      |
| 0            | 2         | ABABBAB |
| 2            | 2         | ABBAB   |
| 6            | 0         | B       |
| 4            | 1         | BAB     |
| 1            | 3         | BABBAB  |
| 3            | 1         | BBAB    |

And we get the `LCP value` as our `LCP` array.

The naive solution for finding the unique substrings would take `O(n^2)`. This is where `LCP` shines.

Suppose we have a string `AZAZA`. All substrings (`(n(n+1)/2)`) are:

```
A, AZ, AZA, AZAZ, AZAZA, Z, ZA, ZAZ, ZAZA, A, AZ, AZA, Z, ZA, A
```

However only substrings below are unique, the rest are duplicated:

```
A, AZ, AZA, AZAZ, AZAZA, Z, ZA, ZAZ, ZAZA
```

| LCP | Suffixes |
| --- | -------- |
| 0   | A        |
| 1   | AZA      |
| 3   | AZAZA    |
| 0   | ZA       |
| 2   | ZAZA     |

Unique substrings forumla:

```math
\frac{n(n-1)}{2} - \sum_{i=1}^{n} LCP[i]
```

Apply this to our result:

```
Text = "AZAZA", n = 5
The unique substrings number is: 5(5+1)/2 - (0+1+3+0+2) = 9
```

###### Longest Common Substrings (LCS)

We can use dynamic programming to find it, however, it still takes `O(n1 * n2 * n3 * ... * nm)` to run. Instead, we can we suffix array to reduce the time complexity to `O(n1 + n2 + n3 + ... + nm)`.

Suppose we have strings below

```
S1 = abca
S2 = bcad
S3 = daca
```

we can concatenate them with unique symbols and produce the LCP

```
T = S1 + '#' + S2 + '$' + S3 + '%' = abca#bcad$daca%
```

| LCP | Suffixes         |
| --- | ---------------- |
| 0   | a#bcad$daca%     |
| 1   | a%               |
| 1   | abca\$bcad$daca% |
| 1   | aca%             |
| 1   | ad$daca%         |
| 0   | bca#bcad$daca%   |
| 3   | bcad$daca%       |
| 0   | ca#bcad$daca%    |
| 2   | ca%              |
| 2   | cad$daca%        |
| 0   | d$daca%          |
| 1   | daca%            |

And then we can iterate through this list by using the **sliding window** technique plus a **hashtable** to record how many groups are in the sliding window, as there suppose to be at least number of `K` in it (Here we want to find LCS at least among 3 strings, so `K` is suppose to be `3`.)

The LCS result is 2, and we reduce the time complexity to `O(n)`.

###### Longest Repeated Substrings (LRS)

The LRS for `ABRACADABRA` is `ABRA`

```
ABRACADABRA
----   ----
```

It can be found with the largest LCP (the answer is 4):

| LCP | Suffixes    |
| --- | ----------- |
| 0   | A           |
| 1   | ABRA        |
| 4   | ABRACADABRA |
| 1   | ACADABRA    |
| 1   | ADABRA      |
| 0   | BRA         |
| 3   | BRACADABRA  |
| 0   | CADABRA     |
| 0   | DABRA       |
| 0   | RA          |
| 2   | RACADABRA   |

Sometimes the LRS can be multiple, take `ABABBAABAA` as example:

| LCP | Suffixes  |
| --- | --------- |
| 0   | A         |
| 1   | AA        |
| 2   | AABAA     |
| 1   | ABAA      |
| 3   | ABABAABAA |
| 2   | ABBAABAA  |
| 0   | BAA       |
| 3   | BAABAA    |
| 2   | BABBAABAA |
| 1   | BBAABAA   |

We have `ABA` and `BAA` as our champions.

### Application Scenarios

- Counting LCP, LCS, LRS.
