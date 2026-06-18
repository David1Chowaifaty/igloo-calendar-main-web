'use strict';

var index = require('./index-CJ0kc5p1.js');
var irInterceptor_store = require('./ir-interceptor.store-Bul41qhv.js');
var v4 = require('./v4-_2BfiRUa.js');
var booking_service = require('./booking.service-Dk6ugTCp.js');
require('./index-dbmC5P-h.js');
require('./index-CLqkDPTC.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./utils-CHYeTDt_.js');
require('./moment-CdViwxPQ.js');
require('./calendar-data-CTxCbso4.js');
require('./locales.store-BfrChT1G.js');
require('./type-Dy9pVS4V.js');
require('./booking-BiLyxhv-.js');

const irBookingCompanyDialogCss = () => `.sc-ir-booking-company-dialog-h{display:block}`;

const IrBookingCompanyDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.companyFormClosed = index.createEvent(this, "companyFormClosed");
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt");
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
        return (index.h("ir-dialog", { key: '95bd3764e08092ba8b2ff8f9649020a8a63d38f9', open: this.open, onIrDialogHide: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.closeCompanyForm();
            }, label: "Company", id: "dialog-overview" }, this.open && (index.h("ir-booking-company-form", { key: '3d1821b47c70cc03a8c05314bb1af7176b87288d', onResetBookingEvt: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.resetBookingEvt.emit(e.detail);
                this.open = false;
                // this.closeCompanyForm();
            }, formId: formId, booking: this.booking })), index.h("div", { key: '6c2caa04f5a451af4938b592627c5130d4cfdb3a', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: '684f872747335a0e5ecb37b88bb19e8d6317f3b1', size: "m", appearance: "filled", variant: "neutral", "data-dialog": "close" }, "Cancel"), index.h("ir-custom-button", { key: '218735e896ea2399a4828fd7b4fff42d1bc9a5d9', type: "submit", form: formId, loading: irInterceptor_store.isRequestPending('/DoReservation'), size: "m", variant: "brand" }, "Save"))));
    }
};
IrBookingCompanyDialog.style = irBookingCompanyDialogCss();

const irBookingCompanyFormCss = () => `.sc-ir-booking-company-form-h{display:block}.booking-company__form.sc-ir-booking-company-form{display:flex;flex-direction:column;gap:1rem}`;

const IrBookingCompanyForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt");
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
        return (index.h("form", { key: '9e095167bbdc29d503c8e165f35b2779232bd063', id: this.formId, onSubmit: e => {
                e.preventDefault();
                this.saveCompany();
            }, class: "booking-company__form" }, index.h("ir-input", { key: '53c260cae19509e2ab8b7d53d44d853f575b402b', value: this.formData.company_name, "onText-change": e => this.updateGuest({ company_name: e.detail }), label: "Name", autofocus: true, placeholder: "XYZ LTD" }), index.h("ir-input", { key: '04ff79fdafe04c250730805ac56c87c0cf9c9f6c', value: this.formData.company_tax_nbr, "onText-change": e => this.updateGuest({ company_tax_nbr: e.detail }), label: "Tax ID", placeholder: "VAT 123456" })));
    }
};
IrBookingCompanyForm.style = irBookingCompanyFormCss();

const irPrintingLabelCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block}:host([display='inline']) .ir-printing-label__container{display:inline-flex !important;max-width:100%;align-items:center}.ir-printing-label__container{display:flex;align-items:center;gap:0.25rem}.ir-printing-label__header{font-size:0.75rem;font-weight:600}.ir-printing-label__label{font-size:var(--wa-font-size-m);font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance}.ir-printing-label__content{font-size:0.875rem}.ir-printing-label__text{margin:0}.ir-printing-label__footer{margin-top:0.25rem}`;

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
IrPrintingLabel.style = irPrintingLabelCss();

exports.ir_booking_company_dialog = IrBookingCompanyDialog;
exports.ir_booking_company_form = IrBookingCompanyForm;
exports.ir_printing_label = IrPrintingLabel;
