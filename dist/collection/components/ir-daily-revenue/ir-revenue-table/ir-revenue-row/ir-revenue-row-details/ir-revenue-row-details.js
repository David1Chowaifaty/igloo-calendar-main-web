import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '55ee9a313535c492a1edf52a8707228415d0daf7' }, h("div", { key: 'f72af3411f15226fe45be8c3174439f89c518bb2', class: "ir-revenue-row-detail" }, h("div", { key: 'bf86c3d129b888a9c50913a8459fbf2255f64bb3', class: "ir-revenue-row-detail__info" }, h("div", { key: 'd91bdd79f79808482913dd2fc500143a80d656dd', class: "ir-revenue-row-detail__time" }, h("span", { key: '305c619f65337de3607bb9f16fcf6db69c023ec8', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '557c80ced7e662d61af54fe72c914f1d915e1ad6', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: 'b9c811d8ec2c25890615d5fdb2b1374dc777d996', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '8769cfb33678d93212700f2e67d7c811ff51b4dc', class: "ir-revenue-row-detail__meta" }, h("div", { key: '79e2e929818e46dc24e15a2c37980ea4f76414a2', class: "ir-revenue-row-detail__user" }, h("span", { key: '6dc9adefd19e2f2bff237bca14f9e4c935f5a02b', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: 'cea16e3a3451cab6bd828efb1eba8e88399eb181', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '9f9a896efe513dbd4b8eb48a9e284225044f99bc', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: 'ca0fb3df7ed301342cd297d9d5407c37d0e7ce44', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: '65992d18bbb089c404b72db9a25ab753152da21f', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
