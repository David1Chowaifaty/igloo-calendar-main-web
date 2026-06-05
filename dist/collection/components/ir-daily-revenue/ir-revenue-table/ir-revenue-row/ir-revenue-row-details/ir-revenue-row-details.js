import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '72a9b8f3591e40d22771cf083d54b2271ad802e2' }, h("div", { key: '646eb55773da4d3217750de82f52e96b5b943159', class: "ir-revenue-row-detail" }, h("div", { key: '487cd8c204f0941aef1795d32d9769b5a1c7b7c9', class: "ir-revenue-row-detail__info" }, h("div", { key: 'c8a40bc369aa56a4ff614b371c1279669b471552', class: "ir-revenue-row-detail__time" }, h("span", { key: '85eb13cbfa83d430d8f7966d1bb33850dfc68fce', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: 'c564c005dafc57488ab5da0cb80e27aad2787f83', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: 'b609a974034ed597eae6d26d048854bdd31a98c7', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '6ff5d6060e438c2e76411c01ec180b89fdeaa980', class: "ir-revenue-row-detail__meta" }, h("div", { key: '17f75b9da904be99ebd389357b76bc411ff70e74', class: "ir-revenue-row-detail__user" }, h("span", { key: '9c9eefd7d0189784413da586e960ae7edd0ac1df', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '579f53a66b60fb56c8d1a14954dc542532648b8b', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '420cb3775ce3ca6fa5fcaf04b526ebd141495b86', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '82f1a1debe520f9bccbd865b72bbcb2a686c0117', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: '555d4ab731f34e5476580fb21c41882512776764', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
