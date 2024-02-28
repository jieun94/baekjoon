//여러 줄 입력
let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().trim().split('\n');
//let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, K] = input.shift().split(' ').map(i => Number(i));
input = input.map(i => Number(i)).reverse()

let result = 0;

for (let i = 0; i < N; i++) {
  if(K !== 0 && K % input[i] !== K) {
    result += Math.floor(K / input[i])
    K = K % input[i]
  }
}

console.log(result)