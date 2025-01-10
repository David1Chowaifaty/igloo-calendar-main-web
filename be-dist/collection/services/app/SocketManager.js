import { io } from "socket.io-client";
class SocketManager {
    constructor() {
        this.isConnected = false;
        this.initializeSocket();
    }
    initializeSocket() {
        // Close existing socket if any
        if (this.socket) {
            this.socket.close();
        }
        this.socket = io('https://realtime.igloorooms.com/', {
            reconnection: true,
            reconnectionAttempts: 5,
            reconnectionDelay: 2000,
        });
        this.socket.on('connect', () => {
            console.log('Connected to the socket server');
            this.isConnected = true;
        });
        this.socket.on('connect_error', error => {
            console.error('Connection error:', error);
        });
        this.socket.on('disconnect', reason => {
            console.log('Disconnected:', reason);
            this.isConnected = false;
        });
    }
    static getInstance() {
        if (!SocketManager.instance) {
            SocketManager.instance = new SocketManager();
        }
        return SocketManager.instance;
    }
    reconnect() {
        if (!this.isConnected) {
            console.log('Attempting to reconnect...');
            this.socket.connect();
        }
    }
    close() {
        this.socket.close();
    }
}
export default SocketManager;
//# sourceMappingURL=SocketManager.js.map
