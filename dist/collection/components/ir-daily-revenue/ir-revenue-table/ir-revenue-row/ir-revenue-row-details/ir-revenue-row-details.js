import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '41d27ecd8f27595a5d450c83a3a0e1d0037f325c' }, h("div", { key: '8f5df2c8b6c39011284e354e3d0aadb8fb392f3e', class: "ir-revenue-row-detail" }, h("div", { key: 'ce9dbbba26066f0dbeade0b27ee95feac9ccd6bc', class: "ir-revenue-row-detail__info" }, h("div", { key: '128a8771c1b944f4ef329d90e8855fa0e52db020', class: "ir-revenue-row-detail__time" }, h("span", { key: '183283a9a50b3f758985de9cb37e3cb958ecdf5e', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '78676f39a3fb4798c125a2af2c87731328e174a0', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: 'a4c459cc11f1b766720b336c362657a00736042f', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '53d7722b0c8d3f7fec2adf82d58c22bc2435aabc', class: "ir-revenue-row-detail__meta" }, h("div", { key: '826e80a24e0fc5dc3746b4f305099da20e533d0a', class: "ir-revenue-row-detail__user" }, h("span", { key: '92535d67ece4242c0a2021df5fea83adb9bc1617', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '3d2fe4bd0fb5b08bdcf78beb5b3bd7176bff2a1d', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '8861cd05080cacc621674e7ecb14208d44e7481a', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '5771f9665f70d0a6982f116391f29800fa8c1ec9', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: 'd2e250298f03b1a598b5e2409962aa0d9bc08287', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
