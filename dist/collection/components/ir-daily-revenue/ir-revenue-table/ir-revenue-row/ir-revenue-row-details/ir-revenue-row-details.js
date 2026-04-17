import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: 'c76d04b247f6d7e5de5f4aaad19088ef9ee5e76f' }, h("div", { key: '491ec2857963f66b4b088c79168922bcd8498fc0', class: "ir-revenue-row-detail" }, h("div", { key: '70237a4946ac36ae455904e1c13052a6a9f38670', class: "ir-revenue-row-detail__info" }, h("div", { key: '6621fc939d9f9532ba6437bda6b50024cf68339a', class: "ir-revenue-row-detail__time" }, h("span", { key: 'b15c8a75595af4164020eac7b31bc5331302a454', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '938d8cc2e4c3a22aff6d856421040c3d184c73ae', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '31eebc3fd1168d24278a7e2030f43f5c4a9bc8a2', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '470cf563df587563ef0c9bd44be440234d0b508a', class: "ir-revenue-row-detail__meta" }, h("div", { key: '7b68fc9d33865a8122c07a534ef4a5066e20ceea', class: "ir-revenue-row-detail__user" }, h("span", { key: 'ca44d7d7e5c8c7a037411d1ac29771317ecb1de9', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '8841ff92c87f08dc24f461f558d1b588c3c4ebd9', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '378b11568489a060d5defdf44aa31d3b94c1b69e', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '9412351703407b65e26542d8078824164c413e7d', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: '09316da7fd98486eaa2c68afdea588461207d18e', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
