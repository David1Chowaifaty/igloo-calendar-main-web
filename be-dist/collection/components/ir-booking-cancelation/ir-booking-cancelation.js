import { Fragment, h } from "@stencil/core";
import { isRequestPending } from "../../stores/ir-interceptor.store";
import { PaymentService } from "../../services/api/payment.service";
import { formatAmount } from "../../utils/utils";
import localizedWords from "../../stores/localization.store";
export class IrBookingCancelation {
    constructor() {
        this.paymentService = new PaymentService();
        this.booking_nbr = undefined;
        this.cancelation = undefined;
        this.cancelation_policies = [];
        this.currency = undefined;
        this.booking = undefined;
        this.paymentAmount = undefined;
        this.isLoading = undefined;
        this.isOpen = false;
        this.policies = [];
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
    async init() {
        var _a;
        try {
            this.policies = this.cancelation_policies;
            const requests = [];
            if (this.cancelation_policies.length === 0 && this.booking) {
                const prepaymentPromise = this.paymentService.getBookingPrepaymentAmount(this.booking);
                requests.push(prepaymentPromise);
            }
            const overdueAmountPromise = this.setOverdueAmount();
            requests.push(overdueAmountPromise);
            const results = await Promise.all(requests);
            if (this.cancelation_policies.length === 0 && this.booking) {
                const prepaymentResult = results.length > 1 ? results[0] : null;
                if (prepaymentResult) {
                    this.policies = (_a = prepaymentResult.cancelation_policies) !== null && _a !== void 0 ? _a : this.policies;
                }
            }
        }
        catch (error) {
            console.error('Error during initialization:', error);
        }
    }
    async openDialog() {
        this.openChange.emit(true);
        this.alertDialog.openModal();
        await this.init();
    }
    closeAlertDialog() {
        this.alertDialog.closeModal();
        this.openChange.emit(false);
    }
    render() {
        var _a, _b;
        const isPending = isRequestPending('/Get_Exposed_Cancelation_Due_Amount');
        return (h("div", { key: 'a4415e9acd52e71d81657bb171285eee2db49bb6' }, h("ir-alert-dialog", { key: '03258537006ef6ce2203550c54028f0faca4d6a7', ref: el => (this.alertDialog = el), onOpenChange: e => {
                if (!e.detail && this.isOpen) {
                    this.isOpen = false;
                }
            } }, h("h2", { key: 'c5a6dd71474a50cfd8dd53d35a897b925c72928e', slot: "modal-title", class: "text-lg font-medium" }, localizedWords.entries.Lcz_BookingCancellation), h("div", { key: '6eda9c8e95d2e799ce07d2aebfcf7c48f623dae4', class: "py-3", slot: "modal-body" }, isPending ? (h("div", { class: "h-24" }, h("ir-skeleton", { class: "mb-2.5 h-4 w-60" }))) : (h(Fragment, null, this.paymentAmount > 0 ? (h("p", { class: "mb-2.5 font-semibold" }, `If you cancel now, the penalty will be ${formatAmount(this.paymentAmount, ((_a = this.currency) === null || _a === void 0 ? void 0 : _a.code) || 'usd')}.`)) : (h("p", { class: "mb-2.5 font-semibold" }, localizedWords.entries.Lcz_NoPenalityIsApplied)), h("button", { onClick: () => {
                this.isOpen = !this.isOpen;
            }, class: "flex w-full items-center justify-between rounded-md  py-1 " }, h("p", null, localizedWords.entries.Lcz_MoreDetails), h("ir-icons", { name: this.isOpen ? 'angle_up' : 'angle_down', svgClassName: "h-3" })), this.isOpen && (h(Fragment, null, h("div", { class: 'divide-y py-2' }, (_b = this.policies) === null || _b === void 0 ? void 0 : _b.map(d => (h("div", { class: "space-y-1.5 py-2.5" }, h("p", { class: 'font-medium' }, d.rt_name, " ", d.rp_name), h("p", { class: "text-xs text-gray-500" }, d.statement)))))))))), h("div", { key: 'b411a84663a6c2cce42d8c662777acb2b7b20810', slot: "modal-footer" }, h("ir-button", { key: '2bf1754e49f80e45d112e329be0173d254db1c0c', label: localizedWords.entries.Lcz_Cancel, variants: "outline", onButtonClick: () => {
                this.closeAlertDialog();
            }, size: "md" }), h("ir-button", { key: '2c710f4676c332a6be06ab65f405a7417ea64eb5', disabled: isPending, size: "md", label: localizedWords.entries.Lcz_AcceptAndConfirm, isLoading: isRequestPending('/Request_Booking_Cancelation'), onButtonClick: async () => {
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
            },
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
                }
            }
        };
    }
    static get states() {
        return {
            "paymentAmount": {},
            "isLoading": {},
            "isOpen": {},
            "policies": {}
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
