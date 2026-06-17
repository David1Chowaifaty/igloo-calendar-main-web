import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '442fd9d6392a723f81d8fdef5140d4bf3cbf8adc', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '244722db720c77e871741082b2647c61e663a3f1', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '3efa2fb0570303c3bd10360d056d3efd3866fafa', class: "table-header" }, h("tr", { key: 'f3a37e3f113e825d2e8724830167125703d91934' }, h("th", { key: 'dfb4dae2fd19aa0b27f6dc7fa939970f7f2ecf1b', class: "text-center" }, "Date"), h("th", { key: 'c962402bcfc89a149c8471a5b7300100a0ea04e3', class: "text-center" }, "Booking"), h("th", { key: 'dd27d86d5452741fa61c598767632d1349a61c3b', class: "text-center" }, "By direct"), h("th", { key: 'ed5733cd2cafd461c64a6119d81c59f8c7cd4422', class: "text-right" }, "Amount"), h("th", { key: '0fb76ce4fc2387447d5a552c149c5d0089960ebd', class: "text-center" }))), h("tbody", { key: '43ee29e79ffbba580ee7f4392056734b9e8024bf' }, h("tr", { key: 'f1580521100af47ffa2a8e3ab6088165c883a58d', class: "ir-table-row" }, h("td", { key: '333081c8dcef6e898e9ad24791bfda082083d7dc', class: "text-center" }, "1"), h("td", { key: '5851553a8108db3c3455667dbd947401ea539702', class: "text-center" }, h("ir-button", { key: '006e9169cb5bd2b7a84245c31181db6393ded33b', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '1d496e826beff01ceb5156ca447832e5d9671f2d', class: "text-center" }, "1"), h("td", { key: '997f7e3000cc669645cea4a4de5f8497cf1e4c85', class: "text-right" }, "1"), h("td", { key: 'c3036190c9304fda6959ec0223490ab00794610f' }, h("ir-button", { key: '07484634cf05a7eca609ace1ff695038fd852f5e', size: "sm", text: "Pay", onClickHandler: () => {
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
