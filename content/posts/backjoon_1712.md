---
title: 1712_break-even point
date: 2019-11-15
---

## Problem

[link](https://www.acmicpc.net/problem/1712)

## Code

```cpp
#include <iostream>
#include <cmath>
using namespace std;

int main () {
    int A, B, C;
    cin >> A >> B >> C;
    int ans = (B >= C) ? -1 : round(A / (C - B) + 0.5)  ;
    cout << ans;
}

```

## Explanation
