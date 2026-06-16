import { proxyCustomElement, HTMLElement, h, Host, Fragment } from '@stencil/core/internal/client';
import { m as modifyBookingStore, a as updateBookedByGuest, b as booking_store } from './booking.store.js';
import { c as calendar_data } from './calendar-data.js';
import { l as locales } from './locales.store.js';
import { I as IMask } from './index4.js';
import { B as BookedByGuestSchema } from './types4.js';
import { d as defineCustomElement$7 } from './ir-country-picker2.js';
import { d as defineCustomElement$6 } from './ir-input2.js';
import { d as defineCustomElement$5 } from './ir-input-text2.js';
import { d as defineCustomElement$4 } from './ir-mobile-input2.js';
import { d as defineCustomElement$3 } from './ir-picker2.js';
import { d as defineCustomElement$2 } from './ir-picker-item2.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';
import { v as v4 } from './v4.js';

const irBookingEditorGuestFormCss = ".sc-ir-booking-editor-guest-form-h{padding-bottom:3rem}.sc-ir-booking-editor-guest-form-h{display:flex;flex-direction:column;gap:1rem}.booking-editor__guest-name-group.sc-ir-booking-editor-guest-form,.booking-editor__form-control.sc-ir-booking-editor-guest-form{display:flex;flex-direction:column;gap:1rem}.booking-editor__guest-input.sc-ir-booking-editor-guest-form,.booking-editor__guest-input-validator.sc-ir-booking-editor-guest-form{width:100%}.booking-editor__form-control.sc-ir-booking-editor-guest-form{width:100%;flex-grow:0;height:fit-content}.booking-editor__payment-info-description.sc-ir-booking-editor-guest-form{display:flex;height:fit-content;flex-direction:column}.booking-editor__guest-input-label.--first-name-pc-label.sc-ir-booking-editor-guest-form{display:none}@media (min-width: 768px){.booking-editor__guest-input-label.--first-name-pc-label.sc-ir-booking-editor-guest-form{display:block}.booking-editor__guest-name-group.sc-ir-booking-editor-guest-form{display:flex;flex-direction:row;align-items:flex-end}.booking-editor__guest-input-label.--first-name-mobile-label.sc-ir-booking-editor-guest-form,.booking-editor__guest-input.--last-name.sc-ir-booking-editor-guest-form::part(label){display:none}.sc-ir-booking-editor-guest-form-h{flex-direction:row;gap:4rem}}";
const IrBookingEditorGuestFormStyle0 = irBookingEditorGuestFormCss;

