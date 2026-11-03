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
        return (h(Host, { key: 'a3198741f51e798176a79111233bbfa4e0a23790' }, h("div", { key: '54e899ce24bf0ed343903adacc3e83a4b23d865f', class: "ir-revenue-row-detail" }, h("div", { key: '59c255690e132209efefd35aa48a77dccf0f5310', class: "ir-revenue-row-detail__info" }, h("div", { key: '276a0e26a66decb81642e7c4743b2ce2b5c93618', class: "ir-revenue-row-detail__time" }, h("span", { key: '3cf968279beedb0814e61034d2daeeb9e9d9f97d', class: "ir-revenue-row-detail__label" }, formatDate(this.payment.date, 'MMM DD, YYYY')), h("span", { key: '8b9ce071deab3835814f4842d2b5181ab6c3374f', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '988656a61e2b9ad26fc355666d0d80036a74294a', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: 'ce9a6d6b8c39d1a56988a19d50f4776c13891916', class: "ir-revenue-row-detail__meta" }, h("div", { key: '17febf73984eb12836555e220e8be5b766951091', class: "ir-revenue-row-detail__user" }, h("span", { key: 'e8f49c655e75fbdbe66f5047ad7d6e150353345a', class: "ir-revenue-row-detail__label ir-revenue-row-detail__label--capitalize" }, t('Lcz_User', { fallback: 'user' }), ":"), h("span", { key: 'eb9698e0c16fd81978be21d5d67ec74eb324ffa7', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '8bc0124dc4c7bc4b6b1fee53096653654fb3b707', class: "ir-revenue-row-detail__booking" }, h("ir-custom-button", { key: '93c214a0e2c77dc391cc68647c34d9a55ae5f839', link: true, style: { marginInlineStart: '1rem' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            } }, formatBookingNumber(this.payment.bookingNbr))))), h("div", { key: 'cfb458a5b4aa7de03fd3735d3f694eada24e39de', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
