import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '262c69c09072c0aa222679256c95f94b1a367b04' }, h("div", { key: '453d365d746372bf8b50500df793782101d4cf5f', class: "ir-revenue-row-detail" }, h("div", { key: '0940deb7370e6245985c8c1937ecd1aec5615566', class: "ir-revenue-row-detail__info" }, h("div", { key: 'f4bc3b78f8b0cf7c7da298d86b0a5881a903ac31', class: "ir-revenue-row-detail__time" }, h("span", { key: '55b5b4d1ab0d91d6132ea0ccb9f9526d939472d3', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '84b678606747927a49e845ee016815df9fb912ef', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: 'd32a8d3f84ea8a4726088d191f50b9bb4523a0d3', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '2e75053aab8e99ae1637fd54b2e3235cc87a8000', class: "ir-revenue-row-detail__meta" }, h("div", { key: 'fbd03b73f7a8891999788090f12a812378635e6d', class: "ir-revenue-row-detail__user" }, h("span", { key: '6bbc63e2b73c239970785ca04e8363e77fb3bc54', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '00a06b0d66bd42c06fe75fbf41abb899c66b32d9', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: 'a0301df68d2be26a7086297ad03937c803947eb4', class: "ir-revenue-row-detail__booking" }, h("ir-custom-button", { key: '3821c57a7cf4286cb6d57dc83f1b64829b089a89', link: true, style: { marginLeft: '1rem' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            } }, this.payment.bookingNbr)))), h("div", { key: 'f4488443acb44631c6f9a1f78992ae41989abfd6', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
                            "id": "src/components.d.ts::FolioPayment",
                            "referenceLocation": "FolioPayment"
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
                            "id": "src/components/ir-daily-revenue/types.ts::SidebarOpenEvent",
                            "referenceLocation": "SidebarOpenEvent"
                        }
                    }
                }
            }];
    }
}
