import { ZIdInfo, ZSharedPerson, ZSharedPersons } from "../../../models/booking.dto";
import { isRequestPending } from "../../../stores/ir-interceptor.store";
import locales from "../../../stores/locales.store";
import { Fragment, h } from "@stencil/core";
import moment from "moment";
import { dateMask, defaultGuest } from "./data";
import { BookingService } from "../../../services/booking.service";
export class IrRoomGuests {
    constructor() {
        this.bookingService = new BookingService();
        this.roomName = undefined;
        this.identifier = undefined;
        this.sharedPersons = [];
        this.totalGuests = 0;
        this.countries = undefined;
        this.checkIn = undefined;
        this.language = 'en';
        this.bookingNumber = undefined;
        this.guests = [];
        this.idTypes = [];
        this.error = false;
        this.isLoading = undefined;
        this.submitted = undefined;
        this.propertyCountry = undefined;
    }
    componentWillLoad() {
        this.init();
        this.initializeGuests();
    }
    async init() {
        try {
            this.isLoading = true;
            const [country, idTypes] = await Promise.all([this.bookingService.getUserDefaultCountry(), this.bookingService.getSetupEntriesByTableName('_ID_TYPE')]);
            this.idTypes = idTypes;
            if (country) {
                this.propertyCountry = this.countries.find(c => c.id === country.COUNTRY_ID);
            }
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    initializeGuests() {
        var _a, _b;
        let guests = [];
        if (this.totalGuests > this.sharedPersons.length) {
            const defaultGuestsCount = this.totalGuests - this.sharedPersons.length;
            guests = [
                ...this.sharedPersons,
                ...Array(defaultGuestsCount).fill(Object.assign(Object.assign({}, defaultGuest), { id_info: Object.assign(Object.assign({}, defaultGuest.id_info), { type: {
                            code: ((_a = this.idTypes[0]) === null || _a === void 0 ? void 0 : _a.CODE_NAME) || '001',
                            description: ((_b = this.idTypes[0]) === null || _b === void 0 ? void 0 : _b.CODE_VALUE_EN) || '',
                        }, number: '' }) })),
            ];
        }
        else {
            guests = [...this.sharedPersons];
        }
        guests = guests.map(g => (Object.assign(Object.assign({}, g), { dob: new Date(g.dob).getFullYear() === 1900 ? null : g.dob })));
        this.guests = guests.map(g => (Object.assign(Object.assign({}, g), { dob: g.dob ? moment(new Date(g.dob)).format('DD/MM/YYYY') : '' })));
    }
    updateGuestInfo(index, params) {
        const tempGuests = [...this.guests];
        let tempGuest = tempGuests[index];
        tempGuest = Object.assign(Object.assign({}, tempGuest), params);
        tempGuests[index] = tempGuest;
        this.guests = [...tempGuests];
    }
    async saveGuests() {
        try {
            this.submitted = true;
            this.error = false;
            ZSharedPersons.parse(this.guests);
            await this.bookingService.handleExposedRoomGuests({
                booking_nbr: this.bookingNumber,
                identifier: this.identifier,
                guests: this.guests,
            });
            if (this.checkIn) {
                await this.bookingService.handleExposedRoomInOut({
                    booking_nbr: this.bookingNumber,
                    room_identifier: this.identifier,
                    status: '001',
                });
            }
            this.closeModal.emit(null);
            this.resetbooking.emit(null);
        }
        catch (error) {
            console.log(error);
            this.error = true;
        }
    }
    render() {
        if (this.isLoading) {
            return (h("div", { class: 'loading-container' }, h("ir-spinner", null)));
        }
        return (h("div", { class: "h-100 d-flex flex-column", style: { minWidth: '300px' } }, h("ir-title", { class: "px-1", onCloseSideBar: () => this.closeModal.emit(null), label: `Room ${this.roomName}`, displayContext: "sidebar" }), h("section", { class: 'd-flex flex-column px-1 h-100 ' }, h("div", { class: "" }, h("div", { class: "guest-grid guests-labels" }, h("p", { class: "" }, locales.entries.Lcz_MainGuest), h("p", { class: " " }, locales.entries.Lcz_DOB), h("p", { class: "" }, locales.entries.Lcz_Nationality), h("p", { class: " " }, locales.entries.Lcz_Documents)), h("h5", { class: "main_guest_heading" }, locales.entries.Lcz_MainGuest), this.guests.map((guest, idx) => {
            var _a, _b;
            return (h(Fragment, null, idx === 1 && (h("div", { class: "d-flex mx-0 px-0" }, h("h5", { class: "mx-0 px-0 sharing_persons_heading" }, locales.entries.Lcz_PersonsSharingRoom), h("p", { class: "mx-0 px-0 sharing_persons_label" }, locales.entries.Lcz_PersonsSharingRoom))), h("div", { key: idx, class: "guest-grid" }, h("div", { class: 'm-0 p-0 d-flex align-items-center h-100' }, h("p", { class: "guest_label" }, "Full name"), h("ir-input-text", { class: "flex-grow-1 h-100", id: `full_name_${idx}`, zod: ZSharedPerson.pick({ full_name: true }), error: this.error, autoValidate: false, wrapKey: "full_name", LabelAvailable: false, submitted: this.submitted, placeholder: "", onTextChange: e => this.updateGuestInfo(idx, { full_name: e.detail }), value: guest.full_name })), h("div", { class: "flex-grow-0 m-0 p-0 h-100 d-flex align-items-center" }, h("p", { class: "guest_label" }, locales.entries.Lcz_DOB), h("ir-input-text", { class: "flex-grow-1 h-100", id: `dob_${idx}`, zod: ZSharedPerson.pick({ dob: true }), error: this.error, autoValidate: false, wrapKey: "dob", submitted: this.submitted, mask: dateMask, LabelAvailable: false, placeholder: "dd/mm/yyyy", onTextChange: e => {
                    this.updateGuestInfo(idx, { dob: e.detail });
                }, value: guest.dob })), h("div", { class: " m-0 p-0 d-flex align-items-center" }, h("p", { class: "guest_label" }, locales.entries.Lcz_Nationality), h("div", { class: "mx-0 flex-grow-1  h-100" }, h("ir-country-picker", { class: "h-100", propertyCountry: this.propertyCountry, id: `{locales.entries.Lcz_Nationality}_${idx}`, error: this.error && !guest.country_id, country: (_a = this.countries) === null || _a === void 0 ? void 0 : _a.find(c => { var _a, _b, _c; return ((_a = c.id) === null || _a === void 0 ? void 0 : _a.toString()) === ((_c = (_b = guest.country) === null || _b === void 0 ? void 0 : _b.id) === null || _c === void 0 ? void 0 : _c.toString()); }), onCountryChange: e => this.updateGuestInfo(idx, { country_id: e.detail.id.toString(), country: e.detail }), countries: this.countries }))), h("div", { class: "flex-grow-1 m-0 p-0 d-flex align-items-center" }, h("p", { class: "guest_label" }, locales.entries.Lcz_Documents), h("div", { class: ' d-flex m-0 flex-grow-1 h-100' }, h("ir-select", { selectStyles: 'id-select', onSelectChange: e => {
                    this.updateGuestInfo(idx, {
                        id_info: Object.assign(Object.assign({}, this.guests[idx].id_info), { type: {
                                code: e.detail,
                                description: '',
                            } }),
                    });
                }, selectedValue: guest.id_info.type.code, showFirstOption: false, LabelAvailable: false, data: (_b = this.idTypes) === null || _b === void 0 ? void 0 : _b.map(t => { var _a; return ({ text: (_a = t[`CODE_VALUE_${this.language.toUpperCase()}`]) !== null && _a !== void 0 ? _a : t[`CODE_VALUE_EN`], value: t.CODE_NAME }); }) }), h("ir-input-text", { class: "flex-grow-1 guest_document", type: "text", value: guest.id_info.number, zod: ZIdInfo.pick({ number: true }), error: this.error, autoValidate: false, wrapKey: "number", inputStyles: "form-control", submitted: this.submitted, LabelAvailable: false, onTextChange: e => this.updateGuestInfo(idx, {
                    id_info: Object.assign(Object.assign({}, this.guests[idx].id_info), { number: e.detail }),
                }) }))))));
        })), h("div", { class: 'd-flex flex-column flex-sm-row mt-3 action-buttons ' }, h("ir-button", { onClick: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `mb-1 mb-sm-0 flex-fill mr-sm-1`, icon: "", text: locales.entries.Lcz_Cancel, btn_color: "secondary" }), h("ir-button", { btn_styles: "justify-content-center align-items-center", class: 'm-0 flex-fill text-center', icon: "", isLoading: isRequestPending('/Handle_Exposed_Room_Guests'), text: this.checkIn ? locales.entries.Lcz_CheckIn : locales.entries.Lcz_Save, btn_color: "primary", onClickHandler: this.saveGuests.bind(this) })))));
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
                    "text": "The name of the room currently being displayed.\r\nUsed to label the room in the user interface for clarity."
                },
                "attribute": "room-name",
                "reflect": false
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
                    "text": "A unique identifier for the room.\r\nThis is used to distinguish between rooms, especially when performing operations like saving or checking in guests."
                },
                "attribute": "identifier",
                "reflect": false
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
                            "id": "src/models/booking.dto.ts::SharedPerson"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "An array of people sharing the room.\r\nContains information about the {locales.entries.Lcz_MainGuest} and additional guests, such as their name, date of birth, {locales.entries.Lcz_Nationality}, and ID details."
                },
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
                    "text": "The total number of guests for the room.\r\nDetermines how many guest input forms to display in the UI."
                },
                "attribute": "total-guests",
                "reflect": false,
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
                            "id": "src/models/IBooking.ts::ICountry"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "A list of available countries.\r\nUsed to populate dropdowns for selecting the {locales.entries.Lcz_Nationality} of guests."
                }
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
                    "text": "A boolean indicating whether the room is in the process of being checked in.\r\nIf true, additional actions like saving the room state as \"checked in\" are performed."
                },
                "attribute": "check-in",
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
                    "text": "The language used for displaying text content in the component.\r\nDefaults to English ('en'), but can be set to other supported languages."
                },
                "attribute": "language",
                "reflect": false,
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
                    "text": "A unique booking number associated with the room.\r\nThis is used for backend operations like saving guest information or checking in the room."
                },
                "attribute": "booking-number",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "guests": {},
            "idTypes": {},
            "error": {},
            "isLoading": {},
            "submitted": {},
            "propertyCountry": {}
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
            }, {
                "method": "resetbooking",
                "name": "resetbooking",
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
//# sourceMappingURL=ir-room-guests.js.map
