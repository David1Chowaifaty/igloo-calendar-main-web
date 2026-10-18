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
        return (h("wa-card", { key: 'dc9f4eaa219884d1f2ec2b14c799c590f9373925', appearance: "plain", class: "reservation-information__card" }, h("div", { key: '662f9478cdfaa3556769ad84da21a800b03fdd09', class: "reservation-information", ref: el => (this.reservationInformationEl = el) }, h("p", { key: 'fd7e67d44f8a8ff7c8643278913e11d7ec682326', class: "reservation-information__property-name" }, this.booking.property.name || ''), h("ir-label", { key: '9abdacb93b102824358c598fbd93d4508f4fe6bb', renderContentAsHtml: true, labelText: `${t('Lcz_BookedOn', { fallback: 'Booked on' })}:`, content: `${_formatDate(this.booking.booked_on.date)}&nbsp&nbsp&nbsp&nbsp${_formatTime(this.booking.booked_on.hour.toString(), this.booking.booked_on.minute.toString())}` }), h("div", { key: 'b60a46f4ca97d3661803fdcb5046a16ef1043b6b', class: "reservation-information__row" }, h("ir-label", { key: 'e6fc9734b558f1d8a77a897c5db6d5ad2b9df4c0', labelText: `${t('Lcz_BookedBy', { fallback: 'Booked by' })}:`, content: `${this.booking.guest.first_name} ${this.booking.guest.last_name}` }, this.booking.guest?.nbr_confirmed_bookings > 1 && !this.booking.agent && (h("div", { key: '942e6b2bc1fae19bb1ebd4683a1713a86d6dc8af', class: 'm-0 p-0 ', slot: "prefix" }, h("wa-tooltip", { key: 'f0aa9c7ee37b9c9231852513a02fd5d0c5f3836f', for: "guests_nbr_confirmed_bookings" }, `${t('Lcz_BookingsNbr', { fallback: '%1 bookings' })}`.replace('%1', this.booking.guest.nbr_confirmed_bookings.toString())), h("div", { key: '53caaa69240ad016576ba2268f7caec887c394f7', style: { color: '#FB0AAD' }, id: "guests_nbr_confirmed_bookings" }, h("span", { key: '6c3036d836d65f2c138fe438a395f3f9b0738282' }, " ", this.booking.guest.nbr_confirmed_bookings), h("wa-icon", { key: '03f911912b0d15148fa2d3c0afde21390569bc7b', name: "heart", style: { color: '#FB0AAD' } }))))), h("wa-tooltip", { key: '11242ac14a1ab36d89bed4913b6c6efe5d1e090b', for: `edit_guest-details` }, t('Lcz_EditGuestDetails', { fallback: 'Edit guest details' })), h("ir-custom-button", { key: '868113f5c2b21caa7be9cb77755e0091e2409690', iconBtn: true, id: `edit_guest-details`, onClickHandler: e => this.handleEditClick(e, 'guest'), appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: '6bb565376b37d23c19a8569d43f6396e1efc8ec3', name: "edit", label: t('Lcz_EditGuestDetails', { fallback: 'Edit guest details' }), style: { fontSize: '1rem' } }))), !this.booking.agent && (h("div", { key: '64d218f914d5da505c0708a18e5c4173b473b2fc', class: "reservation-information__row" }, h("ir-label", { key: '425f263696f864a521b9d287d2bc138ad381c186', labelText: `${t('Lcz_Company', { fallback: 'Company' })}:`, placeholder: t('Lcz_NoCompanyNameProvided', { fallback: 'No company name provided' }), content: `${this.booking.company_name ?? ''}${this.booking.company_tax_nbr ? ` - ${this.booking.company_tax_nbr}` : ''}`, display: 'flex' }), h("wa-tooltip", { key: 'f68b1b0a5f35182bca347e5eafbe1cadcb67734b', for: `edit_create-company-info` }, t('Lcz_AddCompanyInfo', { fallback: 'Add company info' })), h("ir-custom-button", { key: '3a8865a8e939e53bd8019499af64402e0c826a46', iconBtn: true, id: `edit_create-company-info`, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.irBookingCompanyFormRef.openCompanyForm();
            }, appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: 'b7ff19df2f22f986e773936b77be8f474b1c0499', name: "edit", label: t('Lcz_AddOrModifyCompanyInfo', { fallback: 'Add or modify company info' }), style: { fontSize: '1rem' } })))), h("div", { key: 'ea0f6689a8c238a35529939ccc4bb9294a2ad400', class: 'reservation__info-guest-origins' }, this.userCountry && (h("ir-label", { key: '11efb3ae7b4a51a07d2f4942f83312e616be58c1', labelText: `${t('Lcz_Country', { fallback: 'Country' })}:`, isCountryImage: true, content: this.userCountry.name, image: { src: this.userCountry.flag, alt: this.userCountry.name } })), this.booking.guest.mobile && h("ir-label", { key: '4347e38e660f2820b49996c20b7fa971af68abec', labelText: `${t('Lcz_Phone', { fallback: 'Phone' })}:`, content: this.renderPhoneNumber() })), !this.booking.agent && h("ir-label", { key: '42177f09be001f58c1697492130c754f2a894429', labelText: `${t('Lcz_Email', { fallback: 'Email' })}:`, content: this.booking.guest.email }), this.booking.guest.alternative_email && (h("ir-label", { key: '62bdfbabf9e3be2b61ff3bc6b69c7d004eec026e', labelText: `${t('Lcz_AlternativeEmail', { fallback: 'Alternative email' })}:`, content: this.booking.guest.alternative_email })), this.booking?.guest?.address && h("ir-label", { key: '478d7c0b1529991c30c9d941ac127dd7471dc0e3', labelText: `${t('Lcz_Address')}:`, content: this.booking.guest.address }), this.booking.guest?.notes && h("ir-label", { key: '141cc94bfc3a692d1f96aa4e3c9860d7e2d842ff', display: "inline", labelText: `${t('Lcz_GuestPrivateNote')}:`, content: this.booking.guest?.notes }), this.booking.promo_key && h("ir-label", { key: 'bee1cfc989bdd84657a6e307431b9cab496d7dbf', labelText: `${t('Lcz_Coupon', { fallback: 'Coupon' })}:`, content: this.booking.promo_key }), this.booking.is_in_loyalty_mode && !this.booking.promo_key && (h("div", { key: 'aba4b9adafd7f2d5971f968a94e725613debec9a', class: "d-flex align-items-center" }, h("svg", { key: '9e0a26093009144997abeacc1b0440968d64a28c', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '4e5361270d04e94372500a5c0047916529dac934', fill: "#fc6c85", d: "M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" })), h("p", { key: '194821b6c6181dbee421a5e95511d0189767a6a5', class: "m-0 p-0 ir-ms-1" }, t('Lcz_LoyaltyDiscountApplied', { fallback: 'Coupon: %1' })))), this.booking.is_direct ? (h("ir-label", { labelText: `${t('Lcz_GuestRemark')}:`, display: "inline", content: this.booking.remark })) : (h("ota-label", { class: 'm-0 p-0 reservation-information__channel-notes', label: `${t('Lcz_ChannelNotes', { fallback: 'Channel notes' })}:`, remarks: this.booking.ota_notes, maxVisibleItems: this.booking.ota_notes?.length })), h("div", { key: '0bef6c5141188afaf084f41938bef569310be45f', class: "reservation-information__row" }, h("ir-label", { key: '691b62efde0f74e6530cd2505d9e0fb194c48c40', labelText: `${t('Lcz_BookingPrivateNote')}:`, placeholder: t('Lcz_VisibleToHotelOnly'), content: privateNote, display: privateNote ? 'inline' : 'flex' }), h("wa-tooltip", { key: 'f50d518162af7a41c1d41e64d9e4576e3ccf8524', for: `edit_create-extra-note` }, t('Lcz_EditCreatePrivateNoteTooltip', {
            fallback: '%1 private note',
            params: [privateNote ? t('Lcz_Edit', { fallback: 'Edit' }) : t('Lcz_Create', { fallback: 'Create' })],
        })), h("ir-custom-button", { key: 'cddae766e7edb8316ee223fdf1bc5395fb13341f', iconBtn: true, id: `edit_create-extra-note`, onClickHandler: () => {
                this.irBookingExtraNoteRef.openDialog();
            }, appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: 'dda8bffe76c0c4a3a83b3394eecde1a2b1e6aecb', style: { fontSize: '1rem' }, name: "edit", label: t('Lcz_EditOrCreatePrivateNote', { fallback: 'Edit or create private note' }) })))), h("ir-booking-extra-note", { key: '3b57a6e514c3b5afdb172f341634b7b1d9e33915', booking: this.booking, ref: el => (this.irBookingExtraNoteRef = el) }), h("ir-booking-company-dialog", { key: 'd3eebda0877d73d34df61d6b7f6e5a52a9e48129', booking: this.booking, ref: el => (this.irBookingCompanyFormRef = el) })));
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
