import { Fragment, h } from "@stencil/core";
import { BookingService } from "../../../services/booking-service/booking.service";
import { PropertyService } from "../../../services/property.service";
import { formatAmount } from "../../../utils/utils";
import moment from "moment";
import { isRequestPending } from "../../../stores/ir-interceptor.store";
import { v4 } from "uuid";
import calendar_data from "../../../stores/calendar-data";
import { FdTypes } from "../../../types/enums";
export class IrGuestBilling {
    booking;
    isOpen = null;
    isLoading = 'page';
    invoiceInfo;
    rows = [];
    selectedInvoice = null;
    billingClose;
    guestDocumentPreview;
    bookingService = new BookingService();
    propertyService = new PropertyService();
    _id = `issue_invoice__btn_${v4()}`;
    componentWillLoad() {
        this.init();
    }
    async handleInvoiceCreation(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.invoiceInfo = { ...e.detail };
        const { rows } = await this.propertyService.getUnifiedFolio(this.buildFolioParams());
        this.rows = rows;
    }
    buildFolioParams() {
        return {
            property_id: calendar_data.property.id,
            from_date: null,
            to_date: null,
            target_type: 'GUEST',
            doc_type: null,
            fd_type_code: null,
            doc_number: null,
            agent_id: null,
            guest_id: null,
            booking_number: this.booking.booking_nbr,
            page_index: 0,
            page_size: 500,
            o_Total_Rows: null,
            is_export_to_excel: false,
            Link_excel: '',
        };
    }
    async init() {
        try {
            this.isLoading = 'page';
            const [invoiceInfo, { rows }] = await Promise.all([
                this.bookingService.getBookingInvoiceInfo({ booking_nbr: this.booking.booking_nbr }),
                this.propertyService.getUnifiedFolio(this.buildFolioParams()),
            ]);
            this.invoiceInfo = invoiceInfo;
            this.rows = rows;
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
        const [invoiceInfo, { rows }] = await Promise.all([
            this.bookingService.getBookingInvoiceInfo({ booking_nbr: this.booking.booking_nbr }),
            this.propertyService.getUnifiedFolio(this.buildFolioParams()),
        ]);
        this.invoiceInfo = invoiceInfo;
        this.rows = rows;
        this.isLoading = null;
        this.selectedInvoice = null;
    }
    get sortedRows() {
        return [...this.rows].sort((a, b) => {
            const aDate = moment(a.DOC_DATE, 'YYYY-MM-DD');
            const bDate = moment(b.DOC_DATE, 'YYYY-MM-DD');
            return aDate.diff(bDate);
        });
    }
    printInvoice({ row, autoDownload }) {
        const isInvoice = row.FD_TYPE_CODE === FdTypes.Invoice;
        this.guestDocumentPreview.emit({
            documentNumber: row.DOC_NUMBER,
            fdTypeCode: isInvoice ? FdTypes.Invoice : FdTypes.CreditNote,
            bookingNumber: this.booking.booking_nbr,
            autoDownload,
        });
    }
    render() {
        if (this.isLoading === 'page') {
            return (h("div", { class: "drawer__loader-container" }, h("ir-spinner", null)));
        }
        const currencySymbol = this.booking.currency?.symbol ?? '';
        return (h(Fragment, null, h("div", { class: "billing__container" }, h("section", null, h("div", { class: "billing__section-title-row" }, h("h4", { class: "billing__section-title" }, "Issued documents"), h("ir-custom-button", { variant: "brand", id: this._id, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = 'invoice';
            } }, "Issue invoice")), h("div", { class: "table-container" }, h("table", { class: "table data-table" }, h("thead", null, h("tr", null, h("th", null, "Date"), h("th", null, "Number"), h("th", { class: "billing__price-col" }, "Amount"), h("th", null, "Actions"))), h("tbody", null, this.sortedRows.length === 0 && (h("tr", null, h("td", { colSpan: 4, class: "empty-row" }, h("ir-empty-state", null)))), this.sortedRows.map(row => {
            const isInvoice = row.FD_TYPE_CODE === FdTypes.Invoice;
            return (h("tr", { class: "ir-table-row", key: row.DOC_NUMBER }, h("td", null, row.DOC_DATE ? moment(row.DOC_DATE, 'YYYY-MM-DD').format('MMM DD, YYYY') : '—'), h("td", null, h("p", { class: "billing__invoice-nbr" }, h("b", null, isInvoice ? 'Invoice' : 'Credit note', ":"), " ", row.DOC_NUMBER)), h("td", { class: "billing__price-col" }, h("span", { class: "ir-price", style: { fontWeight: '400' } }, formatAmount(currencySymbol, row.TOTAL_AMOUNT ?? 0))), h("td", null, h("div", { class: "billing__actions-row" }, h("wa-dropdown", { "onwa-hide": e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                }, "onwa-select": async (e) => {
                    switch (e.detail.item.value) {
                        case 'print':
                            this.printInvoice({ row, autoDownload: true });
                            break;
                        case 'view-print':
                            this.printInvoice({ row });
                            break;
                        case 'void':
                            this.selectedInvoice = row.DOC_NUMBER;
                            break;
                    }
                } }, h("wa-dropdown-item", { value: "view-print" }, "Open PDF", isRequestPending('/Print_Invoice') && h("wa-spinner", { slot: "details" })), isInvoice && (h("wa-dropdown-item", { variant: "danger", value: "void" }, "Void with credit note")), h("ir-custom-button", { slot: "trigger", id: `pdf-${row.DOC_ID ?? row.DOC_NUMBER}`, variant: "neutral", appearance: "plain" }, h("wa-icon", { name: "ellipsis-vertical", style: { fontSize: '1rem' } })))))));
        })))), h("div", { class: "billing__cards" }, this.sortedRows.length === 0 && (h("div", { class: "billing__empty-state" }, h("ir-empty-state", null))), this.sortedRows.map(row => {
            const isInvoice = row.FD_TYPE_CODE === FdTypes.Invoice;
            return (h("wa-card", { key: row.DOC_NUMBER, class: "billing__card" }, h("div", { class: "billing__card-header" }, h("div", { class: "billing__card-header-info" }, h("p", { class: "billing__card-number" }, isInvoice ? 'Invoice' : 'Credit note', ":", row.DOC_NUMBER)), h("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'flex-end' } }, h("wa-tooltip", { for: `mobile-download-pdf-${row.DOC_ID ?? row.DOC_NUMBER}` }, "Open PDF"), h("ir-custom-button", { onClickHandler: () => this.printInvoice({ row }), loading: isRequestPending('/Print_Invoice'), id: `mobile-download-pdf-${row.DOC_ID ?? row.DOC_NUMBER}`, variant: "neutral", appearance: "plain", class: "billing__card-download-btn" }, h("wa-icon", { name: "file-pdf", style: { fontSize: '1rem' } })))), h("div", { class: "billing__card-details" }, h("div", { class: "billing__card-detail" }, h("p", { class: "billing__card-detail-label" }, "Date"), h("p", { class: "billing__card-detail-value" }, row.DOC_DATE ? moment(row.DOC_DATE, 'YYYY-MM-DD').format('MMM DD, YYYY') : '—')), h("div", { class: "billing__card-detail" }, h("p", { class: "billing__card-detail-label --amount" }, "Amount"), h("p", { class: "billing__card-detail-value" }, formatAmount(currencySymbol, row.TOTAL_AMOUNT ?? 0)))), isInvoice && (h("div", { slot: "footer", class: "billing__card-footer" }, h("ir-custom-button", { onClickHandler: () => {
                    this.selectedInvoice = row.DOC_NUMBER;
                }, variant: "danger", appearance: "outlined", class: "billing__card-void-btn" }, "Void with credit note")))));
        })))), h("ir-invoice", { invoiceInfo: this.invoiceInfo, onInvoiceClose: e => {
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
            } }, h("p", null, "Void invoice ", this.selectedInvoice, " by generating a credit note?"), h("div", { slot: "footer", class: "ir-dialog__footer" }, h("ir-custom-button", { "data-dialog": "close", size: "m", appearance: "filled", variant: "neutral" }, "Cancel"), h("ir-custom-button", { loading: this.isLoading === 'void', onClickHandler: this.voidInvoice.bind(this), size: "m", variant: "danger" }, "Confirm")))));
    }
    static get is() { return "ir-guest-billing"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-guest-billing.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-guest-billing.css"]
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
                            "id": "src/models/booking.dto.ts::Booking",
                            "referenceLocation": "Booking"
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
            "rows": {},
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
            }, {
                "method": "guestDocumentPreview",
                "name": "guestDocumentPreview",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "GuestDocumentPreviewRequest",
                    "resolved": "GuestDocumentPreviewRequest",
                    "references": {
                        "GuestDocumentPreviewRequest": {
                            "location": "import",
                            "path": "@/components/ir-fiscal-documents/ir-guest-document-preview/types",
                            "id": "src/components/ir-fiscal-documents/ir-guest-document-preview/types.ts::GuestDocumentPreviewRequest",
                            "referenceLocation": "GuestDocumentPreviewRequest"
                        }
                    }
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
