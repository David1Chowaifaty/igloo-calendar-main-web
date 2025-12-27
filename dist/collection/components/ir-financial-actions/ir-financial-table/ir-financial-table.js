import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '5e7179f5e89b0130e990f544c799ddb8cdb2558d', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'c5eb21bf6eebcf31a181099d639a584d55f05bf0', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '5f6e1233b0967febe4b09ed8eff4027328c5ee20', class: "table-header" }, h("tr", { key: '3fee11a612fe3b0d5443f98cdc8217158bf006f5' }, h("th", { key: '9540a74d4bceaa0d573c04ddb0232aa6b1dd483b', class: "text-center" }, "Date"), h("th", { key: 'f334c746f5e1db0d531312bc461337745f41e454', class: "text-center" }, "Booking"), h("th", { key: 'bb3b8e3b7162d8636e02e562df555a3af3ae8839', class: "text-center" }, "By direct"), h("th", { key: 'fc4867be6a1826778fee0f716500e83646160b3d', class: "text-right" }, "Amount"), h("th", { key: 'bb9ff77e65505afa267d66d36df4804df97dd164', class: "text-center" }))), h("tbody", { key: '1362179e97f8e1708c0b787866270b1e87d35dfd' }, h("tr", { key: '80d48f7780d0ef8f658e5f49ce24e4d1338336ea', class: "ir-table-row" }, h("td", { key: 'ad2837e635555b6ba99ac79a03c62116456af3bd', class: "text-center" }, "1"), h("td", { key: 'ca5db66a16f9af056dd32b44995d5582bd6877bf', class: "text-center" }, h("ir-button", { key: 'b4b7d9179986658bc925c1ff2d94385721d96f55', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '2c364cb43647054c4afb8c245661b052e13cf6ae', class: "text-center" }, "1"), h("td", { key: 'bfb1d2a6dad08ab7f0b7aeeb10abc91449056b2a', class: "text-right" }, "1"), h("td", { key: '5cab846c0b2e866e4544ecb81321c72b1aac6d77' }, h("ir-button", { key: '274f1269f92df564a46488384baab617567c8db5', size: "sm", text: "Pay", onClickHandler: () => {
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
