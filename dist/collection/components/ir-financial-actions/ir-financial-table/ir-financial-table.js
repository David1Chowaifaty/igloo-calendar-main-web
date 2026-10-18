import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
import { t } from "../../../services/locale/t";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '4db9047ebeea7da5932a3e132b7d3dc8192f5b2e', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '2503cae9847672d986435525193b5d2558b8e479', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'babafa5bd8abdb9f587a937cc484d5a65ea57bb0', class: "table-header" }, h("tr", { key: '623b4c59f5413c8958beb73bdb77e02d26667e6a' }, h("th", { key: '07ec1c8cbdeb2d91d7bede5f81f6dbb2f1c2fdb3', class: "text-center" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("th", { key: '85f89ba403fb97afbfe83941611b78d66baf22bc', class: "text-center" }, t('Lcz_Booking', { fallback: 'Booking' })), h("th", { key: 'ab612e42a002e1a1cd7a0289b25fc3956493410c', class: "text-center" }, t('Lcz_ByDirect', { fallback: 'By direct' })), h("th", { key: 'e08fa7156d4580b697dc32a07f7675c9213d49f6', class: "ir-text-end" }, t('Lcz_Amount', { fallback: 'Amount' })), h("th", { key: '751f75b995bc8d5f6f832b53c1e4a827f3f1f237', class: "text-center" }))), h("tbody", { key: '94b0f72ac592b28b754e560a5401e9566e8eec8d' }, h("tr", { key: 'a73f112dea98b014657ad1f48c0d545a957aa4ac', class: "ir-table-row" }, h("td", { key: 'd7289bd96e29406cac9211b45657c437e395e8d3', class: "text-center" }, "1"), h("td", { key: 'de512900211f8bc361049e7db57df1ad6b65901f', class: "text-center" }, h("ir-button", { key: '2826634771c48bcea99a3fc9dd826205de2c8e86', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '66d8ad53f84e984b75999fb24ce3f55f632c10b0', class: "text-center" }, "1"), h("td", { key: 'cd1d87635c9fdce9cf4ecdf3dc95756b8c83863c', class: "ir-text-end" }, "1"), h("td", { key: '4be5d9201f24d7b6fa245d7cdab21a1115f6f214' }, h("ir-button", { key: '793cbdcb54d410b2e3fe2515f35f2adaaed5274f', size: "sm", text: t('Lcz_Pay', { fallback: 'Pay' }), onClickHandler: () => {
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
