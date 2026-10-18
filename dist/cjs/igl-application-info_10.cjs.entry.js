'use strict';

var index = require('./index-IDeZZwEK.js');
var booking_service = require('./booking.service-BdID4BlA.js');
var calendarData = require('./calendar-data-ShS6b-Ns.js');
var moment = require('./moment-CdViwxPQ.js');
require('./booking.dto-CUSvGTvD.js');
var irDate = require('./ir-date-CbkOKs2C.js');
require('./locale-scope-Cch-vf1R.js');
var t = require('./t-CqJPQrfm.js');
var number = require('./number-xBpNWk3H.js');
var types = require('./types-CTNoTDNu.js');
var utils = require('./utils-PciJI6G4.js');
var v4 = require('./v4-_2BfiRUa.js');
var types$1 = require('./types-BVJQZ50e.js');
var ClickOutside = require('./ClickOutside-BkC5Uhki.js');
var booking = require('./booking-DhSfYcY7.js');
var index$1 = require('./index-DtKMs5Q4.js');
var masks = require('./masks-DJsCZmbG.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./IBooking-hDE_y33g.js');
require('./utils-ZKsQb8eV.js');
require('./calendar-dates-BxDGM1ix.js');
require('./commonSchemas-D4iFLV5-.js');
require('./type-Bj2x9EWc.js');
require('./language-observer-DKp37LIu.js');
require('./functions-CaNAUyCw.js');

const iglApplicationInfoCss = () => `.sc-igl-application-info-h{color:var(--wa-color-text-normal);font-family:var(--wa-font-family-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;text-align:start;display:flex;flex-direction:column;gap:0.5rem;margin-top:1.5rem}.fd-application-info__header.sc-igl-application-info{display:flex;gap:1rem;align-items:flex-start;justify-content:space-between}.fd-application-info__variation.sc-igl-application-info{padding:0;margin:0}.fd-application-info__form.sc-igl-application-info{display:flex;flex-direction:column;gap:1rem}.fd-application-info__price-inline.sc-igl-application-info,.fd-application-info__details.sc-igl-application-info{display:none}.fd-application-info__footer.sc-igl-application-info,.fd-application-info__rateplan.sc-igl-application-info{display:flex;align-items:center;gap:1rem}.fd-application-info__footer.sc-igl-application-info{justify-content:space-between}.fd-application-info__rateplan-name.sc-igl-application-info{font-size:var(--wa-font-size-m);margin:0;padding:0}.fd-application-info__non-refundable.sc-igl-application-info{color:var(--wa-color-success-fill-loud);margin-inline-start:0.5rem}.fd-application-info__roomtype-title.sc-igl-application-info{font-size:var(--wa-font-size-l)}.fd-application-info__infant.sc-igl-application-info{display:flex;flex-direction:column;gap:0.875rem}.fd-application-info__infant-label.sc-igl-application-info{margin:0;padding:0;color:var(--wa-color-danger-fill-loud)}.fd-application-info__price.sc-igl-application-info{margin:0;padding:0;display:flex;flex-direction:column}@media (min-width: 768px){.fd-application-info__infant.sc-igl-application-info{flex-direction:row;align-items:center}.fd-application-info__infant.sc-igl-application-info .fd-application-info__select.sc-igl-application-info{max-width:100px}.fd-application-info__roomtype-title.sc-igl-application-info{font-size:var(--wa-font-size-m)}.fd-application-info__header.sc-igl-application-info{justify-content:flex-start;align-items:center;gap:0.5rem}.fd-application-info__form.sc-igl-application-info{flex-direction:row}.fd-application-info__price-inline.sc-igl-application-info{display:flex;flex-direction:column;padding:0;margin:0;align-items:flex-end}.fd-application-info__details.sc-igl-application-info{display:flex;align-items:center;gap:0.5rem}.fd-application-info__price.sc-igl-application-info,.fd-application-info__footer.sc-igl-application-info{display:none}}`;

