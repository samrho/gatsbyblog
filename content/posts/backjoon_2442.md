---
title: 2442_make stars(5)
date: 2019-11-15
---

## Problem

[link](https://www.acmicpc.net/problem/2442)

## Code

```cpp
#include <iostream>
using namespace std;

// 출력 형식이 잘못되었다고 하는 문제.. 별 뒤에 공백이 찍히면 안되는 issue
int main () {
    int N;
    cin >> N;
    int width = 2 * N - 1, height = N, center_idx = N - 1;
    for (int i = 0; i < height; ++i) {
        for (int j = 0; j <= center_idx + i; ++j) {
            char what = (j >= center_idx - i) ? '*' : ' ';
            cout << what;
        }
        cout << "\n";
    }
}

```

## Explanation
