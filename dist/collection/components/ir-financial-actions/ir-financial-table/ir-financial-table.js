import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '52fb5aaeffd5e545b9a6486883777e767d27613f', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '794c0cb40bc3cd9d90c39050603f8aed634afb96', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '26fa6987f05557a0a8a0b95c22784a0732faa9f1', class: "table-header" }, h("tr", { key: '5e01e0f4137177df2f95189bc1a3e76bab939fc2' }, h("th", { key: '403aa4aaeba17840f67e89c61235ffe9d94ad172', class: "text-center" }, "Date"), h("th", { key: 'a44df9fcd7be33131370884253e46e7c392e64a8', class: "text-center" }, "Booking"), h("th", { key: 'd7198dcb6b8a875826d0f853797e14a5b862db4e', class: "text-center" }, "By direct"), h("th", { key: '984a284050bbf9c2a695af535db39989424ab1db', class: "text-right" }, "Amount"), h("th", { key: '74063e8fd4b46ad703abfb18580fd78922a3aab8', class: "text-center" }))), h("tbody", { key: '457119670ad06c5ec88128bd82afd106f6edeb94' }, h("tr", { key: '1b1e890ca77fb8eebbe9e85d72c4da1e81a2df69', class: "ir-table-row" }, h("td", { key: '129ef9ce6198af5ed36f4e77fe0a661ee3aa47b1', class: "text-center" }, "1"), h("td", { key: '942fa7f2d62d792ec8aa3ecc17ed83dea595ca56', class: "text-center" }, h("ir-button", { key: '49af90015e791b39b2d503c742e02e8e2c6c4f6f', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '35855c33ddcf3dea1ca280e86b4a6f8c66182f36', class: "text-center" }, "1"), h("td", { key: 'f7181d387c7c62f5036b5df433387834ff2b3a81', class: "text-right" }, "1"), h("td", { key: '5b7c0d2fdf7762236fefe61cdc4a802552b89985' }, h("ir-button", { key: '4b3e65f292ba44514100269d4da0405ca5df07f9', size: "sm", text: "Pay", onClickHandler: () => {
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
