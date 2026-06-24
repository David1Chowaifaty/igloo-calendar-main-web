import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: 'e49bb4396d5a379bc1e712cedb0a32c610bfaa38', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '9e2af55cf85e9dccb909f8886a3a2d9349dbe78e', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '5d407321a16ff1ac6a6b8bd075a2ebd91f9b9d5b', class: "table-header" }, h("tr", { key: '404635f29a80c7ef683955053107387d0d3975bb' }, h("th", { key: '0581d7be11ff64cf4d32ee4a1c7439caafcac959', class: "text-center" }, "Date"), h("th", { key: 'a785f5b02c1dd12406155ce9afa3f44acf5353c1', class: "text-center" }, "Booking"), h("th", { key: 'c2088df3aeeab17e9f9a37c0e36d2e332692eb51', class: "text-center" }, "By direct"), h("th", { key: '154a5bc535ff61e61c311f038a8ee0c5605f829f', class: "text-right" }, "Amount"), h("th", { key: 'eb6cb8c6b01f1f0691e0e97dd4fb8ec397372ef4', class: "text-center" }))), h("tbody", { key: '3da6f7d6b56fc08b6fbe039a289de8d2a7a815e7' }, h("tr", { key: 'cd23718302fd814cdf10cce559afb16f9329390e', class: "ir-table-row" }, h("td", { key: 'ae90616302e987ca38a645733881242b070ff05a', class: "text-center" }, "1"), h("td", { key: 'cc4eff601ce894424e454bf96015f9cf7e17953e', class: "text-center" }, h("ir-button", { key: '983e8e6c57931a37e879bcc2818d18b688ad570f', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '3ba5f68a95325c5d7da9e8628914c85ef3194533', class: "text-center" }, "1"), h("td", { key: 'f4d75f5f36d517a17c8b373a2e5512ff17a1c6c3', class: "text-right" }, "1"), h("td", { key: '82cb5338d31e029b3fe75d30376d7c70db123b41' }, h("ir-button", { key: '1170f9fdcccae4a54b15fc12b92108f40d7cb9b0', size: "sm", text: "Pay", onClickHandler: () => {
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
