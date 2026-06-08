import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '5e97c01b3ea1f8273d83f041773eaec4efb15fcc', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'aa5f80dd0f0bf4be7b060e202ff1f83f03a87ea3', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '4c26bc43a0c657d407630bf601ef7bd5d648d6be', class: "table-header" }, h("tr", { key: '3184783ae576300caabbf6efe6e8385296eb0eb5' }, h("th", { key: 'c14dd6b6f45f167cc10f154038b975355452bc59', class: "text-center" }, "Date"), h("th", { key: 'e0968507b728070178f68794081007427b44740d', class: "text-center" }, "Booking"), h("th", { key: '1c085d5aa62550ab201745b8bff1b17105b336d3', class: "text-center" }, "By direct"), h("th", { key: 'f2871075a86359de7f0393c1a55a5dfff5683473', class: "text-right" }, "Amount"), h("th", { key: '3e21e08e37d1b362b7d3669eec4afcbd536fac9a', class: "text-center" }))), h("tbody", { key: 'a9e15c950a0e6240e0a50e139e7b277373ad06df' }, h("tr", { key: '44bcc12d571c18a634bfe2f7d03ec026debb8ac5', class: "ir-table-row" }, h("td", { key: 'ae0442eddb451fe89d2cfe1e4688ef5e0a96c3e1', class: "text-center" }, "1"), h("td", { key: '4df8fd79531dcf15e2396ccb01d0db66b9a098d0', class: "text-center" }, h("ir-button", { key: '779d81c36fdbe031539837c0b3460818f6fea8d9', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '178a23b6320c809bdac8bedf53626c0e0d1472df', class: "text-center" }, "1"), h("td", { key: 'ccb7644107ab08fad22bfe32ef7ec29ef4b51ac1', class: "text-right" }, "1"), h("td", { key: 'd22741649c2d191ec27b213cc08562f59165bbaf' }, h("ir-button", { key: 'a2ded668faefb144b59b164a00c5bafbd5199f8f', size: "sm", text: "Pay", onClickHandler: () => {
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
