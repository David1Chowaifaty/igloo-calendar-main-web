import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: 'c3510cbbe5212db3d4edfa6fc96cfa5d4a07eafe', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '0a538c0737a4218fcd27825772903557ee15dd24', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '50eb8fad1d9310123885a5f4f29baa1dd6c7a7c5', class: "table-header" }, h("tr", { key: '2a043e8b4ce8f93faa47ccdb8c559e9c2e57477c' }, h("th", { key: '2f174450ad2fcc880035bf459fa6e8d7b7aaf859', class: "text-center" }, "Date"), h("th", { key: '5ac1296a52e30e924d4de1a8968c1d670695c8a6', class: "text-center" }, "Booking"), h("th", { key: '32d3de804b088f5b468e848449138331f60e0f9d', class: "text-center" }, "By direct"), h("th", { key: '5f213ed08c57ddb5955dfea0473868c041d712cc', class: "text-right" }, "Amount"), h("th", { key: '7f624f110b315373cfdbd54317ea9e17bf7a5854', class: "text-center" }))), h("tbody", { key: 'ee677ed85b383a20d8ab4e5a66f20fc64201817d' }, h("tr", { key: '75f7ac8c481b99d18b63680a4158bf104427344f', class: "ir-table-row" }, h("td", { key: '122941b9df571c6b09b0c8ec70a327d4ef3e435f', class: "text-center" }, "1"), h("td", { key: '5dada7b8d4091d2ec5336914901848eec1b15834', class: "text-center" }, h("ir-button", { key: '3a6786b3f90aa07eb6464c5fb9c646a5d6e1fe3b', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '4bb168d71ce573ed929dc540356ff48eb9c8ac19', class: "text-center" }, "1"), h("td", { key: '991fad1f04b48651881b398ee9234aab7fc83f5b', class: "text-right" }, "1"), h("td", { key: '44e9eba4c3ea8c7ac07259609b1b0f83ba9ff93c' }, h("ir-button", { key: '44d12011623b17343fa3cee24a4e449b6b3a0766', size: "sm", text: "Pay", onClickHandler: () => {
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
