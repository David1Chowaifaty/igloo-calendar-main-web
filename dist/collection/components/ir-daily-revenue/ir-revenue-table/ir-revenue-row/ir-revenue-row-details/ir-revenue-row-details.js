import { Host, h } from "@stencil/core";
import { formatAmount, formatBookingNumber } from "../../../../../utils/number";
import { formatDate } from "../../../../../utils/date/index";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
import { t } from "../../../../../services/locale/t";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '43b9b11bbb35553e16f02ea60a5e3c2a82d4f8b7' }, h("div", { key: '9453a1d3ac9f4b164fe1148833b7bd6e8466b0f4', class: "ir-revenue-row-detail" }, h("div", { key: '13e933528995997d6b8f40da993992d7e79915c0', class: "ir-revenue-row-detail__info" }, h("div", { key: '433f8299d8c7b42ee97edde1805feee6977fb85b', class: "ir-revenue-row-detail__time" }, h("span", { key: '6c0941a65ed244e4016f7dccbb9cef5c135d60c0', class: "ir-revenue-row-detail__label" }, formatDate(this.payment.date, 'MMM DD, YYYY')), h("span", { key: 'feb661c434e6b05343950d6fc402c9e54d67d058', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '706c4f20e9b3a7a1e6355e25cadef30cd80b2453', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '4d7950d316396f8475dcdd7cfebd762cbe72d045', class: "ir-revenue-row-detail__meta" }, h("div", { key: '6f0de80d4b42a4783d6a2de688c97583874f3d21', class: "ir-revenue-row-detail__user" }, h("span", { key: '4a98fc4e7bc4a8713a54b9f946be7897eace91a2', class: "ir-revenue-row-detail__label ir-revenue-row-detail__label--capitalize" }, t('Lcz_User', { fallback: 'user' }), ":"), h("span", { key: 'c90633b6e18d1c4e5c57bb5e679308e8651b5d2b', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '0eac72b5313ecdf63589d34e9c3d0b494afa9f30', class: "ir-revenue-row-detail__booking" }, h("ir-custom-button", { key: '1c9625c43c0fb49df655a2e95b7fb702d573d3fa', link: true, style: { marginInlineStart: '1rem' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            } }, formatBookingNumber(this.payment.bookingNbr))))), h("div", { key: '9e0c723f92b3830c4316ef3b5e8f1fafbe071453', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
