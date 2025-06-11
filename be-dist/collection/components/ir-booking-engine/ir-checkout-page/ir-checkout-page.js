import { PickupFormData } from "../../../models/pickup";
import { IrUserFormData } from "../../../models/user_form";
import { AuthService } from "../../../services/api/auth.service";
import { PaymentService } from "../../../services/api/payment.service";
import { PropertyService } from "../../../services/api/property.service";
import app_store from "../../../stores/app.store";
import booking_store, { calculateTotalRooms, clearCheckoutRooms, validateBooking } from "../../../stores/booking";
import { checkout_store } from "../../../stores/checkout.store";
import localizedWords from "../../../stores/localization.store";
import { detectCardType, generateCheckoutUrl, getDateDifference, injectHTMLAndRunScript, passedBookingCutoff } from "../../../utils/utils";
import { ZCreditCardSchemaWithCvc } from "../../../validators/checkout.validator";
import { Host, h } from "@stencil/core";
import moment from "moment";
import { ZodError } from "zod";
export class IrCheckoutPage {
    constructor() {
        this.isLoading = false;
        this.selectedPaymentMethod = null;
        this.isBookingConfirmed = false;
        this.propertyService = new PropertyService();
        this.paymentService = new PaymentService();
        this.authService = new AuthService();
    }
    async componentWillLoad() {
        this.calculateTotalPrepaymentAmount();
    }
    async calculateTotalPrepaymentAmount() {
        try {
            this.isLoading = true;
            checkout_store.prepaymentAmount = this.prepaymentAmount;
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    handlePrepaymentAmountChange(e) {
        this.prepaymentAmount = e.detail;
        checkout_store.prepaymentAmount = this.prepaymentAmount;
    }
    async handleBooking(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.resetErrorState();
        if (passedBookingCutoff()) {
            this.alertRef.openModal();
            return;
        }
        if (!this.validateUserForm() || !this.validateBookingDetails() || !this.validatePickupForm() || !this.validatePayment() || this.validatePolicyAcceptance()) {
            return;
        }
        // alert('do booking');
        await this.processBooking();
    }
    validatePolicyAcceptance() {
        if (checkout_store.agreed_to_services) {
            return false;
        }
        this.error = { cause: 'booking-summary', issues: 'unchecked agreement' };
        return true;
    }
    validatePayment() {
        var _a, _b, _c, _d, _e, _f, _g;
        if (booking_store.bookingAvailabilityParams.agent && ((_b = (_a = booking_store.bookingAvailabilityParams) === null || _a === void 0 ? void 0 : _a.agent) === null || _b === void 0 ? void 0 : _b.payment_mode.code) === '001') {
            return true;
        }
        if (!app_store.property.allowed_payment_methods.some(p => p.is_active)) {
            return true;
        }
        const currentPayment = app_store.property.allowed_payment_methods.find(p => { var _a; return p.code === ((_a = checkout_store.payment) === null || _a === void 0 ? void 0 : _a.code); });
        this.selectedPaymentMethod = currentPayment;
        if (!currentPayment && this.prepaymentAmount > 0) {
            return false;
        }
        if (!currentPayment && this.prepaymentAmount === 0) {
            return true;
        }
        if ((currentPayment === null || currentPayment === void 0 ? void 0 : currentPayment.is_payment_gateway) || (currentPayment === null || currentPayment === void 0 ? void 0 : currentPayment.code) === '000' || (currentPayment === null || currentPayment === void 0 ? void 0 : currentPayment.code) === '005') {
            return true;
        }
        try {
            ZCreditCardSchemaWithCvc.parse({
                cardNumber: (_d = (_c = checkout_store.payment) === null || _c === void 0 ? void 0 : _c.cardNumber) === null || _d === void 0 ? void 0 : _d.replace(/ /g, ''),
                cardHolderName: checkout_store.payment.cardHolderName,
                expiryDate: (_e = checkout_store.payment) === null || _e === void 0 ? void 0 : _e.expiry_month,
                // cvc: (checkout_store.payment as any)?.cvc,
            });
            const cardType = detectCardType((_g = (_f = checkout_store.payment) === null || _f === void 0 ? void 0 : _f.cardNumber) === null || _g === void 0 ? void 0 : _g.replace(/ /g, ''));
            if (cardType !== 'AMEX') {
                return true;
            }
            if (!app_store.property.allowed_cards.find(c => { var _a; return c.name.toLowerCase().includes((_a = (cardType === 'AMEX' ? 'American Express' : cardType)) === null || _a === void 0 ? void 0 : _a.toLowerCase()); })) {
                return false;
            }
            return true;
        }
        catch (error) {
            if (error instanceof ZodError) {
                // console.log(error.issues);
                // if (error.issues.length === 4 && this.prepaymentAmount === 0) {
                //   return true;
                // }
                this.handleError('payment', error);
            }
            return false;
        }
    }
    resetErrorState() {
        this.error = undefined;
    }
    validateUserForm() {
        try {
            IrUserFormData.parse(checkout_store.userFormData);
            return true;
        }
        catch (error) {
            if (error instanceof ZodError) {
                console.error(error.errors);
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
        this.errorElement = cause === 'pickup' ? this.pickupForm : cause === 'user' ? this.userForm : null;
        if (cause !== 'payment') {
            this.scrollToError();
        }
    }
    async processBooking() {
        var _a, _b;
        try {
            const result = await this.propertyService.bookUser();
            this.isBookingConfirmed = true;
            booking_store.booking = result;
            // if (app_store.app_data.isFromGhs) {
            //   destroyBookingCookie();
            // }
            const conversionTag = (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.tags.find(t => t.key === 'conversion');
            if (conversionTag && conversionTag.value) {
                this.modifyConversionTag(conversionTag.value);
            }
            if (!this.selectedPaymentMethod || !((_b = this.selectedPaymentMethod) === null || _b === void 0 ? void 0 : _b.is_payment_gateway) || this.prepaymentAmount === 0) {
                app_store.invoice = {
                    email: booking_store.booking.guest.email,
                    booking_number: booking_store.booking.booking_nbr,
                };
                return (window.location.href = generateCheckoutUrl(app_store.property.perma_link, {
                    e: result.guest.email,
                    b: result.booking_nbr,
                    lang: app_store.userPreferences.language_id,
                    s: '1',
                }));
            }
            else {
                let token = app_store.app_data.token;
                if (!app_store.is_signed_in) {
                    token = await this.authService.login({
                        option: 'direct',
                        params: {
                            email: result.guest.email,
                            booking_nbr: result.booking_nbr,
                        },
                    }, false);
                }
                const paymentAmount = this.prepaymentAmount;
                await this.processPayment(result, this.selectedPaymentMethod, paymentAmount, token);
            }
        }
        catch (error) {
            console.error('Booking process failed:', error);
        }
    }
    modifyConversionTag(tag) {
        var _a, _b, _c, _d;
        const booking = booking_store.booking;
        tag = tag.replace(/\$\$total_price\$\$/g, booking.financial.total_amount.toString());
        tag = tag.replace(/\$\$total_roomnights\$\$/g, (getDateDifference(moment(booking.from_date, 'YYYY-MM-DD'), moment(booking.to_date, 'YYYY-MM-DD')) * calculateTotalRooms()).toString());
        tag = tag.replace(/\$\$booking_xref\$\$/g, booking.booking_nbr.toString());
        tag = tag.replace(/\$\$curr\$\$/g, (_b = (_a = app_store.userPreferences) === null || _a === void 0 ? void 0 : _a.currency_id) === null || _b === void 0 ? void 0 : _b.toString());
        tag = tag.replace(/\$\$cur_code\$\$/g, (_d = (_c = app_store.userPreferences) === null || _c === void 0 ? void 0 : _c.currency_id) === null || _d === void 0 ? void 0 : _d.toString());
        injectHTMLAndRunScript(tag, 'conversion_tag');
    }
    async processPayment(bookingResult, currentPayment, paymentAmount, token) {
        let amountToBePayed = paymentAmount;
        if (amountToBePayed > 0) {
            await this.paymentService.GeneratePaymentCaller({
                token,
                params: {
                    booking_nbr: bookingResult.booking_nbr,
                    amount: amountToBePayed,
                    currency_id: app_store.currencies.find(a => a.code.toLowerCase() === (app_store.userPreferences.currency_id.toLowerCase() || 'usd')).id,
                    email: bookingResult.guest.email,
                    pgw_id: currentPayment.id.toString(),
                },
                onRedirect: url => (window.location.href = url),
                onScriptRun: script => injectHTMLAndRunScript(script, 'conversion_tag'),
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
    render() {
        var _a, _b, _c, _d;
        if (this.isLoading) {
            return (h("div", { class: 'flex min-h-screen flex-col' }, h("ir-checkout-skeleton", null)));
        }
        return (h(Host, null, h("main", { class: "flex  w-full  flex-col justify-between gap-4   md:flex-row md:items-start" }, h("section", { class: "w-full space-y-4 md:max-w-4xl" }, h("div", { class: "flex items-center gap-2.5" }, h("ir-button", { variants: "icon", onButtonClick: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.routing.emit('booking');
                clearCheckoutRooms();
            }, iconName: app_store.dir === 'RTL' ? 'angle_right' : 'angle_left' }), h("p", { class: "text-2xl font-semibold" }, localizedWords.entries.Lcz_CompleteYourBooking)), !app_store.is_signed_in && !app_store.app_data.hideGoogleSignIn && (h("div", null, h("ir-quick-auth", null))), h("div", { class: 'space-y-8' }, h("div", null, h("ir-user-form", { ref: el => (this.userForm = el), class: "", errors: this.error && this.error.cause === 'user' ? this.error.issues : undefined })), h("div", null, h("ir-booking-details", { ref: el => (this.bookingDetails = el), errors: this.error && this.error.cause === 'booking-details' ? this.error.issues : undefined })), h("div", null, h("ir-pickup", { ref: el => (this.pickupForm = el), errors: this.error && this.error.cause === 'pickup' ? this.error.issues : undefined })))), h("section", { class: "w-full md:sticky  md:top-20  md:flex md:max-w-md md:justify-end" }, h("ir-booking-summary", { isBookingConfirmed: this.isBookingConfirmed, prepaymentAmount: this.prepaymentAmount, error: this.error }))), h("ir-alert-dialog", { ref: el => (this.alertRef = el) }, h("div", { slot: "modal-title", class: 'flex items-center gap-4 pb-2' }, h("h1", { class: 'text-lg font-semibold' }, (_b = (_a = localizedWords === null || localizedWords === void 0 ? void 0 : localizedWords.entries) === null || _a === void 0 ? void 0 : _a.Lcz_SomethingWentWrong) !== null && _b !== void 0 ? _b : 'Something went wrong', "!")), h("p", { slot: "modal-body" }, (_c = localizedWords === null || localizedWords === void 0 ? void 0 : localizedWords.entries) === null || _c === void 0 ? void 0 : _c.Lcz_BookingIsNotAvailable), h("div", { slot: "modal-footer" }, h("ir-button", { label: (_d = localizedWords === null || localizedWords === void 0 ? void 0 : localizedWords.entries) === null || _d === void 0 ? void 0 : _d.Lcz_GoBack, onButtonClick: () => {
                this.routing.emit('booking');
                clearCheckoutRooms();
            } })))));
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
            "error": {},
            "selectedPaymentMethod": {},
            "prepaymentAmount": {},
            "isBookingConfirmed": {}
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
                    "resolved": "\"booking\" | \"booking-listing\" | \"checkout\" | \"invoice\" | \"user-profile\"",
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
                "name": "prepaymentChange",
                "method": "handlePrepaymentAmountChange",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "bookingClicked",
                "method": "handleBooking",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-checkout-page.js.map
