//여러 줄 입력
let fs = require('fs');
let [N, ...names] = fs.readFileSync('example.txt').toString().trim().split('\n');
//let [N, ...names] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [start, end] = N.split(' ')
const noHear = new Set(names.splice(0, start));
const noSee = names;

const duplicate = noSee.filter(item => noHear.has(item)).sort()
console.log(duplicate.length)
console.log(duplicate.join('\n'));