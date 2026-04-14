import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '42697430f7675f53f942a0f2d9ba162694348cd1', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '7ea5b049fb710fe6a60b6c4d125f73605606f025', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'd6021b9fd0b7cc98673006926524079a92601e24', class: "table-header" }, h("tr", { key: 'aa298f997132cd5d9b323a94048221f4ea14fb8a' }, h("th", { key: '5ea7743bee760bc9db196d3a2dd1ff2b113681f4', class: "text-center" }, "Date"), h("th", { key: 'c42dc3c630caf5be469b4794ac1a1442006e1942', class: "text-center" }, "Booking"), h("th", { key: 'b9ee449e621daa79e3005ffe0382d5501e508dbb', class: "text-center" }, "By direct"), h("th", { key: 'c0d8001c6f54ef8492405f8f2d0637a9c7bc1faf', class: "text-right" }, "Amount"), h("th", { key: '144e9649429dacd43202801d08a174994caa8167', class: "text-center" }))), h("tbody", { key: 'e9ebb0db75605806ab10bbe61583a460ea96a908' }, h("tr", { key: 'f6e05ce526f597757411660c92a76821403bba8d', class: "ir-table-row" }, h("td", { key: '26705a190aefd0c2562a7f3170281e3a80d453dc', class: "text-center" }, "1"), h("td", { key: '61cba25adde03653e74378f1c875e1796c794a22', class: "text-center" }, h("ir-button", { key: '5fb9e6a20cd2ffc5d720cd95c617cf33222717db', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '0287b24e14f1fbdbb6a9c35d79647142e7a71d28', class: "text-center" }, "1"), h("td", { key: '07f3cee7eacff217570e802013faf9696899b4b8', class: "text-right" }, "1"), h("td", { key: '65bba6a12712ceeece1a005bbac88d49f7d93776' }, h("ir-button", { key: '7ebaf9a0d5beb5b60c8828fa8b8f6c1d6eed8950', size: "sm", text: "Pay", onClickHandler: () => {
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
