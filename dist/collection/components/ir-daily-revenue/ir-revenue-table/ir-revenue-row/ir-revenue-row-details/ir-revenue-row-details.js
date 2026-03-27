import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '6e8f30da809c1c6013707bff3486c3c93d2eaf56' }, h("div", { key: '5f8e5d4c5ebceb8063245942d9beb7353e1d1a9d', class: "ir-revenue-row-detail" }, h("div", { key: '3352c97b7165950eef8c0fc9d66c7f99ccf7a0e2', class: "ir-revenue-row-detail__info" }, h("div", { key: 'd954cb67349699a8cc07af5bdf70cce5ebb6e4d8', class: "ir-revenue-row-detail__time" }, h("span", { key: '78d6eccc448ffdec6253b5a3e7533c3b3f78425d', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '8b6412995e527e87a96d1717c234ad76b0b11991', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '0b9ec24e14981078aaaf85e4e148a51d2bb394b9', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '5bcfcd43ef0ba84c8ee900ff135b023edfbee082', class: "ir-revenue-row-detail__meta" }, h("div", { key: 'ec8a862d2f2fcaf2afbcd5d41b37933d775cb3e5', class: "ir-revenue-row-detail__user" }, h("span", { key: '504c531b0ebf0a06b894f344c3df52689592214c', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '3dc83241390c06dff27d83f9f88d6c5af37a7505', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '99e062bc8950d5f510e32f1465ab392854733be6', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '2a3e9baad2c74bcc5c549517145049265ad0b40c', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: '9405b794d6bcdcc84706a9bb53cd00f771322077', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
