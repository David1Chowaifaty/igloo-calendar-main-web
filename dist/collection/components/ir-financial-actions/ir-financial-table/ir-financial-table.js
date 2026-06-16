import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '383d965283e245c41886af732dbeaa7335be8fa0', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '186d23a2ef7d04eed3db1da8bf891dd8aed828a4', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '99cab22191f4a021eeb22daa417e85ff1fcc8fea', class: "table-header" }, h("tr", { key: '98054bf2079a01ff59b3a3c3f3f244097afccfa6' }, h("th", { key: '42bc9853319ed33ac43a4620c9df5f3ed0c9a585', class: "text-center" }, "Date"), h("th", { key: 'fcf9b06b815aa4154e34167c8051184fca5a10f1', class: "text-center" }, "Booking"), h("th", { key: '5ffbd6a3d7261fdf5a5332270857d9ac85552a70', class: "text-center" }, "By direct"), h("th", { key: '3b7a000647cac77745712973e8367b633618700d', class: "text-right" }, "Amount"), h("th", { key: '6118f8725537eee39749662a7ba0ccefe451d15a', class: "text-center" }))), h("tbody", { key: '147c95126506f7f06044a3221734061d41f86f14' }, h("tr", { key: '5d6a311ff2804c074e0b0b157dfa22cf9cddd569', class: "ir-table-row" }, h("td", { key: '55017c8a6303c3ac6ebbf0f60728b09289a8aa17', class: "text-center" }, "1"), h("td", { key: '3460a866929616208b6af8b2c7f7b671f977cac3', class: "text-center" }, h("ir-button", { key: 'ab0ee5d4e6196a623ef67290665cb2e62950ee64', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '801bdbc2fd2089b7ada11b1071fd6d1219b49370', class: "text-center" }, "1"), h("td", { key: '41c69560ce9deefe511091c3725cb00fd76996e8', class: "text-right" }, "1"), h("td", { key: '3b3331512203d009f4ba7242a6b1826a9d770ee7' }, h("ir-button", { key: '976d326ac1038fc07224c83fae4a32472c8586c0', size: "sm", text: "Pay", onClickHandler: () => {
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
