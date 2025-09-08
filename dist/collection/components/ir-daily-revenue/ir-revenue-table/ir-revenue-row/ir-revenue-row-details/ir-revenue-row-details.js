import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    render() {
        return (h(Host, { key: '824aff8a90c32d665145e5be7e7c1dc67d39d7a4' }, h("div", { key: '6700a1d39bc5d6022124ac74e6400b1e11908e74', class: "ir-revenue-row-detail" }, h("div", { key: '63f91982a602f49af2e744d9fd4ec47ea96ddcf2', class: "ir-revenue-row-detail__time" }, h("span", { key: '7c60def9fc0795119f1bafc89d7d500b08a0de9f', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '0c9f787ef47dd24fd4afe19887393440f6c2e733', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: 'bd988a5e2ac2cf06f006a803eee896f8805b9171', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '8a733fbfd88b83087ad4a8fa2e65bae6929f29cb', class: "ir-revenue-row-detail__meta" }, h("div", { key: 'ad725ae7ec4e182bf354e6b2e93e3e9c39ba9b5d', class: "ir-revenue-row-detail__user" }, h("span", { key: '90343f4808a94ba616dd9b6b9c2e1e66c0797cb0', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: 'dc19ffc64861fd233c2db29dcd45bfa2a96a3ca6', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '6b41146116da27eac8582d22b15f71724e194202', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: 'e1f9766b7991b34b59610cc4bd04387d5b2bceae', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } }))), h("div", { key: '36e82461506b7520b07d7b7edfb0f80764361feb', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
