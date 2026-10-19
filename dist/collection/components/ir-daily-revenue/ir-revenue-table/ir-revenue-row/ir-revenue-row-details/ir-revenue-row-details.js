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
        return (h(Host, { key: 'ef4b0352113236ed9e0487dccc1b60aa9f4326e9' }, h("div", { key: '685ce8f1c9777c327d2d89534681ecb9351054e9', class: "ir-revenue-row-detail" }, h("div", { key: 'ff66633aa13f12b1ce1e37fac388253b9ff7fb31', class: "ir-revenue-row-detail__info" }, h("div", { key: '0469dbf4469b4ae3f689f6aa70cdbb7b858acf5e', class: "ir-revenue-row-detail__time" }, h("span", { key: '441c3c7657690ea8101132fe0d953b75800b8c18', class: "ir-revenue-row-detail__label" }, formatDate(this.payment.date, 'MMM DD, YYYY')), h("span", { key: 'a238fdd2ac9057c690403f7a021d3790a4d1c055', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '678ace2084f8ca1b35b53b702e5ba4c8b4ae6865', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '23680cfe16d513604a2067f7362cf62421114f7e', class: "ir-revenue-row-detail__meta" }, h("div", { key: '3d0f7835950b6563325b534a6e6c64c61f08a315', class: "ir-revenue-row-detail__user" }, h("span", { key: 'babefd513c070abc45a8268d67ddeccada2f21dc', class: "ir-revenue-row-detail__label ir-revenue-row-detail__label--capitalize" }, t('Lcz_User', { fallback: 'user' }), ":"), h("span", { key: '8f89664bb5bc9833da824e14be68f4c20d85c7e2', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: 'dd694c5acfb7eba484d16c25c5b0846568f549bd', class: "ir-revenue-row-detail__booking" }, h("ir-custom-button", { key: 'ec3c2bd34d6db6cbec6b279f704328285069a519', link: true, style: { marginInlineStart: '1rem' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            } }, formatBookingNumber(this.payment.bookingNbr))))), h("div", { key: 'fd26e9af1076a454aedf05e51f7850b965c1b3a8', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
