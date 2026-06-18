import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: 'c8d8de9cbf59dee745c35cafef23c1a9250d28ec' }, h("div", { key: '82f18977f3cd34a0c00e1ecfd4e269b0cac06ad7', class: "ir-revenue-row-detail" }, h("div", { key: '0be465f0fec190af39f397e35c7ab9da57910bb1', class: "ir-revenue-row-detail__info" }, h("div", { key: 'fafef7b8e73585525c70b3808a22f4322c5a24c6', class: "ir-revenue-row-detail__time" }, h("span", { key: '8a4c045aab19d3bc2b83a9c89866c251f193991d', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '9379b6effce0aca7ba556b81b07a120c15223d49', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '8251d4747f19bbc854c8b49ecb9ac1fc3c906f32', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: 'afcdebc4ddcf6df91b60e10d9cf545ae0b66597a', class: "ir-revenue-row-detail__meta" }, h("div", { key: '15f9cd871384d88d970078ec1a29473cba005d35', class: "ir-revenue-row-detail__user" }, h("span", { key: '45bc8cdbeb4c23446c7017b7e0eba0291076f4a4', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '6bde1d115379d7c292e59b33fa97a46f0193947d', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: 'f9192f68237951e330a9fec74572013e311fbf5c', class: "ir-revenue-row-detail__booking" }, h("ir-custom-button", { key: 'b4f31d6577397a1193f370da4b39e232523cb1e5', link: true, style: { marginLeft: '1rem' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            } }, this.payment.bookingNbr)))), h("div", { key: 'a9ba64386b525accb0288443f864215b5cbbe9fa', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
