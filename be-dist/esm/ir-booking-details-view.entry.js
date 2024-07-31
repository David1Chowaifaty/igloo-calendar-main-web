import { r as registerInstance, c as createEvent, h } from './index-3ddfa666.js';
import { a as app_store } from './app.store-8e486326.js';
import { l as localizedWords } from './localization.store-f417f370.js';
import { a as getDateDifference, k as formatAmount } from './utils-377d039e.js';
import { B as BookingListingAppService } from './booking-listing.service-a0f1615a.js';
import { d as dateFns } from './index-ea8ec4f0.js';
import './index-6014a5e7.js';
import './index-11c63a67.js';

const irBookingDetailsViewCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.block{display:block}.flex{display:flex}.flex-wrap{flex-wrap:wrap}:host{display:block}.booking-info{border-bottom:1px solid var(--gray-300,#d0d5dd)}.booking-info-text,.room-info-text{color:var(--gray-800,#1d293a);font-size:.875rem;font-weight:500;margin-bottom:.5rem}.booking-info-text span,.room-info-text span{color:var(--gray-600,#344055);font-weight:400}.room-info{margin-bottom:1rem;padding:1rem 0}.booking-header-title{font-size:1.1rem;font-weight:600}.room-type{font-size:1rem;font-weight:600;margin-bottom:.3rem}p{font-size:.875rem}.total-payment{font-size:1rem}.property_info{background-color:#f3f4f6;border-radius:min(var(--radius,.5rem),1rem);display:none;height:-moz-fit-content;height:fit-content;width:50rem}.booking-details-container{display:flex;flex-direction:column;font-size:.875rem;gap:1rem}.header{justify-content:space-between}.header,.header-left{align-items:center;display:flex}.header-left{gap:.625rem}.header-title{font-size:1.125rem;font-weight:600}.cancel-button{font-size:1rem}.section-title{font-size:1.125rem;font-weight:500;margin-bottom:1.25rem}.details-section{display:flex;flex-direction:column-reverse;gap:1rem}.contact-link{color:#1a202c;text-decoration:none}.room-header{display:flex;justify-content:space-between}.room-price{color:#39a26a;font-size:1.125rem;font-weight:500}.guest-service,.hotel-policies,.payment-details{margin-top:1rem}.detail-container{background-color:#f3f4f6;border-radius:min(var(--radius,.5rem),.75rem);padding:1.5rem}.booking-header{align-items:center;display:flex;flex-wrap:wrap;gap:.25rem;justify-content:space-between;text-align:center}@media (min-width:48rem){.booking-header{text-align:right}.details-section{align-items:center;flex-direction:row;justify-content:space-between;margin-bottom:.5rem}}.static{position:static}.text-sm{font-size:.875rem;line-height:1.25rem}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.flex-col{flex-direction:column}.items-center{align-items:center}.gap-4{gap:1rem}.space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.p-6{padding:1.5rem}.text-start{text-align:start}.font-medium{font-weight:500}.text-green-500{--tw-text-opacity:1;color:rgb(34 197 94/var(--tw-text-opacity))}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}@media (min-width:768px){.md\\:flex-row{flex-direction:row}.md\\:items-start{align-items:flex-start}.md\\:justify-between{justify-content:space-between}.md\\:gap-8{gap:2rem}}@media (min-width:1024px){.lg\\:gap-10{gap:2.5rem}}";
const IrBookingDetailsViewStyle0 = irBookingDetailsViewCss;

const IrBookingDetailsView = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bl_routing = createEvent(this, "bl_routing", 7);
        this.bookingListingAppService = new BookingListingAppService();
        this.booking = null;
    }
    componentWillLoad() {
        var _a, _b;
        const { email } = (_b = (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.contacts) === null || _b === void 0 ? void 0 : _b.find(c => c.type === 'booking');
        this.email = email;
    }
    renderBookingDetailHeader() {
        const total_nights = getDateDifference(new Date(this.booking.from_date), new Date(this.booking.to_date));
        const nbr_of_persons = this.booking.occupancy.adult_nbr + this.booking.occupancy.children_nbr;
        const total_rooms = this.booking.rooms.length;
        return `${total_nights} ${total_nights > 1 ? localizedWords.entries.Lcz_Nights : localizedWords.entries.Lcz_night} - ${nbr_of_persons}
    ${nbr_of_persons > 1 ? localizedWords.entries.Lcz_Persons : localizedWords.entries.Lcz_Person} - ${total_rooms}
    ${total_rooms > 1 ? localizedWords.entries.Lcz_Rooms : localizedWords.entries.Lcz_Room}`;
    }
    renderLocation() {
        var _a, _b;
        const { city, country, area, address } = app_store.property;
        return [address !== null && address !== void 0 ? address : null, area !== null && area !== void 0 ? area : null, (_a = city.name) !== null && _a !== void 0 ? _a : null, (_b = country.name) !== null && _b !== void 0 ? _b : null].filter(f => f !== null).join(', ');
    }
    renderPropertyEmail() {
        if (!this.email) {
            return null;
        }
        return (h("div", { class: "booking-info-text" }, "Email:", h("span", null, h("a", { href: `mailto:${this.email}`, class: "contact-link" }, this.email))));
    }
    formatGuest() {
        var _a, _b, _c, _d;
        const values = [this.email, `${((_b = (_a = app_store.property) === null || _a === void 0 ? void 0 : _a.country) === null || _b === void 0 ? void 0 : _b.phone_prefix) || ''} ${(_c = app_store.property) === null || _c === void 0 ? void 0 : _c.phone}`];
        return (_d = localizedWords.entries.Lcz_GuestService_ContactUs) === null || _d === void 0 ? void 0 : _d.replace(/{(\d+)}/g, (match, number) => {
            return typeof values[number] !== 'undefined' ? values[number] : match;
        });
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        if (!this.booking) {
            return null;
        }
        const { cancel } = this.bookingListingAppService.getBookingActions(this.booking);
        return (h("div", { class: "booking-details-container text-sm" }, h("div", { class: "header" }, h("div", { class: "header-left" }, h("ir-button", { variants: "icon", onButtonClick: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.bl_routing.emit({ route: 'booking' });
            }, iconName: app_store.dir === 'RTL' ? 'angle_right' : 'angle_left' }), h("p", { class: "header-title" }, "My bookings")), cancel && h("ir-button", { label: "Cancel Request", class: "cancel-button", onButtonClick: () => this.bookingCancelation.openDialog() })), h("h2", { class: "section-title" }, "Booking reference ", this.booking.booking_nbr, " - ", app_store.property.name), h("section", { class: "detail-container" }, h("div", { class: "details-section" }, h("div", null, h("p", { class: "booking-info-text" }, localizedWords.entries.Lcz_BookedBy, ' ', h("span", null, this.booking.guest.first_name, " ", this.booking.guest.last_name)), h("p", { class: "booking-info-text" }, localizedWords.entries.Lcz_CheckIn, ": ", h("span", null, dateFns.format(this.booking.from_date, 'eee, dd MMM yyyy'), " "), h("span", null, localizedWords.entries.Lcz_From, " ", (_a = app_store.property) === null || _a === void 0 ? void 0 :
            _a.time_constraints.check_in_from)), h("p", { class: "booking-info-text" }, localizedWords.entries.Lcz_CheckOut, ": ", h("span", null, dateFns.format(this.booking.to_date, 'eee, dd MMM yyyy'), " "), h("span", null, localizedWords.entries.Lcz_Before, " ", (_b = app_store.property) === null || _b === void 0 ? void 0 :
            _b.time_constraints.check_out_till)), h("p", { class: "booking-info-text" }, localizedWords.entries.Lcz_ArrivalTime, " ", h("span", null, this.booking.arrival.description)), this.booking.remark && (h("p", { class: "booking-info-text" }, "Special request: ", h("span", null, this.booking.remark)))), h("div", null, h("p", { class: "booking-info-text" }, "Address:", h("span", null, " ", this.renderLocation())), h("p", { class: "booking-info-text" }, "GPS:", h("span", null, ' ', "Latitude ", app_store.property.location.latitude, ", Longitude ", app_store.property.location.longitude)), h("p", { class: "booking-info-text" }, "Phone:", ' ', h("span", null, ' ', h("a", { class: "contact-link", href: `tel:${(_c = app_store.property) === null || _c === void 0 ? void 0 : _c.phone}` }, ((_e = (_d = app_store.property) === null || _d === void 0 ? void 0 : _d.country) === null || _e === void 0 ? void 0 : _e.phone_prefix) || '', " ", (_f = app_store.property) === null || _f === void 0 ? void 0 :
            _f.phone))), this.renderPropertyEmail())), h("div", { class: "booking-details" }, h("div", { class: "booking-header" }, h("div", { class: "header-left" }, h("ir-icons", { name: "bed" }), h("h3", { class: "booking-header-title" }, this.renderBookingDetailHeader())), h("p", null, (_g = app_store.property) === null || _g === void 0 ? void 0 : _g.tax_statement)), h("div", null, (_h = this.booking.rooms) === null || _h === void 0 ? void 0 : _h.map(room => (h("div", { class: "room-info", key: room.identifier }, h("div", { class: "room-header" }, h("h4", { class: "room-type" }, room.roomtype.name), h("p", { class: "room-price" }, formatAmount(room.gross_total, this.booking.currency.code))), h("p", { class: "room-info-text" }, localizedWords.entries.Lcz_GuestName, ' ', h("span", null, room.guest.first_name, " ", room.guest.last_name, " (", room.rateplan.selected_variation.adult_child_offering, ")")), h("p", { class: "room-info-text" }, localizedWords.entries.Lcz_MealPlan, " ", h("span", null, room.rateplan.name)), h("p", { class: "room-info-text", innerHTML: room.rateplan.cancelation }), h("p", { class: "room-info-text", innerHTML: room.rateplan.guarantee }))))))), h("section", { class: "hotel-policies" }, h("h2", { class: "section-title" }, "Hotel Policies"), h("ir-facilities", null)), h("section", { class: "payment-details" }, h("h2", { class: "section-title" }, "Payment Details"), h("div", { class: "detail-container" }, h("p", null, localizedWords.entries.Lcz_YourBookingIsGuaranteed), h("p", null, localizedWords.entries.Lcz_YourBookingIsNotGuaranteed))), h("section", { class: "guest-service" }, h("h2", { class: "section-title" }, "Guest Service"), h("p", { class: "detail-container", innerHTML: this.formatGuest() })), h("ir-booking-cancelation", { ref: el => (this.bookingCancelation = el), booking_nbr: (_j = this.booking) === null || _j === void 0 ? void 0 : _j.booking_nbr, cancelation: (_k = this.booking) === null || _k === void 0 ? void 0 : _k.rooms[0].rateplan.cancelation, onCancelationResult: e => {
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

export { IrBookingDetailsView as ir_booking_details_view };

//# sourceMappingURL=ir-booking-details-view.entry.js.map