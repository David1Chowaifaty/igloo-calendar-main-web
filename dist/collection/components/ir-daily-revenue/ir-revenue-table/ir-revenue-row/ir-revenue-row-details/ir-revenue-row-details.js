import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: 'a383dd8d637b896a9bc8eba5fb8ddb546fac966b' }, h("div", { key: '5ee6d26fb4637e3b1de6ca039724ff7d28382d10', class: "ir-revenue-row-detail" }, h("div", { key: 'aeebd2afa316c4b7b434e16d8a406119e03b1bc4', class: "ir-revenue-row-detail__info" }, h("div", { key: '5951c08642a6b3915a42bcabcefc5b1c020899da', class: "ir-revenue-row-detail__time" }, h("span", { key: '79fdd397dd7b938aba0aca82a863a2823a123888', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: 'e915901d7d62be03500c317cc4094157a5c26f64', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '76463d0735144175503e54476d42cf70dddb20df', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '2b08ef35682eb6d6320ee8dbfd45bdbad3d7ac0f', class: "ir-revenue-row-detail__meta" }, h("div", { key: '595b426afaf38941b7fd03de87dddacf41cf4fe2', class: "ir-revenue-row-detail__user" }, h("span", { key: 'f867fdd774149443b9ec6f54cf5031c35edfd42b', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '505bb33de4aa4b9cb31796f46357b5aae982e0ff', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '3df27c925478506d6d63ff241598c8e728fc0965', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '0d248195602a3a97c2e398d51c9821a6b5361e4b', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: '80036feaf8844611cedf2d7730c06c66ab6f8c77', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
