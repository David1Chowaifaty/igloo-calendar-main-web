import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '315b5310886b05fa618f9780d9add0e4435772a9' }, h("div", { key: '7a0aae7338aaa23c10bd408493c645a17f25fe68', class: "ir-revenue-row-detail" }, h("div", { key: '84a42bcb5209d1d2a3ef2a504bcda3f89ec4055d', class: "ir-revenue-row-detail__info" }, h("div", { key: 'bd3035e8f5be32385f1d5814c823c7cce1c1bf0a', class: "ir-revenue-row-detail__time" }, h("span", { key: 'dfa1db8468fa355d14928fc197eb39c1723b34be', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: 'c2ac07de3447504e13922d4a0d4f1001d5fd1f01', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '4d6c0547411edbfa7e8bdf527dbdff01a219948d', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: 'dfd4ac981ecbc092b9dfbb219fbf6e59dafc3a97', class: "ir-revenue-row-detail__meta" }, h("div", { key: '682622c0f32ed2bf834fb611721d2ff9a6bf5b8f', class: "ir-revenue-row-detail__user" }, h("span", { key: '5a86ad178c53ef73f3d846b7b0955cd72df9c65d', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '64349c2b5b7bc8efc2c4b47692ed65d9de88417c', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '301b3738c8ea5d0366a32efd28c7814ce3110c06', class: "ir-revenue-row-detail__booking" }, h("ir-custom-button", { key: '06e5690ae935c6ed0aeb816135ee121df46814d5', link: true, style: { marginLeft: '1rem' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            } }, this.payment.bookingNbr)))), h("div", { key: 'd7cee12eba4f3134e7550f458cf81f92ccb28a10', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
