//여러 줄 입력
let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().trim().split('\n');
//let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input.shift();

let ans = [];
input = input.map(i => i.split(' '));
input.sort((a, b) => {
  if(Number(a[1]) !== Number(b[1])) {
    return Number(b[1])-Number(a[1])
  } else if(Number(a[1]) === Number(b[1]) && Number(a[2]) !== Number(b[2])) {
    return Number(a[2]) - Number(b[2])
  } else if(Number(a[2]) === Number(b[2]) && Number(a[3]) !== Number(b[3])){
    return Number(b[3]) - Number(a[3])
  } else {
    for (let i = 0; i < 10; i++) {
      if(a[0].charCodeAt(i) === b[0].charCodeAt(i)) {
        continue;
      } else {
        return a[0].charCodeAt(i) - b[0].charCodeAt(i);
      }
    }
  }
})
input.forEach((item) => {
  ans.push(item[0])
})
console.log(ans.join('\n'));