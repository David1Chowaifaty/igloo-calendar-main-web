import { h } from "@stencil/core";
import locales from "../../../stores/locales.store";
export class IrRoomGuests {
    open;
    /**
     * The name of the unit (physical room) currently assigned.
     * Used to label the room in the user interface for clarity. When empty, the room has no
     * assigned unit and {@link roomType} is displayed instead.
     */
    roomName;
    /**
     * The room type name.
     * Displayed as a fallback label when the room has no assigned unit ({@link roomName} is empty).
     */
    roomType;
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
        return (h("ir-drawer", { key: '6f042664ffa34e7a8545ad54c1860b361925bfa0', style: {
                '--ir-drawer-width': '60rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            }, label: this.roomName ? `Room ${this.roomName}` : this.roomType || 'Guest Details', open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeModal.emit();
            } }, this.open && (h("ir-room-guests-form", { key: 'ceba9a4ed8bd89f15134dd2c812fe5498216a645', sharedPersons: this.sharedPersons, roomName: this.roomName, countries: this.countries, totalGuests: this.totalGuests, identifier: this.identifier, bookingNumber: this.bookingNumber, checkIn: this.checkIn, language: this.language, onLoadingChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isLoading = e.detail;
            } })), h("div", { key: '45f2444e342178a233d0cfcac5a873ac1a77c8b2', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: 'e3a42fd3d3c43397275e2846e17836665239a49b', size: "m", "data-drawer": "close", appearance: "filled", variant: "neutral" }, locales?.entries?.Lcz_Cancel ?? 'Save'), h("ir-custom-button", { key: 'da3b2d8f453d4464788282dcfc8b1bee7ead78f9', value: "save", loading: this.isLoading === 'save', size: "m", form: `room-guests__${this.identifier}`, type: "submit", variant: "brand" }, locales?.entries?.Lcz_Save ?? 'Save'), this.checkIn && this.roomName && (h("ir-custom-button", { key: '743f47ecde60bc0d00597d598e416729737e2157', value: "save_checkin", loading: this.isLoading === 'save_checkin', size: "m", form: `room-guests__${this.identifier}`, type: "submit", variant: "brand" }, locales.entries?.Lcz_CheckIn ?? 'Check in')))));
    }
    static get is() { return "ir-room-guests"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-room-guests.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-room-guests.css"]
        };
    }
    static get properties() {
        return {
            "open": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "reflect": false,
                "attribute": "open"
            },
            "roomName": {
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
                    "text": "The name of the unit (physical room) currently assigned.\nUsed to label the room in the user interface for clarity. When empty, the room has no\nassigned unit and {@link roomType} is displayed instead."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "room-name"
            },
            "roomType": {
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
                    "text": "The room type name.\nDisplayed as a fallback label when the room has no assigned unit ({@link roomName} is empty)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "room-type"
            },
            "identifier": {
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
                    "text": "A unique identifier for the room.\nThis is used to distinguish between rooms, especially when performing operations like saving or checking in guests."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "identifier"
            },
            "sharedPersons": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "SharedPerson[]",
                    "resolved": "SharedPerson[]",
                    "references": {
                        "SharedPerson": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::SharedPerson",
                            "referenceLocation": "SharedPerson"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "An array of people sharing the room.\nContains information about the {locales.entries.Lcz_MainGuest} and additional guests, such as their name, date of birth, {locales.entries.Lcz_Nationality}, and ID details."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "totalGuests": {
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
                    "text": "The total number of guests for the room.\nDetermines how many guest input forms to display in the UI."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "total-guests",
                "defaultValue": "0"
            },
            "countries": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ICountry[]",
                    "resolved": "ICountry[]",
                    "references": {
                        "ICountry": {
                            "location": "import",
                            "path": "@/models/IBooking",
                            "id": "src/models/IBooking.ts::ICountry",
                            "referenceLocation": "ICountry"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "A list of available countries.\nUsed to populate dropdowns for selecting the {locales.entries.Lcz_Nationality} of guests."
                },
                "getter": false,
                "setter": false
            },
            "checkIn": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "A boolean indicating whether the room is in the process of being checked in.\nIf true, additional actions like saving the room state as \"checked in\" are performed."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "check-in"
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
                    "text": "The language used for displaying text content in the component.\nDefaults to English ('en'), but can be set to other supported languages."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "language",
                "defaultValue": "'en'"
            },
            "bookingNumber": {
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
                    "text": "A unique booking number associated with the room.\nThis is used for backend operations like saving guest information or checking in the room."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "booking-number"
            }
        };
    }
    static get states() {
        return {
            "isLoading": {}
        };
    }
    static get events() {
        return [{
                "method": "closeModal",
                "name": "closeModal",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }];
    }
}
