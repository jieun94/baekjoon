//여러 줄 입력
let fs = require('fs');
let [N, time] = fs.readFileSync('example.txt').toString().trim().split('\n');
//let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

time = time.split(' ').map(i => Number(i)).sort((a,b) => a-b)
let result = 0;
for (let i = 1; i <= N; i++) {
  result += sum(time, i)
}

function sum(arr, idx) {
  let sum = 0;
  for (let i = 0; i < idx; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(result)