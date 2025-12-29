import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { b as booking_store, u as updateRoomGuest, a as updateBookedByGuest, m as modifyBookingStore } from './booking.store.js';
import { l as locales } from './locales.store.js';
import { i as isSingleUnit, c as calendar_data } from './calendar-data.js';
import { f as formatAmount } from './utils.js';
import { V as VariationService } from './variation.service.js';
import { G as GuestCredentials } from './types.js';
import { z } from './index2.js';
import { d as defineCustomElement$2 } from './ir-input2.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';
import { v as v4 } from './v4.js';

const iglApplicationInfoCss = ".sc-igl-application-info-h{color:var(--wa-color-text-normal);font-family:var(--wa-font-family-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;text-align:start;display:flex;flex-direction:column;gap:0.5rem;margin-top:1.5rem}.fd-application-info__header.sc-igl-application-info{display:flex;gap:1rem;align-items:center;justify-content:space-between}.fd-application-info__variation.sc-igl-application-info{padding:0;margin:0}.fd-application-info__form.sc-igl-application-info{display:flex;flex-direction:column;gap:1rem}.fd-application-info__price-inline.sc-igl-application-info,.fd-application-info__details.sc-igl-application-info{display:none}.fd-application-info__footer.sc-igl-application-info,.fd-application-info__rateplan.sc-igl-application-info{display:flex;align-items:center;gap:1rem}.fd-application-info__footer.sc-igl-application-info{justify-content:space-between}.fd-application-info__rateplan-name.sc-igl-application-info{font-size:var(--wa-font-size-m);margin:0;padding:0}.fd-application-info__non-refundable.sc-igl-application-info{color:var(--wa-color-success-fill-loud);margin-inline-start:0.5rem}.fd-application-info__roomtype-title.sc-igl-application-info{font-size:var(--wa-font-size-l)}.fd-application-info__infant.sc-igl-application-info{display:flex;flex-direction:column;gap:0.875rem}.fd-application-info__infant-label.sc-igl-application-info{margin:0;padding:0;color:var(--wa-color-danger-fill-loud)}@media (min-width: 768px){.fd-application-info__infant.sc-igl-application-info{flex-direction:row;align-items:center}.fd-application-info__infant.sc-igl-application-info .fd-application-info__select.sc-igl-application-info{max-width:100px}.fd-application-info__roomtype-title.sc-igl-application-info{font-size:var(--wa-font-size-m)}.fd-application-info__header.sc-igl-application-info{justify-content:flex-start;align-items:center;gap:0.5rem}.fd-application-info__form.sc-igl-application-info{flex-direction:row}.fd-application-info__price-inline.sc-igl-application-info{display:flex;padding:0;margin:0;align-items:center}.fd-application-info__details.sc-igl-application-info{display:flex;align-items:center;gap:0.5rem}.fd-application-info__price.sc-igl-application-info,.fd-application-info__footer.sc-igl-application-info{display:none}}";
const IglApplicationInfoStyle0 = iglApplicationInfoCss;

