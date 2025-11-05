import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    render() {
        return (h("div", { key: '58d7f50fb227a1008e639604dca4a3257cc126fa', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'f0ba0b2779ad5a8da5c8d494ac7f43b42faf1d21', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'cc996a0c17913b1e95bab072ae33b0719185ae06', class: "table-header" }, h("tr", { key: '5b0e4b45cf19825000f0a2a66c7dd3b91d1a7906' }, h("th", { key: '1e4090798c551d7600087e3623512a8dfcf77f6d', class: "text-center" }, "Date"), h("th", { key: '0aa4d661a7cc7965727fc19ab089cfc5b9e2e6f3', class: "text-center" }, "Booking"), h("th", { key: 'd11112a6c94e5800804a775e8a11c73e1055de6a', class: "text-center" }, "By direct"), h("th", { key: '5587b8a59e1710484a91f8fd558a71086ce3becd', class: "text-right" }, "Amount"), h("th", { key: 'af9678c601522b6c77e0d5e1044876344b387e19', class: "text-center" }))), h("tbody", { key: 'ac2605f8f0c670917dce30fc4d5664f02f28c9bc' }, h("tr", { key: '8c093746be52d28f8d17ebe1dc529ca320d2a7d1', class: "ir-table-row" }, h("td", { key: 'f9eaa127ee2b2ca06e3713e5860ca52783e686db', class: "text-center" }, "1"), h("td", { key: 'c799111ace4a96c800ad781ee4c158aaecd97fe0', class: "text-center" }, h("ir-button", { key: 'c0c8ea5a2c085bb523b8359de74134110d0e73ef', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: 'f907dbdbad3251756b24d55f4c6f424eb0d41156', class: "text-center" }, "1"), h("td", { key: '7fafbcccffc6b90ab01243cca332cc2818f26107', class: "text-right" }, "1"), h("td", { key: '53695720b9985e3bfaa8a6cc6508bb96adf1ced9' }, h("ir-button", { key: '5080fb86b7b5eba738ca67b85b8030bb3946c9a2', size: "sm", text: "Pay", onClickHandler: () => {
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
