---
title: 자바스크립트로 코딩 테스트 문제 풀기
date: 2019-12-14
---

# 자바스크립트로 코딩 테스트 문제 풀기

## 들어가며

코딩 테스트는 개발자로서의 커리어를 쌓아 나가는 데에 있어 아주 중요한 부분을 차지한다. 원래는 C++ 언어로 알고리즘 문제를 해결했었는데, 우연히 JavaScript 언어로 문제를 한 번 풀어 보니 이 언어가 가진 장점인 유연함이 좋았고, JavaScript를 내 주력 언어로 삼고 싶다는 생각이 들었다.

언어 자체는 유연함을 가지고 있다고 하지만, 이 유연함을 누리기 위해서 해주어햐 할 세팅이 다른 언어들과는 비교할 수 없을 정도로 복잡했다.

아래 코드는 해외 유명 사이트인 [HackerRank](https://www.hackerrank.com/)에서 가져온 boiler plate 코드인데, 이 글을 통해 이 코드들이 왜 필요한 것인지를 해석해 보고 정리하려 한다.

## Boilerplate code

```javascript
"use strict"

const fs = require("fs")

process.stdin.resume()
process.stdin.setEncoding("utf-8")

let inputString = ""
let currentLine = 0

process.stdin.on("data", inputStdin => {
  inputString += inputStdin
})

process.stdin.on("end", _ => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map(str => str.replace(/\s*$/, ""))

  main()
})

function readLine() {
  return inputString[currentLine++]
}

function sockMerchant(n, ar) {}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH)

  const n = parseInt(readLine(), 10)

  const ar = readLine()
    .split(" ")
    .map(arTemp => parseInt(arTemp, 10))

  let result = sockMerchant(n, ar)

  ws.write(result + "\n")

  ws.end()
}
```
