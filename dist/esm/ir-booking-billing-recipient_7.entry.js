import { r as registerInstance, c as createEvent, h, H as Host, F as Fragment } from './index-7e96440e.js';
import { a as isRequestPending } from './ir-interceptor.store-b1961d27.js';
import { v as v4 } from './v4-964634d6.js';
import { B as BookingService } from './booking.service-c1f176cb.js';
import { f as formatAmount } from './utils-065217ce.js';
import { h as hooks } from './moment-ab846cee.js';
import { _ as _formatTime } from './functions-196622a8.js';
import './index-f100e9d2.js';
import './index-87419685.js';
import './axios-aa1335b8.js';
import './booking-172b824e.js';
import './locales.store-cb784e95.js';
import './calendar-data-b1f645da.js';
import './type-f926f853.js';

const irBookingBillingRecipientCss = ".sc-ir-booking-billing-recipient-h{display:block;padding:0 !important;box-sizing:border-box}.billing-recipient__room.sc-ir-booking-billing-recipient::part(label){display:flex;align-items:center;gap:var(--wa-space-xl);width:100%}.billing-recipient__guest-name.sc-ir-booking-billing-recipient{font-weight:500}.billing-recipient__room-details.sc-ir-booking-billing-recipient{display:flex;gap:6px;align-items:center;font-size:0.875rem;color:var(--wa-color-neutral-600)}.billing-recipient__roomtype.sc-ir-booking-billing-recipient{font-weight:600}";
const IrBookingBillingRecipientStyle0 = irBookingBillingRecipientCss;

const IrBookingBillingRecipient = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.recipientChange = createEvent(this, "recipientChange", 7);
    }
    booking;
    selectedRecipient;
    rooms = [];
    recipientChange;
    initialValue;
    bookingCompanyFormRef;
    componentWillLoad() {
        this.initializeDefaultValue();
    }
    handleBookingChange() {
        this.initializeDefaultValue();
    }
    initializeDefaultValue() {
        this.initialValue = 'guest';
        this.selectedRecipient = this.initialValue;
        this.filterRoomGuests();
    }
    handleRecipientChange(value) {
        this.selectedRecipient = value;
        switch (value) {
            case 'company':
                if (!this.booking.company_name) {
                    this.bookingCompanyFormRef.openCompanyForm();
                    return;
                }
                break;
        }
        this.recipientChange.emit(this.selectedRecipient);
    }
    filterRoomGuests() {
        const joinKey = '|';
        const normalize = (value) => value?.split(' ')?.join(joinKey)?.toLocaleLowerCase().trim() || '';
        const rooms = [];
        const seenNames = new Set();
        const mainGuest = this.booking?.guest;
        if (mainGuest) {
            const mainKey = `${normalize(mainGuest.first_name)}${mainGuest.last_name ? joinKey : ''}${normalize(mainGuest.last_name)}`;
            seenNames.add(mainKey);
        }
        for (const room of this.booking.rooms || []) {
            const guest = room?.guest;
            if (!guest)
                continue;
            const key = `${normalize(guest.first_name)}${guest.last_name ? joinKey : ''}${normalize(guest.last_name)}`;
            // Skip exact duplicate first + last names
            if (seenNames.has(key) || !key)
                continue;
            seenNames.add(key);
            rooms.push(room);
        }
        this.rooms = rooms;
    }
    render() {
        return (h(Host, { key: '2d51ae6887417df9ac247ec4900b541ef3d0e913' }, h("wa-radio-group", { key: 'dca2842e939dd0faf92b417beca3156072752703', defaultValue: this.initialValue, onchange: e => this.handleRecipientChange(e.target.value), label: "Bill to", orientation: "vertical", name: `${this.booking?.booking_nbr}-bill-to`, value: this.selectedRecipient, size: "small" }, h("wa-radio", { key: '7aeb84b732932d65daf6e2b50a705c85929a4467', appearance: "button", value: 'guest' }, this.booking?.guest.first_name, " ", this.booking.guest.last_name), this.rooms.map((r, idx) => (h("wa-radio", { appearance: "button", class: "billing-recipient__room", value: `room__${r.guest.first_name} ${r.guest.last_name}`, key: r.guest?.id ?? `guest_${idx}` }, h("span", { class: "billing-recipient__guest-name" }, r.guest.first_name, " ", r.guest.last_name)))), !this.booking.agent && (h("wa-radio", { key: 'c75c48396036d22b3e3df7a34264686afafd25ff', appearance: "button", value: "company" }, this.booking.company_name ? this.booking.company_name : 'Use company name'))), h("ir-booking-company-dialog", { key: 'feffa6c252e8060c5724447cd0a65dfb57552aa2', onCompanyFormClosed: () => {
                if (this.selectedRecipient === 'company' && !this.booking.company_name) {
                    this.handleRecipientChange(this.initialValue);
                }
                else {
                    this.handleRecipientChange('company');
                }
            }, onResetBookingEvt: e => {
                this.booking = { ...e.detail };
                if (!this.booking.company_name) {
                    this.handleRecipientChange(this.initialValue);
                }
                else {
                    this.handleRecipientChange('company');
                }
            }, booking: this.booking, ref: el => (this.bookingCompanyFormRef = el) })));
    }
    static get watchers() { return {
        "booking": ["handleBookingChange"]
    }; }
};
IrBookingBillingRecipient.style = IrBookingBillingRecipientStyle0;

