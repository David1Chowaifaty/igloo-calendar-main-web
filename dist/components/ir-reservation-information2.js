import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { c as colorVariants, d as defineCustomElement$3 } from './ir-icons2.js';
import { l as locales } from './locales.store.js';
import { e as getPrivateNote } from './booking.js';
import { _ as _formatDate, a as _formatTime } from './functions.js';
import { d as defineCustomElement$4 } from './ir-button2.js';
import { d as defineCustomElement$2 } from './ir-label2.js';
import { d as defineCustomElement$1 } from './ota-label2.js';

const irReservationInformationCss = ".sc-ir-reservation-information-h{display:block}";
const IrReservationInformationStyle0 = irReservationInformationCss;

const IrReservationInformation = /*@__PURE__*/ proxyCustomElement(class IrReservationInformation extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.openSidebar = createEvent(this, "openSidebar", 7);
        this.booking = undefined;
        this.countries = undefined;
    }
    handleEditClick(e, type) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.openSidebar.emit({ type });
    }
    renderPhoneNumber() {
        const { mobile, country_phone_prefix, country_id } = this.booking.guest;
        if (!mobile) {
            return null;
        }
        if (this.booking.is_direct) {
            if (country_phone_prefix) {
                return country_phone_prefix + ' ' + mobile;
            }
            if (country_id) {
                const selectedCountry = this.countries.find(c => c.id === country_id);
                if (!selectedCountry) {
                    throw new Error('Invalid country id');
                }
                return selectedCountry.phone_prefix + ' ' + mobile;
            }
        }
        return mobile;
    }
    render() {
        var _a, _b, _c, _d;
        return (h("div", { key: '0c93e6c6105345c3f9934da046eac4b8dc9ab911', class: "card" }, h("div", { key: '52c58dd65487a491dd5291e746ef14f70b8d51ab', class: "p-1" }, h("p", { key: 'dc5d914559f35be16491f87ce2d57e7bb03abc5d' }, this.booking.property.name || ''), h("ir-label", { key: '3a48c4b1649b9de6a14726b35f78f779c2f73d9f', labelText: `${locales.entries.Lcz_Source}:`, content: this.booking.origin.Label, image: { src: this.booking.origin.Icon, alt: this.booking.origin.Label } }), h("ir-label", { key: 'dbc43613020821bcbf51f8123423680e01cccc41', renderContentAsHtml: true, labelText: `Booked on:`, content: `${_formatDate(this.booking.booked_on.date)}&nbsp&nbsp&nbsp&nbsp${_formatTime(this.booking.booked_on.hour.toString(), this.booking.booked_on.minute.toString())}` }), h("ir-label", { key: 'bdb5fb562052b20f2f7e3661eff05729556df956', labelText: `${locales.entries.Lcz_BookedBy}:`, content: `${this.booking.guest.first_name} ${this.booking.guest.last_name}` }, h("ir-button", { key: '4efef40fa2038ee312cef67a4ff7cce3e9ed46a4', slot: "suffix", variant: "icon", icon_name: 'edit', style: Object.assign(Object.assign({}, colorVariants.secondary), { '--icon-size': '1.1rem' }), onClickHanlder: e => this.handleEditClick(e, 'guest') })), this.booking.guest.mobile && h("ir-label", { key: '44885de4dba1f2fecb7a8aaa265f1c41e35a7e83', labelText: `${locales.entries.Lcz_Phone}:`, content: this.renderPhoneNumber() }), h("ir-label", { key: '85e1626745c52e3d041bfc95ce30ae0546c3626f', labelText: `${locales.entries.Lcz_Email}:`, content: this.booking.guest.email }), this.booking.guest.alternative_email && h("ir-label", { key: 'c92df6656e9de821401fe6ec23bf99a95ad2512d', labelText: `${locales.entries.Lcz_AlternativeEmail}:`, content: this.booking.guest.alternative_email }), ((_b = (_a = this.booking) === null || _a === void 0 ? void 0 : _a.guest) === null || _b === void 0 ? void 0 : _b.address) && h("ir-label", { key: 'c1b17aa41adbab70b27d5ec4af9f9198b807fbcc', labelText: `${locales.entries.Lcz_Address}:`, content: this.booking.guest.address }), this.booking.is_direct && h("ir-label", { key: 'f26bbdec43481057b92994450b1f083f0aecc233', labelText: `${locales.entries.Lcz_ArrivalTime}:`, content: this.booking.arrival.description }), this.booking.promo_key && h("ir-label", { key: '1f1aad0e272101ce1131ea8a61f4a8fbe92a72df', labelText: `${locales.entries.Lcz_Coupon}:`, content: this.booking.promo_key }), this.booking.agent && h("ir-label", { key: 'cb81711c61fe737ced82dba17c9e7d4f82fea3c0', labelText: `${(_c = locales.entries.Lcz_AgentCode) === null || _c === void 0 ? void 0 : _c.split(':')[0]}:`, content: this.booking.agent.name }), this.booking.is_in_loyalty_mode && !this.booking.promo_key && (h("div", { key: 'ba18454e21fcb003f4b2b9adfb494b8b3ed6bde8', class: "d-flex align-items-center" }, h("svg", { key: 'a341acaa5781f92ff27d671e935e1311b6b6d2a5', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'e24488b09c659cb58a11ac431252128b3361ffd8', fill: "#fc6c85", d: "M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" })), h("p", { key: 'de604a5c026b73b57be3fb01c9f4593cae6f4198', class: "m-0 p-0 ml-1" }, locales.entries.Lcz_LoyaltyDiscountApplied))), this.booking.is_direct ? (h("ir-label", { class: 'm-0 p-0', labelText: `${locales.entries.Lcz_Note}:`, content: this.booking.remark })) : (h("ota-label", { class: 'm-0 p-0', label: `${locales.entries.Lcz_Note}:`, remarks: this.booking.ota_notes, maxVisibleItems: (_d = this.booking.ota_notes) === null || _d === void 0 ? void 0 : _d.length })), h("div", { key: '2a01e72f5ff2f44fb450234cf5bc630540b9e1be', class: "d-flex align-items-center justify-content-between" }, h("ir-label", { key: '2294d2e3736fa0018f1449c73a9c52082a6b838f', labelText: `${locales.entries.Lcz_PrivateNote}:`, placeholder: locales.entries.Lcz_VisibleToHotelOnly, content: getPrivateNote(this.booking.extras) }), h("ir-button", { key: 'fcf2f3f95c6a3180552955631541a9dada127de5', variant: "icon", icon_name: "edit", style: colorVariants.secondary, onClickHanlder: e => this.handleEditClick(e, 'extra_note') })))));
    }
    static get style() { return IrReservationInformationStyle0; }
}, [2, "ir-reservation-information", {
        "booking": [16],
        "countries": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-reservation-information", "ir-button", "ir-icons", "ir-label", "ota-label"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-reservation-information":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrReservationInformation);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-label":
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