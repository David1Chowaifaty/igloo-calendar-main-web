import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '53e394c4b864c4c832699576d0384268aaad001c', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'fc7bbe89f6b0164e80483ef912503febbd22d2d2', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '2e09dbbe9b712b945918d792980daee4166d2538', class: "table-header" }, h("tr", { key: 'fd907a8549a9b0fe86f7d38b50060d324fd0196a' }, h("th", { key: 'cb47a5eb859806ca4f1e0c6f653635ca0ee23cee', class: "text-center" }, "Date"), h("th", { key: '7d7bd7e8184dbd0ab1bec5c4dcae6682f3e5693f', class: "text-center" }, "Booking"), h("th", { key: '038dd78ffbd84c0fa25881b842f930c3601d5c73', class: "text-center" }, "By direct"), h("th", { key: 'a3307c48401a4996c62f9d07bf0fffbabfd17e7d', class: "text-right" }, "Amount"), h("th", { key: '45bfaca8cea140594f76606657de9976621d791b', class: "text-center" }))), h("tbody", { key: '7fc7ed38448f894b408cc5255073386bbb97c0fc' }, h("tr", { key: 'bfad200ab1f272759fdc2869d6c53d0272eafe91', class: "ir-table-row" }, h("td", { key: '6463679981c269ee7fefd9b18be40a23cb648ead', class: "text-center" }, "1"), h("td", { key: 'e3e4f62774201c028dbba8e7bcddbb1355e06f0d', class: "text-center" }, h("ir-button", { key: '4e1e511e3ae0564f4389dd9037f4a6068b802ca8', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '97cec53a5d51caecc7ca7483531e7f720292a248', class: "text-center" }, "1"), h("td", { key: '457d9b1fb60a97eaf678d05cf3c5696b10e923b2', class: "text-right" }, "1"), h("td", { key: 'b8f855d8c5cf80fc9935ebd8763d3172307bd471' }, h("ir-button", { key: '82aa9782b2b60e607375f395787e9e9a63dbcf3d', size: "sm", text: "Pay", onClickHandler: () => {
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
