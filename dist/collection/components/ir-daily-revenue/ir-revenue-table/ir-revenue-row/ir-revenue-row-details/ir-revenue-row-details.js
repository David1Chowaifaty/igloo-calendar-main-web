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
        return (h(Host, { key: 'd69072e4be472b51c71672172dabf2d19345f9f0' }, h("div", { key: 'bdcfbf2cf7ce4bdd4ba1dd86a135ae064c0b5db6', class: "ir-revenue-row-detail" }, h("div", { key: '93201e59ba7fdcf211c6fd739d54e537f36d7f8a', class: "ir-revenue-row-detail__info" }, h("div", { key: 'cf04a56460400c3d335516a4e6af5314930b551a', class: "ir-revenue-row-detail__time" }, h("span", { key: 'fc4ecf6c097fae59cf604fa26579fb72bae40533', class: "ir-revenue-row-detail__label" }, formatDate(this.payment.date, 'MMM DD, YYYY')), h("span", { key: '5ac62e7041f7b99d1500b5d1e2f101b9eb88adfa', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '3dcba02d71a71c4b0bd039070aaeac9851b5cae9', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '629d99de596b178657172869ddcbaa35d200abcf', class: "ir-revenue-row-detail__meta" }, h("div", { key: '625da0854057b20b9d0108446280f880f11a757b', class: "ir-revenue-row-detail__user" }, h("span", { key: '12d9a7f1e2cf177832ef465fa2d1dda4e5391615', class: "ir-revenue-row-detail__label ir-revenue-row-detail__label--capitalize" }, t('Lcz_User', { fallback: 'user' }), ":"), h("span", { key: '20b5007b46e23ee23b3114480722c6e710d7c9ad', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '5a05cb8517da0b0e462b16fc39e68707938c94ca', class: "ir-revenue-row-detail__booking" }, h("ir-custom-button", { key: 'dbabcf1d823c0db5884f6447978909be94db5c27', link: true, style: { marginInlineStart: '1rem' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            } }, formatBookingNumber(this.payment.bookingNbr))))), h("div", { key: 'd9e08c50ba1730e79f9d7a49fab7f6c0a5f519af', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
