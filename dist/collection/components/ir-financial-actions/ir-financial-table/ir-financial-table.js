import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '9e0760ef9ffa184a19b928cbb758b030d9b8a0af', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '101ace55eb7bead11566d283e374989130f74ff2', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '8b6e7a4a6fd666772948c225662c8eb97b7ad493', class: "table-header" }, h("tr", { key: '683e6ecd746b2bcac7765fbbe7417160b65c089a' }, h("th", { key: '9f56da539efe682df4b9807c6138bd55034db793', class: "text-center" }, "Date"), h("th", { key: 'bba3eebdb74875dbb4fad984ee4d6ba3ced6a94d', class: "text-center" }, "Booking"), h("th", { key: 'a87b515500d9c0896301b070ec02da91550f0444', class: "text-center" }, "By direct"), h("th", { key: '8790c195bd484f4cbaa6f4263f9c5862ae27a5b3', class: "text-right" }, "Amount"), h("th", { key: '99810d5211315e26299d1351326c1a272bebb352', class: "text-center" }))), h("tbody", { key: 'fc76917169aef83b0d652b6f06031ec816b12818' }, h("tr", { key: 'ab433645225a490aee9ba1cd631c53b5510780e5', class: "ir-table-row" }, h("td", { key: '1c0a8de4ecc74dff4a808092ea88b54fa8f985f8', class: "text-center" }, "1"), h("td", { key: '9006703db54663eb93368860a82953a1893c26c0', class: "text-center" }, h("ir-button", { key: '9b3231223ea42c4983f80499b8fe064f9d494be2', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: 'eaac9d3f8cad48036102859b0c7579f14e1d0dae', class: "text-center" }, "1"), h("td", { key: 'a188f7f2caf18b6e2b2a3fe9284ca3300bec5cf8', class: "text-right" }, "1"), h("td", { key: '3514790f5af8469d323c09c49dc3be704fb1dd4f' }, h("ir-button", { key: '55499e77386444d0107eec7b7b11b9a3635da642', size: "sm", text: "Pay", onClickHandler: () => {
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
