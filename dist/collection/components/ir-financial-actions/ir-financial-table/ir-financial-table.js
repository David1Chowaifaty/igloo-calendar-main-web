import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: 'ea48a0701fa57248123321ac19f2bade80b14905', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '3977b327cb79cd38e406e8e7ec36aa38f99af061', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '7bd12c743c18943bf8d2a89bb13b49b1bbe6512e', class: "table-header" }, h("tr", { key: 'de7605922bd2af340d94f4d834b8eff88461c7aa' }, h("th", { key: 'b554e8682339ba62347caaaaf7b9462d49c84188', class: "text-center" }, "Date"), h("th", { key: '6ca91fe689df5ef2d560ced5b230063a0ec5b0f7', class: "text-center" }, "Booking"), h("th", { key: '635ae0ee747566acb1c3e3c543d2898c9c2bb168', class: "text-center" }, "By direct"), h("th", { key: 'd7dc7be3796a8a1ec117142b6b4e5a208e772b5c', class: "text-right" }, "Amount"), h("th", { key: 'f4424d7341d3f6d5805d78f2fc0e1466ca8b5ccd', class: "text-center" }))), h("tbody", { key: '24e6d91574000b31167a33aa8b6b699d71351f88' }, h("tr", { key: '6cab9bf3a551606e25db21aa2c7e4d858a8fe00d', class: "ir-table-row" }, h("td", { key: '33ecc30c8bcdf832b5066d72aaf7914d5b545b86', class: "text-center" }, "1"), h("td", { key: '0a8d195107f4e79f346c23cc1ee1baa2e7597e9d', class: "text-center" }, h("ir-button", { key: '3c5cd798f776d70dd133927ebc0cb603c13b87e2', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '26968099003f801947b182be9c7b3a62fbde63c7', class: "text-center" }, "1"), h("td", { key: '5a315575455a7d6fd912dde57202517609d09a65', class: "text-right" }, "1"), h("td", { key: '6609c70362d348c9fc72e0c70c609b6d366ff03d' }, h("ir-button", { key: '38cd82edadcc8ca8e729f092a9027222115968fb', size: "sm", text: "Pay", onClickHandler: () => {
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
