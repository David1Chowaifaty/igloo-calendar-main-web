import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    render() {
        return (h(Host, { key: 'a72d774a72bfaa3af5f87bf7daa527c1f2267d39' }, h("div", { key: '7632ab44276969121e1034d41d95cdf00d066742', class: "ir-revenue-row-detail" }, h("div", { key: 'cf9d2b0e7f19260541c227f4df89599d080bb9c7', class: "ir-revenue-row-detail__info" }, h("div", { key: 'f1614364aefb6e504f8763df327c62344052a5a8', class: "ir-revenue-row-detail__time" }, h("span", { key: 'd89c6f0c853fe0f30370f035d350471ebff22128', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '9c047a3107fe1263b617d0352e3c6825ab103071', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: 'f0d31f6c1f0bbc9fb8b8f9fe4b43606a8328aaca', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '624f14a685024a9e160e9d6c0418a1f777904c5a', class: "ir-revenue-row-detail__meta" }, h("div", { key: 'b648fdd11437bb774b88652755c41979db0b6234', class: "ir-revenue-row-detail__user" }, h("span", { key: '45d423d8bf3dfed0e1c5a61b136e36d7449596d2', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: 'ec7e487ac5df7d5b74370c2398822c3657e713f8', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: 'b1acc909de18b510bc9546d5d41f4d130e37b30a', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: 'f693780d8935c9b24bac5acbb15eebe55ab52e4a', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: 'e39bee77b2d632b712f9deb65a68ec0b816a0245', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
