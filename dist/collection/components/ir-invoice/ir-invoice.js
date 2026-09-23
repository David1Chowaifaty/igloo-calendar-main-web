import { Host, h } from "@stencil/core";
import { v4 } from "uuid";
import calendar_data from "../../stores/calendar-data";
import moment from "moment";
import ApiClient from "../../models/ApiClient";
import { t } from "../../services/locale/t";
import { LocaleController } from "../../services/locale/locale.controller";
import { SCREEN_TABLES } from "../../services/locale/screen-tables";
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
    apiClientService = new ApiClient();
    componentWillLoad() {
        if (this.open) {
            this.loadLocaleTables();
        }
        if (this.booking) {
            if (moment().isBefore(moment(this.booking.from_date, 'YYYY-MM-DD'), 'dates') && this.viewMode === 'invoice') {
                this.viewMode = 'proforma';
            }
        }
    }
    handleOpenChange(open) {
        if (open) {
            this.loadLocaleTables();
        }
    }
    /**
     * Self-loading leaf: the fiscal-document previews and confirm dialogs under this
     * drawer speak `_FINANCIALS`, which hosts like the calendar and departures never load.
     * Deferred until the drawer opens — hosts mount it closed at first render, before
     * they have a ticket, so an eager load in `componentWillLoad` would go out unauthenticated.
     */
    loadLocaleTables() {
        void LocaleController.load({ tables: SCREEN_TABLES.invoice });
    }
    handleBookingChange() {
        if (!this.booking) {
            return;
        }
        if (moment().isBefore(moment(this.booking.from_date, 'YYYY-MM-DD'), 'dates') && this.viewMode === 'invoice') {
            this.viewMode = 'proforma';
        }
    }
    render() {
        return (h(Host, { key: '476803806bb83b34cfc1bc6900c55afa1f881ce5' }, h("ir-drawer", { key: '7d3e60c40bab35ef83f6c60a3a389b5cfd4e5de4', style: {
                '--ir-drawer-width': '40rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            }, label: t('Lcz_IssueInvoice', { fallback: 'Issue Invoice' }), open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeDrawer();
            } }, h("div", { key: '8e93e35bebf1f991fac235747c4792b732b88c56', class: "d-flex align-items-center", slot: "header-actions" }, h("wa-switch", { key: '0fd7bb22c099317218993b202be8ef35e874a293', defaultChecked: this.viewMode === 'proforma', checked: this.viewMode === 'proforma', onchange: e => {
                if (e.target.checked) {
                    this.viewMode = 'proforma';
                }
                else {
                    this.viewMode = 'invoice';
                }
            } }, t('Lcz_Proforma', { fallback: 'Proforma' }))), this.open && (h("ir-invoice-form", { key: '169674762d5e1263b2295457d44d4756c883c34d', viewMode: this.viewMode, for: this.for, roomIdentifier: this.roomIdentifier, booking: this.booking, autoPrint: this.autoPrint, formId: this._id, onPreviewProformaInvoice: e => (this.invoice = e.detail.invoice), invoiceInfo: this.invoiceInfo, onLoadingChange: e => (this.isLoading = e.detail) })), h("div", { key: '2932abd1aabfc736786bcfa7cc169414d28e28e4', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: '1097500b722620a526f4627789f94b923bda9097', size: "m", appearance: "filled", class: "w-100 flex-fill", variant: "neutral", onClickHandler: () => {
                this.closeDrawer();
            } }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '716685a1079f04ea5c5974fe8b9d4ac209073cec', disabled: this.invoiceInfo?.invoiceable_items?.filter(i => i.is_invoiceable)?.length === 0, loading: this.isLoading, value: "invoice", type: "submit", form: this._id, class: "w-100 flex-fill", size: "m", variant: "brand", id: `confirm-btn_${this._id}` }, t('Lcz_Confirm', { fallback: 'Confirm' })))), h("ir-fiscal-document-preview", { key: '01479d3c9f7f92e242258629d2add7272f299fb2', mode: "all", ticket: this.apiClientService.getToken(), propertyId: calendar_data?.property?.id })));
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
                "reflect": true,
                "attribute": "open"
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
                            "id": "src/models/booking.dto.ts::Booking",
                            "referenceLocation": "Booking"
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
                "reflect": false,
                "attribute": "for",
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
                "reflect": false,
                "attribute": "room-identifier"
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
                "reflect": false,
                "attribute": "auto-print",
                "defaultValue": "false"
            },
            "invoiceInfo": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "BookingInvoiceInfo",
                    "resolved": "{ invoiceable_items?: { type?: InvoiceableItemType; status?: any; key?: number; system_id?: any; amount?: number; currency?: { symbol?: string; code?: string; id?: number; }; booking_nbr?: string; invoice_nbr?: string; is_invoiceable?: boolean; reason?: { code?: InvoiceableItemReasonCode; description?: string; }; }[]; invoices?: { status?: { code?: string; description?: any; }; user?: string; date?: string; system_id?: number; currency?: { symbol?: string; code?: string; id?: number; }; booking_nbr?: string; nbr?: string; billed_to_name?: any; billed_to_tax?: any; credit_note?: { user?: string; date?: string; system_id?: string; nbr?: string; reason?: string; }; items?: { description?: any; type?: string; status?: { code?: string; description?: any; }; key?: number; system_id?: number; amount?: number; currency?: { symbol?: string; code?: string; id?: number; }; booking_nbr?: string; invoice_nbr?: string; is_invoiceable?: boolean; }[]; pdf_url?: any; remark?: string; target?: any; total_amount?: any; }[]; }",
                    "references": {
                        "BookingInvoiceInfo": {
                            "location": "import",
                            "path": "./types",
                            "id": "src/components/ir-invoice/types.ts::BookingInvoiceInfo",
                            "referenceLocation": "BookingInvoiceInfo"
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
                "propName": "open",
                "methodName": "handleOpenChange"
            }, {
                "propName": "booking",
                "methodName": "handleBookingChange"
            }];
    }
}
