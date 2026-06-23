import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '9586e13ba8613dbc885eca622b1edc41ed013b3d', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '34bd1778515630238ff3bab10620862f7c7ac754', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'e5d39abb2694c4955b071662be55470d5c195003', class: "table-header" }, h("tr", { key: 'f4fbd5549ecc86a58e5996254c5efc6532056dde' }, h("th", { key: 'e98a06446363c71fac7886f73f40dc0b82798816', class: "text-center" }, "Date"), h("th", { key: 'ca2122fd99326fd334e4828b5bac4abbde112486', class: "text-center" }, "Booking"), h("th", { key: 'a2db654a05eeaf1156fc4528366e9a3e4bf3443a', class: "text-center" }, "By direct"), h("th", { key: '6dd7b933d8c02e600a39b12c57a7b61b4a087f8f', class: "text-right" }, "Amount"), h("th", { key: '62033f3ca3c899566f90e07f8dbeff72e20d0534', class: "text-center" }))), h("tbody", { key: '0667ad47fb194aaff12f81f404902cdbd51781db' }, h("tr", { key: '1bd9cda0f789fa9822e32478fd38df47a236240b', class: "ir-table-row" }, h("td", { key: 'f13e5ffd3c142850895a4d835c5203cc7430d19e', class: "text-center" }, "1"), h("td", { key: 'e33764409a5ecdbd9bf24927e60ef3d8ca8df376', class: "text-center" }, h("ir-button", { key: '1d665e532001f59899ece896d0087f1ba08f9583', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '97e117415b4d023d618d1ad8ceef67b260b16fed', class: "text-center" }, "1"), h("td", { key: '0d0fb099f1780cb7cb35796d5f4cf842c50f45e0', class: "text-right" }, "1"), h("td", { key: '223294774594d0b55d10d652feef186cf874ccff' }, h("ir-button", { key: '1430c73f3371c8d558fe41a7d63341beaaf0823a', size: "sm", text: "Pay", onClickHandler: () => {
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
