import { PickupFormData } from "../../../models/pickup";
import { IrUserFormData } from "../../../models/user_form";
import { AuthService } from "../../../services/api/auth.service";
import { PaymentService } from "../../../services/api/payment.service";
import { PropertyService } from "../../../services/api/property.service";
import app_store from "../../../stores/app.store";
import booking_store, { calculateTotalCost, validateBooking } from "../../../stores/booking";
import { checkout_store } from "../../../stores/checkout.store";
import { isRequestPending } from "../../../stores/ir-interceptor.store";
import { getDateDifference } from "../../../utils/utils";
import { Host, h } from "@stencil/core";
import { ZodError } from "zod";
export class IrCheckoutPage {
    constructor() {
        this.propertyService = new PropertyService();
        this.paymentService = new PaymentService();
        this.authService = new AuthService();
        this.isLoading = false;
        this.error = undefined;
    }
    componentWillLoad() {
        const token = app_store.app_data.token;
        this.propertyService.setToken(token);
        this.paymentService.setToken(token);
        this.authService.setToken(token);
    }
    async handleBooking(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.resetErrorState();
        if (!this.validateUserForm() || !this.validateBookingDetails() || !this.validatePickupForm() || this.validatePolicyAcceptance()) {
            this.isLoading = false;
            return;
        }
        await this.processBooking();
    }
    validatePolicyAcceptance() {
        if (checkout_store.agreed_to_services) {
            return false;
        }
        this.error = { cause: 'booking-summary', issues: 'unchecked aggreement' };
        return true;
    }
    resetErrorState() {
        this.error = undefined;
        this.isLoading = true;
    }
    validateUserForm() {
        try {
            IrUserFormData.parse(checkout_store.userFormData);
            return true;
        }
        catch (error) {
            if (error instanceof ZodError) {
                console.log(error.errors);
                this.handleError('user', error);
            }
            return false;
        }
    }
    validateBookingDetails() {
        const isValid = validateBooking();
        if (!isValid) {
            this.error = {
                cause: 'booking-details',
                issues: 'missing guestname',
            };
            this.errorElement = this.bookingDetails;
            this.scrollToError();
            return false;
        }
        return true;
    }
    validatePickupForm() {
        if (checkout_store.pickup.location) {
            try {
                PickupFormData.parse(checkout_store.pickup);
                return true;
            }
            catch (error) {
                if (error instanceof ZodError) {
                    this.handleError('pickup', error);
                }
                return false;
            }
        }
        return true;
    }
    handleError(cause, error) {
        let issues = {};
        error.issues.map(issue => (issues[issue.path[0]] = issue));
        this.error = {
            cause,
            issues,
        };
        this.errorElement = cause === 'pickup' ? this.pickupForm : this.userForm;
        this.scrollToError();
    }
    async processBooking() {
        var _a;
        try {
            const result = await this.propertyService.bookUser();
            booking_store.booking = result;
            const conversionTag = (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.tags.find(t => t.key === 'conversion');
            if (conversionTag && conversionTag.value) {
                this.modifyConversionTag(conversionTag.value);
            }
            const currentPayment = app_store.property.allowed_payment_methods.find(p => { var _a; return p.code === ((_a = checkout_store.payment) === null || _a === void 0 ? void 0 : _a.code); });
            if (!currentPayment || !(currentPayment === null || currentPayment === void 0 ? void 0 : currentPayment.is_payment_gateway)) {
                app_store.invoice = {
                    email: booking_store.booking.guest.email,
                    booking_number: booking_store.booking.booking_nbr,
                };
                this.routing.emit('invoice');
            }
            else {
                await this.processPayment(result, currentPayment);
            }
        }
        catch (error) {
            console.error('Booking process failed:', error);
        }
        finally {
            this.isLoading = false;
        }
    }
    modifyConversionTag(tag) {
        const booking = booking_store.booking;
        tag = tag.replace(/\$\$total_price\$\$/g, booking.financial.total_amount.toString());
        tag = tag.replace(/\$\$length_of_stay\$\$/g, getDateDifference(new Date(booking.from_date), new Date(booking.to_date)).toString());
        tag = tag.replace(/\$\$booking_xref\$\$/g, booking.booking_nbr.toString());
        tag = tag.replace(/\$\$curr\$\$/g, booking.currency.code.toString());
        this.runScriptAndRemove(tag);
    }
    async processPayment(bookingResult, currentPayment) {
        let token = app_store.app_data.token;
        if (!app_store.is_signed_in) {
            token = await this.authService.login({
                option: 'direct',
                params: {
                    email: bookingResult.guest.email,
                    booking_nbr: bookingResult.booking_nbr,
                },
            }, false);
        }
        const { prePaymentAmount } = calculateTotalCost();
        if (prePaymentAmount > 0) {
            await this.paymentService.GeneratePaymentCaller({
                token,
                params: {
                    booking_nbr: bookingResult.booking_nbr,
                    amount: prePaymentAmount,
                    currency_id: bookingResult.currency.id,
                    email: bookingResult.guest.email,
                    pgw_id: currentPayment.id.toString(),
                },
                onRedirect: url => (window.location.href = url),
                onScriptRun: script => this.runScriptAndRemove(script),
            });
        }
    }
    scrollToError() {
        if (this.errorElement) {
            this.errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            window.setTimeout(() => {
                window.scrollBy(0, -150);
            }, 500);
        }
    }
    runScriptAndRemove(scriptContent) {
        const script = document.createElement('script');
        script.textContent = scriptContent;
        document.body.appendChild(script);
        document.body.removeChild(script);
    }
    render() {
        console.log(isRequestPending('/Get_Setup_Entries_By_TBL_NAME_MULTI') || isRequestPending('/Get_Exposed_Countries'));
        if (isRequestPending('/Get_Setup_Entries_By_TBL_NAME_MULTI') || isRequestPending('/Get_Exposed_Countries')) {
            return h("ir-checkout-skeleton", null);
        }
        return (h(Host, null, h("main", { class: "flex w-full  flex-col justify-between gap-4  md:flex-row md:items-start" }, h("section", { class: "w-full space-y-4 md:max-w-4xl" }, h("div", { class: "flex items-center gap-2.5" }, h("ir-button", { variants: "icon", onButtonClick: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.routing.emit('booking');
            }, iconName: app_store.dir === 'RTL' ? 'angle_right' : 'angle_left' }), h("p", { class: "text-2xl font-semibold" }, "Complete your booking")), !app_store.is_signed_in && (h("div", null, h("ir-quick-auth", null))), h("div", { class: 'space-y-8' }, h("div", null, h("ir-user-form", { ref: el => (this.userForm = el), class: "", errors: this.error && this.error.cause === 'user' ? this.error.issues : undefined })), h("div", null, h("ir-booking-details", { ref: el => (this.bookingDetails = el), errors: this.error && this.error.cause === 'booking-details' ? this.error.issues : undefined })), h("div", null, h("ir-pickup", { ref: el => (this.pickupForm = el), errors: this.error && this.error.cause === 'pickup' ? this.error.issues : undefined })))), h("section", { class: "w-full md:sticky  md:top-20  md:flex md:max-w-md md:justify-end" }, h("ir-booking-summary", { error: this.error && this.error.cause === 'booking-summary' ? true : false, isLoading: this.isLoading })))));
    }
    static get is() { return "ir-checkout-page"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-checkout-page.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-checkout-page.css"]
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "error": {}
        };
    }
    static get events() {
        return [{
                "method": "routing",
                "name": "routing",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "pages",
                    "resolved": "\"booking\" | \"booking-listing\" | \"checkout\" | \"invoice\"",
                    "references": {
                        "pages": {
                            "location": "import",
                            "path": "@/models/common",
                            "id": "src/models/common.ts::pages"
                        }
                    }
                }
            }];
    }
    static get listeners() {
        return [{
                "name": "bookingClicked",
                "method": "handleBooking",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-checkout-page.js.map
