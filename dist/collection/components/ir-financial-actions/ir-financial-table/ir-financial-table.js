import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '9198f0b1e514867b226fca2ed88486145628278b', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '4e1e7c2cadd82c169e198b73c27a95f52466420e', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'b8e182859cb07b9706a555f6167309ac2db868e6', class: "table-header" }, h("tr", { key: 'aaf9b2062e4a3d4605bad546188dfcc3ff9bf48b' }, h("th", { key: '83911884146eca1f2d064c5c308c1b161dd00c34', class: "text-center" }, "Date"), h("th", { key: '91c3369f4d452e3f980e1b5ac1502967d1a357ec', class: "text-center" }, "Booking"), h("th", { key: '2ab65543cc11f14c8a6d18da592062fe456a18ab', class: "text-center" }, "By direct"), h("th", { key: 'fa022950abbebd8551948ef32e008d78c777c27e', class: "text-right" }, "Amount"), h("th", { key: '16128378db95acc01f498eb1322ce94f07bd64c8', class: "text-center" }))), h("tbody", { key: '2a47c13334f049ac429d013d709304cd4b92fc50' }, h("tr", { key: 'a03fcc989744cf4acae366085da429f99ad4b358', class: "ir-table-row" }, h("td", { key: 'f66d72063321caa9c5eebb1f228531d81cbb747e', class: "text-center" }, "1"), h("td", { key: 'ae4c0413f5c7205a1f2943666243d2e6f5476f8e', class: "text-center" }, h("ir-button", { key: 'f2c37cb093f19d06a696d9ea57d2ec8af88b3676', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: 'd2acc099d7b2eb79c99d47b64dd378dd954fa1f7', class: "text-center" }, "1"), h("td", { key: 'db6148c474acc641873133410388b15424b6a68c', class: "text-right" }, "1"), h("td", { key: '5ec9283ecc2f824f5c1d1e628c73fe7944b2e4ae' }, h("ir-button", { key: 'b859c6bd90ed62d805f37f27eb50d0596f393522', size: "sm", text: "Pay", onClickHandler: () => {
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
