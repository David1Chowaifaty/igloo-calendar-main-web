import { r as registerInstance, c as createEvent, h, H as Host, F as Fragment, g as getElement } from './index-7e96440e.js';
import { V as VariationService, B as BookingService, b as booking_store, n as updateRoomGuest, u as updateBookedByGuest, m as modifyBookingStore, e as reserveRooms, a as resetReserved, o as updateRoomParams } from './booking.service-03dcce42.js';
import { l as locales } from './locales.store-cb784e95.js';
import { i as isSingleUnit, c as calendar_data } from './calendar-data-2ae53dc9.js';
import { h as formatAmount } from './utils-4dd4655a.js';
import { G as GuestCredentials } from './types-f16787f2.js';
import { z } from './index-87419685.js';
import { v as v4 } from './v4-964634d6.js';
import { c as calculateDaysBetweenDates } from './booking-2e52fb0c.js';
import { h as hooks } from './moment-ab846cee.js';
import './axios-aa1335b8.js';
import './index-f100e9d2.js';
import './type-f926f853.js';

const iglApplicationInfoCss = ".sc-igl-application-info-h{color:var(--wa-color-text-normal);font-family:var(--wa-font-family-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;text-align:start;display:flex;flex-direction:column;gap:0.5rem;margin-top:1.5rem}.fd-application-info__header.sc-igl-application-info{display:flex;gap:1rem;align-items:flex-start;justify-content:space-between}.fd-application-info__variation.sc-igl-application-info{padding:0;margin:0}.fd-application-info__form.sc-igl-application-info{display:flex;flex-direction:column;gap:1rem}.fd-application-info__price-inline.sc-igl-application-info,.fd-application-info__details.sc-igl-application-info{display:none}.fd-application-info__footer.sc-igl-application-info,.fd-application-info__rateplan.sc-igl-application-info{display:flex;align-items:center;gap:1rem}.fd-application-info__footer.sc-igl-application-info{justify-content:space-between}.fd-application-info__rateplan-name.sc-igl-application-info{font-size:var(--wa-font-size-m);margin:0;padding:0}.fd-application-info__non-refundable.sc-igl-application-info{color:var(--wa-color-success-fill-loud);margin-inline-start:0.5rem}.fd-application-info__roomtype-title.sc-igl-application-info{font-size:var(--wa-font-size-l)}.fd-application-info__infant.sc-igl-application-info{display:flex;flex-direction:column;gap:0.875rem}.fd-application-info__infant-label.sc-igl-application-info{margin:0;padding:0;color:var(--wa-color-danger-fill-loud)}.fd-application-info__price.sc-igl-application-info{margin:0;padding:0;display:flex;flex-direction:column}@media (min-width: 768px){.fd-application-info__infant.sc-igl-application-info{flex-direction:row;align-items:center}.fd-application-info__infant.sc-igl-application-info .fd-application-info__select.sc-igl-application-info{max-width:100px}.fd-application-info__roomtype-title.sc-igl-application-info{font-size:var(--wa-font-size-m)}.fd-application-info__header.sc-igl-application-info{justify-content:flex-start;align-items:center;gap:0.5rem}.fd-application-info__form.sc-igl-application-info{flex-direction:row}.fd-application-info__price-inline.sc-igl-application-info{display:flex;flex-direction:column;padding:0;margin:0;align-items:flex-end}.fd-application-info__details.sc-igl-application-info{display:flex;align-items:center;gap:0.5rem}.fd-application-info__price.sc-igl-application-info,.fd-application-info__footer.sc-igl-application-info{display:none}}";
const IglApplicationInfoStyle0 = iglApplicationInfoCss;

