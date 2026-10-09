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
        return (h(Host, { key: '257954d5aa762fc7c41f7f548295ee1632638561' }, h("div", { key: '4f7ba5d95da29f9b642e899ccba0a707a17a7e03', class: "ir-revenue-row-detail" }, h("div", { key: 'fdcf186f56a6af3874ea8fba48eec39ae0d362d0', class: "ir-revenue-row-detail__info" }, h("div", { key: '28d92ff4d72dedae26b97ee4f037402d16d4e6a6', class: "ir-revenue-row-detail__time" }, h("span", { key: 'f0b10dd931d66c76338090abe756c959618ac73b', class: "ir-revenue-row-detail__label" }, formatDate(this.payment.date, 'MMM DD, YYYY')), h("span", { key: 'a80c3a5a05c56c4364e6d78a490ef4363f603785', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: 'f3d809c4a9057d198c5477eb0050a04a02e2c104', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: 'd446bd06c26b14730ec0ef7eed9d537dd771701a', class: "ir-revenue-row-detail__meta" }, h("div", { key: '14f8c9338dc039a4f98dead7a21647f5dd0c3c56', class: "ir-revenue-row-detail__user" }, h("span", { key: '46c0da8fa7aa022692012b1667c21b7c1369df87', class: "ir-revenue-row-detail__label ir-revenue-row-detail__label--capitalize" }, t('Lcz_User', { fallback: 'user' }), ":"), h("span", { key: '7f3f58e637be80ba2d1d41da2dc189b9a2506e4f', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '15aef6deca2d58076b032076573ea35aa204b0c4', class: "ir-revenue-row-detail__booking" }, h("ir-custom-button", { key: '533c6b03472baf26af9eb37a35ed879b7bc4f3e8', link: true, style: { marginInlineStart: '1rem' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            } }, formatBookingNumber(this.payment.bookingNbr))))), h("div", { key: '3e91ffd803e0301f7a8de131d6e3c3f1845a19ee', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
