//여러 줄 입력
let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().trim().split('\n');
//let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input.shift()
class Node {
  constructor(item) {
    this.item = item;
    this.prev = null;
    this.next = null;
  }
}

class Deque {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push_front(item) {
    const node = new Node(item);
    if(this.size() === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  push_back(item) {
    const node = new Node(item);

  }

  pop_front() {
    if(this.size() === 0) {
      return -1;
    } else {
      this.head = this.head.next;
      this.size() === 1 ? this.head = null : this.head.prev = null;
    }
    const pop = this.head;
    this.length--;
    return pop.item;
  }

  pop_back() {
    if(this.size() === 0) {
      return -1;
    } else {
      const pop = this.tail;
      this.tail = this.tail.prev;
      this.size() === 1 ? this.tail = null : this.tail.next = null;
      return pop.item;
    }
  }

  size() {
    return this.length
  }

  empty() {
    return this.length === 0 ? 1 : 0
  }

  front() {
    return this.empty() === 1 ? -1 : this.head.item;
  }

  back() {
    return this.arr.length === 0 ? -1 : this.arr[this.arr.length-1]
  }
}

let result = []
let deque = new Deque();

const cmd = input.map(i => i.split(' '));
cmd.forEach(item => {
  switch(item[0]) {
    case 'push_front':
      deque.push_front(item[1]);
      break;
    case 'push_back':
      deque.push_back(item[1]);
      break;
    case 'pop_front':
      result.push(deque.pop_front());
      break;
    case 'pop_back':
      result.push(deque.pop_back());
      break;
  }
})

console.log(result.join('\n'))