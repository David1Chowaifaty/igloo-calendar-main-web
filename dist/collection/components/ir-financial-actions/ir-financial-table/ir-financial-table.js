import { h } from "@stencil/core";
import moment from "moment";
import calendar_data from "../../../stores/calendar-data";
export class IrFinancialTable {
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: 'b18ded20da72087f7c9e43674895daac9b920330', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'f32685acb4eadbdb940cde3a523203be365c6b48', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '37942f295c3a3a5080b6ce1c8750073636712e44', class: "table-header" }, h("tr", { key: 'bd55fc55213b57136f942cf93818967d18ef45fb' }, h("th", { key: 'e883ebdccd8b4269c5467488948c1d8237d5ec5a', class: "text-center" }, "Date"), h("th", { key: '646a4549a249c1d803ca1694268f568f560b44e0', class: "text-center" }, "Booking"), h("th", { key: 'edffc134e98da3f827b8d71c49b544a7bb09f221', class: "text-center" }, "By direct"), h("th", { key: 'ee489c4306418cb64854343f5c1156127324ef04', class: "text-right" }, "Amount"), h("th", { key: '530911b0aefe0138bd7751c4f335c6743f15f045', class: "text-center" }))), h("tbody", { key: '77a92c7899f0df8d111659fbce8dd606011c79d8' }, h("tr", { key: '9a056ccc47f9faa25b2b1a7df90d4cc005f5d512', class: "ir-table-row" }, h("td", { key: '9437e3837eaf9c1e10675a17b9e2b704d1872a05', class: "text-center" }, "1"), h("td", { key: '190c3e66424d4f95c9ac5dff17a33baae4fb6ccf', class: "text-center" }, h("ir-button", { key: '8b8a539a92e2f9bccac472a8197dc215f146da67', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '4d1f157bec54b13cf5c646e6f8a74bdb0cc9a26b', class: "text-center" }, "1"), h("td", { key: 'f45eece6ef10c7ca9d9214fb899e597eb1facbb7', class: "text-right" }, "1"), h("td", { key: 'ba83648248c846cb1bf491857de6044f932fb3d1' }, h("ir-button", { key: '37e29f9a09d6742276e7ede7bd0449d2b8df643f', size: "sm", text: "Pay", onClickHandler: () => {
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
