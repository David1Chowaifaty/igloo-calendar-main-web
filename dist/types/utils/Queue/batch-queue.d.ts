import { BatchProcessor, QueueOptions } from './types';
export declare class BatchingQueue<T, R = void> {
    private queue;
    private isProcessing;
    private flushTimer;
    private readonly options;
    private readonly processor;
    constructor(processor: BatchProcessor<T, R>, options: QueueOptions);
    /**
     * Add a single item to the queue
     */
    offer(data: T): boolean;
    /**
     * Add multiple items to the queue
     */
    offerAll(items: T[]): number;
    /**
     * Get current queue size
     */
    size(): number;
    /**
     * Check if queue is empty
     */
    isEmpty(): boolean;
    /**
     * Force flush the current queue
     */
    flush(): Promise<void>;
    /**
     * Clear all items from the queue
     */
    clear(): void;
    /**
     * Shutdown the queue and process remaining items
     */
    shutdown(): Promise<void>;
    private scheduleFlush;
    private processBatch;
    private generateId;
}
