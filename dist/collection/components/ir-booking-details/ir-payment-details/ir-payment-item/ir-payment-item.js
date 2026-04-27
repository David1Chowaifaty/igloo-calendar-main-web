import { h } from "@stencil/core";
import { formatAmount } from "../../../../utils/utils";
import { PAYMENT_TYPES_WITH_METHOD } from "../global.variables";
import moment from "moment";
import { v4 } from "uuid";
export class IrPaymentItem {
    payment;
    editPayment;
    deletePayment;
    issueReceipt;
    _id = v4();
    render() {
        const isCredit = this.payment.payment_type.operation === 'CR';
        const paymentDescription = (PAYMENT_TYPES_WITH_METHOD.includes(this.payment.payment_type?.code)
            ? `${this.payment.payment_type?.description}: ${this.payment.payment_method.description}`
            : this.payment.payment_type.description) ?? this.payment.designation;
        return (h("div", { key: '330fb385a1123a1decaa0b2f56edd98995c0b6d5', class: "payment-item__payment-item" }, h("div", { key: '00332e1e312d299af6a77a5a391a7bbaab59d452', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: 'e01f2f732bf9affd531d49c016ef080064f968ea', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '4afe3150aa44baa017bfd55a7781e30226ea4e96', class: "payment-item__payment-date" }, moment(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: '21fb8e61b3b0aa4b95fda03b29bfb90a58e95bd6', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '13e2baee5e2e13ef69b08477696cb9349f854f10', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: 'f08e8cc06299b1d51b4dba1aed0ab1e43003c4b6', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '2746ee4aece92549e4d102bf3b76a15e94159cfa', class: "payment-item__payment-toolbar" }, h("p", { key: '93f14fb106dfab1a8db699d60119a0369a412f83', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '6e390f263a5ba414beb4553da4bb92d31f0d1754', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '28e7ba4d3df8d1a91bc9a6d1dcc36aeec10cccf5', class: "payment-item__payment-actions" }, h("div", { key: 'add0a979104c174c45be891cb0ca000ddc600ffa', class: "d-flex align-items-center" }, h("wa-tooltip", { key: 'fcda6b118c98e6f4e881de6744dab7e313f5d75a', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: 'bff5f270ee6abfaf30c281564e430a9a63213f78', name: "user", id: this._id }), h("wa-dropdown", { key: 'e88b7a354387b047dddd68067e7d886ef4c85a46', "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, "onwa-select": e => {
                switch (e.detail.item.value) {
                    case 'edit':
                        this.editPayment.emit(this.payment);
                        break;
                    case 'delete':
                        this.deletePayment.emit(this.payment);
                        break;
                    case 'receipt':
                        this.issueReceipt.emit(this.payment);
                        break;
                }
            } }, h("ir-custom-button", { key: '444f59cc254ef0ba906ce2597dbec112fe4eee85', slot: "trigger", appearance: "plain" }, h("wa-icon", { key: '562fdbfe6071dd7adf7cfa37c906289fcc98f19d', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: 'f48a0ef4c62d4177115a9178e0cf26e77b5b49d7', value: "receipt" }, h("wa-icon", { key: '0c228461c7595cd844b38987587ce21ce367e9fc', name: "receipt", slot: "icon" }), "Print Receipt")), h("wa-dropdown-item", { key: '5031d05c5619a764f72439efefb21069b5333b6f', value: "edit" }, h("wa-icon", { key: '5af1a39592c677e92935a2c5c57b79107ccff4de', slot: "icon", name: "edit" }), "Edit"), h("wa-dropdown-item", { key: '2ba51d910a106975d84f9004ad05970201d207b8', value: "delete", variant: "danger" }, h("wa-icon", { key: '3005b992bad27bb29a7f8928a1670e6a66bd7219', slot: "icon", name: "trash" }), "Delete"))))), this.payment.reference && h("p", { key: 'b91fe2ea3ef4549d9ad3363314a4ea0950be4322', class: "payment-item__payment-reference" }, this.payment?.reference)));
    }
    static get is() { return "ir-payment-item"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-payment-item.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-payment-item.css"]
        };
    }
    static get properties() {
        return {
            "payment": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IPayment",
                    "resolved": "IPayment",
                    "references": {
                        "IPayment": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::IPayment"
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
                "method": "editPayment",
                "name": "editPayment",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "IPayment",
                    "resolved": "IPayment",
                    "references": {
                        "IPayment": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::IPayment"
                        }
                    }
                }
            }, {
                "method": "deletePayment",
                "name": "deletePayment",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "IPayment",
                    "resolved": "IPayment",
                    "references": {
                        "IPayment": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::IPayment"
                        }
                    }
                }
            }, {
                "method": "issueReceipt",
                "name": "issueReceipt",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "IPayment",
                    "resolved": "IPayment",
                    "references": {
                        "IPayment": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::IPayment"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=ir-payment-item.js.map
