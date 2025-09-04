import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    render() {
        return (h(Host, { key: 'a8c826c89299c20f59505232f78ef0bc8c67793c' }, h("div", { key: 'f006c3e2c43225e8dbfd9a0bf3a08e6a155d0842', class: "ir-revenue-row-detail" }, h("div", { key: '9b764dd367ef6dc4224d3dc05d79991b44c42525', class: "ir-revenue-row-detail__time" }, h("span", { key: '543108f80a905c1382b0cfccc0f6d87fecf9be12', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '3d4f55af43e0358bb9048f6bc4bb1b26fad9d8e1', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '3de904ad2b6674b3466493aecff08d8ac76cdba0', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: 'c259f7a60d4b6d8bebd67aba10c9c052213f35b5', class: "ir-revenue-row-detail__meta" }, h("div", { key: 'e246d496544bbf3ff4d3206f8906952ec5a14679', class: "ir-revenue-row-detail__user" }, h("span", { key: '146fa52aa7cb6fecc14b7e19316bcb2ac93878df', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '6bd8f55fbd5dc6ab4a591c1232c3cb38151f27b5', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '22fbb206dab91f65b4c93fc44f3e390e09e084a2', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: 'a8da2c103ae312c3442505e225d2717f922c7f0d', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } }))), h("div", { key: 'fa68155bcbc3d093713da4b36f3ab6ec70bfc604', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
