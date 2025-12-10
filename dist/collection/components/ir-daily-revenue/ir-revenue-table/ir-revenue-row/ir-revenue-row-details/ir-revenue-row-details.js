import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '55a1a2a9aee7903a5626dd57202d0407e4716acc' }, h("div", { key: 'c837eb36ae8180be0b8f1b2a98a9c5ae5c80c02c', class: "ir-revenue-row-detail" }, h("div", { key: 'd2734d11e0d3b88ebcd56964c574c73a4f60c8ea', class: "ir-revenue-row-detail__info" }, h("div", { key: 'db2d1edda4c97a70df95a792c5f36f5f39eafd94', class: "ir-revenue-row-detail__time" }, h("span", { key: '6a720b350886d83e5e2552530769ff5eb17e315d', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '7b2e8eb8b813f73aa3b73720bf854944a06c3da4', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: 'bf30823a5d6941e380a684719512250c10cd998d', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: 'd677b497ceffc4ae66984a3c6853160b1663c497', class: "ir-revenue-row-detail__meta" }, h("div", { key: '94a3b454c04c6a041acb48fc3bbb394adbde10ff', class: "ir-revenue-row-detail__user" }, h("span", { key: '4748f7bf0537890ea833800fa3d46012c3f42509', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: 'ffe664264171452d63f58c0628bde3fe2dd44148', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: 'b3270e7c3e0e6e8591c8acf7d83b13ea733e68b3', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '5d07d7af4c907389a7687b0442a7d80ce74d642a', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: 'eec0d50a7e7dbb9d7f2288d06cdda4a3ae47e756', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
