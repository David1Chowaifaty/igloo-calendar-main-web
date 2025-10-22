import { h } from "@stencil/core";
import { HelpDocButton } from "../../../HelpButton";
export class IrPaymentsFolio {
    constructor() {
        this.payments = [];
        this.handleAddPayment = () => {
            this.addPayment.emit();
        };
        this.handleEditPayment = (payment) => {
            this.editPayment.emit(payment);
        };
        this.handleDeletePayment = (payment) => {
            this.deletePayment.emit(payment);
        };
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
                } }),
            index < this.payments.length - 1 && h("hr", { class: "p-0 m-0" }),
        ];
    }
    renderEmptyState() {
        return (h("div", { class: "text-center p-3" }, h("p", { class: "text-muted" }, "No payments recorded yet")));
    }
    render() {
        return (h("div", { key: 'f35f40f64b81de04fd4a3102fee2a2f4c6f8e22e', class: "mt-1" }, h("div", { key: 'ef9c001661368a24d138ab8aa305b61e5974328f', class: "d-flex flex-column rounded payment-container" }, h("div", { key: '5b9fbfbb86f9d9476a61e69fe4d1b73336126fb8', class: "d-flex align-items-center justify-content-between" }, h("div", { key: '9f11000ce0842b0d38dfc0a58174dda090e0a777', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("p", { key: 'b23e3168ea51580de58b89f1d962fb2e4eb71ad7', class: "font-size-large p-0 m-0" }, "Guest Folio"), h(HelpDocButton, { key: 'e3e8c0a2b5f03434a7dff8e6ad3466a79957c90c', message: "Help", href: "https://help.igloorooms.com/extranet/booking-details/guest-folio" })), h("ir-button", { key: '52afc68fc136552081c3073e3b5b3face5321193', id: "add-payment", variant: "icon", icon_name: "square_plus", style: { '--icon-size': '1.5rem' }, onClickHandler: this.handleAddPayment })), h("div", { key: '5daf4c14fa2cf0a3bd537c004b43447847f96897', class: "mt-1 card p-1 payments-container" }, this.hasPayments() ? this.payments.map((payment, index) => this.renderPaymentItem(payment, index)) : this.renderEmptyState()))));
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
            }];
    }
}
//# sourceMappingURL=ir-payments-folio.js.map
