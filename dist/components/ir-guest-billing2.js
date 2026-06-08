import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { B as BookingService } from './booking.store.js';
import { m as downloadFile, f as formatAmount } from './utils.js';
import { h as hooks } from './moment.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { c as calendar_data } from './calendar-data.js';
import { d as defineCustomElement$k } from './ir-air-date-picker2.js';
import { d as defineCustomElement$j } from './ir-booking-billing-recipient2.js';
import { d as defineCustomElement$i } from './ir-booking-company-dialog2.js';
import { d as defineCustomElement$h } from './ir-booking-company-form2.js';
import { d as defineCustomElement$g } from './ir-custom-button2.js';
import { d as defineCustomElement$f } from './ir-date-select2.js';
import { d as defineCustomElement$e } from './ir-dialog2.js';
import { d as defineCustomElement$d } from './ir-drawer2.js';
import { d as defineCustomElement$c } from './ir-empty-state2.js';
import { d as defineCustomElement$b } from './ir-input2.js';
import { d as defineCustomElement$a } from './ir-invoice2.js';
import { d as defineCustomElement$9 } from './ir-invoice-form2.js';
import { d as defineCustomElement$8 } from './ir-pdf-viewer2.js';
import { d as defineCustomElement$7 } from './ir-preview-screen-dialog2.js';
import { d as defineCustomElement$6 } from './ir-print-room2.js';
import { d as defineCustomElement$5 } from './ir-printing-extra-service2.js';
import { d as defineCustomElement$4 } from './ir-printing-label2.js';
import { d as defineCustomElement$3 } from './ir-printing-pickup2.js';
import { d as defineCustomElement$2 } from './ir-proforma-invoice-preview2.js';
import { d as defineCustomElement$1 } from './ir-spinner2.js';
import { v as v4 } from './v4.js';

