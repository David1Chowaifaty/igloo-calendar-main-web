import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../utils/utils";
import { CityLedgerService } from "../../../services/city-ledger/index";
import calendar_data from "../../../stores/calendar-data";
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
        return (h(Host, { key: '1b8ffc2ef4afeeb45d8db01a445cffe96495a9a1' }, h("div", { key: '14e545c79a1fdf1c34bd3d8fb490ae4e77fb5b99', class: "toolbar" }, this.accountOverview ? (h("div", { class: "toolbar__stats" }, h("div", { class: "toolbar__stat" }, h("span", { class: "toolbar__stat-label" }, "Net Balance"), h("span", { class: {
                'toolbar__stat-value': true,
                'toolbar__stat-value--negative': this.accountOverview.ACCOUNT_NET_BALANCE < 0,
            } }, this.accountOverview.ACCOUNT_NET_BALANCE < 0 ? '-' : '', formatAmount(this.currencySymbol, Math.abs(this.accountOverview.ACCOUNT_NET_BALANCE)))), h("div", { class: "toolbar__stats-sep" }), h("div", { class: "toolbar__stat" }, h("span", { class: "toolbar__stat-label" }, "Due Invoiced"), h("span", { class: "toolbar__stat-value" }, formatAmount(this.currencySymbol, this.accountOverview.TOTAL_DUE_INVOICED))), h("div", { class: "toolbar__stats-sep" }), h("div", { class: "toolbar__stat" }, h("span", { class: "toolbar__stat-label" }, "Uninvoiced"), h("span", { class: "toolbar__stat-value" }, formatAmount(this.currencySymbol, this.accountOverview.TOTAL_UNINVOICED))))) : (h("div", { class: "toolbar__stats-placeholder" })), h("div", { key: 'a47ed90f60701f8340d1a480a172950edc5e5ee5', class: "toolbar__actions" }, h("ir-custom-button", { key: '72b796a54570893044d612a98a332052f6d8ddde', variant: "brand", onClickHandler: () => this.createInvoice.emit() }, "Create Invoice")))));
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
                "attribute": "agent-id",
                "reflect": false,
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
                "attribute": "currency-symbol",
                "reflect": false,
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
//# sourceMappingURL=ir-city-ledger-toolbar.js.map
