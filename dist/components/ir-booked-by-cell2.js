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
        return (h(Host, { key: '5378762aa284e409e5298157008778fd8e0d5a9e' }, this.label && h("p", { key: '831b9f1dd8fd4472f400bea706d7cc8842bbebfb', class: "cell-label" }, this.label, ":"), h("div", { key: 'c5c40cfa5daf3f7f37667f18ed906f95abd79ce8', class: "booked-by-source__container" }, this.clickableGuest ? (h("button", { class: "booked-by-cell__button", onClick: this.handleGuestClick.bind(this) }, guest)) : (h("p", null, guest)), this.showRepeatGuestBadge && (h(Fragment, { key: '6b23c2f1d479fbf3b83e734b08b67744536d77d4' }, h("wa-tooltip", { key: 'e124cf5405b85082db132f9e08251d1263c0e5d3', for: repeatGuestBadgeId }, `${locales.entries.Lcz_BookingsNbr}`.replace('%1', this.guest.nbr_confirmed_bookings.toString())), h("wa-icon", { key: '87e957bc54e0034fc7e943e51a326f189a7b8ccf', name: "heart", style: { color: '#FB0AAD' }, id: repeatGuestBadgeId }))), this.showPersons && (h("p", { key: '01fa85732992834085e6ecf4470800b15ecff659' }, this.totalPersons, locales.entries.Lcz_P)), this.showPrivateNoteDot && h("span", { key: 'f8406b2a30b383d8f52808b5112f098e79af027b', class: "booked-by-source__private-note" })), h("div", { key: 'f15c27270f1dd043820eb79369b0f97d324847ef', class: "booked-by-source__container" }, this.showLoyaltyIcon && (h(Fragment, { key: 'fd255f8b41951a80df73b5f3fbb5056616c102b6' }, h("wa-tooltip", { key: 'b36088d1daf7740428931c0e7ff8a0e02be4e063', for: loyaltyBadgeId }, locales.entries.Lcz_LoyaltyDiscountApplied), h("wa-icon", { key: 'fee93a066b4ed3e7c17715caa696c88f2739f203', name: "heart", variant: "regular", style: { color: '#fc6c85' }, id: loyaltyBadgeId }))), this.showPromoIcon && (h(Fragment, { key: 'd0d216672f0ca4db99b04da175989a352be0323b' }, h("wa-tooltip", { key: '96e6c09d93476ad8a8d0571fe8555830aaea6dc7', for: couponBadgeId }, locales.entries.Lcz_Coupon, ": ", this.promoKey), h("wa-icon", { key: '93f3a7159f7788c349e00634cde1f31d8ad235aa', id: couponBadgeId, name: "ticket" }))))));
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