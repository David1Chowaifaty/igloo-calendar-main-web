import locales from "../../../../stores/locales.store";
import { Fragment, Host, h } from "@stencil/core";
export class IrBookedByCell {
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
        return (h(Host, { key: 'c80a104cf03f256277a3ed2896a9a2230e7e3165' }, this.label && h("p", { key: '26bcd524c5886809d1c1c1aac039bf0ad63ac621', class: "cell-label" }, this.label, ":"), h("div", { key: '99ca3926af32b376d8ff9a6de578cc030a964833', class: "booked-by-source__container" }, this.clickableGuest ? (h("button", { class: "booked-by-cell__button", onClick: this.handleGuestClick.bind(this) }, guest)) : (h("p", null, guest)), this.showRepeatGuestBadge && (h(Fragment, { key: 'ce13b34e58b36d47f63cb5d819301f8c60e9be7b' }, h("wa-tooltip", { key: '7470f5cac88be5c24de2ae778e0ed6c347238aa7', for: repeatGuestBadgeId }, `${locales.entries.Lcz_BookingsNbr}`.replace('%1', this.guest.nbr_confirmed_bookings.toString())), h("wa-icon", { key: 'f223ce19e17f6a6221d62a7fbed927af76794aaa', name: "heart", style: { color: '#FB0AAD' }, id: repeatGuestBadgeId }))), this.showPersons && (h("p", { key: '100d8a122e860031d9b960d6f9864c0981033373' }, this.totalPersons, locales.entries.Lcz_P)), this.showPrivateNoteDot && h("span", { key: 'bc0d749381abc9e77c47efc7fd7207e9c6f0654c', class: "booked-by-source__private-note" })), h("div", { key: '848782d676f9349f18d77ca2043fbcc405c5bcef', class: "booked-by-source__container" }, this.showLoyaltyIcon && (h(Fragment, { key: '92304cc89750498476c2e7f2cf2ef138fb39a248' }, h("wa-tooltip", { key: 'f2b4d79a19573e7535ccc202f4a86f7a32a2f5e4', for: loyaltyBadgeId }, locales.entries.Lcz_LoyaltyDiscountApplied), h("wa-icon", { key: '2a081dd82a39dcf165535ff41e4187946fea09c1', name: "heart", variant: "regular", style: { color: '#fc6c85' }, id: loyaltyBadgeId }))), this.showPromoIcon && (h(Fragment, { key: '35a57d899ababe5e62f9f815b7f63f8003eed859' }, h("wa-tooltip", { key: '7158866d91d5491a1f8af2673c32d87e6a227bc3', for: couponBadgeId }, locales.entries.Lcz_Coupon, ": ", this.promoKey), h("wa-icon", { key: 'd68440e15199796431e0e3f5215f1bbf88a412c3', id: couponBadgeId, name: "ticket" }))))));
    }
    static get is() { return "ir-booked-by-cell"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booked-by-cell.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booked-by-cell.css"]
        };
    }
    static get properties() {
        return {
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "label",
                "reflect": false
            },
            "cellId": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "cell-id",
                "reflect": false
            },
            "display": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'inline' | 'block'",
                    "resolved": "\"block\" | \"inline\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "display",
                "reflect": true,
                "defaultValue": "'block'"
            },
            "guest": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Booking['guest']",
                    "resolved": "Guest",
                    "references": {
                        "Booking": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Booking"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Guest associated with this booking."
                },
                "getter": false,
                "setter": false
            },
            "identifier": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Unique identifier for this cell. Used for tooltip scoping."
                },
                "getter": false,
                "setter": false,
                "attribute": "identifier",
                "reflect": false
            },
            "totalPersons": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Total number of persons staying (adults + children)."
                },
                "getter": false,
                "setter": false,
                "attribute": "total-persons",
                "reflect": false
            },
            "promoKey": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Promo key if a promo/coupon was applied."
                },
                "getter": false,
                "setter": false,
                "attribute": "promo-key",
                "reflect": false
            },
            "showRepeatGuestBadge": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Show pink heart icon if guest has repeated bookings."
                },
                "getter": false,
                "setter": false,
                "attribute": "show-repeat-guest-badge",
                "reflect": false,
                "defaultValue": "false"
            },
            "showPersons": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Show total persons count (e.g. \"3P\")."
                },
                "getter": false,
                "setter": false,
                "attribute": "show-persons",
                "reflect": false,
                "defaultValue": "false"
            },
            "showPrivateNoteDot": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Show yellow dot indicating the booking has a private note."
                },
                "getter": false,
                "setter": false,
                "attribute": "show-private-note-dot",
                "reflect": false,
                "defaultValue": "false"
            },
            "showLoyaltyIcon": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Show loyalty discount icon (pink heart-outline)."
                },
                "getter": false,
                "setter": false,
                "attribute": "show-loyalty-icon",
                "reflect": false,
                "defaultValue": "false"
            },
            "showPromoIcon": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Show promo/coupon icon."
                },
                "getter": false,
                "setter": false,
                "attribute": "show-promo-icon",
                "reflect": false,
                "defaultValue": "false"
            },
            "clickableGuest": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Makes the guest name clickable.\nEmits `openGuestDetails` when clicked."
                },
                "getter": false,
                "setter": false,
                "attribute": "clickable-guest",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "guestSelected",
                "name": "guestSelected",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the guest name is clicked.\nSends the `identifier` for parent lookup."
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=ir-booked-by-cell.js.map
