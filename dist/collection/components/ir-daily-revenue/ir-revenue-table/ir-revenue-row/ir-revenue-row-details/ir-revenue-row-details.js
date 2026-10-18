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
        return (h(Host, { key: '0d31813ce41b095dc52f15b1b8fc62c4f408321b' }, h("div", { key: '075e09df42bdae226a1860dffad0f69b692023a2', class: "ir-revenue-row-detail" }, h("div", { key: '45d6d796aff7b6e2384f72b17d5da793f14758d5', class: "ir-revenue-row-detail__info" }, h("div", { key: '180b770134c9207858400b6938f38076ba3ed18b', class: "ir-revenue-row-detail__time" }, h("span", { key: 'd93a95af5fab41a071a1a0c184353cda9afcfccf', class: "ir-revenue-row-detail__label" }, formatDate(this.payment.date, 'MMM DD, YYYY')), h("span", { key: '81df12313e8cc509edc95a2abe52a985dbe02664', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '59a5bfcbbbaf777b2ee74a217a05bfa5f1145830', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '348f7d6f1c01a3cc9f28845a2d40c881ff10a47a', class: "ir-revenue-row-detail__meta" }, h("div", { key: 'd00ded005c3e8577b1e7c3b9fc63945c8e693467', class: "ir-revenue-row-detail__user" }, h("span", { key: '890a73c13280fe19246d6e4b5369008f85188616', class: "ir-revenue-row-detail__label ir-revenue-row-detail__label--capitalize" }, t('Lcz_User', { fallback: 'user' }), ":"), h("span", { key: '5dfe4584d09bf721eb890fa99b73de172c765620', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '91bcbdc9f1319c6156108b82a2e9eebd78662b78', class: "ir-revenue-row-detail__booking" }, h("ir-custom-button", { key: '8d9d043e227da213edd4fcc71813165faa2393a7', link: true, style: { marginInlineStart: '1rem' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            } }, formatBookingNumber(this.payment.bookingNbr))))), h("div", { key: 'bf9cc421a62373d2148309f7a4220b3811ac9f8c', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
