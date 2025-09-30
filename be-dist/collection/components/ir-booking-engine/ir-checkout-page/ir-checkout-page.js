import { PickupFormData } from "../../../models/pickup";
import { IrUserFormData } from "../../../models/user_form";
import { AuthService } from "../../../services/api/auth.service";
import { PaymentService } from "../../../services/api/payment.service";
import { PropertyService } from "../../../services/api/property.service";
import VariationService from "../../../services/app/variation.service";
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
        var _a, _b;
        this.calculateTotalPrepaymentAmount();
        if ((_b = (_a = app_store === null || app_store === void 0 ? void 0 : app_store.property) === null || _a === void 0 ? void 0 : _a.allowed_payment_methods) === null || _b === void 0 ? void 0 : _b.find(e => e.id === 13 && e.is_active)) {
            checkout_store.agreed_to_services = false;
        }
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
        var _a, _b, _c, _d, _e;
        try {
            /*
      
              1- before creating the payment
                  1- check if there is prepayment amount and the user chose an online payment
                      - if user currency diff than payment method currency
                      -   check availability with the payment method currency
                      if payment method have multiple currencies
                      check which one is the hotel currency
                      if didn't find any choose the first one
                      - recalculate the new prepayment amount;
                      - do payment
                      
                      
                      */
            const normalize = (s) => (s || '').trim().toLowerCase();
            const getCurrencyByCode = (code) => app_store.currencies.find(c => normalize(c.code) === normalize(code)) || null;
            // Returns a Currency object from app_store.currencies or null if no change is needed.
            // Priority: user's currency (if allowed) → hotel's currency (if allowed) → first allowed currency.
            // If the chosen currency equals the user's currency, returns null to indicate no switch is needed.
            const getMostEffectiveCurrency = () => {
                var _a, _b, _c, _d;
                const allowed = normalize(((_a = this.selectedPaymentMethod) === null || _a === void 0 ? void 0 : _a.allowed_currencies) || '');
                if (!allowed)
                    return null;
                const allowedList = allowed
                    .split(',')
                    .map(c => normalize(c))
                    .filter(Boolean);
                if (allowedList.length === 0)
                    return null;
                // Resolve user + hotel currency objects (fall back to 'usd' only if needed)
                const userCode = normalize((_b = app_store.userPreferences) === null || _b === void 0 ? void 0 : _b.currency_id) || 'usd';
                const hotelCode = normalize((_d = (_c = app_store.property) === null || _c === void 0 ? void 0 : _c.currency) === null || _d === void 0 ? void 0 : _d.code);
                const hotelCurrency = hotelCode ? getCurrencyByCode(hotelCode) : null;
                // 1) If the user's currency is allowed → no change.
                if (allowedList.includes(userCode))
                    return null;
                // 2) If the hotel's currency is allowed → switch to hotel currency.
                if (hotelCode && allowedList.includes(hotelCode) && hotelCurrency)
                    return hotelCurrency;
                // 3) Otherwise, pick the first allowed currency we can resolve from the store.
                for (const code of allowedList) {
                    const cur = getCurrencyByCode(code);
                    if (cur) {
                        // If this equals user currency (rare: user not in allowedList but store normalization mismatch), treat as no change.
                        if (normalize(cur.code) === userCode)
                            return null;
                        return cur;
                    }
                }
                // If none of the allowed codes exist in app_store.currencies, don't switch.
                return null;
            };
            let paymentAmount = this.prepaymentAmount;
            const mostEffectiveCurrency = getMostEffectiveCurrency();
            console.log({ mostEffectiveCurrency, paymentAmount });
            if (paymentAmount > 0 && mostEffectiveCurrency) {
                const variationService = new VariationService();
                if (normalize(mostEffectiveCurrency.code) !== (normalize((_a = app_store.userPreferences) === null || _a === void 0 ? void 0 : _a.currency_id) || 'usd')) {
                    //check availability
                    const data = await this.propertyService.getExposedBookingAvailability({
                        propertyid: app_store.app_data.property_id,
                        from_date: booking_store.bookingAvailabilityParams.from_date,
                        to_date: booking_store.bookingAvailabilityParams.to_date,
                        room_type_ids: [],
                        adult_nbr: booking_store.bookingAvailabilityParams.adult_nbr,
                        child_nbr: booking_store.bookingAvailabilityParams.child_nbr,
                        language: app_store.userPreferences.language_id,
                        currency_ref: mostEffectiveCurrency.code,
                        is_in_loyalty_mode: booking_store.bookingAvailabilityParams.loyalty ? true : !!booking_store.bookingAvailabilityParams.coupon,
                        promo_key: booking_store.bookingAvailabilityParams.coupon || '',
                        is_in_agent_mode: !!booking_store.bookingAvailabilityParams.agent || false,
                        agent_id: ((_b = booking_store.bookingAvailabilityParams.agent) === null || _b === void 0 ? void 0 : _b.id) || 0,
                        is_in_affiliate_mode: !!app_store.app_data.affiliate,
                        affiliate_id: app_store.app_data.affiliate ? app_store.app_data.affiliate.id : null,
                        update_store: false,
                    });
                    //recalculate the new prepayment amount
                    let total = 0;
                    for (const roomType of data.My_Result) {
                        const selectedRoomType = booking_store.ratePlanSelections[roomType.id];
                        if (!selectedRoomType)
                            continue;
                        for (const ratePlan of roomType.rateplans) {
                            const selectedRatePlan = selectedRoomType[ratePlan.id];
                            if (!selectedRatePlan)
                                continue;
                            const { checkoutVariations, infant_nbr } = selectedRatePlan;
                            checkoutVariations.forEach((checkoutVariation, index) => {
                                var _a, _b, _c;
                                const baseVariation = (_a = ratePlan.variations.find(v => v.adult_nbr === checkoutVariation.adult_nbr && v.child_nbr === checkoutVariation.child_nbr && v.infant_nbr === checkoutVariation.infant_nbr)) !== null && _a !== void 0 ? _a : checkoutVariation;
                                if (!baseVariation)
                                    return;
                                const variation = variationService.getVariationBasedOnInfants({
                                    baseVariation,
                                    variations: ratePlan.variations,
                                    infants: (_b = infant_nbr === null || infant_nbr === void 0 ? void 0 : infant_nbr[index]) !== null && _b !== void 0 ? _b : 0,
                                });
                                total += (_c = variation === null || variation === void 0 ? void 0 : variation.prepayment_amount_gross) !== null && _c !== void 0 ? _c : 0;
                            });
                        }
                    }
                    paymentAmount = total;
                }
            }
            const result = await this.propertyService.bookUser();
            this.isBookingConfirmed = true;
            booking_store.booking = result;
            // if (app_store.app_data.isFromGhs) {
            //   destroyBookingCookie();
            // }
            const conversionTag = (_c = app_store.property) === null || _c === void 0 ? void 0 : _c.tags.find(t => t.key === 'conversion');
            if (conversionTag && conversionTag.value) {
                this.modifyConversionTag(conversionTag.value);
            }
            if (!this.selectedPaymentMethod || !((_d = this.selectedPaymentMethod) === null || _d === void 0 ? void 0 : _d.is_payment_gateway) || this.prepaymentAmount === 0) {
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
                await this.processPayment({
                    booking: result,
                    paymentMethod: this.selectedPaymentMethod,
                    paymentAmount,
                    token,
                    currency: (mostEffectiveCurrency || getCurrencyByCode(normalize((_e = app_store.userPreferences) === null || _e === void 0 ? void 0 : _e.currency_id) || 'usd')),
                });
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
    async processPayment({ currency, booking, paymentMethod, paymentAmount, token, }) {
        let amountToBePayed = paymentAmount;
        if (amountToBePayed > 0) {
            await this.paymentService.GeneratePaymentCaller({
                token,
                params: {
                    booking_nbr: booking.booking_nbr,
                    amount: amountToBePayed,
                    currency_id: currency.id,
                    email: booking.guest.email,
                    pgw_id: paymentMethod.id.toString(),
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