const irBookingCompanyDialogCss = ".sc-ir-booking-company-dialog-h{display:block}";
const IrBookingCompanyDialogStyle0 = irBookingCompanyDialogCss;

const IrBookingCompanyDialog = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.companyFormClosed = createEvent(this, "companyFormClosed", 7);
        this.resetBookingEvt = createEvent(this, "resetBookingEvt", 7);
    }
    booking;
    open;
    companyFormClosed;
    resetBookingEvt;
    async openCompanyForm() {
        this.open = true;
    }
    async closeCompanyForm() {
        this.open = false;
        this.companyFormClosed.emit();
    }
    render() {
        const formId = `${this.booking.booking_nbr}-${v4()}`;
        return (h("ir-dialog", { key: '1e19de17859af699ccbb58baba74d402bc2e19f5', open: this.open, onIrDialogHide: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.closeCompanyForm();
            }, label: "Company", id: "dialog-overview" }, this.open && (h("ir-booking-company-form", { key: '5e3c817f7d11970040ea1fc8f0b76a876cd2a66a', onResetBookingEvt: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.resetBookingEvt.emit(e.detail);
                this.open = false;
                // this.closeCompanyForm();
            }, formId: formId, booking: this.booking })), h("div", { key: '5fb611e146ed6510119d3ed1f06aed094efc2eb8', slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { key: 'f3abd101f601504dcb7dd63f7097b39febcb434a', size: "medium", appearance: "filled", variant: "neutral", "data-dialog": "close" }, "Cancel"), h("ir-custom-button", { key: 'edbe0408b33efabcfb680b8da3997c1744c96789', type: "submit", form: formId, loading: isRequestPending('/DoReservation'), size: "medium", variant: "brand" }, "Save"))));
    }
};
IrBookingCompanyDialog.style = IrBookingCompanyDialogStyle0;

const irBookingCompanyFormCss = ".sc-ir-booking-company-form-h{display:block}.booking-company__form.sc-ir-booking-company-form{display:flex;flex-direction:column;gap:1rem}";
const IrBookingCompanyFormStyle0 = irBookingCompanyFormCss;

