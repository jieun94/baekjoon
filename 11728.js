//여러 줄 입력
let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().trim().split('\n');
//let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M]= input.shift().split(' ')

input = input.map((item) => {
  return item.split(' ')
})

const arr = input[0].concat(input[1]).sort((a , b) => Number(a) - Number(b))
console.log(arr.join(' '))
