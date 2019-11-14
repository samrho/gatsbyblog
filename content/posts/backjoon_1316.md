---
title: 1316_checking group word
date: 2019-11-15
---

## Problem

[link](https://www.acmicpc.net/problem/1316)

## Code

```cpp
#include <iostream>
#include <map>
#include <string>
using namespace std;
bool isGroupWord(string given);
int main () {
    int N, count = 0;
    string str;
    cin >> N;

    for (int i = 0; i < N; ++i) {
        cin >> str;
        if (isGroupWord(str)) count++;
    }
    cout << count;
}

bool isGroupWord(string given) {
    char current = given[0];
    map<char, int> alphabets;
    for (int j = 1; j < given.length(); ++j) {
        if (alphabets[given[j]]) return false;
        if (given[j] != current) {
            alphabets[current] = 1;
            current = given[j];
        }
    }
    return true;
}

```

## Explanation
