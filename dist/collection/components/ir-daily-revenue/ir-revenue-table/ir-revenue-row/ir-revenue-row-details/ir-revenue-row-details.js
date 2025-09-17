import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    render() {
        return (h(Host, { key: '4f0e71c1f76e9eb546103c9aa681c294927fa5fb' }, h("div", { key: '594d5666910218e3b4b43e3b26ca3346b576c034', class: "ir-revenue-row-detail" }, h("div", { key: '1ee85c37da5a75fc6044d9c7a200da4c6c8cb91a', class: "ir-revenue-row-detail__info" }, h("div", { key: 'b62cdaa40274226c6133d9ab0b09f7c78688730d', class: "ir-revenue-row-detail__time" }, h("span", { key: '33670d966cb709e7447dd6304a55e925ba083da9', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: 'f86d836ba30c2e15d5bbc2393c867904877ecac4', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: 'c95290686e2fc731db197f661b3956cb5bbbc6e6', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '2e8250d67230d3eca41760a1a568d0982e5647b3', class: "ir-revenue-row-detail__meta" }, h("div", { key: 'f2341e53a414cedb310c1f439964e2c8df966dcc', class: "ir-revenue-row-detail__user" }, h("span", { key: '79d271682ff674ab229dc469d6e14e180263726d', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: 'e9f250698f700e95f33c5c2001a5b8cab7734c37', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '61a9d7e140f57456eda0ef34a69d151d1e610710', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '8c56cdae9de8601447f3e1f40edef46850126ae5', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: 'be20587c274f0682ff03a25889e6decd0b959e76', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
