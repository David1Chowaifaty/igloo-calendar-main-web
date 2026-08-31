import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: 'd800f4f24925c72a9808cd17eed6edee8f22a6b3', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '4043314b67695db9a8391aed19c398d180d3da47', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '91c8ea32fbe2336fc06ee39b4265c4f7b4fde79d', class: "table-header" }, h("tr", { key: '80f32d4298889758191b771ca0921b7f1c8eff33' }, h("th", { key: 'bcb056012cb444fc9b084528a9cda0f1712b2e04', class: "text-center" }, "Date"), h("th", { key: '4bd84d11f63b78a885e88f6714b566e57d982bb0', class: "text-center" }, "Booking"), h("th", { key: '9abb607719109366be613fcd316ef92c35e41811', class: "text-center" }, "By direct"), h("th", { key: '8cf842be5e91126d74304017751e2d02d5a27d56', class: "text-right" }, "Amount"), h("th", { key: '47d66ea82b86413948dfa15f4444b59594a90c88', class: "text-center" }))), h("tbody", { key: '00113223c38d6314112381b1f7f06f379d6cd58f' }, h("tr", { key: 'a79e6f68eb3d44fc6ccdbecce306e9fb5ec1a7f9', class: "ir-table-row" }, h("td", { key: 'f91b61c1ad07a069ba4dcaf428ebd19c4f26541c', class: "text-center" }, "1"), h("td", { key: '8ac1e1087e0dad0cb833f583627d3d4748198224', class: "text-center" }, h("ir-button", { key: 'c4c6257fcd3a183bd08621c3cedcce1e7ae5ef30', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '37e5b86dddf7bc7687b06fd45e8a681ae3a15cd3', class: "text-center" }, "1"), h("td", { key: '17526d6fd9b7868e04099a0b16de71f1b03accc4', class: "text-right" }, "1"), h("td", { key: 'c56b5c6b6e860e5b9cd40b822ed83993467b5c0b' }, h("ir-button", { key: '51516479869611bf08110aa313a1c5d9f3053f2c', size: "sm", text: "Pay", onClickHandler: () => {
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
