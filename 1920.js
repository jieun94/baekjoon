//여러 줄 입력
let fs = require('fs');
let [N, A, M, X] = fs.readFileSync('example.txt').toString().trim().split('\n');
//let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

A = A.split(' ').map(i => Number(i)).sort((a,b) => a-b);
X = X.split(' ').map(i => Number(i));

function binarySearch(arr, target, left, right, mid) {
  mid = Math.floor((left + right) /2);
  if(right < left) {
    return arr[mid] === target ? 1 : 0;
  }

  if(arr[mid] > target) {
    right = mid -1;
  } else {
    left = mid + 1;
  }
  return binarySearch(arr, target, left, right, mid);
}

const result = X.map(i => binarySearch(A, i, 0, A.length - 1, 0));

console.log(result.join('\n'))