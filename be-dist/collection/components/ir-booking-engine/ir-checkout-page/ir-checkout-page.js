import { PickupFormData } from "../../../models/pickup";
import { IrUserFormData } from "../../../models/user_form";
import { AuthService } from "../../../services/api/auth.service";
import { PaymentService } from "../../../services/api/payment.service";
import { PropertyService } from "../../../services/api/property.service";
import app_store from "../../../stores/app.store";
import booking_store, { calculateTotalCost, validateBooking } from "../../../stores/booking";
import { checkout_store } from "../../../stores/checkout.store";
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
        try {
            const result = await this.propertyService.bookUser();
            booking_store.booking = result;
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
    async processPayment(bookingResult, currentPayment) {
        var _a;
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
            const res = await this.paymentService.GeneratePaymentCaller(token, {
                booking_nbr: bookingResult.booking_nbr,
                amount: prePaymentAmount,
                currency_id: bookingResult.currency.id,
                email: bookingResult.guest.email,
                pgw_id: (_a = currentPayment.data.find(d => d.key === 'id')) === null || _a === void 0 ? void 0 : _a.value,
            });
            if (res.type === 1) {
                window.location.href = res.caller;
            }
            else {
                eval(res.caller);
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
        // if (isRequestPending('/Get_Exposed_Booking_Availability') || isRequestPending('/Get_Exposed_Countries') || isRequestPending('/Get_Country_By_IP')) {
        //   return <ir-checkout-skeleton></ir-checkout-skeleton>;
        // }
        return (h(Host, { key: 'a8616340dd1be54d3b9cf728d7b8b77c2d4b6503' }, h("main", { key: 'e8df946b4a30c66b97268c93162976913e5d31c8', class: "flex w-full  flex-col justify-between gap-4  md:flex-row md:items-start" }, h("section", { key: 'd353d9f1646fbfff8495f13705234775f424cdf8', class: "w-full space-y-4 md:max-w-4xl" }, h("div", { key: 'c07e608ebef273a35d9180c497a304172f39a8a8', class: "flex items-center gap-2.5" }, h("ir-button", { key: '92331fc0bf51e2fc41bae0e28bbf094b23a2ef3f', variants: "icon", onButtonClick: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.routing.emit('booking');
            }, iconName: app_store.dir === 'RTL' ? 'angle_right' : 'angle_left' }), h("p", { key: 'a65ef238cdc90c2b094b0f62ba576cdc1302225c', class: "text-2xl font-semibold" }, "Complete your booking")), !app_store.is_signed_in && (h("div", null, h("ir-quick-auth", null))), h("div", { key: '0c933d491c9c3413cfb514a340e8f36438a404f3', class: 'space-y-8' }, h("div", { key: '65ec056bf9b217a9081097bf3698d596d15c47cb' }, h("ir-user-form", { key: '2492d13b479646cf3f4a18543a554d719579bc28', ref: el => (this.userForm = el), class: "", errors: this.error && this.error.cause === 'user' ? this.error.issues : undefined })), h("div", { key: '478a0377f9208d76b447c10119beabef29b0da1a' }, h("ir-booking-details", { key: 'a18f45073b6b08477a0c981a03568e42d33a54d8', ref: el => (this.bookingDetails = el), errors: this.error && this.error.cause === 'booking-details' ? this.error.issues : undefined })), h("div", { key: 'd261d269ec010f74760ccd4e3044b0c295390eea' }, h("ir-pickup", { key: 'd57cd6164b367248e56ddea270be3d7449fc251c', ref: el => (this.pickupForm = el), errors: this.error && this.error.cause === 'pickup' ? this.error.issues : undefined })))), h("section", { key: 'd8c60aca5963b32e7fded81a23a694e1ecd44847', class: "w-full md:sticky  md:top-20  md:flex md:max-w-md md:justify-end" }, h("ir-booking-summary", { key: 'a7a34d1bf648aa3f8864bf293dbecbd68669d759', error: this.error && this.error.cause === 'booking-summary' ? true : false, isLoading: this.isLoading })))));
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
