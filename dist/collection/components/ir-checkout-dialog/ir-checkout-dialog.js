import { BookingService } from "../../services/booking-service/booking.service";
import locales from "../../stores/locales.store";
import { Fragment, h } from "@stencil/core";
import { InvoiceableItemReason } from "../../types/enums";
import moment from "moment";
import { AgentsService } from "../../services/agents/agents.service";
import { isAgentMode } from "../ir-booking-details/functions";
import { CityLedgerService } from "../../services/city-ledger/index";
import calendar_data from "../../stores/calendar-data";
export class IrCheckoutDialog {
    open;
    booking;
    identifier;
    isLoading = 'page';
    buttons = new Set();
    invoiceInfo;
    room;
    isEarlyCheckout = false;
    remainingDays = [];
    penaltyAmount = 0;
    agent;
    paymentEntries;
    checkoutDialogClosed;
    bookingService = new BookingService();
    agentService = new AgentsService();
    cityLedgerService = new CityLedgerService();
    initialPenaltyStr = '0.00';
    transactions = [];
    paymentFolioRef;
    get remainingTotal() {
        return this.remainingDays.reduce((sum, d) => sum + d.charges.total_amount, 0);
    }
    get currencySymbol() {
        return this.booking?.currency?.symbol ?? '$';
    }
    formatAmount(amount) {
        return `${this.currencySymbol}${amount.toFixed(2)}`;
    }
    async checkoutRoom({ e, source }) {
        try {
            e.stopImmediatePropagation();
            e.stopPropagation();
            this.isLoading = source;
            // await this.bookingService.handleExposedRoomInOut({
            //   booking_nbr: this.booking.booking_nbr,
            //   room_identifier: this.identifier,
            //   status: '002',
            // });
            await this.bookingService.handleRoomCheckout({
                booking_nbr: this.booking.booking_nbr,
                room_identifier: this.identifier,
                penalty_amount: this.penaltyAmount >= 0 ? this.penaltyAmount : null,
            });
            this.isLoading = null;
            this.checkoutDialogClosed.emit({ reason: source === 'checkout&invoice' ? 'openInvoice' : 'checkout' });
        }
        catch (error) {
            console.error(error);
        }
    }
    handleOpenChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.init();
        }
    }
    get missingClSummary() {
        if (!this.agent || !isAgentMode(this.agent) || !this.room || !this.booking)
            return null;
        const today = moment().format('YYYY-MM-DD');
        const agentId = this.agent.id;
        const agentRooms = this.booking.rooms.filter(r => r.agent !== null && r.agent.id === agentId);
        const agentExtraServices = (this.booking.extra_services ?? []).filter(e => e.agent !== null && e.agent.id === agentId);
        const room = agentRooms.reduce((total, r) => {
            //TODO check for accomodation REL_ENTITY
            const postedDates = new Set(this.transactions.filter(tx => tx.REL_ENTITY === 'TBL_BSAD' && tx.BSA_REF === r.identifier).map(tx => tx.SERVICE_DATE));
            const unposted = (r.days ?? []).filter(d => d.date < today && !postedDates.has(d.date));
            return total + unposted.length;
        }, 0);
        const postedExtraKeys = new Set(this.transactions.filter(tx => tx.REL_ENTITY === 'TBL_BSE').map(tx => tx.REL_ENTITY_KEY));
        const extras = agentExtraServices.filter(es => es.system_id != null && es.start_date <= today && !postedExtraKeys.has(es.system_id)).length;
        return { room, extras, total: room + extras };
    }
    async init() {
        if (!this.open) {
            return;
        }
        try {
            this.isLoading = 'page';
            this.room = this.booking.rooms.find(r => r.identifier === this.identifier);
            this.detectEarlyCheckout();
            const hasAgent = !!this.room?.agent;
            const hasDueAmount = (this.booking?.financial?.due_amount ?? 0) > 0;
            const [invoiceInfo, agent, setupEntries] = await Promise.all([
                this.bookingService.getBookingInvoiceInfo({ booking_nbr: this.booking.booking_nbr }),
                hasAgent ? this.agentService.getExposedAgent({ id: this.booking.agent.id }) : Promise.resolve(null),
                hasDueAmount ? this.bookingService.getSetupEntriesByTableNameMulti(['_PAY_TYPE', '_PAY_TYPE_GROUP', '_PAY_METHOD']) : Promise.resolve(null),
            ]);
            this.invoiceInfo = invoiceInfo;
            this.setupButtons();
            if (setupEntries) {
                const { pay_type, pay_type_group, pay_method } = this.bookingService.groupEntryTablesResult(setupEntries);
                this.paymentEntries = { types: pay_type, groups: pay_type_group, methods: pay_method };
            }
            if (agent && isAgentMode(agent)) {
                this.agent = agent;
                const res = await this.cityLedgerService.fetchCL({
                    AGENCY_ID: this.booking.agent.id,
                    SEARCH_QUERY: this.booking.booking_nbr,
                });
                this.transactions = res.My_Cl_tx;
            }
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = null;
        }
    }
    detectEarlyCheckout() {
        const today = moment().startOf('day');
        const toDate = moment(this.room.to_date, 'YYYY-MM-DD');
        this.isEarlyCheckout = today.isBefore(toDate, 'date');
        if (this.isEarlyCheckout) {
            if (this.room.agent === null) {
                this.isEarlyCheckout = false;
                return;
            }
            const todayStr = today.format('YYYY-MM-DD');
            this.remainingDays = (this.room.days ?? []).filter(d => d.date >= todayStr);
            const total = this.remainingTotal;
            this.penaltyAmount = total;
            this.initialPenaltyStr = total.toFixed(2);
        }
    }
    setupButtons() {
        const toBeInvoiced = this.invoiceInfo.invoiceable_items.filter(item => ![InvoiceableItemReason.AlreadyInvoiced, InvoiceableItemReason.PickupCancellationPolicy, InvoiceableItemReason.NotCheckedOutYet].includes(item?.reason?.code));
        const toBeInvoicedRooms = toBeInvoiced.filter(item => item.type === 'BSA');
        if (toBeInvoiced.length === 0) {
            this.buttons.add('checkout');
            return;
        }
        const allRoomInvoiced = toBeInvoicedRooms.length === 0;
        this.buttons.add('invoice_checkout');
        if (!allRoomInvoiced && toBeInvoicedRooms.length > 1) {
            this.buttons.add('checkout_without_invoice');
        }
    }
    renderEarlyCheckoutContent() {
        const unitName = this.room?.unit?.name ?? this.room?.identifier;
        const remainingCount = this.remainingDays.length;
        const total = this.remainingTotal;
        return (h("div", { class: "early-checkout" }, h("wa-callout", { class: "ec-summary", size: "small", appearance: "filled", variant: "neutral" }, h("div", { class: "ec-summary__row" }, h("span", { class: "ec-summary__label" }, "Unit"), h("span", { class: "ec-summary__value" }, unitName)), h("div", { class: "ec-summary__row" }, h("span", { class: "ec-summary__label" }, "Original check-out"), h("span", { class: "ec-summary__value" }, moment(this.room.to_date, 'YYYY-MM-DD').format('ddd, MMM D, YYYY'))), h("div", { class: "ec-summary__row" }, h("span", { class: "ec-summary__label" }, "Actual check-out"), h("span", { class: "ec-summary__value" }, moment().format('ddd, MMM D, YYYY')))), h("div", { class: "ec-section" }, h("p", { class: "ec-section__title" }, "Reclaimed Nights ", h("wa-badge", { pill: true }, remainingCount)), h("div", { class: "ec-nights" }, this.remainingDays.map(day => (h("div", { key: day.date, class: "ec-nights__row" }, h("span", { class: "ec-nights__date" }, moment(day.date, 'YYYY-MM-DD').format('ddd, MMM D')), h("span", { class: "ec-nights__amount" }, this.formatAmount(day.charges.total_amount))))), h("div", { class: "ec-nights__subtotal" }, h("span", null, "Subtotal (Including taxes and fees)"), h("span", null, this.formatAmount(total))))), h("div", { class: "ec-section" }, h("ir-input", { label: "Apply cancellation penalty?", mask: "price", value: this.initialPenaltyStr, defaultValue: this.initialPenaltyStr, min: 0, max: total, hint: "Pre-filled from reclaimed nights. Modify or waive entirely.", "onText-change": (e) => {
                const val = parseFloat(e.detail);
                this.penaltyAmount = isNaN(val) ? 0 : val;
            } }, h("span", { slot: "start" }, this.currencySymbol)))));
    }
    get duePayment() {
        const p = this.paymentEntries.types.find(t => t.CODE_NAME === '001');
        return {
            amount: Math.abs(this.booking?.guest_financial?.due_amount),
            currency: calendar_data.property.currency,
            date: moment().format('YYYY-MM-DD'),
            designation: null,
            payment_method: null,
            payment_type: { code: p.CODE_NAME, description: p.CODE_VALUE_EN, operation: p.NOTES },
            id: -1,
            reference: '',
        };
    }
    renderDueAmountWarning() {
        const balance = this.booking?.guest_financial?.due_amount ?? 0;
        if (!balance || balance <= 0)
            return null;
        const amount = this.formatAmount(balance);
        return (h("button", { type: "button", class: "due-amount-btn", onClick: () => this.paymentFolioRef?.openFolio() }, h("wa-callout", { size: "small", variant: "danger" }, h("wa-icon", { slot: "icon", name: "money-bill-wave" }), "Outstanding guest balance: ", amount)));
    }
    renderSameDayWarning() {
        if (moment().isSame(moment(this.room.from_date, 'YYYY-MM-DD'), 'date')) {
            const isSingleRoom = this.booking.rooms.length === 1;
            return (h("wa-callout", { size: "small", variant: "danger", style: { marginBottom: 'var(--spacing)' } }, h("wa-icon", { slot: "icon", name: "triangle-exclamation" }), "This ", isSingleRoom ? 'booking' : 'room', " will be ", isSingleRoom ? 'cancelled' : 'removed'));
        }
        return null;
    }
    renderMissingClWarning() {
        const summary = this.missingClSummary;
        if (!summary)
            return null;
        if (summary.total === 0) {
            return (h("wa-callout", { size: "small", variant: "success", style: { marginBottom: 'var(--spacing)' } }, h("wa-icon", { slot: "icon", name: "circle-check" }), "All charges posted to ", h("b", null, this.agent.name), " City Ledger"));
        }
        return (h("wa-callout", { size: "small", variant: "warning", style: { marginBottom: 'var(--spacing)' } }, h("wa-icon", { slot: "icon", name: "triangle-exclamation" }), summary.total, " item", summary.total !== 1 ? 's' : '', " not posted to city ledger"));
    }
    render() {
        const isEarly = this.isEarlyCheckout && this.isLoading !== 'page';
        const hasDue = (this.booking?.financial?.due_amount ?? 0) > 0;
        return (h(Fragment, { key: '32de4f9de37c5109453cbb769876cdf53ed6ff55' }, h("ir-dialog", { key: '40b56b677b60428281861c8e2cd1bb6fb91b934e', open: this.open, label: isEarly ? 'Early Check-Out' : 'Check-Out', style: { '--ir-dialog-width': isEarly ? 'min(36rem, calc(100vw - 2rem))' : 'fit-content' }, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.buttons.clear();
                this.checkoutDialogClosed.emit({ reason: 'cancel' });
            } }, this.isLoading === 'page' ? (h("div", { class: "dialog__loader-container" }, h("ir-spinner", null))) : (h(Fragment, null, this.renderDueAmountWarning(), this.renderMissingClWarning(), this.renderSameDayWarning(), this.isEarlyCheckout ? (this.renderEarlyCheckoutContent()) : (h("p", { style: { width: 'calc(31rem - var(--spacing))' } }, "Are you sure you want to check out unit ", this.room?.unit?.name, "?")))), h("div", { key: '522efec46ba70815623851304859f7d9c2f13bf7', slot: "footer", class: "ir-dialog__footer" }, h(Fragment, { key: '0b437372ad3ed2c7fdbdf82b07da26effa7cb9af' }, h("ir-custom-button", { key: '1966ea2217fa54152ce008693d70e5ed864c3adf', size: "medium", "data-dialog": "close", appearance: "filled", variant: "neutral" }, locales?.entries?.Lcz_Cancel ?? 'Cancel'), this.buttons.has('checkout') && (h("ir-custom-button", { key: 'bbf8742641b990e74fe75256db27304db0544a3b', size: "medium", onClickHandler: e => this.checkoutRoom({ e, source: 'checkout' }), variant: 'brand', loading: this.isLoading === 'checkout' }, isEarly ? 'Confirm early check-out' : 'Checkout')), this.buttons.has('checkout_without_invoice') && (h("ir-custom-button", { key: 'ee12b47cec511199ad72587d5a1c9c3f3225b355', loading: this.isLoading === 'skipCheckout', size: "medium", onClickHandler: e => this.checkoutRoom({ e, source: 'skipCheckout' }), variant: 'brand', appearance: this.buttons.has('invoice_checkout') ? 'outlined' : 'accent' }, "Checkout without invoice")), this.buttons.has('invoice_checkout') && (h("ir-custom-button", { key: '9eb8c5832f2bd9cbdc27f5e4187eaa88d08fe194', size: "medium", loading: this.isLoading === 'checkout&invoice', onClickHandler: e => {
                this.checkoutRoom({ e, source: 'checkout&invoice' });
            }, variant: 'brand', appearance: 'accent' }, "Check out & invoice guest"))))), hasDue && this.paymentEntries && (h("ir-payment-folio", { key: 'e335e8aee5251657298edf48a5f9cce6785b08c4', ref: el => (this.paymentFolioRef = el), booking: this.booking, bookingNumber: this.booking.booking_nbr, paymentEntries: this.paymentEntries, mode: 'payment-action', payment: this.duePayment }))));
    }
    static get is() { return "ir-checkout-dialog"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-checkout-dialog.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-checkout-dialog.css"]
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
                    "tags": [],
                    "text": ""
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
                    "text": ""
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "identifier"
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "buttons": {},
            "invoiceInfo": {},
            "room": {},
            "isEarlyCheckout": {},
            "remainingDays": {},
            "penaltyAmount": {},
            "agent": {},
            "paymentEntries": {}
        };
    }
    static get events() {
        return [{
                "method": "checkoutDialogClosed",
                "name": "checkoutDialogClosed",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "CheckoutDialogCloseEvent",
                    "resolved": "{ reason: \"cancel\" | \"checkout\" | \"openInvoice\"; }",
                    "references": {
                        "CheckoutDialogCloseEvent": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ir-checkout-dialog/ir-checkout-dialog.tsx",
                            "id": "src/components/ir-checkout-dialog/ir-checkout-dialog.tsx::CheckoutDialogCloseEvent"
                        }
                    }
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "open",
                "methodName": "handleOpenChange"
            }];
    }
}
