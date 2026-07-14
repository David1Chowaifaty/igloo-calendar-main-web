import { Fragment, h } from "@stencil/core";
import { BookingService } from "../../../services/booking-service/booking.service";
import { PropertyService } from "../../../services/property.service";
import { formatAmount, getEntryValue } from "../../../utils/utils";
import moment from "moment";
import { isRequestPending } from "../../../stores/ir-interceptor.store";
import { v4 } from "uuid";
import calendar_data from "../../../stores/calendar-data";
import { FdTypes, PayStatus, PayTypes } from "../../../types/enums";
export class IrGuestBilling {
    booking;
    isOpen = null;
    isLoading = 'page';
    invoiceInfo;
    rows = [];
    fdTypes = [];
    voidedInvoices = new Set();
    voidedReceipts = new Set();
    billingClose;
    guestDocumentPreview;
    /** Refreshes the wider booking-details tree. Emit with a Booking payload to skip ir-booking-details' full-page loading spinner. */
    resetBookingEvt;
    bookingService = new BookingService();
    propertyService = new PropertyService();
    _id = `issue_invoice__btn_${v4()}`;
    voidDialogRef;
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
            const [, fdTypes] = await Promise.all([this.refreshInvoiceAndFolio(), this.bookingService.getSetupEntriesByTableName('_FD_TYPE')]);
            this.fdTypes = fdTypes ?? [];
            let voidedReceipts = new Set();
            this.booking.financial.payments?.forEach(payment => {
                if (payment.payment_type?.code === PayTypes.Payment && !payment.is_city_ledger && payment.payment_status?.code === PayStatus.Void) {
                    voidedReceipts.add(payment.receipt_nbr);
                }
            });
            this.voidedReceipts = voidedReceipts;
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = null;
        }
    }
    async refreshInvoiceAndFolio() {
        const [invoiceInfo, { rows }] = await Promise.all([
            this.bookingService.getBookingInvoiceInfo({ booking_nbr: this.booking.booking_nbr }),
            this.propertyService.getUnifiedFolio(this.buildFolioParams()),
        ]);
        this.invoiceInfo = invoiceInfo;
        let voidedInvoices = new Set();
        this.invoiceInfo.invoices?.forEach(invoice => {
            if (invoice.credit_note) {
                voidedInvoices.add(invoice.nbr);
            }
        });
        this.voidedInvoices = voidedInvoices;
        this.rows = rows;
    }
    async handleDocumentVoided(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.refreshInvoiceAndFolio();
        if (e.detail.documentType === FdTypes.Receipt) {
            const voidedReceipts = new Set(this.voidedReceipts);
            voidedReceipts.add(e.detail.documentNumber);
            this.voidedReceipts = new Set(voidedReceipts);
            // Voiding a receipt changes booking.financial.payments, which this component doesn't own.
            // Pass the freshly fetched booking so ir-booking-details updates in place instead of
            // taking the resetBookingEvt(null) branch, which shows its full-page loading spinner.
            const freshBooking = await this.bookingService.getExposedBooking({ booking_nbr: this.booking.booking_nbr, language: 'en' });
            this.resetBookingEvt.emit(freshBooking);
        }
    }
    get fdTypeLabels() {
        const map = {};
        for (const entry of this.fdTypes) {
            map[entry.CODE_NAME] = getEntryValue({ entry, language: 'en' });
        }
        return map;
    }
    get sortedRows() {
        return [...this.rows].sort((a, b) => {
            const aDate = moment(a.DOC_DATE, 'YYYY-MM-DD');
            const bDate = moment(b.DOC_DATE, 'YYYY-MM-DD');
            return aDate.diff(bDate);
        });
    }
    printInvoice({ row, autoDownload }) {
        this.guestDocumentPreview.emit({
            documentNumber: row.DOC_NUMBER,
            fdTypeCode: row.FD_TYPE_CODE,
            bookingNumber: this.booking.booking_nbr,
            autoDownload,
        });
    }
    renderMoney(amount) {
        if (!amount) {
            return null;
        }
        return formatAmount(calendar_data?.property?.currency?.symbol, amount);
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
            } }, "Issue invoice")), h("div", { class: "table-container" }, h("table", { class: "table data-table" }, h("thead", null, h("tr", null, h("th", null, "Date"), h("th", { class: "billing__doc-number-col" }, "Doc number"), h("th", null, "Type"), h("th", { class: "billing__price-col" }, "Debit"), h("th", { class: "billing__price-col" }, "Credit"), h("th", { class: 'text-center' }, "Actions"))), h("tbody", null, this.sortedRows.length === 0 && (h("tr", null, h("td", { colSpan: 6, class: "empty-row" }, h("ir-empty-state", null)))), this.sortedRows.map(row => {
            const isInvoice = row.FD_TYPE_CODE === FdTypes.Invoice;
            const isReceipt = row.FD_TYPE_CODE === FdTypes.Receipt;
            return (h("tr", { class: "ir-table-row", key: row.DOC_NUMBER }, h("td", null, row.DOC_DATE ? moment(row.DOC_DATE, 'YYYY-MM-DD').format('MMM DD, YYYY') : '—'), h("td", { class: "billing__doc-number-col" }, h("wa-button", { onClick: () => this.printInvoice({ row }), variant: "brand", appearance: "plain", class: "billing__invoice-nbr" }, row.DOC_NUMBER)), h("td", null, (row.FD_TYPE_CODE && this.fdTypeLabels[row.FD_TYPE_CODE]) || row.FD_TYPE_CODE || '—'), h("td", { class: "billing__price-col" }, h("span", { class: "ir-price", style: { fontWeight: '400' } }, this.renderMoney(row.DEBIT))), h("td", { class: "billing__price-col" }, h("span", { class: "ir-price", style: { fontWeight: '400' } }, this.renderMoney(row.CREDIT))), h("td", null, h("div", { class: "billing__actions-row" }, h("wa-dropdown", { "onwa-hide": e => {
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
                            this.voidDialogRef?.open({
                                documentType: isInvoice ? FdTypes.Invoice : FdTypes.Receipt,
                                documentNumber: row.DOC_NUMBER,
                                bookingNumber: this.booking.booking_nbr,
                            });
                            break;
                    }
                } }, h("wa-dropdown-item", { value: "view-print" }, "Open PDF", isRequestPending('/Print_Invoice') && h("wa-spinner", { slot: "details" })), isInvoice && !this.voidedInvoices.has(row.DOC_NUMBER) && (h("wa-dropdown-item", { variant: "danger", value: "void" }, "Void with credit note")), isReceipt && !this.voidedReceipts.has(row.DOC_NUMBER) && (h("wa-dropdown-item", { variant: "danger", value: "void" }, "Void with credit receipt")), h("ir-custom-button", { slot: "trigger", id: `pdf-${row.DOC_ID ?? row.DOC_NUMBER}`, variant: "neutral", appearance: "plain" }, h("wa-icon", { name: "ellipsis-vertical", style: { fontSize: '1rem' } })))))));
        })))), h("div", { class: "billing__cards" }, this.sortedRows.length === 0 && (h("div", { class: "billing__empty-state" }, h("ir-empty-state", null))), this.sortedRows.map(row => {
            const isInvoice = row.FD_TYPE_CODE === FdTypes.Invoice;
            return (h("wa-card", { key: row.DOC_NUMBER, class: "billing__card" }, h("div", { class: "billing__card-header" }, h("div", { class: "billing__card-header-info" }, h("p", { class: "billing__card-number" }, (row.FD_TYPE_CODE && this.fdTypeLabels[row.FD_TYPE_CODE]) || row.FD_TYPE_CODE || '—', ":", row.DOC_NUMBER)), h("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'flex-end' } }, h("wa-tooltip", { for: `mobile-download-pdf-${row.DOC_ID ?? row.DOC_NUMBER}` }, "Open PDF"), h("ir-custom-button", { onClickHandler: () => this.printInvoice({ row }), loading: isRequestPending('/Print_Invoice'), id: `mobile-download-pdf-${row.DOC_ID ?? row.DOC_NUMBER}`, variant: "neutral", appearance: "plain", class: "billing__card-download-btn" }, h("wa-icon", { name: "file-pdf", style: { fontSize: '1rem' } })))), h("div", { class: "billing__card-details" }, h("div", { class: "billing__card-detail" }, h("p", { class: "billing__card-detail-label" }, "Date"), h("p", { class: "billing__card-detail-value" }, row.DOC_DATE ? moment(row.DOC_DATE, 'YYYY-MM-DD').format('MMM DD, YYYY') : '—')), h("div", { class: "billing__card-detail" }, h("p", { class: "billing__card-detail-label --amount" }, "Amount"), h("p", { class: "billing__card-detail-value" }, formatAmount(currencySymbol, row.TOTAL_AMOUNT ?? 0)))), isInvoice && !this.voidedInvoices.has(row.DOC_NUMBER) && (h("div", { slot: "footer", class: "billing__card-footer" }, h("ir-custom-button", { onClickHandler: () => {
                    this.voidDialogRef?.open({ documentType: FdTypes.Invoice, documentNumber: row.DOC_NUMBER });
                }, variant: "danger", appearance: "outlined", class: "billing__card-void-btn" }, "Void with credit note")))));
        })))), h("ir-invoice", { invoiceInfo: this.invoiceInfo, onInvoiceClose: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = null;
            }, open: this.isOpen === 'invoice', booking: this.booking }), h("ir-void-document-dialog", { ref: el => (this.voidDialogRef = el), onDocumentVoided: e => this.handleDocumentVoided(e) })));
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
            "fdTypes": {},
            "voidedInvoices": {},
            "voidedReceipts": {}
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
            }, {
                "method": "resetBookingEvt",
                "name": "resetBookingEvt",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Refreshes the wider booking-details tree. Emit with a Booking payload to skip ir-booking-details' full-page loading spinner."
                },
                "complexType": {
                    "original": "Booking | null",
                    "resolved": "Booking",
                    "references": {
                        "Booking": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Booking",
                            "referenceLocation": "Booking"
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
