import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: 'f13bcbee22e33b81e9e1e3a9db06871c15b51c62' }, h("div", { key: '85d9c44b79f128383afd891428fa12f0c1901887', class: "ir-revenue-row-detail" }, h("div", { key: '9ec9baec565e873deb62a9b4c16bd6bd912b33eb', class: "ir-revenue-row-detail__info" }, h("div", { key: '60300196ec8ae42e0dcf760df63a92ceb6b5a703', class: "ir-revenue-row-detail__time" }, h("span", { key: '03be7d4ee8546da083e78195897559cdea81fc27', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: 'feab751f3eb78ac39e632396452038b53ddf46a0', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '0b7b05bd6ac2982681bd823ef1dfefd417832020', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '50f384bd6bafb75d64e9f05478899c3b550538e3', class: "ir-revenue-row-detail__meta" }, h("div", { key: '3dd2234b18675c0369ea0bc165b33d6dd5d05425', class: "ir-revenue-row-detail__user" }, h("span", { key: 'faa39127beeb781211814ca4f0da1a98188fb49d', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '5c4102790ba282722f17b9cebb190256c291c99f', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: 'ef1a0cb8f0a9f6d9dc17aea69d7e524c3ff768be', class: "ir-revenue-row-detail__booking" }, h("ir-custom-button", { key: 'b766200512eec790a8e58ba8aad0b583581edd1e', link: true, style: { marginLeft: '1rem' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            } }, this.payment.bookingNbr)))), h("div", { key: '857462e1d0349228e6ebfb2be49948c15e400413', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
