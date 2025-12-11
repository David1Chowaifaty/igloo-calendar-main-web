import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '94fd16fdfac59217d03a99b43e09715dfa13a88b' }, h("div", { key: 'e97884dafa8b26afa97cce8d5675318b4407f6f8', class: "ir-revenue-row-detail" }, h("div", { key: 'b2b71a6197a137c24673f312029dcf89d719eb3c', class: "ir-revenue-row-detail__info" }, h("div", { key: '424072d6f48bc0af25a320637075844ea45d085e', class: "ir-revenue-row-detail__time" }, h("span", { key: '3a8714f71080bf3aad704e175c9b9868102d56f7', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '37cd781cad102eb974a0b77318a918b0f2911abb', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '2c71d9e190f17478afb4a08af17f9c9c99e6b211', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '4cbabe66fed598c205560a946aa7147bfbfcd149', class: "ir-revenue-row-detail__meta" }, h("div", { key: '8d49531e6dd73fc6f03f60a6764a894166e7e690', class: "ir-revenue-row-detail__user" }, h("span", { key: '63ec28148989eed8191101b06e1d1af9e82ddac8', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '23b805353eec92c03e81cb5bacaae348f275cf7f', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '853ab0ca46cbc0d76bda692dd9ac2e1be2d7d77b', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '7c1467ba8838897f44137d79ef8e2d57f020b82b', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: 'c81f8181de4d8ebbc203fbf09bf56d2628df3271', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
