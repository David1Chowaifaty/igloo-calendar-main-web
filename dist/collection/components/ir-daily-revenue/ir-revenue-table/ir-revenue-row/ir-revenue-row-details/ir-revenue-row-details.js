import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '42012fad31d50cd736057185f51e314e9566ea0c' }, h("div", { key: 'cb65b3f9c3767ae69a4fbf2c55ec6e94807b97a3', class: "ir-revenue-row-detail" }, h("div", { key: '796750ff4f1ca9e9016cbd4cf13550b8176fced6', class: "ir-revenue-row-detail__info" }, h("div", { key: '3dbc442874240167c9d79e9f1499022253080bc5', class: "ir-revenue-row-detail__time" }, h("span", { key: '27b5d6ac64ba2a386db93203398da00817e5bd11', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '254afafef12410924600478489ead0b8726ba039', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: 'b928a3b57f680644dce6c51d1545b00c70334f18', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '05c84648d6c21f85e09915c34b1514d632358a1c', class: "ir-revenue-row-detail__meta" }, h("div", { key: '87eb2c6b2faac241131a41a277fd26b464b4d342', class: "ir-revenue-row-detail__user" }, h("span", { key: '7c3e8263be68ebaf01976e7846e2dbe420421dd7', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '13d80cb5b03a4dfa19e8d6a9ae5dd788cb3cd5e7', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: 'a6f1fd1ed15ff4a027374d832cb7d7284bea01ff', class: "ir-revenue-row-detail__booking" }, h("ir-custom-button", { key: '311d058e5e1fc89e5617bd9370dde184c6ee71cf', link: true, style: { marginLeft: '1rem' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            } }, this.payment.bookingNbr)))), h("div", { key: 'c7d59720f51112bc58f8d97bf5b990a2342a7725', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
