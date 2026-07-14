import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '4c1f6d339c8bd9ab1b5e30f7895cbcd3c2774225', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'ca0862c82974d7fd0169943dad86dcb04db8a173', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '381492913e41b8fe6a2ffdc1633b6ae72d3f2d6c', class: "table-header" }, h("tr", { key: 'aa23210952e827d0e8687cee180889bdc890830e' }, h("th", { key: 'f005b9c1f6baef9f1426397911a181c3302e3c89', class: "text-center" }, "Date"), h("th", { key: '360f85ae762a09c48a83d53da31af32569148362', class: "text-center" }, "Booking"), h("th", { key: '40e70ccc76e5e1f5b5e02445bbf5f03395b85f78', class: "text-center" }, "By direct"), h("th", { key: 'db32888dbe0de9d5583261f65d64b7e6c48432bd', class: "text-right" }, "Amount"), h("th", { key: 'eb9dfd430973a8250d529d172154a92168fc1ef2', class: "text-center" }))), h("tbody", { key: '057eebce1b08b3b5cb548b7b79da70def8e75b0c' }, h("tr", { key: '22b5226a72b9a5096f41b067a9aef697af148296', class: "ir-table-row" }, h("td", { key: '4966bec6b2cfa03286fa84004f66983b2ba0dbb1', class: "text-center" }, "1"), h("td", { key: 'c9c9751bacbe2926010a39aaddbb1d713ec38dcb', class: "text-center" }, h("ir-button", { key: 'c3f74c9bba6b640599e2326e8e5b8e6c5b40b003', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '35555de112119924c9967dafed6d4153535747cd', class: "text-center" }, "1"), h("td", { key: 'c72842fbf6e3a5ae606a3f0691f0be689d027414', class: "text-right" }, "1"), h("td", { key: '07c0f72d71cd634a0e70c790f96f08ae9f53461c' }, h("ir-button", { key: '3435c2ece6a0958f1f9d85efbbca863869a11f3a', size: "sm", text: "Pay", onClickHandler: () => {
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
