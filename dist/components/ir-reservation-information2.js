import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { l as locales } from './locales.store.js';
import { o as getPrivateNote } from './booking.js';
import { a as _formatDate, _ as _formatTime } from './functions.js';
import { d as defineCustomElement$9 } from './ir-arrival-time-dialog2.js';
import { d as defineCustomElement$8 } from './ir-booking-company-dialog2.js';
import { d as defineCustomElement$7 } from './ir-booking-company-form2.js';
import { d as defineCustomElement$6 } from './ir-booking-extra-note2.js';
import { d as defineCustomElement$5 } from './ir-custom-button2.js';
import { d as defineCustomElement$4 } from './ir-dialog2.js';
import { d as defineCustomElement$3 } from './ir-input2.js';
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
    arrivalTime;
    userCountry = null;
    isOpen;
    openSidebar;
    reservationInformationEl;
    irBookingCompanyFormRef;
    irBookingExtraNoteRef;
    irArrivalTimeDialogRef;
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
        return (h("wa-card", { key: '4b6129ba77a858d5650b4284b37dd8fe4b38b496' }, h("div", { key: 'ec2c35ccf4c7753cbd00e17a7171d1c34a51888f', class: "reservation-information", ref: el => (this.reservationInformationEl = el) }, h("p", { key: '1f3710d702aa324012ee2ac8b31524b6fc54cac9', class: "reservation-information__property-name" }, this.booking.property.name || ''), h("ir-label", { key: '30caf50fa3241e0d3959705a0a32ded8850b5203', renderContentAsHtml: true, labelText: `${locales.entries.Lcz_BookedOn}:`, content: `${_formatDate(this.booking.booked_on.date)}&nbsp&nbsp&nbsp&nbsp${_formatTime(this.booking.booked_on.hour.toString(), this.booking.booked_on.minute.toString())}` }), h("div", { key: 'a0e86309dad6a90a3468bc102f4a507f2f2eb204', class: "reservation-information__row" }, h("ir-label", { key: '0b8df06d308b65b527153d51ee188c7abc58bf57', labelText: `${locales.entries.Lcz_BookedBy}:`, content: `${this.booking.guest.first_name} ${this.booking.guest.last_name}` }, this.booking.guest?.nbr_confirmed_bookings > 1 && !this.booking.agent && (h("div", { key: '82bfc280160140819b7d4fe7a8994c3520832c4c', class: 'm-0 p-0 ', slot: "prefix" }, h("wa-tooltip", { key: 'afd8018c478ffe5b9310d0af5b62daa77ac615db', for: "guests_nbr_confirmed_bookings" }, `${locales.entries.Lcz_BookingsNbr}`.replace('%1', this.booking.guest.nbr_confirmed_bookings.toString())), h("div", { key: '30346c870ab05c358fa530a27428333ebe906d06', style: { color: '#FB0AAD' }, id: "guests_nbr_confirmed_bookings" }, h("span", { key: '5d0baba0a074526736e3fdfefcad71b022b63325' }, " ", this.booking.guest.nbr_confirmed_bookings), h("wa-icon", { key: '16041929bb961a27d892658f99eed41c196ff6eb', name: "heart", style: { color: '#FB0AAD' } }))))), h("wa-tooltip", { key: '848a8b078e7a55706f87cb4bd76eeb6a6847c35b', for: `edit_guest-details` }, "Edit guest details"), h("ir-custom-button", { key: '2bd71cf42cf710a0dc33c52f79629f8fbf8a2ef9', iconBtn: true, id: `edit_guest-details`, onClickHandler: e => this.handleEditClick(e, 'guest'), appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: 'cd89319b3d6c15f9e578d9e506156510bd2450f2', name: "edit", label: "Edit guest details", style: { fontSize: '1rem' } }))), !this.booking.agent && (h("div", { key: '50b3176cf91e9fdf9098d7c805231727e09b5dd2', class: "reservation-information__row" }, h("ir-label", { key: 'eeff154778d1db82a772b85819b4e46169fd0aa1', labelText: `Company:`, placeholder: 'No company name provided', content: `${this.booking.company_name ?? ''}${this.booking.company_tax_nbr ? ` - ${this.booking.company_tax_nbr}` : ''}`, display: 'flex' }), h("wa-tooltip", { key: '75986d7e98cddaa3f8f79eebdbe48bba5142555a', for: `edit_create-company-info` }, "Add company info"), h("ir-custom-button", { key: 'f10df5856f61d8ee2106f32b2f2734989d21ce62', iconBtn: true, id: `edit_create-company-info`, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.irBookingCompanyFormRef.openCompanyForm();
            }, appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: '57c28064167b97c1e37d31626654dafccbe29cfe', name: "edit", label: "Add or modify company info", style: { fontSize: '1rem' } })))), this.booking.guest.mobile && h("ir-label", { key: 'e8ee50cbfa9b29e1de214f9f48b05916351178ae', labelText: `${locales.entries.Lcz_Phone}:`, content: this.renderPhoneNumber() }), !this.booking.agent && h("ir-label", { key: '8cac526e28ab8a3904ca929d5b35045722873d5d', labelText: `${locales.entries.Lcz_Email}:`, content: this.booking.guest.email }), this.booking.guest.alternative_email && h("ir-label", { key: 'eb33afa7da54755485e37d70b5b961c988d8e7eb', labelText: `${locales.entries.Lcz_AlternativeEmail}:`, content: this.booking.guest.alternative_email }), this.booking?.guest?.address && h("ir-label", { key: '5e39d06dd7fdbe28b43dc624c1de146160d0d7a9', labelText: `${locales.entries.Lcz_Address}:`, content: this.booking.guest.address }), this.userCountry && (h("ir-label", { key: 'a7c32222aad7026fac24188bb0d28067ce6e5097', labelText: `${locales.entries.Lcz_Country}:`, isCountryImage: true, content: this.userCountry.name, image: { src: this.userCountry.flag, alt: this.userCountry.name } })), this.booking.guest?.notes && h("ir-label", { key: '8863c2ebba4b53ee9a05e8213a0354073612ba35', display: "inline", labelText: `${locales.entries.Lcz_GuestPrivateNote}:`, content: this.booking.guest?.notes }), this.booking.is_direct && (h("div", { key: '6ee31c8df55faa3ddb36a1b51af505b5de6beec8', class: "reservation-information__row" }, h("ir-label", { key: 'ad8dbbf9f31b711aab7d20ac5eaf56a55480bfee', labelText: `${locales.entries.Lcz_ArrivalTime}:`, display: "flex", content: this.booking.arrival.description }), h("wa-tooltip", { key: '9be75565c21b17a0a19352799f88dc90fa2fbf0c', for: `edit_arrival_time` }, "Edit arrival time"), h("ir-custom-button", { key: 'de35411eaca63202bf0610ccacf469bc437895c4', iconBtn: true, id: `edit_arrival_time`, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.irArrivalTimeDialogRef.openDialog();
            }, appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: '5b5b274093beb9ef96b3dc86aa0472e2ec35afe5', name: "edit", label: "Edit arrival time", style: { fontSize: '1rem' } })))), this.booking.promo_key && h("ir-label", { key: '3ea16fb2866ced940942e79b4dff48cf40a0abd7', labelText: `${locales.entries.Lcz_Coupon}:`, content: this.booking.promo_key }), this.booking.is_in_loyalty_mode && !this.booking.promo_key && (h("div", { key: 'f84c7611a349e4d12fbdf3fcb933eef3f8a1ad80', class: "d-flex align-items-center" }, h("svg", { key: 'd39b0b16476be53d4bae99f6da7c9d14ff0ce091', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'c62f41d9a279d20b8d12243e1c9e1d5fa6457852', fill: "#fc6c85", d: "M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" })), h("p", { key: 'bd3303b184ed1b359c7c82d20ca9b21b40d7fe25', class: "m-0 p-0 ml-1" }, locales.entries.Lcz_LoyaltyDiscountApplied))), this.booking.is_direct ? (h("ir-label", { labelText: `${locales.entries.Lcz_GuestRemark}:`, display: "inline", content: this.booking.remark })) : (h("ota-label", { class: 'm-0 p-0', label: `${locales.entries.Lcz_ChannelNotes || 'Channel notes'}:`, remarks: this.booking.ota_notes, maxVisibleItems: this.booking.ota_notes?.length })), h("div", { key: '02f7d64ae58f90ec2fc149e1c0a5ee958663aef3', class: "reservation-information__row" }, h("ir-label", { key: '3112166a8e19922783ce4eb2d9068e4b40c4f90a', labelText: `${locales.entries.Lcz_BookingPrivateNote}:`, placeholder: locales.entries.Lcz_VisibleToHotelOnly, content: privateNote, display: privateNote ? 'inline' : 'flex' }), h("wa-tooltip", { key: 'b067d54175afaaae004dafd98afca6f5631ad36f', for: `edit_create-extra-note` }, privateNote ? 'Edit' : 'Create', " private note"), h("ir-custom-button", { key: 'fa55ad07c8446ff02af6a1283326c5a3df2cd270', iconBtn: true, id: `edit_create-extra-note`, onClickHandler: () => {
                this.irBookingExtraNoteRef.openDialog();
            }, appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: 'f3bd27db8b455d74ac465ea581df0ee367dda635', style: { fontSize: '1rem' }, name: "edit", label: "Edit or create private note" }))), h("ir-booking-extra-note", { key: '503216a239ccf005830da2923de46330ca366e7d', booking: this.booking, ref: el => (this.irBookingExtraNoteRef = el) }), h("ir-booking-company-dialog", { key: '8f0729fee64f185081875b29a58b8d3d5e43980c', booking: this.booking, ref: el => (this.irBookingCompanyFormRef = el) })), h("ir-arrival-time-dialog", { key: 'ec5018449a34451190543007b1141fd2dba00b4a', booking: this.booking, arrivalTime: this.arrivalTime, ref: el => (this.irArrivalTimeDialogRef = el) })));
    }
    static get style() { return IrReservationInformationStyle0; }
}, [2, "ir-reservation-information", {
        "booking": [16],
        "countries": [16],
        "arrivalTime": [16],
        "userCountry": [32],
        "isOpen": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-reservation-information", "ir-arrival-time-dialog", "ir-booking-company-dialog", "ir-booking-company-form", "ir-booking-extra-note", "ir-custom-button", "ir-dialog", "ir-input", "ir-label", "ota-label"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-reservation-information":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrReservationInformation);
            }
            break;
        case "ir-arrival-time-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-booking-company-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
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
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-input":
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