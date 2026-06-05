import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { z } from './index2.js';
import { B as BookingService } from './booking.store.js';
import { i as isAgentMode } from './functions.js';
import { c as calendar_data } from './calendar-data.js';
import { I as InvoiceableItemReason } from './enums.js';
import { d as defineCustomElement$3 } from './ir-input2.js';
import { d as defineCustomElement$2 } from './ir-spinner2.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';

const irBookingPricingFormCss = ".sc-ir-booking-pricing-form-h{display:block;height:100%}.pricing-form.sc-ir-booking-pricing-form{display:flex;flex-direction:column;gap:1rem;padding-bottom:1rem}.pricing-form__input.sc-ir-booking-pricing-form{display:grid;grid-template-columns:auto 1fr;gap:var(--wa-space-l);align-items:center}.pricing-form__input.sc-ir-booking-pricing-form::part(label){width:80px;margin:0}.pricing-form__input.sc-ir-booking-pricing-form:disabled::part(label){opacity:0.5}.pricing-form__input.sc-ir-booking-pricing-form::part(wa-input){grid-column:1 / -1;grid-row-end:span 2;display:grid;grid-template-columns:subgrid;gap:0 var(--wa-space-s);align-items:center}.pricing-form__row.sc-ir-booking-pricing-form{display:flex;align-items:center;gap:0.75rem}.pricing-form__row--locked.sc-ir-booking-pricing-form{opacity:0.55}.pricing-form__date.sc-ir-booking-pricing-form{font-size:0.875rem;flex:0 0 6rem;color:var(--wa-color-text-quiet);white-space:nowrap}.pricing-form__row.sc-ir-booking-pricing-form ir-validator.sc-ir-booking-pricing-form{flex:1;min-width:0}@media (min-width: 768px){.pricing-form__input.sc-ir-booking-pricing-form::part(base){max-width:180px}}";
const IrBookingPricingFormStyle0 = irBookingPricingFormCss;

