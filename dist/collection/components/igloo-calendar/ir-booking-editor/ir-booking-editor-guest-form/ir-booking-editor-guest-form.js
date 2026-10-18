import booking_store, { modifyBookingStore, syncFirstRoomGuestName, updateBookedByGuest } from "../../../../stores/booking.store";
import calendar_data from "../../../../stores/calendar-data";
import { Fragment, Host, h } from "@stencil/core";
import { v4 } from "uuid";
import IMask from "imask";
import { BookedByGuestSchema } from "../types";
import { t } from "../../../../services/locale/t";
import { getSetupEntryLabel } from "../../../../services/setup/index";
export class IrBookingEditorGuestForm {
    paymentMethods = [];
    expiryDateMask = {
        mask: 'MM/YY',
        placeholderChar: '_',
        blocks: {
            MM: {
                mask: IMask.MaskedRange,
                from: 1,
                to: 12,
                maxLength: 2,
            },
            YY: {
                mask: IMask.MaskedRange,
                from: new Date().getFullYear() % 100,
                to: (new Date().getFullYear() % 100) + 20,
                maxLength: 2,
            },
        },
    };
    componentWillLoad() {
        this.paymentMethods = calendar_data.property.allowed_payment_methods.filter(p => p.is_active && !p.is_payment_gateway);
        if (this.paymentMethods.length > 0) {
            modifyBookingStore('selectedPaymentMethod', { code: this.paymentMethods[0].code });
        }
    }
    updateCountry(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const country = event.detail;
        let payload = { countryId: country.id.toString() };
        if (!booking_store.bookedByGuest.mobile) {
            payload = { ...payload, phone_prefix: country.phone_prefix };
        }
        updateBookedByGuest(payload);
    }
    get expiryDate() {
        const { expiryMonth, expiryYear } = booking_store.bookedByGuest;
        if (!expiryMonth || !expiryYear) {
            return '';
        }
        // Normalize year to YY
        const year = expiryYear.toString().length === 4 ? expiryYear.toString().slice(-2) : expiryYear.toString();
        return `${expiryMonth}/${year}`;
    }
    render() {
        const { bookedByGuest, selects, bookingDraft } = booking_store;
        const { agent } = bookingDraft;
        return (h(Host, { key: 'c0d20c095011f11c9dfe87b6fff90b172be72722' }, h("section", { key: '04e6907282eed9ba272ff62b181b1c6264efdd9a', class: "booking-editor__form-control" }, h("ir-input", { key: '27b01957ce43cec5856fb96d3c5a4ef85b85c87d', label: t('Lcz_EmailAddress', { fallback: 'Email address' }), "onText-change": e => updateBookedByGuest({ email: e.detail }), mask: 'email', value: bookedByGuest.email, defaultValue: bookedByGuest.email, placeholder: t('Lcz_EmailLeaveEmptyIfNotAvailable', { fallback: 'Email (leave empty if not available)' }) }), h("div", { key: 'a71b124e42b541772f625e0b2fe5995641c7ea54', class: "booking-editor__guest-name-group", id: "booking-editor-guest-name-group" }, h("ir-validator", { key: 'f825df193140996a2a49088deb1061c1c5c25f16', class: "booking-editor__guest-input-validator", value: bookedByGuest.firstName, schema: BookedByGuestSchema.shape.firstName }, h("ir-input", { key: 'b520335c9b2f3f828d41602a94181c93cbdc51af', id: "booking-editor-guest-first-name", class: "booking-editor__guest-input --first-name",
            // label={t('Lcz_Name', { fallback: 'Name' })}
            value: bookedByGuest.firstName, defaultValue: bookedByGuest.firstName, placeholder: t('Lcz_FirstName', { fallback: 'First name' }), autocomplete: "off", "onText-change": e => updateBookedByGuest({ firstName: e.detail }), onChange: e => syncFirstRoomGuestName('first_name', e.target.value) }, h("p", { key: '3a37bb1f1438e21984f56ab8f56a7a50092f3d6a', style: { margin: '0' }, slot: "label" }, h("span", { key: '113358496bc33b57ccee06a6f4412a85ba7458d2', class: "booking-editor__guest-input-label --first-name-pc-label" }, t('Lcz_Name', { fallback: 'Name' })), h("span", { key: '290d4dd8eec54fb44cacffc155c78f443778e419', class: "booking-editor__guest-input-label --first-name-mobile-label" }, t('Lcz_FirstName', { fallback: 'First name' }))))), h("ir-validator", { key: 'af77f0758d0c82947f5b6e5bb559505a91e6c51c', class: "booking-editor__guest-input-validator", value: bookedByGuest.lastName, schema: BookedByGuestSchema.shape.lastName }, h("ir-input", { key: '1ed8d8a0a3279534b8fa861c0c6b6c0c7fb53cc6', id: "booking-editor-guest-last-name", class: "booking-editor__guest-input --last-name", label: t('Lcz_LastName', { fallback: 'Last name' }), "onText-change": e => updateBookedByGuest({ lastName: e.detail }), onChange: e => syncFirstRoomGuestName('last_name', e.target.value), value: bookedByGuest.lastName, defaultValue: bookedByGuest.lastName, placeholder: t('Lcz_LastName', { fallback: 'Last name' }), autocomplete: "off" }))), booking_store.bookingDraft.agent ? (h("ir-input", { label: t('Lcz_BookingCode', { fallback: 'Booking code' }), placeholder: "", value: bookedByGuest.agent_booking_nbr, defaultValue: bookedByGuest.agent_booking_nbr, "onText-change": e => updateBookedByGuest({ agent_booking_nbr: e.detail }) })) : (h("ir-input", { label: t('Lcz_CompanyName', { fallback: 'Company name' }), placeholder: t('Lcz_CompanyName', { fallback: 'Company name' }), value: bookedByGuest.company, defaultValue: bookedByGuest.company, "onText-change": e => updateBookedByGuest({ company: e.detail }) })), h("ir-country-picker", { key: '4e106e9e27daf0900c5c03186da660d0ace1a39c', label: t('Lcz_Country', { fallback: 'Country' }), variant: "modern", testId: "main_guest_country", class: "flex-grow-1 m-0", onCountryChange: e => this.updateCountry(e), countries: selects.countries, country: selects.countries.find(c => c.id.toString() === bookedByGuest.countryId?.toString()) }), h("ir-mobile-input", { key: '367493484bac86cbc74687d77140686e309f0937', size: "s", "onMobile-input-change": e => {
                updateBookedByGuest({ mobile: e.detail.formattedValue });
            }, "onMobile-input-country-change": e => updateBookedByGuest({ phone_prefix: e.detail.phone_prefix }), value: bookedByGuest.mobile, countryCode: selects.countries.find(c => c.phone_prefix === bookedByGuest.phone_prefix)?.code, countries: selects.countries })), h("section", { key: 'fbf302200a0b188e3d4d59a38dd49cbf9b7be05f', class: 'booking-editor__form-control' }, !booking_store?.bookingDraft?.dayUse && (h("wa-select", { key: '009f5ac5cf3bad709e4c72297b814a02489bcda4', size: "s", label: t('Lcz_YourArrivalTime', { fallback: 'Your arrival time' }), "data-testid": "arrival_time", id: v4(), defaultValue: selects.arrivalTime[0].CODE_NAME, value: bookedByGuest.selectedArrivalTime, onchange: event => updateBookedByGuest({ selectedArrivalTime: event.target.value }) }, selects.arrivalTime.map(time => (h("wa-option", { value: time.CODE_NAME, selected: bookedByGuest.selectedArrivalTime === time.CODE_NAME }, getSetupEntryLabel(time)))))), h("wa-textarea", { key: 'f8723d392b752675b5d2ae41f65250a8e6b692b5', onchange: event => updateBookedByGuest({ note: event.target.value }), size: "s", value: bookedByGuest.note, defaultValue: bookedByGuest.note, label: t('Lcz_AnyMessageForUs', { fallback: 'Any message for us' }), rows: 3 }), (!agent || agent?.payment_mode?.code === '002') && (h(Fragment, { key: 'b718f53a8c070cb0598a945f8241ea2fa4a8e5ce' }, this.paymentMethods.length > 1 && (h("wa-select", { key: 'ac795c7fbab25643852507ff3bd28a79a76c21c7', label: t('Lcz_PaymentMethod', { fallback: 'Payment Method' }), size: "s", defaultValue: booking_store?.selectedPaymentMethod?.code ?? this.paymentMethods[0].code, value: booking_store?.selectedPaymentMethod?.code, onchange: e => modifyBookingStore('selectedPaymentMethod', {
                code: e.target.value,
            }) }, this.paymentMethods.map(p => (h("wa-option", { value: p.code }, p.description))))), booking_store.selectedPaymentMethod?.code === '001' && (h(Fragment, { key: '1836d6d97d07f2c905ed2b7e0e0f7cd8d4a586cf' }, h("ir-input", { key: '11a30fb75b85bf6a511092734e775e60f37cd626', value: bookedByGuest.cardNumber, defaultValue: bookedByGuest.cardNumber, "onText-change": e => updateBookedByGuest({ cardNumber: e.detail.trim() }), label: t('Lcz_CardNumber', { fallback: 'Card number' }) }), h("ir-input", { key: 'd8d2da74e67f1291b9efd16dcc28b593c42f732f', value: bookedByGuest.cardHolderName, defaultValue: bookedByGuest.cardHolderName, "onText-change": e => updateBookedByGuest({ cardHolderName: e.detail.trim() }), label: t('Lcz_CardHolderName', { fallback: 'Card holder name' }) }), h("ir-input", { key: '9d86e0a6853ce120ca67285f5abfde2eefee33b7', "onText-change": e => {
                const [month, year] = e.detail.split('/');
                updateBookedByGuest({
                    expiryMonth: month,
                    expiryYear: year,
                });
            }, value: this.expiryDate, mask: this.expiryDateMask, label: t('Lcz_ExpiryDate', { fallback: 'Expiry date' }) }))), booking_store.selectedPaymentMethod?.code === '005' && (h(Fragment, { key: '497d30340494390ca1455fd7d32da49d9384de78' }, h("style", { key: '42b0c5159d9063a89cf3b9ae6f43b66b0d5833a6' }, `p{
              margin:0;
              padding:0}`), h("div", { key: '6b35aec0344d094d17246c13c50ada2059737771', class: "booking-editor__payment-info-description", innerHTML: this.paymentMethods.find(p => p.code === '005')?.localizables.find(l => l.language.code.toLowerCase() === 'en')?.description }))), h("wa-checkbox", { key: 'db7b67f62cd2b44788c5b19f15409eb3f057149d', defaultChecked: bookedByGuest.emailGuest, checked: bookedByGuest.emailGuest, onchange: event => updateBookedByGuest({ emailGuest: event.target.checked }) }, t('Lcz_EmailTheGuest', { fallback: 'Email the guest' })))))));
    }
    static get is() { return "ir-booking-editor-guest-form"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booking-editor-guest-form.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking-editor-guest-form.css"]
        };
    }
}
