import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '3f4dbc17f50848b434d666e702d4cd10cf0daf00', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'ee23037bed62db8f042cf64e3c61e10b8187de73', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'dc9552438dba99200d7741f87ecef19fc9363b89', class: "table-header" }, h("tr", { key: '9d35a9a5039096dbb1f61e2d0cfc6a57fb50cb67' }, h("th", { key: '0877266d87cd315bd73a6e6263334ef71635226a', class: "text-center" }, "Date"), h("th", { key: '13c9eb77145b5c8c9a1925dd0949c6ad1d024515', class: "text-center" }, "Booking"), h("th", { key: 'a2f2d78839db6a0d621dbecd928e258891eac1c6', class: "text-center" }, "By direct"), h("th", { key: '67bd4de4088350b84ca69377fcc7bbc2c688af2e', class: "text-right" }, "Amount"), h("th", { key: '80cd57b9b437f9524b558db9aff75c17dcec7e2b', class: "text-center" }))), h("tbody", { key: '8e404b55a9a184078c4a0d903857641ecabe2fcc' }, h("tr", { key: 'c9cdebbc8eb9b2f17ab8c508f5fed5958ce4e938', class: "ir-table-row" }, h("td", { key: '8a53a9d240686c443dc838138bfb2ef6225d31ee', class: "text-center" }, "1"), h("td", { key: 'be3e441a1622462c06cfe4273be221c5ab8334b2', class: "text-center" }, h("ir-button", { key: '2d8d544460b81e4763549c0a752000f452be855a', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '4de24292c064e6f19c347da2b30991b97dfeb6f7', class: "text-center" }, "1"), h("td", { key: 'd28573ae81f4d4554543364915e8b4e3dd23b6a3', class: "text-right" }, "1"), h("td", { key: '7abc4a2a05edacca1352fa6a427eb6e5d138eef7' }, h("ir-button", { key: 'cf14f7b09a3f8be890af1914cad9833151c56b9c', size: "sm", text: "Pay", onClickHandler: () => {
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
