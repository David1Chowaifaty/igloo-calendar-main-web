import { Queue } from "../../models/queue";
import booking_store from "../../stores/booking";
import { io } from "socket.io-client";
export class AvailabiltyService {
    constructor() {
        this.queue = new Queue();
        this.intervalId = null;
        this.PROCESSING_INTERVAL = 400;
        this.subscribers = [];
        this.socket = io('https://realtime.igloorooms.com/', {
            reconnectionAttempts: 5,
            reconnectionDelay: 2000,
        });
        this.socket.on('connect', () => {
            console.log('Connected to the socket server');
        });
        this.socket.on('connect_error', error => {
            console.error('Connection error:', error);
        });
    }
    subscribe(callback) {
        this.subscribers.push(callback);
    }
    unsubscribe(callback) {
        this.subscribers = this.subscribers.filter(sub => sub !== callback);
    }
    disconnectSocket() {
        this.socket.on('disconnect', reason => {
            console.log('Disconnected:', reason);
            if (this.intervalId) {
                clearInterval(this.intervalId);
            }
        });
        this.socket.close();
    }
    initSocket(id) {
        this.socket.on('MSG', (msg) => {
            try {
                const message_obj = JSON.parse(msg);
                if (message_obj && message_obj.KEY && message_obj.KEY.toString() === id) {
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
    async processPayloads(payloads) {
        try {
            if (!booking_store.enableBooking) {
                booking_store.enableBooking = true;
            }
            const roomtypes = [...booking_store.roomTypes];
            payloads.forEach(payload => {
                const selectedRoomTypeIndex = roomtypes.findIndex(rt => rt.id === payload.ROOM_CATEGORY_ID);
                if (selectedRoomTypeIndex === -1) {
                    console.error('Invalid room type');
                    return;
                }
                let roomType = roomtypes[selectedRoomTypeIndex];
                const selectedRatePlanIndex = roomType.rateplans.findIndex(rp => rp.id === payload.ROOM_TYPE_ID);
                if (selectedRatePlanIndex === -1) {
                    console.error('Invalid rate plan');
                    return;
                }
                let rateplan = roomType.rateplans[selectedRatePlanIndex];
                const oldVariation = rateplan.variations || [];
                oldVariation.push({
                    adult_child_offering: payload.ADULT_CHILD_OFFERING,
                    adult_nbr: payload.ADULTS_NBR,
                    amount: payload.ALLOT_RATE_V,
                    child_nbr: payload.CHILD_NBR,
                    amount_per_night: payload.AMOUNT_PER_NIGHT_VAL,
                    discount_pct: payload.DISCOUNT,
                    is_lmd: payload.IS_LMD,
                    nights_nbr: payload.NIGHTS_NBR,
                    total_before_discount: payload.TOTAL_BEFORE_DISCOUNT,
                });
                rateplan = Object.assign(Object.assign({}, rateplan), { variations: oldVariation });
                roomType.rateplans[selectedRatePlanIndex] = rateplan;
                roomtypes[selectedRoomTypeIndex] = Object.assign(Object.assign({}, roomType), { inventory: 1 });
            });
            booking_store.roomTypes = [...roomtypes];
        }
        catch (error) {
            console.error('Error processing payloads:', error);
        }
    }
}
//# sourceMappingURL=availability.service.js.map
