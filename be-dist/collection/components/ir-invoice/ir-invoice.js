import { Host, h } from "@stencil/core";
import { isBefore } from "date-fns";
import { cn, formatAmount, getDateDifference, getUserPreference as getUserPreference, runScriptAndRemove } from "../../utils/utils";
import localizedWords from "../../stores/localization.store";
import app_store from "../../stores/app.store";
import { PropertyService } from "../../services/api/property.service";
import { CommonService } from "../../services/api/common.service";
import { AuthService } from "../../services/api/auth.service";
import { PaymentService } from "../../services/api/payment.service";
import { BookingListingAppService } from "../../services/app/booking-listing.service";
import InvoiceSkeleton from "./InvoiceSkeleton";
import Token from "../../models/Token";
import moment from "moment/min/moment-with-locales";
export class IrInvoice {
    constructor() {
        this.baseUrl = 'https://gateway.igloorooms.com/IRBE';
        this.status = 1;
        this.perma_link = null;
        this.aName = null;
        this.headerShown = true;
        this.footerShown = true;
        this.headerMessageShown = true;
        this.locationShown = true;
        this.be = false;
        this.version = '2.0';
        this.isAuthenticated = false;
        this.isLoading = false;
        this.cancellation_message = null;
        this.guarantee_message = null;
        this.token = new Token();
        this.propertyService = new PropertyService();
        this.commonService = new CommonService();
        this.authService = new AuthService();
        this.paymentService = new PaymentService();
        this.bookingListingAppService = new BookingListingAppService();
        this.payment_option = null;
        this.amount = null;
    }
    async componentWillLoad() {
        if (!this.baseUrl) {
            throw new Error('Missing base url');
        }
        this.isLoading = true;
        if (!this.be) {
            getUserPreference(this.language);
        }
        const isAuthenticated = this.commonService.checkUserAuthState();
        if (isAuthenticated) {
            this.token.setToken(isAuthenticated.token);
            this.isAuthenticated = true;
        }
        else {
            if (this.ticket) {
                this.token.setToken(this.ticket);
                this.isAuthenticated = true;
                return;
            }
            const token = await this.commonService.getBEToken();
            this.token.setToken(token);
        }
        this.fetchData();
    }
    async handleBookingNumberChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.fetchBooking();
        }
    }
    async handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.token.setToken(this.ticket);
            this.isAuthenticated = true;
        }
    }
    async fetchBooking() {
        this.booking = await this.propertyService.getExposedBooking({ booking_nbr: this.bookingNbr, language: this.language || app_store.userPreferences.language_id, currency: null }, true);
    }
    async fetchData(language, resetLanguage) {
        var _a;
        if (language === void 0) {
            language = ((_a = this.language) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || app_store.userPreferences.language_id;
        }
        if (resetLanguage === void 0) {
            resetLanguage = false;
        }
        if (!this.isAuthenticated) {
            const token = await this.authService.login({ option: 'direct', params: { email: this.email, booking_nbr: this.bookingNbr } }, false);
            this.token.setToken(token);
        }
        const requests = [this.propertyService.getExposedBooking({ booking_nbr: this.bookingNbr, language, currency: null })];
        if (!this.be || resetLanguage) {
            requests.push(this.commonService.getExposedLanguage());
            requests.push(this.propertyService.getExposedProperty({
                id: this.propertyId,
                language,
                aname: this.aName,
                perma_link: this.perma_link,
            }));
        }
        const results = await Promise.all(requests);
        this.booking = results[0];
        this.payment_option = this.bookingListingAppService.detectPaymentOrigin(this.booking);
        const book_date = new Date(this.booking.booked_on.date);
        book_date.setHours(this.booking.booked_on.hour + 1);
        book_date.setMinutes(this.booking.booked_on.minute);
        await this.setAmountAndCancelationPolicy();
        this.isLoading = false;
    }
    async openPrivacyPolicy(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (this.privacyPolicyRef) {
            this.privacyPolicyRef.openModal();
        }
    }
    async handleLanguageChanged(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        console.warn('request fetchData');
        this.fetchData(e.detail, true);
    }
    async setAmountAndCancelationPolicy() {
        // if (this.amount || isBefore(new Date(this.booking.to_date), new Date())) {
        //   return;
        // }
        // const [bookings_by_amount] = await Promise.all([this.paymentService.getBookingPrepaymentAmount(this.booking)]);
        // const { amount, cancelation_message, guarantee_message, cancelation_policies } = bookings_by_amount;
        // this.cancelation_policies = cancelation_policies;
        // this.cancelation_message = cancelation_message;
        // this.guarantee_message = guarantee_message;
        // this.amount = amount;
    }
    renderBookingDetailHeader() {
        const total_nights = getDateDifference(moment(this.booking.from_date, 'YYYY-MM-DD'), moment(this.booking.to_date, 'YYYY-MM-DD'));
        // const nbr_of_persons = this.booking.occupancy.adult_nbr + this.booking.occupancy.children_nbr;
        const nbr_of_persons = this.booking.rooms.reduce((prev, room) => prev + Number(room.rateplan.selected_variation.adult_nbr) + Number(room.rateplan.selected_variation.child_nbr), 0);
        const total_rooms = this.booking.rooms.length;
        return `${total_nights} ${total_nights > 1 ? localizedWords.entries.Lcz_Nights : localizedWords.entries.Lcz_night} - ${nbr_of_persons}
    ${nbr_of_persons > 1 ? localizedWords.entries.Lcz_Persons : localizedWords.entries.Lcz_Person} - ${total_rooms}
    ${total_rooms > 1 ? localizedWords.entries.Lcz_Rooms : localizedWords.entries.Lcz_Room}`;
    }
    getPropertyEmail() {
        var _a, _b;
        const { email } = (_b = (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.contacts) === null || _b === void 0 ? void 0 : _b.find(c => c.type === 'booking');
        if (!email) {
            return null;
        }
        const subject = `Ref Booking#${this.bookingNbr}`;
        const encodedSubject = encodeURIComponent(subject);
        return `mailto:${email}?subject=${encodedSubject}`;
    }
    renderPaymentText(paymentOption) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        if (((_c = (_b = (_a = this.booking) === null || _a === void 0 ? void 0 : _a.extras) === null || _b === void 0 ? void 0 : _b.find(e => e.key === 'agent_payment_mode')) === null || _c === void 0 ? void 0 : _c.value) === '001') {
            return h("p", { class: "total-payment text-sm" }, localizedWords.entries.Lcz_OnCredit);
        }
        if (!paymentOption) {
            return null;
        }
        if (paymentOption.is_payment_gateway) {
            const amount = (_e = (_d = this.booking.financial.payments) === null || _d === void 0 ? void 0 : _d.reduce((prev, cur) => cur.amount + prev, 0)) !== null && _e !== void 0 ? _e : 0;
            return (h("p", { class: "total-payment text-sm" }, localizedWords.entries.Lcz_YouHavePaid, " ", h("span", null, formatAmount(amount, this.booking.currency.code))));
        }
        if (paymentOption.code === '005') {
            return (h("div", null, h("p", { class: "total-payment text-sm" }, localizedWords.entries.Lcz_DueAmountNow, " ", h("span", null, formatAmount(this.booking.financial.due_amount, this.booking.currency.code))), h("p", { class: "mt-1.5 text-xs text-gray-700", innerHTML: ((_g = (_f = paymentOption.localizables) === null || _f === void 0 ? void 0 : _f.find(d => d.language.code.toLowerCase() === app_store.userPreferences.language_id.toLowerCase())) === null || _g === void 0 ? void 0 : _g.description) ||
                    ((_j = (_h = paymentOption.localizables) === null || _h === void 0 ? void 0 : _h.find(d => d.language.code.toLowerCase() === 'en')) === null || _j === void 0 ? void 0 : _j.description) })));
        }
        if (paymentOption.code === '000') {
            return h("p", { class: "total-payment text-sm" }, localizedWords.entries.Lcz_NoDepositRequired);
        }
        return (h("p", { class: "total-payment text-sm" }, localizedWords.entries.Lcz_YourCardWillBeCharged, " ", h("span", null, formatAmount(this.booking.financial.gross_total, this.booking.currency.code))));
    }
    async processPayment() {
        var _a;
        const paymentCode = this.booking.extras.find(e => e.key === 'payment_code');
        if (!paymentCode) {
            console.error('missing paymentcode');
            return;
        }
        const prePaymentAmount = this.booking.extras.find(e => e.key === 'prepayment_amount');
        if (!prePaymentAmount) {
            console.error('missing prepayment amount');
            return;
        }
        const paymentMethod = app_store.property.allowed_payment_methods.find(apm => apm.code === paymentCode.value);
        if (!paymentMethod) {
            console.error('Invalid payment method');
            return;
        }
        if (this.amount || Number(prePaymentAmount.value) > 0) {
            await this.paymentService.GeneratePaymentCaller({
                token: app_store.app_data.token,
                params: {
                    booking_nbr: this.booking.booking_nbr,
                    amount: (_a = Number(this.amount || prePaymentAmount.value)) !== null && _a !== void 0 ? _a : 0,
                    currency_id: this.booking.currency.id,
                    email: this.booking.guest.email,
                    pgw_id: paymentMethod.id.toString(),
                },
                onRedirect: url => (window.location.href = url),
                onScriptRun: script => runScriptAndRemove(script),
            });
        }
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
        if (!this.booking && !this.isLoading) {
            return null;
        }
        if (this.isLoading) {
            return (h("div", { class: "flex  flex-col gap-4 " }, h(InvoiceSkeleton, null)));
        }
        const google_maps_url = `http://maps.google.com/maps?q=${app_store.property.location.latitude},${app_store.property.location.longitude}`;
        const { cancel, payment } = this.bookingListingAppService.getBookingActions(this.booking);
        return (h(Host, null, h("ir-interceptor", null), h("main", { class: "relative flex w-full flex-col space-y-5" }, this.headerShown && (h("section", { class: "sticky top-0 z-50 m-0  w-full  p-0" }, h("ir-nav", { class: 'm-0 p-0', showBookingCode: false, website: (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.space_theme.website, logo: (_c = (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.space_theme) === null || _c === void 0 ? void 0 : _c.logo, menuShown: this.be }))), h("section", { class: `flex-1 ${this.be ? '' : 'invoice-container mx-auto w-full max-w-6xl'}` }, this.booking.is_requested_to_cancel ? (h("div", { class: 'invoice-container' }, h("p", { class: 'text-xl font-medium' }, localizedWords.entries.Lcz_ThisBookingIs.replace('%1', (_d = localizedWords.entries) === null || _d === void 0 ? void 0 : _d.Lcz_Cancelled)))) : this.headerMessageShown && ((_e = this.booking) === null || _e === void 0 ? void 0 : _e.status.code) !== '003' && isBefore(new Date(), new Date(this.booking.to_date)) ? (h("div", { class: 'invoice-container' }, h("p", { class: `flex items-center gap-4 text-xl font-medium ${this.status === 1 ? 'text-green-600' : 'text-red-500'} ${this.be ? '' : ''}` }, h("ir-icons", { name: this.status === 1 ? 'check' : 'xmark' }), h("span", null, " ", this.status === 1 ? localizedWords.entries.Lcz_YourBookingIsConfirmed : localizedWords.entries.Lcz_YourPaymentIsUnsuccesful)), this.status === 1 && h("p", null, localizedWords.entries.Lcz_AnEmailHasBeenSent.replace('%1', this.booking.guest.email)))) : (h("div", { class: 'invoice-container' }, h("p", { class: 'text-xl font-medium ' }, localizedWords.entries.Lcz_ThisBookingIs.replace('%1', this.booking.status.description)))), h("div", { class: `flex  ${this.locationShown ? 'w-full' : 'w-full'} gap-16 ` }, h("div", { class: `invoice-container ${this.locationShown ? 'w-full' : 'w-full'}` }, h("section", { class: "flex flex-col gap-4 md:flex-row md:items-center" }, payment.show && this.status === 1 && (h("ir-button", { label: payment.label, class: 'w-full text-center md:w-fit', onButtonClick: () => this.processPayment() })), this.status === 1 ? (h("a", { href: google_maps_url, target: "_blank", class: cn(`button-outline`, 'flex items-center justify-center'), "data-size": "sm" }, localizedWords.entries.Lcz_GetDirections)) : (this.payment_option.is_payment_gateway && (h("ir-button", { class: 'w-full text-center md:w-fit', label: localizedWords.entries.Lcz_RetryPayment + ' ' + payment.formattedAmount, onButtonClick: () => this.processPayment() }))), h("a", { href: this.getPropertyEmail(), target: "_blank", class: cn(`button-outline`, 'flex items-center justify-center'), "data-size": "sm" }, localizedWords.entries.Lcz_MessageProperty), cancel.show && (h("ir-button", { class: 'w-full md:w-fit', variants: "outline", label: localizedWords.entries.Lcz_CancelBooking, onButtonClick: async () => {
                this.bookingCancellation.openDialog();
            } }))), h("section", { class: "booking-info" }, h("p", { class: "booking-info-text" }, localizedWords.entries.Lcz_BookingReference, " ", h("span", null, this.booking.booking_nbr)), h("p", { class: "booking-info-text" }, localizedWords.entries.Lcz_BookedBy, ' ', h("span", null, this.booking.guest.first_name, " ", this.booking.guest.last_name)), h("p", { class: "booking-info-text" }, localizedWords.entries.Lcz_CheckIn, ": ", h("span", null, moment(this.booking.from_date, 'YYYY-MM-DD').format('ddd, DD MMM YYYY'), " "), h("span", null, localizedWords.entries.Lcz_From, " ", (_f = app_store.property) === null || _f === void 0 ? void 0 :
            _f.time_constraints.check_in_from)), h("p", { class: "booking-info-text" }, localizedWords.entries.Lcz_CheckOut, ": ", h("span", null, moment(this.booking.to_date).format('ddd, DD MMM YYYY'), " "), h("span", null, localizedWords.entries.Lcz_Before, " ", (_g = app_store.property) === null || _g === void 0 ? void 0 :
            _g.time_constraints.check_out_till)), h("p", { class: "booking-info-text" }, localizedWords.entries.Lcz_ArrivalTime, " ", h("span", null, this.booking.arrival.description)), this.booking.remark && (h("p", { class: "booking-info-text" }, localizedWords.entries.Lcz_SpecialRequest, ": ", h("span", null, this.booking.remark)))), h("section", { class: "booking-details space-y-2" }, h("div", { class: "flex flex-wrap items-center justify-between gap-1 text-center md:text-right" }, h("div", { class: "flex items-center gap-4" }, h("ir-icons", { name: "bed" }), h("h3", { class: "booking-details-header" }, this.renderBookingDetailHeader())), h("p", { class: "text-xs" }, (_h = app_store.property) === null || _h === void 0 ? void 0 : _h.tax_statement)), h("div", null, (_j = this.booking.rooms) === null || _j === void 0 ? void 0 : _j.map(room => (h("div", { class: "room-info", key: room.identifier }, h("div", { class: "flex w-full items-center justify-between" }, h("h4", { class: "room-type" }, room.roomtype.name), h("p", { class: "text-lg font-medium text-green-600" }, " ", formatAmount(room.gross_total, this.booking.currency.code))), h("p", { class: "room-info-text" }, localizedWords.entries.Lcz_GuestName, ' ', h("span", null, room.guest.first_name, " ", room.guest.last_name, " (", h("span", { innerHTML: this.formatOccupancy(room.rateplan.selected_variation, room.occupancy) }), ")")), h("p", { class: "room-info-text" }, localizedWords.entries.Lcz_MealPlan, ' ', h("span", null, room.rateplan.short_name, room.rateplan.is_non_refundable ? ' - ' + localizedWords.entries.Lcz_NonRefundable : '')), this.cancellation_message && h("p", { class: "room-info-text", innerHTML: `${localizedWords.entries.Lcz_Cancelation}: ${this.cancellation_message}` }), this.guarantee_message && h("p", { class: "room-info-text", innerHTML: `${localizedWords.entries.Lcz_Guarantee}: ${this.guarantee_message}` })))))), this.booking.pickup_info && (h("section", { class: "space-y-2" }, h("div", { class: 'flex items-center gap-4' }, h("ir-icons", { name: "taxi" }), h("h3", { class: 'booking-details-header' }, localizedWords.entries.Lcz_Pickup)), h("div", { class: "room-info" }, h("div", { class: "flex w-full items-center justify-between" }, h("p", { class: "flex items-center gap-4" }, h("p", { class: "room-info-text" }, `${localizedWords.entries.Lcz_Date}:`, " ", h("span", null, moment(this.booking.pickup_info.date, 'YYYY-MM-DD').format('ddd, DD MMM YYYY'))), h("p", { class: "room-info-text" }, `${localizedWords.entries.Lcz_Time}:`, ' ', h("span", null, this.booking.pickup_info.hour, ":", this.booking.pickup_info.minute))), h("p", { class: "text-lg font-medium text-green-600" }, formatAmount(this.booking.pickup_info.total, this.booking.pickup_info.currency.code))), h("p", { class: "room-info-text" }, `${localizedWords.entries.Lcz_FlightDetails}:`, " ", h("span", null, this.booking.pickup_info.details)), h("p", { class: "room-info-text" }, `${localizedWords.entries.Lcz_NoOfVehicles}:`, " ", h("span", null, this.booking.pickup_info.nbr_of_units)), h("p", { class: 'room-info-text text-xs' }, app_store.property.pickup_service.pickup_instruction.description, app_store.property.pickup_service.pickup_cancelation_prepayment.description)))), h("section", { class: "space-y-2" }, h("div", { class: 'flex items-center gap-4' }, h("ir-icons", { name: "credit_card" }), h("h3", { class: 'booking-details-header' }, localizedWords.entries.Lcz_PaymentDetails)), h("p", { class: "total-payment" }, localizedWords.entries.Lcz_Total, ' ', h("span", { class: "payment_amount text-green-600" }, formatAmount(this.booking.financial.gross_total, this.booking.currency.code))), this.renderPaymentText(this.payment_option)), h("section", { class: "space-y-2" }, h("div", { class: "flex items-center gap-4" }, h("ir-icons", { name: "danger" }), h("h3", { class: 'booking-details-header' }, localizedWords.entries.Lcz_ImportantInformation)), h("p", { innerHTML: app_store.property.description.important_info })), h("section", { class: 'space-y-2' }, h("div", { class: "flex items-center gap-4" }, h("ir-icons", { name: "car" }), h("p", null, (_k = app_store.property) === null || _k === void 0 ? void 0 :
            _k.parking_offering.title, " ", localizedWords.entries.Lcz_At, ' ', ((_l = app_store.property) === null || _l === void 0 ? void 0 : _l.parking_offering.pricing) > 0 && (h("span", null, formatAmount((_m = app_store.property) === null || _m === void 0 ? void 0 : _m.parking_offering.pricing, app_store.userPreferences.currency_id), "/", (_o = app_store.property) === null || _o === void 0 ? void 0 :
            _o.parking_offering.schedule)))), h("div", { class: "flex items-center gap-4" }, h("ir-icons", { name: "pets" }), h("p", null, (_p = app_store.property) === null || _p === void 0 ? void 0 : _p.pets_acceptance.title)), h("div", { class: "flex items-center gap-4 " }, h("ir-icons", { name: "baby" }), h("p", null, (_q = app_store.property) === null || _q === void 0 ? void 0 : _q.baby_cot_offering.title)))), this.locationShown && (h("div", { class: "property_info sticky top-[20%]" }, ((_r = app_store.property) === null || _r === void 0 ? void 0 : _r.space_theme.background_image) && (h("div", { class: "lg:aspect9-[16/9] aspect-[1/1] max-h-32 w-full" }, h("img", { loading: "lazy", class: "property_img h-full w-full object-cover", src: ((_s = app_store.property) === null || _s === void 0 ? void 0 : _s.images.length) === 0 ? app_store.property.space_theme.background_image : (_t = app_store.property) === null || _t === void 0 ? void 0 : _t.images[0].url, alt: ((_u = app_store.property) === null || _u === void 0 ? void 0 : _u.images.length) === 0 ? app_store.property.name : app_store.property.images[0].tooltip }))), h("a", { class: "mapLink", target: "_blank", href: google_maps_url }, h("img", { alt: "property_location", src: `https://maps.googleapis.com/maps/api/staticmap?center=${((_v = app_store.property) === null || _v === void 0 ? void 0 : _v.location.latitude) || 34.022},${((_w = app_store.property) === null || _w === void 0 ? void 0 : _w.location.longitude) || 35.628}&zoom=15&size=1024x768&maptype=roadmap&markers=color:red%7Clabel:${app_store.property.name}%7C34.022,35.628&key=AIzaSyBNvKTcZZ9Mf3JQg_qkMAutFT1tP4BpGtc`, loading: "lazy" })), h("div", { class: "contact-info" }, h("span", null, h("label", { class: "m-0 p-0", htmlFor: "phone" }, localizedWords.entries.Lcz_Phone)), h("a", { id: "phone", class: "contact-link p-0", href: `tel:${(_x = app_store.property) === null || _x === void 0 ? void 0 : _x.phone}` }, ((_z = (_y = app_store.property) === null || _y === void 0 ? void 0 : _y.country) === null || _z === void 0 ? void 0 : _z.phone_prefix) || '', " ", (_0 = app_store.property) === null || _0 === void 0 ? void 0 :
            _0.phone)))))), this.footerShown && h("ir-footer", { version: this.version }), this.footerShown && h("ir-privacy-policy", { hideTrigger: true, ref: el => (this.privacyPolicyRef = el) }), h("ir-booking-cancellation", { booking: this.booking, ref: el => (this.bookingCancellation = el), onCancellationResult: async (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (e.detail.state === 'success') {
                    await this.fetchBooking();
                    const url = new URL(window.location.href);
                    url.searchParams.delete('s');
                    window.history.replaceState({}, document.title, url.toString());
                }
            } }))));
    }
    formatOccupancy({ adult_nbr, child_nbr }, { infant_nbr }) {
        const adultCount = adult_nbr > 0 ? adult_nbr : 0;
        const childCount = child_nbr > 0 ? child_nbr : 0;
        const infantCount = infant_nbr > 0 ? infant_nbr : 0;
        const adultLabel = adultCount > 1 ? localizedWords.entries.Lcz_Adults.toLowerCase() : localizedWords.entries.Lcz_Adult.toLowerCase();
        const childLabel = childCount > 1 ? localizedWords.entries.Lcz_Children.toLowerCase() : localizedWords.entries.Lcz_Child.toLowerCase();
        const infantLabel = infantCount > 1 ? (localizedWords.entries.Lcz_Infants || 'Infants').toLowerCase() : (localizedWords.entries.Lcz_infant || 'Infant').toLowerCase();
        const parts = [];
        if (adultCount > 0) {
            parts.push(`${adultCount} ${adultLabel}`);
        }
        if (childCount > 0) {
            parts.push(`${childCount} ${childLabel}`);
        }
        if (infantCount > 0) {
            parts.push(`${infantCount} ${infantLabel}`);
        }
        return parts.join('&nbsp&nbsp&nbsp&nbsp');
    }
    static get is() { return "ir-invoice"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-invoice.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-invoice.css"]
        };
    }
    static get properties() {
        return {
            "email": {
                "type": "string",
                "mutable": true,
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
                "getter": false,
                "setter": false,
                "attribute": "email",
                "reflect": false
            },
            "propertyId": {
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
                "attribute": "property-id",
                "reflect": false
            },
            "baseUrl": {
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
                "getter": false,
                "setter": false,
                "attribute": "base-url",
                "reflect": false,
                "defaultValue": "'https://gateway.igloorooms.com/IRBE'"
            },
            "language": {
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
                "getter": false,
                "setter": false,
                "attribute": "language",
                "reflect": false
            },
            "bookingNbr": {
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
                "getter": false,
                "setter": false,
                "attribute": "booking-nbr",
                "reflect": false
            },
            "status": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "0 | 1",
                    "resolved": "0 | 1",
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
                "attribute": "status",
                "reflect": false,
                "defaultValue": "1"
            },
            "perma_link": {
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
                "getter": false,
                "setter": false,
                "attribute": "perma_link",
                "reflect": false,
                "defaultValue": "null"
            },
            "aName": {
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
                "getter": false,
                "setter": false,
                "attribute": "a-name",
                "reflect": false,
                "defaultValue": "null"
            },
            "headerShown": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "attribute": "header-shown",
                "reflect": false,
                "defaultValue": "true"
            },
            "footerShown": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "attribute": "footer-shown",
                "reflect": false,
                "defaultValue": "true"
            },
            "headerMessageShown": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "attribute": "header-message-shown",
                "reflect": false,
                "defaultValue": "true"
            },
            "locationShown": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "attribute": "location-shown",
                "reflect": false,
                "defaultValue": "true"
            },
            "be": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "attribute": "be",
                "reflect": false,
                "defaultValue": "false"
            },
            "ticket": {
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
                "getter": false,
                "setter": false,
                "attribute": "ticket",
                "reflect": false
            },
            "version": {
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
                "getter": false,
                "setter": false,
                "attribute": "version",
                "reflect": false,
                "defaultValue": "'2.0'"
            }
        };
    }
    static get states() {
        return {
            "booking": {},
            "isAuthenticated": {},
            "isLoading": {},
            "cancellation_message": {},
            "guarantee_message": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "bookingNbr",
                "methodName": "handleBookingNumberChange"
            }, {
                "propName": "ticket",
                "methodName": "handleTicketChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "openPrivacyPolicy",
                "method": "openPrivacyPolicy",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "languageChanged",
                "method": "handleLanguageChanged",
                "target": "body",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-invoice.js.map
