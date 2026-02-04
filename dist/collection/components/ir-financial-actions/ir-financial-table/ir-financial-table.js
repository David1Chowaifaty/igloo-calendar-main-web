import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '42618b62602bd472cc890bf68c2560351ec75e1e', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'd7559711bc4bed7d69b065b88e7453479afff905', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'add189253671667faa6c4fc83405f082b3e8744d', class: "table-header" }, h("tr", { key: 'ca8a34d1414044c3dd2cd038650c1547d82182f0' }, h("th", { key: '67e1ab863cc06367f408c9b9e29d08ad80c45544', class: "text-center" }, "Date"), h("th", { key: '87413ba6b5ca59af121eede044dfb93749e56bb7', class: "text-center" }, "Booking"), h("th", { key: '4e4a8cc06fcb9d4cac90990173f788f42fefeb6d', class: "text-center" }, "By direct"), h("th", { key: '685579a626d2546311d1edc8c5be05ff0b2c707f', class: "text-right" }, "Amount"), h("th", { key: 'ffcbf544fc58da0e58dcc5f8de39efeaa4401d36', class: "text-center" }))), h("tbody", { key: 'fd32e72fa6d4bbcdd9c6d36d139c9fb91809d55e' }, h("tr", { key: '083dc589397daf1a600375287d46c14c00fa5705', class: "ir-table-row" }, h("td", { key: '42dc6eb50513e01ecc73b46ca446ce66571056c6', class: "text-center" }, "1"), h("td", { key: '682db4696b101337acfc0b50b70feacc063a85d8', class: "text-center" }, h("ir-button", { key: '214f322c938cf1b0fbf170867d28f3a115aee43f', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '020a9b615986680706cf2b135b67b4373a511867', class: "text-center" }, "1"), h("td", { key: 'b4decad02db23fc2854d15f2b37a57d3b059c1af', class: "text-right" }, "1"), h("td", { key: '6dbb804b73255565af45d3778d4d9ac44f9047a7' }, h("ir-button", { key: 'a1d932e26f1269af6c37ec798e4f1492aa33762f', size: "sm", text: "Pay", onClickHandler: () => {
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
