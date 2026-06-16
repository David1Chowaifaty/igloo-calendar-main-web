import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: 'f21d3e8d651532178e760ff05b8324d80c089671' }, h("div", { key: '24a8c73fd74b8d98d78f6aa7df4e8bba0dd61fbe', class: "ir-revenue-row-detail" }, h("div", { key: 'bb3c74491d47d8f0d6e7f1842d19edb64e0e0d4d', class: "ir-revenue-row-detail__info" }, h("div", { key: '6c8d3c0fa4d35d10b9fb91be0d73c10c64dad712', class: "ir-revenue-row-detail__time" }, h("span", { key: 'f213e7501898747da45dea2dfbd9ec433fff8dda', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: 'ca05fcd3d85c83066ac6336e9d905d45113fca60', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: 'cbf7883d6b39e6888615158834a0417b58befd21', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '12d4e9589f7a38c695f38722f74e0c13101ea552', class: "ir-revenue-row-detail__meta" }, h("div", { key: '634eb9774da35d970a9798f8b57b7dc13da22912', class: "ir-revenue-row-detail__user" }, h("span", { key: 'd3a455339a33143364d3cb56dbc351d1e41c92d0', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '9fd0c61397262af808088b803b5e5d5f5f53334d', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: 'c06c25b8f637cd3a01ab5b42ea74cd6b3f654cd0', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '97689be94715014b2fc4747c13ba074c0744c073', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: '41207c66786535e511c6baa7d929347db05d102b', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
