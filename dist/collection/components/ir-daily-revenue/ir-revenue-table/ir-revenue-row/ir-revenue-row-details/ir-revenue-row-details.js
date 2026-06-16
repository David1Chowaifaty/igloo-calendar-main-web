import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: 'fc982aa1da4cb8b50eab15bb8b8d67effabb27b3' }, h("div", { key: '8e91a58369695cae0e33158282a3e802afec79a9', class: "ir-revenue-row-detail" }, h("div", { key: '8d060af44ba513d154cc4f9d93abf6b114eaef04', class: "ir-revenue-row-detail__info" }, h("div", { key: '1ce87edf6d45f7d2404da35f47b55d274f3265e7', class: "ir-revenue-row-detail__time" }, h("span", { key: '0f4566a309672e2fc3d8517bffc030a5bfec3247', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '31c8b6c349bca25c4da09fbf2312a204697fa4e8', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '3ca108ebad5547c096f2644bec8bd11c9b53b04d', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: 'c1fcb6b403e83e3a5363b0f913a534a5dfdb34e8', class: "ir-revenue-row-detail__meta" }, h("div", { key: '801b620f9de8e72b6cdbf30a686cc2c61765e285', class: "ir-revenue-row-detail__user" }, h("span", { key: '5d361be7951155cb3b3904abc0b5fa668a6c10d1', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '5201f72811041855a979c36e4e9c76cfe27e3397', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '626a079363afcc3d087cc80e04d95485fd30c01f', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '169e68bfd21ecbc941825a05f74a8bd5b920c4ec', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: '933341beba73112217d31f6946c0ca7d838e5d31', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
