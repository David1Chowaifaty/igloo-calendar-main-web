import { Queue } from "../../models/queue";
import booking_store from "../../stores/booking";
import { z } from "zod";
import SocketManager from "./SocketManager";
export class AvailabiltyService {
    // private variationSorter = new VariationSorter();
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
    initSocket(id, view = false) {
        if (!this.socketManager.isConnected) {
            this.socketManager.reconnect();
        }
        if (!view) {
            this.resetVariations();
        }
        this.socketManager.socket.on('MSG', (msg) => {
            try {
                const message_obj = JSON.parse(msg);
                if (message_obj && message_obj.KEY && message_obj.KEY.toString() === id) {
                    if (view) {
                        return console.log(JSON.parse(message_obj.PAYLOAD));
                    }
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
        console.log('reseting the variations');
        booking_store.resetBooking = true;
        this.roomTypes = [...booking_store.roomTypes];
        this.roomTypes = this.roomTypes.map(rt => {
            return Object.assign(Object.assign({}, rt), { rateplans: rt.rateplans.map(rp => (Object.assign(Object.assign({}, rp), { variations: [] }))) });
        });
    }
    validateNumberString(input) {
        const schema = z.string().refine(val => {
            const numberString = val.replace(/,/g, '');
            return !isNaN(Number(numberString));
        }, {
            message: 'Invalid number format',
        });
        const result = schema.safeParse(input);
        if (!result.success) {
            throw new Error(`${input} is an invalid number format`);
        }
        return Number(result.data.replace(/,/g, ''));
    }
    async processPayloads(payloads) {
        try {
            console.log('payload', payloads);
            if (!booking_store.enableBooking) {
                booking_store.enableBooking = true;
            }
            payloads.forEach(payload => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
                const selectedRoomTypeIndex = this.roomTypes.findIndex(rt => rt.id === payload.ROOM_CATEGORY_ID);
                if (selectedRoomTypeIndex === -1) {
                    console.error('Invalid room type');
                    return;
                }
                let roomType = this.roomTypes[selectedRoomTypeIndex];
                const selectedRatePlanIndex = roomType.rateplans.findIndex(rp => rp.id === payload.ROOM_TYPE_ID);
                if (selectedRatePlanIndex === -1) {
                    // console.error('Invalid rate plan');
                    return;
                }
                let rateplan = roomType.rateplans[selectedRatePlanIndex];
                let oldVariation = rateplan.variations || [];
                const variation = {
                    adult_child_offering: payload.ADULT_CHILD_OFFERING,
                    adult_nbr: Number((_a = payload.ADULTS_NBR) !== null && _a !== void 0 ? _a : 0),
                    amount: (() => {
                        var _a, _b, _c;
                        const amount = (_c = this.validateNumberString((_b = ((_a = payload.ALLOT_RATE_V) !== null && _a !== void 0 ? _a : 0)) === null || _b === void 0 ? void 0 : _b.toString())) !== null && _c !== void 0 ? _c : 0;
                        return amount === 0 ? null : amount;
                    })(),
                    amount_gross: (() => {
                        var _a, _b, _c;
                        const amount = (_c = this.validateNumberString((_b = ((_a = payload.ALLOT_RATE_V_GROSS) !== null && _a !== void 0 ? _a : 0)) === null || _b === void 0 ? void 0 : _b.toString())) !== null && _c !== void 0 ? _c : 0;
                        return amount === 0 ? null : amount;
                    })(),
                    child_nbr: Number((_b = payload.CHILD_NBR) !== null && _b !== void 0 ? _b : 0),
                    amount_per_night: (_f = this.validateNumberString((_e = (_d = ((_c = payload.AMOUNT_PER_NIGHT_VAL) !== null && _c !== void 0 ? _c : 0)) === null || _d === void 0 ? void 0 : _d.toString()) !== null && _e !== void 0 ? _e : '').toString()) !== null && _f !== void 0 ? _f : '',
                    discount_pct: (_j = this.validateNumberString((_h = ((_g = payload.DISCOUNT) !== null && _g !== void 0 ? _g : 0)) === null || _h === void 0 ? void 0 : _h.toString())) !== null && _j !== void 0 ? _j : 0,
                    is_lmd: payload.IS_LMD,
                    nights_nbr: (_m = this.validateNumberString((_l = ((_k = payload.NIGHTS_NBR) !== null && _k !== void 0 ? _k : 0)) === null || _l === void 0 ? void 0 : _l.toString())) !== null && _m !== void 0 ? _m : 0,
                    total_before_discount: (_q = this.validateNumberString((_p = ((_o = payload.TOTAL_BEFORE_DISCOUNT) !== null && _o !== void 0 ? _o : 0)) === null || _p === void 0 ? void 0 : _p.toString())) !== null && _q !== void 0 ? _q : 0,
                    is_calculated: payload.IS_CALCULATED,
                    MLS_ALERT: payload.MLS_ALERT,
                    IS_MLS_VIOLATED: payload.IS_MLS_VIOLATED,
                    MLS_ALERT_VALUE: payload.MLS_ALERT_VALUE,
                };
                const variationIndex = oldVariation.findIndex(v => v.adult_child_offering === payload.ADULT_CHILD_OFFERING);
                if (variationIndex === -1) {
                    oldVariation.push(variation);
                }
                else {
                    oldVariation[variationIndex] = variation;
                }
                oldVariation = oldVariation.filter(v => Number(v.adult_nbr) <= Number(booking_store.bookingAvailabilityParams.adult_nbr) && Number(v.child_nbr) <= Number(booking_store.bookingAvailabilityParams.child_nbr));
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
