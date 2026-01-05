import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '36c8a6c3e71379cd454e6d2bcfe6cddeac5d82c9' }, h("div", { key: '13aea892c7d1cf953c20e716d3b0dcebdd8dd614', class: "ir-revenue-row-detail" }, h("div", { key: '055707e3e8baca342e0df6565ad1fc7512e105d8', class: "ir-revenue-row-detail__info" }, h("div", { key: 'b736af8eb44a029848cbd6d417ee9c16a7397a5c', class: "ir-revenue-row-detail__time" }, h("span", { key: '512057d4b59b746141734edb76675331d9e07495', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: 'e1c75baa30afb851e4b272000d96a191492914a4', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '2f20b3a05883974c5ade3edd1588c001582ea39c', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: 'af321444eb76b6770bb8953632447e3926984fba', class: "ir-revenue-row-detail__meta" }, h("div", { key: 'a43d2b31440bdb7f756c69cbc0d64ee253998999', class: "ir-revenue-row-detail__user" }, h("span", { key: '40adc069594c9a2dc9744d526ea0ad1fe0340bc2', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: 'bfb7cc7c7707fd26f6609be231886810544facee', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: 'c22ef8f04593f85407d5294f5a10f258942ddb31', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '500d5c0d35f7e88e411b5fa12ed1260e349b8108', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: '18107e267ab3993cd025da09099c2ca9651faf41', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
