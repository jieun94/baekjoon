//여러 줄 입력
let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().trim().split('\n');
//let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input = input[0]
let cnt = 0;
let x = 665;
while (cnt != +input) {
  x++;
  if (String(x).includes('666')) {
    cnt++;
  }
}
console.log(x)