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
        return (h("wa-card", { key: 'b17d98e95b535a0108ca6dd4f0ef980a2fbe99d2', appearance: "plain", class: "reservation-information__card" }, h("div", { key: '16381be7373838d55379a50fc872bdde238bf0c8', class: "reservation-information", ref: el => (this.reservationInformationEl = el) }, h("p", { key: '8fe6604c3af732e6b0d2f61a6d04fe05c2f8d509', class: "reservation-information__property-name" }, this.booking.property.name || ''), h("ir-label", { key: '15b2fd49b8ed75b795961d83f3ecc313e67c4f06', renderContentAsHtml: true, labelText: `${t('Lcz_BookedOn')}:`, content: `${_formatDate(this.booking.booked_on.date)}&nbsp&nbsp&nbsp&nbsp${_formatTime(this.booking.booked_on.hour.toString(), this.booking.booked_on.minute.toString())}` }), h("div", { key: 'f364e4280daef0977cabe71d92eb6815dbdab3d8', class: "reservation-information__row" }, h("ir-label", { key: '643113db0234ea5347d15717f7e559013705988e', labelText: `${t('Lcz_BookedBy')}:`, content: `${this.booking.guest.first_name} ${this.booking.guest.last_name}` }, this.booking.guest?.nbr_confirmed_bookings > 1 && !this.booking.agent && (h("div", { key: 'dcb4903e293968f630a55fb8dd3d53676171f439', class: 'm-0 p-0 ', slot: "prefix" }, h("wa-tooltip", { key: '469da57f3eb0b7e84243a5d6240468c02d8f2470', for: "guests_nbr_confirmed_bookings" }, `${t('Lcz_BookingsNbr')}`.replace('%1', this.booking.guest.nbr_confirmed_bookings.toString())), h("div", { key: '960bd1f9d4a3618a14df50487604f3cdab953178', style: { color: '#FB0AAD' }, id: "guests_nbr_confirmed_bookings" }, h("span", { key: 'afd119ce90177a89b43c7ec52cd89b900fc62cc9' }, " ", this.booking.guest.nbr_confirmed_bookings), h("wa-icon", { key: '9b22908ffea85c93e6ce5f6eccb773fa58e790b6', name: "heart", style: { color: '#FB0AAD' } }))))), h("wa-tooltip", { key: 'edf1ab2d4a3454e7e2011dfe93da553e2e193b4c', for: `edit_guest-details` }, "Edit guest details"), h("ir-custom-button", { key: '2321f02d50d890591634ed2b9212505be384ac0a', iconBtn: true, id: `edit_guest-details`, onClickHandler: e => this.handleEditClick(e, 'guest'), appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: '14ebc1882093618589cb21d0bedbd950fb7ab885', name: "edit", label: "Edit guest details", style: { fontSize: '1rem' } }))), !this.booking.agent && (h("div", { key: '59090121630b3febd1e810cbbd0756410985b9f3', class: "reservation-information__row" }, h("ir-label", { key: 'ebe400dae89c6dac5e070edfae826461b58dd919', labelText: `Company:`, placeholder: 'No company name provided', content: `${this.booking.company_name ?? ''}${this.booking.company_tax_nbr ? ` - ${this.booking.company_tax_nbr}` : ''}`, display: 'flex' }), h("wa-tooltip", { key: 'c5dc6ed1d1f18f28185d5791ec19a6d72b45d1d8', for: `edit_create-company-info` }, "Add company info"), h("ir-custom-button", { key: '0050e9a5e4000ee4f8f61c0339f9cacaae7fb612', iconBtn: true, id: `edit_create-company-info`, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.irBookingCompanyFormRef.openCompanyForm();
            }, appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: '708ee2474adbe61ee96ee0bf0f7d54ca4e69d705', name: "edit", label: "Add or modify company info", style: { fontSize: '1rem' } })))), h("div", { key: 'fa64268fa258bb47a6ba3bfb4c7ca298c27278be', class: 'reservation__info-guest-origins' }, this.userCountry && (h("ir-label", { key: '4224608485a1bd2191c25e521014b1cd4061cb43', labelText: `${t('Lcz_Country')}:`, isCountryImage: true, content: this.userCountry.name, image: { src: this.userCountry.flag, alt: this.userCountry.name } })), this.booking.guest.mobile && h("ir-label", { key: '862fb88164c625f03e119a946e4655644a92520f', labelText: `${t('Lcz_Phone')}:`, content: this.renderPhoneNumber() })), !this.booking.agent && h("ir-label", { key: '8f2a99b2db84b2df0be92bf26a0ebcb5b01d72ce', labelText: `${t('Lcz_Email')}:`, content: this.booking.guest.email }), this.booking.guest.alternative_email && h("ir-label", { key: 'e9010fa014685e2bbd7c4266aa3157340c21ba8a', labelText: `${t('Lcz_AlternativeEmail')}:`, content: this.booking.guest.alternative_email }), this.booking?.guest?.address && h("ir-label", { key: 'c0d328b6045a88d9a26e181907b7089e9e9bdd44', labelText: `${t('Lcz_Address')}:`, content: this.booking.guest.address }), this.booking.guest?.notes && h("ir-label", { key: 'e3a46e7006eb5000671e586a4a4e5bfd84827ba2', display: "inline", labelText: `${t('Lcz_GuestPrivateNote')}:`, content: this.booking.guest?.notes }), this.booking.promo_key && h("ir-label", { key: '595987775c6fb00eda8c1488d8a81178bba38104', labelText: `${t('Lcz_Coupon')}:`, content: this.booking.promo_key }), this.booking.is_in_loyalty_mode && !this.booking.promo_key && (h("div", { key: 'c2ec8a94cb936f4ae7525c56aa21868d0072d9d3', class: "d-flex align-items-center" }, h("svg", { key: 'c8d029e1488ac28177fed40ebd5c99acc8e4eb3d', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '60bcea39ba36771e02a1f83b7209dc5eadb4336c', fill: "#fc6c85", d: "M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" })), h("p", { key: 'bd4fdec57c0b0f52e8a97987dca86219ee2c854d', class: "m-0 p-0 ir-ms-1" }, t('Lcz_LoyaltyDiscountApplied')))), this.booking.is_direct ? (h("ir-label", { labelText: `${t('Lcz_GuestRemark')}:`, display: "inline", content: this.booking.remark })) : (h("ota-label", { class: 'm-0 p-0 reservation-information__channel-notes', label: `${t('Lcz_ChannelNotes', { fallback: 'Channel notes' })}:`, remarks: this.booking.ota_notes, maxVisibleItems: this.booking.ota_notes?.length })), h("div", { key: '5fd1d5e8983d3b8f3ba59e576167632af7d0d350', class: "reservation-information__row" }, h("ir-label", { key: 'cc9c671ae053f3de2eafe9fe9cb4f2984b55066d', labelText: `${t('Lcz_BookingPrivateNote')}:`, placeholder: t('Lcz_VisibleToHotelOnly'), content: privateNote, display: privateNote ? 'inline' : 'flex' }), h("wa-tooltip", { key: '7048cb1a3abe72a73865204a55c1bcf062edfd9d', for: `edit_create-extra-note` }, privateNote ? 'Edit' : 'Create', " private note"), h("ir-custom-button", { key: '8c0c364a938eb094cd8ac4edf0b8a8d6c66eb2a5', iconBtn: true, id: `edit_create-extra-note`, onClickHandler: () => {
                this.irBookingExtraNoteRef.openDialog();
            }, appearance: 'plain', variant: 'neutral' }, h("wa-icon", { key: '7ba544ffe70910fdd4e6732d02417522df20bf0b', style: { fontSize: '1rem' }, name: "edit", label: "Edit or create private note" })))), h("ir-booking-extra-note", { key: '9183d43e6ce162e64dd7c275fbed9f352e5e9e7a', booking: this.booking, ref: el => (this.irBookingExtraNoteRef = el) }), h("ir-booking-company-dialog", { key: '72ebbd43574def5e9217f9e39cce04c90fe4910d', booking: this.booking, ref: el => (this.irBookingCompanyFormRef = el) })));
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
