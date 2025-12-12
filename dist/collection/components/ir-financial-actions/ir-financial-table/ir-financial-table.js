import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: 'b192d941aa6e78ff2e950656ae780e6bc655ea47', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '384c952ab67da543e1d0b4505c6badb07f5d28f7', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'a602590df5c1deb2d62694aaa982ac84c3025c2f', class: "table-header" }, h("tr", { key: '9f8b6ab04a8dbdf47e1662d1880e99176ac94558' }, h("th", { key: 'cca9d6cbc4c85187e96d6b063d23ca5a21d31e6a', class: "text-center" }, "Date"), h("th", { key: '7a678286b679b0f3d9a1920b388517504a846947', class: "text-center" }, "Booking"), h("th", { key: 'e9cfd87a35408890aa63fa6faf13dd6ade7276dc', class: "text-center" }, "By direct"), h("th", { key: '8ad0b55f1c46a29f57c7258356ee9d6948732a60', class: "text-right" }, "Amount"), h("th", { key: '28d58bfb7bd5f83934213fe27bba55fa44e95081', class: "text-center" }))), h("tbody", { key: '86911c69f263c41e53fd3a0732a674882d1fece7' }, h("tr", { key: 'fc81182e12ed74e327dff2a84b7660682cb019f3', class: "ir-table-row" }, h("td", { key: 'd3b47bed6288e7c4bfd696bb89a174e9ab53fc07', class: "text-center" }, "1"), h("td", { key: 'a947153a29fee5e0c021f78bfe5fe743eecb55c7', class: "text-center" }, h("ir-button", { key: '0d90fbd5ef688fa2f1c175f1b9ffcfb0fd8c1c73', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: 'b2010963153cb3bff2ad618397e09d50613804ac', class: "text-center" }, "1"), h("td", { key: '35f37204b1d2d9722b13a00fa161f698cce86453', class: "text-right" }, "1"), h("td", { key: 'bc79b9d9b2e9873afd5ad2cc28a23c03c0cec8ac' }, h("ir-button", { key: 'f7b3aa9036387f7027657ed77b6fdae39887cf21', size: "sm", text: "Pay", onClickHandler: () => {
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
