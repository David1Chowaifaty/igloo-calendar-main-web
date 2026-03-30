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
        return (h(Host, { key: '6be02f60ce6ce12d036035915efea6d689b952a1', class: "fd-application-info", "data-testid": `room_info_${this.rateplanSelection.ratePlan.id}` }, h("div", { key: '933cf294c219fe4653f663b5fc08ca82433eb0da', class: "fd-application-info__header" }, (this.bookingType === 'PLUS_BOOKING' || this.bookingType === 'ADD_ROOM' || this.bookingType === 'EDIT_BOOKING') && (h("span", { key: '28361f25baf9bd21c84235af3281132e4cd8ce95', class: "fd-application-info__roomtype-title" }, this.rateplanSelection.roomtype.name)), h("div", { key: '9acea0d8e22cba9de1115223942211951ad90f42', class: "fd-application-info__details" }, h("div", { key: '7ece43f97603c4cba3ec05da4a2087538d7365dc', class: "fd-application-info__rateplan" }, h("p", { key: '44c76ed36424d26f4ee04950a51cd9ddeea8367b', class: "fd-application-info__rateplan-name" }, this.rateplanSelection.ratePlan.short_name, this.rateplanSelection.ratePlan.is_non_refundable && h("span", { key: '27840169e9bba718a519dade0dfd4bd4619bcdd9', class: "fd-application-info__non-refundable" }, "Non Refundable")), h("wa-tooltip", { key: 'fa8a2f909164bdc9e031844852aa63db5d1433aa', for: this.tooltipId }, h("span", { key: '544ac6805f93144dd9b2dd30e7b026462f1df596', innerHTML: this.getTooltipMessages() })), h("wa-icon", { key: 'ae1513a98ebeb340995724541167ead1c6e231de', name: "circle-info", id: this.tooltipId })), h("p", { key: '3b02b40c01a5ef461ea9110de69ce285b91786ec', class: "fd-application-info__variation", innerHTML: formattedVariation })), h("p", { key: '74c8bc8172967774fcaf84f493e4fe2b6bccfdd5', class: "fd-application-info__price" }, h("span", { key: '7def5af8c8b0d34131c4c2225665a45350756265', class: "ir-price" }, formatAmount(this.currency?.symbol, this.amount), "/", locales.entries.Lcz_Stay), h("p", { key: '12f67eebd1bb14c06aed188d6448bca257c9e964', style: { margin: '0', padding: '0', fontSize: '0.75rem' } }, "Including taxes and fees"))), h("div", { key: 'a1865c459087e3f79cfe7a1d9c2efdd54aa98277', class: "fd-application-info__footer" }, h("div", { key: '5daaef94ac7273e9d113b48d82a29a2a665125b7', class: "fd-application-info__rateplan" }, h("p", { key: 'f74b2edfb033b838625bb3d6dff2730ea0bed559', class: "fd-application-info__rateplan-name" }, this.rateplanSelection.ratePlan.short_name), h("wa-tooltip", { key: 'a393b203befd3ef2dbc6ac9bdc672e6e12804bff', for: `mobile-${this.tooltipId}` }, h("span", { key: '9f51bcefd0a23f222970240efb57c06e02c093b9', innerHTML: this.getTooltipMessages() })), h("wa-icon", { key: 'c3472bd1dc3698f3f85efb1c22d954954b661194', name: "circle-info", id: `mobile-${this.tooltipId}` })), h("p", { key: 'c6289f47cc9d899b3b3ddb0e9d9ed2b0f9f17052', class: "fd-application-info__variation", innerHTML: formattedVariation })), h("div", { key: '6892c3c49befdd24022ba792b8a933b27a1f0186', class: "fd-application-info__form" }, h("ir-validator", { key: 'c10150d6eec91d0464e899162b679cc2f6f3c2a4', value: this.guestInfo?.first_name, schema: GuestCredentials.shape.first_name }, h("ir-input", { key: '59568e80ce3f1f690d1033c5c233a3b4c74b18cb', class: "fd-application-info__input",
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
            } })), h("ir-validator", { key: 'bae1f1280a2586e1b0005e4113548cff6c5ea42e', value: this.guestInfo?.last_name, schema: GuestCredentials.shape.last_name }, h("ir-input", { key: 'd00bf16e719664a7b746f010064bd76eaa9dbdca', class: "fd-application-info__input", type: "text",
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
            (this.bookingType === 'PLUS_BOOKING' || this.bookingType === 'ADD_ROOM' || this.bookingType === 'EDIT_BOOKING') && (h("wa-select", { key: '11092dcccd2accf1c4ad3f86470c3c38a8fa4d62', "with-clear": true, size: "small", class: "fd-application-info__select", placeholder: locales.entries.Lcz_Assignunits, "data-testid": "unit", value: this.guestInfo?.unit, defaultValue: this.guestInfo?.unit, onchange: event => this.updateGuest({
                unit: event.target.value,
            }) }, filteredRoomList.map(room => (h("wa-option", { value: room.id.toString(), selected: this.guestInfo?.unit === room.id.toString() }, room.name))))), this.rateplanSelection.roomtype.is_bed_configuration_enabled && (h("ir-validator", { key: '499356a202dace9294a53f8f61ea6edd16de444b', value: this.guestInfo?.bed_preference, schema: z.string().nonempty() }, h("wa-select", { key: 'e68ee05b7178bacf5e9f98bf89162918e5edb105', "with-clear": true, size: "small", class: "fd-application-info__select", placeholder: locales.entries.Lcz_BedConfiguration, "data-testid": "bed_configuration", value: this.guestInfo?.bed_preference, defaultValue: this.guestInfo?.bed_preference,
            // aria-invalid={String(Boolean(this.isButtonPressed && this.guestInfo?.bed_preference === ''))}
            onchange: event => this.updateGuest({
                bed_preference: event.target.value,
            }) }, this.bedPreferenceType.map(data => (h("wa-option", { value: data.CODE_NAME, selected: this.guestInfo?.bed_preference === data.CODE_NAME }, data.CODE_VALUE_EN)))))), h("p", { key: '8aaae200c1fa20c6c6e37c7edba08197b926877a', class: "fd-application-info__price-inline" }, h("span", { key: '28225bf6e44f9cceb606ca53eb0708116ca887a5', class: "ir-price" }, formatAmount(this.currency?.symbol, this.amount), "/", locales.entries.Lcz_Stay), h("p", { key: 'c4b6a1ec04ec09eef4bbfce0f8d70dd3bd2b9005', style: { margin: '0', padding: '0', fontSize: '0.75rem' } }, "Including taxes and fees"))), this.rateplanSelection.selected_variation.child_nbr > 0 && (h("div", { key: 'e630cdeb5485be310e950328f96396995cf8757c', class: "fd-application-info__infant" }, h("p", { key: '6ef015ad2264f05f3b6877ee74dbf6547cba62b9', class: "fd-application-info__infant-label" }, "Any of the children below 3 years?"), h("wa-select", { key: '29dd92eacf5b32ab436857ac5dfdcacea454d445', size: "small", class: "fd-application-info__select fd-application-info__select--inline", placeholder: locales.entries['No'] || 'No', value: this.guestInfo?.infant_nbr?.toString(), defaultValue: this.guestInfo?.infant_nbr?.toString(), onchange: event => {
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