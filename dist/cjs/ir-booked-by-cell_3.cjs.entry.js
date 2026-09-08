'use strict';

var index = require('./index-P5Mginch.js');
var t = require('./t-BpMDZfdy.js');
var number = require('./number-CTy3I_TP.js');
var irDate = require('./ir-date-DUrZBFOV.js');
require('./moment-CdViwxPQ.js');
require('./locales.store-DIYxw5lk.js');
require('./index-BLJXadKe.js');
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
        return (index.h(index.Host, { key: '5d24b8302b77ab35fcf301f55af21a8d42a981dd' }, this.label && index.h("p", { key: 'c5ac3a2f8bd8f76c4f7f80993c0becb43d31fbb7', class: "cell-label" }, this.label, ":"), index.h("div", { key: '968a63823dae186c473e1ba2687dd0ae4fad6831', class: "booked-by-source__container" }, this.clickableGuest ? (index.h("button", { class: "booked-by-cell__button", onClick: this.handleGuestClick.bind(this) }, guest)) : (index.h("p", null, guest)), this.showRepeatGuestBadge && (index.h(index.Fragment, { key: 'e007fd2c2be0bde11256e308c6188e0f63d21fff' }, index.h("wa-tooltip", { key: 'a972a8f51e476d5f939a62d482060b4912ca1fea', for: repeatGuestBadgeId }, `${t.t('Lcz_BookingsNbr')}`.replace('%1', this.guest.nbr_confirmed_bookings.toString())), index.h("wa-icon", { key: '3a05940b4a1e345205c89dce827d6ca58f94c004', name: "heart", style: { color: '#FB0AAD' }, id: repeatGuestBadgeId }))), this.showPersons && (index.h("p", { key: '43eefd46cc2e311d66202866999b386ab844aae3' }, this.totalPersons, t.t('Lcz_P', { fallback: 'P' }))), this.showPrivateNoteDot && index.h("span", { key: '7c0d9a4d17ca3566f4025a0d7582ba94ab009c3e', class: "booked-by-source__private-note" })), this.showContactIcons && this.guest.country_phone_prefix && this.guest.mobile_without_prefix && (index.h("div", { key: '3620a4bf59e17d420e1e16bf4de2c51cf82ca3eb', part: "contact", class: "booked-by-source__container booked-by-source__contact" }, index.h("a", { key: 'cc95904bd6a17bb13022ebe66db91f39580ddbc5', class: "booked-by-cell__button --mobile-only", href: `tel:${this.guest.country_phone_prefix}${this.guest.mobile_without_prefix.replace(/\s+/g, '')}` }, index.h("wa-icon", { key: '5645f3bef7211ac318e31257acb22f4dc94550a1', name: "phone" })), index.h("a", { key: '5390bb0b18b2490482e6ff92c7783bb578a1adff', class: "booked-by-cell__button", href: `https://wa.me/${this.guest.country_phone_prefix.replace('+', '')}${this.guest.mobile_without_prefix.replace(/\s+/g, '')}`, target: "_blank", rel: "noopener noreferrer" }, index.h("wa-icon", { key: '701f9d5cbc64bff2954b85899dd60aa7354ae403', name: "whatsapp", family: "brands" })))), index.h("div", { key: 'f9895314190f04930a1811da80b6eb9b634917d7', part: "loyalty", class: "booked-by-source__container" }, this.showLoyaltyIcon && (index.h(index.Fragment, { key: '020e006a841c367d4d875d321638a79461b44397' }, index.h("wa-tooltip", { key: '4cbf3291e761e32a40d622719d1dfb224054cfbe', for: loyaltyBadgeId }, t.t('Lcz_LoyaltyDiscountApplied')), index.h("wa-icon", { key: '10e5d936dcb8f82d32cebf83b6e5fdf75451a99a', name: "heart", variant: "regular", style: { color: '#fc6c85' }, id: loyaltyBadgeId }))), this.showPromoIcon && (index.h(index.Fragment, { key: '386fa04488b193d289cc93c49e3009067cfc4c4d' }, index.h("wa-tooltip", { key: '82d0db69917345b4cdcdf255705deeb4c0098fae', for: couponBadgeId }, t.t('Lcz_Coupon'), ": ", this.promoKey), index.h("wa-icon", { key: '83f9d0e2087b6a73ed8fc87db705a1f5ca5c6394', id: couponBadgeId, name: "ticket" }))))));
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
        return (index.h(index.Host, { key: '33f0c0b1f47a13adac344ae61bdd3a832c125c77' }, this.channelBookingNumber && index.h("wa-tooltip", { key: 'a180370155ae0b29480e321a19dbd9c021dfaa94', for: `source-logo__${this.bookingNumber}` }, this.origin.Label), index.h("img", { key: '05513b4c99fe9e489fb428a808e0145f6772222a', class: "booked-by-source__logo", id: `source-logo__${this.bookingNumber}`, src: this.origin.Icon, alt: this.origin.Label }), index.h("div", { key: 'd1b901b06d007caac7f5bb3132c6d6f25de5c757', part: "container", class: "booking-nbr-cell__container" }, index.h("div", { key: '8f18daed45d95355e6ec4a6ea33341991e348947', style: { width: 'fit-content' } }, index.h("button", { key: 'a9319270f3f516e511900bc213917a470505930f', class: "booking-nbr-cell__button", onClick: () => this.openBookingDetails.emit(this.bookingNumber) }, number.formatBookingNumber(this.bookingNumber))), index.h("p", { key: '7a7050180b951ba56039cca0484eec53ac7700ef', part: "booking-reference", class: "booking-nbr-cell__channel_nbr" }, this.channelBookingNumber ? number.formatBookingNumber(this.channelBookingNumber) : this.origin.Label))));
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
        return (index.h(index.Host, { key: '315676e7410d5915b0cf380f0ae20e3bf997e600' }, index.h("div", { key: '07ddfed60b421284a68c71188505d694ab1fa87d', part: "checkin-container", class: "date-cell__container" }, this.checkInLabel && index.h("span", { key: 'd027955266ea0a4455c93670020bce49d6865a39', class: "date-cell__label" }, this.checkInLabel, ": "), index.h("p", { key: 'b3bbc6acae28dd9d755a28d94e47a3c75bb9098a', style: { fontWeight: this.overdueCheckin ? 'bold' : 'auto' } }, this.formatDate(this.checkIn))), this.showArrow && index.h("wa-icon", { key: '2857f2e5f313fcfdde1027cbcae3b2bf18cb0ea8', class: "date-cell__arrow ir-flip-rtl", name: "arrow-right" }), index.h("div", { key: '507deb879cde857d104a2e6b2ce7aa3d461ed288', part: "checkout-container", class: "date-cell__container" }, this.checkoutLabel && index.h("span", { key: '6e946ef4ce161fd9bca73d853d4eb9b58233292b', class: "date-cell__label" }, this.checkoutLabel, ": "), index.h("p", { key: '157deedacb1e966075044ece456d9f4da2c3f27c', style: { fontWeight: this.overdueCheckout ? 'bold' : 'auto' } }, this.formatDate(this.checkOut)))));
    }
};
IrDatesCell.style = irDatesCellCss();

exports.ir_booked_by_cell = IrBookedByCell;
exports.ir_booking_number_cell = IrBookingNumberCell;
exports.ir_dates_cell = IrDatesCell;
