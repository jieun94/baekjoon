//여러 줄 입력
let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().trim().split('\n');
//let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(' ');
const site = input.splice(N, input.length - N)
const obj = {};
const result = [];

input.forEach((item) => {
    const [address, pwd] = item.split(' ');
    obj[address] = pwd;
})
site.forEach((url) => {
    result.push(obj[url])
})

console.log(result.join('\n'))
