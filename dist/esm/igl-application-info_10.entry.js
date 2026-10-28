import { r as registerInstance, c as createEvent, h, H as Host, F as Fragment, a as getElement } from './index-DKZeCK8T.js';
import { V as VariationService, B as BookingService, b as booking_store, u as updateRoomGuest, h as updateBookedByGuest, m as modifyBookingStore, e as reserveRooms, a as resetReserved, i as updateRoomParams } from './booking.service-RUyfkBvP.js';
import { a as isSingleUnit, c as calendar_data } from './calendar-data-D4DbXAhg.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import './booking.dto-VzFWIl64.js';
import { g as getMonthLabel, h as getWeekdayLabels, f as formatDate, i as toDate } from './ir-date-CY_qGQ63.js';
import './locale-scope-Jre4lb6k.js';
import { t, a as tRaw } from './t-Bvz1wS_D.js';
import { f as formatAmount, b as formatCount } from './number-0UrU_yO2.js';
import { G as GuestCredentials } from './types-DUCUdzrh.js';
import { d as getSetupEntryLabel } from './utils-CdZUSdfj.js';
import { v as v4 } from './v4-CK3_k8jD.js';
import { s as stringType } from './types-DFSK8b1u.js';
import { C as ClickOutside } from './ClickOutside-CvZSoZjc.js';
import { a as calculateDaysBetweenDates } from './booking-Dq_LhKa3.js';
import { I as IMask } from './index-BA2Li5R1.js';
import { w as withLatinDigits } from './masks-kHGgtHqd.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './IBooking-BagKIdFh.js';
import './utils-BXvXVM76.js';
import './calendar-dates-D3hVfsrC.js';
import './commonSchemas-B3RVKogc.js';
import './type-B1KlYN_1.js';
import './language-observer-CHgzsZkY.js';
import './functions-BvJiJbl6.js';

const iglApplicationInfoCss = () => `.sc-igl-application-info-h{color:var(--wa-color-text-normal);font-family:var(--wa-font-family-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;text-align:start;display:flex;flex-direction:column;gap:0.5rem;margin-top:1.5rem}.fd-application-info__header.sc-igl-application-info{display:flex;gap:1rem;align-items:flex-start;justify-content:space-between}.fd-application-info__variation.sc-igl-application-info{padding:0;margin:0}.fd-application-info__form.sc-igl-application-info{display:flex;flex-direction:column;gap:1rem}.fd-application-info__price-inline.sc-igl-application-info,.fd-application-info__details.sc-igl-application-info{display:none}.fd-application-info__footer.sc-igl-application-info,.fd-application-info__rateplan.sc-igl-application-info{display:flex;align-items:center;gap:1rem}.fd-application-info__footer.sc-igl-application-info{justify-content:space-between}.fd-application-info__rateplan-name.sc-igl-application-info{font-size:var(--wa-font-size-m);margin:0;padding:0}.fd-application-info__non-refundable.sc-igl-application-info{color:var(--wa-color-success-fill-loud);margin-inline-start:0.5rem}.fd-application-info__roomtype-title.sc-igl-application-info{font-size:var(--wa-font-size-l)}.fd-application-info__infant.sc-igl-application-info{display:flex;flex-direction:column;gap:0.875rem}.fd-application-info__infant-label.sc-igl-application-info{margin:0;padding:0;color:var(--wa-color-danger-fill-loud)}.fd-application-info__price.sc-igl-application-info{margin:0;padding:0;display:flex;flex-direction:column}@media (min-width: 768px){.fd-application-info__infant.sc-igl-application-info{flex-direction:row;align-items:center}.fd-application-info__infant.sc-igl-application-info .fd-application-info__select.sc-igl-application-info{max-width:100px}.fd-application-info__roomtype-title.sc-igl-application-info{font-size:var(--wa-font-size-m)}.fd-application-info__header.sc-igl-application-info{justify-content:flex-start;align-items:center;gap:0.5rem}.fd-application-info__form.sc-igl-application-info{flex-direction:row}.fd-application-info__price-inline.sc-igl-application-info{display:flex;flex-direction:column;padding:0;margin:0;align-items:flex-end}.fd-application-info__details.sc-igl-application-info{display:flex;align-items:center;gap:0.5rem}.fd-application-info__price.sc-igl-application-info,.fd-application-info__footer.sc-igl-application-info{display:none}}`;

