import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: 'ea178ceed621746bdb19b46aa271ffc37cb5fcb3', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'bf4f6732e657b3cf46779946a5a88c0dddb25bb1', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '668d2de680e10d73c6b48f6187c083f00180255b', class: "table-header" }, h("tr", { key: '2224d25b4fe972686cb84066c6f05a4937c91748' }, h("th", { key: '1db01deace2067c01a0d4442b5d2315e69bcf8ec', class: "text-center" }, "Date"), h("th", { key: '3146cec57c27912c9f43e5c3678bab81e0333e65', class: "text-center" }, "Booking"), h("th", { key: 'd401ea44838f54fda0ec3911cb4c0b5ad28cfeb3', class: "text-center" }, "By direct"), h("th", { key: '0e3e3d4e1bc78a9dd7f6064c01c7280b8dca2fe9', class: "text-right" }, "Amount"), h("th", { key: '362e2448171fd0392d217dc50ffceba8e8c6e78c', class: "text-center" }))), h("tbody", { key: '3bd382df9614bf36bdaed79ecb53a9c978b80a7b' }, h("tr", { key: '72169065a9b77b20ac0baa10139dc9ff3a1fb378', class: "ir-table-row" }, h("td", { key: 'c2312bbfef1ca90c69a0b1b98b3cc2a91dfd72ac', class: "text-center" }, "1"), h("td", { key: 'e25f5d8f3b90dbd57ecdbcd38159ed611e11fa47', class: "text-center" }, h("ir-button", { key: 'f9023e8b0cb1cac7f74a0bfc2fc65ddfd2347abf', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '3acb81b027de1770dc1a6967ee3054eaaaf38cad', class: "text-center" }, "1"), h("td", { key: '04289d4af3fc5c25db564abc6ce20fa365501b94', class: "text-right" }, "1"), h("td", { key: '5ceaa6c9150bdfa752b91a672b80f63bfa7477f5' }, h("ir-button", { key: '893ac4a7698589dab0975c3b971c0fa9baa0b24a', size: "sm", text: "Pay", onClickHandler: () => {
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
