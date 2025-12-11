import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '4240f3c3dc3537019769cd8cc378beedbb97c068', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'a36bb12e1a986ac3a5113c1e015f8d85ba8ae0e7', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '8de74c05b86d8f1b0cd7e85c3b8ad9d73ebee2b2', class: "table-header" }, h("tr", { key: 'be9fe12d74e86dd17489b924ab40ad30029f301f' }, h("th", { key: '540c99a1c6c9782bc958c5aeb44e302b1f33d634', class: "text-center" }, "Date"), h("th", { key: 'fda5db2fb661b9ed81f4d18d93c216158707cc8b', class: "text-center" }, "Booking"), h("th", { key: '4bdada26ec16f70929610baf5679fc80fe63bcaa', class: "text-center" }, "By direct"), h("th", { key: '323c41a6e38994bf9d6659c605a58fd085ea0190', class: "text-right" }, "Amount"), h("th", { key: 'c27776b98870e4c5f309d1190556ef5f0d0daf92', class: "text-center" }))), h("tbody", { key: '294232ed69681c3874325703eccc85e3902c01c8' }, h("tr", { key: '4867a257e69b5ccea4b5d2c489653b1098c0ab71', class: "ir-table-row" }, h("td", { key: '354d837f8e66c279096b44e2280d4f8987f3c391', class: "text-center" }, "1"), h("td", { key: 'c25d95dc65b61c899b9bffd76e24e58752f09766', class: "text-center" }, h("ir-button", { key: 'c00c142f458ea3cb8d78749b91e78152c8535900', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '97853ecd22b9efb23aeaf9d238b2607e31d54717', class: "text-center" }, "1"), h("td", { key: '6f66be73d449cad7b9423ab2af1baffe882fcd55', class: "text-right" }, "1"), h("td", { key: '5e310c7cf0cbf57545221f34738e449ba1725e8c' }, h("ir-button", { key: 'd5b25e09720d73e7f018b65da05aa63d64882b9e', size: "sm", text: "Pay", onClickHandler: () => {
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
