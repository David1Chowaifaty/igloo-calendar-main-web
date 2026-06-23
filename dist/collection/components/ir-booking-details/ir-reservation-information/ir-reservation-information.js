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
        return (h("wa-card", { key: '1456c420a2f58c7858df75c9b6b43e7199545a08' }, h("div", { key: '6b18ab236fd8df3951ce65cc7dda7dae30cc8fcd', class: "reservation-information", ref: el => (this.reservationInformationEl = el) }, h("p", { key: '20a939bb4372d6fe057e9f693b1754c5619f9b3c', class: "reservation-information__property-name" }, this.booking.property.name || ''), h("ir-label", { key: '600b8efe40ecc23c81bfa1ee6de05003b184b899', renderContentAsHtml: true, labelText: `${locales.entries.Lcz_BookedOn}:`, content: `${_formatDate(this.booking.booked_on.date)}&nbsp&nbsp&nbsp&nbsp${_formatTime(this.booking.booked_on.hour.toString(), this.booking.booked_on.minute.toString())}` }), h("div", { key: 'dfcfdd85257ffa3ef382c5216074e1cad56a2e27', class: "reservation-information__row" }, h("ir-label", { key: 'd8e191d42494cd93a5183bba283c08950d0853b2', labelText: `${locales.entries.Lcz_BookedBy}:`, content: `${this.booking.guest.first_name} ${this.booking.guest.last_name}` }, this.booking.guest?.nbr_confirmed_bookings > 1 && !this.booking.agent && (h("div", { key: '8ec27272a2c9f78b9e5343ae81b70215779014a3', class: 'm-0 p-0 ', slot: "prefix" }, h("wa-tooltip", { key: '638a0ec5d22598c334a1839ab3add68d48d8bebe', for: "guests_nbr_confirmed_bookings" }, `${locales.entries.Lcz_BookingsNbr}`.replace('%1', this.booking.guest.nbr_confirmed_bookings.toString())), h("div", { key: '5a980123513d73e25c6c27fbbfe026a75b7c82dd', style: { color: '#FB0AAD' }, id: "guests_nbr_confirmed_bookings" }, h("span", { key: '5f862bcb5f84be0892207c1799613c27f18e9f65' }, " ", this.booking.guest.nbr_confirmed_bookings), h("wa-icon", { key: '4b29d91d15a3276d0275057d86e5ac6c92a00b1a', name: "heart", style: { color: '#FB0AAD' } }))))), h("wa-tooltip", { key: '0cd7bf246fde328f7b5a6ea6d7c41d7c6a433928', for: `edit_guest-details` }, "Edit guest details"), h("ir-custom-button", { key: 'd184eb8c8188d358162e99a10e1dc27d71f8e128', iconBtn: true, id: `edit_guest-details`, onClickHandler: e => this.handleEditClick(e, 'guest'), appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: '6f0b8d0f6f540b002d238bca21d0b7f4f2ea6f8a', name: "edit", label: "Edit guest details", style: { fontSize: '1rem' } }))), !this.booking.agent && (h("div", { key: '7a3fa406f593c16eafa8f6f6da3deca5c6a6b31f', class: "reservation-information__row" }, h("ir-label", { key: '015a0c216d4dc9dca4a2a25e6f2bdc85f1212748', labelText: `Company:`, placeholder: 'No company name provided', content: `${this.booking.company_name ?? ''}${this.booking.company_tax_nbr ? ` - ${this.booking.company_tax_nbr}` : ''}`, display: 'flex' }), h("wa-tooltip", { key: '7787f1c15255b04e6042b36404aac7134997f4bc', for: `edit_create-company-info` }, "Add company info"), h("ir-custom-button", { key: 'd52456b90c759ad03d035f61b06f1d8b42b83934', iconBtn: true, id: `edit_create-company-info`, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.irBookingCompanyFormRef.openCompanyForm();
            }, appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: 'f429ead51b33ce171634186df92a1061491653e4', name: "edit", label: "Add or modify company info", style: { fontSize: '1rem' } })))), this.booking.guest.mobile && h("ir-label", { key: 'b3a8131588bf22d39a56bd04a9c32fed633aba1a', labelText: `${locales.entries.Lcz_Phone}:`, content: this.renderPhoneNumber() }), !this.booking.agent && h("ir-label", { key: 'db585c4621ce92ff8b2a171f69cb683179dd418b', labelText: `${locales.entries.Lcz_Email}:`, content: this.booking.guest.email }), this.booking.guest.alternative_email && h("ir-label", { key: '391a7a88e9f8861c4b86bad12133d27bc326ea66', labelText: `${locales.entries.Lcz_AlternativeEmail}:`, content: this.booking.guest.alternative_email }), this.booking?.guest?.address && h("ir-label", { key: 'c2b316b386a9af798a0f7f7e095f0e1904fe18b8', labelText: `${locales.entries.Lcz_Address}:`, content: this.booking.guest.address }), this.userCountry && (h("ir-label", { key: 'feb5e9268102b62c165305661048fc6477ffc7ae', labelText: `${locales.entries.Lcz_Country}:`, isCountryImage: true, content: this.userCountry.name, image: { src: this.userCountry.flag, alt: this.userCountry.name } })), this.booking.guest?.notes && h("ir-label", { key: 'cc1f20d3cc43392cda6affe4321b2e7bd57ede46', display: "inline", labelText: `${locales.entries.Lcz_GuestPrivateNote}:`, content: this.booking.guest?.notes }), this.booking.is_direct && (h("div", { key: '19a3a73b05cbeafdac7a63debfd82d574a34414b', class: "reservation-information__row" }, h("ir-label", { key: '682613d398c9dde9718fa2400ca8d8b4cff65499', labelText: `${locales.entries.Lcz_ArrivalTime}:`, display: "flex", content: this.booking.arrival.description }), h("wa-tooltip", { key: '4595303a98064bdabb758b10aeb70099f3cb7bf2', for: `edit_arrival_time` }, "Edit arrival time"), h("ir-custom-button", { key: 'c7e8f31c6461eda9d65f490eb6287fc1365786db', iconBtn: true, id: `edit_arrival_time`, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.irArrivalTimeDialogRef.openDialog();
            }, appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: 'abdcf0f0b8b00e707b26cbdd4044c23d4122aded', name: "edit", label: "Edit arrival time", style: { fontSize: '1rem' } })))), this.booking.promo_key && h("ir-label", { key: 'fd20d191ba962939112a0898bd7823b41646c6dd', labelText: `${locales.entries.Lcz_Coupon}:`, content: this.booking.promo_key }), this.booking.is_in_loyalty_mode && !this.booking.promo_key && (h("div", { key: '7c7c54ab54c894ccf4b097371eb34ab4b78c33db', class: "d-flex align-items-center" }, h("svg", { key: '285dbe33f117c9f488d3c493c6aeeb1d005328e7', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'e76ac4830b1482a506eb7c171a347490703ba03e', fill: "#fc6c85", d: "M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" })), h("p", { key: 'a39b963d2e9262581474393e1e65615637b8d80b', class: "m-0 p-0 ml-1" }, locales.entries.Lcz_LoyaltyDiscountApplied))), this.booking.is_direct ? (h("ir-label", { labelText: `${locales.entries.Lcz_GuestRemark}:`, display: "inline", content: this.booking.remark })) : (h("ota-label", { class: 'm-0 p-0 reservation-information__channel-notes', label: `${locales.entries.Lcz_ChannelNotes || 'Channel notes'}:`, remarks: this.booking.ota_notes, maxVisibleItems: this.booking.ota_notes?.length })), h("div", { key: '4f30164a49497e55b7697f97702f4d488255f01e', class: "reservation-information__row" }, h("ir-label", { key: '1427e224f48ab92cfb2c0f8ebc3b8dccfa6d7714', labelText: `${locales.entries.Lcz_BookingPrivateNote}:`, placeholder: locales.entries.Lcz_VisibleToHotelOnly, content: privateNote, display: privateNote ? 'inline' : 'flex' }), h("wa-tooltip", { key: '89d2b0b19f00db898d990a20bb1214b1412460a0', for: `edit_create-extra-note` }, privateNote ? 'Edit' : 'Create', " private note"), h("ir-custom-button", { key: 'f31eefa9ba02a8c482fb7d4a9cea675324d9cee8', iconBtn: true, id: `edit_create-extra-note`, onClickHandler: () => {
                this.irBookingExtraNoteRef.openDialog();
            }, appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: '0787ed95affef35edb764a3c711f8a588b247f97', style: { fontSize: '1rem' }, name: "edit", label: "Edit or create private note" }))), h("ir-booking-extra-note", { key: '120c4a90b39d450779d43f5792697f21d65fa638', booking: this.booking, ref: el => (this.irBookingExtraNoteRef = el) }), h("ir-booking-company-dialog", { key: '9c03bcb48cf4986624b5e41fa276cde7c9395b99', booking: this.booking, ref: el => (this.irBookingCompanyFormRef = el) })), h("ir-arrival-time-dialog", { key: '8a83a8209dc5301c62af6bdeea52512052aedfc3', booking: this.booking, arrivalTime: this.arrivalTime, ref: el => (this.irArrivalTimeDialogRef = el) })));
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
                            "id": "src/models/IBooking.ts::IEntries",
                            "referenceLocation": "IEntries"
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
