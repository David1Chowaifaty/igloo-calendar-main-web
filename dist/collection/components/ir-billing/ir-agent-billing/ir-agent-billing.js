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
        return (h(Host, { key: '8f24751165cdbaf5f3554d42a95f21e2ea8ddf6e' }, h("div", { key: '280e5b9117eae6829d42c6a2337d721979e2d3fb', class: "billing__container" }, h("div", { key: '73019e20f43ca0e9cfca581fb138ea8d3c87445b', class: "billing__section-title-row" }, h("h4", { key: '8ca7826793affa12e15d177ef37d0b364fb32e74', class: "billing__section-title" }, "Issued documents"), h("ir-custom-button", { key: '0237cec6dd759d48220c2eb3037df9a27946cfa3', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.invoiceDialogRef.openModal();
            }, appearance: 'accent', class: "booking-header__stretched-btn", size: "s", variant: "brand" }, "Issue Invoice")), h("ir-city-ledger-fiscal-documents-table", { key: '207a0e1e591d65838437c54e9b4d4539d74f3cd1', class: 'agent-billing__table', rows: this.fiscalDocuments, isLoading: this.isLoading, hasFetched: this.hasFetched, agentId: this.booking?.agent?.id ?? null, currencySymbol: calendar_data.property?.currency?.symbol ?? '$', fromDate: this.booking?.from_date ?? null, toDate: this.booking?.to_date ?? null, hasDates: true, ticket: this.tokenService.getToken(), propertyId: calendar_data.property?.id, onFetchRequested: () => this.fetchFiscalDocuments() })), h("ir-cl-invoice-dialog", { key: '4386d43afd387b9b4f8aab409ea9c51469ae6957', mode: "booking", agentId: this.booking.agent?.id, bookingNbr: this.booking.booking_nbr, startDate: this.booking.from_date, endDate: this.booking.to_date, currencyId: calendar_data.property.currency.id, rooms: this.booking.rooms ?? [], ref: el => (this.invoiceDialogRef = el), onInvoiceIssued: e => {
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
