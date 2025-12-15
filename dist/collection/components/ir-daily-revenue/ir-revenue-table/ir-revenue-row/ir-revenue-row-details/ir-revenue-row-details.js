import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: 'ee663f45c1c47e56d6c25f1c75d36087fbbbda5a' }, h("div", { key: '8d3f6777f7514772ba32cf49404ac93380f5f9e9', class: "ir-revenue-row-detail" }, h("div", { key: '336ab4039d6ba879c3ea12519bc21ec72b6902dd', class: "ir-revenue-row-detail__info" }, h("div", { key: '631f2b7c847476693b54285b9945cd2c43919d1f', class: "ir-revenue-row-detail__time" }, h("span", { key: '1690a53610d7ca732d6033f0f8bdc22c3c962098', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '65dacb49c02b4224f4146c10576f183f20e83f95', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: 'b82625d68f12632990f13de612ea99da23046758', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: 'fcba230b64d269151180a6dbcdbfacf0b235d719', class: "ir-revenue-row-detail__meta" }, h("div", { key: 'c857d96ca2a59266f7351ed5dafd798ccc918385', class: "ir-revenue-row-detail__user" }, h("span", { key: 'a033a867219aaf4f53b9b7f81819b998dfbbd004', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '606058295b6b51f9e463b781919afb56dfe43f09', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '0d907ba88e3eb5560383ab3d2ea048eae7fd6ea5', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: 'f62ed646ab96c01acee999f035c83bc242a5f0cd', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: '2383849ba2114aef233b6a019aa1da52490cb822', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
