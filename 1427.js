//여러 줄 입력

let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().trim().split('\n')
//let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let arr = String(input).split('')
arr.sort((a, b) => b - a)
console.log(Number(arr.join('')))