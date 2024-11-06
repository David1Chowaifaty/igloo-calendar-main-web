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
        return (h("div", { key: 'e57da3141048520233bf9017fe2c507f68165b55' }, h("ir-alert-dialog", { key: '564dd5ffa635038f5de2363131e17b1b83a23abd', ref: el => (this.alertDialog = el), onOpenChange: e => {
                if (!e.detail && this.isOpen) {
                    this.isOpen = false;
                }
            } }, h("h2", { key: '87d555067bb4e2a7955284b70bc5ae6704834976', slot: "modal-title", class: "text-lg font-medium" }, localizedWords.entries.Lcz_BookingCancellation), h("div", { key: '5b287676d5df6a71ca8ccb0412bc1c791a3a4a56', class: "py-3", slot: "modal-body" }, isPending ? (h("div", { class: "h-24" }, h("ir-skeleton", { class: "mb-2.5 h-4 w-60" }))) : (h(Fragment, null, this.paymentAmount > 0 ? (h("p", { class: "mb-2.5 font-semibold" }, `If you cancel now, the penalty will be ${formatAmount(this.paymentAmount, ((_a = this.currency) === null || _a === void 0 ? void 0 : _a.code) || 'usd')}.`)) : (h("p", { class: "mb-2.5 font-semibold" }, localizedWords.entries.Lcz_NoPenalityIsApplied)), h("button", { onClick: () => {
                this.isOpen = !this.isOpen;
            }, class: "flex w-full items-center justify-between rounded-md  py-1 " }, h("p", null, localizedWords.entries.Lcz_MoreDetails), h("ir-icons", { name: this.isOpen ? 'angle_up' : 'angle_down', svgClassName: "h-3" })), this.isOpen && (h(Fragment, null, h("div", { class: 'divide-y py-2' }, (_b = this.policies) === null || _b === void 0 ? void 0 : _b.map(d => (h("div", { class: "space-y-1.5 py-2.5" }, h("p", { class: 'font-medium' }, d.rt_name, " ", d.rp_name), h("p", { class: "text-xs text-gray-500" }, d.statement)))))))))), h("div", { key: 'fa37ef14bf5824e426f4b5a7f58cb92504c4678d', slot: "modal-footer" }, h("ir-button", { key: 'a6e0d8d9550c1620a06227c68615f985856607f9', label: localizedWords.entries.Lcz_Cancel, variants: "outline", onButtonClick: () => {
                this.closeAlertDialog();
            }, size: "md" }), h("ir-button", { key: 'f6dac1038b6ac7e8d5f08624e6eb7ac5c07c6ec8', disabled: isPending, size: "md", label: localizedWords.entries.Lcz_AcceptAndConfirm, isLoading: isRequestPending('/Request_Booking_Cancelation'), onButtonClick: async () => {
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
