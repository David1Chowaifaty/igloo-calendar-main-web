import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '9008c5f94c5090c5d4b3c4234b1358efc4b4b7f2', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'a90c74b0eb718883aa5e60fe4b6999b789e5b135', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'bb56671ca37e08e78e31a93fdf0c04630a5d0b93', class: "table-header" }, h("tr", { key: '3a174fabb8bf2a8d8770c5944d893ce509ac4f37' }, h("th", { key: '38b0bea92a0b35d2375ebee6683c30f9f505537e', class: "text-center" }, "Date"), h("th", { key: '5231d66a7ad46c6c9dd4ad367b114313ae6ff947', class: "text-center" }, "Booking"), h("th", { key: '92e42ec490b581158bffad1cc7499046b9510296', class: "text-center" }, "By direct"), h("th", { key: '47423f0a95bc44407a4b05641ba803a31eacdac5', class: "text-right" }, "Amount"), h("th", { key: '6df021924161bf27db5798637083fae64d5c50cc', class: "text-center" }))), h("tbody", { key: 'a9b55acd30e68a4847b001aa90a94feffecebca7' }, h("tr", { key: '7c1364d7e89add2884d23476ca26d4ca23ed90a5', class: "ir-table-row" }, h("td", { key: '65debdf86a1b5ef12805b96cf95c667741f772af', class: "text-center" }, "1"), h("td", { key: '74c14b2137486d82473ab55eb4c9a80a12f232ff', class: "text-center" }, h("ir-button", { key: '062c4184e63aba4ee9de15bb145965b04f9ae707', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '4fe7e84362ecdecd3404581adb9f99fd91908dbf', class: "text-center" }, "1"), h("td", { key: '8f725af677f3a52fd12fd035215d2906fb1f530e', class: "text-right" }, "1"), h("td", { key: '944b74be2745ae9d78cd5fca8979d1238f449be0' }, h("ir-button", { key: 'b7e6d9d773c0fd1d4e8fe6aa05137b6c840076c7', size: "sm", text: "Pay", onClickHandler: () => {
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
