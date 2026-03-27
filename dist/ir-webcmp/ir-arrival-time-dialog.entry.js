import { r as registerInstance, a as createEvent, h } from './index-7b3961ed.js';
import { B as BookingService } from './booking.service-cc6e87c3.js';
import { l as locales } from './locales.store-daef23cc.js';
import './index-40c31d5b.js';
import './index-5ba472df.js';
import './IBooking-9fbd40d1.js';
import './utils-7eaed9ad.js';
import './moment-ab846cee.js';
import './calendar-data-cdc01d0d.js';
import './index-17663a35.js';
import './booking-2b94eb2b.js';

const irArrivalTimeDialogCss = ".sc-ir-arrival-time-dialog-h{display:block}";

const IrArrivalTimeDialog = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.resetBookingEvt = createEvent(this, "resetBookingEvt", 7);
    }
    booking;
    arrivalTime = [];
    isLoading = false;
    open = false;
    selectedArrivalTime = '';
    resetBookingEvt;
    bookingService = new BookingService();
    async openDialog() {
        this.selectedArrivalTime = this.booking?.arrival?.code || '';
        this.open = true;
    }
    async closeDialog() {
        this.open = false;
    }
    updateArrivalTime(value) {
        this.selectedArrivalTime = value;
    }
    getArrivalDescription(code) {
        const entry = this.arrivalTime.find(time => time.CODE_NAME === code);
        return entry?.CODE_VALUE_EN || this.booking?.arrival?.description || '';
    }
    async saveArrivalTime() {
        if (!this.selectedArrivalTime || this.selectedArrivalTime === this.booking?.arrival?.code) {
            this.closeDialog();
            return;
        }
        try {
            this.isLoading = true;
            const booking = {
                assign_units: true,
                is_pms: true,
                is_direct: this.booking.is_direct,
                is_backend: true,
                is_in_loyalty_mode: this.booking.is_in_loyalty_mode,
                promo_key: this.booking.promo_key,
                extras: this.booking.extras,
                agent: this.booking.agent,
                booking: {
                    ...this.booking,
                    arrival: {
                        code: this.selectedArrivalTime,
                        description: this.getArrivalDescription(this.selectedArrivalTime),
                    },
                    from_date: this.booking.from_date,
                    to_date: this.booking.to_date,
                    remark: this.booking.remark,
                    booking_nbr: this.booking.booking_nbr,
                    property: this.booking.property,
                    booked_on: this.booking.booked_on,
                    source: this.booking.source,
                    rooms: this.booking.rooms,
                    currency: this.booking.currency,
                    guest: this.booking.guest,
                },
                pickup_info: this.booking.pickup_info,
            };
            const res = await this.bookingService.doReservation(booking);
            this.resetBookingEvt.emit(res);
            this.closeDialog();
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        return (h("ir-dialog", { key: '3cf5f2f33420fae95b106059c72e0e6d53227820', label: "Edit arrival time", open: this.open, onIrDialogHide: () => {
                this.open = false;
            } }, h("wa-select", { key: 'f9fc63e5084bc909434bba96a7ab2d28184bb942', size: "small", value: this.selectedArrivalTime, defaultValue: this.selectedArrivalTime, onchange: e => this.updateArrivalTime(e.target.value) }, this.arrivalTime.map(time => (h("wa-option", { value: time.CODE_NAME, selected: time.CODE_NAME === this.selectedArrivalTime }, time.CODE_VALUE_EN)))), h("div", { key: 'fad302509085b47872d115177e420a2d3bf5f8a4', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: '3236db6fb3ff6f83266d7d7bfb76ad2bee2ba4a0', size: "medium", appearance: "filled", variant: "neutral", onClickHandler: () => this.closeDialog() }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: 'e4beebc2b0ccaf765bdec11b503beaee9a069b1c', size: "medium", variant: "brand", onClickHandler: () => this.saveArrivalTime(), loading: this.isLoading }, locales.entries.Lcz_Save))));
    }
};
IrArrivalTimeDialog.style = irArrivalTimeDialogCss;

export { IrArrivalTimeDialog as ir_arrival_time_dialog };

//# sourceMappingURL=ir-arrival-time-dialog.entry.js.map