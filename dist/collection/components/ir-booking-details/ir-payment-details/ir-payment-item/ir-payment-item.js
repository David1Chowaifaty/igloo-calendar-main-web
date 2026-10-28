import { h } from "@stencil/core";
import { formatAmount } from "../../../../utils/utils";
import { PAYMENT_TYPES_WITH_METHOD } from "../global.variables";
import { v4 } from "uuid";
import { PayStatus, PayTypes } from "../../../../types/enums";
import { formatDate } from "../../../../utils/date/index";
import { t } from "../../../../services/locale/t";
export class IrPaymentItem {
    payment;
    editPayment;
    deletePayment;
    issueReceipt;
    voidReceipt;
    _id = v4();
    render() {
        const isCredit = this.payment.payment_type.operation === 'CR';
        const paymentDescription = (PAYMENT_TYPES_WITH_METHOD.includes(this.payment.payment_type?.code)
            ? `${this.payment.payment_type?.description}: ${this.payment.payment_method.description}`
            : this.payment.payment_type.description) ?? this.payment.designation;
        const canEditOrDelete = ![PayTypes.Payment, PayTypes.CreditReceipt, PayTypes.Refund].includes(this.payment.payment_type?.code);
        const canPrint = [PayTypes.Payment, PayTypes.CreditReceipt, PayTypes.Refund].includes(this.payment.payment_type.code);
        return (h("div", { key: '14ddff2d40052fb1d0cd06fe041fc8ccbec95a6e', class: "payment-item__payment-item" }, h("div", { key: 'd0c0be95e5c28d7315a77946eb1d308c6e2f7db8', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: 'd8040db4b8b131656763fa3d89af076116b40c2d', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '04dc9817a4d38273c1d6bd87399e8fb8f414fa8a', class: "payment-item__payment-date" }, formatDate(this.payment.date, 'MMM DD, YYYY')), h("p", { key: '1baa40726e544c10b677b3b68633a1856e6d42d9', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '51619f7ab971aec75028854a1549588f380cae26', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '6d1d1d3bd056b5b3ea8fae3de1c5dc4bd57b0895', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '61ddd6c3f47510397d1c4ce411725238e06cc979', class: "payment-item__payment-toolbar" }, h("p", { key: '64b6cf23bd5d771c3005a88602fc35e6cc490ff3', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '77f897776591d6deb6a7a1ef0d1f87f375188b32', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '204184f4e30670576f82095b1b1952a9530432da', class: "payment-item__payment-actions" }, h("div", { key: '3152160054a029797cf12b8b559c8726773feb89', class: "d-flex align-items-center" }, h("wa-tooltip", { key: 'a3ca3c706e3f3ba3fc670e3a4edca0955d6b7592', for: this._id }, h("span", { key: '3f15eb5c5d0145744860ab03de361b7402a80ffb', class: "payment-item__tooltip-label" }, t('Lcz_User', { fallback: 'user' })), ': ', this.payment.time_stamp.user), h("wa-icon", { key: '2cc6c4faf4a1e08548c01ac38485644832ec181a', name: "user", id: this._id }), h("wa-dropdown", { key: '9a67d6f62de7366bc3cd33d84a35c9bd45a4ecd6', "onwa-hide": e => {
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
                    case 'void-receipt':
                        this.voidReceipt.emit(this.payment);
                        break;
                }
            } }, h("wa-button", { key: 'cc64d09b3714e804d48e5bcbf9f01a1a9ab30cfa', size: "s", class: "payment-item__action-trigger", slot: "trigger", appearance: "plain" }, h("wa-icon", { key: '416a480d50e13680a71d766b573fa72090f6d261', name: "ellipsis-vertical", class: "payment-item__action-trigger-icon" })), canEditOrDelete && (h("wa-dropdown-item", { key: '7302c4a8ec156f83d969c4ec38bc3d9699ae35a4', value: "edit" }, t('Lcz_Edit', { fallback: 'Edit' }))), canPrint && (h("wa-dropdown-item", { key: 'b9a77533928120e0af3cc488e4fab048826b4b0d', value: "receipt" }, t('Lcz_Print', { fallback: 'Print' }))), canEditOrDelete && h("wa-divider", { key: 'd41ea99d341bfc672ceaa1a85343fca0003ead72' }), this.payment?.payment_type?.code === PayTypes.Payment && this.payment.payment_status?.code === PayStatus.Normal && (h("wa-dropdown-item", { key: 'ca0bae8bbaf5cd3c2dd902e7978e805e5ec9ebf9', variant: "danger", value: "void-receipt" }, t('Lcz_VoidWithCreditReceipt', { fallback: 'Void with credit receipt' }))), canEditOrDelete && (h("wa-dropdown-item", { key: 'bf26f29c3c3b44f4958c8644ef72d24c22458acc', value: "delete", variant: "danger" }, t('Lcz_Delete', { fallback: 'Delete' }))))))), this.payment.reference && h("p", { key: '791f4a861ce65a3991f2557fa90373c3794c4105', class: "payment-item__payment-reference" }, this.payment?.reference)));
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
                            "id": "src/models/booking.dto.ts::IPayment",
                            "referenceLocation": "IPayment"
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
                            "id": "src/models/booking.dto.ts::IPayment",
                            "referenceLocation": "IPayment"
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
                            "id": "src/models/booking.dto.ts::IPayment",
                            "referenceLocation": "IPayment"
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
                            "id": "src/models/booking.dto.ts::IPayment",
                            "referenceLocation": "IPayment"
                        }
                    }
                }
            }, {
                "method": "voidReceipt",
                "name": "voidReceipt",
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
                            "id": "src/models/booking.dto.ts::IPayment",
                            "referenceLocation": "IPayment"
                        }
                    }
                }
            }];
    }
}
