import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
import { t } from "../../../services/locale/t";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '9770a5966cb2c525712f5d1910b9186448d9d27e', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'cf74d0bfc9dced13f6fe4e56c132f063af44ae60', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'd71a8ca6d1fbe3ce102022afd317457628f7f25d', class: "table-header" }, h("tr", { key: '7d52f0378ca6f563353b951545171b0c627851fc' }, h("th", { key: 'ddad351abea4bdcaf2efe60bec0952dd0d11d4bc', class: "text-center" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("th", { key: 'e6531e37639528efd32e5f9e39caf2e61b263151', class: "text-center" }, t('Lcz_Booking', { fallback: 'Booking' })), h("th", { key: 'e60701cc129aa48cb6ea305d41c29a3ac92f08c7', class: "text-center" }, t('Lcz_ByDirect', { fallback: 'By direct' })), h("th", { key: '9dd99dba3cdd24ce3d214122bba37b83692538df', class: "ir-text-end" }, t('Lcz_Amount', { fallback: 'Amount' })), h("th", { key: 'ac4f868332bc2ca6f82f174092d93d2314060417', class: "text-center" }))), h("tbody", { key: '1d33291a72455ada97306c48fac7dda78e06b504' }, h("tr", { key: '3b136b61694e48dbe8ecb412b09f21c17f9ab952', class: "ir-table-row" }, h("td", { key: 'ff281ec84ee10ff32fbb1a27278e364242cf49a2', class: "text-center" }, "1"), h("td", { key: '69dc2fb96a5e9b00c3f338353f2217ab7c53b567', class: "text-center" }, h("ir-button", { key: '973f22e7bc96fb2be87fc2ff4c1fef871ef71463', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '0f564895d06ec310df38a129651eee3f7fda9e89', class: "text-center" }, "1"), h("td", { key: '9fd21aee23a44f68cacb4b1769caf58fe9ef3b1b', class: "ir-text-end" }, "1"), h("td", { key: 'd113c64e8b8a67b019f249a70e3eefeed57728ac' }, h("ir-button", { key: '7964a03cf2332742949ec72a701269c549a8359d', size: "sm", text: t('Lcz_Pay', { fallback: 'Pay' }), onClickHandler: () => {
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
