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
        return (h("div", { key: 'cb280c6357597b879436baad22cb113175a699d5', class: "payment-item__payment-item" }, h("div", { key: 'a5771b6a92b9b5fb3fba02828cdbe5c2dd3240be', class: "payment-item__payment-body", part: "payment-body" }, h("div", { key: 'cbb7eb089ef3c75fb849456846737c26bdf84db1', class: "payment-item__payment-fields", part: "payment-fields" }, h("p", { key: '06a178036d39380e06452548a2769a69ea0a10d2', class: "payment-item__payment-date" }, moment(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("p", { key: 'be19f040e8e93ebef2c47e4d1097f7764814ea7b', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '5413e41f7cb7698e180b17297e948a459c458fee', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && h("p", { key: '7183215c402d03ff1cf50dd91f0360fd37f852aa', class: "payment-item__payment-reference" }, this.payment?.reference)), h("div", { key: '64b22963e9fae51aa68e13a60c12b4b2cbce6a4f', class: "payment-item__payment-toolbar" }, h("p", { key: 'f3bb6eea5545392e36d632dfea50608780d0d5a2', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, formatAmount(this.payment.currency.symbol, this.payment.amount)), h("p", { key: '1fec5b1e81dc14d62e33331373f14c7461561d12', class: "payment-item__payment-description" }, paymentDescription), h("div", { key: '1f98937fb5279e8fa367088890af386cd5d4c057', class: "payment-item__payment-actions" }, h("div", { key: 'c31d17cb9b16b309a6951777b5161b415fbce481', class: "d-flex align-items-center" }, h("wa-tooltip", { key: '4bfcd1221835b8527e94af3b8a7dfcc6deeb2dfd', for: this._id }, "User: ", this.payment.time_stamp.user), h("wa-icon", { key: 'c6a53e3c71fa91adc1a4f84b1b1b82b6a4970939', name: "user", id: this._id }), h("wa-dropdown", { key: '3d3cd9c9f6e88c9f3def2dda08d69959c0967dfd', "onwa-hide": e => {
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
            } }, h("ir-custom-button", { key: '12faeb18d68c6a233d0ef730b39afb5a413e90c6', slot: "trigger", appearance: "plain" }, h("wa-icon", { key: 'cd7d8762e29068812701f71ccae4ffce06027ad4', name: "ellipsis-vertical" })), this.payment.payment_type.code === '001' && (h("wa-dropdown-item", { key: 'd6b8bd6e2cdad819e4331be4c27e9d748839df6e', value: "receipt" }, h("wa-icon", { key: '3d2c37ccb884789ce20b2eac28d9d00ed115688a', name: "receipt", slot: "icon" }), "Print Receipt")), h("wa-dropdown-item", { key: 'e8298469c0c942e27d0792bd7f16a93229092805', value: "edit" }, h("wa-icon", { key: '2c707e80a78fbbb37b2a8744fffce95a77ea6235', slot: "icon", name: "edit" }), "Edit"), h("wa-dropdown-item", { key: 'f5610c06a1f3a59ec1c822777fdce9847b480886', value: "delete", variant: "danger" }, h("wa-icon", { key: '80cb8b32d0a48206ad7c2ca392c349a79dd480ca', slot: "icon", name: "trash" }), "Delete"))))), this.payment.reference && h("p", { key: '93c23a7a95d54d2a1871762c534198b10dba8939', class: "payment-item__payment-reference" }, this.payment?.reference)));
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
