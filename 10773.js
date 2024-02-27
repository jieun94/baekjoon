//여러 줄 입력

let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().trim().split('\n')
//let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const N = input.shift()

function solution(arr) {
    const stack = []       
    let sum = 0
    for (const num of arr) {
        if(Number(num) === 0) {
            stack.pop()
        } else {
            stack.push(Number(num))
        }
    }
    for (const i of stack) {
        sum += i
    }
    console.log(sum)
}
solution(input)