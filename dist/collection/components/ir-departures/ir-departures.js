import Token from "../../models/Token";
import { departuresStore } from "../../stores/departures.store";
import { Host, h } from "@stencil/core";
import { RoomService } from "../../services/room.service";
import { BookingService } from "../../services/booking.service";
export class IrDepartures {
    ticket;
    propertyid;
    language = 'en';
    p;
    bookingNumber;
    booking;
    paymentEntries;
    isPageLoading;
    payment;
    tokenService = new Token();
    roomService = new RoomService();
    bookingService = new BookingService();
    paymentFolioRef;
    componentWillLoad() {
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue && newValue) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
    }
    handleOpen(e) {
        this.bookingNumber = e.detail;
    }
    handleBookingPayment(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { booking_nbr, payment } = e.detail;
        this.booking = departuresStore.bookings.find(b => b.booking_nbr === booking_nbr);
        const paymentType = this.paymentEntries.types.find(p => p.CODE_NAME === payment.payment_type.code);
        this.payment = {
            ...payment,
            payment_type: {
                code: paymentType.CODE_NAME,
                description: paymentType.CODE_VALUE_EN,
                operation: paymentType.NOTES,
            },
        };
        this.paymentFolioRef.openFolio();
    }
    async init() {
        try {
            this.isPageLoading = true;
            const [_, __, setupEntries] = await Promise.all([
                this.roomService.getExposedProperty({ id: this.propertyid || 0, language: this.language, aname: this.p }),
                this.roomService.fetchLanguage(this.language),
                this.bookingService.getSetupEntriesByTableNameMulti(['_BED_PREFERENCE_TYPE', '_DEPARTURE_TIME', '_PAY_TYPE', '_PAY_TYPE_GROUP', '_PAY_METHOD']),
            ]);
            const { pay_type, pay_type_group, pay_method } = this.bookingService.groupEntryTablesResult(setupEntries);
            this.paymentEntries = { types: pay_type, groups: pay_type_group, methods: pay_method };
        }
        catch (error) {
        }
        finally {
            this.isPageLoading = false;
        }
    }
    render() {
        if (this.isPageLoading) {
            return h("ir-loading-screen", null);
        }
        return (h(Host, null, h("ir-toast", { style: { display: 'none' } }), h("ir-interceptor", { style: { display: 'none' } }), h("h3", { class: "page-title" }, "Departures"), h("ir-departures-filter", null), h("ir-departures-table", null), h("ir-drawer", { onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingNumber = null;
            }, withoutHeader: true, open: !!this.bookingNumber, style: {
                '--ir-drawer-width': '80rem',
                '--ir-drawer-background-color': '#F2F3F8',
                '--ir-drawer-padding-left': '0',
                '--ir-drawer-padding-right': '0',
                '--ir-drawer-padding-top': '0',
                '--ir-drawer-padding-bottom': '0',
            } }, this.bookingNumber && (h("ir-booking-details", { hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: () => (this.bookingNumber = null), is_from_front_desk: true, propertyid: this.propertyid, hasRoomEdit: true, hasRoomDelete: true, bookingNumber: this.bookingNumber.toString(), ticket: this.ticket, language: this.language, hasRoomAdd: true }))), h("ir-payment-folio", { style: { height: 'auto' }, bookingNumber: this.booking?.booking_nbr, paymentEntries: this.paymentEntries, payment: this.payment, mode: 'payment-action', ref: el => (this.paymentFolioRef = el), onCloseModal: () => {
                this.booking = null;
                this.payment = null;
            } })));
    }
    static get is() { return "ir-departures"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["../../assets/webawesome/component/host.css", "ir-departures.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["../../assets/webawesome/component/host.css", "ir-departures.css"]
        };
    }
    static get properties() {
        return {
            "ticket": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "ticket",
                "reflect": false
            },
            "propertyid": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "propertyid",
                "reflect": false
            },
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "language",
                "reflect": false,
                "defaultValue": "'en'"
            },
            "p": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "p",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "bookingNumber": {},
            "booking": {},
            "paymentEntries": {},
            "isPageLoading": {},
            "payment": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "ticket",
                "methodName": "handleTicketChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "openBookingDetails",
                "method": "handleOpen",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "payBookingBalance",
                "method": "handleBookingPayment",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-departures.js.map
