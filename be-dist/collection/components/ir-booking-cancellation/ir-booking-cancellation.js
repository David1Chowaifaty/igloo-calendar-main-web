import { Fragment, h } from "@stencil/core";
import { isRequestPending } from "../../stores/ir-interceptor.store";
import { PaymentService } from "../../services/api/payment.service";
import localizedWords from "../../stores/localization.store";
import app_store from "../../stores/app.store";
import { BookingService } from "../../services/api/booking.service";
export class IrBookingCancellation {
    constructor() {
        this.isOpen = false;
        this.policies = [];
        this.paymentService = new PaymentService();
        this.bookingService = new BookingService();
    }
    async init() {
        try {
            if (!this.booking) {
                throw new Error('Missing Booking');
            }
            this.policies = [];
            this.cancellationMessage = await this.bookingService.GetPenaltyStatement({
                booking_nbr: this.booking.booking_nbr,
                currency_id: this.booking.currency.id,
                language: app_store.userPreferences.language_id,
            });
        }
        catch (error) {
            console.error('Error during initialization:', error);
        }
    }
    async fetchRatePlansMoreDetails() {
        if (this.policies.length > 0) {
            return;
        }
        const results = await this.paymentService.getBookingPrepaymentAmount(this.booking);
        console.log(results);
        if (results) {
            this.policies = results.cancelation_policies;
        }
    }
    async openDialog() {
        this.openChange.emit(true);
        this.alertDialog.openModal();
        console.log(this.booking);
        if (!this.booking) {
            throw new Error('Missing booking');
        }
        await this.init();
    }
    closeAlertDialog() {
        this.alertDialog.closeModal();
        this.openChange.emit(false);
    }
    render() {
        var _a;
        const isPending = isRequestPending('/Get_Exposed_Applicable_Policies');
        // const isPending = isRequestPending('/Get_Exposed_Cancelation_Due_Amount');
        return (h("div", { key: '4ac6d41be0ae24cdfdc446fbc6d1908c7e4946f1' }, h("ir-alert-dialog", { key: '6381f38c1a9692bced1f9ec69096263939b4e0db', ref: el => (this.alertDialog = el), onOpenChange: e => {
                if (!e.detail && this.isOpen) {
                    this.isOpen = false;
                }
            } }, h("h2", { key: 'aee113a164775f262f828012c0d46d5b991808f8', slot: "modal-title", class: "text-lg font-medium" }, localizedWords.entries.Lcz_BookingCancellation), h("div", { key: 'af0ccf2111cd3fea8ff1564d664ecbec506052b0', class: "py-3", slot: "modal-body" }, isRequestPending('/Get_Penalty_Statement') ? (h("div", { class: "h-24" }, h("ir-skeleton", { class: "mb-2.5 h-4 w-60" }))) : (h(Fragment, null, h("p", { class: "mb-2.5" }, this.cancellationMessage), h("button", { onClick: () => {
                this.isOpen = !this.isOpen;
                this.fetchRatePlansMoreDetails();
            }, class: "flex w-full items-center justify-between rounded-md  py-1 " }, h("p", null, localizedWords.entries.Lcz_MoreDetails), h("ir-icons", { name: this.isOpen ? 'angle_up' : 'angle_down', svgClassName: "h-3" })), this.isOpen && (h(Fragment, null, isRequestPending('/Get_Exposed_Applicable_Policies') ? (h("div", { class: "h-20 w-full" }, h("ir-skeleton", { class: "mb-2.5 h-20  w-60" }))) : (h("div", { class: 'divide-y py-2' }, (_a = this.policies) === null || _a === void 0 ? void 0 : _a.map(d => (h("div", { class: "space-y-1.5 py-2.5" }, h("p", { class: 'font-medium' }, d.rt_name, " ", d.rp_name), h("p", { class: "text-xs text-gray-500" }, d.statement))))))))))), h("div", { key: '4e8196f485886eaa4c393b04bd44b24fc6199793', slot: "modal-footer" }, h("ir-button", { key: '7fa65c5673ee6a747ece574b12a20abfc93a1d57', label: localizedWords.entries.Lcz_Cancel, variants: "outline", onButtonClick: () => {
                this.closeAlertDialog();
            }, size: "md" }), h("ir-button", { key: '989b5b65814430303bad4f83ef518225068b06c1', disabled: isPending, size: "md", label: localizedWords.entries.Lcz_AcceptAndConfirm, isLoading: isRequestPending('/Request_Booking_Cancelation'), onButtonClick: async () => {
                try {
                    await this.paymentService.RequestBookingCancellation(this.booking.booking_nbr);
                    this.cancellationResult.emit({ state: 'success', booking_nbr: this.booking.booking_nbr });
                    this.closeAlertDialog();
                }
                catch (error) {
                    console.error(error);
                    this.cancellationResult.emit({ state: 'failed', booking_nbr: this.booking.booking_nbr });
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
                "getter": false,
                "setter": false,
                "attribute": "property_id",
                "reflect": false
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
                },
                "getter": false,
                "setter": false
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "isOpen": {},
            "policies": {},
            "cancellationMessage": {}
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
