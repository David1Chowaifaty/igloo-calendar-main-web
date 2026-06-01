import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '7a1da7863e7c1894ff3269a6aa8230f2901ae8f5', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'cbbd083b962bc992af98902a76e1aaef5c45b6b8', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '0289d59097afeb5a34de8563a535752bbd01cf6d', class: "table-header" }, h("tr", { key: '7ff903fde41f468530a916ae720df08f0cd0fe88' }, h("th", { key: 'e297f9d22de39c75f6a31d7d45aedc770a256fb9', class: "text-center" }, "Date"), h("th", { key: '7ff5f4fa4a34573a0193a33a9233923ce8c4d520', class: "text-center" }, "Booking"), h("th", { key: '10328517bf43101ed7dd3cb8c2b40cd3eee7598a', class: "text-center" }, "By direct"), h("th", { key: 'c4142aa21b6ef690c8577a07894585eebc387e34', class: "text-right" }, "Amount"), h("th", { key: '7ac9f545b251a72115e8c2b4689fc77620f7851c', class: "text-center" }))), h("tbody", { key: 'ad10127dae8aac7dd66720a1568819a81f8412bb' }, h("tr", { key: '04bbb9d10ef017f87fbe595771f4eb0cbc0420d2', class: "ir-table-row" }, h("td", { key: 'fd2680ef11249d591e9e9acd685554cd374933b3', class: "text-center" }, "1"), h("td", { key: '049796e6eab5cb84168e2d2013e878f09d9220ab', class: "text-center" }, h("ir-button", { key: '4c2308ede40e7e522ec5564ee086849abacac962', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '5c412d7ec9344dc054a302c2ed405b7864602d77', class: "text-center" }, "1"), h("td", { key: '898c6c18840e7b12116eeb26b45a18d6ee4b0916', class: "text-right" }, "1"), h("td", { key: 'a4317036b7884fe146400823c258c1429027b042' }, h("ir-button", { key: '11b50fb99e2495e182fc3232112ce52b5103fd05', size: "sm", text: "Pay", onClickHandler: () => {
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
