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
        return (h(Host, { key: '2221ce8192d6680db553123e38054a6f92652ff3' }, h("div", { key: '4d068b09d08dc0e1d6bfbe38dd319679d667ca13', class: "ir-revenue-row-detail" }, h("div", { key: '495ffdae7cf9bcdd2880285f2b4b5f4c7e38b81a', class: "ir-revenue-row-detail__info" }, h("div", { key: 'd9ab4e39d57eb69e93e4717cf29dc17c9261b06e', class: "ir-revenue-row-detail__time" }, h("span", { key: '2d3411b6ba3d58e9f96808e19faeb1050f18a0ef', class: "ir-revenue-row-detail__label" }, formatDate(this.payment.date, 'MMM DD, YYYY')), h("span", { key: 'c086b30fcc0c7a6363c6f043b18360cd8873690c', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: 'bef38dbd10b1ad89d950a199470cdc9ba22a159f', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '6a146fffe506f9c8bb2a8b4b5b89b30b5f3c673b', class: "ir-revenue-row-detail__meta" }, h("div", { key: 'e897c49826cf6ede8441acbcce86813ba8b6ce38', class: "ir-revenue-row-detail__user" }, h("span", { key: 'be181dac286d8c35fe9e52d6716413217d297bce', class: "ir-revenue-row-detail__label ir-revenue-row-detail__label--capitalize" }, t('Lcz_User', { fallback: 'user' }), ":"), h("span", { key: '4e5d802e300ad5e5b476f094f327f1f401652621', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '0667314d1d0346cfc74ff55344cf0dbd04029975', class: "ir-revenue-row-detail__booking" }, h("ir-custom-button", { key: '560e8ae236266da589109f400e564e2ffa3d30ae', link: true, style: { marginInlineStart: '1rem' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            } }, formatBookingNumber(this.payment.bookingNbr))))), h("div", { key: '2567d13c794e8e466b5380d04ba62e89273c035d', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
