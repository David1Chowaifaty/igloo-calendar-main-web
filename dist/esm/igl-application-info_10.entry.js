import { r as registerInstance, h, H as Host, c as createEvent, F as Fragment } from './index-1d2aa5ad.js';
import { b as booking_store, m as modifyBookingStore, B as BookingService, c as calculateTotalRooms, r as reserveRooms, a as resetBookingStore, u as updateRoomParams, g as getVisibleInventory } from './booking.service-5a1c917c.js';
import { l as locales } from './locales.store-95a78d6b.js';
import { i as isSingleUnit, c as calendar_data } from './calendar-data-ce538d8c.js';
import { o as formatAmount, e as extras, l as getReleaseHoursString, d as dateToFormattedString, z, v as validateEmail } from './utils-fa28bf7d.js';
import { v as v4 } from './v4-964634d6.js';
import { f as calculateDaysBetweenDates } from './booking-4a184cf6.js';
import { h as hooks } from './moment-ab846cee.js';
import { i as isRequestPending } from './ir-interceptor.store-1b562ec6.js';
import './axios-aa1335b8.js';
import './index-e42e9935.js';

class VariationService {
    /**
     * Formats a variation based on the number of infants and returns a formatted string.
     * @param {Object} params - The input parameters.
     * @param {Variation} params.baseVariation - The base variation object.
     * @param {Variation[]} params.variations - A list of available variations.
     * @param {number} params.infants - The number of infants to adjust the variation for.
     * @returns {string} A formatted string describing the variation adjusted for infants.
     */
    formatVariationBasedOnInfants(params) {
        const variation = this.getVariationBasedOnInfants(params);
        return this.formatVariation(variation, params.infants);
    }
    /**
     * Calculates the discounted amount for a variation adjusted for the number of infants.
     * @param {Object} params - The input parameters.
     * @param {Variation} params.baseVariation - The base variation object.
     * @param {Variation[]} params.variations - A list of available variations.
     * @param {number} params.infants - The number of infants to consider for adjustments.
     * @returns {number} The discounted amount for the selected variation, or 0 if no discounted amount is available.
     */
    calculateVariationAmount(params) {
        var _a;
        return ((_a = this.getVariationBasedOnInfants(params)) === null || _a === void 0 ? void 0 : _a.discounted_amount) || 0;
    }
    /**
     * Finds the appropriate variation from a list of variations based on the number of infants.
     * @param {Object} params - The input parameters.
     * @param {Variation} params.baseVariation - The base variation object.
     * @param {Variation[]} params.variations - A list of available variations.
     * @param {number} params.infants - The number of infants to adjust for.
     * @returns {Variation} The matching variation or the base variation if no match is found.
     */
    getVariationBasedOnInfants({ variations, baseVariation, infants }) {
        const { adult_nbr, child_nbr } = baseVariation;
        return variations.find(v => v.adult_nbr === adult_nbr && v.child_nbr === Math.max(0, child_nbr - Math.max(0, infants))) || baseVariation;
    }
    /**
     * Formats a variation object into a human-readable string, adjusted for the number of infants.
     * @param {Variation} variation - The variation object to format.
     * @param {number} infant_nbr - The number of infants to adjust for.
     * @returns {string} A formatted string representing the variation.
     * @private
     */
    formatVariation({ child_nbr, adult_nbr }, infant_nbr) {
        var _a, _b, _c, _d;
        const adultNumber = Number(adult_nbr) || 0;
        const infantNumber = Math.max(Number(infant_nbr) || 0, 0);
        const adultLabel = adultNumber > 1 ? locales.entries.Lcz_Adults.toLowerCase() : locales.entries.Lcz_Adult.toLowerCase();
        const childLabel = child_nbr > 1 ? locales.entries.Lcz_Children.toLowerCase() : locales.entries.Lcz_Child.toLowerCase();
        const infantLabel = infantNumber > 1 ? (_b = ((_a = locales.entries['Lcz_Infants']) !== null && _a !== void 0 ? _a : 'infants')) === null || _b === void 0 ? void 0 : _b.toLowerCase() : (_d = ((_c = locales === null || locales === void 0 ? void 0 : locales.entries['Lcz_Infant']) !== null && _c !== void 0 ? _c : 'infant')) === null || _d === void 0 ? void 0 : _d.toLowerCase();
        const parts = [`${adultNumber} ${adultLabel}`, child_nbr ? `${child_nbr} ${childLabel}` : '', infantNumber ? `${infantNumber} ${infantLabel}` : ''];
        return parts.filter(Boolean).join('&nbsp&nbsp&nbsp&nbsp');
    }
}

const iglApplicationInfoCss = ".sc-igl-application-info-h{display:block}.rate_amount.sc-igl-application-info{display:none;padding:0;margin:0}.booking-header.sc-igl-application-info{display:flex;align-items:center;justify-content:space-between;margin-bottom:0.5rem;gap:0.5rem}.non-ref-span.sc-igl-application-info{font-size:12px;color:var(--green)}.booking-roomtype-title.sc-igl-application-info{font-size:1.25rem;margin-right:0.5rem;margin:0;padding:0}.booking-details-container.sc-igl-application-info{display:flex;align-items:center;justify-content:space-between;padding:0;margin:0}.booking-rateplan.sc-igl-application-info{display:flex;align-items:center;gap:0.5rem;margin:0;padding:0}.booking-rateplan-name.sc-igl-application-info{font-weight:bold;margin:0;padding:0}.booking-tooltip.sc-igl-application-info{margin-right:0.5rem;margin:0;padding:0}.booking-variation.sc-igl-application-info{margin:0;padding:0}.booking-price.sc-igl-application-info{margin:0;padding:0}.booking-footer.sc-igl-application-info{display:flex;align-items:center;justify-content:space-between;padding:0;margin-bottom:0.5rem}.booking-details-container.sc-igl-application-info{display:none}@media (min-width: 768px){.booking-header.sc-igl-application-info{justify-content:flex-start}.booking-footer.sc-igl-application-info,.booking-price.sc-igl-application-info{display:none}.booking-details-container.sc-igl-application-info,.rate_amount.sc-igl-application-info{display:inline-flex;gap:0.5rem}}@media only screen and (min-width: 908px){.aplicationInfoContainer.sc-igl-application-info{max-width:80%}.guest-info-container.sc-igl-application-info{max-width:300px}.preference-select-container.sc-igl-application-info{max-width:250px}}";
const IglApplicationInfoStyle0 = iglApplicationInfoCss;

const IglApplicationInfo = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.bedPreferenceType = [];
        this.bookingType = 'PLUS_BOOKING';
        this.totalNights = 1;
        this.isButtonPressed = false;
        this.variationService = new VariationService();
    }
    componentWillLoad() {
        var _a, _b;
        if (isSingleUnit(this.rateplanSelection.roomtype.id)) {
            const filteredRooms = this.filterRooms();
            if (filteredRooms.length > 0)
                this.updateGuest({ unit: (_b = (_a = filteredRooms[0]) === null || _a === void 0 ? void 0 : _a.id) === null || _b === void 0 ? void 0 : _b.toString() });
        }
    }
    updateGuest(params) {
        const roomTypeId = this.rateplanSelection.roomtype.id;
        const ratePlanId = this.rateplanSelection.ratePlan.id;
        let prevGuest = [...this.rateplanSelection.guest];
        prevGuest[this.roomIndex] = Object.assign(Object.assign({}, prevGuest[this.roomIndex]), params);
        booking_store.ratePlanSelections = Object.assign(Object.assign({}, booking_store.ratePlanSelections), { [roomTypeId]: Object.assign(Object.assign({}, booking_store.ratePlanSelections[roomTypeId]), { [ratePlanId]: Object.assign(Object.assign({}, this.rateplanSelection), { guest: [...prevGuest] }) }) });
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
        var _a, _b, _c, _d, _e, _f, _g;
        const { ratePlan, selected_variation } = this.rateplanSelection;
        let selectedVariation = selected_variation;
        if ((_a = this.guestInfo) === null || _a === void 0 ? void 0 : _a.infant_nbr) {
            selectedVariation = this.variationService.getVariationBasedOnInfants({
                variations: ratePlan.variations,
                baseVariation: selected_variation,
                infants: (_b = this.guestInfo) === null || _b === void 0 ? void 0 : _b.infant_nbr,
            });
        }
        if (!selectedVariation)
            return;
        const matchingVariation = (_c = ratePlan.variations) === null || _c === void 0 ? void 0 : _c.find(variation => variation.adult_nbr === selectedVariation.adult_nbr && variation.child_nbr === selectedVariation.child_nbr);
        if (!matchingVariation)
            return;
        const cancellationPolicy = (_e = (_d = matchingVariation.applicable_policies) === null || _d === void 0 ? void 0 : _d.find(p => p.type === 'cancelation')) === null || _e === void 0 ? void 0 : _e.combined_statement;
        const guaranteePolicy = (_g = (_f = matchingVariation.applicable_policies) === null || _f === void 0 ? void 0 : _f.find(p => p.type === 'guarantee')) === null || _g === void 0 ? void 0 : _g.combined_statement;
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
        var _a, _b;
        if (this.rateplanSelection.is_amount_modified) {
            return this.rateplanSelection.view_mode === '001' ? this.rateplanSelection.rp_amount : this.rateplanSelection.rp_amount * this.totalNights;
        }
        let variation = this.rateplanSelection.selected_variation;
        if ((_a = this.guestInfo) === null || _a === void 0 ? void 0 : _a.infant_nbr) {
            variation = this.variationService.getVariationBasedOnInfants({
                variations: this.rateplanSelection.ratePlan.variations,
                baseVariation: this.rateplanSelection.selected_variation,
                infants: (_b = this.guestInfo) === null || _b === void 0 ? void 0 : _b.infant_nbr,
            });
        }
        return variation.discounted_gross_amount;
    }
    filterRooms() {
        var _a, _b, _c, _d;
        const result = [];
        if (!calendar_data.is_frontdesk_enabled) {
            return result;
        }
        (_b = (_a = this.rateplanSelection.ratePlan) === null || _a === void 0 ? void 0 : _a.assignable_units) === null || _b === void 0 ? void 0 : _b.forEach(unit => {
            if (unit.Is_Fully_Available) {
                result.push({ name: unit.name, id: unit.pr_id });
            }
        });
        const filteredGuestsRoom = this.rateplanSelection.guest.filter((_, i) => i !== this.roomIndex).map(r => r.unit);
        const filteredResults = result.filter(r => !filteredGuestsRoom.includes(r.id.toString()));
        return this.bookingType === 'EDIT_BOOKING'
            ? [...filteredResults, this.rateplanSelection.roomtype.id === ((_c = this.baseData) === null || _c === void 0 ? void 0 : _c.roomtypeId) ? (_d = this.baseData) === null || _d === void 0 ? void 0 : _d.unit : null]
                .filter(f => !!f)
                .sort((a, b) => a.name.localeCompare(b.name))
            : filteredResults;
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        const filteredRoomList = this.filterRooms();
        const formattedVariation = this.variationService.formatVariationBasedOnInfants({
            baseVariation: this.rateplanSelection.selected_variation,
            infants: this.guestInfo.infant_nbr,
            variations: this.rateplanSelection.ratePlan.variations,
        });
        console.log({ guestInfo: this.guestInfo });
        return (h(Host, { key: '168afe2a0adb70cc27d653229452e6db41677a44', class: 'my-2', "data-testid": `room_info_${this.rateplanSelection.ratePlan.id}` }, h("div", { key: 'b95937c56820be7ff104e1d5a8718dced090c877', class: "booking-header" }, (this.bookingType === 'PLUS_BOOKING' || this.bookingType === 'ADD_ROOM' || this.bookingType === 'EDIT_BOOKING') && (h("span", { key: '80188fdd737e41c8bc9dec8b07cc316e0d00cfcf', class: "booking-roomtype-title" }, this.rateplanSelection.roomtype.name)), h("div", { key: 'd678d8b12b9b3d41632a4aba6ce35778904d7dd8', class: "booking-details-container" }, h("div", { key: 'fab97f6a7b6372bc7e6011347227b04ef487361f', class: "booking-rateplan" }, h("p", { key: '8cc4a78e9eb767c3ddc434f92ca8e29068ace5ab', class: "booking-rateplan-name" }, this.rateplanSelection.ratePlan.short_name, " ", this.rateplanSelection.ratePlan.is_non_refundable && h("span", { key: '5a65c330b94313578546dfb2d4e8c1a32472469f', class: 'non-ref-span' }, "Non Refundable")), h("ir-tooltip", { key: 'b364758f2d538b682677f5332c9518576f05c87e', class: "booking-tooltip", message: this.getTooltipMessages() })), h("p", { key: '43d8836e67e5d0259c004beef00da123f9db7c27', class: "booking-variation", innerHTML: formattedVariation })), h("p", { key: '726d546747acfc31af57b90befb0d524fca8e763', class: "booking-price" }, formatAmount((_a = this.currency) === null || _a === void 0 ? void 0 : _a.symbol, this.getAmount()), "/", locales.entries.Lcz_Stay)), h("div", { key: '20aeb38d70d9514342d5ec133f50f5c2f7039d4e', class: "booking-footer" }, h("div", { key: 'de1ceddf8c72c803f6c078516e6f4a016190e5cd', class: "booking-rateplan" }, h("p", { key: '60c0787c8d207a7165fb3553a917cc662dfb6117', class: "booking-rateplan-name" }, this.rateplanSelection.ratePlan.short_name), h("ir-tooltip", { key: '5e71a0494c289d60e482f303a8c4ba49a377464a', class: "booking-tooltip", message: this.getTooltipMessages() })), h("p", { key: 'b8100153ee35934d38a95d36270cce0b02e3cbef', class: "booking-variation", innerHTML: formattedVariation })), h("div", { key: '6fc7a5d53631cde0f079940275d5ded9656eec95', class: "d-flex flex-column flex-md-row  p-0 align-items-md-center aplicationInfoContainer" }, h("div", { key: 'ae6ebdee013fc75985e4a95319e562d9cc4c1c04', class: "mr-md-1 mb-1 mb-md-0 flex-fill guest-info-container" }, h("input", { key: '2fc53029b71742aa4bb5140759d6d5a9efd3a4b4', id: v4(), type: "text", "data-testid": "guest_first_name", class: `form-control ${this.isButtonPressed && ((_b = this.guestInfo) === null || _b === void 0 ? void 0 : _b.first_name) === '' && 'border-danger'}`, placeholder: (_c = locales.entries['Lcz_GuestFirstname']) !== null && _c !== void 0 ? _c : 'Guest first name', name: "guestFirstName", onInput: event => {
                const name = event.target.value;
                this.updateGuest({ first_name: name });
                if (booking_store.event_type.type === 'EDIT_BOOKING') {
                    modifyBookingStore('guest', Object.assign(Object.assign({}, booking_store.guest), { name }));
                }
            }, required: true, value: (_d = this.guestInfo) === null || _d === void 0 ? void 0 : _d.first_name })), h("div", { key: 'ba0db77bcf0f90aed84e65ff43bf3df2929d795f', class: "mr-md-1 flex-fill guest-info-container" }, h("input", { key: 'cff9d652df6f232bd14bb3b9673a24022a0f38a9', id: v4(), type: "text", class: `form-control ${this.isButtonPressed && ((_e = this.guestInfo) === null || _e === void 0 ? void 0 : _e.last_name) === '' && 'border-danger'}`, placeholder: (_f = locales.entries['Lcz_GuestLastname']) !== null && _f !== void 0 ? _f : 'Guest last name', name: "guestLastName", "data-testid": "guest_last_name", onInput: event => {
                const name = event.target.value;
                this.updateGuest({ last_name: name });
                if (booking_store.event_type.type === 'EDIT_BOOKING') {
                    modifyBookingStore('guest', Object.assign(Object.assign({}, booking_store.guest), { name }));
                }
            }, required: true, value: (_g = this.guestInfo) === null || _g === void 0 ? void 0 : _g.last_name })), calendar_data.is_frontdesk_enabled &&
            !isSingleUnit(this.rateplanSelection.roomtype.id) &&
            (this.bookingType === 'PLUS_BOOKING' || this.bookingType === 'ADD_ROOM' || this.bookingType === 'EDIT_BOOKING') && (h("div", { key: '587afde084e34952719ba85568da4cd26c699f60', class: "my-1 my-md-0 d-flex align-items-center flex-fill" }, h("div", { key: '95406091aecdaac8f979ab9f4c84345b9c80869c', class: "mr-md-1 p-0 flex-fill preference-select-container" }, h("select", { key: '2a7a6e33a66854ce4f8c18ae291c817bdf0510ca', "data-testid": "unit", class: "form-control input-sm pr-0", id: v4(), onChange: event => this.updateGuest({ unit: event.target.value }) }, h("option", { key: 'ea56b31377a8285f886eeb12a31f3c840fa24c6e', value: "", selected: ((_h = this.guestInfo) === null || _h === void 0 ? void 0 : _h.unit) === '' }, locales.entries.Lcz_Assignunits), filteredRoomList === null || filteredRoomList === void 0 ? void 0 :
            filteredRoomList.map(room => {
                var _a;
                return (h("option", { value: room.id, selected: ((_a = this.guestInfo) === null || _a === void 0 ? void 0 : _a.unit) === room.id.toString() }, room.name));
            }))))), this.rateplanSelection.roomtype.is_bed_configuration_enabled && (h("div", { key: '683ea696b914b578a85114e0cdc53441973421f1', class: "mr-md-1 flex-fill" }, h("select", { key: 'a6a553fe866796ed0ac4400a05b25135c2f0d6bf', "data-testid": "bed_configuration", class: `form-control input-sm ${this.isButtonPressed && ((_j = this.guestInfo) === null || _j === void 0 ? void 0 : _j.bed_preference) === '' && 'border-danger'}`, id: v4(), onChange: event => this.updateGuest({ bed_preference: event.target.value }) }, h("option", { key: '16d02ac99728c9378ec05a36c6b375d3099ddf0f', value: "", selected: ((_k = this.guestInfo) === null || _k === void 0 ? void 0 : _k.bed_preference) === '' }, locales.entries.Lcz_BedConfiguration), this.bedPreferenceType.map(data => {
            var _a;
            return (h("option", { value: data.CODE_NAME, selected: ((_a = this.guestInfo) === null || _a === void 0 ? void 0 : _a.bed_preference) === data.CODE_NAME }, data.CODE_VALUE_EN));
        })))), h("p", { key: 'db453ed29617733cd15199a4bb710f4ee041da7c', class: "rate_amount" }, formatAmount((_l = this.currency) === null || _l === void 0 ? void 0 : _l.symbol, this.getAmount()), "/", locales.entries.Lcz_Stay)), this.rateplanSelection.selected_variation.child_nbr > 0 && (h("div", { key: 'd098a184ed6302c385f681bf2dbce76f56662369', style: { gap: '0.5rem', marginTop: '0.5rem' }, class: "d-flex  flex-row  p-0 align-items-center aplicationInfoContainer" }, h("p", { key: '2baca90cacd10a59902853eedbfcc8250f6d1958', class: 'm-0 p-0 text-danger' }, "Any of the children below 3 years?"), h("div", { key: '6fa32665bfe8e6cd31feb4dc4e08dcde7cc3a8d5', class: "mr-1 flex-fill" }, h("select", { key: '8bc29025e96f63b1660d708d7aa127b243c39fd1', class: `form-control input-sm ${this.isButtonPressed && ((_m = this.guestInfo) === null || _m === void 0 ? void 0 : _m.bed_preference) === '' && 'border-danger'}`, id: v4(), style: { width: 'max-content' }, onChange: event => this.updateGuest({ infant_nbr: Number(event.target.value) }) }, h("option", { key: '0f6b5c4248f63afc39f81f67d1baf85bc967c881', value: "", selected: Number((_o = this.guestInfo) === null || _o === void 0 ? void 0 : _o.infant_nbr) === 0 }, locales.entries['No'] || 'No'), Array.from({ length: this.rateplanSelection.selected_variation.child_nbr }, (_, i) => i + 1).map(item => {
            var _a;
            return (h("option", { value: item, selected: ((_a = this.guestInfo) === null || _a === void 0 ? void 0 : _a.infant_nbr) === item }, item));
        })))))));
    }
};
IglApplicationInfo.style = IglApplicationInfoStyle0;

