import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '5b121bec60f09d9de25369550d47d1e2d8ae082c' }, h("div", { key: '9186cd89290c9ad5f600a289f230653d86b310be', class: "ir-revenue-row-detail" }, h("div", { key: '207d18c68266c8e28678282890a6bf80fa59cf6d', class: "ir-revenue-row-detail__info" }, h("div", { key: '394303b280cb4e8bf3ea37c9b245ea9b949eb249', class: "ir-revenue-row-detail__time" }, h("span", { key: '931e0b4fc02debad242ce6db452f622a9a47dc07', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '7bee9909ac5faea24520090117ea5ff116c1ff52', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: 'a55b2fa8097b7fb7c23baa34b8e4c60bdd79f428', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '2eb5c611518c8d98a1e89e8b8655a22a8c1f534b', class: "ir-revenue-row-detail__meta" }, h("div", { key: 'a7c40bbc8e890e2ecac20483a4c730f7db40cec0', class: "ir-revenue-row-detail__user" }, h("span", { key: '0f109805331694a5aa9482411169202bb9c3497e', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '92c60b6c0ce3d52f57b0e326937c8fba826b09c7', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: 'ddbb1debc9cbdfea4d97aa19dc692d03ff8eb3e0', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '69d14842cf9c6a4aea32646086799e83da7abe0f', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: '4ebefb12dcfa5ee27b3d9683bdf4061ceb040c92', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
