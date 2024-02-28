//여러 줄 입력
let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().trim().split('\n');
//let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input.shift()

input = input.sort((a,b) => Number(b) - Number(a))

console.log(input.join('\n'))
