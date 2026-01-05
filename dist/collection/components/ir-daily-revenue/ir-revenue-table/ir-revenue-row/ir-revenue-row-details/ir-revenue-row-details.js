import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: 'ae8acc6d897d927dd42847595fda1b9486bf218f' }, h("div", { key: 'f70c23494a3e2c512c8d237616fb359f667ba601', class: "ir-revenue-row-detail" }, h("div", { key: 'e2171f244203a0bbb696a473f50bbd12f5cc3f47', class: "ir-revenue-row-detail__info" }, h("div", { key: '56100b3c0a390c45f70e28e45cab1b59fab73128', class: "ir-revenue-row-detail__time" }, h("span", { key: 'c9f441275c76d74cb436d0cbb9d94a1daeb24a8a', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: 'c109779726922f5a402d447df9182e301bcaca03', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: 'f06265a1e38d2eb261f8165b0caa81c247231aa9', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '445162c12d7398857c77c27ba327b5a47add607b', class: "ir-revenue-row-detail__meta" }, h("div", { key: '28ebf23fcf81c71510cc390483e1a5d27a36bfdc', class: "ir-revenue-row-detail__user" }, h("span", { key: '028c27c30e48ea8319b2b4cab3c70da8869e2007', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: 'a43d89fca068082de576b7162ecd5f1248dbc8a1', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: 'cc78a87a753a216e1ee5ebbb0636c12e5a205ffc', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: 'aaae1d28df3e859e24da4f4a52110603fc269d16', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: '059611a5df7775b1964e87b099e1054c84e8b42f', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
    }
    static get is() { return "ir-revenue-row-details"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-revenue-row-details.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-revenue-row-details.css"]
        };
    }
    static get properties() {
        return {
            "payment": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "FolioPayment",
                    "resolved": "FolioPayment",
                    "references": {
                        "FolioPayment": {
                            "location": "import",
                            "path": "@/components",
                            "id": "src/components.d.ts::FolioPayment"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            }
        };
    }
    static get events() {
        return [{
                "method": "revenueOpenSidebar",
                "name": "revenueOpenSidebar",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "SidebarOpenEvent",
                    "resolved": "{ type: \"booking\"; payload: { bookingNumber: number; }; }",
                    "references": {
                        "SidebarOpenEvent": {
                            "location": "import",
                            "path": "@/components/ir-daily-revenue/types",
                            "id": "src/components/ir-daily-revenue/types.ts::SidebarOpenEvent"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=ir-revenue-row-details.js.map
