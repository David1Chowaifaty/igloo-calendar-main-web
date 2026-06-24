import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '69cdd4d956a90661eb5c3976d98f8ee8b2635bd6' }, h("div", { key: '2c48f354c1011512d0ace4130b70609abe9e6cfd', class: "ir-revenue-row-detail" }, h("div", { key: '809108c34fb7dc24c9f6f32b611f8af7dd488171', class: "ir-revenue-row-detail__info" }, h("div", { key: 'a2077d69e15499e552234233e6f48fdcca47c1b3', class: "ir-revenue-row-detail__time" }, h("span", { key: 'c84579a5abcd4d24d7178aac596181c6277102d0', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '7e9f908e068f145617f36707590fa4dbb8acdea6', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '48fd12a58379263ecfd963349b00fe29a4b4c745', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: 'b8f3b73e1650036a6115d56c0994a73268efc408', class: "ir-revenue-row-detail__meta" }, h("div", { key: '2bc2b6ac5bfeec864016d8a010a93b7a3efc6d8a', class: "ir-revenue-row-detail__user" }, h("span", { key: '5e28d549ea9daa34d6278a72e841ad8d4cf39dfc', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: 'a09a57a4220529fcde28ab8e6ba99e257008ada9', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '226fcdf14dd8f9df1e9cb49cdba3156bac714eb2', class: "ir-revenue-row-detail__booking" }, h("ir-custom-button", { key: 'dfb5371b0bf76d3ceec9d1cd69dd8b363133b091', link: true, style: { marginLeft: '1rem' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            } }, this.payment.bookingNbr)))), h("div", { key: '5a90562e525770f674c6f4783d3eab51e68e326b', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
