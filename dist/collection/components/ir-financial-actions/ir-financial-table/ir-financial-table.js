import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
import { t } from "../../../services/locale/t";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '967487cac79dd0525fbae3ca34ac1e3f78a75cdd', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '1c4bf36f9a077b515fef8e514fe1808f811429b4', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '16d534541ebffa27e7a2f821679c730e591baaff', class: "table-header" }, h("tr", { key: '373f385e7da6a9090b538c8283d2797530979dfe' }, h("th", { key: 'b6a8df3926a3fb5347d616df7a7d23f171a628b6', class: "text-center" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("th", { key: '77060269c563ca21d0410ca0ff8ff3e8712f33aa', class: "text-center" }, t('Lcz_Booking', { fallback: 'Booking' })), h("th", { key: '5653c6611297f4fce2e20b4df94fd138f0a53f4d', class: "text-center" }, t('Lcz_ByDirect', { fallback: 'By direct' })), h("th", { key: '22c71d735c619a90763706f4ceabb952f209907c', class: "ir-text-end" }, t('Lcz_Amount', { fallback: 'Amount' })), h("th", { key: '46681cd72e5e62e88215a5f115bf1d8664fca98c', class: "text-center" }))), h("tbody", { key: '96d16dac08cac3c5640e4b56e3cb813a79214234' }, h("tr", { key: '874be703d195c4f50f6176bfd1e3d07c218e95f3', class: "ir-table-row" }, h("td", { key: '1ca46b9fdba509ffb633248272f3ee7c356dc2df', class: "text-center" }, "1"), h("td", { key: 'cdf0ad97ed9ce8e794c2982bb3904ca1eb194d11', class: "text-center" }, h("ir-button", { key: '9725594dc60c69b9ec80d48b93da0e67d9a18a08', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '80fc8947e0acc87fe8aff76ab9816c5851f8a43e', class: "text-center" }, "1"), h("td", { key: 'a7cb86edfda200f573e83c342b552faac06cb5f9', class: "ir-text-end" }, "1"), h("td", { key: '5d03f8330233930f72a32313c7f2ba10306344ae' }, h("ir-button", { key: '3c2a85267f5d1ddc7db57c3b5250469f6788ab87', size: "sm", text: t('Lcz_Pay', { fallback: 'Pay' }), onClickHandler: () => {
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
