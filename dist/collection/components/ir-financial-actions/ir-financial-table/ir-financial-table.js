import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: 'cfd705aec2d1be6bd645b3308100013f10cc6cff', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '3ab3cfbfaab55f4d211a44ee238c622a82c41df0', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'c66fac46ae3b049443cca5e00f69ccbae3355dce', class: "table-header" }, h("tr", { key: 'e910020eef7e2610fe1e37036d111a3ebcb48ece' }, h("th", { key: '7aa7b8b62249a7c011ed4ea9905931421d61001b', class: "text-center" }, "Date"), h("th", { key: '33de1cc1f5c141a2e6689f489fd72f8658ab9d3c', class: "text-center" }, "Booking"), h("th", { key: '4ed44261e4d2e6d5155f16f4f38c9bb5e977138a', class: "text-center" }, "By direct"), h("th", { key: 'b53d8cf617ebb7d86e3697a5a52e8514c5a59e4d', class: "text-right" }, "Amount"), h("th", { key: 'b00a7123899e89a533c53f21966f9909ab223478', class: "text-center" }))), h("tbody", { key: 'a09fdea3a92369116f2c74a7ccc91eff86f34c80' }, h("tr", { key: 'b829866785c4006d9b3c0296ea1d41171be15fc8', class: "ir-table-row" }, h("td", { key: 'b20d65cc7a6d21d1d7022a4f4edc6a8b8d31278f', class: "text-center" }, "1"), h("td", { key: '0b0578903b5f048413bb10f3e264d115937918db', class: "text-center" }, h("ir-button", { key: 'df82c0e50d3c0347b8382adbbe70564e8b4de4ba', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '756b8dbee7347569e6fc1ca6a83db3cbc8ad86c2', class: "text-center" }, "1"), h("td", { key: '17b20f2d875138b45cc53eda27df2a8b5d888487', class: "text-right" }, "1"), h("td", { key: '1179f70971c713fc930018d49fd8131957f1eb86' }, h("ir-button", { key: 'bee74ab73902b22df2d7e15a28258d35d5a9a5d7', size: "sm", text: "Pay", onClickHandler: () => {
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
                    "resolved": "{ type: \"booking\"; payload: { bookingNumber: number; }; } | { type: \"payment\"; payload: { payment: Payment; bookingNumber: number; }; }",
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
