import { h } from "@stencil/core";
import { isRequestPending } from "../../stores/ir-interceptor.store";
import { PaymentService } from "../../services/api/payment.service";
import app_store from "../../stores/app.store";
export class IrBookingCancelation {
    constructor() {
        this.paymentService = new PaymentService();
        this.booking_nbr = undefined;
        this.cancelation = undefined;
    }
    componentWillLoad() {
        this.paymentService.setToken(app_store.app_data.token);
    }
    async openDialog() {
        this.openChange.emit(true);
        this.alertDialog.openModal();
    }
    closeAlertDialog() {
        this.alertDialog.closeModal();
        this.openChange.emit(false);
    }
    render() {
        return (h("div", { key: '67a50fd158ed4fab82add59c1abba0a6827b3bb1' }, h("ir-alert-dialog", { key: '5866c1ac62ddb88bf1f9fbfae9b385cf75e7430d', ref: el => (this.alertDialog = el) }, h("h2", { key: 'a79856cf3c413f1b4223ab99791a79f95d7272c3', slot: "modal-title", class: "text-lg font-medium" }, "Booking Cancellation"), h("p", { key: '081ef994a32f6fed286be51686f23c41a48e0050', slot: "modal-body", class: "py-3", innerHTML: this.cancelation }), h("div", { key: '835b754396a21e2613dfb7c0a0e62396b7c16385', slot: "modal-footer" }, h("ir-button", { key: '91c84af5e5fdadc42e0a9ed8d236c9dc64e3a1c0', label: "Cancel", variants: "outline", onButtonClick: () => {
                this.closeAlertDialog();
            }, size: "md" }), h("ir-button", { key: '52465ba37ba6ba319a4f8e42e5fceb24ee52c4e9', size: "md", label: "Accept & Confirm", isLoading: isRequestPending('/Request_Booking_Cancelation'), onButtonClick: async () => {
                try {
                    await this.paymentService.RequestBookingCancelation(this.booking_nbr);
                    this.cancelationResult.emit({ state: 'success', booking_nbr: this.booking_nbr });
                    this.closeAlertDialog();
                }
                catch (error) {
                    console.error(error);
                    this.cancelationResult.emit({ state: 'failed', booking_nbr: this.booking_nbr });
                }
            } })))));
    }
    static get is() { return "ir-booking-cancelation"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booking-cancelation.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking-cancelation.css"]
        };
    }
    static get properties() {
        return {
            "booking_nbr": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "booking_nbr",
                "reflect": false
            },
            "cancelation": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "cancelation",
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "openChange",
                "name": "openChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }, {
                "method": "cancelationResult",
                "name": "cancelationResult",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ state: 'failed' | 'success'; booking_nbr: string }",
                    "resolved": "{ state: \"success\" | \"failed\"; booking_nbr: string; }",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "openDialog": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
}
//# sourceMappingURL=ir-booking-cancelation.js.map
