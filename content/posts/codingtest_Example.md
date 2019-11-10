---
title: algorithm problem
date: 2019-11-09
---

# 문제 풀이

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

###
