import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '69fe729e2ddf653aac86c8d79df4a8efc1bd9a53', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '56334680fa934c6850d72ef361c260b549d868d8', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'e62645c996e1ac99ca5ab3f07a5b693f31f23bbe', class: "table-header" }, h("tr", { key: '63aae1c19e3bd74949c38f1a6ec93ea0857b3a06' }, h("th", { key: 'e0d43dddc537f391950100809d5ef1f4cddc910e', class: "text-center" }, "Date"), h("th", { key: 'f678870ffef53cc6f9996bb6b05d2b7814e2abee', class: "text-center" }, "Booking"), h("th", { key: '37faaf7dd39ec872608b8bd9d522c116d948d276', class: "text-center" }, "By direct"), h("th", { key: 'c7017eb70325a95f13ffa551c0db9cc9268a91ed', class: "text-right" }, "Amount"), h("th", { key: '93fce867d2121d788fce77b47f68db9f9f7fd816', class: "text-center" }))), h("tbody", { key: 'a79fa1852f390ee22bb5812f34130971a1de6359' }, h("tr", { key: 'a888518c2c6992015078815be012530aac62d5c5', class: "ir-table-row" }, h("td", { key: 'dc669a92e70715edc0585205e2939dbf470f6282', class: "text-center" }, "1"), h("td", { key: '12d65b7a06ac51a3195e0e94870acb8251c5c81a', class: "text-center" }, h("ir-button", { key: 'f2db167ce28fd2a9e771237c625bfe41f462cd86', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: 'eb127a5aacddbc57785c8ab32163adb3ae1861a1', class: "text-center" }, "1"), h("td", { key: '7507b55aea081c8c3506bcec8146641e62c0118f', class: "text-right" }, "1"), h("td", { key: '6201995e404cf195557d82ba26e7af78309c7571' }, h("ir-button", { key: '7ab293dbf2bd39cbb522d043ad8172c67fb56d46', size: "sm", text: "Pay", onClickHandler: () => {
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
                            "id": "src/components/ir-financial-actions/types.ts::SidebarOpenEvent"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=ir-financial-table.js.map
