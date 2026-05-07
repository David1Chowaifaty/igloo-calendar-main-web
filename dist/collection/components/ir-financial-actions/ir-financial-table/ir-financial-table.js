import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '1febadd15da4f01dab543412a611cdd1f2750135', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '5195048124a3126814860a45d8411759913dc1aa', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'd12a02c3f6043edf6cb67228b9e2ef8dd19ec88d', class: "table-header" }, h("tr", { key: '7202007602db56f2fd69e18cdf9f2e4b9ac1f1c6' }, h("th", { key: '5a0f48e0b54350596c3536843118f6edacc58a2e', class: "text-center" }, "Date"), h("th", { key: '94fd60c230184cefa065f473639aaf0502ed37d8', class: "text-center" }, "Booking"), h("th", { key: '6a578228af4ce2aa49a234998a18d29fd8a7c24d', class: "text-center" }, "By direct"), h("th", { key: '018c83b1f456275dded9406cf4077386a15c1638', class: "text-right" }, "Amount"), h("th", { key: 'f459df3c87f28526ce8225180113587c6790f2ad', class: "text-center" }))), h("tbody", { key: '9d0fef767866cc3a801d566ada1b71c2cd69af39' }, h("tr", { key: 'b780f83ca8572120d037bd1a608e75aa2ed504cb', class: "ir-table-row" }, h("td", { key: '2eb24a24ae5107c84416fbd49a7d8a648c1078bd', class: "text-center" }, "1"), h("td", { key: '010b7690cd4686340dd9c9a791f04a5e8832f1c8', class: "text-center" }, h("ir-button", { key: '849912130b99faa8445144b05bfd3877c69da0d8', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '48ba809698755ef60ee71c9d12773c1635d26227', class: "text-center" }, "1"), h("td", { key: 'c7c7d7874214317ba178d9af1daf0abba126ded4', class: "text-right" }, "1"), h("td", { key: 'e3a96f8347cfddde7e38303eb98021c7ffd66d9f' }, h("ir-button", { key: '159433c197aad29b0522471686a79eab8bf53c7e', size: "sm", text: "Pay", onClickHandler: () => {
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
