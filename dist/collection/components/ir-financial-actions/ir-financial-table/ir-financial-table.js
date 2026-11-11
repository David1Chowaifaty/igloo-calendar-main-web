import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
import { t } from "../../../services/locale/t";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '75a4ec4f5d4158e2d1fe10ef2ce8345d9b46b90c', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'ae4067a9ab248ce99593ebd5ffd053f1badc0429', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '60f86a6f2395821ffd5f3fbb6369939739047723', class: "table-header" }, h("tr", { key: '742617d3a78a85a9bdc29c430a139e5b0d395088' }, h("th", { key: '4790f075a577a8937e2c16e376fdb31e636b4664', class: "text-center" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("th", { key: '159a346370f3533e8904a39af810ee8a7dd593e2', class: "text-center" }, t('Lcz_Booking', { fallback: 'Booking' })), h("th", { key: 'c8e6925643f19e1a002c117f7c1726c652b911eb', class: "text-center" }, t('Lcz_ByDirect', { fallback: 'By direct' })), h("th", { key: 'ee114abd06cfb33072e7485a28d6c5bd8995d05f', class: "ir-text-end" }, t('Lcz_Amount', { fallback: 'Amount' })), h("th", { key: '1bbc917a136dad16c92ad444b852099d2049bc9c', class: "text-center" }))), h("tbody", { key: 'b2d90ea3fa1da4d1d3eb0fe883a2d11f196fcbf9' }, h("tr", { key: '66e677be0c497424826806e4274d7b916b186e8f', class: "ir-table-row" }, h("td", { key: '16c0948762cb39d0e0f4938e9ba51b62e98271de', class: "text-center" }, "1"), h("td", { key: '9d70141e0ca5efc7c1848192beacf62a092fdf7f', class: "text-center" }, h("ir-button", { key: '89b3854a1b8cc73817f802f4fa2439b815e7166c', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '54aea8866d9d906834586dd3be2a98967597bf0f', class: "text-center" }, "1"), h("td", { key: '6554e1e0eb9739a388dd59731421194af88320e1', class: "ir-text-end" }, "1"), h("td", { key: 'fbf774e593c2f6092a1088bd67743570011504d7' }, h("ir-button", { key: '67f77185aba967232dd49e987447406fed20b49e', size: "sm", text: t('Lcz_Pay', { fallback: 'Pay' }), onClickHandler: () => {
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
