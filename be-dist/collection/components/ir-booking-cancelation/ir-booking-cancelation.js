import { Fragment, h } from "@stencil/core";
import { isRequestPending } from "../../stores/ir-interceptor.store";
import { PaymentService } from "../../services/api/payment.service";
import app_store from "../../stores/app.store";
import { formatAmount } from "../../utils/utils";
export class IrBookingCancelation {
    constructor() {
        this.paymentService = new PaymentService();
        this.booking_nbr = undefined;
        this.cancelation = undefined;
        this.cancelation_policies = [];
        this.currency = undefined;
        this.paymentAmount = undefined;
        this.isOpen = false;
    }
    componentWillLoad() {
        this.paymentService.setToken(app_store.app_data.token);
    }
    async setOverdueAmount() {
        try {
            const res = await this.paymentService.getExposedCancelationDueAmount({
                booking_nbr: this.booking_nbr,
                currency_id: this.currency.id,
            });
            const overdueResult = res.find(f => f.type === 'overdue');
            if (overdueResult) {
                this.paymentAmount = overdueResult.amount;
            }
        }
        catch (error) {
            console.error('Error fetching overdue amount:', error);
        }
    }
    async openDialog() {
        this.openChange.emit(true);
        this.alertDialog.openModal();
        await this.setOverdueAmount();
    }
    closeAlertDialog() {
        this.alertDialog.closeModal();
        this.openChange.emit(false);
    }
    render() {
        var _a;
        const isPending = isRequestPending('/Get_Exposed_Cancelation_Due_Amount');
        return (h("div", { key: 'd6d283e2bece4a7a0ec4d0df5fc9f107757619d9' }, h("ir-alert-dialog", { key: '97793c67731bc69ed253a64777ab70e2828d7199', ref: el => (this.alertDialog = el) }, h("h2", { key: '215934cabdaba082f67cf5487538a2a797c773a2', slot: "modal-title", class: "text-lg font-medium" }, "Booking Cancellation"), h("div", { key: '2e74a1baf699b65199338233ba6104e9ecaf4dfa', class: "py-3", slot: "modal-body" }, isPending ? (h(Fragment, null, h("ir-skeleton", { class: "mb-2.5 h-5 w-60" }), h("ir-skeleton", { class: "mb-2.5 h-6 w-full" }))) : (h(Fragment, null, this.paymentAmount ? (h("p", { class: "mb-2.5 font-semibold" }, `If you cancel now, the penalty will be ${formatAmount(this.paymentAmount, ((_a = this.currency) === null || _a === void 0 ? void 0 : _a.code) || 'usd')}.`)) : (h("p", { class: "mb-2.5 font-semibold" }, "No penalty is applied if you cancel now.")), h("button", { onClick: () => {
                this.isOpen = !this.isOpen;
            }, class: "flex w-full items-center justify-between rounded-md  py-1 " }, h("p", null, "More details"), h("ir-icons", { name: this.isOpen ? 'angle_up' : 'angle_down', svgClassName: "h-3" })), this.isOpen && (h(Fragment, null, h("div", { class: 'divide-y py-2' }, this.cancelation_policies.map(d => (h("div", { class: "space-y-1.5 py-2.5" }, h("p", { class: 'font-medium' }, d.rt_name, " ", d.rp_name), h("p", { class: "text-xs text-gray-500" }, d.statement)))))))))), h("div", { key: 'f57b987d37a1eeacba9c5930d908d36870332b96', slot: "modal-footer" }, h("ir-button", { key: '5256c390c45c00593b132954e2c900c288c6080d', label: "Cancel", variants: "outline", onButtonClick: () => {
                this.closeAlertDialog();
            }, size: "md" }), h("ir-button", { key: 'ff6e0ef6ab193623d05e8a2ef64f0c973fd7500f', disabled: isPending, size: "md", label: "Accept & Confirm", isLoading: isRequestPending('/Request_Booking_Cancelation'), onButtonClick: async () => {
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
            "cancelation_policies": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "TBookingInfo[]",
                    "resolved": "TBookingInfo[]",
                    "references": {
                        "TBookingInfo": {
                            "location": "import",
                            "path": "@/services/api/payment.service",
                            "id": "src/services/api/payment.service.ts::TBookingInfo"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "defaultValue": "[]"
            },
            "currency": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ code: string; id: number }",
                    "resolved": "{ code: string; id: number; }",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                }
            }
        };
    }
    static get states() {
        return {
            "paymentAmount": {},
            "isOpen": {}
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
