import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '2997b3d10dc8e61fcade9848493a9b0492cf87df' }, h("div", { key: 'af9db3e1481b9d60ed478624e2dcb3dc5dac82a3', class: "ir-revenue-row-detail" }, h("div", { key: '4fe4a60598d4b469a0e5d7a6ce4ab09ad710edc4', class: "ir-revenue-row-detail__info" }, h("div", { key: '2b6db8d9f68a223b58b14d9dffa1d56440434af3', class: "ir-revenue-row-detail__time" }, h("span", { key: '1700ece42fc8f5b6245f2b3489b089dd46931b91', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: 'b0d6335ddbd6833c680dd62d19ef8902b35575f6', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: 'cb395899be327c39e5a61d80a5f49d94d031b9f7', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '5c8a3ecdb6e945c104986f8da5fa773b6f953d04', class: "ir-revenue-row-detail__meta" }, h("div", { key: '5cf01cd7b979b7704d81355c507b1488ebbfe70b', class: "ir-revenue-row-detail__user" }, h("span", { key: 'ae256d434f6ca8f7d7eb1a4f98e044e262e95cd0', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: 'cec96152ae1ef951355df0c23eb5e6a5f5769161', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: 'c24ba6e22a2d15f598631816a7db08c46c460d8e', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '803310bdfb0660a4e2db562414bf537e945ba4a5', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: '45599a7c5847333d810cc2a5a74896078cebba47', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
