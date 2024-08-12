import { Host, h } from "@stencil/core";
import { format, isBefore } from "date-fns";
import { cn, formatAmount, getDateDifference, runScriptAndRemove } from "../../utils/utils";
import localizedWords from "../../stores/localization.store";
import app_store from "../../stores/app.store";
import { PropertyService } from "../../services/api/property.service";
import { CommonService } from "../../services/api/common.service";
import axios from "axios";
import { AuthService } from "../../services/api/auth.service";
import { PaymentService } from "../../services/api/payment.service";
import { BookingListingAppService } from "../../services/app/booking-listing.service";
import InvoiceSkeleton from "./InvoiceSkeleton";
export class IrInvoice {
    constructor() {
        this.propertyService = new PropertyService();
        this.commonService = new CommonService();
        this.authService = new AuthService();
        this.paymentService = new PaymentService();
        this.bookingListingAppService = new BookingListingAppService();
        this.payment_option = null;
        this.amount = null;
        this.email = undefined;
        this.propertyId = undefined;
        this.baseUrl = undefined;
        this.language = 'en';
        this.bookingNbr = undefined;
        this.status = 1;
        this.perma_link = null;
        this.aName = null;
        this.headerShown = true;
        this.footerShown = true;
        this.headerMessageShown = true;
        this.locationShown = true;
        this.be = false;
        this.version = '2.0';
        this.booking = undefined;
        this.token = undefined;
        this.isAuthenticated = false;
        this.isLoading = false;
        this.cancelation_message = null;
        this.guarantee_message = null;
        this.cancelationMessage = undefined;
        this.amountToBePayed = undefined;
    }
    async componentWillLoad() {
        if (!this.baseUrl) {
            throw new Error('Missing base url');
        }
        axios.defaults.baseURL = this.baseUrl;
        axios.defaults.withCredentials = true;
        this.isLoading = true;
        const isAuthenticated = this.commonService.checkUserAuthState();
        console.log(isAuthenticated);
        if (isAuthenticated) {
            this.token = isAuthenticated.token;
            this.isAuthenticated = true;
        }
        else {
            this.token = await this.commonService.getBEToken();
        }
        this.init();
        this.fetchData();
    }
    detectPaymentOrigin() {
        var _a;
        if (!this.booking.extras) {
            return null;
        }
        const code = this.booking.extras.find(e => e.key === 'payment_code').value;
        if (!code) {
            return null;
        }
        return (_a = app_store.property.allowed_payment_methods.find(apm => apm.code === code)) !== null && _a !== void 0 ? _a : null;
    }
    async handleBookingNumberChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.booking = await this.propertyService.getExposedBooking({ booking_nbr: this.bookingNbr, language: this.language }, true);
        }
    }
    async init() {
        this.propertyService.setToken(this.token);
        this.commonService.setToken(this.token);
        this.authService.setToken(this.token);
        this.paymentService.setToken(this.token);
    }
    async fetchData() {
        if (!this.isAuthenticated) {
            this.token = await this.authService.login({ option: 'direct', params: { email: this.email, booking_nbr: this.bookingNbr } }, false);
            this.init();
        }
        const requests = [this.propertyService.getExposedBooking({ booking_nbr: this.bookingNbr, language: this.language })];
        if (!this.be) {
            requests.push(this.commonService.getExposedLanguage());
            requests.push(this.propertyService.getExposedProperty({
                id: this.propertyId,
                language: this.language,
                aname: this.aName,
                perma_link: this.perma_link,
            }));
        }
        const results = await Promise.all(requests);
        this.booking = results[0];
        this.payment_option = this.detectPaymentOrigin();
        const book_date = new Date(this.booking.booked_on.date);
        book_date.setHours(this.booking.booked_on.hour + 1);
        book_date.setMinutes(this.booking.booked_on.minute);
        await this.setAmountAndCancelationPolicy();
        this.isLoading = false;
    }
    async setAmountAndCancelationPolicy() {
        if (this.amount || isBefore(new Date(this.booking.to_date), new Date())) {
            return;
        }
        const [bookings_by_amount, newPrepayment] = await Promise.all([
            this.paymentService.getBookingPrepaymentAmount(this.booking),
            await this.paymentService.GetExposedApplicablePolicies({
                book_date: new Date(this.booking.booked_on.date),
                token: this.token,
                params: {
                    booking_nbr: this.bookingNbr,
                    property_id: this.booking.property.id,
                    room_type_id: 0,
                    rate_plan_id: 0,
                    currency_id: this.booking.currency.id,
                    language: this.language,
                },
            }),
        ]);
        const { amount, cancelation_message, guarantee_message } = bookings_by_amount;
        this.cancelation_message = cancelation_message;
        this.guarantee_message = guarantee_message;
        this.amount = amount;
        let cancelation = null;
        let guarantee = null;
        const { message } = await this.paymentService.fetchCancelationMessage({ data: newPrepayment.data });
        this.cancelationMessage = message;
        const cancelationBrackets = newPrepayment.data.find(t => t.type === 'cancelation');
        if (cancelationBrackets === null || cancelationBrackets === void 0 ? void 0 : cancelationBrackets.brackets) {
            cancelation = this.paymentService.findClosestDate(cancelationBrackets === null || cancelationBrackets === void 0 ? void 0 : cancelationBrackets.brackets);
        }
        const guaranteeBrackets = newPrepayment.data.find(t => t.type === 'guarantee');
        if (guaranteeBrackets === null || guaranteeBrackets === void 0 ? void 0 : guaranteeBrackets.brackets) {
            guarantee = this.paymentService.findClosestDate(guaranteeBrackets === null || guaranteeBrackets === void 0 ? void 0 : guaranteeBrackets.brackets);
        }
        if (guarantee && cancelation) {
            console.log(guarantee, cancelation);
            if (isBefore(new Date(guarantee.due_on), new Date(cancelation.due_on))) {
                this.amountToBePayed = cancelation.gross_amount;
            }
        }
    }
    renderBookingDetailHeader() {
        const total_nights = getDateDifference(new Date(this.booking.from_date), new Date(this.booking.to_date));
        const nbr_of_persons = this.booking.occupancy.adult_nbr + this.booking.occupancy.children_nbr;
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
        if (paymentOption.is_payment_gateway) {
            return (h("p", { class: "total-payment text-sm" }, localizedWords.entries.Lcz_YouHavePaid, " ", h("span", null, formatAmount(this.amount, this.booking.currency.code))));
        }
        if (paymentOption.code === '005') {
            return (h("div", null, h("p", { class: "total-payment text-sm" }, localizedWords.entries.Lcz_DueAmountNow, " ", h("span", null, formatAmount(this.booking.financial.due_amount, this.booking.currency.code))), h("p", null, paymentOption.description)));
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
        if (!this.booking && !this.isLoading) {
            return null;
        }
        if (this.isLoading) {
            return (
            // <div >
            //   {[...new Array(10)].map((_, i) => (
            //     <div key={i} class="h-72 w-full animate-pulse rounded-md bg-gray-200"></div>
            //   ))}
            // </div>
            h("div", { class: "flex  flex-col gap-4 " }, h(InvoiceSkeleton, null)));
        }
        const google_maps_url = `http://maps.google.com/maps?q=${app_store.property.location.latitude},${app_store.property.location.longitude}`;
        const { cancel } = this.bookingListingAppService.getBookingActions(this.booking);
        return (h(Host, null, h("ir-interceptor", null), h("main", { class: "relative flex w-full flex-col space-y-5" }, this.headerShown && (h("section", { class: "sticky top-0 z-50 m-0  w-full  p-0" }, h("ir-nav", { class: 'm-0 p-0', showBookingCode: false, website: (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.space_theme.website, logo: (_c = (_b = app_store.property) === null || _b === void 0 ? void 0 : _b.space_theme) === null || _c === void 0 ? void 0 : _c.logo, menuShown: this.be }))), h("section", { class: `flex-1 ${this.be ? '' : 'invoice-container mx-auto w-full max-w-6xl'}` }, this.headerMessageShown && isBefore(new Date(), new Date(this.booking.to_date)) ? (h("div", { class: this.be ? '' : 'invoice-container' }, h("p", { class: `flex items-center gap-4 text-xl font-medium ${this.status === 1 ? 'text-green-600' : 'text-red-500'} ${this.be ? '' : ''}` }, h("ir-icons", { name: this.status === 1 ? 'check' : 'xmark' }), h("span", null, " ", this.status === 1 ? 'Your booking is now confirmed' : 'Payment unsuccessful')), this.status === 1 && h("p", null, "An email has been sent to ", this.booking.guest.email))) : (h("div", { class: this.be ? '' : 'invoice-container' }, h("p", { class: 'text-xl font-medium ' }, "This booking is ", this.booking.status.description))), h("div", { class: `flex  ${this.locationShown ? 'w-full' : 'w-full'} gap-16 ` }, h("div", { class: `invoice-container ${this.locationShown ? 'w-full' : 'w-full'}` }, h("section", { class: "flex flex-col gap-4 md:flex-row md:items-center" }, this.status === 1 ? (h("a", { href: google_maps_url, target: "_blank", class: cn(`button-outline`, 'flex items-center justify-center'), "data-size": "sm" }, localizedWords.entries.Lcz_GetDirections)) : (this.payment_option.is_payment_gateway && h("ir-button", { variants: "outline", label: "Retry Payment", onButtonClick: () => this.processPayment() })), h("a", { href: this.getPropertyEmail(), target: "_blank", class: cn(`button-outline`, 'flex items-center justify-center'), "data-size": "sm" }, "Message property"), cancel.show && (h("ir-button", { class: 'w-full md:w-fit', variants: "outline", label: localizedWords.entries.Lcz_CancelBooking, onButtonClick: async () => {
                this.bookingCancelation.openDialog();
            } }))), h("section", { class: "booking-info" }, h("p", { class: "booking-info-text" }, localizedWords.entries.Lcz_BookingPreference, " ", h("span", null, this.booking.booking_nbr)), h("p", { class: "booking-info-text" }, localizedWords.entries.Lcz_BookedBy, ' ', h("span", null, this.booking.guest.first_name, " ", this.booking.guest.last_name)), h("p", { class: "booking-info-text" }, localizedWords.entries.Lcz_CheckIn, ": ", h("span", null, format(this.booking.from_date, 'eee, dd MMM yyyy'), " "), h("span", null, localizedWords.entries.Lcz_From, " ", (_d = app_store.property) === null || _d === void 0 ? void 0 :
            _d.time_constraints.check_in_from)), h("p", { class: "booking-info-text" }, localizedWords.entries.Lcz_CheckOut, ": ", h("span", null, format(this.booking.to_date, 'eee, dd MMM yyyy'), " "), h("span", null, localizedWords.entries.Lcz_Before, " ", (_e = app_store.property) === null || _e === void 0 ? void 0 :
            _e.time_constraints.check_out_till)), h("p", { class: "booking-info-text" }, localizedWords.entries.Lcz_ArrivalTime, " ", h("span", null, this.booking.arrival.description)), this.booking.remark && (h("p", { class: "booking-info-text" }, "Special request: ", h("span", null, this.booking.remark)))), h("section", { class: "booking-details space-y-2" }, h("div", { class: "flex flex-wrap items-center justify-between gap-1 text-center md:text-right" }, h("div", { class: "flex items-center gap-4" }, h("ir-icons", { name: "bed" }), h("h3", { class: "booking-details-header" }, this.renderBookingDetailHeader())), h("p", { class: "text-xs" }, (_f = app_store.property) === null || _f === void 0 ? void 0 : _f.tax_statement)), h("div", null, (_g = this.booking.rooms) === null || _g === void 0 ? void 0 : _g.map(room => (h("div", { class: "room-info", key: room.identifier }, h("div", { class: "flex w-full items-center justify-between" }, h("h4", { class: "room-type" }, room.roomtype.name), h("p", { class: "text-lg font-medium text-green-600" }, " ", formatAmount(room.gross_total, this.booking.currency.code))), h("p", { class: "room-info-text" }, localizedWords.entries.Lcz_GuestName, ' ', h("span", null, room.guest.first_name, " ", room.guest.last_name, " (", room.rateplan.selected_variation.adult_child_offering, ")")), h("p", { class: "room-info-text" }, localizedWords.entries.Lcz_MealPlan, ' ', h("span", null, room.rateplan.name)), this.cancelation_message && h("p", { class: "room-info-text", innerHTML: `<b><u>Cancelation:</u></b>${this.cancelation_message}` }), this.guarantee_message && h("p", { class: "room-info-text", innerHTML: `<b><u>Guarantee:</u></b>${this.guarantee_message}` })))))), this.booking.pickup_info && (h("section", { class: "space-y-2" }, h("div", { class: 'flex items-center gap-4' }, h("ir-icons", { name: "taxi" }), h("h3", { class: 'booking-details-header' }, "Pickup")), h("div", { class: "room-info" }, h("div", { class: "flex w-full items-center justify-between" }, h("p", { class: "flex items-center gap-4" }, h("p", { class: "room-info-text" }, 'Date:', " ", h("span", null, format(new Date(this.booking.pickup_info.date), 'eee, dd MMM yyyy'))), h("p", { class: "room-info-text" }, 'Time:', ' ', h("span", null, this.booking.pickup_info.hour, ":", this.booking.pickup_info.minute))), h("p", { class: "text-lg font-medium text-green-600" }, formatAmount(this.booking.pickup_info.total, this.booking.pickup_info.currency.code))), h("p", { class: "room-info-text" }, 'Flight details:', " ", h("span", null, this.booking.pickup_info.details)), h("p", { class: "room-info-text" }, 'No. of vehicles:', " ", h("span", null, this.booking.pickup_info.nbr_of_units)), h("p", { class: 'room-info-text text-xs' }, app_store.property.pickup_service.pickup_instruction.description, app_store.property.pickup_service.pickup_cancelation_prepayment.description)))), this.payment_option && (h("section", { class: "space-y-2" }, h("div", { class: 'flex items-center gap-4' }, h("ir-icons", { name: "credit_card" }), h("h3", { class: 'booking-details-header' }, localizedWords.entries.Lcz_PaymentDetails)), h("p", { class: "total-payment" }, localizedWords.entries.Lcz_Total, ' ', h("span", { class: "payment_amount text-green-600" }, formatAmount(this.booking.financial.gross_total, this.booking.currency.code))), this.renderPaymentText(this.payment_option))), h("section", { class: "space-y-2" }, h("div", { class: "flex items-center gap-4" }, h("ir-icons", { name: "danger" }), h("h3", { class: 'booking-details-header' }, localizedWords.entries.Lcz_ImportantInformation)), h("p", null, app_store.property.description.important_info)), h("section", { class: 'space-y-2' }, h("div", { class: "flex items-center gap-4" }, h("ir-icons", { name: "car" }), h("p", null, (_h = app_store.property) === null || _h === void 0 ? void 0 :
            _h.parking_offering.title, " ", localizedWords.entries.Lcz_At, ' ', formatAmount((_j = app_store.property) === null || _j === void 0 ? void 0 : _j.parking_offering.pricing, app_store.userPreferences.currency_id))), h("div", { class: "flex items-center gap-4" }, h("ir-icons", { name: "pets" }), h("p", null, (_k = app_store.property) === null || _k === void 0 ? void 0 : _k.pets_acceptance.title)), h("div", { class: "flex items-center gap-4 " }, h("ir-icons", { name: "bed" }), h("p", null, (_l = app_store.property) === null || _l === void 0 ? void 0 : _l.baby_cot_offering.title)))), this.locationShown && (h("div", { class: "property_info sticky top-[20%]" }, ((_m = app_store.property) === null || _m === void 0 ? void 0 : _m.space_theme.background_image) && (h("div", { class: "lg:aspect9-[16/9] aspect-[1/1] max-h-32 w-full" }, h("img", { class: "property_img h-full w-full object-cover", src: (_o = app_store.property) === null || _o === void 0 ? void 0 : _o.space_theme.background_image, alt: "" }))), h("a", { class: "mapLink", target: "_blank", href: google_maps_url }, h("img", { src: `https://maps.googleapis.com/maps/api/staticmap?center=${((_p = app_store.property) === null || _p === void 0 ? void 0 : _p.location.latitude) || 34.022},${((_q = app_store.property) === null || _q === void 0 ? void 0 : _q.location.longitude) || 35.628}&zoom=15&size=1024x768&maptype=roadmap&markers=color:red%7Clabel:${app_store.property.name}%7C34.022,35.628&key=AIzaSyCJ5P4SraJdZzcBi9Ue16hyg_iWJv-aHpk`, loading: "lazy" })), h("div", { class: "contact-info" }, h("span", null, h("label", { class: "m-0 p-0", htmlFor: "phone" }, localizedWords.entries.Lcz_Phone)), h("a", { id: "phone", class: "contact-link p-0", href: `tel:${(_r = app_store.property) === null || _r === void 0 ? void 0 : _r.phone}` }, ((_t = (_s = app_store.property) === null || _s === void 0 ? void 0 : _s.country) === null || _t === void 0 ? void 0 : _t.phone_prefix) || '', " ", (_u = app_store.property) === null || _u === void 0 ? void 0 :
            _u.phone)))))), this.footerShown && h("ir-footer", { version: this.version }), h("ir-booking-cancelation", { ref: el => (this.bookingCancelation = el), booking_nbr: (_v = this.booking) === null || _v === void 0 ? void 0 : _v.booking_nbr, paymentMessage: this.amountToBePayed ? `If you cancel now, the penalty will be ${formatAmount(this.amountToBePayed, this.booking.currency.code)}` : null, cancelation: this.cancelationMessage || ((_w = this.booking) === null || _w === void 0 ? void 0 : _w.rooms[0].rateplan.cancelation) }))));
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
                "attribute": "base-url",
                "reflect": false
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
                "attribute": "language",
                "reflect": false,
                "defaultValue": "'en'"
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
                "attribute": "be",
                "reflect": false,
                "defaultValue": "false"
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
                "attribute": "version",
                "reflect": false,
                "defaultValue": "'2.0'"
            }
        };
    }
    static get states() {
        return {
            "booking": {},
            "token": {},
            "isAuthenticated": {},
            "isLoading": {},
            "cancelation_message": {},
            "guarantee_message": {},
            "cancelationMessage": {},
            "amountToBePayed": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "bookingNbr",
                "methodName": "handleBookingNumberChange"
            }];
    }
}
//# sourceMappingURL=ir-invoice.js.map
