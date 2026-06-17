import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '3b9223034342a37c8228c7b90af9f5e39352225b' }, h("div", { key: '3eff717e3fae3fb42cdb4dd7e896bd3b942b37de', class: "ir-revenue-row-detail" }, h("div", { key: '87f80a26ddf3d823bfbb94786a092c3006e3726f', class: "ir-revenue-row-detail__info" }, h("div", { key: 'e97fef7630224b68f32ff7f626ba46c933913457', class: "ir-revenue-row-detail__time" }, h("span", { key: '153af5930bb5505894a7a342caf44136e5a6e44c', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '9b20d7e358663b010f28f08ef99472965574e6db', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '64bbb4d49fb362321eefc43a6f472015273c84e1', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: 'b278e3e98fba4e79eefcf8ce3c23eb6b56c0add8', class: "ir-revenue-row-detail__meta" }, h("div", { key: '7388c221dfa8bfbe26898252432d4c15bd571162', class: "ir-revenue-row-detail__user" }, h("span", { key: '72b792d50df0b4661231f0c1456692595764173c', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: 'c094c16d7e074287e46fc88096f2615660f5964a', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: 'de573d88ea72f69d1a2c35ac234c9e34e0fb31fb', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '39466db3704cf899b039f6b6b1fc2b38e8a4f40e', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: 'ac4485e0cd6c3a21fb9f71b618eebb2f9eceeb26', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
