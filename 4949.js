//여러 줄 입력

let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().trim().split('\n')
//let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

function solution(arr) {
    const ans = []

    for (const item of arr) {
        const stack = []
        let compare = true
        const vps = item.split("")
        
        for (const i of vps) {
            if(i === '.') break
            if(i === '(' || i === '[') {
                stack.push(i)
            } else if (i === ']') {
                if(stack[stack.length -1] === '[') {
                    stack.pop()
                } else {
                    compare = false
                    break
                }
            } else if(i === ')') {
                if(stack[stack.length-1] === '(') {
                    stack.pop()
                } else {
                    compare = false
                    break
                }
            } else if(i === '.') {
                break
            }
        }
        if(stack.length !== 0) {
            compare = false
        }
        if(item !== '.') {
            ans.push(compare ? 'yes' : 'no')
        }
    }
    console.log(ans.join("\n"))
}
solution(input)