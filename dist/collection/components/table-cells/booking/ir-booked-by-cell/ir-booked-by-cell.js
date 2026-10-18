import { Fragment, Host, h } from "@stencil/core";
import { t } from "../../../../services/locale/t";
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
        return (h(Host, { key: '06cb018cb90faa45ab43f6b00e38ed5b40866251' }, this.label && h("p", { key: '225a935fabc1f8991553da76a408ed3d2d750ef0', class: "cell-label" }, this.label, ":"), h("div", { key: '57b04bcb4e4f978ca17a01835f2a740a597f6f6f', class: "booked-by-source__container" }, this.clickableGuest ? (h("button", { class: "booked-by-cell__button", onClick: this.handleGuestClick.bind(this) }, guest)) : (h("p", null, guest)), this.showRepeatGuestBadge && (h(Fragment, { key: 'efeca264677a3d6c80c4151cd257b64c2dc4ddb2' }, h("wa-tooltip", { key: '209cfb4da52781ccadeccac13a6a01298cb8603c', for: repeatGuestBadgeId }, `${t('Lcz_BookingsNbr', { fallback: '%1 bookings' })}`.replace('%1', this.guest.nbr_confirmed_bookings.toString())), h("wa-icon", { key: 'f2289744dde93d3ac82273ac5da57bc6cdcdb524', name: "heart", style: { color: '#FB0AAD' }, id: repeatGuestBadgeId }))), this.showPersons && (h("p", { key: 'fb1525c76c89d377c992ff86be2a081704863b95' }, this.totalPersons, t('Lcz_P', { fallback: 'P' }))), this.showPrivateNoteDot && h("span", { key: 'da284676c693ba31110d54c00d2ce043e0cff9e8', class: "booked-by-source__private-note" })), this.showContactIcons && this.guest.country_phone_prefix && this.guest.mobile_without_prefix && (h("div", { key: '2db7c8c3ea3123fb46151523d44d13ada5277cf6', part: "contact", class: "booked-by-source__container booked-by-source__contact" }, h("a", { key: '1bf20efebea4207636e1655a8e7dbdbac1829d3a', class: "booked-by-cell__button --mobile-only", href: `tel:${this.guest.country_phone_prefix}${this.guest.mobile_without_prefix.replace(/\s+/g, '')}` }, h("wa-icon", { key: '78897c52d314203beb4598e85c3ef56e21694a15', name: "phone" })), h("a", { key: 'd1155b63ddb495e4deab422e8666a2d53961e476', class: "booked-by-cell__button", href: `https://wa.me/${this.guest.country_phone_prefix.replace('+', '')}${this.guest.mobile_without_prefix.replace(/\s+/g, '')}`, target: "_blank", rel: "noopener noreferrer" }, h("wa-icon", { key: 'cbbf4854aedf29bfaa8874dd481a87caf76a357c', name: "whatsapp", family: "brands" })))), h("div", { key: '03d9418c5ab16e08c9e8e60e90e7a9b6375accca', part: "loyalty", class: "booked-by-source__container" }, this.showLoyaltyIcon && (h(Fragment, { key: '39de87c066b12f56c0f7d81e4c7a4b9ced9b7470' }, h("wa-tooltip", { key: '4f138c8521e2e5fef4e69e8d60b004d9a903b00a', for: loyaltyBadgeId }, t('Lcz_LoyaltyDiscountApplied', { fallback: 'Coupon: %1' })), h("wa-icon", { key: 'b7d034a2a041ef153a0a4cecedfcfed3dd639d46', name: "heart", variant: "regular", style: { color: '#fc6c85' }, id: loyaltyBadgeId }))), this.showPromoIcon && (h(Fragment, { key: '288b27cd7135f08980372a8513781e335470ef97' }, h("wa-tooltip", { key: '9a554cdb717d651e100317de64277c2006bc43b8', for: couponBadgeId }, t('Lcz_Coupon', { fallback: 'Coupon' }), ": ", this.promoKey), h("wa-icon", { key: 'f5f96ee872186c4bc181cea78eafe29928764826', id: couponBadgeId, name: "ticket" }))))));
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
                    "original": "BookedByCellGuest",
                    "resolved": "BookedByCellGuest",
                    "references": {
                        "BookedByCellGuest": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/table-cells/booking/ir-booked-by-cell/ir-booked-by-cell.tsx",
                            "id": "src/components/table-cells/booking/ir-booked-by-cell/ir-booked-by-cell.tsx::BookedByCellGuest"
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
