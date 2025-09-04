import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    render() {
        return (h(Host, { key: '05891c69d447b979bbafe9cc315ef43e5eb89fb3' }, h("div", { key: '72909914bf01f395d0eeaaf4f14c3367c969b36d', class: "ir-revenue-row-detail" }, h("div", { key: '85efefe996a546532cb7309a7d4cc58ce3d84fe6', class: "ir-revenue-row-detail__time" }, h("span", { key: 'd781d4399873c7b5ab39bdb9fff80fde3ab4e119', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: 'e4d1d73a2c4b755b34931f6a5e576d732a7fceca', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: 'fe54af8416338b872200186602de4f20a6650197', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '1e567dc84294e6c08e82f9be3b9b0db6c047e0a2', class: "ir-revenue-row-detail__meta" }, h("div", { key: 'f8977322c70e5d0aff82fb9b6aaf0123e76e6f74', class: "ir-revenue-row-detail__user" }, h("span", { key: '1b408fbc4cb2c7568fec5d45de9a96fcd467d443', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '6ecae64ca5575fd3b1d0e3e0d63209f969704b78', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: 'cb596fff7b51b64f7ef6b474222f065cdc99a68b', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: 'f1cf128df7988ce0acb84bfdbdaf8c65011c6aff', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } }))), h("div", { key: '1430174540a58f4405a26ba42a45ee32488e549a', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