const IglApplicationInfo = /*@__PURE__*/ proxyCustomElement(class IglApplicationInfo extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
    variationService = new VariationService();
    shouldSyncBookedByFirstName = !booking_store.bookedByGuest?.firstName;
    shouldSyncBookedByLastName = !booking_store.bookedByGuest?.lastName;
    componentWillLoad() {
        if (isSingleUnit(this.rateplanSelection.roomtype.id)) {
            const filteredRooms = this.filterRooms();
            if (filteredRooms.length > 0)
                this.updateGuest({ unit: filteredRooms[0]?.id?.toString() });
        }
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
    getAmount() {
        if (this.rateplanSelection.is_amount_modified) {
            return this.rateplanSelection.view_mode === '001' ? this.rateplanSelection.rp_amount : this.rateplanSelection.rp_amount * this.totalNights;
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
        return (h(Host, { key: '41d64d2b721ba9d485e65b781c41ecb6e6154c3a', class: "fd-application-info", "data-testid": `room_info_${this.rateplanSelection.ratePlan.id}` }, h("div", { key: '552c4dd6969d06104fc90c949270a849dfa1cf46', class: "fd-application-info__header" }, (this.bookingType === 'PLUS_BOOKING' || this.bookingType === 'ADD_ROOM' || this.bookingType === 'EDIT_BOOKING') && (h("span", { key: 'fc46c90ce7db311eb0ee6a054d152ea8c56d1948', class: "fd-application-info__roomtype-title" }, this.rateplanSelection.roomtype.name)), h("div", { key: '8fe61dbef17fd4d6c499773769687dbacc1d7254', class: "fd-application-info__details" }, h("div", { key: '3563a9fe5872f207cfcb3ab2a8c8f03575768d4f', class: "fd-application-info__rateplan" }, h("p", { key: '250bff87b5d3c879d12db0027cd5c5d3a8723ed1', class: "fd-application-info__rateplan-name" }, this.rateplanSelection.ratePlan.short_name, this.rateplanSelection.ratePlan.is_non_refundable && h("span", { key: '9d7db1a9ad9421a9431e418c5645ab2a3f85aaaa', class: "fd-application-info__non-refundable" }, "Non Refundable")), h("wa-tooltip", { key: '62aa4521e19f328cac12f745d07c510ebf5582fb', for: this.tooltipId }, h("span", { key: 'df406eb85a3764b18e6954428e0cd9b180f29f36', innerHTML: this.getTooltipMessages() })), h("wa-icon", { key: 'ce4ba310a99d1ba18b34678a1674886ff5937ebe', name: "circle-info", id: this.tooltipId })), h("p", { key: '4bfc74427a8903192337a63ebe850c889b2e61dc', class: "fd-application-info__variation", innerHTML: formattedVariation })), h("p", { key: '6e390a1eb0973080bb92395982b63d9bc596c16e', class: "fd-application-info__price p-0 m-0" }, h("span", { key: 'e31e24175720a59cf45de33ef79b3f4dcf991f53', class: "ir-price" }, formatAmount(this.currency?.symbol, this.getAmount())), "/", locales.entries.Lcz_Stay)), h("div", { key: '906c96926c675ac141b3261495749484bad89f5f', class: "fd-application-info__footer" }, h("div", { key: 'cc5b09062a67e311dc66849276239b557aecfc14', class: "fd-application-info__rateplan" }, h("p", { key: '742ed545816b9080c5417ce54c944e671cc00b29', class: "fd-application-info__rateplan-name" }, this.rateplanSelection.ratePlan.short_name), h("wa-tooltip", { key: 'aea6499f517413c29902983e2817ac5a52258bad', for: `mobile-${this.tooltipId}` }, h("span", { key: '54e46b28dc91c75d6bfdc845cb952d1d23d682c3', innerHTML: this.getTooltipMessages() })), h("wa-icon", { key: '9229e66bb2d6626700119dd102c248cf6d7a47a2', name: "circle-info", id: `mobile-${this.tooltipId}` })), h("p", { key: '4ffbcc422ba49b1cd6391cb02b4ab76366c235fe', class: "fd-application-info__variation", innerHTML: formattedVariation })), h("div", { key: '85acff50c33482a30229f01dd1260cb22c764c23', class: "fd-application-info__form" }, h("ir-validator", { key: 'b3ebe4a5dd4d563ad8cf42b407bcecf86b896509', value: this.guestInfo?.first_name, schema: GuestCredentials.shape.first_name }, h("ir-input", { key: '2ef47fa1083f2b7b0824816140d6a87292b321bb', class: "fd-application-info__input",
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
            } })), h("ir-validator", { key: '194db96a314b15afbe9608425e156b713abba60b', value: this.guestInfo?.last_name, schema: GuestCredentials.shape.last_name }, h("ir-input", { key: '0e2d5eed010867eb70d244c37a17339641ff5350', class: "fd-application-info__input", type: "text",
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
            (this.bookingType === 'PLUS_BOOKING' || this.bookingType === 'ADD_ROOM' || this.bookingType === 'EDIT_BOOKING') && (h("wa-select", { key: '51059b67d27f21ff5653addf4f4f70d59dd0a4ac', "with-clear": true, size: "small", class: "fd-application-info__select", placeholder: locales.entries.Lcz_Assignunits, "data-testid": "unit", value: this.guestInfo?.unit, defaultValue: this.guestInfo?.unit, onchange: event => this.updateGuest({
                unit: event.target.value,
            }) }, filteredRoomList.map(room => (h("wa-option", { value: room.id.toString(), selected: this.guestInfo?.unit === room.id.toString() }, room.name))))), this.rateplanSelection.roomtype.is_bed_configuration_enabled && (h("ir-validator", { key: 'dedcd6890d04ffda36f8c3d44d018317651b5da0', value: this.guestInfo?.bed_preference, schema: z.string().nonempty() }, h("wa-select", { key: '0242f6edd0385edab526d4af2863f4c8a41b3f16', "with-clear": true, size: "small", class: "fd-application-info__select", placeholder: locales.entries.Lcz_BedConfiguration, "data-testid": "bed_configuration", value: this.guestInfo?.bed_preference, defaultValue: this.guestInfo?.bed_preference,
            // aria-invalid={String(Boolean(this.isButtonPressed && this.guestInfo?.bed_preference === ''))}
            onchange: event => this.updateGuest({
                bed_preference: event.target.value,
            }) }, this.bedPreferenceType.map(data => (h("wa-option", { value: data.CODE_NAME, selected: this.guestInfo?.bed_preference === data.CODE_NAME }, data.CODE_VALUE_EN)))))), h("p", { key: '38d78fe3e0d7bf8dc109c6a052e9635c81ef7033', class: "fd-application-info__price-inline" }, h("span", { key: '968195375c02741cf5a648f58974ec2cd9ba8919', class: "ir-price" }, formatAmount(this.currency?.symbol, this.getAmount())), "/", locales.entries.Lcz_Stay)), this.rateplanSelection.selected_variation.child_nbr > 0 && (h("div", { key: '1bbe0830160553ad2500ca1a6020498e70918064', class: "fd-application-info__infant" }, h("p", { key: '3e5919437253bb7c2154ad57bac642dfa1e956cc', class: "fd-application-info__infant-label" }, "Any of the children below 3 years?"), h("wa-select", { key: '2bd3524408d876015355f61e9ce0c85d1ce93742', size: "small", class: "fd-application-info__select fd-application-info__select--inline", placeholder: locales.entries['No'] || 'No', value: this.guestInfo?.infant_nbr?.toString(), defaultValue: this.guestInfo?.infant_nbr?.toString(), onchange: event => this.updateGuest({
                infant_nbr: Number(event.target.value),
            }), withClear: true }, Array.from({ length: this.rateplanSelection.selected_variation.child_nbr }, (_, i) => i + 1).map(item => (h("wa-option", { value: item.toString(), selected: this.guestInfo?.infant_nbr === item }, item))))))));
    }
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
        "isButtonPressed": [32]
    }, [[16, "buttonClicked", "handleButtonClicked"]]]);
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