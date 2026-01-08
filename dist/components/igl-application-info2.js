import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { V as VariationService, B as BookingService, b as booking_store, u as updateRoomGuest, a as updateBookedByGuest, m as modifyBookingStore } from './booking.store.js';
import { l as locales } from './locales.store.js';
import { i as isSingleUnit, c as calendar_data } from './calendar-data.js';
import { f as formatAmount } from './utils.js';
import { G as GuestCredentials } from './types.js';
import { z } from './index2.js';
import { d as defineCustomElement$2 } from './ir-input2.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';
import { v as v4 } from './v4.js';

const iglApplicationInfoCss = ".sc-igl-application-info-h{color:var(--wa-color-text-normal);font-family:var(--wa-font-family-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;text-align:start;display:flex;flex-direction:column;gap:0.5rem;margin-top:1.5rem}.fd-application-info__header.sc-igl-application-info{display:flex;gap:1rem;align-items:flex-start;justify-content:space-between}.fd-application-info__variation.sc-igl-application-info{padding:0;margin:0}.fd-application-info__form.sc-igl-application-info{display:flex;flex-direction:column;gap:1rem}.fd-application-info__price-inline.sc-igl-application-info,.fd-application-info__details.sc-igl-application-info{display:none}.fd-application-info__footer.sc-igl-application-info,.fd-application-info__rateplan.sc-igl-application-info{display:flex;align-items:center;gap:1rem}.fd-application-info__footer.sc-igl-application-info{justify-content:space-between}.fd-application-info__rateplan-name.sc-igl-application-info{font-size:var(--wa-font-size-m);margin:0;padding:0}.fd-application-info__non-refundable.sc-igl-application-info{color:var(--wa-color-success-fill-loud);margin-inline-start:0.5rem}.fd-application-info__roomtype-title.sc-igl-application-info{font-size:var(--wa-font-size-l)}.fd-application-info__infant.sc-igl-application-info{display:flex;flex-direction:column;gap:0.875rem}.fd-application-info__infant-label.sc-igl-application-info{margin:0;padding:0;color:var(--wa-color-danger-fill-loud)}.fd-application-info__price.sc-igl-application-info{margin:0;padding:0;display:flex;flex-direction:column}@media (min-width: 768px){.fd-application-info__infant.sc-igl-application-info{flex-direction:row;align-items:center}.fd-application-info__infant.sc-igl-application-info .fd-application-info__select.sc-igl-application-info{max-width:100px}.fd-application-info__roomtype-title.sc-igl-application-info{font-size:var(--wa-font-size-m)}.fd-application-info__header.sc-igl-application-info{justify-content:flex-start;align-items:center;gap:0.5rem}.fd-application-info__form.sc-igl-application-info{flex-direction:row}.fd-application-info__price-inline.sc-igl-application-info{display:flex;flex-direction:column;padding:0;margin:0;align-items:flex-end}.fd-application-info__details.sc-igl-application-info{display:flex;align-items:center;gap:0.5rem}.fd-application-info__price.sc-igl-application-info,.fd-application-info__footer.sc-igl-application-info{display:none}}";
const IglApplicationInfoStyle0 = iglApplicationInfoCss;