const IrBookingCompanyForm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.resetBookingEvt = createEvent(this, "resetBookingEvt", 7);
    }
    booking;
    formId;
    isLoading;
    formData;
    resetBookingEvt;
    bookingService = new BookingService();
    componentWillLoad() {
        this.formData = { company_name: this.booking.company_name, company_tax_nbr: this.booking.company_tax_nbr };
    }
    updateGuest(params) {
        this.formData = { ...this.formData, ...params };
    }
    async saveCompany() {
        try {
            const booking = {
                assign_units: true,
                is_pms: true,
                is_direct: this.booking.is_direct,
                is_backend: true,
                is_in_loyalty_mode: this.booking.is_in_loyalty_mode,
                promo_key: this.booking.promo_key,
                extras: this.booking.extras,
                agent: this.booking.agent,
                booking: {
                    ...this.formData,
                    from_date: this.booking.from_date,
                    to_date: this.booking.to_date,
                    remark: this.booking.remark,
                    booking_nbr: this.booking.booking_nbr,
                    property: this.booking.property,
                    booked_on: this.booking.booked_on,
                    source: this.booking.source,
                    rooms: this.booking.rooms,
                    currency: this.booking.currency,
                    arrival: this.booking.arrival,
                    guest: this.booking.guest,
                },
                pickup_info: this.booking.pickup_info,
            };
            await this.bookingService.doReservation(booking);
            this.resetBookingEvt.emit({ ...this.booking, ...this.formData });
        }
        catch (error) {
            console.error(error);
        }
    }
    render() {
        return (h("form", { key: '4c6dd2d53d5047f95b7daf6780a89d441c97db78', id: this.formId, onSubmit: e => {
                e.preventDefault();
                this.saveCompany();
            }, class: "booking-company__form" }, h("ir-input", { key: 'af8e2fcba4c7aba18ff79bf06d5ffa84a3dab5b2', value: this.formData.company_name, "onText-change": e => this.updateGuest({ company_name: e.detail }), label: "Name", autofocus: true, placeholder: "XYZ LTD" }), h("ir-input", { key: '52da18772afc0d44fa2c31f7dfd9499ceffbef7e', value: this.formData.company_tax_nbr, "onText-change": e => this.updateGuest({ company_tax_nbr: e.detail }), label: "Tax ID", placeholder: "VAT 123456" })));
    }
};
IrBookingCompanyForm.style = IrBookingCompanyFormStyle0;

const irPrintRoomCss = ":host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;}.ir-print-room__header{display:flex;align-items:center;gap:0.625rem;font-weight:bold;font-size:1rem;line-height:1.5rem;margin-bottom:0.375rem}.ir-print-room__body{display:flex;align-items:center;gap:0.625rem;flex-wrap:wrap}.ir-print-room__details{flex:1 1 0%}.ir-print-room__row{display:flex;align-items:center;gap:1rem}.ir-print-room__daily-amounts{display:flex}.room_amount{min-width:4.38rem}.room_amount_container{display:flex;font-weight:600;flex-direction:column}.room_amount{min-width:4.38rem}.room_amount_day{padding:0.31rem}.room_amount_day.amount{font-weight:700;text-transform:capitalize}.room_amount_day.rate{font-weight:700;color:rgb(51, 51, 51)}.room_amount_empty{color:white;pointer-events:none;user-select:none;-webkit-user-drag:none;display:none}.room_amount_rate{display:none;color:#333;font-size:1rem;font-weight:bold}.room_amount_main_container{display:flex;flex-wrap:wrap;}.room_amount.date{color:#1f2937;background:#f3f4f6}.room_amount.amount{margin-bottom:0.5rem}.ir-print-room__daily-amounts--with-divider{padding-bottom:1rem}p,div,section,span{margin:0;padding:0;box-sizing:border-box}body{display:block;font-size:0.88rem;font-weight:600;box-sizing:border-box}.main-container{max-width:56.25rem;margin-left:auto;margin-right:auto;}.label-title{padding:0;margin:0;color:rgb(51, 51, 51);font-weight:700}.label-value{padding-left:0.25rem;color:rgb(102, 102, 102);font-weight:600}.booking-details,.pickup-container{padding:0.94rem 0;border-top:1px solid rgb(128, 128, 128);border-bottom:1px solid rgb(128, 128, 128)}.accommodation-summary{display:flex;align-items:center;justify-content:space-between;padding:0.94rem 0;flex-wrap:wrap;gap:0.62rem}.booking-dates{color:rgb(51, 51, 51);font-weight:700;padding:0;margin:0}.roomtype-title td{padding-top:1.56rem;padding-right:0.62rem}.policies{font-size:0.88rem}.policies-container{padding:0.62rem 0.06rem 0.94rem 0.06rem}.policies{padding-inline:0.06rem}.room_amount_day{padding:0.31rem}.room_amount_day.amount{font-weight:700;text-transform:capitalize}.room_amount_day.rate{font-weight:700;color:rgb(51, 51, 51)}.pricing-summary{text-align:end;padding-left:0.62rem;padding-bottom:0.94rem}.room_amount.date{color:#1f2937;background:#f3f4f6}.room_amount.amount{margin-bottom:0.5rem}.pricing-breakdown{display:flex;align-items:center;justify-content:flex-end;flex-wrap:wrap;gap:0.25rem}.property_name,.booked_on_date,.invoice_reference{color:rgb(51, 51, 51);font-size:0.88rem;font-weight:700}.booking-number{font-size:1.25rem;font-weight:600}.header{display:flex;justify-content:space-between;padding-bottom:0.94rem}.booked_on_date{font-weight:600}.reservation-details{display:flex;align-items:center;justify-content:flex-end}.origin-icon{height:2.5rem;width:2.5rem}.invoice_reference{text-align:end}.billing_header{color:#333;box-sizing:border-box;font-size:1rem}.billing_cell{text-align:left}.billing_table{padding:0.62rem 0}.billing_table caption{text-align:start;font-size:1.12rem;padding:0.62rem 0rem 0.94rem}.pickup-details{display:flex;align-items:center;flex-wrap:wrap}.pickup_title{font-size:1.12rem;padding:0rem 0 0.94rem 0}.car_name{color:#333;font-weight:bold;padding-right:0.62rem}.pickup-details .label-title{padding-right:0.62rem}.billing_reference{width:2.5rem}.room_amount_container{display:flex;flex-direction:column}.room_amount{min-width:4.38rem}.room_amount_empty{color:white;pointer-events:none;user-select:none;-webkit-user-drag:none;display:none}.room_amount_rate{display:none;color:#333;font-size:1rem;font-weight:bold}.room_amount_main_container{display:flex;flex-wrap:wrap;}.ir-print-room__tax-row{display:flex;font-size:0.875rem;font-weight:700}.ir-print-room__totals{display:flex;gap:0.25rem;flex-direction:column}.ir-print-room__header{font-size:1.1rem}.ir-print-room__dates{display:flex;align-items:center;gap:0.5rem;font-weight:600}.ir-print-room__body{flex-direction:column}.ir-print-room__body{align-items:flex-start;margin-top:1rem}@media (min-width: 640px){.ir-print-room__totals{align-items:flex-end}.room_amount_container{flex-direction:column}.ir-print-room__body{flex-direction:row}.billing_header,.billing_cell{padding:0.62rem}.billing_reference{width:auto}.room_amount_empty{display:block}.room_amount_rate{display:block}}";
const IrPrintRoomStyle0 = irPrintRoomCss;

