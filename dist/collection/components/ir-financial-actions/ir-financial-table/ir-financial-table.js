import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '829941cbd4fc4798d2129483ce05b268d26d3c3b', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '688b82216309db432bbf967873c940998064c38c', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'b1f0719db6647bca314db6e72778ae5e969b8988', class: "table-header" }, h("tr", { key: 'a0ce7d6ad7b98aa330611ad7c3e59ea981f3b87c' }, h("th", { key: '421d9e57670e4270d2f9f4e442c07c148f164150', class: "text-center" }, "Date"), h("th", { key: '4325795af029ac2ad50d79a124d5fa7b89d401dd', class: "text-center" }, "Booking"), h("th", { key: 'b2af2189572197c8e07240fa50b07bf3aff73eca', class: "text-center" }, "By direct"), h("th", { key: 'e378e6ecfa8069dddd00bda1a71f2dc605fa5b2f', class: "text-right" }, "Amount"), h("th", { key: 'b0186cf3e89c06ff08163810df25c3ab896abaea', class: "text-center" }))), h("tbody", { key: '82e70a5f90e25e69d5faac348d39c8131847dc82' }, h("tr", { key: 'a5b69f2dbf361b8bf000f3b3f2e808e3df44836d', class: "ir-table-row" }, h("td", { key: '1807923f58e425c8f30658dcb1c159b4ad37f209', class: "text-center" }, "1"), h("td", { key: 'f03f16a63eb92b44b41b6c5fd6dd1f66e873fb78', class: "text-center" }, h("ir-button", { key: '72d38373e2958aa5281b95319c9bef9934cc4cfd', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '3dd9d85b0f759c9819dc24bbae867d472159bd02', class: "text-center" }, "1"), h("td", { key: '29e9881d73fbfdc7570a9682abc98a5d48672ad2', class: "text-right" }, "1"), h("td", { key: '95788190386ff70e6429020cd95caee56125a1c9' }, h("ir-button", { key: '25cd055ab21dc190211fae2b47d73182a2d0256b', size: "sm", text: "Pay", onClickHandler: () => {
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