const IglApplicationInfo = /*@__PURE__*/ proxyCustomElement(class IglApplicationInfo extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.recalculateTotalCost = createEvent(this, "recalculateTotalCost", 7);
    }
    rateplanSelection;
    guestInfo;
    currency;
    bedPreferenceType = [];
    bookingType = 'PLUS_BOOKING';
    roomIndex;
    totalNights = 1;
    baseData;
    autoFillGuest;
    isButtonPressed = false;
    amount = 0;
    recalculateTotalCost;
    variationService = new VariationService();
    bookingService = new BookingService();
    shouldSyncBookedByFirstName = !booking_store.bookedByGuest?.firstName;
    shouldSyncBookedByLastName = !booking_store.bookedByGuest?.lastName;
    async componentWillLoad() {
        if (isSingleUnit(this.rateplanSelection.roomtype.id)) {
            const filteredRooms = this.filterRooms();
            if (filteredRooms.length > 0)
                this.updateGuest({ unit: filteredRooms[0]?.id?.toString() });
        }
        this.amount = await this.getAmount();
    }
    updateGuest(params) {
        const roomTypeId = this.rateplanSelection.roomtype.id;
        const ratePlanId = this.rateplanSelection.ratePlan.id;
        let prevGuest = [...this.rateplanSelection.guest];
        prevGuest[this.roomIndex] = {
            ...prevGuest[this.roomIndex],
            ...params,
        };
        updateRoomGuest({
            ratePlanSelection: this.rateplanSelection,
            ratePlanId,
            roomTypeId,
            guest: prevGuest,
        });
        const shouldAutoFill = this.autoFillGuest && !booking_store.bookedByGuestManuallyEdited;
        if (!shouldAutoFill) {
            if (booking_store.bookedByGuestManuallyEdited) {
                this.shouldSyncBookedByFirstName = false;
                this.shouldSyncBookedByLastName = false;
            }
            return;
        }
        if (typeof params.first_name === 'string' && this.shouldSyncBookedByFirstName) {
            updateBookedByGuest({
                firstName: params.first_name,
            });
        }
        if (typeof params.last_name === 'string' && this.shouldSyncBookedByLastName) {
            updateBookedByGuest({
                lastName: params.last_name,
            });
        }
    }
    async handleGuestInfoChange() {
        if (this.rateplanSelection.is_amount_modified) {
            return;
        }
        this.amount = await this.getAmount();
    }
    handleButtonClicked(event) {
        switch (event.detail.key) {
            case 'book':
            case 'bookAndCheckIn':
            case 'save':
                this.isButtonPressed = true;
                break;
        }
    }
    getTooltipMessages() {
        const { ratePlan, selected_variation } = this.rateplanSelection;
        let selectedVariation = selected_variation;
        if (this.guestInfo?.infant_nbr) {
            selectedVariation = this.variationService.getVariationBasedOnInfants({
                variations: ratePlan.variations,
                baseVariation: selected_variation,
                infants: this.guestInfo?.infant_nbr,
            });
        }
        if (!selectedVariation)
            return;
        const matchingVariation = ratePlan.variations?.find(variation => variation.adult_nbr === selectedVariation.adult_nbr && variation.child_nbr === selectedVariation.child_nbr);
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
    async getAmount() {
        if (this.rateplanSelection.is_amount_modified) {
            const net = this.rateplanSelection.view_mode === '001' ? this.rateplanSelection.rp_amount : this.rateplanSelection.rp_amount * this.totalNights;
            const tax = await this.bookingService.calculateExclusiveTax({
                amount: net,
                property_id: calendar_data.property.id,
            });
            return net + (tax ?? 0);
        }
        let variation = this.rateplanSelection.selected_variation;
        if (this.guestInfo?.infant_nbr) {
            variation = this.variationService.getVariationBasedOnInfants({
                variations: this.rateplanSelection.ratePlan.variations,
                baseVariation: this.rateplanSelection.selected_variation,
                infants: this.guestInfo?.infant_nbr,
            });
        }
        return variation.discounted_gross_amount;
    }
    filterRooms() {
        const result = [];
        if (!calendar_data.is_frontdesk_enabled) {
            return result;
        }
        this.rateplanSelection.ratePlan?.assignable_units?.forEach(unit => {
            if (unit.Is_Fully_Available) {
                result.push({ name: unit.name, id: unit.pr_id });
            }
        });
        const filteredGuestsRoom = this.rateplanSelection.guest.filter((_, i) => i !== this.roomIndex).map(r => r.unit);
        const filteredResults = result.filter(r => !filteredGuestsRoom.includes(r.id.toString()));
        return this.bookingType === 'EDIT_BOOKING'
            ? [...filteredResults, this.rateplanSelection.roomtype.id === this.baseData?.roomtypeId ? this.baseData?.unit : null]
                .filter(f => !!f)
                .sort((a, b) => a.name.localeCompare(b.name))
            : filteredResults;
    }
    tooltipId = `room_info_tooltip_${v4()}`;
    render() {
        const filteredRoomList = this.filterRooms();
        const formattedVariation = this.variationService.formatVariationBasedOnInfants({
            baseVariation: this.rateplanSelection.selected_variation,
            infants: this.guestInfo.infant_nbr,
            variations: this.rateplanSelection.ratePlan.variations,
        });
        // const amount = await this.getAmount();
        return (h(Host, { key: 'bcd5c61fbeeb8fd8898e561926605cfb52acfa6d', class: "fd-application-info", "data-testid": `room_info_${this.rateplanSelection.ratePlan.id}` }, h("div", { key: '33a7f3f18e5e8bd5750314111da584ca9d797c8f', class: "fd-application-info__header" }, (this.bookingType === 'PLUS_BOOKING' || this.bookingType === 'ADD_ROOM' || this.bookingType === 'EDIT_BOOKING') && (h("span", { key: '83b33a588db40725aaf29c7f37336e8dc89c99bf', class: "fd-application-info__roomtype-title" }, this.rateplanSelection.roomtype.name)), h("div", { key: 'a9e5747ee145960539f0e86fb986df518fecafc5', class: "fd-application-info__details" }, h("div", { key: '633ce86dc403f5b9166d17b58737a1f6c2de9fa1', class: "fd-application-info__rateplan" }, h("p", { key: 'b96990f2e74e1a5f9430288ec6a4bac0f2c5603a', class: "fd-application-info__rateplan-name" }, this.rateplanSelection.ratePlan.short_name, this.rateplanSelection.ratePlan.is_non_refundable && h("span", { key: 'f32ab84fe03d26e666e9f79cd68a0fbc5bc9238b', class: "fd-application-info__non-refundable" }, "Non Refundable")), h("wa-tooltip", { key: 'f8c722eb561a72ff15f108efec2a6c55b92cf020', for: this.tooltipId }, h("span", { key: 'd2e31e75e12b1f273b3d38567bd4ec1938bb02c4', innerHTML: this.getTooltipMessages() })), h("wa-icon", { key: '89e6d53e96800377639b594ce1ea419c322f9aa7', name: "circle-info", id: this.tooltipId })), h("p", { key: '2a9cb636882b5ca77d34a9372020e526dc46d0e7', class: "fd-application-info__variation", innerHTML: formattedVariation })), h("p", { key: '89ab9e551c60ba40a9b8f24a745c4b86db754859', class: "fd-application-info__price" }, h("span", { key: '853f80cb6c0640045fc09586300e2597449fd00e', class: "ir-price" }, formatAmount(this.currency?.symbol, this.amount), "/", locales.entries.Lcz_Stay), h("p", { key: '79db05f4389d9125d35cc3dbf444972a55aab940', style: { margin: '0', padding: '0', fontSize: '0.75rem' } }, "Including taxes and fees"))), h("div", { key: '336e4ab041099d3592fc2c38066071080652a6c6', class: "fd-application-info__footer" }, h("div", { key: '616b333e06bbce15dcf50a7efd6926199d4db3bf', class: "fd-application-info__rateplan" }, h("p", { key: '9409ae6490a6543b3daf3e4c6ede7066778ba55b', class: "fd-application-info__rateplan-name" }, this.rateplanSelection.ratePlan.short_name), h("wa-tooltip", { key: '68de02a9e2c80460e00708303f6c305dd8d5b4e9', for: `mobile-${this.tooltipId}` }, h("span", { key: '08ec2104b5214586631f78f6ab3789bab3037b25', innerHTML: this.getTooltipMessages() })), h("wa-icon", { key: '1b31afd875426f4acfb2911b1aa3c5443227f790', name: "circle-info", id: `mobile-${this.tooltipId}` })), h("p", { key: '44d7a6efd89c344c79299e49cc4da2c4d6d6bbda', class: "fd-application-info__variation", innerHTML: formattedVariation })), h("div", { key: '5730303c861f7bba510a11e27344a7d2956d36e2', class: "fd-application-info__form" }, h("ir-validator", { key: 'eff0c1789fe113c3c417183e18228d90c050fe6f', value: this.guestInfo?.first_name, schema: GuestCredentials.shape.first_name }, h("ir-input", { key: '19f32037cc3e1157b52cfcaa34335cfd5e53e075', class: "fd-application-info__input",
            // aria-invalid={String(Boolean(this.isButtonPressed && this.guestInfo?.first_name === ''))}
            value: this.guestInfo?.first_name, defaultValue: this.guestInfo?.first_name, "data-testid": "guest_first_name", placeholder: locales.entries['Lcz_GuestFirstname'] ?? 'Guest first name', "onText-change": event => {
                const name = event.detail.trim();
                this.updateGuest({ first_name: name });
                if (booking_store.event_type.type === 'EDIT_BOOKING') {
                    modifyBookingStore('guest', {
                        ...booking_store.guest,
                        name,
                    });
                }
            } })), h("ir-validator", { key: 'a904192c8a7aab7bceb8e4ab21935c94355c2dac', value: this.guestInfo?.last_name, schema: GuestCredentials.shape.last_name }, h("ir-input", { key: '6d90c1f2e60fb1af1590d10ebe78d744888af1bc', class: "fd-application-info__input", type: "text",
            // aria-invalid={String(Boolean(this.isButtonPressed && this.guestInfo?.last_name === ''))}
            value: this.guestInfo?.last_name, defaultValue: this.guestInfo?.last_name, "data-testid": "guest_last_name", placeholder: locales.entries['Lcz_GuestLastname'] ?? 'Guest last name', "onText-change": event => {
                const name = event.detail.trim();
                this.updateGuest({ last_name: name });
                if (booking_store.event_type.type === 'EDIT_BOOKING') {
                    modifyBookingStore('guest', {
                        ...booking_store.guest,
                        name,
                    });
                }
            } })), calendar_data.is_frontdesk_enabled &&
            !isSingleUnit(this.rateplanSelection.roomtype.id) &&
            (this.bookingType === 'PLUS_BOOKING' || this.bookingType === 'ADD_ROOM' || this.bookingType === 'EDIT_BOOKING') && (h("wa-select", { key: 'e1906711e91e570b52748c611f5b9b27c68de64f', "with-clear": true, size: "small", class: "fd-application-info__select", placeholder: locales.entries.Lcz_Assignunits, "data-testid": "unit", value: this.guestInfo?.unit, defaultValue: this.guestInfo?.unit, onchange: event => this.updateGuest({
                unit: event.target.value,
            }) }, filteredRoomList.map(room => (h("wa-option", { value: room.id.toString(), selected: this.guestInfo?.unit === room.id.toString() }, room.name))))), this.rateplanSelection.roomtype.is_bed_configuration_enabled && (h("ir-validator", { key: '848e627c8dead4facf0338da73d0d5ce7dd3e532', value: this.guestInfo?.bed_preference, schema: z.string().nonempty() }, h("wa-select", { key: '45074d47c99891240600267aa89994b8e0651048', "with-clear": true, size: "small", class: "fd-application-info__select", placeholder: locales.entries.Lcz_BedConfiguration, "data-testid": "bed_configuration", value: this.guestInfo?.bed_preference, defaultValue: this.guestInfo?.bed_preference,
            // aria-invalid={String(Boolean(this.isButtonPressed && this.guestInfo?.bed_preference === ''))}
            onchange: event => this.updateGuest({
                bed_preference: event.target.value,
            }) }, this.bedPreferenceType.map(data => (h("wa-option", { value: data.CODE_NAME, selected: this.guestInfo?.bed_preference === data.CODE_NAME }, data.CODE_VALUE_EN)))))), h("p", { key: '555064af5113e577fec33792bfebb2eb42570273', class: "fd-application-info__price-inline" }, h("span", { key: '0b2a64fd5ca673f544d124526269e3af4930e79e', class: "ir-price" }, formatAmount(this.currency?.symbol, this.amount), "/", locales.entries.Lcz_Stay), h("p", { key: '9671a9761613c905f6eabfc43758c05a6b13541a', style: { margin: '0', padding: '0', fontSize: '0.75rem' } }, "Including taxes and fees"))), this.rateplanSelection.selected_variation.child_nbr > 0 && (h("div", { key: '4d08e38bf640c40e7755d90144060b708a7d3909', class: "fd-application-info__infant" }, h("p", { key: '6f8e9197c3a179d202bba387ca7896330e741e65', class: "fd-application-info__infant-label" }, "Any of the children below 3 years?"), h("wa-select", { key: '0ac1d59f3e7bc567be71f50aa8926beeabba0e3a', size: "small", class: "fd-application-info__select fd-application-info__select--inline", placeholder: locales.entries['No'] || 'No', value: this.guestInfo?.infant_nbr?.toString(), defaultValue: this.guestInfo?.infant_nbr?.toString(), onchange: event => {
                this.updateGuest({
                    infant_nbr: Number(event.target.value),
                });
                if (this.rateplanSelection.is_amount_modified) {
                    return;
                }
                this.recalculateTotalCost.emit();
            }, withClear: true }, Array.from({ length: this.rateplanSelection.selected_variation.child_nbr }, (_, i) => i + 1).map(item => (h("wa-option", { value: item.toString(), selected: this.guestInfo?.infant_nbr === item }, item))))))));
    }
    static get watchers() { return {
        "guestInfo": ["handleGuestInfoChange"]
    }; }
    static get style() { return IglApplicationInfoStyle0; }
}, [2, "igl-application-info", {
        "rateplanSelection": [16],
        "guestInfo": [16],
        "currency": [16],
        "bedPreferenceType": [16],
        "bookingType": [1, "booking-type"],
        "roomIndex": [2, "room-index"],
        "totalNights": [2, "total-nights"],
        "baseData": [16],
        "autoFillGuest": [4, "auto-fill-guest"],
        "isButtonPressed": [32],
        "amount": [32]
    }, [[16, "buttonClicked", "handleButtonClicked"]], {
        "guestInfo": ["handleGuestInfoChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["igl-application-info", "ir-input", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-application-info":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglApplicationInfo);
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

export { IglApplicationInfo as I, defineCustomElement as d };

//# sourceMappingURL=igl-application-info2.js.map