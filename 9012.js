//여러 줄 입력

let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().trim().split('\n')
//let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const N = input.shift()

function solution(arr) {
    const ans = []

    for (const item of arr) {
        const stack = []
        const vps = item.split("")

        let YN = 'YES'
        for (const i of vps) {
            // ( 들어오면 stack에 push
            if(i === '(') {
                stack.push(i)
            } else if(i === ')') {
                if(!stack.pop()) {
                    YN = 'NO'
                    break
                }
            }
        }
        if(stack.length !== 0) {
            YN = 'NO'
        }
        ans.push(YN)
    }
    console.log(ans.join("\n"))
}
solution(input)