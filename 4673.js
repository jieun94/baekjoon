//여러 줄 입력
let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().trim().split('\n');
//let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const rnage = 10000
const selfArr = Array(range+1).fill(true)

function selfNumber(n) {
    let number = n;
    let result = 0;
    for (let i = 0; i < String(n).length; i++) {
        result += number % 10;
        number = Math.floor(number /10);
    }
    return n+result;
}

for (let i = 0; i <= range; i++) {
    selfArr[selfNumber(i)] = false;
}

for (let i = 0; i <= range; i++) {
    if(selfArr[i]) {
        console.log(i)
    }
}
