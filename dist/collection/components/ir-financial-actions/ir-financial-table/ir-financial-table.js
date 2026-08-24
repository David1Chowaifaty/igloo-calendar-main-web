import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '947c821128db60872d3b52153cb5c400ae97e3ec', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '5d4481f296d04ea8aa2bf471fc3e64666a062de3', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'df9dd0aa6543cf1181a1e712b2d91c8e1d0bb08f', class: "table-header" }, h("tr", { key: 'ad9f0f321875fe4bcd9f1120be2a74cb20a6cc00' }, h("th", { key: '8a4e758f0b23c85cbfaa32dd3f73f81bde09cf9d', class: "text-center" }, "Date"), h("th", { key: '1f07eb9c7498e878dce682ef8a1f0ac385ce8948', class: "text-center" }, "Booking"), h("th", { key: '37928797735553d3a0910ad9117b2d5254634296', class: "text-center" }, "By direct"), h("th", { key: 'd8c04470fb2f47a50f62873de4cfd77904a975d9', class: "text-right" }, "Amount"), h("th", { key: '3659df3b56cbc9cf3e4f8962539536606cfb0d09', class: "text-center" }))), h("tbody", { key: 'b03cd09e661a41156a276436c7194a56894696dd' }, h("tr", { key: 'c33a3d7917b13f12171c87f3677462e66d683715', class: "ir-table-row" }, h("td", { key: '617fcc998ffce3f653c67c167e633948cccf2f24', class: "text-center" }, "1"), h("td", { key: '48a69dabfb05092a437294f0d64bbda687841564', class: "text-center" }, h("ir-button", { key: 'd9b8c1c27c01ad30b8ba71ed70b77fcc28e719c9', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: 'aff6b35fa47c2a8939505ebfff1b6deb00e6ece9', class: "text-center" }, "1"), h("td", { key: '7aa197bd3c538fd606df9b73f2993e8fda8572ae', class: "text-right" }, "1"), h("td", { key: '40ca679104672672aa3b1ab3c4e1c23350719e6f' }, h("ir-button", { key: '3cd42792acb5df03af8d09b1b4fde174404d8886', size: "sm", text: "Pay", onClickHandler: () => {
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
                            "id": "src/components/ir-financial-actions/types.ts::SidebarOpenEvent",
                            "referenceLocation": "SidebarOpenEvent"
                        }
                    }
                }
            }];
    }
}
