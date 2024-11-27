import { Fragment, h } from "@stencil/core";
import { isRequestPending } from "../../stores/ir-interceptor.store";
import { PaymentService } from "../../services/api/payment.service";
import { formatAmount } from "../../utils/utils";
import localizedWords from "../../stores/localization.store";
import app_store from "../../stores/app.store";
import { isBefore, isSameDay } from "date-fns";
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
        var _a, _b;
        try {
            const res = await this.paymentService.GetExposedApplicablePolicies({
                book_date: new Date(),
                params: {
                    booking_nbr: this.booking_nbr,
                    property_id: this.booking.property.id,
                    room_type_id: 0,
                    rate_plan_id: 0,
                    currency_id: this.booking.currency.id,
                    language: app_store.userPreferences.language_id,
                },
            });
            const { data } = res;
            const cancelationBrackets = data.find(d => d.type === 'cancelation');
            const book_date = new Date();
            if (cancelationBrackets) {
                this.paymentAmount = (_b = (_a = cancelationBrackets.brackets.find(b => isBefore(new Date(b.due_on), book_date) || isSameDay(new Date(b.due_on), book_date))) === null || _a === void 0 ? void 0 : _a.gross_amount) !== null && _b !== void 0 ? _b : 0;
            }
            // const res = await this.paymentService.getExposedCancelationDueAmount({
            //   booking_nbr: this.booking_nbr,
            //   currency_id: this.currency.id,
            // });
            // const overdueResult = res.find(f => f.type === 'overdue');
            // if (overdueResult) {
            //   this.paymentAmount = overdueResult.amount;
            // }
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
        const isPending = isRequestPending('/Get_Exposed_Applicable_Policies');
        // const isPending = isRequestPending('/Get_Exposed_Cancelation_Due_Amount');
        return (h("div", { key: 'b6e167648aff3e8bedda622c634863ebd76deafb' }, h("ir-alert-dialog", { key: 'ad00a690fb4a0a8bc4cdeaa85f3b5b489b9715ed', ref: el => (this.alertDialog = el), onOpenChange: e => {
                if (!e.detail && this.isOpen) {
                    this.isOpen = false;
                }
            } }, h("h2", { key: 'e640171428176701aabf74136117d730f5a43831', slot: "modal-title", class: "text-lg font-medium" }, localizedWords.entries.Lcz_BookingCancellation), h("div", { key: '2d187c2fb8e4b1c0212e3b1e69f668ef08178020', class: "py-3", slot: "modal-body" }, isPending ? (h("div", { class: "h-24" }, h("ir-skeleton", { class: "mb-2.5 h-4 w-60" }))) : (h(Fragment, null, this.paymentAmount > 0 ? (h("p", { class: "mb-2.5 font-semibold" }, `If you cancel now, the penalty will be ${formatAmount(this.paymentAmount, ((_a = this.currency) === null || _a === void 0 ? void 0 : _a.code) || 'usd')}.`)) : (h("p", { class: "mb-2.5 font-semibold" }, localizedWords.entries.Lcz_NoPenalityIsApplied)), h("button", { onClick: () => {
                this.isOpen = !this.isOpen;
            }, class: "flex w-full items-center justify-between rounded-md  py-1 " }, h("p", null, localizedWords.entries.Lcz_MoreDetails), h("ir-icons", { name: this.isOpen ? 'angle_up' : 'angle_down', svgClassName: "h-3" })), this.isOpen && (h(Fragment, null, h("div", { class: 'divide-y py-2' }, (_b = this.policies) === null || _b === void 0 ? void 0 : _b.map(d => (h("div", { class: "space-y-1.5 py-2.5" }, h("p", { class: 'font-medium' }, d.rt_name, " ", d.rp_name), h("p", { class: "text-xs text-gray-500" }, d.statement)))))))))), h("div", { key: '98576426ff6adc0023d878f541b16de22fd86c55', slot: "modal-footer" }, h("ir-button", { key: 'f3ac9e310c1b8280677a031dfc1b5145a2daf94a', label: localizedWords.entries.Lcz_Cancel, variants: "outline", onButtonClick: () => {
                this.closeAlertDialog();
            }, size: "md" }), h("ir-button", { key: '022658f08afb935b89b5acecb590f1fbcc208382', disabled: isPending, size: "md", label: localizedWords.entries.Lcz_AcceptAndConfirm, isLoading: isRequestPending('/Request_Booking_Cancelation'), onButtonClick: async () => {
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
