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
        return (h(Host, { key: 'c99dce3c93ccc6aa59f0c03aa8b0a6682c469f3a' }, h("div", { key: 'c5523973cd3fa6b852a4b0924e302f0be9c63f6d', class: "ir-revenue-row-detail" }, h("div", { key: '41fec834f39492e66299656c97ec8d058dc381b7', class: "ir-revenue-row-detail__info" }, h("div", { key: '9881120394791e1c9e6a86ebcb1b0546f9b44558', class: "ir-revenue-row-detail__time" }, h("span", { key: 'cc919b8793fc2ffc596cb73364fb7d0e0ac43126', class: "ir-revenue-row-detail__label" }, formatDate(this.payment.date, 'MMM DD, YYYY')), h("span", { key: '4fea50accfe7970abb02e6009ef85b284f64bdd4', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '6d6117bc197676b3cb34cc1a3e2669a3287e34a7', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '34d5487f840f1d3601700d1b64e9c018ea6df06b', class: "ir-revenue-row-detail__meta" }, h("div", { key: '6222ba202bd372ab191a1f816ce3a0e0bd168aaf', class: "ir-revenue-row-detail__user" }, h("span", { key: 'bab6edf7d9713c645f3e048e332752ece5ca4b12', class: "ir-revenue-row-detail__label ir-revenue-row-detail__label--capitalize" }, t('Lcz_User', { fallback: 'user' }), ":"), h("span", { key: '49af721eaec6f36a837aa584e956afe1b9d3fd32', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: 'bb1873d580ff3a81f5dbca8a00e45af50e650fb7', class: "ir-revenue-row-detail__booking" }, h("ir-custom-button", { key: '9ba76291254e25725ab21e802f0dfc7475d95d7e', link: true, style: { marginInlineStart: '1rem' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            } }, formatBookingNumber(this.payment.bookingNbr))))), h("div", { key: 'd883bb4f5636e889520b1f85cb9bb474ef419478', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
