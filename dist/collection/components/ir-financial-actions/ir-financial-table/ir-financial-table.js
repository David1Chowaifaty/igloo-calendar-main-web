import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '829941cbd4fc4798d2129483ce05b268d26d3c3b', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '688b82216309db432bbf967873c940998064c38c', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'b1f0719db6647bca314db6e72778ae5e969b8988', class: "table-header" }, h("tr", { key: 'a0ce7d6ad7b98aa330611ad7c3e59ea981f3b87c' }, h("th", { key: '421d9e57670e4270d2f9f4e442c07c148f164150', class: "text-center" }, "Date"), h("th", { key: '4325795af029ac2ad50d79a124d5fa7b89d401dd', class: "text-center" }, "Booking"), h("th", { key: 'b2af2189572197c8e07240fa50b07bf3aff73eca', class: "text-center" }, "By direct"), h("th", { key: 'ad3e00fdfde69e2fdb4e792553f76e31625af920', class: "ir-text-end" }, "Amount"), h("th", { key: '56cd6a4daa137e819c179483b8f0d00cb779a74c', class: "text-center" }))), h("tbody", { key: '8751f867ede2eefa0c90f18d1475ba80518b2bbe' }, h("tr", { key: '5caa945aa40efe1c8b59f00aa583213882792c16', class: "ir-table-row" }, h("td", { key: '5bf80abfd95aa13d47d0ddf71777dc5868a7883f', class: "text-center" }, "1"), h("td", { key: '968f8fb55984d854978ed61a0d7c00815f75b6b2', class: "text-center" }, h("ir-button", { key: '9d4a2351bdb06fc627bb50b3158dc3e2ffab2b80', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '1b1df36180fc6dabca895ca1b8307f9817bb7162', class: "text-center" }, "1"), h("td", { key: 'cc07f7f1823b0d883ba4df1d93bc0c501ecea1e3', class: "ir-text-end" }, "1"), h("td", { key: '42d5a8ec2d490d4b1c7ec72a4e2f17d5bd382943' }, h("ir-button", { key: 'c4c6daa3e0678ce0c8eb74658ab9093e9a848880', size: "sm", text: "Pay", onClickHandler: () => {
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
