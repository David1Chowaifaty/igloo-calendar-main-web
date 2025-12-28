import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '2b9677cd1b9f2d934800ec92b7d0e7334e8f5d9b', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'cec5825d788af2f3b4a92e4922755198ad2ce246', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'ddc9957f6ec2b2cd9618a0f355a75e6fa5d18983', class: "table-header" }, h("tr", { key: 'd65550cb11525692223f0f0965423039df043190' }, h("th", { key: 'ef2c73a37ae7ac5fa847ad245dcb13c5bdb56fc2', class: "text-center" }, "Date"), h("th", { key: '58bb5ab1ecd25e465084936aa9f86380761b5993', class: "text-center" }, "Booking"), h("th", { key: 'b0746dc748a4e581fc54cc5748c7196b78d1a2d4', class: "text-center" }, "By direct"), h("th", { key: '8477b0b6cfb5ef96967628c770f5ca4bd4677710', class: "text-right" }, "Amount"), h("th", { key: 'bef77d55712672bf6ab86f43a44b2a76b9eb9ce7', class: "text-center" }))), h("tbody", { key: '16c84a0748c2b00e9dc1e99f7c664a1452250f91' }, h("tr", { key: 'db945e45212cc04a31998f707f79b94f4cb9e8ef', class: "ir-table-row" }, h("td", { key: '45891177e34b5f226c33b0d8f95a5da26d0f6f21', class: "text-center" }, "1"), h("td", { key: '890791c6ed66f61532baf1a29ffdad459e2417f8', class: "text-center" }, h("ir-button", { key: 'b03264589d8c56617ceed87ac223811902234efd', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '1a0a3cb13921780d3cee786cbf869eddd0650857', class: "text-center" }, "1"), h("td", { key: '73ee9d8025493bff748eb80d583e79ac36a514c0', class: "text-right" }, "1"), h("td", { key: 'fbdfd4e553ec5387f21e90e94d8c9d9c42e192fb' }, h("ir-button", { key: 'ffddeb3ccfbe3844adde41b16b3c2c972db8ef57', size: "sm", text: "Pay", onClickHandler: () => {
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
