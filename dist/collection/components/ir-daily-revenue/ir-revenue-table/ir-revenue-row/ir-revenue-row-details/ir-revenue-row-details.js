import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '4404a2210f66c07ef40b10288fb8c6d2fa5463a1' }, h("div", { key: 'e62d544301d79dd88c5b3190fe1f3c0df1a164d7', class: "ir-revenue-row-detail" }, h("div", { key: '3edefa3a60835a79d98e7db1413795183710a580', class: "ir-revenue-row-detail__info" }, h("div", { key: '9c975c3be5458b371c6e698b6b507fa0780c3406', class: "ir-revenue-row-detail__time" }, h("span", { key: 'eec7edf9d820f61c3296fd29345eb63ce31e81af', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '5ff96a4e26cc6f0d537c6ae7ea146c1be1f0f784', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: 'f47a1ef383b3bd7d4ca73101da7238837d1f27f7', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '466d97d9f62341dd6c0d4856fc7f7389296043af', class: "ir-revenue-row-detail__meta" }, h("div", { key: '7f5902ccc4bc07aab17e061059f652235d46befd', class: "ir-revenue-row-detail__user" }, h("span", { key: 'ec3c7ebc238bf3e1c85626f9e73cdcd2ac8f0e2b', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '3e6535443a5be1b2e3a1578e45e7b909e1b53168', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '762e47f06365a3988dd15ede25bfa0b201ff9fec', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '41ec8e3dcb7411c8f3f972ad7f16b97af0ba5302', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: '7a5a2c3f2f7a127081fe6eab8a4d19fb8b3b417e', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
