import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '55028b6ee5da7ed8d4047cb144a28733d044f1ec', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '9318cdf10f26b294e92366d7a2b01946f4769bda', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'f33198613b0cdf975005004c5be8e6e6bcdda130', class: "table-header" }, h("tr", { key: 'bb957807f1b075754ba9fcc94234fc28f8844aa7' }, h("th", { key: 'da39da276064bb4b488e92e3b7c7390f95ef7f4c', class: "text-center" }, "Date"), h("th", { key: 'b60f6b089c4faa3b12e46f1d51793143c87bb01d', class: "text-center" }, "Booking"), h("th", { key: '434f64d96de73e53451da22ad0a576c35b05db6d', class: "text-center" }, "By direct"), h("th", { key: '18bf52281f70339415f905330118e2b0bf959b7d', class: "text-right" }, "Amount"), h("th", { key: '2d83e5d57a92e841b5a31d7fc08c10666aa0dc3c', class: "text-center" }))), h("tbody", { key: '83a6938bc055dcd3f62274d8daaa036e69d333c6' }, h("tr", { key: '1535009aadad82ed017f0c2b78ca3afdff43cfd3', class: "ir-table-row" }, h("td", { key: '7ea38ef7daefe5d6f8411ea1a00165a775d2e8ba', class: "text-center" }, "1"), h("td", { key: 'ff131d2d983d236483a5cd201918319aaf059301', class: "text-center" }, h("ir-button", { key: '10ba559dc27c2012c25d279a3088f3698e0c6b74', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '86fa5df12d152e531c2ee0d435f033cf7b7cc188', class: "text-center" }, "1"), h("td", { key: '2a1a706fad8e7526b7b291b2bb72dccf9888a0cb', class: "text-right" }, "1"), h("td", { key: '9e7966be7df40af1bea059413a5e659952f5646b' }, h("ir-button", { key: '55518f0eb7d37d387edfe9b902a9067b088ba586', size: "sm", text: "Pay", onClickHandler: () => {
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