const IrPrintRoom = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /** Room data */
    room;
    /** Booking context */
    booking;
    /** Property context */
    property;
    /** Currency code (e.g. USD, EUR) */
    currency;
    /** Room index */
    idx;
    getSmokingLabel() {
        const { booking, room, property } = this;
        if (booking?.is_direct) {
            if (!room?.smoking_option)
                return null;
            const currRT = property?.roomtypes?.find(rt => rt.id === room?.roomtype?.id);
            const smokingOptions = currRT?.smoking_option?.allowed_smoking_options;
            return smokingOptions?.find(s => s.code === room.smoking_option)?.description ?? null;
        }
        return room?.ota_meta?.smoking_preferences ?? null;
    }
    formatDate(date) {
        const m = hooks(date, 'YYYY-MM-DD');
        const dayMonth = m.format('DD/MM');
        let dayOfWeekAbbr = m.format('ddd'); // Mon, Tue, Wed, Thu, Fri, Sat, Sun
        if (['Thu', 'Sun', 'Sat'].includes(dayOfWeekAbbr)) {
            dayOfWeekAbbr = dayOfWeekAbbr.slice(0, 2);
        }
        else {
            dayOfWeekAbbr = dayOfWeekAbbr.charAt(0);
        }
        return `${dayMonth} ${dayOfWeekAbbr}`;
    }
    formatGuestName({ first_name, last_name }) {
        if (!last_name) {
            return first_name;
        }
        return `${first_name} ${last_name}`;
    }
    formatGuestAvailability({ adult_nbr, children_nbr, infant_nbr }) {
        // Adjust child number based on infants
        const adultCount = adult_nbr > 0 ? adult_nbr : 0;
        const childCount = children_nbr > 0 ? children_nbr : 0;
        const infantCount = infant_nbr > 0 ? infant_nbr : 0;
        // Define labels based on singular/plural rules
        const adultLabel = adultCount > 1 ? 'adults' : 'adult';
        const childLabel = childCount > 1 ? 'children' : 'child';
        const infantLabel = infantCount > 1 ? 'infants' : 'infant';
        // Construct parts with the updated child number
        const parts = [];
        if (adultCount > 0) {
            parts.push(`${adultCount} ${adultLabel}`);
        }
        if (childCount > 0) {
            parts.push(`${childCount} ${childLabel}`);
        }
        if (infantCount > 0) {
            parts.push(`${infantCount} ${infantLabel}`);
        }
        return parts.join('&nbsp&nbsp&nbsp&nbsp');
    }
    formatBookingDates(date) {
        return hooks(date, 'YYYY-MM-DD').format('DD-MMM-YYYY');
    }
    renderTaxSection() {
        // OTA booking taxes
        if (!this.booking?.is_direct) {
            const filteredData = this.room.ota_taxes.filter(tx => tx.amount > 0);
            return filteredData.map((d, index) => (h("div", { key: `room_${d.name}_${index}`, class: "ir-print-room__tax-row" }, h("p", { class: "ir-print-room__tax-label" }, d.is_exlusive ? 'Excluding' : 'Including', " ", d.name), h("p", { class: "ir-print-room__tax-amount" }, d.currency.symbol, d.amount))));
        }
        // Direct booking taxes
        const filteredData = this.property?.taxes?.filter(tx => tx.pct > 0 && tx.is_exlusive);
        return (h(Fragment, null, filteredData?.map((d, index) => {
            const amount = (this.room.total * d.pct) / 100;
            return (h("div", { key: `direct_room_${d.name}_${index}`, class: "ir-print-room__tax-row" }, h("p", { class: "ir-print-room__tax-label" }, d.is_exlusive ? 'Excluding' : 'Including', " ", d.name), h("p", { class: "ir-print-room__tax-amount" }, d.pct, "%: ", formatAmount(this.currency, amount))));
        }), this.room.inclusive_taxes?.CALCULATED_INCLUSIVE_TAXES?.map((d, index) => (h("div", { key: `direct_room_${d.TAX_NAME}_${index}`, class: "ir-print-room__tax-row" }, h("p", { class: "ir-print-room__tax-label" }, "Including ", d.TAX_NAME), h("p", { class: "ir-print-room__tax-amount" }, d.TAX_PCT * 100, "%: ", formatAmount(this.currency, d.CALCULATED_VALUE)))))));
    }
    render() {
        const { room, booking, property, currency, idx } = this;
        const haveMultipleRooms = property.roomtypes?.find(rt => rt.id === room?.roomtype?.id)?.physicalrooms?.length > 1;
        return (h("section", { key: '22ed060f94e17ad9772102d00329d3087e0b868f', class: "ir-print-room" }, h("header", { key: '30a5891f886bdbb3d338ca2da12d8438c717525b', class: "ir-print-room__header" }, h("p", { key: 'a2fbaa9c67e95186e6a0d9013072a7b019e657fa', class: "ir-print-room__room-type" }, room?.roomtype?.name), haveMultipleRooms && room?.unit && h("p", { key: 'c662c23c81382ce58b7c3eea004523c0e7c02fe7', class: "ir-print-room__unit" }, "(unit ", room.roomtype.id, ")"), h("p", { key: 'fa8af02ed096e0e7c69f69d8c99c47971d085a97', class: "ir-print-room__rate-plan" }, room?.rateplan?.short_name || room?.rateplan?.name)), h("div", { key: 'dd1ae3e5d737bf9cc1feb89610d14af2e12712af', class: "ir-print-room__body" }, h("div", { key: '0d4b585ebb74e2394aab0b8748badd15eb2f792a', class: "ir-print-room__details" }, h("div", { key: '26c53b506884562c424daf6eb91840e4326f6bb8', class: "ir-print-room__row" }, h("ir-printing-label", { key: 'a90679c8dadfb4c6d33dd0e291628de033f7a87a', label: "Guest Name:", content: this.formatGuestName(room?.sharing_persons?.find(p => p.is_main) ?? room?.guest) }), h("ir-printing-label", { key: 'cf71e2b56b6908298fe853436c396f3820e352da', "as-html": true, content: this.formatGuestAvailability(room?.occupancy) })), h("div", { key: 'e2320c65782bc5d3607cff4b8b82bccc84107502', class: "ir-print-room__row" }, h("div", { key: 'a8f9cdccfd8228690f3d2fcc6a8bc93be40dd8de', class: "ir-print-room__dates" }, this.formatBookingDates(room?.from_date), h("span", { key: 'e666ae4ad619c89eaae9992f4fd3380ba78a6fe7', class: "ir-print-room__date-separator" }, "\u2192"), this.formatBookingDates(room?.to_date)), room?.departure_time?.description && h("p", { key: 'c4d031f187da39cb95a32264d8de23f9db581614', class: "ir-print-room__departure-time" }, "(Expected departure time: ", room.departure_time.description, ")")), h("ir-printing-label", { key: '2bf60ffd2401a2079ca7c8be977fce4a11efaf33', label: "Smoking options:", display: "inline", content: this.getSmokingLabel() }), booking?.is_direct && (h("div", { key: 'f677afd33c7b3ec44faf11b586e2345982ad6d20', class: "ir-print-room__policies" }, h("ir-printing-label", { key: 'a6dd5d3395b79a02a69ace649c2121dc916d6360', label: "Cancellation:", display: "inline", asHtml: true, content: room?.rateplan?.cancelation?.replace('<u>', '')?.replace('</u>', '')?.replace('<b>', '<b style="font-weight:bold">') }), h("ir-printing-label", { key: '9c603de1d3ef1779a097b5f41ef245e7e431b3be', label: "Guarantee:", display: "inline", asHtml: true, content: (room?.rateplan?.guarantee ?? '')?.replace('<u>', '')?.replace('</u>', '')?.replace('<b>', '<b style="font-weight:bold">') })))), h("aside", { key: 'd11a1790df1d85610e5ae636db4748149d70ef74', class: "ir-print-room__totals" }, h("ir-printing-label", { key: '1800d24964f331c98e9eb9dcf5c52217b20ccb15', label: "Total:", content: formatAmount(currency, room?.total) }), this.renderTaxSection(), h("ir-printing-label", { key: 'd984935bfbf2bd5ce591d7294e76eb3a1744a1b6', label: "Grand total:", content: formatAmount(currency, room?.gross_total) }), booking?.is_direct && h("ir-printing-label", { key: '9682c0ec8881401b1b0fd95a0a5f66c4b9603945', label: "Due upon booking:", content: formatAmount(currency, Number(room?.gross_guarantee)) }))), h("div", { key: '9ccb2124d745c62061a1ee30ca866600afa2b712', class: {
                'ir-print-room__daily-amounts': true,
                'ir-print-room__daily-amounts--with-divider': idx < booking?.rooms?.length - 1,
            } }, room?.days?.map(d => (h("div", { class: "room_amount_container", key: d.date }, h("p", { class: "room_amount date" }, this.formatDate(d.date)), h("p", { class: "room_amount amount", style: { paddingRight: '0.375rem' } }, formatAmount(currency, d.amount))))))));
    }
};
IrPrintRoom.style = IrPrintRoomStyle0;

