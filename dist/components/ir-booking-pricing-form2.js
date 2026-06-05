import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { z } from './index2.js';
import { B as BookingService } from './booking.store.js';
import { i as isAgentMode } from './functions.js';
import { c as calendar_data } from './calendar-data.js';
import { d as defineCustomElement$2 } from './ir-input2.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';

const irBookingPricingFormCss = ".sc-ir-booking-pricing-form-h{display:block}.pricing-form.sc-ir-booking-pricing-form{display:flex;flex-direction:column;gap:1rem}.pricing-form__row.sc-ir-booking-pricing-form{display:flex;align-items:center;gap:0.75rem}.pricing-form__row--locked.sc-ir-booking-pricing-form{opacity:0.55}.pricing-form__date.sc-ir-booking-pricing-form{font-size:0.875rem;flex:0 0 5rem;color:var(--wa-color-text-quiet);white-space:nowrap}.pricing-form__row.sc-ir-booking-pricing-form ir-validator.sc-ir-booking-pricing-form{flex:1;min-width:0}@media (min-width: 768px){.pricing-form__input-validator.sc-ir-booking-pricing-form{max-width:180px}}";
const IrBookingPricingFormStyle0 = irBookingPricingFormCss;

const nightAmountSchema = z.coerce.number({ invalid_type_error: 'Required' }).min(0, 'Minimum is 0');
const IrBookingPricingForm = /*@__PURE__*/ proxyCustomElement(class IrBookingPricingForm extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.pricingSaved = createEvent(this, "pricingSaved", 7);
        this.submitDisabledChange = createEvent(this, "submitDisabledChange", 7);
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
    bookingService = new BookingService();
    async componentWillLoad() {
        this.initNights();
        if (!isAgentMode(this.agent)) {
            await this.checkInvoiceStatus();
        }
    }
    handleRoomChange() {
        this.initNights();
    }
    initNights() {
        this.nights = this.room.days.map(day => ({
            date: day.date,
            amount: day.amount.toFixed(2),
            cost: day.cost,
            isLocked: this.folioEntries.some(e => e.SERVICE_DATE === day.date && e.IS_LOCKED),
        }));
    }
    async checkInvoiceStatus() {
        this.isCheckingInvoice = true;
        try {
            const info = await this.bookingService.getBookingInvoiceInfo({ booking_nbr: this.booking.booking_nbr });
            const accommodationItems = (info.invoiceable_items ?? []).filter(item => item.type === 'BSA');
            this.invoiceLocked = accommodationItems.some(item => item.reason?.code === '001');
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
                booking: { ...rest, rooms: updatedRooms },
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
        const currency = this.currencySymbol || this.booking?.currency?.symbol || this.booking?.currency?.code || '';
        const allDisabled = this.invoiceLocked || this.isSubmitting || this.isCheckingInvoice;
        return (h("form", { key: '5b2c1c2b2d9542f5b3e47c1df7152ebb88bd449b', id: this.formId, class: "pricing-form", onSubmit: this.handleSubmit.bind(this), novalidate: true }, h("wa-callout", { key: '877d59c9243a243bc8d2ad24320d12b12b4aa434', size: "small", variant: "neutral" }, calendar_data.property.tax_statement), this.invoiceLocked && (h("wa-callout", { key: 'bd17ae08e39448e6d8259651138a07696d89889d', variant: "warning", size: "small" }, h("wa-icon", { key: '70173e6db2b7f728354d52775ec4e442512258d8', slot: "icon", name: "triangle-exclamation" }), "Rates are locked \u2014 an invoice has already been issued for this room's accommodation. To modify prices, void the invoice first.")), this.nights.map(night => (h("div", { key: night.date, class: `pricing-form__row${night.isLocked || allDisabled ? ' pricing-form__row--locked' : ''}` }, h("span", { class: "pricing-form__date" }, hooks(night.date).format('ddd, MMM D')), h("ir-validator", { class: "pricing-form__input-validator", schema: nightAmountSchema, value: night.amount, valueEvent: "text-change", showErrorMessage: true, autovalidate: true }, h("ir-input", { value: night.amount, mask: "price", disabled: night.isLocked || allDisabled, "onText-change": (e) => this.updateNight(night.date, e.detail) }, h("span", { slot: "start" }, currency), (night.isLocked || this.invoiceLocked) && h("wa-icon", { slot: "end", name: "lock", style: { fontSize: '0.875rem' } }))))))));
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
    const components = ["ir-booking-pricing-form", "ir-input", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booking-pricing-form":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookingPricingForm);
            }
            break;
        case "ir-input":
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