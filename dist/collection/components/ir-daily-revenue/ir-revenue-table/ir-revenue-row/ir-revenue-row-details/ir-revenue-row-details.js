import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '6dcd16275a8f8ba0c6a50fcffe5eb01cdb7e1ec4' }, h("div", { key: '9ae4912b17cf78f2be2867130c89485147b82aea', class: "ir-revenue-row-detail" }, h("div", { key: '02c2c0097de8e27f27e7f31eb0c706d4542554da', class: "ir-revenue-row-detail__info" }, h("div", { key: '5cbb966cd97d78214f75b1f6d3ee0ab3021fb54d', class: "ir-revenue-row-detail__time" }, h("span", { key: '3663a5f6ab5837c545ce621b31f2d2aec4f22dad', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '0d54e647b4693e47118bde2ffb972f88befef107', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '6b24431158b997205c5397c441fa0ba1e2a62b9a', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '26009d5b95acdff2cd4b201dbb1b41854c451f78', class: "ir-revenue-row-detail__meta" }, h("div", { key: 'b748888d3441670da7111ad882cef2fe5d15aef8', class: "ir-revenue-row-detail__user" }, h("span", { key: 'cd6ecae2a1a5bc7d4baa6ea85b4dcd815b86a069', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: 'c29e5db98d5160be63e880d1aa592cf7b9c54424', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: 'baf00b68cc19638ce5bedf29da0ef8af980c057d', class: "ir-revenue-row-detail__booking" }, h("ir-custom-button", { key: 'faf11e4bb6bd56ba573f5ff183d30b3085228478', link: true, style: { marginLeft: '1rem' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            } }, this.payment.bookingNbr)))), h("div", { key: '8625eb287000c328e7124548ba4a3e6e5f227ffd', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
