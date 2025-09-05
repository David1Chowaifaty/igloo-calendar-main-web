import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    render() {
        return (h(Host, { key: '60f8f7be510da3bc8c931616d62a459ea263393f' }, h("div", { key: 'f1a067c53db6ee624e021488c0611b95e576d0c8', class: "ir-revenue-row-detail" }, h("div", { key: 'e8a4d0d1f06b529110af30321b0b8b4bdaa1b432', class: "ir-revenue-row-detail__time" }, h("span", { key: '1164fa99b832092d08eebb77cc9dd389e9c95604', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '35f12be860920940f130fce96a8c30759827bb7d', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '2146c3c96deab0c7cce967775ac7936c36210457', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: 'd477b15299fe90e3dff9c509e05d2c67e636429d', class: "ir-revenue-row-detail__meta" }, h("div", { key: '4bf69431f972098991ab656e96f721c1cf7ce5bc', class: "ir-revenue-row-detail__user" }, h("span", { key: '1b52c66430818bc37f2045e0b8d2aea16c97ae44', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '7032fdadaa076123c5cc6657a59bc5411e5a529d', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: 'fbd108b7345794c6f7fac5e6b27ff64d4e167965', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: 'e55ee325d8403c653bf12acdaafd6abc7073ba94', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } }))), h("div", { key: 'bb0befe19bf3e935d75e3f87e2286b8e265500dc', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
