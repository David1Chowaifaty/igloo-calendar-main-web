import { Fragment, h } from "@stencil/core";
import { isRequestPending } from "../../stores/ir-interceptor.store";
import { PaymentService } from "../../services/api/payment.service";
import { formatAmount } from "../../utils/utils";
import localizedWords from "../../stores/localization.store";
import app_store from "../../stores/app.store";
import { isBefore, isSameDay } from "date-fns";
export class IrBookingCancellation {
    constructor() {
        this.paymentService = new PaymentService();
        this.booking_nbr = undefined;
        this.cancellation = undefined;
        this.cancellation_policies = [];
        this.property_id = undefined;
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
            this.policies = this.cancellation_policies;
            const requests = [];
            if (this.cancellation_policies.length === 0 && this.booking) {
                const prepaymentPromise = this.paymentService.getBookingPrepaymentAmount(this.booking);
                requests.push(prepaymentPromise);
            }
            const overdueAmountPromise = this.setOverdueAmount();
            requests.push(overdueAmountPromise);
            const results = await Promise.all(requests);
            if (this.cancellation_policies.length === 0 && this.booking) {
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
        return (h("div", { key: 'f8ed49ae19881df272ea29a1198c7ceb4d57f711' }, h("ir-alert-dialog", { key: '46d651ec63250d265641dc22035c524f49fa29bc', ref: el => (this.alertDialog = el), onOpenChange: e => {
                if (!e.detail && this.isOpen) {
                    this.isOpen = false;
                }
            } }, h("h2", { key: '1c845f6983aca66bd40f598fb23e18dad150fb04', slot: "modal-title", class: "text-lg font-medium" }, localizedWords.entries.Lcz_BookingCancellation), h("div", { key: '0c65b21a8bfe068ce8b4aa1e42287e77eeb3de21', class: "py-3", slot: "modal-body" }, isPending ? (h("div", { class: "h-24" }, h("ir-skeleton", { class: "mb-2.5 h-4 w-60" }))) : (h(Fragment, null, this.paymentAmount > 0 ? (h("p", { class: "mb-2.5 font-semibold" }, localizedWords.entries.Lcz_IfYouCancelNow.replace('%1', formatAmount(this.paymentAmount, ((_a = this.currency) === null || _a === void 0 ? void 0 : _a.code) || 'usd')), ".")) : (h("p", { class: "mb-2.5 font-semibold" }, localizedWords.entries.Lcz_NoPenalityIsApplied)), h("button", { onClick: () => {
                this.isOpen = !this.isOpen;
            }, class: "flex w-full items-center justify-between rounded-md  py-1 " }, h("p", null, localizedWords.entries.Lcz_MoreDetails), h("ir-icons", { name: this.isOpen ? 'angle_up' : 'angle_down', svgClassName: "h-3" })), this.isOpen && (h(Fragment, null, isRequestPending('/Get_Exposed_Applicable_Policies') ? (h("div", { class: "h-20 w-full" }, h("ir-skeleton", { class: "mb-2.5 h-20  w-60" }))) : (h("div", { class: 'divide-y py-2' }, (_b = this.policies) === null || _b === void 0 ? void 0 : _b.map(d => (h("div", { class: "space-y-1.5 py-2.5" }, h("p", { class: 'font-medium' }, d.rt_name, " ", d.rp_name), h("p", { class: "text-xs text-gray-500" }, d.statement))))))))))), h("div", { key: '52ce9d1e926628dadf77979ce1cd027c2a05814b', slot: "modal-footer" }, h("ir-button", { key: '3abf62f1022ff1bc5d901ee4a7ea1c9cdbbcee11', label: localizedWords.entries.Lcz_Cancel, variants: "outline", onButtonClick: () => {
                this.closeAlertDialog();
            }, size: "md" }), h("ir-button", { key: '49fe8983e4749f24c844e5cde65b48856e7639ed', disabled: isPending, size: "md", label: localizedWords.entries.Lcz_AcceptAndConfirm, isLoading: isRequestPending('/Request_Booking_Cancelation'), onButtonClick: async () => {
                try {
                    await this.paymentService.RequestBookingCancellation(this.booking_nbr);
                    this.cancellationResult.emit({ state: 'success', booking_nbr: this.booking_nbr });
                    this.closeAlertDialog();
                }
                catch (error) {
                    console.error(error);
                    this.cancellationResult.emit({ state: 'failed', booking_nbr: this.booking_nbr });
                }
            } })))));
    }
    static get is() { return "ir-booking-cancellation"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booking-cancellation.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking-cancellation.css"]
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
            "cancellation": {
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
                "attribute": "cancellation",
                "reflect": false
            },
            "cancellation_policies": {
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
            "property_id": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "property_id",
                "reflect": false
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
                "method": "cancellationResult",
                "name": "cancellationResult",
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
//# sourceMappingURL=ir-booking-cancellation.js.map
