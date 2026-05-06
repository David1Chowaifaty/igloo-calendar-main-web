import { CityLedgerService } from "../../../services/city-ledger/index";
import calendar_data from "../../../stores/calendar-data";
import Token from "../../../models/Token";
import { Host, h } from "@stencil/core";
export class IrAgentBilling {
    booking;
    fiscalDocuments = [];
    isLoading = false;
    hasFetched = false;
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
        return (h(Host, { key: '3b1c974bad469f76c43a3176c17b8162a2ff8a63' }, h("div", { key: '16afad274c4491573df024dc9ca7b35aed1210b4', class: "billing__container" }, h("div", { key: 'd5638ab2905415fd61999cfd3cd4323df7dba9a2', class: "billing__section-title-row" }, h("h4", { key: '9ef1c8c5b0d0a499978de9e4547a00da2c4f95a4', class: "billing__section-title" }, "Issued documents")), h("ir-city-ledger-fiscal-documents-table", { key: 'fad801cc7e86011e02c5e51290e5d931678af0b4', class: 'agent-billing__table', rows: this.fiscalDocuments, isLoading: this.isLoading, hasFetched: this.hasFetched, agentId: this.booking?.agent?.id ?? null, currencySymbol: calendar_data.property?.currency?.symbol ?? '$', fromDate: this.booking?.from_date ?? null, toDate: this.booking?.to_date ?? null, hasDates: true, ticket: this.tokenService.getToken(), propertyId: calendar_data.property?.id, onFetchRequested: () => this.fetchFiscalDocuments() }))));
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
