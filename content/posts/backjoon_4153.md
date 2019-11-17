---
title: 4153_right-angled triangle
date: 2019-11-17
---

## Problem

[link](https://www.acmicpc.net/problem/4153)

## Code

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#define NONZERO 1
using namespace std;

void swap(int &A, int &B) {
    int temp;
    temp = A;
    A = B;
    B = temp;
    return;
}
void makeItRight(int &A, int &B, int &C) {
    if (A < B) swap(A, B);
    if (A < C) swap(A, C);
    return;
}
string isRightAngled(int A, int B, int C) {
    return (A * A == B * B + C * C) ? "right" : "wrong";
}

int main(int argc, char * argv[]) {
    int LONGEST = NONZERO, B = NONZERO, C = NONZERO;
    while(true){
        cin >> LONGEST >> B >> C;
        makeItRight(LONGEST, B, C);
        if (!(LONGEST * B * C)) return 0;
        cout << isRightAngled(LONGEST, B, C) << '\n';
    }
}
```

## Explanation
