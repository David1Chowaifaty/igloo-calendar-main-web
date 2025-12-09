import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '1be891e8c65a888017c3be120a34ef9415ae8de6', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '21a8a2c494151bbe2fb3847cbef34e00bffbfac4', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '8f186a1e46f3ac28ebe031b240740bb92d95a974', class: "table-header" }, h("tr", { key: '834f698d9625d53c5592795d7ac77ea270332f88' }, h("th", { key: '98567bd694642459f803306671e94f141dab42c4', class: "text-center" }, "Date"), h("th", { key: '636f5c95f2f544db2806665298a19915962b3043', class: "text-center" }, "Booking"), h("th", { key: '7ab8eed37e09a6b481e24e6c7f4cf472c34420ed', class: "text-center" }, "By direct"), h("th", { key: '4b62d72d41782b6c679b39a7f7e09384e97e4ed2', class: "text-right" }, "Amount"), h("th", { key: 'b50d3c64bfb7a659a8cf45301598830b76b468a1', class: "text-center" }))), h("tbody", { key: '2885c20e1c2beeb2e932a34532d6cec66f8bff18' }, h("tr", { key: '93ec67f343fa940b65f3953a281379c7d1f680d0', class: "ir-table-row" }, h("td", { key: 'b5b45af8a249617fe1a887b53f80c28be9cef10d', class: "text-center" }, "1"), h("td", { key: 'd5cb48120169180e877df9f44920d21377fe6249', class: "text-center" }, h("ir-button", { key: '0680f79af5d85dc49639c8add5c022b1ec2e2e0b', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: 'd947358d36ad240082811151b11300fcf446aac9', class: "text-center" }, "1"), h("td", { key: 'aa84067a22b15532768445315984187f653c631b', class: "text-right" }, "1"), h("td", { key: '089de0e3484a95642cb0cd85537b9ae18352c529' }, h("ir-button", { key: '9e9c59fc230e97a9da2af9f52f02421179e6b7b8', size: "sm", text: "Pay", onClickHandler: () => {
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
                    "resolved": "{ type: \"booking\"; payload: { bookingNumber: number; }; } | { type: \"payment\"; payload: { payment: Payment; bookingNumber: number; }; }",
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
