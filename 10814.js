//여러 줄 입력
let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().trim().split('\n');
//let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input.shift()

input.sort((a, b) => {
    return Number(a.split(' ')[0]) - Number(b.split(' ')[0])
})

console.log(input.join('\n'))