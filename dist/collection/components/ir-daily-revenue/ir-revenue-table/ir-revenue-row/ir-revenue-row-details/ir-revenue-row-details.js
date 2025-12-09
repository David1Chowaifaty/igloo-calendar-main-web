import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '64a2c1b93842f94d27456ea3345671c491c5e002' }, h("div", { key: '8dc62380aaae49aba1d5408ca4ba4bc8056d3781', class: "ir-revenue-row-detail" }, h("div", { key: '82f54f18ac90bae0dfeaf665620207928af42322', class: "ir-revenue-row-detail__info" }, h("div", { key: '5c8d97d089c106ff48f91115fae6eeb12baef8c2', class: "ir-revenue-row-detail__time" }, h("span", { key: '10208dfd7df1e2d7e3e8137614a98467c20ff07d', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '401c5186c496b51594f61400397d25576c113ca7', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: 'bdf6bb1f3b094103fea06266b712374a1907db48', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: 'd60edb320f3e0482390eab79f328be180239e898', class: "ir-revenue-row-detail__meta" }, h("div", { key: '92ee5833963d52a086d32463bba9947ce937d7d9', class: "ir-revenue-row-detail__user" }, h("span", { key: '0701101064b460c6615334d6de634adcdc3aab04', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '9d6a6bcf5bd62193bd40dd9e3ecfe2ee61ef830c', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '0d745c90b0008b1d49c9d757f02a156dfc19b28e', class: "ir-revenue-row-detail__booking" }, h("ir-button", { key: '32d0be427abfbba31f0936bfdda6646a4c893c7f', variant: "default", btn_color: "link", text: this.payment.bookingNbr, class: "ir-revenue-row-detail__booking-btn", size: "sm", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            }, btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' } })))), h("div", { key: '757128579e6abdfadf5f0d6f85084d9e46db68ec', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
