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
        return (h(Host, { key: '0a4773ef2393f21a5a904cd876c67f5b83df3d90' }, h("section", { key: '7cf33a03aa585e9f9b095c0517dbfe3225496980', class: "booking-editor__form-control" }, h("ir-input", { key: 'cbfd9a5c8729608169e7bb4ed0c7c7a0de03f2f4', label: t('Lcz_EmailAddress', { fallback: 'Email address' }), "onText-change": e => updateBookedByGuest({ email: e.detail }), mask: 'email', value: bookedByGuest.email, defaultValue: bookedByGuest.email, placeholder: t('Lcz_EmailLeaveEmptyIfNotAvailable', { fallback: 'Email (leave empty if not available)' }) }), h("div", { key: 'aa12867206d19ff338a234458791b8d1ae816560', class: "booking-editor__guest-name-group", id: "booking-editor-guest-name-group" }, h("ir-validator", { key: '6951ab2c3032315b59a25de667244711ac63b356', class: "booking-editor__guest-input-validator", value: bookedByGuest.firstName, schema: BookedByGuestSchema.shape.firstName }, h("ir-input", { key: '64a98e7e5fbc13614d0d63c86d045a670dbda832', id: "booking-editor-guest-first-name", class: "booking-editor__guest-input --first-name",
            // label={t('Lcz_Name', { fallback: 'Name' })}
            value: bookedByGuest.firstName, defaultValue: bookedByGuest.firstName, placeholder: t('Lcz_FirstName', { fallback: 'First name' }), autocomplete: "off", "onText-change": e => updateBookedByGuest({ firstName: e.detail }), onChange: e => syncFirstRoomGuestName('first_name', e.target.value) }, h("p", { key: 'bd7284f0573776db69dbaba97674dea3f4a883f7', style: { margin: '0' }, slot: "label" }, h("span", { key: '9dd442e77e38e0a43b6ba67501f75761f0bd669a', class: "booking-editor__guest-input-label --first-name-pc-label" }, t('Lcz_Name', { fallback: 'Name' })), h("span", { key: '90000aa7bd8c6334517a06a55fd6bea0578724a8', class: "booking-editor__guest-input-label --first-name-mobile-label" }, t('Lcz_FirstName', { fallback: 'First name' }))))), h("ir-validator", { key: '3909d2747df1aaffa7282960f9f90b62410de7e5', class: "booking-editor__guest-input-validator", value: bookedByGuest.lastName, schema: BookedByGuestSchema.shape.lastName }, h("ir-input", { key: '4d8024577b586d027948675bc7da1dc7f16bcde6', id: "booking-editor-guest-last-name", class: "booking-editor__guest-input --last-name", label: t('Lcz_LastName', { fallback: 'Last name' }), "onText-change": e => updateBookedByGuest({ lastName: e.detail }), onChange: e => syncFirstRoomGuestName('last_name', e.target.value), value: bookedByGuest.lastName, defaultValue: bookedByGuest.lastName, placeholder: t('Lcz_LastName', { fallback: 'Last name' }), autocomplete: "off" }))), booking_store.bookingDraft.agent ? (h("ir-input", { label: t('Lcz_BookingCode', { fallback: 'Booking code' }), placeholder: "", value: bookedByGuest.agent_booking_nbr, defaultValue: bookedByGuest.agent_booking_nbr, "onText-change": e => updateBookedByGuest({ agent_booking_nbr: e.detail }) })) : (h("ir-input", { label: t('Lcz_CompanyName', { fallback: 'Company name' }), placeholder: t('Lcz_CompanyName', { fallback: 'Company name' }), value: bookedByGuest.company, defaultValue: bookedByGuest.company, "onText-change": e => updateBookedByGuest({ company: e.detail }) })), h("ir-country-picker", { key: '7f212076be73fb8b971c124fd63a343e886a4e3b', label: t('Lcz_Country', { fallback: 'Country' }), variant: "modern", testId: "main_guest_country", class: "flex-grow-1 m-0", onCountryChange: e => this.updateCountry(e), countries: selects.countries, country: selects.countries.find(c => c.id.toString() === bookedByGuest.countryId?.toString()) }), h("ir-mobile-input", { key: '0ad21ead77117d8a6e0112b1f3a7516b9510244f', size: "s", "onMobile-input-change": e => {
                updateBookedByGuest({ mobile: e.detail.formattedValue });
            }, "onMobile-input-country-change": e => updateBookedByGuest({ phone_prefix: e.detail.phone_prefix }), value: bookedByGuest.mobile, countryCode: selects.countries.find(c => c.phone_prefix === bookedByGuest.phone_prefix)?.code, countries: selects.countries })), h("section", { key: '33093e67288ea24dc296dfc728fe0e27fa43a433', class: 'booking-editor__form-control' }, !booking_store?.bookingDraft?.dayUse && (h("wa-select", { key: 'a972339a73db398ddadf145f1643789536c7bfb0', size: "s", label: t('Lcz_YourArrivalTime', { fallback: 'Your arrival time' }), "data-testid": "arrival_time", id: v4(), defaultValue: selects.arrivalTime[0].CODE_NAME, value: bookedByGuest.selectedArrivalTime, onchange: event => updateBookedByGuest({ selectedArrivalTime: event.target.value }) }, selects.arrivalTime.map(time => (h("wa-option", { value: time.CODE_NAME, selected: bookedByGuest.selectedArrivalTime === time.CODE_NAME }, getSetupEntryLabel(time)))))), h("wa-textarea", { key: 'dc514993e3a7ba04ea26268b5a2324f000366f77', onchange: event => updateBookedByGuest({ note: event.target.value }), size: "s", value: bookedByGuest.note, defaultValue: bookedByGuest.note, label: t('Lcz_AnyMessageForUs', { fallback: 'Any message for us' }), rows: 3 }), (!agent || agent?.payment_mode?.code === '002') && (h(Fragment, { key: 'b15bd97523f8f3722d6845c25a1552c563365f71' }, this.paymentMethods.length > 1 && (h("wa-select", { key: '5c75276daa07cc94098cf851e4706aa19f89fe5f', label: t('Lcz_PaymentMethod', { fallback: 'Payment Method' }), size: "s", defaultValue: booking_store?.selectedPaymentMethod?.code ?? this.paymentMethods[0].code, value: booking_store?.selectedPaymentMethod?.code, onchange: e => modifyBookingStore('selectedPaymentMethod', {
                code: e.target.value,
            }) }, this.paymentMethods.map(p => (h("wa-option", { value: p.code }, p.description))))), booking_store.selectedPaymentMethod?.code === '001' && (h(Fragment, { key: '26431ad930e9719e13a990b50546824beaa94b41' }, h("ir-input", { key: 'e60f2264306cdd9e2dd3a1e0019f270ed5950f51', value: bookedByGuest.cardNumber, defaultValue: bookedByGuest.cardNumber, "onText-change": e => updateBookedByGuest({ cardNumber: e.detail.trim() }), label: t('Lcz_CardNumber', { fallback: 'Card number' }) }), h("ir-input", { key: 'b8928d8a43bf3b15277cf27c450329bd63382485', value: bookedByGuest.cardHolderName, defaultValue: bookedByGuest.cardHolderName, "onText-change": e => updateBookedByGuest({ cardHolderName: e.detail.trim() }), label: t('Lcz_CardHolderName', { fallback: 'Card holder name' }) }), h("ir-input", { key: '61fa62b4f3a8fa5b0390264c2b0b6121ea338f8c', "onText-change": e => {
                const [month, year] = e.detail.split('/');
                updateBookedByGuest({
                    expiryMonth: month,
                    expiryYear: year,
                });
            }, value: this.expiryDate, mask: this.expiryDateMask, label: t('Lcz_ExpiryDate', { fallback: 'Expiry date' }) }))), booking_store.selectedPaymentMethod?.code === '005' && (h(Fragment, { key: 'cfdde238f9a73dec0dd893de127de4897b38119b' }, h("style", { key: '99848eaeee4af5f818ed53cafa9887bff11ab9eb' }, `p{
              margin:0;
              padding:0}`), h("div", { key: '5492fefd8aff2786e0de257d1373a01c8d61aae0', class: "booking-editor__payment-info-description", innerHTML: this.paymentMethods.find(p => p.code === '005')?.localizables.find(l => l.language.code.toLowerCase() === 'en')?.description }))), h("wa-checkbox", { key: 'ad5e3ba1d67eb0e5b71b99dded3b9d8d282be015', defaultChecked: bookedByGuest.emailGuest, checked: bookedByGuest.emailGuest, onchange: event => updateBookedByGuest({ emailGuest: event.target.checked }) }, t('Lcz_EmailTheGuest', { fallback: 'Email the guest' })))))));
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