const irGuestBillingCss = ".sc-ir-guest-billing-h {\n  \n  --ir-cell-padding: 0.5rem 1rem;\n}\n.ir-table-row.sc-ir-guest-billing td.sc-ir-guest-billing {\n  padding: var(--ir-cell-padding) !important;\n  text-align: left;\n  z-index: 2;\n  background-color: var(--wa-color-surface-default);\n  white-space: nowrap;\n  color: var(--wa-color-text-normal);\n  box-sizing: border-box;\n  \n}\n\n\n\n.table--container.sc-ir-guest-billing {\n  overflow-x: auto;\n}\n.table.sc-ir-guest-billing td.sc-ir-guest-billing {\n  border-top: 0;\n  border-bottom: 1px solid var(--wa-color-neutral-border-quiet, #abaeb9);\n  \n  transition:\n    color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out;\n}\n.table.sc-ir-guest-billing tbody.sc-ir-guest-billing tr.sc-ir-guest-billing:last-child > td.sc-ir-guest-billing {\n  border-bottom: 0 !important;\n}\n.table.sc-ir-guest-billing thead.sc-ir-guest-billing th.sc-ir-guest-billing {\n  border: none !important;\n  background: #ececec;\n  background: color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);\n  color: #374151;\n  padding: 0.5rem 1rem !important;\n  text-align: left;\n}\n.data-table.sc-ir-guest-billing thead.sc-ir-guest-billing th.sc-ir-guest-billing {\n  box-sizing: border-box;\n  background: var(--wa-color-surface-default) !important;\n  padding-top: 0.5rem !important;\n  padding-bottom: 0.5rem !important;\n  \n  border-bottom: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;\n  color: var(--wa-color-text-normal);\n  \n}\n\n.data-table.sc-ir-guest-billing .empty-row.sc-ir-guest-billing {\n  height: 50vh !important;\n  text-align: center;\n  color: var(--wa-color-gray-60);\n}\n\n.data-table--pagination.sc-ir-guest-billing {\n  padding: 0.5rem 1rem;\n  \n  background: var(--wa-color-surface-default);\n  border-top: 1px solid var(--wa-color-neutral-90);\n}\n\n\n\n.selected.sc-ir-guest-billing td.sc-ir-guest-billing {\n  background: var(--wa-color-brand-fill-quiet) !important;\n  border-color: var(--wa-color-neutral-border-quiet) !important;\n}\n.selected.sc-ir-guest-billing td.sc-ir-guest-billing {\n  color: var(--gray-dark) !important;\n  transition:\n    color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out;\n}\n\n\n.sortable.sc-ir-guest-billing, .ir-table-row.sc-ir-guest-billing {\n  transition:\n    color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out;\n}\n.sortable.sc-ir-guest-billing {\n  text-transform: capitalize;\n  cursor: pointer;\n}\n.ir-table-row.sc-ir-guest-billing td.sc-ir-guest-billing {\n  transition-duration: var(--wa-transition-fast);\n}\n.table.sc-ir-guest-billing thead.sc-ir-guest-billing th.sortable.sc-ir-guest-billing {\n  transition-property: background, border, box-shadow, color;\n  transition-duration: var(--wa-transition-fast);\n  transition-timing-function: var(--wa-transition-easing);\n}\n\n.table.sc-ir-guest-billing thead.sc-ir-guest-billing th.sortable.sc-ir-guest-billing:hover {\n  color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));\n  background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important;\n}\n.table.sc-ir-guest-billing thead.sc-ir-guest-billing th.sortable.sc-ir-guest-billing:active {\n  color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));\n  background-color: color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important;\n}\n\n.ir-table-row.sc-ir-guest-billing:hover td.sc-ir-guest-billing {\n  background: #e2e6ea3f !important;\n  background: var(--wa-color-neutral-fill-quiet, #f1f2f3) !important;\n}\n.--clickable.ir-table-row.sc-ir-guest-billing:hover td.sc-ir-guest-billing {\n  background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important;\n}\n.--clickable.ir-table-row.sc-ir-guest-billing:active td.sc-ir-guest-billing {\n  background-color: color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important;\n}\n.selected.ir-table-row.sc-ir-guest-billing:hover td.sc-ir-guest-billing {\n  background-color: color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important;\n}\n.selected.ir-table-row.sc-ir-guest-billing:active td.sc-ir-guest-billing {\n  background-color: color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important;\n}\n.sortable.sc-ir-guest-billing:active {\n  color: #212529;\n  background-color: #e2e8f0;\n  border-color: #d3d9df;\n}\n.sortable.sc-ir-guest-billing svg.sc-ir-guest-billing {\n  color: var(--wa-color-brand-fill-loud);\n}\n\n.sticky-column.sc-ir-guest-billing {\n  position: sticky !important;\n  right: 0;\n  background-color: white;\n}\n.table--container.sc-ir-guest-billing, .data-table.sc-ir-guest-billing {\n  height: 100%;\n}\n\n.sc-ir-guest-billing-h {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.billing__container.sc-ir-guest-billing {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  gap: var(--wa-space-l);\n  padding: 0 var(--wa-space-l);\n}\n.billing__section-title-row.sc-ir-guest-billing {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n.billing__section-title.sc-ir-guest-billing {\n  margin: 0;\n  padding: 0;\n  font-family: var(--wa-font-family-heading);\n  font-weight: var(--wa-font-weight-heading);\n  line-height: var(--wa-line-height-condensed);\n  text-wrap: balance;\n  font-size: var(--wa-font-size-m);\n}\n.billing__actions-row.sc-ir-guest-billing {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  \n  \n  gap: 0.5rem;\n}\n.billing__invoice-nbr.sc-ir-guest-billing {\n  margin: 0;\n  padding: 0;\n}\n.billing__invoice-nbr.--secondary.sc-ir-guest-billing {\n  font-size: 0.75rem;\n}\n.billing__price-col.sc-ir-guest-billing {\n  text-align: end !important;\n}\n\n\n.billing__cards.sc-ir-guest-billing {\n  display: flex;\n  flex-direction: column;\n  gap: var(--wa-space-m);\n  padding-bottom: var(--wa-space-l) !important;\n}\n\n\n.billing__card.sc-ir-guest-billing {\n  display: block;\n}\n\n\n.billing__card-header.sc-ir-guest-billing {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n\n.billing__card-header-info.sc-ir-guest-billing {\n  display: flex;\n  flex-direction: column;\n}\n\n.billing__card-number.sc-ir-guest-billing {\n  margin: 0;\n  font-weight: var(--wa-font-weight-heading);\n  font-family: var(--wa-font-family-heading);\n}\n\n.billing__card-type.sc-ir-guest-billing {\n  margin: 0;\n  font-size: var(--wa-font-size-xs);\n  color: var(--wa-color-text-secondary);\n}\n\n\n.billing__card-download-btn.sc-ir-guest-billing {\n  display: flex;\n  align-items: center;\n}\n\n\n.billing__card-details.sc-ir-guest-billing {\n  display: flex;\n  \n  gap: var(--wa-space-xs);\n  justify-content: space-between;\n}\n\n.billing__card-detail.sc-ir-guest-billing {\n  display: flex;\n  flex-direction: column;\n}\n\n.billing__card-detail-label.sc-ir-guest-billing {\n  margin: 0;\n  font-size: var(--wa-font-size-xs);\n  color: var(--wa-color-text-quiet);\n}\n.billing__card-detail-label.--amount.sc-ir-guest-billing {\n  text-align: end !important;\n}\n.billing__card-detail-value.sc-ir-guest-billing {\n  margin: 0;\n  font-weight: var(--wa-font-weight-regular);\n  font-size: var(--wa-font-size-s);\n}\n.billing__card-void-btn.sc-ir-guest-billing {\n  flex: 1 1 0%;\n}\n\n\n.billing__card-footer.sc-ir-guest-billing {\n  display: flex;\n}\n.table-container.sc-ir-guest-billing {\n  display: none;\n}\n.billing__empty-state.sc-ir-guest-billing {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 30vh;\n}\n.billing__card.sc-ir-guest-billing::part(footer) {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.guest-billing__pdf-viewer.sc-ir-guest-billing {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n@media (min-width: 768px) {\n  .billing__cards.sc-ir-guest-billing {\n    display: none;\n  }\n  .table-container.sc-ir-guest-billing {\n    display: block;\n  }\n}\n@media print {\n  .guest-billing__pdf-viewer.sc-ir-guest-billing {\n    margin: 0;\n  }\n  @page {\n    margin.sc-ir-guest-billing: 0.sc-ir-guest-billing;\n  }\n\n  body.sc-ir-guest-billing {\n    margin: 0;\n  }\n}";
const IrGuestBillingStyle0 = irGuestBillingCss;