const IglApplicationInfo = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.recalculateTotalCost = index.createEvent(this, "recalculateTotalCost");
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
    variationService = new booking_service.VariationService();
    bookingService = new booking_service.BookingService();
    shouldSyncBookedByFirstName = !booking_service.booking_store.bookedByGuest?.firstName;
    shouldSyncBookedByLastName = !booking_service.booking_store.bookedByGuest?.lastName;
    async componentWillLoad() {
        if (calendarData.isSingleUnit(this.rateplanSelection.roomtype.id)) {
            const filteredRooms = this.filterRooms();
            if (filteredRooms.length > 0)
                this.updateGuest({ unit: filteredRooms[0]?.id?.toString() });
        }
        this.amount = await this.getAmount();
    }
    updateGuest(params) {
        const roomTypeId = this.rateplanSelection.roomtype.id;
        const ratePlanId = this.rateplanSelection.ratePlan.id;
        let prevGuest = [...(this.rateplanSelection.guest ?? [])];
        prevGuest[this.roomIndex] = {
            ...prevGuest[this.roomIndex],
            ...params,
        };
        booking_service.updateRoomGuest({
            ratePlanSelection: this.rateplanSelection,
            ratePlanId,
            roomTypeId,
            guest: prevGuest,
        });
        const shouldAutoFill = this.autoFillGuest && !booking_service.booking_store.bookedByGuestManuallyEdited;
        if (!shouldAutoFill) {
            if (booking_service.booking_store.bookedByGuestManuallyEdited) {
                this.shouldSyncBookedByFirstName = false;
                this.shouldSyncBookedByLastName = false;
            }
            return;
        }
        if (typeof params.first_name === 'string' && this.shouldSyncBookedByFirstName) {
            booking_service.updateBookedByGuest({
                firstName: params.first_name,
            });
        }
        if (typeof params.last_name === 'string' && this.shouldSyncBookedByLastName) {
            booking_service.updateBookedByGuest({
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
            tooltip += `<b><u>${t.t('Lcz_CancellationLabel', { fallback: 'Cancellation:' })}</u></b> ${cancellationPolicy}<br/>`;
        }
        if (guaranteePolicy) {
            tooltip += `<b><u>${t.t('Lcz_GuaranteeLabel', { fallback: 'Guarantee:' })}</u></b> ${guaranteePolicy}`;
        }
        return tooltip || undefined;
    }
    async getAmount() {
        if (this.rateplanSelection.is_amount_modified) {
            const net = this.rateplanSelection.view_mode === '001' ? this.rateplanSelection.rp_amount : this.rateplanSelection.rp_amount * this.totalNights;
            const tax = await this.bookingService.calculateExclusiveTax({
                amount: net,
                property_id: calendarData.calendar_data.property.id,
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
        return variation?.discounted_gross_amount ?? 0;
    }
    filterRooms() {
        const result = [];
        if (!calendarData.calendar_data.is_frontdesk_enabled) {
            return result;
        }
        this.rateplanSelection.ratePlan?.assignable_units?.forEach(unit => {
            if (unit.Is_Fully_Available) {
                result.push({ name: unit.name, id: unit.pr_id });
            }
        });
        // Exclude units already assigned to any other room of the same room type, across all its rate plans
        const roomTypeId = this.rateplanSelection.roomtype.id;
        const currentRatePlanId = this.rateplanSelection.ratePlan.id;
        const takenUnits = [];
        Object.entries(booking_service.booking_store.ratePlanSelections[roomTypeId] ?? {}).forEach(([ratePlanId, selection]) => {
            (selection.guest ?? []).forEach((guest, i) => {
                if (i >= selection.reserved || (Number(ratePlanId) === currentRatePlanId && i === this.roomIndex)) {
                    return;
                }
                if (guest?.unit) {
                    takenUnits.push(guest.unit.toString());
                }
            });
        });
        const filteredResults = result.filter(r => !takenUnits.includes(r.id.toString()));
        return this.bookingType === 'EDIT_BOOKING'
            ? [...filteredResults, this.rateplanSelection.roomtype.id === this.baseData?.roomtypeId ? this.baseData?.unit : null]
                .filter(f => !!f)
                .sort((a, b) => a.name.localeCompare(b.name))
            : filteredResults;
    }
    tooltipId = `room_info_tooltip_${v4.v4()}`;
    render() {
        const filteredRoomList = this.filterRooms();
        const formattedVariation = this.variationService.formatVariationBasedOnInfants({
            baseVariation: this.rateplanSelection.selected_variation,
            infants: this.guestInfo?.infant_nbr,
            variations: this.rateplanSelection.ratePlan.variations,
        });
        // const amount = await this.getAmount();
        return (index.h(index.Host, { key: '2b1ab0b6bd3c7e7046d6bbdea16a5798b51d41f6', class: "fd-application-info", "data-testid": `room_info_${this.rateplanSelection.ratePlan.id}` }, index.h("div", { key: 'af9a2b466dc7a92fac6c19399a0ad8925a5600cb', class: "fd-application-info__header" }, (this.bookingType === 'PLUS_BOOKING' || this.bookingType === 'ADD_ROOM' || this.bookingType === 'EDIT_BOOKING') && (index.h("span", { key: '9161824385d2d0a07378c67eb353eb4533644257', class: "fd-application-info__roomtype-title" }, this.rateplanSelection.roomtype.name)), index.h("div", { key: '4fb53d7f845f5eef7afaf3b08f611393d17c6526', class: "fd-application-info__details" }, index.h("div", { key: 'b3749c7675186d39b68ac321b7177e3696e9301d', class: "fd-application-info__rateplan" }, index.h("p", { key: '2f4c69f10f32fd0a009275f469b9780d47f06da7', class: "fd-application-info__rateplan-name" }, this.rateplanSelection.ratePlan.short_name, this.rateplanSelection.ratePlan.is_non_refundable && (index.h("span", { key: 'ba2f107eaec8191091e03ed1b4f4004d869b6f6f', class: "fd-application-info__non-refundable" }, t.t('Lcz_NonRefundable', { fallback: 'Non Refundable' })))), index.h("wa-tooltip", { key: '69ed1d23dc801c9ee3d304f2254f04c3267e3d78', for: this.tooltipId }, index.h("span", { key: '80a26f88d2cc4b41ed7fb3121e7c9d7f258a6d01', innerHTML: this.getTooltipMessages() })), index.h("wa-icon", { key: '289bd37ae8703b101546c101c530634eb051cf97', name: "circle-info", id: this.tooltipId })), index.h("p", { key: '21747ee3b88b18271eb0330cb5018636f1293e96', class: "fd-application-info__variation", innerHTML: formattedVariation })), index.h("p", { key: 'dd4f4a4072012a6f4b17e174bd3852ec99c64550', class: "fd-application-info__price" }, index.h("span", { key: '9525557f739b60816f20e9494c9f616afa41a07a', class: "ir-price" }, number.formatAmount(this.currency?.symbol, this.amount), "/", t.t('Lcz_Stay', { fallback: 'Stay' })), index.h("p", { key: '115fed319e335972985709198228e216bf97adfe', style: { margin: '0', padding: '0', fontSize: '0.75rem' } }, t.t('Lcz_IncludingTaxesAndFees', { fallback: 'Including taxes and fees' })))), index.h("div", { key: 'aeffeccd2dc95979df19dd341424374cd7e78cd6', class: "fd-application-info__footer" }, index.h("div", { key: '5aa00c22af9df6a380846572fb923ef0396b0146', class: "fd-application-info__rateplan" }, index.h("p", { key: '7570a5151c0d655401c742e0b75757897bb40a3d', class: "fd-application-info__rateplan-name" }, this.rateplanSelection.ratePlan.short_name), index.h("wa-tooltip", { key: '7b45a4eb2051d269e705ab020c31bc1c16b631f9', for: `mobile-${this.tooltipId}` }, index.h("span", { key: '7b375fb9995e0413df58360f28f7633cf76bfb56', innerHTML: this.getTooltipMessages() })), index.h("wa-icon", { key: '7310521b2f8b294d9d7a2736fdc80be88bdf3baa', name: "circle-info", id: `mobile-${this.tooltipId}` })), index.h("p", { key: 'a5a1f447b701e88ee027bc21bac02a89a9207403', class: "fd-application-info__variation", innerHTML: formattedVariation })), index.h("div", { key: '52df6a4b33e6e47af540e2cd1db83098634b1659', class: "fd-application-info__form" }, index.h("ir-validator", { key: 'ff42baab745cf3d0070e9e1e4671003846832ca8', value: this.guestInfo?.first_name, schema: types.GuestCredentials.shape.first_name }, index.h("ir-input", { key: '02d5fce0be4a504f380a2f794e59886e320e322c', class: "fd-application-info__input",
            // aria-invalid={String(Boolean(this.isButtonPressed && this.guestInfo?.first_name === ''))}
            value: this.guestInfo?.first_name, defaultValue: this.guestInfo?.first_name, "data-testid": "guest_first_name", placeholder: t.t('Lcz_GuestFirstName', { fallback: 'Guest first name' }), "onText-change": event => {
                const name = event.detail.trim();
                this.updateGuest({ first_name: name });
                if (booking_service.booking_store.event_type.type === 'EDIT_BOOKING') {
                    booking_service.modifyBookingStore('guest', {
                        ...booking_service.booking_store.guest,
                        name,
                    });
                }
            } })), index.h("ir-validator", { key: '677fae057afe1c6c2025ed89616b932804b4878c', value: this.guestInfo?.last_name, schema: types.GuestCredentials.shape.last_name }, index.h("ir-input", { key: 'e6f5e1fa21a101e1cc8e50b0e80b0427c21abebd', class: "fd-application-info__input", type: "text",
            // aria-invalid={String(Boolean(this.isButtonPressed && this.guestInfo?.last_name === ''))}
            value: this.guestInfo?.last_name, defaultValue: this.guestInfo?.last_name, "data-testid": "guest_last_name", placeholder: t.t('Lcz_GuestLastName', { fallback: 'Guest last name' }), "onText-change": event => {
                const name = event.detail.trim();
                this.updateGuest({ last_name: name });
                if (booking_service.booking_store.event_type.type === 'EDIT_BOOKING') {
                    booking_service.modifyBookingStore('guest', {
                        ...booking_service.booking_store.guest,
                        name,
                    });
                }
            } })), calendarData.calendar_data.is_frontdesk_enabled &&
            !calendarData.isSingleUnit(this.rateplanSelection.roomtype.id) &&
            (this.bookingType === 'PLUS_BOOKING' || this.bookingType === 'ADD_ROOM' || this.bookingType === 'EDIT_BOOKING') && (index.h("wa-select", { key: 'bbf9378a84cdf3108f9b649749225402966ce8d0', "with-clear": true, size: "s", class: "fd-application-info__select", placeholder: t.t('Lcz_AssignUnit', { fallback: 'Assign unit' }), "data-testid": "unit", value: this.guestInfo?.unit, defaultValue: this.guestInfo?.unit, onchange: event => this.updateGuest({
                unit: event.target.value,
            }) }, filteredRoomList.map(room => (index.h("wa-option", { value: room.id.toString(), selected: this.guestInfo?.unit === room.id.toString() }, room.name))))), this.rateplanSelection.roomtype.is_bed_configuration_enabled && (index.h("ir-validator", { key: 'f2d4bf5888d24b0e562997f83ace154c8ae8629c', value: this.guestInfo?.bed_preference, schema: types$1.stringType().nonempty() }, index.h("wa-select", { key: 'df9f48a043b0aee4d594971dcea8aca5a4fd5ee2', "with-clear": true, size: "s", class: "fd-application-info__select", placeholder: t.t('Lcz_BedConfiguration', { fallback: 'Bed configuration...' }), "data-testid": "bed_configuration", value: this.guestInfo?.bed_preference, defaultValue: this.guestInfo?.bed_preference,
            // aria-invalid={String(Boolean(this.isButtonPressed && this.guestInfo?.bed_preference === ''))}
            onchange: event => this.updateGuest({
                bed_preference: event.target.value,
            }) }, this.bedPreferenceType.map(data => (index.h("wa-option", { value: data.CODE_NAME, selected: this.guestInfo?.bed_preference === data.CODE_NAME }, utils.getSetupEntryLabel(data))))))), index.h("p", { key: '65970a2d516678905130df811d9ac921f655b587', class: "fd-application-info__price-inline" }, index.h("span", { key: '987f5af0988ccacfe5a4d00003bfd08528da2d5a', class: "ir-price" }, number.formatAmount(this.currency?.symbol, this.amount), "/", t.t('Lcz_Stay', { fallback: 'Stay' })), index.h("p", { key: '1465444a1f152ba6b741f55a2512dc9902ee9e2d', style: { margin: '0', padding: '0', fontSize: '0.75rem' } }, t.t('Lcz_IncludingTaxesAndFees', { fallback: 'Including taxes and fees' })))), this.rateplanSelection.selected_variation?.child_nbr > 0 && (index.h("div", { key: 'd6d4a6d6bf8d989cbb382e4a99457c516c64a2d2', class: "fd-application-info__infant" }, index.h("p", { key: 'a0ad43bd6ba2a6c3e9d6bd27fa3e7e8c8b3c9ab1', class: "fd-application-info__infant-label" }, t.t('Lcz_AnyChildrenBelow3Years', { fallback: 'Any of the children below 3 years?' })), index.h("wa-select", { key: '838049b7ad8a42312588a4c51545f0cf94c949a6', size: "s", class: "fd-application-info__select fd-application-info__select--inline", placeholder: t.t('Lcz_NO', { fallback: 'No' }), value: this.guestInfo?.infant_nbr?.toString(), defaultValue: this.guestInfo?.infant_nbr?.toString(), onchange: event => {
                this.updateGuest({
                    infant_nbr: Number(event.target.value),
                });
                if (this.rateplanSelection.is_amount_modified) {
                    return;
                }
                this.recalculateTotalCost.emit();
            }, withClear: true }, Array.from({ length: this.rateplanSelection.selected_variation.child_nbr }, (_, i) => i + 1).map(item => (index.h("wa-option", { value: item.toString(), selected: this.guestInfo?.infant_nbr === item }, item))))))));
    }
    static get watchers() { return {
        "guestInfo": [{
                "handleGuestInfoChange": 0
            }]
    }; }
};
IglApplicationInfo.style = iglApplicationInfoCss();

const iglRatePlanCss = () => `.sc-igl-rate-plan-h{display:block;margin-bottom:1rem;color:var(--wa-color-text-normal)}.rate-plan.sc-igl-rate-plan{display:flex;flex-direction:column;min-height:32px;margin-top:0.25rem;gap:0.5rem}.rate-plan.--current.sc-igl-rate-plan{background-color:var(--wa-color-brand-fill-quiet);border-radius:var(--wa-border-radius-m);position:relative}.rate-plan.rate-plan.--current.sc-igl-rate-plan::before{border-radius:var(--wa-border-radius-m);content:'';position:absolute;inset:-0.5rem;z-index:-1;background-color:var(--wa-color-brand-fill-quiet)}.rate-plan--unavailable.sc-igl-rate-plan{flex-direction:row;align-items:center;justify-content:space-between}.rateplan-name-container.sc-igl-rate-plan{display:flex;align-items:center;gap:0.5rem;margin:0;padding:0}.rateplan-name-container.sc-igl-rate-plan p.sc-igl-rate-plan{margin:0}.rateplan-container.sc-igl-rate-plan{display:flex;flex-direction:column;gap:0.75rem;width:100%;margin-top:0.5rem}.variation-select.sc-igl-rate-plan{width:100%;max-width:300px;flex:1}.rp-select.sc-igl-rate-plan:disabled{background-color:#eceff1;color:#7a7a7a}.rateplan-config.sc-igl-rate-plan{display:flex;flex-direction:column;gap:0.75rem;width:100%}.rate-total-night-view.sc-igl-rate-plan{display:flex;flex:1;gap:0;align-items:stretch}.rateplan-price-input.sc-igl-rate-plan{flex:1;width:100%}.total-nights-container.sc-igl-rate-plan{width:max-content}.rp-select--nights.sc-igl-rate-plan{border-start-start-radius:0;border-end-start-radius:0}.inventory-select.sc-igl-rate-plan{width:100%;max-width:200px}.edit-booking-radio.sc-igl-rate-plan{display:none}.mobile-only.sc-igl-rate-plan{width:100%;display:block}.desktop-only.sc-igl-rate-plan{display:none}.rate-plan-unavailable-text.sc-igl-rate-plan{margin:0;color:var(--wa-color-danger-fill-loud)}.rateplan-name-container.sc-igl-rate-plan{font-family:var(--wa-font-family-heading);font-weight:400;line-height:var(--wa-line-height-condensed);text-wrap:balance}.non-ref-span.sc-igl-rate-plan{font-size:12px;padding-inline:0.25rem;color:var(--wa-color-success-fill-loud);font-size:0.875rem;font-weight:400;line-height:var(--wa-line-height-condensed);text-wrap:balance}.rateplan-name.sc-igl-rate-plan{font-family:var(--wa-font-family-heading);font-weight:400;line-height:var(--wa-line-height-condensed);text-wrap:balance}.custom-text-span.sc-igl-rate-plan{color:var(--wa-color-text-quiet);font-size:0.875rem;font-weight:400;line-height:var(--wa-line-height-condensed);text-wrap:balance}.nightBorder.sc-igl-rate-plan{border-inline-start-width:0;border-start-end-radius:3px !important;border-end-end-radius:3px !important}.fd-rateplan__price-input.sc-igl-rate-plan::part(base),.fd-rateplan__price-input.sc-igl-rate-plan [part~="base"]{border-start-end-radius:0;border-end-end-radius:0}.fd-rateplan__price-input.sc-igl-rate-plan{flex:1 1 0%;z-index:1}.fd-rateplan__nights-select.sc-igl-rate-plan::part(combobox),.fd-rateplan__nights-select.sc-igl-rate-plan [part~="combobox"]{border-start-start-radius:0;border-end-start-radius:0;border-inline-start-width:0}.fd-rateplan__nights-select.sc-igl-rate-plan{min-width:100px}.fd-rateplan__inventory-select.sc-igl-rate-plan{min-width:60px}.fd-rateplan__nights-select[open].sc-igl-rate-plan,.fd-rateplan__nights-select.sc-igl-rate-plan:focus-visible,.fd-rateplan__nights-select.sc-igl-rate-plan:focus-within{z-index:2}@media (min-width: 768px){.booking-btn.sc-igl-rate-plan{width:100%}.mobile-only.sc-igl-rate-plan{display:none}.desktop-only.sc-igl-rate-plan{display:block}.edit-booking-radio.sc-igl-rate-plan{display:block;margin-inline-start:0.75rem}.rateplan-container.sc-igl-rate-plan{flex-direction:row;align-items:center;justify-content:flex-end}.rate-plan.rate-plan.--current.sc-igl-rate-plan::before{inset-block-start:0}.rateplan-config.sc-igl-rate-plan{flex-direction:row;align-items:center;justify-content:space-between}.rateplan__booking-btn.sc-igl-rate-plan{width:95px}}@media (min-width: 991px){.sc-igl-rate-plan-h{margin:0}.rateplan-name-container.sc-igl-rate-plan{margin-bottom:0 !important}.rateplan-price-input.sc-igl-rate-plan{max-width:250px}.rate-plan--available.sc-igl-rate-plan{flex-direction:row;align-items:center;justify-content:space-between}}@media only screen and (min-width: 991px) and (max-width: 1300px){.rateplan-name-container.sc-igl-rate-plan{width:40%}.rate-plan.--current.sc-igl-rate-plan .rateplan-name-container.sc-igl-rate-plan{margin-top:0.5rem}.price-amount.sc-igl-rate-plan{max-width:150px !important}}@media (min-width: 1024px){.booking-btn.sc-igl-rate-plan{width:100px}.rate-plan.--current.sc-igl-rate-plan .rateplan-name-container.sc-igl-rate-plan{margin-top:0.5rem}.fd-rateplan__price-input.sc-igl-rate-plan{width:170px;max-width:170px}.fd-rateplan__nights-select.sc-igl-rate-plan{width:100px;max-width:100px}.rate-total-night-view.sc-igl-rate-plan{margin:0;padding:0;box-sizing:border-box;flex:0}.fd-rateplan__inventory-select.sc-igl-rate-plan{width:100px}.rateplan-config.sc-igl-rate-plan{width:fit-content}}@media (min-width: 1200px){.rateplan-name-container.sc-igl-rate-plan{width:40%;margin-top:0}}`;

const IglRatePlan = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.buttonClicked = index.createEvent(this, "buttonClicked");
        this.bookingStepChange = index.createEvent(this, "bookingStepChange");
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
    unavailableRatePlanIds = new Set();
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
        const currentSelections = booking_service.booking_store.ratePlanSelections;
        booking_service.booking_store.ratePlanSelections = {
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
            booking_service.reserveRooms({
                roomTypeId: this.roomTypeId,
                ratePlanId: this.ratePlan.id,
                rooms: Number(value),
            });
        }
    }
    // Navigate to the next page for booking
    bookProperty() {
        if (this.bookingType === 'BAR_BOOKING') {
            booking_service.resetReserved();
        }
        this.reserveRoom();
        this.bookingStepChange.emit({ direction: 'next' });
        this.buttonClicked.emit({ key: 'next' });
    }
    reserveRoom() {
        booking_service.reserveRooms({
            roomTypeId: this.roomTypeId,
            ratePlanId: this.ratePlan.id,
            rooms: 1,
            guest: [
                {
                    last_name: booking_service.booking_store.guest?.last_name,
                    first_name: booking_service.booking_store.guest?.first_name,
                    unit: this.roomTypeId === booking_service.booking_store.guest?.roomtype_id ? booking_service.booking_store.guest?.unit : null,
                    bed_preference: this.visibleInventory.roomtype.is_bed_configuration_enabled ? booking_service.booking_store.guest?.bed_preference : null,
                    infant_nbr: this.visibleInventory.selected_variation?.child_nbr > 0 ? booking_service.booking_store.guest?.infant_nbr : null,
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
        const adults = `${number.formatCount(variation.adult_nbr)} ${variation.adult_nbr === 1 ? t.t('Lcz_Adult', { fallback: 'adult' })?.toLowerCase() : t.t('Lcz_Adults', { fallback: 'adults' })?.toLowerCase()}`;
        const children = variation.child_nbr > 0
            ? `${number.formatCount(variation.child_nbr)} ${variation.child_nbr > 1 ? t.t('Lcz_Children', { fallback: 'Children' })?.toLowerCase() : t.t('Lcz_Child', { fallback: 'Child' })?.toLowerCase()}`
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
            tooltip += `<b><u>${t.t('Lcz_CancellationLabel', { fallback: 'Cancellation:' })}</u></b> ${cancellationPolicy}<br/>`;
        }
        if (guaranteePolicy) {
            tooltip += `<b><u>${t.t('Lcz_GuaranteeLabel', { fallback: 'Guarantee:' })}</u></b> ${guaranteePolicy}`;
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
        booking_service.updateRoomParams({
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
        return (index.h(index.Host, { key: 'd6f6aafce6504eee75323d81c2d989ca865cb60f', "data-testid": `rp-${this.ratePlan.id}` }, index.h("div", { key: '3e43bd9a9b3bcc366e1d102fb7195a28e1f98d98', class: `rate-plan ${visibleInventory?.reserved === 1 && bookingType === 'EDIT_BOOKING' ? '--current' : ''} ${isAvailableToBook ? 'rate-plan--available' : 'rate-plan--unavailable'}` }, index.h("div", { key: '02ebcaf3556f3fc40ccc2f67f57597a7d2ff5a66', "data-testid": 'rp_name', class: "rateplan-name-container" }, index.h("div", { key: '16ab21aa62929a0958f2344cb22c41c72e54b584' }, bookingType === 'BAR_BOOKING' ? (index.h(index.Fragment, null, index.h("span", { class: 'rateplan-name' }, ratePlan.short_name, " "), ratePlan.is_non_refundable && index.h("span", { class: "non-ref-span" }, t.t('Lcz_NonRefundable', { fallback: 'Non Refundable' })))) : (index.h(index.Fragment, null, index.h("span", { class: 'rateplan-name' }, ratePlan.short_name, " "), ratePlan.is_non_refundable && index.h("span", { class: "non-ref-span" }, t.t('Lcz_NonRefundable', { fallback: 'Non Refundable' })))), ratePlan.custom_text && index.h("span", { key: 'd17566dfc81376d6edbdb2f414b6c71326497ff6', class: "custom-text-span" }, ratePlan.custom_text)), isAvailableToBook && (index.h(index.Fragment, { key: '33251bf06f5eaa13e98951c3fae8cd70237d6396' }, index.h("wa-tooltip", { key: 'b600789ef04b495b030067e000201a9eef01766d', for: `rateplan-${this.ratePlan.id}` }, index.h("span", { key: 'dcf75ba942cafca45603f69d41c07207dbb1856f', innerHTML: this.getTooltipMessages() })), index.h("wa-icon", { key: '194a14f030c669b4c4fd3407c016247dfd6903fe', name: "circle-info", id: `rateplan-${this.ratePlan.id}` }))), this.unavailableRatePlanIds.has(this.ratePlan.id) && (index.h(index.Fragment, { key: 'a9d4f597e1292e132a880848afb342044b130d7b' }, index.h("wa-tooltip", { key: 'dc05d8ad539aa349096c9fdec5a6ed298169948d', for: `rateplan-warning-${this.ratePlan.id}` }, t.t('Lcz_ForcingStopSaleRestriction', { fallback: 'You are forcing a stop-sale restriction.' })), index.h("wa-icon", { key: '335d49e4d8f7b17a1e1c1d2822a41d94dabc9d26', name: "triangle-exclamation", style: { color: 'var(--wa-color-warning-fill-loud)' }, id: `rateplan-warning-${this.ratePlan.id}` })))), isAvailableToBook ? (index.h("div", { class: "rateplan-container" }, index.h("wa-select", { size: "s", disabled: disableForm, "data-testid": "adult-child-offering", onchange: evt => this.handleDataChange('adult_child_offering', evt), "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, value: this.formatVariation(selectedVariation), defaultValue: this.formatVariation(selectedVariation) }, formattedVariations?.map(variation => (index.h("wa-option", { value: variation, selected: this.formatVariation(selectedVariation) === variation }, variation)))), index.h("div", { class: "rateplan-config" }, index.h("div", { class: "rate-total-night-view" }, index.h("ir-input", { disabled: disableForm, class: "fd-rateplan__price-input", "onText-change": e => this.updateRateplanSelection({
                is_amount_modified: true,
                rp_amount: Number(e.detail),
            }), id: `rate-input-${this.ratePlan.id}`, "aria-label": t.t('Lcz_RatePlanRateAria', { fallback: '%1 %2 rate', params: [this.visibleInventory?.roomtype?.name, this.ratePlan.short_name] }), "aria-describedby": `${this.ratePlan.short_name}'s rate`, value: this.rate, defaultValue: this.rate, placeholder: t.t('Lcz_Rate', { fallback: 'Rate' }), mask: "price" }, index.h("span", { slot: "start" }, currency.symbol)), index.h("wa-select", { "data-testid": 'nigh_stay_select', disabled: disableForm, "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, size: "s", class: "fd-rateplan__nights-select", id: v4.v4(), onchange: evt => this.updateRateplanSelection({
                view_mode: evt.target.value,
            }), value: visibleInventory?.view_mode, defaultValue: visibleInventory?.view_mode }, ratePricingMode.map(data => (index.h("wa-option", { value: data.CODE_NAME, selected: visibleInventory?.view_mode === data.CODE_NAME }, utils.getSetupEntryLabel(data)))))), (bookingType === 'PLUS_BOOKING' || bookingType === 'ADD_ROOM') && (index.h("wa-select", { "data-testid": 'inventory_select', disabled: visibleInventory.visibleInventory === 0, class: "fd-rateplan__inventory-select", onchange: evt => this.handleDataChange('totalRooms', evt), value: visibleInventory.reserved?.toString(), defaultValue: visibleInventory.reserved?.toString(), size: "s", "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            } }, Array.from({ length: (visibleInventory.visibleInventory || 0) + 1 }, (_, i) => i).map(i => (index.h("wa-option", { value: i?.toString(), selected: visibleInventory.reserved === i }, i)))))), bookingType === 'EDIT_BOOKING' && (index.h(index.Fragment, null, index.h("ir-custom-button", { variant: "brand", "data-testid": "book_property", disabled: disableForm, type: "button", appearance: visibleInventory.reserved === 1 ? 'accent' : 'outlined', class: "rateplan__booking-btn", onClickHandler: () => {
                booking_service.resetReserved();
                this.reserveRoom();
                this.bookProperty();
            } }, t.t('Lcz_Select', { fallback: 'Select' })))), (bookingType === 'BAR_BOOKING' || bookingType === 'SPLIT_BOOKING') && (index.h("ir-custom-button", { "data-testid": "book", disabled: disableForm || (bookingType === 'SPLIT_BOOKING' && this.isBookDisabled), type: "button", class: "booking-btn", variant: "brand", onClickHandler: () => this.bookProperty() }, t.t('Lcz_Book', { fallback: 'Book' }))))) : (index.h("p", { class: "rate-plan-unavailable-text" }, t.tRaw('Lcz_NotAvailable', { fallback: 'Not available' }))))));
    }
};
IglRatePlan.style = iglRatePlanCss();

const irBookingStatusTagCss = () => `.sc-ir-booking-status-tag-h{display:block}`;

const IrBookingStatusTag = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    status;
    isRequestToCancel;
    badgeVariant = {
        '001': 'warning',
        '002': 'success',
        '003': 'danger',
        '004': 'danger',
    };
    render() {
        return (index.h("wa-badge", { key: '00bf360fa3c0aa7fdf78f7f9d50b21352985e8db', style: { padding: '0.375em 0.625em', letterSpacing: '0.03rem' }, variant: this.badgeVariant[this.isRequestToCancel ? '003' : this.status.code] }, this.status.description.toUpperCase()));
    }
};
IrBookingStatusTag.style = irBookingStatusTagCss();

