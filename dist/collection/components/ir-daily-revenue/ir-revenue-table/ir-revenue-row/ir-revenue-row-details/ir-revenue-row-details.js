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
        return (h(Host, { key: 'd163fd92894b3aeecbd0439f81b21f129ade533b' }, h("div", { key: 'e799b3293afd2b1a9f6c4dec76c65c7500aa2f63', class: "ir-revenue-row-detail" }, h("div", { key: 'e724509250b15541b2f3fc865d3a08aced1e0fdd', class: "ir-revenue-row-detail__info" }, h("div", { key: '2e8f16291ea477702eba67bd50f9d2eb8c95a4aa', class: "ir-revenue-row-detail__time" }, h("span", { key: '22157fdb1969cc22a23adb747de2d5750fd40ed3', class: "ir-revenue-row-detail__label" }, formatDate(this.payment.date, 'MMM DD, YYYY')), h("span", { key: '5779cfec152561f6f73a2c4584e5a798ae763887', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '04684b26afc4def70646002357c675cc018ec9b3', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: 'ede17a80c1600b41948c51be4704781b82be9d07', class: "ir-revenue-row-detail__meta" }, h("div", { key: '6e0fdc84353a11e8d825baf11051212ab50ecc31', class: "ir-revenue-row-detail__user" }, h("span", { key: '660bc6f2e1f51f16a096e5f4d7c84d540e88eb4d', class: "ir-revenue-row-detail__label ir-revenue-row-detail__label--capitalize" }, t('Lcz_User', { fallback: 'user' }), ":"), h("span", { key: 'ac00bd18505318ba82e52c596d95cf2a4f5570ce', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '4de5e4763f907ce23c9f32cc638e4898259fd9a5', class: "ir-revenue-row-detail__booking" }, h("ir-custom-button", { key: '3283cb2cea1e17c1976f8708778c5a2fabd879af', link: true, style: { marginInlineStart: '1rem' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            } }, formatBookingNumber(this.payment.bookingNbr))))), h("div", { key: '51645065fb9543fb1d1a8a35997e7895f669a1d8', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
