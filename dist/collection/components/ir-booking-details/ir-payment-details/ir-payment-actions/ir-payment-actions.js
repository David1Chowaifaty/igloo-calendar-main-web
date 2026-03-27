import { Host, h } from "@stencil/core";
export class IrPaymentActions {
    booking;
    paymentAction;
    render() {
        if (this.paymentAction?.filter(pa => pa.amount !== 0).length == 0) {
            return null;
        }
        return (h(Host, null, h("div", { class: 'my-1 d-flex align-items-center', style: { gap: '0.5rem' } }, h("p", { class: 'font-size-large p-0 m-0 ' }, "Payment Actions"), h("span", { class: "beta" }, "Beta")), h("div", { class: "payment-actions-container" }, this.paymentAction?.map((pa, index) => (h("ir-payment-action", { key: pa.due_on + index, paymentAction: pa }))))));
    }
    static get is() { return "ir-payment-actions"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-payment-actions.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-payment-actions.css"]
        };
    }
    static get properties() {
        return {
            "booking": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Booking",
                    "resolved": "Booking",
                    "references": {
                        "Booking": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Booking"
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
            },
            "paymentAction": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IPaymentAction[]",
                    "resolved": "IPaymentAction[]",
                    "references": {
                        "IPaymentAction": {
                            "location": "import",
                            "path": "@/services/payment.service",
                            "id": "src/services/payment.service.ts::IPaymentAction"
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
}
//# sourceMappingURL=ir-payment-actions.js.map
