import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '6ab913678aa4a6f2d10cb074bf9067426d0cf5d6', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '2a4da49b3bb4eff97229a4f021161e5603d2e2f9', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'd21924149d95e9194b337da70146ba572d64f96d', class: "table-header" }, h("tr", { key: '449ed6287f90ee204844e08aa4e8924535d03754' }, h("th", { key: '0e26a913239de4737e97167c07b0d364dfbce491', class: "text-center" }, "Date"), h("th", { key: '8449418db5b3778482a5472ed4bf533ee45ed066', class: "text-center" }, "Booking"), h("th", { key: '545400bc25a0a49c950c5e66a7dc7bd0ead6c566', class: "text-center" }, "By direct"), h("th", { key: '60f8d5e0642ae3e4adcabe14458829c9a5569e7b', class: "text-right" }, "Amount"), h("th", { key: '05727b54b8d742e04b8cb5a57841a4635459ebfd', class: "text-center" }))), h("tbody", { key: '7f8cd0afb5a0bf692cf985713ad48c7eacef31c1' }, h("tr", { key: 'df853b9fc6d3fa9bccde662cab884e38cc9571c6', class: "ir-table-row" }, h("td", { key: '80855c53f78c6cf754803b445dbfd822d223b793', class: "text-center" }, "1"), h("td", { key: '045b1e839f54a5ed4c0e2b6dd9af1fa102dd6029', class: "text-center" }, h("ir-button", { key: 'e67a76bcb3eb92c9c93d56015422d4f40cd27f57', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '1abeadf7f8a30165d1480b34bdde07d84ecad7cf', class: "text-center" }, "1"), h("td", { key: '29d06f432227a25ad431dcb431624e53d0679bea', class: "text-right" }, "1"), h("td", { key: 'fd5034482dc16432c15ccd5b7881cac3c7bc5b5b' }, h("ir-button", { key: '59674bca0b6acae0aca8c456ca5a3f821a120d8a', size: "sm", text: "Pay", onClickHandler: () => {
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
