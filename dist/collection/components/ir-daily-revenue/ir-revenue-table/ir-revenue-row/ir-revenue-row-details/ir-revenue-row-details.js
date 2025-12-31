import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: 'd36062362d0111a4aed507edf40306918758a1c5' }, h("div", { key: 'dc5ddff2db08069c65e7da8488e9d48c43d36967', class: "ir-revenue-row-detail" }, h("div", { key: '15f4b7a8c73b0fbae2dfb1b48df58e0a7df4417c', class: "ir-revenue-row-detail__info" }, h("div", { key: 'd5d8812509d69444a41741f2b31b7d6bd8d8b76e', class: "ir-revenue-row-detail__time" }, h("span", { key: 'afde31b1201699c1e6dd2f222d48064e3a46259c', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: 'aa46278b8996301fc9cdc8a86139eb70601e9c32', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: 'ea3aca6d18e39de10011ea3fa8650c09c5bc15b9', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '0f78172d350129bf11b77219529265abf823c856', class: "ir-revenue-row-detail__meta" }, h("div", { key: 'd089a3d25db0fb2632b0c272cd7794c965b2e756', class: "ir-revenue-row-detail__user" }, h("span", { key: '675f22ebd9f7925f3298476befee7402967f51de', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '86f623270e6591cea386db02833fad721c69fe12', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '795e186c86f663a2858bd2425de862af5015a92b', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '66169ce881345692842e8de689048d6ea9125bc2', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: '7fa9ef8a1a03f716c449825683539b38768342cf', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
