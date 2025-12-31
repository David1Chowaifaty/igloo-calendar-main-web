import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '2fc6a073268ee095e1564c1affaa739a95b2edfd', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'b71040e1fdc568ca6d515b74c6cb4db707201373', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '13cde98595638821f75908dfecfe53c652afd4eb', class: "table-header" }, h("tr", { key: '1395d66a3236560df6847e8033b05925e3a8d43e' }, h("th", { key: 'b72c09b7d4d600dc19cb7d29f687414d5b05f5e4', class: "text-center" }, "Date"), h("th", { key: '8f8e0dbaa386f9482a10a3da83033d87d396c6dd', class: "text-center" }, "Booking"), h("th", { key: '9591900c1e8b29f434a06225f2661de1859b800a', class: "text-center" }, "By direct"), h("th", { key: '654a78073700375ff8ba2d5e4eca91966d151443', class: "text-right" }, "Amount"), h("th", { key: '02c3b0a21e8e53bd835151fe23f17e45c3aa5e1f', class: "text-center" }))), h("tbody", { key: '2b07f3034c3eb92f05ded29efeda88d730701a81' }, h("tr", { key: '49c821124c25ff409fcf24cd362168c8c2d6ecbb', class: "ir-table-row" }, h("td", { key: '4aab813cc71033f36ea159a86369d364b632ded8', class: "text-center" }, "1"), h("td", { key: 'c878a257ba58f804f89b5ed2e5dbfb846c2eabf7', class: "text-center" }, h("ir-button", { key: '884a5477c42d60647efc54c75122ea067dc31702', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '18dbb6b786c1a4ade7000fe790b4c74a9391b9f1', class: "text-center" }, "1"), h("td", { key: 'f424ca3bf3c0ddf25edadf158568fcd8d56d2626', class: "text-right" }, "1"), h("td", { key: '55a601b6d386f692fd574178a1fbd730bc8e85da' }, h("ir-button", { key: '18d24b626f230353b9183d5933f293cce7596f1d', size: "sm", text: "Pay", onClickHandler: () => {
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