const IrGuestBilling = /*@__PURE__*/ proxyCustomElement(class IrGuestBilling extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.billingClose = createEvent(this, "billingClose", 7);
    }
    booking;
    isOpen = null;
    isLoading = 'page';
    invoiceInfo;
    selectedInvoice = null;
    pdfUrl = null;
    billingClose;
    bookingService = new BookingService();
    _id = `issue_invoice__btn_${v4()}`;
    componentWillLoad() {
        this.init();
    }
    async handleInvoiceCreation(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.invoiceInfo = { ...e.detail };
    }
    async init() {
        try {
            this.isLoading = 'page';
            this.invoiceInfo = await this.bookingService.getBookingInvoiceInfo({ booking_nbr: this.booking.booking_nbr });
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = null;
        }
    }
    async voidInvoice(e) {
        this.isLoading = 'void';
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.bookingService.voidInvoice({
            invoice_nbr: this.selectedInvoice,
            property_id: calendar_data.property.id,
            reason: '',
        });
        this.invoiceInfo = await this.bookingService.getBookingInvoiceInfo({ booking_nbr: this.booking.booking_nbr });
        this.isLoading = null;
        this.selectedInvoice = null;
    }
    get invoices() {
        const _invoices = [];
        for (const invoice of this.invoiceInfo.invoices) {
            if (invoice.status.code === 'VALID') {
                _invoices.push(invoice);
            }
            else {
                _invoices.push({ ...invoice, status: { code: 'VALID', description: '' } });
                _invoices.push({ ...invoice, date: invoice.credit_note.date });
            }
        }
        return _invoices.sort((a, b) => {
            const aDate = hooks(a.date ?? a.credit_note?.date, 'YYYY-MM-DD');
            const bDate = hooks(b.date ?? b.credit_note?.date, 'YYYY-MM-DD');
            return aDate.diff(bDate); // ASC order
        });
    }
    async printInvoice({ invoice, autoDownload, mode = 'invoice' }) {
        try {
            const { My_Result } = await this.bookingService.printInvoice({
                property_id: calendar_data.property.id,
                invoice_nbr: invoice.nbr,
                mode,
            });
            if (!My_Result) {
                return;
            }
            if (autoDownload) {
                downloadFile(My_Result);
                return;
            }
            this.pdfUrl = My_Result;
        }
        catch (error) {
            console.error(error);
        }
    }
    render() {
        if (this.isLoading === 'page') {
            return (h("div", { class: "drawer__loader-container" }, h("ir-spinner", null)));
        }
        // const canIssueInvoice = !moment().isBefore(moment(this.booking.from_date, 'YYYY-MM-DD'), 'dates');
        return (h(Fragment, null, h("div", { class: "billing__container" }, h("section", null, h("div", { class: "billing__section-title-row" }, h("h4", { class: "billing__section-title" }, "Issued documents"), h("ir-custom-button", { variant: "brand", id: this._id, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = 'invoice';
            } }, "Issue invoice")), h("div", { class: "table-container" }, h("table", { class: "table data-table" }, h("thead", null, h("tr", null, h("th", null, "Date"), h("th", null, "Number"), h("th", { class: "billing__price-col" }, "Amount"), h("th", null, "Actions"))), h("tbody", null, this.invoices?.length === 0 && (h("tr", null, h("td", { colSpan: 4, class: "empty-row" }, h("ir-empty-state", null)))), this.invoices?.map(invoice => {
            const isValid = invoice.status.code === 'VALID';
            return (h("tr", { class: "ir-table-row" }, h("td", null, invoice.status.code === 'VALID'
                ? hooks(invoice.date, 'YYYY-MM-DD').format('MMM DD, YYYY')
                : hooks(invoice.credit_note.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("td", null, h("p", { class: "billing__invoice-nbr" }, h("b", null, isValid ? 'Invoice' : 'Credit note', ":"), " ", isValid ? invoice.nbr : invoice.credit_note.nbr), !isValid && h("p", { class: "billing__invoice-nbr --secondary" }, invoice.nbr)), h("td", { class: "billing__price-col" }, h("span", { class: "ir-price", style: { fontWeight: '400' } }, formatAmount(invoice.currency.symbol, invoice.total_amount))), h("td", null, h("div", { class: "billing__actions-row" }, h("wa-dropdown", { "onwa-hide": e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                }, "onwa-select": async (e) => {
                    switch (e.detail.item.value) {
                        case 'print':
                            this.printInvoice({ invoice, autoDownload: true, mode: isValid ? 'invoice' : 'creditnote' });
                            break;
                        case 'view-print':
                            this.printInvoice({ invoice, mode: isValid ? 'invoice' : 'creditnote' });
                            break;
                        case 'void':
                            this.selectedInvoice = invoice.nbr;
                            break;
                    }
                } }, h("h3", null, "Issued by: ", invoice.credit_note ? invoice.credit_note.user : invoice.user), h("wa-divider", null), h("wa-dropdown-item", { value: "view-print" }, "Open PDF", isRequestPending('/Print_Invoice') && h("wa-spinner", { slot: "details" })), isValid && !invoice.credit_note && (h("wa-dropdown-item", { variant: "danger", value: "void" }, "Void with credit note")), h("ir-custom-button", { slot: "trigger", id: `pdf-${invoice.system_id}`, variant: "neutral", appearance: "plain" }, h("wa-icon", { name: "ellipsis-vertical", style: { fontSize: '1rem' } })))))));
        })))), h("div", { class: "billing__cards" }, this.invoices?.length === 0 && (h("div", { class: "billing__empty-state" }, h("ir-empty-state", null))), this.invoices?.map(invoice => {
            const isValid = invoice.status.code === 'VALID';
            return (h("wa-card", { key: invoice.nbr, class: "billing__card" }, h("div", { class: "billing__card-header" }, h("div", { class: "billing__card-header-info" }, h("p", { class: "billing__card-number" }, isValid ? 'Invoice' : 'Credit note', ":", isValid ? invoice.nbr : invoice.credit_note.nbr), h("p", { class: "billing__card-type" }, isValid ? '' : invoice.nbr)), h("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'flex-end' } }, h("wa-tooltip", { for: `mobile-download-pdf-${invoice.system_id}` }, "Open PDF"), h("ir-custom-button", { onClickHandler: () => this.printInvoice({ invoice, mode: isValid ? 'invoice' : 'creditnote' }), loading: isRequestPending('/Print_Invoice'), id: `mobile-download-pdf-${invoice.system_id}`, variant: "neutral", appearance: "plain", class: "billing__card-download-btn" }, h("wa-icon", { name: "file-pdf", style: { fontSize: '1rem' } })))), h("div", { class: "billing__card-details" }, h("div", { class: "billing__card-detail" }, h("p", { class: "billing__card-detail-label" }, "Date"), h("p", { class: "billing__card-detail-value" }, ' ', isValid ? hooks(invoice.date, 'YYYY-MM-DD').format('MMM DD, YYYY') : hooks(invoice.credit_note.date, 'YYYY-MM-DD').format('MMM DD, YYYY'))), h("div", { class: "billing__card-detail" }, h("p", { class: "billing__card-detail-label --amount" }, "Amount"), h("p", { class: "billing__card-detail-value" }, formatAmount(invoice.currency.symbol, invoice.total_amount ?? 0)))), isValid && !invoice.credit_note && (h("div", { slot: "footer", class: "billing__card-footer" }, h("ir-custom-button", { onClickHandler: () => {
                    this.selectedInvoice = invoice.nbr;
                }, variant: "danger", appearance: "outlined", class: "billing__card-void-btn" }, "Void with credit note")))));
        })))), h("ir-invoice", { invoiceInfo: this.invoiceInfo, onInvoiceClose: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = null;
            }, open: this.isOpen === 'invoice', booking: this.booking }), h("ir-preview-screen-dialog", {
            // hideDefaultAction
            open: this.pdfUrl !== null, label: "Invoice", action: "print", onOpenChanged: e => {
                if (!e.detail) {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.pdfUrl = null;
                }
            }
        }, this.pdfUrl && h("ir-pdf-viewer", { class: "guest-billing__pdf-viewer", src: this.pdfUrl })), h("ir-dialog", { label: "Alert", open: this.selectedInvoice !== null, lightDismiss: false, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedInvoice = null;
            } }, h("p", null, "Void invoice ", this.selectedInvoice, " by generating a credit note?"), h("div", { slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { "data-dialog": "close", size: "medium", appearance: "filled", variant: "neutral" }, "Cancel"), h("ir-custom-button", { loading: this.isLoading === 'void', onClickHandler: this.voidInvoice.bind(this), size: "medium", variant: "danger" }, "Confirm")))));
    }
    static get style() { return IrGuestBillingStyle0; }
}, [2, "ir-guest-billing", {
        "booking": [16],
        "isOpen": [32],
        "isLoading": [32],
        "invoiceInfo": [32],
        "selectedInvoice": [32],
        "pdfUrl": [32]
    }, [[0, "invoiceCreated", "handleInvoiceCreation"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-guest-billing", "ir-air-date-picker", "ir-booking-billing-recipient", "ir-booking-company-dialog", "ir-booking-company-form", "ir-custom-button", "ir-date-select", "ir-dialog", "ir-drawer", "ir-empty-state", "ir-input", "ir-invoice", "ir-invoice-form", "ir-pdf-viewer", "ir-preview-screen-dialog", "ir-print-room", "ir-printing-extra-service", "ir-printing-label", "ir-printing-pickup", "ir-proforma-invoice-preview", "ir-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-guest-billing":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrGuestBilling);
            }
            break;
        case "ir-air-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$k();
            }
            break;
        case "ir-booking-billing-recipient":
            if (!customElements.get(tagName)) {
                defineCustomElement$j();
            }
            break;
        case "ir-booking-company-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$i();
            }
            break;
        case "ir-booking-company-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$h();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-date-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-drawer":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-empty-state":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-invoice":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-invoice-form":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-pdf-viewer":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-preview-screen-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-print-room":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-printing-extra-service":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-printing-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-printing-pickup":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-proforma-invoice-preview":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrGuestBilling as I, defineCustomElement as d };

//# sourceMappingURL=ir-guest-billing2.js.map