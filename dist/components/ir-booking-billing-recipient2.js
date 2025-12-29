import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$5 } from './ir-booking-company-dialog2.js';
import { d as defineCustomElement$4 } from './ir-booking-company-form2.js';
import { d as defineCustomElement$3 } from './ir-custom-button2.js';
import { d as defineCustomElement$2 } from './ir-dialog2.js';
import { d as defineCustomElement$1 } from './ir-input2.js';

const irBookingBillingRecipientCss = ".sc-ir-booking-billing-recipient-h{display:block;padding:0 !important;box-sizing:border-box}.billing-recipient__room.sc-ir-booking-billing-recipient::part(label){display:flex;align-items:center;gap:var(--wa-space-xl);width:100%}.billing-recipient__guest-name.sc-ir-booking-billing-recipient{font-weight:500}.billing-recipient__room-details.sc-ir-booking-billing-recipient{display:flex;gap:6px;align-items:center;font-size:0.875rem;color:var(--wa-color-neutral-600)}.billing-recipient__roomtype.sc-ir-booking-billing-recipient{font-weight:600}";
const IrBookingBillingRecipientStyle0 = irBookingBillingRecipientCss;

const IrBookingBillingRecipient = /*@__PURE__*/ proxyCustomElement(class IrBookingBillingRecipient extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.recipientChange = createEvent(this, "recipientChange", 7);
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
        this.initialValue = 'guest';
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
        const joinKey = '|';
        const normalize = (value) => value?.split(' ')?.join(joinKey)?.toLocaleLowerCase().trim() || '';
        const rooms = [];
        const seenNames = new Set();
        const mainGuest = this.booking?.guest;
        if (mainGuest) {
            const mainKey = `${normalize(mainGuest.first_name)}${mainGuest.last_name ? joinKey : ''}${normalize(mainGuest.last_name)}`;
            seenNames.add(mainKey);
        }
        for (const room of this.booking.rooms || []) {
            const guest = room?.guest;
            if (!guest)
                continue;
            const key = `${normalize(guest.first_name)}${guest.last_name ? joinKey : ''}${normalize(guest.last_name)}`;
            // Skip exact duplicate first + last names
            if (seenNames.has(key))
                continue;
            seenNames.add(key);
            rooms.push(room);
        }
        this.rooms = rooms;
    }
    render() {
        return (h(Host, { key: '4af2f0faa99afc24b57e8b643ba2cb19769286dc' }, h("wa-radio-group", { key: '8183216c29fc32eb0e3919b89df3063f73ce2336', defaultValue: this.initialValue, onchange: e => this.handleRecipientChange(e.target.value), label: "Bill to", orientation: "vertical", name: `${this.booking?.booking_nbr}-bill-to`, value: this.selectedRecipient, size: "small" }, h("wa-radio", { key: 'ac26479c63908bcf1866c9cca7486c3c93a5afc4', appearance: "button", value: 'guest' }, this.booking?.guest.first_name, " ", this.booking.guest.last_name), this.rooms.map((r, idx) => (h("wa-radio", { appearance: "button", class: "billing-recipient__room", value: `room__${r.guest.first_name} ${r.guest.last_name}`, key: r.guest?.id ?? `guest_${idx}` }, h("span", { class: "billing-recipient__guest-name" }, r.guest.first_name, " ", r.guest.last_name)))), h("wa-radio", { key: '2a4e2523db90b22da0b8701758bedcf739fe8301', appearance: "button", value: "company" }, this.booking.company_name ? this.booking.company_name : 'Use company name')), h("ir-booking-company-dialog", { key: '7f567952064add4ba85f243a807a184441144684', onCompanyFormClosed: () => {
                if (this.selectedRecipient === 'company' && !this.booking.company_name) {
                    this.handleRecipientChange(this.initialValue);
                }
                else {
                    this.handleRecipientChange('company');
                }
            }, onResetBookingEvt: e => {
                this.booking = { ...e.detail };
                if (!this.booking.company_name) {
                    this.handleRecipientChange(this.initialValue);
                }
                else {
                    this.handleRecipientChange('company');
                }
            }, booking: this.booking, ref: el => (this.bookingCompanyFormRef = el) })));
    }
    static get watchers() { return {
        "booking": ["handleBookingChange"]
    }; }
    static get style() { return IrBookingBillingRecipientStyle0; }
}, [2, "ir-booking-billing-recipient", {
        "booking": [1040],
        "selectedRecipient": [32],
        "rooms": [32]
    }, undefined, {
        "booking": ["handleBookingChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-booking-billing-recipient", "ir-booking-company-dialog", "ir-booking-company-form", "ir-custom-button", "ir-dialog", "ir-input"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booking-billing-recipient":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookingBillingRecipient);
            }
            break;
        case "ir-booking-company-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-booking-company-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrBookingBillingRecipient as I, defineCustomElement as d };

//# sourceMappingURL=ir-booking-billing-recipient2.js.map