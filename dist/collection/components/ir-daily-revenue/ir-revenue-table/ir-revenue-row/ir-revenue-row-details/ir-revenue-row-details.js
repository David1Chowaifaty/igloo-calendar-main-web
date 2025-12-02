import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: 'd851b7537e1025a6809a01c1ac44d82036e84cc2' }, h("div", { key: '96165ae93686a51ff36686b53476a5ec160079f9', class: "ir-revenue-row-detail" }, h("div", { key: 'c1f531eb62041c1cc4aaccb831ada8542391e7e0', class: "ir-revenue-row-detail__info" }, h("div", { key: 'b7d95333a7ede48a48293ea80588a464c5f61524', class: "ir-revenue-row-detail__time" }, h("span", { key: '1bc241b3b82682599441cfa5039c1f97bb955572', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: 'a2a08ec7d94758d157792906f5062bb77d763029', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '66beff05e6f0deb416b8e87c2bb5aa13e331d968', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '3225dbefe8c8ea0289b3b93de41e7d831093aa99', class: "ir-revenue-row-detail__meta" }, h("div", { key: '56bcf56e2d5164c17590ba1e75cb17026559799f', class: "ir-revenue-row-detail__user" }, h("span", { key: '64eea6ea186342eca0c339ced4bea73907291d78', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '294146b80ea656c886fe45c1977d9650fbbc25d3', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '981aeffa953064c965a554e854a2e332af7f9e4a', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: 'bfc1c52acc0c99b1689582a7ac03b119fa4af36e', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: '67cc425525c9ced6805dc719177df2dd31eede77', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
