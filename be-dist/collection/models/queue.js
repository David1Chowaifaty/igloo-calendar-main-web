export class Queue {
    constructor() {
        this.rear = 0;
        this.front = 0;
        this.items = {};
    }
    enqueue(element) {
        this.items[this.rear] = element;
        this.rear++;
    }
    dequeue() {
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }
    isEmpty() {
        return this.rear - this.front === 0;
    }
    peek() {
        return this.items[this.front];
    }
    size() {
        return this.rear - this.front;
    }
    print() {
        console.log(this.items);
    }
}
//# sourceMappingURL=queue.js.map