const IglApplicationInfo = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: 'c438ba75af1c675baf69605eb6137bebeb96093b', class: "fd-application-info", "data-testid": `room_info_${this.rateplanSelection.ratePlan.id}` }, h("div", { key: '9180927bd6a4509adc3a65ede482595dd1c2b715', class: "fd-application-info__header" }, (this.bookingType === 'PLUS_BOOKING' || this.bookingType === 'ADD_ROOM' || this.bookingType === 'EDIT_BOOKING') && (h("span", { key: '35fcf78243e505f5d4d7d05cdc8fabc0b9bbd7e5', class: "fd-application-info__roomtype-title" }, this.rateplanSelection.roomtype.name)), h("div", { key: '70430c82d75c0b46fc732fcf03e20414ebd50d72', class: "fd-application-info__details" }, h("div", { key: '35214bccaeca24349dec61d2b1651927c4a0cad7', class: "fd-application-info__rateplan" }, h("p", { key: '82b10a2c669a85804e62fbd7040f02e37d2e52df', class: "fd-application-info__rateplan-name" }, this.rateplanSelection.ratePlan.short_name, this.rateplanSelection.ratePlan.is_non_refundable && h("span", { key: '3672b22162d5c2c0b0eb36a7a9d3a86fe88d2d4a', class: "fd-application-info__non-refundable" }, "Non Refundable")), h("wa-tooltip", { key: 'cc822b1c8ec25c40fba45488bf7ccbb5791eab0e', for: this.tooltipId }, h("span", { key: '6c0deaa3cdfe83a35d6b17c46d523acaa0655fe1', innerHTML: this.getTooltipMessages() })), h("wa-icon", { key: '539e0e61174d5364ac5d787fde01d2a00bad0fb0', name: "circle-info", id: this.tooltipId })), h("p", { key: '70a34d4855e1947d73e4dea9733147d429bfcb4e', class: "fd-application-info__variation", innerHTML: formattedVariation })), h("p", { key: '915ff94b7e7703ee0e5f489bce3d50134facfd59', class: "fd-application-info__price" }, h("span", { key: 'e7333ed2949bc4932019923d5a1aff7635788e1c', class: "ir-price" }, formatAmount(this.currency?.symbol, this.amount), "/", locales.entries.Lcz_Stay), h("p", { key: '3202c515ff71b441790803654b9e093a01eb684e', style: { margin: '0', padding: '0', fontSize: '0.75rem' } }, "Including taxes and fees"))), h("div", { key: 'fc152ca26742137dca0c67a21a97a6249610948f', class: "fd-application-info__footer" }, h("div", { key: '1c33b7050a1dd5d2359a9fafdb8a90880fc2377f', class: "fd-application-info__rateplan" }, h("p", { key: 'c607b69703fb08b8aa143ea33bded76ec76a0ae6', class: "fd-application-info__rateplan-name" }, this.rateplanSelection.ratePlan.short_name), h("wa-tooltip", { key: '3856e44f5530f76108317512b7ffeef87728b198', for: `mobile-${this.tooltipId}` }, h("span", { key: 'a0a8fa159d391b72402f6c79de4b43862e3f66c0', innerHTML: this.getTooltipMessages() })), h("wa-icon", { key: 'b5a7f519b7f83235b405f32c9e38152034c5de43', name: "circle-info", id: `mobile-${this.tooltipId}` })), h("p", { key: '4d4d18db71a50f7e5e35d295deb961a03d0f05b0', class: "fd-application-info__variation", innerHTML: formattedVariation })), h("div", { key: 'eeeac4bb4548d609464b10b1e7fc2b127d5e4e9f', class: "fd-application-info__form" }, h("ir-validator", { key: 'bfb415c156431b45214bf4b21f12de213cbeb20c', value: this.guestInfo?.first_name, schema: GuestCredentials.shape.first_name }, h("ir-input", { key: 'e195705696267cb47711882c10141a1468ec7a90', class: "fd-application-info__input",
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
            } })), h("ir-validator", { key: 'ab56864050def18152efee6336046d8b241242e7', value: this.guestInfo?.last_name, schema: GuestCredentials.shape.last_name }, h("ir-input", { key: '26b9af874e7f4d042ca5f222ca130cb49e91b183', class: "fd-application-info__input", type: "text",
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
            (this.bookingType === 'PLUS_BOOKING' || this.bookingType === 'ADD_ROOM' || this.bookingType === 'EDIT_BOOKING') && (h("wa-select", { key: 'f87cbb3abb3385a07348fd18a8df378605a7646c', "with-clear": true, size: "small", class: "fd-application-info__select", placeholder: locales.entries.Lcz_Assignunits, "data-testid": "unit", value: this.guestInfo?.unit, defaultValue: this.guestInfo?.unit, onchange: event => this.updateGuest({
                unit: event.target.value,
            }) }, filteredRoomList.map(room => (h("wa-option", { value: room.id.toString(), selected: this.guestInfo?.unit === room.id.toString() }, room.name))))), this.rateplanSelection.roomtype.is_bed_configuration_enabled && (h("ir-validator", { key: '395cda52373bf45b8e52cef6bf5cc1613e4989d3', value: this.guestInfo?.bed_preference, schema: z.string().nonempty() }, h("wa-select", { key: 'e602a1968a115a7c6d91c66cb4d0d247801dec85', "with-clear": true, size: "small", class: "fd-application-info__select", placeholder: locales.entries.Lcz_BedConfiguration, "data-testid": "bed_configuration", value: this.guestInfo?.bed_preference, defaultValue: this.guestInfo?.bed_preference,
            // aria-invalid={String(Boolean(this.isButtonPressed && this.guestInfo?.bed_preference === ''))}
            onchange: event => this.updateGuest({
                bed_preference: event.target.value,
            }) }, this.bedPreferenceType.map(data => (h("wa-option", { value: data.CODE_NAME, selected: this.guestInfo?.bed_preference === data.CODE_NAME }, data.CODE_VALUE_EN)))))), h("p", { key: '58921258c59c7db4159da6212c1c4eb26c4498de', class: "fd-application-info__price-inline" }, h("span", { key: 'b344a9d9b258b761acaa77edee268771926168b9', class: "ir-price" }, formatAmount(this.currency?.symbol, this.amount), "/", locales.entries.Lcz_Stay), h("p", { key: 'f5ba8d3101d251a393c1e3929b3f3c352f6da3df', style: { margin: '0', padding: '0', fontSize: '0.75rem' } }, "Including taxes and fees"))), this.rateplanSelection.selected_variation.child_nbr > 0 && (h("div", { key: '91954aaab0f92ed4daaa8740d0986fc36f789ed4', class: "fd-application-info__infant" }, h("p", { key: '5b74cde15f24ad706e8fd0c86da80244a991f77d', class: "fd-application-info__infant-label" }, "Any of the children below 3 years?"), h("wa-select", { key: '62638cf6682ee42bd7e5bf1c611e2a41be3a6ac2', size: "small", class: "fd-application-info__select fd-application-info__select--inline", placeholder: locales.entries['No'] || 'No', value: this.guestInfo?.infant_nbr?.toString(), defaultValue: this.guestInfo?.infant_nbr?.toString(), onchange: event => {
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
};
IglApplicationInfo.style = IglApplicationInfoStyle0;

const iglDateRangeCss = ":host{display:flex;min-width:280px}.custom-picker{width:100%}";
const IglDateRangeStyle0 = iglDateRangeCss;

const IglDateRange = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dateSelectEvent = createEvent(this, "dateSelectEvent", 7);
        this.dateRangeChange = createEvent(this, "dateRangeChange", 7);
        this.toast = createEvent(this, "toast", 7);
    }
    size = 'small';
    defaultData;
    disabled = false;
    minDate;
    dateLabel;
    maxDate;
    withDateDifference = true;
    variant = 'default';
    hint;
    renderAgain = false;
    dateSelectEvent;
    dateRangeChange;
    toast;
    totalNights = 0;
    fromDate = hooks().toDate();
    toDate = hooks().add(1, 'day').toDate();
    isInvalid;
    componentWillLoad() {
        this.initializeDates();
    }
    handleDataChange(newValue, oldValue) {
        if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
            this.initializeDates();
        }
    }
    initializeDates() {
        if (this.defaultData) {
            if (this.defaultData.fromDate) {
                this.fromDate = new Date(this.defaultData.fromDate);
                this.fromDate.setHours(0, 0, 0, 0);
            }
            if (this.defaultData.toDate) {
                this.toDate = new Date(this.defaultData.toDate);
                this.toDate.setHours(0, 0, 0, 0);
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
    handleDateChange(evt) {
        const { start, end } = evt.detail;
        this.fromDate = start.toDate();
        this.toDate = end.toDate();
        this.calculateTotalNights();
        this.handleDateSelectEvent('selectedDateRange', {
            fromDate: this.fromDate.getTime(),
            toDate: this.toDate.getTime(),
            fromDateStr: start.format('DD MMM YYYY'),
            toDateStr: end.format('DD MMM YYYY'),
            dateDifference: this.totalNights,
        });
        this.dateRangeChange.emit({
            checkIn: start,
            checkOut: end,
        });
        this.renderAgain = !this.renderAgain;
    }
    // private renderDateSummary(showNights: boolean) {
    //   const fromDateDisplay = moment(this.fromDate).format('MMM DD, YYYY');
    //   const toDateDisplay = moment(this.toDate).format('MMM DD, YYYY');
    //   const shouldRenderNights = showNights && this.totalNights > 0;
    //   return (
    //     <div
    //       class={{
    //         'date-range-display': true,
    //         'date-range-display--disabled': this.disabled,
    //       }}
    //     >
    //       <wa-icon variant="regular" name="calendar"></wa-icon>
    //       <span class="date-range-date">{fromDateDisplay}</span>
    //       <wa-icon name="arrow-right"></wa-icon>
    //       <span class="date-range-date">{toDateDisplay}</span>
    //       {shouldRenderNights && (
    //         <span class="date-range-nights">{this.totalNights + (this.totalNights > 1 ? ` ${locales.entries.Lcz_Nights}` : ` ${locales.entries.Lcz_Night}`)}</span>
    //       )}
    //     </div>
    //   );
    // }
    get dates() {
        const fromDate = hooks(this.fromDate).format('YYYY-MM-DD');
        const toDate = hooks(this.toDate).format('YYYY-MM-DD');
        return [fromDate, toDate];
    }
    handleAriaInvalidChange(newValue) {
        this.isInvalid = newValue;
    }
    render() {
        const showNights = this.variant === 'booking' && this.withDateDifference;
        return (
        // <Host size={this.size}>
        //   <div class={`date-range-shell ${this.disabled ? 'disabled' : ''} ${this.variant === 'booking' ? 'picker' : ''}`}>
        //     <ir-date-range
        //       maxDate={this.maxDate}
        //       class={'date-range-input'}
        //       disabled={this.disabled}
        //       fromDate={this.fromDate}
        //       toDate={this.toDate}
        //       minDate={this.minDate}
        //       autoApply
        //       data-state={this.disabled ? 'disabled' : 'active'}
        //       onDateRangeChange={evt => {
        //         this.handleDateChange(evt);
        //       }}
        //     ></ir-date-range>
        //     {this.renderDateSummary(showNights)}
        //   </div>
        // </Host>
        h("ir-date-select", { key: '446ce72976e36aba4e4e21611037fa61b3fae0a4', disabled: this.disabled, class: "custom-picker", minDate: this.minDate, "aria-invalid": this.isInvalid, maxDate: this.maxDate, onDateChanged: e => this.handleDateChange(e), range: true, exportparts: "base,anchor,combobox,body,input-base,input-hint,input-label,input-input,input-start,input-end,input-clear-button,input-password-toggle-button",
            // hint={this.hint}
            dates: this.dates }, h("wa-icon", { key: '6a1f4e46130ea291e5c0cdc33bc01eed08de5dfd', slot: "start", variant: "regular", name: "calendar" }), showNights && (h("span", { key: 'aab037039b756682970f29c97ab10991988f7388', slot: "end", class: "date-range-nights" }, this.totalNights + (this.totalNights > 1 ? ` ${locales.entries.Lcz_Nights}` : ` ${locales.entries.Lcz_Night}`)))));
    }
    static get watchers() { return {
        "defaultData": ["handleDataChange"],
        "aria-invalid": ["handleAriaInvalidChange"]
    }; }
};
IglDateRange.style = IglDateRangeStyle0;

const iglRatePlanCss = ".sc-igl-rate-plan-h{display:block;margin-bottom:1rem;color:var(--wa-color-text-quiet)}.rate-plan.sc-igl-rate-plan{display:flex;flex-direction:column;min-height:32px;margin-top:0.25rem;gap:0.5rem}.rate-plan--unavailable.sc-igl-rate-plan{flex-direction:row;align-items:center;justify-content:space-between}.rateplan-name-container.sc-igl-rate-plan{display:flex;align-items:center;gap:0.5rem;margin:0;padding:0}.rateplan-name-container.sc-igl-rate-plan p.sc-igl-rate-plan{margin:0}.rateplan-container.sc-igl-rate-plan{display:flex;flex-direction:column;gap:0.75rem;width:100%;margin-top:0.5rem}.variation-select.sc-igl-rate-plan{width:100%;max-width:300px;flex:1}.rp-select.sc-igl-rate-plan:disabled{background-color:#eceff1;color:#7a7a7a}.rateplan-config.sc-igl-rate-plan{display:flex;flex-direction:column;gap:0.75rem;width:100%}.rate-total-night-view.sc-igl-rate-plan{display:flex;flex:1;gap:0;align-items:stretch}.rateplan-price-input.sc-igl-rate-plan{flex:1;width:100%}.total-nights-container.sc-igl-rate-plan{width:max-content}.rp-select--nights.sc-igl-rate-plan{border-top-left-radius:0;border-bottom-left-radius:0}.inventory-select.sc-igl-rate-plan{width:100%;max-width:200px}.edit-booking-radio.sc-igl-rate-plan{display:none}.mobile-only.sc-igl-rate-plan{width:100%;display:block}.desktop-only.sc-igl-rate-plan{display:none}.rate-plan-unavailable-text.sc-igl-rate-plan{margin:0;color:var(--wa-color-danger-fill-loud)}.rateplan-name-container.sc-igl-rate-plan{font-family:var(--wa-font-family-heading);font-weight:400;line-height:var(--wa-line-height-condensed);text-wrap:balance}.non-ref-span.sc-igl-rate-plan{font-size:12px;color:var(--wa-color-success-fill-loud)}.nightBorder.sc-igl-rate-plan{border-left-width:0;border-top-right-radius:3px !important;border-bottom-right-radius:3px !important}.sc-igl-rate-plan:dir(rtl) .fd-rateplan__price-input.sc-igl-rate-plan::part(base),.sc-igl-rate-plan:dir(ltr) .fd-rateplan__nights-select.sc-igl-rate-plan::part(combobox){border-top-left-radius:0;border-bottom-left-radius:0}.fd-rateplan__price-input.sc-igl-rate-plan{flex:1 1 0%;z-index:1}.sc-igl-rate-plan:dir(rtl) .fd-rateplan__nights-select.sc-igl-rate-plan::part(combobox),.sc-igl-rate-plan:dir(ltr) .fd-rateplan__price-input.sc-igl-rate-plan::part(base){border-top-right-radius:0;border-bottom-right-radius:0}.sc-igl-rate-plan:dir(rtl) .fd-rateplan__nights-select.sc-igl-rate-plan::part(combobox){border-right-width:0}.sc-igl-rate-plan:dir(ltr) .fd-rateplan__nights-select.sc-igl-rate-plan::part(combobox){border-left-width:0}.fd-rateplan__nights-select.sc-igl-rate-plan{min-width:100px}.fd-rateplan__inventory-select.sc-igl-rate-plan{min-width:60px}.fd-rateplan__nights-select[open].sc-igl-rate-plan,.fd-rateplan__nights-select.sc-igl-rate-plan:focus-visible,.fd-rateplan__nights-select.sc-igl-rate-plan:focus-within{z-index:2}@media (min-width: 768px){.booking-btn.sc-igl-rate-plan{width:100%}.mobile-only.sc-igl-rate-plan{display:none}.desktop-only.sc-igl-rate-plan{display:block}.edit-booking-radio.sc-igl-rate-plan{display:block;margin-left:0.75rem}.rateplan-container.sc-igl-rate-plan{flex-direction:row;align-items:center;justify-content:flex-end}.rateplan-config.sc-igl-rate-plan{flex-direction:row;align-items:center;justify-content:space-between}.rateplan__booking-btn.sc-igl-rate-plan{width:95px}}@media (min-width: 991px){.sc-igl-rate-plan-h{margin:0}.rateplan-name-container.sc-igl-rate-plan{margin-bottom:0 !important}.rateplan-price-input.sc-igl-rate-plan{max-width:250px}.rate-plan--available.sc-igl-rate-plan{flex-direction:row;align-items:center;justify-content:space-between}}@media only screen and (min-width: 991px) and (max-width: 1300px){.rateplan-name-container.sc-igl-rate-plan{width:40%}.price-amount.sc-igl-rate-plan{max-width:150px !important}}@media (min-width: 1024px){.booking-btn.sc-igl-rate-plan{width:100px}.fd-rateplan__price-input.sc-igl-rate-plan{width:170px;max-width:170px}.fd-rateplan__nights-select.sc-igl-rate-plan{width:100px;max-width:100px}.rate-total-night-view.sc-igl-rate-plan{margin:0;padding:0;box-sizing:border-box;flex:0}.fd-rateplan__inventory-select.sc-igl-rate-plan{width:100px}.rateplan-config.sc-igl-rate-plan{width:fit-content}}@media (min-width: 1200px){.rateplan-name-container.sc-igl-rate-plan{width:40%;margin-top:0}}";
const IglRatePlanStyle0 = iglRatePlanCss;

const IglRatePlan = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: '6b1a96d1abf228c4da4a0194e9d3f8d720b6f0d3', "data-testid": `rp-${this.ratePlan.id}` }, h("div", { key: '3cfa30fa10a31b72254441e5ae75db22ce87b3d4', class: `rate-plan ${isAvailableToBook ? 'rate-plan--available' : 'rate-plan--unavailable'}` }, h("div", { key: '44858bfe49811899d87bd112822f0836b957f9d8', "data-testid": 'rp_name', class: "rateplan-name-container" }, bookingType === 'BAR_BOOKING' ? (h("p", null, h("span", null, ratePlan.name.split('/')[1], " ", ratePlan.is_non_refundable && h("span", { class: "non-ref-span" }, "Non Refundable")))) : (h("span", null, ratePlan.short_name, " ", ratePlan.is_non_refundable && h("span", { class: "non-ref-span" }, "Non Refundable"))), isAvailableToBook && (h(Fragment, { key: 'c837493ad925a0017277b6ef68a27c04b1742e37' }, h("wa-tooltip", { key: 'ebfab08b063c7e4570bf5957813739a09bbb6da5', for: `rateplan-${this.ratePlan.id}` }, h("span", { key: '4860ebc8c498db9e6c721efd9eb4dbb892113711', innerHTML: this.getTooltipMessages() })), h("wa-icon", { key: '3e748ec8238e7cb65589c1f34960eb962d99e9ac', name: "circle-info", id: `rateplan-${this.ratePlan.id}` }))), this.unavailableRatePlanIds.has(this.ratePlan.id) && (h(Fragment, { key: '7a354df5661df0b98014a1f24862a072ddd33058' }, h("wa-tooltip", { key: 'af2d3f7c1ab91fca194b02f6503414034506adac', for: `rateplan-warning-${this.ratePlan.id}` }, "You are forcing a stop-sale restriction."), h("wa-icon", { key: 'a7daf8d8b5b6c8155d439f5fa6f70cde0191c914', name: "triangle-exclamation", style: { color: 'var(--wa-color-warning-fill-loud)' }, id: `rateplan-warning-${this.ratePlan.id}` })))), isAvailableToBook ? (h("div", { class: "rateplan-container" }, h("wa-select", { size: "small", disabled: disableForm, "data-testid": "adult-child-offering", onchange: evt => this.handleDataChange('adult_child_offering', evt), "onwa-hide": e => {
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
};
IglRatePlan.style = IglRatePlanStyle0;

const irCountryPickerCss = ".sc-ir-country-picker-h{display:block;margin:0;padding:0;box-sizing:border-box}.combobox-menu.sc-ir-country-picker{max-height:200px;overflow:auto}";
const IrCountryPickerStyle0 = irCountryPickerCss;

const IrCountryPicker = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.countryChange = createEvent(this, "countryChange", 7);
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
                } }, this.filteredCountries.map(country => (h("ir-picker-item", { value: country.id?.toString(), label: country.name, key: country.id }, h("img", { src: country.flag, alt: country.name, style: { aspectRatio: '1', height: '15px', borderRadius: '4px' } }), h("p", { class: "pl-1 m-0" }, country.name))))));
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
            } }, h("img", { src: this.propertyCountry.flag, alt: this.propertyCountry.name, style: { aspectRatio: '1', height: '15px', borderRadius: '4px' } }), h("p", { class: "pl-1 m-0" }, this.propertyCountry.name)), h("div", { class: "dropdown-divider" }))), this.filteredCountries?.map(c => (h("button", { key: c.id, type: "button", class: `dropdown-item d-flex align-items-center ${this.selectedCountry?.id === c.id ? 'active' : ''}`, onClick: () => {
                this.selectCountry(c);
            } }, h("img", { src: c.flag, alt: c.name, style: { aspectRatio: '1', height: '15px', borderRadius: '4px' } }), h("p", { class: "pl-1 m-0" }, c.name)))), this.filteredCountries?.length === 0 && h("p", { class: "dropdown-item-text" }, "Invalid Country"))));
    }
    static get watchers() { return {
        "country": ["handleCountryChange"]
    }; }
};
IrCountryPicker.style = IrCountryPickerStyle0;

