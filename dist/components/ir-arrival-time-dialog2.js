import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { B as BookingService } from './booking.store.js';
import { l as locales } from './locales.store.js';
import { d as defineCustomElement$2 } from './ir-custom-button2.js';
import { d as defineCustomElement$1 } from './ir-dialog2.js';

const irArrivalTimeDialogCss = ".sc-ir-arrival-time-dialog-h{display:block}";
const IrArrivalTimeDialogStyle0 = irArrivalTimeDialogCss;

const IrArrivalTimeDialog = /*@__PURE__*/ proxyCustomElement(class IrArrivalTimeDialog extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
        return (h("ir-dialog", { key: '99bb70195250200deec036d861115b02444f459b', label: "Edit Arrival Time", open: this.open, onIrDialogHide: () => {
                this.open = false;
            } }, h("wa-select", { key: '6eb3875b14ca17fbcee68c69b98f3e5c96b0a52d', size: "small", value: this.selectedArrivalTime, defaultValue: this.selectedArrivalTime, onchange: e => this.updateArrivalTime(e.target.value) }, this.arrivalTime.map(time => (h("wa-option", { value: time.CODE_NAME, selected: time.CODE_NAME === this.selectedArrivalTime }, time.CODE_VALUE_EN)))), h("div", { key: 'e5912013d65ee638fa9be5c429cce0de711837eb', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'f72159016d0cdbf6a9ad9ba1d1144e68a6213177', size: "medium", appearance: "filled", variant: "neutral", onClickHandler: () => this.closeDialog() }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: 'dca00c6cfca5ad9c4eb721e7612fa97b6acdd565', size: "medium", variant: "brand", onClickHandler: () => this.saveArrivalTime(), loading: this.isLoading }, locales.entries.Lcz_Save))));
    }
    static get style() { return IrArrivalTimeDialogStyle0; }
}, [2, "ir-arrival-time-dialog", {
        "booking": [16],
        "arrivalTime": [16],
        "isLoading": [32],
        "open": [32],
        "selectedArrivalTime": [32],
        "openDialog": [64],
        "closeDialog": [64]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-arrival-time-dialog", "ir-custom-button", "ir-dialog"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-arrival-time-dialog":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrArrivalTimeDialog);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrArrivalTimeDialog as I, defineCustomElement as d };

//# sourceMappingURL=ir-arrival-time-dialog2.js.map