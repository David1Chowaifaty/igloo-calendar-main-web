import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: 'd1d76d38c5a42aa6b24429c821ee91e212128203' }, h("div", { key: 'c6c800cb90f057d0c09635b672be9a07e5e795c2', class: "ir-revenue-row-detail" }, h("div", { key: '77267e268aac4646a1226e2631a1a471175581ea', class: "ir-revenue-row-detail__info" }, h("div", { key: 'df5c80de1df82b01c47df5e4b36df38a5b587145', class: "ir-revenue-row-detail__time" }, h("span", { key: '1ded6dccd32291db99c8972205b8d7e8fdac5183', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '134695e6ac7f6caa0035c9e7f8efde6fc2a32311', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '044d62bbd9435dfe8d4ace646daae0abcde066a9', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '3baa651b630d269959ed90155474f245cb111ec0', class: "ir-revenue-row-detail__meta" }, h("div", { key: '56ab5a4289fddf2f02b7eecfee136f959dd81ae4', class: "ir-revenue-row-detail__user" }, h("span", { key: 'e5e95866f980fb2b90ddb4f2c34dab1baec7c340', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: 'b760335ab538fe1076cff34ca8f4065113cb96af', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: 'ad9fec4e1e300c20e0eeeede25869d3377318817', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '5596b02faa2824d3dfe4f1eb1b995e667a115f3e', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: 'd49cf8eea8599afc00bd23c48dd112b844105ad0', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
                            "id": "src/components.d.ts::FolioPayment"
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
                            "id": "src/components/ir-daily-revenue/types.ts::SidebarOpenEvent"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=ir-revenue-row-details.js.map
