import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { l as locales } from './locales.store.js';
import { F as getPrivateNote } from './utils.js';
import { a as _formatDate, _ as _formatTime } from './functions.js';
import { d as defineCustomElement$7 } from './ir-booking-company-form2.js';
import { d as defineCustomElement$6 } from './ir-booking-extra-note2.js';
import { d as defineCustomElement$5 } from './ir-custom-button2.js';
import { d as defineCustomElement$4 } from './ir-custom-input2.js';
import { d as defineCustomElement$3 } from './ir-dialog2.js';
import { d as defineCustomElement$2 } from './ir-label2.js';
import { d as defineCustomElement$1 } from './ota-label2.js';

const irReservationInformationCss = ".sc-ir-reservation-information-h{display:block}.reservation-information.sc-ir-reservation-information{display:flex;flex-direction:column;gap:0.5rem !important}.reservation-information__property-name.sc-ir-reservation-information{margin:0;font-weight:600;margin-bottom:1rem}.reservation-information__row.sc-ir-reservation-information{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.reservation-information.sc-ir-reservation-information>ir-label.sc-ir-reservation-information,.reservation-information.sc-ir-reservation-information>ota-label.sc-ir-reservation-information,.reservation-information__row.sc-ir-reservation-information ir-label.sc-ir-reservation-information{display:flex;align-items:center}";
const IrReservationInformationStyle0 = irReservationInformationCss;

