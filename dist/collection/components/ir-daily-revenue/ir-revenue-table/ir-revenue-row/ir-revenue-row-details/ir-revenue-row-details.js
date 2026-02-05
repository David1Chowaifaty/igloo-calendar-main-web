import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '6c686f34b54860f4302a670a30dff0d5ef38025f' }, h("div", { key: 'affc9eede36fae3c76ffa8db5ba782af4fab968e', class: "ir-revenue-row-detail" }, h("div", { key: '6b0ed96ca7e040d41ce5f04b4ca1b396447f69ac', class: "ir-revenue-row-detail__info" }, h("div", { key: '053271fbd65a877967f6676de7843cb579c7cabc', class: "ir-revenue-row-detail__time" }, h("span", { key: '4cf643f1d885e726f4dbaf5363d4f210a2930140', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '1d5f1451fa4de8872962cad86fba8c7ecd6b3925', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '7c93fc8dc91b0b923a685e0ed772f8958965853b', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '798d9df3f2736ee1ab9867b9196a6668d873560e', class: "ir-revenue-row-detail__meta" }, h("div", { key: 'fe18002a9230bd44c9c60cb8ecee0a4eb1a7d291', class: "ir-revenue-row-detail__user" }, h("span", { key: '6bd101a3be8c5a18fd03ab141d185a46023c1b65', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '95d42eb405de1dcec1584ba05cd253c8e8e422f9', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '1e3af69e5725efd49e23f3dac0e045dc41bd6e9e', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: 'ca7bd6feed767a554ec0eb7eb69eb401f703aa1c', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: 'eb55a6ddb6b757a007bba07188c678259f3e6ae6', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
