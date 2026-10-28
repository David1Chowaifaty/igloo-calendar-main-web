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
        return (h(Host, { key: '79b0ee7388996a1be0edd02d709d4015c4cb64c5' }, h("div", { key: 'eed72776d86ad099846282873ee9fedde0f91921', class: "ir-revenue-row-detail" }, h("div", { key: '8ad85d134cfed9bdcae3b97bff4e939b84b43888', class: "ir-revenue-row-detail__info" }, h("div", { key: 'c2fde69904c33d3adb87de04015d745232139821', class: "ir-revenue-row-detail__time" }, h("span", { key: 'f4278ffad32b22addff0f663b7a1e1d4eafdcacf', class: "ir-revenue-row-detail__label" }, formatDate(this.payment.date, 'MMM DD, YYYY')), h("span", { key: 'd38dd36b40c95ef42c95e5535ff259833beaee5f', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: 'f48b0419e7ec2e67b4d08b8eafd88d8b13518bd0', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '39575a6fba07b6e592e7249cdeacb977d13ea44d', class: "ir-revenue-row-detail__meta" }, h("div", { key: 'ddefd852ea1cd0b9fe8099f0fedeefb2bdc0e123', class: "ir-revenue-row-detail__user" }, h("span", { key: '084ce0f8611b1bbfcd43ed439cd2d15e37f9ea11', class: "ir-revenue-row-detail__label ir-revenue-row-detail__label--capitalize" }, t('Lcz_User', { fallback: 'user' }), ":"), h("span", { key: 'a7623c478e800376854d99e7cd9690d3e2d12db3', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '1ddec1ab4470b120248091a859c188a6bece8bf1', class: "ir-revenue-row-detail__booking" }, h("ir-custom-button", { key: 'ac5e7dd4ad4eb7f4afa40f4d54c9afa42f3c29bb', link: true, style: { marginInlineStart: '1rem' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            } }, formatBookingNumber(this.payment.bookingNbr))))), h("div", { key: 'c3edc3a7bcfe4079e816349ce440f9fda3a50f3d', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
