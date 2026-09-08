import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '461e64a6262ed15573c1c3f69baf63abd0bc7b39', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'bb5c6413d219eaec06cfa1806f08df7468dbc128', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '4eb385fe6fc2b2ae170385c5930de7fe8c632714', class: "table-header" }, h("tr", { key: '394da3b43a6db9dbf839bf86c58686c3474f3acb' }, h("th", { key: 'cc476c1fd290bf536153280ac768b453fffe0bce', class: "text-center" }, "Date"), h("th", { key: 'de228f4b021c5511cd58503f5d82448af130de8a', class: "text-center" }, "Booking"), h("th", { key: 'bc3d4683262b5904264f4373a3d524707ae3d001', class: "text-center" }, "By direct"), h("th", { key: '9a8a84805b7b702cf0dcd7861f66d301775a5d4f', class: "ir-text-end" }, "Amount"), h("th", { key: '22d5eed487f23812c79112255cc6e2c5b244ae2d', class: "text-center" }))), h("tbody", { key: 'af7f2d5bc2d7ca5312a08f4a95fbbbc2352c3f82' }, h("tr", { key: 'e59945d2534bf959f7e855a6540dbe427c565161', class: "ir-table-row" }, h("td", { key: 'b9ca0ebed162446b5116d63d9ebd04a302538a4f', class: "text-center" }, "1"), h("td", { key: 'a2e04f7e6519d46a95d64a9e7f3665f3a1a92bfe', class: "text-center" }, h("ir-button", { key: '56b8a7feb687e4504f45ab4ba943b8e9f1190c2c', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: 'b44e926d1b5540932e556686578bc2e4e126e280', class: "text-center" }, "1"), h("td", { key: '49fd6d88b20aedfc024e18ab273bb8fb499e35bc', class: "ir-text-end" }, "1"), h("td", { key: 'f2bd03549324d5f22796526fd3c48d7682a66325' }, h("ir-button", { key: '47f046f3e4dd8eef1206d074cd57a6080e9f4930', size: "sm", text: "Pay", onClickHandler: () => {
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
