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
        return (h("div", { key: 'd0eebbbb30327c94fadf14d21990b841f80fbf8c', class: "card" }, h("div", { key: 'f61097d060ea305add8f8381cca331995e637a20', class: "p-1" }, h("p", { key: '76af8dc25f8db70731e330a0529627249543ec1e' }, this.booking.property.name || ''), h("ir-label", { key: 'e9dd533ddcaafb39e217edad5a0cd41570170272', labelText: `${locales.entries.Lcz_Source}:`, content: this.booking.origin.Label, image: { src: this.booking.origin.Icon, alt: this.booking.origin.Label } }), h("ir-label", { key: '2bc17bc043c030f714c6379d414908b42d836654', renderContentAsHtml: true, labelText: `${locales.entries.Lcz_BookedOn}:`, content: `${_formatDate(this.booking.booked_on.date)}&nbsp&nbsp&nbsp&nbsp${_formatTime(this.booking.booked_on.hour.toString(), this.booking.booked_on.minute.toString())}` }), h("ir-label", { key: '0d330fed8cc32e14b94ccb23bf21134b8fd562a4', labelText: `${locales.entries.Lcz_BookedBy}:`, content: `${this.booking.guest.first_name} ${this.booking.guest.last_name}` }, ((_a = this.booking.guest) === null || _a === void 0 ? void 0 : _a.nbr_confirmed_bookings) > 1 && !this.booking.agent && (h("div", { key: '0baed267783c9811bcb1825a24fc03d59080f9b8', class: 'm-0 p-0', slot: "prefix" }, h("ir-tooltip", { key: 'b1ab7720e58a33624156051cf281b359eefee4cf', message: `${locales.entries.Lcz_BookingsNbr}`.replace('%1', this.booking.guest.nbr_confirmed_bookings.toString()), customSlot: true }, h("div", { key: '3f7f4963cf07be2085fcc78646508c3dfad82f4b', class: "d-flex align-items-center m-0 p-0", slot: "tooltip-trigger", style: { gap: '0.25rem' } }, h("p", { key: 'eb3fe73614c245270c2ff3562c84aaec1d54a049', class: 'p-0 m-0', style: { color: '#FB0AAD' } }, this.booking.guest.nbr_confirmed_bookings), h("ir-icons", { key: '12be095dc1fa584ff65eaffb809896d03ea61e51', style: { '--icon-size': '1rem' }, color: "#FB0AAD", name: "heart-fill" }))))), h("ir-button", { key: '26f56f470a273c8b4411227adbb991c96898cf35', slot: "suffix", variant: "icon", icon_name: 'edit', style: Object.assign(Object.assign({}, colorVariants.secondary), { '--icon-size': '1.1rem' }), onClickHandler: e => this.handleEditClick(e, 'guest') })), this.booking.guest.mobile && h("ir-label", { key: '0fe3f5b923d83b8d7415e8a6a42fbe1e1f7b7b1a', labelText: `${locales.entries.Lcz_Phone}:`, content: this.renderPhoneNumber() }), !this.booking.agent && h("ir-label", { key: 'bddcf4d2adff44503c0a00c279907dfd123b663a', labelText: `${locales.entries.Lcz_Email}:`, content: this.booking.guest.email }), this.booking.guest.alternative_email && h("ir-label", { key: 'd7f208fd1db30d85bc40264379491f00bf36fb59', labelText: `${locales.entries.Lcz_AlternativeEmail}:`, content: this.booking.guest.alternative_email }), ((_c = (_b = this.booking) === null || _b === void 0 ? void 0 : _b.guest) === null || _c === void 0 ? void 0 : _c.address) && h("ir-label", { key: 'd1b02354781998b959b1d5958262458beb39be85', labelText: `${locales.entries.Lcz_Address}:`, content: this.booking.guest.address }), this.userCountry && (h("ir-label", { key: '78b28f4e722ca9c3b484cfa0780239c61722560a', labelText: `${locales.entries.Lcz_Country}:`, isCountryImage: true, content: this.userCountry.name, image: { src: this.userCountry.flag, alt: this.userCountry.name } })), ((_d = this.booking.guest) === null || _d === void 0 ? void 0 : _d.notes) && h("ir-label", { key: 'c6067e4342e0cd5561c9c6cfc80be11932e8259b', display: "inline", labelText: `${locales.entries.Lcz_GuestPrivateNote}:`, content: (_e = this.booking.guest) === null || _e === void 0 ? void 0 : _e.notes }), this.booking.is_direct && h("ir-label", { key: '8f845474cda53256f006471ac019b76a665c6df4', labelText: `${locales.entries.Lcz_ArrivalTime}:`, content: this.booking.arrival.description }), this.booking.promo_key && h("ir-label", { key: 'bc16000c0fc89f766ebad71c354924bae52b3ab9', labelText: `${locales.entries.Lcz_Coupon}:`, content: this.booking.promo_key }), this.booking.is_in_loyalty_mode && !this.booking.promo_key && (h("div", { key: '1f9696598147c142a0967ca568497347150b232b', class: "d-flex align-items-center" }, h("svg", { key: '137a27895d9f55315068657d99c741202ffe931b', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '1fb94c3e4d514b2468d5eafa8c856dfd7c0bc64c', fill: "#fc6c85", d: "M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" })), h("p", { key: '6d73f15bc7c2f35971025b25c1d5e4eb5eafe793', class: "m-0 p-0 ml-1" }, locales.entries.Lcz_LoyaltyDiscountApplied))), this.booking.is_direct ? (h("ir-label", { labelText: `${locales.entries.Lcz_GuestRemark}:`, display: "inline", content: this.booking.remark })) : (h("ota-label", { class: 'm-0 p-0', label: `${locales.entries.Lcz_ChannelNotes || 'Channel notes'}:`, remarks: this.booking.ota_notes, maxVisibleItems: (_f = this.booking.ota_notes) === null || _f === void 0 ? void 0 : _f.length })), h("div", { key: 'd09bdf5293d95db569d3ab0f5339406bd90b8b46', class: "d-flex align-items-center justify-content-between" }, h("ir-label", { key: '81d4b5daba1de4e3054c8f76616b497d2e7fc335', labelText: `${locales.entries.Lcz_BookingPrivateNote}:`, placeholder: locales.entries.Lcz_VisibleToHotelOnly, content: privateNote, display: privateNote ? 'inline' : 'flex' }), h("ir-button", { key: '9673c30a7c48307531acc2b9ee71972e9ff17b19', variant: "icon", icon_name: "edit", style: colorVariants.secondary, onClickHandler: e => this.handleEditClick(e, 'extra_note') })))));
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