import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '7d24645c5b3ebd0510c2338f95aa52dd481877dc' }, h("div", { key: '42a8164082e4560f6bbcea1821e03758352f6140', class: "ir-revenue-row-detail" }, h("div", { key: 'f116bdf965a8e958b084075be9f06ab9be41f694', class: "ir-revenue-row-detail__info" }, h("div", { key: '7d74792554b278fbe4b20b8697720f175267ed7c', class: "ir-revenue-row-detail__time" }, h("span", { key: 'c32c08436d7a6a73069f0576a2c624ea8cb515b7', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: 'c27f70eaf9834a143b58a89f0656dc55bbb50d01', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: 'bb23b5ded787a0041306586e380e6ce6d76cc88b', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '55c571583630c16791ae162ab181b9a98709ab56', class: "ir-revenue-row-detail__meta" }, h("div", { key: 'c3a8ecbba2c89c44f6352db11918b16c48fa6e33', class: "ir-revenue-row-detail__user" }, h("span", { key: '5a39d0149531d2979e9836ac61362798255374eb', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '4171090aba9c7df1f9b579ece5a18cac7ca85dec', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '95c09216c822953da9be3067081decfcfeccdbf4', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '1508d6d5348475d745e1c093a66777a443453108', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: '477814c22a4375be9f4e20bc1f6dbd82d211edce', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
