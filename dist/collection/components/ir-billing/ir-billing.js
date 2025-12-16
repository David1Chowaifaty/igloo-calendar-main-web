import { Fragment, h } from "@stencil/core";
import { BookingService } from "../../services/booking-service/booking.service";
import { downloadFile, formatAmount } from "../../utils/utils";
import moment from "moment";
import { isRequestPending } from "../../stores/ir-interceptor.store";
export class IrBilling {
    booking;
    isOpen = null;
    isLoading = 'page';
    invoiceInfo;
    selectedInvoice = null;
    billingClose;
    bookingService = new BookingService();
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
            const aDate = moment(a.date ?? a.credit_note?.date, 'YYYY-MM-DD');
            const bDate = moment(b.date ?? b.credit_note?.date, 'YYYY-MM-DD');
            return aDate.diff(bDate); // ASC order
        });
    }
    async printInvoice(invoice, autoDownload = false) {
        try {
            const { My_Result } = await this.bookingService.printInvoice({
                invoice_nbr: invoice.nbr,
                mode: invoice.credit_note ? 'creditnote' : 'invoice',
            });
            if (!My_Result) {
                return;
            }
            if (autoDownload) {
                downloadFile(My_Result);
                return;
            }
            window.open(My_Result);
        }
        catch (error) {
            console.error(error);
        }
    }
    render() {
        if (this.isLoading === 'page') {
            return (h("div", { class: "drawer__loader-container" }, h("ir-spinner", null)));
        }
        return (h(Fragment, null, h("div", { class: "billing__container" }, h("section", null, h("div", { class: "billing__section-title-row" }, h("h4", { class: "billing__section-title" }, "Issued documents"), h("ir-custom-button", { variant: "brand", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = 'invoice';
            } }, "Issue invoice")), h("div", { class: "table-container" }, h("table", { class: "table" }, h("thead", null, h("tr", null, h("th", null, "Date"), h("th", null, "Number"), h("th", { class: "billing__price-col" }, "Amount"), h("th", null))), h("tbody", null, this.invoices?.map(invoice => {
            const isValid = invoice.status.code === 'VALID';
            return (h("tr", { class: "ir-table-row" }, h("td", null, invoice.status.code === 'VALID'
                ? moment(invoice.date, 'YYYY-MM-DD').format('MMM DD, YYYY')
                : moment(invoice.credit_note.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("td", null, h("p", { class: "billing__invoice-nbr" }, h("b", null, isValid ? 'Invoice' : 'Credit note', ":"), " ", isValid ? invoice.nbr : invoice.credit_note.nbr), !isValid && h("p", { class: "billing__invoice-nbr --secondary" }, invoice.nbr)), h("td", { class: "billing__price-col" }, h("span", { class: "ir-price", style: { fontWeight: '400' } }, formatAmount(invoice.currency.symbol, invoice.total_amount))), h("td", null, h("div", { class: "billing__actions-row" }, h("wa-dropdown", { "onwa-hide": e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                }, "onwa-select": async (e) => {
                    switch (e.detail.item.value) {
                        case 'print':
                            this.printInvoice(invoice, true);
                            break;
                        case 'view-print':
                            this.printInvoice(invoice);
                            break;
                        case 'void':
                            this.selectedInvoice = invoice.nbr;
                            break;
                    }
                } }, h("h3", null, "Issued by: ", invoice.credit_note ? invoice.credit_note.user : invoice.user), h("wa-divider", null), h("wa-dropdown-item", { value: "view-print" }, "Open pdf", isRequestPending('/Print_Invoice') && h("wa-spinner", { slot: "details" })), isValid && !invoice.credit_note && (h("wa-dropdown-item", { variant: "danger", value: "void" }, "Void with credit note")), h("ir-custom-button", { slot: "trigger", id: `pdf-${invoice.system_id}`, variant: "neutral", appearance: "plain" }, h("wa-icon", { name: "ellipsis-vertical", style: { fontSize: '1rem' } })))))));
        })))), h("div", { class: "billing__cards" }, this.invoices?.map(invoice => {
            const isValid = invoice.status.code === 'VALID';
            return (h("wa-card", { key: invoice.nbr, class: "billing__card" }, h("div", { class: "billing__card-header" }, h("div", { class: "billing__card-header-info" }, h("p", { class: "billing__card-number" }, isValid ? 'Invoice' : 'Credit note', ":", isValid ? invoice.nbr : invoice.credit_note.nbr), h("p", { class: "billing__card-type" }, isValid ? '' : invoice.nbr)), h("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'flex-end' } }, h("wa-tooltip", { for: `mobile-download-pdf-${invoice.system_id}` }, "Open pdf"), h("ir-custom-button", { onClickHandler: () => this.printInvoice(invoice), loading: isRequestPending('/Print_Invoice'), id: `mobile-download-pdf-${invoice.system_id}`, variant: "neutral", appearance: "plain", class: "billing__card-download-btn" }, h("wa-icon", { name: "file-pdf", style: { fontSize: '1rem' } })))), h("div", { class: "billing__card-details" }, h("div", { class: "billing__card-detail" }, h("p", { class: "billing__card-detail-label" }, "Date"), h("p", { class: "billing__card-detail-value" }, ' ', isValid ? moment(invoice.date, 'YYYY-MM-DD').format('MMM DD, YYYY') : moment(invoice.credit_note.date, 'YYYY-MM-DD').format('MMM DD, YYYY'))), h("div", { class: "billing__card-detail" }, h("p", { class: "billing__card-detail-label --amount" }, "Amount"), h("p", { class: "billing__card-detail-value" }, formatAmount(invoice.currency.symbol, invoice.total_amount ?? 0)))), isValid && !invoice.credit_note && (h("div", { slot: "footer", class: "billing__card-footer" }, h("ir-custom-button", { onClickHandler: () => {
                    this.selectedInvoice = invoice.nbr;
                }, variant: "danger", appearance: "outlined", class: "billing__card-void-btn" }, "Void with credit note")))));
        })), this.invoiceInfo.invoices?.length === 0 && h("ir-empty-state", { style: { width: '100%', height: '40vh' } }))), h("ir-invoice", { invoiceInfo: this.invoiceInfo, onInvoiceClose: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = null;
            }, open: this.isOpen === 'invoice', booking: this.booking }), h("ir-dialog", { label: "Alert", open: this.selectedInvoice !== null, lightDismiss: false, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedInvoice = null;
            } }, h("p", null, "Void invoice ", this.selectedInvoice, " by generating a credit note?"), h("div", { slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { "data-dialog": "close", size: "medium", appearance: "filled", variant: "neutral" }, "Cancel"), h("ir-custom-button", { loading: this.isLoading === 'void', onClickHandler: this.voidInvoice.bind(this), size: "medium", variant: "danger" }, "Confirm")))));
    }
    static get is() { return "ir-billing"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-billing.css", "../../common/table.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-billing.css", "../../common/table.css"]
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
                            "id": "src/models/booking.dto.ts::Booking"
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
            "isOpen": {},
            "isLoading": {},
            "invoiceInfo": {},
            "selectedInvoice": {}
        };
    }
    static get events() {
        return [{
                "method": "billingClose",
                "name": "billingClose",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get listeners() {
        return [{
                "name": "invoiceCreated",
                "method": "handleInvoiceCreation",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-billing.js.map