const irCountryPickerCss = () => `.sc-ir-country-picker-h{display:block;margin:0;padding:0;box-sizing:border-box}.combobox-menu.sc-ir-country-picker{max-height:200px;overflow:auto}.ir-ps-1.sc-ir-country-picker{padding-inline-start:0.25rem}`;

const IrCountryPicker = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.countryChange = index.createEvent(this, "countryChange");
    }
    placeholder;
    /** The input's size. */
    size;
    variant = 'default';
    /**
     * List of countries to display in the dropdown.
     */
    countries = [];
    /**
     * Currently selected country.
     */
    country;
    /**
     * Whether to show an error state on the input.
     */
    error;
    /**
     * The property-associated country, shown separately if relevant.
     */
    propertyCountry;
    /**
     * The label to display for the input.
     */
    label;
    /**
     * Test ID for automated testing.
     */
    testId;
    /**
     * Whether to automatically validate the input.
     */
    autoValidate = false;
    /**
     * The current input value typed by the user.
     */
    inputValue;
    /**
     * The currently selected country object.
     */
    selectedCountry;
    /**
     * Filtered list of countries based on the user's input.
     */
    filteredCountries = [];
    /**
     * Whether the input is currently being used for searching.
     */
    searching = false;
    /**
     * Event emitted when a country is selected.
     */
    countryChange;
    debounceTimeout;
    componentWillLoad() {
        this.filteredCountries = [...this.countries];
        if (this.country) {
            this.inputValue = this.country.name;
            this.selectedCountry = this.country;
        }
    }
    handleCountryChange(newCountry, oldCountry) {
        if (newCountry?.id !== oldCountry?.id) {
            this.inputValue = this.country?.name;
            this.selectedCountry = newCountry;
        }
    }
    /**
     * Filters the list of countries based on the current input.
     */
    filterCountries() {
        if (this.inputValue === '' && this.country) {
            this.selectCountry(null);
        }
        clearTimeout(this.debounceTimeout);
        this.debounceTimeout = setTimeout(() => {
            if (!this.inputValue) {
                this.filteredCountries = [...this.countries];
            }
            else {
                this.filteredCountries = this.countries.filter(c => c.name.toLowerCase().includes(this.inputValue.toLowerCase()));
            }
        }, 300);
    }
    /**
     * Selects a country and emits the change event.
     */
    selectCountry(c) {
        this.selectedCountry = c;
        this.inputValue = c?.name;
        this.filteredCountries = [...this.countries];
        this.countryChange.emit(c);
    }
    /**
     * Scrolls to the selected country in the dropdown for accessibility.
     */
    scrollToSelected() {
        setTimeout(() => {
            const dropdownItem = document.querySelector(`.dropdown-item.active`);
            if (dropdownItem) {
                dropdownItem.scrollIntoView({ behavior: 'instant', block: 'center' });
            }
        }, 100);
    }
    render() {
        const shouldShowPropertyCountry = this.filteredCountries.length > 0 && this.propertyCountry && (!this.searching || (this.searching && this.inputValue === ''));
        if (this.variant === 'modern') {
            return (index.h("ir-picker", { size: this.size, label: this.label, mode: "select", placeholder: this.placeholder, value: this.selectedCountry?.id?.toString(), "onCombobox-select": e => {
                    const country = this.filteredCountries.find(c => c.id.toString() === e.detail.item.value);
                    if (!country) {
                        console.warn(`country not found`, e.detail.item);
                        return;
                    }
                    this.selectCountry(country);
                } }, this.filteredCountries.map(country => (index.h("ir-picker-item", { value: country.id?.toString(), label: country.name, key: country.id }, index.h("img", { src: country.flag, alt: country.name, style: { aspectRatio: '1', height: '15px', borderRadius: '4px' } }), index.h("p", { class: "ir-ps-1 m-0" }, country.name))))));
        }
        return (index.h("form", { class: "dropdown m-0 p-0" }, index.h("ir-input-text", { onTextChange: e => {
                if (!this.searching) {
                    this.searching = true;
                }
                this.inputValue = e.detail;
                this.filterCountries();
            }, testId: this.testId, autoValidate: this.autoValidate, label: this.label, error: this.error, placeholder: "", class: "m-0 p-0", value: this.inputValue, id: "dropdownMenuCombobox", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false", onInputFocus: () => this.scrollToSelected(), onInputBlur: () => {
                this.searching = false;
                if (this.filteredCountries.length > 0 && this.inputValue && this.inputValue.trim() !== '') {
                    this.selectCountry(this.filteredCountries[0]);
                }
            } }), index.h("div", { class: "dropdown-menu combobox-menu", "aria-labelledby": "dropdownMenuCombobox" }, shouldShowPropertyCountry && (index.h(index.Fragment, null, index.h("button", { type: "button", class: `dropdown-item d-flex align-items-center ${this.selectedCountry?.id === this.propertyCountry.id ? 'active' : ''}`, onClick: () => {
                this.selectCountry(this.propertyCountry);
            } }, index.h("img", { src: this.propertyCountry.flag, alt: this.propertyCountry.name, style: { aspectRatio: '1', height: '15px', borderRadius: '4px' } }), index.h("p", { class: "ir-ps-1 m-0" }, this.propertyCountry.name)), index.h("div", { class: "dropdown-divider" }))), this.filteredCountries?.map(c => (index.h("button", { key: c.id, type: "button", class: `dropdown-item d-flex align-items-center ${this.selectedCountry?.id === c.id ? 'active' : ''}`, onClick: () => {
                this.selectCountry(c);
            } }, index.h("img", { src: c.flag, alt: c.name, style: { aspectRatio: '1', height: '15px', borderRadius: '4px' } }), index.h("p", { class: "ir-ps-1 m-0" }, c.name)))), this.filteredCountries?.length === 0 && index.h("p", { class: "dropdown-item-text" }, t.t('Lcz_InvalidCountry', { fallback: 'Invalid Country' })))));
    }
    static get watchers() { return {
        "country": [{
                "handleCountryChange": 0
            }]
    }; }
};
IrCountryPicker.style = irCountryPickerCss();

