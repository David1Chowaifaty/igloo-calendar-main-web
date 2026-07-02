import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: 'eba41834046b8e5a7486db2e1d3828593200d0a0' }, h("div", { key: '9588996e393eec09f6e5f02ffcee982292e30031', class: "ir-revenue-row-detail" }, h("div", { key: '209ca90017ca1790e2e3538971317681be97990c', class: "ir-revenue-row-detail__info" }, h("div", { key: 'c0b38e2b660599cbf58759432fc52d4237fed8c7', class: "ir-revenue-row-detail__time" }, h("span", { key: '04ce4189a656e5c5626b84a0e525a6355339207c', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '7f6b29ad0ea1afbd6b2bdd20f3340af7ea9c5496', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '22e51f760b14cb0189b4fe088930643b76cd1181', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '5e99b694caf37210a8ed8fa0ba2f31866ca5d0b8', class: "ir-revenue-row-detail__meta" }, h("div", { key: '2172fba7b51367b85d98f37791fee09b687b095f', class: "ir-revenue-row-detail__user" }, h("span", { key: '934c0e701e1fed81cccc7fbaf92b8ecb288b67c7', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '1bdf8fd80c9836e05a2ab78974181bd1a8aca0a4', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '6351dcdbc89710ea13fbe2c7d299783eb7e791f8', class: "ir-revenue-row-detail__booking" }, h("ir-custom-button", { key: '3f316d0e654fae36a57a88f95a249c1f8733374d', link: true, style: { marginLeft: '1rem' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            } }, this.payment.bookingNbr)))), h("div", { key: '3bede815b5df21edfd45dee27d85664c63b72e76', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
