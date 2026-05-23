import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '2b4acea33becbcdea31aff09d3c0952f97f5f5ce' }, h("div", { key: '9f1c3ebe4725c31df5cc4c800c1f323c098818ef', class: "ir-revenue-row-detail" }, h("div", { key: 'ce5232c5b548100ae4b09433c95c7bbe3df793b4', class: "ir-revenue-row-detail__info" }, h("div", { key: '0d285d897242ed8eb2d1e0e45444db41cc9c29a4', class: "ir-revenue-row-detail__time" }, h("span", { key: 'd11e4da0326c48d6a64ac66b048ac5ad55bf8317', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: 'd20a9687d863ac9cb03c1b3068f9f111c9d07639', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: 'e64a7216f6c9711dbab63832cddfe7dad66a65e0', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: 'b3fdc4ed37003d39318f2d4011606c8eb2307d17', class: "ir-revenue-row-detail__meta" }, h("div", { key: '3282a586002320128874fafbe46e9beecec93245', class: "ir-revenue-row-detail__user" }, h("span", { key: '1768732f137ad1dc1906522106794b6201459760', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '1317e1c2cfa08483dbcdd553e2c1c3efc20d2db2', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: 'e512983e605d5fe4627c608dde4125400a334479', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '9ba7639e2c6026ab00f4f1f05d86d59e90bff359', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: 'af01bfdbf1cf1a208f131c24b0dfdb70b7309146', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
