import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';
import { l as locales } from './locales.store.js';

const irBookedByCellCss = ".sc-ir-booked-by-cell-h{box-sizing:border-box !important}.sc-ir-booked-by-cell-h *.sc-ir-booked-by-cell,.sc-ir-booked-by-cell-h *.sc-ir-booked-by-cell::before,.sc-ir-booked-by-cell-h *.sc-ir-booked-by-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-booked-by-cell{display:none !important}.sc-ir-booked-by-cell-h{display:block;font-size:0.93rem}[display='inline'].sc-ir-booked-by-cell-h{display:inline-flex;align-items:center;gap:1rem}.booked-by-source__logo.sc-ir-booked-by-cell{width:1.5625rem}.booked-by-cell__description.sc-ir-booked-by-cell{font-size:0.875rem}.cell-label.sc-ir-booked-by-cell{font-weight:700}.booked-by-source__private-note.sc-ir-booked-by-cell{height:0.5rem;width:0.5rem;border-radius:50%;background:rgb(244, 213, 82);display:inline-flex;padding:0;margin:0}.booked-by-source__container.sc-ir-booked-by-cell{display:flex;align-items:center;gap:0.5rem}.booked-by-cell__button.sc-ir-booked-by-cell:focus{outline:none}.booked-by-cell__button.sc-ir-booked-by-cell:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}.booked-by-cell__button.sc-ir-booked-by-cell{display:inline-flex;align-items:center;justify-content:center;height:fit-content;padding:0;font-family:inherit;font-size:var(--wa-form-control-value-font-size);font-weight:var(--wa-font-weight-action);line-height:calc(var(--wa-form-control-height) - var(--border-width) * 2);text-decoration:none;vertical-align:middle;white-space:nowrap;border-style:var(--wa-border-style);border-width:max(1px, var(--wa-form-control-border-width));border-radius:var(--wa-form-control-border-radius);transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing);cursor:pointer;user-select:none;-webkit-user-select:none;color:var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));background-color:transparent;border-color:transparent}.booked-by-cell__button.sc-ir-booked-by-cell:hover{color:var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-brand-fill-quiet))}.booked-by-cell__button.sc-ir-booked-by-cell:active{color:var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-brand-fill-quiet)), var(--wa-color-mix-active))}";
const IrBookedByCellStyle0 = irBookedByCellCss;

const IrBookedByCell = /*@__PURE__*/ proxyCustomElement(class IrBookedByCell extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.guestSelected = createEvent(this, "guestSelected", 7);
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
        return (h(Host, { key: 'd1f58d358d926ca4650bac671f4cd8bb66312465' }, this.label && h("p", { key: 'd8bf56b25a8783fe1fc4a88d6dfc353186c9f423', class: "cell-label" }, this.label, ":"), h("div", { key: '18183920fba0562ae6599963df4c4f5633c90d9c', class: "booked-by-source__container" }, this.clickableGuest ? (h("button", { class: "booked-by-cell__button", onClick: this.handleGuestClick.bind(this) }, guest)) : (h("p", null, guest)), this.showRepeatGuestBadge && (h(Fragment, { key: 'feac21f31fdb2a700802977225507c0a2df2bf9a' }, h("wa-tooltip", { key: '1a688f15d5a52e2d57dae1376c99ece4fe769693', for: repeatGuestBadgeId }, `${locales.entries.Lcz_BookingsNbr}`.replace('%1', this.guest.nbr_confirmed_bookings.toString())), h("wa-icon", { key: '22505d2893adffb59f404dcc8e5adffc163f1a20', name: "heart", style: { color: '#FB0AAD' }, id: repeatGuestBadgeId }))), this.showPersons && (h("p", { key: '974f0461c4ba1aafc5507aeaa2d69f5b361826ef' }, this.totalPersons, locales.entries.Lcz_P)), this.showPrivateNoteDot && h("span", { key: 'd601864671ed5ad0ebc3fe5a1c500f77253ec5a3', class: "booked-by-source__private-note" })), h("div", { key: 'c44eec365b94373ed198b2db330805dfd2a2e49f', class: "booked-by-source__container" }, this.showLoyaltyIcon && (h(Fragment, { key: '1495ae4b1d314e149a7921a8d9425cd8d4d5dca7' }, h("wa-tooltip", { key: '379d0bbc0b3603dfe14b68e6f22717fb4489ad33', for: loyaltyBadgeId }, locales.entries.Lcz_LoyaltyDiscountApplied), h("wa-icon", { key: 'd5d19ab24ee9257a470d10af7298d98f04c88ae0', name: "heart", variant: "regular", style: { color: '#fc6c85' }, id: loyaltyBadgeId }))), this.showPromoIcon && (h(Fragment, { key: '21fef5f1d0980f0d39a0dbfcd10a7ce2fa8f7835' }, h("wa-tooltip", { key: '102abb72ee803c55d8a8e08be0177a63744f267f', for: couponBadgeId }, locales.entries.Lcz_Coupon, ": ", this.promoKey), h("wa-icon", { key: '279f1cb726912864efa100708e4d62842e35b067', id: couponBadgeId, name: "ticket" }))))));
    }
    static get style() { return IrBookedByCellStyle0; }
}, [2, "ir-booked-by-cell", {
        "label": [1],
        "cellId": [1, "cell-id"],
        "display": [513],
        "guest": [16],
        "identifier": [1],
        "totalPersons": [1, "total-persons"],
        "promoKey": [1, "promo-key"],
        "showRepeatGuestBadge": [4, "show-repeat-guest-badge"],
        "showPersons": [4, "show-persons"],
        "showPrivateNoteDot": [4, "show-private-note-dot"],
        "showLoyaltyIcon": [4, "show-loyalty-icon"],
        "showPromoIcon": [4, "show-promo-icon"],
        "clickableGuest": [4, "clickable-guest"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-booked-by-cell"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booked-by-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookedByCell);
            }
            break;
    } });
}

export { IrBookedByCell as I, defineCustomElement as d };

//# sourceMappingURL=ir-booked-by-cell2.js.map