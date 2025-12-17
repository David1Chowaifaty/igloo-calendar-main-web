import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: 'ed09f4d7162efd62ce103f79253011ad2b4c9364', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'ad43ac279b34f94ef3f1b105c4730226e000222d', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '8c91b1d0f5496f05462f85acb8984217e5614085', class: "table-header" }, h("tr", { key: '1d8c8cf297487e0618e6e04f1d0f9f607649b165' }, h("th", { key: 'cab03a9bbe33097d25a0718ccab1796656718811', class: "text-center" }, "Date"), h("th", { key: 'ee05c98fc4514e96687782b7b13f4099cf99b7dc', class: "text-center" }, "Booking"), h("th", { key: '4b3e87912fe07436237e4647a472ef15bea68da2', class: "text-center" }, "By direct"), h("th", { key: 'c8b07b636d58e6e628db371dc221ca1d36ce8ca8', class: "text-right" }, "Amount"), h("th", { key: '129db149d28d66cb4f99f8d5eeb7282c292ed5e8', class: "text-center" }))), h("tbody", { key: '28c17b64654cd91a339782421e81ac8d3c5c2056' }, h("tr", { key: '9de2e9a9686ddea2eda06e1091f1b94d6603ac0f', class: "ir-table-row" }, h("td", { key: '0447775e2b57900cc0ecd18d75cfe63d48440c5c', class: "text-center" }, "1"), h("td", { key: 'fc816de18bc23965db604529eac61742a3e7441e', class: "text-center" }, h("ir-button", { key: '04824beebb8a227e0832de195c70ae68ee0bc263', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '7abf3d1dc1a931efa430d11c888d9abbfead0735', class: "text-center" }, "1"), h("td", { key: '00515d76d6dee7562e63858c67d34f9f630adf13', class: "text-right" }, "1"), h("td", { key: '7671283185a5cdef009c0a5d70360b1a29c6e6c3' }, h("ir-button", { key: '65f9ae601a6efecb4834fcc0bb91d78c2f7a4502', size: "sm", text: "Pay", onClickHandler: () => {
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
