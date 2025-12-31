import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '98e651fee3a83c9d3358181c1926938eff477635', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '29f1ac632dcd9333860aedfabf3deb5f67c8fa4a', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'eecdcf50aa6f994b58e04a6a20cab696887c67e0', class: "table-header" }, h("tr", { key: '2d61b7480cdedf49fc0f9fef3df6af4efbe64398' }, h("th", { key: 'f35f58622865c99f389150b77195d11c8d2d21d5', class: "text-center" }, "Date"), h("th", { key: '76390bb82a8de3b319d84199e6cf20f1c04e2d6c', class: "text-center" }, "Booking"), h("th", { key: 'dae56c85199e5c3722a8541f4acf4885914f2650', class: "text-center" }, "By direct"), h("th", { key: 'ab166402f2e4acd40cdb02226460d95a148ad4a2', class: "text-right" }, "Amount"), h("th", { key: 'b0c7ec9667e73042d4c89162e3ff6c2dd5a8eb23', class: "text-center" }))), h("tbody", { key: '1179c8f0835f737d414d10bd1b5c2a3ebfa494a8' }, h("tr", { key: 'cb77b606b2ca357eee4f627371477af73c34b796', class: "ir-table-row" }, h("td", { key: 'c4e5b12f16faea4063c752b3d7dc4776dbc8c8e5', class: "text-center" }, "1"), h("td", { key: '025b36bc9e57353631db48dac3b39ff553215639', class: "text-center" }, h("ir-button", { key: '143f2301ffd175e2d3490506102b7303a116daee', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '8a8d8134a40ca0d83625a30dad607a72f1acd70e', class: "text-center" }, "1"), h("td", { key: 'a93921a470431eb2aa0930968641f3f8a6326fa2', class: "text-right" }, "1"), h("td", { key: 'da3c313a75ac88c79c7bf8a2db7459025136f836' }, h("ir-button", { key: '7603a6a1103e5f651fbba76ee40c6b542a303fb1', size: "sm", text: "Pay", onClickHandler: () => {
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
