import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '8fc0bb1e169835146754baa627bbde1e2e17c5c5' }, h("div", { key: 'fb50b5bebe14bb3c52cdbb2a22e7c2285a71a9e0', class: "ir-revenue-row-detail" }, h("div", { key: '51bd3843fce67d0c415238a5fc5218c5d9b9c444', class: "ir-revenue-row-detail__info" }, h("div", { key: 'e95ce61db2a98c14233e109cd22b42653cf70c80', class: "ir-revenue-row-detail__time" }, h("span", { key: '4c6026c06d7cccad5668fa5570f21b70b3f0aa04', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '021e213a46af4b385a0a4cc530494ce3d403984c', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: 'e142a4b73056c0279dc92473844545ca1d214dd9', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: 'eed2b559e3f25b65fca9f9ac266fa2a10aa51b7a', class: "ir-revenue-row-detail__meta" }, h("div", { key: '51a40c083b886978c3294962a870812dfbc7edc5', class: "ir-revenue-row-detail__user" }, h("span", { key: '7aba6fdc1d64fcd9f47167eb2355ef968f13a918', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '50411eeacc90e052cc2b9393b586845f1a56bf07', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: 'e0ecb92c73d8bfca6e6611321ac76681e065689f', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: 'fc8a6dfbc2f14ebc5d05f68071126c06609cee0c', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: '2a5eaf3c3867ee45b9d510e8e9f7571e44ba5771', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
