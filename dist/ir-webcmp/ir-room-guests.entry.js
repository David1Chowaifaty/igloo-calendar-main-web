import { r as registerInstance, a as createEvent, h } from './index-7b3961ed.js';
import { l as locales } from './locales.store-daef23cc.js';
import './index-17663a35.js';

const irRoomGuestsCss = "";

const IrRoomGuests = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    isLoading;
    render() {
        return (h("ir-drawer", { key: '8af4f350c2317baac50fb797085e95194960329a', style: {
                '--ir-drawer-width': '60rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            }, label: this.roomName ? `Room ${this.roomName}` : 'Guest Details', open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeModal.emit();
            } }, this.open && (h("ir-room-guests-form", { key: '8b328a3ac3df80dc6e3b45efec2d13c20db370b6', sharedPersons: this.sharedPersons, roomName: this.roomName, countries: this.countries, totalGuests: this.totalGuests, identifier: this.identifier, bookingNumber: this.bookingNumber, checkIn: this.checkIn, language: this.language, onLoadingChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isLoading = e.detail;
            } })), h("div", { key: '5aa7609c9a645fb4c9f39a3d784aeb8c1206f16d', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: 'e5a46d3bccaed5444d95fffe18fbc4bc357745a3', size: "medium", "data-drawer": "close", appearance: "filled", variant: "neutral" }, locales?.entries?.Lcz_Cancel ?? 'Save'), h("ir-custom-button", { key: 'e830a2411b43742e9c32b398dcf55ca0499941e9', value: "save", loading: this.isLoading === 'save', size: "medium", form: `room-guests__${this.identifier}`, type: "submit", variant: "brand" }, locales?.entries?.Lcz_Save ?? 'Save'), this.checkIn && (h("ir-custom-button", { key: '1d7af915c420039f82aba79ebbe7122e98a5edd1', value: "save_checkin", loading: this.isLoading === 'save_checkin', size: "medium", form: `room-guests__${this.identifier}`, type: "submit", variant: "brand" }, locales.entries?.Lcz_CheckIn ?? 'Check in')))));
    }
};
IrRoomGuests.style = irRoomGuestsCss;

export { IrRoomGuests as ir_room_guests };

//# sourceMappingURL=ir-room-guests.entry.js.map