const iglBlockDatesViewCss = ".sc-igl-block-dates-view-h{display:block}.sc-igl-block-dates-view-h .controlContainer.sc-igl-block-dates-view{width:24px}.sc-igl-block-dates-view-h .checkBoxContainer.sc-igl-block-dates-view input.sc-igl-block-dates-view{height:1.2rem !important;width:30px}.releaseTime.sc-igl-block-dates-view{padding-left:5px}.out-of-service-label.sc-igl-block-dates-view{margin-left:5px !important}";
const IglBlockDatesViewStyle0 = iglBlockDatesViewCss;

const IglBlockDatesView = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dataUpdateEvent = createEvent(this, "dataUpdateEvent", 7);
        this.isEventHover = false;
        this.renderAgain = false;
        this.blockDatesData = {
            RELEASE_AFTER_HOURS: 0,
            OPTIONAL_REASON: '',
            OUT_OF_SERVICE: false,
        }; // Change of property name might require updates in booking-event-hover
        this.releaseList = [];
        this.bookingService = new BookingService();
    }
    async componentWillLoad() {
        try {
            this.releaseList = await this.bookingService.getBlockedInfo();
            if (this.defaultData) {
                this.blockDatesData = Object.assign({}, this.defaultData);
            }
            else {
                this.blockDatesData.RELEASE_AFTER_HOURS = parseInt(this.releaseList[0].CODE_NAME);
                this.emitData();
            }
        }
        catch (error) {
            // toastr.error(error);
        }
    }
    handleOptionalReason(event) {
        this.blockDatesData.OPTIONAL_REASON = event.target.value;
        this.emitData();
    }
    handleReleaseAfterChange(evt) {
        if (this.entryDate)
            this.entryDate = undefined;
        this.blockDatesData.RELEASE_AFTER_HOURS = parseInt(evt.target.value);
        this.renderPage();
        this.emitData();
    }
    emitData() {
        this.dataUpdateEvent.emit({
            key: 'blockDatesData',
            data: Object.assign({}, this.blockDatesData),
        });
    }
    getReleaseHoursString() {
        // console.log("entry date", this.entryDate);
        // console.log("blocked date data", this.blockDatesData);
        let dt = this.entryDate ? new Date(this.entryDate) : new Date();
        if (this.entryDate && this.entryHour && this.entryMinute) {
            dt.setHours(this.entryHour, this.entryMinute, 0, 0);
        }
        else {
            dt.setHours(dt.getHours() + this.blockDatesData.RELEASE_AFTER_HOURS, dt.getMinutes(), 0, 0);
        }
        return dt.toLocaleString('default', { month: 'short' }) + ' ' + dt.getDate() + ', ' + this.formatNumber(dt.getHours()) + ':' + this.formatNumber(dt.getMinutes());
    }
    formatNumber(value) {
        return value < 10 ? `0${value}` : value;
    }
    handleOutOfService(evt) {
        this.blockDatesData.OUT_OF_SERVICE = evt.target.checked;
        if (this.blockDatesData.OUT_OF_SERVICE) {
            this.blockDatesData.OPTIONAL_REASON = '';
            this.blockDatesData.RELEASE_AFTER_HOURS = 0;
        }
        this.renderPage();
        this.emitData();
    }
    renderPage() {
        this.renderAgain = !this.renderAgain;
    }
    render() {
        console.log({ fromDate: this.fromDate, toDate: this.toDate });
        return (h(Host, { key: '4ffc45122df7d7705bab33d7e386dd326a481fcc' }, h("div", { key: '2a9d45fb706d53bb4910a82f6bee7f15422ff3d3', class: `m-0 p-0 mb-1` }, h("div", { key: 'ce124218d25985a495c0a2e33b1889cc37da71b8', class: "text-left p-0" }, h("ir-date-view", { key: '8e5432df65a71d2cadffb925022d7bf9a9cbdcd5', from_date: this.fromDate, dateOption: "YYYY-MM-DD", showDateDifference: false, to_date: this.toDate }))), h("div", { key: '3dba37945542c68e16746de93c826df72754ffd0', class: ` mb-1 text-left ${this.isEventHover && 'p-0'}` }, h("div", { key: '68cdc2ef1bf3ece43240193c540ac12a7944f502', class: "mb-1 " }, h("label", { key: '83d62cc392e0e773a3cd54e0cf521072c601b338', class: "p-0 text-bold-700 font-medium-1 m-0 align-middle" }, locales.entries.Lcz_Reason, ":"), h("div", { key: '3f108642e21c5c4bdeff720193cca2fa77296de1', class: "p-0 m-0 pr-1  controlContainer checkBoxContainer d-inline-block align-middle" }, h("input", { key: '21a8cdefd347cc9d3b1eb8305eb52abc3fcec981', class: "form-control", type: "checkbox", checked: this.blockDatesData.OUT_OF_SERVICE, id: "userinput6", onChange: event => this.handleOutOfService(event) })), h("span", { key: '0af733e59e7133a7efaea6fb3c1f843570e7c9a7', class: "align-middle out-of-service-label" }, locales.entries.Lcz_OutOfservice)), !this.blockDatesData.OUT_OF_SERVICE ? (h("div", null, h("div", { class: "mb-1 d-flex  align-items-center" }, h("span", { class: "align-middle" }, locales.entries.Lcz_Or, " "), h("div", { class: "d-inline-flex col pr-0 align-middle" }, h("input", { class: "form-control", type: "text", placeholder: locales.entries.Lcz_OptionalReason, id: "optReason", value: this.blockDatesData.OPTIONAL_REASON, onInput: event => this.handleOptionalReason(event) }))), h("div", { class: "mb-1 w-100 pr-0 " }, h("span", { class: "text-bold-700 font-medium-1" }, locales.entries.Lcz_AutomaticReleaseIn, ": "), h("div", { class: "d-inline-block" }, h("select", { class: "form-control input-sm", id: "zSmallSelect", onChange: evt => this.handleReleaseAfterChange(evt) }, this.releaseList.map(releaseItem => (h("option", { value: +releaseItem.CODE_NAME, selected: Number(this.blockDatesData.RELEASE_AFTER_HOURS) == Number(releaseItem.CODE_NAME) }, releaseItem.CODE_VALUE_EN))))), this.blockDatesData.RELEASE_AFTER_HOURS ? (h("div", { class: "d-inline-block releaseTime" }, h("em", null, locales.entries.Lcz_On, " ", this.getReleaseHoursString()))) : null))) : null)));
    }
};
IglBlockDatesView.style = IglBlockDatesViewStyle0;

