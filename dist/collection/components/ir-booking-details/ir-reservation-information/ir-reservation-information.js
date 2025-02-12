import { colorVariants } from "../../ui/ir-icons/icons";
import locales from "../../../stores/locales.store";
import { getPrivateNote } from "../../../utils/booking";
import { h } from "@stencil/core";
import { _formatDate, _formatTime } from "../functions";
export class IrReservationInformation {
    constructor() {
        this.booking = undefined;
        this.countries = undefined;
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
        return (h("div", { key: '2852c02672891b6bdb34c8af704e19d6293944d5', class: "card" }, h("div", { key: '3774c9160d15747589aebcd0eeb04499a5defbe9', class: "p-1" }, h("p", { key: 'd082adf58b140de98ebea87344a959086bf25e1d' }, this.booking.property.name || ''), h("ir-label", { key: 'd044208bbe9836c110fc7a220e4e7c01ff725d51', labelText: `${locales.entries.Lcz_Source}:`, content: this.booking.origin.Label, image: { src: this.booking.origin.Icon, alt: this.booking.origin.Label } }), h("ir-label", { key: '00b9327c4b994ef6f0760a9c64ecf8a5a668d3be', renderContentAsHtml: true, labelText: `${locales.entries.Lcz_BookedOn}:`, content: `${_formatDate(this.booking.booked_on.date)}&nbsp&nbsp&nbsp&nbsp${_formatTime(this.booking.booked_on.hour.toString(), this.booking.booked_on.minute.toString())}` }), h("ir-label", { key: '7a56114482a2c5b9a341a88644386494b6d1cc0b', labelText: `${locales.entries.Lcz_BookedBy}:`, content: `${this.booking.guest.first_name} ${this.booking.guest.last_name}` }, ((_a = this.booking.guest) === null || _a === void 0 ? void 0 : _a.nbr_confirmed_bookings) > 1 && !this.booking.agent && (h("div", { key: '3ee54aae9d2f83bbdad72c3ceb1b63ed1d5fc012', class: 'm-0 p-0', slot: "prefix" }, h("ir-tooltip", { key: 'f7c0e7c73dc710d4ed441beb96b21623ba81f0ef', message: `${locales.entries.Lcz_BookingsNbr}`.replace('%1', this.booking.guest.nbr_confirmed_bookings.toString()), customSlot: true }, h("div", { key: '37e123ef65ea30f178d0f69d9ead742d61dac70f', class: "d-flex align-items-center m-0 p-0", slot: "tooltip-trigger", style: { gap: '0.25rem' } }, h("p", { key: '9d2866ec81840b65729b2c0db3b443e120d8b3aa', class: 'p-0 m-0', style: { color: '#FB0AAD' } }, this.booking.guest.nbr_confirmed_bookings), h("ir-icons", { key: '239c9c26162bb26c0b2732f1d2edc7e0b2f7997e', style: { '--icon-size': '1rem' }, color: "#FB0AAD", name: "heart-fill" }))))), h("ir-button", { key: '57d49f1e5075dca8afc940b8c13fb6f476ef3da7', slot: "suffix", variant: "icon", icon_name: 'edit', style: Object.assign(Object.assign({}, colorVariants.secondary), { '--icon-size': '1.1rem' }), onClickHandler: e => this.handleEditClick(e, 'guest') })), this.booking.guest.mobile && h("ir-label", { key: '755063cd873bbbcbbe2903d84c02fb460de718d7', labelText: `${locales.entries.Lcz_Phone}:`, content: this.renderPhoneNumber() }), !this.booking.agent && h("ir-label", { key: '6f829d5e67a11d06fa8493dcb37d12a0b5db1c79', labelText: `${locales.entries.Lcz_Email}:`, content: this.booking.guest.email }), this.booking.guest.alternative_email && h("ir-label", { key: '106f7f1f62faafca50b6b9b793734278399bcc4b', labelText: `${locales.entries.Lcz_AlternativeEmail}:`, content: this.booking.guest.alternative_email }), ((_c = (_b = this.booking) === null || _b === void 0 ? void 0 : _b.guest) === null || _c === void 0 ? void 0 : _c.address) && h("ir-label", { key: 'cb07a1fc3c43ea9f0d0eb6180ad3501db4e127d4', labelText: `${locales.entries.Lcz_Address}:`, content: this.booking.guest.address }), this.userCountry && (h("ir-label", { key: 'cfb738b59bf93a94427c279aac3035ddcba1c7d2', labelText: `${locales.entries.Lcz_Country}:`, isCountryImage: true, content: this.userCountry.name, image: { src: this.userCountry.flag, alt: this.userCountry.name } })), ((_d = this.booking.guest) === null || _d === void 0 ? void 0 : _d.notes) && h("ir-label", { key: '0bb08923cee2765438112477f17269e0359a48b6', display: "inline", labelText: `${locales.entries.Lcz_GuestPrivateNote}:`, content: (_e = this.booking.guest) === null || _e === void 0 ? void 0 : _e.notes }), this.booking.is_direct && h("ir-label", { key: '78fa17cb9a6c6ea8a53dcef4bced73153ff02dae', labelText: `${locales.entries.Lcz_ArrivalTime}:`, content: this.booking.arrival.description }), this.booking.promo_key && h("ir-label", { key: '437f8dc3ce62b44ab8b2bf7fe2bb88d1c634a927', labelText: `${locales.entries.Lcz_Coupon}:`, content: this.booking.promo_key }), this.booking.is_in_loyalty_mode && !this.booking.promo_key && (h("div", { key: 'edd0ef05537573b689fcd119227ba46b679883cb', class: "d-flex align-items-center" }, h("svg", { key: '3d4bc14f2c3f7fa9723156c20c5f310e5d782f8c', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '900d397b7da18b7f5d97805a353b45ee2638a0f3', fill: "#fc6c85", d: "M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" })), h("p", { key: '085ab09ef3a32ffe4074b27cb419d720ecfe37fc', class: "m-0 p-0 ml-1" }, locales.entries.Lcz_LoyaltyDiscountApplied))), this.booking.is_direct ? (h("ir-label", { labelText: `${locales.entries.Lcz_GuestRemark}:`, display: "inline", content: this.booking.remark })) : (h("ota-label", { class: 'm-0 p-0', label: `${locales.entries.Lcz_ChannelNotes || 'Channel notes'}:`, remarks: this.booking.ota_notes, maxVisibleItems: (_f = this.booking.ota_notes) === null || _f === void 0 ? void 0 : _f.length })), h("div", { key: '085dcdc805cf43d22cf96de65edf3c0e8faeefdc', class: "d-flex align-items-center justify-content-between" }, h("ir-label", { key: '2383e355b65605a265e989e5891d0606fb75942b', labelText: `${locales.entries.Lcz_BookingPrivateNote}:`, placeholder: locales.entries.Lcz_VisibleToHotelOnly, content: privateNote, display: privateNote ? 'inline' : 'flex' }), h("ir-button", { key: '37433faa2b70d0755321a4542731e8676d65f68c', variant: "icon", icon_name: "edit", style: colorVariants.secondary, onClickHandler: e => this.handleEditClick(e, 'extra_note') })))));
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
                }
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
                }
            }
        };
    }
    static get states() {
        return {
            "userCountry": {}
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
                    "original": "OpenSidebarEvent",
                    "resolved": "{ type: BookingDetailsSidebarEvents; payload?: unknown; }",
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
