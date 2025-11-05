import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    render() {
        return (h("div", { key: 'c96a585731477f8d9d80d8a3ad6f195dc150fc42', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'a6a54571ebcc2943b5094b01084862a216f7edc7', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '2296cfddd60e689323b09b4db3d69fe06c05f484', class: "table-header" }, h("tr", { key: '5f6a012adda62d340eb2f2728705a7c03b54ee4b' }, h("th", { key: '315e921630c11e448d4c888baf6cac27a349e9e0', class: "text-center" }, "Date"), h("th", { key: '48a72b1fe5a20a96dca4dd8565fb8a6ca990e30a', class: "text-center" }, "Booking"), h("th", { key: '76889cb97cac4b9d8be0b9d8c885e39300ad1417', class: "text-center" }, "By direct"), h("th", { key: '40ebe0cbe0e0299c780843e47e2aeaa9e236d01e', class: "text-right" }, "Amount"), h("th", { key: 'cc3bcf396140e83978ffc0eb8ea5f8faa10fe626', class: "text-center" }))), h("tbody", { key: '531f7ec7c3bb03a054340e9557f9180f0e687df2' }, h("tr", { key: '959537259ad10d3105817f4c7ec87f95455edeb4', class: "ir-table-row" }, h("td", { key: 'c8323151c906ed8f285fcadb7eabb603d3332db9', class: "text-center" }, "1"), h("td", { key: '82eb999963c1e261b7eeead51b7d9be7f152c51c', class: "text-center" }, h("ir-button", { key: '6f58afaaef4edaaaca8ed833fa6a93454033deaa', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '7a1ea5edfc3016797251b8d73cac6b16402be276', class: "text-center" }, "1"), h("td", { key: '9d27c61c21c90c555ce53d9a1e0e8145a5cbb8d4', class: "text-right" }, "1"), h("td", { key: 'b82b2b13bcfd4990d130cf8ba7a1dadc581d4e9a' }, h("ir-button", { key: 'a3c1488984e895f3dc20e818253a9be8ee399073', size: "sm", text: "Pay", onClickHandler: () => {
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
