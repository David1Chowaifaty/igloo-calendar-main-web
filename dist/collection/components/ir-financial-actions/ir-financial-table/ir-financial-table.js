import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: 'cb728529abf30b3ac4dfac2c8ab7a30106d468e2', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '5777202c09a262e0f8bf76a70ce24ed22671c94a', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'cddcd6397a5996c83a65517a0f64e56ac108525b', class: "table-header" }, h("tr", { key: 'dd4f3bf4690bb91e54b0fff91eca6abc555e57a2' }, h("th", { key: 'f6e6727331da815a6999b3519b87c49f51d3bb2b', class: "text-center" }, "Date"), h("th", { key: '4a4ff6ed7976a6a3e0b64408732ce9c363491dea', class: "text-center" }, "Booking"), h("th", { key: '1c1ca96efd06ae457b2dd3d20b75cfe020a85323', class: "text-center" }, "By direct"), h("th", { key: '90b7f9ed1628f77c173d67792fdd359cb7a89d2f', class: "text-right" }, "Amount"), h("th", { key: '64c1114dc23a43ca7852c9244018809e39e18e80', class: "text-center" }))), h("tbody", { key: '8b68305f59404416193227af98de8a662ed7d828' }, h("tr", { key: '3a1ceec31d9cd4b7796f96dd12ea40236a2cd3da', class: "ir-table-row" }, h("td", { key: 'df39eb7375869177e89134bfaf1630cfd8125273', class: "text-center" }, "1"), h("td", { key: '908fe01c3bf747cce24cacb234a34f4d6c3e74c7', class: "text-center" }, h("ir-button", { key: '8a5a80220e2e96ef0c6d51333f38ab65395cfb4c', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '020a5f00de41307fcf79b412de7175b0fccf09bc', class: "text-center" }, "1"), h("td", { key: '2d9cd774e1aa7611d5951b85b1e386accb30c0c9', class: "text-right" }, "1"), h("td", { key: '6556cd3f72914b61b3903adec686c19b2be02f04' }, h("ir-button", { key: 'f899196eac7654c894de88e10bb05ac15bb57876', size: "sm", text: "Pay", onClickHandler: () => {
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
