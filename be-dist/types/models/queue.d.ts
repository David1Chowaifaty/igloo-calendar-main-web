export declare class Queue<T> {
    private items;
    private rear;
    private front;
    enqueue(element: T): void;
    dequeue(): T | undefined;
    isEmpty(): boolean;
    peek(): T | undefined;
    size(): number;
    print(): void;
}
