import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    render() {
        return (h("div", { key: '7279954327f25704f43335b60ddc5352aad6f0d4', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'c70dcda091ed81efe64d0669c8f460129d2a9b3b', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '27cf7827495e93ec2c7943dc2e3dc6018e490508', class: "table-header" }, h("tr", { key: '047ebbe627c8e68358a7aacafb583e9df7f5814f' }, h("th", { key: '1eeb63031f06db8bf8d5e0a23573ed071cf7eb05', class: "text-center" }, "Date"), h("th", { key: '6750db269906518f18d37555850a0739c03c9d1e', class: "text-center" }, "Booking"), h("th", { key: '12799bcff598eb4cac0150f2505db35e6995a8e9', class: "text-center" }, "By direct"), h("th", { key: '4fd1dd0bd0a8d0c482f7d9783f01ee6669b6e9df', class: "text-right" }, "Amount"), h("th", { key: 'd8f7210dd4d92b0339ec489c3991c2f39c2a039f', class: "text-center" }))), h("tbody", { key: 'ed3417a2550fa756442ad5862d68e633098f3570' }, h("tr", { key: 'f116fbb64253fbd133f741226ca40383613a2ced', class: "ir-table-row" }, h("td", { key: '28a25466372e52f911069df7464d6f5ba5335cc8', class: "text-center" }, "1"), h("td", { key: '784a5a541384ead7c996f054dde65517f6315a7f', class: "text-center" }, h("ir-button", { key: 'a92819256bfd771974cab364ae856fed9a11e63c', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: 'b8b3facd676f13f755efe1db602ec40fa2c3632c', class: "text-center" }, "1"), h("td", { key: '08bb16b5e4a25e755eea9fcac355e0d621d68dee', class: "text-right" }, "1"), h("td", { key: '7b9e43f61e10fa288246432db4bc0a469c323297' }, h("ir-button", { key: '92d84ff8360748f2b15a9c0551b4e1545dafb570', size: "sm", text: "Pay", onClickHandler: () => {
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
                    "resolved": "{ type: \"booking\"; payload: { bookingNumber: number; }; } | { type: \"payment\"; payload: { payment: IPayment; bookingNumber: number; }; }",
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
