import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '8a0a43b8560f77317b549cb7c3a9ed095b8dd567', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '3ab4e9f51f9caf4587e6e9f6eec0ed3125956d11', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '9ed6143bc84980fbd95599421086b2a6ebf2acb9', class: "table-header" }, h("tr", { key: 'da2a1c1b21db29bebd1e04b5332e0a7c4de4b7b8' }, h("th", { key: '613e8b30dde67758dc296508f58733ffb1a74cca', class: "text-center" }, "Date"), h("th", { key: '6e7c7e15372c3b52df722f3636081f086e206dd5', class: "text-center" }, "Booking"), h("th", { key: 'c9ab1e206d3e50bec8cf20fe2fee89cfda24914f', class: "text-center" }, "By direct"), h("th", { key: '30dcc6f919b3a08e7e3392a23192dad0450c65bc', class: "text-right" }, "Amount"), h("th", { key: 'fa9db71e860a04a0fe16ce0e788dd0fc68a3bd3d', class: "text-center" }))), h("tbody", { key: '531501147bd5c9641447150a248d258274127d7b' }, h("tr", { key: 'f43935dbd52cb14cede71970ef0ece6ce0ccecdc', class: "ir-table-row" }, h("td", { key: 'd82ef9a42c17b6caefe915e326d23b39d9890947', class: "text-center" }, "1"), h("td", { key: '950a54b7fa1e592e601ae247a35185aa19b166f3', class: "text-center" }, h("ir-button", { key: '28abe4c7483661b73dba9221f64b1767c2a9b507', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '5b4e872f5cfeff5a1786a89e1084f92f30aa9e5a', class: "text-center" }, "1"), h("td", { key: 'd581b482c5e9bc4981d99d508434a7f0fba2605d', class: "text-right" }, "1"), h("td", { key: '2ad741ed2d002120d3dc086da121cf40d9d29466' }, h("ir-button", { key: 'cb07f4fa6534ef95db3f5c164c87aef13d44bed7', size: "sm", text: "Pay", onClickHandler: () => {
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
