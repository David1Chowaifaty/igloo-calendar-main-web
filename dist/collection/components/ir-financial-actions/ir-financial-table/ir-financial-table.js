import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '9dd10e30fb5395ea338acd0bb055fd51c8b99147', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '1004258ace1df8d622f79de73ecbbb326515f4bf', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'e3ee5a6371f5bb8b372f71f22abf2497e5fd01c6', class: "table-header" }, h("tr", { key: 'e031ab2ef57e540364b20ebfcfbc2bcf6db14d0e' }, h("th", { key: '6213f51b0845729aab345f35a144a4c6f323b43a', class: "text-center" }, "Date"), h("th", { key: 'af3fdd362b96048cabd51c96d152158a2198886a', class: "text-center" }, "Booking"), h("th", { key: 'bc52e895c6bd829330cbf4a69c34110b46969abf', class: "text-center" }, "By direct"), h("th", { key: '69565c6459f42b59a6e1136aea018d25aaf2bdd9', class: "text-right" }, "Amount"), h("th", { key: 'ff3b797b3e133e54a30ab916bc9730bdc3caa29b', class: "text-center" }))), h("tbody", { key: '1a7a67e9833cebc406a2f3dc3472f3cf4385f604' }, h("tr", { key: '329e4fd23b3c8b971029d98bf5a9600f62c51f74', class: "ir-table-row" }, h("td", { key: 'ca451f1b6bc81ec4c1edbb0c17a8f3cd27a62587', class: "text-center" }, "1"), h("td", { key: '485dc4c687879f60552cc7aae53f54f131966f27', class: "text-center" }, h("ir-button", { key: '772b5ecbed2a94abc59fd8efa178ffa791c04df8', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '5e87f77597ff8b048ed8756d328aca966989c3bc', class: "text-center" }, "1"), h("td", { key: 'a2f60cae7adea7cf3e542b0e50b64b355930d25e', class: "text-right" }, "1"), h("td", { key: '3f2f3df1b0ce53045659610bb29459baf9c6f2a3' }, h("ir-button", { key: '182de14ea13fd0ca269c6e46a8bd4d29bd1cff29', size: "sm", text: "Pay", onClickHandler: () => {
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
