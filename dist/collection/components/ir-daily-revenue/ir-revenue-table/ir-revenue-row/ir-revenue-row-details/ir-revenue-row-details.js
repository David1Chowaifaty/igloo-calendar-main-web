import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '0698586fbbcfa1b3ab6fcce913eb5922ce64893d' }, h("div", { key: '221efe1d01fed7145f0b5990e5d8b860d9c24d4e', class: "ir-revenue-row-detail" }, h("div", { key: 'e1c0a7f2234c17ed8d41df231cc7fb3cf67dd800', class: "ir-revenue-row-detail__info" }, h("div", { key: 'b12ac7a2e0ff8dafe54b9715a4ddb315400c311d', class: "ir-revenue-row-detail__time" }, h("span", { key: 'ff5792c93d7aae0be690598bb1e5806bba26da9d', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '2b0e1207c95a9609ed119c730c5399cdd50a0483', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: 'd1365b5d4626c93dcbe136a1cf91d3456d303f8e', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: 'e112d5f1e86d787c12eebd1e73db866950496b9f', class: "ir-revenue-row-detail__meta" }, h("div", { key: '8f453b05ee947e6c6f7ab00976efa4a50203c7a7', class: "ir-revenue-row-detail__user" }, h("span", { key: '18f9a2226fd527df2c7a7cc0471a39bbedb426e1', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: 'd65ff7313c67f9dd901a5f32a863002ecf52ad59', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: 'cafa77d4d36371082cb33c89682f98a99619792f', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '18536fdc52053838611270ff15d881e2c58129a9', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: '4da8e02f7de3e595acc027c9de56e9c625dbcb82', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
