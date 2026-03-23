import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: 'f9ace2f79b91bc2727f4dab044989dc03641990f', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'da9bf6affd46ff351da4b84acb6f392b6f0a7c3a', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '100b22bd29094c23d6c2fe82b0458ca732693429', class: "table-header" }, h("tr", { key: 'bade0f141839474bb6d7b01a0f2945d0fc739040' }, h("th", { key: '3e94538c3eeef98139def8c5aa961038692aa5b2', class: "text-center" }, "Date"), h("th", { key: '54bc6841589f542884a9315713b3d29cdf3b7663', class: "text-center" }, "Booking"), h("th", { key: '30a8623ecfab242fc423e8a16cf5964f7f568643', class: "text-center" }, "By direct"), h("th", { key: '58dd45f70816f81b3b8e9f99ff7e0efd231b0591', class: "text-right" }, "Amount"), h("th", { key: 'cf375f7013ecc04d8d6963512e59f18085e05b19', class: "text-center" }))), h("tbody", { key: '28d489388c33a6ae774a1f128345976beeec1c9c' }, h("tr", { key: 'c009239feb8fe055ace2db7e6c1051666f82ad69', class: "ir-table-row" }, h("td", { key: '4805e2839869b0c1e89222a5e2b157ff927723ca', class: "text-center" }, "1"), h("td", { key: '69ee221e67e416bf28722a69b32e3bfdf32e3294', class: "text-center" }, h("ir-button", { key: 'b370eb3e116d0da2d3722b1b6bde2209afc56021', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: 'd1775eaf4c24529a341778960c8f4a83674d30d0', class: "text-center" }, "1"), h("td", { key: 'a1f62aae508296c81a7790c056620fe2045bc8c8', class: "text-right" }, "1"), h("td", { key: '2c9b78e8867a7c5e35dadaf1dabc60f571804f5f' }, h("ir-button", { key: '78e2d6f7f345c45504c0cbae8ab6cdcc2520b149', size: "sm", text: "Pay", onClickHandler: () => {
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
