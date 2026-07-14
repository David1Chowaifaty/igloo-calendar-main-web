import { r as registerInstance, c as createEvent, h, F as Fragment, H as Host } from './index-Nexq2OjX.js';
import { l as locales } from './locales.store-flvFxs7J.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import './index-BX-r5OtJ.js';

const irBookedByCellCss = () => `.sc-ir-booked-by-cell-h{box-sizing:border-box !important}.sc-ir-booked-by-cell-h *.sc-ir-booked-by-cell,.sc-ir-booked-by-cell-h *.sc-ir-booked-by-cell::before,.sc-ir-booked-by-cell-h *.sc-ir-booked-by-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-booked-by-cell{display:none !important}.sc-ir-booked-by-cell-h{display:block;font-size:0.93rem}[display='inline'].sc-ir-booked-by-cell-h{display:inline-flex;align-items:center;gap:1rem}.booked-by-source__logo.sc-ir-booked-by-cell{width:1.5625rem}.booked-by-cell__description.sc-ir-booked-by-cell{font-size:0.875rem}.cell-label.sc-ir-booked-by-cell{font-weight:700}.booked-by-source__private-note.sc-ir-booked-by-cell{height:0.5rem;width:0.5rem;border-radius:50%;background:rgb(244, 213, 82);display:inline-flex;padding:0;margin:0}.booked-by-source__container.sc-ir-booked-by-cell{display:flex;align-items:center;gap:0.5rem}.booked-by-cell__button.sc-ir-booked-by-cell:focus{outline:none}.booked-by-cell__button.sc-ir-booked-by-cell:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}.booked-by-cell__button.sc-ir-booked-by-cell{display:inline-flex;align-items:center;justify-content:center;height:fit-content;padding:0;font-family:inherit;font-size:var(--wa-form-control-value-font-size);font-weight:var(--wa-font-weight-action);line-height:calc(var(--wa-form-control-height) - var(--border-width) * 2);text-decoration:none;vertical-align:middle;white-space:nowrap;border-style:var(--wa-border-style);border-width:max(1px, var(--wa-form-control-border-width));border-radius:var(--wa-form-control-border-radius);transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing);cursor:pointer;user-select:none;-webkit-user-select:none;color:var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));background-color:transparent;border-color:transparent}.booked-by-cell__button.sc-ir-booked-by-cell:hover{color:var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-brand-fill-quiet))}.booked-by-source__contact.sc-ir-booked-by-cell wa-icon.sc-ir-booked-by-cell{font-size:1.25rem}.booked-by-source__contact.sc-ir-booked-by-cell a.sc-ir-booked-by-cell:first-child wa-icon.sc-ir-booked-by-cell{font-size:1rem}.booked-by-cell__button.sc-ir-booked-by-cell:active{color:var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-brand-fill-quiet)), var(--wa-color-mix-active))}@media (width >= 640px){.booked-by-cell__button.--mobile-only.sc-ir-booked-by-cell{display:none}}`;

const IrBookedByCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.guestSelected = createEvent(this, "guestSelected");
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
        return (h(Host, { key: 'fa65aff937daefdb2a797845bd846dfef36971bf' }, this.label && h("p", { key: '18040f4e23781ec2bf5a6571e7f63eea2c8ca327', class: "cell-label" }, this.label, ":"), h("div", { key: '6dc1951886b7219796e1383119454a2e4b289826', class: "booked-by-source__container" }, this.clickableGuest ? (h("button", { class: "booked-by-cell__button", onClick: this.handleGuestClick.bind(this) }, guest)) : (h("p", null, guest)), this.showRepeatGuestBadge && (h(Fragment, { key: '2346f7eb1440e6bf59fc43458ebab9ec5766b028' }, h("wa-tooltip", { key: 'd88c60e2bd34f443bb73d6fbd1c5d6caa3a192d8', for: repeatGuestBadgeId }, `${locales.entries.Lcz_BookingsNbr}`.replace('%1', this.guest.nbr_confirmed_bookings.toString())), h("wa-icon", { key: 'a05de48b1ac4432e2d6efb3329f60f83990e3c58', name: "heart", style: { color: '#FB0AAD' }, id: repeatGuestBadgeId }))), this.showPersons && (h("p", { key: 'eaf2ea7993459e047940cc90d3ab2c5b67a6211f' }, this.totalPersons, locales.entries.Lcz_P)), this.showPrivateNoteDot && h("span", { key: '4d57520c09e9ba19c1e39b57b2b4ead16229000c', class: "booked-by-source__private-note" })), this.showContactIcons && this.guest.country_phone_prefix && this.guest.mobile_without_prefix && (h("div", { key: 'f8748e67cc1ec938de16e7e4352654b7feff101d', class: "booked-by-source__container booked-by-source__contact" }, h("a", { key: '8d51f37c6e83fc5367f49f6a3e658f95dff6ddbd', class: "booked-by-cell__button --mobile-only", href: `tel:${this.guest.country_phone_prefix}${this.guest.mobile_without_prefix.replace(/\s+/g, '')}` }, h("wa-icon", { key: 'f7b79418d873fc9e530b8fc6d9ca7d840ddc3c90', name: "phone" })), h("a", { key: '4f9db8ffb81584526ea8730e0cf78823c362a44a', class: "booked-by-cell__button", href: `https://wa.me/${this.guest.country_phone_prefix.replace('+', '')}${this.guest.mobile_without_prefix.replace(/\s+/g, '')}`, target: "_blank", rel: "noopener noreferrer" }, h("wa-icon", { key: '247fdb974643481649e142b400b65b4ed36cb217', name: "whatsapp", family: "brands" })))), h("div", { key: '7ac8f8f727f94b9bf241bdb43a6271267f3dc3e8', class: "booked-by-source__container" }, this.showLoyaltyIcon && (h(Fragment, { key: 'cfa197721f567ea8885dd35756b282d13c0c2a9d' }, h("wa-tooltip", { key: '2a9f6db0deb2a7627d495a3f7683533b68f293f2', for: loyaltyBadgeId }, locales.entries.Lcz_LoyaltyDiscountApplied), h("wa-icon", { key: 'ca8999e8c766a1fc61edb40558d3bae4228d01d1', name: "heart", variant: "regular", style: { color: '#fc6c85' }, id: loyaltyBadgeId }))), this.showPromoIcon && (h(Fragment, { key: '3dd0faab89e392a608d268b5005759e3179db316' }, h("wa-tooltip", { key: '1f1c20e90659dc7766fcfa9580e7d922a29e6028', for: couponBadgeId }, locales.entries.Lcz_Coupon, ": ", this.promoKey), h("wa-icon", { key: '83f9d0e2087b6a73ed8fc87db705a1f5ca5c6394', id: couponBadgeId, name: "ticket" }))))));
    }
};
IrBookedByCell.style = irBookedByCellCss();

const irBookingNumberCellCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:flex;gap:1rem;align-items:center;font-size:0.93rem}.booking-nbr-cell__channel_nbr{font-size:0.75rem;padding:0;margin:0}.booking-nbr-cell__container{display:flex;flex-direction:column;align-self:flex-start}.booked-by-source__logo{width:1.5625rem;background-color:white;}.booking-nbr-cell__button:focus{outline:none}.booking-nbr-cell__button:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}.booking-nbr-cell__button{display:inline-flex;align-items:center;justify-content:center;height:fit-content;padding:0;font-family:inherit;font-size:var(--wa-form-control-value-font-size);font-weight:var(--wa-font-weight-action);line-height:calc(var(--wa-form-control-height) - var(--border-width) * 2);text-decoration:none;vertical-align:middle;white-space:nowrap;border-style:var(--wa-border-style);border-width:max(1px, var(--wa-form-control-border-width));border-radius:var(--wa-form-control-border-radius);transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing);cursor:pointer;user-select:none;-webkit-user-select:none;color:var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));background-color:transparent;border-color:transparent}.booking-nbr-cell__button:hover{color:var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-brand-fill-quiet))}.booking-nbr-cell__button:active{color:var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-brand-fill-quiet)), var(--wa-color-mix-active))}`;

const IrBookingNumberCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.openBookingDetails = createEvent(this, "openBookingDetails");
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
        return (h(Host, { key: 'd6043caa733fc1c9b77e6ecda8c9da157240e3d6' }, this.channelBookingNumber && h("wa-tooltip", { key: '02a6a2d0dc0722f79d03fd4842d9648e265ccd41', for: `source-logo__${this.bookingNumber}` }, this.origin.Label), h("img", { key: '6307cc17d8517a8c063188b18855d028f2f3a006', class: "booked-by-source__logo", id: `source-logo__${this.bookingNumber}`, src: this.origin.Icon, alt: this.origin.Label }), h("div", { key: 'ccd685df1815d896af6aae792c8e41c64791ea27', part: "container", class: "booking-nbr-cell__container" }, h("div", { key: '637afd051818af6fb7ce7528d3cd4f6544b17452', style: { width: 'fit-content' } }, h("button", { key: '584ce51f1f2ef02e5fe0974f49825e815a2d776e', class: "booking-nbr-cell__button", onClick: () => this.openBookingDetails.emit(this.bookingNumber) }, this.bookingNumber)), h("p", { key: '4d095c61dfe76b6dc123cf2d35d95a4fdb8d9799', part: "booking-reference", class: "booking-nbr-cell__channel_nbr" }, this.channelBookingNumber ? this.channelBookingNumber : this.origin.Label))));
    }
};
IrBookingNumberCell.style = irBookingNumberCellCss();

const irDatesCellCss = () => `.sc-ir-dates-cell-h{box-sizing:border-box !important}.sc-ir-dates-cell-h *.sc-ir-dates-cell,.sc-ir-dates-cell-h *.sc-ir-dates-cell::before,.sc-ir-dates-cell-h *.sc-ir-dates-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-dates-cell{display:none !important}.sc-ir-dates-cell-h{display:block;font-size:0.93rem}[display='inline'].sc-ir-dates-cell-h{display:inline-flex;align-items:center;justify-content:space-between;gap:1rem}.date-cell__container.sc-ir-dates-cell{display:flex;align-items:center;gap:0.25rem}.date-cell__label.sc-ir-dates-cell{font-weight:700}.date-cell__arrow.sc-ir-dates-cell{flex-shrink:0;font-size:0.8rem;color:var(--wa-color-text-quiet, #6b7280)}`;

const IrDatesCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return hooks(date, 'YYYY-MM-DD').format('DD MMM YYYY');
    }
    render() {
        return (h(Host, { key: '1da779bbaa7dbdd504909095e3b44cdd94fd1b24' }, h("div", { key: 'c0fe27bd03de10fd515d2e45fa9ca7ed2e202b06', class: "date-cell__container" }, this.checkInLabel && h("span", { key: 'a20cb79658d51d71ae02288c249101fcbdf00ab6', class: "date-cell__label" }, this.checkInLabel, ": "), h("p", { key: '6cc0c3f72b115d7a81793ebc613bbd1aee55c767', style: { fontWeight: this.overdueCheckin ? 'bold' : 'auto' } }, this.formatDate(this.checkIn))), this.showArrow && h("wa-icon", { key: 'ca15c63e82eeb9f5402c2d21d2123359d7554c70', class: "date-cell__arrow", name: "arrow-right" }), h("div", { key: '82c53416fbc2bcc48b04096b36e0ec0f59af82f6', class: "date-cell__container" }, this.checkoutLabel && h("span", { key: '19773ff9f89ee564b06c9569f4974e5920377897', class: "date-cell__label" }, this.checkoutLabel, ": "), h("p", { key: '6a6b3fc36545d3ee74575874e27fe72f27c41161', style: { fontWeight: this.overdueCheckout ? 'bold' : 'auto' } }, this.formatDate(this.checkOut)))));
    }
};
IrDatesCell.style = irDatesCellCss();

export { IrBookedByCell as ir_booked_by_cell, IrBookingNumberCell as ir_booking_number_cell, IrDatesCell as ir_dates_cell };
