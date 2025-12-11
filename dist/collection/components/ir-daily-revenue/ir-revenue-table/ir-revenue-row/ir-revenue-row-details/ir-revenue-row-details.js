import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: 'a55cd29172535e4e52a88c7e8974cb2a51b3c8d9' }, h("div", { key: '85294d7dc5c92ca9babd39f65725327dd9dff3a6', class: "ir-revenue-row-detail" }, h("div", { key: '49b268a3304b3df73a83f1bf9e371aebfcc1c2d0', class: "ir-revenue-row-detail__info" }, h("div", { key: 'afd39866af7bc015c232a6b1c6e04fc449045317', class: "ir-revenue-row-detail__time" }, h("span", { key: '801f9cbb4918e79a9bdfea904477ea5c6854941c', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '60faffdebe617f8161a7f8531a3940e41dd09245', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '857e233161a75e463a2e7697e92d1586bc748d26', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: 'fb29fd0f09580ca570214523743146532f366646', class: "ir-revenue-row-detail__meta" }, h("div", { key: '877e639050738784bbb232861256d68a00d8d491', class: "ir-revenue-row-detail__user" }, h("span", { key: 'd784e125317fc08d978f241e06ef1606a51adad7', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: 'cf9ea1f2955c47aa0323470ab52649810ad62fce', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '194632f307e847e46c3fdf04dce4148058d4031f', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '468361500d920f218348feaa303d65884caea128', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: 'eaf865b1719a73661d78c39eebb0f1ad49205cfd', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