const irCustomDateRangeCss = () => `.date-picker{width:100%;display:flex;flex-direction:column;gap:20px;position:relative;z-index:999;background:var(--wa-color-surface-default, white);color:var(--wa-color-text-normal, #1d2939);box-sizing:border-box;padding:0}.month-container{display:flex;align-items:center;font-size:0.875rem;line-height:1.25rem;box-sizing:border-box}.month-container span{flex:1;text-align:center}table{border-collapse:collapse;box-sizing:border-box}td,th{padding:0;border:none}th{width:var(--cal-button-size, 40px);height:var(--cal-button-size, 40px);font-size:0.875rem;line-height:1.25rem;margin:0 !important;box-sizing:border-box}td{text-align:center;margin:0;box-sizing:border-box}.weekday-name{font-weight:400;text-align:center;color:var(--wa-color-text-normal, #1d2939)}.month-navigation{display:flex;align-items:center;box-sizing:border-box;position:relative}.month-navigation span{padding:0;margin-inline-start:auto;margin-inline-end:auto;line-height:0;color:var(--wa-color-text-normal, #1d2939);font-size:16px}.month-year-label{font-size:16px;font-weight:600;color:var(--wa-color-text-normal, #1d2939);margin-inline-start:auto;margin-inline-end:auto}.navigation-buttons{box-sizing:border-box;border:0;display:flex;align-items:center;justify-content:center;position:absolute;height:var(--cal-button-size, 30px);width:var(--cal-button-size, 40px);margin:0;padding:0;border-radius:var(--radius, 0.5rem);cursor:pointer;color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:transparent;border-color:transparent;transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.navigation-buttons:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet))}.navigation-buttons:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active))}.navigation-buttons:dir(rtl) svg{transform:rotate(180deg)}.button-next-main{display:none}.button-next-main,.button-next{inset-inline-end:0}.previous-month{inset-inline-start:0}.margin-right{margin-inline-end:0}.margin-left{margin-inline-start:0}.margin-horizontal{margin-inline-start:var(--cal-button-size, 30px)}.day-button{box-sizing:border-box;background:none;border:0;cursor:pointer;font-size:0.875rem;padding:0;margin:0;width:var(--cal-button-size, 100%);height:var(--cal-button-size, 40px);position:relative;border-radius:var(--radius, 0.5rem);color:var(--gray-800);transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.day-button .day,.price{margin:0;padding:0}.day-button .price{font-size:10px;color:var(--gray-600)}.day-button:hover::after{content:'';border-radius:var(--radius, 0.5rem);color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));position:absolute;inset:0;z-index:-1}.day-button:active::after{content:'';border-radius:var(--radius, 0.5rem);color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active));position:absolute;inset:0;z-index:-1}.day-button:focus-visible{outline-color:hsl(var(--brand-600, 215, 87%, 51%))}.day-button:disabled,.day-button[aria-unavailable='true']{opacity:0.5;cursor:not-allowed}.day-button:disabled:hover::after,.day-button:disabled:active::after,.day-button[aria-unavailable='true']:hover::after,.day-button[aria-unavailable='true']:active::after{content:unset}.day-range-end,.day-range-start,.day-range-end .current-date,.day-range-start .current-date{color:white}.day-range-end .price,.day-range-start .price{color:var(--gray-200, #eaecf0)}.day-range-end::after,.day-range-start::after,.day-button:hover.day-range-end::after,.day-button:hover.day-range-start::after{content:'';background:var(--wa-color-brand-fill-loud, hsl(var(--brand-600, 215, 87%, 51%)));color:var(--wa-color-brand-on-loud);position:absolute;inset:0;border-radius:var(--radius, 0.5rem);z-index:-1}.day-button:hover.day-range-end::after,.day-button:hover.day-range-start::after{background-color:color-mix(in oklab, var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud)), var(--wa-color-mix-hover))}.day-range-start::after,.day-button:hover.day-range-start::after{border-start-end-radius:0px;border-end-end-radius:0px}.day-range-end::after,.day-button:hover.day-range-end::after{border-start-start-radius:0px;border-end-start-radius:0px}.highlight::after{content:'';border-radius:0;background:var(--wa-color-neutral-fill-quiet, #f2f4f7);position:absolute;inset:0;z-index:-1}.day-button:hover.highlight::after{border-radius:var(--radius, 0.5rem)}.highlight:not(:disabled):not([aria-unavailable='true']):hover::after{color:var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)), var(--wa-color-mix-hover))}.highlight:not(:disabled):not([aria-unavailable='true']):active::after{color:var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)), var(--wa-color-mix-active))}.current-date{color:var(--wa-color-brand, hsl(var(--brand-600, 215, 87%, 51%)))}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}@media only screen and (min-width: 640px){.date-picker{flex-direction:row}.button-next-main{display:flex}.button-next{display:none}}@media only screen and (min-width: 740px){.date-picker{gap:40px}.day-button,th,.navigation-buttons{width:var(--cal-button-size, 38px);height:var(--cal-button-size, 38px)}.margin-horizontal{margin-inline-start:var(--cal-button-size, 38px)}.margin-right{margin-inline-end:var(--cal-button-size, 38px)}.margin-left{margin-inline-start:var(--cal-button-size, 38px)}}@media only screen and (min-width: 1200px){.day-button,th,.navigation-buttons{width:var(--cal-button-size, 45px);height:var(--cal-button-size, 45px)}.margin-horizontal{margin-inline-start:var(--cal-button-size, 45px)}.margin-right{margin-inline-end:var(--cal-button-size, 45px)}.margin-left{margin-inline-start:var(--cal-button-size, 45px)}}`;

