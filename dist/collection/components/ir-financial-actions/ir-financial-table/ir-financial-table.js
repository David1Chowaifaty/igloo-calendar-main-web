import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '82d59e4d64e55891dcf2f7a61daf11096874f787', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'd38a8a9f3c9681b616182ecc6093903b48ec93ea', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '3f4ed873a9595f35481c1536302dac980d446152', class: "table-header" }, h("tr", { key: 'b96e6209624b0fb54992110adece74c38fcfd763' }, h("th", { key: '345300b642bd48952a859dbbd62ed38f8f9f6b60', class: "text-center" }, "Date"), h("th", { key: '808a8c7a2963ae65b07084a2c0533ea20e2666cb', class: "text-center" }, "Booking"), h("th", { key: '1f93a7ef903d765eacf7f9e85d5e7f59f20b7c7a', class: "text-center" }, "By direct"), h("th", { key: 'cf04b1453f2d6409786a7bc118bb785ac73c5b21', class: "text-right" }, "Amount"), h("th", { key: '83ec8c1edc2d14df200d57cd7e502e052856d481', class: "text-center" }))), h("tbody", { key: 'aee1ff7039ecc0f3d627cb1cfcd48582bc26fc54' }, h("tr", { key: '714cb5797eb11ab3fd95a08188f18d48a86e89a1', class: "ir-table-row" }, h("td", { key: '6d0d4696cfc24b200fda0df6ad721d28e2ab7d8c', class: "text-center" }, "1"), h("td", { key: '5575fec1b81ecc5de66d22c7b2ab839cbdb17d78', class: "text-center" }, h("ir-button", { key: 'ffaa1472a7535d34bef5566e9681252685e45e2f', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '73fe570808b53c45573cc43324b144681eda974d', class: "text-center" }, "1"), h("td", { key: '352536f4b5e0c13731b0f04ea20d4809d9be04d8', class: "text-right" }, "1"), h("td", { key: '94e1f06e0e7efd237b0aac5a3b8c4fb9c97379d7' }, h("ir-button", { key: '073ea5d6b7726c84085d4066e0b4d3680d613941', size: "sm", text: "Pay", onClickHandler: () => {
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
