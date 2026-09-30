import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
import { t } from "../../../services/locale/t";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '72c1735b721c145dc63c700f9dc4d7be89384950', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '0f74e7bfdaa49bd26ce23fdd307ebef58bf36485', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'e2852bc5df2885192e642d997eb954d0b079d347', class: "table-header" }, h("tr", { key: '8876162a67dead8b7a708524a07497783ef31aa7' }, h("th", { key: '89d1767590e9f4e8f407221c3029d6fd28feaf2c', class: "text-center" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("th", { key: 'c625bd0cd5a0983ce036037b47e1829e0bd425fe', class: "text-center" }, t('Lcz_Booking', { fallback: 'Booking' })), h("th", { key: '8b5340ff894774740cb8e4875f9bf4c7420591ac', class: "text-center" }, t('Lcz_ByDirect', { fallback: 'By direct' })), h("th", { key: 'ff1bbf9cd8d36e1fbfd9a27481245c39b736a0af', class: "ir-text-end" }, t('Lcz_Amount', { fallback: 'Amount' })), h("th", { key: 'c5db8dd413522f1a6b6da20c35811296e286b679', class: "text-center" }))), h("tbody", { key: '191868a1bb25be103f9784743e1dfd97f93631c2' }, h("tr", { key: '2c922f2b1a13e33001b9da740deb1a28307939e0', class: "ir-table-row" }, h("td", { key: '43075438ce5db02cfef7bdb9289d9b9eee5bd6db', class: "text-center" }, "1"), h("td", { key: '6324881799a6c55d7865c0b3b09703098f33909c', class: "text-center" }, h("ir-button", { key: 'f38c961152f070347447df580284700599998f45', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '975f5f71cabf78fed1fd00aa63c1c7582628eea9', class: "text-center" }, "1"), h("td", { key: 'c949c7abb0299f12642fb46fd4fe89e5453afe04', class: "ir-text-end" }, "1"), h("td", { key: '02630bd55dcbde2445c9561f203609737f35d2ae' }, h("ir-button", { key: 'd848906bc633a90e0be91bf0bda548f94df7d0f2', size: "sm", text: t('Lcz_Pay', { fallback: 'Pay' }), onClickHandler: () => {
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
