import { BookingService } from "../../services/booking-service/booking.service";
import { SetupService } from "../../services/setup/index";
import { Fragment, h } from "@stencil/core";
import { InvoiceableItemReason } from "../../types/enums";
import moment from "moment";
import { AgentsService } from "../../services/agents/agents.service";
import { isAgentMode } from "../ir-booking-details/functions";
import { CityLedgerService } from "../../services/city-ledger/index";
import calendar_data from "../../stores/calendar-data";
import { isEarlyCheckout } from "../../utils/booking";
import { formatDate } from "../../utils/date/index";
import { formatAmount, formatCount } from "../../utils/number";
import { t } from "../../services/locale/t";
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
    /** Upper bound + pre-fill for the cancellation penalty. Kept in sync with `detectEarlyCheckout` so the masked input isn't clamped below its own pre-filled value. */
    penaltyMax = 0;
    agent;
    paymentEntries;
    includeInvoice = false;
    checkoutDialogClosed;
    bookingService = new BookingService();
    setupService = new SetupService();
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
        return formatAmount(this.currencySymbol, amount);
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
            // this.checkoutDialogClosed.emit({ reason: source === 'checkout&invoice' ? 'openInvoice' : 'checkout' });
            this.checkoutDialogClosed.emit({ reason: this.includeInvoice ? 'openInvoice' : 'checkout', isEarlyCheckout: this.isEarlyCheckout });
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
    componentDidLoad() {
        // `@Watch('open')` only fires on a change — if the dialog is mounted already open
        // (e.g. auto-opened right after render), run the initial load here.
        if (this.open) {
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
            const [invoiceInfo, agent, paymentEntries] = await Promise.all([
                this.bookingService.getBookingInvoiceInfo({ booking_nbr: this.booking.booking_nbr }),
                hasAgent ? this.agentService.getExposedAgent({ id: this.booking.agent.id }) : Promise.resolve(null),
                hasDueAmount ? this.setupService.getPaymentEntries() : Promise.resolve(null),
            ]);
            this.invoiceInfo = invoiceInfo;
            this.setupButtons();
            if (paymentEntries) {
                this.paymentEntries = paymentEntries;
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
        this.isEarlyCheckout = isEarlyCheckout(this.room);
        if (this.isEarlyCheckout) {
            const todayStr = today.format('YYYY-MM-DD');
            this.remainingDays = (this.room.days ?? []).filter(d => d.date >= todayStr);
            const dueAmount = this.booking?.guest_financial?.due_amount ?? 0;
            const rawTotal = this.booking.rooms.length === 1 ? (dueAmount >= 0 ? dueAmount : this.remainingTotal) : Math.min(this.remainingTotal, dueAmount);
            const total = Math.max(0, rawTotal);
            this.penaltyAmount = total;
            this.penaltyMax = total;
            this.initialPenaltyStr = total.toFixed(2);
        }
    }
    /**
     * Determines which checkout action buttons to surface.
     *
     * Decision rules (evaluated after `invoiceInfo` is loaded):
     *
     * 1. Filter `invoiceable_items` to items that still need invoicing — exclude
     *    `AlreadyInvoiced` and `PickupCancellationPolicy` reasons.
     * 2. From those, isolate room/accommodation items (`type === 'BSA'`).
     * 3. Button set:
     *    - Nothing outstanding           → `checkout` only
     *    - Any outstanding items         → `invoice_checkout` (check out + invoice guest)
     *    - 2+ outstanding room items     → also add `checkout_without_invoice` (skip invoicing)
     *
     * `checkout_without_invoice` is withheld when only one room is un-invoiced because
     * the "check out & invoice" path already covers that case cleanly.
     */
    setupButtons() {
        const toBeInvoiced = this.invoiceInfo.invoiceable_items.filter(item => ![InvoiceableItemReason.AlreadyInvoiced, InvoiceableItemReason.PickupCancellationPolicy].includes(item?.reason?.code));
        const toBeInvoicedRooms = toBeInvoiced.filter(item => item.type === 'BSA');
        if (toBeInvoiced.length === 0) {
            this.buttons.add('checkout');
            return;
        }
        const allRoomInvoiced = toBeInvoicedRooms.length === 0;
        let includeInvoice = true;
        this.buttons.add('invoice_checkout');
        if (!allRoomInvoiced && toBeInvoicedRooms.length > 1) {
            includeInvoice = false;
            this.buttons.add('checkout_without_invoice');
        }
        this.includeInvoice = includeInvoice;
    }
    renderEarlyCheckoutContent() {
        const unitName = this.room?.unit?.name ?? this.room?.identifier;
        const remainingCount = this.remainingDays.length;
        const total = this.remainingTotal;
        return (h("div", { class: "early-checkout" }, h("wa-callout", { class: "ec-summary", size: "s", appearance: "filled", variant: "neutral" }, h("div", { class: "ec-summary__row" }, h("span", { class: "ec-summary__label" }, t('Lcz_Unit', { fallback: 'Unit' })), h("span", { class: "ec-summary__value" }, unitName)), h("div", { class: "ec-summary__row" }, h("span", { class: "ec-summary__label" }, t('Lcz_OriginalCheckOut', { fallback: 'Original check-out' })), h("span", { class: "ec-summary__value" }, formatDate(this.room.to_date, 'ddd, MMM D, YYYY'))), h("div", { class: "ec-summary__row" }, h("span", { class: "ec-summary__label" }, t('Lcz_ActualCheckOut', { fallback: 'Actual check-out' })), h("span", { class: "ec-summary__value" }, formatDate(moment(), 'ddd, MMM D, YYYY')))), h("div", { class: "ec-section" }, h("p", { class: "ec-section__title" }, t('Lcz_ReclaimedNights', { fallback: 'Reclaimed Nights' }), " ", h("wa-badge", { pill: true }, formatCount(remainingCount))), h("div", { class: "ec-nights" }, this.remainingDays.map(day => (h("div", { key: day.date, class: "ec-nights__row" }, h("span", { class: "ec-nights__date" }, formatDate(day.date, 'ddd, MMM D')), h("span", { class: "ec-nights__amount" }, this.formatAmount(day.charges.total_amount))))), h("div", { class: "ec-nights__subtotal" }, h("span", null, t('Lcz_SubtotalIncludingTaxesAndFees', { fallback: 'Subtotal (Including taxes and fees)' })), h("span", null, this.formatAmount(total))))), h("div", { class: "ec-section" }, this.penaltyMax > 0 ? (h("ir-input", { label: t('Lcz_ApplyFullCancellationPenalty', { fallback: 'Apply the full cancellation penalty?' }), mask: "price", value: this.initialPenaltyStr, defaultValue: this.initialPenaltyStr, min: 0, max: this.penaltyMax, hint: t('Lcz_PrefilledFromReclaimedNightsOrDueAmountHint', { fallback: 'Pre-filled from reclaimed nights or due amount. Modify or waive entirely.' }), "onText-change": (e) => {
                const val = parseFloat(e.detail);
                this.penaltyAmount = isNaN(val) ? 0 : val;
            } }, h("span", { slot: "start" }, this.currencySymbol))) : (h("wa-callout", { size: "s", variant: "success" }, h("wa-icon", { slot: "icon", name: "circle-check" }), t('Lcz_BookingFullyPaidNoPenaltyDue', { fallback: 'This booking is fully paid — no cancellation penalty or outstanding balance is due.' }))))));
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
    renderDueAmountWarning({ canCollect = true }) {
        const balance = this.booking?.guest_financial?.due_amount ?? 0;
        if (!balance || balance <= 0)
            return null;
        const amount = this.formatAmount(balance);
        return (h("div", { class: "due-amount-btn" }, h("wa-callout", { size: "s", variant: "danger" }, h("wa-icon", { slot: "icon", name: "money-bill-wave" }), h("div", { class: 'd-flex align-items-center justify-content-between' }, h("span", null, t('Lcz_OutstandingGuestBalance', { fallback: 'Outstanding guest balance:' }), " ", amount), canCollect && (h("ir-custom-button", { variant: "danger", appearance: "outlined", size: "xs", style: { marginLeft: 'auto' }, onClick: () => this.paymentFolioRef?.openFolio() }, t('Lcz_Collect', { fallback: 'Collect' })))))));
    }
    renderSameDayWarning() {
        if (moment().isSame(moment(this.room?.from_date, 'YYYY-MM-DD'), 'date')) {
            const isSingleRoom = this.booking.rooms.length === 1;
            return (h("wa-callout", { size: "s", variant: "danger" }, h("wa-icon", { slot: "icon", name: "triangle-exclamation" }), isSingleRoom ? t('Lcz_BookingWillBeCancelled', { fallback: 'This booking will be cancelled' }) : t('Lcz_RoomWillBeRemoved', { fallback: 'This room will be removed' })));
        }
        return null;
    }
    renderMissingClWarning() {
        const summary = this.missingClSummary;
        if (!summary)
            return null;
        if (summary.total === 0) {
            return (h("wa-callout", { size: "s", variant: "success" }, h("wa-icon", { slot: "icon", name: "circle-check" }), t('Lcz_AllChargesPostedToCityLedger', { fallback: 'All charges posted to %1 City Ledger', params: [this.agent.name] })));
        }
        return (h("wa-callout", { size: "s", variant: "warning" }, h("wa-icon", { slot: "icon", name: "triangle-exclamation" }), t('Lcz_ItemsNotPostedToCityLedger', { fallback: '%1 item(s) not posted to city ledger', params: [formatCount(summary.total)] })));
    }
    render() {
        const isEarly = this.isEarlyCheckout && this.isLoading !== 'page';
        const hasDue = (this.booking?.guest_financial?.due_amount ?? 0) > 0;
        return (h(Fragment, { key: 'ba1da3581dfa49ef6373a566ce01b4986ea56e6b' }, h("ir-dialog", { key: 'eb031ec9d2774c127bac85e57dc765b8baf11d79', open: this.open, label: isEarly ? t('Lcz_EarlyCheckOut', { fallback: 'Early Check-Out' }) : t('Lcz_CheckOutLabel', { fallback: 'Check-out' }), style: { '--ir-dialog-width': isEarly ? 'min(36rem, calc(100vw - 2rem))' : 'fit-content' }, onIrDialogHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.buttons.clear();
                this.checkoutDialogClosed.emit({ reason: 'cancel' });
            } }, this.open && (h(Fragment, { key: 'f6dfd8f860344ee67e039bfa568935238eeef2a7' }, this.isLoading === 'page' ? (h("div", { class: "dialog__loader-container" }, h("ir-spinner", null))) : (h(Fragment, null, h("div", { class: "checkout-dialog__callouts" }, this.renderDueAmountWarning({ canCollect: !isEarly }), this.renderMissingClWarning(), this.renderSameDayWarning()), this.isEarlyCheckout ? (this.renderEarlyCheckoutContent()) : (h("p", { style: { width: 'calc(31rem - var(--spacing))' } }, t('Lcz_AreYouSureCheckOutUnit', { fallback: 'Are you sure you want to check out unit %1?', params: [this.room?.unit?.name ?? ''] }))), this.buttons.has('invoice_checkout') && (h("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'flex-end' } }, h("wa-checkbox", { style: { marginTop: '1rem', color: 'var(--wa-color-text-quiet)', marginInlineStart: 'auto' }, value: String(this.includeInvoice), defaultChecked: this.includeInvoice, onchange: () => {
                this.includeInvoice = !this.includeInvoice;
            } }, t('Lcz_PrepareGuestInvoiceAfterCheckout', { fallback: 'Prepare guest invoice after checkout' })))))))), h("div", { key: 'f05dc476fa5334f6694eadf3349b278dda99652d', slot: "footer", class: "ir-dialog__footer" }, h(Fragment, { key: '1e1615b63671a4cd37958461af2d97734e478fb0' }, h("ir-custom-button", { key: '765949ea1f8ae1b33064a3d1e6501659267c8952', size: "m", "data-dialog": "close", appearance: "filled", variant: "neutral" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: 'c15542437336aa1597cc45c80e457258c35cfcc9', size: "m", onClickHandler: e => this.checkoutRoom({ e, source: 'checkout' }), variant: 'brand', loading: this.isLoading === 'checkout' }, isEarly ? t('Lcz_ConfirmEarlyCheckOut', { fallback: 'Confirm early check-out' }) : t('Lcz_CheckOut', { fallback: 'Check out' }))))), hasDue && this.paymentEntries && (h("ir-payment-folio", { key: '66a4597a4f3f94a1370527a51a942eb56e7d120b', ref: el => (this.paymentFolioRef = el), booking: this.booking, bookingNumber: this.booking.booking_nbr, paymentEntries: this.paymentEntries, mode: 'payment-action', payment: this.duePayment }))));
    }
    static get is() { return "ir-checkout-dialog"; }
    static get encapsulation() { return "scoped"; }
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
            "penaltyMax": {},
            "agent": {},
            "paymentEntries": {},
            "includeInvoice": {}
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
                    "resolved": "{ reason: \"cancel\" | \"checkout\" | \"openInvoice\"; isEarlyCheckout?: boolean; }",
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
