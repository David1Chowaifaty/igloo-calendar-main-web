import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    render() {
        return (h(Host, { key: '1b6b88246c1b2b35d82647c7139dc91ec1e15dd4' }, h("div", { key: '29c3043765824b8123654bd0fb3d51fd8094d365', class: "ir-revenue-row-detail" }, h("div", { key: '3aeeb4bcc77485ed48fe0b0caeb318fca3400932', class: "ir-revenue-row-detail__info" }, h("div", { key: '641f8853b80dd32fccc92e313e19857b624437df', class: "ir-revenue-row-detail__time" }, h("span", { key: '0bc5e8d80f528b95b87433ebd01b86514e244582', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '2e2c465cfb3178d470b7c704fdfea82706fda1b0', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '00c5aa2d8095148b13174cb5bf98f2e3344c33f3', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '35e654eb8dc0e4a30ab9244c1ce891dd7896748e', class: "ir-revenue-row-detail__meta" }, h("div", { key: '2154a67bf8176444a5fbc7289740a037c557e356', class: "ir-revenue-row-detail__user" }, h("span", { key: '1bcf75561b7bcd0b87cf61ed236a35efcea16dad', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '8546f610877b53f2d53321fd533d67cdbf0b2d85', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: 'aacaa2edfffe65e449add3594f2ec6b46c7b446c', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '5a1fcd67c4baed8c010ff52751decea6d60a23f0', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: '560d1d759e5f9548b12f7c89e694e595d082da61', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
