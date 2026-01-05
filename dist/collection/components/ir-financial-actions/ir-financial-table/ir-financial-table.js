import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '86d04ef22104571e8a78346ebec305c80d3ec2ca', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'dd4ffda203248dae0f41e46859d23f02165ae02e', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '26405b7981796d8f7b2f7fe921f0791676a53b0b', class: "table-header" }, h("tr", { key: 'd4234e97870b2f93f8b012166dc902cf0be460a3' }, h("th", { key: '2287b53bbfc3689efefd0ca25d4965b4f7cf1639', class: "text-center" }, "Date"), h("th", { key: '85f3e8605b8c482f969f281f54a1573112324f47', class: "text-center" }, "Booking"), h("th", { key: '57d8116438b5f8785b6defbeb84e60fabda7a080', class: "text-center" }, "By direct"), h("th", { key: '404746ac828d5dd02165cd0efa7c42a922560933', class: "text-right" }, "Amount"), h("th", { key: 'a82029e2e15159e796a9c533aaa016baffdfa4d8', class: "text-center" }))), h("tbody", { key: '949a1d781f1114593f7129714b2511d14b31712b' }, h("tr", { key: '7cbcf8f9f7cac19fd09b7b5315e12a4aa4cc489c', class: "ir-table-row" }, h("td", { key: '785e8d0201270ecbb7440d154ca78fb5dcf24e64', class: "text-center" }, "1"), h("td", { key: '7388f4254314209719f8df975a6deebba6141c99', class: "text-center" }, h("ir-button", { key: '61e6129be4d71a7b27a8d46f3385fc19a727c0f3', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '0017d06ad8659b34c9959c7e7939b14e191d1f23', class: "text-center" }, "1"), h("td", { key: 'c9ec836a369fcfede7950eb701b8c4a481203e5c', class: "text-right" }, "1"), h("td", { key: 'bdbc11b61518bdeb235ea93610918d6fe2aaceb6' }, h("ir-button", { key: '5d46efb462cf674ae03fe05a872002a61a3bc577', size: "sm", text: "Pay", onClickHandler: () => {
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
