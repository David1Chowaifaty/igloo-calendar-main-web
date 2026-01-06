import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { l as locales } from './locales.store.js';
import { o as getPrivateNote } from './booking.js';
import { a as _formatDate, _ as _formatTime } from './functions.js';
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
        return (h("wa-card", { key: '2ef3171d7e3e14197badfa34790054b41ad7e847' }, h("div", { key: '88c3c08ab507ce7d36df4d73cee6ee6c54b61b43', class: "reservation-information", ref: el => (this.reservationInformationEl = el) }, h("p", { key: '3040403b4e9018cf9a3573e055fd1a95d42648eb', class: "reservation-information__property-name" }, this.booking.property.name || ''), h("ir-label", { key: '73c483a3729d158412ce4127d4434330d99585bb', labelText: `${locales.entries.Lcz_Source}:`, content: this.booking.origin.Label, image: { src: this.booking.origin.Icon, alt: this.booking.origin.Label } }), h("ir-label", { key: 'f16c2ebcba1db6ea03ab57caab5002a77b1aea64', renderContentAsHtml: true, labelText: `${locales.entries.Lcz_BookedOn}:`, content: `${_formatDate(this.booking.booked_on.date)}&nbsp&nbsp&nbsp&nbsp${_formatTime(this.booking.booked_on.hour.toString(), this.booking.booked_on.minute.toString())}` }), h("div", { key: 'a67c93dce517bed151cc26a0fe89e7446c49ead0', class: "reservation-information__row" }, h("ir-label", { key: '958278c02acc556048f2def3d5df7f799287c9dc', labelText: `${locales.entries.Lcz_BookedBy}:`, content: `${this.booking.guest.first_name} ${this.booking.guest.last_name}` }, this.booking.guest?.nbr_confirmed_bookings > 1 && !this.booking.agent && (h("div", { key: '7fad7e31e68c84b7b74123e75a777557423e97fb', class: 'm-0 p-0 ', slot: "prefix" }, h("wa-tooltip", { key: 'f392de5305e35b2a1762ffd59fa1f347cbb82806', for: "guests_nbr_confirmed_bookings" }, `${locales.entries.Lcz_BookingsNbr}`.replace('%1', this.booking.guest.nbr_confirmed_bookings.toString())), h("div", { key: 'f5696c176bce9af8aa902706d63ddccd9593bcf3', style: { color: '#FB0AAD' }, id: "guests_nbr_confirmed_bookings" }, h("span", { key: 'fef3e45e3135c45876e0d59cd9a448bf65564071' }, " ", this.booking.guest.nbr_confirmed_bookings), h("wa-icon", { key: 'b5efb19d0b4626443768c9f6cac69d7ea790a27a', name: "heart", style: { color: '#FB0AAD' } }))))), h("wa-tooltip", { key: '69651e4c8d94f6459b63f9c04d9ed8ed4c3c17a5', for: `edit_guest-details` }, "Edit guest details"), h("ir-custom-button", { key: '19dc8767cf430f2589600814a57dddb135f63e75', iconBtn: true, id: `edit_guest-details`, onClickHandler: e => this.handleEditClick(e, 'guest'), appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: 'c84884524e6630e1e6203b3c927d1ad15021ad60', name: "edit", label: "Edit guest details", style: { fontSize: '1rem' } }))), h("div", { key: '1430d1864bd5152a96a619e16ff2a1d925900a97', class: "reservation-information__row" }, h("ir-label", { key: 'e85a70ffd99d44cd45ac8da86f3ba5bfb513c80c', labelText: `Company:`, placeholder: 'No company name provided', content: `${this.booking.company_name ?? ''}${this.booking.company_tax_nbr ? ` - ${this.booking.company_tax_nbr}` : ''}`, display: 'flex' }), h("wa-tooltip", { key: '16ff17f58256479b063755d1d89361314ea884be', for: `edit_create-company-info` }, "Add company info"), h("ir-custom-button", { key: 'f05128432a37d02e713409a80fae9cde51cf49c6', iconBtn: true, id: `edit_create-company-info`, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.irBookingCompanyFormRef.openCompanyForm();
            }, appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: '58afc31669142cc8945b43904d54e8287012a10c', name: "edit", label: "Add or modify company info", style: { fontSize: '1rem' } }))), this.booking.guest.mobile && h("ir-label", { key: '83a91065b98d12e7004a01eaaa98cbdf752cb3a1', labelText: `${locales.entries.Lcz_Phone}:`, content: this.renderPhoneNumber() }), !this.booking.agent && h("ir-label", { key: 'c481009ba7aec2483b333c923aceb34daed44bea', labelText: `${locales.entries.Lcz_Email}:`, content: this.booking.guest.email }), this.booking.guest.alternative_email && h("ir-label", { key: '5f023ff3e2555a546794a08ea7acac4ea22d70cd', labelText: `${locales.entries.Lcz_AlternativeEmail}:`, content: this.booking.guest.alternative_email }), this.booking?.guest?.address && h("ir-label", { key: '0cfb66208eba14ef8cfedf521a2e9fac3494eeee', labelText: `${locales.entries.Lcz_Address}:`, content: this.booking.guest.address }), this.userCountry && (h("ir-label", { key: '6fea5a5f429f6ec6987b7274a7ba6a370fecd732', labelText: `${locales.entries.Lcz_Country}:`, isCountryImage: true, content: this.userCountry.name, image: { src: this.userCountry.flag, alt: this.userCountry.name } })), this.booking.guest?.notes && h("ir-label", { key: '84df39a25a8a7cc01d354ee78c5e593113669b1b', display: "inline", labelText: `${locales.entries.Lcz_GuestPrivateNote}:`, content: this.booking.guest?.notes }), this.booking.is_direct && h("ir-label", { key: '5e59c7602acce05a17d702b15e7550aa376ad13a', labelText: `${locales.entries.Lcz_ArrivalTime}:`, content: this.booking.arrival.description }), this.booking.promo_key && h("ir-label", { key: 'efa18eda586b175d20125cb08c378974789fdcb3', labelText: `${locales.entries.Lcz_Coupon}:`, content: this.booking.promo_key }), this.booking.is_in_loyalty_mode && !this.booking.promo_key && (h("div", { key: '374ac1b2d17aae31c1d66eae246cd2cb635d1059', class: "d-flex align-items-center" }, h("svg", { key: 'c125b01f74d6e68dca33a819f9187f31c8dbf6c6', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '2abbc1f2876f551eb8ac595510a921f8f20c626e', fill: "#fc6c85", d: "M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" })), h("p", { key: 'cffd0be1b9a1b1780786aa49b4336ac2d44201b5', class: "m-0 p-0 ml-1" }, locales.entries.Lcz_LoyaltyDiscountApplied))), this.booking.is_direct ? (h("ir-label", { labelText: `${locales.entries.Lcz_GuestRemark}:`, display: "inline", content: this.booking.remark })) : (h("ota-label", { class: 'm-0 p-0', label: `${locales.entries.Lcz_ChannelNotes || 'Channel notes'}:`, remarks: this.booking.ota_notes, maxVisibleItems: this.booking.ota_notes?.length })), h("div", { key: '599434f30f2e4e58e9b181a2d36efe94ba00084d', class: "reservation-information__row" }, h("ir-label", { key: '87567b0f1bb48493bed70b641fcbe450069fba9a', labelText: `${locales.entries.Lcz_BookingPrivateNote}:`, placeholder: locales.entries.Lcz_VisibleToHotelOnly, content: privateNote, display: privateNote ? 'inline' : 'flex' }), h("wa-tooltip", { key: '6facc2d2173df6e08d545e2c12f8c759aec2e987', for: `edit_create-extra-note` }, privateNote ? 'Edit' : 'Create', " private note"), h("ir-custom-button", { key: 'd023a3e3abc01c578a758077f6898269ee6a7998', iconBtn: true, id: `edit_create-extra-note`, onClickHandler: () => {
                this.irBookingExtraNoteRef.openDialog();
            }, appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: 'e7f2876af9b32b2c3cabfa97cba516ce93f3f17b', style: { fontSize: '1rem' }, name: "edit", label: "Edit or create private note" }))), h("ir-booking-extra-note", { key: '51461820bfc0dbd95756e8ea21fd5f5b18101ae3', booking: this.booking, ref: el => (this.irBookingExtraNoteRef = el) }), h("ir-booking-company-dialog", { key: 'c106a3f247fa9c4bb776aa2fbffdeb740c7b72a1', booking: this.booking, ref: el => (this.irBookingCompanyFormRef = el) }))));
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
    const components = ["ir-reservation-information", "ir-booking-company-dialog", "ir-booking-company-form", "ir-booking-extra-note", "ir-custom-button", "ir-dialog", "ir-input", "ir-label", "ota-label"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-reservation-information":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrReservationInformation);
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