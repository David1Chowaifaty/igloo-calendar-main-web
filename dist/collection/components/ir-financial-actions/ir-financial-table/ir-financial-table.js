import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '02f3e8e61119405b9df83223d71870f27a60f5d4', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'e0c9722f58f4345a5a6f565e549c44e5a15c168b', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'dd5cee14710ca38d5c3d5107f75adb7fb54145f8', class: "table-header" }, h("tr", { key: '2fcdd7a19b34e75231497ecc8c8cd85849af6901' }, h("th", { key: 'ef8d415a87583b1b18322a1e95fed94b0de769ba', class: "text-center" }, "Date"), h("th", { key: '075c02b749e307342393bc17b9c8d04acf0df973', class: "text-center" }, "Booking"), h("th", { key: '06eeccef91898d995f41fd0aa5417af7452c6349', class: "text-center" }, "By direct"), h("th", { key: '6ad3c1bde5392c04de657747ffe0bf90ea2be78f', class: "text-right" }, "Amount"), h("th", { key: 'a3a2e975be60a1676d7b92adb9f6d9b2fa9a10e1', class: "text-center" }))), h("tbody", { key: '7880635be736ff49b719c2d312a8ed06ef89e80d' }, h("tr", { key: 'c6e22aa1a8cf39b4d111e7b0ce17f055511af6dd', class: "ir-table-row" }, h("td", { key: 'e0108010544601118691647d7148974632e58c7f', class: "text-center" }, "1"), h("td", { key: 'fa91d42a5c9b4432458013402695b23f6c068711', class: "text-center" }, h("ir-button", { key: 'f7da2e5725fa16b2ef0167147230a8cba44119d7', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: 'e572265a51275c71ee32c1927f0952c236ae98cd', class: "text-center" }, "1"), h("td", { key: 'd5f15d421b9a6de4197bfd5ee525ead53840731a', class: "text-right" }, "1"), h("td", { key: '1f643604dbb26e06b79834029cfecbb4babdd1f4' }, h("ir-button", { key: '9f43ebb6ac2b4e544d454581e5b3815cbf83e8ac', size: "sm", text: "Pay", onClickHandler: () => {
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
