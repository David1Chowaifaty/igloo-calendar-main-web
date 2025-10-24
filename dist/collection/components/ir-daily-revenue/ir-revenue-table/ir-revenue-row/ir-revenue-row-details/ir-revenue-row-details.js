import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    render() {
        return (h(Host, { key: '6dc6b09971b4fbc131c28ba19600856b0a41a878' }, h("div", { key: '152a762375840443377e040d59b361ede813a082', class: "ir-revenue-row-detail" }, h("div", { key: 'e034e814ad0d174c2025af6cf5135681d05da278', class: "ir-revenue-row-detail__info" }, h("div", { key: 'ea308f73149bfb5bb626ce8f1e32cc0d44991a0a', class: "ir-revenue-row-detail__time" }, h("span", { key: '5e2df8c8ae9e60ee18f4a92aec45ac2791c3bc01', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '8f1f2a726fbc288637c88b476f6acbd7d25f9f39', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '4979548f7670e2593241bfd92927129d5b4e055c', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '6542a2c16711a87d8a9096a6925dc9e5a5cd83a8', class: "ir-revenue-row-detail__meta" }, h("div", { key: 'df788322f3e61377aa0725adae937880109377ce', class: "ir-revenue-row-detail__user" }, h("span", { key: 'dd937a9ed9318537fb50e55755ccc9af08319864', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: 'b1e20f2d36d7449f1220544936e8c70895fb1462', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: 'ab423a3b1876eebbf096285e8f424fd074edb35f', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '4b13896ceefb3cbee7c019ad3cb6f1f9adfcf9eb', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: '6a9ffac1b0e8469afe93b59e45be322eebb4fed6', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
