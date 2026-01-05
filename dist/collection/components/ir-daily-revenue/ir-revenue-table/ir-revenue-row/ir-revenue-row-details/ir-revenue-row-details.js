import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: 'ab573c773597e42d16479650002f21aa98c90574' }, h("div", { key: '8723e534ac57c99a5a618f8501364f7e4e783de6', class: "ir-revenue-row-detail" }, h("div", { key: '0957a07e0466dcc6c04804b25e30d7de3df52eb5', class: "ir-revenue-row-detail__info" }, h("div", { key: '6c1716ae984e6e256ea0278d7791c263573b19cb', class: "ir-revenue-row-detail__time" }, h("span", { key: '0a471b8966bd8d54ac6e3ab649a102f18c54a746', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: 'd99329b9aad9033cac205afdc71e7470dcde48fb', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '4d0e29708c7219e1508a2dc42197ca6d44658300', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '2b26a3ca2752f9134d9957f92751d1c9a3c4c54d', class: "ir-revenue-row-detail__meta" }, h("div", { key: '88b7cdfd84e5cf9e29d1bfe21daa0f922aab384c', class: "ir-revenue-row-detail__user" }, h("span", { key: '9b132e36b128a4fb84b4f81f6a197f75959c740e', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: 'cf4fff829e30f0196398f1b0c4450d8b6289dca1', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '09115082497a7f4c98785cff0775009c2fb684f2', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: 'a448ff8f1666d90d0d85495bb8d669b0bd5c4b30', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: '05fbec2c43723a95a9fa1551d4ad875b81bbab6f', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
