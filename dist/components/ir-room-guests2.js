import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { l as locales } from './locales.store.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { d as defineCustomElement$a } from './ir-country-picker2.js';
import { d as defineCustomElement$9 } from './ir-custom-button2.js';
import { d as defineCustomElement$8 } from './ir-drawer2.js';
import { d as defineCustomElement$7 } from './ir-input2.js';
import { d as defineCustomElement$6 } from './ir-input-text2.js';
import { d as defineCustomElement$5 } from './ir-picker2.js';
import { d as defineCustomElement$4 } from './ir-picker-item2.js';
import { d as defineCustomElement$3 } from './ir-room-guests-form2.js';
import { d as defineCustomElement$2 } from './ir-spinner2.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';

const irRoomGuestsCss = "";
const IrRoomGuestsStyle0 = irRoomGuestsCss;

const IrRoomGuests = /*@__PURE__*/ proxyCustomElement(class IrRoomGuests extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.closeModal = createEvent(this, "closeModal", 7);
    }
    open;
    /**
     * The name of the room currently being displayed.
     * Used to label the room in the user interface for clarity.
     */
    roomName;
    /**
     * A unique identifier for the room.
     * This is used to distinguish between rooms, especially when performing operations like saving or checking in guests.
     */
    identifier;
    /**
     * An array of people sharing the room.
     * Contains information about the {locales.entries.Lcz_MainGuest} and additional guests, such as their name, date of birth, {locales.entries.Lcz_Nationality}, and ID details.
     */
    sharedPersons = [];
    /**
     * The total number of guests for the room.
     * Determines how many guest input forms to display in the UI.
     */
    totalGuests = 0;
    /**
     * A list of available countries.
     * Used to populate dropdowns for selecting the {locales.entries.Lcz_Nationality} of guests.
     */
    countries;
    /**
     * A boolean indicating whether the room is in the process of being checked in.
     * If true, additional actions like saving the room state as "checked in" are performed.
     */
    checkIn;
    /**
     * The language used for displaying text content in the component.
     * Defaults to English ('en'), but can be set to other supported languages.
     */
    language = 'en';
    /**
     * A unique booking number associated with the room.
     * This is used for backend operations like saving guest information or checking in the room.
     */
    bookingNumber;
    closeModal;
    render() {
        return (h("ir-drawer", { key: '0b126d99cde9858f0c846c7d1d80586c541ab83c', style: {
                '--ir-drawer-width': '60rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            }, label: `Room ${this.roomName}`, open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeModal.emit();
            } }, this.open && (h("ir-room-guests-form", { key: 'd78956003b5745d5da30c39c7e04f63b39063d5e', sharedPersons: this.sharedPersons, roomName: this.roomName, countries: this.countries, totalGuests: this.totalGuests, identifier: this.identifier, bookingNumber: this.bookingNumber, checkIn: this.checkIn, language: this.language })), h("div", { key: '2a691c4cdad2772e8eb84499e6eb901294173b2f', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: '794d6f830a4bab345ebcae5c86103275c2adb125', size: "medium", "data-drawer": "close", appearance: "filled", variant: "neutral" }, locales?.entries?.Lcz_Cancel ?? 'Save'), h("ir-custom-button", { key: '06bedac4b70dc34da017070fb604f22ba31010d5', loading: isRequestPending('/Handle_Exposed_Room_Guests'), size: "medium", form: `room-guests__${this.identifier}`, type: "submit", variant: "brand" }, this.checkIn ? locales.entries?.Lcz_CheckIn ?? 'Check in' : locales?.entries?.Lcz_Save ?? 'Save'))));
    }
    static get style() { return IrRoomGuestsStyle0; }
}, [2, "ir-room-guests", {
        "open": [4],
        "roomName": [1, "room-name"],
        "identifier": [1],
        "sharedPersons": [16],
        "totalGuests": [2, "total-guests"],
        "countries": [16],
        "checkIn": [4, "check-in"],
        "language": [1],
        "bookingNumber": [1, "booking-number"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-room-guests", "ir-country-picker", "ir-custom-button", "ir-drawer", "ir-input", "ir-input-text", "ir-picker", "ir-picker-item", "ir-room-guests-form", "ir-spinner", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-room-guests":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrRoomGuests);
            }
            break;
        case "ir-country-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-picker-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-room-guests-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrRoomGuests as I, defineCustomElement as d };

//# sourceMappingURL=ir-room-guests2.js.map