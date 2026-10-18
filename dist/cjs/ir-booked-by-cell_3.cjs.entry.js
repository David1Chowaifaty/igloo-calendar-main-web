'use strict';

var index = require('./index-IDeZZwEK.js');
var t = require('./t-CqJPQrfm.js');
var number = require('./number-xBpNWk3H.js');
var irDate = require('./ir-date-CbkOKs2C.js');
require('./moment-CdViwxPQ.js');
require('./locale-scope-Cch-vf1R.js');
require('./language-observer-DKp37LIu.js');
require('./_commonjsHelpers-BJu3ubxk.js');

const irBookedByCellCss = () => `.sc-ir-booked-by-cell-h{box-sizing:border-box !important}.sc-ir-booked-by-cell-h *.sc-ir-booked-by-cell,.sc-ir-booked-by-cell-h *.sc-ir-booked-by-cell::before,.sc-ir-booked-by-cell-h *.sc-ir-booked-by-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-booked-by-cell{display:none !important}.sc-ir-booked-by-cell-h{display:block;font-size:0.93rem}[display='inline'].sc-ir-booked-by-cell-h{display:inline-flex;align-items:center;gap:1rem}.booked-by-source__logo.sc-ir-booked-by-cell{width:1.5625rem}.booked-by-cell__description.sc-ir-booked-by-cell{font-size:0.875rem}.cell-label.sc-ir-booked-by-cell{font-weight:700}.booked-by-source__private-note.sc-ir-booked-by-cell{height:0.5rem;width:0.5rem;border-radius:50%;background:rgb(244, 213, 82);display:inline-flex;padding:0;margin:0}.booked-by-source__container.sc-ir-booked-by-cell{display:flex;align-items:center;gap:0.5rem}.booked-by-cell__button.sc-ir-booked-by-cell:focus{outline:none}.booked-by-cell__button.sc-ir-booked-by-cell:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}.booked-by-cell__button.sc-ir-booked-by-cell{display:inline-flex;align-items:center;justify-content:center;height:fit-content;padding:0;font-family:inherit;font-size:var(--wa-form-control-value-font-size);font-weight:var(--wa-font-weight-action);line-height:calc(var(--wa-form-control-height) - var(--border-width) * 2);text-decoration:none;vertical-align:middle;white-space:nowrap;border-style:var(--wa-border-style);border-width:max(1px, var(--wa-form-control-border-width));border-radius:var(--wa-form-control-border-radius);transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing);cursor:pointer;user-select:none;-webkit-user-select:none;color:var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));background-color:transparent;border-color:transparent}.booked-by-cell__button.sc-ir-booked-by-cell:hover{color:var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-brand-fill-quiet))}.booked-by-source__contact.sc-ir-booked-by-cell wa-icon.sc-ir-booked-by-cell{font-size:1.25rem}.booked-by-source__contact.sc-ir-booked-by-cell a.sc-ir-booked-by-cell:first-child wa-icon.sc-ir-booked-by-cell{font-size:1rem}.booked-by-cell__button.sc-ir-booked-by-cell:active{color:var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-brand-fill-quiet)), var(--wa-color-mix-active))}@media (width >= 640px){.booked-by-cell__button.--mobile-only.sc-ir-booked-by-cell{display:none}}`;

const IrBookedByCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.guestSelected = index.createEvent(this, "guestSelected");
    }
    label;
    cellId;
    display = 'block';
    /**
     * Guest associated with this booking.
     */
    guest;
    /**
     * Unique identifier for this cell. Used for tooltip scoping.
     */
    identifier;
    /**
     * Total number of persons staying (adults + children).
     */
    totalPersons;
    /**
     * Promo key if a promo/coupon was applied.
     */
    promoKey;
    /**
     * Show pink heart icon if guest has repeated bookings.
     */
    showRepeatGuestBadge = false;
    /**
     * Show total persons count (e.g. "3P").
     */
    showPersons = false;
    /**
     * Show yellow dot indicating the booking has a private note.
     */
    showPrivateNoteDot = false;
    /**
     * Show loyalty discount icon (pink heart-outline).
     */
    showLoyaltyIcon = false;
    /**
     * Show promo/coupon icon.
     */
    showPromoIcon = false;
    /**
     * Show phone and WhatsApp contact icons.
     * When shown, phone links via `tel:` and WhatsApp via `https://wa.me/`.
     */
    showContactIcons = false;
    /**
     * Makes the guest name clickable.
     * Emits `openGuestDetails` when clicked.
     */
    clickableGuest = false;
    /**
     * Emitted when the guest name is clicked.
     * Sends the `identifier` for parent lookup.
     */
    guestSelected;
    handleGuestClick(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.guestSelected.emit(this.identifier);
    }
    render() {
        const repeatGuestBadgeId = `repeat-guest-badge-${this.guest.id}_${this.cellId ?? this.identifier}`;
        const loyaltyBadgeId = `loyalty-badge-${this.guest.id}_${this.cellId ?? this.identifier}`;
        const couponBadgeId = `coupon-badge-${this.guest.id}_${this.cellId ?? this.identifier}`;
        const guest = `${this.guest.first_name} ${this.guest.last_name}`;
        return (index.h(index.Host, { key: '3bc0234c4660ff752eba5d4f4c0d9e31c13f7e11' }, this.label && index.h("p", { key: 'b8b57c18bc05da6a01edad37ffd664cf11c06df7', class: "cell-label" }, this.label, ":"), index.h("div", { key: '0ef35274ecebcf511cb5900d0c67cf40a0863e76', class: "booked-by-source__container" }, this.clickableGuest ? (index.h("button", { class: "booked-by-cell__button", onClick: this.handleGuestClick.bind(this) }, guest)) : (index.h("p", null, guest)), this.showRepeatGuestBadge && (index.h(index.Fragment, { key: 'd123d58374524da3957a31d5ff70c740b76ce784' }, index.h("wa-tooltip", { key: '54a99176ec556e84b4b288d7fc57986467bede51', for: repeatGuestBadgeId }, `${t.t('Lcz_BookingsNbr', { fallback: '%1 bookings' })}`.replace('%1', this.guest.nbr_confirmed_bookings.toString())), index.h("wa-icon", { key: '82044b6a2f5e921d2cf496c0f7f994ade6cad887', name: "heart", style: { color: '#FB0AAD' }, id: repeatGuestBadgeId }))), this.showPersons && (index.h("p", { key: '400797471414f3e27ac30b093feb8e3b73357532' }, this.totalPersons, t.t('Lcz_P', { fallback: 'P' }))), this.showPrivateNoteDot && index.h("span", { key: 'dd8918cda3b68f22320aa3e3f6fcfcd292abba77', class: "booked-by-source__private-note" })), this.showContactIcons && this.guest.country_phone_prefix && this.guest.mobile_without_prefix && (index.h("div", { key: '487c8a5c09f90949a1313874f0e147ccc55472ea', part: "contact", class: "booked-by-source__container booked-by-source__contact" }, index.h("a", { key: '2192336aa356f64943130f3dbb380c3175ab03ad', class: "booked-by-cell__button --mobile-only", href: `tel:${this.guest.country_phone_prefix}${this.guest.mobile_without_prefix.replace(/\s+/g, '')}` }, index.h("wa-icon", { key: '9d6978fa5a6171ddc3cf4c585d384210c9ff2bd1', name: "phone" })), index.h("a", { key: '78711638ac9ddbfebe6a1d3fb12856b1a917b131', class: "booked-by-cell__button", href: `https://wa.me/${this.guest.country_phone_prefix.replace('+', '')}${this.guest.mobile_without_prefix.replace(/\s+/g, '')}`, target: "_blank", rel: "noopener noreferrer" }, index.h("wa-icon", { key: 'a84adfaa383ca34b95a440dc83d8cda07b2de24c', name: "whatsapp", family: "brands" })))), index.h("div", { key: '30a2bba6295c76cf1162e8aa12d28698cbc44914', part: "loyalty", class: "booked-by-source__container" }, this.showLoyaltyIcon && (index.h(index.Fragment, { key: '55a0a77dacc53d5b50ecd32c76fef56bc45dd22e' }, index.h("wa-tooltip", { key: 'f28eb07d022e70b929a5e04299ea039c402c56bb', for: loyaltyBadgeId }, t.t('Lcz_LoyaltyDiscountApplied', { fallback: 'Coupon: %1' })), index.h("wa-icon", { key: '06d2d37cb016aa60dc1aa340f0a0e4285bb72f4e', name: "heart", variant: "regular", style: { color: '#fc6c85' }, id: loyaltyBadgeId }))), this.showPromoIcon && (index.h(index.Fragment, { key: '7f8fd54f4ad918ce8ecc9d27e2d89bf380f36600' }, index.h("wa-tooltip", { key: 'fbd7a7a3e3475ab5e2f248fcdf575f78ce214d3e', for: couponBadgeId }, t.t('Lcz_Coupon', { fallback: 'Coupon' }), ": ", this.promoKey), index.h("wa-icon", { key: '4123196a6fbf2013df890ccb4396ce3766b05c37', id: couponBadgeId, name: "ticket" }))))));
    }
};
IrBookedByCell.style = irBookedByCellCss();

const irBookingNumberCellCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:flex;gap:1rem;align-items:center;font-size:0.93rem}.booking-nbr-cell__channel_nbr{font-size:0.75rem;padding:0;margin:0}.booking-nbr-cell__container{display:flex;flex-direction:column;align-self:flex-start}.booked-by-source__logo{width:1.5625rem;background-color:white;}.booking-nbr-cell__button:focus{outline:none}.booking-nbr-cell__button:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}.booking-nbr-cell__button{display:inline-flex;align-items:center;justify-content:center;height:fit-content;padding:0;font-family:inherit;font-size:var(--wa-form-control-value-font-size);font-weight:var(--wa-font-weight-action);line-height:calc(var(--wa-form-control-height) - var(--border-width) * 2);text-decoration:none;vertical-align:middle;white-space:nowrap;border-style:var(--wa-border-style);border-width:max(1px, var(--wa-form-control-border-width));border-radius:var(--wa-form-control-border-radius);transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing);cursor:pointer;user-select:none;-webkit-user-select:none;color:var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));background-color:transparent;border-color:transparent}.booking-nbr-cell__button:hover{color:var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-brand-fill-quiet))}.booking-nbr-cell__button:active{color:var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-brand-fill-quiet)), var(--wa-color-mix-active))}`;

const IrBookingNumberCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.openBookingDetails = index.createEvent(this, "openBookingDetails");
    }
    bookingNumber;
    /**
     * Source of the booking (e.g. website, channel).
     */
    source;
    /**
     * Origin metadata containing label + icon used as logo.
     */
    origin;
    channelBookingNumber;
    openBookingDetails;
    render() {
        return (index.h(index.Host, { key: '31f831d5c44738a14d0c18bda066f717f677d211' }, this.channelBookingNumber && index.h("wa-tooltip", { key: 'e3b297f22943609fbe00c1277c392632bc9510c6', for: `source-logo__${this.bookingNumber}` }, this.origin.Label), index.h("img", { key: '7c7279b74d8f861544e685a358864e8f2ef66027', class: "booked-by-source__logo", id: `source-logo__${this.bookingNumber}`, src: this.origin.Icon, alt: this.origin.Label }), index.h("div", { key: '53e2c9d6be38833ff9ea94709e8b9acf75648102', part: "container", class: "booking-nbr-cell__container" }, index.h("div", { key: '5ebd5e7ad5f47f60120fea33f60dcafeb364ae6a', style: { width: 'fit-content' } }, index.h("button", { key: '950b20dbd29559cca7f4ef78e3b86bdc4a3be3ed', class: "booking-nbr-cell__button", onClick: () => this.openBookingDetails.emit(this.bookingNumber) }, number.formatBookingNumber(this.bookingNumber))), index.h("p", { key: 'e397d2332998957f1cfcfcf9f201e65318e23204', part: "booking-reference", class: "booking-nbr-cell__channel_nbr" }, this.channelBookingNumber ? number.formatBookingNumber(this.channelBookingNumber) : this.origin.Label))));
    }
};
IrBookingNumberCell.style = irBookingNumberCellCss();

const irDatesCellCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;font-size:0.93rem}:host([display='inline']){display:inline-flex;align-items:center;justify-content:space-between;gap:1rem}.date-cell__container{display:flex;align-items:center;gap:0.25rem}.date-cell__label{font-weight:700}.date-cell__arrow{flex-shrink:0;font-size:0.8rem;color:var(--wa-color-text-quiet, #6b7280)}.date-cell__container p{unicode-bidi:plaintext}.ir-flip-rtl:dir(rtl){scale:-1 1}`;

const IrDatesCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    display = 'block';
    checkIn;
    checkOut;
    checkInLabel;
    checkoutLabel;
    overdueCheckin;
    overdueCheckout;
    /**
     * Shows a small arrow between check-in and check-out. Intended for `display="inline"`.
     */
    showArrow = false;
    formatDate(date) {
        return irDate.formatDate(date, { style: 'medium' });
    }
    render() {
        return (index.h(index.Host, { key: 'c97ef74eff086d9eceadd3cea877a4d88419c0c1' }, index.h("div", { key: '7ca649378e74e899539103d2138dbfc2b8ff1554', part: "checkin-container", class: "date-cell__container" }, this.checkInLabel && index.h("span", { key: '1789e587490b95a294e22f1ee685e5ed47eea0f7', class: "date-cell__label" }, this.checkInLabel, ": "), index.h("p", { key: 'a66437723a5ec1690e17ce4086173929378e16c7', style: { fontWeight: this.overdueCheckin ? 'bold' : 'auto' } }, this.formatDate(this.checkIn))), this.showArrow && index.h("wa-icon", { key: 'c64e3952952e4ef3231ed5fcd9fa4fe6d530c095', class: "date-cell__arrow ir-flip-rtl", name: "arrow-right" }), index.h("div", { key: 'ded00b03fb529dd3f5d2b370731a1aab343ff39f', part: "checkout-container", class: "date-cell__container" }, this.checkoutLabel && index.h("span", { key: '314366d29ecaddfdfae354cdc5a5527be776c10b', class: "date-cell__label" }, this.checkoutLabel, ": "), index.h("p", { key: '15fb9183e4883ce5c391f4eaab83ff208ab7a57e', style: { fontWeight: this.overdueCheckout ? 'bold' : 'auto' } }, this.formatDate(this.checkOut)))));
    }
};
IrDatesCell.style = irDatesCellCss();

exports.ir_booked_by_cell = IrBookedByCell;
exports.ir_booking_number_cell = IrBookingNumberCell;
exports.ir_dates_cell = IrDatesCell;
