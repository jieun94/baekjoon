//여러 줄 입력
let fs = require('fs');
let [N, A, B] = fs.readFileSync('example.txt').toString().trim().split('\n');
//let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

A = A.split(' ').map(i => Number(i)).sort((a,b) => a - b);
B = B.split(' ').map(i => Number(i)).sort((a,b) => b - a);

let result = []

for (let i = 0; i < A.length; i++) {
  result.push(A[i] * B[i])
}

function sumArr(arr) {
  return arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}

console.log(sumArr(result))