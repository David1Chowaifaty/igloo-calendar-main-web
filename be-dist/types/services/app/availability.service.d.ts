export declare class AvailabiltyService {
    private socket;
    private queue;
    private intervalId;
    private readonly PROCESSING_INTERVAL;
    private subscribers;
    constructor();
    subscribe(callback: (b: boolean) => void): void;
    unsubscribe(callback: (b: boolean) => void): void;
    disconnectSocket(): void;
    initSocket(id?: string): void;
    private startProcessingQueue;
    private processQueue;
    private notifySubscribers;
    private processPayloads;
}
