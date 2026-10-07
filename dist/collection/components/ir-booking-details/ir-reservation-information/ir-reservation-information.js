import { getPrivateNote } from "../../../utils/booking";
import { h } from "@stencil/core";
import { _formatDate, _formatTime } from "../functions";
import { t } from "../../../services/locale/t";
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
        return (h("wa-card", { key: '7f1478e3229c272b6b1e679413158f72773a364a', appearance: "plain", class: "reservation-information__card" }, h("div", { key: 'bdd1c37f7b249957497879da8aa9a77c05241e93', class: "reservation-information", ref: el => (this.reservationInformationEl = el) }, h("p", { key: '3b88f59fef2c1eb2aefbf3418991f5e7aa5615fb', class: "reservation-information__property-name" }, this.booking.property.name || ''), h("ir-label", { key: '0d731f0353b1c37dac09a7719088577241b7914b', renderContentAsHtml: true, labelText: `${t('Lcz_BookedOn', { fallback: 'Booked on' })}:`, content: `${_formatDate(this.booking.booked_on.date)}&nbsp&nbsp&nbsp&nbsp${_formatTime(this.booking.booked_on.hour.toString(), this.booking.booked_on.minute.toString())}` }), h("div", { key: 'baf8a4ba18894b8549759d05871292be1ac79420', class: "reservation-information__row" }, h("ir-label", { key: 'db22b75bea3d9bf2c71ef30ed41ff69e8a117611', labelText: `${t('Lcz_BookedBy', { fallback: 'Booked by' })}:`, content: `${this.booking.guest.first_name} ${this.booking.guest.last_name}` }, this.booking.guest?.nbr_confirmed_bookings > 1 && !this.booking.agent && (h("div", { key: '6656a4b558af78ee8aa02894b06d959d814cf7b7', class: 'm-0 p-0 ', slot: "prefix" }, h("wa-tooltip", { key: '9bd9d93089f0e972943abb585150ce9d811172cb', for: "guests_nbr_confirmed_bookings" }, `${t('Lcz_BookingsNbr', { fallback: '%1 bookings' })}`.replace('%1', this.booking.guest.nbr_confirmed_bookings.toString())), h("div", { key: '64170f59425e0dabf730ae907096ac29856bcfea', style: { color: '#FB0AAD' }, id: "guests_nbr_confirmed_bookings" }, h("span", { key: '85173eeeff4d61c949d9d1d733fd0096f65d6d17' }, " ", this.booking.guest.nbr_confirmed_bookings), h("wa-icon", { key: '67c70a837128bb3b781b8247140f32cea2a5396d', name: "heart", style: { color: '#FB0AAD' } }))))), h("wa-tooltip", { key: 'f1da8c84ae1a0b00d27d3adbbe76e685f0c282b1', for: `edit_guest-details` }, t('Lcz_EditGuestDetails', { fallback: 'Edit guest details' })), h("ir-custom-button", { key: 'ee110f33b01c0580ecbf417e2dc63566c346f1e8', iconBtn: true, id: `edit_guest-details`, onClickHandler: e => this.handleEditClick(e, 'guest'), appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: '21ece2ffaba683cb8eaa3dd81e11c42ac860a4d1', name: "edit", label: t('Lcz_EditGuestDetails', { fallback: 'Edit guest details' }), style: { fontSize: '1rem' } }))), !this.booking.agent && (h("div", { key: 'c7fa403b851bfb879eb26277d4e0b955e74538a5', class: "reservation-information__row" }, h("ir-label", { key: 'a3965a3232610a5cb79f07cb9086d50e76c0a91e', labelText: `${t('Lcz_Company', { fallback: 'Company' })}:`, placeholder: t('Lcz_NoCompanyNameProvided', { fallback: 'No company name provided' }), content: `${this.booking.company_name ?? ''}${this.booking.company_tax_nbr ? ` - ${this.booking.company_tax_nbr}` : ''}`, display: 'flex' }), h("wa-tooltip", { key: 'b6c5fb35f7053c4014c8626c313d5cc11182659f', for: `edit_create-company-info` }, t('Lcz_AddCompanyInfo', { fallback: 'Add company info' })), h("ir-custom-button", { key: 'bca1358ec4151a50701f403384a318c38afb11d7', iconBtn: true, id: `edit_create-company-info`, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.irBookingCompanyFormRef.openCompanyForm();
            }, appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: '68bd8821fd912e6c336b496057493c00da428ec1', name: "edit", label: t('Lcz_AddOrModifyCompanyInfo', { fallback: 'Add or modify company info' }), style: { fontSize: '1rem' } })))), h("div", { key: '1fb464132c54e4e19e10b16f3eab15f94603340c', class: 'reservation__info-guest-origins' }, this.userCountry && (h("ir-label", { key: '163e9bf56044f72f70a9753f659995b1c45db70f', labelText: `${t('Lcz_Country', { fallback: 'Country' })}:`, isCountryImage: true, content: this.userCountry.name, image: { src: this.userCountry.flag, alt: this.userCountry.name } })), this.booking.guest.mobile && h("ir-label", { key: 'd0ea5f52841898f462fe84d9b3edad6522005777', labelText: `${t('Lcz_Phone', { fallback: 'Phone' })}:`, content: this.renderPhoneNumber() })), !this.booking.agent && h("ir-label", { key: '2c2331b07bcd70d9e2bd3627b08f907472701f01', labelText: `${t('Lcz_Email', { fallback: 'Email' })}:`, content: this.booking.guest.email }), this.booking.guest.alternative_email && (h("ir-label", { key: '24fa39a11f4f3781c76740c61c2c08db289d7b9f', labelText: `${t('Lcz_AlternativeEmail', { fallback: 'Alternative email' })}:`, content: this.booking.guest.alternative_email })), this.booking?.guest?.address && h("ir-label", { key: '2be2c8044ce6604884257873cc652e212bad5e9d', labelText: `${t('Lcz_Address')}:`, content: this.booking.guest.address }), this.booking.guest?.notes && h("ir-label", { key: 'ebde0ea039b772b6aa3281a2c38f7ebf019c07e5', display: "inline", labelText: `${t('Lcz_GuestPrivateNote')}:`, content: this.booking.guest?.notes }), this.booking.promo_key && h("ir-label", { key: '4182f280aa9fa0d67abbab1f89c4ca4ebb565c75', labelText: `${t('Lcz_Coupon', { fallback: 'Coupon' })}:`, content: this.booking.promo_key }), this.booking.is_in_loyalty_mode && !this.booking.promo_key && (h("div", { key: '9d99e916de50adc3a3181b7131e603aee0918bcd', class: "d-flex align-items-center" }, h("svg", { key: '9df273bfce786fd9f860380dd08d645a6f23e78e', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '52f71ca7a35bb730fc498814f388f4c070cd439a', fill: "#fc6c85", d: "M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" })), h("p", { key: '0c23a1393f2d16a830cab3ace2ea26e078faf81c', class: "m-0 p-0 ir-ms-1" }, t('Lcz_LoyaltyDiscountApplied', { fallback: 'Coupon: %1' })))), this.booking.is_direct ? (h("ir-label", { labelText: `${t('Lcz_GuestRemark')}:`, display: "inline", content: this.booking.remark })) : (h("ota-label", { class: 'm-0 p-0 reservation-information__channel-notes', label: `${t('Lcz_ChannelNotes', { fallback: 'Channel notes' })}:`, remarks: this.booking.ota_notes, maxVisibleItems: this.booking.ota_notes?.length })), h("div", { key: '2146ad1d25507bc8b76e162bfdb305e68ff31c3b', class: "reservation-information__row" }, h("ir-label", { key: 'c37f88c162a3569eac519aaebc5f38eb6d283d28', labelText: `${t('Lcz_BookingPrivateNote')}:`, placeholder: t('Lcz_VisibleToHotelOnly'), content: privateNote, display: privateNote ? 'inline' : 'flex' }), h("wa-tooltip", { key: '33dbeaf77ea53b9ba5f47308fcdc2dad194b3667', for: `edit_create-extra-note` }, t('Lcz_EditCreatePrivateNoteTooltip', {
            fallback: '%1 private note',
            params: [privateNote ? t('Lcz_Edit', { fallback: 'Edit' }) : t('Lcz_Create', { fallback: 'Create' })],
        })), h("ir-custom-button", { key: 'bd51465f07a6f2511f743a167d33dd6f652ab11b', iconBtn: true, id: `edit_create-extra-note`, onClickHandler: () => {
                this.irBookingExtraNoteRef.openDialog();
            }, appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: '5654f329cf3d398d95eee2cd8358ce58320bb188', style: { fontSize: '1rem' }, name: "edit", label: t('Lcz_EditOrCreatePrivateNote', { fallback: 'Edit or create private note' }) })))), h("ir-booking-extra-note", { key: '253373cd466ae48b54e26e48c9cb84bf2b65a9e6', booking: this.booking, ref: el => (this.irBookingExtraNoteRef = el) }), h("ir-booking-company-dialog", { key: '5625f656ebb7622bb8358af2e6cc025b5617e1fd', booking: this.booking, ref: el => (this.irBookingCompanyFormRef = el) })));
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
