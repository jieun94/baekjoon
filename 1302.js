//여러 줄 입력
let fs = require('fs');
let [N, ...users] = fs.readFileSync('example.txt').toString().trim().split('\n');
//let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const ans = books.reduce((count, word) => {
  count[word] = (count[word] || 0 ) + 1;
  return count;
}, {});

const maxCount = Math.max(...Object.values(ans));
const mostFrequentWords = Object.keys(ans).filter(
  word => ans[word] === maxCount
).sort();

console.log(mostFrequentWords[0]);