const IglApplicationInfo = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.recalculateTotalCost = createEvent(this, "recalculateTotalCost");
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
        let prevGuest = [...(this.rateplanSelection.guest ?? [])];
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
            tooltip += `<b><u>${t('Lcz_CancellationLabel', { fallback: 'Cancellation:' })}</u></b> ${cancellationPolicy}<br/>`;
        }
        if (guaranteePolicy) {
            tooltip += `<b><u>${t('Lcz_GuaranteeLabel', { fallback: 'Guarantee:' })}</u></b> ${guaranteePolicy}`;
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
        return variation?.discounted_gross_amount ?? 0;
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
        // Exclude units already assigned to any other room of the same room type, across all its rate plans
        const roomTypeId = this.rateplanSelection.roomtype.id;
        const currentRatePlanId = this.rateplanSelection.ratePlan.id;
        const takenUnits = [];
        Object.entries(booking_store.ratePlanSelections[roomTypeId] ?? {}).forEach(([ratePlanId, selection]) => {
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
    tooltipId = `room_info_tooltip_${v4()}`;
    render() {
        const filteredRoomList = this.filterRooms();
        const formattedVariation = this.variationService.formatVariationBasedOnInfants({
            baseVariation: this.rateplanSelection.selected_variation,
            infants: this.guestInfo?.infant_nbr,
            variations: this.rateplanSelection.ratePlan.variations,
        });
        // const amount = await this.getAmount();
        return (h(Host, { key: '97247d31a29fc2382ca6190eb3adbb5a1ed70bff', class: "fd-application-info", "data-testid": `room_info_${this.rateplanSelection.ratePlan.id}` }, h("div", { key: 'e5c264e7ba68048d914e1f308d03c7635a91949a', class: "fd-application-info__header" }, (this.bookingType === 'PLUS_BOOKING' || this.bookingType === 'ADD_ROOM' || this.bookingType === 'EDIT_BOOKING') && (h("span", { key: 'e1658c80675f495ca7dbacd4e2a425cb54a84a3d', class: "fd-application-info__roomtype-title" }, this.rateplanSelection.roomtype.name)), h("div", { key: 'dea28c338bb92e513a03b4c991528ee987cc6c40', class: "fd-application-info__details" }, h("div", { key: '0d720329380eed09eaa067470649790348008609', class: "fd-application-info__rateplan" }, h("p", { key: '729258dbf9be02bc9ceeb9560908830ef94af245', class: "fd-application-info__rateplan-name" }, this.rateplanSelection.ratePlan.short_name, this.rateplanSelection.ratePlan.is_non_refundable && (h("span", { key: '72e1a57c33571e6c8065d2a718f04eba1a6f588e', class: "fd-application-info__non-refundable" }, t('Lcz_NonRefundable', { fallback: 'Non Refundable' })))), h("wa-tooltip", { key: 'bcd46c64fee8cb12a50e72fc862b77c999f2dfd0', for: this.tooltipId }, h("span", { key: 'e7a5ed1a92410eafa1ed50e9c0ec1a4253575fa9', innerHTML: this.getTooltipMessages() })), h("wa-icon", { key: '2724ea491dac7598f0f2d4b744e11f83bc381b56', name: "circle-info", id: this.tooltipId })), h("p", { key: '84888a3ce5ff5cbf4467ea1f1e1d5d094f500d10', class: "fd-application-info__variation", innerHTML: formattedVariation })), h("p", { key: '9455083493a9d46b174cc050076e0fa37b264b50', class: "fd-application-info__price" }, h("span", { key: 'a19a845abc9141407f3fd47225ae8b6b0a35726e', class: "ir-price" }, formatAmount(this.currency?.symbol, this.amount), "/", t('Lcz_Stay', { fallback: 'Stay' })), h("p", { key: '1edb01f74b9ad1a57d65a66b5742c916d9cde7a8', style: { margin: '0', padding: '0', fontSize: '0.75rem' } }, t('Lcz_IncludingTaxesAndFees', { fallback: 'Including taxes and fees' })))), h("div", { key: '691b1405c92bdd8cc6c9649e20a89ef0845f5aad', class: "fd-application-info__footer" }, h("div", { key: '7612e1ae880f21446323756cac1ee3e1d1433a4f', class: "fd-application-info__rateplan" }, h("p", { key: 'ea898c30273a8d9f5e8980b7c115ed68fe640a67', class: "fd-application-info__rateplan-name" }, this.rateplanSelection.ratePlan.short_name), h("wa-tooltip", { key: '220facdc7ae6dda47adb0fb420d0b5c7f487e717', for: `mobile-${this.tooltipId}` }, h("span", { key: '5153276d68394c074607e4e904fbc1bf3ed75736', innerHTML: this.getTooltipMessages() })), h("wa-icon", { key: '70bb8789316f990fdbecf04c5d63ea5d6f10d992', name: "circle-info", id: `mobile-${this.tooltipId}` })), h("p", { key: 'b31964760e31d6fff19d5a7fc26df2a4453fad0f', class: "fd-application-info__variation", innerHTML: formattedVariation })), h("div", { key: '781bab96c66b8b74ed82c4705955ccbfd57c8a4c', class: "fd-application-info__form" }, h("ir-validator", { key: '8518ecc78b90f87d03a273e35dd78530fa2213ea', value: this.guestInfo?.first_name, schema: GuestCredentials.shape.first_name }, h("ir-input", { key: 'fb938cc3119a46663089dd7d67ee6f48f6265765', class: "fd-application-info__input",
            // aria-invalid={String(Boolean(this.isButtonPressed && this.guestInfo?.first_name === ''))}
            value: this.guestInfo?.first_name, defaultValue: this.guestInfo?.first_name, "data-testid": "guest_first_name", placeholder: t('Lcz_GuestFirstName', { fallback: 'Guest first name' }), "onText-change": event => {
                const name = event.detail.trim();
                this.updateGuest({ first_name: name });
                if (booking_store.event_type.type === 'EDIT_BOOKING') {
                    modifyBookingStore('guest', {
                        ...booking_store.guest,
                        name,
                    });
                }
            } })), h("ir-validator", { key: '2f077b0c33ae5dfd60fa892b590dd9a20039d1c7', value: this.guestInfo?.last_name, schema: GuestCredentials.shape.last_name }, h("ir-input", { key: '01b9c93639a347bd2f2aa6e5859bde8cf5c58abc', class: "fd-application-info__input", type: "text",
            // aria-invalid={String(Boolean(this.isButtonPressed && this.guestInfo?.last_name === ''))}
            value: this.guestInfo?.last_name, defaultValue: this.guestInfo?.last_name, "data-testid": "guest_last_name", placeholder: t('Lcz_GuestLastName', { fallback: 'Guest last name' }), "onText-change": event => {
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
            (this.bookingType === 'PLUS_BOOKING' || this.bookingType === 'ADD_ROOM' || this.bookingType === 'EDIT_BOOKING') && (h("wa-select", { key: 'd95334bd993add37f6a97c888ad58accee015d6f', "with-clear": true, size: "s", class: "fd-application-info__select", placeholder: t('Lcz_AssignUnit', { fallback: 'Assign unit' }), "data-testid": "unit", value: this.guestInfo?.unit, defaultValue: this.guestInfo?.unit, onchange: event => this.updateGuest({
                unit: event.target.value,
            }) }, filteredRoomList.map(room => (h("wa-option", { value: room.id.toString(), selected: this.guestInfo?.unit === room.id.toString() }, room.name))))), this.rateplanSelection.roomtype.is_bed_configuration_enabled && (h("ir-validator", { key: '2a6b6a95c877f48477b073db2324f41512f5c7c2', value: this.guestInfo?.bed_preference, schema: stringType().nonempty() }, h("wa-select", { key: '6e93a0869478e2e2e2740171f4914e77063df775', "with-clear": true, size: "s", class: "fd-application-info__select", placeholder: t('Lcz_BedConfiguration', { fallback: 'Bed configuration...' }), "data-testid": "bed_configuration", value: this.guestInfo?.bed_preference, defaultValue: this.guestInfo?.bed_preference,
            // aria-invalid={String(Boolean(this.isButtonPressed && this.guestInfo?.bed_preference === ''))}
            onchange: event => this.updateGuest({
                bed_preference: event.target.value,
            }) }, this.bedPreferenceType.map(data => (h("wa-option", { value: data.CODE_NAME, selected: this.guestInfo?.bed_preference === data.CODE_NAME }, getSetupEntryLabel(data))))))), h("p", { key: '02230c0beace0f306dbe0eedc37df8acf44dd121', class: "fd-application-info__price-inline" }, h("span", { key: 'fb4094d555ade3694bc18036cd76811fd3559a38', class: "ir-price" }, formatAmount(this.currency?.symbol, this.amount), "/", t('Lcz_Stay', { fallback: 'Stay' })), h("p", { key: '04b7190ba0e48b975ad0f26dd8f96fe0938bdd81', style: { margin: '0', padding: '0', fontSize: '0.75rem' } }, t('Lcz_IncludingTaxesAndFees', { fallback: 'Including taxes and fees' })))), this.rateplanSelection.selected_variation?.child_nbr > 0 && (h("div", { key: '355e24c29f8dc309b5667168ca0dd9084993d632', class: "fd-application-info__infant" }, h("p", { key: '236ea5b4739437283008b58ede880c9b0959359d', class: "fd-application-info__infant-label" }, t('Lcz_AnyChildrenBelow3Years', { fallback: 'Any of the children below 3 years?' })), h("wa-select", { key: 'fe2973585eaa40e338cfcde3dfddc36fe5892cdd', size: "s", class: "fd-application-info__select fd-application-info__select--inline", placeholder: t('Lcz_NO', { fallback: 'No' }), value: this.guestInfo?.infant_nbr?.toString(), defaultValue: this.guestInfo?.infant_nbr?.toString(), onchange: event => {
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
        "guestInfo": [{
                "handleGuestInfoChange": 0
            }]
    }; }
};
IglApplicationInfo.style = iglApplicationInfoCss();

const iglRatePlanCss = () => `.sc-igl-rate-plan-h{display:block;margin-bottom:1rem;color:var(--wa-color-text-normal)}.rate-plan.sc-igl-rate-plan{display:flex;flex-direction:column;min-height:32px;margin-top:0.25rem;gap:0.5rem}.rate-plan.--current.sc-igl-rate-plan{background-color:var(--wa-color-brand-fill-quiet);border-radius:var(--wa-border-radius-m);position:relative}.rate-plan.rate-plan.--current.sc-igl-rate-plan::before{border-radius:var(--wa-border-radius-m);content:'';position:absolute;inset:-0.5rem;z-index:-1;background-color:var(--wa-color-brand-fill-quiet)}.rate-plan--unavailable.sc-igl-rate-plan{flex-direction:row;align-items:center;justify-content:space-between}.rateplan-name-container.sc-igl-rate-plan{display:flex;align-items:center;gap:0.5rem;margin:0;padding:0}.rateplan-name-container.sc-igl-rate-plan p.sc-igl-rate-plan{margin:0}.rateplan-container.sc-igl-rate-plan{display:flex;flex-direction:column;gap:0.75rem;width:100%;margin-top:0.5rem}.variation-select.sc-igl-rate-plan{width:100%;max-width:300px;flex:1}.rp-select.sc-igl-rate-plan:disabled{background-color:#eceff1;color:#7a7a7a}.rateplan-config.sc-igl-rate-plan{display:flex;flex-direction:column;gap:0.75rem;width:100%}.rate-total-night-view.sc-igl-rate-plan{display:flex;flex:1;gap:0;align-items:stretch}.rateplan-price-input.sc-igl-rate-plan{flex:1;width:100%}.total-nights-container.sc-igl-rate-plan{width:max-content}.rp-select--nights.sc-igl-rate-plan{border-start-start-radius:0;border-end-start-radius:0}.inventory-select.sc-igl-rate-plan{width:100%;max-width:200px}.edit-booking-radio.sc-igl-rate-plan{display:none}.mobile-only.sc-igl-rate-plan{width:100%;display:block}.desktop-only.sc-igl-rate-plan{display:none}.rate-plan-unavailable-text.sc-igl-rate-plan{margin:0;color:var(--wa-color-danger-fill-loud)}.rateplan-name-container.sc-igl-rate-plan{font-family:var(--wa-font-family-heading);font-weight:400;line-height:var(--wa-line-height-condensed);text-wrap:balance}.non-ref-span.sc-igl-rate-plan{font-size:12px;padding-inline:0.25rem;color:var(--wa-color-success-fill-loud);font-size:0.875rem;font-weight:400;line-height:var(--wa-line-height-condensed);text-wrap:balance}.rateplan-name.sc-igl-rate-plan{font-family:var(--wa-font-family-heading);font-weight:400;line-height:var(--wa-line-height-condensed);text-wrap:balance}.custom-text-span.sc-igl-rate-plan{color:var(--wa-color-text-quiet);font-size:0.875rem;font-weight:400;line-height:var(--wa-line-height-condensed);text-wrap:balance}.nightBorder.sc-igl-rate-plan{border-inline-start-width:0;border-start-end-radius:3px !important;border-end-end-radius:3px !important}.fd-rateplan__price-input.sc-igl-rate-plan::part(base),.fd-rateplan__price-input.sc-igl-rate-plan [part~="base"]{border-start-end-radius:0;border-end-end-radius:0}.fd-rateplan__price-input.sc-igl-rate-plan{flex:1 1 0%;z-index:1}.fd-rateplan__nights-select.sc-igl-rate-plan::part(combobox),.fd-rateplan__nights-select.sc-igl-rate-plan [part~="combobox"]{border-start-start-radius:0;border-end-start-radius:0;border-inline-start-width:0}.fd-rateplan__nights-select.sc-igl-rate-plan{min-width:100px}.fd-rateplan__inventory-select.sc-igl-rate-plan{min-width:60px}.fd-rateplan__nights-select[open].sc-igl-rate-plan,.fd-rateplan__nights-select.sc-igl-rate-plan:focus-visible,.fd-rateplan__nights-select.sc-igl-rate-plan:focus-within{z-index:2}@media (min-width: 768px){.booking-btn.sc-igl-rate-plan{width:100%}.mobile-only.sc-igl-rate-plan{display:none}.desktop-only.sc-igl-rate-plan{display:block}.edit-booking-radio.sc-igl-rate-plan{display:block;margin-inline-start:0.75rem}.rateplan-container.sc-igl-rate-plan{flex-direction:row;align-items:center;justify-content:flex-end}.rate-plan.rate-plan.--current.sc-igl-rate-plan::before{inset-block-start:0}.rateplan-config.sc-igl-rate-plan{flex-direction:row;align-items:center;justify-content:space-between}.rateplan__booking-btn.sc-igl-rate-plan{width:95px}}@media (min-width: 991px){.sc-igl-rate-plan-h{margin:0}.rateplan-name-container.sc-igl-rate-plan{margin-bottom:0 !important}.rateplan-price-input.sc-igl-rate-plan{max-width:250px}.rate-plan--available.sc-igl-rate-plan{flex-direction:row;align-items:center;justify-content:space-between}}@media only screen and (min-width: 991px) and (max-width: 1300px){.rateplan-name-container.sc-igl-rate-plan{width:40%}.rate-plan.--current.sc-igl-rate-plan .rateplan-name-container.sc-igl-rate-plan{margin-top:0.5rem}.price-amount.sc-igl-rate-plan{max-width:150px !important}}@media (min-width: 1024px){.booking-btn.sc-igl-rate-plan{width:100px}.rate-plan.--current.sc-igl-rate-plan .rateplan-name-container.sc-igl-rate-plan{margin-top:0.5rem}.fd-rateplan__price-input.sc-igl-rate-plan{width:170px;max-width:170px}.fd-rateplan__nights-select.sc-igl-rate-plan{width:100px;max-width:100px}.rate-total-night-view.sc-igl-rate-plan{margin:0;padding:0;box-sizing:border-box;flex:0}.fd-rateplan__inventory-select.sc-igl-rate-plan{width:100px}.rateplan-config.sc-igl-rate-plan{width:fit-content}}@media (min-width: 1200px){.rateplan-name-container.sc-igl-rate-plan{width:40%;margin-top:0}}`;

const IglRatePlan = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.buttonClicked = createEvent(this, "buttonClicked");
        this.bookingStepChange = createEvent(this, "bookingStepChange");
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
        const adults = `${formatCount(variation.adult_nbr)} ${variation.adult_nbr === 1 ? t('Lcz_Adult', { fallback: 'adult' })?.toLowerCase() : t('Lcz_Adults', { fallback: 'adults' })?.toLowerCase()}`;
        const children = variation.child_nbr > 0
            ? `${formatCount(variation.child_nbr)} ${variation.child_nbr > 1 ? t('Lcz_Children', { fallback: 'Children' })?.toLowerCase() : t('Lcz_Child', { fallback: 'Child' })?.toLowerCase()}`
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
            tooltip += `<b><u>${t('Lcz_CancellationLabel', { fallback: 'Cancellation:' })}</u></b> ${cancellationPolicy}<br/>`;
        }
        if (guaranteePolicy) {
            tooltip += `<b><u>${t('Lcz_GuaranteeLabel', { fallback: 'Guarantee:' })}</u></b> ${guaranteePolicy}`;
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
        return (h(Host, { key: '22daeb510c957ad8e49687c7f7896cf1aeb76e17', "data-testid": `rp-${this.ratePlan.id}` }, h("div", { key: '5e0e0160cb9ca4eaf88afa534e7621b6ec8e64be', class: `rate-plan ${visibleInventory?.reserved === 1 && bookingType === 'EDIT_BOOKING' ? '--current' : ''} ${isAvailableToBook ? 'rate-plan--available' : 'rate-plan--unavailable'}` }, h("div", { key: 'c24e7d2301d511631fed27ee46b0ddb35b233d7e', "data-testid": 'rp_name', class: "rateplan-name-container" }, h("div", { key: '20a86c5fd6a3558415f02d0546a4e94294c3f059' }, bookingType === 'BAR_BOOKING' ? (h(Fragment, null, h("span", { class: 'rateplan-name' }, ratePlan.short_name, " "), ratePlan.is_non_refundable && h("span", { class: "non-ref-span" }, t('Lcz_NonRefundable', { fallback: 'Non Refundable' })))) : (h(Fragment, null, h("span", { class: 'rateplan-name' }, ratePlan.short_name, " "), ratePlan.is_non_refundable && h("span", { class: "non-ref-span" }, t('Lcz_NonRefundable', { fallback: 'Non Refundable' })))), ratePlan.custom_text && h("span", { key: '88c4c606f2482252f9a2377fd76919330287832c', class: "custom-text-span" }, ratePlan.custom_text)), isAvailableToBook && (h(Fragment, { key: '4cf9329a014574037cc0567ba1c4d776ced87eaf' }, h("wa-tooltip", { key: '45d77852573593ae9f98556b7d2d7b63ced236dd', for: `rateplan-${this.ratePlan.id}` }, h("span", { key: '74c72e51bb4f299d51b435b084dec6d97d34270b', innerHTML: this.getTooltipMessages() })), h("wa-icon", { key: '3563bef06a8d652a6226076bde42f77012bd6b6b', name: "circle-info", id: `rateplan-${this.ratePlan.id}` }))), this.unavailableRatePlanIds.has(this.ratePlan.id) && (h(Fragment, { key: '6d207c0a9555e6d2ebb08b89204276e32a8a7aa1' }, h("wa-tooltip", { key: '43b2646882e697f729875b6928904c892287df7a', for: `rateplan-warning-${this.ratePlan.id}` }, t('Lcz_ForcingStopSaleRestriction', { fallback: 'You are forcing a stop-sale restriction.' })), h("wa-icon", { key: '2a02b2dea60dd5a527afb313db128965e2fbfb0b', name: "triangle-exclamation", style: { color: 'var(--wa-color-warning-fill-loud)' }, id: `rateplan-warning-${this.ratePlan.id}` })))), isAvailableToBook ? (h("div", { class: "rateplan-container" }, h("wa-select", { size: "s", disabled: disableForm, "data-testid": "adult-child-offering", onchange: evt => this.handleDataChange('adult_child_offering', evt), "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, value: this.formatVariation(selectedVariation), defaultValue: this.formatVariation(selectedVariation) }, formattedVariations?.map(variation => (h("wa-option", { value: variation, selected: this.formatVariation(selectedVariation) === variation }, variation)))), h("div", { class: "rateplan-config" }, h("div", { class: "rate-total-night-view" }, h("ir-input", { disabled: disableForm, class: "fd-rateplan__price-input", "onText-change": e => this.updateRateplanSelection({
                is_amount_modified: true,
                rp_amount: Number(e.detail),
            }), id: `rate-input-${this.ratePlan.id}`, "aria-label": t('Lcz_RatePlanRateAria', { fallback: '%1 %2 rate', params: [this.visibleInventory?.roomtype?.name, this.ratePlan.short_name] }), "aria-describedby": `${this.ratePlan.short_name}'s rate`, value: this.rate, defaultValue: this.rate, placeholder: t('Lcz_Rate', { fallback: 'Rate' }), mask: "price" }, h("span", { slot: "start" }, currency.symbol)), h("wa-select", { "data-testid": 'nigh_stay_select', disabled: disableForm, "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, size: "s", class: "fd-rateplan__nights-select", id: v4(), onchange: evt => this.updateRateplanSelection({
                view_mode: evt.target.value,
            }), value: visibleInventory?.view_mode, defaultValue: visibleInventory?.view_mode }, ratePricingMode.map(data => (h("wa-option", { value: data.CODE_NAME, selected: visibleInventory?.view_mode === data.CODE_NAME }, getSetupEntryLabel(data)))))), (bookingType === 'PLUS_BOOKING' || bookingType === 'ADD_ROOM') && (h("wa-select", { "data-testid": 'inventory_select', disabled: visibleInventory.visibleInventory === 0, class: "fd-rateplan__inventory-select", onchange: evt => this.handleDataChange('totalRooms', evt), value: visibleInventory.reserved?.toString(), defaultValue: visibleInventory.reserved?.toString(), size: "s", "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            } }, Array.from({ length: (visibleInventory.visibleInventory || 0) + 1 }, (_, i) => i).map(i => (h("wa-option", { value: i?.toString(), selected: visibleInventory.reserved === i }, i)))))), bookingType === 'EDIT_BOOKING' && (h(Fragment, null, h("ir-custom-button", { variant: "brand", "data-testid": "book_property", disabled: disableForm, type: "button", appearance: visibleInventory.reserved === 1 ? 'accent' : 'outlined', class: "rateplan__booking-btn", onClickHandler: () => {
                resetReserved();
                this.reserveRoom();
                this.bookProperty();
            } }, t('Lcz_Select', { fallback: 'Select' })))), (bookingType === 'BAR_BOOKING' || bookingType === 'SPLIT_BOOKING') && (h("ir-custom-button", { "data-testid": "book", disabled: disableForm || (bookingType === 'SPLIT_BOOKING' && this.isBookDisabled), type: "button", class: "booking-btn", variant: "brand", onClickHandler: () => this.bookProperty() }, t('Lcz_Book', { fallback: 'Book' }))))) : (h("p", { class: "rate-plan-unavailable-text" }, tRaw('Lcz_NotAvailable', { fallback: 'Not available' }))))));
    }
};
IglRatePlan.style = iglRatePlanCss();

const irBookingStatusTagCss = () => `.sc-ir-booking-status-tag-h{display:block}`;

const IrBookingStatusTag = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("wa-badge", { key: '309f8dbccfa3ad5267fc941b86d45317576ee697', style: { padding: '0.375em 0.625em', letterSpacing: '0.03rem' }, variant: this.badgeVariant[this.isRequestToCancel ? '003' : this.status.code] }, this.status.description.toUpperCase()));
    }
};
IrBookingStatusTag.style = irBookingStatusTagCss();

