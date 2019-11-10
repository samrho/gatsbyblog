---
title: 2798_blackjack
date: 2019-11-09
---

## Problem

[link](https://www.acmicpc.net/problem/2798)

## Code

```cpp
#include <iostream>
#include <string>
using namespace std;

int main(){
    int N, score = 0;
    cin >> N;
    for (int i = 0; i < N; ++i) {
        int default_point = 1;
        string str;
        cin >> str;
        int LEN = str.length();
        for (int j = 0; j < LEN; ++j) {
            (str[j] == 'O') ? score += default_point++ : default_point = 1;
        }
        cout << score << endl;
        score = 0;
    }
}

```

## Explanation