const irMobileInputCss = "@layer wa-utilities {\n  :host([size='small']),\n  .wa-size-s {\n    font-size: var(--wa-font-size-s);\n  }\n\n  :host([size='medium']),\n  .wa-size-m {\n    font-size: var(--wa-font-size-m);\n  }\n\n  :host([size='large']),\n  .wa-size-l {\n    font-size: var(--wa-font-size-l);\n  }\n}\n\n:host {\n  box-sizing: border-box;\n  width: 100%;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n  white-space: nowrap;\n  border: 0;\n}\n.mobile-input__logo {\n  height: var(--wa-font-size-s);\n  aspect-ratio: 4/3;\n  border-radius: 3px;\n}\n.mobile-input__required {\n  color: #f3676c !important;\n}\n.mobile-input__prefix-dropdown::part(menu) {\n  height: 300px;\n  /* padding-top: 0; */\n}\n.mobile-input__container {\n  display: flex;\n  align-items: stretch;\n  width: 100%;\n  margin-top: 0.5rem;\n}\n.mobile-input__container--disabled {\n  opacity: 0.7;\n}\n.mobile-input__phone-country {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.mobile-input__phone {\n  flex: 1 1 0%;\n}\n.mobile-input__phone {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.mobile-input__phone--invalid {\n  border-color: var(--wa-color-danger-600);\n}\n.mobile-input__label {\n  display: inline-block;\n  position: relative;\n  color: var(--wa-form-control-label-color);\n  font-weight: var(--wa-form-control-label-font-weight);\n  line-height: var(--wa-form-control-label-line-height);\n  margin-block-start: 0.5em !important;\n}\n.mobile-input__description {\n  margin: 0.25rem 0 0.5rem;\n  color: var(--wa-color-neutral-500);\n  font-size: 0.875rem;\n}\n.mobile-input__error {\n  margin: 0.5rem 0 0;\n  color: var(--wa-color-danger-600);\n  font-size: 0.875rem;\n}\n.mobile-input__required {\n  margin-left: 0.25rem;\n  color: var(--wa-color-danger-600);\n}\n.mobile-input__trigger,\n.mobile-input__phone {\n  padding: 0 var(--wa-form-control-padding-inline);\n  color: var(--wa-form-control-value-color);\n  font-size: var(--wa-form-control-value-size);\n  font-family: inherit;\n  font-weight: var(--wa-form-control-value-font-weight);\n  line-height: var(--wa-form-control-value-line-height);\n  vertical-align: middle;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  box-sizing: border-box;\n  background-color: var(--wa-form-control-background-color);\n  border-color: var(--wa-form-control-border-color);\n  border-style: var(--wa-form-control-border-style);\n  border-width: var(--wa-form-control-border-width);\n  border-radius: var(--wa-form-control-border-radius);\n  transition: background-color var(--wa-transition-normal), border var(--wa-transition-normal), all var(--wa-transition-normal), outline var(--wa-transition-fast);\n  transition-timing-function: var(--wa-transition-easing);\n}\n.mobile-input__container {\n  height: var(--wa-form-control-height);\n}\n.mobile-input__trigger {\n  height: 100%;\n}\n.mobile-input__trigger:focus,\n.mobile-input__phone:focus {\n  outline: none;\n}\n.mobile-input__trigger:disabled,\n.mobile-input__phone:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.mobile-input__trigger:focus-visible,\n.mobile-input__phone:focus-visible {\n  outline: var(--wa-focus-ring);\n  outline-offset: var(--wa-focus-ring-offset);\n  z-index: 2;\n}\n.mobile-input__phone::placeholder {\n  color: var(--wa-form-control-placeholder-color);\n  user-select: none;\n  -webkit-user-select: none;\n}\n.mobile-input__trigger {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-right: 0;\n  cursor: pointer;\n}\n.mobile-input__phone {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.mobile-input__phone {\n  cursor: text;\n}\n.mobile-input__trigger[aria-expanded='true'] {\n  outline: var(--wa-focus-ring);\n  outline-offset: var(--wa-focus-ring-offset);\n  z-index: 2;\n}\n.mobile-input__trigger[aria-expanded='true'] .mobile-input__phone-country-caret {\n  transform: rotate(-180deg);\n}\n\n.mobile-input__country-name {\n  flex: 1;\n}\n.mobile-input__country-prefix {\n  color: var(--wa-color-neutral-500);\n}\n.mobile-input__trigger[aria-invalid='true'] {\n  border-color: var(--wa-color-danger-border-loud);\n  outline-color: var(--wa-color-danger-border-loud);\n  border-width: 2px;\n}\n.phone__input {\n  flex: 1 1 0%;\n  width: 100%;\n}\n.phone__input:dir(ltr)::part(base) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.phone__input:dir(rtl)::part(base) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n";
const IrMobileInputStyle0 = irMobileInputCss;

const IrMobileInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.mobileInputChange = createEvent(this, "mobile-input-change", 7);
        this.mobileInputCountryChange = createEvent(this, "mobile-input-country-change", 7);
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
    size = 'small';
    /** Visible label for the phone input */
    label = 'Phone number';
    /** Name attribute passed to the native input */
    name = 'phone';
    /** Placeholder shown when the input is empty */
    placeholder = 'Enter phone number';
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
        return (h(Host, { key: '23224445937dc68acd9c05a9349295e181c3db73', size: 'small', role: "group", "aria-labelledby": this.labelId, "aria-describedby": describedByIds }, h("label", { key: 'f448371a4d6258d86c2fda8096188dc540bc8c10', class: "mobile-input__label", id: this.labelId, htmlFor: this.inputId }, this.label, this.required ? (h("span", { class: "mobile-input__required", "aria-hidden": "true" }, "*")) : null), this.description ? (h("p", { id: this.descriptionId, class: "mobile-input__description" }, this.description)) : null, h("div", { key: 'a0588291eff9af0d554e698ad974e0bc733e9320', class: { 'mobile-input__container': true, 'mobile-input__container--disabled': this.disabled } }, h("wa-dropdown", { key: '101cdadc827eda6cd9323482ffedbbb6e99de2ef', "onwa-show": e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
            }, "onwa-hide": e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
            }, "onwa-select": this.handleCountrySelect, class: "mobile-input__prefix-dropdown" }, h("button", { key: '8ec7c36696b734837454c1af68d6c6ddca90cbb9', "aria-invalid": String(this.isInvalid && !this.selectedCountry), slot: "trigger", type: "button", class: "mobile-input__trigger", disabled: this.disabled, "aria-haspopup": "listbox", "aria-label": "Change country calling code" }, h("div", { key: '24071aee6ec217281f5d8300f92c349005971339', class: "mobile-input__phone-country", style: { marginRight: '1rem' } }, this.selectedCountry ? h("img", { src: this.selectedCountry?.flag, alt: this.selectedCountry?.name, class: "mobile-input__logo" }) : h("span", null, "Select")), h("wa-icon", { key: '8c0b17077be62963f645c086b4a070d67ff99e75', class: "mobile-input__phone-country-caret", name: "chevron-down", "aria-hidden": "true" })), h("span", { key: '7e7c1e1590b7efbc4c3c3029551972541e509dce', class: "sr-only", id: this.countryStatusId, "aria-live": "polite" }, this.selectedCountry ? `Selected country ${this.selectedCountry.name} ${this.selectedCountry.phone_prefix}` : 'Select a country'), this.countries.map(country => (h("wa-dropdown-item", { value: country.id.toString() }, h("div", { class: "mobile-input__phone-country", role: "option", "aria-selected": this.selectedCountry?.id === country.id ? 'true' : 'false' }, h("img", { src: country.flag, alt: country.name, class: "mobile-input__logo" }), h("span", { class: "mobile-input__country-name" }, country.name), h("span", { class: "mobile-input__country-prefix" }, country.phone_prefix)))))), h("ir-input", { key: '74959efebe5ae5380f478cff83e41cd9dc6874d2', "aria-invalid": String(this.isInvalid && (this.value ?? '').length < 4), type: "tel", inputMode: "tel", autocomplete: "off", disabled: this.disabled, placeholder: this.placeholder, defaultValue: this.value, value: this.value, class: "phone__input", "onText-change": e => {
                const value = e.detail;
                this.value = value;
                this.mobileInputChange.emit({ formattedValue: value, value, country: this.selectedCountry });
            } }, this.selectedCountry && h("span", { key: '0d5b49c15c6f63450d92fbb4277b6030a62e41fa', slot: "start" }, this.selectedCountry?.phone_prefix))), this.error ? (h("p", { id: this.errorId, class: "mobile-input__error", role: "alert" }, this.error)) : null));
    }
    static get watchers() { return {
        "countryCode": ["handleCountryCodeChange"],
        "selectedCountry": ["handleSelectedCountryChange"],
        "value": ["handleValueChange"],
        "aria-invalid": ["handleAriaInvalidChange"]
    }; }
};
IrMobileInput.style = IrMobileInputStyle0;

