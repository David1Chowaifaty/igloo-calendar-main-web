import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: 'fcee7135d97e77549493b91c5c17aa6310dea036' }, h("div", { key: '089ad44977893f7ea24680be6d42e2509d58b433', class: "ir-revenue-row-detail" }, h("div", { key: '3106b539dfe488621615a0e3ea21da249b8274bf', class: "ir-revenue-row-detail__info" }, h("div", { key: '5e57d79c6cee8b6f4819f31e46014bcd88723224', class: "ir-revenue-row-detail__time" }, h("span", { key: '9eeec63cb3815e2e0f936334cb9b1d54d26651d0', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '836bfdec54c368384bbe209967074af3469b84a7', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '00b846c9de961441b669b9564ac237acb3f91346', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: 'c5358617b55fbf0623ca1ea5e36abb8ab85729fa', class: "ir-revenue-row-detail__meta" }, h("div", { key: 'a37870b3cb3e9ca284224ef1e317816cc0537b98', class: "ir-revenue-row-detail__user" }, h("span", { key: 'bc7a1d445025ca97648230eccba7ce0b0599ac4e', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '341d53de5d50748411c2335ed4d4d3105a0df246', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: 'c6b1abeedc63a348fa38e8b5af0cc9c9ab275a29', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: 'cd3370fbf90389a9d036bb377b08ece7f0bb1b90', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: 'fa1eba23d2af76e44ef4ea6503789a57a18c5c24', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
