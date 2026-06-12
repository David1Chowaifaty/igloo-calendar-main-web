import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '7a296dfb744d7def5260a60133ffafa6929e2ca9' }, h("div", { key: '910d93ae69f8d2134b9f5f169e53286e7b2d490c', class: "ir-revenue-row-detail" }, h("div", { key: 'bae527d9e6255357ece96b221caf76138ad23ce8', class: "ir-revenue-row-detail__info" }, h("div", { key: '28cf3f99b6bbb09a2a9df28189eadd4477443e0f', class: "ir-revenue-row-detail__time" }, h("span", { key: '6ab85989153805e6e96ce5a826066e0cfe3d5607', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '63f94e3ee790b740ca531f3766d8a40338012b3b', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '27a886bd26530ee35c21c32cd4474d86d1f9d576', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '5fcf6304d9d460bc0f798cd97d96cc62e226df4e', class: "ir-revenue-row-detail__meta" }, h("div", { key: '37811c8ca6afc9c2d41d53dba0f2a2460ddaa6bd', class: "ir-revenue-row-detail__user" }, h("span", { key: '571c0ac6a2aa02f23a206fb7384e667f83453af4', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '615c2b27efa7302c3ecb58e8903e2cf19439b3cf', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: 'f23fc768dd4847f6adde94be028fe668742c049a', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '5f8b1f4e619e4042916df545f69f8679c9d61c0c', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: 'effd07a8d002155fe3f092bdd64a4436c9a7d549', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
