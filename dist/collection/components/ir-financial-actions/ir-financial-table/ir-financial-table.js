import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '907b26ec2de2ec513b967f2f35a7c9a428c28a65', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '10401a75102dc52010b0f12fa0a8ced1ecf8a6a8', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '7163dbb2cb45f2e823510070a058a90ef1eca846', class: "table-header" }, h("tr", { key: '0ba1d366a1952a4f403e45f42b0b5873a81ce8b4' }, h("th", { key: 'c5f6a3a59d32cf4aad52db8987ac68c36df23551', class: "text-center" }, "Date"), h("th", { key: '32ba2cc7ad540a4215e722d5076b8d2eb8713d3a', class: "text-center" }, "Booking"), h("th", { key: '65399208d85a3636ecadd383a6718cd93b59eaaa', class: "text-center" }, "By direct"), h("th", { key: '53cd5749d22820f503c163d874d39076451300c3', class: "text-right" }, "Amount"), h("th", { key: 'de8e97a2f468268b29438c0efa363e572b2bd01b', class: "text-center" }))), h("tbody", { key: 'e06933047cd2b090a47dc9c5eefa0ecbb94805d2' }, h("tr", { key: '7d68a10c25c012e731c736981b17ef6dd32b6928', class: "ir-table-row" }, h("td", { key: '23f3334a606c6a829ae49a28320581fe6d99f956', class: "text-center" }, "1"), h("td", { key: 'd2240e19b91680c44043b9e656fbacc55fcfb2b6', class: "text-center" }, h("ir-button", { key: '0abb580bbdaacadb9ef8e8b7b84549dcaa988ec9', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: 'a9ab4c097717d3b12c38f2fcc7b7fcae460e00b2', class: "text-center" }, "1"), h("td", { key: '419dd797afcee8cf14fea4e6a47fb99eb5008f10', class: "text-right" }, "1"), h("td", { key: 'd16766f6b6475e8feada825ca215fba09fd2601f' }, h("ir-button", { key: '12c21f020d285210c491316f707d4f670522102d', size: "sm", text: "Pay", onClickHandler: () => {
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