const IrReservationInformation = /*@__PURE__*/ proxyCustomElement(class IrReservationInformation extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.openSidebar = createEvent(this, "openSidebar", 7);
    }
    booking;
    countries;
    userCountry = null;
    isOpen;
    openSidebar;
    reservationInformationEl;
    irBookingCompanyFormRef;
    irBookingExtraNoteRef;
    componentWillLoad() {
        const guestCountryId = this.booking?.guest?.country_id;
        this.userCountry = guestCountryId ? this.countries?.find(country => country.id === guestCountryId) || null : null;
    }
    componentDidLoad() {
        this.setDynamicLabelHeight();
    }
    componentDidUpdate() {
        this.setDynamicLabelHeight();
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
    setDynamicLabelHeight() {
        if (!this.reservationInformationEl) {
            return;
        }
        requestAnimationFrame(() => {
            const labelElements = this.reservationInformationEl?.querySelectorAll('ir-label, ota-label, .reservation-information__row');
            if (!labelElements || labelElements.length === 0) {
                return;
            }
            const measured = Array.from(labelElements)
                .map(el => el.getBoundingClientRect().height)
                .filter(height => height > 0);
            if (!measured.length) {
                return;
            }
            const maxHeight = Math.max(...measured, 32);
            this.reservationInformationEl.style.setProperty('--ir-reservation-label-height', `${maxHeight}px`);
        });
    }
    render() {
        const privateNote = getPrivateNote(this.booking.extras);
        return (h("wa-card", { key: '4b84673aac4b17b9969658d31bab3abe968c4e3a' }, h("div", { key: '6b3743b035a1a830e1103a351d83ed146fce8107', class: "reservation-information", ref: el => (this.reservationInformationEl = el) }, h("p", { key: '678cc947f6e4824ad0a55a42658873ee091d7391', class: "reservation-information__property-name" }, this.booking.property.name || ''), h("ir-label", { key: 'b5acabbdcbe3100987635e6219dc2a58263f6474', labelText: `${locales.entries.Lcz_Source}:`, content: this.booking.origin.Label, image: { src: this.booking.origin.Icon, alt: this.booking.origin.Label } }), h("ir-label", { key: 'b3e6ff2c6c13daa51ba626ebdffbae7870166f33', renderContentAsHtml: true, labelText: `${locales.entries.Lcz_BookedOn}:`, content: `${_formatDate(this.booking.booked_on.date)}&nbsp&nbsp&nbsp&nbsp${_formatTime(this.booking.booked_on.hour.toString(), this.booking.booked_on.minute.toString())}` }), h("div", { key: '2d5dfdf6946aabceba0e0adef5bb95e13877d6f4', class: "reservation-information__row" }, h("ir-label", { key: '9e82518feedf40d932aa2ffc3112e996e053bed4', labelText: `${locales.entries.Lcz_BookedBy}:`, content: `${this.booking.guest.first_name} ${this.booking.guest.last_name}` }, this.booking.guest?.nbr_confirmed_bookings > 1 && !this.booking.agent && (h("div", { key: '9444a325ebaa5c27145f27e26296ff5a87ec7bf0', class: 'm-0 p-0 ', slot: "prefix" }, h("wa-tooltip", { key: '79b9df853a1f470f72966ed89cbc5837683431a7', for: "guests_nbr_confirmed_bookings" }, `${locales.entries.Lcz_BookingsNbr}`.replace('%1', this.booking.guest.nbr_confirmed_bookings.toString())), h("div", { key: '4b0c074d124212a0258c3eefa10b0e490a8cab44', style: { color: '#FB0AAD' }, id: "guests_nbr_confirmed_bookings" }, h("span", { key: 'ad8143987f9999a7e369f894387d594e9a3bc08c' }, " ", this.booking.guest.nbr_confirmed_bookings), h("wa-icon", { key: '509b5ef85b4882e1328977e10b83650c578e3980', name: "heart", style: { color: '#FB0AAD' } }))))), h("wa-tooltip", { key: 'b78e92b0cfd4f7977d90b1f8fc0d6a987464e011', for: `edit_guest-details` }, "Edit guest details"), h("ir-custom-button", { key: 'cd9fbbc678204d6f79c7ffca1cc06169ed3fb27b', iconBtn: true, id: `edit_guest-details`, onClickHandler: e => this.handleEditClick(e, 'guest'), appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: '4194dfc398bffd4e213a3a6542474e7d9cddc979', name: "edit", label: "Edit guest details", style: { fontSize: '1rem' } }))), h("div", { key: 'c4a892edc4ae471b7e3715ed08a1c35de0727d3a', class: "reservation-information__row" }, h("ir-label", { key: 'c4df76080b45e225d742f3f1019d49f244bc66f6', labelText: `Company:`, placeholder: 'No company name provided', content: `${this.booking.company_name ?? ''}${this.booking.company_tax_nbr ? ` - ${this.booking.company_tax_nbr}` : ''}`, display: 'flex' }), h("wa-tooltip", { key: '730c1a21b9015b3b08cbe800660dcb1a804fe604', for: `edit_create-company-info` }, "Add company info"), h("ir-custom-button", { key: 'a85d18609937308797ecc979718d2530c5e85f23', iconBtn: true, id: `edit_create-company-info`, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.irBookingCompanyFormRef.openCompanyForm();
            }, appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: '3ff1597cb0484ca793918f5011ae12312f368e59', name: "edit", label: "Add or modify company info", style: { fontSize: '1rem' } }))), this.booking.guest.mobile && h("ir-label", { key: '4b7dc3478414324ff6159206a03c6c29f06cea0a', labelText: `${locales.entries.Lcz_Phone}:`, content: this.renderPhoneNumber() }), !this.booking.agent && h("ir-label", { key: '810183d6215fa3638a6661f90ef2cbba15993182', labelText: `${locales.entries.Lcz_Email}:`, content: this.booking.guest.email }), this.booking.guest.alternative_email && h("ir-label", { key: '6d1a4cd16ce46feabc7e610fb528038f266d6f93', labelText: `${locales.entries.Lcz_AlternativeEmail}:`, content: this.booking.guest.alternative_email }), this.booking?.guest?.address && h("ir-label", { key: 'ee5a7d74577bad86705d851493a3bd4143632dd6', labelText: `${locales.entries.Lcz_Address}:`, content: this.booking.guest.address }), this.userCountry && (h("ir-label", { key: 'c0fc6b6142639ac5278f4ea8a230c8bbc3ba2092', labelText: `${locales.entries.Lcz_Country}:`, isCountryImage: true, content: this.userCountry.name, image: { src: this.userCountry.flag, alt: this.userCountry.name } })), this.booking.guest?.notes && h("ir-label", { key: '9913424b09c38d10fc7d66b475267c9cef48ce62', display: "inline", labelText: `${locales.entries.Lcz_GuestPrivateNote}:`, content: this.booking.guest?.notes }), this.booking.is_direct && h("ir-label", { key: 'dadbdcf04ba03ed17cc250208be52513cd44ee46', labelText: `${locales.entries.Lcz_ArrivalTime}:`, content: this.booking.arrival.description }), this.booking.promo_key && h("ir-label", { key: 'e98f3d966b081af8230be98f89fd3bcf60ae6e19', labelText: `${locales.entries.Lcz_Coupon}:`, content: this.booking.promo_key }), this.booking.is_in_loyalty_mode && !this.booking.promo_key && (h("div", { key: 'cc9cd8eaaffd33a24929f25ca99edeb4cf895655', class: "d-flex align-items-center" }, h("svg", { key: '87c9b779f3c04715074ba0b9392686c18d4db285', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '0edf397af8d4e68c8e79673babc7742fba54e902', fill: "#fc6c85", d: "M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" })), h("p", { key: '124556a8e4937b3b680adc3b140727aee5dbb027', class: "m-0 p-0 ml-1" }, locales.entries.Lcz_LoyaltyDiscountApplied))), this.booking.is_direct ? (h("ir-label", { labelText: `${locales.entries.Lcz_GuestRemark}:`, display: "inline", content: this.booking.remark })) : (h("ota-label", { class: 'm-0 p-0', label: `${locales.entries.Lcz_ChannelNotes || 'Channel notes'}:`, remarks: this.booking.ota_notes, maxVisibleItems: this.booking.ota_notes?.length })), h("div", { key: '908bfd90fd73b903e5940c5e144d5609380e3295', class: "reservation-information__row" }, h("ir-label", { key: 'dba1300ce7b16fd2677fba1d2e1c0222a615a53c', labelText: `${locales.entries.Lcz_BookingPrivateNote}:`, placeholder: locales.entries.Lcz_VisibleToHotelOnly, content: privateNote, display: privateNote ? 'inline' : 'flex' }), h("wa-tooltip", { key: 'a95ca4e7a62fc946d22c1b34c01de11b9f8c9648', for: `edit_create-extra-note` }, privateNote ? 'Edit' : 'Create', " private note"), h("ir-custom-button", { key: '30482ef6e7e80c2655eb6d872f75bc27fa09aaf4', iconBtn: true, id: `edit_create-extra-note`, onClickHandler: () => {
                this.irBookingExtraNoteRef.openDialog();
            }, appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: 'b4c67ecaf2c23092383f6cd45207c4c6875da179', style: { fontSize: '1rem' }, name: "edit", label: "Edit or create private note" }))), h("ir-booking-extra-note", { key: 'c04ca5d0a26df9372d746ce633eddca8a86dd93d', booking: this.booking, ref: el => (this.irBookingExtraNoteRef = el) }), h("ir-booking-company-form", { key: 'ffdfa6a6360b25dd0bb2fabbf721dbc2f9ba0cd4', booking: this.booking, ref: el => (this.irBookingCompanyFormRef = el) }))));
    }
    static get style() { return IrReservationInformationStyle0; }
}, [2, "ir-reservation-information", {
        "booking": [16],
        "countries": [16],
        "userCountry": [32],
        "isOpen": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-reservation-information", "ir-booking-company-form", "ir-booking-extra-note", "ir-custom-button", "ir-custom-input", "ir-dialog", "ir-label", "ota-label"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-reservation-information":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrReservationInformation);
            }
            break;
        case "ir-booking-company-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-booking-extra-note":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-custom-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-dialog":
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