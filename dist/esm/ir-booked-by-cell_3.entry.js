import { r as registerInstance, c as createEvent, h, F as Fragment, H as Host } from './index-DKZeCK8T.js';
import { t } from './t-Bvz1wS_D.js';
import { a as formatBookingNumber } from './number-0UrU_yO2.js';
import { f as formatDate } from './ir-date-CY_qGQ63.js';
import './moment-Mki5YqAR.js';
import './locale-scope-Jre4lb6k.js';
import './language-observer-CHgzsZkY.js';
import './_commonjsHelpers-BFTU3MAI.js';

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
        return (h(Host, { key: '06cb018cb90faa45ab43f6b00e38ed5b40866251' }, this.label && h("p", { key: '225a935fabc1f8991553da76a408ed3d2d750ef0', class: "cell-label" }, this.label, ":"), h("div", { key: '57b04bcb4e4f978ca17a01835f2a740a597f6f6f', class: "booked-by-source__container" }, this.clickableGuest ? (h("button", { class: "booked-by-cell__button", onClick: this.handleGuestClick.bind(this) }, guest)) : (h("p", null, guest)), this.showRepeatGuestBadge && (h(Fragment, { key: 'efeca264677a3d6c80c4151cd257b64c2dc4ddb2' }, h("wa-tooltip", { key: '209cfb4da52781ccadeccac13a6a01298cb8603c', for: repeatGuestBadgeId }, `${t('Lcz_BookingsNbr', { fallback: '%1 bookings' })}`.replace('%1', this.guest.nbr_confirmed_bookings.toString())), h("wa-icon", { key: 'f2289744dde93d3ac82273ac5da57bc6cdcdb524', name: "heart", style: { color: '#FB0AAD' }, id: repeatGuestBadgeId }))), this.showPersons && (h("p", { key: 'fb1525c76c89d377c992ff86be2a081704863b95' }, this.totalPersons, t('Lcz_P', { fallback: 'P' }))), this.showPrivateNoteDot && h("span", { key: 'da284676c693ba31110d54c00d2ce043e0cff9e8', class: "booked-by-source__private-note" })), this.showContactIcons && this.guest.country_phone_prefix && this.guest.mobile_without_prefix && (h("div", { key: '2db7c8c3ea3123fb46151523d44d13ada5277cf6', part: "contact", class: "booked-by-source__container booked-by-source__contact" }, h("a", { key: '1bf20efebea4207636e1655a8e7dbdbac1829d3a', class: "booked-by-cell__button --mobile-only", href: `tel:${this.guest.country_phone_prefix}${this.guest.mobile_without_prefix.replace(/\s+/g, '')}` }, h("wa-icon", { key: '78897c52d314203beb4598e85c3ef56e21694a15', name: "phone" })), h("a", { key: 'd1155b63ddb495e4deab422e8666a2d53961e476', class: "booked-by-cell__button", href: `https://wa.me/${this.guest.country_phone_prefix.replace('+', '')}${this.guest.mobile_without_prefix.replace(/\s+/g, '')}`, target: "_blank", rel: "noopener noreferrer" }, h("wa-icon", { key: 'cbbf4854aedf29bfaa8874dd481a87caf76a357c', name: "whatsapp", family: "brands" })))), h("div", { key: '03d9418c5ab16e08c9e8e60e90e7a9b6375accca', part: "loyalty", class: "booked-by-source__container" }, this.showLoyaltyIcon && (h(Fragment, { key: '39de87c066b12f56c0f7d81e4c7a4b9ced9b7470' }, h("wa-tooltip", { key: '4f138c8521e2e5fef4e69e8d60b004d9a903b00a', for: loyaltyBadgeId }, t('Lcz_LoyaltyDiscountApplied', { fallback: 'Coupon: %1' })), h("wa-icon", { key: 'b7d034a2a041ef153a0a4cecedfcfed3dd639d46', name: "heart", variant: "regular", style: { color: '#fc6c85' }, id: loyaltyBadgeId }))), this.showPromoIcon && (h(Fragment, { key: '288b27cd7135f08980372a8513781e335470ef97' }, h("wa-tooltip", { key: '9a554cdb717d651e100317de64277c2006bc43b8', for: couponBadgeId }, t('Lcz_Coupon', { fallback: 'Coupon' }), ": ", this.promoKey), h("wa-icon", { key: 'f5f96ee872186c4bc181cea78eafe29928764826', id: couponBadgeId, name: "ticket" }))))));
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
        return (h(Host, { key: 'd6749cdb388e012ac9bcacc27382025b3e5f5dc4' }, this.channelBookingNumber && h("wa-tooltip", { key: '1307884e41a7dcc41ae64b9b76d3f77607523258', for: `source-logo__${this.bookingNumber}` }, this.origin.Label), h("img", { key: 'f55887b576aa9f33529f0558ef085e3b70eaaa60', class: "booked-by-source__logo", id: `source-logo__${this.bookingNumber}`, src: this.origin.Icon, alt: this.origin.Label }), h("div", { key: '2ffc7ce3ff54df5daa0f9957d9eac2b50fb19d54', part: "container", class: "booking-nbr-cell__container" }, h("div", { key: 'c693515144b18e61bb7b24322d280721ef56417c', style: { width: 'fit-content' } }, h("button", { key: 'c49a24659362eb11a18744a05aa0dfbb84e0de5c', class: "booking-nbr-cell__button", onClick: () => this.openBookingDetails.emit(this.bookingNumber) }, formatBookingNumber(this.bookingNumber))), h("p", { key: 'fcf245d9e0f0e45e2ee580ec70a98fcfa1ac2fda', part: "booking-reference", class: "booking-nbr-cell__channel_nbr" }, this.channelBookingNumber ? formatBookingNumber(this.channelBookingNumber) : this.origin.Label))));
    }
};
IrBookingNumberCell.style = irBookingNumberCellCss();

const irDatesCellCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;font-size:0.93rem}:host([display='inline']){display:inline-flex;align-items:center;justify-content:space-between;gap:1rem}.date-cell__container{display:flex;align-items:center;gap:0.25rem}.date-cell__label{font-weight:700}.date-cell__arrow{flex-shrink:0;font-size:0.8rem;color:var(--wa-color-text-quiet, #6b7280)}.date-cell__container p{unicode-bidi:plaintext}.ir-flip-rtl:dir(rtl){scale:-1 1}`;

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
        return formatDate(date, { style: 'medium' });
    }
    render() {
        return (h(Host, { key: '67a0d15bc4e9038a5a937d9c8594464bcc319835' }, h("div", { key: '138838c02a8cff5007e94265002ef3936cdc8aed', part: "checkin-container", class: "date-cell__container" }, this.checkInLabel && h("span", { key: '4fc8c0ce16b15ae24b6eb817d30c34212a73da51', class: "date-cell__label" }, this.checkInLabel, ": "), h("p", { key: '29c0fa247b1958532d42d8d43b3968efae68b91d', style: { fontWeight: this.overdueCheckin ? 'bold' : 'auto' } }, this.formatDate(this.checkIn))), this.showArrow && h("wa-icon", { key: 'bed735b301b44e9384938a5bdb0bd5eacc5a2978', class: "date-cell__arrow ir-flip-rtl", name: "arrow-right" }), h("div", { key: '44d598634dcda6617d44d42ec2f898b6b39f6c57', part: "checkout-container", class: "date-cell__container" }, this.checkoutLabel && h("span", { key: '2002334fb21e6135cb9495103f5574f4992514b1', class: "date-cell__label" }, this.checkoutLabel, ": "), h("p", { key: '188e039053a09f80fb0c623c018a819018df7dc4', style: { fontWeight: this.overdueCheckout ? 'bold' : 'auto' } }, this.formatDate(this.checkOut)))));
    }
};
IrDatesCell.style = irDatesCellCss();

export { IrBookedByCell as ir_booked_by_cell, IrBookingNumberCell as ir_booking_number_cell, IrDatesCell as ir_dates_cell };
