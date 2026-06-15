import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '46a9674e0bb62432b30975903488db3a0cfdb081', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '3e4ceb98e2bdacfd2317438de01b703cc9a1a87a', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '4676677ec68d83620fb3ba710e9e7385f59e0641', class: "table-header" }, h("tr", { key: '8bc553f407f9fe18d430abb10888578324787332' }, h("th", { key: '6f14fc3f6c9365668f67d090a355b5b1579822be', class: "text-center" }, "Date"), h("th", { key: 'be8c7f54ce91791ee58d002ecfcad336d42b13bf', class: "text-center" }, "Booking"), h("th", { key: 'a6b847d51af9e984b56c2e7cf1de838dc20a539d', class: "text-center" }, "By direct"), h("th", { key: '66cfabbe8efd129bf545d71e947910d195976e89', class: "text-right" }, "Amount"), h("th", { key: '1d5c8938a4431ce694ffd1874358841b5a116900', class: "text-center" }))), h("tbody", { key: 'c7b6ad1ed6b8cb9956cd42df36a0efbd08ea87e2' }, h("tr", { key: 'c988a5c25d91f925a28a7619d9bdc4d2d47dd34b', class: "ir-table-row" }, h("td", { key: '45ce3ef9bd8976766229acb9dea99bbf95a376ea', class: "text-center" }, "1"), h("td", { key: 'f3a8dd8136ef365a8700412a47e97301af11acdc', class: "text-center" }, h("ir-button", { key: '9e434417e859eb69fd10bdae705b6bb3df9ec00e', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: 'c34227e78d6a4ecee5aaac44960b1fda52411041', class: "text-center" }, "1"), h("td", { key: 'dad66c837dc41dd79970881f8eeffcfdebd689b2', class: "text-right" }, "1"), h("td", { key: '84c16ce100d98ad3a34b7263cae1982ebcb01bac' }, h("ir-button", { key: 'bc7d1faac775f695342e2095f26fc7c01b8302b5', size: "sm", text: "Pay", onClickHandler: () => {
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
