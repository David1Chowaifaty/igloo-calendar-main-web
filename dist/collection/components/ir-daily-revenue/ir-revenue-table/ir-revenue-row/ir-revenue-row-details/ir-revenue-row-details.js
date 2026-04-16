import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '46c0203575b41d138ce317b5a83159beb78b14df' }, h("div", { key: 'f1f1e400488e63c34dcc6c5430739298adb4ce85', class: "ir-revenue-row-detail" }, h("div", { key: 'd523bb1464388f3cf1466ea18c65f3ab131e0e3c', class: "ir-revenue-row-detail__info" }, h("div", { key: '60e6c77e44785745feb3b46609ec5beff7238c55', class: "ir-revenue-row-detail__time" }, h("span", { key: '45c7c27352d2eace1b72c822877cbfe247605f2c', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '2032c184bf1a023e6ef30c5fd3b307c38a2a73a3', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: 'ba75340118c5716d25e188b4b43f72a8ec02afb1', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '405c1c0384180d7bb6eb5d68a3d5a59cf7c423ed', class: "ir-revenue-row-detail__meta" }, h("div", { key: '4c1210e8ba19a4b63c59c3264f9d32e4d539fe0f', class: "ir-revenue-row-detail__user" }, h("span", { key: '2bf9596e959a9272e4cd0a49aa2c1fe3f7554812', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: 'e66f6fbe7420fc54ab8ec54a26b4786f6d4fef12', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '5a23dd3490fc963490ce284e5ee4966479fe075c', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: 'a1bca0025aac25bcba825304e7459e96eadfb68a', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: '0c611666f1129cbef43b4bf1444ed92b0ee1043c', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
