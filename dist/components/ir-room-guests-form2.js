import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { v as validateSharedPerson, Z as ZSharedPerson } from './booking.dto.js';
import { l as locales } from './locales.store.js';
import { h as hooks } from './moment.js';
import { M as MaskedRange } from './index4.js';
import { B as BookingService } from './booking.service.js';
import { Z as ZodError } from './index3.js';
import { d as defineCustomElement$7 } from './ir-country-picker2.js';
import { d as defineCustomElement$6 } from './ir-input2.js';
import { d as defineCustomElement$5 } from './ir-input-text2.js';
import { d as defineCustomElement$4 } from './ir-picker2.js';
import { d as defineCustomElement$3 } from './ir-picker-item2.js';
import { d as defineCustomElement$2 } from './ir-spinner2.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';

const defaultGuest = {
    id: -1,
    full_name: '',
    country_id: null,
    dob: '',
    id_info: {
        type: {
            code: null,
            description: null,
        },
        number: '',
    },
    address: null,
    alternative_email: null,
    cci: null,
    city: null,
    country: undefined,
    country_phone_prefix: null,
    email: null,
    first_name: '',
    last_name: '',
    mobile: null,
    nbr_confirmed_bookings: 0,
    notes: null,
    password: null,
    subscribe_to_news_letter: null,
};
/**Date of birth mask for room guests  with min */
const dateMask = {
    mask: Date,
    pattern: 'DD/MM/YYYY',
    lazy: false,
    min: hooks('1900-01-01', 'YYYY-MM-DD').toDate(),
    max: new Date(),
    format: date => hooks(date).format('DD/MM/YYYY'),
    parse: str => hooks(str, 'DD/MM/YYYY').toDate(),
    autofix: true,
    placeholderChar: '_',
    blocks: {
        YYYY: {
            mask: MaskedRange,
            from: 1900,
            to: new Date().getFullYear(),
            placeholderChar: 'Y',
        },
        MM: {
            mask: MaskedRange,
            from: 1,
            to: 12,
            placeholderChar: 'M',
        },
        DD: {
            mask: MaskedRange,
            from: 1,
            to: 31,
            placeholderChar: 'D',
        },
    },
};

const irRoomGuestsFormCss = ".sc-ir-room-guests-form-h{display:block;height:100%;position:relative;text-align:start !important;padding-bottom:1rem !important}.id-select.sc-ir-room-guests-form{border-top-right-radius:0;border-bottom-right-radius:0;border-right-width:0}.sc-ir-room-guests-form-h{display:block;width:100%}.guests-labels.sc-ir-room-guests-form{display:none}.sharing_persons_label.sc-ir-room-guests-form{display:none}.loading-container.sc-ir-room-guests-form{height:100%;width:100%;display:flex;justify-content:center;align-items:center;margin:0;padding:0}.guest_document.sc-ir-room-guests-form input.sc-ir-room-guests-form{border-top-left-radius:0;border-bottom-left-radius:0}.guests-labels.sc-ir-room-guests-form *.sc-ir-room-guests-form,.sharing_persons_label.sc-ir-room-guests-form{margin-bottom:0.5rem;padding-bottom:0}.room-guest__info-container.sc-ir-room-guests-form{display:flex;flex:1 1 0%;align-items:center}.room-guest__document.sc-ir-room-guests-form::part(base):dir(ltr),.room-guest__id-info.sc-ir-room-guests-form::part(combobox):dir(rtl){border-top-left-radius:0;border-bottom-left-radius:0}.room-guest__document.sc-ir-room-guests-form{flex:1 1 0%}.room-guest__id-info.sc-ir-room-guests-form::part(combobox):dir(ltr),.room-guest__document.sc-ir-room-guests-form::part(base):dir(rtl){border-top-right-radius:0;border-bottom-right-radius:0}.room-guest__id-info.sc-ir-room-guests-form::part(combobox):dir(ltr){border-right-width:0}.room-guest__id-info.sc-ir-room-guests-form::part(combobox):dir(rtl){border-left-width:0}.room-guest__id-info[open].sc-ir-room-guests-form,.room-guest__id-info.sc-ir-room-guests-form:focus-visible,.room-guest__id-info.sc-ir-room-guests-form:focus-within{z-index:2}.room-guest__section.sc-ir-room-guests-form{display:flex;flex-direction:column;margin-bottom:1rem}.room-guest__section.sc-ir-room-guests-form p.sc-ir-room-guests-form{margin:0;padding:0}.guest_label.sc-ir-room-guests-form{width:100px;display:inline-block;position:relative;color:var(--wa-form-control-label-color);font-weight:var(--wa-form-control-label-font-weight);line-height:var(--wa-form-control-label-line-height);margin-bottom:0.5em !important}@media (min-width: 768px){.sharing_persons_label.sc-ir-room-guests-form{display:block}.guest_country_picker.sc-ir-room-guests-form{margin-bottom:3px}.room-guest__section.sc-ir-room-guests-form{display:block}.guest-grid.sc-ir-room-guests-form{display:grid;grid-template-columns:minmax(0, 120px) \n      minmax(0, 120px) \n      minmax(0, 120px) \n      minmax(0, 120px) \n      minmax(0, 1fr);gap:0.5rem;align-items:flex-start}.guest_label.sc-ir-room-guests-form,.sharing_persons_heading.sc-ir-room-guests-form,.main_guest_heading.sc-ir-room-guests-form{display:none}}";
const IrRoomGuestsFormStyle0 = irRoomGuestsFormCss;

