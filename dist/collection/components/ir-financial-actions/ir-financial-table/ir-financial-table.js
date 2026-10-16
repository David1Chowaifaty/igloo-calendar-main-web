import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: 'acab9f8c82226f54c4b46975290255e3803bc5e2', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '4a3e6c402f3213bd171043cb53a0b49f7770ae38', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'e288843320ff153ecb449e3c7faf0253f030ee0d', class: "table-header" }, h("tr", { key: 'c206274980b321d199dd2dfd51747ab9799056fa' }, h("th", { key: '05d95a697601b3bd615837ee85948ba80e18c487', class: "text-center" }, "Date"), h("th", { key: '4f23de55962f21ed39aae0a2ac9920f3507db4d9', class: "text-center" }, "Booking"), h("th", { key: '327b7f873b797f5a2d20389c822f8d710c7d3d95', class: "text-center" }, "By direct"), h("th", { key: '59f54d89f90cec84c09a29416a3699332cf8490b', class: "text-right" }, "Amount"), h("th", { key: '2f66e9b52bcb598aee8c04c0777ed3d128956ef7', class: "text-center" }))), h("tbody", { key: 'afba71ac3a8b15a68bf3073cbd2f4d560e17fdb3' }, h("tr", { key: 'fcbb41e2217826385f83b2435d079e3ac01a9866', class: "ir-table-row" }, h("td", { key: 'ab5c279d1bffd1369ab0effa57a2ddb232e67c12', class: "text-center" }, "1"), h("td", { key: '251aec946df3d01fd549f60b585933584cdca179', class: "text-center" }, h("ir-button", { key: '278dd73caeba71b978cd46ea34a9065423d77f72', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: 'f0d3a9070d89975850b194221e9364ba9345e721', class: "text-center" }, "1"), h("td", { key: '8c2dbf498c9855c543fc027983e0a8576f48b0fc', class: "text-right" }, "1"), h("td", { key: '71808883e8e5c5d52aef5f583442321345557632' }, h("ir-button", { key: '2ca564dec49d98dedb9298fe031cb0729cc114b3', size: "sm", text: "Pay", onClickHandler: () => {
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
