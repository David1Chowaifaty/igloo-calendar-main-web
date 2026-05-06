import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: 'dd5c82e7698666662d56337483288c6cd54214ac', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'e63c773c6cb5aeeb9c1194688def32e684299f1c', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'e8cc66db5a57c7d26f26c9b0a67af61f41201c6e', class: "table-header" }, h("tr", { key: '0cde754e0b57155ded6bccaeee7415c87dd88477' }, h("th", { key: 'f7901401684fc550b605a44e491e07c464f21237', class: "text-center" }, "Date"), h("th", { key: 'd92ca847c1dcba8414bfcafd9028080b8101b652', class: "text-center" }, "Booking"), h("th", { key: '34e5437f6df8faac70cf346ae88f259c256a91d2', class: "text-center" }, "By direct"), h("th", { key: '2fe757e774c69b01737c44d75f962ed8a578629f', class: "text-right" }, "Amount"), h("th", { key: '74665f123db289b08256d144d1b7377bd90e349d', class: "text-center" }))), h("tbody", { key: '086cc887ad741dd0beb2555aecb4de0d37e4c6e4' }, h("tr", { key: 'ee3cdce7c728776e30f9e9130f90e07ebf9120f1', class: "ir-table-row" }, h("td", { key: '4423da1ecd4e581d1819757fa74d5056afdf0915', class: "text-center" }, "1"), h("td", { key: '9e0ca3ea60001e01b8dddc066437061ec1e6984b', class: "text-center" }, h("ir-button", { key: '30d8c4323e60dbdcb0cdfb8076fa7ae8fb4b02b0', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '35e6f2e0c8350e10315f642f85fa659fc1de6c1e', class: "text-center" }, "1"), h("td", { key: 'd936a9449b72b2656ae1e7e5888e96771a04b1a6', class: "text-right" }, "1"), h("td", { key: '98e54e08316e56b74236ecd708584e7acae88392' }, h("ir-button", { key: '2b0107b8fc6def2b858c4d822f9c17c72d2a1567', size: "sm", text: "Pay", onClickHandler: () => {
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
