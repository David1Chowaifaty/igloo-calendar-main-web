import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '68ca9eec8a3fa16d2689d51e4d385eb9cc1c5f4d' }, h("div", { key: '378cdb4e9e2525139c9cf33e8f1b742127ad73c4', class: "ir-revenue-row-detail" }, h("div", { key: '81121f2ff78d2970dd1a24a902f370c386a7975d', class: "ir-revenue-row-detail__info" }, h("div", { key: '7f41a94cb2290d557df2d396c498f5e0836ab5b0', class: "ir-revenue-row-detail__time" }, h("span", { key: '9646fb3174fec2cc0f647c78d9aa132a57421391', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '7dd22db9f731888c0d86e7edf41d87ba05c6fac0', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '8d46c585e83a694f9b89e6f49751d4639626ab5c', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: 'f11b853793d210a8f9ae235abd28b358fc9b12f0', class: "ir-revenue-row-detail__meta" }, h("div", { key: 'fbe7925642321ec59a267bda34d9112d0d858a82', class: "ir-revenue-row-detail__user" }, h("span", { key: 'bcbce4f08945437d5661fbb7afe033e154b6bead', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '5c25a181406a08ed4f8a7faa1fdbac74a65f6114', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '3daded40f7dfd6dd5ca4fada1999e59dcc56e418', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '0b6cbd70cf8a935497f1c82886094b03d4a4c905', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: 'dd56e4f6839ddc05825f6e71f17e01b1e96f87d4', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
