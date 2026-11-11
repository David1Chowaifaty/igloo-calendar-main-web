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
        return (h(Host, { key: '84ccc6f8e05934db3564bd8dbdf4570d0ab259ef' }, h("div", { key: '6bb6e36cd0a1210d136b257449363933f6308c22', class: "ir-revenue-row-detail" }, h("div", { key: '59317ff59edd796443ed61c41a563ea55daddbd2', class: "ir-revenue-row-detail__info" }, h("div", { key: '05ea77583e1840d5ec346a01ff46d8766700b9cb', class: "ir-revenue-row-detail__time" }, h("span", { key: 'e042d91be3e1b601c7c90fdccd1c7928988d34b5', class: "ir-revenue-row-detail__label" }, formatDate(this.payment.date, 'MMM DD, YYYY')), h("span", { key: '4e16d33feef064d053c7312bf2fa69d97a05719a', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: 'd342db7c359893c018953acbe85ff56d8ba45a6d', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: 'a9a1b177a3c06df8759ee890c395a1b9639f7f45', class: "ir-revenue-row-detail__meta" }, h("div", { key: '8a6a30875ae8032de2f6be8634563313cfcd6bc4', class: "ir-revenue-row-detail__user" }, h("span", { key: 'd172802bde3a7b8252712aa94e15ca18ed40611a', class: "ir-revenue-row-detail__label ir-revenue-row-detail__label--capitalize" }, t('Lcz_User', { fallback: 'user' }), ":"), h("span", { key: '9ee8f5ac90a0766fee9c4f5a8dccf4c78bd18674', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '9c2a8e4ce124f2ef67d74ad94e0fb6c7ef0fefc1', class: "ir-revenue-row-detail__booking" }, h("ir-custom-button", { key: '948c6eef70a3bbb554f929f512678c69c1e5f9b7', link: true, style: { marginInlineStart: '1rem' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            } }, formatBookingNumber(this.payment.bookingNbr))))), h("div", { key: '5216058cd61ed284c06a7b3bc0c749030e9923ff', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
