import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    render() {
        return (h(Host, { key: '9494a5a841d66e71afb8fdf1b6570ad1042ec56b' }, h("div", { key: '7dd3c9859afe5a8b4757a7e6ecbe794b40ae412c', class: "ir-revenue-row-detail" }, h("div", { key: '55e425a3b2ceba131fd8d929b460c69b57aed8b9', class: "ir-revenue-row-detail__info" }, h("div", { key: '889822ca8512ff5867540275a24ed9552a98b24e', class: "ir-revenue-row-detail__time" }, h("span", { key: 'ca4d77244bd1ac9900dceb8e2939bc8bca064248', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '27ae211b361fd92d7cd142f38b4b061734ceac85', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '16a6483bcbc471e8eec51fb5df1a55a38312bd4d', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: 'ee312477a34a14c029eee82afbeb9e91ebe979c4', class: "ir-revenue-row-detail__meta" }, h("div", { key: 'e6eb3e90a6515fc201ac77eb7cfe264085a3f6ba', class: "ir-revenue-row-detail__user" }, h("span", { key: '65b7ec4e95140aa348794ec57a0244dca5d25a21', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '51528e145fdc44f3b9e9c866e07adb6f3643efce', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: 'dab677f23f8bb3724a78cf9c9489652914bb60f2', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: 'b0d4a2e86d3eb8d470230d8f00f8b5a373191d5a', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: '867d05ef9f3502578783baceb0bcca942f69494e', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
