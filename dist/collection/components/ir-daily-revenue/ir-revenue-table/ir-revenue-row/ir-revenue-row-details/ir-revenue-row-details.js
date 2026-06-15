import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: 'da950e8505ae0f83b18a94d319a6542ef369aebd' }, h("div", { key: 'acfd1b0f15c1f4442045c1228ee9338c20bfb693', class: "ir-revenue-row-detail" }, h("div", { key: '1e72e8d93f2d4af7fbe6f578656297bfa89771da', class: "ir-revenue-row-detail__info" }, h("div", { key: '2102f9435e0066e0923f8f8efcab229b4b9a2f3d', class: "ir-revenue-row-detail__time" }, h("span", { key: '4eccaba6d52b096048addfacb1fc405b456d03e6', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: 'bfd77df0e7103e0ab823249c67a2ef7d60a2037e', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '3ba0f1c85be181a1b261e4592af8732fd5099ee5', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '94d646ecdcbbec4cce70f6c9cdc31a599193f6ba', class: "ir-revenue-row-detail__meta" }, h("div", { key: '63c85f1470236bc6d1b9c7c7fcd13727b66f08ed', class: "ir-revenue-row-detail__user" }, h("span", { key: 'e2b9b86167cf439a1efaa093769993491229e429', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '8c7c58fc87a89c2d66bcd1473df7f2b2eaeb9515', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '36bbd2074d18d19729f793bb93f5f87d6e3c75cb', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '72bcdaf837bbf8739b4f8e80f7b07e90a9d64443', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: '6ed2940ac44e7f34d14dc47bcb54a3471a68651c', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