const IrCustomDateRange = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.dateChange = index.createEvent(this, "dateChange");
    }
    /** The currently selected check-in date. */
    fromDate = null;
    /** The currently selected check-out date. */
    toDate = null;
    /** The earliest selectable date. Defaults to 24 years in the past. */
    minDate = moment.hooks().add(-24, 'years');
    /** The latest selectable date. Defaults to 24 years in the future. */
    maxDate = moment.hooks().add(24, 'years');
    /**
     * An optional map of `YYYY-MM-DD` → `IDateModifierOptions` used to
     * mark specific dates as unavailable or attach pricing data.
     */
    dateModifiers;
    /** Maximum number of nights that can be selected in one span. */
    maxSpanDays = 90;
    /** When `true`, displays a price line inside each day button (requires `dateModifiers`). */
    showPrice = false;
    /**
     * BCP-47 locale tag used to localise day names and month formatting. Leave unset to follow the
     * nearest `lang` ancestor (see `locale-scope.ts`), then the app's language.
     * @reflect
     */
    locale;
    selectedDates = { start: moment.hooks(), end: moment.hooks() };
    displayedDaysArr = [];
    hoveredDate = null;
    /**
     * Emits the selected start and end dates as native `Date` objects.
     * `end` is `null` when the user has only picked the first date.
     */
    dateChange;
    componentWillLoad() {
        this.resetHours();
        this.selectedDates = { start: this.fromDate, end: this.toDate };
        const currentMonth = this.fromDate ? this.fromDate.clone() : moment.hooks();
        const nextMonth = currentMonth.clone().add(1, 'month');
        this.displayedDaysArr = [this.getMonthDays(currentMonth), this.getMonthDays(nextMonth)];
    }
    /** Syncs the internal selection start when `fromDate` prop changes. */
    handleFromDateChange(newValue, oldValue) {
        if (!(newValue ?? moment.hooks()).isSame(oldValue ?? moment.hooks(), 'days')) {
            this.selectedDates = { ...this.selectedDates, start: newValue };
        }
    }
    /** Syncs the internal selection end when `toDate` prop changes. */
    handleToDateChange(newValue, oldValue) {
        if (!(newValue ?? moment.hooks()).isSame(oldValue ?? moment.hooks(), 'days')) {
            this.selectedDates = { ...this.selectedDates, end: newValue };
        }
    }
    getMonthDays(month) {
        const startDate = moment.hooks(month).startOf('month').startOf('week');
        const endDate = moment.hooks(month).endOf('month').endOf('week');
        const days = [];
        let day = startDate.clone();
        while (day.isSameOrBefore(endDate)) {
            days.push(day.clone());
            day.add(1, 'day');
        }
        return { month, days };
    }
    goToNextMonth(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        const newSecondMonth = this.displayedDaysArr[1].month.clone().add(1, 'months');
        if (newSecondMonth.endOf('month').isBefore(this.minDate) || newSecondMonth.startOf('month').isAfter(this.maxDate)) {
            return;
        }
        this.displayedDaysArr = [this.displayedDaysArr[1], this.getMonthDays(newSecondMonth)];
    }
    goToPreviousMonth(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        const newFirstMonth = this.displayedDaysArr[0].month.clone().add(-1, 'month');
        if (newFirstMonth.endOf('month').isBefore(this.minDate) || newFirstMonth.startOf('month').isAfter(this.maxDate)) {
            return;
        }
        this.displayedDaysArr = [this.getMonthDays(newFirstMonth), this.displayedDaysArr[0]];
    }
    // private handleMonthChange(e: Event, index: number) {
    //   e.stopPropagation();
    //   e.stopImmediatePropagation();
    //   const newMonth = parseInt((e.target as HTMLSelectElement).value);
    //   const current = this.displayedDaysArr[index].month.clone().month(newMonth);
    //   if (index === 0) {
    //     this.displayedDaysArr = [this.getMonthDays(current), this.getMonthDays(current.clone().add(1, 'month'))];
    //   } else {
    //     this.displayedDaysArr = [this.getMonthDays(current.clone().subtract(1, 'month')), this.getMonthDays(current)];
    //   }
    // }
    // private handleYearChange(e: Event, index: number) {
    //   e.stopPropagation();
    //   e.stopImmediatePropagation();
    //   const newYear = parseInt((e.target as HTMLSelectElement).value);
    //   const current = this.displayedDaysArr[index].month.clone().year(newYear);
    //   if (index === 0) {
    //     this.displayedDaysArr = [this.getMonthDays(current), this.getMonthDays(current.clone().add(1, 'month'))];
    //   } else {
    //     this.displayedDaysArr = [this.getMonthDays(current.clone().subtract(1, 'month')), this.getMonthDays(current)];
    //   }
    // }
    // private getYearRange(): number[] {
    //   const start = this.minDate.year();
    //   const end = this.maxDate.year();
    //   const years: number[] = [];
    //   for (let y = start; y <= end; y++) {
    //     years.push(y);
    //   }
    //   return years;
    // }
    selectDay(day) {
        let isDateDisabled = false;
        if (this.dateModifiers) {
            isDateDisabled = !!this.dateModifiers[day.format('YYYY-MM-DD')];
        }
        if (isDateDisabled && !this.selectedDates.start) {
            return;
        }
        if ((this.selectedDates.start && day.isSame(this.selectedDates.start, 'day')) || (this.selectedDates.end && day.isSame(this.selectedDates.end, 'day'))) {
            this.selectedDates = { start: day.clone(), end: null };
        }
        else {
            if (this.selectedDates.start === null) {
                this.selectedDates = { start: day.clone(), end: null };
            }
            else {
                if (this.selectedDates.end === null) {
                    if (day.isBefore(this.selectedDates.start)) {
                        if (isDateDisabled) {
                            return;
                        }
                        this.selectedDates = { start: day.clone(), end: null };
                    }
                    else {
                        this.selectedDates = { start: this.selectedDates.start.clone(), end: day.clone() };
                    }
                }
                else {
                    if (!isDateDisabled) {
                        this.selectedDates = { start: day.clone(), end: null };
                    }
                }
            }
        }
        const startDate = this.selectedDates.start ? this.selectedDates.start.toDate() : null;
        const endDate = this.selectedDates.end ? this.selectedDates.end.toDate() : null;
        this.dateChange.emit({ start: startDate, end: endDate });
    }
    resetHours() {
        this.minDate.set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
        this.maxDate.set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
        if (this.fromDate) {
            this.fromDate.set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
        }
        if (this.toDate) {
            this.toDate.set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
        }
    }
    handleMouseEnter(day) {
        this.hoveredDate = day.clone();
    }
    handleMouseLeave() {
        this.hoveredDate = null;
    }
    isDaySelected(day) {
        const date = day.clone();
        const start = this.selectedDates.start ? this.selectedDates.start.clone() : moment.hooks();
        const end = this.selectedDates.end ? this.selectedDates.end.clone() : this.hoveredDate;
        if (this.selectedDates.start && !this.selectedDates.end && this.hoveredDate && this.hoveredDate.isAfter(start, 'day')) {
            if (date.isAfter(start, 'day') && date.isBefore(end, 'day')) {
                return true;
            }
        }
        else if (date.isAfter(start) && this.selectedDates.end && date.isBefore(end, 'day')) {
            return true;
        }
        return false;
    }
    checkDatePresence(day) {
        if (!this.dateModifiers) {
            return;
        }
        return this.dateModifiers[day.format('YYYY-MM-DD')];
    }
    render() {
        const maxSpanDays = this.selectedDates.start ? this.selectedDates.start.clone().add(this.maxSpanDays, 'days') : null;
        return (index.h("div", { key: 'fce7efe1725380fd5ee87a66eab7bd3049343e64', part: "base", class: "date-picker" }, this.displayedDaysArr.map((month, index$1) => (index.h("table", { part: "calendar", class: "calendar", role: "grid" }, index.h("thead", null, index.h("tr", { part: "calendar-header", class: "calendar-header" }, index.h("th", { colSpan: 7 }, index.h("div", { part: "month-navigation", class: "month-navigation" }, index$1 === 0 && this.displayedDaysArr[0].month.clone().startOf('month').isAfter(this.minDate) && (index.h("button", { part: "nav-prev", name: "previous month", class: "navigation-buttons previous-month", type: "button", onClick: this.goToPreviousMonth.bind(this) }, index.h("p", { class: "sr-only" }, t.t('Lcz_PreviousMonth', { fallback: 'previous month' })), index.h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "16", width: "25.6", viewBox: "0 0 320 512" }, index.h("path", { fill: "currentColor", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" })))), index.h("span", { part: "month-label", class: "month-year-label" }, irDate.getMonthLabel(month.month.toDate(), { locale: this.locale })), index$1 === 0 && (index.h("button", { part: "nav-next", name: "next month", class: "navigation-buttons button-next", type: "button", onClick: this.goToNextMonth.bind(this) }, index.h("p", { class: "sr-only" }, t.t('Lcz_NextMonth', { fallback: 'next month' })), index.h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "16", width: "25.6", viewBox: "0 0 320 512" }, index.h("path", { d: "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" })))), index$1 === 1 && this.displayedDaysArr[1].month.clone().endOf('month').isBefore(this.maxDate) && (index.h("button", { part: "nav-next", name: "next month", class: "navigation-buttons button-next-main", type: "button", onClick: this.goToNextMonth.bind(this) }, index.h("p", { class: "sr-only" }, t.t('Lcz_NextMonth', { fallback: 'next month' })), index.h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "16", width: "25.6", viewBox: "0 0 320 512" }, index.h("path", { fill: "currentColor", d: "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" }))))))), index.h("tr", { part: "weekday-row", class: "weekday-header", role: "row" }, irDate.getWeekdayLabels({ locale: this.locale }).map(weekday => (index.h("th", { part: "weekday", class: "weekday-name", key: weekday }, weekday.replace('.', '')))))), index.h("tbody", { part: "days-grid", class: "days-grid" }, month.days
            .reduce((acc, day, i) => {
            const weekIndex = Math.floor(i / 7);
            if (!acc[weekIndex]) {
                acc[weekIndex] = [];
            }
            acc[weekIndex].push(day);
            return acc;
        }, [])
            .map(week => (index.h("tr", { part: "week-row", class: "week-row", role: "row" }, week.map((day) => {
            const checkedDate = this.checkDatePresence(day);
            const isDaySelected = this.isDaySelected(day);
            const isDaySameEnd = day.isSame(this.selectedDates.end, 'day');
            const isDaySameStart = day.isSame(this.selectedDates.start, 'day');
            const isDayAfterMaxDate = day.isAfter(this.maxDate, 'day');
            const isDayBeforeMinDate = day.isBefore(this.minDate, 'day');
            return (index.h("td", { part: "day-cell", class: "day-cell", key: day.format('YYYY-MM-DD'), role: "gridcell" }, day.isSame(month.month, 'month') && (index.h("button", { part: "day-button", disabled: isDayBeforeMinDate || isDayAfterMaxDate || (this.selectedDates.start && maxSpanDays && day.isAfter(maxSpanDays) && !this.selectedDates.end), onMouseEnter: () => this.handleMouseEnter(day), onMouseLeave: () => this.handleMouseLeave(), onClick: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.selectDay(day);
                }, style: checkedDate?.disabled && this.selectedDates.start && { cursor: 'pointer' }, title: checkedDate?.disabled ? t.t('Lcz_NoAvailability', { fallback: 'No availability' }) : '', "aria-unavailable": checkedDate?.disabled ? 'true' : 'false', "aria-label": `${irDate.formatDate(day.toDate(), { style: 'weekday-medium', locale: this.locale })} ${isDayBeforeMinDate || isDayAfterMaxDate ? t.t('Lcz_NotAvailableStatus', { fallback: 'Not available' }) : ''}`, "aria-disabled": isDayBeforeMinDate || isDayAfterMaxDate || checkedDate?.disabled ? 'true' : 'false', "aria-selected": (this.selectedDates.start && isDaySameStart) || isDaySelected || (this.selectedDates.end && isDaySameEnd), class: {
                    'day-button': true,
                    'day-range-start': this.selectedDates.start && isDaySameStart,
                    'day-range-end': this.selectedDates.end && isDaySameEnd,
                    'highlight': isDaySelected && !isDaySameStart,
                } }, index.h("p", { class: `day ${day.isSame(moment.hooks(), 'day') ? 'current-date' : ''}` }, irDate.formatDate(day.toDate(), { style: 'day-only', locale: this.locale })), this.showPrice && index.h("p", { class: "price" }, checkedDate?.withPrice.price ? '_' : checkedDate.withPrice.price)))));
        }))))))))));
    }
    static get watchers() { return {
        "fromDate": [{
                "handleFromDateChange": 0
            }],
        "toDate": [{
                "handleToDateChange": 0
            }]
    }; }
};
IrCustomDateRange.style = irCustomDateRangeCss();

const irDateRangeCss = () => `:host{display:flex;min-width:280px}.igl-date-range__popup{--arrow-size:0.375rem;--show-duration:100ms;--hide-duration:100ms;pointer-events:auto;width:100%}.igl-date-range__popup::part(arrow){background-color:var(--wa-color-surface-default);border-top:none;border-inline-start:none;border-bottom:solid var(--wa-panel-border-width) var(--wa-color-surface-border);border-inline-end:solid var(--wa-panel-border-width) var(--wa-color-surface-border);box-shadow:none}.igl-date-range__trigger,.igl-date-range__input{width:100%}.igl-date-range__control{width:100%;display:flex}.igl-date-range__control[aria-disabled='true']{opacity:0.5;cursor:not-allowed !important;pointer-events:none}.igl-date-range__calendar{display:flex;flex-direction:column;width:max-content;padding:var(--wa-space-m);background-color:var(--wa-color-surface-default);border:var(--wa-panel-border-width) solid var(--wa-color-surface-border);border-radius:var(--wa-panel-border-radius);border-style:var(--wa-panel-border-style);box-shadow:var(--wa-shadow-l);color:var(--wa-color-text-normal);user-select:none;-webkit-user-select:none}.igl-date-range__nights{font-weight:500;font-size:var(--wa-font-size-s);color:var(--wa-color-text-quiet)}`;

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const IrDateRange = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.dateSelectEvent = index.createEvent(this, "dateSelectEvent");
        this.dateRangeChange = index.createEvent(this, "dateRangeChange");
        this.dateRangeShow = index.createEvent(this, "dateRangeShow");
        this.dateRangeHide = index.createEvent(this, "dateRangeHide");
    }
    get el() { return index.getElement(this); }
    /**
     * Controls the visual size of the input trigger.
     * @reflect
     */
    size = 's';
    /**
     * Initial date values as `YYYY-MM-DD` strings: `{ fromDate, toDate }`. `selectedDateRange` is emitted in the same format.
     * Re-initializes dates whenever this prop reference changes.
     */
    defaultData;
    /**
     * When `true`, the picker is disabled and cannot be opened.
     * @reflect
     */
    disabled = false;
    /**
     * ISO date string (YYYY-MM-DD) for the earliest selectable date.
     */
    minDate;
    /**
     * Optional label text shown above the input (forwarded to ir-input).
     */
    dateLabel;
    /**
     * ISO date string (YYYY-MM-DD) for the latest selectable date.
     */
    maxDate;
    /**
     * When `true` and `variant="booking"`, a nights badge is shown inside the input.
     */
    withDateDifference = true;
    /**
     * `"booking"` shows the nights badge; `"default"` hides it.
     */
    variant = 'default';
    /**
     * Optional hint text rendered below the input.
     */
    hint;
    /** Whether the calendar popup is open. */
    isActive = false;
    /** Currently selected check-in date. */
    fromDate = moment.hooks().toDate();
    /** Currently selected check-out date. */
    toDate = moment.hooks().add(1, 'day').toDate();
    /** Mirrors the `aria-invalid` attribute so the input reflects validity state. */
    isInvalid;
    /** Computed number of nights between the selected dates. Triggers re-render on change. */
    totalNights = 0;
    /**
     * Legacy event – emits `{ key, data }` for backward-compatible consumers.
     * @deprecated Prefer `dateRangeChange`.
     */
    dateSelectEvent;
    /**
     * Emits the selected check-in / check-out as Moment objects.
     */
    dateRangeChange;
    /** Fired when the calendar popup opens. */
    dateRangeShow;
    /** Fired when the calendar popup closes. */
    dateRangeHide;
    static instanceCounter = 0;
    popupId;
    componentWillLoad() {
        IrDateRange.instanceCounter += 1;
        this.popupId = `ir-date-range-popup-${IrDateRange.instanceCounter}`;
        this.initializeDates();
    }
    /** Re-initializes dates when `defaultData` reference changes. */
    handleDataChange(newValue, oldValue) {
        if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
            this.initializeDates();
        }
    }
    /** Syncs `isInvalid` with the reflected `aria-invalid` attribute. */
    handleAriaInvalidChange(newValue) {
        this.isInvalid = newValue;
    }
    initializeDates() {
        if (this.defaultData) {
            // `YYYY-MM-DD` parsed as a local day — `new Date('YYYY-MM-DD')` would be UTC midnight (the previous day west of UTC).
            if (this.defaultData.fromDate) {
                this.fromDate = moment.hooks(this.defaultData.fromDate, 'YYYY-MM-DD').toDate();
            }
            if (this.defaultData.toDate) {
                this.toDate = moment.hooks(this.defaultData.toDate, 'YYYY-MM-DD').toDate();
            }
        }
        if (this.fromDate && this.toDate) {
            this.calculateTotalNights();
        }
    }
    calculateTotalNights() {
        this.totalNights = booking.calculateDaysBetweenDates(moment.hooks(this.fromDate).format('YYYY-MM-DD'), moment.hooks(this.toDate).format('YYYY-MM-DD'));
    }
    handleDateSelectEvent(key, data = '') {
        this.dateSelectEvent.emit({ key, data });
    }
    handleCustomDateChange(evt) {
        const { start, end } = evt.detail;
        if (!start || !end)
            return;
        this.fromDate = start;
        this.toDate = end;
        this.calculateTotalNights();
        const startMoment = moment.hooks(start);
        const endMoment = moment.hooks(end);
        this.handleDateSelectEvent('selectedDateRange', {
            fromDate: startMoment.format('YYYY-MM-DD'),
            toDate: endMoment.format('YYYY-MM-DD'),
            dateDifference: this.totalNights,
        });
        this.dateRangeChange.emit({ checkIn: startMoment, checkOut: endMoment });
        this.closeDatePicker();
    }
    /** Opens the calendar popup. */
    async openDatePicker() {
        this.isActive = true;
        this.dateRangeShow.emit();
    }
    /** Closes the calendar popup. Also invoked automatically on outside clicks via `@ClickOutside`. */
    async closeDatePicker() {
        if (!this.isActive)
            return;
        this.isActive = false;
        this.dateRangeHide.emit();
    }
    togglePicker() {
        this.isActive ? this.closeDatePicker() : this.openDatePicker();
    }
    handleKeyDown(event) {
        switch (event.key) {
            case 'Enter':
            case ' ':
                event.preventDefault();
                this.togglePicker();
                break;
            case 'Escape':
                if (this.isActive) {
                    event.preventDefault();
                    this.closeDatePicker();
                }
                break;
        }
    }
    get formattedLabel() {
        const from = irDate.formatDate(this.fromDate, 'MMM DD, YYYY');
        const to = irDate.formatDate(this.toDate, 'MMM DD, YYYY');
        return `${from} → ${to}`;
    }
    render() {
        const showNights = this.variant === 'booking' && this.withDateDifference;
        return (index.h("wa-popup", { key: '86d6b4f2a77fac5e1fe9673771d2e207ceeca4dd', part: "popup", arrow: true, placement: "bottom", flip: true, shift: true, "auto-size": "vertical", "auto-size-padding": 10, active: this.isActive, class: "igl-date-range__popup" }, index.h("div", { key: '73e9c160d2211ad436250ec555ae043f8603e891', slot: "anchor", part: "anchor", class: "igl-date-range__trigger" }, index.h("div", { key: 'ce70bfb37f7cddfaf1406c65f45746c4f3721a09', part: "combobox", class: "igl-date-range__control", role: "combobox", tabindex: this.disabled ? -1 : 0, "aria-haspopup": "dialog", "aria-expanded": this.isActive ? 'true' : 'false', "aria-controls": this.popupId, "aria-disabled": this.disabled ? 'true' : 'false', "aria-label": t.t('Lcz_SelectDateRange', { fallback: 'Select date range' }), onClick: !this.disabled ? this.togglePicker.bind(this) : undefined, onKeyDown: !this.disabled ? this.handleKeyDown.bind(this) : undefined }, index.h("ir-input", { key: '73d651128a7e108010e63f1999ce2348b6c3eb1a', part: "input", disabled: this.disabled, class: "igl-date-range__input", readonly: true, value: this.formattedLabel, "aria-invalid": this.isInvalid, "aria-expanded": String(this.isActive), "aria-disabled": this.disabled ? 'true' : undefined }, index.h("wa-icon", { key: 'd9d90d8ab8674495c107ef859c61a1ca2a4324bb', part: "calendar-icon", slot: "start", variant: "regular", name: "calendar" }), showNights && this.totalNights > 0 && (index.h("span", { key: 'd7d06a673912865157bcf01a588f3fee478ad7b5', part: "nights-badge", slot: "end", class: "igl-date-range__nights" }, number.formatCount(this.totalNights), " ", this.totalNights > 1 ? t.t('Lcz_Nights', { fallback: 'nights' }) : t.t('Lcz_Night', { fallback: 'night' })))))), index.h("div", { key: 'cf25bd58a8b8aba7ccb29ba2959ee74a4dcb9e58', part: "body", id: this.popupId, class: "igl-date-range__calendar", role: "dialog", "aria-modal": "false", "aria-label": t.t('Lcz_DateRangeSelectionDialog', { fallback: 'Date range selection dialog' }) }, index.h("ir-custom-date-range", { key: '6b19d3312398875e1cc6e8809a6fae7086d17b03', part: "calendar", exportparts: "base: calendar-base, calendar, calendar-header, month-navigation, nav-prev, nav-next, month-label, weekday-row, weekday, days-grid, week-row, day-cell, day-button", style: { '--cal-button-size': '35px' }, fromDate: moment.hooks(this.fromDate), toDate: moment.hooks(this.toDate), minDate: this.minDate ? moment.hooks(this.minDate) : undefined, maxDate: this.maxDate ? moment.hooks(this.maxDate) : undefined, onDateChange: e => this.handleCustomDateChange(e) }))));
    }
    static get watchers() { return {
        "defaultData": [{
                "handleDataChange": 0
            }],
        "aria-invalid": [{
                "handleAriaInvalidChange": 0
            }]
    }; }
};
__decorate([
    ClickOutside.ClickOutside()
], IrDateRange.prototype, "closeDatePicker", null);
IrDateRange.style = irDateRangeCss();

const irDateViewCss = () => `:host{display:inline-flex;align-items:center;font-size:var(--ir-date-view-font-size, 0.8125rem);color:var(--ir-date-view-color, inherit);line-height:1.4}[part='base']{display:inline-flex;align-items:center;flex-wrap:wrap;gap:var(--ir-date-view-gap, 0.3125rem);}[part='from-date'],[part='to-date']{white-space:nowrap;font-weight:var(--ir-date-view-date-font-weight, 400);color:var(--ir-date-view-date-color, inherit)}[part='separator']{display:inline-flex;align-items:center;flex-shrink:0}[part='separator-icon']{width:var(--ir-date-view-separator-size, 0.75rem);height:var(--ir-date-view-separator-size, 0.75rem);display:block}.ir-flip-rtl:dir(rtl){scale:-1 1}`;

const IrDateView = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /** Raw from-date — accepts ISO string, JS Date, or Moment */
    from_date;
    /** Raw to-date — accepts ISO string, JS Date, or Moment */
    to_date;
    /** Show the night-count badge after the to-date */
    showDateDifference = true;
    /** Display style for both dates */
    format = 'medium';
    render() {
        const fromStr = irDate.formatDate(this.from_date, { style: this.format });
        const toStr = irDate.formatDate(this.to_date, { style: this.format });
        // Night-count is computed from the original values, never from the (possibly Hijri) display
        // string — re-parsing display text with a display-locale parser breaks once formatting can
        // switch calendar systems.
        const fromISO = irDate.toDate(this.from_date);
        const toISO = irDate.toDate(this.to_date);
        const diff = fromISO && toISO ? booking.calculateDaysBetweenDates(moment.hooks(fromISO).format('YYYY-MM-DD'), moment.hooks(toISO).format('YYYY-MM-DD')) : 0;
        const nightLabel = diff === 1 ? t.t('Lcz_Night', { fallback: 'night' }) : t.t('Lcz_Nights', { fallback: 'nights' });
        return (index.h(index.Host, { key: '6adf2dee62b942db0947ec8566ab7a379fc0a745' }, index.h("span", { key: '0a8f079118cdbdea66d5ec1963f5ac84d1be658c', part: "base" }, index.h("span", { key: 'e808003328160d6277a718998e3bdb73b9853f2a', part: "from-date" }, fromStr), index.h("span", { key: '0366936def9bda54370492bb3337f4a478559775', part: "separator", "aria-hidden": "true" }, index.h("wa-icon", { key: 'cf60e407ab93a2d35e17610d19352779d0d3599e', class: "ir-flip-rtl", name: "arrow-right", part: "separator-icon", "aria-hidden": "true" })), index.h("span", { key: '731bf809cc329804895ebad9b8e502cbe8f78d0e', part: "to-date" }, toStr), this.showDateDifference && diff > 0 && (index.h("span", { key: '51d8fe54be52f085ffaa573acb8e48ba6c4f1dc2', part: "night-count" }, number.formatCount(diff), "\u00A0", nightLabel)))));
    }
};
IrDateView.style = irDateViewCss();

