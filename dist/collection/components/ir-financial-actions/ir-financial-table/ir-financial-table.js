import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: 'c15ce51db09054681b83ad73f66675d06c840273', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '17e0baf29ce376607d09714caf0ef1283bc84071', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'f9aed579754bdb78206039cd60477fe4127fd77f', class: "table-header" }, h("tr", { key: '8731f4642cbbda159d4620adc0604e2d99d62341' }, h("th", { key: '860dec44847f4748dc4db935ddd912bcc02510a6', class: "text-center" }, "Date"), h("th", { key: '43383da94915d90bf7d70801b562ea9c3ac4eba4', class: "text-center" }, "Booking"), h("th", { key: '7f881997cbbfaeb0c7c54c073d635a9a3b52a767', class: "text-center" }, "By direct"), h("th", { key: '92f5e7fff49e8fc0283c8b5569135122d477fe63', class: "text-right" }, "Amount"), h("th", { key: 'e3784cb53857ed4a3dcc8f7a3c57fd0f61f66104', class: "text-center" }))), h("tbody", { key: '9eb3c0e554322bab85d6da97bf71d064ce1ff769' }, h("tr", { key: 'c548612052491aab0efc025e6c9fa9a785db09d1', class: "ir-table-row" }, h("td", { key: '7aa2049718ac33e07045629dab6d65f72dbb8b4b', class: "text-center" }, "1"), h("td", { key: 'd0fd9eb38bf33b31a8600ea82809fa923288d800', class: "text-center" }, h("ir-button", { key: '7b0b98403295faa690ea2271e08a437a7bb44e59', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '10b4baa43bf612f99c842a1c5ef0610339d0a508', class: "text-center" }, "1"), h("td", { key: '4eb8254dad07f89dbe7108f99c0e7fda4640752e', class: "text-right" }, "1"), h("td", { key: '8c7ab9baf03aa5b2eba084431215b1af79263e5b' }, h("ir-button", { key: 'e5646b1a3e7eb9f3803c4af2cce80a65445a32c1', size: "sm", text: "Pay", onClickHandler: () => {
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
