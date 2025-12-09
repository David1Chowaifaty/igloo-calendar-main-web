import { Fragment, h } from "@stencil/core";
import { BookingService } from "../../services/booking-service/booking.service";
import { formatAmount } from "../../utils/utils";
import moment from "moment";
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
        this.invoiceInfo = await this.bookingService.getBookingInvoiceInfo({ booking_nbr: this.booking.booking_nbr });
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
    render() {
        if (this.isLoading === 'page') {
            return (h("div", { class: "drawer__loader-container" }, h("ir-spinner", null)));
        }
        return (h(Fragment, null, h("div", { class: "billing__container" }, h("section", null, h("div", { class: "billing__section-title-row" }, h("h4", { class: "billing__section-title" }, "Physical documents"), h("ir-custom-button", { variant: "brand", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = 'invoice';
            } }, "Issue invoice")), h("div", { class: "table-container" }, h("table", { class: "table" }, h("thead", null, h("tr", null, h("th", null, "Type"), h("th", null, "Number"), h("th", null, "Date"), h("th", { class: "billing__price-col" }, "Amount"), h("th", null))), h("tbody", null, this.invoiceInfo?.invoices?.map(invoice => (h("tr", { class: "ir-table-row" }, h("td", null, invoice.status.code === 'VALID' ? 'Invoice' : 'Credit note'), h("td", null, invoice.status.code === 'VALID' ? invoice.nbr : invoice.credit_note.nbr), h("td", null, invoice.status.code === 'VALID'
            ? moment(invoice.date, 'YYYY-MM-DD').format('MMM DD, YYYY')
            : moment(invoice.credit_note.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("td", { class: "billing__price-col" }, h("span", { class: "ir-price" }, formatAmount(invoice.currency.symbol, invoice.total_amount ?? 0))), h("td", null, h("div", { class: "billing__actions-row" }, h("wa-tooltip", { for: `pdf-${invoice.system_id}` }, "Download pdf"), h("ir-custom-button", { id: `pdf-${invoice.system_id}`, variant: "neutral", appearance: "plain" }, h("wa-icon", { name: "file-pdf", style: { fontSize: '1rem' } })), invoice.status.code === 'VALID' && (h("ir-custom-button", { onClickHandler: () => {
                this.selectedInvoice = invoice.nbr;
            }, variant: "danger", appearance: "plain" }, "Void with credit note")))))))))), h("div", { class: "billing__cards" }, this.invoiceInfo.invoices?.map(invoice => (h("wa-card", { key: invoice.nbr, class: "billing__card" }, h("div", { class: "billing__card-header" }, h("div", { class: "billing__card-header-info" }, h("p", { class: "billing__card-number" }, invoice.status.code === 'VALID' ? invoice.nbr : invoice.credit_note.nbr), h("p", { class: "billing__card-type" }, invoice.status.code === 'VALID' ? 'Invoice' : 'Credit note')), h("wa-tooltip", { for: `mobile-pdf-${invoice.system_id}` }, "Download pdf"), h("ir-custom-button", { id: `mobile-pdf-${invoice.system_id}`, variant: "neutral", appearance: "plain", class: "billing__card-download-btn" }, h("wa-icon", { name: "file-pdf", style: { fontSize: '1rem' } }))), h("div", { class: "billing__card-details" }, h("div", { class: "billing__card-detail" }, h("p", { class: "billing__card-detail-label" }, "Date"), h("p", { class: "billing__card-detail-value" }, ' ', invoice.status.code === 'VALID'
            ? moment(invoice.date, 'YYYY-MM-DD').format('MMM DD, YYYY')
            : moment(invoice.credit_note.date, 'YYYY-MM-DD').format('MMM DD, YYYY'))), h("div", { class: "billing__card-detail" }, h("p", { class: "billing__card-detail-label --amount" }, "Amount"), h("p", { class: "billing__card-detail-value" }, formatAmount(invoice.currency.symbol, invoice.total_amount ?? 0)))), invoice.status.code === 'VALID' && (h("div", { slot: "footer", class: "billing__card-footer" }, h("ir-custom-button", { onClickHandler: () => {
                this.selectedInvoice = invoice.nbr;
            }, variant: "danger", appearance: "outlined", class: "billing__card-void-btn" }, "Void with credit note"))))))), this.invoiceInfo.invoices?.length === 0 && h("div", null, "No invoices created"))), h("ir-invoice", { invoiceInfo: this.invoiceInfo, onInvoiceClose: e => {
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
            } }, h("p", null, "Confirm that you want to void this invoice and generate a corresponding credit note."), h("div", { slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { "data-dialog": "close", size: "medium", appearance: "filled", variant: "neutral" }, "Cancel"), h("ir-custom-button", { loading: this.isLoading === 'void', onClickHandler: this.voidInvoice.bind(this), size: "medium", variant: "danger" }, "Confirm")))));
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