const irInputTextCss = () => `.sc-ir-input-text-h{--ir-bg:#fff;--ir-primary:#1e9ff2;--ir-danger:#ff4961;--ir-border:#cacfe7;--ir-disabled-fg:#9aa1ac;--ir-readonly-bg:#f8f9fa;--ir-input-color:#3b4781;--ir-placeholder-color:#bbbfc6;--ir-floating-input-border:var(--ir-border);--ir-floating-input-border-radius:0.21rem;--ir-floating-input-height:2rem;--ir-focus-ring:none;--ir-focus-border-color:var(--ir-primary);--ir-floating-input-font-size:0.975rem;--ir-floating-input-line-height:1.45;--ir-floating-input-padding-y:0.75rem;--ir-floating-input-padding-x:1rem;--ir-floating-input-padding-x-with-affix:2rem;--ir-floating-label-fg:#6c757d;--ir-floating-label-fg-focus:#495057;--ir-floating-label-bg:#fff;--ir-floating-label-scale:0.88;--ir-floating-label-float-translateY:-70%;--ir-floating-label-resting-offset-inline:0.9rem;--ir-floating-label-resting-offset-inline-with-prefix:1.8rem;--ir-floating-input-affix-size:1rem;--ir-floating-input-affix-color:#6c757d;margin:0;padding:0;display:inline}.sc-ir-input-text-h{--blue:var(--ir-primary);--red:var(--ir-danger)}.border-theme.sc-ir-input-text{border:1px solid var(--ir-border)}.icon-container.sc-ir-input-text{color:#3b4781;border:1px solid var(--ir-border);font-size:var(--ir-floating-input-font-size);height:var(--ir-floating-input-height);background:var(--ir-bg);padding-inline-end:0 !important;border-inline-end:0;border-start-end-radius:0;border-end-end-radius:0;transition:border-color 0.15s ease-in-out,     -webkit-box-shadow 0.15s ease-in-out}input.sc-ir-input-text:focus{border-color:var(--ir-primary) !important}.error-message.sc-ir-input-text{font-size:0.875rem;padding:0;margin:0.5rem 0 0;color:var(--ir-danger)}.ir-input[data-state='empty'].sc-ir-input-text{color:var(--ir-placeholder-color)}.input-container.sc-ir-input-text{display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;flex:1}.input-container.sc-ir-input-text input.sc-ir-input-text{padding-inline-start:5px !important;padding-inline-end:5px !important;border-inline-start:0;border-start-start-radius:0 !important;border-end-start-radius:0 !important}.icon-container[data-state='focus'].sc-ir-input-text{border-color:var(--ir-primary)}.icon-container[data-disabled].sc-ir-input-text{background-color:#eceff1;border-color:rgba(118, 118, 118, 0.3)}.danger-border.sc-ir-input-text{border-color:var(--ir-danger)}.ir-floating-group.sc-ir-input-text{position:relative;display:block;border:1px solid var(--ir-floating-input-border);border-radius:var(--ir-floating-input-border-radius);background:var(--ir-bg);transition:border-color 120ms ease,     box-shadow 120ms ease;padding:0}.ir-floating-group.sc-ir-input-text:focus-within{border-color:var(--ir-focus-border-color);box-shadow:var(--ir-focus-ring)}.ir-floating-group.has-error.sc-ir-input-text,.has-error.sc-ir-input-text .ir-floating-group.sc-ir-input-text{border-color:var(--ir-danger)}.ir-floating-group.is-disabled.sc-ir-input-text{background-color:#f1f3f5}.ir-floating-group.is-readonly.sc-ir-input-text{background-color:var(--ir-readonly-bg)}.ir-floating-input.sc-ir-input-text{width:100%;display:block;border:0;outline:0;background:transparent;color:var(--ir-input-color);font-size:var(--ir-floating-input-font-size);line-height:var(--ir-floating-input-line-height);border-radius:var(--ir-floating-input-border-radius);box-shadow:none;padding:var(--ir-floating-input-padding-y) var(--ir-floating-input-padding-x);height:var(--ir-floating-input-height)}.ir-floating-input.danger-border.sc-ir-input-text{box-shadow:none}.ir-floating-label.sc-ir-input-text{position:absolute;top:50%;transform:translateY(-50%);pointer-events:none;padding:0 0.4rem;color:var(--ir-floating-label-fg);background:transparent;transition:transform 120ms ease,     color 120ms ease,     top 120ms ease,     background-color 120ms ease,     opacity 120ms ease;opacity:0.95;line-height:1}.ir-floating-label.sc-ir-input-text{inset-inline-start:var(--ir-floating-label-resting-offset-inline)}.ir-floating-group.sc-ir-input-text:focus-within .ir-floating-label.sc-ir-input-text,.ir-floating-input.sc-ir-input-text:not(:placeholder-shown)+.ir-floating-label.sc-ir-input-text,.ir-floating-group[data-has-value='true'].sc-ir-input-text .ir-floating-label.sc-ir-input-text{top:0;transform:translateY(var(--ir-floating-label-float-translateY)) scale(var(--ir-floating-label-scale));background:var(--ir-floating-label-bg);color:var(--ir-floating-label-fg-focus);font-size:12px;padding:0}.ir-floating-group.has-error.sc-ir-input-text .ir-floating-label.sc-ir-input-text,.has-error.sc-ir-input-text .ir-floating-group.sc-ir-input-text .ir-floating-label.sc-ir-input-text{color:var(--ir-danger)}.ir-floating-group.is-disabled.sc-ir-input-text .ir-floating-label.sc-ir-input-text{color:var(--ir-disabled-fg)}@supports (-webkit-touch-callout: none){.ir-floating-input.sc-ir-input-text{border-radius:var(--ir-floating-input-border-radius)}}.prefix-container.sc-ir-input-text,.suffix-container.sc-ir-input-text{position:absolute;top:0;bottom:0;display:inline-flex;align-items:center;color:var(--ir-floating-input-affix-color);pointer-events:none}.prefix-container.sc-ir-input-text{inset-inline-start:0.5rem}.suffix-container.sc-ir-input-text{inset-inline-end:0.5rem}.sc-ir-input-text-s>[slot='prefix'],.sc-ir-input-text-s>[slot='suffix']{display:inline-flex;width:var(--ir-floating-input-affix-size);height:var(--ir-floating-input-affix-size)}.ir-floating-group[data-have-prefix='true'].sc-ir-input-text .ir-floating-input.sc-ir-input-text{padding:var(--ir-floating-input-padding-y) var(--ir-floating-input-padding-x-with-affix)}.ir-floating-group[data-have-prefix='true'].sc-ir-input-text .ir-floating-label.sc-ir-input-text{inset-inline-start:var(--ir-floating-label-resting-offset-inline-with-prefix)}.no-slot.sc-ir-input-text{display:none}.ir-ps-0.sc-ir-input-text{padding-inline-start:0}`;

