import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '4106595845503e9f162407ccf23eb67aed28499d', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '528200ae8c04738266f55bcde9b3f57584be272d', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'bacabbf90f84e3f473f956d34f0a4052be95b746', class: "table-header" }, h("tr", { key: '001a70712e34b1ed34a3e092447d02bdc40f3ff6' }, h("th", { key: 'b02dbcf8bb25f5b1706f3783c2d149e5c895f4ad', class: "text-center" }, "Date"), h("th", { key: '2cbddb02961792ab5ee8f8b2b4108a6eab094b7b', class: "text-center" }, "Booking"), h("th", { key: '7ce8c8f442e91167d8c6487f913b934fc7239bf5', class: "text-center" }, "By direct"), h("th", { key: '3f2616839684abac0b49fd8c9030a85d5ba3e73a', class: "text-right" }, "Amount"), h("th", { key: '7372303b0eac92bc1d5f08f2751f4fd056f9ab13', class: "text-center" }))), h("tbody", { key: '2061501f0008d265e9285386de6013037e140e69' }, h("tr", { key: 'd45d082a5439a8b014c2a5c41e6b4a58d1de6f2c', class: "ir-table-row" }, h("td", { key: 'a026bad5f245ee4f972b21d0b09487262f46582e', class: "text-center" }, "1"), h("td", { key: '797f126d4ab29bcda02ac71f2dce95d1a3b8698e', class: "text-center" }, h("ir-button", { key: '37a546dd841554b3a396fa0ff64cfdd5873131aa', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '8a2cf56b323bc32c99082af14396f00973930242', class: "text-center" }, "1"), h("td", { key: '82d6100138b7bb87bd141dfdafa557d933b9c0c5', class: "text-right" }, "1"), h("td", { key: 'fc7a764725bfef9aad8cc5cc946c9208a95ce1de' }, h("ir-button", { key: '726267418f5d1a642fe98f623ec43b68f13eddbd', size: "sm", text: "Pay", onClickHandler: () => {
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
