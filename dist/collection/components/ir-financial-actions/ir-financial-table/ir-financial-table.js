import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
import { t } from "../../../services/locale/t";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '72c1735b721c145dc63c700f9dc4d7be89384950', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '0f74e7bfdaa49bd26ce23fdd307ebef58bf36485', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'e2852bc5df2885192e642d997eb954d0b079d347', class: "table-header" }, h("tr", { key: '8876162a67dead8b7a708524a07497783ef31aa7' }, h("th", { key: '89d1767590e9f4e8f407221c3029d6fd28feaf2c', class: "text-center" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("th", { key: 'c625bd0cd5a0983ce036037b47e1829e0bd425fe', class: "text-center" }, "Booking"), h("th", { key: '2bfc96c4678e83efb5efb7b0f8c3fe68f89451e7', class: "text-center" }, t('Lcz_ByDirect', { fallback: 'By direct' })), h("th", { key: '88d402c4da6f47b6f09d221baefe22682e5bdcdf', class: "ir-text-end" }, t('Lcz_Amount', { fallback: 'Amount' })), h("th", { key: 'eea8f4b6e697f16453fb413589212795680edb1c', class: "text-center" }))), h("tbody", { key: 'cad2a70dab7c2b246d3c4fb37321163395d508f5' }, h("tr", { key: '2e69b14c46a84fa91c328a58e7220b5f109de428', class: "ir-table-row" }, h("td", { key: '2e9ddb92e01b6bb7f4acf5384721f024edbd3076', class: "text-center" }, "1"), h("td", { key: '496cba6293a09b854f57ce41007d84be7f46996e', class: "text-center" }, h("ir-button", { key: 'c6e924f2db9629adf844b6310e55a81b33f08a58', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '1b365c9dc3fd5482b5eb44b1b37830b106534097', class: "text-center" }, "1"), h("td", { key: 'e590b4dfb2e52bf79464180d3371fd8d9a18d0df', class: "ir-text-end" }, "1"), h("td", { key: 'effb5f9519777b06244044ddc5fe95a8472d0eba' }, h("ir-button", { key: 'f0bfd6eb445cb01919a006ba1fdbc8b8f0b8a5e8', size: "sm", text: t('Lcz_Pay', { fallback: 'Pay' }), onClickHandler: () => {
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
