import { h } from "@stencil/core";
export class IrBillingDrawer {
    /**
     * Controls whether the billing drawer is open or closed.
     *
     * When `true`, the drawer becomes visible.
     * When `false`, it is hidden.
     *
     * This prop is reflected to the host element.
     *
     * @type {boolean}
     */
    open;
    /**
     * The booking object containing reservation and guest details
     * that will be used to populate the billing view.
     *
     * @type {Booking}
     */
    booking;
    /**
     * Emitted when the billing drawer has been closed.
     *
     * Listen to this event to respond to drawer close actions.
     *
     * @event billingClose
     */
    billingClose;
    render() {
        return (h("ir-drawer", { key: '2840da68bae7cff638f857ad14a21df55b9d7b5b', style: {
                '--ir-drawer-width': '50rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            }, class: "billing__drawer", onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.billingClose.emit();
            }, open: this.open, label: "Billing" }, this.open && h("ir-billing", { key: '8010cde28f427c3dea1c44825d9994b1b18de3a5', booking: this.booking })));
    }
    static get is() { return "ir-billing-drawer"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-billing-drawer.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-billing-drawer.css"]
        };
    }
    static get properties() {
        return {
            "open": {
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
                    "tags": [{
                            "name": "type",
                            "text": "{boolean}"
                        }],
                    "text": "Controls whether the billing drawer is open or closed.\n\nWhen `true`, the drawer becomes visible.\nWhen `false`, it is hidden.\n\nThis prop is reflected to the host element."
                },
                "getter": false,
                "setter": false,
                "attribute": "open",
                "reflect": true
            },
            "booking": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Booking",
                    "resolved": "Booking",
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
                    "tags": [{
                            "name": "type",
                            "text": "{Booking}"
                        }],
                    "text": "The booking object containing reservation and guest details\nthat will be used to populate the billing view."
                },
                "getter": false,
                "setter": false
            }
        };
    }
    static get events() {
        return [{
                "method": "billingClose",
                "name": "billingClose",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [{
                            "name": "event",
                            "text": "billingClose"
                        }],
                    "text": "Emitted when the billing drawer has been closed.\n\nListen to this event to respond to drawer close actions."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=ir-billing-drawer.js.map
