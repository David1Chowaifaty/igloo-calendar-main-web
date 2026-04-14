import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '79909e8e056a35db74b297c58aa89c9a64bcd40d' }, h("div", { key: '52a026a1734efa6f7e20469a71e4b9d82c11bdd9', class: "ir-revenue-row-detail" }, h("div", { key: '9080f9ed47491efa0b49fb65f052a70e563e7e3c', class: "ir-revenue-row-detail__info" }, h("div", { key: '69cb94837e1200a0bfc7d504619c981074d0bdc5', class: "ir-revenue-row-detail__time" }, h("span", { key: 'b5db1e22bb01de500ad0fd7816184c14b9c20795', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '4f769c1dc3fa7ff7e201a72ac692b0d5b3862715', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '06c18901e4a1c1069385c6e311cf49bb2ded6792', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '9ef1607edf9aa22bbb0a66d2fc6820caa2dabe2f', class: "ir-revenue-row-detail__meta" }, h("div", { key: '1155f3d202a5ee8ed22f9fb99e3b471e7df5e636', class: "ir-revenue-row-detail__user" }, h("span", { key: '6343d51ab925a2ce6e3f39acf998fbbd19f3d141', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: 'a516a39eb1fcc8be1d43210de9e1f66e11cbe82b', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '7c0d46bbe0f1b722dcd3f285c8101b562880f9f2', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '8e78da7ce27021cff0adad173ee1524e9be652e6', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: '14717ec70bfa04843424b280190d886de48657bc', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
