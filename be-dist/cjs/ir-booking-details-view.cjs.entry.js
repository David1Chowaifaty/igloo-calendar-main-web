'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-380c61af.js');
const utils = require('./utils-08303a54.js');
const bookingListing_service = require('./booking-listing.service-14907ddd.js');

const irBookingDetailsViewCss = "/*! tailwindcss v3.4.9 | MIT License | https://tailwindcss.com*/*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.block{display:block}.flex{display:flex}.flex-wrap{flex-wrap:wrap}:host{display:block}.booking-info{border-bottom:1px solid var(--gray-300,#d0d5dd)}.booking-info-text,.room-info-text{color:var(--gray-800,#1d293a);font-size:.875rem;font-weight:500;margin-bottom:.5rem}.booking-info-text span,.room-info-text span{color:var(--gray-600,#344055);font-weight:400}.room-info{margin-bottom:1rem;padding:1rem 0}.booking-header-title{font-size:1.1rem;font-weight:600}.room-type{font-size:1rem;font-weight:600;margin-bottom:.3rem}p{font-size:.875rem}.total-payment{font-size:1rem}.property_info{background-color:#f3f4f6;border-radius:min(var(--radius,.5rem),1rem);display:none;height:-moz-fit-content;height:fit-content;width:50rem}.booking-details-container{display:flex;flex-direction:column;font-size:.875rem;gap:1rem}.header{justify-content:space-between}.header,.header-left{align-items:center;display:flex}.header-left{gap:.625rem}.header-title{font-size:1.125rem;font-weight:600}.cancel-button{font-size:1rem}.section-title{font-size:1.125rem;font-weight:500;margin-bottom:1.25rem}.details-section{display:flex;flex-direction:column-reverse;gap:1rem}.contact-link{color:#1a202c;text-decoration:none}.room-header{display:flex;justify-content:space-between}.room-price{color:#39a26a;font-size:1.125rem;font-weight:500}.guest-service,.hotel-policies,.payment-details{margin-top:1rem}.detail-container{background-color:#f3f4f6;border-radius:min(var(--radius,.5rem),.75rem);padding:1.5rem}.booking-header{align-items:center;display:flex;flex-wrap:wrap;gap:.25rem;justify-content:space-between;text-align:center}@media (min-width:48rem){.booking-header{text-align:right}.details-section{align-items:center;flex-direction:row;justify-content:space-between;margin-bottom:.5rem}}.static{position:static}.text-sm{font-size:.875rem;line-height:1.25rem}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.items-center{align-items:center}.gap-4{gap:1rem}.space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.p-6{padding:1.5rem}.text-start{text-align:start}.font-medium{font-weight:500}.text-\\[var\\(--ir-green\\)\\]{color:var(--ir-green)}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}";
const IrBookingDetailsViewStyle0 = irBookingDetailsViewCss;

