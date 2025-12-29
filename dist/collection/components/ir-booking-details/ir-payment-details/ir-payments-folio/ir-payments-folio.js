import { h } from "@stencil/core";
import { HelpDocButton } from "../../../HelpButton";
export class IrPaymentsFolio {
    payments = [];
    addPayment;
    editPayment;
    deletePayment;
    issueReceipt;
    handleAddPayment = () => {
        this.addPayment.emit();
    };
    handleEditPayment = (payment) => {
        this.editPayment.emit(payment);
    };
    handleDeletePayment = (payment) => {
        this.deletePayment.emit(payment);
    };
    handleIssueReceipt(payment) {
        this.issueReceipt.emit(payment);
    }
    hasPayments() {
        return this.payments && this.payments.length > 0;
    }
    renderPaymentItem(payment, index) {
        return [
            h("ir-payment-item", { key: payment.id, payment: payment, onDeletePayment: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.handleDeletePayment(e.detail);
                }, onEditPayment: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.handleEditPayment(e.detail);
                }, onIssueReceipt: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.handleIssueReceipt(e.detail);
                } }),
            index < this.payments.length - 1 && h("wa-divider", { class: "payment-divider" }),
        ];
    }
    renderEmptyState() {
        return h("ir-empty-state", null);
    }
    render() {
        return (h("wa-card", { key: 'b49566afce0c84f38f0bf1be22841e575f29bf34', class: " payments-container" }, h("div", { key: '991070264164c76b7912f94fd36811df28a44407', slot: "header", class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("p", { key: '765a9745167be416312ddc614a69f0baa59b9227', class: "font-size-large p-0 m-0" }, "Guest Folio"), h(HelpDocButton, { key: 'bfcb25d965db24aa60f8212a9fc79be84b320ca1', message: "Help", href: "https://help.igloorooms.com/extranet/booking-details/guest-folio" })), h("wa-tooltip", { key: '3920930830ee92940b777d342f96516eae9a0aa1', for: "create-payment" }, "Add Payment"), h("ir-custom-button", { key: 'c43f8c08dacccb72aed8c78a2cec55cf1ba11286', slot: "header-actions", id: "create-payment", size: "small", variant: "neutral", appearance: "plain", onClickHandler: this.handleAddPayment }, h("wa-icon", { key: 'aec96b8bf50d5e5c9986741a8deae86f97ddc46d', name: "plus", style: { fontSize: '1rem' } })), this.hasPayments() ? this.payments.map((payment, index) => this.renderPaymentItem(payment, index)) : this.renderEmptyState()));
    }
    static get is() { return "ir-payments-folio"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-payments-folio.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-payments-folio.css"]
        };
    }
    static get properties() {
        return {
            "payments": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IPayment[]",
                    "resolved": "IPayment[]",
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
                "setter": false,
                "defaultValue": "[]"
            }
        };
    }
    static get events() {
        return [{
                "method": "addPayment",
                "name": "addPayment",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
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
//# sourceMappingURL=ir-payments-folio.js.map
