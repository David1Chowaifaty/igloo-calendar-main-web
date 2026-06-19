import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '5c40b5a68df3621c4ebc3ec3b9cf1379e6c53954', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '281e66a6c69ba3746837eec4b9ba611ed77e6bf8', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '8fc204d6a94a0f92feb3c9bdd40af71f71afcda4', class: "table-header" }, h("tr", { key: '6a9f605a09e65cf6500d3c6d9def8bf4d0567af3' }, h("th", { key: 'aa074003b6dec2a29b8e3436380a29358829ecca', class: "text-center" }, "Date"), h("th", { key: '671e13a041ca784ce304e9064acc3ba620fc9710', class: "text-center" }, "Booking"), h("th", { key: 'aacf32cd5ae64bcffd9125fee37bf2fd733bdfcf', class: "text-center" }, "By direct"), h("th", { key: '3e8839dfaaab469386de5209d59df5de092d6277', class: "text-right" }, "Amount"), h("th", { key: '5d0115b101ff68d8043cada48304bffbda72cbfc', class: "text-center" }))), h("tbody", { key: '92433ef0a4c98a7229e48e7932ae25eaf73888cf' }, h("tr", { key: '000672d4239764eb16bcb31a0d6506982d9934fd', class: "ir-table-row" }, h("td", { key: 'ad01e7dcf96e455c80be9fc7002f2e4905c6a7c7', class: "text-center" }, "1"), h("td", { key: '2be9aaacc76c3c47c40ed98f6e46ac7a30c85f8f', class: "text-center" }, h("ir-button", { key: 'fd29361f870d76309a5ed5f6327777d8218948de', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '8f858e5bedd2fb6842dc16736bd74ae8883a0851', class: "text-center" }, "1"), h("td", { key: '1ca410d343045703fb56bb13fc0f76dda4e76fc9', class: "text-right" }, "1"), h("td", { key: 'e5b828328142a5ad3f4c47baa474ab6e3cfd77b6' }, h("ir-button", { key: 'd3953fe35cb5ea8bd80440b4980c212fbc946266', size: "sm", text: "Pay", onClickHandler: () => {
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
