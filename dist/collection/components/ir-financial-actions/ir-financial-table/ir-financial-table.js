import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: 'f6ff09399a6bcda642df1bbf3adfd00fe3d3b1ad', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '37d421e3768679db22b976d32d62625902f70a8b', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'ce776ace6e45cf79ea8515f5a6b731015f506f64', class: "table-header" }, h("tr", { key: 'e1465a543b2bd97d1f6713885e95168e059b5141' }, h("th", { key: 'bc9897cda843d6c2fccd5c59cab8227f01812310', class: "text-center" }, "Date"), h("th", { key: '8c365724ceb4496847296653427dd4bf57afed6b', class: "text-center" }, "Booking"), h("th", { key: '5f20d4cf534c1f21b8f691ae4628f40e60908391', class: "text-center" }, "By direct"), h("th", { key: '92e2ba877b8364fd5ce9bb9aa4f71f6ef14593a2', class: "text-right" }, "Amount"), h("th", { key: '196021fae2d5c72a1728747964a4d9de5a7ae9a7', class: "text-center" }))), h("tbody", { key: 'd631cb6d246839192168a0dd6f7aee4fefdf0dba' }, h("tr", { key: 'd585d11c9f5967efe166b82dc1d8cf0fbe81c970', class: "ir-table-row" }, h("td", { key: '807014ae75db617632edc28920907331c3e0fa77', class: "text-center" }, "1"), h("td", { key: 'd6ad9399cdc44fe62b07a6f2e4cb3f92c039f0cf', class: "text-center" }, h("ir-button", { key: 'aabb7eca0a1d258f5c67fa70a9dbd0a07e205d7d', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: 'c59f2e58b6c14a0b810824f41950ab17c6a7ba41', class: "text-center" }, "1"), h("td", { key: '3ea276dbc5e134f80825ff0804c168b574eec51e', class: "text-right" }, "1"), h("td", { key: 'fa31e39690e6f77ccacb4ece073e59dc2c8dc1b2' }, h("ir-button", { key: '2090203c9c1cbde4e5170fa63f61061c65679fc3', size: "sm", text: "Pay", onClickHandler: () => {
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
