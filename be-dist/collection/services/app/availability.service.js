import { Queue } from "../../models/queue";
import booking_store from "../../stores/booking";
import { io } from "socket.io-client";
class SocketManager {
    constructor() {
        this.isConnected = false;
        this.initializeSocket();
    }
    initializeSocket() {
        this.socket = io('https://realtime.igloorooms.com/', {
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
            // this.reconnect();
        });
    }
    static getInstance() {
        if (!SocketManager.instance) {
            SocketManager.instance = new SocketManager();
        }
        return SocketManager.instance;
    }
    reconnect() {
        console.log('Attempting to reconnect...');
        this.initializeSocket();
    }
    close() {
        this.socket.close();
    }
}
export default SocketManager;
export class AvailabiltyService {
    constructor() {
        this.queue = new Queue();
        this.intervalId = null;
        this.PROCESSING_INTERVAL = 400;
        this.subscribers = [];
        this.roomTypes = [];
        this.socketManager = SocketManager.getInstance();
    }
    subscribe(callback) {
        this.subscribers.push(callback);
    }
    unsubscribe(callback) {
        this.subscribers = this.subscribers.filter(sub => sub !== callback);
    }
    disconnectSocket() {
        this.socketManager.socket.on('disconnect', reason => {
            console.log('Disconnected:', reason);
            if (this.intervalId) {
                clearInterval(this.intervalId);
            }
        });
        this.socketManager.socket.close();
    }
    initSocket(id) {
        if (!this.socketManager.isConnected) {
            this.socketManager.reconnect();
        }
        this.resetVariations();
        this.socketManager.socket.on('MSG', (msg) => {
            try {
                const message_obj = JSON.parse(msg);
                if (message_obj && message_obj.KEY && message_obj.KEY.toString() === id) {
                    // console.log(currentTime - this.duration);
                    this.notifySubscribers();
                    this.queue.enqueue(message_obj.PAYLOAD);
                }
            }
            catch (error) {
                console.error('Error parsing message:', error);
            }
        });
        this.startProcessingQueue();
    }
    startProcessingQueue() {
        this.intervalId = setInterval(() => this.processQueue(), this.PROCESSING_INTERVAL);
    }
    async processQueue() {
        const payloads = [];
        while (!this.queue.isEmpty()) {
            const payload = this.queue.dequeue();
            if (payload) {
                payloads.push(JSON.parse(payload));
            }
        }
        if (payloads.length > 0) {
            await this.processPayloads(payloads);
        }
    }
    notifySubscribers() {
        this.subscribers.forEach(callback => callback(false));
    }
    resetVariations() {
        booking_store.resetBooking = true;
        this.roomTypes = [...booking_store.roomTypes];
        this.roomTypes = this.roomTypes.map(rt => {
            return Object.assign(Object.assign({}, rt), { rateplans: rt.rateplans.map(rp => (Object.assign(Object.assign({}, rp), { variations: [] }))) });
        });
    }
    async processPayloads(payloads) {
        try {
            if (!booking_store.enableBooking) {
                booking_store.enableBooking = true;
            }
            payloads.forEach(payload => {
                var _a, _b, _c, _d, _e, _f, _g;
                const selectedRoomTypeIndex = this.roomTypes.findIndex(rt => rt.id === payload.ROOM_CATEGORY_ID);
                if (selectedRoomTypeIndex === -1) {
                    console.error('Invalid room type');
                    return;
                }
                let roomType = this.roomTypes[selectedRoomTypeIndex];
                const selectedRatePlanIndex = roomType.rateplans.findIndex(rp => rp.id === payload.ROOM_TYPE_ID);
                if (selectedRatePlanIndex === -1) {
                    console.error('Invalid rate plan');
                    return;
                }
                let rateplan = roomType.rateplans[selectedRatePlanIndex];
                const oldVariation = rateplan.variations || [];
                const variation = {
                    adult_child_offering: payload.ADULT_CHILD_OFFERING,
                    adult_nbr: (_a = payload.ADULTS_NBR) === null || _a === void 0 ? void 0 : _a.toString().replace(',', ''),
                    amount: (_b = payload.ALLOT_RATE_V) === null || _b === void 0 ? void 0 : _b.toString().replace(',', ''),
                    child_nbr: (_c = payload.CHILD_NBR) === null || _c === void 0 ? void 0 : _c.toString().replace(',', ''),
                    amount_per_night: (_d = payload.AMOUNT_PER_NIGHT_VAL) === null || _d === void 0 ? void 0 : _d.toString().replace(',', ''),
                    discount_pct: (_e = payload.DISCOUNT) === null || _e === void 0 ? void 0 : _e.toString().replace(',', ''),
                    is_lmd: payload.IS_LMD,
                    nights_nbr: (_f = payload.NIGHTS_NBR) === null || _f === void 0 ? void 0 : _f.toString().replace(',', ''),
                    total_before_discount: (_g = payload.TOTAL_BEFORE_DISCOUNT) === null || _g === void 0 ? void 0 : _g.toString().replace(',', ''),
                };
                const variationIndex = oldVariation.findIndex(v => v.adult_child_offering === payload.ADULT_CHILD_OFFERING);
                if (variationIndex === -1) {
                    oldVariation.push(variation);
                }
                else {
                    oldVariation[variationIndex] = variation;
                }
                rateplan = Object.assign(Object.assign({}, rateplan), { variations: oldVariation });
                roomType.rateplans[selectedRatePlanIndex] = rateplan;
                this.roomTypes[selectedRoomTypeIndex] = Object.assign(Object.assign({}, roomType), { inventory: 1 });
            });
            booking_store.resetBooking = true;
            booking_store.roomTypes = [...this.roomTypes];
        }
        catch (error) {
            console.error('Error processing payloads:', error);
        }
    }
}
//# sourceMappingURL=availability.service.js.map
