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
        var _a, _b, _c, _d, _e, _f, _g;
        return (h("div", { key: 'c0e322049cd64d129cf89e43b4c7a79a41e9d021', class: "card" }, h("div", { key: '8a89dd1221a9b12aa21577ec586e1372478d995e', class: "p-1" }, h("p", { key: '65a72056dbee1e716b3190e3eec992e6af521fe9' }, this.booking.property.name || ''), h("ir-label", { key: '336cd41b993edc5a144486f3e8ee64f6d616b5e9', labelText: `${locales.entries.Lcz_Source}:`, content: this.booking.origin.Label, image: { src: this.booking.origin.Icon, alt: this.booking.origin.Label } }), h("ir-label", { key: 'a664040e862bb1e99f9b2efa0dbf0be20f85ac4d', renderContentAsHtml: true, labelText: `${locales.entries.Lcz_BookedOn}:`, content: `${_formatDate(this.booking.booked_on.date)}&nbsp&nbsp&nbsp&nbsp${_formatTime(this.booking.booked_on.hour.toString(), this.booking.booked_on.minute.toString())}` }), h("ir-label", { key: '3c45fbbf44dc99778a263b8f146fe17b21803574', labelText: `${locales.entries.Lcz_BookedBy}:`, content: `${this.booking.guest.first_name} ${this.booking.guest.last_name}` }, ((_a = this.booking.guest) === null || _a === void 0 ? void 0 : _a.nbr_confirmed_bookings) > 0 && (h("div", { key: '905a7aea8cdc551fa226be4b0c9556263b297cbf', class: 'm-0 p-0', slot: "prefix" }, h("ir-tooltip", { key: '0a0cec813882f3c3c103bc0642a815b98d044c7d', message: `${locales.entries.Lcz_BookingsNbr}`.replace('%1', this.booking.guest.nbr_confirmed_bookings.toString()), customSlot: true }, h("div", { key: '01673bffce520b11713a12b91fd6fdc33bab266a', class: "d-flex align-items-center m-0 p-0", slot: "tooltip-trigger", style: { gap: '0.25rem' } }, h("p", { key: '85e0fbf45cc02d83465838683cd642f5ca25ced2', class: 'p-0 m-0', style: { color: '#FB0AAD' } }, this.booking.guest.nbr_confirmed_bookings), h("ir-icons", { key: '59c9cfec532b32f1ad7f7ca2e60951abb06fcd60', style: { '--icon-size': '1rem' }, color: "#FB0AAD", name: "heart-fill" }))))), h("ir-button", { key: 'da523c474c8f76a4226b8b3d03e03f04478c96a6', slot: "suffix", variant: "icon", icon_name: 'edit', style: Object.assign(Object.assign({}, colorVariants.secondary), { '--icon-size': '1.1rem' }), onClickHandler: e => this.handleEditClick(e, 'guest') })), this.booking.guest.mobile && h("ir-label", { key: '10b1fd1c4fb094a1d9c439783eb67ab29d1b1b10', labelText: `${locales.entries.Lcz_Phone}:`, content: this.renderPhoneNumber() }), h("ir-label", { key: '15e0b0b060e0597addb101a3cd2da08473003a88', labelText: `${locales.entries.Lcz_Email}:`, content: this.booking.guest.email }), this.booking.guest.alternative_email && h("ir-label", { key: '2d149fa046f4df57c90d347541e35aa84e319cc3', labelText: `${locales.entries.Lcz_AlternativeEmail}:`, content: this.booking.guest.alternative_email }), ((_c = (_b = this.booking) === null || _b === void 0 ? void 0 : _b.guest) === null || _c === void 0 ? void 0 : _c.address) && h("ir-label", { key: '18f2836074cbaf9a3f3751a2a163a89df99fff32', labelText: `${locales.entries.Lcz_Address}:`, content: this.booking.guest.address }), this.userCountry && (h("ir-label", { key: '46f725b0eba7b0dcdd1ddc490ef3a1997047cdb8', labelText: `${locales.entries.Lcz_Country}:`, isCountryImage: true, content: this.userCountry.name, image: { src: this.userCountry.flag, alt: this.userCountry.name } })), ((_d = this.booking.guest) === null || _d === void 0 ? void 0 : _d.notes) && h("ir-label", { key: 'dc21694b013d5b0f8973c00b3942f9ef4e6dbea6', labelText: `${locales.entries.Lcz_GuestPrivateNote}:`, content: (_e = this.booking.guest) === null || _e === void 0 ? void 0 : _e.notes }), this.booking.is_direct && h("ir-label", { key: 'ca07bdef5cd1ea1f3d565cad42bcc8e19f3a71f9', labelText: `${locales.entries.Lcz_ArrivalTime}:`, content: this.booking.arrival.description }), this.booking.promo_key && h("ir-label", { key: 'e250fcc3cf9d3aea7719a39bf8598ebdb2692c81', labelText: `${locales.entries.Lcz_Coupon}:`, content: this.booking.promo_key }), this.booking.agent && h("ir-label", { key: '937d16a7a493af4ab3f0dad08b8c3e4ca1beb515', labelText: `${(_f = locales.entries.Lcz_AgentCode) === null || _f === void 0 ? void 0 : _f.split(':')[0]}:`, content: this.booking.agent.name }), this.booking.is_in_loyalty_mode && !this.booking.promo_key && (h("div", { key: 'aa7c99912d6cc99bb8f5bb509d76769ad5520657', class: "d-flex align-items-center" }, h("svg", { key: '30356e5bd3018d5cdb3c24a4c46c6d67f4fec45d', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '9f2eeb19f5ec869e571d4634c00f1c972c0366ff', fill: "#fc6c85", d: "M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" })), h("p", { key: '6f7a087c0207eabf2be4f95e93c7086ebaec5564', class: "m-0 p-0 ml-1" }, locales.entries.Lcz_LoyaltyDiscountApplied))), this.booking.is_direct ? (h("ir-label", { class: 'm-0 p-0', labelText: `${locales.entries.Lcz_Note}:`, content: this.booking.remark })) : (h("ota-label", { class: 'm-0 p-0', label: `${locales.entries.Lcz_Note}:`, remarks: this.booking.ota_notes, maxVisibleItems: (_g = this.booking.ota_notes) === null || _g === void 0 ? void 0 : _g.length })), h("div", { key: 'cf5566acc48294085eec14b4a432504d44599406', class: "d-flex align-items-center justify-content-between" }, h("ir-label", { key: 'bf2c1594560f9ab20c883654b616ebc22cfbf31f', labelText: `${locales.entries.Lcz_PrivateNote}:`, placeholder: locales.entries.Lcz_VisibleToHotelOnly, content: getPrivateNote(this.booking.extras) }), h("ir-button", { key: 'e523bddf9ca8173f05c76198d94eb70525e80ca3', variant: "icon", icon_name: "edit", style: colorVariants.secondary, onClickHandler: e => this.handleEditClick(e, 'extra_note') })))));
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
