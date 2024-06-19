export declare class AvailabiltyService {
    private socket;
    private queue;
    private intervalId;
    private readonly PROCESSING_INTERVAL;
    private intialDuration;
    initSocket(id?: string): void;
    private startProcessingQueue;
    private processQueue;
    private processPayloads;
}
