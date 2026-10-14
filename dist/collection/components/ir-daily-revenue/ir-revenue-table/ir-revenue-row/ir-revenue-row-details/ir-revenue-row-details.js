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
        return (h(Host, { key: '04ddddea2c9958a478fde26b8a1677b1f5ec22a0' }, h("div", { key: '98de73eafd4b6c1bbc24f91b98f5ac5c7db4270b', class: "ir-revenue-row-detail" }, h("div", { key: '75361083662c130e05dbcac590dec68d7016f4b6', class: "ir-revenue-row-detail__info" }, h("div", { key: 'da98e42a15bc8ec0dd3f0cc21315411222f3caad', class: "ir-revenue-row-detail__time" }, h("span", { key: '43bfc7430b82916fda8a8b0ab92eceb330b5447d', class: "ir-revenue-row-detail__label" }, formatDate(this.payment.date, 'MMM DD, YYYY')), h("span", { key: 'ef32d577741db29d80249a240385aea3d5a5de21', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '0c88fd72a99c9d377e258ab78c837b39f6ae49c6', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '605fbc2090428ae3a516b939172ba9bde4a2055f', class: "ir-revenue-row-detail__meta" }, h("div", { key: 'acf635b2e378aeaeba28eb71dd9c2808f675191a', class: "ir-revenue-row-detail__user" }, h("span", { key: '25dc91f10ce624e1870be63580c502e7a3e85778', class: "ir-revenue-row-detail__label ir-revenue-row-detail__label--capitalize" }, t('Lcz_User', { fallback: 'user' }), ":"), h("span", { key: '7306796e1d73f58d45e0ebdc143fa946535a5b3f', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: 'f38fd987f73e64887028a5da3bad772018678dd2', class: "ir-revenue-row-detail__booking" }, h("ir-custom-button", { key: '5b95962cfd7c818b1351b2619de4f1e31edca718', link: true, style: { marginInlineStart: '1rem' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            } }, formatBookingNumber(this.payment.bookingNbr))))), h("div", { key: '73a2a32fdc80779cda32e8bc5f167c6071e9a5c4', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
