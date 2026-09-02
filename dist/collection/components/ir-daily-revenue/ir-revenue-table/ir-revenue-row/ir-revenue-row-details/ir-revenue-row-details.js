import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '84aadf872c9c716d1218c40f289492f56b5d0c11' }, h("div", { key: '1bb14afe12e3454147b8778570a63308616d149a', class: "ir-revenue-row-detail" }, h("div", { key: '81e5268f8d102a7cc8b07d203bfceaf8fd179e10', class: "ir-revenue-row-detail__info" }, h("div", { key: '97a8eef5a5636df1c4cad00d52153ba660431fd0', class: "ir-revenue-row-detail__time" }, h("span", { key: 'ee626d5a426631531bdbb672516be220932a644e', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '5eedb81c85c8eb402e9ee1ffaf5b864a674da175', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '30ef5ed709df70cd1f7295fea35348e169a76b9d', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '2761b0f3e9da4888929ed0d996e5b3e3779d8cc2', class: "ir-revenue-row-detail__meta" }, h("div", { key: '54d9017ab8b24621136da0c1f44277881ed7b2fd', class: "ir-revenue-row-detail__user" }, h("span", { key: '4aee8c5d51f7e2dc9b5e645fdae08dd4c9516d49', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: 'b2ec63905bacb6c692db1b329597fce8b17c1bc7', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '42d1f060caace1913541bf5bf1fced8b937a0b8d', class: "ir-revenue-row-detail__booking" }, h("ir-custom-button", { key: 'a118a6ce920b92c160c2f4ef00361c402621337b', link: true, style: { marginInlineStart: '1rem' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            } }, this.payment.bookingNbr)))), h("div", { key: '56a1b84b55b337a8d00e8a969b1c070a51c583e2', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
