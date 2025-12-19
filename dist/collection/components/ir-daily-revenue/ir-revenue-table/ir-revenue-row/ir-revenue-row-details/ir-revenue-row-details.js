import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '2bba5e20fd40afaaba7d28f1aaac1ef2b90e8a84' }, h("div", { key: '735200ae5922a942b9eb9aaa9435324d1a0cfa43', class: "ir-revenue-row-detail" }, h("div", { key: 'a35082283e213dac11f009fe201b4fd3ccee0452', class: "ir-revenue-row-detail__info" }, h("div", { key: '162da11dc168ed5ed165a19938fef370b1f75148', class: "ir-revenue-row-detail__time" }, h("span", { key: 'e8c74b2636d3fbcca9dbffc265b6bbbe36712271', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '7395a1f325568bce80b2268058938a90753562ef', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: 'c6996642e903bee7eb1278e57b507119e55d3110', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '80a4cdd0b0eb1a22d36c1295c5db4a16b8cffac9', class: "ir-revenue-row-detail__meta" }, h("div", { key: 'c04345d2e80533f6585bf8182a6a1464d9ace823', class: "ir-revenue-row-detail__user" }, h("span", { key: '17c13d2fb1e0c626782f9e9e07ed4c0de954316f', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '67ffa1cfe615a2b98357eb844fc51ca1dcc0d2a1', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '2c429e87028babd9afc5e7c8aa6960b4dbbef8a9', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '0bca980cf088efa8943703918783234c47a1f212', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: '7d725031652c614943afc9515d3c531cdea5a246', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
