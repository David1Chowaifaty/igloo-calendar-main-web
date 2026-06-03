import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '3aa1a23913252314edd7e1cb9ffe285882d51cce' }, h("div", { key: '5c78ce6f40bc790512c8eb291a742cc6e9192a07', class: "ir-revenue-row-detail" }, h("div", { key: '87e7307a5ce61b724f7b85f0875c71d7bbd537da', class: "ir-revenue-row-detail__info" }, h("div", { key: '4a5cb9e4a0eb1a30d6c746b238f5267bb66096e6', class: "ir-revenue-row-detail__time" }, h("span", { key: '7be6baed2a6a5602dd6277fbdcd6203b95249b20', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: 'ec39fb1f57fcbab1aad3ca9b06c96e4a4cd3d477', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '05b4c81d90070637499666ffd32245ee79686bef', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: 'c7724e43fd4bd80378da03862135d96795c79d7c', class: "ir-revenue-row-detail__meta" }, h("div", { key: 'c97beaba0db108995007157e1c148fbe1a41e6ac', class: "ir-revenue-row-detail__user" }, h("span", { key: 'f9f1a371b36d7f87104d3502d5e1171109a6af13', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '69a4d9be8480811f0b634e632497c48ed8467fe2', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '4ba91bc09cf976e0194bb7cff944a226201d2ed9', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '3405a9e9c38f9a7f2142b830a0fe2243b45f53df', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: 'd6a221f01e50d2e268bfa6922d5838a7320c283e', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