const irServiceAssigneeSelectCss = ".sc-ir-service-assignee-select-h{display:block}";
const IrServiceAssigneeSelectStyle0 = irServiceAssigneeSelectCss;

const IrServiceAssigneeSelect = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.assignmentChange = createEvent(this, "assignmentChange", 7);
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
    label = 'Assign to folio';
    /**
     * Emits when the service assignee changes.
     */
    assignmentChange;
    render() {
        return (h(Host, { key: 'e7fec026b1a1f922a2be45955ba049f37aba2376' }, h("wa-radio-group", { key: 'c7625a8c4f8c993f70e89ca81c125cc36dd7e32a', onchange: e => this.assignmentChange.emit(e.target.value), defaultValue: this.assigneeType, value: this.assigneeType, size: "small", label: this.label, orientation: "vertical" }, h("wa-radio", { key: '82852389a818dec2ac96633ccacad164ec3038d8', value: "agent", appearance: "button" }, "Agent: ", this.agent?.name), h("wa-radio", { key: '0b46d3bd3486a1f1c32b02dfb3488eeb1a991568', value: "guest", appearance: "button" }, "Guest"))));
    }
};
IrServiceAssigneeSelect.style = IrServiceAssigneeSelectStyle0;

export { IglApplicationInfo as igl_application_info, IglDateRange as igl_date_range, IglRatePlan as igl_rate_plan, IrCountryPicker as ir_country_picker, IrMobileInput as ir_mobile_input, IrServiceAssigneeSelect as ir_service_assignee_select };

//# sourceMappingURL=igl-application-info_6.entry.js.map