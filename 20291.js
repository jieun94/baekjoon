//여러 줄 입력
let fs = require('fs');
let [N, ...files] = fs.readFileSync('example.txt').toString().trim().split('\n');
//let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const obj = {}

for (let file of files) {
  const [name, format] = file.split('.');
  obj[format] ? obj[format] ++ : (obj[format] = 1);
}

const sortedArr = Object.keys(obj).sort();
const result = [];
for (const format of sortedArr) {
  result.push(`${format} ${obj[format]}`);
}
console.log(result.join('\n'));