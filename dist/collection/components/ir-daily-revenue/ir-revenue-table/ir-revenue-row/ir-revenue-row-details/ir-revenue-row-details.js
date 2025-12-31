import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '9e807a66e94d3e9a17ec0b66d014717e8af2692b' }, h("div", { key: '7c3d866ea725481c3c19c59c8d76e58d2fea0976', class: "ir-revenue-row-detail" }, h("div", { key: '0e5eb233996a3b47b1f288a4386ddb0750555c5e', class: "ir-revenue-row-detail__info" }, h("div", { key: '55a840e11d9675f4802c6a47c890e4a3cf24032e', class: "ir-revenue-row-detail__time" }, h("span", { key: '96946fdbc5dcb139cf612f8a415a36ba236a7cde', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '502c0862d372a85cf5b2c90c991d02fc11f05821', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: 'a99e8179c9bee258ce9fd3b7b7dd7f5463f204f7', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: 'ae36ce5d33d8586ac89e4c60d5a42e50139c134d', class: "ir-revenue-row-detail__meta" }, h("div", { key: 'edf1508a291e46a4957baef8398b552a53a69a3b', class: "ir-revenue-row-detail__user" }, h("span", { key: 'a7aada8ca92f274bfbcabc3d6fc663228396eb1d', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: 'c2f0f66672e1959e66962941074866f4e18e0080', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: 'ecb43563847f05269ca6f08a2e2773ce5cb127b6', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: 'b09e3e868186a4670329b7a5f529e69e0b5c2872', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: '16e8d1c0a32e3e8f8eab04d6c074b7d44e2d09cc', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