const irPrintingExtraServiceCss = ":host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block}.ir-print-extra-services{padding:1rem 0;border-top:1px solid #d1d5db}.ir-print-extra-services__title{font-weight:600;font-size:1.125rem ;line-height:1.75rem ;color:#111827;margin-bottom:0.625rem}.ir-print-extra-services__list{display:flex;flex-direction:column;gap:0.75rem}.ir-print-extra-services__item{display:flex;justify-content:space-between;gap:1rem;flex-wrap:wrap}.ir-print-extra-services__details{display:flex;flex-direction:column;gap:0.25rem;max-width:80%}.ir-print-extra-services__description{word-break:break-word}.ir-print-extra-services__dates{font-size:0.75rem;color:#374151}.ir-print-extra-services__date-wrapper{display:inline-flex;align-items:center;gap:0.25rem}.ir-print-extra-services__date{white-space:nowrap}.ir-print-extra-services__date-separator{margin:0 0.25rem}.ir-print-extra-services__date::part(content){font-size:0.875rem}.ir-print-extra-services__price{font-weight:700;white-space:nowrap}";
const IrPrintingExtraServiceStyle0 = irPrintingExtraServiceCss;

const IrPrintingExtraService = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /** Extra services attached to the booking */
    extraServices;
    /** Booking currency */
    currency;
    invocableKeys;
    render() {
        return (h("section", { key: '232326273b336c00db73e6fc9b831dd398a6d642', class: "ir-print-extra-services" }, h("h3", { key: 'f8af8327819d16f821e4ee906a0f947618b46b1d', class: "ir-print-extra-services__title" }, "Extra services"), h("div", { key: '44b7f0f79236ceb9af04b759d717e96d9b26076f', class: "ir-print-extra-services__list" }, this.extraServices?.map(service => {
            if (!this.invocableKeys.has(service.system_id)) {
                return null;
            }
            return (h("div", { key: `service_${service.system_id}`, class: "ir-print-extra-services__item" }, h("div", { class: "ir-print-extra-services__details" }, h("ir-printing-label", { display: "inline", label: "", class: "ir-print-extra-services__description", content: service.description }), (service.start_date || service.end_date) && (h("div", { class: "ir-print-extra-services__dates" }, h("span", { class: "ir-print-extra-services__date-wrapper" }, "(", service.start_date && (h("ir-printing-label", { class: "ir-print-extra-services__date", label: "", content: hooks(service.start_date).format('dddd, DD MMM YYYY') })), service.end_date && (h(Fragment, null, h("span", { class: "ir-print-extra-services__date-separator" }, "\u2013"), h("ir-printing-label", { class: "ir-print-extra-services__date", label: "", content: hooks(service.end_date).format('dddd, DD MMM YYYY') }))), ")")))), h("div", { class: "ir-print-extra-services__price" }, formatAmount(this.currency?.symbol, service?.price || 0))));
        }))));
    }
};
IrPrintingExtraService.style = IrPrintingExtraServiceStyle0;