const nightAmountSchema = z.coerce.number({ invalid_type_error: 'Required' }).min(0, 'Minimum is 0');
const IrBookingPricingForm = /*@__PURE__*/ proxyCustomElement(class IrBookingPricingForm extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.pricingSaved = createEvent(this, "pricingSaved", 7);
        this.submitDisabledChange = createEvent(this, "submitDisabledChange", 7);
        this.allDisabled = createEvent(this, "allDisabled", 7);
    }
    formId = 'booking-pricing-form';
    booking;
    room;
    agent = null;
    folioEntries = [];
    currencySymbol = '';
    nights = [];
    isSubmitting = false;
    invoiceLocked = false;
    isCheckingInvoice = false;
    pricingSaved;
    submitDisabledChange;
    allDisabled;
    bookingService = new BookingService();
    isAgent;
    componentWillLoad() {
        this.isAgent = this.room.agent && isAgentMode(this.agent);
        this.initNights();
        if (!this.isAgent) {
            this.checkInvoiceStatus();
        }
    }
    handleRoomChange() {
        this.initNights();
    }
    initNights() {
        const acmTxByDate = this.acmTxByDate;
        this.nights = this.room.days.map(day => ({
            date: day.date,
            amount: day.amount.toString(),
            cost: day.cost,
            isLocked: this.isAgent ? acmTxByDate.get(day.date)?.IS_LOCKED : false,
        }));
    }
    async checkInvoiceStatus() {
        this.isCheckingInvoice = true;
        try {
            const info = await this.bookingService.getBookingInvoiceInfo({ booking_nbr: this.booking.booking_nbr });
            const accommodationItem = (info.invoiceable_items ?? []).find(item => item.key === this.room.system_id);
            this.invoiceLocked = accommodationItem.reason.code === InvoiceableItemReason.AlreadyInvoiced;
        }
        catch {
            // non-fatal — fall through with invoiceLocked = false
        }
        finally {
            this.isCheckingInvoice = false;
        }
    }
    isValid() {
        if (this.invoiceLocked)
            return false;
        return this.nights.every(n => {
            if (n.isLocked)
                return true;
            return nightAmountSchema.safeParse(n.amount).success;
        });
    }
    get acmTxByDate() {
        return new Map(this.folioEntries.filter(tx => tx.CATEGORY === 'ACM' && tx.BSA_REF === this.room.identifier).map(tx => [tx.SERVICE_DATE, tx]));
    }
    updateNight(date, value) {
        this.nights = this.nights.map(n => (n.date === date ? { ...n, amount: value } : n));
    }
    async handleSubmit(e) {
        e.preventDefault();
        if (!this.isValid())
            return;
        this.isSubmitting = true;
        this.submitDisabledChange.emit(true);
        try {
            const updatedRoom = {
                ...this.room,
                days: this.nights.map(n => ({ date: n.date, amount: parseFloat(n.amount), cost: n.cost })),
            };
            const updatedRooms = this.booking.rooms.map(r => (r.identifier === this.room.identifier ? updatedRoom : r));
            const { pickup_info, extra_services, is_direct, is_in_loyalty_mode, promo_key, extras, ...rest } = this.booking;
            const payload = {
                assign_units: true,
                is_pms: true,
                is_direct,
                is_backend: true,
                is_in_loyalty_mode,
                promo_key,
                extras: extras ?? [],
                agent: this.booking.agent,
                booking: { ...rest, rooms: updatedRooms, agent: this.booking.agent },
                extra_services,
                pickup_info,
            };
            await this.bookingService.doReservation(payload);
            this.pricingSaved.emit();
        }
        catch (err) {
            console.error(err);
        }
        finally {
            this.isSubmitting = false;
            this.submitDisabledChange.emit(false);
        }
    }
    render() {
        if (this.isCheckingInvoice) {
            return (h("div", { class: 'drawer__loader-container' }, h("ir-spinner", null)));
        }
        const allDisabled = this.invoiceLocked || this.isSubmitting;
        return (h("form", { id: this.formId, class: "pricing-form", onSubmit: this.handleSubmit.bind(this), novalidate: true }, h("wa-callout", { variant: "warning", size: "small" }, h("wa-icon", { slot: "icon", name: "triangle-exclamation" }), "Locked nightly rates cannot be edited because they ", h("b", null, "have been invoiced"), ". You can void the invoice with a ", h("b", null, "credit note"), " to update the rates and recreate a new one"), h("wa-callout", { size: "small", variant: "neutral" }, calendar_data.property.tax_statement), h("div", { style: { marginBottom: '0.5rem' } }), this.nights.map(night => (h("ir-validator", { key: night.date, class: "pricing-form__input-validator", schema: nightAmountSchema, value: night.amount }, h("ir-input", { class: "pricing-form__input", label: hooks(night.date).format('ddd, MMM D'), value: night.amount, mask: "price", disabled: night.isLocked || allDisabled, "onText-change": (e) => this.updateNight(night.date, e.detail) }, h("span", { slot: "start" }, calendar_data.property.currency.symbol), (night.isLocked || this.invoiceLocked) && h("wa-icon", { slot: "end", name: "lock", style: { fontSize: '0.875rem' } })))))));
    }
    static get watchers() { return {
        "room": ["handleRoomChange"]
    }; }
    static get style() { return IrBookingPricingFormStyle0; }
}, [2, "ir-booking-pricing-form", {
        "formId": [1, "form-id"],
        "booking": [16],
        "room": [16],
        "agent": [16],
        "folioEntries": [16],
        "currencySymbol": [1, "currency-symbol"],
        "nights": [32],
        "isSubmitting": [32],
        "invoiceLocked": [32],
        "isCheckingInvoice": [32]
    }, undefined, {
        "room": ["handleRoomChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-booking-pricing-form", "ir-input", "ir-spinner", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booking-pricing-form":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookingPricingForm);
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrBookingPricingForm as I, defineCustomElement as d };

//# sourceMappingURL=ir-booking-pricing-form2.js.map