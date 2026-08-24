import { Host, h } from "@stencil/core";
import { formatAmount } from "../../../../../utils/utils";
import calendar_data from "../../../../../stores/calendar-data";
import { _formatTime } from "../../../../ir-booking-details/functions";
export class IrRevenueRowDetails {
    payment;
    revenueOpenSidebar;
    render() {
        return (h(Host, { key: '0ecfa1bbb8c7327555f67f30ab9226e40fc44651' }, h("div", { key: '8e1faceee7e5455ad1497900abf86cc0b9084f89', class: "ir-revenue-row-detail" }, h("div", { key: '89289c406191001703525214c80dc2e9e3048443', class: "ir-revenue-row-detail__info" }, h("div", { key: 'fb37bb1232921d66d878930b59dae585045c0b1b', class: "ir-revenue-row-detail__time" }, h("span", { key: '73e9e77a33a914d19348ce1373d0aaeb157576b3', class: "ir-revenue-row-detail__label" }, this.payment.date), h("span", { key: '90426b501c67776c283b519a969991c8171d5a71', class: "ir-revenue-row-detail__value" }, _formatTime(this.payment.hour.toString(), this.payment.minute.toString())), h("div", { key: '05d6354cda223982916ea2747c05fb3d7a7e4623', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount))), h("div", { key: '72088b54c63704cc9cbfff684d0c82b28facd847', class: "ir-revenue-row-detail__meta" }, h("div", { key: '9c3dddbd6927bfbf010dacf94d3e931c9a024837', class: "ir-revenue-row-detail__user" }, h("span", { key: 'dc33f0f4232c3cd95b2a7145077886a461711d86', class: "ir-revenue-row-detail__label" }, "User:"), h("span", { key: '96bedc8dbde702ba2b272c7cd13ec4ca2ab30139', class: "ir-revenue-row-detail__value" }, this.payment.user)), h("div", { key: '2ead92d5ce39a3ad243c9fcec73736c6623d3d78', class: "ir-revenue-row-detail__booking" }, h("ir-custom-button", { key: 'f86625af708c0688e38f9600b926d35d4d36ef59', link: true, style: { marginLeft: '1rem' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.revenueOpenSidebar.emit({
                    payload: {
                        bookingNumber: Number(this.payment.bookingNbr),
                    },
                    type: 'booking',
                });
            } }, this.payment.bookingNbr)))), h("div", { key: 'd4fa6be1ded51ef48a2386bdb489f2cf081915c4', class: "ir-revenue-row-detail__amount" }, formatAmount(calendar_data.currency.symbol, this.payment.amount)))));
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
