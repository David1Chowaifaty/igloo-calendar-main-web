'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3978a3f8.js');

const irBookingBillingRecipientCss = ".sc-ir-booking-billing-recipient-h{display:block;padding:0 !important;box-sizing:border-box}.billing-recipient__room.sc-ir-booking-billing-recipient::part(label){display:flex;align-items:center;gap:var(--wa-space-xl);width:100%}.billing-recipient__guest-name.sc-ir-booking-billing-recipient{font-weight:500}.billing-recipient__room-details.sc-ir-booking-billing-recipient{display:flex;gap:6px;align-items:center;font-size:0.875rem;color:var(--wa-color-neutral-600)}.billing-recipient__roomtype.sc-ir-booking-billing-recipient{font-weight:600}";
const IrBookingBillingRecipientStyle0 = irBookingBillingRecipientCss;

const IrBookingBillingRecipient = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.recipientChange = index.createEvent(this, "recipientChange", 7);
    }
    booking;
    selectedRecipient;
    rooms = [];
    recipientChange;
    initialValue;
    bookingCompanyFormRef;
    componentWillLoad() {
        this.initializeDefaultValue();
    }
    handleBookingChange() {
        this.initializeDefaultValue();
    }
    initializeDefaultValue() {
        this.initialValue = this.booking?.guest?.id?.toString();
        this.selectedRecipient = this.initialValue;
        this.filterRoomGuests();
    }
    handleRecipientChange(value) {
        this.selectedRecipient = value;
        switch (value) {
            case 'company':
                if (!this.booking.company_name) {
                    this.bookingCompanyFormRef.openCompanyForm();
                    return;
                }
                break;
        }
        this.recipientChange.emit(this.selectedRecipient);
    }
    filterRoomGuests() {
        const normalize = (str) => {
            return str?.toLocaleLowerCase()?.trim();
        };
        const { guest: mainGuest } = this.booking;
        let _rooms = [];
        const guests = new Set();
        const main_guest = `${normalize(mainGuest.first_name)}_${normalize(mainGuest.last_name)}`;
        guests.add(main_guest);
        for (const room of this.booking.rooms) {
            const _g = `${normalize(room.guest.first_name)}_${normalize(room.guest.last_name)}`;
            if (guests.has(_g)) {
                continue;
            }
            guests.add(_g);
            _rooms.push(room);
        }
        this.rooms = [..._rooms];
    }
    render() {
        return (index.h(index.Host, { key: 'dfce56c7f5a2676aa1f97908810891ef054de423' }, index.h("wa-radio-group", { key: 'd678353b1c6f06673d525692133d825d3a3ff0f3', defaultValue: this.initialValue, onchange: e => this.handleRecipientChange(e.target.value), label: "Bill to", orientation: "vertical", name: `${this.booking?.booking_nbr}-bill-to`, value: this.selectedRecipient }, index.h("wa-radio", { key: '19ef45f05658ba546ad2b19d19c95fe96030b72a', appearance: "button", value: this.booking?.guest?.id?.toString() }, this.booking?.guest.first_name, " ", this.booking.guest.last_name), this.rooms.map((r, idx) => (index.h("wa-radio", { appearance: "button", class: "billing-recipient__room", value: r.guest.id?.toString() ?? `guest_${idx}`, key: r.guest?.id ?? `guest_${idx}` }, index.h("span", { class: "billing-recipient__guest-name" }, r.guest.first_name, " ", r.guest.last_name)))), index.h("wa-radio", { key: 'a2bf64ca71e7aa3f465dc28ce2001e02c0598418', appearance: "button", value: "company" }, this.booking.company_name ? this.booking.company_name : 'Company')), index.h("ir-booking-company-form", { key: '9afe76b3cc4b6f54b9f57962a65637b31a9256bb', onCompanyFormClosed: () => {
                if (this.selectedRecipient === 'company' && !this.booking.company_name) {
                    this.handleRecipientChange(this.initialValue);
                }
            }, onResetBookingEvt: e => {
                this.booking = { ...e.detail };
                if (!this.booking.company_name) {
                    this.handleRecipientChange(this.initialValue);
                }
            }, booking: this.booking, ref: el => (this.bookingCompanyFormRef = el) })));
    }
    static get watchers() { return {
        "booking": ["handleBookingChange"]
    }; }
};
IrBookingBillingRecipient.style = IrBookingBillingRecipientStyle0;

exports.ir_booking_billing_recipient = IrBookingBillingRecipient;

//# sourceMappingURL=ir-booking-billing-recipient.cjs.entry.js.map