const irPrintingLabelCss = ":host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block}:host([display='inline']) .ir-printing-label__container{display:inline-flex !important;max-width:100%;align-items:center}.ir-printing-label__container{display:flex;align-items:center;gap:0.25rem}.ir-printing-label__header{font-size:0.75rem;font-weight:600}.ir-printing-label__label{font-size:var(--wa-font-size-m);font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance}.ir-printing-label__content{font-size:0.875rem}.ir-printing-label__text{margin:0}.ir-printing-label__footer{margin-top:0.25rem}";
const IrPrintingLabelStyle0 = irPrintingLabelCss;

const IrPrintingLabel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * Fallback label text (used if no label slot is provided)
     */
    label;
    asHtml;
    display = 'flex';
    /**
     * Fallback content text (used if no content slot is provided)
     */
    content;
    render() {
        if (!this.content) {
            return null;
        }
        return (h(Host, { class: "ir-printing-label" }, h("section", { part: "container", class: "ir-printing-label__container" }, this.label && (h("p", { class: "ir-printing-label__label", part: "label" }, this.label)), this.asHtml ? (h("p", { part: "content", class: "ir-printing-label__text", innerHTML: this.content })) : (h("p", { part: "content", class: "ir-printing-label__text" }, this.content)))));
    }
};
IrPrintingLabel.style = IrPrintingLabelStyle0;

