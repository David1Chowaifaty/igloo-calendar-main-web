import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: 'f5da9b104fad355890361bdf1e284e1378f2d8b3', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '03095a915931527b6a34ddb45d9bc9c1ee9fb306', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '3c25fbdd86d69eba635f20185b6831b124e1aa23', class: "table-header" }, h("tr", { key: 'd09884d6ce3f32b308ea3f5a1f051da734463169' }, h("th", { key: '7234d865828f1d37d92bdb5afeb20aae7a8293a3', class: "text-center" }, "Date"), h("th", { key: '05e2e8df5a3b75665b3eb006869a8c7a92f5ff49', class: "text-center" }, "Booking"), h("th", { key: 'e968f20c150aba7e5f911a4ac30cfaf4413be034', class: "text-center" }, "By direct"), h("th", { key: 'd3766ef93b6558575c7c95f615ec5a152cb917a4', class: "text-right" }, "Amount"), h("th", { key: '6c7aaf93248a0f9d1e7ffa738d089b2619944d71', class: "text-center" }))), h("tbody", { key: 'de2da2d48ba47be1663c3a2d466d8d78d64e5e93' }, h("tr", { key: '3a14cdf021b0af91bddc89a55c651aa1aa5a7ddf', class: "ir-table-row" }, h("td", { key: '0bf6c9be97ba15ced6ae39ca8b60771565391284', class: "text-center" }, "1"), h("td", { key: 'a3edcfabce47dfbdb0114007bc5ac87b3afbaf27', class: "text-center" }, h("ir-button", { key: '8aa23c68338a8cb9e2f5e3e00965a250864b533e', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: 'ebe04297fa6ed75247b5547f1ad893178818b15e', class: "text-center" }, "1"), h("td", { key: '799457157db9eb441258877bc5aaa9c2eee6361f', class: "text-right" }, "1"), h("td", { key: '6548d97a60a62883c6ffa997de78539395a94371' }, h("ir-button", { key: '9df72d40fce523ebcfb0b3c6286eb9ebc439e842', size: "sm", text: "Pay", onClickHandler: () => {
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
