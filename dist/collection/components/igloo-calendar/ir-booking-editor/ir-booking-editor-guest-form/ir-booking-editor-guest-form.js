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
        return (h(Host, { key: '338d44b25d4a8948bdcdb03fb55b69e4da99f682' }, h("section", { key: '2920fea5f9495a68f558384d6fdd377b9895de67', class: "booking-editor__form-control" }, h("ir-input", { key: '0eef699f36401b900f76f31df102fdbed64c7b3c', label: t('Lcz_EmailAddress', { fallback: 'Email address' }), "onText-change": e => updateBookedByGuest({ email: e.detail }), mask: 'email', value: bookedByGuest.email, defaultValue: bookedByGuest.email, placeholder: t('Lcz_EmailLeaveEmptyIfNotAvailable', { fallback: 'Email (leave empty if not available)' }) }), h("div", { key: 'c8afc36b8aff11df5efe4eaa68fe6984d9183546', class: "booking-editor__guest-name-group", id: "booking-editor-guest-name-group" }, h("ir-validator", { key: 'a6bc70568f61a1708dcc7ad99540b822a65b9b0e', class: "booking-editor__guest-input-validator", value: bookedByGuest.firstName, schema: BookedByGuestSchema.shape.firstName }, h("ir-input", { key: '80b139dbbde310c93d1f2cf6ad34ac54e350fcb2', id: "booking-editor-guest-first-name", class: "booking-editor__guest-input --first-name",
            // label={t('Lcz_Name', { fallback: 'Name' })}
            value: bookedByGuest.firstName, defaultValue: bookedByGuest.firstName, placeholder: t('Lcz_FirstName', { fallback: 'First name' }), autocomplete: "off", "onText-change": e => updateBookedByGuest({ firstName: e.detail }), onChange: e => syncFirstRoomGuestName('first_name', e.target.value) }, h("p", { key: '1f18d78c514176818595aae36cb3f71024374906', style: { margin: '0' }, slot: "label" }, h("span", { key: '2288cc772f438679c43f8d35c723783dfb1437f9', class: "booking-editor__guest-input-label --first-name-pc-label" }, t('Lcz_Name', { fallback: 'Name' })), h("span", { key: '258366008fe39987c17422a08718336d1ed7a66f', class: "booking-editor__guest-input-label --first-name-mobile-label" }, t('Lcz_FirstName', { fallback: 'First name' }))))), h("ir-validator", { key: '25826b30e0c39fdc1361e943e9753ce2311f1e02', class: "booking-editor__guest-input-validator", value: bookedByGuest.lastName, schema: BookedByGuestSchema.shape.lastName }, h("ir-input", { key: '9b67b00d5de53b2bc224d4286d610ad8cf586101', id: "booking-editor-guest-last-name", class: "booking-editor__guest-input --last-name", label: t('Lcz_LastName', { fallback: 'Last name' }), "onText-change": e => updateBookedByGuest({ lastName: e.detail }), onChange: e => syncFirstRoomGuestName('last_name', e.target.value), value: bookedByGuest.lastName, defaultValue: bookedByGuest.lastName, placeholder: t('Lcz_LastName', { fallback: 'Last name' }), autocomplete: "off" }))), booking_store.bookingDraft.agent ? (h("ir-input", { label: t('Lcz_BookingCode', { fallback: 'Booking code' }), placeholder: "", value: bookedByGuest.agent_booking_nbr, defaultValue: bookedByGuest.agent_booking_nbr, "onText-change": e => updateBookedByGuest({ agent_booking_nbr: e.detail }) })) : (h("ir-input", { label: t('Lcz_CompanyName', { fallback: 'Company name' }), placeholder: t('Lcz_CompanyName', { fallback: 'Company name' }), value: bookedByGuest.company, defaultValue: bookedByGuest.company, "onText-change": e => updateBookedByGuest({ company: e.detail }) })), h("ir-country-picker", { key: '353e48b03a0f768a20a84f8b4a688f9dc31a80f8', label: t('Lcz_Country', { fallback: 'Country' }), variant: "modern", testId: "main_guest_country", class: "flex-grow-1 m-0", onCountryChange: e => this.updateCountry(e), countries: selects.countries, country: selects.countries.find(c => c.id.toString() === bookedByGuest.countryId?.toString()) }), h("ir-mobile-input", { key: '82de8aa448221a1f28c6d0fd6720d4749953a0c6', size: "s", "onMobile-input-change": e => {
                updateBookedByGuest({ mobile: e.detail.formattedValue });
            }, "onMobile-input-country-change": e => updateBookedByGuest({ phone_prefix: e.detail.phone_prefix }), value: bookedByGuest.mobile, countryCode: selects.countries.find(c => c.phone_prefix === bookedByGuest.phone_prefix)?.code, countries: selects.countries })), h("section", { key: '7ca8476b7cd8f8aff7b9fb0d4d73c07960a46a10', class: 'booking-editor__form-control' }, !booking_store?.bookingDraft?.dayUse && (h("wa-select", { key: 'd3ef1fa8fa622b5eebee509966bd82da5c5bdffd', size: "s", label: t('Lcz_YourArrivalTime', { fallback: 'Your arrival time' }), "data-testid": "arrival_time", id: v4(), defaultValue: selects.arrivalTime[0].CODE_NAME, value: bookedByGuest.selectedArrivalTime, onchange: event => updateBookedByGuest({ selectedArrivalTime: event.target.value }) }, selects.arrivalTime.map(time => (h("wa-option", { value: time.CODE_NAME, selected: bookedByGuest.selectedArrivalTime === time.CODE_NAME }, getSetupEntryLabel(time)))))), h("wa-textarea", { key: 'e70b64356b85dc8c88a930cc75380bf399b99f2f', onchange: event => updateBookedByGuest({ note: event.target.value }), size: "s", value: bookedByGuest.note, defaultValue: bookedByGuest.note, label: t('Lcz_AnyMessageForUs', { fallback: 'Any message for us' }), rows: 3 }), (!agent || agent?.payment_mode?.code === '002') && (h(Fragment, { key: 'c81ed254d80ef5f217a0403827e77113fdb6500d' }, this.paymentMethods.length > 1 && (h("wa-select", { key: '3e03471ee0d6b676d918efe7f66b4b75ec6ecaee', label: t('Lcz_PaymentMethod', { fallback: 'Payment Method' }), size: "s", defaultValue: booking_store?.selectedPaymentMethod?.code ?? this.paymentMethods[0].code, value: booking_store?.selectedPaymentMethod?.code, onchange: e => modifyBookingStore('selectedPaymentMethod', {
                code: e.target.value,
            }) }, this.paymentMethods.map(p => (h("wa-option", { value: p.code }, p.description))))), booking_store.selectedPaymentMethod?.code === '001' && (h(Fragment, { key: '64a1c89b5c4e0f0ce37bb4e85d6b44554031c183' }, h("ir-input", { key: '8c3b2608303cb598aaf1063a4899e1a0081a6fc9', value: bookedByGuest.cardNumber, defaultValue: bookedByGuest.cardNumber, "onText-change": e => updateBookedByGuest({ cardNumber: e.detail.trim() }), label: t('Lcz_CardNumber', { fallback: 'Card number' }) }), h("ir-input", { key: '036a215e3b9ceee6ffab121a20e4c731defae743', value: bookedByGuest.cardHolderName, defaultValue: bookedByGuest.cardHolderName, "onText-change": e => updateBookedByGuest({ cardHolderName: e.detail.trim() }), label: t('Lcz_CardHolderName', { fallback: 'Card holder name' }) }), h("ir-input", { key: '0f95ef2c4c973c61a263567fe81015a650dbb198', "onText-change": e => {
                const [month, year] = e.detail.split('/');
                updateBookedByGuest({
                    expiryMonth: month,
                    expiryYear: year,
                });
            }, value: this.expiryDate, mask: this.expiryDateMask, label: t('Lcz_ExpiryDate', { fallback: 'Expiry date' }) }))), booking_store.selectedPaymentMethod?.code === '005' && (h(Fragment, { key: 'adbf0365f5bc9a319cd49bc34a7d1a9cb74f3e2d' }, h("style", { key: 'c5845a534b1efd239721920abc152d359f9949f1' }, `p{
              margin:0;
              padding:0}`), h("div", { key: '5ef28cd4d5627f4e346b9885c48d151b92fef239', class: "booking-editor__payment-info-description", innerHTML: this.paymentMethods.find(p => p.code === '005')?.localizables.find(l => l.language.code.toLowerCase() === 'en')?.description }))), h("wa-checkbox", { key: 'fed218cadef62321d4c55075bebe1f7e0921fc6e', defaultChecked: bookedByGuest.emailGuest, checked: bookedByGuest.emailGuest, onchange: event => updateBookedByGuest({ emailGuest: event.target.checked }) }, t('Lcz_EmailTheGuest', { fallback: 'Email the guest' })))))));
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
