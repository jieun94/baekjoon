//여러 줄 입력

let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().trim().split('\n')
//let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const N = input.shift()
const set = new Set(input)
let newArr = [...set]
newArr.sort((a, b) => {
    if(a.length === b.length) {
        return a.localeCompare(b)
    }
    return a.length - b.length
})
console.log(newArr.join('\n'))