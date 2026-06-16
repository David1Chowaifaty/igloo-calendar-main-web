import io from "socket.io-client";
const REALTIME_URL = 'https://realtime.igloorooms.com/';
class RealtimeService {
    static _instance;
    socket = null;
    subscribers = new Map();
    constructor() { }
    static getInstance() {
        if (!RealtimeService._instance) {
            RealtimeService._instance = new RealtimeService();
        }
        return RealtimeService._instance;
    }
    /**
     * Subscribe to real-time messages for a given propertyId.
     *
     * The handler receives a typed {@link RealtimeMessage} discriminated union.
     * Narrowing `msg.reason` in a switch/if also narrows `msg.payload` to the
     * correct type for that reason.
     *
     * @returns An unsubscribe function — call it in `disconnectedCallback`.
     */
    subscribe(propertyId, handler) {
        const key = Symbol();
        this.subscribers.set(key, { propertyId: String(propertyId), handler });
        if (!this.socket) {
            this.connect();
        }
        return () => {
            this.subscribers.delete(key);
            if (this.subscribers.size === 0) {
                this.disconnect();
            }
        };
    }
    connect() {
        this.socket = io(REALTIME_URL);
        this.socket.on('MSG', (raw) => {
            let envelope;
            try {
                envelope = JSON.parse(raw);
            }
            catch {
                return;
            }
            if (!envelope)
                return;
            const { REASON, KEY, PAYLOAD } = envelope;
            let payload;
            try {
                payload = typeof PAYLOAD === 'string' ? JSON.parse(PAYLOAD) : PAYLOAD;
            }
            catch {
                // PAYLOAD is not valid JSON (e.g. DELETE_CALENDAR_POOL, GET_UNASSIGNED_DATES)
                payload = PAYLOAD;
            }
            // Cast to the discriminated union. The REASON key governs which payload type
            // is expected; unknown reasons fall through harmlessly in handler switch/if blocks.
            const message = { reason: REASON, payload };
            const keyStr = KEY?.toString() ?? '';
            for (const sub of this.subscribers.values()) {
                if (keyStr === sub.propertyId.toString()) {
                    console.log(message, keyStr, sub.propertyId);
                    sub.handler(message);
                }
            }
        });
    }
    disconnect() {
        this.socket?.disconnect();
        this.socket = null;
    }
}
export const realtimeService = RealtimeService.getInstance();