const IrInputText = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.textChange = index.createEvent(this, "textChange");
        this.inputBlur = index.createEvent(this, "inputBlur");
        this.inputFocus = index.createEvent(this, "inputFocus");
    }
    get el() { return index.getElement(this); }
    /** Name attribute for the input field */
    name;
    /** Value of the input field */
    value;
    /** Label text for the input */
    label;
    /** Placeholder text for the input */
    placeholder;
    /** Additional inline styles for the input */
    inputStyles = '';
    /** Whether the input field is required */
    required;
    /** Whether the input field is read-only */
    readonly = false;
    /** Input type (e.g., text, password, email) */
    type = 'text';
    /** Whether the form has been submitted */
    submitted = false;
    /** Whether to apply default input styling */
    inputStyle = true;
    /** Text size inside the input field */
    textSize = 'md';
    /** Position of the label: left, right, or center */
    labelPosition = 'left';
    /** Background color of the label */
    labelBackground = null;
    /** Text color of the label */
    labelColor = 'dark';
    /** Border color/style of the label */
    labelBorder = 'theme';
    /** Label width as a fraction of 12 columns (1-11) */
    labelWidth = 3;
    /** Variant of the input: default or icon or floating-label */
    variant = 'default';
    /** Whether the input is disabled */
    disabled = false;
    /** Whether the input has an error */
    error = false;
    /** Mask for the input field (optional) */
    mask;
    /** Whether the input should auto-validate */
    autoValidate = true;
    /** A Zod schema for validating the input */
    zod;
    /** A Zod parse type for validating the input */
    asyncParse;
    /** Key to wrap the value (e.g., 'price' or 'cost') */
    wrapKey;
    /** Forcing css style to the input */
    inputForcedStyle;
    /** Input id for testing purposes*/
    testId;
    /** Input max character length*/
    maxLength;
    /** To clear all the Input base styling*/
    clearBaseStyles;
    /** To clear all the Input base styling*/
    errorMessage;
    /** Autocomplete behavior for the input (e.g., 'on', 'off', 'email', etc.) */
    autoComplete;
    /** Forcing css style to the input container */
    inputContainerStyle;
    /**
     * Extra class names applied to the label container (<div class="input-group-prepend">)
     * that wraps the <label>. Use this to control label width, alignment,
     * spacing, or visibility at different breakpoints.
     * Example: "min-w-120 text-nowrap pe-2"
     */
    labelContainerClassname;
    inputFocused = false;
    textChange;
    inputBlur;
    inputFocus;
    inputRef;
    maskInstance;
    id;
    hasPrefixSlot;
    hasSuffixSlot;
    componentWillLoad() {
        if (this.el.id) {
            this.id = this.el.id;
        }
        else {
            this.id = v4.v4();
        }
        this.hasPrefixSlot = this.haveSlotPresent('prefix');
        this.hasSuffixSlot = this.haveSlotPresent('suffix');
    }
    componentDidLoad() {
        if (this.mask)
            this.initMask();
    }
    handleMaskChange() {
        this.initMask();
    }
    // @Watch('autoValidate')
    // handleMaskChange1() {
    //   console.log(this.autoValidate);
    // }
    // @Watch('error')
    // handleErrorChange(newValue: boolean, oldValue: boolean) {
    //   if (newValue !== oldValue) {
    //     if (this.autoValidate) {
    //       this.validateInput(this.value, true);
    //     }
    //   }
    // }
    handleValueChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.validateInput(this.value);
        }
    }
    initMask() {
        if (!this.mask || this.maskInstance) {
            return;
        }
        this.maskInstance = index$1.IMask(this.inputRef, masks.withLatinDigits(this.mask));
        this.maskInstance.on('accept', () => {
            const isEmpty = this.inputRef.value.trim() === '' || this.maskInstance.unmaskedValue === '';
            if (isEmpty) {
                this.inputRef.value = '';
                this.textChange.emit(null);
            }
            else {
                this.inputRef.value = this.maskInstance.value;
                this.textChange.emit(this.maskInstance.value);
            }
        });
    }
    haveSlotPresent(name) {
        const slot = this.el.querySelector(`[slot="${name}"]`);
        return slot !== null;
    }
    async validateInput(value, forceValidation = false) {
        if (!this.autoValidate && !forceValidation) {
            if (this.error) {
                this.updateErrorState(false);
            }
            return;
        }
        if (this.zod) {
            try {
                if (!this.asyncParse) {
                    this.zod.parse(this.wrapKey ? { [this.wrapKey]: value } : value);
                }
                else {
                    await this.zod.parseAsync(this.wrapKey ? { [this.wrapKey]: value } : value);
                }
                if (this.error) {
                    this.updateErrorState(false);
                }
            }
            catch (error) {
                console.log(error);
                this.updateErrorState(true);
            }
        }
    }
    handleInputChange(event) {
        const value = event.target.value;
        const isEmpty = value === '';
        if (this.maskInstance) {
            this.maskInstance.value = value;
        }
        const maskedValue = isEmpty ? null : this.maskInstance ? this.maskInstance.value : value;
        this.textChange.emit(maskedValue);
    }
    updateErrorState(b) {
        this.error = b;
        this.inputRef.setAttribute('aria-invalid', b ? 'true' : 'false');
    }
    handleBlur(e) {
        this.validateInput(this.value, this.submitted);
        this.inputFocused = false;
        this.inputBlur.emit(e);
    }
    renderFloatingLabel() {
        const labelText = this.label || this.placeholder || '';
        const hasValue = !!(this.value && String(this.value).length > 0);
        return (index.h("div", { class: "form-group", style: this.inputContainerStyle }, index.h("div", { class: `ir-floating-group ${this.error ? 'has-error' : ''} ${this.disabled ? 'is-disabled' : ''} ${this.readonly ? 'is-readonly' : ''}`, "data-has-value": String(hasValue), "data-focused": String(this.inputFocused), "data-have-prefix": String(this.hasPrefixSlot), "data-have-suffix": String(this.hasSuffixSlot), part: "form-group" }, index.h("span", { part: "prefix-container", class: { 'prefix-container': true, 'no-slot': !this.hasPrefixSlot } }, index.h("slot", { name: "prefix" })), index.h("input", { part: "input", "data-state": !!this.value ? undefined : this.mask ? 'empty' : undefined, maxLength: this.maxLength, "data-testid": this.testId, style: this.inputForcedStyle, id: this.id, name: this.name, ref: el => (this.inputRef = el), readOnly: this.readonly, type: this.type, class: `ir-input ir-floating-input ${this.inputStyles || ''} ${this.error ? 'danger-border' : ''} text-${this.textSize}`, onBlur: this.handleBlur.bind(this), onFocus: e => {
                this.inputFocused = true;
                this.inputFocus.emit(e);
            }, placeholder: " ", autoComplete: this.autoComplete, autocomplete: this.autoComplete, value: this.value, onInput: this.handleInputChange.bind(this), required: this.required, disabled: this.disabled, "aria-invalid": String(this.error), "aria-required": String(this.required) }), index.h("label", { part: "label", htmlFor: this.id, class: "ir-floating-label" }, labelText, this.required ? ' *' : ''), index.h("span", { part: "suffix-container", class: { 'suffix-container': true, 'no-slot': !this.hasSuffixSlot } }, index.h("slot", { name: "suffix" }))), this.errorMessage && this.error && (index.h("p", { part: "error-message", class: "error-message" }, this.errorMessage))));
    }
    render() {
        if (this.variant === 'floating-label') {
            return this.renderFloatingLabel();
        }
        if (this.variant === 'icon') {
            return (index.h("fieldset", { class: "position-relative has-icon-left input-container" }, index.h("label", { htmlFor: this.id, class: "input-group-prepend bg-white m-0" }, index.h("span", { "data-disabled": this.disabled, "data-state": this.inputFocused ? 'focus' : '', class: `input-group-text icon-container bg-white ${this.error ? 'danger-border' : ''}`, id: "basic-addon1" }, index.h("slot", { name: "icon" }))), index.h("input", { maxLength: this.maxLength, "data-testid": this.testId, style: this.inputForcedStyle, "data-state": !!this.value ? undefined : this.mask ? 'empty' : undefined, id: this.id, ref: el => (this.inputRef = el), readOnly: this.readonly, type: this.type, class: `ir-input form-control bg-white ir-ps-0 input-sm rate-input py-0 m-0 rateInputBorder ${this.error ? 'danger-border' : ''}`, onBlur: this.handleBlur.bind(this), onFocus: e => {
                    this.inputFocused = true;
                    this.inputFocus.emit(e);
                }, placeholder: this.placeholder, value: this.value, onInput: this.handleInputChange.bind(this), required: this.required, disabled: this.disabled, autoComplete: this.autoComplete })));
        }
        return (index.h("div", { class: 'form-group', style: this.inputContainerStyle }, index.h("div", { class: "input-group row m-0" }, this.label && (index.h("div", { class: `input-group-prepend col-${this.labelWidth} ${this.labelContainerClassname} p-0 text-${this.labelColor}` }, index.h("label", { htmlFor: this.id, class: `input-group-text ${this.labelPosition === 'right' ? 'justify-content-end' : this.labelPosition === 'center' ? 'justify-content-center' : ''} ${this.labelBackground ? 'bg-' + this.labelBackground : ''} flex-grow-1 text-${this.labelColor} border-${this.labelBorder === 'none' ? 0 : this.labelBorder} ` }, this.label, this.required ? '*' : ''))), index.h("input", { maxLength: this.maxLength, "data-testid": this.testId, style: this.inputForcedStyle, "data-state": !!this.value ? undefined : this.mask ? 'empty' : undefined, id: this.id, ref: el => (this.inputRef = el), readOnly: this.readonly, type: this.type, class: this.clearBaseStyles
                ? `${this.inputStyles}`
                : `${this.error ? 'border-danger' : ''} form-control text-${this.textSize} col-${this.label ? 12 - this.labelWidth : 12} ${this.readonly ? 'bg-white' : ''} ${this.inputStyles}`, onBlur: this.handleBlur.bind(this), onFocus: e => {
                this.inputFocused = true;
                this.inputFocus.emit(e);
            }, placeholder: this.placeholder, autoComplete: this.autoComplete, autocomplete: this.autoComplete, value: this.value, onInput: this.handleInputChange.bind(this), required: this.required, disabled: this.disabled })), this.errorMessage && this.error && index.h("p", { class: "error-message" }, this.errorMessage)));
    }
    static get watchers() { return {
        "mask": [{
                "handleMaskChange": 0
            }],
        "value": [{
                "handleValueChange": 0
            }]
    }; }
};
IrInputText.style = irInputTextCss();