var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
class IglBookPropertyService {
    setBookingInfoFromAutoComplete(context, res) {
        var _a, _b, _c;
        context.bookedByInfoData = {
            id: res.guest.id,
            email: res.guest.email,
            firstName: res.guest.first_name,
            lastName: res.guest.last_name,
            countryId: res.guest.country_id,
            isdCode: (_b = (_a = res.guest) === null || _a === void 0 ? void 0 : _a.country_phone_prefix) !== null && _b !== void 0 ? _b : (_c = res.guest) === null || _c === void 0 ? void 0 : _c.country_id.toString(),
            contactNumber: res.guest.mobile,
            selectedArrivalTime: res.arrival,
            emailGuest: res.guest.subscribe_to_news_letter,
            message: res.remark,
            cardNumber: '',
            cardHolderName: '',
            expiryMonth: '',
            expiryYear: '',
            bookingNumber: res.booking_nbr,
            rooms: res.rooms,
            from_date: res.from_date,
            to_date: res.to_date,
        };
    }
    resetRoomsInfoAndMessage(context) {
        context.defaultData.roomsInfo = [];
        context.message = '';
    }
    onDataRoomUpdate(event, selectedUnits, isEdit, isEditBooking, name) {
        let units = selectedUnits;
        const { data, key, changedKey } = event.detail;
        const roomCategoryKey = `c_${data.roomCategoryId}`;
        const ratePlanKey = `p_${data.ratePlanId}`;
        if (this.shouldClearData(key)) {
            units = new Map();
        }
        this.initializeRoomCategoryIfNeeded(roomCategoryKey, units);
        if (isEditBooking) {
            if (changedKey === 'rate') {
                if (units.has(roomCategoryKey) && units.get(roomCategoryKey).has(ratePlanKey)) {
                    this.applyBookingEditToSelectedRoom(roomCategoryKey, ratePlanKey, data, units, name, isEdit);
                }
            }
            else {
                if (changedKey !== 'rateType') {
                    if (changedKey === 'adult_child_offering') {
                        if (units.has(roomCategoryKey) && selectedUnits.get(roomCategoryKey).has(ratePlanKey)) {
                            this.applyBookingEditToSelectedRoom(roomCategoryKey, ratePlanKey, data, units, name, isEdit);
                        }
                    }
                    else {
                        this.applyBookingEditToSelectedRoom(roomCategoryKey, ratePlanKey, data, units, name, isEdit);
                    }
                }
            }
        }
        else {
            this.setSelectedRoomData(roomCategoryKey, ratePlanKey, data, units);
        }
        this.cleanupEmptyData(roomCategoryKey, units);
        return units;
    }
    shouldClearData(key) {
        return key === 'clearData' || key === 'EDIT_BOOKING';
    }
    initializeRoomCategoryIfNeeded(roomCategoryKey, selectedUnits) {
        if (!selectedUnits.has(roomCategoryKey)) {
            selectedUnits.set(roomCategoryKey, new Map());
        }
    }
    setSelectedRoomData(roomCategoryKey, ratePlanKey, data, selectedUnits) {
        let selectedRatePlans = selectedUnits.get(roomCategoryKey);
        if (data.totalRooms === 0 || data.inventory === 0) {
            selectedRatePlans.delete(ratePlanKey);
        }
        else {
            selectedUnits.set(roomCategoryKey, selectedRatePlans.set(ratePlanKey, Object.assign(Object.assign({}, data), { selectedUnits: Array(data.totalRooms).fill(-1) })));
        }
    }
    cleanupEmptyData(roomCategoryKey, selectedUnits) {
        if (selectedUnits.has(roomCategoryKey)) {
            let selectedRatePlans = selectedUnits.get(roomCategoryKey);
            if (selectedRatePlans.size === 0) {
                selectedUnits.delete(roomCategoryKey);
            }
        }
    }
    applyBookingEditToSelectedRoom(roomCategoryKey, ratePlanKey, data, selectedUnits, name, isEdit) {
        selectedUnits.clear();
        let res = {};
        if (isEdit) {
            res = Object.assign(Object.assign({}, data), { guestName: name || '', roomId: '' });
        }
        else {
            res = Object.assign({}, data);
        }
        selectedUnits.set(roomCategoryKey, new Map().set(ratePlanKey, res));
    }
    generateDailyRates(from_date, to_date, amount) {
        const endDate = new Date(to_date);
        endDate.setDate(endDate.getDate() - 1);
        let currentDate = new Date(from_date);
        const days = [];
        while (currentDate <= endDate) {
            days.push({
                date: hooks(currentDate).format('YYYY-MM-DD'),
                amount: amount,
                cost: null,
            });
            currentDate.setDate(currentDate.getDate() + 1);
        }
        return days;
    }
    // private extractFirstNameAndLastName(name: string) {
    //   const names = name.split(' ');
    //   return { first_name: names[0] || null, last_name: names[1] || null };
    // }
    getBookedRooms({ check_in, check_out, notes, identifier, override_unit, unit, auto_check_in, }) {
        const rooms = [];
        const total_days = calculateDaysBetweenDates(hooks(check_in).format('YYYY-MM-DD'), hooks(check_out).format('YYYY-MM-DD'));
        const calculateAmount = ({ is_amount_modified, selected_variation, view_mode, rp_amount, ratePlan }, infants) => {
            if (is_amount_modified) {
                return view_mode === '002' ? rp_amount : rp_amount / total_days;
            }
            let variation = selected_variation;
            if (infants > 0) {
                if (!this.variationService) {
                    this.variationService = new VariationService();
                }
                variation = this.variationService.getVariationBasedOnInfants({ variations: ratePlan.variations, baseVariation: selected_variation, infants });
            }
            return Number(variation.discounted_amount) / total_days;
        };
        for (const roomTypeId in booking_store.ratePlanSelections) {
            const roomtype = booking_store.ratePlanSelections[roomTypeId];
            for (const rateplanId in roomtype) {
                const rateplan = roomtype[rateplanId];
                if (rateplan.reserved > 0) {
                    for (let i = 0; i < rateplan.reserved; i++) {
                        const { first_name, last_name } = rateplan.guest[i];
                        rooms.push({
                            identifier,
                            roomtype: rateplan.roomtype,
                            rateplan: rateplan.ratePlan,
                            prepayment_amount_gross: 0,
                            unit: override_unit ? { id: unit } : rateplan.guest[i].unit ? { id: rateplan.guest[i].unit } : null,
                            occupancy: {
                                adult_nbr: rateplan.selected_variation.adult_nbr,
                                children_nbr: rateplan.selected_variation.child_nbr - Math.max(rateplan.guest[i].infant_nbr, 0),
                                infant_nbr: rateplan.guest[i].infant_nbr,
                            },
                            bed_preference: rateplan.guest[i].bed_preference,
                            from_date: hooks(check_in).format('YYYY-MM-DD'),
                            to_date: hooks(check_out).format('YYYY-MM-DD'),
                            notes,
                            check_in: auto_check_in,
                            days: this.generateDailyRates(check_in, check_out, calculateAmount(rateplan, rateplan.guest[i].infant_nbr)),
                            guest: {
                                email: null,
                                first_name,
                                last_name,
                                country_id: null,
                                city: null,
                                mobile: null,
                                address: null,
                                dob: null,
                                subscribe_to_news_letter: null,
                                cci: null,
                            },
                        });
                    }
                }
            }
        }
        return rooms;
    }
    async prepareBookUserServiceParams({ context, sourceOption, check_in }) {
        var _a, _b;
        try {
            // Validate context structure
            if (!context || !context.dateRangeData) {
                throw new Error('Invalid context: Missing date range data.');
            }
            const fromDate = new Date(context.dateRangeData.fromDate);
            const toDate = new Date(context.dateRangeData.toDate);
            const generateNewRooms = (identifier = null, check_in = false) => {
                return this.getBookedRooms({
                    check_in: fromDate,
                    check_out: toDate,
                    identifier,
                    notes: '',
                    override_unit: context.isEventType('BAR_BOOKING') ? true : false,
                    unit: context.isEventType('BAR_BOOKING') ? context.bookingData.PR_ID : null,
                    auto_check_in: check_in,
                });
            };
            const modifyBookingDetails = (_a, rooms) => {
                var { pickup_info, extra_services, is_direct, is_in_loyalty_mode, promo_key, extras } = _a, rest = __rest(_a, ["pickup_info", "extra_services", "is_direct", "is_in_loyalty_mode", "promo_key", "extras"]);
                return {
                    assign_units: true,
                    is_pms: true,
                    is_direct,
                    is_in_loyalty_mode,
                    promo_key,
                    extras,
                    booking: Object.assign(Object.assign({}, rest), { rooms }),
                    extra_services,
                    pickup_info,
                };
            };
            let newBooking = null;
            switch (context.defaultData.event_type) {
                case 'EDIT_BOOKING': {
                    const { booking, currentRoomType } = context.defaultData;
                    const filteredRooms = booking.rooms.filter(r => r.identifier !== currentRoomType.identifier);
                    console.log('currentRoomType', currentRoomType);
                    const newRooms = generateNewRooms(currentRoomType.identifier, ((_a = currentRoomType.in_out) === null || _a === void 0 ? void 0 : _a.code) === '001');
                    newBooking = modifyBookingDetails(booking, [...filteredRooms, ...newRooms]);
                    break;
                }
                case 'ADD_ROOM':
                case 'SPLIT_BOOKING': {
                    const { booking } = context.defaultData;
                    if (!booking) {
                        throw new Error('Missing booking');
                    }
                    console.log(booking);
                    const newRooms = generateNewRooms();
                    newBooking = modifyBookingDetails(booking, [...booking === null || booking === void 0 ? void 0 : booking.rooms, ...newRooms]);
                    break;
                }
                default: {
                    const newRooms = generateNewRooms(null, check_in);
                    const { bookedByInfoData } = context;
                    const isAgent = sourceOption.type === 'TRAVEL_AGENCY';
                    newBooking = {
                        assign_units: true,
                        is_pms: true,
                        is_direct: true,
                        is_in_loyalty_mode: false,
                        promo_key: null,
                        extras,
                        agent: isAgent ? { id: sourceOption.tag } : null,
                        booking: {
                            from_date: hooks(fromDate).format('YYYY-MM-DD'),
                            to_date: hooks(toDate).format('YYYY-MM-DD'),
                            remark: bookedByInfoData.message || null,
                            booking_nbr: '',
                            property: {
                                id: context.propertyid,
                            },
                            booked_on: {
                                date: hooks().format('YYYY-MM-DD'),
                                hour: new Date().getHours(),
                                minute: new Date().getMinutes(),
                            },
                            source: isAgent ? '' : sourceOption,
                            rooms: newRooms,
                            currency: context.currency,
                            arrival: { code: bookedByInfoData.selectedArrivalTime },
                            guest: {
                                email: bookedByInfoData.email === '' ? null : bookedByInfoData.email || null,
                                first_name: bookedByInfoData.firstName,
                                last_name: bookedByInfoData.lastName,
                                country_id: bookedByInfoData.countryId === '' ? null : bookedByInfoData.countryId,
                                city: null,
                                mobile: bookedByInfoData.contactNumber === null ? '' : bookedByInfoData.contactNumber,
                                country_phone_prefix: (_b = bookedByInfoData === null || bookedByInfoData === void 0 ? void 0 : bookedByInfoData.isdCode) !== null && _b !== void 0 ? _b : null,
                                address: '',
                                dob: null,
                                subscribe_to_news_letter: bookedByInfoData.emailGuest || false,
                                cci: bookedByInfoData.cardNumber
                                    ? {
                                        nbr: bookedByInfoData.cardNumber,
                                        holder_name: bookedByInfoData.cardHolderName,
                                        expiry_month: bookedByInfoData.expiryMonth,
                                        expiry_year: bookedByInfoData.expiryYear,
                                    }
                                    : null,
                            },
                        },
                        pickup_info: null,
                    };
                    break;
                }
            }
            return newBooking;
        }
        catch (error) {
            console.error(error);
        }
    }
    getRoomCategoryByRoomId(bookingData) {
        var _a;
        return (_a = bookingData.roomsInfo) === null || _a === void 0 ? void 0 : _a.find(roomCategory => {
            return roomCategory.id === bookingData.RATE_TYPE;
        });
    }
    setEditingRoomInfo(bookingData, selectedUnits) {
        const category = this.getRoomCategoryByRoomId(bookingData);
        const room_id = !category ? '' : `c_${category === null || category === void 0 ? void 0 : category.id}`;
        const ratePlanId = `p_${bookingData.RATE_PLAN_ID}`;
        const data = {
            adultCount: bookingData.ADULTS_COUNT,
            rate: bookingData.RATE,
            rateType: bookingData.RATE_TYPE,
            ratePlanId: bookingData.RATE_PLAN_ID,
            roomCategoryId: category ? category.id : '',
            roomCategoryName: category ? category.name : '',
            totalRooms: 1,
            ratePlanName: bookingData.RATE_PLAN,
            roomId: bookingData.PR_ID,
            guestName: bookingData.NAME,
            cancelation: bookingData.cancelation,
            guarantee: bookingData.guarantee,
            adult_child_offering: bookingData.adult_child_offering,
        };
        selectedUnits.set(room_id, new Map().set(ratePlanId, data));
    }
}

const iglBookPropertyCss = ".sc-igl-book-property-h{position:fixed;top:0;right:0;width:100vw;height:100vh;z-index:99}.card-title.sc-igl-book-property{border-bottom:1px solid #e4e5ec;width:100%}.card-header-container.sc-igl-book-property{border-bottom:1px solid #e4e5ec;width:100%;display:flex;align-items:center;box-sizing:border-box;padding:1rem 0;justify-content:space-between}.card-header-container.sc-igl-book-property h3.sc-igl-book-property{padding:0;margin:0}.scrollContent.sc-igl-book-property{height:calc(100% - 79px);overflow:auto;position:relative}.background-overlay.sc-igl-book-property{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.25)}.formContainer.sc-igl-book-property{height:calc(100% - 79px);overflow:auto}.gap-30.sc-igl-book-property{gap:30px}.block-date.sc-igl-book-property{width:100%}.sideWindow.sc-igl-book-property{position:absolute;top:0;right:0;height:100%;background-color:#ffffff;width:100vw;overflow-y:auto;padding-bottom:85px !important}.card.sc-igl-book-property{top:0;z-index:1000}.close.sc-igl-book-property{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:0.5;padding:0;background-color:transparent;border:0;appearance:none}.close-icon.sc-igl-book-property{position:absolute;top:18px;right:33px;outline:none}button.sc-igl-book-property:not(:disabled),[type='button'].sc-igl-book-property:not(:disabled){cursor:pointer}@media only screen and (min-width: 1200px){.sideWindow.sc-igl-book-property{max-width:70%}}@media only screen and (min-width: 2000px){.sideWindow.sc-igl-book-property{max-width:40%}}@media only screen and (min-width: 768px) and (max-width: 1200px){.sideWindow.sc-igl-book-property{max-width:90%}}@media only screen and (min-width: 600px) and (max-width: 768px){.sideWindow.sc-igl-book-property{max-width:75%}}@media only screen and (min-width: 641px){.block-date.sc-igl-book-property{max-width:450px;padding-bottom:0 !important}}";
const IglBookPropertyStyle0 = iglBookPropertyCss;

