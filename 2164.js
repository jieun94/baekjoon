//여러 줄 입력
let fs = require('fs');
const input = fs.readFileSync('example.txt').toString().trim().split('\n');
//let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    add(value) {
        const node = new Node(value);

        if(!this.head) {
            this.head = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
        }
        this.tail = node;
        this.length++;
        return node;
    }

    getHead() {
        return this.head.value;
    }

    remove() {
        this.head = this.head.next;
        this.head.prev = null;
        this.length--;
    }

    size() {
        return this.length;
    }
}

const cards = new LinkedList();

for (let i = 1; i <= Number(input); i++) {
    cards.add(i);
}

while(cards.size() !== 1) {
    cards.remove();
    cards.add(cards.getHead());
    cards.remove();
}

console.log(cards.getHead());