const irMobileInputCss = () => `@layer wa-utilities{:host([size='xs']),.wa-size-xs{font-size:var(--wa-font-size-xs)}:host([size='s']),.wa-size-s{font-size:var(--wa-font-size-s)}:host([size='m']),.wa-size-m{font-size:var(--wa-font-size-m)}:host([size='l']),.wa-size-l{font-size:var(--wa-font-size-l)}:host([size='xl']),.wa-size-xl{font-size:var(--wa-font-size-xl)}}:host{box-sizing:border-box;width:100%;margin:0 !important;padding:0 !important}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}.mobile-input__logo{height:var(--wa-font-size-s);aspect-ratio:4/3;border-radius:3px}.mobile-input__required{color:#f3676c !important}.mobile-input__prefix-dropdown::part(menu){height:300px;}.mobile-input__container{display:flex;align-items:stretch;width:100%;margin-top:0.5rem}.mobile-input__container--disabled{opacity:0.7}.mobile-input__phone-country{display:flex;align-items:center;gap:1rem}.mobile-input__phone{flex:1 1 0%}.mobile-input__phone{border-start-start-radius:0;border-end-start-radius:0}.mobile-input__phone--invalid{border-color:var(--wa-color-danger-600)}.mobile-input__label{display:inline-block;position:relative;color:var(--wa-form-control-label-color);font-weight:var(--wa-form-control-label-font-weight);line-height:var(--wa-form-control-label-line-height);margin-block-start:0.5em !important}.mobile-input__description{margin:0.25rem 0 0.5rem;color:var(--wa-color-neutral-500);font-size:0.875rem}.mobile-input__error{margin:0.5rem 0 0;color:var(--wa-color-danger-600);font-size:0.875rem}.mobile-input__required{margin-inline-start:0.25rem;color:var(--wa-color-danger-600)}.mobile-input__trigger,.mobile-input__phone{padding:0 var(--wa-form-control-padding-inline);color:var(--wa-form-control-value-color);font-size:var(--wa-form-control-value-size);font-family:inherit;font-weight:var(--wa-form-control-value-font-weight);line-height:var(--wa-form-control-value-line-height);vertical-align:middle;display:flex;align-items:center;gap:1rem;box-sizing:border-box;background-color:var(--wa-form-control-background-color);border-color:var(--wa-form-control-border-color);border-style:var(--wa-form-control-border-style);border-width:var(--wa-form-control-border-width);border-radius:var(--wa-form-control-border-radius);transition:background-color var(--wa-transition-normal),     border var(--wa-transition-normal),     all var(--wa-transition-normal),     outline var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.mobile-input__container{height:var(--wa-form-control-height)}.mobile-input__trigger{height:100%}.mobile-input__trigger:focus,.mobile-input__phone:focus{outline:none}.mobile-input__trigger:disabled,.mobile-input__phone:disabled{opacity:0.5;cursor:not-allowed}.mobile-input__trigger:focus-visible,.mobile-input__phone:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset);z-index:2}.mobile-input__phone::placeholder{color:var(--wa-form-control-placeholder-color);user-select:none;-webkit-user-select:none}.mobile-input__trigger{cursor:pointer}.mobile-input__phone{border-start-start-radius:0;border-end-start-radius:0}.mobile-input__phone{cursor:text}.mobile-input__trigger[aria-expanded='true']{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset);z-index:2}.mobile-input__trigger[aria-expanded='true'] .mobile-input__phone-country-caret{transform:rotate(-180deg)}.mobile-input__country-name{flex:1}.mobile-input__country-prefix{color:var(--wa-color-neutral-500)}.mobile-input__trigger[aria-invalid='true']{border-color:var(--wa-color-danger-border-loud);outline-color:var(--wa-color-danger-border-loud);border-width:2px}.phone__input{flex:1 1 0%;width:100%}.phone__input::part(input){direction:inherit}.phone__input::part(base){border-start-start-radius:0;border-end-start-radius:0}.mobile-input__trigger{border-start-end-radius:0;border-end-end-radius:0;border-inline-end:0}`;

const IrMobileInput = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.mobileInputChange = index.createEvent(this, "mobile-input-change");
        this.mobileInputCountryChange = index.createEvent(this, "mobile-input-country-change");
    }
    get el() { return index.getElement(this); }
    static idCounter = 0;
    componentId = ++IrMobileInput.idCounter;
    inputId = `ir-mobile-input-${this.componentId}`;
    labelId = `${this.inputId}-label`;
    descriptionId = `${this.inputId}-description`;
    errorId = `${this.inputId}-error`;
    countryStatusId = `${this.inputId}-country-status`;
    /** The input's size. */
    size = 's';
    /** Visible label for the phone input */
    label;
    /** Name attribute passed to the native input */
    name = 'phone';
    /** Placeholder shown when the input is empty */
    placeholder;
    /** Help text rendered under the label */
    description;
    /** Error message announced to screen readers */
    error;
    /** Native required attribute */
    required = false;
    /** Whether the control is disabled */
    disabled = false;
    /** Selected country ISO code. Component updates this prop when a new country is chosen */
    countryCode;
    /** Input value without formatting. Component keeps this prop in sync */
    value = '';
    /**
     * Country list, used to populate prefix and dropdown.
     * If not provided, fetched from the booking service.
     */
    countries = [];
    mobileInputChange;
    mobileInputCountryChange;
    selectedCountry;
    isInvalid = false;
    componentWillLoad() {
        const resolvedCountry = this.resolveCountry(this.countryCode) ?? null;
        if (!resolvedCountry) {
            return;
        }
        if (this.el.hasAttribute('aria-invalid')) {
            this.isInvalid = Boolean(JSON.parse(this.el.getAttribute('aria-invalid')));
        }
        this.selectedCountry = resolvedCountry;
        this.countryCode = resolvedCountry?.code;
        this.value = this.value ?? '';
    }
    handleCountryCodeChange(nextCode) {
        const resolvedCountry = this.resolveCountry(nextCode);
        if (resolvedCountry && resolvedCountry !== this.selectedCountry) {
            this.selectedCountry = resolvedCountry;
        }
    }
    handleSelectedCountryChange(next, previous) {
        if (!next)
            return;
        if (!previous || next.code !== previous.code) {
            if (this.countryCode !== next.code) {
                this.countryCode = next.code;
            }
            this.mobileInputCountryChange.emit(next);
        }
    }
    handleValueChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.value = newValue ?? '';
        }
    }
    handleAriaInvalidChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.isInvalid = Boolean(newValue);
        }
    }
    resolveCountry(code) {
        if (!code)
            return undefined;
        return this.countries.find(country => country.code.toUpperCase() === code.toUpperCase());
    }
    // private emitChange() {
    //   if (!this.selectedCountry) return;
    //   this.mobileInputChange.emit({
    //     country: this.selectedCountry,
    //     value: this.value ?? '',
    //     formattedValue: this.value ?? '',
    //   });
    // }
    handleCountrySelect = (event) => {
        if (this.disabled)
            return;
        event.stopPropagation();
        event.stopImmediatePropagation();
        const value = event.detail?.item?.value;
        const selected = this.countries.find(country => country.id.toString() === `${value}`);
        if (selected) {
            this.selectedCountry = selected;
        }
        requestAnimationFrame(() => {
            const innerInput = this.el.shadowRoot?.querySelector('ir-input')?.shadowRoot?.querySelector('input');
            innerInput?.focus();
        });
    };
    // private handlePlainInput = (event: Event) => {
    //   const { value } = event.target as HTMLInputElement;
    //   this.mobileInputChange.emit({ formattedValue: value, value, country: this.selectedCountry });
    //   if (this.mask) return;
    //   const nextValue = (event.target as HTMLInputElement)?.value ?? '';
    //   if (nextValue !== this.value) {
    //     this.value = nextValue;
    //     this.displayValue = nextValue;
    //     this.emitChange();
    //   }
    // };
    render() {
        const describedByIds = [this.description ? this.descriptionId : null, this.error ? this.errorId : null].filter(Boolean).join(' ') || undefined;
        return (index.h(index.Host, { key: '5b24591ec724523e4156f074f731fd4a7368e685', size: 's', role: "group", "aria-labelledby": this.labelId, "aria-describedby": describedByIds }, index.h("label", { key: '087dd7ac86ff79c4692b542c2d208322b58a77bf', class: "mobile-input__label", id: this.labelId, htmlFor: this.inputId }, this.label || t.t('Lcz_PhoneNumber', { fallback: 'Phone number' }), this.required ? (index.h("span", { class: "mobile-input__required", "aria-hidden": "true" }, "*")) : null), this.description ? (index.h("p", { id: this.descriptionId, class: "mobile-input__description" }, this.description)) : null, index.h("div", { key: 'a3ae704512e2ae3f96e44aa8d1c2887b36490a34', class: { 'mobile-input__container': true, 'mobile-input__container--disabled': this.disabled } }, index.h("wa-dropdown", { key: '13fe2664fb62506b2f3af031da8870e3b8eb1436', "onwa-show": e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
            }, "onwa-hide": e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
            }, "onwa-select": this.handleCountrySelect, class: "mobile-input__prefix-dropdown" }, index.h("button", { key: 'c231e3b03353982326921277bd202e1bc257314f', "aria-invalid": String(this.isInvalid && !this.selectedCountry), slot: "trigger", type: "button", class: "mobile-input__trigger", disabled: this.disabled, "aria-haspopup": "listbox", "aria-label": t.t('Lcz_ChangeCountryCallingCode', { fallback: 'Change country calling code' }) }, index.h("div", { key: 'b0efac7f5eb949ade20c655e354fb0613ec5c006', class: "mobile-input__phone-country", style: { marginInlineEnd: '1rem' } }, this.selectedCountry ? (index.h("img", { src: this.selectedCountry?.flag, alt: this.selectedCountry?.name, class: "mobile-input__logo" })) : (index.h("span", null, t.t('Lcz_Select', { fallback: 'Select' })))), index.h("wa-icon", { key: 'b4a5c8fa169295a846ebad5a632e0b7f0e1b0428', class: "mobile-input__phone-country-caret", name: "chevron-down", "aria-hidden": "true" })), index.h("span", { key: '3ecd7e9ad2d96c6f1d52bcdb365113b13350e72b', class: "sr-only", id: this.countryStatusId, "aria-live": "polite" }, this.selectedCountry
            ? t.t('Lcz_SelectedCountryAnnouncement', {
                fallback: `Selected country ${this.selectedCountry.name} ${this.selectedCountry.phone_prefix}`,
                params: [this.selectedCountry.name, this.selectedCountry.phone_prefix],
            })
            : t.t('Lcz_SelectACountry', { fallback: 'Select a country' })), this.countries.map(country => (index.h("wa-dropdown-item", { value: country.id.toString() }, index.h("div", { class: "mobile-input__phone-country", role: "option", "aria-selected": this.selectedCountry?.id === country.id ? 'true' : 'false' }, index.h("img", { src: country.flag, alt: country.name, class: "mobile-input__logo" }), index.h("span", { class: "mobile-input__country-name" }, country.name), index.h("span", { class: "mobile-input__country-prefix" }, country.phone_prefix)))))), index.h("ir-input", { key: 'ed9b5369931ff7c95320e7ab4f92cad9f427ea20', "aria-invalid": String(this.isInvalid && (this.value ?? '').length < 4), type: "tel", inputMode: "tel", autocomplete: "off", disabled: this.disabled, placeholder: this.placeholder || t.t('Lcz_EnterPhoneNumber', { fallback: 'Enter phone number' }), defaultValue: this.value, value: this.value, class: "phone__input", "onText-change": e => {
                const value = e.detail;
                this.value = value;
                this.mobileInputChange.emit({ formattedValue: value, value, country: this.selectedCountry });
            } }, this.selectedCountry && index.h("span", { key: 'b66aedf5d9fd307875e2cb868adec3b4ff38b9e9', slot: "start" }, this.selectedCountry?.phone_prefix))), this.error ? (index.h("p", { id: this.errorId, class: "mobile-input__error", role: "alert" }, this.error)) : null));
    }
    static get watchers() { return {
        "countryCode": [{
                "handleCountryCodeChange": 0
            }],
        "selectedCountry": [{
                "handleSelectedCountryChange": 0
            }],
        "value": [{
                "handleValueChange": 0
            }],
        "aria-invalid": [{
                "handleAriaInvalidChange": 0
            }]
    }; }
};
IrMobileInput.style = irMobileInputCss();

const irServiceAssigneeSelectCss = () => `.sc-ir-service-assignee-select-h{display:block}`;

const IrServiceAssigneeSelect = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.assignmentChange = index.createEvent(this, "assignmentChange");
    }
    /**
     * The agent to assign the service to.
     */
    agent;
    /**
     * Currently selected service assignee type.
     */
    assigneeType = 'agent';
    /**
     * Label displayed above the assignment selector.
     */
    label;
    /**
     * Emits when the service assignee changes.
     */
    assignmentChange;
    render() {
        return (index.h(index.Host, { key: '3f13233b94a580b4e198a4210b68d2a5a6b0843f' }, index.h("wa-radio-group", { key: '4d8741b1dbe117860df149c9b89a1f8fa0803545', onchange: e => this.assignmentChange.emit(e.target.value), defaultValue: this.assigneeType, value: this.assigneeType, size: "s", label: this.label || t.t('Lcz_AssignToFolio', { fallback: 'Assign to folio' }), orientation: "vertical" }, index.h("wa-radio", { key: 'c2604bf9b2c4f0831575e67d31f43e182f7bd673', value: "agent", appearance: "button" }, t.t('Lcz_Agent', { fallback: 'Agent' }), ": ", this.agent?.name), index.h("wa-radio", { key: 'e05efa922448d945d8377c2f81111327aa676c4f', value: "guest", appearance: "button" }, t.t('Lcz_Guest', { fallback: 'Guest' })))));
    }
};
IrServiceAssigneeSelect.style = irServiceAssigneeSelectCss();

exports.igl_application_info = IglApplicationInfo;
exports.igl_rate_plan = IglRatePlan;
exports.ir_booking_status_tag = IrBookingStatusTag;
exports.ir_country_picker = IrCountryPicker;
exports.ir_custom_date_range = IrCustomDateRange;
exports.ir_date_range = IrDateRange;
exports.ir_date_view = IrDateView;
exports.ir_input_text = IrInputText;
exports.ir_mobile_input = IrMobileInput;
exports.ir_service_assignee_select = IrServiceAssigneeSelect;