const IrBookingDetailsView = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bl_routing = index.createEvent(this, "bl_routing", 7);
        this.bookingListingAppService = new bookingListing_service.BookingListingAppService();
        this.booking = null;
    }
    componentWillLoad() {
        var _a, _b;
        const { email } = (_b = (_a = utils.app_store.property) === null || _a === void 0 ? void 0 : _a.contacts) === null || _b === void 0 ? void 0 : _b.find(c => c.type === 'booking');
        this.email = email;
    }
    renderBookingDetailHeader() {
        const total_nights = utils.getDateDifference(new Date(this.booking.from_date), new Date(this.booking.to_date));
        const nbr_of_persons = this.booking.occupancy.adult_nbr + this.booking.occupancy.children_nbr;
        const total_rooms = this.booking.rooms.length;
        return `${total_nights} ${total_nights > 1 ? utils.localizedWords.entries.Lcz_Nights : utils.localizedWords.entries.Lcz_night} - ${nbr_of_persons}
    ${nbr_of_persons > 1 ? utils.localizedWords.entries.Lcz_Persons : utils.localizedWords.entries.Lcz_Person} - ${total_rooms}
    ${total_rooms > 1 ? utils.localizedWords.entries.Lcz_Rooms : utils.localizedWords.entries.Lcz_Room}`;
    }
    renderLocation() {
        var _a, _b;
        const { city, country, area, address } = utils.app_store.property;
        return [address !== null && address !== void 0 ? address : null, area !== null && area !== void 0 ? area : null, (_a = city.name) !== null && _a !== void 0 ? _a : null, (_b = country.name) !== null && _b !== void 0 ? _b : null].filter(f => f !== null).join(', ');
    }
    renderPropertyEmail() {
        if (!this.email) {
            return null;
        }
        return (index.h("div", { class: "booking-info-text" }, "Email:", index.h("span", null, index.h("a", { href: `mailto:${this.email}`, class: "contact-link" }, this.email))));
    }
    formatGuest() {
        var _a, _b, _c, _d;
        const values = [this.email, `${((_b = (_a = utils.app_store.property) === null || _a === void 0 ? void 0 : _a.country) === null || _b === void 0 ? void 0 : _b.phone_prefix) || ''} ${(_c = utils.app_store.property) === null || _c === void 0 ? void 0 : _c.phone}`];
        return (_d = utils.localizedWords.entries.Lcz_GuestService_ContactUs) === null || _d === void 0 ? void 0 : _d.replace(/{(\d+)}/g, (match, number) => {
            return typeof values[number] !== 'undefined' ? values[number] : match;
        });
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (!this.booking) {
            return null;
        }
        const { cancel } = this.bookingListingAppService.getBookingActions(this.booking);
        return (index.h("div", { class: "booking-details-container text-sm" }, index.h("div", { class: "header" }, index.h("div", { class: "header-left" }, index.h("ir-button", { variants: "icon", onButtonClick: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.bl_routing.emit({ route: 'booking' });
            }, iconName: utils.app_store.dir === 'RTL' ? 'angle_right' : 'angle_left' }), index.h("p", { class: "header-title" }, utils.localizedWords.entries.Lcz_MyBookings)), cancel && index.h("ir-button", { label: "Cancel Request", class: "cancel-button", onButtonClick: () => this.bookingCancelation.openDialog() })), index.h("h2", { class: "section-title" }, utils.localizedWords.entries.Lcz_BookingReference, " ", this.booking.booking_nbr, " - ", utils.app_store.property.name), index.h("section", { class: "detail-container" }, index.h("div", { class: "details-section" }, index.h("div", null, index.h("p", { class: "booking-info-text" }, utils.localizedWords.entries.Lcz_BookedBy, ' ', index.h("span", null, this.booking.guest.first_name, " ", this.booking.guest.last_name)), index.h("p", { class: "booking-info-text" }, utils.localizedWords.entries.Lcz_CheckIn, ": ", index.h("span", null, utils.dateFns.format(this.booking.from_date, 'eee, dd MMM yyyy'), " "), index.h("span", null, utils.localizedWords.entries.Lcz_From, " ", (_a = utils.app_store.property) === null || _a === void 0 ? void 0 :
            _a.time_constraints.check_in_from)), index.h("p", { class: "booking-info-text" }, utils.localizedWords.entries.Lcz_CheckOut, ": ", index.h("span", null, utils.dateFns.format(this.booking.to_date, 'eee, dd MMM yyyy'), " "), index.h("span", null, utils.localizedWords.entries.Lcz_Before, " ", (_b = utils.app_store.property) === null || _b === void 0 ? void 0 :
            _b.time_constraints.check_out_till)), index.h("p", { class: "booking-info-text" }, utils.localizedWords.entries.Lcz_ArrivalTime, " ", index.h("span", null, this.booking.arrival.description)), this.booking.remark && (index.h("p", { class: "booking-info-text" }, "Special request: ", index.h("span", null, this.booking.remark)))), index.h("div", null, index.h("p", { class: "booking-info-text" }, "Address:", index.h("span", null, " ", this.renderLocation())), index.h("p", { class: "booking-info-text" }, "GPS:", index.h("span", null, ' ', "Latitude ", utils.app_store.property.location.latitude, ", Longitude ", utils.app_store.property.location.longitude)), index.h("p", { class: "booking-info-text" }, "Phone:", ' ', index.h("span", null, ' ', index.h("a", { class: "contact-link", href: `tel:${(_c = utils.app_store.property) === null || _c === void 0 ? void 0 : _c.phone}` }, ((_e = (_d = utils.app_store.property) === null || _d === void 0 ? void 0 : _d.country) === null || _e === void 0 ? void 0 : _e.phone_prefix) || '', " ", (_f = utils.app_store.property) === null || _f === void 0 ? void 0 :
            _f.phone))), this.renderPropertyEmail())), index.h("div", { class: "booking-details" }, index.h("div", { class: "booking-header" }, index.h("div", { class: "header-left" }, index.h("ir-icons", { name: "bed" }), index.h("h3", { class: "booking-header-title" }, this.renderBookingDetailHeader())), index.h("p", null, (_g = utils.app_store.property) === null || _g === void 0 ? void 0 : _g.tax_statement)), index.h("div", null, (_h = this.booking.rooms) === null || _h === void 0 ? void 0 : _h.map(room => (index.h("div", { class: "room-info", key: room.identifier }, index.h("div", { class: "room-header" }, index.h("h4", { class: "room-type" }, room.roomtype.name), index.h("p", { class: "room-price" }, utils.formatAmount(room.gross_total, this.booking.currency.code))), index.h("p", { class: "room-info-text" }, utils.localizedWords.entries.Lcz_GuestName, ' ', index.h("span", null, room.guest.first_name, " ", room.guest.last_name, " (", room.rateplan.selected_variation.adult_child_offering, ")")), index.h("p", { class: "room-info-text" }, utils.localizedWords.entries.Lcz_MealPlan, " ", index.h("span", null, room.rateplan.name)), index.h("p", { class: "room-info-text", innerHTML: room.rateplan.cancelation }), index.h("p", { class: "room-info-text", innerHTML: room.rateplan.guarantee }))))))), index.h("section", { class: "hotel-policies" }, index.h("h2", { class: "section-title" }, "Hotel Policies"), index.h("ir-facilities", null)), index.h("section", { class: "payment-details" }, index.h("h2", { class: "section-title" }, "Payment Details"), index.h("div", { class: "detail-container" }, index.h("p", null, utils.localizedWords.entries.Lcz_YourBookingIsGuaranteed), index.h("p", null, utils.localizedWords.entries.Lcz_YourBookingIsNotGuaranteed))), index.h("section", { class: "guest-service" }, index.h("h2", { class: "section-title" }, "Guest Service"), index.h("p", { class: "detail-container", innerHTML: this.formatGuest() })), index.h("ir-booking-cancellation", { booking: this.booking, ref: el => (this.bookingCancelation = el), onCancellationResult: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { state } = e.detail;
                if (state === 'success') {
                    this.booking = Object.assign(Object.assign({}, this.booking), { status: { code: '003', description: 'Cancelled' } });
                }
            } })));
    }
};
IrBookingDetailsView.style = IrBookingDetailsViewStyle0;

exports.ir_booking_details_view = IrBookingDetailsView;

//# sourceMappingURL=ir-booking-details-view.cjs.entry.js.map