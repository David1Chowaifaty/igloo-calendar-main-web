import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '4c03eddeca9be75e3924e0155888c3d2214d94ba' }, h("div", { key: 'a2deffe7a5749b7721f1867ef20f0722814d17d0', class: "ir-revenue-row-detail" }, h("div", { key: '89225276c0346b1b1ec66098d013241b657c5691', class: "ir-revenue-row-detail__info" }, h("div", { key: 'b38151b54d8cd3981c10f45fcd022cae4abe39c0', class: "ir-revenue-row-detail__time" }, h("span", { key: 'ff7c6e1aa8659c585c5a3b63ae7d37f46e4116cb', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '75c4c6a5df6d140e23304a061dadeb8fdfdeb311', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '36a5cfbb93198392090820272b14153ae7825c1a', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '6f555d17a846270e475903a49b9e27a94b7a250a', class: "ir-revenue-row-detail__meta" }, h("div", { key: '7a0972e4e7595ad9272a30d3d7d4284a22f37670', class: "ir-revenue-row-detail__user" }, h("span", { key: 'ebc4dd80880af6662e779f3449232a938fb0f087', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '65f60fdd8b10c5ebfed500dd33c34093cbc9a802', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: 'd9d31abdff1e65bac1d40f22b752b0c0080345a1', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: 'e095cdaeee4f30e43dba96841296fbc11bb45e57', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: 'ec5e335a000f2c21baa0f58018f64330e9296ec7', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
