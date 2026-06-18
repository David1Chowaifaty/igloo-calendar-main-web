import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '9dceb124ce9a159263c53a3480b3850b80c00d7e' }, h("div", { key: '12a35ae528131efc4baeb8d0934171d4be55c2f7', class: "ir-revenue-row-detail" }, h("div", { key: '2e5e2bf1aec239e858d31b12e3cee9dfa0e189a3', class: "ir-revenue-row-detail__info" }, h("div", { key: '861cff73cbedf6ba1ce7dcd284f8d13b694b3ef7', class: "ir-revenue-row-detail__time" }, h("span", { key: '4b23b73ec6c7fb1da7899eef2b25883fecc29794', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '075d3178374ddd6ca5d5aff4f2aebadc2bd33cc4', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: 'b08c6e784b904a0d981030e00f67d4cfc3a45c52', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '60c231a14ca2219f035ca89cb1315741f74d96da', class: "ir-revenue-row-detail__meta" }, h("div", { key: 'e3685e9e2a5b426418d664014a6a79792105cde0', class: "ir-revenue-row-detail__user" }, h("span", { key: '2c6264610add76ba2e2b94fe30623bd1b684f12b', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '81b5bc5c48c7899ca9a6e2fc651c747d0bc9a12f', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: 'bee10d030c48b31afff35d97e86cf19e7edcba9b', class: "ir-revenue-row-detail__booking" }, h("ir-custom-button", { key: 'edfd688b484f29d6bb8fa300649cbd5245554357', link: true, style: { marginLeft: '1rem' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            } }, this.payment.bookingNbr)))), h("div", { key: 'fca6a98b654618250c5a03f4701f5b2796b5ad28', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
