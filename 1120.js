//여러 줄 입력
let fs = require('fs');
let [a,b] = fs.readFileSync('example.txt').toString().trim().split(' ');
//let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let min = a.length;

for (let i = 0; i <= b.length -a.length; i++) {
  let diff = 0;
  for (let j = i; j < i+a.length; j++) {
    if(a[j-i] !== b[j]) {
      diff++;
    }
  }
  min = Math.min(min, diff);
}

console.log(min)