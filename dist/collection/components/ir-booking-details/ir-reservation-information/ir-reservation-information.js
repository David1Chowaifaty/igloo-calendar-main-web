import locales from "../../../stores/locales.store";
import { getPrivateNote } from "../../../utils/booking";
import { h } from "@stencil/core";
import { _formatDate, _formatTime } from "../functions";
// Hover over WaButtonJsxProps: you should see an `onClick?` property.
// If you don't, the global .d.ts file isn't being loaded.
export class IrReservationInformation {
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
        return (h("wa-card", { key: '124bf2a79a952a6f8a39c87b357e8d7859233f96' }, h("div", { key: '6ee0326b1f51f51161d1ffde86fed7d1b4155349', class: "reservation-information", ref: el => (this.reservationInformationEl = el) }, h("p", { key: '22826f5a7678c0e230bf9a3897fcfcfd5cfca1de', class: "reservation-information__property-name" }, this.booking.property.name || ''), h("ir-label", { key: '39604ffd21cbc70f9fd290033d53d2069b132558', labelText: `${locales.entries.Lcz_Source}:`, content: this.booking.origin.Label, image: { src: this.booking.origin.Icon, alt: this.booking.origin.Label } }), h("ir-label", { key: '90870cf94edfc60baaed513bd86e3853a6b79489', renderContentAsHtml: true, labelText: `${locales.entries.Lcz_BookedOn}:`, content: `${_formatDate(this.booking.booked_on.date)}&nbsp&nbsp&nbsp&nbsp${_formatTime(this.booking.booked_on.hour.toString(), this.booking.booked_on.minute.toString())}` }), h("div", { key: 'c7c3cb4d392e9af6d2ea55c674cc9e436ff944b4', class: "reservation-information__row" }, h("ir-label", { key: 'c745607aef1a7a17661f9d97e0101a6d09d207f1', labelText: `${locales.entries.Lcz_BookedBy}:`, content: `${this.booking.guest.first_name} ${this.booking.guest.last_name}` }, this.booking.guest?.nbr_confirmed_bookings > 1 && !this.booking.agent && (h("div", { key: '9291c0f39d257fb06b3e0a88b11986c952ece614', class: 'm-0 p-0 ', slot: "prefix" }, h("wa-tooltip", { key: 'badbeaa634b96bd461fd645569624d2981d1e081', for: "guests_nbr_confirmed_bookings" }, `${locales.entries.Lcz_BookingsNbr}`.replace('%1', this.booking.guest.nbr_confirmed_bookings.toString())), h("div", { key: '9e810f0e384d7169bfb1faf89c6fddab970e16e7', style: { color: '#FB0AAD' }, id: "guests_nbr_confirmed_bookings" }, h("span", { key: 'c74bc7edbb8dcdfc1169143414408abde8b6be8c' }, " ", this.booking.guest.nbr_confirmed_bookings), h("wa-icon", { key: '507060b5168b6be414d7737c7be4218747e0ba23', name: "heart", style: { color: '#FB0AAD' } }))))), h("wa-tooltip", { key: 'd46497261abe0c5206b550ec747d0bf8efe5c06c', for: `edit_guest-details` }, "Edit guest details"), h("ir-custom-button", { key: 'ee6b819d11ce40c6d6bd1f951238053c4389bb07', iconBtn: true, id: `edit_guest-details`, onClickHandler: e => this.handleEditClick(e, 'guest'), appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: '0a1033850a5076737fd94defb8862222698f64b4', name: "edit", label: "Edit guest details", style: { fontSize: '1rem' } }))), h("div", { key: 'b6b16227faa624733d16302e01bfa69e45b0324b', class: "reservation-information__row" }, h("ir-label", { key: '31e71344f94d56fd995e5b2c344ae4359db9fb33', labelText: `Company:`, placeholder: 'No company name provided', content: `${this.booking.company_name ?? ''}${this.booking.company_tax_nbr ? ` - ${this.booking.company_tax_nbr}` : ''}`, display: 'flex' }), h("wa-tooltip", { key: '024761f3099ea71cff27240261fc6f110839b6b2', for: `edit_create-company-info` }, "Add company info"), h("ir-custom-button", { key: '16822af3b0cfe031ee1d3f64789f4ce7fec25050', iconBtn: true, id: `edit_create-company-info`, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.irBookingCompanyFormRef.openCompanyForm();
            }, appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: '76d19df5d7d0b1b2c5f2c1c620db389441511fc6', name: "edit", label: "Add or modify company info", style: { fontSize: '1rem' } }))), this.booking.guest.mobile && h("ir-label", { key: 'c02d5c2728529aafeb7bb122d01beed609a78ec8', labelText: `${locales.entries.Lcz_Phone}:`, content: this.renderPhoneNumber() }), !this.booking.agent && h("ir-label", { key: 'fe1556435e5a1ddc8fc1aa4962d710abf42c621e', labelText: `${locales.entries.Lcz_Email}:`, content: this.booking.guest.email }), this.booking.guest.alternative_email && h("ir-label", { key: '1c66f8448cd37f602914cd9610f8af5e277cbc51', labelText: `${locales.entries.Lcz_AlternativeEmail}:`, content: this.booking.guest.alternative_email }), this.booking?.guest?.address && h("ir-label", { key: '5f755642d0f92140ed7fcd0f2b3cc7977b8a49f4', labelText: `${locales.entries.Lcz_Address}:`, content: this.booking.guest.address }), this.userCountry && (h("ir-label", { key: 'e81d0f1317e458b0d4f8e63f8e24637fdd9d8300', labelText: `${locales.entries.Lcz_Country}:`, isCountryImage: true, content: this.userCountry.name, image: { src: this.userCountry.flag, alt: this.userCountry.name } })), this.booking.guest?.notes && h("ir-label", { key: '7685af747be5617a8b0c50b680b7d66525a0ff7b', display: "inline", labelText: `${locales.entries.Lcz_GuestPrivateNote}:`, content: this.booking.guest?.notes }), this.booking.is_direct && h("ir-label", { key: 'f00f94476ca918766560579d848c013e3d1d7a88', labelText: `${locales.entries.Lcz_ArrivalTime}:`, content: this.booking.arrival.description }), this.booking.promo_key && h("ir-label", { key: '20267fd6005ccaf5d0a9e15ca7e014f95b120b05', labelText: `${locales.entries.Lcz_Coupon}:`, content: this.booking.promo_key }), this.booking.is_in_loyalty_mode && !this.booking.promo_key && (h("div", { key: '9116eedef6403da385ae3c17ca36b654bcf1a722', class: "d-flex align-items-center" }, h("svg", { key: 'b616e4145fd324f12e523627a95bbe3e690d27aa', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '52e516e88d3cff05fafc7791b8e3bf15277cc892', fill: "#fc6c85", d: "M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" })), h("p", { key: 'ce60afbdf2025264d348fc94e2befe9353579829', class: "m-0 p-0 ml-1" }, locales.entries.Lcz_LoyaltyDiscountApplied))), this.booking.is_direct ? (h("ir-label", { labelText: `${locales.entries.Lcz_GuestRemark}:`, display: "inline", content: this.booking.remark })) : (h("ota-label", { class: 'm-0 p-0', label: `${locales.entries.Lcz_ChannelNotes || 'Channel notes'}:`, remarks: this.booking.ota_notes, maxVisibleItems: this.booking.ota_notes?.length })), h("div", { key: 'fdae99dd2d5a37ad4ab122672b87c3f968ab5d02', class: "reservation-information__row" }, h("ir-label", { key: '35d48b6081e65a4e1b8e32bb8b467f32831bb82f', labelText: `${locales.entries.Lcz_BookingPrivateNote}:`, placeholder: locales.entries.Lcz_VisibleToHotelOnly, content: privateNote, display: privateNote ? 'inline' : 'flex' }), h("wa-tooltip", { key: '0f5fad25ec41452374fcc26748083dfe2bce2c9f', for: `edit_create-extra-note` }, privateNote ? 'Edit' : 'Create', " private note"), h("ir-custom-button", { key: '11a43dbc87fe5048a214b277afc3adff2b5f55ba', iconBtn: true, id: `edit_create-extra-note`, onClickHandler: () => {
                this.irBookingExtraNoteRef.openDialog();
            }, appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: '11e9feefbe51217a75db978ee7d819eaa92e574c', style: { fontSize: '1rem' }, name: "edit", label: "Edit or create private note" }))), h("ir-booking-extra-note", { key: 'd230285ed559f0e2cb2329fb1b157c2f5c1690a6', booking: this.booking, ref: el => (this.irBookingExtraNoteRef = el) }), h("ir-booking-company-dialog", { key: '54f789c380279d69af17633bd122dbf9ffb7a2f8', booking: this.booking, ref: el => (this.irBookingCompanyFormRef = el) }))));
    }
    static get is() { return "ir-reservation-information"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-reservation-information.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-reservation-information.css"]
        };
    }
    static get properties() {
        return {
            "booking": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Booking",
                    "resolved": "Booking",
                    "references": {
                        "Booking": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Booking"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
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
                    "text": ""
                },
                "getter": false,
                "setter": false
            }
        };
    }
    static get states() {
        return {
            "userCountry": {},
            "isOpen": {}
        };
    }
    static get events() {
        return [{
                "method": "openSidebar",
                "name": "openSidebar",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "OpenSidebarEvent<any>",
                    "resolved": "{ type: BookingDetailsSidebarEvents; payload?: any; }",
                    "references": {
                        "OpenSidebarEvent": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-booking-details/types.ts::OpenSidebarEvent"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=ir-reservation-information.js.map
