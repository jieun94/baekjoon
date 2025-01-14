//여러 줄 입력
let fs = require('fs');
let [N, ...users] = fs.readFileSync('example.txt').toString().trim().split('\n');
//let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


let result = users.reduce((groups, item) => {
  if (item.includes("ENTER")) {
    groups.push([]); 
  } else {
    groups[groups.length - 1].push(item); 
  }
  return groups;
}, [[]]); 

result = result.filter(group => group.length > 0).map(group => new Set(group));
let count = 0
result.forEach((group) => {
  count += group.size
})

console.log(count)