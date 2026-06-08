import { CityLedgerService } from "../../../services/city-ledger/index";
import calendar_data from "../../../stores/calendar-data";
import Token from "../../../models/Token";
import { Host, h } from "@stencil/core";
export class IrAgentBilling {
    booking;
    fiscalDocuments = [];
    isLoading = false;
    hasFetched = false;
    invoiceDialogRef;
    cityLedgerService = new CityLedgerService();
    tokenService = new Token();
    async componentWillLoad() {
        await this.fetchFiscalDocuments();
    }
    async handleBookingChange(newVal, oldVal) {
        if (newVal?.booking_nbr !== oldVal?.booking_nbr || newVal?.agent?.id !== oldVal?.agent?.id) {
            this.fiscalDocuments = [];
            this.hasFetched = false;
            await this.fetchFiscalDocuments();
        }
    }
    async fetchFiscalDocuments() {
        if (!this.booking?.agent?.id || !this.booking?.booking_nbr)
            return;
        this.isLoading = true;
        try {
            const result = await this.cityLedgerService.getFiscalDocuments({
                AGENCY_ID: this.booking.agent.id,
                START_DATE: this.booking.from_date,
                END_DATE: this.booking.to_date,
                BOOK_NBR: this.booking.booking_nbr,
            });
            this.fiscalDocuments = result ?? [];
        }
        catch (err) {
            console.error('[ir-agent-billing] getFiscalDocuments failed:', err);
            this.fiscalDocuments = [];
        }
        finally {
            this.isLoading = false;
            this.hasFetched = true;
        }
    }
    render() {
        return (h(Host, { key: '08c2c0506ca8d83ff18e9fe92d87615695403502' }, h("div", { key: '5dc365be4d04b09c798f2ea891c746766aeae2b1', class: "billing__container" }, h("div", { key: '949bf135cb59d6a1f3bbab1986f2297803971e2e', class: "billing__section-title-row" }, h("h4", { key: 'ed4085cf01faa34c259ba28d0acc96b5823ebf72', class: "billing__section-title" }, "Issued documents"), h("ir-custom-button", { key: 'b4905bd4360c5a01c62fc4c81b4390e938bcff63', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.invoiceDialogRef.openModal();
            }, appearance: 'accent', class: "booking-header__stretched-btn", size: "small", variant: "brand" }, "Issue Invoice")), h("ir-city-ledger-fiscal-documents-table", { key: '6af982f3bf3f541c411b84a78fdf77e90f20b6c7', class: 'agent-billing__table', rows: this.fiscalDocuments, isLoading: this.isLoading, hasFetched: this.hasFetched, agentId: this.booking?.agent?.id ?? null, currencySymbol: calendar_data.property?.currency?.symbol ?? '$', fromDate: this.booking?.from_date ?? null, toDate: this.booking?.to_date ?? null, hasDates: true, ticket: this.tokenService.getToken(), propertyId: calendar_data.property?.id, onFetchRequested: () => this.fetchFiscalDocuments() })), h("ir-cl-invoice-dialog", { key: 'b380080df6fb25808a1c539b313fa9c1f04a02e5', mode: "booking", agentId: this.booking.agent?.id, bookingNbr: this.booking.booking_nbr, startDate: this.booking.from_date, endDate: this.booking.to_date, currencyId: calendar_data.property.currency.id, rooms: this.booking.rooms ?? [], ref: el => (this.invoiceDialogRef = el), onInvoiceIssued: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.fetchFiscalDocuments();
            } })));
    }
    static get is() { return "ir-agent-billing"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-agent-billing.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-agent-billing.css"]
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
            "fiscalDocuments": {},
            "isLoading": {},
            "hasFetched": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "booking",
                "methodName": "handleBookingChange"
            }];
    }
}
//# sourceMappingURL=ir-agent-billing.js.map
