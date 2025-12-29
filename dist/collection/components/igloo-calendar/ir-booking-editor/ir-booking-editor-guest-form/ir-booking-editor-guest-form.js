import booking_store, { modifyBookingStore, updateBookedByGuest } from "../../../../stores/booking.store";
import calendar_data from "../../../../stores/calendar-data";
import locales from "../../../../stores/locales.store";
import { Fragment, Host, h } from "@stencil/core";
import { v4 } from "uuid";
import IMask from "imask";
import { BookedByGuestSchema } from "../types";
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
        const { bookedByGuest, selects } = booking_store;
        return (h(Host, { key: 'ff16a760d6abf00a1da509e91fe12fd9d5649557' }, h("section", { key: '8e2965a443cbb5c0e3fdc0adbf79748ba90bac97', class: "booking-editor__form-control" }, h("ir-input", { key: '3dd4c1fb1f21882e047c5f8a612fdf19d95069eb', label: "Email address", "onText-change": e => updateBookedByGuest({ email: e.detail }), type: "email", value: bookedByGuest.email, defaultValue: bookedByGuest.email, placeholder: "Email (leave empty if not available)" }), h("div", { key: '1368985f42dcddf24808b70619481e1243562957', class: "booking-editor__guest-name-group", id: "booking-editor-guest-name-group" }, h("ir-validator", { key: '6d814b7239d9540f325a247d30df1b9befc13533', class: "booking-editor__guest-input-validator", value: bookedByGuest.firstName, schema: BookedByGuestSchema.shape.firstName }, h("ir-input", { key: 'ed4691924fc5c18d419d4c7c15839a218982414d', id: "booking-editor-guest-first-name", class: "booking-editor__guest-input --first-name",
            // label="Name"
            value: bookedByGuest.firstName, defaultValue: bookedByGuest.firstName, placeholder: "First name", autocomplete: "off", "onText-change": e => updateBookedByGuest({ firstName: e.detail }) }, h("p", { key: '1196acf6b2bcc754816045335366964381bcc897', style: { margin: '0', marginBottom: '0.5rem' }, slot: "label" }, h("span", { key: 'c6ad09a0c235ebbcc4e3a3c5ff0b69b19997f497', class: "booking-editor__guest-input-label --first-name-pc-label" }, "Name"), h("span", { key: '7d6c30c351548548aab701934123ae9cd2f0396f', class: "booking-editor__guest-input-label --first-name-mobile-label" }, "First name")))), h("ir-validator", { key: '5a924a12f4f9d53a53135634b10e19367a21d1df', class: "booking-editor__guest-input-validator", value: bookedByGuest.lastName, schema: BookedByGuestSchema.shape.lastName }, h("ir-input", { key: '3a458da1c15285496e7d80a71f1f305bfb95856e', id: "booking-editor-guest-last-name", class: "booking-editor__guest-input --last-name", label: "Last name", "onText-change": e => updateBookedByGuest({ lastName: e.detail }), value: bookedByGuest.lastName, defaultValue: bookedByGuest.lastName, placeholder: "Last name", autocomplete: "off" }))), h("ir-input", { key: 'd8c23203294d6e787507d993bf4c86cdca3a60b3', label: "Company name", placeholder: "Company name" }), h("ir-country-picker", { key: '2500e585b3c3b597eeadb3325f358909ef202504', label: locales.entries.Lcz_Country, variant: "modern", testId: "main_guest_country", class: "flex-grow-1 m-0", onCountryChange: e => this.updateCountry(e), countries: selects.countries, country: selects.countries.find(c => c.id.toString() === bookedByGuest.countryId?.toString()) }), h("ir-mobile-input", { key: '41e144d72aa784819e38046e7a2ea2304e2df4e3', size: "small", "onMobile-input-change": e => {
                updateBookedByGuest({ mobile: e.detail.formattedValue });
            }, "onMobile-input-country-change": e => updateBookedByGuest({ phone_prefix: e.detail.phone_prefix }), value: bookedByGuest.mobile, countryCode: selects.countries.find(c => c.phone_prefix === bookedByGuest.phone_prefix)?.code, countries: selects.countries }), h("wa-select", { key: '226347dba733f68502673358e52e95b3a8f08ea1', size: "small", label: locales.entries.Lcz_YourArrivalTime, "data-testid": "arrival_time", id: v4(), defaultValue: selects.arrivalTime[0].CODE_NAME, value: bookedByGuest.selectedArrivalTime, onchange: event => updateBookedByGuest({ selectedArrivalTime: event.target.value }) }, selects.arrivalTime.map(time => (h("wa-option", { value: time.CODE_NAME, selected: bookedByGuest.selectedArrivalTime === time.CODE_NAME }, time.CODE_VALUE_EN))))), h("section", { key: 'f143aa1443f25f58aff4ba767ec96416884e2815', class: 'booking-editor__form-control' }, h("wa-textarea", { key: '665f020f2ace8187b84739ca25545e1e67f74ce5', onchange: event => updateBookedByGuest({ note: event.target.value }), size: "small", value: bookedByGuest.note, defaultValue: bookedByGuest.note, label: locales.entries.Lcz_AnyMessageForUs, rows: 3 }), this.paymentMethods.length > 1 && (h("wa-select", { key: '39c6d02bb07f86555fef84fc2e3d0b8b24e8f557', label: 'Payment Method', size: "small", defaultValue: booking_store?.selectedPaymentMethod?.code ?? this.paymentMethods[0].code, value: booking_store?.selectedPaymentMethod?.code, onchange: e => modifyBookingStore('selectedPaymentMethod', {
                code: e.target.value,
            }) }, this.paymentMethods.map(p => (h("wa-option", { value: p.code }, p.description))))), booking_store.selectedPaymentMethod?.code === '001' && (h(Fragment, { key: '6261a8b111385d605c7bc5e6f3bcc1cf62317eb3' }, h("ir-input", { key: '73c17e71081f77dba69296ba086b486dc423c64f', value: bookedByGuest.cardNumber, defaultValue: bookedByGuest.cardNumber, "onText-change": e => updateBookedByGuest({ cardNumber: e.detail.trim() }), label: locales.entries.Lcz_CardNumber }), h("ir-input", { key: 'b59c2a546fc311116e7c39f3812a10428df826cf', value: bookedByGuest.cardHolderName, defaultValue: bookedByGuest.cardHolderName, "onText-change": e => updateBookedByGuest({ cardHolderName: e.detail.trim() }), label: locales.entries.Lcz_CardHolderName }), h("ir-input", { key: '426acf047ed99aac3f42039c6cf1d34c1c8833dd', "onText-change": e => {
                const [month, year] = e.detail.split('/');
                updateBookedByGuest({
                    expiryMonth: month,
                    expiryYear: year,
                });
            }, value: this.expiryDate, mask: this.expiryDateMask, label: locales.entries.Lcz_ExpiryDate }))), booking_store.selectedPaymentMethod?.code === '005' && (h(Fragment, { key: '1dc8ef7576cbaee1d983ce109d7a540420df6a37' }, h("style", { key: '11210cf09d298d38981d033b14a130df1f207f9b' }, `p{
              margin:0;
              padding:0}`), h("div", { key: 'dab506d4ded05b5d63e5a2bbebfd0f029de9d962', class: "booking-editor__payment-info-description", innerHTML: this.paymentMethods.find(p => p.code === '005')?.localizables.find(l => l.language.code.toLowerCase() === 'en')?.description }))), h("wa-checkbox", { key: '79c47f7b7a1f4ebbe1742877e9a51e2133a6f638', checked: bookedByGuest.emailGuest, onchange: event => updateBookedByGuest({ emailGuest: event.target.checked }) }, locales.entries.Lcz_EmailTheGuest))));
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
//# sourceMappingURL=ir-booking-editor-guest-form.js.map
