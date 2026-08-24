import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '95d24206f492f210b058331880c451cd669ea0d6', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '0dd0eaf5397ec692894872be79b11db3bae89e58', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '1bf39e68fffe5f1421c9a68b10597897cfa077e8', class: "table-header" }, h("tr", { key: '1c4f24a21ff59f697d56b4e6f54b26946c4f61f5' }, h("th", { key: 'e4e8d0a5b978225ad9c823dd6ea3e3a88f778e3a', class: "text-center" }, "Date"), h("th", { key: '025d47508529c50a48c52f681516c3f37ab9fe24', class: "text-center" }, "Booking"), h("th", { key: '2d2433af1d9ce41f0cd57f2c7ba217002f755ad6', class: "text-center" }, "By direct"), h("th", { key: '18693c2093aad93563446d101c5091349e24164d', class: "text-right" }, "Amount"), h("th", { key: '31bcd8b6de730fec87662ce0179992380eaefe76', class: "text-center" }))), h("tbody", { key: 'a77a995f076b794b334b2f35fbd88edc1a095c61' }, h("tr", { key: '14e27189c90907ebec40746a1e2f889870df9c4d', class: "ir-table-row" }, h("td", { key: '5cfa06cb59c035ad322eca02d311ebb62c96979a', class: "text-center" }, "1"), h("td", { key: '13a5cdfd4d8038b7cbcde15701f7d4231963fe5c', class: "text-center" }, h("ir-button", { key: '41462b5f690441d68819a335e6961ecbee364e0d', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: 'c06c67cfa6b3dceed30761c64001c76e354befa5', class: "text-center" }, "1"), h("td", { key: '1c4e51bd6b80867a2bf45398586ee00c3cea036b', class: "text-right" }, "1"), h("td", { key: '91b8a6d95813ec970f79d663fd6f88d4194baab6' }, h("ir-button", { key: '1c9848fe7b9d3f0eaa5df543cba300cec5277d5f', size: "sm", text: "Pay", onClickHandler: () => {
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
