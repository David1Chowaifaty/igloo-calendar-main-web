import { Socket } from 'socket.io-client';
declare class SocketManager {
    private static instance;
    socket: Socket;
    isConnected: boolean;
    private constructor();
    private initializeSocket;
    static getInstance(): SocketManager;
    reconnect(): void;
    close(): void;
}
export default SocketManager;
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
