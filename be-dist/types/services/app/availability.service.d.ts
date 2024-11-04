export declare class AvailabiltyService {
    private socketManager;
    private queue;
    private intervalId;
    private readonly PROCESSING_INTERVAL;
    private subscribers;
    private roomTypes;
    constructor();
    subscribe(callback: (b: boolean) => void): void;
    unsubscribe(callback: (b: boolean) => void): void;
    disconnectSocket(): void;
    initSocket(id?: string, view?: boolean): void;
    private startProcessingQueue;
    private processQueue;
    private notifySubscribers;
    private resetVariations;
    private validateNumberString;
    private processPayloads;
}
