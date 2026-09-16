'use strict';

var index = require('./index-CQkpA5n3.js');
var t = require('./t-CyRK1btk.js');
var number = require('./number-D7i5wAQq.js');
var irDate = require('./ir-date-BZLsqCOc.js');
require('./moment-CdViwxPQ.js');
require('./locales.store-BMTss6fG.js');
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
        return (index.h(index.Host, { key: '5d24b8302b77ab35fcf301f55af21a8d42a981dd' }, this.label && index.h("p", { key: 'c5ac3a2f8bd8f76c4f7f80993c0becb43d31fbb7', class: "cell-label" }, this.label, ":"), index.h("div", { key: '968a63823dae186c473e1ba2687dd0ae4fad6831', class: "booked-by-source__container" }, this.clickableGuest ? (index.h("button", { class: "booked-by-cell__button", onClick: this.handleGuestClick.bind(this) }, guest)) : (index.h("p", null, guest)), this.showRepeatGuestBadge && (index.h(index.Fragment, { key: 'e007fd2c2be0bde11256e308c6188e0f63d21fff' }, index.h("wa-tooltip", { key: 'a972a8f51e476d5f939a62d482060b4912ca1fea', for: repeatGuestBadgeId }, `${t.t('Lcz_BookingsNbr', { fallback: '%1 bookings' })}`.replace('%1', this.guest.nbr_confirmed_bookings.toString())), index.h("wa-icon", { key: '65360f9e7d1d11b35f7fd3d4a716c71adb86d5e7', name: "heart", style: { color: '#FB0AAD' }, id: repeatGuestBadgeId }))), this.showPersons && (index.h("p", { key: '5f38afd4dada3925743818dd902fbd129fa5aa86' }, this.totalPersons, t.t('Lcz_P', { fallback: 'P' }))), this.showPrivateNoteDot && index.h("span", { key: '77f4eb2083ec1eac7ed0a6cd206fa8bf46f4ee4e', class: "booked-by-source__private-note" })), this.showContactIcons && this.guest.country_phone_prefix && this.guest.mobile_without_prefix && (index.h("div", { key: 'a77d379f9773cd407c5a45148ed4d0f6784b7729', part: "contact", class: "booked-by-source__container booked-by-source__contact" }, index.h("a", { key: 'e76576354480225f3c017d3e9d45cbb012f35e58', class: "booked-by-cell__button --mobile-only", href: `tel:${this.guest.country_phone_prefix}${this.guest.mobile_without_prefix.replace(/\s+/g, '')}` }, index.h("wa-icon", { key: '8774e69130b4c7ee1a0d0a13c958d3e959758034', name: "phone" })), index.h("a", { key: '5cefb0f80e59e2988f2844045e69c4c8e08445c3', class: "booked-by-cell__button", href: `https://wa.me/${this.guest.country_phone_prefix.replace('+', '')}${this.guest.mobile_without_prefix.replace(/\s+/g, '')}`, target: "_blank", rel: "noopener noreferrer" }, index.h("wa-icon", { key: '216c7a527db20812f5a49e88abf41cc241a8b51b', name: "whatsapp", family: "brands" })))), index.h("div", { key: '1e35acdabca28e9fec346ffbc6d5eda7a50bcaaf', part: "loyalty", class: "booked-by-source__container" }, this.showLoyaltyIcon && (index.h(index.Fragment, { key: '9fd19d1d50b16bdcdea281955ae09d33b8efe26f' }, index.h("wa-tooltip", { key: 'e80e99bcaf25010a45cedc25112e002f7067b87c', for: loyaltyBadgeId }, t.t('Lcz_LoyaltyDiscountApplied', { fallback: 'Coupon: %1' })), index.h("wa-icon", { key: '0f1a0be8a50045eed6b262545e44ad91e88e6711', name: "heart", variant: "regular", style: { color: '#fc6c85' }, id: loyaltyBadgeId }))), this.showPromoIcon && (index.h(index.Fragment, { key: '8fd991018dbfa9a7e4bc1350580a9dca3b60f58d' }, index.h("wa-tooltip", { key: '64d831fc983f8168fb3bba4989207b1720fa0951', for: couponBadgeId }, t.t('Lcz_Coupon', { fallback: 'Coupon' }), ": ", this.promoKey), index.h("wa-icon", { key: '99fb88349d92442613c3357665b4ce06dcaa4a9d', id: couponBadgeId, name: "ticket" }))))));
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
        return (index.h(index.Host, { key: '47e0044ebe672f4dcdb016ee6a427d010ddbcc1e' }, this.channelBookingNumber && index.h("wa-tooltip", { key: '37da259bebe88837ec869350eeb4ac3c59843548', for: `source-logo__${this.bookingNumber}` }, this.origin.Label), index.h("img", { key: 'aa30e3317a855a8d369761acad334568356ef62b', class: "booked-by-source__logo", id: `source-logo__${this.bookingNumber}`, src: this.origin.Icon, alt: this.origin.Label }), index.h("div", { key: '7d1f6892e284b3cda3482fb7066b4f7709bc8ba1', part: "container", class: "booking-nbr-cell__container" }, index.h("div", { key: '0027a308c6bfe03392a2a35ada193aadfb39aeb1', style: { width: 'fit-content' } }, index.h("button", { key: '2675b92e6ed49d5740b3fe3e2df5c970d0159d2d', class: "booking-nbr-cell__button", onClick: () => this.openBookingDetails.emit(this.bookingNumber) }, number.formatBookingNumber(this.bookingNumber))), index.h("p", { key: '5cfe9725ef1f415d0c95ca728279d7c8a051e461', part: "booking-reference", class: "booking-nbr-cell__channel_nbr" }, this.channelBookingNumber ? number.formatBookingNumber(this.channelBookingNumber) : this.origin.Label))));
    }
};
IrBookingNumberCell.style = irBookingNumberCellCss();

const irDatesCellCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;font-size:0.93rem}:host([display='inline']){display:inline-flex;align-items:center;justify-content:space-between;gap:1rem}.date-cell__container{display:flex;align-items:center;gap:0.25rem}.date-cell__label{font-weight:700}.date-cell__arrow{flex-shrink:0;font-size:0.8rem;color:var(--wa-color-text-quiet, #6b7280)}.ir-flip-rtl:dir(rtl){scale:-1 1}`;

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
        return (index.h(index.Host, { key: '8a9ed0b83b989083555d7b07c86ede4357e0716e' }, index.h("div", { key: '14a3bc6b20354478629355ecd1b3a689797909c7', part: "checkin-container", class: "date-cell__container" }, this.checkInLabel && index.h("span", { key: '315acc4fc09ddaf700b8333ab4b1fb8993020a99', class: "date-cell__label" }, this.checkInLabel, ": "), index.h("p", { key: '961994175dd561e4864f02389d00e829801975e7', style: { fontWeight: this.overdueCheckin ? 'bold' : 'auto' } }, this.formatDate(this.checkIn))), this.showArrow && index.h("wa-icon", { key: '682ee4acb22901f505de5b3dce3e8507f2d60083', class: "date-cell__arrow ir-flip-rtl", name: "arrow-right" }), index.h("div", { key: 'da877ba17b5a245942eda7a6f318f0c6a39bf780', part: "checkout-container", class: "date-cell__container" }, this.checkoutLabel && index.h("span", { key: '4bfb6140a75dc60424214e8685d774d816c52c65', class: "date-cell__label" }, this.checkoutLabel, ": "), index.h("p", { key: 'cf30e4fe75ee872a0d3f41e0a07348c9a2d51099', style: { fontWeight: this.overdueCheckout ? 'bold' : 'auto' } }, this.formatDate(this.checkOut)))));
    }
};
IrDatesCell.style = irDatesCellCss();

exports.ir_booked_by_cell = IrBookedByCell;
exports.ir_booking_number_cell = IrBookingNumberCell;
exports.ir_dates_cell = IrDatesCell;
