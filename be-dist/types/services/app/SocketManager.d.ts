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
