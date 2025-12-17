import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: 'ec7f09e872c788d457cc6414ea3f5f71f4a52759' }, h("div", { key: '535c01f4df28d93eb645109244d3ae8797169e6b', class: "ir-revenue-row-detail" }, h("div", { key: '7d508989e288ee5b75bad3336c2324e440a0bf63', class: "ir-revenue-row-detail__info" }, h("div", { key: '8a672252fdd9bb57d157e307701ad9225202075e', class: "ir-revenue-row-detail__time" }, h("span", { key: '30eeb55a5b67c0d35509bd825d3a16d28ea8b383', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '49a2e6b1071a5f50b0105a6395a6f851102ba1a6', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: 'a989e1577c9dc1973ec8189994f4abdad74d5ec0', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '13d50f3fa9e6fb7b0aebac56cc27613cab023887', class: "ir-revenue-row-detail__meta" }, h("div", { key: 'b08151603e1e8ef2d97808b0fd8ab0f61c09bbd2', class: "ir-revenue-row-detail__user" }, h("span", { key: '7cf35a51f7b5e01fa9fc1151b512e21c02b22d77', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '68b3c125575ad043677c3b7d587676ac635cde64', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: 'db9093e014ad436ed226f12edf0b146740f683a0', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '36f8c63ed3363151a871fce5495fd079a36521e9', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: 'b0097f20fe7563f0fe23d59685fab3f33d09301c', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
