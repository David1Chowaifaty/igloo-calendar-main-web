import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '071540b305c9cfba9412536344d86496ac844c14', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'efe1767b818a7201c7fe26438b42184cf97b7bb4', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'dd2c33d78b77ffb787bd6d03b911c4c07ef629bb', class: "table-header" }, h("tr", { key: 'b4210ebf435100c7db53bded2cb304d0b06b5cc6' }, h("th", { key: '984004103d936bfd272eb15fa87dceb1757f89a4', class: "text-center" }, "Date"), h("th", { key: '61d5129b8fb0fa510517a8a423f7e1c170a34518', class: "text-center" }, "Booking"), h("th", { key: '935cd5c5574459850b29274d850b8d05b307ff04', class: "text-center" }, "By direct"), h("th", { key: '09f14b17b638025bbd3942b31e061a9cc5c9dcc0', class: "text-right" }, "Amount"), h("th", { key: '9fe3684969d756f20de429c35b6bc0913d3d30f6', class: "text-center" }))), h("tbody", { key: '3b2705781419af0f4a15b72b49ccafba47d505cd' }, h("tr", { key: 'b03f14c5ce7345c65f1736941fb0f68c623970f2', class: "ir-table-row" }, h("td", { key: 'c5b729590a73ebd05a58f095a2a50c1722f28eed', class: "text-center" }, "1"), h("td", { key: 'c877869deb72ea540cafa784452b4674f044b3e0', class: "text-center" }, h("ir-button", { key: '47fb401a0a74cdadbf06fca6ac9162fa97ccb09f', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '3abd79eb3a267224af8c901e6719a3aa485f775d', class: "text-center" }, "1"), h("td", { key: 'a13861e92fd3f652a3f5769ddb31176afae432a6', class: "text-right" }, "1"), h("td", { key: '8d98f7892123605386513dcb2c93039fb76c0a6d' }, h("ir-button", { key: 'b4903c01aabe757da6eff44a4c7b0f20aa0ae205', size: "sm", text: "Pay", onClickHandler: () => {
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
