import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    render() {
        return (h(Host, { key: '1ca09dad05bcac137b3840f63791f64ec6a00e01' }, h("div", { key: '0a973c0a1b23e8a6275ae6b6ec241a62ccee63b5', class: "ir-revenue-row-detail" }, h("div", { key: '2d0f11a410224807bd003a1ca48bc2e2fb6404d0', class: "ir-revenue-row-detail__time" }, h("span", { key: '86cc0bcfc87a2eb856ed137ab4a32f8a233b015f', class: "ir-revenue-row-detail__label" }, "Timestamp:"), h("span", { key: '622f31149e3d35ca9e26155ae8c98be6a4acb331', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString()))), h("div", { key: 'c55c68bf85388d787746c95c0a8e540bbd99b992', class: "ir-revenue-row-detail__user" }, h("span", { key: '1e6c095c3fd2e03d0efa4e195daa8e3c55570285', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '4b212e47003209f0580053e714a227232a2c8f8e', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '7651199deb62f9035305b27c0334e822a02f55ab', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: 'd5d37d74e42f7afc465005f963ba001151f46e1c', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })), h("div", { key: '638d6e41956a7a8f258fef82f645a2d589fd9ea5', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
