import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '2d4e2f78befba4d3cef9c26b6f3d09cc985d9315' }, h("div", { key: '37df329dd707d3e8c2e07baff33df6edbac16815', class: "ir-revenue-row-detail" }, h("div", { key: '89bad26581be7de461d7e1ff38f007dd4f132a81', class: "ir-revenue-row-detail__info" }, h("div", { key: '3bfd5af9bde5f9928b155b06aaa6e4311234a589', class: "ir-revenue-row-detail__time" }, h("span", { key: '53cd7eaebfcb9569ab4c04fd80584c3940f5392a', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '4318a345c6e0d8607f1cedbf1946f342fa535ced', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: 'e42548c5cfc3d8f029b5dff9dd1a927e6cca7aad', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: 'ccc1ce5a1ab6f6a305eb8b38311ae814bbe109de', class: "ir-revenue-row-detail__meta" }, h("div", { key: '928a0831518a2c18e3f7e59a92b0641525519a48', class: "ir-revenue-row-detail__user" }, h("span", { key: 'd43833b782dc58546d366895322c331d23439d31', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '681c20c463051679da4007387aeff4b7f0c3bd6e', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '96c04554b30ce5a00f4b4d00d75ca2e3a2dc6b1a', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '255cc5ea6685e47f682cc62528fc3d0f0de5d8cb', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: '6b39fdeaa93162819ee01848f7f77adcfe1cfe8c', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
