import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '9193b1bc95b4060cbdc872bb1642fbd11eb729d8' }, h("div", { key: 'b8d7f13b80d7a1380c54b5d0b92f70474181d3f3', class: "ir-revenue-row-detail" }, h("div", { key: 'c881e9daf4beda1f38d6b7d8591325bdae237be8', class: "ir-revenue-row-detail__info" }, h("div", { key: 'faf6e79e18d676dce2d806b041366f91e79d1906', class: "ir-revenue-row-detail__time" }, h("span", { key: '485635bcbf23244b20db63192a33bc5b403f6ebc', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '3b9c91144d36da767a1b903ce617662f75e4bb57', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: 'c333308b95b4875affd93fe92b0fa9d7a531e385', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '7f5e1853457a9bf00a96ed2f0809f00c3149faaf', class: "ir-revenue-row-detail__meta" }, h("div", { key: 'b52de5c05b0bea27af0018a94907166021378918', class: "ir-revenue-row-detail__user" }, h("span", { key: 'a8ff893f8809b400a830301129a0347d2f49ec8c', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: 'b3f16162b62db4aff3a8211086e11c3dc5f9d7b0', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '14a130f46e277fd1013f0e999f15626c6bb376cb', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '056f2ea5e172c6b7863199f8228a20ceca1ab6b6', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: 'ec0d298d30b39c41790456e5bf5e67698ef6126b', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
