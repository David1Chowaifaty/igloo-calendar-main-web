import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '9eb45350d7aa8d31fb2072e41c1998a33cd12957', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '3f427397624811f32823fbf5d9044cc683b8420a', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'b4b76ff9478b4f98cf21b5011379d2341b30022c', class: "table-header" }, h("tr", { key: 'c78de58b87f6bcef9370006b11e7945165be3304' }, h("th", { key: 'c8aa32271f78d079d898a5e8ac915458e1da7ba7', class: "text-center" }, "Date"), h("th", { key: 'c0e0636df3675f926ac9362852f8293ed7ddef02', class: "text-center" }, "Booking"), h("th", { key: 'e8181d644cb099a7727cebcf7e07ed396d52bf58', class: "text-center" }, "By direct"), h("th", { key: '61de2951512b7b88aef4999577918ffc284d01ce', class: "text-right" }, "Amount"), h("th", { key: '48088dd3ce617c4fd8ed2740319de3ddcec2c581', class: "text-center" }))), h("tbody", { key: '0887bf0ed3e5ca549a968342a0768faf4f740eeb' }, h("tr", { key: '4d75bf18e214a8ab5b717c95803bff0f34f7773f', class: "ir-table-row" }, h("td", { key: '64cf9c45455c817b27b6c2c66de9c0005f250420', class: "text-center" }, "1"), h("td", { key: 'a9d9306e86698e816f52e3a2d0c3bf42f036ebc0', class: "text-center" }, h("ir-button", { key: '208168894439c7ca3bbf0b3da91efb4209d373f5', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '7edcde10e67d3c30255f6849333f90215b48a803', class: "text-center" }, "1"), h("td", { key: 'e9952cbedddda3feab489a910b1126284c773f9b', class: "text-right" }, "1"), h("td", { key: 'c13984235fe819d955d146007f65830fc3a226c1' }, h("ir-button", { key: 'bc16391e7946451420e525b8a19b3033f917abf4', size: "sm", text: "Pay", onClickHandler: () => {
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
