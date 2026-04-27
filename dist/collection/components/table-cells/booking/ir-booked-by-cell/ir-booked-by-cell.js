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
        return (h(Host, { key: 'bdc3143593b1cef310b8469571b037959b3e2251' }, this.label && h("p", { key: '995b88c576e42866635d8c24eba85ec49fda693d', class: "cell-label" }, this.label, ":"), h("div", { key: '898fdc901592c4d51e549b1c84241062da8529a0', class: "booked-by-source__container" }, this.clickableGuest ? (h("button", { class: "booked-by-cell__button", onClick: this.handleGuestClick.bind(this) }, guest)) : (h("p", null, guest)), this.showRepeatGuestBadge && (h(Fragment, { key: 'b078291fab7b5efb7f50ff238801c3f15f4c70f3' }, h("wa-tooltip", { key: '60aaaf3571ae6b0ab051c37fc0c7ea4579ecdbbe', for: repeatGuestBadgeId }, `${locales.entries.Lcz_BookingsNbr}`.replace('%1', this.guest.nbr_confirmed_bookings.toString())), h("wa-icon", { key: 'a127f1710369a5878b4a82c65048f218b8006494', name: "heart", style: { color: '#FB0AAD' }, id: repeatGuestBadgeId }))), this.showPersons && (h("p", { key: 'c6c2f0b85ccc3bacf8360ac212ccd4b1ae85ac70' }, this.totalPersons, locales.entries.Lcz_P)), this.showPrivateNoteDot && h("span", { key: 'f122a73846328a992c9b58555e534c70f86697a5', class: "booked-by-source__private-note" })), h("div", { key: '92d87fbfbdff9f3e27d452c01ccbdd4b65aa08db', class: "booked-by-source__container" }, this.showLoyaltyIcon && (h(Fragment, { key: '2008a997d29354e10575f51cb709e5de099ad65c' }, h("wa-tooltip", { key: 'b276e2a1700ec18e4a3bf85547771afbd82a4cfc', for: loyaltyBadgeId }, locales.entries.Lcz_LoyaltyDiscountApplied), h("wa-icon", { key: '6b4ccc3f863a13de443a89a0884323323a4e3d93', name: "heart", variant: "regular", style: { color: '#fc6c85' }, id: loyaltyBadgeId }))), this.showPromoIcon && (h(Fragment, { key: '60355af43fd1cef3e344dbe9bc8eb6a366ad34e5' }, h("wa-tooltip", { key: 'c3254df36dbcd2af4f42a4f2625b81371d8950d5', for: couponBadgeId }, locales.entries.Lcz_Coupon, ": ", this.promoKey), h("wa-icon", { key: '1762f5834ef66e70be7dc3003a1d646a284e53df', id: couponBadgeId, name: "ticket" }))))));
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
