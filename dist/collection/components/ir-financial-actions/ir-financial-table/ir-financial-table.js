import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: 'd029ddf092de84973dda7be1b0ef1558cb2d2fe2', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'ee8020cb7597516fbdfe4abd5a6124e9c623524c', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '37cf2d7cd30bc02b55ec0d071cf41babf1899710', class: "table-header" }, h("tr", { key: '0f0ffa3d38160dc4ad595e241997e80a9fceca41' }, h("th", { key: '3b3b9eed9f2ac5646b46de5fb6c96c05f00c925f', class: "text-center" }, "Date"), h("th", { key: '3db95b6873ddfdca136ed95be7f04c67d2ce4369', class: "text-center" }, "Booking"), h("th", { key: 'ba1c87aaccc26ee17077c37341f05ec745f6737f', class: "text-center" }, "By direct"), h("th", { key: '103867aff7a4f9551d1771d8416dd1af865dda25', class: "text-right" }, "Amount"), h("th", { key: '1beb038ac1218942c427c72660a565456a788a38', class: "text-center" }))), h("tbody", { key: '2c557e45a9601d0bdd46fbed667e72928c66b88e' }, h("tr", { key: '70d6f58070a5da9c624697201b87ba55244d1a30', class: "ir-table-row" }, h("td", { key: 'bf47d5f93d95d1edf704d082b326c75b15dd099e', class: "text-center" }, "1"), h("td", { key: '2f28be491cb9e4820b8812260bf7eb48944a8daf', class: "text-center" }, h("ir-button", { key: '4f35c1c4ef26e2f8a2f12885b047b58efc12113d', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '1f9c187a0c7e2468d59fb353ce552a60cc92ea26', class: "text-center" }, "1"), h("td", { key: '3d226cb6d5650f62968699558fece56b5decc23c', class: "text-right" }, "1"), h("td", { key: '1553fc3a63e3bf88670b2311cf3d67101ffee634' }, h("ir-button", { key: 'c084172464367258ee9e042e344b9086f2217e76', size: "sm", text: "Pay", onClickHandler: () => {
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
