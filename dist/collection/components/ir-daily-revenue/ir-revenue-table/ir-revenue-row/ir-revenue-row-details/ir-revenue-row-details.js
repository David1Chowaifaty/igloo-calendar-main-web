import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '89b36b42c37ae3979735885be1148c97e85b60de' }, h("div", { key: '82f180354eeaaea401e50e256350e6e43216a72f', class: "ir-revenue-row-detail" }, h("div", { key: '308ab261d2bd7fd06d4daf02e0d9367e0c79831b', class: "ir-revenue-row-detail__info" }, h("div", { key: 'd8e27c4667e839c9026e1e0f0233a9ddb74e110f', class: "ir-revenue-row-detail__time" }, h("span", { key: 'b061e9095553b207300abe074b90f6b42175f35e', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '05e884bcbcf7d67f5f8c232aff595f83f74f7cec', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '173ef5a56feca78cb81a91ec9aaa5f17c25dcfb7', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: 'd6ef1c3f3ffdb1dd62e2f2aec73cbdc4702d7ef6', class: "ir-revenue-row-detail__meta" }, h("div", { key: 'a97b7e6ddfabe393d28309541f954d4119b82bf4', class: "ir-revenue-row-detail__user" }, h("span", { key: 'd17020c4f40e82be78e4458e84685893095565d5', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '7504488a1345ed36ec530a70a820e96b5c3c49d8', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: 'df34816dea13724d4d4a7a580dac959fb2fa0880', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: 'e96435981ea7c94e9b240276fefda5d2566c4a0f', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: '341266154b90d3dc234c9e0e7a4071ad2970e3d8', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
