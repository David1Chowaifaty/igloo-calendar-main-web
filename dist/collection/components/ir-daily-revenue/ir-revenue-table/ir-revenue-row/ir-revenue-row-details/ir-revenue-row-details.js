import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: 'c970412194e5e43fa463026772bb9ed72f591e16' }, h("div", { key: 'bfc3c3ca2a0abae9909b9bc7b7fba97f19cdff52', class: "ir-revenue-row-detail" }, h("div", { key: '05a63327df778e65ae8a871f46b7be562b428b03', class: "ir-revenue-row-detail__info" }, h("div", { key: 'b3f16475fc17d8aa05b740604d5670ffecff6c73', class: "ir-revenue-row-detail__time" }, h("span", { key: '6de9c19860e99efef46c4478ad412cbb1f03738c', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: 'bed2fd091258025a8be1240b28269d15217de05c', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: 'cca4f4987b9d83f7ed1d74fc8941de63b5d6d2d3', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: 'f9dd48e838ae9cca30b23d63e7e19345b4e971db', class: "ir-revenue-row-detail__meta" }, h("div", { key: '700ec76a56e778354dd419f87254dbfbcf6c279a', class: "ir-revenue-row-detail__user" }, h("span", { key: 'f90bb6425796777f64ee4f6f181907f28da73246', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '6f421de3739c68ccb80e2844b3b2872b7609a8dd', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '8c41b999bfefccebde96cf9a9bf86949aeb438e3', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '77652550708fd64fb5d2c366fc22c48eab2aaabc', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: 'b75bc007660ef45fc875dab54668c278a433a69c', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
