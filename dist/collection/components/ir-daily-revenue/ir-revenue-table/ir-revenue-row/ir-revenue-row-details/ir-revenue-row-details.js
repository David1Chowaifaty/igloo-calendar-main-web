import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '553ba91dc7a1b68f4ddd3a3de41969cc054ada02' }, h("div", { key: '5271ae34e242d10e63cadc56d750d382358096fd', class: "ir-revenue-row-detail" }, h("div", { key: 'fd5e3317c2db8d8dc6223d8a1c7b58d93cbd5c26', class: "ir-revenue-row-detail__info" }, h("div", { key: '9d268cddf41d436e596e8501f15e71cc0073002c', class: "ir-revenue-row-detail__time" }, h("span", { key: '090d0f40dca3cc96eee45b95e7568304a72138c0', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '8eec4b33ebf3a32ec83910df580f048f374c3e99', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '3de70d4268d3a6cb9eed9582db52d21a3135289f', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '643260713acee2fd3611056e9dfb0c0e0f6d2e3b', class: "ir-revenue-row-detail__meta" }, h("div", { key: '9a9545b6899626773eb197ecf1ea03c1ff4f6169', class: "ir-revenue-row-detail__user" }, h("span", { key: 'c5b2b6beb82523df53650c750c3c9e40768e8e4d', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '895062e72747c234ddf50d3dbf2d4b4f13026912', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '4ca762acb16cdc58b429653e221ab6dd9810d99e', class: "ir-revenue-row-detail__booking" }, h("ir-custom-button", { key: 'c8de9a094e73971a936c4dc8c7a98df65187c074', link: true, style: { marginLeft: '1rem' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            } }, this.payment.bookingNbr)))), h("div", { key: '95392600cf5d516d3d3f8694dfc662fd0bd5c019', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
