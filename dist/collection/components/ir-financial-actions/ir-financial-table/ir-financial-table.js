import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
import { t } from "../../../services/locale/t";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '82735bc038eed2b39d6c6ddf02d2b805dca52f83', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '9cac829609f3a77072d3a5bf3b7507f76f0a8e00', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '41ec1dd3353aac6efc47a39b9584b50731aa2bb0', class: "table-header" }, h("tr", { key: 'b8ac32caa57e4700ccc33bc32e325b83e4f5a392' }, h("th", { key: '98adbd94f7cee2222399af511896c65c2efdce03', class: "text-center" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("th", { key: '8d397193d5dad7165d82cc104f0aa75adcfc0177', class: "text-center" }, t('Lcz_Booking', { fallback: 'Booking' })), h("th", { key: '0b54ab8cfb25564be51967fa17a096c3b5e20b76', class: "text-center" }, t('Lcz_ByDirect', { fallback: 'By direct' })), h("th", { key: '307cb11c8a017226f7c54e27e622dc76d21522fd', class: "ir-text-end" }, t('Lcz_Amount', { fallback: 'Amount' })), h("th", { key: 'cf8bfadf96bd17aa6a1cbb6d9541d77ef575935c', class: "text-center" }))), h("tbody", { key: '382b2bff90dc99478af64b23cedbae8d555bca6a' }, h("tr", { key: '996a9f6a82ba93456abd7812f263ad09893d03bf', class: "ir-table-row" }, h("td", { key: '5802ce2291e6193b8ef31ab6438646428ef6732c', class: "text-center" }, "1"), h("td", { key: 'e8255cec8e05782ee9e310b438865c93a87b3c6d', class: "text-center" }, h("ir-button", { key: '65e5f86becdbf8f29fc83e96f6b11c0e2e114ebc', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '539ee08c9ff6d68c57818dc1ca2320304644c6bf', class: "text-center" }, "1"), h("td", { key: '112ce6308af40d8555c35f53e507b53f701ca0c6', class: "ir-text-end" }, "1"), h("td", { key: '3bb813358fd993d676204bc7bf3e0c88e8c9e18b' }, h("ir-button", { key: '21773823dbfa3ea95b4957149dde5a341f3b6a40', size: "sm", text: t('Lcz_Pay', { fallback: 'Pay' }), onClickHandler: () => {
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