const IrBookingEditorGuestForm = /*@__PURE__*/ proxyCustomElement(class IrBookingEditorGuestForm extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    paymentMethods = [];
    expiryDateMask = {
        mask: 'MM/YY',
        placeholderChar: '_',
        blocks: {
            MM: {
                mask: IMask.MaskedRange,
                from: 1,
                to: 12,
                maxLength: 2,
            },
            YY: {
                mask: IMask.MaskedRange,
                from: new Date().getFullYear() % 100,
                to: (new Date().getFullYear() % 100) + 20,
                maxLength: 2,
            },
        },
    };
    componentWillLoad() {
        this.paymentMethods = calendar_data.property.allowed_payment_methods.filter(p => p.is_active && !p.is_payment_gateway);
        if (this.paymentMethods.length > 0) {
            modifyBookingStore('selectedPaymentMethod', { code: this.paymentMethods[0].code });
        }
    }
    updateCountry(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const country = event.detail;
        let payload = { countryId: country.id.toString() };
        if (!booking_store.bookedByGuest.mobile) {
            payload = { ...payload, phone_prefix: country.phone_prefix };
        }
        updateBookedByGuest(payload);
    }
    get expiryDate() {
        const { expiryMonth, expiryYear } = booking_store.bookedByGuest;
        if (!expiryMonth || !expiryYear) {
            return '';
        }
        // Normalize year to YY
        const year = expiryYear.toString().length === 4 ? expiryYear.toString().slice(-2) : expiryYear.toString();
        return `${expiryMonth}/${year}`;
    }
    render() {
        const { bookedByGuest, selects, bookingDraft } = booking_store;
        const { agent } = bookingDraft;
        return (h(Host, { key: '5faecfe37856ed4e1c6fc28cf917f6438003d214' }, h("section", { key: '703aa298255b372a8b4c6cbcbb437f2078d69c37', class: "booking-editor__form-control" }, h("ir-input", { key: '11b6fda958666d37969af631d982719320a59c7d', label: "Email address", "onText-change": e => updateBookedByGuest({ email: e.detail }), mask: 'email', value: bookedByGuest.email, defaultValue: bookedByGuest.email, placeholder: "Email (leave empty if not available)" }), h("div", { key: '24010fb3ebdbddeaff07a808db5db16ef1e34684', class: "booking-editor__guest-name-group", id: "booking-editor-guest-name-group" }, h("ir-validator", { key: '1d15626f1d7c283159f5fc19ff93df4149d6dd26', class: "booking-editor__guest-input-validator", value: bookedByGuest.firstName, schema: BookedByGuestSchema.shape.firstName }, h("ir-input", { key: '0d8711b12a3934b87f0689eab5f1dd89f43f3de9', id: "booking-editor-guest-first-name", class: "booking-editor__guest-input --first-name",
            // label="Name"
            value: bookedByGuest.firstName, defaultValue: bookedByGuest.firstName, placeholder: "First name", autocomplete: "off", "onText-change": e => updateBookedByGuest({ firstName: e.detail }) }, h("p", { key: '74f721b6c1fe32f373e792d2ea0657ba48d429c3', style: { margin: '0', marginBottom: '0.5rem' }, slot: "label" }, h("span", { key: '15f2fd451c15686aad9f773b4bb95a299eef78eb', class: "booking-editor__guest-input-label --first-name-pc-label" }, "Name"), h("span", { key: '35b2cebe2fac16509f9876a438013408cbb41c96', class: "booking-editor__guest-input-label --first-name-mobile-label" }, "First name")))), h("ir-validator", { key: '2a184df14adfd00cbc370968711c66130a09a097', class: "booking-editor__guest-input-validator", value: bookedByGuest.lastName, schema: BookedByGuestSchema.shape.lastName }, h("ir-input", { key: 'aeb7fbb159e5e971da8f838ecf03b752ba1e1eee', id: "booking-editor-guest-last-name", class: "booking-editor__guest-input --last-name", label: "Last name", "onText-change": e => updateBookedByGuest({ lastName: e.detail }), value: bookedByGuest.lastName, defaultValue: bookedByGuest.lastName, placeholder: "Last name", autocomplete: "off" }))), booking_store.bookingDraft.agent ? (h("ir-input", { label: "Booking code", placeholder: "", value: bookedByGuest.agent_booking_nbr, defaultValue: bookedByGuest.agent_booking_nbr, "onText-change": e => updateBookedByGuest({ agent_booking_nbr: e.detail }) })) : (h("ir-input", { label: "Company name", placeholder: "Company name", value: bookedByGuest.company, defaultValue: bookedByGuest.company, "onText-change": e => updateBookedByGuest({ company: e.detail }) })), h("ir-country-picker", { key: 'e4009995f719ce7fbec45b1ba537e59de4a8c066', label: locales.entries.Lcz_Country, variant: "modern", testId: "main_guest_country", class: "flex-grow-1 m-0", onCountryChange: e => this.updateCountry(e), countries: selects.countries, country: selects.countries.find(c => c.id.toString() === bookedByGuest.countryId?.toString()) }), h("ir-mobile-input", { key: 'fcb39c089807c125945f3d20ba1a472e408c409b', size: "small", "onMobile-input-change": e => {
                updateBookedByGuest({ mobile: e.detail.formattedValue });
            }, "onMobile-input-country-change": e => updateBookedByGuest({ phone_prefix: e.detail.phone_prefix }), value: bookedByGuest.mobile, countryCode: selects.countries.find(c => c.phone_prefix === bookedByGuest.phone_prefix)?.code, countries: selects.countries })), h("section", { key: 'ee791f27bbce3b1e32337a5c0642dc12b1d82f13', class: 'booking-editor__form-control' }, h("wa-select", { key: '12279ee2f81e85e9ff6ba2eb4524d0a28b6327b8', size: "small", label: locales.entries.Lcz_YourArrivalTime, "data-testid": "arrival_time", id: v4(), defaultValue: selects.arrivalTime[0].CODE_NAME, value: bookedByGuest.selectedArrivalTime, onchange: event => updateBookedByGuest({ selectedArrivalTime: event.target.value }) }, selects.arrivalTime.map(time => (h("wa-option", { value: time.CODE_NAME, selected: bookedByGuest.selectedArrivalTime === time.CODE_NAME }, time.CODE_VALUE_EN)))), h("wa-textarea", { key: '1947cf658c4efda714932c911b033262b6f0298e', onchange: event => updateBookedByGuest({ note: event.target.value }), size: "small", value: bookedByGuest.note, defaultValue: bookedByGuest.note, label: locales.entries.Lcz_AnyMessageForUs, rows: 3 }), (!agent || agent?.payment_mode?.code === '002') && (h(Fragment, { key: '4d904b3bdd1dada993487b96a1709d9b93784504' }, this.paymentMethods.length > 1 && (h("wa-select", { key: '1b49cbd7747c08e04b71c572414a08a316ec467e', label: 'Payment Method', size: "small", defaultValue: booking_store?.selectedPaymentMethod?.code ?? this.paymentMethods[0].code, value: booking_store?.selectedPaymentMethod?.code, onchange: e => modifyBookingStore('selectedPaymentMethod', {
                code: e.target.value,
            }) }, this.paymentMethods.map(p => (h("wa-option", { value: p.code }, p.description))))), booking_store.selectedPaymentMethod?.code === '001' && (h(Fragment, { key: 'cf408527d4b00617d733adc0aa4583b08ec88088' }, h("ir-input", { key: '959b8fc84c291aa120073c11f5fde5a27a1675d6', value: bookedByGuest.cardNumber, defaultValue: bookedByGuest.cardNumber, "onText-change": e => updateBookedByGuest({ cardNumber: e.detail.trim() }), label: locales.entries.Lcz_CardNumber }), h("ir-input", { key: '1f3e6996c3b58fe52cdb29637097cf7305236850', value: bookedByGuest.cardHolderName, defaultValue: bookedByGuest.cardHolderName, "onText-change": e => updateBookedByGuest({ cardHolderName: e.detail.trim() }), label: locales.entries.Lcz_CardHolderName }), h("ir-input", { key: '603c5ffb0f03c1a5eeaaf8d4e5f5df739ec896b1', "onText-change": e => {
                const [month, year] = e.detail.split('/');
                updateBookedByGuest({
                    expiryMonth: month,
                    expiryYear: year,
                });
            }, value: this.expiryDate, mask: this.expiryDateMask, label: locales.entries.Lcz_ExpiryDate }))), booking_store.selectedPaymentMethod?.code === '005' && (h(Fragment, { key: '89860f099714a438ca29d002a180b4c37ae59003' }, h("style", { key: 'bc9f5f5c298a006832b9d671199d673f29076713' }, `p{
              margin:0;
              padding:0}`), h("div", { key: '3a79a4752bceda641474007a4f251140930cdf63', class: "booking-editor__payment-info-description", innerHTML: this.paymentMethods.find(p => p.code === '005')?.localizables.find(l => l.language.code.toLowerCase() === 'en')?.description }))), h("wa-checkbox", { key: 'b6d855f720951090df860c396555be939dfc86f1', defaultChecked: bookedByGuest.emailGuest, checked: bookedByGuest.emailGuest, onchange: event => updateBookedByGuest({ emailGuest: event.target.checked }) }, locales.entries.Lcz_EmailTheGuest))))));
    }
    static get style() { return IrBookingEditorGuestFormStyle0; }
}, [2, "ir-booking-editor-guest-form"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-booking-editor-guest-form", "ir-country-picker", "ir-input", "ir-input-text", "ir-mobile-input", "ir-picker", "ir-picker-item", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booking-editor-guest-form":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookingEditorGuestForm);
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
        case "ir-mobile-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-picker-item":
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

export { IrBookingEditorGuestForm as I, defineCustomElement as d };

//# sourceMappingURL=ir-booking-editor-guest-form2.js.map