const irPrintingPickupCss = ":host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}.main-container{max-width:56.25rem;margin-left:auto;margin-right:auto;}.label-title{padding:0;margin:0;color:rgb(51, 51, 51);font-weight:700}.label-value{padding-left:0.25rem;color:rgb(102, 102, 102);font-weight:600}.booking-details,.pickup-container{padding:0.94rem 0;border-top:1px solid rgb(128, 128, 128);border-bottom:1px solid rgb(128, 128, 128)}.accommodation-summary{display:flex;align-items:center;justify-content:space-between;padding:0.94rem 0;flex-wrap:wrap;gap:0.62rem}.booking-dates{color:rgb(51, 51, 51);font-weight:700;padding:0;margin:0}.roomtype-title td{padding-top:1.56rem;padding-right:0.62rem}.policies{font-size:0.88rem}.policies-container{padding:0.62rem 0.06rem 0.94rem 0.06rem}.policies{padding-inline:0.06rem}.room_amount_day{padding:0.31rem}.room_amount_day.amount{font-weight:700;text-transform:capitalize}.room_amount_day.rate{font-weight:700;color:rgb(51, 51, 51)}.pricing-summary{text-align:end;padding-left:0.62rem;padding-bottom:0.94rem}.room_amount.date{color:#1f2937;background:#f3f4f6}.room_amount.amount{margin-bottom:0.5rem}.pricing-breakdown{display:flex;align-items:center;justify-content:flex-end;flex-wrap:wrap;gap:0.25rem}.property_name,.booked_on_date,.invoice_reference{color:rgb(51, 51, 51);font-size:0.88rem;font-weight:700}.booking-number{font-size:1.25rem;font-weight:600}.header{display:flex;justify-content:space-between;padding-bottom:0.94rem}.booked_on_date{font-weight:600}.reservation-details{display:flex;align-items:center;justify-content:flex-end}.origin-icon{height:2.5rem;width:2.5rem}.invoice_reference{text-align:end}.billing_header{color:#333;box-sizing:border-box;font-size:1rem}.billing_cell{text-align:left}.billing_table{padding:0.62rem 0}.billing_table caption{text-align:start;font-size:1.12rem;padding:0.62rem 0rem 0.94rem}.pickup-details{display:flex;align-items:center;flex-wrap:wrap}.pickup_title{font-size:1.12rem;padding:0rem 0 0.94rem 0}.car_name{color:#333;font-weight:bold;padding-right:0.62rem}.pickup-details .label-title{padding-right:0.62rem}.billing_reference{width:2.5rem}.room_amount_container{display:flex;flex-direction:column}.room_amount{min-width:4.38rem}.room_amount_empty{color:white;pointer-events:none;user-select:none;-webkit-user-drag:none;display:none}.room_amount_rate{display:none;color:#333;font-size:1rem;font-weight:bold}.room_amount_main_container{display:flex;flex-wrap:wrap;}@media only screen and (min-width: 768px){.room_amount_container{flex-direction:column}.billing_header,.billing_cell{padding:0.62rem}.billing_reference{width:auto}.room_amount_empty{display:block}.room_amount_rate{display:block}}:host{display:block}.ir-print-pickup{padding:1rem 0;border-top:1px solid #d1d5db}.ir-print-pickup__title{font-size:1.125rem;font-weight:600;color:#111827;margin-bottom:0.625rem}.ir-print-pickup__content{display:flex;flex-direction:column;gap:0.5rem}.ir-print-pickup__row{display:flex;align-items:center;flex-wrap:wrap;gap:0.75rem}.ir-print-pickup__row--secondary{margin-top:0.375rem}.ir-print-pickup__vehicle{font-weight:500;white-space:nowrap}.ir-print-pickup__vehicle-separator{margin:0 0.25rem}";
const IrPrintingPickupStyle0 = irPrintingPickupCss;

