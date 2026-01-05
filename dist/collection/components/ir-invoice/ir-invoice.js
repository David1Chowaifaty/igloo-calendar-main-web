import { Host, h } from "@stencil/core";
import { v4 } from "uuid";
import calendar_data from "../../stores/calendar-data";
import moment from "moment";
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
    invoice = null;
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
    viewMode = 'invoice';
    isLoading;
    _id = `invoice-form__${v4()}`;
    componentWillLoad() {
        if (this.booking) {
            if (moment().isBefore(moment(this.booking.from_date, 'YYYY-MM-DD'), 'dates') && this.viewMode === 'invoice') {
                this.viewMode = 'proforma';
            }
        }
    }
    handleBookingChange() {
        if (moment().isBefore(moment(this.booking.from_date, 'YYYY-MM-DD'), 'dates') && this.viewMode === 'invoice') {
            this.viewMode = 'proforma';
        }
    }
    render() {
        return (h(Host, { key: 'b153463189475899d8032017e073cc84c478f492' }, h("ir-drawer", { key: '78e3f2807a83a957843aab957671b27bfccd5d27', style: {
                '--ir-drawer-width': '40rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            }, label: "Issue Invoice", open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeDrawer();
            } }, h("div", { key: 'e4ee5d776ce18b7988b7ff4219a282c67a56687b', class: "d-flex align-items-center", slot: "header-actions" }, h("wa-switch", { key: 'dc19346589fc236f9d7696f163d7336e6136e01a', defaultChecked: this.viewMode === 'proforma', checked: this.viewMode === 'proforma', onchange: e => {
                if (e.target.checked) {
                    this.viewMode = 'proforma';
                }
                else {
                    this.viewMode = 'invoice';
                }
            } }, "Pro-forma")), this.open && (h("ir-invoice-form", { key: 'd02179c8f1e149685553ec462b8a7d71c2b4872e', viewMode: this.viewMode, for: this.for, roomIdentifier: this.roomIdentifier, booking: this.booking, autoPrint: this.autoPrint, formId: this._id, onPreviewProformaInvoice: e => (this.invoice = e.detail.invoice), invoiceInfo: this.invoiceInfo, onLoadingChange: e => (this.isLoading = e.detail) })), h("div", { key: '4dca25aaca94dc4235ed6d2cadbbef61df4b149a', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: 'a3a3e29768ba784f2f19959ce6764c7f47d83dec', size: "medium", appearance: "filled", class: "w-100 flex-fill", variant: "neutral", onClickHandler: () => {
                this.closeDrawer();
            } }, "Cancel"), h("ir-custom-button", { key: '8cc3b72e40e706fb305ebb5b5860a08f043bc899', disabled: this.invoiceInfo?.invoiceable_items?.filter(i => i.is_invoiceable)?.length === 0, loading: this.isLoading, value: "invoice", type: "submit", form: this._id, class: "w-100 flex-fill", size: "medium", variant: "brand", id: `confirm-btn_${this._id}` }, "Confirm")), h("ir-preview-screen-dialog", { key: '960c98a29a4954cfc1922477aa0973c0b1bbb80c', onOpenChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (!e.detail) {
                    this.invoice = null;
                }
            }, open: this.invoice !== null }, h("ir-proforma-invoice-preview", { key: '33d6f78892c3feaa51af0fa0885a04f95c2535a0', invoice: this.invoice, property: calendar_data.property, booking: this.booking })))));
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
                    "resolved": "{ invoiceable_items?: { key?: number; system_id?: any; amount?: number; currency?: { symbol?: string; id?: number; code?: string; }; type?: InvoiceableItemType; status?: any; booking_nbr?: string; invoice_nbr?: string; reason?: { code?: InvoiceableItemReasonCode; description?: string; }; is_invoiceable?: boolean; }[]; invoices?: { user?: string; system_id?: number; date?: string; currency?: { symbol?: string; id?: number; code?: string; }; status?: { code?: string; description?: any; }; booking_nbr?: string; target?: any; nbr?: string; remark?: string; billed_to_name?: any; billed_to_tax?: any; items?: { key?: number; system_id?: number; amount?: number; currency?: { symbol?: string; id?: number; code?: string; }; type?: string; status?: { code?: string; description?: any; }; description?: any; booking_nbr?: string; invoice_nbr?: string; is_invoiceable?: boolean; }[]; credit_note?: { user?: string; system_id?: string; date?: string; reason?: string; nbr?: string; }; pdf_url?: any; total_amount?: any; }[]; }",
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
    static get states() {
        return {
            "invoice": {},
            "viewMode": {},
            "isLoading": {}
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
    static get watchers() {
        return [{
                "propName": "booking",
                "methodName": "handleBookingChange"
            }];
    }
}
//# sourceMappingURL=ir-invoice.js.map
