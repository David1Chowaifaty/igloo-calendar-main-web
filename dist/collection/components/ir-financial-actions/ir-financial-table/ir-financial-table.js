import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    render() {
        return (h("div", { key: 'd714b5ee7768da9650ce2a5beb9098fd1e7a4b58', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '87514e9c65cc068d0705389d3e40d9b72584edf9', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '3cfc530746c651ef301b4119fb5cdc94bcac4689', class: "table-header" }, h("tr", { key: '4554370dfb838ebe92cebd061061f09f8ec5a4af' }, h("th", { key: '061964a545060c591633d67f1a206947a39024b5', class: "text-center" }, "Date"), h("th", { key: '7de25d5419c65939fb754f5acf251db8533b3ae6', class: "text-center" }, "Booking"), h("th", { key: '9d6c200c985e4de3d4e9f48c6ac87f1cb0ee5c0c', class: "text-center" }, "By direct"), h("th", { key: '0069f7ba1c5962672b448a94349ab82022dbb271', class: "text-right" }, "Amount"), h("th", { key: '5b1070999f684ae3b5009f76152303c043f3bb4e', class: "text-center" }))), h("tbody", { key: 'ee46bdd5eca4d9ba6b27198d5cd0c8bca133521f' }, h("tr", { key: '7fccf79c097e6d8d8518333f8b0888a96fcb5d87', class: "ir-table-row" }, h("td", { key: '4f6e69964e280e98d2854e338696b684f76dabec', class: "text-center" }, "1"), h("td", { key: '6a37e4886170c29f2350e3a5ee11fbd58173613f', class: "text-center" }, h("ir-button", { key: '05519a1092c198d68c3a61667315017f92b686fd', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '331f21aaeec78e313f226395b11d325bd4bbc2a1', class: "text-center" }, "1"), h("td", { key: 'ed7cfef583038f0e24c54910dfdebbdc74258d72', class: "text-right" }, "1"), h("td", { key: '63375e18e9a17710bab8a8b823defdb28c2e41e6' }, h("ir-button", { key: 'ca85eede61a2dea1c567689a67c18ecd3e9789af', size: "sm", text: "Pay", onClickHandler: () => {
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
