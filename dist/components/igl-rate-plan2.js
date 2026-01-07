import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';
import { l as locales } from './locales.store.js';
import { b as booking_store, f as reserveRooms, d as resetReserved, h as updateRoomParams } from './booking.store.js';
import { d as defineCustomElement$2 } from './ir-custom-button2.js';
import { d as defineCustomElement$1 } from './ir-input2.js';
import { v as v4 } from './v4.js';

const iglRatePlanCss = ".sc-igl-rate-plan-h{display:block;margin-bottom:1rem;color:var(--wa-color-text-quiet)}.rate-plan.sc-igl-rate-plan{display:flex;flex-direction:column;min-height:32px;margin-top:0.25rem;gap:0.5rem}.rate-plan--unavailable.sc-igl-rate-plan{flex-direction:row;align-items:center;justify-content:space-between}.rateplan-name-container.sc-igl-rate-plan{display:flex;align-items:center;gap:0.5rem;margin:0;padding:0}.rateplan-name-container.sc-igl-rate-plan p.sc-igl-rate-plan{margin:0}.rateplan-container.sc-igl-rate-plan{display:flex;flex-direction:column;gap:0.75rem;width:100%;margin-top:0.5rem}.variation-select.sc-igl-rate-plan{width:100%;max-width:300px;flex:1}.rp-select.sc-igl-rate-plan:disabled{background-color:#eceff1;color:#7a7a7a}.rateplan-config.sc-igl-rate-plan{display:flex;flex-direction:column;gap:0.75rem;width:100%}.rate-total-night-view.sc-igl-rate-plan{display:flex;flex:1;gap:0;align-items:stretch}.rateplan-price-input.sc-igl-rate-plan{flex:1;width:100%}.total-nights-container.sc-igl-rate-plan{width:max-content}.rp-select--nights.sc-igl-rate-plan{border-top-left-radius:0;border-bottom-left-radius:0}.inventory-select.sc-igl-rate-plan{width:100%;max-width:200px}.edit-booking-radio.sc-igl-rate-plan{display:none}.mobile-only.sc-igl-rate-plan{width:100%;display:block}.desktop-only.sc-igl-rate-plan{display:none}.rate-plan-unavailable-text.sc-igl-rate-plan{margin:0;color:var(--wa-color-danger-fill-loud)}.rateplan-name-container.sc-igl-rate-plan{font-family:var(--wa-font-family-heading);font-weight:400;line-height:var(--wa-line-height-condensed);text-wrap:balance}.non-ref-span.sc-igl-rate-plan{font-size:12px;color:var(--wa-color-success-fill-loud)}.nightBorder.sc-igl-rate-plan{border-left-width:0;border-top-right-radius:3px !important;border-bottom-right-radius:3px !important}.sc-igl-rate-plan:dir(rtl) .fd-rateplan__price-input.sc-igl-rate-plan::part(base),.sc-igl-rate-plan:dir(ltr) .fd-rateplan__nights-select.sc-igl-rate-plan::part(combobox){border-top-left-radius:0;border-bottom-left-radius:0}.fd-rateplan__price-input.sc-igl-rate-plan{flex:1 1 0%;z-index:1}.sc-igl-rate-plan:dir(rtl) .fd-rateplan__nights-select.sc-igl-rate-plan::part(combobox),.sc-igl-rate-plan:dir(ltr) .fd-rateplan__price-input.sc-igl-rate-plan::part(base){border-top-right-radius:0;border-bottom-right-radius:0}.sc-igl-rate-plan:dir(rtl) .fd-rateplan__nights-select.sc-igl-rate-plan::part(combobox){border-right-width:0}.sc-igl-rate-plan:dir(ltr) .fd-rateplan__nights-select.sc-igl-rate-plan::part(combobox){border-left-width:0}.fd-rateplan__nights-select.sc-igl-rate-plan{min-width:100px}.fd-rateplan__inventory-select.sc-igl-rate-plan{min-width:60px}.fd-rateplan__nights-select[open].sc-igl-rate-plan,.fd-rateplan__nights-select.sc-igl-rate-plan:focus-visible,.fd-rateplan__nights-select.sc-igl-rate-plan:focus-within{z-index:2}@media (min-width: 768px){.booking-btn.sc-igl-rate-plan{width:100%}.mobile-only.sc-igl-rate-plan{display:none}.desktop-only.sc-igl-rate-plan{display:block}.edit-booking-radio.sc-igl-rate-plan{display:block;margin-left:0.75rem}.rateplan-container.sc-igl-rate-plan{flex-direction:row;align-items:center;justify-content:flex-end}.rateplan-config.sc-igl-rate-plan{flex-direction:row;align-items:center;justify-content:space-between}.rateplan__booking-btn.sc-igl-rate-plan{width:95px}}@media (min-width: 991px){.sc-igl-rate-plan-h{margin:0}.rateplan-name-container.sc-igl-rate-plan{margin-bottom:0 !important}.rateplan-price-input.sc-igl-rate-plan{max-width:250px}.rate-plan--available.sc-igl-rate-plan{flex-direction:row;align-items:center;justify-content:space-between}}@media only screen and (min-width: 991px) and (max-width: 1300px){.rateplan-name-container.sc-igl-rate-plan{width:40%}.price-amount.sc-igl-rate-plan{max-width:150px !important}}@media (min-width: 1024px){.booking-btn.sc-igl-rate-plan{width:100px}.fd-rateplan__price-input.sc-igl-rate-plan{width:170px;max-width:170px}.fd-rateplan__nights-select.sc-igl-rate-plan{width:100px;max-width:100px}.rate-total-night-view.sc-igl-rate-plan{margin:0;padding:0;box-sizing:border-box;flex:0}.fd-rateplan__inventory-select.sc-igl-rate-plan{width:100px}.rateplan-config.sc-igl-rate-plan{width:fit-content}}@media (min-width: 1200px){.rateplan-name-container.sc-igl-rate-plan{width:40%;margin-top:0}}";
const IglRatePlanStyle0 = iglRatePlanCss;

