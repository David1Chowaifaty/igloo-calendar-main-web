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
        return (h("div", { key: '1bc0827159835ec245184748f7786169be077641' }, h("ir-alert-dialog", { key: 'f31fd95427ae39c8308badf0862b6a541fbbf4fa', ref: el => (this.alertDialog = el) }, h("h2", { key: 'cd87503d1b518b29afe042b15c7b87174e031ef2', slot: "modal-title" }, "Booking Cancellation"), h("p", { key: '4a6d095a6dc68e852230df93e8df034bbce4bc72', slot: "modal-body", class: "pt-2", innerHTML: this.cancelation }), h("div", { key: 'cb4df76f6ba6c873599d2db30b4b28d64732f7ff', slot: "modal-footer" }, h("ir-button", { key: '4867e54cc9a9ade426e7e0940e2465cdef882fdf', label: "Cancel", variants: "outline", onButtonClick: () => {
                this.closeAlertDialog();
            } }), h("ir-button", { key: '72bb1661efa51c2801346a4e1baafc8e678eae14', label: "Accept & Confirm", isLoading: isRequestPending('/Request_Booking_Cancelation'), onButtonClick: async () => {
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
