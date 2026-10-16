import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
import { t } from "../../../services/locale/t";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: 'd9de4b8eae3ba405ca1b3dca978c1b6a1153159d', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '5857c3f5709c89936d42a81a9a1cb413b1902563', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '23ecca1c870ac480b3fa7d2e4bcf081a6b5a51cc', class: "table-header" }, h("tr", { key: 'f3fc0ee572a1653ac49cc5e6f88d7973f070fa48' }, h("th", { key: 'ed949e57145722c1baad766d86771db233a95208', class: "text-center" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("th", { key: 'b8b4122f0376d88be2abf0751e4ba063da538dba', class: "text-center" }, t('Lcz_Booking', { fallback: 'Booking' })), h("th", { key: '29fbf42e56b0be2b686044b31f0dc7b485d40022', class: "text-center" }, t('Lcz_ByDirect', { fallback: 'By direct' })), h("th", { key: 'ef80fb6834e33e4be888ff51222b170e388c4029', class: "ir-text-end" }, t('Lcz_Amount', { fallback: 'Amount' })), h("th", { key: '445fc3f2204a8e5a1b4fa77e7bbd3a94f99a689d', class: "text-center" }))), h("tbody", { key: '8927209b1d879088254783772112deee75dce54c' }, h("tr", { key: 'a698ed0c998eef2f484271fda89526161fc27ed3', class: "ir-table-row" }, h("td", { key: '0a978390ec33b76b290c98247682355f4fc92445', class: "text-center" }, "1"), h("td", { key: '3c8671aee9269791dc7b41193e46f99323273144', class: "text-center" }, h("ir-button", { key: '62f902b38f173a7631d0c7939090fb832df2d8e1', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '3d27ad7fec1fd3b46b78e33d0c3c275bb1c2c6f9', class: "text-center" }, "1"), h("td", { key: '231102ac6e3e1165d6a802c7fc3b7d184e5eea12', class: "ir-text-end" }, "1"), h("td", { key: '35e0cdfd2b31553ab2c47a8fbae5f24aad16b952' }, h("ir-button", { key: '9a15090df2111781ca1ef440d892b0f06745d706', size: "sm", text: t('Lcz_Pay', { fallback: 'Pay' }), onClickHandler: () => {
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
