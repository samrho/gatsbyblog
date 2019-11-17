---
title: 10870_fibonacci sequence
date: 2019-11-17
---

## Problem

[link](https://www.acmicpc.net/problem/10870)

## Code

```cpp
#include <iostream>
using namespace std;

int fibonacci(int N) {
    return (N == 0 || N == 1) ? N : fibonacci(N - 1) + fibonacci(N - 2);
}

int main(int argc, char * argv[]) {
    int N;
    cin >> N;
    cout << fibonacci(N);
}
```

## Explanation
