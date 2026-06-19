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
        return (h(Host, { key: 'f2ef0e6499437bbbe3bb34b29dd238d83d3cee92' }, this.label && h("p", { key: '0c430456e4f6be0e08f218d130fdb12afba483ec', class: "cell-label" }, this.label, ":"), h("div", { key: '5394ed2272512b680980fe046db2f7bb6236fcea', class: "booked-by-source__container" }, this.clickableGuest ? (h("button", { class: "booked-by-cell__button", onClick: this.handleGuestClick.bind(this) }, guest)) : (h("p", null, guest)), this.showRepeatGuestBadge && (h(Fragment, { key: 'c3fd13dfe08aa90a3538655adcb5c7cea85e9fe8' }, h("wa-tooltip", { key: '46e82b7d8ee0a22866645427eaa2d74e8155d21d', for: repeatGuestBadgeId }, `${locales.entries.Lcz_BookingsNbr}`.replace('%1', this.guest.nbr_confirmed_bookings.toString())), h("wa-icon", { key: '93462a776e7ee60d4fc09aaa71703289a6f24d11', name: "heart", style: { color: '#FB0AAD' }, id: repeatGuestBadgeId }))), this.showPersons && (h("p", { key: '16e0f2b3a924a1f3df3c3c35bf53299b5a2b2ede' }, this.totalPersons, locales.entries.Lcz_P)), this.showPrivateNoteDot && h("span", { key: 'fb15545910735dd3a953595eda3234a1680005bb', class: "booked-by-source__private-note" })), this.showContactIcons && this.guest.country_phone_prefix && this.guest.mobile_without_prefix && (h("div", { key: '986e7edb05a16c78e892ea5e89cbd8d91e25733b', class: "booked-by-source__container booked-by-source__contact" }, h("a", { key: '58ace1fc69c10f792a37239b118afa97cf3ef43b', class: "booked-by-cell__button --mobile-only", href: `tel:${this.guest.country_phone_prefix}${this.guest.mobile_without_prefix.replace(/\s+/g, '')}` }, h("wa-icon", { key: '89c0a2558b4a63bd738b94ddf6d5175cf0776049', name: "phone" })), h("a", { key: '791ddce448d0b1ebf7ce705b58c054e5219685c8', class: "booked-by-cell__button", href: `https://wa.me/${this.guest.country_phone_prefix.replace('+', '')}${this.guest.mobile_without_prefix.replace(/\s+/g, '')}`, target: "_blank", rel: "noopener noreferrer" }, h("wa-icon", { key: 'cd741a3de72f783a0b103b1454eed94c57209c4c', name: "whatsapp", family: "brands" })))), h("div", { key: '2cb097a411ea782fcb5415c0b3c446224397f949', class: "booked-by-source__container" }, this.showLoyaltyIcon && (h(Fragment, { key: '5c9dee91dc69b9f5c1560874240d54daf78b8f14' }, h("wa-tooltip", { key: '8351d01e1dba774e5dddab2a26bec258fc4104de', for: loyaltyBadgeId }, locales.entries.Lcz_LoyaltyDiscountApplied), h("wa-icon", { key: 'a2ea0b9b866ab0fbe538c248a2372b6669c3eef7', name: "heart", variant: "regular", style: { color: '#fc6c85' }, id: loyaltyBadgeId }))), this.showPromoIcon && (h(Fragment, { key: 'b869bc336971ada665d153b61b7221fe8bc3817d' }, h("wa-tooltip", { key: '2848814457b8a165ce694db0ebf55595b943a8d6', for: couponBadgeId }, locales.entries.Lcz_Coupon, ": ", this.promoKey), h("wa-icon", { key: '124b5342b214d2ba63cad6af4bc5a2f8251c957f', id: couponBadgeId, name: "ticket" }))))));
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
                "reflect": false,
                "attribute": "label"
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
                "reflect": false,
                "attribute": "cell-id"
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
                "reflect": true,
                "attribute": "display",
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
                            "id": "src/models/booking.dto.ts::Booking",
                            "referenceLocation": "Booking"
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
                "reflect": false,
                "attribute": "identifier"
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
                "reflect": false,
                "attribute": "total-persons"
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
                "reflect": false,
                "attribute": "promo-key"
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
                "reflect": false,
                "attribute": "show-repeat-guest-badge",
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
                "reflect": false,
                "attribute": "show-persons",
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
                "reflect": false,
                "attribute": "show-private-note-dot",
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
                "reflect": false,
                "attribute": "show-loyalty-icon",
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
                "reflect": false,
                "attribute": "show-promo-icon",
                "defaultValue": "false"
            },
            "showContactIcons": {
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
                    "text": "Show phone and WhatsApp contact icons.\nWhen shown, phone links via `tel:` and WhatsApp via `https://wa.me/`."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-contact-icons",
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
                "reflect": false,
                "attribute": "clickable-guest",
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
