import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: 'e807d11e012980d46b1f1390a084c1467a46aec8' }, h("div", { key: 'af5038a4f77cc402179b2d410e2aa01093c8ea2b', class: "ir-revenue-row-detail" }, h("div", { key: 'cb157c5bf5fb342e12fcd48b90e5f64d3c6fce55', class: "ir-revenue-row-detail__info" }, h("div", { key: '3de2daf4eae85daf5e992fc5493dbedf1c91b661', class: "ir-revenue-row-detail__time" }, h("span", { key: '5eab89cbb7cd6510b13852ecfa59e4f9fb13442b', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: 'cb745029127d87a2febba79b2fca412b5e7f6b83', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '21cf828178d5f7051e8628847beebd1909a92ec0', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '406c10e0f48665458f60743fbcf8e65d4cccdfaa', class: "ir-revenue-row-detail__meta" }, h("div", { key: '3a1bd722deacd805f3a3c557ae4f5f31116e6bca', class: "ir-revenue-row-detail__user" }, h("span", { key: 'c20692eb4f38d41127015160ef26779e1f313298', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: 'cc98558d4496e081dd2d154af652858f8cce36fe', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: 'e847b3b5c412e8c6cdaf21226398873209bfb9c2', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '1494ce81b78905460f862c5e44854796d231bfd1', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: '4cce5a8c66bc853fd2b70759630e7f83c8bc07f9', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
