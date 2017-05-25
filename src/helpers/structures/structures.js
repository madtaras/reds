class StackNode {
  constructor(data) {
    this.data = data;
    this.previous = null;
  }
}

// Stack
class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(data) {
    let node = new Node(data);
    node.previous = this.top;
    this.top = node;
    this.size += 1;
    return this.top;
  }

  pop() {
    temp = this.top;
    this.top = this.top.previous;
    this.size -= 1;
    return temp;
  }
}

class QueueNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Queue
class Queue {
  constructor() {
    this.first = null;
    this.size = 0;
  }

  enqueue(data) {
    var node = new Node(data);
    if (!this.first){
      this.first = node;
    } else {
      n = this.first;
      while (n.next) {
        n = n.next;
      }
      n.next = node;
    }
    this.size += 1;
    return node;
  }

  dequeue() {
    temp = this.first;
    this.first = this.first.next;
    this.size -= 1;
    return temp;
  }
}
