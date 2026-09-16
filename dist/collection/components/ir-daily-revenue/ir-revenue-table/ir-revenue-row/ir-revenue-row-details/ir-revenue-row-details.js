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
        return (h(Host, { key: '04fd8b3b86c6659ad0b90c62e459825d3b6f2fa7' }, h("div", { key: '841e3695c428a0594f760603d171e79c31b6bf63', class: "ir-revenue-row-detail" }, h("div", { key: '93627421956e2454c2dc72b05fab8cb289a799b5', class: "ir-revenue-row-detail__info" }, h("div", { key: '18c774c35824156fe3001a5715a7364f21df1c0c', class: "ir-revenue-row-detail__time" }, h("span", { key: 'bcd1034c3d99db99237bbf46b7e32cf4f92a93f7', class: "ir-revenue-row-detail__label" }, formatDate(this.payment.date, 'MMM DD, YYYY')), h("span", { key: '59ad6c052f829d82d48e9f51d428e3b7fd301b17', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '275fc33717ce327671486b1f664d8fd5a1358092', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: 'c90dbffc31e692546af0663eaff9374ec2f29077', class: "ir-revenue-row-detail__meta" }, h("div", { key: '5975eea46515b4de4834882b8a8f3463141eab51', class: "ir-revenue-row-detail__user" }, h("span", { key: 'b1dfe23c3dbdf4cf3666c767f4a46a7a10bfeb2c', class: "ir-revenue-row-detail__label ir-revenue-row-detail__label--capitalize" }, t('Lcz_User', { fallback: 'user' }), ":"), h("span", { key: '443947d5ce0a69b631e5e71c7534cf7c9a247124', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '8a5801340245b0cf2f7160484eb2b68a4c394bed', class: "ir-revenue-row-detail__booking" }, h("ir-custom-button", { key: '6defb4bad0224d35d85d9698eb2c361b969722f5', link: true, style: { marginInlineStart: '1rem' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            } }, formatBookingNumber(this.payment.bookingNbr))))), h("div", { key: '5451e3f283aa820d6d55414c852782711ae8afa4', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
