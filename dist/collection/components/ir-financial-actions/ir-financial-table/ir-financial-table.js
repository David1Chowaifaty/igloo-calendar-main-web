import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '62e42229df6f127b5e6a56daa24bf6682966fd2a', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '432858f135f142e45a4eedbaae764f391fed6dcb', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'f839de1796828c25376d037133b90394e6f01ba0', class: "table-header" }, h("tr", { key: '68da30bdcc4f6570423766d11512cc5795ee290b' }, h("th", { key: '7312d21c6cf4056038d65316e903b7bfdb7bf90b', class: "text-center" }, "Date"), h("th", { key: 'bfb829561764ae8847ef90504487e30b3fb6c815', class: "text-center" }, "Booking"), h("th", { key: 'da9079444a9a0ba2f0fca52f486487cbca952f45', class: "text-center" }, "By direct"), h("th", { key: 'b162ff13a36aeb1eb6b55451ba52db67b13e0d8c', class: "text-right" }, "Amount"), h("th", { key: '4b95c72e16145e6a6800a2bf92d2533402badfff', class: "text-center" }))), h("tbody", { key: 'b1f47a3541782bef860a46374a407d71778aedc8' }, h("tr", { key: 'be2b4a5139b38d2016f1995eb4e0a2293826d06e', class: "ir-table-row" }, h("td", { key: '4e5416f7601dd9d3b4fe339e51100db735818c8c', class: "text-center" }, "1"), h("td", { key: 'f26c548fed28c92244db2be96f21ebb7df70dd1f', class: "text-center" }, h("ir-button", { key: '0299edc73a6756bd83af8748bf223e9ffa02b53b', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '70ba06356eaabd6f4030f9188b39f055492313c5', class: "text-center" }, "1"), h("td", { key: '14700a26f866264ebea979049881f8b26b6695b3', class: "text-right" }, "1"), h("td", { key: 'd3361c85c211d0fd54ebf08667a4b091f0b90d67' }, h("ir-button", { key: 'b07c479f7c17d391cfb3763bf486009e260e2d47', size: "sm", text: "Pay", onClickHandler: () => {
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
