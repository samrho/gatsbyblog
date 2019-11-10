---
title: 1157_learing the words
date: 2019-11-10
---

## Problem

[link](https://www.acmicpc.net/problem/1157)

## Code

```cpp
#include <iostream>
#include <map>
#include <string>
#include <algorithm>
using namespace std;

int main () {
    map<char, int> freq;
    string str;
    cin >> str;
    bool duplicated = false;
    int maximum = -1;
    char maxChar = '.';
    for (int i = 0; i < str.length(); ++i) {
        freq[toupper(str[i])]++;
    }
    for (map<char, int>::iterator it= freq.begin(); it != freq.end(); ++it) {
        if (maximum <= it->second) {
            if (maximum == it->second) {
                duplicated = true;
                maxChar = '?';
            } else {
                duplicated = false;
                maxChar = it->first;
            }
            maximum = it->second;
        }
    }
    cout << maxChar;
}
```

## Explanation
