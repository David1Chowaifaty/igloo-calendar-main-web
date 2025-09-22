import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    render() {
        return (h(Host, { key: '571e8e47a4e1fcabc4facc62d50e5bbbfd1fca1e' }, h("div", { key: '42acc6ef3167433e5860cc16cf4682213be251a1', class: "ir-revenue-row-detail" }, h("div", { key: 'eeff66c320f2a234b9b18ca8e023311cdbb815b1', class: "ir-revenue-row-detail__info" }, h("div", { key: '5806c156b1417518186d95fd0e728b31139ae1a8', class: "ir-revenue-row-detail__time" }, h("span", { key: '8a544827115d64da2780e36d9a5d4367b3d3ee6c', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '1d8cbd0c66ac53441c43698f9127418656744c51', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: 'd65df94fab900280b486d8b98f81bdd964697102', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '89d1990554fd9ceef2bce3adbd5ee93576802b38', class: "ir-revenue-row-detail__meta" }, h("div", { key: '764efad973523348a4d6e3fd36c21dede7353505', class: "ir-revenue-row-detail__user" }, h("span", { key: '15460a3f377e586f2f1722243a0911d1be6345ff', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '8d3df9b1f44724526a12c3db0a53ce2ee36291ac', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '7f4f0885618286a33cb43bccd54184dacbb3b217', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '725dbd2bfc7255e2d5a57c448f8563b62b13c77b', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: '52c2bc288ff4a62baa01f6ba92a026d364f17f67', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
