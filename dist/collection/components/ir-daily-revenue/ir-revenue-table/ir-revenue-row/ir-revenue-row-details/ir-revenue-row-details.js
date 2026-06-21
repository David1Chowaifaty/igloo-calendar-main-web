import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '17e56b47012b732e5281f3ceb4af94c5886a97d2' }, h("div", { key: 'dc04bdc45adaf39c189e289195d854a06b211c7e', class: "ir-revenue-row-detail" }, h("div", { key: 'b3875e02c469cc7df5e7ff164b2d5c92ef3e9230', class: "ir-revenue-row-detail__info" }, h("div", { key: 'c49c90a1759aba212ddc96ea8234984651cf79a2', class: "ir-revenue-row-detail__time" }, h("span", { key: '9ff86a421529ec8e395a513084d60269f18b59e7', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: 'ac42f5088a23bde54cf764fb4aa8acc6ba2f1697', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: 'f009478f3bf46cb109ec0302626141856dd9fe5a', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '5903d0cca6bb1f59b7e6c3943cd4bf59d6d9a3c0', class: "ir-revenue-row-detail__meta" }, h("div", { key: 'fd77000596d544016e44a7fe73863078402596a5', class: "ir-revenue-row-detail__user" }, h("span", { key: 'e95744aee851f0dddd176c6ad88f48d72ce1cf9b', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: 'be34378288af85f239216c67f8d2aab3db9b69c3', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '4af24ae6f3445cbebb83c18780c17422a57b579d', class: "ir-revenue-row-detail__booking" }, h("ir-custom-button", { key: 'a09a7e58f0ea61277bb08189733dd5e233d452df', link: true, style: { marginLeft: '1rem' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            } }, this.payment.bookingNbr)))), h("div", { key: '5d93751657536cb8fde7f406bff4b7ef182f8aa3', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
