---
title: 15596_sum of N integers
date: 2019-11-10
---

## Problem

[link](https://www.acmicpc.net/problem/15596)

## Code

```cpp
#include <iostream>
#include <vector>
using namespace std;

long long sum(std::vector<int> &a) {
    long long ans = 0;
    int LEN = a.size();
    for (int i= 0; i < LEN; ++i) {
        ans += a[i];
    }
    return ans;
}
int main () {
}
```

## Explanation
