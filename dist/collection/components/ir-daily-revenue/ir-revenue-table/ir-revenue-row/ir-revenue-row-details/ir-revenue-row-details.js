import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    render() {
        return (h(Host, { key: '49c0b363d59ae3dc48e6a3afcedfe213862e1c45' }, h("div", { key: 'c246038affd395a479660164ec8b0ffacc5ccd72', class: "ir-revenue-row-detail" }, h("div", { key: '0f1ced9d56a787271c0294adb12a22a57e93918d', class: "ir-revenue-row-detail__info" }, h("div", { key: 'f347c9fb4c8bba62c82d9f1c821d5d7d389a505c', class: "ir-revenue-row-detail__time" }, h("span", { key: 'ee1a6f176c5ce394cb14dd3ac5ba7544e869efa4', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '73307993a6c0caade1abdf3edce568383ef3e828', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '0ada5221661f72afe2b98dac3c72d3226d4f74be', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '4b147f4dbd500b378c3fc650d645d822aa50acec', class: "ir-revenue-row-detail__meta" }, h("div", { key: '5fe837f092f608126882a8b553a4fc1b3bc9a02c', class: "ir-revenue-row-detail__user" }, h("span", { key: '5acf0fa14eabb98b2b47ae7f249cd0f11416cf36', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: 'e2898e52f51450880d93d4db4b682152e4f18265', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '3492080c779c81cf5093ae91d1e5db8266f750de', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: 'bc7c17f5f61ebb0d5d8aa8a0dbbf05a27df324bd', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: '83b451a3a0ff6ce8123d27bcd639c8ad1cac5ad8', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
