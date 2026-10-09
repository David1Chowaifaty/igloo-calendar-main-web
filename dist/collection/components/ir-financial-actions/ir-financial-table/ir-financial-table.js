import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
import { t } from "../../../services/locale/t";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: 'f28752a13e97ef850dccc740d8bf7313ac5f6f86', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '389774607e168447319493dbfe9f33d9367455de', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'e0be4bd42ebffd7a25b3106be5911b9bfcbe161a', class: "table-header" }, h("tr", { key: '3b9db1ae371631405cca642c338e81853afe1607' }, h("th", { key: '6c6f2581ffec8424cde03e90b0393a7d6174a534', class: "text-center" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("th", { key: 'cc1b95d4b4b70cc0ae0358a1071598e77b0ae6a9', class: "text-center" }, t('Lcz_Booking', { fallback: 'Booking' })), h("th", { key: 'da640dd8f8efa2ffee60c3c52b46425bf5224d29', class: "text-center" }, t('Lcz_ByDirect', { fallback: 'By direct' })), h("th", { key: '258de77b9e0041d402e781a7e25ed237c2a97a54', class: "ir-text-end" }, t('Lcz_Amount', { fallback: 'Amount' })), h("th", { key: 'e2a5c349eef09a52d02c434ca034ecaa11030bae', class: "text-center" }))), h("tbody", { key: '665def27368e7db02da18314d9aac77d867910b5' }, h("tr", { key: '0fee4341f9823cb80efa5dde3a8b0362a8d914bb', class: "ir-table-row" }, h("td", { key: '88f8e947be13fef380b04758f5273017ecb5075a', class: "text-center" }, "1"), h("td", { key: '46180c751ea45ef23f38c7e14a26064cf0502914', class: "text-center" }, h("ir-button", { key: 'c750b8da99e8a99a2ffa9f23def87871412a3dd3', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: 'de225c491938dcea060e74025f1625624ea2e256', class: "text-center" }, "1"), h("td", { key: 'c29aa1e5e1e94b83d105b68d9e5809e47ea3296f', class: "ir-text-end" }, "1"), h("td", { key: '08b7c46aa485ad7af86a2bfca6c21cba698f4321' }, h("ir-button", { key: 'c88e1145014fa9142fa56dc971b09d0300ad6e8e', size: "sm", text: t('Lcz_Pay', { fallback: 'Pay' }), onClickHandler: () => {
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
