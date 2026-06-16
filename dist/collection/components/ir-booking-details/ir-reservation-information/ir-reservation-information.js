import locales from "../../../stores/locales.store";
import { getPrivateNote } from "../../../utils/booking";
import { h } from "@stencil/core";
import { _formatDate, _formatTime } from "../functions";
// Hover over WaButtonJsxProps: you should see an `onClick?` property.
// If you don't, the global .d.ts file isn't being loaded.
export class IrReservationInformation {
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
        return (h("wa-card", { key: 'eb0d699cdb6ede71b6b8e109c2a097190fb3d871' }, h("div", { key: 'a03b78f634e9a61bcc5dcf42b78b122f24b63bde', class: "reservation-information", ref: el => (this.reservationInformationEl = el) }, h("p", { key: 'af9b45ad0a371dbe0e1c6b2841d5209733f9a2a2', class: "reservation-information__property-name" }, this.booking.property.name || ''), h("ir-label", { key: 'f14d4ceb84dccd1240c31841f84b5ab2d35a3996', renderContentAsHtml: true, labelText: `${locales.entries.Lcz_BookedOn}:`, content: `${_formatDate(this.booking.booked_on.date)}&nbsp&nbsp&nbsp&nbsp${_formatTime(this.booking.booked_on.hour.toString(), this.booking.booked_on.minute.toString())}` }), h("div", { key: 'bf5b48c67de0d897e7217df0122592f6eadd382a', class: "reservation-information__row" }, h("ir-label", { key: 'b219465dc3b1dce9be55941c77870b060bd24088', labelText: `${locales.entries.Lcz_BookedBy}:`, content: `${this.booking.guest.first_name} ${this.booking.guest.last_name}` }, this.booking.guest?.nbr_confirmed_bookings > 1 && !this.booking.agent && (h("div", { key: '40775f2f7bc276b4e1a27a74d4ae610bb4f37d5d', class: 'm-0 p-0 ', slot: "prefix" }, h("wa-tooltip", { key: '965e19d3ad51d7660e53f00d362f724323aed4f1', for: "guests_nbr_confirmed_bookings" }, `${locales.entries.Lcz_BookingsNbr}`.replace('%1', this.booking.guest.nbr_confirmed_bookings.toString())), h("div", { key: '818692173d60c4f3d146c39e1cc13f52092a6fec', style: { color: '#FB0AAD' }, id: "guests_nbr_confirmed_bookings" }, h("span", { key: '8d0fb24e33e022af1c6dcbc75881d46bd66bc385' }, " ", this.booking.guest.nbr_confirmed_bookings), h("wa-icon", { key: '351968cdbfd12fb0c5b902d17386fb1f11aa49b6', name: "heart", style: { color: '#FB0AAD' } }))))), h("wa-tooltip", { key: '7037c1c57369bc1a56486dcfdafbcb1e2b57018e', for: `edit_guest-details` }, "Edit guest details"), h("ir-custom-button", { key: 'b86a74cdd64773bd8edeb7c1bec8b984e7d014a0', iconBtn: true, id: `edit_guest-details`, onClickHandler: e => this.handleEditClick(e, 'guest'), appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: 'e4c694b21f466a88583b8e17d4637a37b005c31f', name: "edit", label: "Edit guest details", style: { fontSize: '1rem' } }))), !this.booking.agent && (h("div", { key: '1f9f1734b2e822ae508d1a87503fca041fffff88', class: "reservation-information__row" }, h("ir-label", { key: '26fe2eacdd1d3ca5fbe6e31823eb812739d7ecef', labelText: `Company:`, placeholder: 'No company name provided', content: `${this.booking.company_name ?? ''}${this.booking.company_tax_nbr ? ` - ${this.booking.company_tax_nbr}` : ''}`, display: 'flex' }), h("wa-tooltip", { key: '13c9d34b0914f88c017f3bec4e7b754819318d24', for: `edit_create-company-info` }, "Add company info"), h("ir-custom-button", { key: '99979bdf9767242a8f9d0741d034245be2e3c871', iconBtn: true, id: `edit_create-company-info`, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.irBookingCompanyFormRef.openCompanyForm();
            }, appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: '6df38770feb23b89cd2b6e4790473640dec69de7', name: "edit", label: "Add or modify company info", style: { fontSize: '1rem' } })))), this.booking.guest.mobile && h("ir-label", { key: '64d174ae1c5174a3ea60c7058b80b7e532d3587f', labelText: `${locales.entries.Lcz_Phone}:`, content: this.renderPhoneNumber() }), !this.booking.agent && h("ir-label", { key: '026fe496c437629be39a24ff443dab865ea2b7fa', labelText: `${locales.entries.Lcz_Email}:`, content: this.booking.guest.email }), this.booking.guest.alternative_email && h("ir-label", { key: '458cd1096eaec53007aa67200e541019897372fc', labelText: `${locales.entries.Lcz_AlternativeEmail}:`, content: this.booking.guest.alternative_email }), this.booking?.guest?.address && h("ir-label", { key: '22cf93170d575019a1588383e0cf8af4772dda74', labelText: `${locales.entries.Lcz_Address}:`, content: this.booking.guest.address }), this.userCountry && (h("ir-label", { key: 'f87aa74db71fe53e0bafa04f11b602dc4cd3ab39', labelText: `${locales.entries.Lcz_Country}:`, isCountryImage: true, content: this.userCountry.name, image: { src: this.userCountry.flag, alt: this.userCountry.name } })), this.booking.guest?.notes && h("ir-label", { key: 'd2cd7f021edfc114166e506d39d7d19d1da5f461', display: "inline", labelText: `${locales.entries.Lcz_GuestPrivateNote}:`, content: this.booking.guest?.notes }), this.booking.is_direct && (h("div", { key: '4e4efe433fc67e6e258a853c43654d30d389125e', class: "reservation-information__row" }, h("ir-label", { key: '613fd23f2928df28d6bf9b038b07c399b59677d3', labelText: `${locales.entries.Lcz_ArrivalTime}:`, display: "flex", content: this.booking.arrival.description }), h("wa-tooltip", { key: '5e12e06011b1ccbc1ea9a4512a69097c5739fb08', for: `edit_arrival_time` }, "Edit arrival time"), h("ir-custom-button", { key: '50e5f61165074033d7b022c2cc4e57a4ce30a7d7', iconBtn: true, id: `edit_arrival_time`, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.irArrivalTimeDialogRef.openDialog();
            }, appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: '75353866d2dba178229cb1123def09a74e99007e', name: "edit", label: "Edit arrival time", style: { fontSize: '1rem' } })))), this.booking.promo_key && h("ir-label", { key: 'edf41d485e55dbfa19f7d4326ecb5aee3a4c820b', labelText: `${locales.entries.Lcz_Coupon}:`, content: this.booking.promo_key }), this.booking.is_in_loyalty_mode && !this.booking.promo_key && (h("div", { key: '864570197aad148541d230daef89279b389f2e87', class: "d-flex align-items-center" }, h("svg", { key: '966d562472c09cccc31663c7a85294d6f803bf51', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '7279425965bab12e05ed8fb210f0de06a3949e51', fill: "#fc6c85", d: "M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" })), h("p", { key: '67b5f4635e8fb054b22c8740b6516ec5ac9440f7', class: "m-0 p-0 ml-1" }, locales.entries.Lcz_LoyaltyDiscountApplied))), this.booking.is_direct ? (h("ir-label", { labelText: `${locales.entries.Lcz_GuestRemark}:`, display: "inline", content: this.booking.remark })) : (h("ota-label", { class: 'm-0 p-0 reservation-information__channel-notes', label: `${locales.entries.Lcz_ChannelNotes || 'Channel notes'}:`, remarks: this.booking.ota_notes, maxVisibleItems: this.booking.ota_notes?.length })), h("div", { key: '7570b13bed743545b2cb772d851d1acb1a54aa67', class: "reservation-information__row" }, h("ir-label", { key: '1e46791fd00cde8cac254aa77d80336bce42a9f1', labelText: `${locales.entries.Lcz_BookingPrivateNote}:`, placeholder: locales.entries.Lcz_VisibleToHotelOnly, content: privateNote, display: privateNote ? 'inline' : 'flex' }), h("wa-tooltip", { key: '59da3a034cf8eae2697a142715c82d911010b8f3', for: `edit_create-extra-note` }, privateNote ? 'Edit' : 'Create', " private note"), h("ir-custom-button", { key: 'ae83617225be9a222650e7becedb05f09355e0b6', iconBtn: true, id: `edit_create-extra-note`, onClickHandler: () => {
                this.irBookingExtraNoteRef.openDialog();
            }, appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: '830f5810863acaf00c0bd2fdc9c1b1b9b21f9e76', style: { fontSize: '1rem' }, name: "edit", label: "Edit or create private note" }))), h("ir-booking-extra-note", { key: '7aa774c8ee39373a8b3bf0f1c09fede48b466241', booking: this.booking, ref: el => (this.irBookingExtraNoteRef = el) }), h("ir-booking-company-dialog", { key: '834daa983189033c5f5a03c4e222b682fe9c25fe', booking: this.booking, ref: el => (this.irBookingCompanyFormRef = el) })), h("ir-arrival-time-dialog", { key: 'e835d60f71ecb2ca8615d21dab6144e6b1f4840e', booking: this.booking, arrivalTime: this.arrivalTime, ref: el => (this.irArrivalTimeDialogRef = el) })));
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
            },
            "arrivalTime": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IEntries[]",
                    "resolved": "IEntries[]",
                    "references": {
                        "IEntries": {
                            "location": "import",
                            "path": "@/models/IBooking",
                            "id": "src/models/IBooking.ts::IEntries"
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
