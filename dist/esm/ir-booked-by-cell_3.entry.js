import { r as registerInstance, c as createEvent, h, F as Fragment, H as Host } from './index-CaNXuIlM.js';
import { l as locales } from './locales.store-VrM8jHuM.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import './index-Cn49IR5D.js';

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
        return (h(Host, { key: 'f1bcd5466666b17eb7c04562ad8b5b6e22b4d663' }, this.label && h("p", { key: '1c51c915fe02a7827524ad2c0635ad83a1f460ee', class: "cell-label" }, this.label, ":"), h("div", { key: '5f4a8691ed588fdfafc17c1e4a943542a85267a5', class: "booked-by-source__container" }, this.clickableGuest ? (h("button", { class: "booked-by-cell__button", onClick: this.handleGuestClick.bind(this) }, guest)) : (h("p", null, guest)), this.showRepeatGuestBadge && (h(Fragment, { key: '4fe7e6cceaa6498b4025e3ee406b0ae3f78b1beb' }, h("wa-tooltip", { key: 'b9d8f142bd1a929d9aed075a5667a7ac5a4bae91', for: repeatGuestBadgeId }, `${locales.entries.Lcz_BookingsNbr}`.replace('%1', this.guest.nbr_confirmed_bookings.toString())), h("wa-icon", { key: 'ceb4cd8f2537140d2ba640a6007ec2c3fcec2623', name: "heart", style: { color: '#FB0AAD' }, id: repeatGuestBadgeId }))), this.showPersons && (h("p", { key: '45b36d2fcad309be33206ebbd064ad7428677aab' }, this.totalPersons, locales.entries.Lcz_P ?? 'P')), this.showPrivateNoteDot && h("span", { key: '74597a119b8d232eb59602c35e7475cf19820437', class: "booked-by-source__private-note" })), this.showContactIcons && this.guest.country_phone_prefix && this.guest.mobile_without_prefix && (h("div", { key: 'cd2293a5a1376c64783b0b792d45236eadb3d9ae', part: "contact", class: "booked-by-source__container booked-by-source__contact" }, h("a", { key: '62b68812bb07b7922ab2964d455d5d8545127729', class: "booked-by-cell__button --mobile-only", href: `tel:${this.guest.country_phone_prefix}${this.guest.mobile_without_prefix.replace(/\s+/g, '')}` }, h("wa-icon", { key: '1ad9c7bb3f07534ab44b74cca8d9184eb73a34d0', name: "phone" })), h("a", { key: 'c66d6ab43909def576df3f2bcf3dcbb1c74c4416', class: "booked-by-cell__button", href: `https://wa.me/${this.guest.country_phone_prefix.replace('+', '')}${this.guest.mobile_without_prefix.replace(/\s+/g, '')}`, target: "_blank", rel: "noopener noreferrer" }, h("wa-icon", { key: '6d63949571d9e8f10c64aced628e0c2c51dfa8fc', name: "whatsapp", family: "brands" })))), h("div", { key: 'f079f5104c723976a9d2d5bfb21d716f9aec5838', part: "loyalty", class: "booked-by-source__container" }, this.showLoyaltyIcon && (h(Fragment, { key: '3785979b6feefb362cc2554a592ade1b1f3e6262' }, h("wa-tooltip", { key: 'b031a9d45bf4facdb23b75fbef14cfe1fce84d90', for: loyaltyBadgeId }, locales.entries.Lcz_LoyaltyDiscountApplied), h("wa-icon", { key: 'db6aa550cdcdeaca87c30fe4234d068360c677c6', name: "heart", variant: "regular", style: { color: '#fc6c85' }, id: loyaltyBadgeId }))), this.showPromoIcon && (h(Fragment, { key: 'b995374d7e7a136580e455eaa7b6d6b9883203a1' }, h("wa-tooltip", { key: 'ad181ca5b4b2870114a88c240d97359420376c6b', for: couponBadgeId }, locales.entries.Lcz_Coupon, ": ", this.promoKey), h("wa-icon", { key: 'f31a82e5cc9fb8013dc400a9d1384ef45f4d1627', id: couponBadgeId, name: "ticket" }))))));
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
        return (h(Host, { key: '29353d3e1a39c8fb5a041d9d8f2e5fc718ba9850' }, this.channelBookingNumber && h("wa-tooltip", { key: '0db44c2a70dc6b822aa5062d294ca92bff0d47b2', for: `source-logo__${this.bookingNumber}` }, this.origin.Label), h("img", { key: '9e0619358d7b96988de11461477b537f0ac2ecf6', class: "booked-by-source__logo", id: `source-logo__${this.bookingNumber}`, src: this.origin.Icon, alt: this.origin.Label }), h("div", { key: '10c076dc2ce11458d76694b1d4f2a4668b1fcd01', part: "container", class: "booking-nbr-cell__container" }, h("div", { key: '707b8f14bcb0cf5f589cbbba4bc50457f3297751', style: { width: 'fit-content' } }, h("button", { key: '22c9331a53b4d78f20c9518b007410b3a677d8a0', class: "booking-nbr-cell__button", onClick: () => this.openBookingDetails.emit(this.bookingNumber) }, this.bookingNumber)), h("p", { key: 'd932acc1678170131b3ab5fd3dd11b2c9e033cb7', part: "booking-reference", class: "booking-nbr-cell__channel_nbr" }, this.channelBookingNumber ? this.channelBookingNumber : this.origin.Label))));
    }
};
IrBookingNumberCell.style = irBookingNumberCellCss();

const irDatesCellCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;font-size:0.93rem}:host[display='inline']{display:inline-flex;align-items:center;justify-content:space-between;gap:1rem}.date-cell__container{display:flex;align-items:center;gap:0.25rem}.date-cell__label{font-weight:700}.date-cell__arrow{flex-shrink:0;font-size:0.8rem;color:var(--wa-color-text-quiet, #6b7280)}`;

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
        return (h(Host, { key: '3d6de117b37a3bc8694571271f27c65267fddc78' }, h("div", { key: 'd8170568bde536471e199d1573d5d9c148e7325e', part: "checkin-container", class: "date-cell__container" }, this.checkInLabel && h("span", { key: '98ceef9489d363182a329fa87083e92efae949df', class: "date-cell__label" }, this.checkInLabel, ": "), h("p", { key: 'c175ef1efefcab2511792f3e0dad943a261b694d', style: { fontWeight: this.overdueCheckin ? 'bold' : 'auto' } }, this.formatDate(this.checkIn))), this.showArrow && h("wa-icon", { key: '05288f7c3e6a67459e65fa87ca3ef1e1cc7bdff3', class: "date-cell__arrow", name: "arrow-right" }), h("div", { key: 'fcfc0d3879ba4079ef567752505155a559fa6945', part: "checkout-container", class: "date-cell__container" }, this.checkoutLabel && h("span", { key: '908559e7fb5c18b3ee5ce6c26e1f81d78d2318e0', class: "date-cell__label" }, this.checkoutLabel, ": "), h("p", { key: '149fde661b6aa629a3d5c43cd26428d515ef20b3', style: { fontWeight: this.overdueCheckout ? 'bold' : 'auto' } }, this.formatDate(this.checkOut)))));
    }
};
IrDatesCell.style = irDatesCellCss();

export { IrBookedByCell as ir_booked_by_cell, IrBookingNumberCell as ir_booking_number_cell, IrDatesCell as ir_dates_cell };
