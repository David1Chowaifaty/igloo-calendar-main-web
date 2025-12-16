import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '0e3f9626dd218bcaeee7f2d8f9febef2a341d9a5' }, h("div", { key: 'b1a9c8df14c272da4fe6bcd147a2cd7aa7793599', class: "ir-revenue-row-detail" }, h("div", { key: '97d318a6c4a879652b36268afe255a72cf1252b6', class: "ir-revenue-row-detail__info" }, h("div", { key: 'f272f24309351a7fd7403fc3512518e1dc82ded4', class: "ir-revenue-row-detail__time" }, h("span", { key: '3d48be271ad15235fd9720fbca61190fd89c30af', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '21678ef2c567acfa1367d5e8ed99b3a2da1f4636', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '89c8cd53b187b77bcf3cfb32eca06322ad7beb86', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '2f11c083b5594301897343b7330d0e289f6e370c', class: "ir-revenue-row-detail__meta" }, h("div", { key: 'c7fb36f783dfa468adefe07f5df8221f941e151a', class: "ir-revenue-row-detail__user" }, h("span", { key: '7cca14fc4f6ba7bf736ac20c422b6b0aa19a3b59', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: 'f94f0c2ed6a1f048e0a8908630f0e115e81a7a8e', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '867bb9bafddcd76ca91bfecf8ca95b2afc61ea83', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: 'a704309b3d46a2fbd95654f0f8f8ccdb933b3735', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: '654ab82a88de6fba254a27be660c7c05af18d565', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