const IrPrintingPickup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /** Pickup information attached to the booking */
    pickup;
    render() {
        if (!this.pickup) {
            return null;
        }
        return (h("section", { class: "ir-print-pickup" }, h("p", { class: "ir-print-pickup__title" }, "Yes, from ", this.pickup.selected_option.location.description), h("div", { class: "ir-print-pickup__content" }, h("div", { class: "ir-print-pickup__row" }, h("ir-printing-label", { label: "Arrival date:", content: hooks(this.pickup.date).format('dddd, DD MMM YYYY') }), h("ir-printing-label", { label: "Arrival time:", content: _formatTime(this.pickup.hour.toString(), this.pickup.minute.toString()) }), h("ir-printing-label", { label: "Flight details:", content: this.pickup.details })), h("div", { class: "ir-print-pickup__row ir-print-pickup__row--secondary" }, h("p", { class: "ir-print-pickup__vehicle" }, this.pickup.selected_option.vehicle.description, h("span", { class: "ir-print-pickup__vehicle-separator" }, " \u2013 "), formatAmount(this.pickup.selected_option.currency.symbol, this.pickup.selected_option.amount)), h("ir-printing-label", { label: "Number of vehicles:", content: this.pickup.nbr_of_units?.toString() }), h("ir-printing-label", { label: "Due upon booking:", content: formatAmount(this.pickup.currency.symbol, this.pickup.total) })))));
    }
};
IrPrintingPickup.style = IrPrintingPickupStyle0;

export { IrBookingBillingRecipient as ir_booking_billing_recipient, IrBookingCompanyDialog as ir_booking_company_dialog, IrBookingCompanyForm as ir_booking_company_form, IrPrintRoom as ir_print_room, IrPrintingExtraService as ir_printing_extra_service, IrPrintingLabel as ir_printing_label, IrPrintingPickup as ir_printing_pickup };

//# sourceMappingURL=ir-booking-billing-recipient_7.entry.js.map