const IglRatePlan = /*@__PURE__*/ proxyCustomElement(class IglRatePlan extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.buttonClicked = createEvent(this, "buttonClicked", 7);
        this.bookingStepChange = createEvent(this, "bookingStepChange", 7);
    }
    // Used Props with type annotations
    ratePlan;
    roomTypeId;
    ratePricingMode = [];
    currency;
    shouldBeDisabled;
    bookingType = 'PLUS_BOOKING';
    isBookDisabled = false;
    visibleInventory;
    buttonClicked;
    bookingStepChange;
    // Determine if the form inputs should be disabled
    disableForm() {
        const { bookingType, shouldBeDisabled, ratePlan, visibleInventory } = this;
        if (bookingType === 'EDIT_BOOKING' && shouldBeDisabled) {
            return false;
        }
        return !ratePlan.is_available_to_book || visibleInventory?.visibleInventory === 0;
    }
    // Update the rate plan selection in the booking store
    updateRateplanSelection(props) {
        const { roomTypeId, ratePlan } = this;
        const currentSelections = booking_store.ratePlanSelections;
        booking_store.ratePlanSelections = {
            ...currentSelections,
            [roomTypeId]: {
                ...currentSelections[roomTypeId],
                [ratePlan.id]: {
                    ...currentSelections[roomTypeId][ratePlan.id],
                    ...props,
                },
            },
        };
    }
    // Handle changes to select inputs
    handleDataChange(key, evt) {
        const value = evt.target.value;
        if (key === 'adult_child_offering') {
            this.handleVariationChange(value);
        }
        else if (key === 'rate') {
            this.updateRateplanSelection({ view_mode: value });
        }
        else if (key === 'totalRooms') {
            reserveRooms({
                roomTypeId: this.roomTypeId,
                ratePlanId: this.ratePlan.id,
                rooms: Number(value),
            });
        }
    }
    // Navigate to the next page for booking
    bookProperty() {
        if (this.bookingType === 'BAR_BOOKING') {
            resetReserved();
        }
        this.reserveRoom();
        this.bookingStepChange.emit({ direction: 'next' });
        this.buttonClicked.emit({ key: 'next' });
    }
    reserveRoom() {
        reserveRooms({
            roomTypeId: this.roomTypeId,
            ratePlanId: this.ratePlan.id,
            rooms: 1,
            guest: [
                {
                    last_name: booking_store.guest?.last_name,
                    first_name: booking_store.guest?.first_name,
                    unit: this.roomTypeId === booking_store.guest?.roomtype_id ? booking_store.guest?.unit : null,
                    bed_preference: this.visibleInventory.roomtype.is_bed_configuration_enabled ? booking_store.guest?.bed_preference : null,
                    infant_nbr: this.visibleInventory.selected_variation?.child_nbr > 0 ? booking_store.guest?.infant_nbr : null,
                },
            ],
        });
    }
    // Render the rate amount
    get rate() {
        const { visibleInventory } = this;
        if (!visibleInventory)
            return '';
        if (visibleInventory.is_amount_modified) {
            return visibleInventory.rp_amount.toString();
        }
        const { selected_variation, view_mode } = visibleInventory;
        // const amount = view_mode === '001' ? selected_variation?.discounted_gross_amount : selected_variation?.amount_per_night_gross;
        const amount = view_mode === '001' ? selected_variation?.discounted_amount : selected_variation?.amount_per_night;
        return amount?.toString() || '';
    }
    // Format variation for display
    formatVariation(variation) {
        if (!variation)
            return '';
        const adults = `${variation.adult_nbr} ${variation.adult_nbr === 1 ? locales.entries['Lcz_Adult']?.toLowerCase() : locales.entries['Lcz_Adults']?.toLowerCase()}`;
        const children = variation.child_nbr > 0
            ? `${variation.child_nbr} ${variation.child_nbr > 1 ? locales.entries['Lcz_Children']?.toLowerCase() : locales.entries['Lcz_Child']?.toLowerCase()}`
            : '';
        return children ? `${adults} ${children}` : adults;
    }
    // Get tooltip messages for the rate plan
    getTooltipMessages() {
        const { ratePlan, visibleInventory } = this;
        const selectedVariation = visibleInventory?.selected_variation;
        if (!selectedVariation)
            return;
        const matchingVariation = ratePlan.variations?.find(variation => this.formatVariation(variation) === this.formatVariation(selectedVariation));
        if (!matchingVariation)
            return;
        const cancellationPolicy = matchingVariation.applicable_policies?.find(p => p.type === 'cancelation')?.combined_statement;
        const guaranteePolicy = matchingVariation.applicable_policies?.find(p => p.type === 'guarantee')?.combined_statement;
        let tooltip = '';
        if (cancellationPolicy) {
            tooltip += `<b><u>Cancellation:</u></b> ${cancellationPolicy}<br/>`;
        }
        if (guaranteePolicy) {
            tooltip += `<b><u>Guarantee:</u></b> ${guaranteePolicy}`;
        }
        return tooltip || undefined;
    }
    // Handle variation change when a different option is selected
    async handleVariationChange(value) {
        const { ratePlan, roomTypeId } = this;
        const variations = ratePlan.variations || [];
        const selectedVariation = variations.find(v => this.formatVariation(v) === value);
        if (!selectedVariation)
            return;
        updateRoomParams({
            params: { selected_variation: selectedVariation },
            ratePlanId: ratePlan.id,
            roomTypeId,
        });
    }
    // Reset reserved rooms in the booking store
    render() {
        const { ratePlan, bookingType, currency, ratePricingMode, visibleInventory } = this;
        const isAvailableToBook = ratePlan.is_available_to_book;
        const disableForm = this.disableForm();
        const selectedVariation = visibleInventory?.selected_variation;
        const formattedVariations = ratePlan.variations?.map(v => this.formatVariation(v));
        // if (!this.visibleInventory) {
        //   return null;
        // }
        return (h(Host, { key: '6112aa0627053e730e9722ac99b5ad848496c883', "data-testid": `rp-${this.ratePlan.id}` }, h("div", { key: '5e7829aa78eadeeb9a8e473431808640c2c5be56', class: `rate-plan ${isAvailableToBook ? 'rate-plan--available' : 'rate-plan--unavailable'}` }, h("div", { key: '96e8df1202c44bc7b8ffa88b5c5c26ecec8efe8d', "data-testid": 'rp_name', class: "rateplan-name-container" }, bookingType === 'BAR_BOOKING' ? (h("p", null, h("span", null, ratePlan.name.split('/')[1], " ", ratePlan.is_non_refundable && h("span", { class: "non-ref-span" }, "Non Refundable")))) : (h("span", null, ratePlan.short_name, " ", ratePlan.is_non_refundable && h("span", { class: "non-ref-span" }, "Non Refundable"))), isAvailableToBook && (h(Fragment, { key: '2811c2e4be1fa30fb7bd3c61fde757272deeadf1' }, h("wa-tooltip", { key: 'c52f48b36e79afb4fe376e74c1fa7c260f8b25a8', for: `rateplan-${this.ratePlan.id}` }, h("span", { key: '964b9de183666698a8014bfcc1c7e68a56464975', innerHTML: this.getTooltipMessages() })), h("wa-icon", { key: '739863497a16d720d6b638222cbdd9682ff9256e', name: "circle-info", id: `rateplan-${this.ratePlan.id}` })))), isAvailableToBook ? (h("div", { class: "rateplan-container" }, h("wa-select", { size: "small", disabled: disableForm, "data-testid": "adult-child-offering", onchange: evt => this.handleDataChange('adult_child_offering', evt), "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, value: this.formatVariation(selectedVariation), defaultValue: this.formatVariation(selectedVariation) }, formattedVariations?.map(variation => (h("wa-option", { value: variation, selected: this.formatVariation(selectedVariation) === variation }, variation)))), h("div", { class: "rateplan-config" }, h("div", { class: "rate-total-night-view" }, h("ir-input", { disabled: disableForm, class: "fd-rateplan__price-input", "onText-change": e => this.updateRateplanSelection({
                is_amount_modified: true,
                rp_amount: Number(e.detail),
            }), id: `rate-input-${this.ratePlan.id}`, "aria-label": `${this.visibleInventory?.roomtype?.name} ${this.ratePlan.short_name}'s rate`, "aria-describedby": `${this.ratePlan.short_name}'s rate`, value: this.rate, defaultValue: this.rate, placeholder: locales.entries.Lcz_Rate || 'Rate', mask: "price" }, h("span", { slot: "start" }, currency.symbol)), h("wa-select", { "data-testid": 'nigh_stay_select', disabled: disableForm, "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, size: "small", class: "fd-rateplan__nights-select", id: v4(), onchange: evt => this.updateRateplanSelection({
                view_mode: evt.target.value,
            }), value: visibleInventory?.view_mode, defaultValue: visibleInventory?.view_mode }, ratePricingMode.map(data => (h("wa-option", { value: data.CODE_NAME, selected: visibleInventory?.view_mode === data.CODE_NAME }, data.CODE_VALUE_EN))))), (bookingType === 'PLUS_BOOKING' || bookingType === 'ADD_ROOM') && (h("wa-select", { "data-testid": 'inventory_select', disabled: visibleInventory.visibleInventory === 0, class: "fd-rateplan__inventory-select", onchange: evt => this.handleDataChange('totalRooms', evt), value: visibleInventory.reserved?.toString(), defaultValue: visibleInventory.reserved?.toString(), size: "small", "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            } }, Array.from({ length: (visibleInventory.visibleInventory || 0) + 1 }, (_, i) => i).map(i => (h("wa-option", { value: i?.toString(), selected: visibleInventory.reserved === i }, i)))))), bookingType === 'EDIT_BOOKING' && (h(Fragment, null, h("ir-custom-button", { variant: "brand", "data-testid": "book_property", disabled: disableForm, type: "button", appearance: visibleInventory.reserved === 1 ? 'accent' : 'outlined', class: "rateplan__booking-btn", onClickHandler: () => {
                resetReserved();
                this.reserveRoom();
                this.bookProperty();
            } }, locales.entries.Lcz_Select))), (bookingType === 'BAR_BOOKING' || bookingType === 'SPLIT_BOOKING') && (h("ir-custom-button", { "data-testid": "book", disabled: disableForm || (bookingType === 'SPLIT_BOOKING' && this.isBookDisabled), type: "button", class: "booking-btn", variant: "brand", onClickHandler: () => this.bookProperty() }, locales.entries.Lcz_Book)))) : (h("p", { class: "rate-plan-unavailable-text" }, locales.entries['Lcz_NotAvailable'] || 'Not available')))));
    }
    static get style() { return IglRatePlanStyle0; }
}, [2, "igl-rate-plan", {
        "ratePlan": [16],
        "roomTypeId": [2, "room-type-id"],
        "ratePricingMode": [16],
        "currency": [16],
        "shouldBeDisabled": [4, "should-be-disabled"],
        "bookingType": [1, "booking-type"],
        "isBookDisabled": [4, "is-book-disabled"],
        "visibleInventory": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["igl-rate-plan", "ir-custom-button", "ir-input"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-rate-plan":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglRatePlan);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IglRatePlan as I, defineCustomElement as d };

//# sourceMappingURL=igl-rate-plan2.js.map