const IrRoomGuestsForm = /*@__PURE__*/ proxyCustomElement(class IrRoomGuestsForm extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.closeModal = createEvent(this, "closeModal", 7);
        this.resetBookingEvt = createEvent(this, "resetBookingEvt", 7);
        this.updateRoomGuests = createEvent(this, "updateRoomGuests", 7);
    }
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
    guests = [];
    idTypes = [];
    error = {};
    isLoading;
    propertyCountry;
    autoValidate = false;
    closeModal;
    resetBookingEvt;
    updateRoomGuests;
    bookingService = new BookingService();
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
        let guests = [];
        if (this.totalGuests > this.sharedPersons.length) {
            const defaultGuestsCount = this.totalGuests - this.sharedPersons.length;
            guests = [
                ...this.sharedPersons,
                ...Array(defaultGuestsCount).fill({
                    ...defaultGuest,
                    id_info: {
                        ...defaultGuest.id_info,
                        type: {
                            code: this.idTypes[0]?.CODE_NAME || '001',
                            description: this.idTypes[0]?.CODE_VALUE_EN || '',
                        },
                        number: '',
                    },
                }),
            ];
        }
        else {
            guests = [...this.sharedPersons];
        }
        guests = guests.map(g => ({ ...g, dob: new Date(g.dob).getFullYear() === 1900 ? null : g.dob }));
        this.guests = guests.map(g => ({ ...g, dob: g.dob ? hooks(new Date(g.dob)).format('DD/MM/YYYY') : '', country_id: g.country ? g.country.id : null }));
    }
    updateGuestInfo(index, params) {
        const tempGuests = [...this.guests];
        let tempGuest = tempGuests[index];
        tempGuest = { ...tempGuest, ...params };
        tempGuests[index] = tempGuest;
        this.guests = [...tempGuests];
    }
    async saveGuests() {
        try {
            this.error = {};
            this.autoValidate = true;
            console.log({
                sharedPersons: this.sharedPersons,
                guests: this.guests,
            });
            // ZSharedPersons.parse(this.guests);
            for (const guest of this.guests) {
                validateSharedPerson(guest);
            }
            await this.bookingService.handleExposedRoomGuests({
                booking_nbr: this.bookingNumber,
                identifier: this.identifier,
                guests: this.guests
                    .map(g => {
                    if (!g.first_name && g.id === -1) {
                        return null;
                    }
                    return { ...g, dob: g.dob ? hooks(g.dob, 'DD/MM/YYYY').format('YYYY-MM-DD') : null };
                })
                    .filter(Boolean),
            });
            if (this.checkIn) {
                await this.bookingService.handleExposedRoomInOut({
                    booking_nbr: this.bookingNumber,
                    room_identifier: this.identifier,
                    status: '001',
                });
            }
            this.closeModal.emit(null);
            this.updateRoomGuests.emit({ identifier: this.identifier, guests: this.guests });
            this.resetBookingEvt.emit();
        }
        catch (error) {
            console.log(error);
            if (error instanceof ZodError) {
                let errors = {};
                error.issues.forEach(e => {
                    errors[e.path[e.path.length - 1]] = true;
                });
                this.error = { ...errors };
            }
        }
    }
    render() {
        if (this.isLoading) {
            return (h("div", { class: 'loading-container' }, h("ir-spinner", null)));
        }
        return (h("form", { id: `room-guests__${this.identifier}`, class: "sheet-container", style: { minWidth: '300px' }, onSubmit: e => {
                e.preventDefault();
                this.saveGuests();
            } }, h("section", { class: 'sheet-body' }, h("div", { class: "" }, h("div", { class: "guest-grid guests-labels" }, h("p", { class: "" }, locales.entries.Lcz_MainGuest), h("p", { class: "" }), h("p", { class: " " }, locales.entries.Lcz_DOB), h("p", { class: "" }, locales.entries.Lcz_Nationality), h("p", { class: " " }, locales.entries.Lcz_Documents)), h("h5", { class: "main_guest_heading" }, locales.entries.Lcz_MainGuest), this.guests.map((guest, idx) => {
            let isRowValid = true;
            try {
                validateSharedPerson(guest);
            }
            catch (error) {
                isRowValid = false;
            }
            // console.log(`row ${idx}=>${isRowValid}`);
            return (h(Fragment, null, idx === 1 && (h("div", { class: "d-flex mx-0 px-0" }, h("h5", { class: "mx-0 px-0 sharing_persons_heading" }, locales.entries.Lcz_PersonsSharingRoom), h("p", { class: "mx-0 px-0 sharing_persons_label" }, locales.entries.Lcz_PersonsSharingRoom))), h("div", { key: idx, class: "guest-grid" }, h("div", { class: "room-guest__section" }, h("label", { htmlFor: `first_name_${idx}`, class: "guest_label" }, "First name"), h("ir-validator", { class: "flex-grow-1", schema: ZSharedPerson.shape.first_name }, h("ir-input", { "aria-invalid": String(!!this.error['first_name'] && !isRowValid), size: "small", id: `first_name_${idx}`, placeholder: "First name", "onText-change": e => this.updateGuestInfo(idx, { first_name: e.detail }), value: guest.first_name, maxlength: 40 }))), h("div", { class: "room-guest__section" }, h("label", { class: "guest_label" }, "Last name"), h("ir-validator", { class: "flex-grow-1", schema: ZSharedPerson.shape.last_name }, h("ir-input", { "aria-invalid": String(!!this.error['last_name'] && !isRowValid), size: "small", id: `last_name_${idx}`, placeholder: "Last name", "onText-change": e => this.updateGuestInfo(idx, { last_name: e.detail }), value: guest.last_name, maxlength: 40 }))), h("div", { class: "room-guest__section" }, h("p", { class: "guest_label" }, locales.entries.Lcz_DOB), h("ir-validator", { class: "flex-grow-1", schema: ZSharedPerson.shape.dob }, h("ir-input", { "aria-invalid": String(!!this.error['dob'] && !isRowValid), id: `dob_${idx}`, mask: dateMask, size: "small", placeholder: "", "onText-change": e => {
                    this.updateGuestInfo(idx, { dob: e.detail });
                }, value: guest.dob }))), h("div", { class: "room-guest__section" }, h("p", { class: "guest_label" }, locales.entries.Lcz_Nationality), h("div", { class: "flex-grow-1" }, h("ir-country-picker", { size: "small", variant: "modern", "aria-invalid": String(!!this.error['country_id'] && !guest.country_id), propertyCountry: this.propertyCountry, id: `{locales.entries.Lcz_Nationality}_${idx}`, error: !!this.error['country_id'] && !guest.country_id, country: this.countries?.find(c => c.id?.toString() === guest.country?.id?.toString()), onCountryChange: e => this.updateGuestInfo(idx, { country_id: e.detail?.id?.toString() ?? null, country: e.detail }), countries: this.countries }))), h("div", { class: "room-guest__section" }, h("p", { class: "guest_label" }, locales.entries.Lcz_Documents), h("div", { class: 'room-guest__info-container flex-grow-1' }, h("wa-select", { class: "room-guest__id-info", defaultValue: guest.id_info?.type?.code ?? this.idTypes[0]?.CODE_NAME, value: guest.id_info?.type?.code, onchange: e => {
                    this.updateGuestInfo(idx, {
                        id_info: {
                            ...this.guests[idx].id_info,
                            type: {
                                code: e.target.value,
                                description: '',
                            },
                        },
                    });
                }, size: "small" }, this.idTypes?.map(t => {
                const label = t[`CODE_VALUE_${this.language.toUpperCase()}`] ?? t[`CODE_VALUE_EN`];
                return (h("wa-option", { value: t['CODE_NAME'], label: label }, label));
            })), h("wa-input", { size: "small", "aria-invalid": String(!!this.error['number'] && !isRowValid), class: "room-guest__document", defaultValue: guest?.id_info?.number, value: guest?.id_info?.number, maxlength: 18, placeholder: "12345", onchange: e => this.updateGuestInfo(idx, {
                    id_info: {
                        ...this.guests[idx].id_info,
                        number: e.target.value,
                    },
                }) }))))));
        })))));
    }
    static get style() { return IrRoomGuestsFormStyle0; }
}, [2, "ir-room-guests-form", {
        "roomName": [1, "room-name"],
        "identifier": [1],
        "sharedPersons": [16],
        "totalGuests": [2, "total-guests"],
        "countries": [16],
        "checkIn": [4, "check-in"],
        "language": [1],
        "bookingNumber": [1, "booking-number"],
        "guests": [32],
        "idTypes": [32],
        "error": [32],
        "isLoading": [32],
        "propertyCountry": [32],
        "autoValidate": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-room-guests-form", "ir-country-picker", "ir-input", "ir-input-text", "ir-picker", "ir-picker-item", "ir-spinner", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-room-guests-form":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrRoomGuestsForm);
            }
            break;
        case "ir-country-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-picker-item":
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

export { IrRoomGuestsForm as I, defineCustomElement as d };

//# sourceMappingURL=ir-room-guests-form2.js.map