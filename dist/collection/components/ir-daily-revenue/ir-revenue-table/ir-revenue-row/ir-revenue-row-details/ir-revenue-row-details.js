import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '4f12380efaa2318f4b629084c1a0457754c332b1' }, h("div", { key: 'e0659174f0a355bc760fbf8446e7ab49c37e88b1', class: "ir-revenue-row-detail" }, h("div", { key: '766ec130f40b2b08e46add2a8b7b223aab0d885f', class: "ir-revenue-row-detail__info" }, h("div", { key: '7d89eb53292c2ea28b223a0c8cfed10f55cb2778', class: "ir-revenue-row-detail__time" }, h("span", { key: '32cb1f786ecf2fa8f0fb73713c3cc6f4ad7d882c', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '241136e2ac05ff0939b7bea72aedccba67763323', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '1833634317b1a47641da26a08619976d1fd925be', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '5815e52c8f226860a8dea75a44e7573686b87862', class: "ir-revenue-row-detail__meta" }, h("div", { key: 'f56bb604447fcc4247746e4543362806dbee63b9', class: "ir-revenue-row-detail__user" }, h("span", { key: 'd06ee2b6b6133e640130e93fc49f35f6b57af2b8', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '8395fd8b8e4397b65097fd63c0642ece28ba8eec', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '1f57fec88418b4dcee6f8c934e15d7da60d35c6d', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '1434fd0b0e7613f24662214129443b5f3831b727', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: 'c8fd3616045d50cd95c193aac3ea877770c6a5b4', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
