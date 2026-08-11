import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '2fedad83706c8967eeee0dcbf2407dae1277e5cc' }, h("div", { key: '8869b1c0598c5a2853ca13800e0b4ffe2d7d1858', class: "ir-revenue-row-detail" }, h("div", { key: 'd0bd767f2bf819448ffe26d580354da58f57531e', class: "ir-revenue-row-detail__info" }, h("div", { key: '325963ed6e23415c98fec1c0cdb90a37dd8bc190', class: "ir-revenue-row-detail__time" }, h("span", { key: 'd1b4d85524db66871770701cb8b5df6429a88524', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '6275bb39a628a6fab98c21c54dd389974200d568', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: 'f881d30aefc228cbe439681d7eb33eddb232c4b8', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '204d12f93168877355ca4eb8a2d2184c8d1627e7', class: "ir-revenue-row-detail__meta" }, h("div", { key: '9f12caa9d4701b03e5322709b89142baac29ceb2', class: "ir-revenue-row-detail__user" }, h("span", { key: '60be520194543299985bac9d16afef37fa70458a', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: 'ad0d0a45a39f56e0b33e7b8b33bbf7e6acc8e3d5', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '3ab8501db28c2ed473e7d853187480e8d2412853', class: "ir-revenue-row-detail__booking" }, h("ir-custom-button", { key: 'df0dbbefb920c3ce42505f1b829013518f6d8e0e', link: true, style: { marginLeft: '1rem' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            } }, this.payment.bookingNbr)))), h("div", { key: '77338df2de067bd77554d56beae31ba583ba9de7', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
                            "id": "src/components.d.ts::FolioPayment",
                            "referenceLocation": "FolioPayment"
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
                            "id": "src/components/ir-daily-revenue/types.ts::SidebarOpenEvent",
                            "referenceLocation": "SidebarOpenEvent"
                        }
                    }
                }
            }];
    }
}
