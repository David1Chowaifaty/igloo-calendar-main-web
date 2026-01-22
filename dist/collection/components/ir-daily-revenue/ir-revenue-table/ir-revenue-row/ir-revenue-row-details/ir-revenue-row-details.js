import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: 'a96031bae1fb2f5b5a87f184903014f6792373fc' }, h("div", { key: 'c163047eba49f72832d51c48364cf8ee85c2e3a7', class: "ir-revenue-row-detail" }, h("div", { key: '173fc2fa3561aa51889911b661424de47eac33e5', class: "ir-revenue-row-detail__info" }, h("div", { key: 'd7dd45f9cc461eb54fcb8dddb9405f7bfe687d1d', class: "ir-revenue-row-detail__time" }, h("span", { key: 'bf16442b53c0dd32b9f7a7b09081e60c7989ae63', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '4f76743d45e0a66af14a40b1a4ba5db33d3536b5', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '744ad05203dad896efa9e330c3bd62f89179c442', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: 'c905e29129b02d2929b980bd39888b4beedfc07c', class: "ir-revenue-row-detail__meta" }, h("div", { key: '063ce0f41e97f9228ca50917462144bb203ab85c', class: "ir-revenue-row-detail__user" }, h("span", { key: '32766c707b09a79d0b8fc642a49b70a853faaddb', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: 'faf67f5167b48a4a82a2fef23bb53e9033a5db8d', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '77362fc9b64df9fd11120eab16b26bdddaf42659', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '90a8c5db06e8c74934a646a243e432b67e0f2253', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: '862e5c7146548a09fc82a4535fe310e471768f17', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
