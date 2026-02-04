'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const irInterceptor_store = require('./ir-interceptor.store-d60f5a34.js');
const v4 = require('./v4-9b297151.js');
const booking_service = require('./booking.service-3793345f.js');
require('./index-fbf1fe1d.js');
require('./utils-1ff7957f.js');
require('./moment-1780b03a.js');
require('./calendar-data-0598de26.js');
require('./locales.store-32782582.js');
require('./axios-6e678d52.js');
require('./booking-4deb3cc3.js');

const irBookingCompanyDialogCss = ".sc-ir-booking-company-dialog-h{display:block}";
const IrBookingCompanyDialogStyle0 = irBookingCompanyDialogCss;

const IrBookingCompanyDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.companyFormClosed = index.createEvent(this, "companyFormClosed", 7);
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt", 7);
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
        const formId = `${this.booking.booking_nbr}-${v4.v4()}`;
        return (index.h("ir-dialog", { key: '6b756190d1322367db6613cd362cc88bb2628373', open: this.open, onIrDialogHide: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.closeCompanyForm();
            }, label: "Company", id: "dialog-overview" }, this.open && (index.h("ir-booking-company-form", { key: 'd165e7aecb31031dcedb88316860abf23d82b59a', onResetBookingEvt: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.resetBookingEvt.emit(e.detail);
                this.open = false;
                // this.closeCompanyForm();
            }, formId: formId, booking: this.booking })), index.h("div", { key: '5f88613f8ebb7bd63bab2fba0bcd487bc62b246c', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: 'dda6435da0661ae0a8b59638b57eec9026b15e8b', size: "medium", appearance: "filled", variant: "neutral", "data-dialog": "close" }, "Cancel"), index.h("ir-custom-button", { key: '84f101af6f2bb2e1136b98470a9edd33599f0fb5', type: "submit", form: formId, loading: irInterceptor_store.isRequestPending('/DoReservation'), size: "medium", variant: "brand" }, "Save"))));
    }
};
IrBookingCompanyDialog.style = IrBookingCompanyDialogStyle0;

const irBookingCompanyFormCss = ".sc-ir-booking-company-form-h{display:block}.booking-company__form.sc-ir-booking-company-form{display:flex;flex-direction:column;gap:1rem}";
const IrBookingCompanyFormStyle0 = irBookingCompanyFormCss;

const IrBookingCompanyForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt", 7);
    }
    booking;
    formId;
    isLoading;
    formData;
    resetBookingEvt;
    bookingService = new booking_service.BookingService();
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
        return (index.h("form", { key: 'ba39d59007905854ceee4930fc65ebf36d9fc6bd', id: this.formId, onSubmit: e => {
                e.preventDefault();
                this.saveCompany();
            }, class: "booking-company__form" }, index.h("ir-input", { key: '927b8a7c7a25197dd1d8769e9605b2364bf81af8', value: this.formData.company_name, "onText-change": e => this.updateGuest({ company_name: e.detail }), label: "Name", autofocus: true, placeholder: "XYZ LTD" }), index.h("ir-input", { key: 'e721cc80d4516aba08a602690563c981da5adf7e', value: this.formData.company_tax_nbr, "onText-change": e => this.updateGuest({ company_tax_nbr: e.detail }), label: "Tax ID", placeholder: "VAT 123456" })));
    }
};
IrBookingCompanyForm.style = IrBookingCompanyFormStyle0;

const irPrintingLabelCss = ":host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block}:host([display='inline']) .ir-printing-label__container{display:inline-flex !important;max-width:100%;align-items:center}.ir-printing-label__container{display:flex;align-items:center;gap:0.25rem}.ir-printing-label__header{font-size:0.75rem;font-weight:600}.ir-printing-label__label{font-size:var(--wa-font-size-m);font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance}.ir-printing-label__content{font-size:0.875rem}.ir-printing-label__text{margin:0}.ir-printing-label__footer{margin-top:0.25rem}";
const IrPrintingLabelStyle0 = irPrintingLabelCss;

const IrPrintingLabel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { class: "ir-printing-label" }, index.h("section", { part: "container", class: "ir-printing-label__container" }, this.label && (index.h("p", { class: "ir-printing-label__label", part: "label" }, this.label)), this.asHtml ? (index.h("p", { part: "content", class: "ir-printing-label__text", innerHTML: this.content })) : (index.h("p", { part: "content", class: "ir-printing-label__text" }, this.content)))));
    }
};
IrPrintingLabel.style = IrPrintingLabelStyle0;

exports.ir_booking_company_dialog = IrBookingCompanyDialog;
exports.ir_booking_company_form = IrBookingCompanyForm;
exports.ir_printing_label = IrPrintingLabel;

//# sourceMappingURL=ir-booking-company-dialog_3.cjs.entry.js.map