import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    render() {
        return (h(Host, { key: 'c90e787baf2f8b5cbc0293b0d060a078b9646e50' }, h("div", { key: '36fdfc190745272c1fa806374606013dfda0deed', class: "ir-revenue-row-detail" }, h("div", { key: 'ac9275c7ac43c9677a7621fccdd360c117520a3a', class: "ir-revenue-row-detail__info" }, h("div", { key: '423ec12eb23be122fb2247a8735f85e7e946d6dd', class: "ir-revenue-row-detail__time" }, h("span", { key: '297cddf9942b8b1c1b90675c14ac4499edbb50a9', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '46e642349340c445d4a64e17e141e6be91eb9124', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '5094db564e4bffa2c8bdef49adb95f810bea4d08', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '1e0f776654c6c9ffe8d87b48db483cd2a35a178a', class: "ir-revenue-row-detail__meta" }, h("div", { key: '9842abcbaa776f88120bc4ea38d7e99f28203455', class: "ir-revenue-row-detail__user" }, h("span", { key: 'e9b6d527c6816609575e8eeb9ac4b775c631ea75', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '4ba0e520467a7b40555f2e194f4d85bd4a6f71f4', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: 'a6fee09cc994f48d7691dc811be334c70def5db0', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '409c5a3460cd1d43b1056c4fdcc0dd7089789e35', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: '30f9711fead9ff6f3f03d522593187cd12d52fdc', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
