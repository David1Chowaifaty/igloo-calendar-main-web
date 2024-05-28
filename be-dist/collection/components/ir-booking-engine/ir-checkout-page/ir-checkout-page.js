import { PickupFormData } from "../../../models/pickup";
import { IrUserFormData } from "../../../models/user_form";
import { PaymentService } from "../../../services/api/payment.service";
import { PropertyService } from "../../../services/api/property.service";
import app_store from "../../../stores/app.store";
import booking_store, { calculateTotalCost, validateBooking } from "../../../stores/booking";
import { checkout_store } from "../../../stores/checkout.store";
import { isRequestPending } from "../../../stores/ir-interceptor.store";
import { Host, h } from "@stencil/core";
import { ZodError } from "zod";
export class IrCheckoutPage {
    constructor() {
        this.propertyService = new PropertyService();
        this.paymentService = new PaymentService();
        this.isLoading = false;
        this.error = undefined;
    }
    componentWillLoad() {
        this.propertyService.setToken(app_store.app_data.token);
        this.paymentService.setToken(app_store.app_data.token);
        this.propertyService.getExposedGuest();
    }
    async handleBooking(e) {
        e.stopImmediatePropagation();
        this.resetErrorState();
        if (!this.validateUserForm() || !this.validateBookingDetails() || !this.validatePickupForm()) {
            this.isLoading = false;
            return;
        }
        await this.processBooking();
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
    }
    async processBooking() {
        try {
            const result = await this.propertyService.bookUser();
            booking_store.booking = result;
            await this.processPayment(result);
        }
        catch (error) {
            console.error('Booking process failed:', error);
        }
        finally {
            this.isLoading = false;
        }
    }
    async processPayment(bookingResult) {
        const { prePaymentAmount } = calculateTotalCost();
        if (prePaymentAmount > 0) {
            const res = await this.paymentService.GeneratePaymentCaller({
                booking_nbr: bookingResult.booking_nbr,
                amount: prePaymentAmount,
                currency_id: bookingResult.currency.id,
            });
            if (res.type === 1) {
                window.location.href = res.caller;
            }
            else {
                console.warn('type 2');
            }
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
    render() {
        if (isRequestPending('/Get_Exposed_Booking_Availability') || isRequestPending('/Get_Exposed_Countries') || isRequestPending('/Get_Country_By_IP')) {
            return h("ir-checkout-skeleton", null);
        }
        return (h(Host, null, h("ir-seo-injector", { pageTitle: 'checkout', pageKeywords: "checkout", pageDescription: "checkout page" }), h("main", { class: "flex w-full  flex-col justify-between gap-4  md:flex-row md:items-start" }, h("section", { class: "w-full space-y-4 md:max-w-4xl" }, h("div", { class: "flex items-center gap-2.5" }, h("ir-button", { variants: "icon", onButtonClick: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.routing.emit('booking');
            } }, h("ir-icons", { name: app_store.dir === 'RTL' ? 'angle_right' : 'angle_left', slot: "btn-icon" })), h("p", { class: "text-2xl font-semibold" }, "Complete your booking")), h("div", null, h("ir-quick-auth", null)), h("div", { class: 'space-y-8' }, h("div", null, h("ir-user-form", { ref: el => (this.userForm = el), class: "", errors: this.error && this.error.cause === 'user' ? this.error.issues : undefined })), h("div", null, h("ir-booking-details", { ref: el => (this.bookingDetails = el), errors: this.error && this.error.cause === 'booking-details' ? this.error.issues : undefined })), h("div", null, h("ir-pickup", { ref: el => (this.pickupForm = el), errors: this.error && this.error.cause === 'pickup' ? this.error.issues : undefined })))), h("section", { class: "w-full md:sticky  md:top-20  md:flex md:max-w-md md:justify-end" }, h("ir-booking-summary", { isLoading: this.isLoading })))));
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
                    "resolved": "\"booking\" | \"checkout\" | \"invoice\"",
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
