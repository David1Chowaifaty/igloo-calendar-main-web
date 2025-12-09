import { Host, h } from "@stencil/core";
import { v4 } from "uuid";
import { isRequestPending } from "../../stores/ir-interceptor.store";
export class IrInvoice {
    /**
     * Whether the invoice drawer is open.
     *
     * This prop is mutable and reflected to the host element,
     * allowing parent components to control visibility via markup
     * or via the public `openDrawer()` / `closeDrawer()` methods.
     */
    open;
    /**
     * The booking object for which the invoice is being generated.
     * Should contain room, guest, and pricing information.
     */
    booking;
    /**
     * Determines what should happen after creating the invoice.
     * - `"create"`: create an invoice normally
     * - `"check_in-create"`: create an invoice as part of the check-in flow
     */
    mode = 'create';
    /**
     * Specifies what the invoice is for.
     * - `"room"`: invoice for a specific room
     * - `"booking"`: invoice for the entire booking
     */
    for = 'booking';
    /**
     * The identifier of the room for which the invoice is being generated.
     * Used when invoicing at room level instead of booking level.
     */
    roomIdentifier;
    /**
     * When `true`, automatically triggers `window.print()` after an invoice is created.
     * Useful for setups where the invoice should immediately be sent to a printer.
     */
    autoPrint = false;
    /**
     * Additional invoice-related metadata used when creating
     * or rendering the invoice.
     *
     * This object can include payment details, discounts,
     * tax information, or any context needed by the invoice form.
     *
     * @type {BookingInvoiceInfo}
     */
    invoiceInfo;
    /**
     * Emitted when the invoice drawer is opened.
     *
     * Fired when `openDrawer()` is called and the component
     * transitions into the open state.
     */
    invoiceOpen;
    /**
     * Emitted when the invoice drawer is closed.
     *
     * Fired when `closeDrawer()` is called, including when the
     * underlying drawer emits `onDrawerHide`.
     */
    invoiceClose;
    /**
     * Opens the invoice drawer.
     *
     * This method sets the `open` property to `true`, making the drawer visible.
     * It can be called programmatically by parent components.
     *
     * Also emits the `invoiceOpen` event.
     *
     * @returns {Promise<void>} Resolves once the drawer state is updated.
     */
    async openDrawer() {
        this.open = true;
        this.invoiceOpen.emit();
    }
    /**
     * Closes the invoice drawer.
     *
     * This method sets the `open` property to `false`, hiding the drawer.
     * Parent components can call this to close the drawer programmatically,
     * and it is also used internally when the drawer emits `onDrawerHide`.
     *
     * Also emits the `invoiceClose` event.
     *
     * @returns {Promise<void>} Resolves once the drawer state is updated.
     */
    async closeDrawer() {
        this.open = false;
        this.invoiceClose.emit();
    }
    _id = `invoice-form__${v4()}`;
    render() {
        return (h(Host, { key: '778dee5a744933a44c8e927428c85e50b4ed0d4b' }, h("ir-drawer", { key: '8bc320bcee0197d5c0d4f5c8b70552ed6c3986ae', style: {
                '--ir-drawer-width': '40rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            }, label: "Invoice", open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeDrawer();
            } }, this.open && (h("ir-invoice-form", { key: 'bc3d12d09eac9a58e64642f3242be915d0df48c8', for: this.for, roomIdentifier: this.roomIdentifier, booking: this.booking, autoPrint: this.autoPrint, mode: this.mode, formId: this._id, invoiceInfo: this.invoiceInfo })), h("div", { key: 'c0f5238e5120e79743810d080464bf34b3c4727e', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: 'b1ceb88c6bef53096ee37d3a7ef0d1b71134fb84', size: "medium", appearance: "filled", class: "w-100 flex-fill", variant: "neutral", onClickHandler: () => {
                this.closeDrawer();
            } }, "Cancel"), h("ir-custom-button", { key: '7b6ed72795d060d7581989d1cca5a2c3ae40fc12', value: "pro-forma", type: "submit", size: "medium", class: "w-100 flex-fill", appearance: "outlined", variant: "brand", form: this._id }, "Pro-forma invoice"), h("ir-custom-button", { key: '3522b45faf40e09a2a2c7ba0d24d1b0c31b10fa1', loading: isRequestPending('/Issue_Invoice'), value: "invoice", type: "submit", form: this._id, class: "w-100 flex-fill", size: "medium", variant: "brand" }, "Confirm invoice")))));
    }
    static get is() { return "ir-invoice"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-invoice.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-invoice.css"]
        };
    }
    static get properties() {
        return {
            "open": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether the invoice drawer is open.\n\nThis prop is mutable and reflected to the host element,\nallowing parent components to control visibility via markup\nor via the public `openDrawer()` / `closeDrawer()` methods."
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
                    "tags": [],
                    "text": "The booking object for which the invoice is being generated.\nShould contain room, guest, and pricing information."
                },
                "getter": false,
                "setter": false
            },
            "mode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'create' | 'check_in-create'",
                    "resolved": "\"check_in-create\" | \"create\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Determines what should happen after creating the invoice.\n- `\"create\"`: create an invoice normally\n- `\"check_in-create\"`: create an invoice as part of the check-in flow"
                },
                "getter": false,
                "setter": false,
                "attribute": "mode",
                "reflect": false,
                "defaultValue": "'create'"
            },
            "for": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'room' | 'booking'",
                    "resolved": "\"booking\" | \"room\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Specifies what the invoice is for.\n- `\"room\"`: invoice for a specific room\n- `\"booking\"`: invoice for the entire booking"
                },
                "getter": false,
                "setter": false,
                "attribute": "for",
                "reflect": false,
                "defaultValue": "'booking'"
            },
            "roomIdentifier": {
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
                    "text": "The identifier of the room for which the invoice is being generated.\nUsed when invoicing at room level instead of booking level."
                },
                "getter": false,
                "setter": false,
                "attribute": "room-identifier",
                "reflect": false
            },
            "autoPrint": {
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
                    "text": "When `true`, automatically triggers `window.print()` after an invoice is created.\nUseful for setups where the invoice should immediately be sent to a printer."
                },
                "getter": false,
                "setter": false,
                "attribute": "auto-print",
                "reflect": false,
                "defaultValue": "false"
            },
            "invoiceInfo": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "BookingInvoiceInfo",
                    "resolved": "{ invoicable_items?: { key?: number; amount?: number; currency?: { symbol?: string; id?: number; code?: string; }; system_id?: any; type?: InvoicableItemType; status?: any; booking_nbr?: string; invoice_nbr?: string; is_invoiceable?: boolean; }[]; invoices?: { date?: string; currency?: { symbol?: string; id?: number; code?: string; }; system_id?: number; status?: { code?: string; description?: any; }; booking_nbr?: string; target?: any; nbr?: string; billed_to_name?: any; billed_to_tax?: any; items?: { key?: number; amount?: number; currency?: { symbol?: string; id?: number; code?: string; }; system_id?: number; type?: string; status?: { code?: string; description?: any; }; description?: any; booking_nbr?: string; invoice_nbr?: string; is_invoiceable?: boolean; }[]; credit_note?: { date?: string; system_id?: string; reason?: string; nbr?: string; }; pdf_url?: any; remnark?: string; total_amount?: any; }[]; }",
                    "references": {
                        "BookingInvoiceInfo": {
                            "location": "import",
                            "path": "./types",
                            "id": "src/components/ir-invoice/types.ts::BookingInvoiceInfo"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [{
                            "name": "type",
                            "text": "{BookingInvoiceInfo}"
                        }],
                    "text": "Additional invoice-related metadata used when creating\nor rendering the invoice.\n\nThis object can include payment details, discounts,\ntax information, or any context needed by the invoice form."
                },
                "getter": false,
                "setter": false
            }
        };
    }
    static get events() {
        return [{
                "method": "invoiceOpen",
                "name": "invoiceOpen",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the invoice drawer is opened.\n\nFired when `openDrawer()` is called and the component\ntransitions into the open state."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "invoiceClose",
                "name": "invoiceClose",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the invoice drawer is closed.\n\nFired when `closeDrawer()` is called, including when the\nunderlying drawer emits `onDrawerHide`."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "openDrawer": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Opens the invoice drawer.\n\nThis method sets the `open` property to `true`, making the drawer visible.\nIt can be called programmatically by parent components.\n\nAlso emits the `invoiceOpen` event.",
                    "tags": [{
                            "name": "returns",
                            "text": "Resolves once the drawer state is updated."
                        }]
                }
            },
            "closeDrawer": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Closes the invoice drawer.\n\nThis method sets the `open` property to `false`, hiding the drawer.\nParent components can call this to close the drawer programmatically,\nand it is also used internally when the drawer emits `onDrawerHide`.\n\nAlso emits the `invoiceClose` event.",
                    "tags": [{
                            "name": "returns",
                            "text": "Resolves once the drawer state is updated."
                        }]
                }
            }
        };
    }
}
//# sourceMappingURL=ir-invoice.js.map
