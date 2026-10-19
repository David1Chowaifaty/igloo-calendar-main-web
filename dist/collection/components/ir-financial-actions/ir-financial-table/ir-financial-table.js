import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
import { t } from "../../../services/locale/t";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: 'f6c301a1bfab24a394a6c2a1d1fdd84b78a11e93', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '22e15ea724496c3ac9446e1c576dc53973e5340e', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '98a484a4fb0b48813b06f58b490bc0709eb76b70', class: "table-header" }, h("tr", { key: '61640ca2f60b13bce33cf417491fbc8c0e8d245d' }, h("th", { key: '4215a4ee47af902c3887bdb38175ea0db89d32f9', class: "text-center" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("th", { key: '64d5169985304aa6e69f23fc86296ca696aa1b5d', class: "text-center" }, t('Lcz_Booking', { fallback: 'Booking' })), h("th", { key: '0678abfe20616a55e038cb97aaf8fab3569c0f4f', class: "text-center" }, t('Lcz_ByDirect', { fallback: 'By direct' })), h("th", { key: '75281a6df9ec277931f81e581b12bd64dc05a6ae', class: "ir-text-end" }, t('Lcz_Amount', { fallback: 'Amount' })), h("th", { key: 'e0fa0d2d13dee48f2200c9b6d63dd2ebfe551cee', class: "text-center" }))), h("tbody", { key: 'fda7ba814967b45834c9e72def9ac50547c8aec0' }, h("tr", { key: '2d3d21d9c389e81e837b1d70f13aa87855d2d219', class: "ir-table-row" }, h("td", { key: '4bc05ec7d2e5b24a391c1aa2465df05eb1aea9d7', class: "text-center" }, "1"), h("td", { key: 'ea20ad5b8cafbff509085aa20eae433a5334a431', class: "text-center" }, h("ir-button", { key: 'd6732d9b8e26507d5c000c38ce5c18fa8c767787', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: 'b7effdd47b6d440c1f6e79f8567929cca7e3ce0d', class: "text-center" }, "1"), h("td", { key: 'f7579b5ee7d003b786646a98c3fe705ee6134e32', class: "ir-text-end" }, "1"), h("td", { key: '9a23bb56f009798583ad051c08609ecf0d80227c' }, h("ir-button", { key: '64fc4c16ed75dbde05216649726832af4963cda7', size: "sm", text: t('Lcz_Pay', { fallback: 'Pay' }), onClickHandler: () => {
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
