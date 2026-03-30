import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '96eefdf08734403e86385f90a6d950fdc72d45cc', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'a59b0c6bbd85264a979a81698a2410bfa4225810', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '53c55287a760673bf38e602cb6ecce968391ce66', class: "table-header" }, h("tr", { key: '56686f5477add80ffc0bef5fac2821a4614e007e' }, h("th", { key: '3dcb6e918e3c9b747ed8811aedc7d8c993adcbd0', class: "text-center" }, "Date"), h("th", { key: '6e4705b6aeda9f5ee5da9d424966d21a37732665', class: "text-center" }, "Booking"), h("th", { key: '3747fcf574d64827ed23b3946604a3faf4cf1e81', class: "text-center" }, "By direct"), h("th", { key: '87fbfcce601231ec1074e98ecf0d6fc5424a03bd', class: "text-right" }, "Amount"), h("th", { key: 'd9aa6bf9b7f97ab447bb5fc8dda1d19abc134254', class: "text-center" }))), h("tbody", { key: '6f13755ebb87eefaf867b1cc3da7d5e763fe4b0a' }, h("tr", { key: '19fe7864025663f1092b5df7cf2e01ad010c00bc', class: "ir-table-row" }, h("td", { key: '54fd366e142e60c6d51ddb9635bbe37fb4943b0e', class: "text-center" }, "1"), h("td", { key: '986a8978ce1d0398990aca41e7609a9808a7f890', class: "text-center" }, h("ir-button", { key: 'eb37cbb0fd4dd8f7c126b96494f9d1bd830bcdc3', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '75c75c46419a51ee8d0182dc32d5339012fc05d2', class: "text-center" }, "1"), h("td", { key: 'f9e03f9858adbd53b442c42a386dda555b1f447e', class: "text-right" }, "1"), h("td", { key: '08f29581de512c87279177e21e58956f28d7cb02' }, h("ir-button", { key: '9fa1a3baf95668609ee310746bb59e4515c7aeee', size: "sm", text: "Pay", onClickHandler: () => {
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
