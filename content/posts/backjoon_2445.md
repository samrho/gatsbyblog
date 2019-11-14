---
title: 2445_make stars(8)
date: 2019-11-15
---

## Problem

[link](https://www.acmicpc.net/problem/2445)

## Code

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main () {
    int N;
    cin >> N;
    int width = 2 * N, height = 2 * N - 1;
    string str(width, '*');
    vector<string> board(height, str);
    for (int i = 0; i < N - 1; ++i) {
        int upper_row = i, lower_row = height - i - 1;
        int start_col = i + 1, end_col = width - start_col - 1;
        for (int j = start_col; j <= end_col; ++j) {
            board[upper_row][j] = board[lower_row][j] = ' ';
        }
    }

    for (int i = 0; i < board.size(); ++i) {
        cout << board[i] << endl;
    }
}

```

## Explanation
