import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '835c819cc41f4e2ea4a8c31157c86332bb74baea' }, h("div", { key: '0d57fa6d9b59af92506100b70537cf4cc07eeaa1', class: "ir-revenue-row-detail" }, h("div", { key: 'e85855a78dcbff4873b2a288221ab793ea789128', class: "ir-revenue-row-detail__info" }, h("div", { key: '3b6526449f4451f3bb0a21491bfa931c4ca11413', class: "ir-revenue-row-detail__time" }, h("span", { key: '874d6e14c8732d6d7a5039441385dd641032547f', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '8f34dc6f74912d2370b29f184e0188750e385006', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '514b83432d24dffdfc63215655917efe7a47f97b', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: 'e914f27bab9e5f07ff5a8b0289fa46fd5bc3c2fb', class: "ir-revenue-row-detail__meta" }, h("div", { key: 'ec12bdf5dbabe9498f756252f094aa1711e0817a', class: "ir-revenue-row-detail__user" }, h("span", { key: 'c31773e3a85eb601409c47ba83fc044e250e6170', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '37e302b5281e88ade0820cffe1b6c4a933789f83', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '994f592017f2361d52b08b91ef454d41e0f117b2', class: "ir-revenue-row-detail__booking" }, h("ir-custom-button", { key: '1e2586feb0f59ac7e637e0d65d59f42827aa1609', link: true, style: { marginInlineStart: '1rem' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            } }, this.payment.bookingNbr)))), h("div", { key: 'e992901fa13e709efe5462823aa7e30d4b7063a0', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
                            "id": "src/components.d.ts::FolioPayment",
                            "referenceLocation": "FolioPayment"
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
                            "id": "src/components/ir-daily-revenue/types.ts::SidebarOpenEvent",
                            "referenceLocation": "SidebarOpenEvent"
                        }
                    }
                }
            }];
    }
}
