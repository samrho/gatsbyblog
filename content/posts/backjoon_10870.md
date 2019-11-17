---
title: 10870_fibonacci sequence
date: 2019-11-17
---

## Problem

[link](https://www.acmicpc.net/problem/10870)

## Code

```cpp
#include <iostream>
using namespace std;

int fibonacci(int N) {
    return (N == 0 || N == 1) ? N : fibonacci(N - 1) + fibonacci(N - 2);
}

int main(int argc, char * argv[]) {
    int N;
    cin >> N;
    cout << fibonacci(N);
}
```

## Using memoization

```cpp
#include <iostream>
#include <vector>
#define UNDETERMINED -1
using namespace std;

vector<long long> fibo_memo(100, UNDETERMINED);
long long fibonacci(int N) {
    if (fibo_memo[N] == UNDETERMINED) {
        fibo_memo[N] = fibonacci(N - 1) + fibonacci(N - 2);
    }
    return fibo_memo[N];
}

int main(int argc, char * argv[]) {
    int N;
    fibo_memo[0] = 0;
    fibo_memo[1] = 1;
    cin >> N;
    cout << fibonacci(N);
}

```

## Explanation

- Dynamic programming을 사용하지 않으면 반복된 계산을 계속해서 진행하기 때문에 CPU가 처리해야 할 연산의 수가 많아진다.
- 그렇기 때문에 한 번 구한 fibonacci sequence number를 별도의 배열에 저장해 두고 N번째 fibonacci number가 필요할 때마다 꺼내어 쓰면 한 층 더 효율적인 알고리즘이 될 것이다.
- 구현은 위와 같이 할 수 있을 것이다.
