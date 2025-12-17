import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '1c5c73c08cfd024b59f426ad0bbf941336ac9938', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '924458789b7f9d56cf601df86648dce7412256bf', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '0f62b37f0ec6cf17987e59a5f97dd7ad60b8e2e9', class: "table-header" }, h("tr", { key: 'dfdbe0f67945fc365962cbafa175ae5d903848e4' }, h("th", { key: 'dbd96007af179c080cfdfaa59b6163027c337410', class: "text-center" }, "Date"), h("th", { key: '802fe413c969201835210bd195eae1c88de5c52c', class: "text-center" }, "Booking"), h("th", { key: '61d0138cdb75eccbb29844e1235f2774dfd66d15', class: "text-center" }, "By direct"), h("th", { key: '29ecf2ee72abd61a0575cd38cc4e9b4564457102', class: "text-right" }, "Amount"), h("th", { key: '2a1e67195b98f5d0b51504c5f138a97811a5177e', class: "text-center" }))), h("tbody", { key: 'e5587e18459b8da3a1ba33224308d7d539981990' }, h("tr", { key: '916adf9296f3a30302109dfc1b2b4f4394c3cd00', class: "ir-table-row" }, h("td", { key: '4d4cc0f5ffa834c678d52c978d4d0ea8f21c8672', class: "text-center" }, "1"), h("td", { key: '46a68d2faacca3bca0ac5682e9f0884744c91097', class: "text-center" }, h("ir-button", { key: '3767bbab18fe5e1d68c61087b0139cac1cdac7a0', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: 'd046a668a4b1a6f69ad7cc6a3b64e5b19d0b6ca0', class: "text-center" }, "1"), h("td", { key: 'dc59d8711c440f8a0b02553c2f72e871480cf42c', class: "text-right" }, "1"), h("td", { key: '95e7721473d0bdbf7633c1f9feb855c8ae3ec873' }, h("ir-button", { key: '91b8c125962a953b240dbc2f325c709becee06b7', size: "sm", text: "Pay", onClickHandler: () => {
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
