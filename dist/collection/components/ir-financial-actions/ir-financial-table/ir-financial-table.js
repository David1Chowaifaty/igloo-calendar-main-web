import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
import { t } from "../../../services/locale/t";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '8dba4ed4733ad4aeba1a30bbe27b690bc6141e16', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '4ee44bafc36c99d21a1afd1a1aa868eb97a30aa9', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'cfdacba27a39c08c41898838c9d26a3b9bb89b8f', class: "table-header" }, h("tr", { key: 'aac50ea2598d8e6cd98a222fc8396d68e86387bf' }, h("th", { key: '58f11f7d9c62898fc9c7735e89003ebaeb860aa2', class: "text-center" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("th", { key: '1a55d7e21adc899c584e93cbcba8f8dbcbfc6884', class: "text-center" }, t('Lcz_Booking', { fallback: 'Booking' })), h("th", { key: 'b679b946066066ee05723c4079c25daf2616b902', class: "text-center" }, t('Lcz_ByDirect', { fallback: 'By direct' })), h("th", { key: 'bf756e3946b9bc48a068737731d786d9e56e2f8f', class: "ir-text-end" }, t('Lcz_Amount', { fallback: 'Amount' })), h("th", { key: '9c103ebec4162e1c159317e108d71504686c89a0', class: "text-center" }))), h("tbody", { key: 'a16bf546a20520ff5c045d2bdd75cb64717d8541' }, h("tr", { key: 'e12a1e29809a2f9746cea28507e9b00a041de902', class: "ir-table-row" }, h("td", { key: '7c4c7b3abd2b2e05724a6740f12fa4256cf56571', class: "text-center" }, "1"), h("td", { key: '56ec1df81564079d2fd12d3cc861e2656392774c', class: "text-center" }, h("ir-button", { key: '8c4ed09eaf8340ab7b6d47c2cd14ca7f13b3ae73', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '3e69018d1d17e14d9f5ddc25d7559ce59dfdc9df', class: "text-center" }, "1"), h("td", { key: '80def7c2280769e79e06ef0071e4b550a6d21ea6', class: "ir-text-end" }, "1"), h("td", { key: '83a7d8ae22bd1fe8572be3a95d52703b780c640c' }, h("ir-button", { key: 'ce65e61a64ff456971a34b0d3f767a85dfe72d76', size: "sm", text: t('Lcz_Pay', { fallback: 'Pay' }), onClickHandler: () => {
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
