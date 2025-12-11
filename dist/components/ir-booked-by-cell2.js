import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';
import { l as locales } from './locales.store.js';
import { d as defineCustomElement$1 } from './ir-custom-button2.js';

const irBookedByCellCss = ".sc-ir-booked-by-cell-h{box-sizing:border-box !important}.sc-ir-booked-by-cell-h *.sc-ir-booked-by-cell,.sc-ir-booked-by-cell-h *.sc-ir-booked-by-cell::before,.sc-ir-booked-by-cell-h *.sc-ir-booked-by-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-booked-by-cell{display:none !important}.sc-ir-booked-by-cell-h{display:block;font-size:0.93rem}[display='inline'].sc-ir-booked-by-cell-h{display:inline-flex;align-items:center;gap:1rem}.booked-by-source__logo.sc-ir-booked-by-cell{width:1.5625rem}.booked-by-cell__description.sc-ir-booked-by-cell{font-size:0.875rem}.cell-label.sc-ir-booked-by-cell{font-weight:700}.booked-by-source__private-note.sc-ir-booked-by-cell{height:0.5rem;width:0.5rem;border-radius:50%;background:rgb(244, 213, 82);display:inline-flex;padding:0;margin:0}.booked-by-source__container.sc-ir-booked-by-cell{display:flex;align-items:center;gap:0.5rem}";
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
        return (h(Host, { key: 'ae66869cecfa275164d80114ea49378c3613e8b1' }, this.label && h("p", { key: 'df3d5cf589b76ee69b29a30630d872ca7c705c77', class: "cell-label" }, this.label, ":"), h("div", { key: '4d640e45802c989821a65a0b0b05319d3afda6df', class: "booked-by-source__container" }, this.clickableGuest ? (h("ir-custom-button", { size: "medium", onClickHandler: this.handleGuestClick.bind(this), variant: "brand", appearance: "plain", link: true }, guest)) : (h("p", null, guest)), this.showRepeatGuestBadge && (h(Fragment, { key: 'b2a3be7804ea38f1f1e59c166bff167233bf97e7' }, h("wa-tooltip", { key: '8b1eb802d550da9ef06f954284b36cdee0070a99', for: repeatGuestBadgeId }, `${locales.entries.Lcz_BookingsNbr}`.replace('%1', this.guest.nbr_confirmed_bookings.toString())), h("wa-icon", { key: '9377463552fd6cc68980562038fb9809ab0d3673', name: "heart", style: { color: '#FB0AAD' }, id: repeatGuestBadgeId }))), this.showPersons && (h("p", { key: 'cec7a53649be7d3c2104d001e41df6ba1145abde' }, this.totalPersons, locales.entries.Lcz_P)), this.showPrivateNoteDot && h("span", { key: '50ff48a31ca318765a9b5a2d381903a80cc01b0a', class: "booked-by-source__private-note" })), h("div", { key: 'a7a212c61c12d008e11cc3c47c12dde2f10981cf', class: "booked-by-source__container" }, this.showLoyaltyIcon && (h(Fragment, { key: '1c8ae79712b9c5ab14708e3345dbe92720ce1752' }, h("wa-tooltip", { key: 'c657d3608494bf63403e1da8294bb0c6569c3dfc', for: loyaltyBadgeId }, locales.entries.Lcz_LoyaltyDiscountApplied), h("wa-icon", { key: '86feaae5d196bbe798463e07ba046fd9e41f990d', name: "heart", variant: "regular", style: { color: '#fc6c85' }, id: loyaltyBadgeId }))), this.showPromoIcon && (h(Fragment, { key: '7d79511eda8a350a4e4ec94efea36ab644c0bcc8' }, h("wa-tooltip", { key: 'bfe1224c4297c67b9627a44754287eb08acbb525', for: couponBadgeId }, locales.entries.Lcz_Coupon, ": ", this.promoKey), h("wa-icon", { key: '3e7df16cd417ce88fa6c5d9db7aabbafeeb78330', id: couponBadgeId, name: "ticket" }))))));
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