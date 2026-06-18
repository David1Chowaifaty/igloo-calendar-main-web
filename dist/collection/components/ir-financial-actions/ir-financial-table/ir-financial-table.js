import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: 'd1a175e265fd63cc1e9a16e98fa5202d2698913c', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'df13366d30f60f578fa68d584479dcfabb72f876', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'c697869d9596afd63d9ba12c54d239ba4eca319c', class: "table-header" }, h("tr", { key: '4c2b78c8f22689c9f22522a218dfe9f2a6cf2c9e' }, h("th", { key: 'ccddcef5f2399505a1cd484a050fc416ddcc2d46', class: "text-center" }, "Date"), h("th", { key: 'd3ae05173f029aec3183c6cb0a13110708b7344e', class: "text-center" }, "Booking"), h("th", { key: '185332b7ea2a1584dce03c9bffb3732cdc7b8ffe', class: "text-center" }, "By direct"), h("th", { key: '2b697ffb3ab8b124c971d6dd82c921226908a60f', class: "text-right" }, "Amount"), h("th", { key: '8eb05aebb95433e154e2fa133afe863227a8e554', class: "text-center" }))), h("tbody", { key: 'bae5c35ad231bf2d4a08947c98e4ebed5d2f60cf' }, h("tr", { key: '24a72d333a85558ba8c311e920fcf4b2e42c47ba', class: "ir-table-row" }, h("td", { key: '06e3906d6a8a96497b27f604dad5edbc32cfb8cc', class: "text-center" }, "1"), h("td", { key: '453cdcf8d75f42eaee7faab4571fe969f81f0ecd', class: "text-center" }, h("ir-button", { key: 'df6c55bcab952e5c38a4db656a7a7fea5f880886', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '012b4d6e79872613c5eeb2bcc7343e9ecc372ddf', class: "text-center" }, "1"), h("td", { key: '82ec64723e944ccdd95f2f894d1e5037e7d8bf45', class: "text-right" }, "1"), h("td", { key: 'f0aa91e4d4b2ab1f24d848121514388d882d5efb' }, h("ir-button", { key: '0d2dec8afa5f54a350fd2c0852503c786813d8e9', size: "sm", text: "Pay", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'payment',
                    payload: {
                        payment: {
                            id: -1,
                            date: moment().format('YYYY-MM-DD'),
                            amount: 120,
                            currency: calendar_data.currency,
                            designation: '',
                            reference: '',
                        },
                        bookingNumber: 31203720277,
                        booking: null,
                    },
                });
            } })))))));
    }
    static get is() { return "ir-financial-table"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-financial-table.css", "../../../common/table.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-financial-table.css", "../../../common/table.css"]
        };
    }
    static get events() {
        return [{
                "method": "financialActionsOpenSidebar",
                "name": "financialActionsOpenSidebar",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "SidebarOpenEvent",
                    "resolved": "{ type: \"booking\"; payload: { bookingNumber: number; }; } | { type: \"payment\"; payload: { payment: Payment; bookingNumber: number; booking: Booking; }; }",
                    "references": {
                        "SidebarOpenEvent": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-financial-actions/types.ts::SidebarOpenEvent",
                            "referenceLocation": "SidebarOpenEvent"
                        }
                    }
                }
            }];
    }
}