const irCountryPickerCss = () => `.sc-ir-country-picker-h{display:block;margin:0;padding:0;box-sizing:border-box}.combobox-menu.sc-ir-country-picker{max-height:200px;overflow:auto}.ir-ps-1.sc-ir-country-picker{padding-inline-start:0.25rem}`;

const IrCountryPicker = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.countryChange = createEvent(this, "countryChange");
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
            return (h("ir-picker", { size: this.size, label: this.label, mode: "select", placeholder: this.placeholder, value: this.selectedCountry?.id?.toString(), "onCombobox-select": e => {
                    const country = this.filteredCountries.find(c => c.id.toString() === e.detail.item.value);
                    if (!country) {
                        console.warn(`country not found`, e.detail.item);
                        return;
                    }
                    this.selectCountry(country);
                } }, this.filteredCountries.map(country => (h("ir-picker-item", { value: country.id?.toString(), label: country.name, key: country.id }, h("img", { src: country.flag, alt: country.name, style: { aspectRatio: '1', height: '15px', borderRadius: '4px' } }), h("p", { class: "ir-ps-1 m-0" }, country.name))))));
        }
        return (h("form", { class: "dropdown m-0 p-0" }, h("ir-input-text", { onTextChange: e => {
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
            } }), h("div", { class: "dropdown-menu combobox-menu", "aria-labelledby": "dropdownMenuCombobox" }, shouldShowPropertyCountry && (h(Fragment, null, h("button", { type: "button", class: `dropdown-item d-flex align-items-center ${this.selectedCountry?.id === this.propertyCountry.id ? 'active' : ''}`, onClick: () => {
                this.selectCountry(this.propertyCountry);
            } }, h("img", { src: this.propertyCountry.flag, alt: this.propertyCountry.name, style: { aspectRatio: '1', height: '15px', borderRadius: '4px' } }), h("p", { class: "ir-ps-1 m-0" }, this.propertyCountry.name)), h("div", { class: "dropdown-divider" }))), this.filteredCountries?.map(c => (h("button", { key: c.id, type: "button", class: `dropdown-item d-flex align-items-center ${this.selectedCountry?.id === c.id ? 'active' : ''}`, onClick: () => {
                this.selectCountry(c);
            } }, h("img", { src: c.flag, alt: c.name, style: { aspectRatio: '1', height: '15px', borderRadius: '4px' } }), h("p", { class: "ir-ps-1 m-0" }, c.name)))), this.filteredCountries?.length === 0 && h("p", { class: "dropdown-item-text" }, t('Lcz_InvalidCountry', { fallback: 'Invalid Country' })))));
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
        registerInstance(this, hostRef);
        this.dateChange = createEvent(this, "dateChange");
    }
    /** The currently selected check-in date. */
    fromDate = null;
    /** The currently selected check-out date. */
    toDate = null;
    /** The earliest selectable date. Defaults to 24 years in the past. */
    minDate = hooks().add(-24, 'years');
    /** The latest selectable date. Defaults to 24 years in the future. */
    maxDate = hooks().add(24, 'years');
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
    selectedDates = { start: hooks(), end: hooks() };
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
        const currentMonth = this.fromDate ? this.fromDate.clone() : hooks();
        const nextMonth = currentMonth.clone().add(1, 'month');
        this.displayedDaysArr = [this.getMonthDays(currentMonth), this.getMonthDays(nextMonth)];
    }
    /** Syncs the internal selection start when `fromDate` prop changes. */
    handleFromDateChange(newValue, oldValue) {
        if (!(newValue ?? hooks()).isSame(oldValue ?? hooks(), 'days')) {
            this.selectedDates = { ...this.selectedDates, start: newValue };
        }
    }
    /** Syncs the internal selection end when `toDate` prop changes. */
    handleToDateChange(newValue, oldValue) {
        if (!(newValue ?? hooks()).isSame(oldValue ?? hooks(), 'days')) {
            this.selectedDates = { ...this.selectedDates, end: newValue };
        }
    }
    getMonthDays(month) {
        const startDate = hooks(month).startOf('month').startOf('week');
        const endDate = hooks(month).endOf('month').endOf('week');
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
        const start = this.selectedDates.start ? this.selectedDates.start.clone() : hooks();
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
        return (h("div", { key: 'dca047d16fdaaa7c6327e4a9f85b0d007aa3fcd4', part: "base", class: "date-picker" }, this.displayedDaysArr.map((month, index) => (h("table", { part: "calendar", class: "calendar", role: "grid" }, h("thead", null, h("tr", { part: "calendar-header", class: "calendar-header" }, h("th", { colSpan: 7 }, h("div", { part: "month-navigation", class: "month-navigation" }, index === 0 && this.displayedDaysArr[0].month.clone().startOf('month').isAfter(this.minDate) && (h("button", { part: "nav-prev", name: "previous month", class: "navigation-buttons previous-month", type: "button", onClick: this.goToPreviousMonth.bind(this) }, h("p", { class: "sr-only" }, t('Lcz_PreviousMonth', { fallback: 'previous month' })), h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "16", width: "25.6", viewBox: "0 0 320 512" }, h("path", { fill: "currentColor", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" })))), h("span", { part: "month-label", class: "month-year-label" }, getMonthLabel(month.month.toDate(), { locale: this.locale })), index === 0 && (h("button", { part: "nav-next", name: "next month", class: "navigation-buttons button-next", type: "button", onClick: this.goToNextMonth.bind(this) }, h("p", { class: "sr-only" }, t('Lcz_NextMonth', { fallback: 'next month' })), h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "16", width: "25.6", viewBox: "0 0 320 512" }, h("path", { d: "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" })))), index === 1 && this.displayedDaysArr[1].month.clone().endOf('month').isBefore(this.maxDate) && (h("button", { part: "nav-next", name: "next month", class: "navigation-buttons button-next-main", type: "button", onClick: this.goToNextMonth.bind(this) }, h("p", { class: "sr-only" }, t('Lcz_NextMonth', { fallback: 'next month' })), h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "16", width: "25.6", viewBox: "0 0 320 512" }, h("path", { fill: "currentColor", d: "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" }))))))), h("tr", { part: "weekday-row", class: "weekday-header", role: "row" }, getWeekdayLabels({ locale: this.locale }).map(weekday => (h("th", { part: "weekday", class: "weekday-name", key: weekday }, weekday.replace('.', '')))))), h("tbody", { part: "days-grid", class: "days-grid" }, month.days
            .reduce((acc, day, i) => {
            const weekIndex = Math.floor(i / 7);
            if (!acc[weekIndex]) {
                acc[weekIndex] = [];
            }
            acc[weekIndex].push(day);
            return acc;
        }, [])
            .map(week => (h("tr", { part: "week-row", class: "week-row", role: "row" }, week.map((day) => {
            const checkedDate = this.checkDatePresence(day);
            const isDaySelected = this.isDaySelected(day);
            const isDaySameEnd = day.isSame(this.selectedDates.end, 'day');
            const isDaySameStart = day.isSame(this.selectedDates.start, 'day');
            const isDayAfterMaxDate = day.isAfter(this.maxDate, 'day');
            const isDayBeforeMinDate = day.isBefore(this.minDate, 'day');
            return (h("td", { part: "day-cell", class: "day-cell", key: day.format('YYYY-MM-DD'), role: "gridcell" }, day.isSame(month.month, 'month') && (h("button", { part: "day-button", disabled: isDayBeforeMinDate || isDayAfterMaxDate || (this.selectedDates.start && maxSpanDays && day.isAfter(maxSpanDays) && !this.selectedDates.end), onMouseEnter: () => this.handleMouseEnter(day), onMouseLeave: () => this.handleMouseLeave(), onClick: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.selectDay(day);
                }, style: checkedDate?.disabled && this.selectedDates.start && { cursor: 'pointer' }, title: checkedDate?.disabled ? t('Lcz_NoAvailability', { fallback: 'No availability' }) : '', "aria-unavailable": checkedDate?.disabled ? 'true' : 'false', "aria-label": `${formatDate(day.toDate(), { style: 'weekday-medium', locale: this.locale })} ${isDayBeforeMinDate || isDayAfterMaxDate ? t('Lcz_NotAvailableStatus', { fallback: 'Not available' }) : ''}`, "aria-disabled": isDayBeforeMinDate || isDayAfterMaxDate || checkedDate?.disabled ? 'true' : 'false', "aria-selected": (this.selectedDates.start && isDaySameStart) || isDaySelected || (this.selectedDates.end && isDaySameEnd), class: {
                    'day-button': true,
                    'day-range-start': this.selectedDates.start && isDaySameStart,
                    'day-range-end': this.selectedDates.end && isDaySameEnd,
                    'highlight': isDaySelected && !isDaySameStart,
                } }, h("p", { class: `day ${day.isSame(hooks(), 'day') ? 'current-date' : ''}` }, formatDate(day.toDate(), { style: 'day-only', locale: this.locale })), this.showPrice && h("p", { class: "price" }, checkedDate?.withPrice.price ? '_' : checkedDate.withPrice.price)))));
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
        registerInstance(this, hostRef);
        this.dateSelectEvent = createEvent(this, "dateSelectEvent");
        this.dateRangeChange = createEvent(this, "dateRangeChange");
        this.dateRangeShow = createEvent(this, "dateRangeShow");
        this.dateRangeHide = createEvent(this, "dateRangeHide");
    }
    get el() { return getElement(this); }
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
    fromDate = hooks().toDate();
    /** Currently selected check-out date. */
    toDate = hooks().add(1, 'day').toDate();
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
                this.fromDate = hooks(this.defaultData.fromDate, 'YYYY-MM-DD').toDate();
            }
            if (this.defaultData.toDate) {
                this.toDate = hooks(this.defaultData.toDate, 'YYYY-MM-DD').toDate();
            }
        }
        if (this.fromDate && this.toDate) {
            this.calculateTotalNights();
        }
    }
    calculateTotalNights() {
        this.totalNights = calculateDaysBetweenDates(hooks(this.fromDate).format('YYYY-MM-DD'), hooks(this.toDate).format('YYYY-MM-DD'));
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
        const startMoment = hooks(start);
        const endMoment = hooks(end);
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
        const from = formatDate(this.fromDate, 'MMM DD, YYYY');
        const to = formatDate(this.toDate, 'MMM DD, YYYY');
        return `${from} → ${to}`;
    }
    render() {
        const showNights = this.variant === 'booking' && this.withDateDifference;
        return (h("wa-popup", { key: '0c4ef20b00a7766cb626949cc3dd1e4adf67504f', part: "popup", arrow: true, placement: "bottom", flip: true, shift: true, "auto-size": "vertical", "auto-size-padding": 10, active: this.isActive, class: "igl-date-range__popup" }, h("div", { key: '7dbe4c2040b1ad7d660a21710d5cf998f417f6b4', slot: "anchor", part: "anchor", class: "igl-date-range__trigger" }, h("div", { key: 'af20be906d9b36155443486dd568c7c250ebb4fa', part: "combobox", class: "igl-date-range__control", role: "combobox", tabindex: this.disabled ? -1 : 0, "aria-haspopup": "dialog", "aria-expanded": this.isActive ? 'true' : 'false', "aria-controls": this.popupId, "aria-disabled": this.disabled ? 'true' : 'false', "aria-label": t('Lcz_SelectDateRange', { fallback: 'Select date range' }), onClick: !this.disabled ? this.togglePicker.bind(this) : undefined, onKeyDown: !this.disabled ? this.handleKeyDown.bind(this) : undefined }, h("ir-input", { key: '7b1f35536e1950ed9156b2b4ec171fd3b61c92c2', part: "input", disabled: this.disabled, class: "igl-date-range__input", readonly: true, value: this.formattedLabel, "aria-invalid": this.isInvalid, "aria-expanded": String(this.isActive), "aria-disabled": this.disabled ? 'true' : undefined }, h("wa-icon", { key: '0457033830bba1a1774739c0c215b0e9398e3e13', part: "calendar-icon", slot: "start", variant: "regular", name: "calendar" }), showNights && this.totalNights > 0 && (h("span", { key: '99b373d448ee79b96b20a4a1c347300d2d9ba2ca', part: "nights-badge", slot: "end", class: "igl-date-range__nights" }, formatCount(this.totalNights), " ", this.totalNights > 1 ? t('Lcz_Nights', { fallback: 'nights' }) : t('Lcz_Night', { fallback: 'night' })))))), h("div", { key: '62bf4fe171b62e6d66721bc2be2ab37cb46139e6', part: "body", id: this.popupId, class: "igl-date-range__calendar", role: "dialog", "aria-modal": "false", "aria-label": t('Lcz_DateRangeSelectionDialog', { fallback: 'Date range selection dialog' }) }, h("ir-custom-date-range", { key: 'd67bec375886f14e3d697c344c7aa198487b2d10', part: "calendar", exportparts: "base: calendar-base, calendar, calendar-header, month-navigation, nav-prev, nav-next, month-label, weekday-row, weekday, days-grid, week-row, day-cell, day-button", style: { '--cal-button-size': '35px' }, fromDate: hooks(this.fromDate), toDate: hooks(this.toDate), minDate: this.minDate ? hooks(this.minDate) : undefined, maxDate: this.maxDate ? hooks(this.maxDate) : undefined, onDateChange: e => this.handleCustomDateChange(e) }))));
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
    ClickOutside()
], IrDateRange.prototype, "closeDatePicker", null);
IrDateRange.style = irDateRangeCss();

const irDateViewCss = () => `:host{display:inline-flex;align-items:center;font-size:var(--ir-date-view-font-size, 0.8125rem);color:var(--ir-date-view-color, inherit);line-height:1.4}[part='base']{display:inline-flex;align-items:center;flex-wrap:wrap;gap:var(--ir-date-view-gap, 0.3125rem);}[part='from-date'],[part='to-date']{white-space:nowrap;font-weight:var(--ir-date-view-date-font-weight, 400);color:var(--ir-date-view-date-color, inherit)}[part='separator']{display:inline-flex;align-items:center;flex-shrink:0}[part='separator-icon']{width:var(--ir-date-view-separator-size, 0.75rem);height:var(--ir-date-view-separator-size, 0.75rem);display:block}.ir-flip-rtl:dir(rtl){scale:-1 1}`;

const IrDateView = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        const fromStr = formatDate(this.from_date, { style: this.format });
        const toStr = formatDate(this.to_date, { style: this.format });
        // Night-count is computed from the original values, never from the (possibly Hijri) display
        // string — re-parsing display text with a display-locale parser breaks once formatting can
        // switch calendar systems.
        const fromISO = toDate(this.from_date);
        const toISO = toDate(this.to_date);
        const diff = fromISO && toISO ? calculateDaysBetweenDates(hooks(fromISO).format('YYYY-MM-DD'), hooks(toISO).format('YYYY-MM-DD')) : 0;
        const nightLabel = diff === 1 ? t('Lcz_Night', { fallback: 'night' }) : t('Lcz_Nights', { fallback: 'nights' });
        return (h(Host, { key: '61d273bc6f2e655c1e24121b8fad0fc8d2f823b2' }, h("span", { key: '35d3cfa2a106904604905835516fd929fbdcf04a', part: "base" }, h("span", { key: 'f4342cf55a74b709d06ebe944be887970bd9bbab', part: "from-date" }, fromStr), h("span", { key: '1c59e1bc06983a9429c7f9661302eb9ddc724f67', part: "separator", "aria-hidden": "true" }, h("wa-icon", { key: '749e1f3e1da132290ed683b1e501b92b54d415d5', class: "ir-flip-rtl", name: "arrow-right", part: "separator-icon", "aria-hidden": "true" })), h("span", { key: 'da47037901c5a4469573c91359d5827aa1ae705d', part: "to-date" }, toStr), this.showDateDifference && diff > 0 && (h("span", { key: '4b50a0b9e4dfac4868f349726417f582da86c1c6', part: "night-count" }, formatCount(diff), "\u00A0", nightLabel)))));
    }
};
IrDateView.style = irDateViewCss();

const irInputTextCss = () => `.sc-ir-input-text-h{--ir-bg:#fff;--ir-primary:#1e9ff2;--ir-danger:#ff4961;--ir-border:#cacfe7;--ir-disabled-fg:#9aa1ac;--ir-readonly-bg:#f8f9fa;--ir-input-color:#3b4781;--ir-placeholder-color:#bbbfc6;--ir-floating-input-border:var(--ir-border);--ir-floating-input-border-radius:0.21rem;--ir-floating-input-height:2rem;--ir-focus-ring:none;--ir-focus-border-color:var(--ir-primary);--ir-floating-input-font-size:0.975rem;--ir-floating-input-line-height:1.45;--ir-floating-input-padding-y:0.75rem;--ir-floating-input-padding-x:1rem;--ir-floating-input-padding-x-with-affix:2rem;--ir-floating-label-fg:#6c757d;--ir-floating-label-fg-focus:#495057;--ir-floating-label-bg:#fff;--ir-floating-label-scale:0.88;--ir-floating-label-float-translateY:-70%;--ir-floating-label-resting-offset-inline:0.9rem;--ir-floating-label-resting-offset-inline-with-prefix:1.8rem;--ir-floating-input-affix-size:1rem;--ir-floating-input-affix-color:#6c757d;margin:0;padding:0;display:inline}.sc-ir-input-text-h{--blue:var(--ir-primary);--red:var(--ir-danger)}.border-theme.sc-ir-input-text{border:1px solid var(--ir-border)}.icon-container.sc-ir-input-text{color:#3b4781;border:1px solid var(--ir-border);font-size:var(--ir-floating-input-font-size);height:var(--ir-floating-input-height);background:var(--ir-bg);padding-inline-end:0 !important;border-inline-end:0;border-start-end-radius:0;border-end-end-radius:0;transition:border-color 0.15s ease-in-out,     -webkit-box-shadow 0.15s ease-in-out}input.sc-ir-input-text:focus{border-color:var(--ir-primary) !important}.error-message.sc-ir-input-text{font-size:0.875rem;padding:0;margin:0.5rem 0 0;color:var(--ir-danger)}.ir-input[data-state='empty'].sc-ir-input-text{color:var(--ir-placeholder-color)}.input-container.sc-ir-input-text{display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;flex:1}.input-container.sc-ir-input-text input.sc-ir-input-text{padding-inline-start:5px !important;padding-inline-end:5px !important;border-inline-start:0;border-start-start-radius:0 !important;border-end-start-radius:0 !important}.icon-container[data-state='focus'].sc-ir-input-text{border-color:var(--ir-primary)}.icon-container[data-disabled].sc-ir-input-text{background-color:#eceff1;border-color:rgba(118, 118, 118, 0.3)}.danger-border.sc-ir-input-text{border-color:var(--ir-danger)}.ir-floating-group.sc-ir-input-text{position:relative;display:block;border:1px solid var(--ir-floating-input-border);border-radius:var(--ir-floating-input-border-radius);background:var(--ir-bg);transition:border-color 120ms ease,     box-shadow 120ms ease;padding:0}.ir-floating-group.sc-ir-input-text:focus-within{border-color:var(--ir-focus-border-color);box-shadow:var(--ir-focus-ring)}.ir-floating-group.has-error.sc-ir-input-text,.has-error.sc-ir-input-text .ir-floating-group.sc-ir-input-text{border-color:var(--ir-danger)}.ir-floating-group.is-disabled.sc-ir-input-text{background-color:#f1f3f5}.ir-floating-group.is-readonly.sc-ir-input-text{background-color:var(--ir-readonly-bg)}.ir-floating-input.sc-ir-input-text{width:100%;display:block;border:0;outline:0;background:transparent;color:var(--ir-input-color);font-size:var(--ir-floating-input-font-size);line-height:var(--ir-floating-input-line-height);border-radius:var(--ir-floating-input-border-radius);box-shadow:none;padding:var(--ir-floating-input-padding-y) var(--ir-floating-input-padding-x);height:var(--ir-floating-input-height)}.ir-floating-input.danger-border.sc-ir-input-text{box-shadow:none}.ir-floating-label.sc-ir-input-text{position:absolute;top:50%;transform:translateY(-50%);pointer-events:none;padding:0 0.4rem;color:var(--ir-floating-label-fg);background:transparent;transition:transform 120ms ease,     color 120ms ease,     top 120ms ease,     background-color 120ms ease,     opacity 120ms ease;opacity:0.95;line-height:1}.ir-floating-label.sc-ir-input-text{inset-inline-start:var(--ir-floating-label-resting-offset-inline)}.ir-floating-group.sc-ir-input-text:focus-within .ir-floating-label.sc-ir-input-text,.ir-floating-input.sc-ir-input-text:not(:placeholder-shown)+.ir-floating-label.sc-ir-input-text,.ir-floating-group[data-has-value='true'].sc-ir-input-text .ir-floating-label.sc-ir-input-text{top:0;transform:translateY(var(--ir-floating-label-float-translateY)) scale(var(--ir-floating-label-scale));background:var(--ir-floating-label-bg);color:var(--ir-floating-label-fg-focus);font-size:12px;padding:0}.ir-floating-group.has-error.sc-ir-input-text .ir-floating-label.sc-ir-input-text,.has-error.sc-ir-input-text .ir-floating-group.sc-ir-input-text .ir-floating-label.sc-ir-input-text{color:var(--ir-danger)}.ir-floating-group.is-disabled.sc-ir-input-text .ir-floating-label.sc-ir-input-text{color:var(--ir-disabled-fg)}@supports (-webkit-touch-callout: none){.ir-floating-input.sc-ir-input-text{border-radius:var(--ir-floating-input-border-radius)}}.prefix-container.sc-ir-input-text,.suffix-container.sc-ir-input-text{position:absolute;top:0;bottom:0;display:inline-flex;align-items:center;color:var(--ir-floating-input-affix-color);pointer-events:none}.prefix-container.sc-ir-input-text{inset-inline-start:0.5rem}.suffix-container.sc-ir-input-text{inset-inline-end:0.5rem}.sc-ir-input-text-s>[slot='prefix'],.sc-ir-input-text-s>[slot='suffix']{display:inline-flex;width:var(--ir-floating-input-affix-size);height:var(--ir-floating-input-affix-size)}.ir-floating-group[data-have-prefix='true'].sc-ir-input-text .ir-floating-input.sc-ir-input-text{padding:var(--ir-floating-input-padding-y) var(--ir-floating-input-padding-x-with-affix)}.ir-floating-group[data-have-prefix='true'].sc-ir-input-text .ir-floating-label.sc-ir-input-text{inset-inline-start:var(--ir-floating-label-resting-offset-inline-with-prefix)}.no-slot.sc-ir-input-text{display:none}.ir-ps-0.sc-ir-input-text{padding-inline-start:0}`;

const IrInputText = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.textChange = createEvent(this, "textChange");
        this.inputBlur = createEvent(this, "inputBlur");
        this.inputFocus = createEvent(this, "inputFocus");
    }
    get el() { return getElement(this); }
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
            this.id = v4();
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
        this.maskInstance = IMask(this.inputRef, withLatinDigits(this.mask));
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
        return (h("div", { class: "form-group", style: this.inputContainerStyle }, h("div", { class: `ir-floating-group ${this.error ? 'has-error' : ''} ${this.disabled ? 'is-disabled' : ''} ${this.readonly ? 'is-readonly' : ''}`, "data-has-value": String(hasValue), "data-focused": String(this.inputFocused), "data-have-prefix": String(this.hasPrefixSlot), "data-have-suffix": String(this.hasSuffixSlot), part: "form-group" }, h("span", { part: "prefix-container", class: { 'prefix-container': true, 'no-slot': !this.hasPrefixSlot } }, h("slot", { name: "prefix" })), h("input", { part: "input", "data-state": !!this.value ? undefined : this.mask ? 'empty' : undefined, maxLength: this.maxLength, "data-testid": this.testId, style: this.inputForcedStyle, id: this.id, name: this.name, ref: el => (this.inputRef = el), readOnly: this.readonly, type: this.type, class: `ir-input ir-floating-input ${this.inputStyles || ''} ${this.error ? 'danger-border' : ''} text-${this.textSize}`, onBlur: this.handleBlur.bind(this), onFocus: e => {
                this.inputFocused = true;
                this.inputFocus.emit(e);
            }, placeholder: " ", autoComplete: this.autoComplete, autocomplete: this.autoComplete, value: this.value, onInput: this.handleInputChange.bind(this), required: this.required, disabled: this.disabled, "aria-invalid": String(this.error), "aria-required": String(this.required) }), h("label", { part: "label", htmlFor: this.id, class: "ir-floating-label" }, labelText, this.required ? ' *' : ''), h("span", { part: "suffix-container", class: { 'suffix-container': true, 'no-slot': !this.hasSuffixSlot } }, h("slot", { name: "suffix" }))), this.errorMessage && this.error && (h("p", { part: "error-message", class: "error-message" }, this.errorMessage))));
    }
    render() {
        if (this.variant === 'floating-label') {
            return this.renderFloatingLabel();
        }
        if (this.variant === 'icon') {
            return (h("fieldset", { class: "position-relative has-icon-left input-container" }, h("label", { htmlFor: this.id, class: "input-group-prepend bg-white m-0" }, h("span", { "data-disabled": this.disabled, "data-state": this.inputFocused ? 'focus' : '', class: `input-group-text icon-container bg-white ${this.error ? 'danger-border' : ''}`, id: "basic-addon1" }, h("slot", { name: "icon" }))), h("input", { maxLength: this.maxLength, "data-testid": this.testId, style: this.inputForcedStyle, "data-state": !!this.value ? undefined : this.mask ? 'empty' : undefined, id: this.id, ref: el => (this.inputRef = el), readOnly: this.readonly, type: this.type, class: `ir-input form-control bg-white ir-ps-0 input-sm rate-input py-0 m-0 rateInputBorder ${this.error ? 'danger-border' : ''}`, onBlur: this.handleBlur.bind(this), onFocus: e => {
                    this.inputFocused = true;
                    this.inputFocus.emit(e);
                }, placeholder: this.placeholder, value: this.value, onInput: this.handleInputChange.bind(this), required: this.required, disabled: this.disabled, autoComplete: this.autoComplete })));
        }
        return (h("div", { class: 'form-group', style: this.inputContainerStyle }, h("div", { class: "input-group row m-0" }, this.label && (h("div", { class: `input-group-prepend col-${this.labelWidth} ${this.labelContainerClassname} p-0 text-${this.labelColor}` }, h("label", { htmlFor: this.id, class: `input-group-text ${this.labelPosition === 'right' ? 'justify-content-end' : this.labelPosition === 'center' ? 'justify-content-center' : ''} ${this.labelBackground ? 'bg-' + this.labelBackground : ''} flex-grow-1 text-${this.labelColor} border-${this.labelBorder === 'none' ? 0 : this.labelBorder} ` }, this.label, this.required ? '*' : ''))), h("input", { maxLength: this.maxLength, "data-testid": this.testId, style: this.inputForcedStyle, "data-state": !!this.value ? undefined : this.mask ? 'empty' : undefined, id: this.id, ref: el => (this.inputRef = el), readOnly: this.readonly, type: this.type, class: this.clearBaseStyles
                ? `${this.inputStyles}`
                : `${this.error ? 'border-danger' : ''} form-control text-${this.textSize} col-${this.label ? 12 - this.labelWidth : 12} ${this.readonly ? 'bg-white' : ''} ${this.inputStyles}`, onBlur: this.handleBlur.bind(this), onFocus: e => {
                this.inputFocused = true;
                this.inputFocus.emit(e);
            }, placeholder: this.placeholder, autoComplete: this.autoComplete, autocomplete: this.autoComplete, value: this.value, onInput: this.handleInputChange.bind(this), required: this.required, disabled: this.disabled })), this.errorMessage && this.error && h("p", { class: "error-message" }, this.errorMessage)));
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
        registerInstance(this, hostRef);
        this.mobileInputChange = createEvent(this, "mobile-input-change");
        this.mobileInputCountryChange = createEvent(this, "mobile-input-country-change");
    }
    get el() { return getElement(this); }
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
        return (h(Host, { key: '19e13e4972c8aadd9d281e659e110852cfccfce6', size: 's', role: "group", "aria-labelledby": this.labelId, "aria-describedby": describedByIds }, h("label", { key: 'c6338f4f7fcbb731b432aa0093c9f3a7608d611c', class: "mobile-input__label", id: this.labelId, htmlFor: this.inputId }, this.label || t('Lcz_PhoneNumber', { fallback: 'Phone number' }), this.required ? (h("span", { class: "mobile-input__required", "aria-hidden": "true" }, "*")) : null), this.description ? (h("p", { id: this.descriptionId, class: "mobile-input__description" }, this.description)) : null, h("div", { key: '511635ced97018c6bc2b8c483c9d7ea5dcc34cf4', class: { 'mobile-input__container': true, 'mobile-input__container--disabled': this.disabled } }, h("wa-dropdown", { key: '4fad2e76567a296ccaa42e04b36c91193812dba3', "onwa-show": e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
            }, "onwa-hide": e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
            }, "onwa-select": this.handleCountrySelect, class: "mobile-input__prefix-dropdown" }, h("button", { key: 'f08e4320c1ea1d922d97ce03c37f586cfd4251b8', "aria-invalid": String(this.isInvalid && !this.selectedCountry), slot: "trigger", type: "button", class: "mobile-input__trigger", disabled: this.disabled, "aria-haspopup": "listbox", "aria-label": t('Lcz_ChangeCountryCallingCode', { fallback: 'Change country calling code' }) }, h("div", { key: '47a81ac9f6b1873bff102156681c4796849ddce1', class: "mobile-input__phone-country", style: { marginInlineEnd: '1rem' } }, this.selectedCountry ? (h("img", { src: this.selectedCountry?.flag, alt: this.selectedCountry?.name, class: "mobile-input__logo" })) : (h("span", null, t('Lcz_Select', { fallback: 'Select' })))), h("wa-icon", { key: '6a3369ec085db8d4fe97f6b81ded5b53c651b74e', class: "mobile-input__phone-country-caret", name: "chevron-down", "aria-hidden": "true" })), h("span", { key: '3c2acd281349cb70d4d2acc6e92cb2e5509b9901', class: "sr-only", id: this.countryStatusId, "aria-live": "polite" }, this.selectedCountry
            ? t('Lcz_SelectedCountryAnnouncement', {
                fallback: `Selected country ${this.selectedCountry.name} ${this.selectedCountry.phone_prefix}`,
                params: [this.selectedCountry.name, this.selectedCountry.phone_prefix],
            })
            : t('Lcz_SelectACountry', { fallback: 'Select a country' })), this.countries.map(country => (h("wa-dropdown-item", { value: country.id.toString() }, h("div", { class: "mobile-input__phone-country", role: "option", "aria-selected": this.selectedCountry?.id === country.id ? 'true' : 'false' }, h("img", { src: country.flag, alt: country.name, class: "mobile-input__logo" }), h("span", { class: "mobile-input__country-name" }, country.name), h("span", { class: "mobile-input__country-prefix" }, country.phone_prefix)))))), h("ir-input", { key: '0a977bf364f9f8050d6431e984a13ed7311b2fbc', "aria-invalid": String(this.isInvalid && (this.value ?? '').length < 4), type: "tel", inputMode: "tel", autocomplete: "off", disabled: this.disabled, placeholder: this.placeholder || t('Lcz_EnterPhoneNumber', { fallback: 'Enter phone number' }), defaultValue: this.value, value: this.value, class: "phone__input", "onText-change": e => {
                const value = e.detail;
                this.value = value;
                this.mobileInputChange.emit({ formattedValue: value, value, country: this.selectedCountry });
            } }, this.selectedCountry && h("span", { key: '61de283d7645bdf8241403341268b23a90e9416e', slot: "start" }, this.selectedCountry?.phone_prefix))), this.error ? (h("p", { id: this.errorId, class: "mobile-input__error", role: "alert" }, this.error)) : null));
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
        registerInstance(this, hostRef);
        this.assignmentChange = createEvent(this, "assignmentChange");
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
        return (h(Host, { key: '042aad78ad86553c27837b4e4c49741388210db8' }, h("wa-radio-group", { key: '205c7fdf75a89362fae6a91cee0b555892e5d841', onchange: e => this.assignmentChange.emit(e.target.value), defaultValue: this.assigneeType, value: this.assigneeType, size: "s", label: this.label || t('Lcz_AssignToFolio', { fallback: 'Assign to folio' }), orientation: "vertical" }, h("wa-radio", { key: 'b3ccd2803ea59e6f60a0476b125a251ea403e857', value: "agent", appearance: "button" }, t('Lcz_Agent', { fallback: 'Agent' }), ": ", this.agent?.name), h("wa-radio", { key: 'b9b3a3c1720bb8e9d1d73eddbfc3bb4d32e62204', value: "guest", appearance: "button" }, t('Lcz_Guest', { fallback: 'Guest' })))));
    }
};
IrServiceAssigneeSelect.style = irServiceAssigneeSelectCss();

export { IglApplicationInfo as igl_application_info, IglRatePlan as igl_rate_plan, IrBookingStatusTag as ir_booking_status_tag, IrCountryPicker as ir_country_picker, IrCustomDateRange as ir_custom_date_range, IrDateRange as ir_date_range, IrDateView as ir_date_view, IrInputText as ir_input_text, IrMobileInput as ir_mobile_input, IrServiceAssigneeSelect as ir_service_assignee_select };
