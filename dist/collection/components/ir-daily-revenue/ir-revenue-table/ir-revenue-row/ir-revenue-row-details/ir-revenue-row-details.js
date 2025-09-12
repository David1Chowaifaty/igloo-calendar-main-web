import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    render() {
        return (h(Host, { key: '1b6b88246c1b2b35d82647c7139dc91ec1e15dd4' }, h("div", { key: '29c3043765824b8123654bd0fb3d51fd8094d365', class: "ir-revenue-row-detail" }, h("div", { key: '3aeeb4bcc77485ed48fe0b0caeb318fca3400932', class: "ir-revenue-row-detail__time" }, h("span", { key: '69e598ec3f8f8c324c1b8c4ab881a98d14f10057', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '7b1fb2b2cd64646b244f829a8c971226d6a7d197', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '3a580c0cfb6256db01a8aeb2536f87ed28f5c522', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '054e64327400fd03c52f1511f27a8135e5180a8e', class: "ir-revenue-row-detail__meta" }, h("div", { key: 'e64b8a09698022cc6728c739b880289c09500bda', class: "ir-revenue-row-detail__user" }, h("span", { key: '53bebb0b8edc2640e6f81e7db334eee4c9ae41f2', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '5d75184a4bb14f5fa6099a574f89754d909740aa', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '9aa35e829b36afe41378e0158eb7d959a3abd412', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '1d31861ae72f3148f7293ef38ec6abc6d24fc676', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } }))), h("div", { key: '5df78183172e75d48f1499f76a2f440b6150f4e6', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
