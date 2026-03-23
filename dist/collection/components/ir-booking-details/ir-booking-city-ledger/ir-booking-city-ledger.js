import { Host, h } from "@stencil/core";
import { CityLedgerService } from "../../../services/city-ledger/index";
import { mapClTxToFolioRow } from "../../ir-city-ledger/ir-city-ledger-folio/types";
import moment from "moment";
export class IrBookingCityLedger {
    cityLedgerService = new CityLedgerService();
    /** Booking object; component is hidden when booking.agent is null. */
    booking;
    /** Active language code. */
    language = 'en';
    /** Currency symbol used in the transaction drawer. */
    currencySymbol = '$';
    /** Service-category entries used to populate the transaction form. */
    svcCategories = [];
    isLoading = false;
    folioRows = [];
    drawerOpen = false;
    error = null;
    componentWillLoad() {
        if (this.booking?.agent) {
            this.fetchCityLedger();
        }
    }
    handleBookingChange(newVal, oldVal) {
        const agentChanged = newVal?.agent?.id !== oldVal?.agent?.id;
        const datesChanged = newVal?.from_date !== oldVal?.from_date || newVal?.to_date !== oldVal?.to_date;
        if (newVal?.agent && (agentChanged || datesChanged)) {
            this.fetchCityLedger();
        }
    }
    async fetchCityLedger() {
        if (!this.booking?.agent)
            return;
        this.isLoading = true;
        this.error = null;
        try {
            const result = await this.cityLedgerService.fetchCL({
                AGENCY_ID: this.booking.agent.id,
                START_DATE: this.booking.from_date,
                END_DATE: this.booking.to_date,
                START_ROW: 0,
                END_ROW: 200,
                SEARCH_QUERY: this.booking.booking_nbr,
            });
            let runningBalance = 0;
            this.folioRows = result.My_Cl_tx.map((tx, i) => {
                runningBalance = runningBalance + tx.DEBIT - tx.CREDIT;
                return { _rowId: String(i), ...mapClTxToFolioRow(tx), balance: runningBalance };
            });
        }
        catch (err) {
            console.error('[ir-booking-city-ledger] fetchCL failed:', err);
            this.error = 'Failed to load city ledger.';
        }
        finally {
            this.isLoading = false;
        }
    }
    get serviceCategoryOptions() {
        return this.svcCategories.map(s => ({ id: s.CODE_NAME, label: s.CODE_VALUE_EN }));
    }
    get bookingOptions() {
        return this.booking?.booking_nbr ? [{ id: this.booking.booking_nbr, label: `#${this.booking.booking_nbr}` }] : [];
    }
    formatAmount(value) {
        if (!value)
            return '—';
        return `${this.currencySymbol}${value.toFixed(2)}`;
    }
    renderTable() {
        if (this.folioRows.length === 0) {
            return h("p", { class: "booking-city-ledger__empty" }, "No city ledger entries for this period.");
        }
        return (h("div", { class: "table--container booking-city-ledger__table-wrap" }, h("table", { class: "table data-table" }, h("thead", null, h("tr", null, h("th", null, "Status"), h("th", null, "Date"), h("th", null, "Description"), h("th", { class: "text-right" }, "Debit"), h("th", { class: "text-right" }, "Credit"))), h("tbody", null, this.folioRows.map(row => (h("tr", { key: row._rowId, class: "ir-table-row" }, h("td", null, h("wa-tag", { size: "small", variant: row.status.variant }, row.status.label, row.status.id === 'billed' && h("wa-icon", { name: "lock" }))), h("td", { class: "booking-city-ledger__cell-date" }, moment(row.serviceDate).format('MMM DD, YYYY')), h("td", null, row.description || '—'), h("td", { class: "text-right" }, row.debit ? this.formatAmount(row.debit) : '—'), h("td", { class: "text-right" }, row.credit ? this.formatAmount(row.credit) : '—'))))))));
    }
    render() {
        if (!this.booking?.agent) {
            return h(Host, null);
        }
        return (h(Host, null, h("wa-card", { class: "booking-city-ledger__card" }, h("div", { slot: "header", class: "booking-city-ledger__header-title" }, h("p", { class: "font-size-large p-0 m-0" }, " City Ledger")), h("wa-tooltip", { for: "booking-city-ledger-add-btn" }, "Add folio entry"), h("ir-custom-button", { slot: "header-actions", id: "booking-city-ledger-add-btn", size: "small", variant: "neutral", appearance: "plain", onClickHandler: () => (this.drawerOpen = true) }, h("wa-icon", { name: "plus", style: { fontSize: '1rem' } })), this.isLoading ? (h("div", { class: "booking-city-ledger__spinner-wrap" }, h("ir-spinner", null))) : this.error ? (h("p", { class: "booking-city-ledger__error" }, this.error)) : (this.renderTable())), h("ir-city-ledger-transaction-drawer", { open: this.drawerOpen, drawerLabel: "New Folio Entry", agentId: this.booking.agent.id, currencySymbol: this.currencySymbol, serviceCategoryOptions: this.serviceCategoryOptions, bookingOptions: this.bookingOptions, onCloseDrawer: () => (this.drawerOpen = false), onTransactionSaved: async () => {
                this.drawerOpen = false;
                await this.fetchCityLedger();
            } })));
    }
    static get is() { return "ir-booking-city-ledger"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booking-city-ledger.css", "../../../common/table.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking-city-ledger.css", "../../../common/table.css"]
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
                    "text": "Booking object; component is hidden when booking.agent is null."
                },
                "getter": false,
                "setter": false
            },
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Active language code."
                },
                "getter": false,
                "setter": false,
                "attribute": "language",
                "reflect": false,
                "defaultValue": "'en'"
            },
            "currencySymbol": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Currency symbol used in the transaction drawer."
                },
                "getter": false,
                "setter": false,
                "attribute": "currency-symbol",
                "reflect": false,
                "defaultValue": "'$'"
            },
            "svcCategories": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IEntries[]",
                    "resolved": "IEntries[]",
                    "references": {
                        "IEntries": {
                            "location": "import",
                            "path": "@/models/IBooking",
                            "id": "src/models/IBooking.ts::IEntries"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Service-category entries used to populate the transaction form."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "folioRows": {},
            "drawerOpen": {},
            "error": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "booking",
                "methodName": "handleBookingChange"
            }];
    }
}
//# sourceMappingURL=ir-booking-city-ledger.js.map
