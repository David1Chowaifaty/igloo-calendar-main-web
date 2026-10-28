import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
import { t } from "../../../services/locale/t";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: 'fbc9c44fafdf550531b165254d66f4eb5fb49c3c', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '2542857dad1f0d9cb728181bc00c396c3bbc6827', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'e3b22004992fe00094b817ec40d0aecb6d96b29d', class: "table-header" }, h("tr", { key: '9d664bfce328a59524eedcf41173bc285b788b97' }, h("th", { key: '3a149b57263e172b0cd59f9a395c573408d925b0', class: "text-center" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("th", { key: '17c320bd4d4d27ca18b241b9634192b996052e96', class: "text-center" }, t('Lcz_Booking', { fallback: 'Booking' })), h("th", { key: '01dc4b83cf6b93f2249d8eff6d89ec8f8e271ce6', class: "text-center" }, t('Lcz_ByDirect', { fallback: 'By direct' })), h("th", { key: '5e0ff016b6fe1a18389796fc84ffe1d0f09b3b22', class: "ir-text-end" }, t('Lcz_Amount', { fallback: 'Amount' })), h("th", { key: '0a5ba84dda6e12168e5f4aad396dfdeaf8a99e23', class: "text-center" }))), h("tbody", { key: '0238ca4d1c90cec90204b5c3652da40c7b168fc8' }, h("tr", { key: 'c59a31da95c8a59f834bbd6e6bbc3542eab08584', class: "ir-table-row" }, h("td", { key: 'de3fc91d1ff18063af21ff42388a083b9a8cd17e', class: "text-center" }, "1"), h("td", { key: 'd07cb42b439a4886ade6213b9b336c5f18e0481c', class: "text-center" }, h("ir-button", { key: 'f0bf812e6923378d4d724a037c123e61323d2a82', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: 'c711feb999de01a555dfe8b45c7b10db63dee660', class: "text-center" }, "1"), h("td", { key: '2df1fcbd149b71672999ac733065ea220c67499a', class: "ir-text-end" }, "1"), h("td", { key: 'adfc62aa4d37a5d5b60b9d9348b58de9a87146a5' }, h("ir-button", { key: '21a19c141286a3f04ce7c36e88e2534db493c443', size: "sm", text: t('Lcz_Pay', { fallback: 'Pay' }), onClickHandler: () => {
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
