//여러 줄 입력
let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().trim().split('\n');
//let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, ...arr] = input;

class Node {
  constructor(item) {
      this.item = item;
      this.next = null;
  }
}
class Queue {
  constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
  }
  
  push(item) {
      const node = new Node(item);
      if(this.head === null){
          this.head = node;
          this.head.next = null;
      } else {
          this.tail.next = node;
      }

      this.tail = node;
      this.length += 1;
  }

  pop() {
      if(this.empty() === 1) {
          return -1;
      }
      const popItem = this.head;
      this.head = this.head.next;
      this.length -=1;
      return popItem.item;
  }

  size() {
      return this.length;
  }

  empty() {
      return this.length === 0 ? 1 : 0
  }

  front() {
      if(this.empty() === 1) {
          return -1;
      }
      return this.head.item
  }

  back() {
      if(this.empty() === 1) {
          return -1;
      }
      return this.tail.item
  }
}

let ans = [];
let queue = new Queue();
arr.forEach(item => {
    let [command, value] = item.split(' ');
    command = command.trim()
    
    switch(command) {
        case 'push':
            queue.push(value);
            break;
        case 'pop':
            ans.push(queue.pop());
            break;
        case 'size':
            ans.push(queue.size());
            break;
        case 'empty':
            ans.push(queue.empty());
            break;
        case 'front':
            ans.push(queue.front());
            break;
        case 'back':
            ans.push(queue.back());
            break;
    }
}) 

console.log(ans.join('\n'));