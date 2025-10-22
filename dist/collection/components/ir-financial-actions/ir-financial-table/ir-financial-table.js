import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    render() {
        return (h("div", { key: '5d3efe691f2f531a06d8f3dc827e7ba7b7aae2a6', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'de432bff22e92bd1ec54f2aca6a8585f5fd36b11', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '083af26b99708ff83285fc308b86dff45efa255e', class: "table-header" }, h("tr", { key: '602f9c42bdc312a011a951297ca34f043608351b' }, h("th", { key: 'e95f3e98a2797c29630400275989faad860de3d5', class: "text-center" }, "Date"), h("th", { key: '9fdc91fd1785b0623d0782b811c5ebda324be7e4', class: "text-center" }, "Booking"), h("th", { key: 'e11950c08d37a0be164e2ab63b7bdd7f77b23e1a', class: "text-center" }, "By direct"), h("th", { key: '3237fa82fb65f658c80418540d2c16d510a1f194', class: "text-right" }, "Amount"), h("th", { key: 'dc5ec3236fc8cba96f96273e0336638dc6027b03', class: "text-center" }))), h("tbody", { key: '65f0eb73ed309524b1b5bc5834d7704e460c3731' }, h("tr", { key: '09f4857a4971f04464e4454bda5d273e4d38839c', class: "ir-table-row" }, h("td", { key: '65ed263efc8168002da09204a2898a3d15dc5c9b', class: "text-center" }, "1"), h("td", { key: 'e1910619ad37db6432fad352fc4082d0a2da96b7', class: "text-center" }, h("ir-button", { key: 'c74ff06d1bc26ae808632e213e5daa8caccbfa84', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '9e13a2ff75b9bde55562708965a99741fc736933', class: "text-center" }, "1"), h("td", { key: 'dca27412822520285d8fd3b9350cbc0669008808', class: "text-right" }, "1"), h("td", { key: '7de216452f4afa98f878d773e92b03110ddbdf25' }, h("ir-button", { key: '52317b83f8ad4b9a726903f64154115601d18029', size: "sm", text: "Pay", onClickHandler: () => {
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
