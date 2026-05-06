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
        return (h("wa-card", { key: '70a5aab87d6a0d3ddc9812d93371ece7b5cf46b1' }, h("div", { key: '7eebaa4fcf95bceb6c7263c3772c152d776a7028', class: "reservation-information", ref: el => (this.reservationInformationEl = el) }, h("p", { key: 'dd38b9294be53051678127d9e95d722c76766796', class: "reservation-information__property-name" }, this.booking.property.name || ''), h("ir-label", { key: '5ce8b08bfcc8037cb040a9eab587571252a610d1', renderContentAsHtml: true, labelText: `${locales.entries.Lcz_BookedOn}:`, content: `${_formatDate(this.booking.booked_on.date)}&nbsp&nbsp&nbsp&nbsp${_formatTime(this.booking.booked_on.hour.toString(), this.booking.booked_on.minute.toString())}` }), h("div", { key: '1a45cead6c02033ce4f760b4cd3bbfa69258d778', class: "reservation-information__row" }, h("ir-label", { key: '8e95231343b59e06fac20e754180e94e97eb1551', labelText: `${locales.entries.Lcz_BookedBy}:`, content: `${this.booking.guest.first_name} ${this.booking.guest.last_name}` }, this.booking.guest?.nbr_confirmed_bookings > 1 && !this.booking.agent && (h("div", { key: '7782a381b45ae816175b1ebd097113acc3ecea15', class: 'm-0 p-0 ', slot: "prefix" }, h("wa-tooltip", { key: '56d84b57a082c59d48c2c8a112497542f53e43fb', for: "guests_nbr_confirmed_bookings" }, `${locales.entries.Lcz_BookingsNbr}`.replace('%1', this.booking.guest.nbr_confirmed_bookings.toString())), h("div", { key: '7c1699de1ee6ae65c01dd60f7225043bbb2bfb8d', style: { color: '#FB0AAD' }, id: "guests_nbr_confirmed_bookings" }, h("span", { key: '37aea50b869197cd1fa893a42176c208947decea' }, " ", this.booking.guest.nbr_confirmed_bookings), h("wa-icon", { key: 'bbd745f6f55d3aeea20e41b830d26a5caf8e4e21', name: "heart", style: { color: '#FB0AAD' } }))))), h("wa-tooltip", { key: '61552621d34aa8000410882b46a4854dae580d5c', for: `edit_guest-details` }, "Edit guest details"), h("ir-custom-button", { key: '6e6f0afe8368bd76094ff6ba67bb8305c64ff80c', iconBtn: true, id: `edit_guest-details`, onClickHandler: e => this.handleEditClick(e, 'guest'), appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: '835fb5134d25ec9261288c582d3c7d683b70aad4', name: "edit", label: "Edit guest details", style: { fontSize: '1rem' } }))), !this.booking.agent && (h("div", { key: '604b4b90db4814bc0ab2f298d8bc5e2602d7b2ec', class: "reservation-information__row" }, h("ir-label", { key: '5f49afb7861cbc257c95f84a307b61d65333b6e0', labelText: `Company:`, placeholder: 'No company name provided', content: `${this.booking.company_name ?? ''}${this.booking.company_tax_nbr ? ` - ${this.booking.company_tax_nbr}` : ''}`, display: 'flex' }), h("wa-tooltip", { key: '1356c546a08f393f190b8a88d77eee58f31b96e7', for: `edit_create-company-info` }, "Add company info"), h("ir-custom-button", { key: '8be194ef7339be9c206f813a37c76e9dae9cdc29', iconBtn: true, id: `edit_create-company-info`, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.irBookingCompanyFormRef.openCompanyForm();
            }, appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: '5a6f5ef1d4cc497d3090921d3ab60f78d57f1bf5', name: "edit", label: "Add or modify company info", style: { fontSize: '1rem' } })))), this.booking.guest.mobile && h("ir-label", { key: '013ff3b57a19c07b75fa73262bc26d564af648a0', labelText: `${locales.entries.Lcz_Phone}:`, content: this.renderPhoneNumber() }), !this.booking.agent && h("ir-label", { key: '78cfdac53fa2aa39ab35eb88b89ccb975da15893', labelText: `${locales.entries.Lcz_Email}:`, content: this.booking.guest.email }), this.booking.guest.alternative_email && h("ir-label", { key: '75ffef2cf429754b1b3842c39cbc3bc3191aac1a', labelText: `${locales.entries.Lcz_AlternativeEmail}:`, content: this.booking.guest.alternative_email }), this.booking?.guest?.address && h("ir-label", { key: '0fb97c4bf10fa3ec07a4f9f12511497cc37cc43e', labelText: `${locales.entries.Lcz_Address}:`, content: this.booking.guest.address }), this.userCountry && (h("ir-label", { key: '1e5b4a059790c889e62fc2a0278296320ef663bf', labelText: `${locales.entries.Lcz_Country}:`, isCountryImage: true, content: this.userCountry.name, image: { src: this.userCountry.flag, alt: this.userCountry.name } })), this.booking.guest?.notes && h("ir-label", { key: '26f2b62eea5a78d4abe01a8d0e65963a60d2e6c0', display: "inline", labelText: `${locales.entries.Lcz_GuestPrivateNote}:`, content: this.booking.guest?.notes }), this.booking.is_direct && (h("div", { key: 'f84e8ebbce4fb7bc3f2c70d54dbc5ff6f4549ed1', class: "reservation-information__row" }, h("ir-label", { key: '6148efd71435ea671ea45f667ae627915f408095', labelText: `${locales.entries.Lcz_ArrivalTime}:`, display: "flex", content: this.booking.arrival.description }), h("wa-tooltip", { key: '2c932640c11147630e001f3b18e9768c89dcb46c', for: `edit_arrival_time` }, "Edit arrival time"), h("ir-custom-button", { key: '509c76d13a82446c0a2582ef35b2ccca2502a51b', iconBtn: true, id: `edit_arrival_time`, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.irArrivalTimeDialogRef.openDialog();
            }, appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: '90d46b0bbd0b12c571e0a843cbc885a3edfb64b3', name: "edit", label: "Edit arrival time", style: { fontSize: '1rem' } })))), this.booking.promo_key && h("ir-label", { key: 'cb133e9466ac71f29f432d0e3caa528d11bced8a', labelText: `${locales.entries.Lcz_Coupon}:`, content: this.booking.promo_key }), this.booking.is_in_loyalty_mode && !this.booking.promo_key && (h("div", { key: '14f2cfc0e6e5ae56ae8a30dcc1f74399a6c37f8b', class: "d-flex align-items-center" }, h("svg", { key: '13328b8b9dc17e4064c3688b7b14d26c5f892ec2', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'a65d15e883ede2c7f33ce09a70fb3075df9e74be', fill: "#fc6c85", d: "M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" })), h("p", { key: 'ea798af3c23cb75623b088df46811ff27a9af5fd', class: "m-0 p-0 ml-1" }, locales.entries.Lcz_LoyaltyDiscountApplied))), this.booking.is_direct ? (h("ir-label", { labelText: `${locales.entries.Lcz_GuestRemark}:`, display: "inline", content: this.booking.remark })) : (h("ota-label", { class: 'm-0 p-0', label: `${locales.entries.Lcz_ChannelNotes || 'Channel notes'}:`, remarks: this.booking.ota_notes, maxVisibleItems: this.booking.ota_notes?.length })), h("div", { key: 'aaf7c7e5117ec2b15c29a7ae0a541e6b64d09e71', class: "reservation-information__row" }, h("ir-label", { key: 'e4383488266e9a166296b3deb8a7cf2c95b2bd90', labelText: `${locales.entries.Lcz_BookingPrivateNote}:`, placeholder: locales.entries.Lcz_VisibleToHotelOnly, content: privateNote, display: privateNote ? 'inline' : 'flex' }), h("wa-tooltip", { key: '4dcd2f7b83e3e94a84ef44c73bfd898d0c38afa5', for: `edit_create-extra-note` }, privateNote ? 'Edit' : 'Create', " private note"), h("ir-custom-button", { key: 'c427418df9793785b291262489644aac5a19040e', iconBtn: true, id: `edit_create-extra-note`, onClickHandler: () => {
                this.irBookingExtraNoteRef.openDialog();
            }, appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: 'ca041ee72ed715563a570197e6e8a676d3b5c5e3', style: { fontSize: '1rem' }, name: "edit", label: "Edit or create private note" }))), h("ir-booking-extra-note", { key: '2277dfdf6bc6991a7c404f8f19961c34a164a838', booking: this.booking, ref: el => (this.irBookingExtraNoteRef = el) }), h("ir-booking-company-dialog", { key: '144b16eee17f55fb328a4a0ee3e680aad4563b4c', booking: this.booking, ref: el => (this.irBookingCompanyFormRef = el) })), h("ir-arrival-time-dialog", { key: '5084bced3111913c921ff904f6e4145327bf72c1', booking: this.booking, arrivalTime: this.arrivalTime, ref: el => (this.irArrivalTimeDialogRef = el) })));
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
