import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: 'f07f6d4a7b819eff755e56bf414bb4e64e3301ae', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '0a2763490fec49b45b93940e4eee39fea585edba', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '3f63cf18d202f24eb6bd5fc3dc6470e387a2acbc', class: "table-header" }, h("tr", { key: '4f86500faaef86514868b404119e21c2187a881c' }, h("th", { key: '8fe0f06ca78fbdd3982f88c1127c001665364a60', class: "text-center" }, "Date"), h("th", { key: '50975989ba54e479e2dc51d3d362ab0810c87a69', class: "text-center" }, "Booking"), h("th", { key: 'bc4ed7a3e30fa8451feb307655350211db4fa29c', class: "text-center" }, "By direct"), h("th", { key: '517b618780f8b5f35961cd762e14084a4e89a828', class: "text-right" }, "Amount"), h("th", { key: '8e0ad5fbb6050a6c469ad145a5f71093c7ab0ee4', class: "text-center" }))), h("tbody", { key: '1144b4bc3f4f6f8a8a2b13296286b52705209871' }, h("tr", { key: '84ad8653b126c0b09e46d462f9223cf5577cd747', class: "ir-table-row" }, h("td", { key: '662c6de9e0ce67d727dca92fb9f9b90fbfb6c5fd', class: "text-center" }, "1"), h("td", { key: '1272bdd84a164df80c4056c86f3e8cfec16a76e9', class: "text-center" }, h("ir-button", { key: '08d6489cc98372abffa98c2bb2d7d4c05886777f', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: 'b10e364e723e33f160e2e12ef7efc8c22d2fcc73', class: "text-center" }, "1"), h("td", { key: '69eef4bcf447eb05c336df26abee88ae62f308e0', class: "text-right" }, "1"), h("td", { key: '7188e9c2f7d41c1137f44fe4c26f4db4d3478dab' }, h("ir-button", { key: 'bc9b25dd4e3995416d28752873c386134cb3eba2', size: "sm", text: "Pay", onClickHandler: () => {
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
