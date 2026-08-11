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
        return (h("wa-card", { key: '4c84a2a42e1916e6aa8ae3c736eced0fe4f2165b', appearance: "plain", class: "reservation-information__card" }, h("div", { key: 'c1080689f49732bf065094ff65d30093edea77ca', class: "reservation-information", ref: el => (this.reservationInformationEl = el) }, h("p", { key: 'd7c93e7d2c833ff42924593648b4f2f61986662a', class: "reservation-information__property-name" }, this.booking.property.name || ''), h("ir-label", { key: '09c903f3632b492fe2e7a9093d977e4b0d0c2207', renderContentAsHtml: true, labelText: `${locales.entries.Lcz_BookedOn}:`, content: `${_formatDate(this.booking.booked_on.date)}&nbsp&nbsp&nbsp&nbsp${_formatTime(this.booking.booked_on.hour.toString(), this.booking.booked_on.minute.toString())}` }), h("div", { key: '0d072ef39985ab61faa9942d31e0b7ecd743ff14', class: "reservation-information__row" }, h("ir-label", { key: '49496fc7b85a8820667c43221da6db4043b97454', labelText: `${locales.entries.Lcz_BookedBy}:`, content: `${this.booking.guest.first_name} ${this.booking.guest.last_name}` }, this.booking.guest?.nbr_confirmed_bookings > 1 && !this.booking.agent && (h("div", { key: '4efc100c090bc5dede514db7efc7a302d1d32c14', class: 'm-0 p-0 ', slot: "prefix" }, h("wa-tooltip", { key: '897439c423971f9a83188cbe01c94a5c1c3da2bf', for: "guests_nbr_confirmed_bookings" }, `${locales.entries.Lcz_BookingsNbr}`.replace('%1', this.booking.guest.nbr_confirmed_bookings.toString())), h("div", { key: '3824b867d900a9f91b3838b3a5ec51665db67731', style: { color: '#FB0AAD' }, id: "guests_nbr_confirmed_bookings" }, h("span", { key: '36cb0affdc09e2f12ec30579ee8ef45ac1273bef' }, " ", this.booking.guest.nbr_confirmed_bookings), h("wa-icon", { key: '030ac302f425ece1ca72582b6eaf139ad013006a', name: "heart", style: { color: '#FB0AAD' } }))))), h("wa-tooltip", { key: 'ffc0ed7c105829d4ed71ecc1aa46f3fdc1628a1a', for: `edit_guest-details` }, "Edit guest details"), h("ir-custom-button", { key: 'd7770dcc463c4d1c7e8dc797ba18554450c29cd5', iconBtn: true, id: `edit_guest-details`, onClickHandler: e => this.handleEditClick(e, 'guest'), appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: '38d9a97ad74b4b3720a4195cad0e1a86df2c2ffc', name: "edit", label: "Edit guest details", style: { fontSize: '1rem' } }))), !this.booking.agent && (h("div", { key: '9b2325147bd03cdff32f85d8250fdc4bf375fd52', class: "reservation-information__row" }, h("ir-label", { key: '2ca37f2a803e5f514e4fed128f647a56f1705782', labelText: `Company:`, placeholder: 'No company name provided', content: `${this.booking.company_name ?? ''}${this.booking.company_tax_nbr ? ` - ${this.booking.company_tax_nbr}` : ''}`, display: 'flex' }), h("wa-tooltip", { key: '4026159e849326a64a0dfa3c92dea3605cd0928f', for: `edit_create-company-info` }, "Add company info"), h("ir-custom-button", { key: 'f01e58f284c1747cbd21cde1a009d819d730c781', iconBtn: true, id: `edit_create-company-info`, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.irBookingCompanyFormRef.openCompanyForm();
            }, appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: '4b73b6e04118bd1e41b7430eb4da23b866bb8424', name: "edit", label: "Add or modify company info", style: { fontSize: '1rem' } })))), this.booking.guest.mobile && h("ir-label", { key: '19c97c2a137340b0308d95b334fa492847c04292', labelText: `${locales.entries.Lcz_Phone}:`, content: this.renderPhoneNumber() }), !this.booking.agent && h("ir-label", { key: '7437ddd17636c35ff835639514963a774fcaa532', labelText: `${locales.entries.Lcz_Email}:`, content: this.booking.guest.email }), this.booking.guest.alternative_email && h("ir-label", { key: 'a974397806475d3c966f001509f1b567612a29d7', labelText: `${locales.entries.Lcz_AlternativeEmail}:`, content: this.booking.guest.alternative_email }), this.booking?.guest?.address && h("ir-label", { key: '57be5881e0a28ef99cfe0ae60034f1b05b1475b9', labelText: `${locales.entries.Lcz_Address}:`, content: this.booking.guest.address }), this.userCountry && (h("ir-label", { key: 'b1c65d1ff70256107eb04868625ddc51188b03ba', labelText: `${locales.entries.Lcz_Country}:`, isCountryImage: true, content: this.userCountry.name, image: { src: this.userCountry.flag, alt: this.userCountry.name } })), this.booking.guest?.notes && h("ir-label", { key: 'f1be89e30f8e04da06230c6f5589b37edfd5feb1', display: "inline", labelText: `${locales.entries.Lcz_GuestPrivateNote}:`, content: this.booking.guest?.notes }), this.booking.promo_key && h("ir-label", { key: '9214b0136278424b967e379d6f2e0e297139bd32', labelText: `${locales.entries.Lcz_Coupon}:`, content: this.booking.promo_key }), this.booking.is_in_loyalty_mode && !this.booking.promo_key && (h("div", { key: '46bb937c9d89aa34d66263cd15dd74f5833c5061', class: "d-flex align-items-center" }, h("svg", { key: '4fa074c00595abe4d6eab7959488a35071b1068c', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'c24e555c73869a20ae0610c120653805c8591841', fill: "#fc6c85", d: "M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" })), h("p", { key: 'e44fb85d7444dadb4256d0942406c2136a385760', class: "m-0 p-0 ml-1" }, locales.entries.Lcz_LoyaltyDiscountApplied))), this.booking.is_direct ? (h("ir-label", { labelText: `${locales.entries.Lcz_GuestRemark}:`, display: "inline", content: this.booking.remark })) : (h("ota-label", { class: 'm-0 p-0 reservation-information__channel-notes', label: `${locales.entries.Lcz_ChannelNotes || 'Channel notes'}:`, remarks: this.booking.ota_notes, maxVisibleItems: this.booking.ota_notes?.length })), h("div", { key: '95cf44a7181c4eb2a1801dcbc0ee436605a5b5bf', class: "reservation-information__row" }, h("ir-label", { key: 'cd42579613802c1b0f9c5cdb6a963996664fb81c', labelText: `${locales.entries.Lcz_BookingPrivateNote}:`, placeholder: locales.entries.Lcz_VisibleToHotelOnly, content: privateNote, display: privateNote ? 'inline' : 'flex' }), h("wa-tooltip", { key: '8fc44463cf73719d9c12107c2762b7284261dd9f', for: `edit_create-extra-note` }, privateNote ? 'Edit' : 'Create', " private note"), h("ir-custom-button", { key: '5e3a89b75f08c6478076b8960041445e0a6e3a27', iconBtn: true, id: `edit_create-extra-note`, onClickHandler: () => {
                this.irBookingExtraNoteRef.openDialog();
            }, appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: '720e305d14ce4254774f5bdacd9e2171d6dfb6ec', style: { fontSize: '1rem' }, name: "edit", label: "Edit or create private note" }))), h("ir-booking-extra-note", { key: '9c68d1d164ddc01b3fff1406978fc27139607ca6', booking: this.booking, ref: el => (this.irBookingExtraNoteRef = el) }), h("ir-booking-company-dialog", { key: 'e1f5a9de272a8c8d3cbe32df93f48b5d43537fb4', booking: this.booking, ref: el => (this.irBookingCompanyFormRef = el) }))));
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
                            "id": "src/models/booking.dto.ts::Booking",
                            "referenceLocation": "Booking"
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
                            "id": "src/models/IBooking.ts::ICountry",
                            "referenceLocation": "ICountry"
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
                    "resolved": "any",
                    "references": {
                        "OpenSidebarEvent": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-booking-details/types.ts::OpenSidebarEvent",
                            "referenceLocation": "OpenSidebarEvent"
                        }
                    }
                }
            }];
    }
}
