import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: 'f72f8b6b887fd0067dbfa007b8179c1d15973b1c', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'c23add2f0ac4ac433ad4c6e8723b3761ea78a6b5', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '51bdf578339ad47c58e3ef36f2137858e7bc5270', class: "table-header" }, h("tr", { key: '436033e48c06dc1e76cc841a2d7bc63c7803ee6f' }, h("th", { key: 'ee459cbcddb2f585cb5b4ab47f5f47e6c78aedb3', class: "text-center" }, "Date"), h("th", { key: '6feaee0360322e0726696cacbd832f39df170b24', class: "text-center" }, "Booking"), h("th", { key: 'c81bd9f99765f0accecc78d87e437a3cbb31ef12', class: "text-center" }, "By direct"), h("th", { key: '45ac738c5ce064ec75e8cefcd61e5c9397d8dd0f', class: "text-right" }, "Amount"), h("th", { key: '2ad8f3c073ee0a4a31b30a5121f6338cfa7d9bb2', class: "text-center" }))), h("tbody", { key: '7606a42ce3c0044ce51a2136c0b41a02cfff64cc' }, h("tr", { key: '3c40abdb6781212158acc49351e3b0fc2b0a122d', class: "ir-table-row" }, h("td", { key: '801ea54a96fec70ccb0bb808249521d7cdfce99c', class: "text-center" }, "1"), h("td", { key: '8a8d3e595f324c79e7188ea265a9d7d4dedb7099', class: "text-center" }, h("ir-button", { key: '0d62f293ad282e5ab9d6ec44a52e88de9c242165', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: 'cf737aa270463f299227680700feccdcf1a81bf6', class: "text-center" }, "1"), h("td", { key: '9a8f0d6b2aaa56965d8de72d430d1a9ba96de587', class: "text-right" }, "1"), h("td", { key: 'acad3c7894b990a167bee683ce3d169aa4b52a21' }, h("ir-button", { key: '510788cbb4ce310c8b7964e137ee138fb07dad12', size: "sm", text: "Pay", onClickHandler: () => {
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
