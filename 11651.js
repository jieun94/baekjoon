//여러 줄 입력
let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().trim().split('\n');
//let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input.shift()

input = input.map((item) => {
  return item.split(' ').map((xy) => {
    return Number(xy)
  })
})

input.sort((a, b) => {
  if(a[1] !== b[1]) {
    return a[1] - b[1]
  } else {
    return a[0] - b[0]
  }
})

console.log(input.map((item) => item.join(' ')).join('\n'))