import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '60970b8819abb38ddefed6398a4dddec47c27d32', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '5126eb60f7453e4655ef113e27fb17e09c79bef5', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'bdaf58bbdafa2dbf4e68a58fcf927ad7208672c2', class: "table-header" }, h("tr", { key: '79d1353689e38ffbbd7dd09487949171e52859ea' }, h("th", { key: 'c4062beda069e0c9f5badc50b897e5c2f41a4df7', class: "text-center" }, "Date"), h("th", { key: '82dc505a5796038597ace40713527ac433e4f6c0', class: "text-center" }, "Booking"), h("th", { key: '154c90293ad8a7a217ac46e4ddb63ae532b0c415', class: "text-center" }, "By direct"), h("th", { key: '89a05640ac46afd1321f0dc49ae71a4fad3acd9c', class: "text-right" }, "Amount"), h("th", { key: 'c0d3f1b39d17dc7f0749026a6a76d20ce72c689e', class: "text-center" }))), h("tbody", { key: '1c2806780044a8761101ad85aa59c1680cc4f8ae' }, h("tr", { key: '2f0368bacd1a8d01ce971e4e79c98b2e1ee7a5fe', class: "ir-table-row" }, h("td", { key: '647b403a4002a5a5ea90fd47649c46d111e3d660', class: "text-center" }, "1"), h("td", { key: '76299d75c99fb1c90b2e9a2635dd7b64ba6510b8', class: "text-center" }, h("ir-button", { key: 'aecfc02b38a64b273eb43519e2c26884d4389d82', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '5504f862733a4aa571bf5e4b002d4414551c0b46', class: "text-center" }, "1"), h("td", { key: '6c1df79e1e0bdec63751afe33a591cf833296a0a', class: "text-right" }, "1"), h("td", { key: '0edae792204cb4f77ed297761373d558de89153d' }, h("ir-button", { key: 'f8f891775c14b501f30c307f628b3821a4776479', size: "sm", text: "Pay", onClickHandler: () => {
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
