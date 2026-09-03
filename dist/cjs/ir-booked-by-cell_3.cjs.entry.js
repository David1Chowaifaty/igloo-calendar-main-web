'use strict';

var index = require('./index-P5Mginch.js');
var locales_store = require('./locales.store-v9LoZcAK.js');
var number = require('./number-3J_Nkle1.js');
var irDate = require('./ir-date-CUot5M4p.js');
require('./moment-CdViwxPQ.js');
require('./index-BLJXadKe.js');
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
        return (index.h(index.Host, { key: 'fa65aff937daefdb2a797845bd846dfef36971bf' }, this.label && index.h("p", { key: '18040f4e23781ec2bf5a6571e7f63eea2c8ca327', class: "cell-label" }, this.label, ":"), index.h("div", { key: '6dc1951886b7219796e1383119454a2e4b289826', class: "booked-by-source__container" }, this.clickableGuest ? (index.h("button", { class: "booked-by-cell__button", onClick: this.handleGuestClick.bind(this) }, guest)) : (index.h("p", null, guest)), this.showRepeatGuestBadge && (index.h(index.Fragment, { key: '2346f7eb1440e6bf59fc43458ebab9ec5766b028' }, index.h("wa-tooltip", { key: 'd88c60e2bd34f443bb73d6fbd1c5d6caa3a192d8', for: repeatGuestBadgeId }, `${locales_store.locales.entries.Lcz_BookingsNbr}`.replace('%1', this.guest.nbr_confirmed_bookings.toString())), index.h("wa-icon", { key: 'a05de48b1ac4432e2d6efb3329f60f83990e3c58', name: "heart", style: { color: '#FB0AAD' }, id: repeatGuestBadgeId }))), this.showPersons && (index.h("p", { key: 'eaf2ea7993459e047940cc90d3ab2c5b67a6211f' }, this.totalPersons, locales_store.locales.entries.Lcz_P ?? 'P')), this.showPrivateNoteDot && index.h("span", { key: '1a378db5a7067406d57a3bfece4cab29965bb4e9', class: "booked-by-source__private-note" })), this.showContactIcons && this.guest.country_phone_prefix && this.guest.mobile_without_prefix && (index.h("div", { key: '3e127d9c525df3bfeb2e1e92c4f3061458374cbe', part: "contact", class: "booked-by-source__container booked-by-source__contact" }, index.h("a", { key: '4ae654b486cf64b0147314564f7e66134862581a', class: "booked-by-cell__button --mobile-only", href: `tel:${this.guest.country_phone_prefix}${this.guest.mobile_without_prefix.replace(/\s+/g, '')}` }, index.h("wa-icon", { key: '557220a6dca27dc8e980b6007197c33e8208201c', name: "phone" })), index.h("a", { key: 'a0c375120ab12d2f5771fc7ad76c5c3ea18fd7b8', class: "booked-by-cell__button", href: `https://wa.me/${this.guest.country_phone_prefix.replace('+', '')}${this.guest.mobile_without_prefix.replace(/\s+/g, '')}`, target: "_blank", rel: "noopener noreferrer" }, index.h("wa-icon", { key: '2fc8dbebf930a69a0f4d9d60a6368b9bdd81f944', name: "whatsapp", family: "brands" })))), index.h("div", { key: '56130d61e9a1e94ae651e1d1e70d099037718aa1', part: "loyalty", class: "booked-by-source__container" }, this.showLoyaltyIcon && (index.h(index.Fragment, { key: '068f38c34ffc4c1482d433114893eb7fb865127f' }, index.h("wa-tooltip", { key: 'f42820c78cd62daa8612c9cabe2799b964f7fdf8', for: loyaltyBadgeId }, locales_store.locales.entries.Lcz_LoyaltyDiscountApplied), index.h("wa-icon", { key: 'c2b8851b975c5590abdf399949da4043588eeece', name: "heart", variant: "regular", style: { color: '#fc6c85' }, id: loyaltyBadgeId }))), this.showPromoIcon && (index.h(index.Fragment, { key: '7379a988df9b30eaf8688a39017ece7974df0016' }, index.h("wa-tooltip", { key: '5d8723f503e3e5ee5290c94fd0e0e796185d9bb2', for: couponBadgeId }, locales_store.locales.entries.Lcz_Coupon, ": ", this.promoKey), index.h("wa-icon", { key: '5cce9b4a43976bbb8d4e2f6c5fc5f3d9d4ac6f25', id: couponBadgeId, name: "ticket" }))))));
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
        return (index.h(index.Host, { key: 'df72393c82503ee2c83e9b6976a349e840b41bb8' }, this.channelBookingNumber && index.h("wa-tooltip", { key: '5811c2af234912c1bf03bcc35d7383a27c47f553', for: `source-logo__${this.bookingNumber}` }, this.origin.Label), index.h("img", { key: '4be8a4112373dff93c0c74a44d2fc03dc185a6ff', class: "booked-by-source__logo", id: `source-logo__${this.bookingNumber}`, src: this.origin.Icon, alt: this.origin.Label }), index.h("div", { key: '2ee2274315628d6ff639a2c5494ae4c557fe84f5', part: "container", class: "booking-nbr-cell__container" }, index.h("div", { key: '36b032c6546a41fc88c2dae04c373403e10dd35a', style: { width: 'fit-content' } }, index.h("button", { key: 'b0752ca6a9dfffd603548a89b6b438e436185cc1', class: "booking-nbr-cell__button", onClick: () => this.openBookingDetails.emit(this.bookingNumber) }, number.formatBookingNumber(this.bookingNumber))), index.h("p", { key: 'e22ee68013e237d1fea44c55ee35e8ba63e5f808', part: "booking-reference", class: "booking-nbr-cell__channel_nbr" }, this.channelBookingNumber ? number.formatBookingNumber(this.channelBookingNumber) : this.origin.Label))));
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
        return (index.h(index.Host, { key: '3feaf1101a166b0c8ae8d44b8f196c7498104bce' }, index.h("div", { key: '05500a8b039a11e9b7f21f4d900a314e127ecc87', part: "checkin-container", class: "date-cell__container" }, this.checkInLabel && index.h("span", { key: 'a70258d6c629323d8ffe0ec91b449f529acfe3fb', class: "date-cell__label" }, this.checkInLabel, ": "), index.h("p", { key: '9a374710199602d67580b51b31852d88a4d35cb5', style: { fontWeight: this.overdueCheckin ? 'bold' : 'auto' } }, this.formatDate(this.checkIn))), this.showArrow && index.h("wa-icon", { key: '0636b765e802a9cd9eeaa3859af2f1fcdd60a055', class: "date-cell__arrow ir-flip-rtl", name: "arrow-right" }), index.h("div", { key: 'e21064ffc048ea8777466fe0998e7cf9a04b4be6', part: "checkout-container", class: "date-cell__container" }, this.checkoutLabel && index.h("span", { key: '041bd36e3ef1a29c4300f76cc675138061b3d63a', class: "date-cell__label" }, this.checkoutLabel, ": "), index.h("p", { key: '82e64bcbfc54be426d706551506ea0178da55885', style: { fontWeight: this.overdueCheckout ? 'bold' : 'auto' } }, this.formatDate(this.checkOut)))));
    }
};
IrDatesCell.style = irDatesCellCss();

exports.ir_booked_by_cell = IrBookedByCell;
exports.ir_booking_number_cell = IrBookingNumberCell;
exports.ir_dates_cell = IrDatesCell;
