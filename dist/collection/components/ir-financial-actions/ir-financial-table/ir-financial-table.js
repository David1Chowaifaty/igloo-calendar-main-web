import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    render() {
        return (h("div", { key: '13fd99b157e27662b634580231844b69eac8ce91', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '9f36a2831a032b3032ac2960ecad66b08a046aed', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '994326f594f94a1087a52886c345215543ca664e', class: "table-header" }, h("tr", { key: '2d10126156ed8e96f2f5d7ea5bc474ed571bcd31' }, h("th", { key: 'b8cc90edd211b590347eece5e9dfe27e1c20f38c', class: "text-center" }, "Date"), h("th", { key: 'd54bef2aa998981a4251a3ab4dac8dfe7d6bee1e', class: "text-center" }, "Booking"), h("th", { key: '28363a37e84f59f21bd9b5be73d6ba3932c9f318', class: "text-center" }, "By direct"), h("th", { key: '71bc48070b0e4a8d13fba6db4b2573e53106058f', class: "text-right" }, "Amount"), h("th", { key: '2213433e4b8d9b58c4d7b08a6135fd43030e82a0', class: "text-center" }))), h("tbody", { key: 'e14fc72b9b2699ce18dd601690ada35bf327ace7' }, h("tr", { key: '77e398febb669dc9862952231f7e11ef3338c832', class: "ir-table-row" }, h("td", { key: '78b5a65b3c594f691789c3960b458e906c7547c7', class: "text-center" }, "1"), h("td", { key: '1f78ed672d8aca8b2d534d6a4ee23814f591a9ea', class: "text-center" }, h("ir-button", { key: '7fcc02aa75a89b88b5d3f3a1467fdeb79c1e3a33', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '097d3495d1ac8e5deef1666946e73af172d07930', class: "text-center" }, "1"), h("td", { key: 'dd925c129b7583c34f07616cca08ba7cbf144116', class: "text-right" }, "1"), h("td", { key: '5f97d5116d2f5880a86af4f6bbcc84c063c67dd0' }, h("ir-button", { key: '58007dc8d3b070bb587b5c3db8a26aae2fc90a20', size: "sm", text: "Pay", onClickHandler: () => {
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
