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
        return (h(Host, { key: '3467fde48af39ff170cd823ad5e963b22c409a65' }, this.label && h("p", { key: '4279aea8e771ea648c41455af56186f009450d64', class: "cell-label" }, this.label, ":"), h("div", { key: '4544fef7d9b608812bae0a50fdcf77856c6ebbd2', class: "booked-by-source__container" }, this.clickableGuest ? (h("ir-custom-button", { size: "medium", onClickHandler: this.handleGuestClick.bind(this), variant: "brand", appearance: "plain", link: true }, guest)) : (h("p", null, guest)), this.showRepeatGuestBadge && (h(Fragment, { key: 'bdd46eb62efabdd2c455710cca1250e1f8a26118' }, h("wa-tooltip", { key: 'c34cfa830ddc0e6a953e972c448b32abb05ce33a', for: repeatGuestBadgeId }, `${locales.entries.Lcz_BookingsNbr}`.replace('%1', this.guest.nbr_confirmed_bookings.toString())), h("wa-icon", { key: 'a1c818384fcf4b5f35b05942cd94c09f99f8eef4', name: "heart", style: { color: '#FB0AAD' }, id: repeatGuestBadgeId }))), this.showPersons && (h("p", { key: '0d7dc0a50e859b3c07ea72bea9719702236e7ed7' }, this.totalPersons, locales.entries.Lcz_P)), this.showPrivateNoteDot && h("span", { key: 'b2a3d86e4ec2891c19225f06a3442184adbbda23', class: "booked-by-source__private-note" })), h("div", { key: '3f98b907cd3f8d9c38fe4d3cba2d6d3b1d6b3110', class: "booked-by-source__container" }, this.showLoyaltyIcon && (h(Fragment, { key: '7174233c27c2cdebaac74fcb0e070dfa481a7b20' }, h("wa-tooltip", { key: '00fffc7da3f1510495f1a6778d4d44e500b0373f', for: loyaltyBadgeId }, locales.entries.Lcz_LoyaltyDiscountApplied), h("wa-icon", { key: '771417aa8c736b7170df6b72695aac740d815ba2', name: "heart", variant: "regular", style: { color: '#fc6c85' }, id: loyaltyBadgeId }))), this.showPromoIcon && (h(Fragment, { key: 'd906936eedf40eb992b392be6a1dae75f24db168' }, h("wa-tooltip", { key: '37b1fd36479777dd1b92c4d7c77f39d11c1b1dc8', for: couponBadgeId }, locales.entries.Lcz_Coupon, ": ", this.promoKey), h("wa-icon", { key: '34eeba1f1f29ecc241230689bb96cfdf1564833f', id: couponBadgeId, name: "ticket" }))))));
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
