---
title: 2798_blackjack
date: 2019-11-17
---

## Problem

[link](https://www.acmicpc.net/problem/2798)

## Code

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main(int argc, char * argv[]) {
    int N, GOAL, maximum = -1;
    cin >> N >> GOAL;
    vector<int> given_cards(N, -1);
    for (int i = 0; i < N; ++i) {
        cin >> given_cards[i];
    }
    for (int i = 0; i <= N - 3; ++i) {
        for (int j = i + 1; j <= N - 2; ++j) {
            for (int k = j + 1; k <= N - 1; ++k) {
                int temp_sum = given_cards[i] + given_cards[j]+ given_cards[k];
                if (temp_sum <= GOAL)
                    maximum = max(maximum, temp_sum);
            }
        }
    }
    cout << maximum;
}
```

## Explanation
