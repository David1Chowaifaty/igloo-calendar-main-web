import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
import { t } from "../../../services/locale/t";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: 'd27c1fa82589a06f0e5104691534966473e804e1', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'c799d5d1de1677dc8fe2b4c567eb949abb747bf8', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'b3cd492f2314dff4f5eb813dbaaec1352ab964a4', class: "table-header" }, h("tr", { key: '3171bcf44663ba8334a11e028223c6cf1ea45684' }, h("th", { key: '44852388d930ccce08baac6e6879fc10331e18e6', class: "text-center" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("th", { key: '58eef7d16c8c5d65c582e778b9eb6968250ad832', class: "text-center" }, t('Lcz_Booking', { fallback: 'Booking' })), h("th", { key: '42d411a1cbf6a867a010ff00a6deda412676d4ff', class: "text-center" }, t('Lcz_ByDirect', { fallback: 'By direct' })), h("th", { key: '8ddf942ca2d4c3c36c7d464d383f17f9abaf5fc4', class: "ir-text-end" }, t('Lcz_Amount', { fallback: 'Amount' })), h("th", { key: '2a06129269c18bf7109e51cc126789ff3487e61d', class: "text-center" }))), h("tbody", { key: '7949cd2f57f82328ac18ed068ed51ac75d246136' }, h("tr", { key: '77ad28760934a1d2c5d919f2e15af3b13ff3f91e', class: "ir-table-row" }, h("td", { key: '9e11cea5b772186ba916fc0d65cf10ec4015dd47', class: "text-center" }, "1"), h("td", { key: 'cb8d90fa06e4587209d5ad33a9fe644d5c78de65', class: "text-center" }, h("ir-button", { key: '9190b013f79587bd95f5034d9b693f0d9afd420e', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '7344788ce95f344931868b5d76ba415b9e46e76f', class: "text-center" }, "1"), h("td", { key: 'b1e660dd97ea945eae6a056c7667c016758a8c93', class: "ir-text-end" }, "1"), h("td", { key: 'b6487f1cd30b099dad14f075a8822d628fd8f310' }, h("ir-button", { key: '0d556942eba7cd89053ca5198aae9668757e0659', size: "sm", text: t('Lcz_Pay', { fallback: 'Pay' }), onClickHandler: () => {
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
