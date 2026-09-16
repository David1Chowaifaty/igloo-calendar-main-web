import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
import { t } from "../../../services/locale/t";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '151820ea41b9410199ff8030720a77c2fa72449e', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '312ce4e69009fc52a24aaa72665fd00c69c4c4d0', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '6ab6b4e95f3a8d4cf1d3ebda680559d802d9baae', class: "table-header" }, h("tr", { key: '495e2611a59f4e456688e33d8d7914222ce2159e' }, h("th", { key: '98f165aafabdfb8d8a04669aef0ebae3cc206617', class: "text-center" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("th", { key: 'd0c2daec2a471b258eb9ac0c65f4b04f0a518433', class: "text-center" }, "Booking"), h("th", { key: 'f397e35ee298e7cbb5fc20dbe2ab44bc0ff83ce9', class: "text-center" }, t('Lcz_ByDirect', { fallback: 'By direct' })), h("th", { key: '789ef85268d78a9384876b4404c6fc8c8617c211', class: "ir-text-end" }, t('Lcz_Amount', { fallback: 'Amount' })), h("th", { key: '66cf0590c34a8463741f2d609d6cec051c26698a', class: "text-center" }))), h("tbody", { key: 'd0a915423178e7248a721fe5b5beb7ac2ff54adc' }, h("tr", { key: 'b80e78d780d43a7d22040040269f616bc8eb3ccb', class: "ir-table-row" }, h("td", { key: '756a7e3a6cf3cc102c74c1a7d194ca3e9b137f57', class: "text-center" }, "1"), h("td", { key: '7d13eb5776f652b36dd119af2242ab4a7f30ebbe', class: "text-center" }, h("ir-button", { key: 'bf6e2c55f6c386930c9eca8ec4792143ac863479', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '4b834f5d3a892b441f775d6b868698fb2979f8bf', class: "text-center" }, "1"), h("td", { key: 'a4790bae7e9eb9dc1bac4a2294d42ebc093267bc', class: "ir-text-end" }, "1"), h("td", { key: '5a86031b4bcb95876322214058d888d92c80d6a0' }, h("ir-button", { key: '301dd52f515618304afead461aa2c47a91e67d55', size: "sm", text: t('Lcz_Pay', { fallback: 'Pay' }), onClickHandler: () => {
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
