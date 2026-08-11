import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../utils/utils";
import { CityLedgerService } from "../../../services/city-ledger/index";
import calendar_data from "../../../stores/calendar-data";
import moment from "moment";
import { _formatTime } from "../../ir-booking-details/functions";
export class IrCityLedgerToolbar {
    agentId = null;
    currencySymbol = '$';
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
        return (h(Host, { key: '21105e19513d460cb388bfae6e99b73f00b7b580' }, h("div", { key: 'ab6c3f42d65296e9fa892eb3fc66ecca346b7dd9', class: "toolbar" }, this.accountOverview ? (h("div", { class: "toolbar__stats" }, h("div", { id: "netbalance", class: "toolbar__stat" }, h("span", { class: "toolbar__stat-label" }, "Net Balance"), h("span", { class: {
                'toolbar__stat-value': true,
                'toolbar__stat-value--negative': this.accountOverview.ACCOUNT_NET_BALANCE < 0,
            } }, this.accountOverview.ACCOUNT_NET_BALANCE < 0 ? '-' : '', formatAmount(this.currencySymbol, Math.abs(this.accountOverview.ACCOUNT_NET_BALANCE)))), h("div", { class: "toolbar__stats-sep" }), h("div", { id: "uninvoiced", class: "toolbar__stat" }, h("span", { class: "toolbar__stat-label" }, "Uninvoiced"), h("span", { class: "toolbar__stat-value" }, formatAmount(this.currencySymbol, this.accountOverview.TOTAL_UNINVOICED))), h("wa-tooltip", { for: "netbalance" }, "Ending balance as of ", moment().format('MMM DD, YYYY'), " ", _formatTime(new Date().getHours().toString(), new Date().getMinutes().toString())), h("wa-tooltip", { for: "due-invoice" }), h("wa-tooltip", { for: "uninvoiced" }, "Total ", h("b", null, "unbilled"), " entries from bookings, manual charges, adjustments and discounts."), h("wa-tooltip", { for: "toolbar-held" }, "Total ", h("b", null, "held"), " entries to resolve with agent."))) : (h("div", { class: "toolbar__stats-placeholder" })), h("div", { key: 'e92dec9eca101a4c41a228c3432b0a561f790264', class: "toolbar__actions" }, h("ir-custom-button", { key: '3d5e78d9d53fd0803c7647ab9348c9da3006b4fc', variant: "brand", onClickHandler: () => this.createInvoice.emit() }, "Create Invoice")))));
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "currency-symbol",
                "defaultValue": "'$'"
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
