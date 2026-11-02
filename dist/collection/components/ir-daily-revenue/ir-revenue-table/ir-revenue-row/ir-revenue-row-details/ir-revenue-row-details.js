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
        return (h(Host, { key: '2c227be921f58203bce343bbe59096b525838890' }, h("div", { key: 'af660e54cae526821a7be562bce4278a9a2449f4', class: "ir-revenue-row-detail" }, h("div", { key: '0b52f1b7eda12a31ebb8fa38bd72009c1c924674', class: "ir-revenue-row-detail__info" }, h("div", { key: '9431224c65de504b098ce0b68c44a18261aa0707', class: "ir-revenue-row-detail__time" }, h("span", { key: '3ac6d5c38888ac7f1769d43eff90c583c3935a6b', class: "ir-revenue-row-detail__label" }, formatDate(this.payment.date, 'MMM DD, YYYY')), h("span", { key: 'e652850da7c26269823924d979d39a18bfde4cae', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '1f8f64ceb27c5810fd8616f7932dea2d27b8c3a1', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: 'c6aa60168d0a691e63548ee9b9d87ba238ceb657', class: "ir-revenue-row-detail__meta" }, h("div", { key: '2cd1ae3334e8770700a54d2c74580044c544ddbf', class: "ir-revenue-row-detail__user" }, h("span", { key: '1c9105920e859e3c140563ecc595e8956b6a7a7a', class: "ir-revenue-row-detail__label ir-revenue-row-detail__label--capitalize" }, t('Lcz_User', { fallback: 'user' }), ":"), h("span", { key: '5e3ee4555569000f3684fd2b59a223b0959867a9', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: 'f6a4833947407388939351eb24ec7a6d0fd05224', class: "ir-revenue-row-detail__booking" }, h("ir-custom-button", { key: '60d7f1c14aca6b01084d91d8e5d8008ffb536997', link: true, style: { marginInlineStart: '1rem' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            } }, formatBookingNumber(this.payment.bookingNbr))))), h("div", { key: '47d4ab331c1e52377c790b525d07db21f43264d4', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
