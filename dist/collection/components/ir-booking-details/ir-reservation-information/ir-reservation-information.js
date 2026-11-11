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
        return (h("wa-card", { key: 'dd183fdbbb2d8334ef71371ac8fe7141edc1a72b', appearance: "plain", class: "reservation-information__card" }, h("div", { key: '51e0e9640e48e7e48e71df87ae1d1f2e70fd76b4', class: "reservation-information", ref: el => (this.reservationInformationEl = el) }, h("p", { key: 'cbb6a7391515867f0b58845f0c17413e4437e59b', class: "reservation-information__property-name" }, this.booking.property.name || ''), h("ir-label", { key: 'c5df634baf30a67e5e63ee7f80f686af0b6f2b33', renderContentAsHtml: true, labelText: `${t('Lcz_BookedOn', { fallback: 'Booked on' })}:`, content: `${_formatDate(this.booking.booked_on.date)}&nbsp&nbsp&nbsp&nbsp${_formatTime(this.booking.booked_on.hour.toString(), this.booking.booked_on.minute.toString())}` }), h("div", { key: '8d9635ef385941ee105da30f8297614592d5fb7b', class: "reservation-information__row" }, h("ir-label", { key: '5c8ef2dbae5e6c2e6b72dc9559731db7300162a8', labelText: `${t('Lcz_BookedBy', { fallback: 'Booked by' })}:`, content: `${this.booking.guest.first_name} ${this.booking.guest.last_name}` }, this.booking.guest?.nbr_confirmed_bookings > 1 && !this.booking.agent && (h("div", { key: 'f3cf48b29e6ce759308d2a69b37f72e33fa26d53', class: 'm-0 p-0 ', slot: "prefix" }, h("wa-tooltip", { key: 'ba22ae6e517c046c42f5311237afa78f5855c312', for: "guests_nbr_confirmed_bookings" }, `${t('Lcz_BookingsNbr', { fallback: '%1 bookings' })}`.replace('%1', this.booking.guest.nbr_confirmed_bookings.toString())), h("div", { key: '6c150da0f416462d6c581199ac2e9bd38a7faf25', style: { color: '#FB0AAD' }, id: "guests_nbr_confirmed_bookings" }, h("span", { key: 'b45694ce40914d2288bbeb3ef15916075f5fc6e6' }, " ", this.booking.guest.nbr_confirmed_bookings), h("wa-icon", { key: '8dfb3d3d284d04e020c1c932d1142ca6a15ed57d', name: "heart", style: { color: '#FB0AAD' } }))))), h("wa-tooltip", { key: '391ca2c3ebc1bd7e9af92944f471c796279de4c4', for: `edit_guest-details` }, t('Lcz_EditGuestDetails', { fallback: 'Edit guest details' })), h("ir-custom-button", { key: '1efbb70eca308f1ade6224bd15fb20b0e324cc5f', iconBtn: true, id: `edit_guest-details`, onClickHandler: e => this.handleEditClick(e, 'guest'), appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: 'f3fdeb19874d5bda00d693d17710f1c2e9925a04', name: "edit", label: t('Lcz_EditGuestDetails', { fallback: 'Edit guest details' }), style: { fontSize: '1rem' } }))), !this.booking.agent && (h("div", { key: 'b7f89f30b76ae33e8d976c1930228b18e76c8d35', class: "reservation-information__row" }, h("ir-label", { key: '35733c95d37632c9706fe57efa17b03f2500ecfa', labelText: `${t('Lcz_Company', { fallback: 'Company' })}:`, placeholder: t('Lcz_NoCompanyNameProvided', { fallback: 'No company name provided' }), content: `${this.booking.company_name ?? ''}${this.booking.company_tax_nbr ? ` - ${this.booking.company_tax_nbr}` : ''}`, display: 'flex' }), h("wa-tooltip", { key: '96bf093efafea9e9bdbdc9b7bad9d1430f2cb9da', for: `edit_create-company-info` }, t('Lcz_AddCompanyInfo', { fallback: 'Add company info' })), h("ir-custom-button", { key: 'abbf3d3c637b4d08a8f2c8049420c51796c24d0c', iconBtn: true, id: `edit_create-company-info`, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.irBookingCompanyFormRef.openCompanyForm();
            }, appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: '36ec20ef19701dfad242b0b2eb3bccf0c1b362a6', name: "edit", label: t('Lcz_AddOrModifyCompanyInfo', { fallback: 'Add or modify company info' }), style: { fontSize: '1rem' } })))), h("div", { key: '2ad13ba802c98bf7308d2eee1069964be26e2659', class: 'reservation__info-guest-origins' }, this.userCountry && (h("ir-label", { key: '8f9b015e474231a7bf969868495f73dd6f84c5be', labelText: `${t('Lcz_Country', { fallback: 'Country' })}:`, isCountryImage: true, content: this.userCountry.name, image: { src: this.userCountry.flag, alt: this.userCountry.name } })), this.booking.guest.mobile && h("ir-label", { key: 'd1810cdf6ecc6f2e111b1849eb2a5ac62738c392', labelText: `${t('Lcz_Phone', { fallback: 'Phone' })}:`, content: this.renderPhoneNumber() })), !this.booking.agent && h("ir-label", { key: '9ab169a0584dac6c66f593b4264573293dc9c7a9', labelText: `${t('Lcz_Email', { fallback: 'Email' })}:`, content: this.booking.guest.email }), this.booking.guest.alternative_email && (h("ir-label", { key: '027169b55ca1086d1e2a1b08230d0ef68c78793a', labelText: `${t('Lcz_AlternativeEmail', { fallback: 'Alternative email' })}:`, content: this.booking.guest.alternative_email })), this.booking?.guest?.address && h("ir-label", { key: '297da9a92ba1842238959ff8453a1959888f58ac', labelText: `${t('Lcz_Address')}:`, content: this.booking.guest.address }), this.booking.guest?.notes && h("ir-label", { key: 'bbc9b29a58150d699a45dc37300728fdd2e3dd2f', display: "inline", labelText: `${t('Lcz_GuestPrivateNote')}:`, content: this.booking.guest?.notes }), this.booking.promo_key && h("ir-label", { key: '0797bffccd1942e9f7037afa059e5f2da66c61a6', labelText: `${t('Lcz_Coupon', { fallback: 'Coupon' })}:`, content: this.booking.promo_key }), this.booking.is_in_loyalty_mode && !this.booking.promo_key && (h("div", { key: '379b6066ff099b9cc9770c5cff9ba188ccd286db', class: "d-flex align-items-center" }, h("svg", { key: 'ba2294d12a7fde5b2810df1fb48af7573195f56b', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'd7453535b0d387bfe878e0c9b4c6dd7459ded8da', fill: "#fc6c85", d: "M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" })), h("p", { key: '65c6fd0f6c7a9dd5a36afb45da89e11e9be1f706', class: "m-0 p-0 ir-ms-1" }, t('Lcz_LoyaltyDiscountApplied', { fallback: 'Coupon: %1' })))), this.booking.is_direct ? (h("ir-label", { labelText: `${t('Lcz_GuestRemark')}:`, display: "inline", content: this.booking.remark })) : (h("ota-label", { class: 'm-0 p-0 reservation-information__channel-notes', label: `${t('Lcz_ChannelNotes', { fallback: 'Channel notes' })}:`, remarks: this.booking.ota_notes, maxVisibleItems: this.booking.ota_notes?.length })), h("div", { key: '52a3ac704130d8edd71438296f428d2c8096cd89', class: "reservation-information__row" }, h("ir-label", { key: 'f27f5f1f8322253a8a00f32a961cb6c049a1dd60', labelText: `${t('Lcz_BookingPrivateNote')}:`, placeholder: t('Lcz_VisibleToHotelOnly'), content: privateNote, display: privateNote ? 'inline' : 'flex' }), h("wa-tooltip", { key: '1c2363573f80b403a2bae37d7f7a39f6d96bb693', for: `edit_create-extra-note` }, t('Lcz_EditCreatePrivateNoteTooltip', {
            fallback: '%1 private note',
            params: [privateNote ? t('Lcz_Edit', { fallback: 'Edit' }) : t('Lcz_Create', { fallback: 'Create' })],
        })), h("ir-custom-button", { key: 'bb12f579e3628be240dc420b7b355791c231c44e', iconBtn: true, id: `edit_create-extra-note`, onClickHandler: () => {
                this.irBookingExtraNoteRef.openDialog();
            }, appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: '528af911c5a5d000e736ea86da0044a55ee8e55d', style: { fontSize: '1rem' }, name: "edit", label: t('Lcz_EditOrCreatePrivateNote', { fallback: 'Edit or create private note' }) })))), h("ir-booking-extra-note", { key: '92d91ed41c185acbd5f0e494481b6c13d9c2258b', booking: this.booking, ref: el => (this.irBookingExtraNoteRef = el) }), h("ir-booking-company-dialog", { key: 'fb558ded20bb37b76e94d3831c51f4c6917b3bea', booking: this.booking, ref: el => (this.irBookingCompanyFormRef = el) })));
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
