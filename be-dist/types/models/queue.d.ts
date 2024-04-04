export declare class Queue<T> {
    items: Record<number, T>;
    rear: number;
    front: number;
    constructor();
    enqueue(element: T): void;
    dequeue(): T;
    isEmpty(): boolean;
    peek(): T;
    size(): number;
    print(): void;
}
