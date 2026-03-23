import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '308b8368aad4f363900f7f950d81cbf40082cd82', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '92165b8dbc4c4c135d9f35a8e05c06cd92dae4d4', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '7d635beddd2b93c732c499532963be610b193298', class: "table-header" }, h("tr", { key: '289351a5ec03978beb2ebf188e6df3f61d271bd4' }, h("th", { key: '58baad11b0129a39dba6f60f38815cdee554be4b', class: "text-center" }, "Date"), h("th", { key: '481cd3a580d2616277be4a261c01863aac54b4e6', class: "text-center" }, "Booking"), h("th", { key: '90ddec8e0cac0bda75f75d73c78edd5f299bc10f', class: "text-center" }, "By direct"), h("th", { key: '6fd55e71823febbc359f3923916a960143b4e0ac', class: "text-right" }, "Amount"), h("th", { key: 'f14832b7b71a6995fa7fd255685508689c660ba1', class: "text-center" }))), h("tbody", { key: '51c0ab1d97cc0d241825ca3e8758898dfe73a5de' }, h("tr", { key: '7771c32fff964d167f16be7998635d7d7dbcacb1', class: "ir-table-row" }, h("td", { key: '0c9940e4dbd34a851e92b0677a4c3bd7c2c3340a', class: "text-center" }, "1"), h("td", { key: 'e25ff9bebfca14c75def7cd1cbaaaefa669dbc67', class: "text-center" }, h("ir-button", { key: '05cea91e2ad7d2aeba1569ce89a4678335dffb4f', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '0cfac896dfc2f52a2e92810bb86a05bd8ed1239b', class: "text-center" }, "1"), h("td", { key: '2373439a8eb453eb38e70f3a1a9c21458435a931', class: "text-right" }, "1"), h("td", { key: 'bbf2fc8a18e966963d09ff21b2da85483368e73b' }, h("ir-button", { key: '189d8f5c408e741fba55d82fe7caa4f5ff183f09', size: "sm", text: "Pay", onClickHandler: () => {
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
