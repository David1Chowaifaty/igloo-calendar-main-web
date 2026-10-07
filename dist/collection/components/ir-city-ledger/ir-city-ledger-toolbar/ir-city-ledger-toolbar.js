import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../utils/utils";
import { CityLedgerService } from "../../../services/city-ledger/index";
import calendar_data from "../../../stores/calendar-data";
import moment from "moment";
import { _formatTime } from "../../ir-booking-details/functions";
import { formatDate } from "../../../utils/date/index";
import { t } from "../../../services/locale/t";
export class IrCityLedgerToolbar {
    agentId = null;
    accountOverview = null;
    createInvoice;
    cityLedgerService = new CityLedgerService();
    componentWillLoad() {
        if (this.agentId)
            this.fetchOverview();
    }
    async handleAgentIdChange(newValue, oldValue) {
        if (newValue === oldValue)
            return;
        this.accountOverview = null;
        if (newValue)
            await this.fetchOverview();
    }
    async refresh() {
        await this.fetchOverview();
    }
    async fetchOverview() {
        if (!this.agentId)
            return;
        this.accountOverview = await this.cityLedgerService.getCLAccountOverview({
            AGENCY_ID: this.agentId,
            CURRENCY_ID: calendar_data?.property?.currency?.id,
        });
    }
    render() {
        return (h(Host, { key: '4651d067958e20f0d7b03bdb2edf88b47b8007a9' }, h("div", { key: '1a1f231cd864ef35bf2e7f2a183f8ac70c9a8513', class: "toolbar" }, this.accountOverview ? (h("div", { class: "toolbar__stats" }, h("div", { id: "netbalance", class: "toolbar__stat" }, h("span", { class: "toolbar__stat-label" }, t('Lcz_NetBalance', { fallback: 'Net Balance' })), h("span", { class: {
                'toolbar__stat-value': true,
                'toolbar__stat-value--negative': this.accountOverview.ACCOUNT_NET_BALANCE < 0,
            } }, this.accountOverview.ACCOUNT_NET_BALANCE < 0 ? '-' : '', formatAmount(calendar_data.currency.symbol, Math.abs(this.accountOverview.ACCOUNT_NET_BALANCE)))), h("div", { class: "toolbar__stats-sep" }), h("div", { id: "uninvoiced", class: "toolbar__stat" }, h("span", { class: "toolbar__stat-label" }, t('Lcz_Uninvoiced', { fallback: 'Uninvoiced' })), h("span", { class: "toolbar__stat-value" }, formatAmount(calendar_data.currency.symbol, this.accountOverview.TOTAL_UNINVOICED))), h("wa-tooltip", { for: "netbalance" }, t('Lcz_EndingBalanceAsOfTooltip', {
            fallback: 'Ending balance as of %1 %2',
            params: [formatDate(moment(), 'MMM DD, YYYY'), _formatTime(new Date().getHours().toString(), new Date().getMinutes().toString())],
        })), h("wa-tooltip", { for: "due-invoice" }), h("wa-tooltip", { for: "uninvoiced" }, t('Lcz_UnbilledEntriesTooltip', { fallback: 'Total unbilled entries from bookings, manual charges, adjustments and discounts.' })), h("wa-tooltip", { for: "toolbar-held" }, t('Lcz_HeldEntriesTooltip', { fallback: 'Total held entries to resolve with agent.' })))) : (h("div", { class: "toolbar__stats-placeholder" })), h("div", { key: '55044bdfc6df3ceb3d9b84e9ff161366155e08fa', class: "toolbar__actions" }, h("ir-custom-button", { key: 'd7b68893e7c647dcc991e408043f3b5c4e68b60d', variant: "brand", onClickHandler: () => this.createInvoice.emit() }, t('Lcz_CreateInvoice', { fallback: 'Create Invoice' }))))));
    }
    static get is() { return "ir-city-ledger-toolbar"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-city-ledger-toolbar.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-city-ledger-toolbar.css"]
        };
    }
    static get properties() {
        return {
            "agentId": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number | null",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "agent-id",
                "defaultValue": "null"
            }
        };
    }
    static get states() {
        return {
            "accountOverview": {}
        };
    }
    static get events() {
        return [{
                "method": "createInvoice",
                "name": "createInvoice",
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
    static get methods() {
        return {
            "refresh": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get watchers() {
        return [{
                "propName": "agentId",
                "methodName": "handleAgentIdChange"
            }];
    }
}
