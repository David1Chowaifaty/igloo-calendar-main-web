import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: 'b2eef5f93315eb1e317bbde6a41a58ff4dfa370c', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'cea7364efd28604a94fcb4e71d05bd1437ec195e', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '05cd45d8e8089b7b8ce0774a66a1540d75e2c367', class: "table-header" }, h("tr", { key: '3306c72a3a5bc0427d5fd6e93db6466420b9b39a' }, h("th", { key: '62683edd998b0b7125c4993feeec47491ab3b21a', class: "text-center" }, "Date"), h("th", { key: 'b147c29319775f7ec871bff78d73cee0ad68acb3', class: "text-center" }, "Booking"), h("th", { key: '52de2ef3dea61023e44ff9b1be03be1d960c3235', class: "text-center" }, "By direct"), h("th", { key: '51cd4df7c25c24fa0d1121b3d7111ddc33add471', class: "text-right" }, "Amount"), h("th", { key: 'd6d3f7a082aaaf1445fa5641debdaa72e1ce1009', class: "text-center" }))), h("tbody", { key: '62ac3265bf25091b898d654a65650f02ede7f6ab' }, h("tr", { key: '8d2aa411481dc58b7d516384916b994c2f68fa82', class: "ir-table-row" }, h("td", { key: '6d3f036580e577a97171eefae51c54219816bf1e', class: "text-center" }, "1"), h("td", { key: 'bc0d119dd77b57908a539c1d6977910456b3b6d2', class: "text-center" }, h("ir-button", { key: '43d0671a622b245f94b0f7cb8c7a84bc272833a1', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '2de1c850b7be1e8c76d31790f650e5473a608a52', class: "text-center" }, "1"), h("td", { key: 'f9c27dc683946f4f9495650c2f57539183e22ddc', class: "text-right" }, "1"), h("td", { key: 'c621706083cf3dd162b09eeb9a4d8bbbfa8c8a0f' }, h("ir-button", { key: '22fb3f305fa11bafe550e6b6889f70f9491840f8', size: "sm", text: "Pay", onClickHandler: () => {
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
