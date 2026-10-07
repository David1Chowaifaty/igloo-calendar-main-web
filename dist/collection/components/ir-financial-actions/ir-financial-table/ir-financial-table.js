import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
import { t } from "../../../services/locale/t";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '9cfa1a491fa9a53b30234f762f022ab5f6435825', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'a485fe3681a9f3936e8cad4a2207073d6e793e5a', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '55359853f163113f748eb885df89f11e76a396bf', class: "table-header" }, h("tr", { key: '762e874395f0920c510fabc9acb2edfe8fcf07c1' }, h("th", { key: 'c4c47eabbc8225a8962edab4c6e439f73aaa1bef', class: "text-center" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("th", { key: '7014d3f29653ca2c6aa6b69e26dc934d6788205b', class: "text-center" }, t('Lcz_Booking', { fallback: 'Booking' })), h("th", { key: '31ceb88a655affbee106e4524ec7e25dd2cc1463', class: "text-center" }, t('Lcz_ByDirect', { fallback: 'By direct' })), h("th", { key: '16ef83edadd4c048bdb54ff1084cddbb7ecce8ac', class: "ir-text-end" }, t('Lcz_Amount', { fallback: 'Amount' })), h("th", { key: '32da9e3fd9a776714441490e22df442922d8b569', class: "text-center" }))), h("tbody", { key: '95d1f512d105bdf0b2887197d4ae3f55566e0b02' }, h("tr", { key: 'ce48522be07b02dd776f59c53f7b42db6596eb61', class: "ir-table-row" }, h("td", { key: '98165bae1603ed942b34d05f853e4c8109a7d6ea', class: "text-center" }, "1"), h("td", { key: '6759de4d65208a0f64bd4052f8d6d973c60539ae', class: "text-center" }, h("ir-button", { key: '7c23cf26d9cd0eeaec28a0997e8bd2a6c02f2754', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '136c9ae8db76f4aac199d759304a7630c6f5c63f', class: "text-center" }, "1"), h("td", { key: '50612b8b8714d3fea399ef8a342773c040bcf182', class: "ir-text-end" }, "1"), h("td", { key: '89041cfc4a774b14ae1dab66e48197fa5f2215a2' }, h("ir-button", { key: '31fcc60846ac7a746ee88aa203c1f3b5e3227292', size: "sm", text: t('Lcz_Pay', { fallback: 'Pay' }), onClickHandler: () => {
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