const IglBookProperty = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeBookingWindow = createEvent(this, "closeBookingWindow", 7);
        this.blockedCreated = createEvent(this, "blockedCreated", 7);
        this.resetBookingEvt = createEvent(this, "resetBookingEvt", 7);
        this.animateIrButton = createEvent(this, "animateIrButton", 7);
        this.animateIrSelect = createEvent(this, "animateIrSelect", 7);
        this.toast = createEvent(this, "toast", 7);
        this.showPaymentDetails = false;
        this.adultChildCount = { adult: 0, child: 0 };
        this.renderAgain = false;
        this.bookingHistory = [];
        this.initialRoomIds = null;
        this.showSplitBookingOption = false;
        this.sourceOptions = [];
        this.guestData = [];
        this.bookedByInfoData = {};
        this.blockDatesData = {};
        this.ratePricingMode = [];
        this.selectedUnits = new Map();
        this.bedPreferenceType = [];
        this.bookingService = new BookingService();
        this.bookPropertyService = new IglBookPropertyService();
        this.updatedBooking = false;
        this.MAX_HISTORY_LENGTH = 2;
    }
    async componentWillLoad() {
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.initializeDefaultDateRange();
        if (!this.bookingData.defaultDateRange) {
            return;
        }
        console.log('testing');
        // console.log(this.bookingData);
        this.initializeDefaultData();
        this.wasBlockedUnit = this.defaultData.hasOwnProperty('block_exposed_unit_props');
        modifyBookingStore('event_type', { type: this.defaultData.event_type });
        await this.fetchSetupEntriesAndInitialize();
        this.initializeEventData();
    }
    componentDidLoad() {
        document.addEventListener('keydown', this.handleKeyDown);
    }
    disconnectedCallback() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }
    clearBooking(e) {
        if (this.isEventType('SPLIT_BOOKING')) {
            e.stopImmediatePropagation();
            e.stopPropagation();
            this.bookedByInfoData = {};
            this.bookPropertyService.resetRoomsInfoAndMessage(this);
            this.renderPage();
        }
    }
    async handleSpiltBookingSelected(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { key, data } = e.detail;
        if (key === 'select' || (key === 'blur' && data !== '')) {
            const res = await this.bookingService.getExposedBooking(data.booking_nbr || data, this.language);
            this.defaultData = Object.assign(Object.assign({}, this.defaultData), { booking: res });
            this.bookPropertyService.setBookingInfoFromAutoComplete(this, res);
            this.sourceOption = res.source;
            this.renderPage();
        }
    }
    // @Listen('adultChild')
    // handleAdultChildChange(event: CustomEvent) {
    //   if (this.isEventType('ADD_ROOM') || this.isEventType('SPLIT_BOOKING')) {
    //     this.bookPropertyService.resetRoomsInfoAndMessage(this);
    //   }
    //   const { adult, child } = event.detail;
    //   this.adultChildCount = { ...event.detail };
    //   this.updateBookingHistory({ adults: adult, children: child });
    // }
    handleAdultChildChange(event) {
        if (this.isEventType('ADD_ROOM') || this.isEventType('SPLIT_BOOKING')) {
            this.bookPropertyService.resetRoomsInfoAndMessage(this);
        }
        const { adult, child } = event.detail;
        this.adultChildCount = Object.assign({}, event.detail);
        // Update the booking history
        this.updateBookingHistory({ adults: Number(adult), children: Number(child) });
    }
    onDateRangeSelect(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const opt = event.detail;
        this.updateBookingHistory({
            dates: {
                checkIn: new Date(this.dateRangeData.fromDate),
                checkOut: new Date(new Date(opt.data.toDate)),
            },
        });
        console.log('date changed', opt);
        if (opt.key === 'selectedDateRange') {
            this.dateRangeData = opt.data;
            if (this.isEventType('ADD_ROOM') || this.isEventType('SPLIT_BOOKING')) {
                this.defaultData.roomsInfo = [];
            }
            else if (this.adultChildCount.adult !== 0) {
                this.checkBookingAvailability();
                // this.checkBookingAvailability(dateToFormattedString(new Date(this.dateRangeData.fromDate)), dateToFormattedString(new Date(this.dateRangeData.toDate)));
            }
        }
    }
    handleSourceDropDown(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const value = event.detail;
        const selectedSource = this.sourceOptions.find(opt => opt.id === value.toString());
        this.sourceOption = {
            code: value,
            description: selectedSource.value || '',
            tag: selectedSource.tag,
            id: selectedSource.id,
            type: selectedSource.type,
        };
    }
    gotoSplitPageTwo() {
        this.gotoPage('page_two');
    }
    handleButtonClicked(event) {
        var _a, _b;
        switch (event.detail.key) {
            case 'save':
                this.bookUser(false);
                break;
            case 'cancel':
                event.stopImmediatePropagation();
                event.stopPropagation();
                this.closeWindow();
                break;
            case 'back':
                event.stopImmediatePropagation();
                event.stopPropagation();
                this.gotoPage('page_one');
                break;
            case 'book':
                this.bookUser(false);
                break;
            case 'bookAndCheckIn':
                this.bookUser(true);
                break;
            case 'next':
                event.stopImmediatePropagation();
                event.stopPropagation();
                if (!((_a = this.adultChildCount) === null || _a === void 0 ? void 0 : _a.adult)) {
                    this.animateIrSelect.emit('adult_child_select');
                    break;
                }
                if (calculateTotalRooms() > 0) {
                    this.gotoPage('page_two');
                    break;
                }
                else if (((_b = this.defaultData) === null || _b === void 0 ? void 0 : _b.roomsInfo.length) === 0) {
                    this.animateIrButton.emit('check_availability');
                    break;
                }
                this.toast.emit({
                    type: 'error',
                    description: locales.entries.Lcz_SelectRatePlan,
                    title: locales.entries.Lcz_SelectRatePlan,
                });
                break;
            case 'check':
                this.checkBookingAvailability();
                break;
        }
    }
    updateBookingHistory(partialData) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const lastEntry = this.bookingHistory[this.bookingHistory.length - 1];
        const newEntry = {
            dates: {
                checkIn: ((_a = partialData.dates) === null || _a === void 0 ? void 0 : _a.checkIn) || ((_b = lastEntry === null || lastEntry === void 0 ? void 0 : lastEntry.dates) === null || _b === void 0 ? void 0 : _b.checkIn) || new Date(this.dateRangeData.fromDate),
                checkOut: ((_c = partialData.dates) === null || _c === void 0 ? void 0 : _c.checkOut) || ((_d = lastEntry === null || lastEntry === void 0 ? void 0 : lastEntry.dates) === null || _d === void 0 ? void 0 : _d.checkOut) || new Date(this.dateRangeData.toDate),
            },
            adults: (_f = (_e = partialData.adults) !== null && _e !== void 0 ? _e : lastEntry === null || lastEntry === void 0 ? void 0 : lastEntry.adults) !== null && _f !== void 0 ? _f : this.adultChildCount.adult,
            children: (_h = (_g = partialData.children) !== null && _g !== void 0 ? _g : lastEntry === null || lastEntry === void 0 ? void 0 : lastEntry.children) !== null && _h !== void 0 ? _h : this.adultChildCount.child,
        };
        // Update the booking history
        this.bookingHistory.push(newEntry);
        if (this.bookingHistory.length > this.MAX_HISTORY_LENGTH) {
            this.bookingHistory.shift();
        }
    }
    handleKeyDown(e) {
        if (e.key === 'Escape') {
            this.closeWindow();
        }
    }
    initializeDefaultDateRange() {
        this.defaultDateRange = {
            from_date: this.bookingData.FROM_DATE,
            to_date: this.bookingData.TO_DATE,
        };
    }
    initializeDefaultData() {
        this.defaultData = this.bookingData;
        this.dateRangeData = Object.assign({}, this.defaultData.defaultDateRange);
    }
    async fetchSetupEntriesAndInitialize() {
        try {
            const setupEntries = await this.fetchSetupEntries();
            this.setSourceOptions(this.allowedBookingSources);
            this.setOtherProperties(setupEntries);
        }
        catch (error) {
            console.error('Error fetching setup entries:', error);
        }
    }
    initializeEventData() {
        if (this.isEventType('EDIT_BOOKING')) {
            this.initializeEditBookingData();
        }
        if (!this.isEventType('BAR_BOOKING')) {
            this.bookPropertyService.resetRoomsInfoAndMessage(this);
        }
        this.initializePage();
    }
    initializeEditBookingData() {
        var _a, _b, _c, _d, _e;
        this.adultChildCount = {
            adult: this.defaultData.ADULTS_COUNT,
            child: this.defaultData.CHILDREN_COUNT,
        };
        this.initialRoomIds = {
            roomName: this.defaultData.roomName,
            ratePlanId: this.defaultData.RATE_PLAN_ID,
            roomId: this.defaultData.PR_ID,
            roomTypeId: this.defaultData.RATE_TYPE,
        };
        const { currentRoomType, GUEST } = this.defaultData;
        console.log(GUEST);
        modifyBookingStore('guest', {
            bed_preference: (_a = currentRoomType.bed_preference) === null || _a === void 0 ? void 0 : _a.toString(),
            infant_nbr: currentRoomType.occupancy.infant_nbr,
            first_name: (_b = GUEST.first_name) !== null && _b !== void 0 ? _b : '',
            last_name: (_c = GUEST.last_name) !== null && _c !== void 0 ? _c : '',
            // name: currentRoomType.guest.last_name ? currentRoomType.guest.first_name + ' ' + currentRoomType.guest.last_name : currentRoomType.guest.first_name,
            unit: (_e = (_d = currentRoomType.unit) === null || _d === void 0 ? void 0 : _d.id) === null || _e === void 0 ? void 0 : _e.toString(),
        });
        this.checkBookingAvailability();
        this.bookPropertyService.setEditingRoomInfo(this.defaultData, this.selectedUnits);
    }
    initializePage() {
        switch (this.defaultData.event_type) {
            case 'SPLIT_BOOKING':
                this.showSplitBookingOption = true;
                this.page = 'page_one';
                break;
            case 'BLOCK_DATES':
                this.page = 'page_block_date';
                break;
            default:
                this.page = 'page_one';
                break;
        }
    }
    async fetchSetupEntries() {
        return await this.bookingService.fetchSetupEntries();
    }
    isGuestDataIncomplete() {
        for (const roomtypeId in booking_store.ratePlanSelections) {
            const roomtype = booking_store.ratePlanSelections[roomtypeId];
            for (const rateplanId in roomtype) {
                const rateplan = roomtype[rateplanId];
                if (rateplan.reserved > 0) {
                    for (const guest of rateplan.guest) {
                        if (guest.first_name === '' || guest.last_name === '') {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }
    isButtonDisabled() {
        const isValidProperty = (property, key, comparedBy) => {
            if (!property) {
                return true;
            }
            if (property === this.guestData) {
                return this.isGuestDataIncomplete();
            }
            if (key === 'selectedArrivalTime') {
                if (property[key] !== undefined) {
                    return property[key].code === '';
                }
                else {
                    return true;
                }
            }
            return property[key] === comparedBy || property[key] === undefined;
        };
        return (isValidProperty(this.guestData, 'guestName', '') ||
            isValidProperty(this.bookedByInfoData, 'firstName', '') ||
            isValidProperty(this.bookedByInfoData, 'lastName', '') ||
            isValidProperty(this.bookedByInfoData, 'selectedArrivalTime', ''));
    }
    setSourceOptions(bookingSource) {
        this.sourceOptions = bookingSource.map(source => ({
            id: source.id,
            value: source.description,
            tag: source.tag,
            type: source.type,
        }));
        if (this.isEventType('EDIT_BOOKING')) {
            this.sourceOption = Object.assign({}, this.defaultData.SOURCE);
        }
        else {
            this.sourceOption = {
                code: bookingSource[0].code,
                description: bookingSource[0].description,
                tag: bookingSource[0].tag,
                type: bookingSource[0].type,
                id: bookingSource[0].id,
            };
        }
    }
    setOtherProperties(res) {
        this.ratePricingMode = res === null || res === void 0 ? void 0 : res.ratePricingMode;
        this.bookedByInfoData.arrivalTime = res.arrivalTime;
        this.bedPreferenceType = res.bedPreferenceType;
    }
    async checkBookingAvailability() {
        const from_date = hooks(this.dateRangeData.fromDate).format('YYYY-MM-DD');
        const to_date = hooks(this.dateRangeData.toDate).format('YYYY-MM-DD');
        const is_in_agent_mode = this.sourceOption['type'] === 'TRAVEL_AGENCY';
        try {
            const room_type_ids_to_update = this.isEventType('EDIT_BOOKING') ? [this.defaultData.RATE_TYPE] : [];
            const room_type_ids = this.isEventType('BAR_BOOKING') ? this.defaultData.roomsInfo.map(room => room.id) : [];
            const data = await this.bookingService.getBookingAvailability({
                from_date,
                to_date,
                propertyid: this.propertyid,
                adultChildCount: this.adultChildCount,
                language: this.language,
                room_type_ids,
                currency: this.currency,
                agent_id: is_in_agent_mode ? this.sourceOption['tag'] : null,
                is_in_agent_mode,
                room_type_ids_to_update,
            });
            if (!this.isEventType('EDIT_BOOKING')) {
                this.defaultData.defaultDateRange.fromDate = new Date(this.dateRangeData.fromDate);
                this.defaultData.defaultDateRange.toDate = new Date(this.dateRangeData.toDate);
            }
            this.defaultData = Object.assign(Object.assign({}, this.defaultData), { roomsInfo: data });
            if (this.isEventType('EDIT_BOOKING') && !this.updatedBooking) {
                this.updateBooking();
            }
        }
        catch (error) {
            console.error('Error initializing booking availability:', error);
        }
    }
    updateBooking() {
        var _a, _b, _c;
        try {
            const { currentRoomType, GUEST } = this.defaultData;
            const roomtypeId = currentRoomType.roomtype.id;
            const rateplanId = currentRoomType.rateplan.id;
            console.log({ GUEST });
            reserveRooms({
                roomTypeId: roomtypeId,
                ratePlanId: rateplanId,
                rooms: 1,
                guest: [
                    {
                        bed_preference: (_a = currentRoomType.bed_preference) === null || _a === void 0 ? void 0 : _a.toString(),
                        infant_nbr: currentRoomType.occupancy.infant_nbr,
                        last_name: GUEST.last_name,
                        first_name: GUEST.first_name,
                        unit: (_c = (_b = currentRoomType.unit) === null || _b === void 0 ? void 0 : _b.id) === null || _c === void 0 ? void 0 : _c.toString(),
                    },
                ],
            });
        }
        catch (error) {
            console.error(error);
        }
    }
    async checkAndBlockDate() {
        try {
            const { block_exposed_unit_props } = this.defaultData;
            await this.bookingService.getBookingAvailability({
                from_date: block_exposed_unit_props.from_date,
                to_date: block_exposed_unit_props.to_date,
                propertyid: this.propertyid,
                adultChildCount: {
                    adult: 2,
                    child: 0,
                },
                language: this.language,
                room_type_ids: this.defaultData.roomsInfo.map(room => room.id),
                currency: this.currency,
            });
            const isAvailable = booking_store.roomTypes.every(rt => rt.is_available_to_book);
            if (isAvailable) {
                await this.handleBlockDate(false);
            }
            else {
                console.log('Blocked date is unavailable. Continuing...');
            }
        }
        catch (error) {
            console.error('Error checking and blocking date:', error);
        }
    }
    async closeWindow() {
        resetBookingStore();
        this.closeBookingWindow.emit();
        if (this.wasBlockedUnit && !this.didReservation) {
            await this.checkAndBlockDate();
        }
        document.removeEventListener('keydown', this.handleKeyDown);
    }
    isEventType(key) {
        return this.defaultData.event_type === key;
    }
    handleBlockDateUpdate(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const opt = event.detail;
        this.blockDatesData = opt.data;
    }
    handleGuestInfoUpdate(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const opt = event.detail;
        if (opt.guestRefKey) {
            if (this.isEventType('BAR_BOOKING') || this.isEventType('SPLIT_BOOKING')) {
                this.guestData[opt.guestRefKey] = Object.assign(Object.assign({}, opt.data), { roomId: this.defaultData.PR_ID });
            }
            else
                this.guestData[opt.guestRefKey] = opt.data;
        }
    }
    handleBookedByInfoUpdate(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const opt = event.detail;
        this.bookedByInfoData = opt.value.data;
    }
    renderPage() {
        this.renderAgain = !this.renderAgain;
    }
    gotoPage(gotoPage) {
        this.page = gotoPage;
        this.renderPage();
    }
    getPageBlockDatesView() {
        return (h(Fragment, null, h("igl-block-dates-view", { fromDate: this.defaultData.FROM_DATE, toDate: this.defaultData.TO_DATE, entryDate: this.defaultData.ENTRY_DATE, onDataUpdateEvent: event => this.handleBlockDateUpdate(event) }), h("div", { class: "p-0 mb-1 mt-2 gap-30 d-flex align-items-center justify-content-between" }, h("ir-button", { text: locales.entries.Lcz_Cancel, btn_color: "secondary", class: "flex-fill", onClick: () => this.closeWindow() }), h("ir-button", { text: locales.entries.Lcz_Blockdates, isLoading: isRequestPending('/Block_Exposed_Unit'), class: "flex-fill", onClick: () => this.handleBlockDate() }))));
    }
    handlePageTwoDataUpdateEvent(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        if (event.detail.key === 'propertyBookedBy') {
            this.handleBookedByInfoUpdate(event);
        }
        else {
            this.handleGuestInfoUpdate(event);
        }
    }
    async handleBlockDate(auto_close = true) {
        const props = this.wasBlockedUnit
            ? this.defaultData.block_exposed_unit_props
            : (() => {
                const releaseData = getReleaseHoursString(+this.blockDatesData.RELEASE_AFTER_HOURS);
                return Object.assign({ from_date: dateToFormattedString(this.defaultData.defaultDateRange.fromDate), to_date: dateToFormattedString(this.defaultData.defaultDateRange.toDate), NOTES: this.blockDatesData.OPTIONAL_REASON || '', pr_id: this.defaultData.PR_ID.toString(), STAY_STATUS_CODE: this.blockDatesData.OUT_OF_SERVICE ? '004' : this.blockDatesData.RELEASE_AFTER_HOURS === 0 ? '002' : '003', DESCRIPTION: this.blockDatesData.RELEASE_AFTER_HOURS || '' }, releaseData);
            })();
        await this.bookingService.blockUnit(props);
        // const blockedUnit = await transformNewBLockedRooms(result);
        // this.blockedCreated.emit(blockedUnit);
        if (auto_close)
            this.closeWindow();
    }
    async bookUser(check_in) {
        this.setLoadingState(check_in);
        if (this.isEventType('EDIT_BOOKING') || this.isEventType('ADD_ROOM')) {
            if (this.isGuestDataIncomplete()) {
                this.isLoading = '';
                return;
            }
        }
        else if (this.isButtonDisabled()) {
            this.isLoading = '';
            return;
        }
        try {
            if (this.isEventType('EDIT_BOOKING') || this.isEventType('ADD_ROOM')) {
                this.bookedByInfoData.message = this.defaultData.NOTES;
            }
            this.didReservation = true;
            const serviceParams = await this.bookPropertyService.prepareBookUserServiceParams({
                context: this,
                sourceOption: this.sourceOption,
                check_in,
            });
            await this.bookingService.doReservation(serviceParams);
            this.resetBookingEvt.emit(null);
        }
        catch (error) {
            console.error('Error booking user:', error);
        }
        finally {
            // this.isLoading = null;
            this.resetLoadingState();
        }
    }
    setLoadingState(assign_units) {
        if (this.isEventType('EDIT_BOOKING') || this.isEventType('ADD_ROOM')) {
            this.isLoading = 'save';
        }
        else {
            this.isLoading = assign_units ? 'bookAndCheckIn' : 'book';
        }
    }
    resetLoadingState() {
        this.isLoading = '';
        setTimeout(() => {
            this.closeWindow();
        }, 100);
    }
    getCurrentPage(name) {
        return this.page === name;
    }
    render() {
        return (h(Host, { key: '060a62f6c11c41b9aad8189fb4853828274c043f', "data-testid": "book_property_sheet" }, h("div", { key: '7edc42e78726a52d957124b25de62c2260394ae6', class: "background-overlay", onClick: () => this.closeWindow() }), h("div", { key: '09276ff572ab418e468a3268ed17849fd13e7238', class: 'sideWindow pb-5 pb-md-0 ' + (this.getCurrentPage('page_block_date') ? 'block-date' : '') }, h("div", { key: '96ccf3784b4f1bbe722d99c6331149044c17ea29', class: "card position-sticky mb-0 shadow-none p-0 " }, h("div", { key: 'de0fe53539903019f2296082339837a07dfedb9e', class: "card-header-container mb-2" }, h("h3", { key: 'd0565c832dca246704abf33e77339e4db90abf3c', class: " text-left font-medium-2 px-2 px-md-3" }, this.getCurrentPage('page_block_date') ? this.defaultData.BLOCK_DATES_TITLE : this.defaultData.TITLE), h("ir-icon", { key: '87f06c6758d3d60332bd2deca66b24416d1b3f15', class: 'px-2', onIconClickHandler: () => {
                this.closeWindow();
            } }, h("svg", { key: '2ac1e6e36af964c0cf6eacffefc6f64527b8ac78', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, h("path", { key: '9ba2f85b7f4f73372271a7041465eed5a8c5bed0', fill: "currentColor", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" }))))), h("div", { key: 'cdc55270868c7f0ea62cc41ead67a1e12acfac21', class: "px-2 px-md-3" }, this.getCurrentPage('page_one') && (h("igl-booking-overview-page", { key: '3788dd5b1741c9134efd358fd3382c8a66844160', initialRoomIds: this.initialRoomIds, defaultDaterange: this.defaultDateRange, class: 'p-0 mb-1', eventType: this.defaultData.event_type, selectedRooms: this.selectedUnits, currency: this.currency, showSplitBookingOption: this.showSplitBookingOption, ratePricingMode: this.ratePricingMode, dateRangeData: this.dateRangeData, bookingData: this.defaultData, adultChildCount: this.adultChildCount, bookedByInfoData: this.bookedByInfoData, adultChildConstraints: this.adultChildConstraints, sourceOptions: this.sourceOptions, propertyId: this.propertyid })), this.getCurrentPage('page_two') && (h("igl-booking-form", { key: '6f08824a420fbdfe477b95a2d0b73add31a9fae3', currency: this.currency, propertyId: this.propertyid, showPaymentDetails: this.showPaymentDetails, selectedGuestData: this.guestData, countries: this.countries, isLoading: this.isLoading, selectedRooms: this.selectedUnits, bedPreferenceType: this.bedPreferenceType, dateRangeData: this.dateRangeData, bookingData: this.defaultData, showSplitBookingOption: this.showSplitBookingOption, language: this.language, bookedByInfoData: this.bookedByInfoData, defaultGuestData: this.defaultData, isEditOrAddRoomEvent: this.isEventType('EDIT_BOOKING') || this.isEventType('ADD_ROOM'), onDataUpdateEvent: event => this.handlePageTwoDataUpdateEvent(event) })), this.getCurrentPage('page_block_date') ? this.getPageBlockDatesView() : null))));
    }
};
IglBookProperty.style = IglBookPropertyStyle0;

const iglBookPropertyFooterCss = ".sc-igl-book-property-footer-h{display:block;margin:0;padding:0}.sc-igl-book-property-footer-h>*.sc-igl-book-property-footer{margin:auto;padding:auto}.gap-30.sc-igl-book-property-footer{gap:30px}";
const IglBookPropertyFooterStyle0 = iglBookPropertyFooterCss;

const IglBookPropertyFooter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.buttonClicked = createEvent(this, "buttonClicked", 7);
        this.disabled = true;
    }
    isEventType(event) {
        return event === this.eventType;
    }
    editNext(label) {
        if (this.isEventType('EDIT_BOOKING')) {
            if (label === 'Cancel') {
                return 'flex-fill';
            }
            else {
                return 'd-none d-md-block  flex-fill';
            }
        }
        return 'flex-fill';
    }
    renderButton(type, label, disabled = false, icon_name) {
        return (h("div", { class: this.shouldRenderTwoButtons() ? ` ${this.editNext(label)}` : 'flex-fill' }, h("ir-button", { btn_color: type === 'cancel' ? 'secondary' : 'primary', text: label, btn_disabled: disabled, onClickHandler: () => {
                this.buttonClicked.emit({ key: type });
            }, icon_name: icon_name, iconPosition: "right", style: { '--icon-size': '1rem' }, icon_style: { paddingBottom: '1.9px' } })));
    }
    shouldRenderTwoButtons() {
        return this.isEventType('PLUS_BOOKING') || this.isEventType('ADD_ROOM') || this.isEventType('EDIT_BOOKING');
    }
    render() {
        return (h(Host, { key: 'bd00491c082b60527772f3193d4d85354f7a7eb2' }, h("div", { key: '78f664ec54eef5aef70c58550885945958d76dd4', class: "d-flex justify-content-between gap-30 align-items-center" }, this.isEventType('EDIT_BOOKING') ? (h(Fragment, null, this.renderButton('cancel', locales.entries.Lcz_Cancel), this.shouldRenderTwoButtons() && this.renderButton('next', `${locales.entries.Lcz_Next}`, isRequestPending('/Get_Exposed_Booking_Availability'), 'angles_right'))) : (h(Fragment, null, this.renderButton('cancel', locales.entries.Lcz_Cancel), this.shouldRenderTwoButtons() && this.renderButton('next', `${locales.entries.Lcz_Next}`, false, 'angles_right'))))));
    }
};
IglBookPropertyFooter.style = IglBookPropertyFooterStyle0;

const iglBookPropertyHeaderCss = ".sc-igl-book-property-header-h{display:block}.sourceContainer.sc-igl-book-property-header{max-width:350px}.message-label.sc-igl-book-property-header{font-size:80%}";
const IglBookPropertyHeaderStyle0 = iglBookPropertyHeaderCss;

const IglBookPropertyHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.splitBookingDropDownChange = createEvent(this, "splitBookingDropDownChange", 7);
        this.sourceDropDownChange = createEvent(this, "sourceDropDownChange", 7);
        this.adultChild = createEvent(this, "adultChild", 7);
        this.checkClicked = createEvent(this, "checkClicked", 7);
        this.buttonClicked = createEvent(this, "buttonClicked", 7);
        this.toast = createEvent(this, "toast", 7);
        this.spiltBookingSelected = createEvent(this, "spiltBookingSelected", 7);
        this.animateIrButton = createEvent(this, "animateIrButton", 7);
        this.animateIrSelect = createEvent(this, "animateIrSelect", 7);
        this.splitBookingId = '';
        this.bookingData = '';
        this.sourceOptions = [];
        this.showSplitBookingOption = false;
        this.sourceOption = {
            code: '',
            description: '',
            tag: '',
            id: '',
            type: '',
        };
    }
    getSplitBookingList() {
        return (h("fieldset", { class: "d-flex flex-column text-left mb-1  flex-lg-row align-items-lg-center" }, h("label", { class: "mr-lg-1" }, locales.entries.Lcz_Tobooking, "# "), h("div", { class: "btn-group mt-1 mt-lg-0 sourceContainer" }, h("ir-autocomplete", { value: Object.keys(this.bookedByInfoData).length > 1 ? `${this.bookedByInfoData.bookingNumber} ${this.bookedByInfoData.firstName} ${this.bookedByInfoData.lastName}` : '', from_date: hooks(this.bookingDataDefaultDateRange.fromDate).format('YYYY-MM-DD'), to_date: hooks(this.bookingDataDefaultDateRange.toDate).format('YYYY-MM-DD'), propertyId: this.propertyId, placeholder: locales.entries.Lcz_BookingNumber, onComboboxValue: e => {
                e.stopImmediatePropagation();
                this.spiltBookingSelected.emit(e.detail);
            }, isSplitBooking: true }))));
    }
    getSourceNode() {
        return (h("fieldset", { class: "d-flex text-left  align-items-center" }, h("label", { class: "mr-1" }, locales.entries.Lcz_Source, " "), h("div", { class: "btn-group mt-0 flex-fill sourceContainer" }, h("select", { class: "form-control input-sm", id: "xSmallSelect", onChange: evt => this.sourceDropDownChange.emit(evt.target.value) }, this.sourceOptions.map(option => {
            if (option.type === 'LABEL') {
                return h("optgroup", { label: option.value });
            }
            return (h("option", { value: option.id, selected: this.sourceOption.code === option.id }, option.value));
        })))));
    }
    handleAdultChildChange(key, value) {
        //const value = (event.target as HTMLSelectElement).value;
        let obj = {};
        if (value === '') {
            obj = Object.assign(Object.assign({}, this.adultChildCount), { [key]: 0 });
        }
        else {
            obj = Object.assign(Object.assign({}, this.adultChildCount), { [key]: value });
        }
        this.adultChild.emit(obj);
    }
    getAdultChildConstraints() {
        return (h("div", { class: 'mt-1 mt-lg-0 d-flex flex-column text-left' }, h("div", { class: "form-group  my-lg-0 text-left d-flex align-items-center justify-content-between justify-content-sm-start" }, h("fieldset", null, h("div", { class: "btn-group ml-0" }, h("ir-select", { testId: "adult_number", class: 'm-0', onSelectChange: e => this.handleAdultChildChange('adult', e.detail), select_id: "adult_select", firstOption: locales.entries.Lcz_AdultsCaption, LabelAvailable: false, data: Array.from(Array(this.adultChildConstraints.adult_max_nbr), (_, i) => i + 1).map(option => ({
                text: option.toString(),
                value: option.toString(),
            })) }))), this.adultChildConstraints.child_max_nbr > 0 && (h("fieldset", null, h("div", { class: "btn-group ml-1 p-0" }, h("ir-select", { testId: "child_number", onSelectChange: e => this.handleAdultChildChange('child', e.detail), select_id: "child_select", firstOption: this.renderChildCaption(), LabelAvailable: false, data: Array.from(Array(this.adultChildConstraints.child_max_nbr), (_, i) => i + 1).map(option => ({
                text: option.toString(),
                value: option.toString(),
            })) })))), h("ir-button", { btn_id: "check_availability", isLoading: isRequestPending('/Check_Availability'), icon: "", size: "sm", class: "ml-2", text: locales.entries.Lcz_Check, onClickHandler: () => this.handleButtonClicked() }))));
    }
    renderChildCaption() {
        const maxAge = this.adultChildConstraints.child_max_age;
        let years = locales.entries.Lcz_Years;
        if (maxAge === 1) {
            years = locales.entries.Lcz_Year;
        }
        return `${locales.entries.Lcz_ChildCaption} 0 - ${this.adultChildConstraints.child_max_age} ${years}`;
    }
    handleButtonClicked() {
        if (this.isEventType('SPLIT_BOOKING') && Object.keys(this.bookedByInfoData).length <= 1) {
            this.toast.emit({
                type: 'error',
                title: locales.entries.Lcz_ChooseBookingNumber,
                description: '',
                position: 'top-right',
            });
        }
        else if (this.isEventType('ADD_ROOM') || this.isEventType('SPLIT_BOOKING')) {
            const initialToDate = hooks(new Date(this.bookedByInfoData.to_date || this.defaultDaterange.to_date));
            const initialFromDate = hooks(new Date(this.bookedByInfoData.from_date || this.defaultDaterange.from_date));
            const selectedFromDate = hooks(new Date(this.dateRangeData.fromDate));
            const selectedToDate = hooks(new Date(this.dateRangeData.toDate));
            if (selectedToDate.isBefore(initialFromDate) || selectedFromDate.isAfter(initialToDate)) {
                this.toast.emit({
                    type: 'error',
                    title: `${locales.entries.Lcz_CheckInDateShouldBeMAx.replace('%1', hooks(new Date(this.bookedByInfoData.from_date || this.defaultDaterange.from_date)).format('ddd, DD MMM YYYY')).replace('%2', hooks(new Date(this.bookedByInfoData.to_date || this.defaultDaterange.to_date)).format('ddd, DD MMM YYYY'))}  `,
                    description: '',
                    position: 'top-right',
                });
                return;
            }
            else if (this.adultChildCount.adult === 0) {
                this.toast.emit({ type: 'error', title: locales.entries.Lcz_PlzSelectNumberOfGuests, description: '', position: 'top-right' });
                this.animateIrSelect.emit('adult_child_select');
            }
            else {
                this.buttonClicked.emit({ key: 'check' });
            }
        }
        else if (this.minDate && new Date(this.dateRangeData.fromDate).getTime() > new Date(this.bookedByInfoData.to_date || this.defaultDaterange.to_date).getTime()) {
            this.toast.emit({
                type: 'error',
                title: `${locales.entries.Lcz_CheckInDateShouldBeMAx.replace('%1', hooks(new Date(this.bookedByInfoData.from_date || this.defaultDaterange.from_date)).format('ddd, DD MMM YYYY')).replace('%2', hooks(new Date(this.bookedByInfoData.to_date || this.defaultDaterange.to_date)).format('ddd, DD MMM YYYY'))}  `,
                description: '',
                position: 'top-right',
            });
        }
        else if (this.adultChildCount.adult === 0) {
            this.animateIrSelect.emit('adult_child_select');
            this.toast.emit({ type: 'error', title: locales.entries.Lcz_PlzSelectNumberOfGuests, description: '', position: 'top-right' });
        }
        else {
            this.buttonClicked.emit({ key: 'check' });
        }
    }
    isEventType(key) {
        return this.bookingData.event_type === key;
    }
    render() {
        const showSourceNode = this.showSplitBookingOption ? this.getSplitBookingList() : this.isEventType('EDIT_BOOKING') || this.isEventType('ADD_ROOM') ? false : true;
        return (h(Host, { key: '618479895a1e9735fa65aaac1737df205f81a75b' }, this.isEventType('SPLIT_BOOKING') && this.getSplitBookingList(), showSourceNode && this.getSourceNode(), h("div", { key: 'ab944bd1006f84ea7132211b3eec9dde38df6fdd', class: `d-flex flex-column flex-lg-row align-items-lg-center ${showSourceNode ? 'mt-1' : ''}` }, h("fieldset", { key: '18f44ae2f49630fc45a6e7fa50b01168cae215aa', class: "mt-lg-0 mr-1 " }, h("igl-date-range", { key: '9e26fea22eb92a7715ed172b26ac8cc3130a247c', "data-testid": "date_picker", variant: "booking", dateLabel: locales.entries.Lcz_Dates, minDate: this.isEventType('PLUS_BOOKING') ? hooks().add(-1, 'months').startOf('month').format('YYYY-MM-DD') : this.minDate, disabled: this.isEventType('BAR_BOOKING') || this.isEventType('SPLIT_BOOKING'), defaultData: this.bookingDataDefaultDateRange })), !this.isEventType('EDIT_BOOKING') && this.getAdultChildConstraints()), h("p", { key: '7ec44ac8849807341113161a939cd73d36e32700', class: "text-right mt-1 message-label" }, calendar_data.tax_statement)));
    }
};
IglBookPropertyHeader.style = IglBookPropertyHeaderStyle0;

const iglBookingFormCss = ".sc-igl-booking-form-h{display:block}.card-title.sc-igl-booking-form{border-bottom:1px solid #e4e5ec}.scrollContent.sc-igl-booking-form{height:calc(100% - 79px);overflow:auto;position:relative}.background-overlay.sc-igl-booking-form{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.25)}.formContainer.sc-igl-booking-form{height:calc(100% - 79px);overflow:auto}.sideWindow.sc-igl-booking-form{position:absolute;top:0;right:0;height:100%;background-color:#ffffff}.close.sc-igl-booking-form{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:0.5;padding:0;background-color:transparent;border:0;appearance:none}.close-icon.sc-igl-booking-form{position:absolute;top:18px;right:33px;outline:none}button.sc-igl-booking-form:not(:disabled),[type='button'].sc-igl-booking-form:not(:disabled){cursor:pointer}.row.sc-igl-booking-form{padding:0 0 0 15px;margin:0}";
const IglBookingFormStyle0 = iglBookingFormCss;

const IglBookingForm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dataUpdateEvent = createEvent(this, "dataUpdateEvent", 7);
        this.buttonClicked = createEvent(this, "buttonClicked", 7);
        this.selectedUnits = {};
    }
    componentWillLoad() {
        this.initializeGuestData();
        this.selectedBookedByData = this.bookedByInfoData;
    }
    initializeGuestData() {
        let total = 0;
        const newSelectedUnits = Object.assign({}, this.selectedUnits);
        const getRate = (rate, totalNights, isRateModified, preference) => {
            if (isRateModified && preference === 2) {
                return rate * totalNights;
            }
            return rate;
        };
        this.selectedUnits = newSelectedUnits;
        this.guestData = [];
        this.selectedRooms.forEach((room, key) => {
            room.forEach(rate_plan => {
                newSelectedUnits[key] = rate_plan.selectedUnits;
                total += rate_plan.totalRooms * getRate(rate_plan.rate, this.dateRangeData.dateDifference, rate_plan.isRateModified, rate_plan.rateType);
                for (let i = 1; i <= rate_plan.totalRooms; i++) {
                    this.guestData.push(Object.assign({ guestName: '', roomId: '', preference: '' }, rate_plan));
                }
            });
        });
        this.bookingData.TOTAL_PRICE = total;
    }
    handleOnApplicationInfoDataUpdateEvent(event, index) {
        const opt = event.detail;
        const categoryIdKey = `c_${opt.data.roomCategoryId}`;
        const updatedUnits = [...(this.selectedUnits[categoryIdKey] || [])];
        updatedUnits[index] = opt.data.roomId;
        this.selectedUnits = Object.assign(Object.assign({}, this.selectedUnits), { [categoryIdKey]: updatedUnits });
        this.dataUpdateEvent.emit({
            key: 'applicationInfoUpdateEvent',
            value: event.detail,
        });
    }
    handleEventData(event, key, index) {
        if (key === 'application-info') {
            this.handleOnApplicationInfoDataUpdateEvent(event, index);
        }
        else {
            this.selectedBookedByData = event.detail.data;
            this.dataUpdateEvent.emit({
                key: 'propertyBookedBy',
                value: event.detail,
            });
        }
    }
    isGuestDataIncomplete() {
        if (this.selectedGuestData.length !== this.guestData.length) {
            return true;
        }
        for (const data of this.selectedGuestData) {
            if (data.guestName === '' || data.preference === '' || data.roomId === '') {
                return true;
            }
        }
        return false;
    }
    isButtonDisabled(key) {
        const isValidProperty = (property, key, comparedBy) => {
            if (!property) {
                return true;
            }
            if (property === this.selectedGuestData) {
                return this.isGuestDataIncomplete();
            }
            if (key === 'selectedArrivalTime') {
                if (property[key] !== undefined) {
                    return property[key].code === '';
                }
                else {
                    return true;
                }
            }
            return property[key] === comparedBy || property[key] === undefined;
        };
        return (this.isLoading === key ||
            isValidProperty(this.selectedGuestData, 'guestName', '') ||
            isValidProperty(this.selectedBookedByData, 'isdCode', '') ||
            isValidProperty(this.selectedBookedByData, 'contactNumber', '') ||
            isValidProperty(this.selectedBookedByData, 'firstName', '') ||
            isValidProperty(this.selectedBookedByData, 'lastName', '') ||
            isValidProperty(this.selectedBookedByData, 'countryId', -1) ||
            isValidProperty(this.selectedBookedByData, 'selectedArrivalTime', '') ||
            isValidProperty(this.selectedBookedByData, 'email', ''));
    }
    render() {
        var _a;
        const showBookAndCheckin = calendar_data.checkin_enabled && hooks(new Date((_a = this.dateRangeData) === null || _a === void 0 ? void 0 : _a.fromDate)).isSame(new Date(), 'day');
        return (h(Host, { key: 'b006227d7799b892b3bb77beb01932dc377c44a1' }, h("div", { key: '52b4393b6381b33637b0e960bdeac72c0ffef0e8', class: "d-flex flex-wrap" }, h("ir-date-view", { key: '5e8ba63981ced2490f8ddea41aa2b8534cd26e15', class: "mr-1 flex-fill font-weight-bold font-medium-1", from_date: new Date(this.dateRangeData.fromDate), to_date: new Date(this.dateRangeData.toDate), dateOption: "DD MMM YYYY" }), this.guestData.length > 1 && (h("div", { key: '7834026eafa418457dc77da4f5101eea53977384', class: "mt-1 mt-md-0 text-right" }, locales.entries.Lcz_TotalPrice, " ", h("span", { key: '63c7460a8ecd1266d491ada9af771734e97f59f2', class: "font-weight-bold font-medium-1" }, formatAmount(this.currency.symbol, this.bookingData.TOTAL_PRICE || '0'))))), Object.values(booking_store.ratePlanSelections).map(val => Object.values(val).map(ratePlan => {
            const rp = ratePlan;
            if (rp.reserved === 0) {
                return null;
            }
            return [...new Array(rp.reserved)].map((_, i) => (h("igl-application-info", { totalNights: Number(this.dateRangeData.dateDifference), bedPreferenceType: this.bedPreferenceType, currency: this.currency, guestInfo: rp.guest ? rp.guest[i] : null, bookingType: this.bookingData.event_type, rateplanSelection: rp, key: `${rp.ratePlan.id}_${i}`, roomIndex: i, baseData: this.bookingData.event_type === 'EDIT_BOOKING'
                    ? {
                        roomtypeId: this.bookingData.currentRoomType.roomtype.id,
                        unit: this.bookingData.currentRoomType.unit,
                    }
                    : undefined })));
        })), this.isEditOrAddRoomEvent || this.showSplitBookingOption ? null : (h("igl-property-booked-by", { propertyId: this.propertyId, countries: this.countries, language: this.language, showPaymentDetails: this.showPaymentDetails, defaultData: this.bookedByInfoData, onDataUpdateEvent: event => {
                this.handleEventData(event, 'propertyBookedBy', 0);
            } })), this.isEditOrAddRoomEvent ? (h("div", { class: "d-flex p-0 mb-1 mt-2" }, h("div", { class: "flex-fill mr-2" }, h("ir-button", { icon: "", text: locales.entries.Lcz_Back, class: "full-width", btn_color: "secondary", btn_styles: "justify-content-center", onClickHandler: () => this.buttonClicked.emit({ key: 'back' }) })), h("div", { class: "flex-fill" }, h("ir-button", { isLoading: this.isLoading === 'save', onClickHandler: () => this.buttonClicked.emit({ key: 'save' }), btn_styles: "full-width align-items-center justify-content-center", text: locales.entries.Lcz_Save })))) : (h("div", { class: "d-flex flex-column flex-md-row p-0 mb-1 mt-2 justify-content-md-between align-items-md-center" }, h("div", { class: "flex-fill mr-md-1" }, h("ir-button", { icon_name: "angles_left", btn_color: "secondary", btn_styles: "full-width align-items-center justify-content-center", onClickHandler: () => this.buttonClicked.emit({ key: 'back' }), text: locales.entries.Lcz_Back, style: { '--icon-size': '1rem' }, icon_style: { paddingBottom: '1.9px' } })), h("div", { class: `mt-1 mt-md-0 flex-fill ${showBookAndCheckin ? 'mr-md-1' : ''}` }, h("ir-button", { isLoading: this.isLoading === 'book', btn_styles: "full-width align-items-center justify-content-center", onClickHandler: () => this.buttonClicked.emit({ key: 'book' }), text: locales.entries.Lcz_Book })), showBookAndCheckin && (h("div", { class: "mt-1 mt-md-0 flex-fill" }, h("ir-button", { isLoading: this.isLoading === 'bookAndCheckIn', btn_styles: "full-width align-items-center justify-content-center", onClickHandler: () => this.buttonClicked.emit({ key: 'bookAndCheckIn' }), text: locales.entries.Lcz_BookAndChekcIn })))))));
    }
};
IglBookingForm.style = IglBookingFormStyle0;

const iglBookingOverviewPageCss = ".sc-igl-booking-overview-page-h{display:block}.sc-igl-booking-overview-page-h>*.sc-igl-booking-overview-page{margin:0;padding:auto}.scrollContent.sc-igl-booking-overview-page{height:calc(100% - 79px);overflow:auto;position:relative}.loading-container.sc-igl-booking-overview-page{display:flex;align-items:center;justify-content:center;height:100%;background:white;position:absolute;inset:0;z-index:100}.loader.sc-igl-booking-overview-page{width:1.25rem;height:1.25rem;border:2.5px solid #3f3f3f;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}";
const IglBookingOverviewPageStyle0 = iglBookingOverviewPageCss;

const IglBookingOverviewPage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.roomsDataUpdate = createEvent(this, "roomsDataUpdate", 7);
    }
    getSplitBookings() {
        return (this.bookingData.hasOwnProperty('splitBookingEvents') && this.bookingData.splitBookingEvents) || [];
    }
    isEventType(event) {
        return event === this.eventType;
    }
    setMinDate() {
        if (!this.isEventType('EDIT_BOOKING')) {
            return;
        }
        const from_date = hooks(this.bookingData.FROM_DATE, 'YYYY-MM-DD');
        const today = hooks();
        if (from_date.isAfter(today)) {
            return today.add(-2, 'weeks').format('YYYY-MM-DD');
        }
        return from_date.add(-2, 'weeks').format('YYYY-MM-DD');
    }
    render() {
        var _a;
        return (h(Host, { key: 'b149601d0138600cbb20a9c3f577b85246ca3660' }, h("igl-book-property-header", { key: '6aec6ccf96001b3a478a1ee83d3a083a97b9bfe4', bookedByInfoData: this.bookedByInfoData, defaultDaterange: this.defaultDaterange, dateRangeData: this.dateRangeData, minDate: this.setMinDate(),
            // minDate={this.isEventType('ADD_ROOM') || this.isEventType('SPLIT_BOOKING') ? this.bookedByInfoData.from_date || this.bookingData.FROM_DATE : undefined}
            adultChildCount: this.adultChildCount, splitBookingId: this.showSplitBookingOption, bookingData: this.bookingData, sourceOptions: this.sourceOptions, message: this.message, bookingDataDefaultDateRange: this.bookingData.defaultDateRange, showSplitBookingOption: this.showSplitBookingOption, adultChildConstraints: this.adultChildConstraints, splitBookings: this.getSplitBookings(), propertyId: this.propertyId }), h("div", { key: '75b76ec416d05336f7ad94f68f1e04ce4bf08687', class: " text-left" }, isRequestPending('/Check_Availability') && this.isEventType('EDIT_BOOKING') ? (h("div", { class: "loading-container" }, h("div", { class: "loader" }))) : (h(Fragment, null, (_a = booking_store.roomTypes) === null || _a === void 0 ? void 0 : _a.map(roomType => (h("igl-room-type", { initialRoomIds: this.initialRoomIds, isBookDisabled: Object.keys(this.bookedByInfoData).length <= 1, key: `room-type-${roomType.id}`, currency: this.currency, ratePricingMode: this.ratePricingMode, dateDifference: this.dateRangeData.dateDifference, bookingType: this.bookingData.event_type, roomType: roomType, class: "mt-2 mb-1 p-0", "data-testid": `room_type_${roomType.id}`, id: roomType.id.toString(), roomInfoId: this.selectedRooms.has(`c_${roomType.id}`) ? roomType.id : null, onDataUpdateEvent: evt => this.roomsDataUpdate.emit(evt.detail) })))))), h("igl-book-property-footer", { key: 'b12d6b4eb25a8e0c5fe950e7d727e98277207873', class: 'p-0 mb-1 mt-3', eventType: this.bookingData.event_type })));
    }
};
IglBookingOverviewPage.style = IglBookingOverviewPageStyle0;

const iglPropertyBookedByCss = ".sc-igl-property-booked-by-h{display:block}.row.sc-igl-property-booked-by{padding:0 0 0 15px;margin:0}.bookedByEmailContainer.sc-igl-property-booked-by{flex:auto;max-width:350px}.bookedDetailsForm.sc-igl-property-booked-by label.sc-igl-property-booked-by{min-width:125px;max-width:125px}.row.sc-igl-booking-form.sc-igl-property-booked-by{padding:0 !important}.bookedDetailsForm.sc-igl-property-booked-by .form-group.sc-igl-property-booked-by{margin-bottom:10px !important}.bookedDetailsForm.sc-igl-property-booked-by .checkBoxContainer.sc-igl-property-booked-by input.sc-igl-property-booked-by{height:1.2rem !important;width:30px}.controlContainer.sc-igl-property-booked-by textarea.sc-igl-property-booked-by{height:60px !important}.margin3.sc-igl-property-booked-by{margin-bottom:5px !important}@media (min-width: 768px){.bookedByEmailContainer.sc-igl-property-booked-by{margin-left:37px}}";
const IglPropertyBookedByStyle0 = iglPropertyBookedByCss;

const IglPropertyBookedBy = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dataUpdateEvent = createEvent(this, "dataUpdateEvent", 7);
        this.showPaymentDetails = false;
        this.countries = [];
        this.isButtonPressed = false;
        this.bookingService = new BookingService();
        this.arrivalTimeList = [];
        this.expiryMonths = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        this.expiryYears = [];
        this.currentMonth = '01';
        this.bookedByData = {
            id: undefined,
            email: '',
            firstName: '',
            lastName: '',
            countryId: '',
            isdCode: '',
            contactNumber: '',
            selectedArrivalTime: '',
            emailGuest: false,
            message: '',
            cardNumber: '',
            cardHolderName: '',
            expiryMonth: '',
            expiryYear: '',
        };
    }
    async componentWillLoad() {
        this.assignCountryCode();
        this.initializeExpiryYears();
        this.initializeDateData();
        this.populateBookedByData();
    }
    initializeExpiryYears() {
        const currentYear = new Date().getFullYear();
        this.expiryYears = Array.from({ length: 4 }, (_, index) => (currentYear + index).toString());
    }
    async assignCountryCode() {
        const country = await this.bookingService.getUserDefaultCountry();
        const countryId = country['COUNTRY_ID'];
        this.country = countryId;
        this.bookedByData = Object.assign(Object.assign({}, this.bookedByData), { isdCode: countryId.toString(), countryId });
    }
    initializeDateData() {
        const dt = new Date();
        const month = dt.getMonth() + 1;
        this.currentMonth = month < 10 ? `0${month}` : month.toString();
    }
    populateBookedByData() {
        var _a;
        this.bookedByData = this.defaultData ? Object.assign(Object.assign({}, this.bookedByData), this.defaultData) : {};
        this.arrivalTimeList = ((_a = this.defaultData) === null || _a === void 0 ? void 0 : _a.arrivalTime) || [];
        this.bookedByData = Object.assign(Object.assign({}, this.bookedByData), { selectedArrivalTime: this.arrivalTimeList[0].CODE_NAME });
        if (!this.bookedByData.expiryMonth) {
            this.bookedByData.expiryMonth = this.currentMonth;
        }
        if (!this.bookedByData.expiryYear) {
            this.bookedByData.expiryYear = new Date().getFullYear();
        }
        console.log('initial bookedby data', this.bookedByData);
    }
    handleDataChange(key, event) {
        this.bookedByData[key] = key === 'emailGuest' ? event.target.checked : event.target.value;
        this.dataUpdateEvent.emit({
            key: 'bookedByInfoUpdated',
            data: Object.assign({}, this.bookedByData),
        });
        if (key === 'countryId') {
            this.bookedByData = Object.assign(Object.assign({}, this.bookedByData), { isdCode: event.target.value });
        }
        // console.log(this.bookedByData);
    }
    handleCountryChange(value) {
        this.bookedByData = Object.assign(Object.assign({}, this.bookedByData), { isdCode: value, countryId: value });
        this.dataUpdateEvent.emit({
            key: 'bookedByInfoUpdated',
            data: Object.assign({}, this.bookedByData),
        });
        // console.log(this.bookedByData);
    }
    handleNumberInput(key, event) {
        const inputElement = event.target;
        const inputValue = inputElement.value;
        // Regular expression to match only numeric characters (0-9)
        const numericRegex = /^[0-9]+$/;
        if (!numericRegex.test(inputValue)) {
            // If the input is not numeric, prevent it from being entered
            inputElement.value = inputValue.replace(/[^0-9]/g, '');
        }
        if (inputValue === inputElement.value) {
            this.handleDataChange(key, event);
        }
    }
    // async handleEmailInput(key, event: InputEvent) {
    //   const inputElement = event.target as HTMLInputElement;
    //   const inputValue = inputElement.value;
    //   if (z.string().email().safeParse(inputValue).success) {
    //     this.handleDataChange(key, event);
    //   }
    // }
    async checkUser() {
        var _a;
        try {
            const email = this.bookedByData.email;
            if (z.string().email().safeParse(email).success) {
                const res = await this.bookingService.getUserInfo(email);
                if (res !== null) {
                    this.bookedByData = Object.assign(Object.assign({}, this.bookedByData), { id: res.id, firstName: res.first_name, lastName: res.last_name, contactNumber: res.mobile_without_prefix, countryId: res.country_id, isdCode: (_a = res === null || res === void 0 ? void 0 : res.country_phone_prefix) !== null && _a !== void 0 ? _a : res.isdCode.toString() });
                    console.log(this.bookedByData);
                }
                else {
                    let prevBookedByData = Object.assign({}, this.bookedByData);
                    prevBookedByData = Object.assign(Object.assign({}, prevBookedByData), { email });
                    this.bookedByData = Object.assign({}, prevBookedByData);
                }
            }
            else {
                let prevBookedByData = Object.assign({}, this.bookedByData);
                prevBookedByData = Object.assign(Object.assign({}, prevBookedByData), { email: '' });
                this.bookedByData = Object.assign({}, prevBookedByData);
            }
            this.dataUpdateEvent.emit({
                key: 'bookedByInfoUpdated',
                data: Object.assign({}, this.bookedByData),
            });
        }
        catch (error) {
            //   toastr.error(error);
        }
    }
    updateGuest(props) {
        var _a;
        modifyBookingStore('checkout_guest', Object.assign(Object.assign({}, ((_a = booking_store.checkout_guest) !== null && _a !== void 0 ? _a : {})), props));
    }
    handleComboboxChange(e) {
        var _a;
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { key, data } = e.detail;
        console.log(key, data);
        if (key === 'blur') {
            if (z.string().email().safeParse(data).success) {
                this.bookedByData.email = data;
                this.checkUser();
            }
            else if (this.bookedByData.email !== '' && data == '') {
                this.bookedByData.email = '';
            }
            this.dataUpdateEvent.emit({
                key: 'bookedByInfoUpdated',
                data: this.bookedByData,
            });
        }
        if (key === 'select') {
            this.bookedByData.email = data.email;
            this.bookedByData = Object.assign(Object.assign({}, this.bookedByData), { id: data.id, firstName: data.first_name, lastName: data.last_name, contactNumber: data.mobile_without_prefix, countryId: data.country_id, isdCode: (_a = data['country_phone_prefix']) !== null && _a !== void 0 ? _a : data === null || data === void 0 ? void 0 : data.country_id });
            this.dataUpdateEvent.emit({
                key: 'bookedByInfoUpdated',
                data: this.bookedByData,
            });
        }
        // console.log('data', data, 'key', key);
        // switch (key) {
        //   case 'blur':
        //     if (data !== '') {
        //       this.bookedByData.email = data;
        //       this.checkUser();
        //     } else {
        //       let prevBookedByData = { ...this.bookedByData };
        //       prevBookedByData = { ...prevBookedByData, email: '' };
        //       this.bookedByData = { ...prevBookedByData };
        //       this.dataUpdateEvent.emit({
        //         key: 'bookedByInfoUpdated',
        //         data: { ...this.bookedByData },
        //       });
        //     }
        //     break;
        //   case 'select':
        //     this.bookedByData.email = data.email;
        //     this.bookedByData = {
        //       ...this.bookedByData,
        //       id: data.id,
        //       firstName: data.first_name,
        //       lastName: data.last_name,
        //       contactNumber: data.mobile,
        //       countryId: data.country_id,
        //       isdCode: data.country_id.toString(),
        //     };
        //     this.dataUpdateEvent.emit({
        //       key: 'bookedByInfoUpdated',
        //       data: this.bookedByData,
        //     });
        //     break;
        //   default:
        //     break;
        // }
    }
    clearEvent() {
        this.bookedByData = Object.assign(Object.assign({}, this.bookedByData), { id: '', firstName: '', lastName: '', contactNumber: '', isdCode: this.country.toString(), countryId: this.country });
        this.dataUpdateEvent.emit({
            key: 'bookedByInfoUpdated',
            data: Object.assign({}, this.bookedByData),
        });
    }
    handleButtonClicked(event) {
        switch (event.detail.key) {
            case 'book':
            case 'bookAndCheckIn':
                this.isButtonPressed = true;
                break;
        }
    }
    render() {
        return (h(Host, { key: 'dbcb2886c6205445c06421f5efd507c627ac395c' }, h("div", { key: 'be496477079a9f3e693409be7995db6d7cd9ccd0', class: "text-left mt-3" }, h("div", { key: '733c122de9464f20a51e0ccb7666349b090052f1', class: "form-group d-flex flex-column flex-md-row align-items-md-center text-left " }, h("label", { key: 'c0ed8d8d216e556a89444a3b16a99a3670ff67d4', class: "p-0 m-0 label-control mr-1 font-weight-bold" }, locales.entries.Lcz_BookedBy), h("div", { key: '4b4bd722d9d4a98a366fa41dffc76fba398ed118', class: "bookedByEmailContainer mt-1 mt-md-0 d-flex align-items-center" }, h("ir-autocomplete", { key: '6bec57d062768296a6399b360196284f47f79a46', testId: 'main_guest_email', onComboboxValue: this.handleComboboxChange.bind(this), propertyId: this.propertyId, type: "text", value: this.bookedByData.email, required: true, class: 'flex-fill', placeholder: locales.entries.Lcz_FindEmailAddress, onInputCleared: () => this.clearEvent(), danger_border: this.isButtonPressed && this.bookedByData.email !== '' && validateEmail(this.bookedByData.email) }), h("ir-tooltip", { key: '9ae4168bd792220b85c996d178a223843a4602f5', class: 'ml-1', message: "Leave empty if email is unavailable" })))), h("div", { key: 'a9e0a25ed45100262a1cbcc883d0d517861a2b15', class: "bookedDetailsForm text-left mt-2 font-small-3 " }, h("div", { key: 'c64f1b4f7c653153daf4f0a681d853ad0b86a2d7', class: "d-flex flex-column flex-md-row  justify-content-md-between " }, h("div", { key: 'ace0d4b53711dc674a4cde450ae7c25b48923b86', class: "p-0 flex-fill " }, h("div", { key: '74a7c16763d2cef0910b5f594112c1206671c074', class: "form-group d-flex flex-column flex-md-row align-items-md-center p-0 flex-fill " }, h("label", { key: 'e5f7aebebe228b51a81a4355c55084ed750d1005', class: "p-0 m-0 margin3" }, locales.entries.Lcz_FirstName), h("div", { key: '76e0b7cd183f7a33b8398900525c25548f0610b6', class: "p-0 m-0  controlContainer flex-fill  " }, h("input", { key: 'b17a14a95fff49bd1ad22bcf4ca8c3fffdf37a52', "data-testid": "main_guest_first_name", class: `form-control flex-fill ${this.isButtonPressed && this.bookedByData.firstName === '' && 'border-danger'}`, type: "text", placeholder: locales.entries.Lcz_FirstName, id: v4(), value: this.bookedByData.firstName, onInput: event => {
                this.updateGuest({ first_name: event.target.value });
                this.handleDataChange('firstName', event);
            }, required: true }))), h("div", { key: '437ff3e59d08ffd9c3b2db5da6db388046ec6392', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '1300eed5ef42f9ae73a1857399fcdb9e61438d7f', class: "p-0 m-0 margin3" }, locales.entries.Lcz_LastName), h("div", { key: '6825ae60afbcef09179895df8a4506517762fe4d', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: '185fc39e67771117de235d1106ecc637561e9974', "data-testid": "main_guest_last_name", class: `form-control ${this.isButtonPressed && this.bookedByData.lastName === '' && 'border-danger'}`, type: "text", placeholder: locales.entries.Lcz_LastName, id: v4(), value: this.bookedByData.lastName, onInput: event => this.handleDataChange('lastName', event) }))), h("div", { key: '6c88298b9592d4e6581432f3bc15b216776729f6', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '28cffea4ffb663e60577487cbc87a29afa0800ab', class: "p-0 m-0 margin3" }, locales.entries.Lcz_Country), h("ir-country-picker", { key: 'ee5197271d92523f841c540e30ca65093120f977', testId: "main_guest_country", class: "flex-grow-1 m-0", onCountryChange: e => this.handleCountryChange(e.detail.id), countries: this.countries, country: this.countries.find(c => c.id === this.bookedByData.countryId) })), h("div", { key: '944d8c4efd9bb035df3b5963f1dcb56247627d21', class: "form-group p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'ddf57b2ecaa34727f5b00bc487141bfe9b9390cd', class: "p-0 m-0 margin3" }, locales.entries.Lcz_MobilePhone), h("div", { key: '7b5589ef74bcfde9bb085e52c4a18e5650c2fe8f', class: "p-0 m-0 controlContainer flex-fill" }, h("ir-phone-input", { key: 'ff37329779dfcf42dfce59807d3623220ad418a5', testId: "main_guest_phone", language: this.language,
            // label={locales.entries.Lcz_MobilePhone}
            value: this.bookedByData.contactNumber, phone_prefix: this.bookedByData.isdCode, default_country: this.bookedByData.countryId, onTextChange: e => {
                this.handleDataChange('isdCode', { target: { value: e.detail.phone_prefix } });
                this.handleDataChange('contactNumber', { target: { value: e.detail.mobile } });
            } }))), h("div", { key: '4e5b41e8ccb9d7151e44aa927e4564b627273e79', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '12871cf6abe76fa8a22d2a361501a50ee7c0a3c3', class: "p-0 m-0 margin3" }, locales.entries.Lcz_YourArrivalTime), h("div", { key: '320be9468c2529bc0898781696f6d2d03bdef124', class: "p-0 m-0  controlContainer flex-fill" }, h("select", { key: '52d1548ae9e4945824c6cd67f60997dd3ad33c97', "data-testid": "arrival_time", class: `form-control input-sm pr-0 ${this.isButtonPressed && this.bookedByData.selectedArrivalTime.code === '' && 'border-danger'}`, id: v4(), onChange: event => this.handleDataChange('selectedArrivalTime', event) }, this.arrivalTimeList.map(time => (h("option", { value: time.CODE_NAME, selected: this.bookedByData.selectedArrivalTime.code === time.CODE_NAME }, time.CODE_VALUE_EN))))))), h("div", { key: 'd63da0acc1d08e4d134323dc81a95dcff0e1516c', class: "p-0 flex-fill  ml-md-3" }, h("div", { key: 'dfab9d501502b1fb5b6760eca5fac7c2e070129b', class: "  p-0 d-flex flex-column flex-md-row align-items-md-center " }, h("label", { key: 'c1d9474e1b6ca51f42346112842834b5c44f768f', class: "p-0 m-0 margin3" }, locales.entries.Lcz_AnyMessageForUs), h("div", { key: 'dcf004afd641350d0f38b64b9a9dcef0759f591d', class: "p-0 m-0  controlContainer flex-fill " }, h("textarea", { key: '1573809bd4d40bd309fbf62cbbd6c172f17e59a0', "data-testid": "note", id: v4(), rows: 4, class: "form-control ", name: "message", value: this.bookedByData.message, onInput: event => this.handleDataChange('message', event) }))), this.showPaymentDetails && (h(Fragment, { key: '55115690403ca32153c9089ff67f1fb01bcf364f' }, h("div", { key: '816db14460c9d0e3a971a9944a7c3ead1778a027', class: "form-group mt-md-1  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'd2e3ecea48a62e130cdc0bf28b952d2eaf470d85', class: "p-0 m-0 margin3" }, locales.entries.Lcz_CardNumber), h("div", { key: '7292d3acca38da8e54a18fe7bb9b80560a3090cb', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: 'aad5a7b9b8f33ba7ec2e4b8a6bebf8bd502f0d90', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4(), value: this.bookedByData.cardNumber, onInput: event => this.handleNumberInput('cardNumber', event) }))), h("div", { key: '91574942a6d4ad2e2b29f68ee852c05512214c15', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '90f839c725bcf3f5255698f37675a6f7e873d450', class: "p-0 m-0 margin3" }, locales.entries.Lcz_CardHolderName), h("div", { key: 'eaf4ea1468797eb56341655eaeee000951f3c672', class: "p-0 m-0  controlContainer flex-fill" }, h("input", { key: '26e4b07708d9e6a9f6fbeb26ad0a4aa76dc2c771', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4(), value: this.bookedByData.cardHolderName, onInput: event => this.handleDataChange('cardHolderName', event) }))), h("div", { key: 'dc7bd5262030ef8dd2ba3ee818f0bc8ad091f795', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '09e241c4e8cd005ffbcf5dcafa514eeccea5946f', class: "p-0 m-0 margin3" }, locales.entries.Lcz_ExpiryDate), h("div", { key: '4e7c1cb3fe57039abf5eb01dcb6d91822990af09', class: "p-0 m-0 row  controlContainer flex-fill" }, h("div", { key: '0be9deda49ad550e1d8e066b8e66e0971d77a08c', class: "p-0 m-0" }, h("select", { key: 'efd8ea8e1ef4578458c621984b0312721c5ed856', class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('expiryMonth', event) }, this.expiryMonths.map(month => (h("option", { value: month, selected: month === this.bookedByData.expiryMonth }, month))))), h("div", { key: '210f7b0e23119654747c55bc8b012841bb1ddd92', class: "p-0 m-0 ml-1" }, h("select", { key: '72dda6b9fd99d4b1483acfc14a2bf158a64f059c', class: "form-control input-sm pr-0", id: v4(), onChange: event => this.handleDataChange('expiryYear', event) }, this.expiryYears.map((year, index) => (h("option", { value: year, selected: index === this.bookedByData.expiryYear }, year))))))))), h("div", { key: 'e71a6e88aa0f05dcad1854d7b43439340a7b2861', class: "form-group mt-1 p-0 d-flex flex-row align-items-center" }, h("label", { key: 'a93837531cc88aa09cff62d7789121a815fd218c', class: "p-0 m-0", htmlFor: 'emailTheGuestId' }, locales.entries.Lcz_EmailTheGuest), h("div", { key: '503228d349ff709a5648193fdb8dea351e67f92b', class: "p-0 m-0  controlContainer flex-fill checkBoxContainer" }, h("input", { key: '7b91131274cf35ac29500b71c5efd968af563841', class: "form-control", type: "checkbox", checked: this.bookedByData.emailGuest, id: 'emailTheGuestId', onChange: event => this.handleDataChange('emailGuest', event) }))))))));
    }
};
IglPropertyBookedBy.style = IglPropertyBookedByStyle0;

const iglRatePlanCss = ".sc-igl-rate-plan-h{display:block;margin-bottom:0.5rem}.currency.sc-igl-rate-plan{display:block;position:absolute;margin:0;padding:0;height:auto;left:10px}.rate-input.sc-igl-rate-plan{font-size:14px;line-height:0;padding:0;height:0;border-left:0}.rate-input-container.sc-igl-rate-plan{display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;flex:1}.new-currency.sc-igl-rate-plan{color:#3b4781;border:1px solid #cacfe7;font-size:0.975rem;height:2rem;background:white;border-right:0;border-top-right-radius:0;border-bottom-right-radius:0;transition:border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}.input-group-prepend.sc-igl-rate-plan span[data-state='focus'].sc-igl-rate-plan{border-color:var(--blue)}.input-group-prepend.sc-igl-rate-plan span[data-disabled].sc-igl-rate-plan{background-color:#eceff1;border-color:rgba(118, 118, 118, 0.3)}.non-ref-span.sc-igl-rate-plan{font-size:12px;color:var(--green)}.rateplan-container.sc-igl-rate-plan{margin-top:0.5rem}@media only screen and (min-width: 1200px){.rateplan-name-container.sc-igl-rate-plan{width:40%;margin-top:0}.rateplan-container.sc-igl-rate-plan{width:40%}}@media only screen and (min-width: 991px){.max-w-300.sc-igl-rate-plan{max-width:200px}.rate-input-container.sc-igl-rate-plan{max-width:150px}}@media only screen and (min-width: 991px) and (max-width: 1300px){.rateplan-name-container.sc-igl-rate-plan{width:20%}}@media only screen and (max-width: 768px){.booking-btn.sc-igl-rate-plan{width:100%}}.total-nights-container.sc-igl-rate-plan{width:max-content}.nightBorder.sc-igl-rate-plan{border-left-width:0;border-top-right-radius:3px !important;border-bottom-right-radius:3px !important}";
const IglRatePlanStyle0 = iglRatePlanCss;

const IglRatePlan = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.buttonClicked = createEvent(this, "buttonClicked", 7);
        this.ratePricingMode = [];
        this.bookingType = 'PLUS_BOOKING';
        this.isBookDisabled = false;
    }
    // Determine if the form inputs should be disabled
    disableForm() {
        const { bookingType, shouldBeDisabled, ratePlan, visibleInventory } = this;
        if (bookingType === 'EDIT_BOOKING' && shouldBeDisabled) {
            return false;
        }
        return !ratePlan.is_available_to_book || (visibleInventory === null || visibleInventory === void 0 ? void 0 : visibleInventory.visibleInventory) === 0;
    }
    // Update the rate plan selection in the booking store
    updateRateplanSelection(props) {
        const { roomTypeId, ratePlan } = this;
        const currentSelections = booking_store.ratePlanSelections;
        booking_store.ratePlanSelections = Object.assign(Object.assign({}, currentSelections), { [roomTypeId]: Object.assign(Object.assign({}, currentSelections[roomTypeId]), { [ratePlan.id]: Object.assign(Object.assign({}, currentSelections[roomTypeId][ratePlan.id]), props) }) });
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
        var _a, _b, _c, _d, _e, _f, _g, _h;
        reserveRooms({
            roomTypeId: this.roomTypeId,
            ratePlanId: this.ratePlan.id,
            rooms: 1,
            guest: [
                {
                    last_name: (_a = booking_store === null || booking_store === void 0 ? void 0 : booking_store.guest) === null || _a === void 0 ? void 0 : _a.last_name,
                    first_name: (_b = booking_store === null || booking_store === void 0 ? void 0 : booking_store.guest) === null || _b === void 0 ? void 0 : _b.first_name,
                    unit: null,
                    bed_preference: ((_d = (_c = this.visibleInventory) === null || _c === void 0 ? void 0 : _c.roomtype) === null || _d === void 0 ? void 0 : _d.is_bed_configuration_enabled) ? (_e = booking_store === null || booking_store === void 0 ? void 0 : booking_store.guest) === null || _e === void 0 ? void 0 : _e.bed_preference : null,
                    infant_nbr: ((_g = (_f = this.visibleInventory) === null || _f === void 0 ? void 0 : _f.selected_variation) === null || _g === void 0 ? void 0 : _g.child_nbr) > 0 ? (_h = booking_store === null || booking_store === void 0 ? void 0 : booking_store.guest) === null || _h === void 0 ? void 0 : _h.infant_nbr : null,
                },
            ],
        });
        this.buttonClicked.emit({ key: 'next' });
    }
    // Render the rate amount
    renderRate() {
        const { visibleInventory } = this;
        if (!visibleInventory)
            return '';
        if (visibleInventory.is_amount_modified) {
            return visibleInventory.rp_amount.toString();
        }
        const { selected_variation, view_mode } = visibleInventory;
        const amount = view_mode === '001' ? selected_variation === null || selected_variation === void 0 ? void 0 : selected_variation.discounted_amount : selected_variation === null || selected_variation === void 0 ? void 0 : selected_variation.amount_per_night_gross;
        return (amount === null || amount === void 0 ? void 0 : amount.toString()) || '';
    }
    // Format variation for display
    formatVariation(variation) {
        var _a, _b, _c, _d;
        if (!variation)
            return '';
        const adults = `${variation.adult_nbr} ${variation.adult_nbr === 1 ? (_a = locales.entries['Lcz_Adult']) === null || _a === void 0 ? void 0 : _a.toLowerCase() : (_b = locales.entries['Lcz_Adults']) === null || _b === void 0 ? void 0 : _b.toLowerCase()}`;
        const children = variation.child_nbr > 0
            ? `${variation.child_nbr} ${variation.child_nbr > 1 ? (_c = locales.entries['Lcz_Children']) === null || _c === void 0 ? void 0 : _c.toLowerCase() : (_d = locales.entries['Lcz_Child']) === null || _d === void 0 ? void 0 : _d.toLowerCase()}`
            : '';
        return children ? `${adults} ${children}` : adults;
    }
    // Get tooltip messages for the rate plan
    getTooltipMessages() {
        var _a, _b, _c, _d, _e;
        const { ratePlan, visibleInventory } = this;
        const selectedVariation = visibleInventory === null || visibleInventory === void 0 ? void 0 : visibleInventory.selected_variation;
        if (!selectedVariation)
            return;
        const matchingVariation = (_a = ratePlan.variations) === null || _a === void 0 ? void 0 : _a.find(variation => this.formatVariation(variation) === this.formatVariation(selectedVariation));
        if (!matchingVariation)
            return;
        const cancellationPolicy = (_c = (_b = matchingVariation.applicable_policies) === null || _b === void 0 ? void 0 : _b.find(p => p.type === 'cancelation')) === null || _c === void 0 ? void 0 : _c.combined_statement;
        const guaranteePolicy = (_e = (_d = matchingVariation.applicable_policies) === null || _d === void 0 ? void 0 : _d.find(p => p.type === 'guarantee')) === null || _e === void 0 ? void 0 : _e.combined_statement;
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
    resetReserved() {
        const updatedSelections = Object.entries(booking_store.ratePlanSelections).reduce((acc, [roomTypeId, ratePlans]) => {
            acc[roomTypeId] = Object.entries(ratePlans).reduce((rpAcc, [ratePlanId, ratePlan]) => {
                rpAcc[ratePlanId] = Object.assign(Object.assign({}, ratePlan), { reserved: 0 });
                return rpAcc;
            }, {});
            return acc;
        }, {});
        booking_store.ratePlanSelections = updatedSelections;
    }
    render() {
        var _a, _b, _c;
        const { ratePlan, bookingType, currency, ratePricingMode, visibleInventory } = this;
        const isAvailableToBook = ratePlan.is_available_to_book;
        const disableForm = this.disableForm();
        const selectedVariation = visibleInventory === null || visibleInventory === void 0 ? void 0 : visibleInventory.selected_variation;
        const formattedVariations = (_a = ratePlan.variations) === null || _a === void 0 ? void 0 : _a.map(v => this.formatVariation(v));
        console.log(visibleInventory);
        // if (!this.visibleInventory) {
        //   return null;
        // }
        return (h(Host, { key: '61dd0a6d910da7a30931d266ea4c19fe98c1d9bb', "data-testid": `rp-${this.ratePlan.id}` }, h("div", { key: '99c23b7232ca61767761dab909ddcae48eae4937', class: `d-flex m-0 p-0 ${isAvailableToBook ? 'flex-column flex-lg-row align-items-lg-center justify-content-lg-between' : 'align-items-center justify-content-between'}` }, h("div", { key: '7267978a6277f04a9eefad6def16f1df873d0abd', "data-testid": 'rp_name', class: "rateplan-name-container d-flex align-items-center", style: { gap: '0.5rem' } }, bookingType === 'BAR_BOOKING' ? (h("p", { class: "m-0 p-0" }, h("span", null, ratePlan.name.split('/')[1], " ", ratePlan.is_non_refundable && h("span", { class: "non-ref-span" }, "Non Refundable")))) : (h("span", null, ratePlan.short_name, " ", ratePlan.is_non_refundable && h("span", { class: "non-ref-span" }, "Non Refundable"))), isAvailableToBook && h("ir-tooltip", { key: '0e55ecc30a5bab9fbde8e9255a4e955450f497d1', message: this.getTooltipMessages() })), isAvailableToBook ? (h("div", { class: "d-md-flex  justify-content-md-end align-items-md-center flex-fill rateplan-container" }, h("div", { class: "mt-1 mt-md-0 flex-fill max-w-300" }, h("fieldset", { class: "position-relative" }, h("select", { disabled: disableForm, "data-testid": "adult-child-offering", class: "form-control input-sm", id: v4(), onChange: evt => this.handleDataChange('adult_child_offering', evt) }, formattedVariations === null || formattedVariations === void 0 ? void 0 : formattedVariations.map(variation => (h("option", { value: variation, selected: this.formatVariation(selectedVariation) === variation }, variation)))))), h("div", { class: "m-0 p-0 mt-1 mt-md-0 d-flex justify-content-between align-items-md-center ml-md-1" }, h("div", { class: "d-flex m-0 p-0 rate-total-night-view mt-0 flex-grow-1" }, h("ir-price-input", { testId: 'amount_input', disabled: disableForm, onTextChange: e => this.updateRateplanSelection({
                is_amount_modified: true,
                rp_amount: Number(e.detail),
            }), "aria-label": `${(_c = (_b = this.visibleInventory) === null || _b === void 0 ? void 0 : _b.roomtype) === null || _c === void 0 ? void 0 : _c.name} ${this.ratePlan.short_name}'s rate`, "aria-describedby": `${this.ratePlan.short_name}'s rate`, class: "ir-br-input-none w-100 flex-grow-1", currency: currency.symbol, value: this.renderRate(), placeholder: locales.entries.Lcz_Rate || 'Rate' }), h("fieldset", { class: "position-relative m-0 total-nights-container p-0" }, h("select", { "data-testid": 'nigh_stay_select', disabled: disableForm, class: "form-control input-sm m-0 nightBorder rounded-0 py-0", id: v4(), onChange: evt => this.updateRateplanSelection({
                view_mode: evt.target.value,
            }) }, ratePricingMode.map(data => (h("option", { value: data.CODE_NAME, selected: (visibleInventory === null || visibleInventory === void 0 ? void 0 : visibleInventory.view_mode) === data.CODE_NAME }, data.CODE_VALUE_EN)))))), (bookingType === 'PLUS_BOOKING' || bookingType === 'ADD_ROOM') && (h("div", { class: "flex-fill mt-0 ml-1 m-0 mt-md-0 p-0" }, h("fieldset", { class: "position-relative" }, h("select", { "data-testid": 'inventory_select', disabled: visibleInventory.visibleInventory === 0, class: "form-control input-sm", id: v4(), onChange: evt => this.handleDataChange('totalRooms', evt) }, Array.from({ length: (visibleInventory.visibleInventory || 0) + 1 }, (_, i) => i).map(i => (h("option", { value: i, selected: visibleInventory.reserved === i }, i)))))))), bookingType === 'EDIT_BOOKING' && (h(Fragment, null, h("div", { class: "m-0 p-0 ml-md-1 mt-md-0 d-none d-md-block" }, h("fieldset", { class: "position-relative" }, h("input", { "data-testid": 'inventory_radio', disabled: disableForm, type: "radio", name: "ratePlanGroup", value: "1", onChange: () => {
                this.resetReserved();
                reserveRooms({
                    roomTypeId: this.roomTypeId,
                    ratePlanId: this.ratePlan.id,
                    rooms: 1,
                    guest: [
                        {
                            last_name: booking_store.guest.last_name,
                            first_name: booking_store.guest.first_name,
                            unit: null,
                            bed_preference: this.visibleInventory.roomtype.is_bed_configuration_enabled ? booking_store.guest.bed_preference : null,
                            infant_nbr: this.visibleInventory.selected_variation.child_nbr > 0 ? booking_store.guest.infant_nbr : null,
                        },
                    ],
                });
            }, checked: visibleInventory.reserved === 1 }))), h("button", { "data-testid": "book_property", disabled: disableForm, type: "button", class: "btn btn-primary booking-btn mt-lg-0 btn-sm ml-md-1 mt-1 d-md-none", onClick: () => {
                this.resetReserved();
                reserveRooms({
                    roomTypeId: this.roomTypeId,
                    ratePlanId: this.ratePlan.id,
                    rooms: 1,
                    guest: [
                        {
                            last_name: booking_store.guest.last_name,
                            first_name: booking_store.guest.first_name,
                            unit: null,
                            bed_preference: this.visibleInventory.roomtype.is_bed_configuration_enabled ? booking_store.guest.bed_preference : null,
                            infant_nbr: this.visibleInventory.selected_variation.child_nbr > 0 ? booking_store.guest.infant_nbr : null,
                        },
                    ],
                });
                this.bookProperty();
            } }, visibleInventory.reserved === 1 ? locales.entries.Lcz_Current : locales.entries.Lcz_Select))), (bookingType === 'BAR_BOOKING' || bookingType === 'SPLIT_BOOKING') && (h("button", { "data-testid": "book", disabled: disableForm || (bookingType === 'SPLIT_BOOKING' && this.isBookDisabled), type: "button", class: "btn btn-primary booking-btn mt-md-0 btn-sm ml-md-1 mt-1", onClick: () => this.bookProperty() }, locales.entries.Lcz_Book)))) : (h("p", { class: "text-danger m-0 p-0" }, locales.entries['Lcz_NotAvailable'] || 'Not available')))));
    }
};
IglRatePlan.style = IglRatePlanStyle0;

const iglRoomTypeCss = ".sc-igl-room-type-h{display:block}.margin-bottom-8.sc-igl-room-type{margin-bottom:8px !important}";
const IglRoomTypeStyle0 = iglRoomTypeCss;

const IglRoomType = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dataUpdateEvent = createEvent(this, "dataUpdateEvent", 7);
        this.bookingType = 'PLUS_BOOKING';
        this.ratePricingMode = [];
        this.roomInfoId = null;
        this.selectedRooms = [];
        this.roomsDistributions = [];
        this.validBookingTypes = ['PLUS_BOOKING', 'ADD_ROOM', 'EDIT_BOOKING', 'SPLIT_BOOKING'];
    }
    render() {
        var _a, _b;
        const isValidBookingType = this.validBookingTypes.includes(this.bookingType);
        return (h(Host, { key: 'f2da8bb4da6cd05dfcc373cb104fd0d9a398c826' }, isValidBookingType && ((_a = this.roomType.rateplans) === null || _a === void 0 ? void 0 : _a.length) > 0 && h("div", { key: '5d716137f94e291ed43f6e004e0998197c2e99d7', class: "font-weight-bold font-medium-1 margin-bottom-8 " }, this.roomType.name), (_b = this.roomType.rateplans) === null || _b === void 0 ? void 0 :
            _b.map(ratePlan => {
                if (!!ratePlan.variations) {
                    let shouldBeDisabled = this.roomInfoId && this.roomInfoId === this.roomType.id;
                    // let roomId = -1;
                    // if (shouldBeDisabled && this.initialRoomIds) {
                    //   roomId = this.initialRoomIds.roomId;
                    // }
                    const visibleInventory = getVisibleInventory(this.roomType.id, ratePlan.id);
                    console.log(visibleInventory);
                    return (h("igl-rate-plan", {
                        // is_bed_configuration_enabled={this.roomType.is_bed_configuration_enabled}
                        // index={index}
                        isBookDisabled: this.isBookDisabled, visibleInventory: visibleInventory, key: `rate-plan-${ratePlan.id}`, ratePricingMode: this.ratePricingMode, class: isValidBookingType ? '' : '', currency: this.currency,
                        // dateDifference={this.dateDifference}
                        ratePlan: ratePlan, roomTypeId: this.roomType.id,
                        // totalAvailableRooms={this.roomsDistributions[index]}
                        bookingType: this.bookingType, shouldBeDisabled: shouldBeDisabled
                    }));
                }
                return null;
            })));
    }
};
IglRoomType.style = IglRoomTypeStyle0;

export { IglApplicationInfo as igl_application_info, IglBlockDatesView as igl_block_dates_view, IglBookProperty as igl_book_property, IglBookPropertyFooter as igl_book_property_footer, IglBookPropertyHeader as igl_book_property_header, IglBookingForm as igl_booking_form, IglBookingOverviewPage as igl_booking_overview_page, IglPropertyBookedBy as igl_property_booked_by, IglRatePlan as igl_rate_plan, IglRoomType as igl_room_type };

//# sourceMappingURL=igl-application-info_10.entry.js.map