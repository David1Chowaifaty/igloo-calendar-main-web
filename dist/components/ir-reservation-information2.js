import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { c as colorVariants, d as defineCustomElement$4 } from './ir-icons2.js';
import { l as locales } from './locales.store.js';
import { x as getPrivateNote } from './utils.js';
import { _ as _formatDate, a as _formatTime } from './functions.js';
import { d as defineCustomElement$5 } from './ir-button2.js';
import { d as defineCustomElement$3 } from './ir-label2.js';
import { d as defineCustomElement$2 } from './ir-tooltip2.js';
import { d as defineCustomElement$1 } from './ota-label2.js';

const irReservationInformationCss = ".sc-ir-reservation-information-h{display:block}";
const IrReservationInformationStyle0 = irReservationInformationCss;

const IrReservationInformation = /*@__PURE__*/ proxyCustomElement(class IrReservationInformation extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.openSidebar = createEvent(this, "openSidebar", 7);
        this.userCountry = null;
    }
    componentWillLoad() {
        var _a, _b, _c;
        const guestCountryId = (_b = (_a = this.booking) === null || _a === void 0 ? void 0 : _a.guest) === null || _b === void 0 ? void 0 : _b.country_id;
        this.userCountry = guestCountryId ? ((_c = this.countries) === null || _c === void 0 ? void 0 : _c.find(country => country.id === guestCountryId)) || null : null;
    }
    handleEditClick(e, type) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.openSidebar.emit({ type });
    }
    renderPhoneNumber() {
        const { mobile_without_prefix, country_phone_prefix, country_id } = this.booking.guest;
        if (!mobile_without_prefix) {
            return null;
        }
        if (country_phone_prefix) {
            return country_phone_prefix + ' ' + mobile_without_prefix;
        }
        if (country_id) {
            const selectedCountry = this.countries.find(c => c.id === country_id);
            if (!selectedCountry) {
                throw new Error('Invalid country id');
            }
            return selectedCountry.phone_prefix + ' ' + mobile_without_prefix;
        }
        return mobile_without_prefix;
        // const { mobile, country_phone_prefix, country_id } = this.booking.guest;
        // if (!mobile) {
        //   return null;
        // }
        // if (this.booking.is_direct) {
        //   if (country_phone_prefix) {
        //     return country_phone_prefix + ' ' + mobile;
        //   }
        //   if (country_id) {
        //     const selectedCountry = this.countries.find(c => c.id === country_id);
        //     if (!selectedCountry) {
        //       throw new Error('Invalid country id');
        //     }
        //     return selectedCountry.phone_prefix + ' ' + mobile;
        //   }
        // }
        // return mobile;
    }
    render() {
        var _a, _b, _c, _d, _e, _f;
        const privateNote = getPrivateNote(this.booking.extras);
        return (h("div", { key: '076877b1745872d058dd535133cb72b8394f7282', class: "card" }, h("div", { key: 'e6b007c7bd9765115bf89d203f73136a5cd5cdb2', class: "p-1" }, h("p", { key: 'eae9e8b480982f4e3582c7660b85c1e14d39c63c' }, this.booking.property.name || ''), h("ir-label", { key: '4cb17268baf3fe99be26c71973ce59818a39bb9d', labelText: `${locales.entries.Lcz_Source}:`, content: this.booking.origin.Label, image: { src: this.booking.origin.Icon, alt: this.booking.origin.Label } }), h("ir-label", { key: '94cfd3f3d16f320cf00dd6274682a7b3fedb6af7', renderContentAsHtml: true, labelText: `${locales.entries.Lcz_BookedOn}:`, content: `${_formatDate(this.booking.booked_on.date)}&nbsp&nbsp&nbsp&nbsp${_formatTime(this.booking.booked_on.hour.toString(), this.booking.booked_on.minute.toString())}` }), h("ir-label", { key: '3f08418b9ea7b8ca5ae1418f9822bc9650f7ac28', labelText: `${locales.entries.Lcz_BookedBy}:`, content: `${this.booking.guest.first_name} ${this.booking.guest.last_name}` }, ((_a = this.booking.guest) === null || _a === void 0 ? void 0 : _a.nbr_confirmed_bookings) > 1 && !this.booking.agent && (h("div", { key: '9033e1caf411dc01b31c4b110e1c1bed9bcac67f', class: 'm-0 p-0', slot: "prefix" }, h("ir-tooltip", { key: '726d0c469d01aaec41b9002846ff8822f705ef65', message: `${locales.entries.Lcz_BookingsNbr}`.replace('%1', this.booking.guest.nbr_confirmed_bookings.toString()), customSlot: true }, h("div", { key: '7d3066705d90af631ae0ee7921d5ff448a43db13', class: "d-flex align-items-center m-0 p-0", slot: "tooltip-trigger", style: { gap: '0.25rem' } }, h("p", { key: '21e964fe526ee3b43417e0a89211b4ead1f045d6', class: 'p-0 m-0', style: { color: '#FB0AAD' } }, this.booking.guest.nbr_confirmed_bookings), h("ir-icons", { key: 'c20b7b8d93df4ee07edf34f3a3f43a9fafc75df6', style: { '--icon-size': '1rem' }, color: "#FB0AAD", name: "heart-fill" }))))), h("ir-button", { key: '633498ccc7ea3f112ad2b27d70ecde5ac38e38a9', slot: "suffix", variant: "icon", icon_name: 'edit', style: Object.assign(Object.assign({}, colorVariants.secondary), { '--icon-size': '1.1rem' }), onClickHandler: e => this.handleEditClick(e, 'guest') })), this.booking.guest.mobile && h("ir-label", { key: 'd43b7b21b8686744cbb22e19b7da620b4dc97253', labelText: `${locales.entries.Lcz_Phone}:`, content: this.renderPhoneNumber() }), !this.booking.agent && h("ir-label", { key: '6a812582f7ea272f85b16f0b4e0b22c108768cc5', labelText: `${locales.entries.Lcz_Email}:`, content: this.booking.guest.email }), this.booking.guest.alternative_email && h("ir-label", { key: '21ffe7f3a15eb1c86563aa0316c15b9182d9feb6', labelText: `${locales.entries.Lcz_AlternativeEmail}:`, content: this.booking.guest.alternative_email }), ((_c = (_b = this.booking) === null || _b === void 0 ? void 0 : _b.guest) === null || _c === void 0 ? void 0 : _c.address) && h("ir-label", { key: '02ddab41f1c45a1bcb3f3b0806c120a52b43c476', labelText: `${locales.entries.Lcz_Address}:`, content: this.booking.guest.address }), this.userCountry && (h("ir-label", { key: '82a1acafee943121fa324629d8ebf62a185cfb98', labelText: `${locales.entries.Lcz_Country}:`, isCountryImage: true, content: this.userCountry.name, image: { src: this.userCountry.flag, alt: this.userCountry.name } })), ((_d = this.booking.guest) === null || _d === void 0 ? void 0 : _d.notes) && h("ir-label", { key: '6333c97bbb01aaac9f0eaa763581b68d1bbd8bf9', display: "inline", labelText: `${locales.entries.Lcz_GuestPrivateNote}:`, content: (_e = this.booking.guest) === null || _e === void 0 ? void 0 : _e.notes }), this.booking.is_direct && h("ir-label", { key: '15afc294547806a271a7e0dc3472fdbf11574eba', labelText: `${locales.entries.Lcz_ArrivalTime}:`, content: this.booking.arrival.description }), this.booking.promo_key && h("ir-label", { key: '7da311b4950b37399a0bf4703a9eb45920f5c896', labelText: `${locales.entries.Lcz_Coupon}:`, content: this.booking.promo_key }), this.booking.is_in_loyalty_mode && !this.booking.promo_key && (h("div", { key: 'f86b05ce955e7b9fd6781dd271eb72b16a7467e9', class: "d-flex align-items-center" }, h("svg", { key: 'd35aac4f3736626f29282ba5b639b0c64a17c09f', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'd4f1a6e7cfbb79580304af91ea6b4dbba43aeb44', fill: "#fc6c85", d: "M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" })), h("p", { key: '333356fa2ffce339ff40d5819c54c94e08d299f4', class: "m-0 p-0 ml-1" }, locales.entries.Lcz_LoyaltyDiscountApplied))), this.booking.is_direct ? (h("ir-label", { labelText: `${locales.entries.Lcz_GuestRemark}:`, display: "inline", content: this.booking.remark })) : (h("ota-label", { class: 'm-0 p-0', label: `${locales.entries.Lcz_ChannelNotes || 'Channel notes'}:`, remarks: this.booking.ota_notes, maxVisibleItems: (_f = this.booking.ota_notes) === null || _f === void 0 ? void 0 : _f.length })), h("div", { key: 'fbd5b853238a2a83607ce01a1bcfa64efa5e4d90', class: "d-flex align-items-center justify-content-between" }, h("ir-label", { key: 'd346d4a1ef9f6c92af5669b40dc4022be0f90930', labelText: `${locales.entries.Lcz_BookingPrivateNote}:`, placeholder: locales.entries.Lcz_VisibleToHotelOnly, content: privateNote, display: privateNote ? 'inline' : 'flex' }), h("ir-button", { key: 'c0bd74ff0c022ed593e45c8f392ca647ca3e1acb', variant: "icon", icon_name: "edit", style: colorVariants.secondary, onClickHandler: e => this.handleEditClick(e, 'extra_note') })))));
    }
    static get style() { return IrReservationInformationStyle0; }
}, [2, "ir-reservation-information", {
        "booking": [16],
        "countries": [16],
        "userCountry": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-reservation-information", "ir-button", "ir-icons", "ir-label", "ir-tooltip", "ota-label"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-reservation-information":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrReservationInformation);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ota-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrReservationInformation as I, defineCustomElement as d };

//# sourceMappingURL=ir-reservation-information2.js.map