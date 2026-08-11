'use strict';

var index = require('./index-jMqrfjaT.js');
var locales_store = require('./locales.store-EkxfQjEN.js');
var moment = require('./moment-CdViwxPQ.js');
require('./index-BXsYsiHK.js');

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
        return (index.h(index.Host, { key: 'f1bcd5466666b17eb7c04562ad8b5b6e22b4d663' }, this.label && index.h("p", { key: '1c51c915fe02a7827524ad2c0635ad83a1f460ee', class: "cell-label" }, this.label, ":"), index.h("div", { key: '5f4a8691ed588fdfafc17c1e4a943542a85267a5', class: "booked-by-source__container" }, this.clickableGuest ? (index.h("button", { class: "booked-by-cell__button", onClick: this.handleGuestClick.bind(this) }, guest)) : (index.h("p", null, guest)), this.showRepeatGuestBadge && (index.h(index.Fragment, { key: '4fe7e6cceaa6498b4025e3ee406b0ae3f78b1beb' }, index.h("wa-tooltip", { key: 'b9d8f142bd1a929d9aed075a5667a7ac5a4bae91', for: repeatGuestBadgeId }, `${locales_store.locales.entries.Lcz_BookingsNbr}`.replace('%1', this.guest.nbr_confirmed_bookings.toString())), index.h("wa-icon", { key: 'ceb4cd8f2537140d2ba640a6007ec2c3fcec2623', name: "heart", style: { color: '#FB0AAD' }, id: repeatGuestBadgeId }))), this.showPersons && (index.h("p", { key: '45b36d2fcad309be33206ebbd064ad7428677aab' }, this.totalPersons, locales_store.locales.entries.Lcz_P ?? 'P')), this.showPrivateNoteDot && index.h("span", { key: '74597a119b8d232eb59602c35e7475cf19820437', class: "booked-by-source__private-note" })), this.showContactIcons && this.guest.country_phone_prefix && this.guest.mobile_without_prefix && (index.h("div", { key: 'cd2293a5a1376c64783b0b792d45236eadb3d9ae', part: "contact", class: "booked-by-source__container booked-by-source__contact" }, index.h("a", { key: '62b68812bb07b7922ab2964d455d5d8545127729', class: "booked-by-cell__button --mobile-only", href: `tel:${this.guest.country_phone_prefix}${this.guest.mobile_without_prefix.replace(/\s+/g, '')}` }, index.h("wa-icon", { key: '1ad9c7bb3f07534ab44b74cca8d9184eb73a34d0', name: "phone" })), index.h("a", { key: 'c66d6ab43909def576df3f2bcf3dcbb1c74c4416', class: "booked-by-cell__button", href: `https://wa.me/${this.guest.country_phone_prefix.replace('+', '')}${this.guest.mobile_without_prefix.replace(/\s+/g, '')}`, target: "_blank", rel: "noopener noreferrer" }, index.h("wa-icon", { key: '6d63949571d9e8f10c64aced628e0c2c51dfa8fc', name: "whatsapp", family: "brands" })))), index.h("div", { key: 'f079f5104c723976a9d2d5bfb21d716f9aec5838', part: "loyalty", class: "booked-by-source__container" }, this.showLoyaltyIcon && (index.h(index.Fragment, { key: '3785979b6feefb362cc2554a592ade1b1f3e6262' }, index.h("wa-tooltip", { key: 'b031a9d45bf4facdb23b75fbef14cfe1fce84d90', for: loyaltyBadgeId }, locales_store.locales.entries.Lcz_LoyaltyDiscountApplied), index.h("wa-icon", { key: 'db6aa550cdcdeaca87c30fe4234d068360c677c6', name: "heart", variant: "regular", style: { color: '#fc6c85' }, id: loyaltyBadgeId }))), this.showPromoIcon && (index.h(index.Fragment, { key: 'b995374d7e7a136580e455eaa7b6d6b9883203a1' }, index.h("wa-tooltip", { key: 'ad181ca5b4b2870114a88c240d97359420376c6b', for: couponBadgeId }, locales_store.locales.entries.Lcz_Coupon, ": ", this.promoKey), index.h("wa-icon", { key: 'f31a82e5cc9fb8013dc400a9d1384ef45f4d1627', id: couponBadgeId, name: "ticket" }))))));
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
        return (index.h(index.Host, { key: 'e7575e84a4c4e7ec2b55789030bb723148cc746c' }, this.channelBookingNumber && index.h("wa-tooltip", { key: '723ee15ae37f03d1ffaca4bcf5212319165185b3', for: `source-logo__${this.bookingNumber}` }, this.origin.Label), index.h("img", { key: 'e1c5a1ef6326cc624bc1a237478c25a305c44329', class: "booked-by-source__logo", id: `source-logo__${this.bookingNumber}`, src: this.origin.Icon, alt: this.origin.Label }), index.h("div", { key: '301e7d324c9c6a6c055e6ba0d2779aaf14b075a8', part: "container", class: "booking-nbr-cell__container" }, index.h("div", { key: '53a8316dc172b67209514e0c33eee6adbf5ce541', style: { width: 'fit-content' } }, index.h("button", { key: '7351ab04249cf6f43f88ede30390196b9eb1e5c2', class: "booking-nbr-cell__button", onClick: () => this.openBookingDetails.emit(this.bookingNumber) }, this.bookingNumber)), index.h("p", { key: '60a5e639fdf26b1979ef2b59ce92afedb97b0a63', part: "booking-reference", class: "booking-nbr-cell__channel_nbr" }, this.channelBookingNumber ? this.channelBookingNumber : this.origin.Label))));
    }
};
IrBookingNumberCell.style = irBookingNumberCellCss();

const irDatesCellCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;font-size:0.93rem}:host[display='inline']{display:inline-flex;align-items:center;justify-content:space-between;gap:1rem}.date-cell__container{display:flex;align-items:center;gap:0.25rem}.date-cell__label{font-weight:700}.date-cell__arrow{flex-shrink:0;font-size:0.8rem;color:var(--wa-color-text-quiet, #6b7280)}`;

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
        return moment.hooks(date, 'YYYY-MM-DD').format('DD MMM YYYY');
    }
    render() {
        return (index.h(index.Host, { key: 'efd6d00154d4605de96f7f9896b03648a0abb8d6' }, index.h("div", { key: '1553f4ed4eabbb9ee8c5e27e8a968acc3a615fb5', part: "checkin-container", class: "date-cell__container" }, this.checkInLabel && index.h("span", { key: '30e430963af4b40c47a7a4b142b7b068bad09a60', class: "date-cell__label" }, this.checkInLabel, ": "), index.h("p", { key: '64cad971dfcee7ed020569c6636905873a6ac085', style: { fontWeight: this.overdueCheckin ? 'bold' : 'auto' } }, this.formatDate(this.checkIn))), this.showArrow && index.h("wa-icon", { key: '651485887356ab0bfd436f71ef37fac2c5697a30', class: "date-cell__arrow", name: "arrow-right" }), index.h("div", { key: 'a861043e59809fb051b0bef6a4e228d2c22fe08b', part: "checkout-container", class: "date-cell__container" }, this.checkoutLabel && index.h("span", { key: 'a191300d16c92673c65eacf9434af41b0714387a', class: "date-cell__label" }, this.checkoutLabel, ": "), index.h("p", { key: '0648ca5a6d01c97f8769fb4829e2e0674c4588e6', style: { fontWeight: this.overdueCheckout ? 'bold' : 'auto' } }, this.formatDate(this.checkOut)))));
    }
};
IrDatesCell.style = irDatesCellCss();

exports.ir_booked_by_cell = IrBookedByCell;
exports.ir_booking_number_cell = IrBookingNumberCell;
exports.ir_dates_cell = IrDatesCell;
