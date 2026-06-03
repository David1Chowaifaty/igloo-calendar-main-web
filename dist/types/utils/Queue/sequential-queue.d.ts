export declare class SequentialQueue<T> {
    private readonly maxSize;
    private queue;
    private draining;
    private handler;
    private destroyed;
    constructor(maxSize?: number);
    setHandler(fn: (item: T) => Promise<void>): void;
    enqueue(item: T): void;
    private drain;
    destroy(): void;
}
