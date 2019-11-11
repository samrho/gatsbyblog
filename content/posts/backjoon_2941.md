---
title: 2941_croatian alphabet
date: 2019-11-11
---

## Problem

[link](https://www.acmicpc.net/problem/2941)

## Code

```cpp
#include <iostream>
#include <set>
#include <string>
using namespace std;

int main () {
    set<string> croatian = {"c=","c-","dz=","d-","lj","nj","s=","z="};
    string given;
    cin >> given;
    int count = 0, curr_idx = 0;
    while (curr_idx < given.length()) {
        string word = given.substr(curr_idx, 2);
        if (word == "dz" && given[curr_idx + 2] == '=') {
            curr_idx += 3;
            count++;
            continue;
        }
        if (croatian.count(word) == 1) {
            curr_idx += 2;
            count++;
            continue;
        }
        count++;
        curr_idx++;
    }
    cout << count;
}
```

## Explanation
