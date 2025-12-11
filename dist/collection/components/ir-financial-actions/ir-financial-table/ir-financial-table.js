import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: 'ea40992b8e7fa72596a099a79720b920ed024f2b', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '65b696467a483e1a872939c970f4c4459caed5bc', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '693a135b018979312fbc968eceecbb0f8cdc0e87', class: "table-header" }, h("tr", { key: 'a1dbb2e7885a27d5dd5b9e1c4b93918a46649f61' }, h("th", { key: 'fa1f547fd0c858870306b8eb251b4ec1fad5f94b', class: "text-center" }, "Date"), h("th", { key: 'b9ac56aef8080d343c8ceb0d290db6f9982f902d', class: "text-center" }, "Booking"), h("th", { key: 'cc1d0cbc787437e1e5f0f5af047eb62caeabe1cd', class: "text-center" }, "By direct"), h("th", { key: '1f285e1e4671fc30fed68d36f3d708cac7ea995d', class: "text-right" }, "Amount"), h("th", { key: '3b474a7cdeaad757f79194916a31ed575e0e569a', class: "text-center" }))), h("tbody", { key: '6a77de4882499f5bfb03ffac80b8419fa68fa18a' }, h("tr", { key: '1e633d71dcc2d606df9adfab54b07fddd491f0c7', class: "ir-table-row" }, h("td", { key: 'c7a9f744f29fe25122bfb9947af3cec50ad69a0e', class: "text-center" }, "1"), h("td", { key: '2f9d8c683aab4a389ca1da6e43ebf4f3f103f2ae', class: "text-center" }, h("ir-button", { key: 'f262c9c0a64268454b3da64fb279ac95d6bf5fa2', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '8b744131e843a456c5b246683d397c49e07fe07a', class: "text-center" }, "1"), h("td", { key: '68993cb521ce35e42bf0736c5a13bb028aa53e40', class: "text-right" }, "1"), h("td", { key: 'a30113c162bac9b60acff5bb7da97103ab4b9f95' }, h("ir-button", { key: 'ffba1defdbef5786f310e66dc25db12970240be2', size: "sm", text: "Pay", onClickHandler: () => {
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
