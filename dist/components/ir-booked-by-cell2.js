import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';
import { l as locales } from './locales.store.js';
import { d as defineCustomElement$1 } from './ir-custom-button2.js';

const irBookedByCellCss = ".sc-ir-booked-by-cell-h{box-sizing:border-box !important}.sc-ir-booked-by-cell-h *.sc-ir-booked-by-cell,.sc-ir-booked-by-cell-h *.sc-ir-booked-by-cell::before,.sc-ir-booked-by-cell-h *.sc-ir-booked-by-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-booked-by-cell{display:none !important}.sc-ir-booked-by-cell-h{display:flex;align-items:center;gap:1rem;font-size:0.93rem}.booked-by-source__logo.sc-ir-booked-by-cell{width:1.5625rem}.booked-by-cell__description.sc-ir-booked-by-cell{font-size:0.875rem}.booked-by-source__private-note.sc-ir-booked-by-cell{height:0.5rem;width:0.5rem;border-radius:50%;background:rgb(244, 213, 82);display:inline-flex;padding:0;margin:0}.booked-by-source__container.sc-ir-booked-by-cell{display:flex;align-items:center;gap:0.5rem}";
const IrBookedByCellStyle0 = irBookedByCellCss;

const IrBookedByCell = /*@__PURE__*/ proxyCustomElement(class IrBookedByCell extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.guestSelected = createEvent(this, "guestSelected", 7);
    }
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
        const repeatGuestBadgeId = `repeat-guest-badge-${this.guest.id}_${this.identifier}`;
        const loyaltyBadgeId = `loyalty-badge-${this.guest.id}_${this.identifier}`;
        const couponBadgeId = `coupon-badge-${this.guest.id}_${this.identifier}`;
        const guest = `${this.guest.first_name} ${this.guest.last_name}`;
        return (h(Host, { key: '5a37cf2644aca6d654b7d86d2859563c477ec494' }, h("div", { key: '068a9cc3253268e91377aa863c628c36e25d0c9f' }, h("div", { key: '78f8d7765e0abb407a572044661cf4def08d3e41', class: "booked-by-source__container" }, this.clickableGuest ? (h("ir-custom-button", { size: "medium", onClickHandler: this.handleGuestClick.bind(this), variant: "brand", appearance: "plain", link: true }, guest)) : (h("p", null, guest)), this.showRepeatGuestBadge && (h(Fragment, { key: '9fa11532b3a785480ce3ffd2eb5a80eac723a5a5' }, h("wa-tooltip", { key: '000dfc1732e215c7680cee8a26f5dbbb7c5bd71c', for: repeatGuestBadgeId }, `${locales.entries.Lcz_BookingsNbr}`.replace('%1', this.guest.nbr_confirmed_bookings.toString())), h("wa-icon", { key: 'd9616cbc378f4cd9f880920184c4338a54d4d322', name: "heart", style: { color: '#FB0AAD' }, id: repeatGuestBadgeId }))), this.showPersons && (h("p", { key: 'b9ebbb08f05f3ae42a7fdf36c87e8b65c5075676' }, this.totalPersons, locales.entries.Lcz_P)), this.showPrivateNoteDot && h("span", { key: 'eb3650732c0085c32f885a52f600f6d187e02394', class: "booked-by-source__private-note" })), h("div", { key: 'af448c0ac264f62968159ecfdbeb1c07051e2be2', class: "booked-by-source__container" }, this.showLoyaltyIcon && (h(Fragment, { key: '267e5c8cb36a5be007e1909e7b2d1d998a801248' }, h("wa-tooltip", { key: 'c6445a7359a92fc49e5177bb8ff9e1fa86ea2daf', for: loyaltyBadgeId }, locales.entries.Lcz_LoyaltyDiscountApplied), h("wa-icon", { key: '52f90a8965d3304171f6b6167095f07f0fb52dc4', name: "heart", variant: "regular", style: { color: '#fc6c85' }, id: loyaltyBadgeId }))), this.showPromoIcon && (h(Fragment, { key: '128735dbc9c73800329a6ed5e65c4120cbeaa1f2' }, h("wa-tooltip", { key: '9037b7b45038d001601023847a30bd59b4a8ccdd', for: couponBadgeId }, locales.entries.Lcz_Coupon, ": ", this.promoKey), h("wa-icon", { key: '7ca4d2bd218f9bcaa9ba89b5ba9c963e86b147f1', id: couponBadgeId, name: "ticket" })))))));
    }
    static get style() { return IrBookedByCellStyle0; }
}, [2, "ir-booked-by-cell", {
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
    const components = ["ir-booked-by-cell", "ir-custom-button"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booked-by-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookedByCell);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrBookedByCell as I, defineCustomElement as d };

//# sourceMappingURL=ir-booked-by-cell2.js.map