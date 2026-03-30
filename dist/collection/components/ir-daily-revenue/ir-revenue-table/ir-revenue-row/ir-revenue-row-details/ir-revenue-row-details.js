import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '6fa98f75d5e3cad67e7a54df5198b29e841dcfde' }, h("div", { key: '33a3d16ee12947e15a29a6eec615c8eaf9793cd8', class: "ir-revenue-row-detail" }, h("div", { key: 'b319d8f5c7d888e723f7f225b2aa96827db66dfa', class: "ir-revenue-row-detail__info" }, h("div", { key: 'a59c712b6dabe5782a00fe231076e73eb0f758d8', class: "ir-revenue-row-detail__time" }, h("span", { key: '0b031c29201600376ae23b4b066b8a30384de30c', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '1a5383e25ac3811207e2a6f4e4a9e526eb7740c8', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '104bb7fe0b82d4eb35d8a40c0c8dfa69063d3cd9', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: 'b36c9d77eab3b29ed570fd67d2be96e16dbba0db', class: "ir-revenue-row-detail__meta" }, h("div", { key: '45957e3361e0da3459a3533c325ef6c9186a9f78', class: "ir-revenue-row-detail__user" }, h("span", { key: '53900d6b18874f3a0544c7d5fb7e0b8acfcc5f32', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: 'ea8ce039912da95244526bf730d597e00ead67c4', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '297226a8e50b4a789ee8c775c1e75e3a1ab9c2ac', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: 'd1b95d60356d5304c30b1d2f8be23a48ea0f6354', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: '60f527f637adbefcc2e974bcfba4adbd93c771ec', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
