export class Queue {
    constructor() {
        this.items = {};
        this.rear = 0;
        this.front = 0;
    }
    enqueue(element) {
        this.items[this.rear] = element;
        this.rear++;
    }
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        if (this.isEmpty()) {
            this.rear = 0;
            this.front = 0;
        }
        return item;
    }
    isEmpty() {
        return this.rear === this.front;
    }
    peek() {
        return this.items[this.front];
    }
    size() {
        return this.rear - this.front;
    }
    print() {
        console.log(Object.values(this.items).slice(this.front, this.rear));
    }
}
//# sourceMappingURL=queue.js.map
