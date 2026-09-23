import booking_store, { modifyBookingStore, syncFirstRoomGuestName, updateBookedByGuest } from "../../../../stores/booking.store";
import calendar_data from "../../../../stores/calendar-data";
import { Fragment, Host, h } from "@stencil/core";
import { v4 } from "uuid";
import IMask from "imask";
import { BookedByGuestSchema } from "../types";
import { t } from "../../../../services/locale/t";
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
        return (h(Host, { key: '6eea20a90ab397499f17b2a141503899c0aee8fd' }, h("section", { key: 'c29efb2adbdbd52a80d2287049bcbf262e6eb321', class: "booking-editor__form-control" }, h("ir-input", { key: 'd0d500bc335535d13acc73b2fe9573957ba2b571', label: t('Lcz_EmailAddress', { fallback: 'Email address' }), "onText-change": e => updateBookedByGuest({ email: e.detail }), mask: 'email', value: bookedByGuest.email, defaultValue: bookedByGuest.email, placeholder: t('Lcz_EmailLeaveEmptyIfNotAvailable', { fallback: 'Email (leave empty if not available)' }) }), h("div", { key: '8e49adeffd270062e2b2540843b9b5740ef6f700', class: "booking-editor__guest-name-group", id: "booking-editor-guest-name-group" }, h("ir-validator", { key: '683e1080c17263a96ab63bd98864aff3cfe4909c', class: "booking-editor__guest-input-validator", value: bookedByGuest.firstName, schema: BookedByGuestSchema.shape.firstName }, h("ir-input", { key: 'e241a1a5546fbf3b7aa33096a0aed3964a6bba8b', id: "booking-editor-guest-first-name", class: "booking-editor__guest-input --first-name",
            // label={t('Lcz_Name', { fallback: 'Name' })}
            value: bookedByGuest.firstName, defaultValue: bookedByGuest.firstName, placeholder: t('Lcz_FirstName', { fallback: 'First name' }), autocomplete: "off", "onText-change": e => updateBookedByGuest({ firstName: e.detail }), onChange: e => syncFirstRoomGuestName('first_name', e.target.value) }, h("p", { key: '5200f430c5270514a66300f22af7016eabae153a', style: { margin: '0' }, slot: "label" }, h("span", { key: 'ac5f403af9496bbbef15d17886353894b0a994c4', class: "booking-editor__guest-input-label --first-name-pc-label" }, t('Lcz_Name', { fallback: 'Name' })), h("span", { key: '028282302a6ad2ea2580860435a237fd7c4bb431', class: "booking-editor__guest-input-label --first-name-mobile-label" }, t('Lcz_FirstName', { fallback: 'First name' }))))), h("ir-validator", { key: '0f6d200066b8ecb47ec8df0300a0bc1eb080426f', class: "booking-editor__guest-input-validator", value: bookedByGuest.lastName, schema: BookedByGuestSchema.shape.lastName }, h("ir-input", { key: '2f5d99b89f9e063759bd4a673b8d1107f7590414', id: "booking-editor-guest-last-name", class: "booking-editor__guest-input --last-name", label: t('Lcz_LastName', { fallback: 'Last name' }), "onText-change": e => updateBookedByGuest({ lastName: e.detail }), onChange: e => syncFirstRoomGuestName('last_name', e.target.value), value: bookedByGuest.lastName, defaultValue: bookedByGuest.lastName, placeholder: t('Lcz_LastName', { fallback: 'Last name' }), autocomplete: "off" }))), booking_store.bookingDraft.agent ? (h("ir-input", { label: t('Lcz_BookingCode', { fallback: 'Booking code' }), placeholder: "", value: bookedByGuest.agent_booking_nbr, defaultValue: bookedByGuest.agent_booking_nbr, "onText-change": e => updateBookedByGuest({ agent_booking_nbr: e.detail }) })) : (h("ir-input", { label: t('Lcz_CompanyName', { fallback: 'Company name' }), placeholder: t('Lcz_CompanyName', { fallback: 'Company name' }), value: bookedByGuest.company, defaultValue: bookedByGuest.company, "onText-change": e => updateBookedByGuest({ company: e.detail }) })), h("ir-country-picker", { key: '0aa418b4e56a5c9e1b5626517dc72631de4b3e1e', label: t('Lcz_Country', { fallback: 'Country' }), variant: "modern", testId: "main_guest_country", class: "flex-grow-1 m-0", onCountryChange: e => this.updateCountry(e), countries: selects.countries, country: selects.countries.find(c => c.id.toString() === bookedByGuest.countryId?.toString()) }), h("ir-mobile-input", { key: 'bd3ee8849ddfd1d308e42f70008ee0370b52d216', size: "s", "onMobile-input-change": e => {
                updateBookedByGuest({ mobile: e.detail.formattedValue });
            }, "onMobile-input-country-change": e => updateBookedByGuest({ phone_prefix: e.detail.phone_prefix }), value: bookedByGuest.mobile, countryCode: selects.countries.find(c => c.phone_prefix === bookedByGuest.phone_prefix)?.code, countries: selects.countries })), h("section", { key: '0449eb77423bb3426fce1bfcdad40c1514e638fb', class: 'booking-editor__form-control' }, !booking_store?.bookingDraft?.dayUse && (h("wa-select", { key: 'ae6e8dbc0ee4d30126b301ecde273e952ed4a0ed', size: "s", label: t('Lcz_YourArrivalTime', { fallback: 'Your arrival time' }), "data-testid": "arrival_time", id: v4(), defaultValue: selects.arrivalTime[0].CODE_NAME, value: bookedByGuest.selectedArrivalTime, onchange: event => updateBookedByGuest({ selectedArrivalTime: event.target.value }) }, selects.arrivalTime.map(time => (h("wa-option", { value: time.CODE_NAME, selected: bookedByGuest.selectedArrivalTime === time.CODE_NAME }, time.CODE_VALUE_EN))))), h("wa-textarea", { key: '8476fe1f2764f5caaac75bc7f9657e38b8508540', onchange: event => updateBookedByGuest({ note: event.target.value }), size: "s", value: bookedByGuest.note, defaultValue: bookedByGuest.note, label: t('Lcz_AnyMessageForUs', { fallback: 'Any message for us' }), rows: 3 }), (!agent || agent?.payment_mode?.code === '002') && (h(Fragment, { key: '231becc4e05a95555459f82ab8874f3301cf65af' }, this.paymentMethods.length > 1 && (h("wa-select", { key: '720abd865127ed3ff001b9a27535312199058dab', label: t('Lcz_PaymentMethod', { fallback: 'Payment Method' }), size: "s", defaultValue: booking_store?.selectedPaymentMethod?.code ?? this.paymentMethods[0].code, value: booking_store?.selectedPaymentMethod?.code, onchange: e => modifyBookingStore('selectedPaymentMethod', {
                code: e.target.value,
            }) }, this.paymentMethods.map(p => (h("wa-option", { value: p.code }, p.description))))), booking_store.selectedPaymentMethod?.code === '001' && (h(Fragment, { key: '962810cbd2e81bf3d693102f0b23ad5cea0b4b61' }, h("ir-input", { key: 'ff9e890b48b480f27f58d279f7902db3e90f8330', value: bookedByGuest.cardNumber, defaultValue: bookedByGuest.cardNumber, "onText-change": e => updateBookedByGuest({ cardNumber: e.detail.trim() }), label: t('Lcz_CardNumber', { fallback: 'Card number' }) }), h("ir-input", { key: '2fcad7f737ccf8b8aedd466e8ca54d8e971672b0', value: bookedByGuest.cardHolderName, defaultValue: bookedByGuest.cardHolderName, "onText-change": e => updateBookedByGuest({ cardHolderName: e.detail.trim() }), label: t('Lcz_CardHolderName', { fallback: 'Card holder name' }) }), h("ir-input", { key: '0b16e2f7f3ea400f33dedc279270fd7bbea5dd62', "onText-change": e => {
                const [month, year] = e.detail.split('/');
                updateBookedByGuest({
                    expiryMonth: month,
                    expiryYear: year,
                });
            }, value: this.expiryDate, mask: this.expiryDateMask, label: t('Lcz_ExpiryDate', { fallback: 'Expiry date' }) }))), booking_store.selectedPaymentMethod?.code === '005' && (h(Fragment, { key: '0707d2f4a888bc00b065e86c9b7e579721cf66d7' }, h("style", { key: 'fb1c9f11429b7e78e186e1e628bc150d2e8fd23d' }, `p{
              margin:0;
              padding:0}`), h("div", { key: '4a37171424295bae133179e2f4a2cc1fc9b74b15', class: "booking-editor__payment-info-description", innerHTML: this.paymentMethods.find(p => p.code === '005')?.localizables.find(l => l.language.code.toLowerCase() === 'en')?.description }))), h("wa-checkbox", { key: 'db86db1565580483b6f0ad83b5a16ead5c1679e9', defaultChecked: bookedByGuest.emailGuest, checked: bookedByGuest.emailGuest, onchange: event => updateBookedByGuest({ emailGuest: event.target.checked }) }, t('Lcz_EmailTheGuest', { fallback: 'Email the guest' })))))));
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
