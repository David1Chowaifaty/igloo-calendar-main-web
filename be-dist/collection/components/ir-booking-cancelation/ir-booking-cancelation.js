import { h } from "@stencil/core";
import { isRequestPending } from "../../stores/ir-interceptor.store";
import { PaymentService } from "../../services/api/payment.service";
import app_store from "../../stores/app.store";
export class IrBookingCancelation {
    constructor() {
        this.paymentService = new PaymentService();
        this.booking_nbr = undefined;
        this.cancelation = undefined;
        this.paymentMessage = undefined;
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
        return (h("div", { key: '5d37e1f2f893daf89cb9abafb80b3067b277d28c' }, h("ir-alert-dialog", { key: 'a934360f0ba538133c74fa886bca84062a60e05f', ref: el => (this.alertDialog = el) }, h("h2", { key: 'f10c53cd817f177ec2f9a8234ae7d1651a6e76a3', slot: "modal-title", class: "text-lg font-medium" }, "Booking Cancellation"), h("div", { key: 'addaf3f2393fc1c1633921d7b424a8b138c51d4e', class: "py-3", slot: "modal-body" }, h("p", { key: '2931c4f28bfc55c6e845e8acb1c0b864861f9695', innerHTML: this.cancelation }), this.paymentMessage && h("p", { key: '8eb401d82b06645915ad79140db57d35b894bd0c', class: "mt-2.5 font-semibold" }, this.paymentMessage)), h("div", { key: '47a6b3247aa6a413ee0db4e9031ef3240f79f2cc', slot: "modal-footer" }, h("ir-button", { key: '8597e13610bcbfa82748ceb3b3b5a58f26cff464', label: "Cancel", variants: "outline", onButtonClick: () => {
                this.closeAlertDialog();
            }, size: "md" }), h("ir-button", { key: 'a8cf18f8e8142d24d1f250ecb5da7ea81cd6bf36', size: "md", label: "Accept & Confirm", isLoading: isRequestPending('/Request_Booking_Cancelation'), onButtonClick: async () => {
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
            },
            "paymentMessage": {
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
                "attribute": "payment-message",
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
