import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: 'dd9a420ec8a7ca210d356a900239068a0a932987', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '5c3677ac3c94d746a4fb3cb118a4f8d2363c26d4', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '26bee637e57f13d34f08547b045a72f1dd732ee3', class: "table-header" }, h("tr", { key: 'c16f613ecb01ce6618478fe28462e8147e2ecf3b' }, h("th", { key: '9b713af904020ce0a48e46764423eb52a668016e', class: "text-center" }, "Date"), h("th", { key: 'dd45d6a557bf6b28df83851122c593a019fc0923', class: "text-center" }, "Booking"), h("th", { key: '6315a5ae479634c2ee6e3aecb641fb3af3f6f9f0', class: "text-center" }, "By direct"), h("th", { key: 'a986dc26caacc898d769468036778b97a952f303', class: "text-right" }, "Amount"), h("th", { key: '3f7cdd58b29e664ecda319381edfa2d4ec03488b', class: "text-center" }))), h("tbody", { key: '08fe4a3f530cbc452d7a2f059274531ad0ab80da' }, h("tr", { key: 'b00d678526761dda75df571344f33ecbf10cfa2a', class: "ir-table-row" }, h("td", { key: '5e84d89670bf35e7709532ae976a8c6f91e1cff3', class: "text-center" }, "1"), h("td", { key: '77685211171b034cdb79020ad7154becab30e75f', class: "text-center" }, h("ir-button", { key: '2e7113892757d081e8039428cc4fcab854842abe', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '138c516e73953762dfc2cde391d0b0866eceb1df', class: "text-center" }, "1"), h("td", { key: 'ae3a1e51c5d3cfa2ba46dfac3ac6438e10353e7c', class: "text-right" }, "1"), h("td", { key: 'dfa1fbcbd86edc043f35a0b9836e6450787ad78f' }, h("ir-button", { key: 'dfc6c41df799af5d285f22c0409550ed733f0f79', size: "sm", text: "Pay", onClickHandler: () => {
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
                            "id": "src/components/ir-financial-actions/types.ts::SidebarOpenEvent"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=ir-financial-table.js.map
