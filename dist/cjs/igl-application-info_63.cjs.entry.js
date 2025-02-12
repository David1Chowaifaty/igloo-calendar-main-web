'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d0d7c4d0.js');
const booking_service = require('./booking.service-34feb699.js');
const locales_store = require('./locales.store-4301bbe8.js');
const calendarData = require('./calendar-data-b301c729.js');
const utils = require('./utils-5b6ac171.js');
const v4 = require('./v4-9b297151.js');
const booking = require('./booking-c6895db4.js');
const moment = require('./moment-1780b03a.js');
const irInterceptor_store = require('./ir-interceptor.store-ddd4cdfb.js');
const axios = require('./axios-b86c5465.js');
const index$1 = require('./index-5e99a1fe.js');
const room_service = require('./room.service-2a36c5da.js');
const Token = require('./Token-a4c2b5d8.js');
const payment_service = require('./payment.service-79a4a94c.js');
const _commonjsHelpers = require('./_commonjsHelpers-68cdf74f.js');
const functions = require('./functions-1d46da3c.js');

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
        const adultLabel = adultNumber > 1 ? locales_store.locales.entries.Lcz_Adults.toLowerCase() : locales_store.locales.entries.Lcz_Adult.toLowerCase();
        const childLabel = child_nbr > 1 ? locales_store.locales.entries.Lcz_Children.toLowerCase() : locales_store.locales.entries.Lcz_Child.toLowerCase();
        const infantLabel = infantNumber > 1 ? (_b = ((_a = locales_store.locales.entries['Lcz_Infants']) !== null && _a !== void 0 ? _a : 'infants')) === null || _b === void 0 ? void 0 : _b.toLowerCase() : (_d = ((_c = locales_store.locales === null || locales_store.locales === void 0 ? void 0 : locales_store.locales.entries['Lcz_Infant']) !== null && _c !== void 0 ? _c : 'infant')) === null || _d === void 0 ? void 0 : _d.toLowerCase();
        const parts = [`${adultNumber} ${adultLabel}`, child_nbr ? `${child_nbr} ${childLabel}` : '', infantNumber ? `${infantNumber} ${infantLabel}` : ''];
        return parts.filter(Boolean).join('&nbsp&nbsp&nbsp&nbsp');
    }
}

const iglApplicationInfoCss = ".sc-igl-application-info-h{display:block}.rate_amount.sc-igl-application-info{display:none;padding:0;margin:0}.booking-header.sc-igl-application-info{display:flex;align-items:center;justify-content:space-between;margin-bottom:0.5rem;gap:0.5rem}.non-ref-span.sc-igl-application-info{font-size:12px;color:var(--green)}.booking-roomtype-title.sc-igl-application-info{font-size:1.25rem;margin-right:0.5rem;margin:0;padding:0}.booking-details-container.sc-igl-application-info{display:flex;align-items:center;justify-content:space-between;padding:0;margin:0}.booking-rateplan.sc-igl-application-info{display:flex;align-items:center;gap:0.5rem;margin:0;padding:0}.booking-rateplan-name.sc-igl-application-info{font-weight:bold;margin:0;padding:0}.booking-tooltip.sc-igl-application-info{margin-right:0.5rem;margin:0;padding:0}.booking-variation.sc-igl-application-info{margin:0;padding:0}.booking-price.sc-igl-application-info{margin:0;padding:0}.booking-footer.sc-igl-application-info{display:flex;align-items:center;justify-content:space-between;padding:0;margin-bottom:0.5rem}.booking-details-container.sc-igl-application-info{display:none}@media (min-width: 768px){.booking-header.sc-igl-application-info{justify-content:flex-start}.booking-footer.sc-igl-application-info,.booking-price.sc-igl-application-info{display:none}.booking-details-container.sc-igl-application-info,.rate_amount.sc-igl-application-info{display:inline-flex;gap:0.5rem}}@media only screen and (min-width: 908px){.aplicationInfoContainer.sc-igl-application-info{max-width:80%}.guest-info-container.sc-igl-application-info{max-width:300px}.preference-select-container.sc-igl-application-info{max-width:250px}}";
const IglApplicationInfoStyle0 = iglApplicationInfoCss;

const IglApplicationInfo = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.variationService = new VariationService();
        this.rateplanSelection = undefined;
        this.guestInfo = undefined;
        this.currency = undefined;
        this.bedPreferenceType = [];
        this.bookingType = 'PLUS_BOOKING';
        this.roomIndex = undefined;
        this.totalNights = 1;
        this.baseData = undefined;
        this.isButtonPressed = false;
    }
    componentWillLoad() {
        var _a, _b;
        if (calendarData.isSingleUnit(this.rateplanSelection.roomtype.id)) {
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
        booking_service.booking_store.ratePlanSelections = Object.assign(Object.assign({}, booking_service.booking_store.ratePlanSelections), { [roomTypeId]: Object.assign(Object.assign({}, booking_service.booking_store.ratePlanSelections[roomTypeId]), { [ratePlanId]: Object.assign(Object.assign({}, this.rateplanSelection), { guest: [...prevGuest] }) }) });
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
        if (!calendarData.calendar_data.is_frontdesk_enabled) {
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const filteredRoomList = this.filterRooms();
        const formattedVariation = this.variationService.formatVariationBasedOnInfants({
            baseVariation: this.rateplanSelection.selected_variation,
            infants: this.guestInfo.infant_nbr,
            variations: this.rateplanSelection.ratePlan.variations,
        });
        return (index.h(index.Host, { key: 'e20f00fa856652e40ce7646fbfe5ed622ed0ea1c', class: 'my-2' }, index.h("div", { key: 'c7478afc5c20e8b9c3281d2bef35825e294c5948', class: "booking-header" }, (this.bookingType === 'PLUS_BOOKING' || this.bookingType === 'ADD_ROOM' || this.bookingType === 'EDIT_BOOKING') && (index.h("span", { key: 'd8ee5fe042a910e5b062db10a2a5286215c88adf', class: "booking-roomtype-title" }, this.rateplanSelection.roomtype.name)), index.h("div", { key: '320d58e64c019c487ef1f6dd942c4bcd40f46d03', class: "booking-details-container" }, index.h("div", { key: '0ab9c735787d3e4577637447ddfc228f28788142', class: "booking-rateplan" }, index.h("p", { key: '348f0fb657122f8a22b2ec2387c531074aeec8f9', class: "booking-rateplan-name" }, this.rateplanSelection.ratePlan.short_name, " ", this.rateplanSelection.ratePlan.is_non_refundable && index.h("span", { key: 'd7171c22f8831e72ecc85abef9dd426dd7331db3', class: 'non-ref-span' }, "Non Refundable")), index.h("ir-tooltip", { key: '7058c546d2b85b949d61ee827dacc2f6620ec60f', class: "booking-tooltip", message: this.getTooltipMessages() })), index.h("p", { key: '5d85fd89cfe7c99ef5700b0ee2eff50042df50bb', class: "booking-variation", innerHTML: formattedVariation })), index.h("p", { key: 'b49e7c5884d730c596239a11ace99ec3a76c5146', class: "booking-price" }, utils.formatAmount((_a = this.currency) === null || _a === void 0 ? void 0 : _a.symbol, this.getAmount()), "/", locales_store.locales.entries.Lcz_Stay)), index.h("div", { key: 'd76c993bf2272ae4ab9df96da7a74a8974711ef4', class: "booking-footer" }, index.h("div", { key: '62c603b3e4d41dabccbad52ff53e2fe6532f2487', class: "booking-rateplan" }, index.h("p", { key: '61933ce1495bfe4ddded0f59dd7a81d4f4853bcb', class: "booking-rateplan-name" }, this.rateplanSelection.ratePlan.short_name), index.h("ir-tooltip", { key: '3e71bed258f555ca86253767574dbf2d88c05796', class: "booking-tooltip", message: this.getTooltipMessages() })), index.h("p", { key: '42881bb8773e05eb69668e32a88d6d90270b4bab', class: "booking-variation", innerHTML: formattedVariation })), index.h("div", { key: 'a58e58070d1b080047acfc1d83c21e1f87701a1b', class: "d-flex flex-column flex-md-row  p-0 align-items-md-center aplicationInfoContainer" }, index.h("div", { key: 'cbf700012ccc4169810d421f12c4b98da73939e6', class: "mr-1 flex-fill guest-info-container" }, index.h("input", { key: 'b5649301d755459b186843b629c98dee3b1db27f', id: v4.v4(), type: "email", class: `form-control ${this.isButtonPressed && ((_b = this.guestInfo) === null || _b === void 0 ? void 0 : _b.name) === '' && 'border-danger'}`, placeholder: locales_store.locales.entries.Lcz_GuestFirstnameAndLastname, name: "guestName", onInput: event => {
                const name = event.target.value;
                this.updateGuest({ name });
                if (booking_service.booking_store.event_type.type === 'EDIT_BOOKING') {
                    booking_service.modifyBookingStore('guest', Object.assign(Object.assign({}, booking_service.booking_store.guest), { name }));
                }
            }, required: true, value: (_c = this.guestInfo) === null || _c === void 0 ? void 0 : _c.name })), index.h("div", { key: '3369637003b60ac650f6fa6d4b1a49459d6d07ff', class: "mt-1 mt-md-0 d-flex align-items-center flex-fill" }, calendarData.calendar_data.is_frontdesk_enabled &&
            !calendarData.isSingleUnit(this.rateplanSelection.roomtype.id) &&
            (this.bookingType === 'PLUS_BOOKING' || this.bookingType === 'ADD_ROOM' || this.bookingType === 'EDIT_BOOKING') && (index.h("div", { key: 'de1a514f1cd2c6fa0b84c5a8a559f8db6a1b3229', class: "mr-1 p-0 flex-fill preference-select-container" }, index.h("select", { key: 'f9e1dd78e0b97691189c50f25d9fb12f5aa3d6de', class: "form-control input-sm pr-0", id: v4.v4(), onChange: event => this.updateGuest({ unit: event.target.value }) }, index.h("option", { key: 'b4761b3e4d627a86ced6d4387d48f4308db672e1', value: "", selected: ((_d = this.guestInfo) === null || _d === void 0 ? void 0 : _d.unit) === '' }, locales_store.locales.entries.Lcz_Assignunits), filteredRoomList === null || filteredRoomList === void 0 ? void 0 :
            filteredRoomList.map(room => {
                var _a;
                return (index.h("option", { value: room.id, selected: ((_a = this.guestInfo) === null || _a === void 0 ? void 0 : _a.unit) === room.id.toString() }, room.name));
            }))))), this.rateplanSelection.roomtype.is_bed_configuration_enabled && (index.h("div", { key: 'ff2a7d7eb32f35c197ad7483c95753b29c293191', class: "mr-1 flex-fill" }, index.h("select", { key: '761c4f95847e36a15c6c9b19935572d3579f5671', class: `form-control input-sm ${this.isButtonPressed && ((_e = this.guestInfo) === null || _e === void 0 ? void 0 : _e.bed_preference) === '' && 'border-danger'}`, id: v4.v4(), onChange: event => this.updateGuest({ bed_preference: event.target.value }) }, index.h("option", { key: '81f23243b6a2cd8a2f1d69ef9a2b893591dd1985', value: "", selected: ((_f = this.guestInfo) === null || _f === void 0 ? void 0 : _f.bed_preference) === '' }, locales_store.locales.entries.Lcz_BedConfiguration), this.bedPreferenceType.map(data => {
            var _a;
            return (index.h("option", { value: data.CODE_NAME, selected: ((_a = this.guestInfo) === null || _a === void 0 ? void 0 : _a.bed_preference) === data.CODE_NAME }, data.CODE_VALUE_EN));
        })))), index.h("p", { key: '8c37d292f36014bd2f943605db6c73e55ac26f9d', class: "rate_amount" }, utils.formatAmount((_g = this.currency) === null || _g === void 0 ? void 0 : _g.symbol, this.getAmount()), "/", locales_store.locales.entries.Lcz_Stay)), this.rateplanSelection.selected_variation.child_nbr > 0 && (index.h("div", { key: 'fcfb7cf28f31c5e73278ade710b54165ab28fd7e', style: { gap: '0.5rem', marginTop: '0.5rem' }, class: "d-flex  flex-row  p-0 align-items-center aplicationInfoContainer" }, index.h("p", { key: 'ed9427ae4bfc52a0543688ba040ef9072562e1b5', class: 'm-0 p-0 text-danger' }, "Any of the children below 3 years?"), index.h("div", { key: '4d4cace54a7c4b9e1cf2ad7f9b2d0154ea235d0b', class: "mr-1 flex-fill" }, index.h("select", { key: '29760cf2a651416b075c9f2482a903d5bdb5da32', class: `form-control input-sm ${this.isButtonPressed && ((_h = this.guestInfo) === null || _h === void 0 ? void 0 : _h.bed_preference) === '' && 'border-danger'}`, id: v4.v4(), style: { width: 'max-content' }, onChange: event => this.updateGuest({ infant_nbr: Number(event.target.value) }) }, index.h("option", { key: '501ee62438d9e0ab3932d53d72384a732fe79901', value: "", selected: Number((_j = this.guestInfo) === null || _j === void 0 ? void 0 : _j.infant_nbr) === 0 }, locales_store.locales.entries['No'] || 'No'), Array.from({ length: this.rateplanSelection.selected_variation.child_nbr }, (_, i) => i + 1).map(item => {
            var _a;
            return (index.h("option", { value: item, selected: ((_a = this.guestInfo) === null || _a === void 0 ? void 0 : _a.infant_nbr) === item }, item));
        })))))));
    }
};
IglApplicationInfo.style = IglApplicationInfoStyle0;

const iglBlockDatesViewCss = ".sc-igl-block-dates-view-h{display:block}.sc-igl-block-dates-view-h .controlContainer.sc-igl-block-dates-view{width:24px}.sc-igl-block-dates-view-h .checkBoxContainer.sc-igl-block-dates-view input.sc-igl-block-dates-view{height:1.2rem !important;width:30px}.releaseTime.sc-igl-block-dates-view{padding-left:5px}.out-of-service-label.sc-igl-block-dates-view{margin-left:5px !important}";
const IglBlockDatesViewStyle0 = iglBlockDatesViewCss;

const IglBlockDatesView = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.dataUpdateEvent = index.createEvent(this, "dataUpdateEvent", 7);
        this.blockDatesData = {
            RELEASE_AFTER_HOURS: 0,
            OPTIONAL_REASON: '',
            OUT_OF_SERVICE: false,
        }; // Change of property name might require updates in booking-event-hover
        this.releaseList = [];
        this.bookingService = new booking_service.BookingService();
        this.defaultData = undefined;
        this.fromDate = undefined;
        this.toDate = undefined;
        this.entryDate = undefined;
        this.entryHour = undefined;
        this.isEventHover = false;
        this.entryMinute = undefined;
        this.renderAgain = false;
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
        return (index.h(index.Host, { key: 'bd47c87076b88f1a27685749b6cb2fe2ebac8644' }, index.h("div", { key: 'e47719d7fb7e5cd339222bef1cf7a3cdc8c0d7c5', class: `m-0 p-0 mb-1` }, index.h("div", { key: 'b62663cb32850bdb7047d52b87483a35950cb4b1', class: "text-left p-0" }, index.h("ir-date-view", { key: '140433c5de6cf987703cf42f8530b0109323ef35', from_date: this.fromDate, dateOption: "DD MMM YYYY", showDateDifference: false, to_date: this.toDate }))), index.h("div", { key: 'a192149471505b441610acb8257174da9c4c08d0', class: ` mb-1 text-left ${this.isEventHover && 'p-0'}` }, index.h("div", { key: '825bcf39baac6486c0d3c7832e9e8713b08d3196', class: "mb-1 " }, index.h("label", { key: 'bd43ce09822ce7af6c1ac6a120d25db5c751d63f', class: "p-0 text-bold-700 font-medium-1 m-0 align-middle" }, locales_store.locales.entries.Lcz_Reason, ":"), index.h("div", { key: '764e3b1d4edd8145d448d30ed1c8b7a33116322d', class: "p-0 m-0 pr-1  controlContainer checkBoxContainer d-inline-block align-middle" }, index.h("input", { key: '21bac22756ea7920b17586fd44360b2ca4451d29', class: "form-control", type: "checkbox", checked: this.blockDatesData.OUT_OF_SERVICE, id: "userinput6", onChange: event => this.handleOutOfService(event) })), index.h("span", { key: '1fb8c1b0fd3a1348f9fed590d082c040a1e6faab', class: "align-middle out-of-service-label" }, locales_store.locales.entries.Lcz_OutOfservice)), !this.blockDatesData.OUT_OF_SERVICE ? (index.h("div", null, index.h("div", { class: "mb-1 d-flex  align-items-center" }, index.h("span", { class: "align-middle" }, locales_store.locales.entries.Lcz_Or, " "), index.h("div", { class: "d-inline-flex col pr-0 align-middle" }, index.h("input", { class: "form-control", type: "text", placeholder: locales_store.locales.entries.Lcz_OptionalReason, id: "optReason", value: this.blockDatesData.OPTIONAL_REASON, onInput: event => this.handleOptionalReason(event) }))), index.h("div", { class: "mb-1 w-100 pr-0 " }, index.h("span", { class: "text-bold-700 font-medium-1" }, locales_store.locales.entries.Lcz_AutomaticReleaseIn, ": "), index.h("div", { class: "d-inline-block" }, index.h("select", { class: "form-control input-sm", id: "zSmallSelect", onChange: evt => this.handleReleaseAfterChange(evt) }, this.releaseList.map(releaseItem => (index.h("option", { value: +releaseItem.CODE_NAME, selected: Number(this.blockDatesData.RELEASE_AFTER_HOURS) == Number(releaseItem.CODE_NAME) }, releaseItem.CODE_VALUE_EN))))), this.blockDatesData.RELEASE_AFTER_HOURS ? (index.h("div", { class: "d-inline-block releaseTime" }, index.h("em", null, locales_store.locales.entries.Lcz_On, " ", this.getReleaseHoursString()))) : null))) : null)));
    }
};
IglBlockDatesView.style = IglBlockDatesViewStyle0;

var __rest$1 = (undefined && undefined.__rest) || function (s, e) {
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
                date: moment.hooks(currentDate).format('YYYY-MM-DD'),
                amount: amount,
                cost: null,
            });
            currentDate.setDate(currentDate.getDate() + 1);
        }
        return days;
    }
    extractFirstNameAndLastName(name) {
        const names = name.split(' ');
        return { first_name: names[0] || null, last_name: names[1] || null };
    }
    getBookedRooms({ check_in, check_out, notes, identifier, override_unit, unit, }) {
        const rooms = [];
        const total_days = booking.calculateDaysBetweenDates(moment.hooks(check_in).format('YYYY-MM-DD'), moment.hooks(check_out).format('YYYY-MM-DD'));
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
        for (const roomTypeId in booking_service.booking_store.ratePlanSelections) {
            const roomtype = booking_service.booking_store.ratePlanSelections[roomTypeId];
            for (const rateplanId in roomtype) {
                const rateplan = roomtype[rateplanId];
                if (rateplan.reserved > 0) {
                    for (let i = 0; i < rateplan.reserved; i++) {
                        const { first_name, last_name } = this.extractFirstNameAndLastName(rateplan.guest[i].name);
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
                            from_date: moment.hooks(check_in).format('YYYY-MM-DD'),
                            to_date: moment.hooks(check_out).format('YYYY-MM-DD'),
                            notes,
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
        var _a;
        try {
            // Validate context structure
            if (!context || !context.dateRangeData) {
                throw new Error('Invalid context: Missing date range data.');
            }
            const fromDate = new Date(context.dateRangeData.fromDate);
            const toDate = new Date(context.dateRangeData.toDate);
            const generateNewRooms = (identifier = null) => {
                return this.getBookedRooms({
                    check_in: fromDate,
                    check_out: toDate,
                    identifier,
                    notes: '',
                    override_unit: context.isEventType('BAR_BOOKING') ? true : false,
                    unit: context.isEventType('BAR_BOOKING') ? context.bookingData.PR_ID : null,
                });
            };
            const modifyBookingDetails = (_a, rooms) => {
                var { pickup_info, extra_services, is_direct, is_in_loyalty_mode, promo_key, extras } = _a, rest = __rest$1(_a, ["pickup_info", "extra_services", "is_direct", "is_in_loyalty_mode", "promo_key", "extras"]);
                return {
                    assign_units: true,
                    check_in: false,
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
                    const newRooms = generateNewRooms(currentRoomType.identifier);
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
                    const newRooms = generateNewRooms();
                    const { bookedByInfoData } = context;
                    const isAgent = sourceOption.type === 'TRAVEL_AGENCY';
                    newBooking = {
                        assign_units: true,
                        check_in,
                        is_pms: true,
                        is_direct: true,
                        is_in_loyalty_mode: false,
                        promo_key: null,
                        extras: utils.extras,
                        agent: isAgent ? { id: sourceOption.tag } : null,
                        booking: {
                            from_date: moment.hooks(fromDate).format('YYYY-MM-DD'),
                            to_date: moment.hooks(toDate).format('YYYY-MM-DD'),
                            remark: bookedByInfoData.message || null,
                            booking_nbr: '',
                            property: {
                                id: context.propertyid,
                            },
                            booked_on: {
                                date: moment.hooks().format('YYYY-MM-DD'),
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
                                country_phone_prefix: (_a = bookedByInfoData === null || bookedByInfoData === void 0 ? void 0 : bookedByInfoData.isdCode) !== null && _a !== void 0 ? _a : null,
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
        index.registerInstance(this, hostRef);
        this.closeBookingWindow = index.createEvent(this, "closeBookingWindow", 7);
        this.blockedCreated = index.createEvent(this, "blockedCreated", 7);
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt", 7);
        this.animateIrButton = index.createEvent(this, "animateIrButton", 7);
        this.animateIrSelect = index.createEvent(this, "animateIrSelect", 7);
        this.toast = index.createEvent(this, "toast", 7);
        this.initialRoomIds = null;
        this.showSplitBookingOption = false;
        this.sourceOptions = [];
        this.guestData = [];
        this.bookedByInfoData = {};
        this.blockDatesData = {};
        this.ratePricingMode = [];
        this.selectedUnits = new Map();
        this.bedPreferenceType = [];
        this.bookingService = new booking_service.BookingService();
        this.bookPropertyService = new IglBookPropertyService();
        this.updatedBooking = false;
        this.MAX_HISTORY_LENGTH = 2;
        this.propertyid = undefined;
        this.allowedBookingSources = undefined;
        this.language = undefined;
        this.countryNodeList = undefined;
        this.showPaymentDetails = false;
        this.currency = undefined;
        this.bookingData = undefined;
        this.adultChildConstraints = undefined;
        this.adultChildCount = { adult: 0, child: 0 };
        this.renderAgain = false;
        this.dateRangeData = undefined;
        this.defaultData = undefined;
        this.isLoading = undefined;
        this.bookingHistory = [];
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
        booking_service.modifyBookingStore('event_type', { type: this.defaultData.event_type });
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
                if (booking_service.calculateTotalRooms() > 0) {
                    this.gotoPage('page_two');
                    break;
                }
                else if (((_b = this.defaultData) === null || _b === void 0 ? void 0 : _b.roomsInfo.length) === 0) {
                    this.animateIrButton.emit('check_availability');
                    break;
                }
                this.toast.emit({
                    type: 'error',
                    description: locales_store.locales.entries.Lcz_SelectRatePlan,
                    title: locales_store.locales.entries.Lcz_SelectRatePlan,
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
        var _a, _b, _c;
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
        const { currentRoomType } = this.defaultData;
        booking_service.modifyBookingStore('guest', {
            bed_preference: (_a = currentRoomType.bed_preference) === null || _a === void 0 ? void 0 : _a.toString(),
            infant_nbr: currentRoomType.occupancy.infant_nbr,
            name: currentRoomType.guest.last_name ? currentRoomType.guest.first_name + ' ' + currentRoomType.guest.last_name : currentRoomType.guest.first_name,
            unit: (_c = (_b = currentRoomType.unit) === null || _b === void 0 ? void 0 : _b.id) === null || _c === void 0 ? void 0 : _c.toString(),
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
        for (const roomtypeId in booking_service.booking_store.ratePlanSelections) {
            const roomtype = booking_service.booking_store.ratePlanSelections[roomtypeId];
            for (const rateplanId in roomtype) {
                const rateplan = roomtype[rateplanId];
                if (rateplan.reserved > 0) {
                    for (const guest of rateplan.guest) {
                        if (guest.name === '') {
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
        const from_date = moment.hooks(this.dateRangeData.fromDate).format('YYYY-MM-DD');
        const to_date = moment.hooks(this.dateRangeData.toDate).format('YYYY-MM-DD');
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
            const { currentRoomType } = this.defaultData;
            const roomtypeId = currentRoomType.roomtype.id;
            const rateplanId = currentRoomType.rateplan.id;
            booking_service.reserveRooms({
                roomTypeId: roomtypeId,
                ratePlanId: rateplanId,
                rooms: 1,
                guest: [
                    {
                        bed_preference: (_a = currentRoomType.bed_preference) === null || _a === void 0 ? void 0 : _a.toString(),
                        infant_nbr: currentRoomType.occupancy.infant_nbr,
                        name: currentRoomType.guest.last_name ? currentRoomType.guest.first_name + ' ' + currentRoomType.guest.last_name : currentRoomType.guest.first_name,
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
            const isAvailable = booking_service.booking_store.roomTypes.every(rt => rt.is_available_to_book);
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
        booking_service.resetBookingStore();
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
        return (index.h(index.Fragment, null, index.h("igl-block-dates-view", { fromDate: this.dateRangeData.fromDateStr, toDate: this.dateRangeData.toDateStr, entryDate: this.defaultData.ENTRY_DATE, onDataUpdateEvent: event => this.handleBlockDateUpdate(event) }), index.h("div", { class: "p-0 mb-1 mt-2 gap-30 d-flex align-items-center justify-content-between" }, index.h("ir-button", { text: locales_store.locales.entries.Lcz_Cancel, btn_color: "secondary", class: "flex-fill", onClick: () => this.closeWindow() }), index.h("ir-button", { text: locales_store.locales.entries.Lcz_Blockdates, isLoading: irInterceptor_store.isRequestPending('/Block_Exposed_Unit'), class: "flex-fill", onClick: () => this.handleBlockDate() }))));
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
                const releaseData = utils.getReleaseHoursString(+this.blockDatesData.RELEASE_AFTER_HOURS);
                return Object.assign({ from_date: utils.dateToFormattedString(this.defaultData.defaultDateRange.fromDate), to_date: utils.dateToFormattedString(this.defaultData.defaultDateRange.toDate), NOTES: this.blockDatesData.OPTIONAL_REASON || '', pr_id: this.defaultData.PR_ID.toString(), STAY_STATUS_CODE: this.blockDatesData.OUT_OF_SERVICE ? '004' : this.blockDatesData.RELEASE_AFTER_HOURS === 0 ? '002' : '003', DESCRIPTION: this.blockDatesData.RELEASE_AFTER_HOURS || '' }, releaseData);
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
            // console.log(serviceParams);
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
        return (index.h(index.Host, { key: 'd92b095dccf9b8357bf9aa5762a8c8027e64a3b9' }, index.h("div", { key: '62bd9d1f3ca7360a595ce07066cfe701d9937e5a', class: "background-overlay", onClick: () => this.closeWindow() }), index.h("div", { key: '85b490f250821118959ae788a6bc9ab25e2267e4', class: 'sideWindow pb-5 pb-md-0 ' + (this.getCurrentPage('page_block_date') ? 'block-date' : '') }, index.h("div", { key: '974e8f9c723703e233e95397eef0e448deee0645', class: "card position-sticky mb-0 shadow-none p-0 " }, index.h("div", { key: '6dcd53f303816b0ee8a8c675f300a0d0012beca1', class: "card-header-container mb-2" }, index.h("h3", { key: 'd24a6e73d94f46b143b67fc235d97ced1bd27076', class: " text-left font-medium-2 px-2 px-md-3" }, this.getCurrentPage('page_block_date') ? this.defaultData.BLOCK_DATES_TITLE : this.defaultData.TITLE), index.h("ir-icon", { key: '30ee42c3acbe9dd23c82ad0cca8ebacaacaaea37', class: 'px-2', onIconClickHandler: () => {
                this.closeWindow();
            } }, index.h("svg", { key: '6a02c231103e9da3dc69b47a37a7ae8c16768718', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, index.h("path", { key: '7b00ab8cca3f81b9301a305a1ba15b74514512d8', fill: "currentColor", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" }))))), index.h("div", { key: '878bcbc275736e35981a4599dc9e27ef2a582d7f', class: "px-2 px-md-3" }, this.getCurrentPage('page_one') && (index.h("igl-booking-overview-page", { key: 'b584227cfce6aa2ab6cc91be6bd3746a0335e638', initialRoomIds: this.initialRoomIds, defaultDaterange: this.defaultDateRange, class: 'p-0 mb-1', eventType: this.defaultData.event_type, selectedRooms: this.selectedUnits, currency: this.currency, showSplitBookingOption: this.showSplitBookingOption, ratePricingMode: this.ratePricingMode, dateRangeData: this.dateRangeData, bookingData: this.defaultData, adultChildCount: this.adultChildCount, bookedByInfoData: this.bookedByInfoData, adultChildConstraints: this.adultChildConstraints, sourceOptions: this.sourceOptions, propertyId: this.propertyid })), this.getCurrentPage('page_two') && (index.h("igl-booking-form", { key: '86a266eb6ac13bde0d08034ddab66d2dd247f780', currency: this.currency, propertyId: this.propertyid, showPaymentDetails: this.showPaymentDetails, selectedGuestData: this.guestData, countryNodeList: this.countryNodeList, isLoading: this.isLoading, selectedRooms: this.selectedUnits, bedPreferenceType: this.bedPreferenceType, dateRangeData: this.dateRangeData, bookingData: this.defaultData, showSplitBookingOption: this.showSplitBookingOption, language: this.language, bookedByInfoData: this.bookedByInfoData, defaultGuestData: this.defaultData, isEditOrAddRoomEvent: this.isEventType('EDIT_BOOKING') || this.isEventType('ADD_ROOM'), onDataUpdateEvent: event => this.handlePageTwoDataUpdateEvent(event) })), this.getCurrentPage('page_block_date') ? this.getPageBlockDatesView() : null))));
    }
};
IglBookProperty.style = IglBookPropertyStyle0;

const iglBookPropertyFooterCss = ".sc-igl-book-property-footer-h{display:block;margin:0;padding:0}.sc-igl-book-property-footer-h>*.sc-igl-book-property-footer{margin:auto;padding:auto}.gap-30.sc-igl-book-property-footer{gap:30px}";
const IglBookPropertyFooterStyle0 = iglBookPropertyFooterCss;

const IglBookPropertyFooter = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.buttonClicked = index.createEvent(this, "buttonClicked", 7);
        this.eventType = undefined;
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
        return (index.h("div", { class: this.shouldRenderTwoButtons() ? ` ${this.editNext(label)}` : 'flex-fill' }, index.h("ir-button", { btn_color: type === 'cancel' ? 'secondary' : 'primary', text: label, btn_disabled: disabled, onClickHandler: () => {
                this.buttonClicked.emit({ key: type });
            }, icon_name: icon_name, iconPosition: "right", style: { '--icon-size': '1rem' }, icon_style: { paddingBottom: '1.9px' } })));
    }
    shouldRenderTwoButtons() {
        return this.isEventType('PLUS_BOOKING') || this.isEventType('ADD_ROOM') || this.isEventType('EDIT_BOOKING');
    }
    render() {
        return (index.h(index.Host, { key: 'c30d3beffe3210b52eaff2f3265fef49c5c6b175' }, index.h("div", { key: 'de6d9f929a8c2dbe98bb644892fa96797095424a', class: "d-flex justify-content-between gap-30 align-items-center" }, this.isEventType('EDIT_BOOKING') ? (index.h(index.Fragment, null, this.renderButton('cancel', locales_store.locales.entries.Lcz_Cancel), this.shouldRenderTwoButtons() && this.renderButton('next', `${locales_store.locales.entries.Lcz_Next}`, irInterceptor_store.isRequestPending('/Get_Exposed_Booking_Availability'), 'angles_right'))) : (index.h(index.Fragment, null, this.renderButton('cancel', locales_store.locales.entries.Lcz_Cancel), this.shouldRenderTwoButtons() && this.renderButton('next', `${locales_store.locales.entries.Lcz_Next}`, false, 'angles_right'))))));
    }
};
IglBookPropertyFooter.style = IglBookPropertyFooterStyle0;

const iglBookPropertyHeaderCss = ".sc-igl-book-property-header-h{display:block}.sourceContainer.sc-igl-book-property-header{max-width:350px}.message-label.sc-igl-book-property-header{font-size:80%}";
const IglBookPropertyHeaderStyle0 = iglBookPropertyHeaderCss;

const IglBookPropertyHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.splitBookingDropDownChange = index.createEvent(this, "splitBookingDropDownChange", 7);
        this.sourceDropDownChange = index.createEvent(this, "sourceDropDownChange", 7);
        this.adultChild = index.createEvent(this, "adultChild", 7);
        this.checkClicked = index.createEvent(this, "checkClicked", 7);
        this.buttonClicked = index.createEvent(this, "buttonClicked", 7);
        this.toast = index.createEvent(this, "toast", 7);
        this.spiltBookingSelected = index.createEvent(this, "spiltBookingSelected", 7);
        this.animateIrButton = index.createEvent(this, "animateIrButton", 7);
        this.animateIrSelect = index.createEvent(this, "animateIrSelect", 7);
        this.sourceOption = {
            code: '',
            description: '',
            tag: '',
            id: '',
            type: '',
        };
        this.splitBookingId = '';
        this.bookingData = '';
        this.minDate = undefined;
        this.sourceOptions = [];
        this.message = undefined;
        this.bookingDataDefaultDateRange = undefined;
        this.showSplitBookingOption = false;
        this.adultChildConstraints = undefined;
        this.splitBookings = undefined;
        this.adultChildCount = undefined;
        this.dateRangeData = undefined;
        this.bookedByInfoData = undefined;
        this.defaultDaterange = undefined;
        this.propertyId = undefined;
    }
    getSplitBookingList() {
        return (index.h("fieldset", { class: "d-flex flex-column text-left mb-1  flex-lg-row align-items-lg-center" }, index.h("label", { class: "mr-lg-1" }, locales_store.locales.entries.Lcz_Tobooking, "# "), index.h("div", { class: "btn-group mt-1 mt-lg-0 sourceContainer" }, index.h("ir-autocomplete", { value: Object.keys(this.bookedByInfoData).length > 1 ? `${this.bookedByInfoData.bookingNumber} ${this.bookedByInfoData.firstName} ${this.bookedByInfoData.lastName}` : '', from_date: moment.hooks(this.bookingDataDefaultDateRange.fromDate).format('YYYY-MM-DD'), to_date: moment.hooks(this.bookingDataDefaultDateRange.toDate).format('YYYY-MM-DD'), propertyId: this.propertyId, placeholder: locales_store.locales.entries.Lcz_BookingNumber, onComboboxValue: e => {
                e.stopImmediatePropagation();
                this.spiltBookingSelected.emit(e.detail);
            }, isSplitBooking: true }))));
    }
    getSourceNode() {
        return (index.h("fieldset", { class: "d-flex text-left  align-items-center" }, index.h("label", { class: "mr-1" }, locales_store.locales.entries.Lcz_Source, " "), index.h("div", { class: "btn-group mt-0 flex-fill sourceContainer" }, index.h("select", { class: "form-control input-sm", id: "xSmallSelect", onChange: evt => this.sourceDropDownChange.emit(evt.target.value) }, this.sourceOptions.map(option => {
            if (option.type === 'LABEL') {
                return index.h("optgroup", { label: option.value });
            }
            return (index.h("option", { value: option.id, selected: this.sourceOption.code === option.id }, option.value));
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
        return (index.h("div", { class: 'mt-1 mt-lg-0 d-flex flex-column text-left' }, index.h("div", { class: "form-group  my-lg-0 text-left d-flex align-items-center justify-content-between justify-content-sm-start" }, index.h("fieldset", null, index.h("div", { class: "btn-group ml-0" }, index.h("ir-select", { class: 'm-0', onSelectChange: e => this.handleAdultChildChange('adult', e.detail), select_id: "adult_child_select", firstOption: locales_store.locales.entries.Lcz_AdultsCaption, LabelAvailable: false, data: Array.from(Array(this.adultChildConstraints.adult_max_nbr), (_, i) => i + 1).map(option => ({
                text: option.toString(),
                value: option.toString(),
            })) }))), this.adultChildConstraints.child_max_nbr > 0 && (index.h("fieldset", null, index.h("div", { class: "btn-group ml-1 p-0" }, index.h("ir-select", { onSelectChange: e => this.handleAdultChildChange('child', e.detail), select_id: "child_select", firstOption: this.renderChildCaption(), LabelAvailable: false, data: Array.from(Array(this.adultChildConstraints.child_max_nbr), (_, i) => i + 1).map(option => ({
                text: option.toString(),
                value: option.toString(),
            })) })))), index.h("ir-button", { btn_id: "check_availability", isLoading: irInterceptor_store.isRequestPending('/Check_Availability'), icon: "", size: "sm", class: "ml-2", text: locales_store.locales.entries.Lcz_Check, onClickHandler: () => this.handleButtonClicked() }))));
    }
    renderChildCaption() {
        const maxAge = this.adultChildConstraints.child_max_age;
        let years = locales_store.locales.entries.Lcz_Years;
        if (maxAge === 1) {
            years = locales_store.locales.entries.Lcz_Year;
        }
        return `${locales_store.locales.entries.Lcz_ChildCaption} 0 - ${this.adultChildConstraints.child_max_age} ${years}`;
    }
    handleButtonClicked() {
        if (this.isEventType('SPLIT_BOOKING') && Object.keys(this.bookedByInfoData).length <= 1) {
            this.toast.emit({
                type: 'error',
                title: locales_store.locales.entries.Lcz_ChooseBookingNumber,
                description: '',
                position: 'top-right',
            });
        }
        else if (this.isEventType('ADD_ROOM') || this.isEventType('SPLIT_BOOKING')) {
            const initialToDate = moment.hooks(new Date(this.bookedByInfoData.to_date || this.defaultDaterange.to_date));
            const initialFromDate = moment.hooks(new Date(this.bookedByInfoData.from_date || this.defaultDaterange.from_date));
            const selectedFromDate = moment.hooks(new Date(this.dateRangeData.fromDate));
            const selectedToDate = moment.hooks(new Date(this.dateRangeData.toDate));
            if (selectedToDate.isBefore(initialFromDate) || selectedFromDate.isAfter(initialToDate)) {
                this.toast.emit({
                    type: 'error',
                    title: `${locales_store.locales.entries.Lcz_CheckInDateShouldBeMAx.replace('%1', moment.hooks(new Date(this.bookedByInfoData.from_date || this.defaultDaterange.from_date)).format('ddd, DD MMM YYYY')).replace('%2', moment.hooks(new Date(this.bookedByInfoData.to_date || this.defaultDaterange.to_date)).format('ddd, DD MMM YYYY'))}  `,
                    description: '',
                    position: 'top-right',
                });
                return;
            }
            else if (this.adultChildCount.adult === 0) {
                this.toast.emit({ type: 'error', title: locales_store.locales.entries.Lcz_PlzSelectNumberOfGuests, description: '', position: 'top-right' });
                this.animateIrSelect.emit('adult_child_select');
            }
            else {
                this.buttonClicked.emit({ key: 'check' });
            }
        }
        else if (this.minDate && new Date(this.dateRangeData.fromDate).getTime() > new Date(this.bookedByInfoData.to_date || this.defaultDaterange.to_date).getTime()) {
            this.toast.emit({
                type: 'error',
                title: `${locales_store.locales.entries.Lcz_CheckInDateShouldBeMAx.replace('%1', moment.hooks(new Date(this.bookedByInfoData.from_date || this.defaultDaterange.from_date)).format('ddd, DD MMM YYYY')).replace('%2', moment.hooks(new Date(this.bookedByInfoData.to_date || this.defaultDaterange.to_date)).format('ddd, DD MMM YYYY'))}  `,
                description: '',
                position: 'top-right',
            });
        }
        else if (this.adultChildCount.adult === 0) {
            this.animateIrSelect.emit('adult_child_select');
            this.toast.emit({ type: 'error', title: locales_store.locales.entries.Lcz_PlzSelectNumberOfGuests, description: '', position: 'top-right' });
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
        return (index.h(index.Host, { key: '4c29a2eec60f42ff3ad8ea4801768c9d9337f5d9' }, this.isEventType('SPLIT_BOOKING') && this.getSplitBookingList(), showSourceNode && this.getSourceNode(), index.h("div", { key: 'bceb41f981e8616c21ad69eea833c5c04d6eb007', class: `d-flex flex-column flex-lg-row align-items-lg-center ${showSourceNode ? 'mt-1' : ''}` }, index.h("fieldset", { key: '22e510da347af156ed5e440dce1adfd4649320b3', class: "mt-lg-0 mr-1 " }, index.h("igl-date-range", { key: '5464a3acac49e2828bdd82ee7b84ce34507f99ed', variant: "booking", dateLabel: locales_store.locales.entries.Lcz_Dates, minDate: this.isEventType('PLUS_BOOKING') ? moment.hooks().add(-1, 'months').startOf('month').format('YYYY-MM-DD') : this.minDate, disabled: this.isEventType('BAR_BOOKING') || this.isEventType('SPLIT_BOOKING'), defaultData: this.bookingDataDefaultDateRange })), !this.isEventType('EDIT_BOOKING') && this.getAdultChildConstraints()), index.h("p", { key: 'f8469cb724794d1716b89b58817698e8ddd03f2d', class: "text-right mt-1 message-label" }, calendarData.calendar_data.tax_statement)));
    }
};
IglBookPropertyHeader.style = IglBookPropertyHeaderStyle0;

class EventsService {
    constructor() {
        this.bookingService = new booking_service.BookingService();
    }
    async reallocateEvent(pool, destination_pr_id, from_date, to_date) {
        try {
            console.log(pool, destination_pr_id, from_date, to_date);
            const { data } = await axios.axios.post(`/ReAllocate_Exposed_Room`, { pool, destination_pr_id, from_date, to_date, extras: utils.extras });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            console.log(data);
            return data;
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async deleteEvent(POOL) {
        try {
            const { data } = await axios.axios.post(`/UnBlock_Exposed_Unit`, {
                POOL,
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data.My_Result;
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async updateBlockedEvent(bookingEvent) {
        try {
            const releaseData = utils.getReleaseHoursString(+bookingEvent.RELEASE_AFTER_HOURS);
            await this.deleteEvent(bookingEvent.POOL);
            const result = await this.bookingService.blockUnit(Object.assign({ from_date: this.formatDate(bookingEvent.FROM_DATE), to_date: this.formatDate(bookingEvent.TO_DATE), pr_id: bookingEvent.PR_ID, STAY_STATUS_CODE: bookingEvent.OUT_OF_SERVICE ? '004' : bookingEvent.RELEASE_AFTER_HOURS === 0 ? '002' : '003', DESCRIPTION: bookingEvent.RELEASE_AFTER_HOURS || '', NOTES: bookingEvent.OPTIONAL_REASON || '' }, releaseData));
            return result;
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    formatDate(date) {
        return date.split('/').join('-');
    }
}

const iglBookingEventCss = ".sc-igl-booking-event-h{display:block;position:absolute}.bookingEventBase.sc-igl-booking-event{position:absolute;background-color:rgb(49, 190, 241);width:100%;height:100%;border-radius:4px;transform:skewX(-22deg)}.bookingEventBase.skewedLeft.sc-igl-booking-event::before{content:'';position:absolute;top:0px;bottom:0;left:-4px;width:50%;height:100%;background-color:var(--ir-event-bg);transform-origin:right;transform:skewX(22deg);border-radius:4px;border-top-left-radius:0;border-bottom-left-radius:0}.bookingEventBase.skewedRight.sc-igl-booking-event::before{content:'';position:absolute;top:0;bottom:0;right:-4px;width:50%;height:100%;background-color:var(--ir-event-bg);transform-origin:left;transform:skewX(22deg);border-radius:4px;border-top-right-radius:0;border-bottom-right-radius:0}.bookingEventBase.border.skewedLeft.sc-igl-booking-event::before{border:1px solid #424242;border-right:0;border-left:0;border-top-right-radius:0;border-bottom-right-radius:0;top:-1px;height:20px;left:-4px}.bookingEventBase.border.skewedRight.sc-igl-booking-event::before{border:1px solid #424242;border-left:0;border-right:0;border-top-left-radius:0;border-bottom-left-radius:0;top:-1px;height:20px;right:-4px}.bookingEvent.sc-igl-booking-event{cursor:pointer}.bookingEventBase.sc-igl-booking-event{cursor:pointer}.bookingEventHiddenBase.sc-igl-booking-event{position:absolute;top:0;left:-4px;width:calc(100% + 8)}.bookingEventDragHandle.sc-igl-booking-event{position:absolute;top:0;width:15px;height:100%;opacity:0.1;background-color:rgba(0, 0, 0, 0.15);transform:skewX(-22deg);border-radius:4px;cursor:pointer}.splitBooking.sc-igl-booking-event{border-right:2px solid #000000}.sc-igl-booking-event-h:hover .bookingEventDragHandle.sc-igl-booking-event{display:block;opacity:1}.newEvent.sc-igl-booking-event-h:hover .bookingEventDragHandle.sc-igl-booking-event{display:none;opacity:1}.leftSide.sc-igl-booking-event{left:0}.leftSide.skewedLeft.sc-igl-booking-event{transform:skewX(0)}.rightSide.skewedRight.sc-igl-booking-event{transform:skewX(0)}.rightSide.sc-igl-booking-event{right:0}.bookingEventTitle.sc-igl-booking-event{color:#fff;font-size:0.8em;position:relative;max-width:calc(100% - 10px);overflow:hidden;text-overflow:ellipsis;top:2px;left:5px;-webkit-user-select:none;user-select:none;-webkit-user-drag:none;cursor:pointer}.legend_circle.sc-igl-booking-event{border-radius:100%;width:10px;height:10px;margin:3px 3px 3px 2px;border:1px solid #fff}.noteIcon.sc-igl-booking-event{position:absolute;bottom:-8px;left:2px}.balanceIcon.sc-igl-booking-event{position:absolute;top:-8px;right:2px}";
const IglBookingEventStyle0 = iglBookingEventCss;

var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const IglBookingEvent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.hideBubbleInfo = index.createEvent(this, "hideBubbleInfo", 7);
        this.updateEventData = index.createEvent(this, "updateEventData", 7);
        this.dragOverEventData = index.createEvent(this, "dragOverEventData", 7);
        this.showRoomNightsDialog = index.createEvent(this, "showRoomNightsDialog", 7);
        this.showDialog = index.createEvent(this, "showDialog", 7);
        this.resetStreachedBooking = index.createEvent(this, "resetStreachedBooking", 7);
        this.toast = index.createEvent(this, "toast", 7);
        this.updateBookingEvent = index.createEvent(this, "updateBookingEvent", 7);
        this.dayWidth = 0;
        this.eventSpace = 8;
        this.vertSpace = 10;
        /* show bubble */
        this.showInfoPopup = false;
        this.bubbleInfoTopSide = false;
        this.isStreatch = false;
        /*Services */
        this.eventsService = new EventsService();
        this.bookingService = new booking_service.BookingService();
        /* Resize props */
        this.resizeSide = '';
        this.isDragging = false;
        this.animationFrameId = null;
        this.handleMouseMoveBind = this.handleMouseMove.bind(this);
        this.handleMouseUpBind = this.handleMouseUp.bind(this);
        this.handleClickOutsideBind = this.handleClickOutside.bind(this);
        this.currency = undefined;
        this.is_vacation_rental = false;
        this.language = undefined;
        this.bookingEvent = undefined;
        this.allBookingEvents = [];
        this.countryNodeList = undefined;
        this.renderElement = false;
        this.position = undefined;
        this.isShrinking = null;
    }
    componentWillLoad() {
        window.addEventListener('click', this.handleClickOutsideBind);
    }
    async fetchAndAssignBookingData() {
        try {
            console.log('clicked on book#', this.bookingEvent.BOOKING_NUMBER);
            const validStatuses = ['IN-HOUSE', 'CONFIRMED', 'PENDING-CONFIRMATION', 'CHECKED-OUT'];
            if (!validStatuses.includes(this.bookingEvent.STATUS)) {
                return;
            }
            const data = await this.bookingService.getExposedBooking(this.bookingEvent.BOOKING_NUMBER, 'en');
            const filteredRooms = data.rooms.filter(room => room['assigned_units_pool'] === this.bookingEvent.ID);
            if (filteredRooms.length === 0) {
                throw new Error(`booking#${this.bookingEvent.BOOKING_NUMBER} has an empty array`);
            }
            if (filteredRooms.some(room => room['assigned_units_pool'] === null)) {
                throw new Error(`booking#${this.bookingEvent.BOOKING_NUMBER} has an empty pool`);
            }
            data.rooms = filteredRooms;
            const transformedBooking = booking.transformNewBooking(data)[0];
            const otherBookingData = __rest(transformedBooking, ["ID", "TO_DATE", "FROM_DATE", "NO_OF_DAYS", "STATUS", "NAME", "IDENTIFIER", "PR_ID", "POOL", "BOOKING_NUMBER", "NOTES", "is_direct", "BALANCE"]);
            this.bookingEvent = Object.assign(Object.assign(Object.assign({}, otherBookingData), this.bookingEvent), { booking: data, PHONE: otherBookingData.PHONE, PHONE_PREFIX: otherBookingData.PHONE_PREFIX, PRIVATE_NOTE: otherBookingData.PRIVATE_NOTE });
            this.updateBookingEvent.emit(this.bookingEvent);
            this.showEventInfo(true);
        }
        catch (error) {
            console.error(error.message);
        }
    }
    componentDidLoad() {
        if (this.isNewEvent()) {
            if (!this.bookingEvent.hideBubble) {
                /* auto matically open the popup, calling the method shows bubble either top or bottom based on available space. */
                setTimeout(async () => {
                    if (['003', '002', '004'].includes(this.bookingEvent.STATUS_CODE)) {
                        this.showEventInfo(true);
                    }
                    else if (['IN-HOUSE', 'CONFIRMED', 'PENDING-CONFIRMATION', 'CHECKED-OUT'].includes(this.bookingEvent.STATUS)) {
                        await this.fetchAndAssignBookingData();
                    }
                    else {
                        this.showEventInfo(true);
                    }
                    this.renderAgain();
                }, 1);
            }
        }
    }
    disconnectedCallback() {
        window.removeEventListener('click', this.handleClickOutsideBind);
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
    }
    handleClickOutside(event) {
        const clickedElement = event.target;
        // Check if the clicked element is not within the target div
        if (!this.element.contains(clickedElement)) {
            // The click occurred outside the target div
            this.showEventInfo(false);
        }
    }
    hideBubbleInfoPopup(event) {
        if (event.detail.currentInfoBubbleId != this.getBookingId() || (event.detail.key === 'hidebubble' && event.detail.currentInfoBubbleId === this.getBookingId())) {
            this.showInfoPopup = false;
            this.renderAgain();
        }
    }
    async moveBookingToHandler(event) {
        try {
            if (event.detail.bookingId !== this.getBookingId()) {
                this.showEventInfo(false);
                return;
            }
            if (event.detail.moveToDay === 'revert' || event.detail.toRoomId === 'revert') {
                event.detail.moveToDay = this.bookingEvent.FROM_DATE;
                event.detail.toRoomId = event.detail.fromRoomId;
                if (this.isTouchStart && this.moveDiffereneX <= 5 && this.moveDiffereneY <= 5 && !this.isStreatch) {
                    if (utils.isBlockUnit(this.bookingEvent.STATUS_CODE)) {
                        this.showEventInfo(true);
                    }
                    else if (['IN-HOUSE', 'CONFIRMED', 'PENDING-CONFIRMATION', 'CHECKED-OUT'].includes(this.bookingEvent.STATUS)) {
                        await this.fetchAndAssignBookingData();
                    }
                }
                else {
                    this.animationFrameId = requestAnimationFrame(() => {
                        this.resetBookingToInitialPosition();
                    });
                    return;
                }
            }
            else {
                if (this.isTouchStart && this.moveDiffereneX <= 5 && this.moveDiffereneY <= 5 && !this.isStreatch) {
                    if (utils.isBlockUnit(this.bookingEvent.STATUS_CODE)) {
                        this.showEventInfo(true);
                    }
                    else if (['IN-HOUSE', 'CONFIRMED', 'PENDING-CONFIRMATION', 'CHECKED-OUT'].includes(this.bookingEvent.STATUS)) {
                        await this.fetchAndAssignBookingData();
                    }
                }
                else {
                    const { pool, to_date, from_date, toRoomId } = event.detail;
                    if (this.checkIfSlotOccupied(toRoomId, from_date, to_date)) {
                        this.animationFrameId = requestAnimationFrame(() => {
                            this.resetBookingToInitialPosition();
                        });
                        throw new Error('Overlapping Dates');
                    }
                    if (pool) {
                        if (utils.isBlockUnit(this.bookingEvent.STATUS_CODE)) {
                            // let fromDate = moment(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(moment(new Date(from_date)))
                            //   ? this.bookingEvent.defaultDates.from_date
                            //   : from_date;
                            // console.log('room', fromDate, this.bookingEvent.defaultDates.from_date, from_date);
                            await this.eventsService.reallocateEvent(pool, toRoomId, from_date, to_date).catch(() => {
                                this.resetBookingToInitialPosition();
                            });
                        }
                        else {
                            if (this.isShrinking || !this.isStreatch) {
                                // try {
                                //   if (this.bookingEvent.PR_ID.toString() === toRoomId.toString()) {
                                //     await this.eventsService.reallocateEvent(pool, toRoomId, from_date, to_date);
                                //     return;
                                //   }
                                // } catch (error) {
                                //   this.resetBookingToInitialPosition();
                                //   return;
                                // }
                                const { description, status } = this.getModalDescription(toRoomId, from_date, to_date);
                                let hideConfirmButton = false;
                                if (status === '400') {
                                    hideConfirmButton = true;
                                }
                                const oldFromDate = this.bookingEvent.defaultDates.from_date;
                                const oldToDate = this.bookingEvent.defaultDates.to_date;
                                const defaultDiffDays = moment.hooks(oldToDate, 'YYYY-MM-DD').diff(moment.hooks(oldFromDate, 'YYYY-MM-DD'), 'days');
                                let shrinkingDirection = null;
                                let fromDate = oldFromDate;
                                let toDate = oldToDate;
                                if (this.isShrinking) {
                                    if (moment.hooks(from_date, 'YYYY-MM-DD').isAfter(moment.hooks(oldFromDate, 'YYYY-MM-DD')) && moment.hooks(to_date, 'YYYY-MM-DD').isBefore(moment.hooks(oldToDate, 'YYYY-MM-DD'))) {
                                        fromDate = oldFromDate;
                                        toDate = to_date;
                                    }
                                    else {
                                        shrinkingDirection = moment.hooks(from_date, 'YYYY-MM-DD').isAfter(moment.hooks(oldFromDate, 'YYYY-MM-DD'))
                                            ? 'left'
                                            : moment.hooks(to_date, 'YYYY-MM-DD').isBefore(moment.hooks(oldToDate, 'YYYY-MM-DD'))
                                                ? 'right'
                                                : null;
                                        if (shrinkingDirection === 'left') {
                                            fromDate = from_date;
                                        }
                                        if (shrinkingDirection === 'right') {
                                            toDate = to_date;
                                        }
                                    }
                                }
                                else {
                                    if (moment.hooks(from_date, 'YYYY-MM-DD').isBefore(moment.hooks(oldFromDate, 'YYYY-MM-DD'))) {
                                        fromDate = from_date;
                                        toDate = moment.hooks(from_date, 'YYYY-MM-DD').add(defaultDiffDays, 'days').format('YYYY-MM-DD');
                                    }
                                    else if (moment.hooks(to_date, 'YYYY-MM-DD').isAfter(moment.hooks(oldToDate, 'YYYY-MM-DD'))) {
                                        toDate = to_date;
                                        fromDate = moment.hooks(to_date, 'YYYY-MM-DD').subtract(defaultDiffDays, 'days').format('YYYY-MM-DD');
                                    }
                                }
                                this.showDialog.emit(Object.assign(Object.assign({}, event.detail), { description, title: '', hideConfirmButton, from_date: fromDate, to_date: toDate }));
                            }
                            else {
                                // if (this.checkIfSlotOccupied(toRoomId, from_date, to_date)) {
                                //   this.animationFrameId = requestAnimationFrame(() => {
                                //     this.resetBookingToInitialPosition();
                                //   });
                                //   throw new Error('Overlapping Dates');
                                // } else {
                                this.showRoomNightsDialog.emit({
                                    bookingNumber: this.bookingEvent.BOOKING_NUMBER,
                                    identifier: this.bookingEvent.IDENTIFIER,
                                    to_date,
                                    pool,
                                    from_date,
                                    defaultDates: this.bookingEvent.defaultDates,
                                });
                                // }
                            }
                        }
                        this.isShrinking = null;
                    }
                }
            }
        }
        catch (error) {
            this.toast.emit({
                position: 'top-right',
                title: error.message,
                description: '',
                type: 'error',
            });
            console.log('something went wrong');
        }
    }
    getModalDescription(toRoomId, from_date, to_date) {
        const findRoomType = (roomId) => {
            let roomType = this.bookingEvent.roomsInfo.filter(room => room.physicalrooms.some(r => r.id === +roomId));
            if (roomType.length) {
                return roomType[0].id;
            }
            return null;
        };
        if (!this.bookingEvent.is_direct) {
            if (this.isShrinking) {
                return {
                    description: `${locales_store.locales.entries.Lcz_YouWillLoseFutureUpdates}.`,
                    status: '200',
                };
            }
            else {
                if (moment.hooks(from_date, 'YYYY-MM-DD').isSame(moment.hooks(this.bookingEvent.FROM_DATE, 'YYYY-MM-DD')) &&
                    moment.hooks(to_date, 'YYYY-MM-DD').isSame(moment.hooks(this.bookingEvent.TO_DATE, 'YYYY-MM-DD'))) {
                    const initialRT = findRoomType(this.bookingEvent.PR_ID);
                    const targetRT = findRoomType(toRoomId);
                    if (initialRT === targetRT) {
                        return { description: `${locales_store.locales.entries.Lcz_AreYouSureWantToMoveAnotherUnit}?`, status: '200' };
                    }
                    else {
                        return {
                            description: `${locales_store.locales.entries.Lcz_YouWillLoseFutureUpdates} ${this.bookingEvent.origin ? this.bookingEvent.origin.Label : ''}. ${locales_store.locales.entries.Lcz_SameRatesWillBeKept}`,
                            status: '200',
                        };
                    }
                }
                return { description: locales_store.locales.entries.Lcz_CannotChangeCHBookings, status: '400' };
            }
        }
        else {
            if (!this.isShrinking) {
                const initialRT = findRoomType(this.bookingEvent.PR_ID);
                const targetRT = findRoomType(toRoomId);
                if (initialRT === targetRT) {
                    console.log('same rt');
                    return { description: `${locales_store.locales.entries.Lcz_AreYouSureWantToMoveAnotherUnit}?`, status: '200' };
                }
                else {
                    return {
                        description: locales_store.locales.entries.Lcz_SameRatesWillBeKept,
                        status: '200',
                    };
                }
            }
            return { description: locales_store.locales.entries.Lcz_ConfrmModiication, status: '200' };
        }
    }
    resetBookingToInitialPosition() {
        if (this.isStreatch) {
            this.element.style.left = `${this.initialLeft}px`;
            this.element.style.width = `${this.initialWidth}px`;
            this.isStreatch = false;
            this.finalWidth = this.initialWidth;
            this.isShrinking = null;
        }
        else {
            this.element.style.top = `${this.dragInitPos.top}px`;
            this.element.style.left = `${this.dragInitPos.left}px`;
        }
    }
    handleRevertBooking(event) {
        if (this.bookingEvent.POOL === event.detail) {
            this.resetBookingToInitialPosition();
        }
    }
    checkIfSlotOccupied(toRoomId, from_date, to_date) {
        const fromTime = moment.hooks(from_date, 'YYYY-MM-DD');
        const toTime = moment.hooks(to_date, 'YYYY-MM-DD');
        const isOccupied = this.allBookingEvents.some(event => {
            if (event.POOL === this.bookingEvent.POOL) {
                return false;
            }
            const eventFromTime = moment.hooks(event.FROM_DATE, 'YYYY-MM-DD').add(1, 'days');
            const eventToTime = moment.hooks(event.TO_DATE, 'YYYY-MM-DD');
            return event.PR_ID === +toRoomId && toTime.isSameOrAfter(eventFromTime) && fromTime.isBefore(eventToTime);
        });
        return isOccupied;
    }
    renderAgain() {
        this.renderElement = !this.renderElement;
    }
    getUniqueId() {
        return new Date().getTime();
    }
    isSplitBooking() {
        return !!this.bookingEvent.SPLIT_BOOKING;
    }
    isNewEvent() {
        return this.getBookingId() === 'NEW_TEMP_EVENT';
    }
    isHighlightEventType() {
        return this.getEventType() === 'HIGH_LIGHT';
    }
    getBookingId() {
        return this.bookingEvent.ID;
    }
    getBookingStatus() {
        return this.bookingEvent.STATUS;
    }
    getBookedBy() {
        return this.bookingEvent.NAME;
    }
    getBookedRoomId() {
        return this.bookingEvent.PR_ID;
    }
    getEventStartingDate() {
        return new Date(this.bookingEvent.FROM_DATE);
    }
    getEventEndingDate() {
        return new Date(this.bookingEvent.TO_DATE);
    }
    getEventType() {
        return this.bookingEvent.event_type;
    }
    getEventLegend() {
        var _a, _b;
        // console.log(this.getBookingStatus());
        let status = (_a = this.bookingEvent) === null || _a === void 0 ? void 0 : _a.legendData.statusId[this.getBookingStatus()];
        let orderRide = this.isNewEvent() ? { color: '#f9f9c9' } : {};
        return Object.assign(Object.assign(Object.assign({}, (_b = this.bookingEvent) === null || _b === void 0 ? void 0 : _b.legendData[status.id]), status), orderRide);
    }
    getLegendOfStatus(aStatusId) {
        var _a;
        // console.log(aStatusId);
        let status = (_a = this.bookingEvent) === null || _a === void 0 ? void 0 : _a.legendData.statusId[aStatusId];
        return Object.assign(Object.assign({}, this.bookingEvent.legendData[status.id]), status);
    }
    getNoteNode() {
        if (this.bookingEvent.NOTES || this.bookingEvent.INTERNAL_NOTE || this.bookingEvent.PRIVATE_NOTE) {
            return this.getLegendOfStatus('NOTES');
        }
        return null;
    }
    getBalanceNode() {
        if (this.bookingEvent.BALANCE !== null && this.bookingEvent.BALANCE >= 1) {
            return this.getLegendOfStatus('OUTSTANDING-BALANCE');
        }
        return null;
    }
    setStayDays(aStayDays) {
        this.bookingEvent.NO_OF_DAYS = aStayDays;
        this.renderAgain();
        // this.updateData({id: this.getBookedRoomId(), data: { NO_OF_DAYS: aStayDays }});
    }
    getStayDays() {
        return this.bookingEvent.NO_OF_DAYS;
    }
    getPosition() {
        let startingDate = this.getEventStartingDate();
        let startingCellClass = '.room_' + this.getBookedRoomId() + '_' + startingDate.getDate() + '_' + (startingDate.getMonth() + 1) + '_' + startingDate.getFullYear();
        let bodyContainer = document.querySelector('.bodyContainer');
        let startingCell = document.querySelector(startingCellClass);
        let pos = { top: '0', left: '0', width: '0', height: '20px' };
        if (startingCell && bodyContainer && startingCell.getBoundingClientRect() && bodyContainer.getBoundingClientRect()) {
            let bodyContainerRect = bodyContainer.getBoundingClientRect();
            let boundingRect = startingCell.getBoundingClientRect();
            this.dayWidth = this.dayWidth || boundingRect.width;
            pos.top = boundingRect.top + boundingRect.height / 2 - this.vertSpace - bodyContainerRect.top + 'px';
            // pos.left = boundingRect.left + this.dayWidth / 2 + this.eventSpace / 2 - bodyContainerRect.left + 'px';
            // pos.width = this.getStayDays() * this.dayWidth - this.eventSpace + 'px';
            pos.left =
                boundingRect.left +
                    (!this.isNewEvent() && moment.hooks(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE)) ? 0 : this.dayWidth / 2) +
                    this.eventSpace / 2 -
                    bodyContainerRect.left +
                    'px';
            pos.width =
                (this.getStayDays() + (!this.isNewEvent() && moment.hooks(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE)) ? 0.5 : 0)) *
                    this.dayWidth -
                    this.eventSpace +
                    'px';
        }
        else {
            console.log(this.bookingEvent);
            console.log('Locating event cell failed ', startingCellClass);
        }
        //console.log(pos);
        return pos;
    }
    getNumber(aData) {
        return aData ? parseFloat(aData) : 0;
    }
    startDragging(event, side) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        if (this.isNewEvent() || this.isHighlightEventType()) {
            return null;
        }
        this.resizeSide = side;
        this.isDragging = true;
        this.showEventInfo(false);
        this.isStreatch = side !== 'move';
        if (side === 'move') {
            this.initialX = event.clientX || event.touches[0].clientX;
            this.initialY = event.clientY || event.touches[0].clientY;
            this.elementRect = this.element.getBoundingClientRect();
            const offsetX = 0;
            const offsetY = 0;
            this.dragInitPos = {
                id: this.getBookingId(),
                fromRoomId: this.getBookedRoomId(),
                top: this.getNumber(this.element.style.top) + offsetY,
                left: this.getNumber(this.element.style.left) + offsetX,
            };
            this.dragInitPos.x = this.dragInitPos.left;
            this.dragInitPos.y = this.dragInitPos.top;
            this.dragEndPos = Object.assign({}, this.dragInitPos);
            this.element.style.top = `${this.dragInitPos.top}px`;
            this.element.style.left = `${this.dragInitPos.left}px`;
            this.isTouchStart = true; // !!(event.touches && event.touches.length);
            this.dragOverEventData.emit({
                id: 'CALCULATE_DRAG_OVER_BOUNDS',
                data: this.dragInitPos,
            });
        }
        else {
            this.initialWidth = this.element.offsetWidth;
            this.initialLeft = this.element.offsetLeft;
            this.initialX = event.clientX || event.touches[0].clientX;
            this.dragOverEventData.emit({
                id: 'CALCULATE_DRAG_OVER_BOUNDS',
                data: {
                    id: this.getBookingId(),
                    fromRoomId: this.getBookedRoomId(),
                    top: this.getNumber(this.element.style.top),
                    left: this.initialLeft,
                    x: this.initialX,
                    y: event.clientY || event.touches[0].clientY,
                },
            });
        }
        document.addEventListener('mousemove', this.handleMouseMoveBind);
        document.addEventListener('touchmove', this.handleMouseMoveBind);
        document.addEventListener('pointermove', this.handleMouseMoveBind);
        document.addEventListener('mouseup', this.handleMouseUpBind);
        document.addEventListener('touchup', this.handleMouseUpBind);
        document.addEventListener('pointerup', this.handleMouseUpBind);
    }
    handleMouseMove(event) {
        if (this.isDragging) {
            this.currentX = event.clientX || event.touches[0].clientX;
            let distanceX = this.currentX - this.initialX;
            if (this.resizeSide === 'move') {
                this.currentY = event.clientY || event.touches[0].clientY;
                let distanceY = this.currentY - this.initialY;
                this.element.style.top = `${this.dragInitPos.top + distanceY}px`;
                this.element.style.left = `${this.dragInitPos.left + distanceX}px`;
                this.dragEndPos = {
                    id: this.getBookingId(),
                    fromRoomId: this.getBookedRoomId(),
                    top: this.dragInitPos.top + distanceY,
                    left: this.dragInitPos.left + distanceX,
                };
                this.dragEndPos.x = this.dragEndPos.left; // + 18;
                this.dragEndPos.y = this.dragEndPos.top; // + (this.elementRect.height/2);
                this.dragOverEventData.emit({ id: 'DRAG_OVER', data: this.dragEndPos });
            }
            else {
                if (!this.bookingEvent.is_direct && !utils.isBlockUnit(this.bookingEvent.STATUS_CODE)) {
                    return;
                }
                let newWidth = this.initialWidth;
                if (this.resizeSide == 'rightSide') {
                    newWidth = this.initialWidth + distanceX;
                    newWidth = Math.min(newWidth, this.initialX + this.element.offsetWidth);
                    newWidth = Math.max(this.dayWidth - this.eventSpace, newWidth);
                    this.element.style.width = `${newWidth}px`;
                    this.isShrinking = distanceX < 0;
                }
                else if (this.resizeSide == 'leftSide') {
                    this.isShrinking = distanceX > 0;
                    newWidth = Math.max(this.dayWidth - this.eventSpace, this.initialWidth - distanceX);
                    let newLeft = this.initialLeft + (this.initialWidth - newWidth);
                    this.element.style.left = `${newLeft}px`;
                    this.element.style.width = `${newWidth}px`;
                }
                this.finalWidth = newWidth;
            }
        }
        else {
            console.log('still mouse move listening...');
        }
    }
    handleMouseUp() {
        if (this.isDragging) {
            if (this.resizeSide === 'move') {
                // console.log("Initial X::"+this.dragInitPos.x);
                // console.log("Initial Y::"+this.dragInitPos.y);
                // console.log("End X::"+this.dragEndPos.x);
                // console.log("End Y::"+this.dragEndPos.y);
                if (this.isTouchStart) {
                    this.moveDiffereneX = Math.abs(this.dragEndPos.x - this.dragInitPos.x);
                    this.moveDiffereneY = Math.abs(this.dragEndPos.y - this.dragInitPos.y);
                }
                this.dragOverEventData.emit({
                    id: 'DRAG_OVER_END',
                    data: Object.assign(Object.assign({}, this.dragEndPos), { pool: this.bookingEvent.POOL, nbOfDays: this.bookingEvent.NO_OF_DAYS }),
                });
            }
            else {
                const finalWidth = this.finalWidth -
                    (!this.isNewEvent() && moment.hooks(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE)) ? this.dayWidth / 2 : 0);
                const numberOfDays = Math.round(finalWidth / this.dayWidth);
                console.log(finalWidth, this.dayWidth, numberOfDays);
                let initialStayDays = this.getStayDays();
                if (initialStayDays != numberOfDays && !isNaN(numberOfDays)) {
                    //this.setStayDays(numberOfDays);
                    if (this.resizeSide == 'leftSide') {
                        this.element.style.left = `${this.initialLeft + (initialStayDays - numberOfDays) * this.dayWidth}px`;
                        // set FROM_DATE = TO_DATE - numberOfDays
                    }
                    else {
                        if (numberOfDays < initialStayDays) {
                            this.isShrinking = true;
                        }
                        // set TO_DATE = FROM_DATE + numberOfDays
                    }
                    // const nbrOfDays =
                    // !this.isNewEvent() && moment(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE)) ? numberOfDays - 1 : numberOfDays;
                    this.dragOverEventData.emit({
                        id: 'STRETCH_OVER_END',
                        data: {
                            id: this.getBookingId(),
                            fromRoomId: +this.getBookedRoomId(),
                            x: +this.element.style.left.replace('px', ''),
                            y: +this.element.style.top.replace('px', ''),
                            pool: this.bookingEvent.POOL,
                            nbOfDays: numberOfDays,
                        },
                    });
                    const offset = !this.isNewEvent() && moment.hooks(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE)) ? +this.dayWidth / 2 : 0;
                    this.element.style.width = `${numberOfDays * this.dayWidth - this.eventSpace + offset}px`;
                }
                else {
                    this.element.style.left = `${this.initialLeft}px`;
                    this.element.style.width = `${numberOfDays * this.dayWidth - this.eventSpace}px`;
                }
            }
        }
        else {
            console.log('still mouse up listening...');
        }
        this.isDragging = false;
        document.removeEventListener('mousemove', this.handleMouseMoveBind);
        document.removeEventListener('touchmove', this.handleMouseMoveBind);
        document.removeEventListener('pointermove', this.handleMouseMoveBind);
        document.removeEventListener('mouseup', this.handleMouseUpBind);
        document.removeEventListener('touchup', this.handleMouseUpBind);
        document.removeEventListener('pointerup', this.handleMouseUpBind);
    }
    updateData(data) {
        this.updateEventData.emit(data);
    }
    calculateHoverPosition() {
        const barRect = this.element.getBoundingClientRect();
        const barWidth = barRect.width;
        const barLeft = barRect.left;
        const screenWidth = window.innerWidth;
        let hoverLeft;
        if (barWidth <= screenWidth) {
            hoverLeft = barWidth / 2;
        }
        else {
            hoverLeft = screenWidth / 2 - barLeft;
        }
        return {
            position: 'absolute',
            left: `${hoverLeft}px`,
            transform: 'translateX(-50%)',
        };
    }
    renderEventBookingNumber() {
        if (this.bookingEvent.STATUS === 'TEMP-EVENT' || this.bookingEvent.ID === 'NEW_TEMP_EVENT') {
            return '';
        }
        if (utils.isBlockUnit(this.bookingEvent.STATUS_CODE)) {
            return '';
        }
        if (!this.bookingEvent.is_direct) {
            return ` - ${this.bookingEvent.channel_booking_nbr}`;
        }
        return ` - ${this.bookingEvent.BOOKING_NUMBER}`;
    }
    showEventInfo(showInfo) {
        // if (this.isHighlightEventType() || this.bookingEvent.hideBubble) {
        //   return null;
        // }
        // if (showInfo) {
        //   // Calculate which side we need to show the bubble, top side or bottom.
        //   let bodyContainer = document.querySelector('.calendarScrollContainer');
        //   let bodyContainerRect: { [key: string]: any } = bodyContainer.getBoundingClientRect();
        //   let elementRect: { [key: string]: any } = this.element.getBoundingClientRect();
        //   let midPoint = bodyContainerRect.height / 2 + bodyContainerRect.top + 50;
        //   // let topDifference = elementRect.top - bodyContainerRect.top;
        //   // let bottomDifference = bodyContainerRect.bottom - elementRect.bottom;
        //   if (elementRect.top < midPoint) {
        //     this.bubbleInfoTopSide = false;
        //   } else {
        //     this.bubbleInfoTopSide = true;
        //   }
        // }
        // // showInfo = true;
        // if (showInfo) {
        //   this.hideBubbleInfo.emit({
        //     key: 'hidePopup',
        //     currentInfoBubbleId: this.getBookingId(),
        //   });
        // }
        // this.showInfoPopup = showInfo;
        // this.renderAgain();
        if (this.isHighlightEventType() || this.bookingEvent.hideBubble) {
            return null;
        }
        if (showInfo) {
            // Calculate which side we need to show the bubble, top side or bottom.
            let bodyContainer = document.querySelector('.calendarScrollContainer');
            let bodyContainerRect = bodyContainer.getBoundingClientRect();
            let elementRect = this.element.getBoundingClientRect();
            let midPoint = bodyContainerRect.height / 2 + bodyContainerRect.top + 50;
            if (elementRect.top < midPoint) {
                this.bubbleInfoTopSide = false;
            }
            else {
                this.bubbleInfoTopSide = true;
            }
        }
        if (showInfo) {
            this.hideBubbleInfo.emit({
                key: 'hidePopup',
                currentInfoBubbleId: this.getBookingId(),
            });
        }
        this.showInfoPopup = showInfo;
        this.renderAgain();
    }
    render() {
        // onMouseLeave={()=>this.showEventInfo(false)}
        let legend = this.getEventLegend();
        let noteNode = this.getNoteNode();
        let balanceNode = this.getBalanceNode();
        // console.log(this.bookingEvent.BOOKING_NUMBER === '46231881' ? this.bookingEvent : '');
        return (index.h(index.Host, { key: 'fddc1ed6f87a87f359bb8e6705a20a87cf9882c7', class: `bookingEvent  ${this.isNewEvent() || this.isHighlightEventType() ? 'newEvent' : ''} ${legend.clsName} `, style: this.getPosition(), id: 'event_' + this.getBookingId() }, index.h("div", { key: '3a2fe7e68e86bfcfeb3a48633b4c1a662ea34a6d', class: `bookingEventBase ${!this.isNewEvent() && moment.hooks(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE)) ? 'skewedLeft' : ''}
          ${!this.isNewEvent() && moment.hooks(new Date(this.bookingEvent.defaultDates.to_date)).isAfter(new Date(this.bookingEvent.TO_DATE)) ? 'skewedRight' : ''}
          ${!this.bookingEvent.is_direct &&
                !utils.isBlockUnit(this.bookingEvent.STATUS_CODE) &&
                this.bookingEvent.STATUS !== 'TEMP-EVENT' &&
                this.bookingEvent.ID !== 'NEW_TEMP_EVENT' &&
                'border border-dark'}  ${this.isSplitBooking() ? 'splitBooking' : ''}`, style: { 'backgroundColor': legend.color, '--ir-event-bg': legend.color }, onTouchStart: event => this.startDragging(event, 'move'), onMouseDown: event => this.startDragging(event, 'move') }), noteNode ? index.h("div", { class: "legend_circle noteIcon", style: { backgroundColor: noteNode.color } }) : null, balanceNode ? index.h("div", { class: "legend_circle balanceIcon", style: { backgroundColor: balanceNode.color } }) : null, index.h("div", { key: '6669c000370257671042bebf68339a6b19610d1c', class: "bookingEventTitle", onTouchStart: event => this.startDragging(event, 'move'), onMouseDown: event => this.startDragging(event, 'move') }, this.getBookedBy(), this.renderEventBookingNumber()), index.h(index.Fragment, { key: '51aeebc3b53ec518585833a25745426ff1328abd' }, index.h("div", { key: '5181fd2af5f41c3d163a280e4ec1165ec9a7ece0', class: `bookingEventDragHandle leftSide ${!this.isNewEvent() && moment.hooks(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE)) ? 'skewedLeft' : ''}
            ${!this.isNewEvent() && moment.hooks(new Date(this.bookingEvent.defaultDates.to_date)).isAfter(new Date(this.bookingEvent.TO_DATE)) ? 'skewedRight' : ''}`, onTouchStart: event => this.startDragging(event, 'leftSide'), onMouseDown: event => this.startDragging(event, 'leftSide') }), index.h("div", { key: '9817a3e67dcac8b647b4dbe36a3ebb5fec71e2b9', class: `bookingEventDragHandle rightSide ${!this.isNewEvent() && moment.hooks(new Date(this.bookingEvent.defaultDates.from_date)).isBefore(new Date(this.bookingEvent.FROM_DATE)) ? 'skewedLeft' : ''}
              ${!this.isNewEvent() && moment.hooks(new Date(this.bookingEvent.defaultDates.to_date)).isAfter(new Date(this.bookingEvent.TO_DATE)) ? 'skewedRight' : ''}`, onTouchStart: event => this.startDragging(event, 'rightSide'), onMouseDown: event => this.startDragging(event, 'rightSide') })), this.showInfoPopup ? (index.h("igl-booking-event-hover", { is_vacation_rental: this.is_vacation_rental, countryNodeList: this.countryNodeList, currency: this.currency, class: "top", bookingEvent: this.bookingEvent, bubbleInfoTop: this.bubbleInfoTopSide, style: this.calculateHoverPosition() })) : null));
    }
    get element() { return index.getElement(this); }
};
IglBookingEvent.style = IglBookingEventStyle0;

const iglBookingEventHoverCss = ".sc-igl-booking-event-hover-h{display:block;position:relative;z-index:100}.btn.sc-igl-booking-event-hover{padding-left:4px !important;padding-right:4px !important}.balance_amount.sc-igl-booking-event-hover{color:#ff4961;font-size:0.75rem}.user-notes.sc-igl-booking-event-hover{margin-left:4px;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:5;line-clamp:5;overflow:hidden;max-width:100%;height:auto}.events_btns.sc-igl-booking-event-hover{display:inline-flex;align-items:center;justify-content:center;gap:0.5rem}.mx-01.sc-igl-booking-event-hover{--m:5px;margin-left:var(--m) !important;margin-right:var(--m) !important}.pointerContainerTop.sc-igl-booking-event-hover{top:-26px}.pointerContainer.sc-igl-booking-event-hover{position:absolute;height:10px;width:350px;left:var(--el-left, 50%);transform:translateX(-50%)}.iglPopOver.sc-igl-booking-event-hover{position:absolute;background-color:#fff;padding:10px;border:1px solid #656ee7;border-radius:6px;left:var(--el-left, 50%);transform:translateX(-50%) translateY(10px);box-shadow:1px 0px 20px rgba(0, 0, 0, 0.2)}.iglPopOver.infoBubble.sc-igl-booking-event-hover{width:350px}.iglPopOver.blockedView.sc-igl-booking-event-hover{max-width:400px;width:400px}.iglPopOver.newBookingOptions.sc-igl-booking-event-hover{overflow-wrap:break-word !important;min-width:230px;width:fit-content}.bubblePointer.sc-igl-booking-event-hover{position:absolute;width:0;height:0;left:50%;border-left:10px solid transparent;border-right:10px solid transparent;transform:translate(-50%, 0px)}.bubblePointTop.sc-igl-booking-event-hover{border-top:10px solid #656ee7}.bubblePointBottom.sc-igl-booking-event-hover{border-bottom:10px solid #656ee7}.bubbleInfoAbove.sc-igl-booking-event-hover{bottom:35px}.updateBtnIcon.sc-igl-booking-event-hover{margin-right:4px}.icon-image.sc-igl-booking-event-hover{height:1.5rem;width:1.5rem;margin-right:5px}";
const IglBookingEventHoverStyle0 = iglBookingEventHoverCss;

const IglBookingEventHover = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.showBookingPopup = index.createEvent(this, "showBookingPopup", 7);
        this.hideBubbleInfo = index.createEvent(this, "hideBubbleInfo", 7);
        this.deleteButton = index.createEvent(this, "deleteButton", 7);
        this.bookingCreated = index.createEvent(this, "bookingCreated", 7);
        this.todayTimeStamp = new Date().setHours(0, 0, 0, 0);
        this.eventService = new EventsService();
        this.hideButtons = false;
        this.bookingEvent = undefined;
        this.bubbleInfoTop = false;
        this.currency = undefined;
        this.countryNodeList = undefined;
        this.is_vacation_rental = false;
        this.isLoading = undefined;
        this.shouldHideUnassignUnit = false;
    }
    componentWillLoad() {
        let selectedRt = this.bookingEvent.roomsInfo.find(r => r.id === this.bookingEvent.RATE_TYPE);
        if (selectedRt) {
            console.log(selectedRt.physicalrooms.length === 1);
            this.shouldHideUnassignUnit = selectedRt.physicalrooms.length === 1;
        }
        if (moment.hooks(this.bookingEvent.TO_DATE, 'YYYY-MM-DD').isBefore(moment.hooks())) {
            this.hideButtons = true;
        }
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    handleKeyDown(event) {
        if (event.key === 'Escape') {
            this.hideBubble();
        }
        else
            return;
    }
    hideBubble() {
        this.hideBubbleInfo.emit({
            key: 'hidebubble',
            currentInfoBubbleId: this.getBookingId(),
        });
        document.removeEventListener('keydown', this.handleKeyDown);
    }
    componentDidLoad() {
        document.addEventListener('keydown', this.handleKeyDown);
    }
    disconnectedCallback() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }
    getBookingId() {
        return this.bookingEvent.ID;
    }
    getTotalOccupants() {
        var _a, _b, _c;
        const { CHILDREN_COUNT, ADULTS_COUNT } = this.bookingEvent;
        if (CHILDREN_COUNT === 0) {
            return `${ADULTS_COUNT} ${ADULTS_COUNT > 1 ? locales_store.locales.entries.Lcz_AdultsCaption.toLowerCase() : (_a = locales_store.locales.entries.Lcz_Single_Adult) === null || _a === void 0 ? void 0 : _a.toLowerCase()}`;
        }
        return `${ADULTS_COUNT} ${ADULTS_COUNT > 1 ? locales_store.locales.entries.Lcz_AdultsCaption.toLowerCase() : (_b = locales_store.locales.entries.Lcz_Single_Adult) === null || _b === void 0 ? void 0 : _b.toLowerCase()}, ${CHILDREN_COUNT} ${CHILDREN_COUNT > 1 ? locales_store.locales.entries.Lcz_ChildCaption.toLowerCase() : (_c = locales_store.locales.entries.Lcz_Single_Child) === null || _c === void 0 ? void 0 : _c.toLowerCase()}`;
    }
    getPhoneNumber() {
        return this.bookingEvent.PHONE;
    }
    getCountry() {
        return utils.findCountry(this.bookingEvent.COUNTRY, this.countryNodeList).name;
    }
    getPhoneCode() {
        if (this.bookingEvent.PHONE_PREFIX) {
            return this.bookingEvent.PHONE_PREFIX;
        }
        return utils.findCountry(this.bookingEvent.COUNTRY, this.countryNodeList).phone_prefix;
    }
    renderPhone() {
        return this.bookingEvent.COUNTRY ? `${this.bookingEvent.is_direct ? this.getPhoneCode() + '-' : ''}${this.getPhoneNumber()} - ${this.getCountry()}` : this.getPhoneNumber();
    }
    getGuestNote() {
        return this.bookingEvent.NOTES && index.h("p", { class: 'user-notes p-0 my-0' }, this.bookingEvent.NOTES);
    }
    getInternalNote() {
        return this.bookingEvent.INTERNAL_NOTE;
    }
    getTotalPrice() {
        return this.bookingEvent.TOTAL_PRICE;
    }
    getCheckInDate() {
        return this.bookingEvent.FROM_DATE_STR;
    }
    getCheckOutDate() {
        return this.bookingEvent.TO_DATE_STR;
    }
    getArrivalTime() {
        return this.bookingEvent.ARRIVAL_TIME;
    }
    getRatePlan() {
        return this.bookingEvent.RATE_PLAN;
    }
    getEntryDate() {
        return this.bookingEvent.ENTRY_DATE;
    }
    getReleaseAfterHours() {
        return this.bookingEvent.RELEASE_AFTER_HOURS;
    }
    isNewBooking() {
        return this.getBookingId() === 'NEW_TEMP_EVENT';
    }
    isCheckedIn() {
        return this.bookingEvent.STATUS === 'CHECKED-IN';
    }
    isCheckedOut() {
        return this.bookingEvent.STATUS === 'CHECKED-OUT';
    }
    isBlockedDateEvent() {
        return this.bookingEvent.STATUS === 'BLOCKED' || this.bookingEvent.STATUS === 'BLOCKED-WITH-DATES';
    }
    getRoomId() {
        return this.bookingEvent.PR_ID;
    }
    getCategoryByRoomId(roomId) {
        // console.log("room id ",roomId)
        // console.log("booking event",this.bookingEvent)
        return this.bookingEvent.roomsInfo.find(roomCategory => roomCategory.physicalrooms.find(room => room.id === roomId));
    }
    hasSplitBooking() {
        return this.bookingEvent.hasOwnProperty('splitBookingEvents') && this.bookingEvent.splitBookingEvents;
    }
    canCheckIn() {
        if (!this.fromTimeStamp) {
            let dt = new Date(this.getCheckInDate());
            dt.setHours(0, 0, 0, 0);
            this.fromTimeStamp = dt.getTime();
        }
        if (!this.toTimeStamp) {
            let dt = new Date(this.getCheckOutDate());
            dt.setHours(0, 0, 0, 0);
            this.toTimeStamp = dt.getTime();
        }
        if (this.isCheckedIn() || this.isCheckedOut()) {
            return false;
        }
        if (this.fromTimeStamp <= this.todayTimeStamp && this.todayTimeStamp <= this.toTimeStamp) {
            return true;
        }
        else {
            return false;
        }
    }
    canCheckOut() {
        if (this.isCheckedIn() && this.todayTimeStamp <= this.toTimeStamp) {
            return true;
        }
        else {
            return false;
        }
    }
    handleBlockDateUpdate(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const opt = event.detail;
        this.bookingEvent = Object.assign(Object.assign({}, this.bookingEvent), opt.data);
        //console.log("blocked date booking event", this.bookingEvent);
    }
    handleEditBooking() {
        // console.log("Edit booking");
        this.bookingEvent.TITLE = locales_store.locales.entries.Lcz_EditBookingFor;
        this.handleBookingOption('EDIT_BOOKING');
    }
    getStringDateFormat(dt) {
        return dt.getFullYear() + '-' + (dt.getMonth() < 9 ? '0' : '') + (dt.getMonth() + 1) + '-' + (dt.getDate() <= 9 ? '0' : '') + dt.getDate();
    }
    handleAddRoom() {
        var _a;
        let fromDate = new Date(this.bookingEvent.FROM_DATE);
        fromDate.setHours(0, 0, 0, 0);
        let from_date_str = this.getStringDateFormat(fromDate);
        let toDate = new Date(this.bookingEvent.TO_DATE);
        //toDate.setDate(toDate.getDate() + 1);
        toDate.setHours(0, 0, 0, 0);
        let to_date_str = this.getStringDateFormat(toDate);
        // console.log(this.bookingEvent);
        let eventData = {
            ID: '',
            NAME: '',
            BOOKING_NUMBER: this.bookingEvent.BOOKING_NUMBER,
            FROM_DATE: from_date_str, // "2023-07-09",
            TO_DATE: to_date_str, // "2023-07-11",
            roomsInfo: this.bookingEvent.roomsInfo,
            ARRIVAL: this.bookingEvent.ARRIVAL,
            ADD_ROOM_TO_BOOKING: this.bookingEvent.ID,
            TITLE: 'Add Room to #' + this.bookingEvent.BOOKING_NUMBER,
            event_type: 'ADD_ROOM',
            ROOMS: this.bookingEvent.ROOMS,
            GUEST: this.bookingEvent.GUEST,
            message: this.bookingEvent.NOTES,
            SOURCE: this.bookingEvent.SOURCE,
            booking: (_a = this.bookingEvent) === null || _a === void 0 ? void 0 : _a.booking,
            defaultDateRange: {
                fromDate: fromDate,
                fromDateStr: '',
                toDate: toDate,
                toDateStr: '',
                dateDifference: 0,
                editabled: true,
                message: 'Including 5.00% City Tax - Excluding 11.00% VAT',
            },
        };
        this.handleBookingOption('ADD_ROOM', eventData);
    }
    handleCustomerCheckIn() {
        console.log('Handle Customer Check In');
    }
    handleCustomerCheckOut() {
        console.log('Handle Customer Check Out');
    }
    handleDeleteEvent() {
        this.hideBubble();
        this.deleteButton.emit(this.bookingEvent.POOL);
        console.log('Delete Event');
    }
    async handleUpdateBlockedDates() {
        try {
            this.isLoading = 'update';
            setTimeout(() => {
                this.hideBubble();
            }, 50);
            await this.eventService.updateBlockedEvent(this.bookingEvent);
            this.isLoading = '';
        }
        catch (error) {
            //   toastr.error(error);
        }
    }
    handleConvertBlockedDateToBooking() {
        this.handleBookingOption('BAR_BOOKING');
    }
    getRoomInfo() {
        const roomIdToFind = +this.bookingEvent.PR_ID;
        let selectedRoom = {};
        for (const room of this.bookingEvent.roomsInfo) {
            for (const physicalRoom of room.physicalrooms) {
                if (roomIdToFind === physicalRoom.id) {
                    selectedRoom.CATEGORY = room.name;
                    selectedRoom.ROOM_NAME = physicalRoom.name;
                    selectedRoom.ROOMS_INFO = room;
                    return selectedRoom;
                }
            }
        }
        return selectedRoom;
    }
    renderTitle(eventType, roomInfo) {
        switch (eventType) {
            case 'EDIT_BOOKING':
                return `${locales_store.locales.entries.Lcz_EditBookingFor} ${roomInfo.CATEGORY} ${roomInfo.ROOM_NAME}`;
            case 'ADD_ROOM':
                return `${locales_store.locales.entries.Lcz_AddingUnitToBooking}# ${this.bookingEvent.BOOKING_NUMBER}`;
            case 'SPLIT_BOOKING':
                return locales_store.locales.entries.Lcz_Adding + ` ${roomInfo.CATEGORY} ${roomInfo.ROOM_NAME}`;
            default:
                return `${locales_store.locales.entries.Lcz_NewBookingFor} ${roomInfo.CATEGORY} ${roomInfo.ROOM_NAME}`;
        }
    }
    handleBookingOption(eventType, roomData = null) {
        const roomInfo = this.getRoomInfo();
        let data = roomData ? roomData : this.bookingEvent;
        data.event_type = eventType;
        data.TITLE = this.renderTitle(eventType, roomInfo);
        if (['003', '002', '004'].includes(this.bookingEvent.STATUS_CODE)) {
            data.roomsInfo = [roomInfo.ROOMS_INFO];
        }
        if (eventType === 'BAR_BOOKING' && this.bookingEvent.STATUS !== 'TEMP-EVENT') {
            const { FROM_DATE, TO_DATE, PR_ID, RELEASE_AFTER_HOURS, ENTRY_DATE, OPTIONAL_REASON, ENTRY_MINUTE, ENTRY_HOUR, STATUS_CODE } = this.bookingEvent;
            data.block_exposed_unit_props = {
                from_date: FROM_DATE,
                to_date: TO_DATE,
                NOTES: OPTIONAL_REASON,
                pr_id: PR_ID,
                STAY_STATUS_CODE: STATUS_CODE,
                DESCRIPTION: RELEASE_AFTER_HOURS,
                BLOCKED_TILL_DATE: ENTRY_DATE,
                BLOCKED_TILL_HOUR: ENTRY_HOUR,
                BLOCKED_TILL_MINUTE: ENTRY_MINUTE,
            };
            this.handleDeleteEvent();
        }
        this.showBookingPopup.emit({
            key: 'add',
            data: Object.assign({}, data),
        });
        this.hideBubbleInfo.emit({
            key: 'hidebubble',
            currentInfoBubbleId: this.getBookingId(),
        });
    }
    renderNote() {
        const { is_direct, ota_notes } = this.bookingEvent;
        const guestNote = this.getGuestNote();
        const noteLabel = locales_store.locales.entries.Lcz_Note + ':';
        if (!is_direct && ota_notes) {
            return (index.h("div", { class: "row p-0 m-0" }, index.h("div", { class: "col-12 px-0 text-wrap d-flex" }, index.h("ota-label", { label: noteLabel, remarks: ota_notes }))));
        }
        else if (is_direct && guestNote) {
            return (index.h("div", { class: "row p-0 m-0" }, index.h("div", { class: "col-12 px-0 text-wrap d-flex" }, index.h(index.Fragment, null, index.h("span", { class: "font-weight-bold" }, noteLabel, " "), guestNote))));
        }
        return null;
    }
    getInfoElement() {
        var _a, _b, _c, _d, _e;
        return (index.h("div", { class: `iglPopOver infoBubble ${this.bubbleInfoTop ? 'bubbleInfoAbove' : ''} text-left` }, index.h("div", { class: `row p-0 m-0  ${this.bookingEvent.BALANCE > 1 ? 'pb-0' : 'pb-1'}` }, index.h("div", { class: "px-0  col-8 font-weight-bold font-medium-1 d-flex align-items-center" }, index.h("img", { src: (_b = (_a = this.bookingEvent) === null || _a === void 0 ? void 0 : _a.origin) === null || _b === void 0 ? void 0 : _b.Icon, alt: (_d = (_c = this.bookingEvent) === null || _c === void 0 ? void 0 : _c.origin) === null || _d === void 0 ? void 0 : _d.Label, class: 'icon-image' }), index.h("p", { class: 'p-0 m-0' }, !this.bookingEvent.is_direct ? this.bookingEvent.channel_booking_nbr : this.bookingEvent.BOOKING_NUMBER)), index.h("div", { class: "pr-0 col-4 text-right" }, utils.formatAmount(this.currency.symbol, this.getTotalPrice()))), this.bookingEvent.BALANCE > 1 && (index.h("p", { class: "pr-0 m-0 p-0 text-right balance_amount" }, locales_store.locales.entries.Lcz_Balance, ": ", utils.formatAmount(this.currency.symbol, this.bookingEvent.BALANCE))), index.h("div", { class: "row p-0 m-0" }, index.h("div", { class: "px-0 pr-0 col-12" }, index.h("ir-date-view", { from_date: this.bookingEvent.defaultDates.from_date, to_date: this.bookingEvent.defaultDates.to_date, showDateDifference: false }))), this.getArrivalTime() && (
        // <div class="row p-0 m-0">
        //   <div class="px-0 col-12">
        //     <span class="font-weight-bold">{locales.entries.Lcz_ArrivalTime}: </span>
        //     {this.getArrivalTime()}
        //   </div>
        // </div>
        index.h("ir-label", { containerStyle: { padding: '0', margin: '0' }, class: "m-0 p-0", labelText: `${locales_store.locales.entries.Lcz_ArrivalTime}:`, content: this.getArrivalTime() })), this.getTotalOccupants() && (
        // <div class="row p-0 m-0">
        //   <div class="px-0  col-12">
        //     <span class="font-weight-bold">{locales.entries.Lcz_Occupancy}: </span>
        //     {this.getTotalOccupants()}
        //   </div>
        // </div>
        index.h("ir-label", { class: "m-0 p-0", containerStyle: { padding: '0', margin: '0' }, labelText: `${locales_store.locales.entries.Lcz_Occupancy}:`, content: this.getTotalOccupants() })), this.getPhoneNumber() && (
        // <div class="row p-0 m-0">
        //   <div class="px-0  col-12 text-wrap">
        //     <span class="font-weight-bold">{locales.entries.Lcz_Phone}: </span>
        //     {this.renderPhone()}
        //   </div>
        // </div>
        index.h("ir-label", { containerStyle: { padding: '0', margin: '0' }, class: "m-0 p-0", labelText: `${locales_store.locales.entries.Lcz_Phone}:`, content: this.renderPhone() })), this.getRatePlan() && (
        // <div class="row p-0 m-0">
        //   <div class="px-0  col-12">
        //     <span class="font-weight-bold">{locales.entries.Lcz_RatePlan}: </span>
        //     {this.getRatePlan()}
        //   </div>
        // </div>
        index.h("ir-label", { containerStyle: { padding: '0', margin: '0' }, class: "m-0 p-0", labelText: `${locales_store.locales.entries.Lcz_RatePlan}:`, content: this.getRatePlan() })), this.bookingEvent.PRIVATE_NOTE && (
        // <div class="row p-0 m-0">
        //   <div class="px-0  col-12 text-wrap">
        //     <span class="font-weight-bold">{locales.entries.Lcz_PrivateNote}: </span>
        //     {this.bookingEvent.PRIVATE_NOTE}
        //   </div>
        // </div>
        index.h("ir-label", { containerStyle: { padding: '0', margin: '0' }, class: "m-0 p-0", labelText: `${locales_store.locales.entries.Lcz_BookingPrivateNote}:`, display: "inline", content: this.bookingEvent.PRIVATE_NOTE })), this.bookingEvent.is_direct ? (index.h("ir-label", { containerStyle: { padding: '0', margin: '0' }, labelText: `${locales_store.locales.entries.Lcz_GuestRemark}:`, display: "inline", content: this.bookingEvent.NOTES })) : (index.h("ota-label", { class: 'm-0 p-0', label: `${locales_store.locales.entries.Lcz_ChannelNotes || 'Channel notes'}:`, remarks: this.bookingEvent.ota_notes, maxVisibleItems: (_e = this.bookingEvent.ota_notes) === null || _e === void 0 ? void 0 : _e.length })), this.getInternalNote() && index.h("ir-label", { labelText: `${locales_store.locales.entries.Lcz_InternalRemark}:`, content: this.getInternalNote() }), index.h("div", { class: "row p-0 m-0 mt-2" }, index.h("div", { class: "full-width btn-group  btn-group-sm font-small-3", role: "group" }, index.h("button", { type: "button", class: `btn btn-primary events_btns ${this.hideButtons ? 'mr-0' : 'mr-1'} ${this.shouldHideUnassignUnit ? 'w-50' : ''}`, onClick: _ => {
                this.handleEditBooking();
            } }, index.h("ir-icons", { name: "edit", style: { '--icon-size': '0.875rem' } }), index.h("span", null, locales_store.locales.entries.Lcz_Edit)), this.bookingEvent.is_direct && this.bookingEvent.IS_EDITABLE && !this.hideButtons && (index.h("button", { type: "button", class: `btn btn-primary events_btns ${!this.shouldHideUnassignUnit ? 'mr-1' : 'w-50'}`, onClick: _ => {
                this.handleAddRoom();
            } }, index.h("ir-icons", { name: "square_plus", style: { '--icon-size': '0.875rem' } }), index.h("span", null, locales_store.locales.entries.Lcz_AddRoom))), this.hideButtons
            ? null
            : !this.shouldHideUnassignUnit && (index.h("button", { type: "button", class: "btn btn-primary events_btns", onClick: _ => {
                    this.handleDeleteEvent();
                } }, index.h("ir-icons", { name: "xmark", style: { '--icon-size': '0.875rem' } }), index.h("span", { class: "m-0 p-0" }, locales_store.locales.entries.Lcz_Unassign)))))));
    }
    getNewBookingOptions() {
        const shouldDisplayButtons = this.bookingEvent.roomsInfo[0].rateplans.some(rate => rate.is_active);
        return (index.h("div", { class: `iglPopOver newBookingOptions ${this.bubbleInfoTop ? 'bubbleInfoAbove' : ''} text-left` }, shouldDisplayButtons ? (index.h(index.Fragment, null, index.h("button", { type: "button", class: "d-block full-width btn btn-sm btn-primary mb-1 font-small-3 square", onClick: _ => {
                this.handleBookingOption('BAR_BOOKING');
            } }, locales_store.locales.entries.Lcz_CreateNewBooking), this.hasSplitBooking() ? (index.h("button", { type: "button", class: "d-block full-width btn btn-sm btn-primary mb-1 font-small-3 square", onClick: _ => {
                this.handleBookingOption('SPLIT_BOOKING');
            } }, locales_store.locales.entries.Lcz_AssignUnitToExistingBooking)) : null)) : (index.h("p", { class: 'text-danger' }, locales_store.locales.entries.Lcz_NoRatePlanDefined)), index.h("button", { type: "button", class: "d-block full-width btn btn-sm btn-primary font-small-3 square", onClick: _ => {
                this.handleBookingOption('BLOCK_DATES');
            } }, locales_store.locales.entries.Lcz_Blockdates)));
    }
    getBlockedView() {
        // let defaultData = {RELEASE_AFTER_HOURS: 0, OPTIONAL_REASON: "", OUT_OF_SERVICE: false};
        return (index.h("div", { class: `iglPopOver blockedView ${this.bubbleInfoTop ? 'bubbleInfoAbove' : ''} text-left` }, index.h("igl-block-dates-view", { isEventHover: true, entryHour: this.bookingEvent.ENTRY_HOUR, entryMinute: this.bookingEvent.ENTRY_MINUTE, defaultData: this.bookingEvent, fromDate: moment.hooks(this.bookingEvent.defaultDates.from_date, 'YYYY-MM-DD').format('DD MM YYYY'), toDate: moment.hooks(this.bookingEvent.defaultDates.to_date, 'YYYY-MM-DD').format('DD MM YYYY'), entryDate: this.getEntryDate(), onDataUpdateEvent: event => this.handleBlockDateUpdate(event) }), index.h("div", { class: "row p-0 m-0 mt-2" }, index.h("div", { class: "full-width btn-group btn-group-sm font-small-3", role: "group" }, index.h("button", { disabled: this.isLoading === 'update', type: "button", class: "btn btn-primary mr-1 events_btns", onClick: _ => {
                this.handleUpdateBlockedDates();
            } }, this.isLoading === 'update' ? index.h("i", { class: "la la-circle-o-notch spinner mx-1" }) : index.h("ir-icons", { name: "edit", style: { '--icon-size': '0.875rem' } }), index.h("span", null, locales_store.locales.entries.Lcz_Update)), index.h("button", { type: "button", class: "btn btn-primary events_btns", onClick: () => {
                this.handleConvertBlockedDateToBooking();
            } }, locales_store.locales.entries.Lcz_ConvertToBooking), index.h("button", { type: "button", class: "btn btn-danger ml-1 events_btns", onClick: _ => {
                this.handleDeleteEvent();
            } }, index.h("ir-icons", { name: "trash", style: { '--icon-size': '0.875rem' } }), index.h("span", null, locales_store.locales.entries.Lcz_Delete))))));
    }
    render() {
        return (index.h(index.Host, { key: '9bda5cefeafb0ff51ec1570ccee12135722986cb' }, index.h("div", { key: '0e3f9ac6ed384af1566b74d4f168a7bd0d1f83b3', class: `pointerContainer ${this.bubbleInfoTop ? 'pointerContainerTop' : ''}` }, index.h("div", { key: '956ee0c9197df2f7d1c59accd9f642d6cc3aadb8', class: `bubblePointer ${this.bubbleInfoTop ? 'bubblePointTop' : 'bubblePointBottom'}` })), this.isBlockedDateEvent() ? this.getBlockedView() : null, this.isNewBooking() ? this.getNewBookingOptions() : null, !this.isBlockedDateEvent() && !this.isNewBooking() ? this.getInfoElement() : null));
    }
    get element() { return index.getElement(this); }
};
IglBookingEventHover.style = IglBookingEventHoverStyle0;

const iglBookingFormCss = ".sc-igl-booking-form-h{display:block}.card-title.sc-igl-booking-form{border-bottom:1px solid #e4e5ec}.scrollContent.sc-igl-booking-form{height:calc(100% - 79px);overflow:auto;position:relative}.background-overlay.sc-igl-booking-form{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.25)}.formContainer.sc-igl-booking-form{height:calc(100% - 79px);overflow:auto}.sideWindow.sc-igl-booking-form{position:absolute;top:0;right:0;height:100%;background-color:#ffffff}.close.sc-igl-booking-form{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:0.5;padding:0;background-color:transparent;border:0;appearance:none}.close-icon.sc-igl-booking-form{position:absolute;top:18px;right:33px;outline:none}button.sc-igl-booking-form:not(:disabled),[type='button'].sc-igl-booking-form:not(:disabled){cursor:pointer}.row.sc-igl-booking-form{padding:0 0 0 15px;margin:0}";
const IglBookingFormStyle0 = iglBookingFormCss;

const IglBookingForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.dataUpdateEvent = index.createEvent(this, "dataUpdateEvent", 7);
        this.buttonClicked = index.createEvent(this, "buttonClicked", 7);
        this.showPaymentDetails = undefined;
        this.currency = undefined;
        this.isEditOrAddRoomEvent = undefined;
        this.dateRangeData = undefined;
        this.bookingData = undefined;
        this.showSplitBookingOption = undefined;
        this.language = undefined;
        this.bookedByInfoData = undefined;
        this.propertyId = undefined;
        this.bedPreferenceType = undefined;
        this.selectedRooms = undefined;
        this.isLoading = undefined;
        this.countryNodeList = undefined;
        this.selectedGuestData = undefined;
        this.defaultGuestData = undefined;
        this.selectedBookedByData = undefined;
        this.guestData = undefined;
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
        return (index.h(index.Host, { key: '31caaa8df94fcdb0500ec4f866a0fddc55da91bf' }, index.h("div", { key: 'cc5c9d8ad11ec53b4b6fa7a748b0d96f0279eebf', class: "d-flex flex-wrap" }, index.h("ir-date-view", { key: '482bd45ff263718459103b95b504e13b8441bf77', class: "mr-1 flex-fill font-weight-bold font-medium-1", from_date: new Date(this.dateRangeData.fromDate), to_date: new Date(this.dateRangeData.toDate), dateOption: "DD MMM YYYY" }), this.guestData.length > 1 && (index.h("div", { key: '3ef91da4cdd13bf40162d3a9b7ecf58013a280bb', class: "mt-1 mt-md-0 text-right" }, locales_store.locales.entries.Lcz_TotalPrice, " ", index.h("span", { key: '21527fbf33aa9145d5f433508dbbcfdb8e618ead', class: "font-weight-bold font-medium-1" }, utils.formatAmount(this.currency.symbol, this.bookingData.TOTAL_PRICE || '0'))))), Object.values(booking_service.booking_store.ratePlanSelections).map(val => Object.values(val).map(ratePlan => {
            const rp = ratePlan;
            if (rp.reserved === 0) {
                return null;
            }
            return [...new Array(rp.reserved)].map((_, i) => (index.h("igl-application-info", { totalNights: Number(this.dateRangeData.dateDifference), bedPreferenceType: this.bedPreferenceType, currency: this.currency, guestInfo: rp.guest ? rp.guest[i] : null, bookingType: this.bookingData.event_type, rateplanSelection: rp, key: `${rp.ratePlan.id}_${i}`, roomIndex: i, baseData: this.bookingData.event_type === 'EDIT_BOOKING'
                    ? {
                        roomtypeId: this.bookingData.currentRoomType.roomtype.id,
                        unit: this.bookingData.currentRoomType.unit,
                    }
                    : undefined })));
        })), this.isEditOrAddRoomEvent || this.showSplitBookingOption ? null : (index.h("igl-property-booked-by", { propertyId: this.propertyId, countryNodeList: this.countryNodeList, language: this.language, showPaymentDetails: this.showPaymentDetails, defaultData: this.bookedByInfoData, onDataUpdateEvent: event => {
                this.handleEventData(event, 'propertyBookedBy', 0);
            } })), this.isEditOrAddRoomEvent ? (index.h("div", { class: "d-flex p-0 mb-1 mt-2" }, index.h("div", { class: "flex-fill mr-2" }, index.h("ir-button", { icon: "", text: locales_store.locales.entries.Lcz_Back, class: "full-width", btn_color: "secondary", btn_styles: "justify-content-center", onClickHandler: () => this.buttonClicked.emit({ key: 'back' }) })), index.h("div", { class: "flex-fill" }, index.h("ir-button", { isLoading: this.isLoading === 'save', onClickHandler: () => this.buttonClicked.emit({ key: 'save' }), btn_styles: "full-width align-items-center justify-content-center", text: locales_store.locales.entries.Lcz_Save })))) : (index.h("div", { class: "d-flex flex-column flex-md-row p-0 mb-1 mt-2 justify-content-md-between align-items-md-center" }, index.h("div", { class: "flex-fill mr-md-1" }, index.h("ir-button", { icon_name: "angles_left", btn_color: "secondary", btn_styles: "full-width align-items-center justify-content-center", onClickHandler: () => this.buttonClicked.emit({ key: 'back' }), text: locales_store.locales.entries.Lcz_Back, style: { '--icon-size': '1rem' }, icon_style: { paddingBottom: '1.9px' } })), index.h("div", { class: "mt-1 mt-md-0 flex-fill" }, index.h("ir-button", { isLoading: this.isLoading === 'book', btn_styles: "full-width align-items-center justify-content-center", onClickHandler: () => this.buttonClicked.emit({ key: 'book' }), text: locales_store.locales.entries.Lcz_Book }))))));
    }
};
IglBookingForm.style = IglBookingFormStyle0;

const iglBookingOverviewPageCss = ".sc-igl-booking-overview-page-h{display:block}.sc-igl-booking-overview-page-h>*.sc-igl-booking-overview-page{margin:0;padding:auto}.scrollContent.sc-igl-booking-overview-page{height:calc(100% - 79px);overflow:auto;position:relative}.loading-container.sc-igl-booking-overview-page{display:flex;align-items:center;justify-content:center;height:100%;background:white;position:absolute;inset:0;z-index:100}.loader.sc-igl-booking-overview-page{width:1.25rem;height:1.25rem;border:2.5px solid #3f3f3f;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}";
const IglBookingOverviewPageStyle0 = iglBookingOverviewPageCss;

const IglBookingOverviewPage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.roomsDataUpdate = index.createEvent(this, "roomsDataUpdate", 7);
        this.bookingData = undefined;
        this.propertyId = undefined;
        this.message = undefined;
        this.showSplitBookingOption = undefined;
        this.eventType = undefined;
        this.currency = undefined;
        this.adultChildConstraints = undefined;
        this.ratePricingMode = undefined;
        this.dateRangeData = undefined;
        this.defaultDaterange = undefined;
        this.selectedRooms = undefined;
        this.adultChildCount = undefined;
        this.sourceOptions = undefined;
        this.bookedByInfoData = undefined;
        this.initialRoomIds = undefined;
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
        const from_date = moment.hooks(this.bookingData.FROM_DATE, 'YYYY-MM-DD');
        const today = moment.hooks();
        if (from_date.isAfter(today)) {
            return today.add(-2, 'weeks').format('YYYY-MM-DD');
        }
        return from_date.add(-2, 'weeks').format('YYYY-MM-DD');
    }
    render() {
        var _a;
        return (index.h(index.Host, { key: '61a7b2f93e71aecd044d918d2b63a206a89e1c90' }, index.h("igl-book-property-header", { key: 'd593354ee0d743795e23283ec0856d7a1b08d854', bookedByInfoData: this.bookedByInfoData, defaultDaterange: this.defaultDaterange, dateRangeData: this.dateRangeData, minDate: this.setMinDate(),
            // minDate={this.isEventType('ADD_ROOM') || this.isEventType('SPLIT_BOOKING') ? this.bookedByInfoData.from_date || this.bookingData.FROM_DATE : undefined}
            adultChildCount: this.adultChildCount, splitBookingId: this.showSplitBookingOption, bookingData: this.bookingData, sourceOptions: this.sourceOptions, message: this.message, bookingDataDefaultDateRange: this.bookingData.defaultDateRange, showSplitBookingOption: this.showSplitBookingOption, adultChildConstraints: this.adultChildConstraints, splitBookings: this.getSplitBookings(), propertyId: this.propertyId }), index.h("div", { key: '60677cff868b32fec71c95311efa558139ca9562', class: " text-left" }, irInterceptor_store.isRequestPending('/Check_Availability') && this.isEventType('EDIT_BOOKING') ? (index.h("div", { class: "loading-container" }, index.h("div", { class: "loader" }))) : (index.h(index.Fragment, null, (_a = booking_service.booking_store.roomTypes) === null || _a === void 0 ? void 0 : _a.map(roomType => (index.h("igl-room-type", { initialRoomIds: this.initialRoomIds, isBookDisabled: Object.keys(this.bookedByInfoData).length <= 1, key: `room-info-${roomType.id}`, currency: this.currency, ratePricingMode: this.ratePricingMode, dateDifference: this.dateRangeData.dateDifference, bookingType: this.bookingData.event_type, roomType: roomType, class: "mt-2 mb-1 p-0", roomInfoId: this.selectedRooms.has(`c_${roomType.id}`) ? roomType.id : null, onDataUpdateEvent: evt => this.roomsDataUpdate.emit(evt.detail) })))))), index.h("igl-book-property-footer", { key: '171bb18005cf3a5cf49d3c4cc34779ad44ae50aa', class: 'p-0 mb-1 mt-3', eventType: this.bookingData.event_type })));
    }
};
IglBookingOverviewPage.style = IglBookingOverviewPageStyle0;

const iglCalBodyCss = ".sc-igl-cal-body-h{display:block}.bodyContainer.sc-igl-cal-body{position:relative}.roomRow.sc-igl-cal-body{width:max-content}.roomRow.sc-igl-cal-body:first-child{margin-top:80px}.categoryName.sc-igl-cal-body{font-weight:bold;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.cellData.sc-igl-cal-body{width:58px;height:30px;display:inline-grid;border-top:1px solid #e0e0e0;border-left:1px solid #e0e0e0;vertical-align:top}.cellData.sc-igl-cal-body:nth-child(2){border-left:0px}.cellData.sc-igl-cal-body:last-child{border-right:1px solid #e0e0e0}.roomHeaderCell.sc-igl-cal-body{position:-webkit-sticky;position:sticky;left:0;background:#fff;border-right:1px solid #ccc;width:170px;z-index:1}.currentDay.sc-igl-cal-body{background-color:#e3f3fa}.dragOverHighlight.sc-igl-cal-body{background-color:#f5f5dc !important}.selectedDay.sc-igl-cal-body{background-color:#f9f9c9 !important}.categoryTitle.sc-igl-cal-body{grid-template-columns:1fr 20px;padding-left:10px;cursor:pointer;height:40px;font-size:0.9em}.categoryTitle.sc-igl-cal-body>.sc-igl-cal-body:nth-child(1){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.roomTitle.sc-igl-cal-body{padding-left:20px;font-size:0.9em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.roomTitle.sc-igl-cal-body>.sc-igl-cal-body:nth-child(1){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.roomTitle.pl10.sc-igl-cal-body{padding-left:10px}.categoryPriceColumn.sc-igl-cal-body{align-items:center;height:40px;-webkit-user-select:none;user-select:none}.bookingEventsContainer.sc-igl-cal-body{position:absolute;top:0;left:0}";
const IglCalBodyStyle0 = iglCalBodyCss;

const IglCalBody = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.showBookingPopup = index.createEvent(this, "showBookingPopup", 7);
        this.scrollPageToRoom = index.createEvent(this, "scrollPageToRoom", 7);
        this.addBookingDatasEvent = index.createEvent(this, "addBookingDatasEvent", 7);
        this.selectedRooms = {};
        this.fromRoomId = -1;
        this.currentDate = new Date();
        this.isScrollViewDragging = undefined;
        this.calendarData = undefined;
        this.today = undefined;
        this.currency = undefined;
        this.language = undefined;
        this.countryNodeList = undefined;
        this.dragOverElement = '';
        this.renderAgain = false;
        this.highlightedDate = undefined;
    }
    componentWillLoad() {
        this.currentDate.setHours(0, 0, 0, 0);
    }
    dragOverHighlightElementHandler(event) {
        this.dragOverElement = event.detail.dragOverElement;
    }
    gotoRoom(event) {
        let roomId = event.detail.roomId;
        let category = this.getRoomCategoryByRoomId(roomId);
        if (!category.expanded) {
            this.toggleCategory(category);
            setTimeout(() => {
                this.scrollToRoom(roomId);
            }, 10);
        }
        else {
            this.scrollToRoom(roomId);
        }
    }
    addToBeAssignedEvents(event) {
        // let roomId = event.detail.roomId;
        this.addBookingDatas(event.detail.data);
        this.renderElement();
    }
    scrollToRoom(roomId) {
        this.scrollPageToRoom.emit({
            key: 'scrollPageToRoom',
            id: roomId,
            refClass: 'room_' + roomId,
        });
    }
    getRoomCategoryByRoomId(roomId) {
        return this.calendarData.roomsInfo.find(roomCategory => {
            return this.getCategoryRooms(roomCategory).find(room => this.getRoomId(room) === roomId);
        });
    }
    getCategoryName(roomCategory) {
        return roomCategory.name;
    }
    getCategoryId(roomCategory) {
        return roomCategory.id;
    }
    getTotalPhysicalRooms(roomCategory) {
        return this.getCategoryRooms(roomCategory).length;
    }
    getCategoryRooms(roomCategory) {
        return (roomCategory && roomCategory.physicalrooms) || [];
    }
    getRoomName(roomInfo) {
        return roomInfo.name;
    }
    getRoomId(roomInfo) {
        return roomInfo.id;
    }
    getRoomById(physicalRooms, roomId) {
        return physicalRooms.find(physical_room => this.getRoomId(physical_room) === roomId);
    }
    getBookingData() {
        return this.calendarData.bookingEvents;
    }
    addBookingDatas(aData) {
        this.addBookingDatasEvent.emit(aData);
    }
    getSelectedCellRefName(roomId, selectedDay) {
        return 'room_' + roomId + '_' + selectedDay.currentDate;
    }
    // getSplitBookingEvents(newEvent) {
    //   return this.getBookingData().some(bookingEvent => !['003', '002', '004'].includes(bookingEvent.STATUS_CODE) && newEvent.FROM_DATE === bookingEvent.FROM_DATE);
    // }
    getSplitBookingEvents(newEvent) {
        console.log(newEvent.FROM_DATE);
        return this.getBookingData().some(bookingEvent => {
            if (!['003', '002', '004'].includes(bookingEvent.STATUS_CODE)) {
                if (new Date(newEvent.FROM_DATE).getTime() >= new Date(bookingEvent.FROM_DATE).getTime() &&
                    new Date(newEvent.FROM_DATE).getTime() <= new Date(bookingEvent.TO_DATE).getTime()) {
                    return bookingEvent;
                }
            }
        });
    }
    closeWindow() {
        let ind = this.getBookingData().findIndex(ev => ev.ID === 'NEW_TEMP_EVENT');
        if (ind !== -1) {
            this.getBookingData().splice(ind, 1);
            console.log('removed item..');
            this.renderElement();
        }
    }
    addNewEvent(roomCategory) {
        let keys = Object.keys(this.selectedRooms);
        let startDate, endDate;
        if (this.selectedRooms[keys[0]].currentDate < this.selectedRooms[keys[1]].currentDate) {
            startDate = new Date(this.selectedRooms[keys[0]].currentDate);
            endDate = new Date(this.selectedRooms[keys[1]].currentDate);
        }
        else {
            startDate = new Date(this.selectedRooms[keys[1]].currentDate);
            endDate = new Date(this.selectedRooms[keys[0]].currentDate);
        }
        this.newEvent = {
            ID: 'NEW_TEMP_EVENT',
            NAME: index.h("span", null, "\u00A0"),
            EMAIL: '',
            PHONE: '',
            convertBooking: false,
            REFERENCE_TYPE: 'PHONE',
            FROM_DATE: startDate.getFullYear() + '-' + this.getTwoDigitNumStr(startDate.getMonth() + 1) + '-' + this.getTwoDigitNumStr(startDate.getDate()),
            TO_DATE: endDate.getFullYear() + '-' + this.getTwoDigitNumStr(endDate.getMonth() + 1) + '-' + this.getTwoDigitNumStr(endDate.getDate()),
            BALANCE: '',
            NOTES: '',
            RELEASE_AFTER_HOURS: 0,
            PR_ID: this.selectedRooms[keys[0]].roomId,
            ENTRY_DATE: '',
            NO_OF_DAYS: (endDate - startDate) / 86400000,
            ADULTS_COUNT: 1,
            COUNTRY: '',
            INTERNAL_NOTE: '',
            RATE: '',
            TOTAL_PRICE: '',
            RATE_PLAN: '',
            ARRIVAL_TIME: '',
            TITLE: locales_store.locales.entries.Lcz_NewBookingFor,
            roomsInfo: [roomCategory],
            CATEGORY: roomCategory.name,
            event_type: 'BAR_BOOKING',
            STATUS: 'TEMP-EVENT',
            defaultDateRange: {
                fromDate: null,
                fromDateStr: '',
                toDate: null,
                toDateStr: '',
                dateDifference: (endDate - startDate) / 86400000,
                editable: false,
                message: 'Including 5.00% City Tax - Excluding 11.00% VAT',
            },
        };
        let popupTitle = roomCategory.name + ' ' + this.getRoomName(this.getRoomById(this.getCategoryRooms(roomCategory), this.selectedRooms[keys[0]].roomId));
        this.newEvent.BLOCK_DATES_TITLE = `${locales_store.locales.entries.Lcz_BlockDatesFor} ${popupTitle}`;
        this.newEvent.TITLE += popupTitle;
        this.newEvent.defaultDateRange.toDate = new Date(this.newEvent.TO_DATE + 'T00:00:00');
        this.newEvent.defaultDateRange.fromDate = new Date(this.newEvent.FROM_DATE + 'T00:00:00');
        this.newEvent.defaultDateRange.fromDateStr = this.getDateStr(this.newEvent.defaultDateRange.fromDate);
        this.newEvent.defaultDateRange.toDateStr = this.getDateStr(this.newEvent.defaultDateRange.toDate);
        this.newEvent.ENTRY_DATE = new Date().toISOString();
        this.newEvent.legendData = this.calendarData.formattedLegendData;
        let splitBookingEvents = this.getSplitBookingEvents(this.newEvent);
        if (splitBookingEvents) {
            this.newEvent.splitBookingEvents = splitBookingEvents;
        }
        this.getBookingData().push(this.newEvent);
        return this.newEvent;
    }
    getTwoDigitNumStr(num) {
        return num <= 9 ? '0' + num : num;
    }
    getDateStr(date, locale = 'default') {
        return date.getDate() + ' ' + date.toLocaleString(locale, { month: 'short' }) + ' ' + date.getFullYear();
    }
    removeNewEvent() {
        this.calendarData.bookingEvents = this.calendarData.bookingEvents.filter(events => events.ID !== 'NEW_TEMP_EVENT');
        this.newEvent = null;
    }
    clickCell(roomId, selectedDay, roomCategory) {
        if (!this.isScrollViewDragging && selectedDay.currentDate >= this.currentDate.getTime()) {
            let refKey = this.getSelectedCellRefName(roomId, selectedDay);
            if (this.selectedRooms.hasOwnProperty(refKey)) {
                this.removeNewEvent();
                delete this.selectedRooms[refKey];
                this.renderElement();
                return;
            }
            else if (Object.keys(this.selectedRooms).length != 1 || this.fromRoomId != roomId) {
                this.removeNewEvent();
                this.selectedRooms = {};
                this.selectedRooms[refKey] = Object.assign(Object.assign({}, selectedDay), { roomId });
                this.fromRoomId = roomId;
                this.renderElement();
            }
            else {
                // create bar;
                this.selectedRooms[refKey] = Object.assign(Object.assign({}, selectedDay), { roomId });
                this.addNewEvent(roomCategory);
                this.selectedRooms = {};
                this.renderElement();
                this.showNewBookingPopup(this.newEvent);
            }
        }
    }
    showNewBookingPopup(data) {
        console.log(data);
        // this.showBookingPopup.emit({key: "add", data});
    }
    renderElement() {
        this.renderAgain = !this.renderAgain;
    }
    getGeneralCategoryDayColumns(addClass, isCategory = false, index$1) {
        return booking.calendar_dates.days.map(dayInfo => {
            return (index.h("div", { class: `cellData  font-weight-bold categoryPriceColumn ${addClass + '_' + dayInfo.day} ${dayInfo.day === this.today || dayInfo.day === this.highlightedDate ? 'currentDay' : ''}` }, isCategory ? (index.h("span", { class: 'categoryName' }, dayInfo.rate[index$1].exposed_inventory.rts)) : ('')));
        });
    }
    getGeneralRoomDayColumns(roomId, roomCategory) {
        // onDragOver={event => this.handleDragOver(event)} onDrop={event => this.handleDrop(event, addClass+"_"+dayInfo.day)}
        return this.calendarData.days.map(dayInfo => (index.h("div", { class: `cellData ${'room_' + roomId + '_' + dayInfo.day} ${dayInfo.day === this.today || dayInfo.day === this.highlightedDate ? 'currentDay' : ''} ${this.dragOverElement === roomId + '_' + dayInfo.day ? 'dragOverHighlight' : ''} ${this.selectedRooms.hasOwnProperty(this.getSelectedCellRefName(roomId, dayInfo)) ? 'selectedDay' : ''}`, onClick: () => this.clickCell(roomId, dayInfo, roomCategory) })));
    }
    toggleCategory(roomCategory) {
        roomCategory.expanded = !roomCategory.expanded;
        this.renderElement();
    }
    getRoomCategoryRow(roomCategory, index$1) {
        if (this.getTotalPhysicalRooms(roomCategory) <= 1 || !roomCategory.is_active) {
            return null;
        }
        return (index.h("div", { class: "roomRow" }, index.h("div", { class: `cellData text-left align-items-center roomHeaderCell categoryTitle ${'category_' + this.getCategoryId(roomCategory)}`, onClick: () => this.toggleCategory(roomCategory) }, index.h("div", { class: 'categoryName' }, index.h("ir-popover", { popoverTitle: this.getCategoryName(roomCategory) })), roomCategory.expanded ? (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", height: 14, width: 14 }, index.h("path", { fill: "#6b6f82", d: "M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" }))) : (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", height: 14, width: 14 }, index.h("path", { fill: "#6b6f82", d: "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" })))), this.getGeneralCategoryDayColumns('category_' + this.getCategoryId(roomCategory), true, index$1)));
    }
    /**
     * Renders a list of active rooms for an expanded room category. Returns an array of JSX elements, including headers and day columns, or an empty array if the category is collapsed or contains no active rooms.
     *
     * @param {RoomCategory} roomCategory - The category containing room details.
     * @returns {JSX.Element[]} - JSX elements for the active rooms or an empty array.
     */
    getRoomsByCategory(roomCategory) {
        var _a;
        // Check accordion is expanded.
        if (!roomCategory.expanded) {
            return [];
        }
        return (_a = this.getCategoryRooms(roomCategory)) === null || _a === void 0 ? void 0 : _a.map(room => {
            if (!room.is_active) {
                return null;
            }
            return (index.h("div", { class: "roomRow" }, index.h("div", { class: `cellData text-left align-items-center roomHeaderCell  roomTitle ${this.getTotalPhysicalRooms(roomCategory) <= 1 ? 'pl10' : ''} ${'room_' + this.getRoomId(room)}`, "data-room": this.getRoomId(room) }, index.h("ir-popover", { popoverTitle: this.getTotalPhysicalRooms(roomCategory) <= 1 ? this.getCategoryName(roomCategory) : this.getRoomName(room) })), this.getGeneralRoomDayColumns(this.getRoomId(room), roomCategory)));
        });
    }
    getRoomRows() {
        var _a;
        return (_a = this.calendarData.roomsInfo) === null || _a === void 0 ? void 0 : _a.map((roomCategory, index) => {
            if (roomCategory.is_active) {
                return [this.getRoomCategoryRow(roomCategory, index), this.getRoomsByCategory(roomCategory)];
            }
            else {
                return null;
            }
        });
    }
    render() {
        var _a;
        // onDragStart={event => this.handleDragStart(event)} draggable={true}
        return (index.h(index.Host, { key: 'e16b417f5f3a9dc9f6151b49f8f7d1eba62a5c39' }, index.h("div", { key: 'c2b251b6ec01b8c1ab6601f9c1bd9277cf161d36', class: "bodyContainer" }, this.getRoomRows(), index.h("div", { key: '40e1b32cef7a9975d3d3645be74cd83ef3195c06', class: "bookingEventsContainer preventPageScroll" }, (_a = this.getBookingData()) === null || _a === void 0 ? void 0 : _a.map(bookingEvent => (index.h("igl-booking-event", { language: this.language, is_vacation_rental: this.calendarData.is_vacation_rental, countryNodeList: this.countryNodeList, currency: this.currency, "data-component-id": bookingEvent.ID, bookingEvent: bookingEvent, allBookingEvents: this.getBookingData() })))))));
    }
};
IglCalBody.style = IglCalBodyStyle0;

const iglCalFooterCss = ".sc-igl-cal-footer-h{display:block;position:sticky;bottom:0;width:max-content;z-index:3}.footerCell.sc-igl-cal-footer{display:-moz-inline-grid;display:-ms-inline-grid;display:inline-grid;position:-webkit-sticky;position:sticky;bottom:0;width:58px;height:40px;background:#fff;vertical-align:top;border-top:1px solid #e0e0e0}.bottomLeftCell.sc-igl-cal-footer{left:-1px;z-index:2;width:170px;text-align:left;padding-left:15px;color:#000000}.footerCell.sc-igl-cal-footer i.sc-igl-cal-footer{margin-right:5px}.legendBtn.sc-igl-cal-footer{color:#41bff3;cursor:pointer}.isOnline.sc-igl-cal-footer i.sc-igl-cal-footer{color:#2f9c3f;font-weight:bold}.isOffline.sc-igl-cal-footer i.sc-igl-cal-footer{font-weight:bold}.isOffline.sc-igl-cal-footer{color:#a40000}.dayTitle.sc-igl-cal-footer{font-size:0.8em;font-weight:600;display:grid;user-select:none}.currentDay.sc-igl-cal-footer .dayTitle.sc-igl-cal-footer{font-weight:bold}.currentDay.sc-igl-cal-footer{background-color:#e3f3fa}.dayCapacityPercent.sc-igl-cal-footer{font-size:0.75em}.badge-pill.sc-igl-cal-footer{padding-left:1em;padding-right:1em;font-size:0.7em;margin-bottom:2px}";
const IglCalFooterStyle0 = iglCalFooterCss;

const IglCalFooter = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.optionEvent = index.createEvent(this, "optionEvent", 7);
        this.calendarData = undefined;
        this.today = undefined;
        this.highlightedDate = undefined;
    }
    // private isOnline:boolean = false;
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
    }
    render() {
        return (index.h(index.Host, { key: '03e81d5d07e3a4ece7db2b84e7a3af069ab825c2', class: "footerContainer" }, index.h("div", { key: '150433f62c921d919d25ab3e8513a96a33a2884d', class: "footerCell bottomLeftCell align-items-center preventPageScroll" }, index.h("div", { key: '1338754dfdefad6c1a957a6a0288362617983ddd', class: "legendBtn", onClick: () => this.handleOptionEvent('showLegend') }, index.h("i", { key: '0d4330a73f85983b96ac2a22f4b6aac037565ffc', class: "la la-square" }), index.h("u", { key: '0eeda67e2909d841bea61ebff50f3725d06cfe0e' }, locales_store.locales.entries.Lcz_Legend), index.h("span", { key: '25e4ae6dff069cf859c85d56e5c9d8a7c7c42030' }, " - v99.18"))), this.calendarData.days.map(dayInfo => (index.h("div", { class: "footerCell align-items-center" }, index.h("div", { class: `dayTitle full-height align-items-center ${dayInfo.day === this.today || this.highlightedDate === dayInfo.day ? 'currentDay' : ''}` }, dayInfo.dayDisplayName))))));
    }
};
IglCalFooter.style = IglCalFooterStyle0;

class ToBeAssignedService {
    async getUnassignedDates(propertyid, from_date, to_date) {
        try {
            const { data } = await axios.axios.post(`/Get_UnAssigned_Dates`, {
                propertyid,
                from_date,
                to_date,
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return this.convertUnassignedDates(data.My_Result);
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async getUnassignedRooms(calendarFromDates, propertyid, specific_date, roomInfo, formattedLegendData) {
        try {
            const { data } = await axios.axios.post(`/Get_Aggregated_UnAssigned_Rooms`, {
                propertyid,
                specific_date,
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return this.transformToAssignable(calendarFromDates, data, roomInfo, formattedLegendData);
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async assignUnit(booking_nbr, identifier, pr_id) {
        try {
            const { data } = await axios.axios.post(`/Assign_Exposed_Room`, {
                booking_nbr,
                identifier,
                pr_id,
                extras: utils.extras,
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            console.log(data);
            return data['My_Result'];
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    cleanSpacesAndSpecialChars(str) {
        const regex = /[^a-zA-Z0-9]+/g;
        return str.replace(regex, '');
    }
    transformToAssignable(calendarFromDates, data, roomInfo, formattedLegendData) {
        const result = [];
        data.My_Result.forEach((customer) => {
            customer.unassigned_rooms.forEach((room) => {
                let roomCategory = {
                    roomTypeName: room.room_type_name,
                    ID: room.identifier,
                    NAME: room.guest_name,
                    identifier: room.identifier,
                    FROM_DATE: room.unassigned_date,
                    TO_DATE: room.unassigned_date,
                    BOOKING_NUMBER: room.book_nbr,
                    STATUS: 'IN-HOUSE',
                    defaultDateRange: {
                        fromDate: undefined,
                        toDate: undefined,
                        fromDateTimeStamp: 0,
                        toDateTimeStamp: 0,
                        fromDateStr: '',
                        toDateStr: '',
                        dateDifference: 0,
                    },
                    NO_OF_DAYS: 1,
                    roomsInfo: roomInfo,
                    legendData: formattedLegendData,
                    availableRooms: [],
                    RT_ID: this.getRoomTypeId(room.room_type_name, roomInfo),
                };
                this.updateAvailableRooms(calendarFromDates, room, roomCategory, formattedLegendData, roomInfo);
                this.addDefaultDateRange(roomCategory);
                result.push(roomCategory);
            });
        });
        return result;
    }
    addDefaultDateRange(roomCategory) {
        roomCategory.defaultDateRange.fromDate = new Date(roomCategory.FROM_DATE + 'T00:00:00');
        roomCategory.defaultDateRange.fromDateStr = utils.dateToFormattedString(roomCategory.defaultDateRange.fromDate);
        roomCategory.defaultDateRange.fromDateTimeStamp = roomCategory.defaultDateRange.fromDate.getTime();
        roomCategory.defaultDateRange.toDate = new Date(roomCategory.TO_DATE + 'T00:00:00');
        roomCategory.defaultDateRange.toDateStr = utils.dateToFormattedString(roomCategory.defaultDateRange.toDate);
        roomCategory.defaultDateRange.toDateTimeStamp = roomCategory.defaultDateRange.toDate.getTime();
        roomCategory.defaultDateRange.dateDifference = roomCategory.NO_OF_DAYS;
    }
    getRoomTypeId(roomName, roomInfo) {
        var _a;
        return ((_a = roomInfo.find(room => this.cleanSpacesAndSpecialChars(room.name) === this.cleanSpacesAndSpecialChars(roomName))) === null || _a === void 0 ? void 0 : _a.id) || null;
    }
    updateAvailableRooms(calendarFromDates, room, roomCategory, formattedLegendData, roomsInfo) {
        const rooms = [];
        room.assignable_units.forEach((unit) => {
            if (unit.Is_Fully_Available && !unit.Is_Not_Available) {
                const days = utils.dateDifference(unit.from_date, unit.to_date);
                const fromDate = moment.hooks(new Date(calendarFromDates.from_date)).isAfter(moment.hooks(new Date(unit.from_date))) ? calendarFromDates.from_date : unit.from_date;
                const toDate = moment.hooks(new Date(calendarFromDates.to_date)).isBefore(moment.hooks(new Date(unit.to_date))) &&
                    moment.hooks(new Date(calendarFromDates.to_date)).isAfter(moment.hooks(new Date(unit.from_date)))
                    ? calendarFromDates.to_date
                    : unit.to_date;
                rooms.push({
                    RT_ID: roomCategory.RT_ID,
                    STATUS: 'PENDING-CONFIRMATION',
                    FROM_DATE: fromDate,
                    roomName: unit.name,
                    PR_ID: unit.pr_id,
                    TO_DATE: toDate,
                    NO_OF_DAYS: days,
                    ID: 'NEW_TEMP_EVENT',
                    NAME: '',
                    NOTES: '',
                    BALANCE: '',
                    INTERNAL_NOTE: '',
                    hideBubble: true,
                    legendData: formattedLegendData,
                    roomsInfo,
                });
                roomCategory.TO_DATE = unit.to_date;
                roomCategory.NO_OF_DAYS = days;
            }
        });
        roomCategory.availableRooms = rooms;
    }
    convertUnassignedDates(dates) {
        let convertedDates = {};
        dates.forEach(date => {
            let newDate = new Date(date.date);
            newDate.setHours(0, 0, 0, 0);
            convertedDates[newDate.getTime()] = {
                categories: {},
                dateStr: date.description,
            };
        });
        return convertedDates;
    }
}

const initialState = {
    unassigned_dates: {},
};
let { state: unassigned_dates, onChange: handleUnAssignedDatesChange } = index$1.createStore(initialState);
function addUnassignedDates(data) {
    unassigned_dates.unassigned_dates = Object.assign(Object.assign({}, unassigned_dates.unassigned_dates), data);
    /*
     try {
        //console.log("called")
        let categorisedRooms = {};
        const result = await this.toBeAssignedService.getUnassignedRooms(
          this.propertyid,
          dateToFormattedString(new Date(+key)),
          calendarData.roomsInfo,
          calendarData.formattedLegendData,
        );
        result.forEach(room => {
          if (!categorisedRooms.hasOwnProperty(room.RT_ID)) {
            categorisedRooms[room.RT_ID] = [room];
          } else {
            categorisedRooms[room.RT_ID].push(room);
          }
        });
        this.unassignedDates[key].categories = categorisedRooms;
      } catch (error) {
        //  toastr.error(error);
      }
    */
    // console.log(unassigned_dates.unassigned_dates);
}
function getUnassignedDates() {
    return unassigned_dates.unassigned_dates;
}
function removeUnassignedDates(from_date, to_date) {
    const fromTimestamp = convertToDateTimestamp(from_date);
    const toTimestamp = convertToDateTimestamp(to_date);
    Object.keys(unassigned_dates.unassigned_dates).forEach(key => {
        const keyTimestamp = parseInt(key);
        if (fromTimestamp <= keyTimestamp && keyTimestamp <= toTimestamp) {
            delete unassigned_dates.unassigned_dates[key];
        }
    });
}
function convertToDateTimestamp(dateStr) {
    const date = new Date(dateStr);
    date.setHours(0, 0, 0, 0);
    return date.getTime();
}

const icons = {
    'clock': {
        d: 'M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z',
        viewBox: '0 0 512 512',
    },
    'check': {
        viewBox: '0 0 448 512',
        d: 'M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z',
    },
    'heart-fill': {
        viewBox: '0 0 512 512',
        d: 'M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z',
    },
    'envelope-circle-check': {
        viewBox: '0 0 640 512',
        d: 'M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0l57.4-43c23.9-59.8 79.7-103.3 146.3-109.8l13.9-10.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176 0 384c0 35.3 28.7 64 64 64l296.2 0C335.1 417.6 320 378.5 320 336c0-5.6 .3-11.1 .8-16.6l-26.4 19.8zM640 336a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 353.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z',
    },
    'danger': {
        viewBox: '0 0 512 512',
        d: 'M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z',
    },
    'bell': {
        viewBox: '0 0 448 512',
        d: 'M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z',
    },
    'burger_menu': {
        viewBox: '0 0 448 512',
        d: 'M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z',
    },
    'home': {
        viewBox: '0 0 576 512',
        d: 'M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z',
    },
    'xmark': {
        viewBox: '0 0 384 512',
        d: 'M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z',
    },
    'minus': {
        viewBox: '0 0 448 512',
        d: 'M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z',
    },
    'user': {
        viewBox: '0 0 448 512',
        d: 'M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z',
    },
    'heart': {
        viewBox: '0 0 512 512',
        d: 'M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z',
    },
    'user_group': {
        viewBox: '0 0 640 512',
        d: 'M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z',
    },
    'search': {
        viewBox: '0 0 512 512',
        d: 'M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z',
    },
    'arrow_right': {
        viewBox: '0 0 448 512',
        d: 'M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z',
    },
    'arrow_left': {
        viewBox: '0 0 448 512',
        d: 'M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z',
    },
    'circle_info': {
        viewBox: '0 0 512 512',
        d: 'M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z',
    },
    'calendar': {
        viewBox: ' 0 0 448 512',
        d: 'M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z',
    },
    'xmark-fill': {
        viewBox: '0 0 512 512',
        d: 'M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z',
    },
    'globe': {
        viewBox: '0 0 256 256',
        d: 'M128 24a104 104 0 1 0 104 104A104.12 104.12 0 0 0 128 24m88 104a87.6 87.6 0 0 1-3.33 24h-38.51a157.4 157.4 0 0 0 0-48h38.51a87.6 87.6 0 0 1 3.33 24m-114 40h52a115.1 115.1 0 0 1-26 45a115.3 115.3 0 0 1-26-45m-3.9-16a140.8 140.8 0 0 1 0-48h59.88a140.8 140.8 0 0 1 0 48ZM40 128a87.6 87.6 0 0 1 3.33-24h38.51a157.4 157.4 0 0 0 0 48H43.33A87.6 87.6 0 0 1 40 128m114-40h-52a115.1 115.1 0 0 1 26-45a115.3 115.3 0 0 1 26 45m52.33 0h-35.62a135.3 135.3 0 0 0-22.3-45.6A88.29 88.29 0 0 1 206.37 88Zm-98.74-45.6A135.3 135.3 0 0 0 85.29 88H49.63a88.29 88.29 0 0 1 57.96-45.6M49.63 168h35.66a135.3 135.3 0 0 0 22.3 45.6A88.29 88.29 0 0 1 49.63 168m98.78 45.6a135.3 135.3 0 0 0 22.3-45.6h35.66a88.29 88.29 0 0 1-57.96 45.6',
    },
    'facebook': {
        viewBox: '0 0 512 512',
        d: 'M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z',
    },
    'twitter': {
        viewBox: '0 0 512 512',
        d: 'M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z',
    },
    'whatsapp': {
        viewBox: '0 0 448 512',
        d: 'M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z',
    },
    'instagram': {
        viewBox: '0 0 448 512',
        d: 'M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z',
    },
    'youtube': {
        viewBox: '0 0 576 512',
        d: 'M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z',
    },
    'angle_left': {
        viewBox: '0 0 320 512',
        d: 'M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z',
    },
    'circle_check': {
        d: 'M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z',
        viewBox: '0 0 512 512',
    },
    'eraser': {
        viewBox: '0 0 576 512',
        d: 'M290.7 57.4L57.4 290.7c-25 25-25 65.5 0 90.5l80 80c12 12 28.3 18.7 45.3 18.7H288h9.4H512c17.7 0 32-14.3 32-32s-14.3-32-32-32H387.9L518.6 285.3c25-25 25-65.5 0-90.5L381.3 57.4c-25-25-65.5-25-90.5 0zM297.4 416H288l-105.4 0-80-80L227.3 211.3 364.7 348.7 297.4 416z',
    },
    'file': {
        viewBox: '0 0 384 512',
        d: 'M48 448V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm90.9 233.3c-8.1-10.5-23.2-12.3-33.7-4.2s-12.3 23.2-4.2 33.7L161.6 320l-44.5 57.3c-8.1 10.5-6.3 25.5 4.2 33.7s25.5 6.3 33.7-4.2L192 359.1l37.1 47.6c8.1 10.5 23.2 12.3 33.7 4.2s12.3-23.2 4.2-33.7L222.4 320l44.5-57.3c8.1-10.5 6.3-25.5-4.2-33.7s-25.5-6.3-33.7 4.2L192 280.9l-37.1-47.6z',
    },
    'edit': {
        viewBox: '0 0 512 512',
        d: 'M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z',
    },
    'trash': {
        viewBox: '0 0 448 512',
        d: 'M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z',
    },
    'plus': {
        viewBox: '0 0 448 512',
        d: 'M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z',
    },
    'reciept': {
        viewBox: '0 0 384 512',
        d: 'M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM80 64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16zm16 96H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm0 32v64H288V256H96zM240 416h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16s7.2-16 16-16z',
    },
    'print': {
        viewBox: '0 0 512 512',
        d: 'M128 0C92.7 0 64 28.7 64 64v96h64V64H354.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0H128zM384 352v32 64H128V384 368 352H384zm64 32h32c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32H64v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z',
    },
    'menu_list': {
        viewBox: '0 0 512 512',
        d: 'M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z',
    },
    'save': {
        viewBox: '0 0 448 512',
        d: 'M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z',
    },
    'credit_card': {
        viewBox: '0 0 576 512',
        d: 'M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z',
    },
    'closed_eye': {
        viewBox: '0 0 640 512',
        d: 'M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z',
    },
    'open_eye': {
        viewBox: '0 0 576 512',
        d: 'M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z',
    },
    'server': {
        viewBox: '0 0 512 512',
        d: 'M448 160H320V128H448v32zM48 64C21.5 64 0 85.5 0 112v64c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zM448 352v32H192V352H448zM48 288c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V336c0-26.5-21.5-48-48-48H48z',
    },
    'double_caret_left': {
        viewBox: '0 0 512 512',
        d: 'M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z',
    },
    'square_plus': {
        viewBox: '0 0 448 512',
        d: 'M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM200 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z',
    },
    'angles_left': {
        viewBox: '0 0 512 512',
        d: 'M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z',
    },
    'angle_right': {
        viewBox: '0 0 320 512',
        d: 'M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z',
    },
    'angles_right': {
        viewBox: '0 0 512 512',
        d: 'M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z',
    },
    'outline_user': {
        viewBox: '0 0 448 512',
        d: 'M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z',
    },
    'key': {
        viewBox: '0 0 512 512',
        d: 'M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24l0-40 40 0c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z',
    },
    'unlock': {
        viewBox: '0 0 448 512',
        d: 'M144 144c0-44.2 35.8-80 80-80c31.9 0 59.4 18.6 72.3 45.7c7.6 16 26.7 22.8 42.6 15.2s22.8-26.7 15.2-42.6C331 33.7 281.5 0 224 0C144.5 0 80 64.5 80 144l0 48-16 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-240 0 0-48z',
    },
    'circle_plus': {
        viewBox: '0 0 15 15',
        d: 'M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM7.50003 4C7.77617 4 8.00003 4.22386 8.00003 4.5V7H10.5C10.7762 7 11 7.22386 11 7.5C11 7.77614 10.7762 8 10.5 8H8.00003V10.5C8.00003 10.7761 7.77617 11 7.50003 11C7.22389 11 7.00003 10.7761 7.00003 10.5V8H4.50003C4.22389 8 4.00003 7.77614 4.00003 7.5C4.00003 7.22386 4.22389 7 4.50003 7H7.00003V4.5C7.00003 4.22386 7.22389 4 7.50003 4Z',
    },
};
const colorVariants = {
    secondary: {
        '--icon-button-color': '#6b6f82',
        '--icon-button-hover-color': '#104064',
    },
    danger: {
        '--icon-button-color': '#ff4961',
        '--icon-button-hover-color': '#ff6377',
    },
};

const iglCalHeaderCss = ".sc-igl-cal-header-h{display:block;position:absolute;top:0;height:100%}.svg-icon.sc-igl-cal-header{height:20px;width:20px}.darkGrey.sc-igl-cal-header{background:#ececec}.btn.sc-igl-cal-header{pointer-events:auto}.stickyCell.sc-igl-cal-header{display:-ms-inline-grid;display:-moz-inline-grid;display:inline-grid;position:-webkit-sticky;position:sticky;top:0px;height:82px;display:inline-block;vertical-align:top;z-index:2}.headersContainer.sc-igl-cal-header{background-color:#ffffff}.headerCell.sc-igl-cal-header{display:inline-grid;width:58px;height:58px;vertical-align:top;background-color:#ffffff;border-bottom:1px solid #e0e0e0}.monthsContainer.sc-igl-cal-header{height:20px;background-color:#ffffff;margin-bottom:0.2em}.monthCell.sc-igl-cal-header{display:inline-grid;height:20px;background-color:#ececec;border-right:1px solid #c7c7c7;vertical-align:top}.monthCell.sc-igl-cal-header:nth-child(odd){background-color:#dddddd}.monthTitle.sc-igl-cal-header{overflow:hidden;text-overflow:ellipsis;font-size:0.9em;text-transform:uppercase;font-weight:bold;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.topLeftCell.sc-igl-cal-header{left:0px;z-index:3;width:170px;background-color:#ffffff;display:-ms-inline-grid;display:-moz-inline-grid;display:inline-grid}.datePickerHidden.sc-igl-cal-header{position:absolute;height:100%;width:100%;opacity:0;cursor:pointer;z-index:1}.date_btn.sc-igl-cal-header{cursor:pointer;display:flex;align-items:center;justify-content:center;position:relative}.date_btn.sc-igl-cal-header:hover{background:#f6f6f6;border-radius:0.3rem}.caledarBtns.sc-igl-cal-header{position:relative;cursor:pointer;padding:0.4rem}.caledarBtns.sc-igl-cal-header:hover{background-color:#f6f6f6}.dayTitle.sc-igl-cal-header{font-size:0.8em;font-weight:600;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.currentDay.sc-igl-cal-header .dayTitle.sc-igl-cal-header{font-weight:bold}.currentDay.sc-igl-cal-header{background-color:#e3f3fa}.dayCapacityPercent.sc-igl-cal-header{font-size:0.75em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.badge-pill.sc-igl-cal-header{padding:3px 1em;font-size:0.8em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.pointer.sc-igl-cal-header{cursor:pointer}.searchContiner.sc-igl-cal-header{padding-left:10px;padding-right:10px}.searchListContainer.sc-igl-cal-header{background:#fff;border:1px solid #ccc;border-bottom:none}.searchListItem.sc-igl-cal-header{background:white;border-bottom:1px solid #ccc;padding-left:8px}.badge-light.sc-igl-cal-header{background-color:#999999;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.min-width-full.sc-igl-cal-header{min-width:100%}";
const IglCalHeaderStyle0 = iglCalHeaderCss;

const IglCalHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.optionEvent = index.createEvent(this, "optionEvent", 7);
        this.gotoRoomEvent = index.createEvent(this, "gotoRoomEvent", 7);
        this.gotoToBeAssignedDate = index.createEvent(this, "gotoToBeAssignedDate", 7);
        this.searchValue = '';
        this.searchList = [];
        this.roomsList = [];
        this.toBeAssignedService = new ToBeAssignedService();
        this.calendarData = undefined;
        this.today = undefined;
        this.propertyid = undefined;
        this.unassignedDates = undefined;
        this.to_date = undefined;
        this.highlightedDate = undefined;
        this.renderAgain = false;
        this.unassignedRoomsNumber = {};
    }
    componentWillLoad() {
        try {
            this.initializeRoomsList();
            if (!this.calendarData.is_vacation_rental) {
                handleUnAssignedDatesChange('unassigned_dates', newValue => {
                    if (Object.keys(newValue).length > 0) {
                        this.fetchAndAssignUnassignedRooms();
                    }
                });
            }
        }
        catch (error) {
            console.error('Error in componentWillLoad:', error);
        }
    }
    handleCalendarDataChanged() {
        this.fetchAndAssignUnassignedRooms();
    }
    initializeRoomsList() {
        this.roomsList = [];
        this.calendarData.roomsInfo.forEach(category => {
            this.roomsList = this.roomsList.concat(...category.physicalrooms);
        });
    }
    async fetchAndAssignUnassignedRooms() {
        await this.assignRoomsToDate();
    }
    async assignRoomsToDate() {
        try {
            const { fromDate, toDate, data } = this.unassignedDates;
            let dt = new Date(fromDate);
            dt.setHours(0, 0, 0, 0);
            let endDate = dt.getTime();
            while (endDate <= new Date(toDate).getTime()) {
                const selectedDate = moment.hooks(endDate).format('D_M_YYYY');
                if (data[endDate]) {
                    const result = await this.toBeAssignedService.getUnassignedRooms({ from_date: this.calendarData.from_date, to_date: this.calendarData.to_date }, this.propertyid, utils.dateToFormattedString(new Date(endDate)), this.calendarData.roomsInfo, this.calendarData.formattedLegendData);
                    this.unassignedRoomsNumber[selectedDate] = result.length;
                }
                else if (this.unassignedRoomsNumber[selectedDate]) {
                    const res = this.unassignedRoomsNumber[selectedDate] - 1;
                    this.unassignedRoomsNumber[selectedDate] = res < 0 ? 0 : res;
                }
                const newEndDate = moment.hooks(endDate).add(1, 'days').toDate();
                newEndDate.setHours(0, 0, 0, 0);
                endDate = newEndDate.getTime();
                this.renderView();
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    handleReduceAvailableUnitEvent(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const { fromDate, toDate } = event.detail;
        let endDate = new Date(fromDate).getTime();
        while (endDate < new Date(toDate).getTime()) {
            const selectedDate = moment.hooks(endDate).format('D_M_YYYY');
            this.unassignedRoomsNumber[selectedDate] = this.unassignedRoomsNumber[selectedDate] - 1;
            endDate = moment.hooks(endDate).add(1, 'days').toDate().getTime();
        }
        this.renderView();
    }
    showToBeAssigned(dayInfo) {
        if (this.unassignedRoomsNumber[dayInfo.day] || 0) {
            this.handleOptionEvent('showAssigned');
            setTimeout(() => {
                this.gotoToBeAssignedDate.emit({
                    key: 'gotoToBeAssignedDate',
                    data: dayInfo.currentDate,
                });
            }, 100);
        }
    }
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
    }
    handleDateSelect(event) {
        if (Object.keys(event.detail).length > 0) {
            this.handleOptionEvent('calendar', event.detail);
        }
    }
    handleClearSearch() {
        this.searchValue = '';
        this.searchList = [];
        this.renderView();
    }
    handleFilterRooms(event) {
        const inputElement = event.target;
        let value = inputElement.value.trim();
        this.searchValue = value;
        value = value.toLowerCase();
        if (value === '') {
            this.handleClearSearch();
        }
        else {
            this.searchList = this.roomsList.filter(room => room.name.toLocaleLowerCase().indexOf(value) != -1);
        }
        this.renderView();
    }
    handleScrollToRoom(roomId) {
        this.handleClearSearch();
        this.gotoRoomEvent.emit({ key: 'gotoRoom', roomId });
    }
    getStringDateFormat(dt) {
        return dt.getFullYear() + '-' + (dt.getMonth() < 9 ? '0' : '') + (dt.getMonth() + 1) + '-' + (dt.getDate() <= 9 ? '0' : '') + dt.getDate();
    }
    getNewBookingModel() {
        let today = new Date();
        today.setHours(0, 0, 0, 0);
        let from_date = this.getStringDateFormat(today);
        today.setDate(today.getDate() + 1);
        today.setHours(0, 0, 0, 0);
        let to_date = this.getStringDateFormat(today);
        return {
            ID: '',
            NAME: '',
            EMAIL: '',
            PHONE: '',
            REFERENCE_TYPE: 'PHONE',
            FROM_DATE: from_date, // "2023-07-09",
            TO_DATE: to_date, // "2023-07-11",
            roomsInfo: this.calendarData.roomsInfo,
            TITLE: locales_store.locales.entries.Lcz_NewBooking,
            event_type: 'PLUS_BOOKING',
            legendData: this.calendarData.formattedLegendData,
            defaultDateRange: {
                fromDate: new Date(from_date), //new Date("2023-09-10"),
                fromDateStr: '', //"10 Sep 2023",
                toDate: new Date(to_date), //new Date("2023-09-15"),
                toDateStr: '', // "15 Sep 2023",
                dateDifference: 0,
                editabled: true,
                message: '',
            },
        };
    }
    renderView() {
        this.renderAgain = !this.renderAgain;
    }
    render() {
        return (index.h(index.Host, { key: '5d4b43ca564a80ff4d9684e94745d64a55b0d676' }, index.h("div", { key: 'e02626c9adbeed1c1491c84f573bd8c2a5e8d4c8', class: "stickyCell align-items-center topLeftCell preventPageScroll" }, index.h("div", { key: '37ddfbf5f70905ae559260a6c0e9530436ca23bb', class: "row justify-content-around no-gutters" }, !this.calendarData.is_vacation_rental && (index.h("ir-button", { key: 'b7ffb6357231f955abb55385cf5482b34c89289e', variant: "icon", icon_name: "server", style: Object.assign(Object.assign({}, colorVariants.secondary), { '--icon-size': '1.5rem' }), "data-toggle": "tooltip", "data-placement": "bottom", title: locales_store.locales.entries.Lcz_UnassignedUnitsTooltip, onClickHandler: () => this.handleOptionEvent('showAssigned'), btn_styles: "caledarBtns", visibleBackgroundOnHover: true })), index.h("ir-date-picker", { key: '48b1adf87e0f2c4ec6e44b889b13cdc12807ac99', minDate: moment.hooks().add(-2, 'months').startOf('month').format('YYYY-MM-DD'),
            // autoApply
            // singleDatePicker
            onDateChanged: evt => {
                console.log('evt', evt);
                this.handleDateSelect(evt);
            },
            // class="datePickerHidden"
            class: 'date_btn', title: locales_store.locales.entries.Lcz_Navigate, "data-toggle": "tooltip", "data-placement": "bottom" }, index.h("ir-button", { key: '27d8a54deab216fd52cbca501323e9e64c93c4b7', slot: "trigger", btn_styles: "caledarBtns", variant: "icon", icon_name: "calendar", style: Object.assign(Object.assign({}, colorVariants.secondary), { '--icon-size': '1.5rem' }), onClickHandler: () => this.handleOptionEvent('calendar'), visibleBackgroundOnHover: true, ref: el => (this.dateRef = el) })), index.h("ir-button", { key: '7b2ce3c38e8bbbec323172e4efdffacf9ff51839', variant: "icon", btn_styles: "caledarBtns", class: 'pointer', icon_name: "clock", visibleBackgroundOnHover: true, style: Object.assign(Object.assign({}, colorVariants.secondary), { '--icon-size': '1.5rem' }), "data-toggle": "tooltip", "data-placement": "bottom", title: locales_store.locales.entries.Lcz_Today, onClickHandler: () => this.handleOptionEvent('gotoToday') }), index.h("ir-button", { key: '9bb5cd571151d9d113c59bf72ef4d00e18866ee5', variant: "icon", btn_styles: "caledarBtns", icon_name: "plus", "data-toggle": "tooltip", "data-placement": "bottom", title: locales_store.locales.entries.Lcz_CreateNewBooking, visibleBackgroundOnHover: true, style: Object.assign(Object.assign({}, colorVariants.secondary), { '--icon-size': '1.5rem' }), onClickHandler: () => this.handleOptionEvent('add', this.getNewBookingModel()) })), index.h("div", { key: 'b8d925c00944c0a3e5f63673a95dbb1892deb0dc', class: "row justify-content-around no-gutters searchContiner" }, index.h("fieldset", { key: 'a2a90512a016a6103339d82ff00fb12cbe2a0f28', class: `form-group position-relative ${this.searchValue != '' ? 'show' : ''}` }, index.h("input", { key: '4b9a8d39a1f40b705737c7552b7dcdedc9a57e50', type: "text", class: "form-control form-control-sm input-sm", id: "iconLeft7", value: this.searchValue, placeholder: locales_store.locales.entries.Lcz_FindUnit, onInput: event => this.handleFilterRooms(event) }), this.searchValue !== '' ? (index.h("div", { class: "form-control-position pointer", onClick: () => this.handleClearSearch(), "data-toggle": "tooltip", "data-placement": "top", "data-original-title": "Clear Selection" }, index.h("i", { class: "la la-close font-small-4" }))) : null, this.searchList.length ? (index.h("div", { class: "position-absolute searchListContainer dropdown-menu dropdown-menu-left min-width-full" }, this.searchList.map(room => (index.h("div", { class: "searchListItem1 dropdown-item px-1 text-left pointer", onClick: () => this.handleScrollToRoom(room.id) }, room.name))))) : null))), index.h("div", { key: '29b1fa1ff6dfac6be807972a9e464fefbbbbb82e', class: "stickyCell headersContainer" }, index.h("div", { key: '371458fe14d450eaa0fc743252821009c36480cd', class: "monthsContainer" }, this.calendarData.monthsInfo.map(monthInfo => (index.h("div", { class: "monthCell", style: { width: monthInfo.daysCount * 58 + 'px' } }, index.h("div", { class: "monthTitle" }, monthInfo.monthName))))), this.calendarData.days.map(dayInfo => (index.h("div", { class: `headerCell align-items-center ${'day-' + dayInfo.day} ${dayInfo.day === this.today || dayInfo.day === this.highlightedDate ? 'currentDay' : ''}`, "data-day": dayInfo.day }, !this.calendarData.is_vacation_rental && (index.h("div", { class: "preventPageScroll" }, index.h("span", { class: `badge badge-${this.unassignedRoomsNumber[dayInfo.day] || dayInfo.unassigned_units_nbr !== 0 ? 'info pointer' : 'light'} badge-pill`, onClick: () => this.showToBeAssigned(dayInfo) }, this.unassignedRoomsNumber[dayInfo.day] || dayInfo.unassigned_units_nbr))), index.h("div", { class: "dayTitle" }, dayInfo.dayDisplayName), index.h("div", { class: "dayCapacityPercent" }, dayInfo.occupancy, "%")))))));
    }
    static get watchers() { return {
        "unassignedDates": ["handleCalendarDataChanged"]
    }; }
};
IglCalHeader.style = IglCalHeaderStyle0;

const iglDateRangeCss = ".sc-igl-date-range-h{display:flex;align-items:center !important;font-size:14px !important}.date-range-input.sc-igl-date-range{margin:0;padding:0;display:flex;flex:1;cursor:pointer;width:220px !important;opacity:0;user-select:none;font-size:14px !important}.iglRangeNights.sc-igl-date-range{margin:0;padding:0}.date-view.sc-igl-date-range{position:absolute;background:white;pointer-events:none;cursor:pointer;display:block;margin-left:14px;margin-right:14px;font-size:13.65px !important;display:flex;align-items:center;inset:0}.date-view.sc-igl-date-range svg.sc-igl-date-range{padding:0 !important;margin:0;margin-right:10px}.calendarPickerContainer.sc-igl-date-range{display:flex !important;position:relative !important;text-align:left;align-items:center !important;padding:0 !important;margin:0;border:1px solid var(--ir-date-range-border, #379ff2);width:var(--ir-date-range-width, 245px);transition:border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}.calendarPickerContainer.sc-igl-date-range:focus-within{border-color:#379ff2}.calendarPickerContainer[data-state='disabled'].sc-igl-date-range{border:0px;width:280px}.date-view[data-state='disabled'].sc-igl-date-range,.date-range-input[data-state='disabled'].sc-igl-date-range{margin:0;cursor:default}.date-range-container-cn.sc-igl-date-range{position:relative;width:fit-content}.date-range-container-cn.sc-igl-date-range:focus-within .date-range-container.sc-igl-date-range{border:1px solid #379ff2}.date-range-container.sc-igl-date-range{position:relative;gap:1rem;font-size:0.975rem;line-height:1.45;border-radius:0.21rem;border:1px solid #cacfe7;color:#3b4781;padding:0.75rem 1rem;box-sizing:border-box !important;font-weight:400;background-color:#fff;background-clip:padding-box;height:2rem;pointer-events:none;transition:border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}.date-range-container-cn.sc-igl-date-range .date-range-input.sc-igl-date-range{position:absolute;width:100% !important}.date-range-container.disabled.sc-igl-date-range{border:none;padding-left:0;padding-right:0}.date-range-input[data-state='disabled'].sc-igl-date-range{cursor:default}";
const IglDateRangeStyle0 = iglDateRangeCss;

const IglDateRange = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.dateSelectEvent = index.createEvent(this, "dateSelectEvent", 7);
        this.toast = index.createEvent(this, "toast", 7);
        this.totalNights = 0;
        this.fromDateStr = 'from';
        this.toDateStr = 'to';
        this.defaultData = undefined;
        this.disabled = false;
        this.minDate = undefined;
        this.dateLabel = undefined;
        this.maxDate = undefined;
        this.withDateDifference = true;
        this.variant = 'default';
        this.renderAgain = false;
    }
    componentWillLoad() {
        this.initializeDates();
    }
    handleDataChange(newValue, oldValue) {
        if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
            this.initializeDates();
        }
    }
    initializeDates() {
        let dt = new Date();
        dt.setHours(0, 0, 0, 0);
        dt.setDate(dt.getDate() + 1);
        if (this.defaultData) {
            if (this.defaultData.fromDate) {
                this.fromDate = new Date(this.defaultData.fromDate);
                this.fromDate.setHours(0, 0, 0, 0);
                this.fromDateStr = this.getFormattedDateString(this.fromDate);
            }
            if (this.defaultData.toDate) {
                this.toDate = new Date(this.defaultData.toDate);
                this.toDate.setHours(0, 0, 0, 0);
                this.toDateStr = this.getFormattedDateString(this.toDate);
            }
        }
        if (this.fromDate && this.toDate) {
            this.calculateTotalNights();
            // this.handleDateSelectEvent('selectedDateRange', {
            //   fromDate: this.fromDate.getTime(),
            //   toDate: this.toDate.getTime(),
            //   fromDateStr: this.fromDateStr,
            //   toDateStr: this.toDateStr,
            //   dateDifference: this.totalNights,
            // });
        }
        return [this.fromDateStr, this.toDateStr];
    }
    calculateTotalNights() {
        this.totalNights = booking.calculateDaysBetweenDates(moment.hooks(this.fromDate).format('YYYY-MM-DD'), moment.hooks(this.toDate).format('YYYY-MM-DD'));
    }
    getFormattedDateString(dt) {
        return dt.getDate() + ' ' + dt.toLocaleString('default', { month: 'short' }).toLowerCase() + ' ' + dt.getFullYear();
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
        this.renderAgain = !this.renderAgain;
    }
    render() {
        if (this.variant === 'booking') {
            return (index.h("div", { class: `p-0 m-0 date-range-container-cn` }, index.h("ir-date-range", { maxDate: this.maxDate, class: 'date-range-input', disabled: this.disabled, fromDate: this.fromDate, toDate: this.toDate, minDate: this.minDate, autoApply: true, "data-state": this.disabled ? 'disabled' : 'active', onDateChanged: evt => {
                    this.handleDateChange(evt);
                } }), index.h("div", { class: `d-flex align-items-center m-0  date-range-container ${this.disabled ? 'disabled' : ''}` }, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", class: "m-0 p-0", height: "14", width: "14", viewBox: "0 0 448 512" }, index.h("path", { fill: "currentColor", d: "M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" })), index.h("span", null, moment.hooks(this.fromDate).format('MMM DD, YYYY')), index.h("svg", { xmlns: "http://www.w3.org/2000/svg", class: "m-0 p-0", height: "14", width: "14", viewBox: "0 0 512 512" }, index.h("path", { fill: "currentColor", d: "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" })), index.h("span", null, moment.hooks(this.toDate).format('MMM DD, YYYY')), this.totalNights && index.h("span", { class: "m-0 p-0" }, this.totalNights + (this.totalNights > 1 ? ` ${locales_store.locales.entries.Lcz_Nights}` : ` ${locales_store.locales.entries.Lcz_Night}`)))));
        }
        return (index.h(index.Host, null, index.h("div", { class: "calendarPickerContainer form-control input-sm", "data-state": this.disabled ? 'disabled' : 'active' }, index.h("ir-date-picker", { maxDate: this.maxDate, class: 'date-range-input', disabled: this.disabled, minDate: this.fromDate, "data-state": this.disabled ? 'disabled' : 'active', onDateChanged: evt => {
                this.handleDateChange(evt);
            } }), index.h("div", { "data-state": this.disabled ? 'disabled' : 'active', class: "date-view" }, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "12", width: "10.5", viewBox: "0 0 448 512" }, index.h("path", { fill: "currentColor", d: "M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" })), index.h("ir-date-view", { showDateDifference: this.disabled, from_date: this.fromDate, to_date: this.toDate }))), this.withDateDifference && (index.h("span", null, this.totalNights && !this.disabled ? (index.h("span", { class: "iglRangeNights mx-1" }, this.totalNights + (this.totalNights > 1 ? ` ${locales_store.locales.entries.Lcz_Nights}` : ` ${locales_store.locales.entries.Lcz_Night}`))) : ('')))));
    }
    static get watchers() { return {
        "defaultData": ["handleDataChange"]
    }; }
};
IglDateRange.style = IglDateRangeStyle0;

const iglLegendsCss = ".sc-igl-legends-h{display:block}.legendHeader.sc-igl-legends{font-weight:500;letter-spacing:0.05rem;font-size:1.12rem;padding-top:5px;margin-bottom:1rem}.legendCloseBtn.sc-igl-legends{position:absolute;top:50%;right:0;cursor:pointer;font-size:1.75em;line-height:1em;padding:0.4rem;display:flex;align-items:center;justify-content:center;border-radius:3px;transform:translateY(-50%)}.legendCloseBtn.sc-igl-legends:hover{background-color:#f6f6f6}.stickyHeader.sc-igl-legends{position:-webkit-sticky;position:sticky;top:0;background-color:#ffffff;z-index:1}.legendRow.sc-igl-legends{position:relative;vertical-align:middle;margin-bottom:0.3rem}.legendRow.sc-igl-legends div.sc-igl-legends{display:inline-block;vertical-align:middle}.legend_skew.sc-igl-legends,.legend_skew-bordered.sc-igl-legends,.legend_skewsplit.sc-igl-legends{transform:skew(-30deg);width:15px;height:16px}.legend_skew-bordered.sc-igl-legends{border:1px solid black}.legend_circle.sc-igl-legends{border-radius:100%;width:10px;height:10px;margin:3px 3px 3px 2px}.legend_skewsplit.sc-igl-legends{border-right:2px solid #000000}.headerCell.sc-igl-legends .blueColor.sc-igl-legends{background-color:#31bef1}.greenColor.sc-igl-legends{background-color:#45b16d}.yellowColor.sc-igl-legends{background-color:#f4d552}.greyColor.sc-igl-legends{background-color:#a0a0a0}.redColor.sc-igl-legends{background-color:#f34752}.pinkColor.sc-igl-legends{background-color:#f9b4b7}.legendCalendar.sc-igl-legends .legendRow.sc-igl-legends{margin-bottom:0}.legendCalendar.sc-igl-legends .legendRow.sc-igl-legends:first-child .legendCal.sc-igl-legends{background-color:#ececec}.legendCalendar.sc-igl-legends .legendRow.sc-igl-legends div.sc-igl-legends{display:inline-block;vertical-align:middle;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.total-availability.sc-igl-legends{font-size:1em !important}.legendCalendar.sc-igl-legends .legendCal.sc-igl-legends{width:80px;height:25px;text-align:center;display:inline-grid !important;align-content:center;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.legendCalendar.sc-igl-legends .legendCal.sc-igl-legends .badge.sc-igl-legends{margin-top:0.2rem;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.legendCalendar.sc-igl-legends .legendCal.legendCal-h2.sc-igl-legends{height:40px;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.br-t.sc-igl-legends{border-top:1px solid #a0a0a0}.br-s.sc-igl-legends{border-left:1px solid #a0a0a0;border-right:1px solid #a0a0a0}.br-bt.sc-igl-legends{border-bottom:1px solid #a0a0a0}.highphenLegend.sc-igl-legends{font-size:0.9em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.highphenLegend.sc-igl-legends::before{width:12px;height:0.5px;content:' ';background-color:#000000;vertical-align:middle;display:inline-block;margin-left:5px;margin-right:5px;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.badge-pill.sc-igl-legends{padding:3px 1em;font-size:0.8em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.headerCell.sc-igl-legends{width:70px;display:flex;align-items:center;justify-content:center}.dayTitle.sc-igl-legends{font-size:0.8em;font-weight:600;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.dayCapacityPercent.sc-igl-legends{font-size:0.75em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}";
const IglLegendsStyle0 = iglLegendsCss;

const IglLegends = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.optionEvent = index.createEvent(this, "optionEvent", 7);
        this.legendData = undefined;
    }
    handleOptionEvent(key, data = '') {
        this.optionEvent.emit({ key, data });
    }
    render() {
        return (index.h(index.Host, { key: '2a1e0684822dea49c217256216dbcf9b2264f80a', class: "legendContainer pr-1 text-left" }, index.h("div", { key: '1b617815b48f37a82a8455ad06754972d1ea9e19', class: 'w-full' }, index.h("div", { key: 'e21640dc9f4afb1fbe3e26472ec7697f7283fd99', class: 'w-full' }, index.h("div", { key: 'e3d993440aa39a29102a38af52f6e1c3c9d72ccf', class: "stickyHeader pt-1 " }, index.h("p", { key: '26e18c0fd8d824dd1854738d89d8c59d87676759', class: "legendHeader" }, locales_store.locales.entries.Lcz_Legend), index.h("div", { key: 'e08530b5dcaae898e2d448050171511b9b332e38', class: "legendCloseBtn", onClick: () => this.handleOptionEvent('closeSideMenu') }, index.h("svg", { key: '2aee677a9d52412eb5cc311c357fc6855c3a11b8', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: '15c18c52207cfade4803903d49975008d6f53f94', fill: "#6b6f82", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" }))), index.h("hr", { key: '7db05b17853026cdc90ed5b6c2b19a548ac962f1' })), index.h("div", { key: '37df609766f8f429598b3618d861e8f0086950a3', class: "mt-2 pl-1" }, this.legendData.map(legendInfo => (index.h("div", { class: "legendRow " }, index.h("div", { class: `legend_${legendInfo.design} mr-1`, style: { backgroundColor: legendInfo.color } }), index.h("span", { class: "font-small-3" }, legendInfo.name))))), index.h("hr", { key: '7a42bde89052b35e422638eefbd989861b8b766d' }), index.h("div", { key: 'f3142fd212aaed7548aa5ff24d0c8da078943c1b', class: "mt-2" }, index.h("div", { key: '26fe39e1d6a727d0dccbf0303f2885575303c5bc', class: "legendCalendar" }, index.h("div", { key: '9e81091a3d23562d9408fae92b5c69fdbb26b666', class: "legendRow align-items-center" }, index.h("div", { key: '6ddf55a6ca0dc6288c32e3323856b5986cee0efe', class: "legendCal br-t br-s br-bt" }, index.h("strong", { key: '181ab9b3d6f1843dbe08c2f5dac654fea3f1a815' }, "MAR 2022")), index.h("div", { key: '8507b981e0376b67fea8c0bc4a7c497e5368caa2', class: "highphenLegend" }, locales_store.locales.entries.Lcz_MonthAndYear)), index.h("div", { key: '68247d49a25f5659b0ab6e9f813d495b887454d4', class: "legendRow" }, index.h("div", { key: '7d50f83cf0ca1eeb391c4f810d944fa3c3347962', class: "legendCal headerCell align-items-center br-s" }, index.h("span", { key: 'fb076e68070a55896964f3c1d4713608def55067', class: "badge badge-info  badge-pill" }, "3")), index.h("div", { key: 'c46b38bcd74286c4537786abaa1bd5ee0b9c7c77', class: "highphenLegend" }, index.h("div", { key: 'bcb5954c631abb933e287d35d1702a54315f2167' }, locales_store.locales.entries.Lcz_UnassignedUnits))), index.h("div", { key: '094445cfbdad3522325d2ccb72ce9215902e9dc4', class: "legendRow" }, index.h("div", { key: 'cca3a2befe313fff6ec55a7c59ac9453b5bfcd32', class: "legendCal dayTitle br-s" }, "Fri 18"), index.h("div", { key: 'e9a4945300db845da359a48e0f897f9ea0ec248d', class: "highphenLegend" }, locales_store.locales.entries.Lcz_Date)), index.h("div", { key: 'bfaad014333503fe33c98743f4af09116e949c1f', class: "legendRow" }, index.h("div", { key: '9cb1d50eb87120970a7db14df75170b1b28601a0', class: "legendCal br-s br-bt dayCapacityPercent" }, "15%"), index.h("div", { key: '8779180cf3a610afdf9b06bea8cb0576f19510ae', class: "highphenLegend" }, locales_store.locales.entries.Lcz_Occupancy)), index.h("div", { key: '271a9700f90d5cfaf6f69eb661adcadcea01ea90', class: "legendRow" }, index.h("div", { key: 'e698daa8a588d97fd59be6f998258b2b934ace3f', class: "legendCal br-s br-bt  font-weight-bold total-availability" }, "20"), index.h("div", { key: '6e134af5ad03117b1b356054fccf68d27dcf9e2a', class: "highphenLegend" }, locales_store.locales.entries.Lcz_TotalAvailability))))))));
    }
};
IglLegends.style = IglLegendsStyle0;

const iglPropertyBookedByCss = ".sc-igl-property-booked-by-h{display:block}.row.sc-igl-property-booked-by{padding:0 0 0 15px;margin:0}.bookedByEmailContainer.sc-igl-property-booked-by{flex:auto;max-width:350px}.bookedDetailsForm.sc-igl-property-booked-by label.sc-igl-property-booked-by{min-width:125px;max-width:125px}.bookedDetailsForm.sc-igl-property-booked-by .form-group.sc-igl-property-booked-by{margin-bottom:10px !important}.bookedDetailsForm.sc-igl-property-booked-by .checkBoxContainer.sc-igl-property-booked-by input.sc-igl-property-booked-by{height:1.2rem !important;width:30px}.controlContainer.sc-igl-property-booked-by textarea.sc-igl-property-booked-by{height:60px !important}.margin3.sc-igl-property-booked-by{margin-bottom:5px !important}@media (min-width: 768px){.bookedByEmailContainer.sc-igl-property-booked-by{margin-left:37px}}";
const IglPropertyBookedByStyle0 = iglPropertyBookedByCss;

const IglPropertyBookedBy = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.dataUpdateEvent = index.createEvent(this, "dataUpdateEvent", 7);
        this.bookingService = new booking_service.BookingService();
        this.arrivalTimeList = [];
        this.expiryMonths = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        this.expiryYears = [];
        this.currentMonth = '01';
        this.language = undefined;
        this.showPaymentDetails = false;
        this.defaultData = undefined;
        this.countryNodeList = [];
        this.propertyId = undefined;
        this.isButtonPressed = false;
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
            if (utils.z.string().email().safeParse(email).success) {
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
        booking_service.modifyBookingStore('checkout_guest', Object.assign(Object.assign({}, ((_a = booking_service.booking_store.checkout_guest) !== null && _a !== void 0 ? _a : {})), props));
    }
    handleComboboxChange(e) {
        var _a;
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { key, data } = e.detail;
        console.log(key, data);
        if (key === 'blur') {
            if (utils.z.string().email().safeParse(data).success) {
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
        return (index.h(index.Host, { key: '4dd09ccd480a0b60f5b40de64d19350813d5fb33' }, index.h("div", { key: '070afdb77f79b7187f9a7ca2b4488700e96699f0', class: "text-left mt-3" }, index.h("div", { key: '6317e44e878251bb770103a33ed96966cbbf34c4', class: "form-group d-flex flex-column flex-md-row align-items-md-center text-left " }, index.h("label", { key: '7ede7428fcc00a93b5fbb1e26640a34db68f5f2b', class: "p-0 m-0 label-control mr-1 font-weight-bold" }, locales_store.locales.entries.Lcz_BookedBy), index.h("div", { key: '78f9f6233ed4f1c77970af0a8955da3308282cc5', class: "bookedByEmailContainer mt-1 mt-md-0 d-flex align-items-center" }, index.h("ir-autocomplete", { key: '4cd92672614d6b77f0ca1bd6a44c505dcac91008', onComboboxValue: this.handleComboboxChange.bind(this), propertyId: this.propertyId, type: "text", value: this.bookedByData.email, required: true, class: 'flex-fill', placeholder: locales_store.locales.entries.Lcz_FindEmailAddress, onInputCleared: () => this.clearEvent(), danger_border: this.isButtonPressed && this.bookedByData.email !== '' && utils.validateEmail(this.bookedByData.email) }), index.h("ir-tooltip", { key: '5c21a26210087f65573f5ef05f19c3683ae32ccc', class: 'ml-1', message: "Leave empty if email is unavailable" })))), index.h("div", { key: '1620e03ff769c09eb99ba82f15ae54e3be4a12b2', class: "bookedDetailsForm text-left mt-2 font-small-3 " }, index.h("div", { key: '4734ddc996cc52d998755151f60420b1be1375a3', class: "d-flex flex-column flex-md-row  justify-content-md-between " }, index.h("div", { key: '2869e821e3847f4689eee05ae8d89b3d2b919b09', class: "p-0 flex-fill " }, index.h("div", { key: 'b048021545f7d1cd4588b8cfba63ba428b720dc1', class: "form-group d-flex flex-column flex-md-row align-items-md-center p-0 flex-fill " }, index.h("label", { key: 'd3e763afa801c985a553cd174cc8ac6a71e37936', class: "p-0 m-0 margin3" }, locales_store.locales.entries.Lcz_FirstName), index.h("div", { key: '5d1753e699a78ac891d3085ff897d171cd55a74f', class: "p-0 m-0  controlContainer flex-fill  " }, index.h("input", { key: 'e2f310d9a1a46184ac390448258b1e94771e01cb', class: `form-control flex-fill ${this.isButtonPressed && this.bookedByData.firstName === '' && 'border-danger'}`, type: "text", placeholder: locales_store.locales.entries.Lcz_FirstName, id: v4.v4(), value: this.bookedByData.firstName, onInput: event => {
                this.updateGuest({ first_name: event.target.value });
                this.handleDataChange('firstName', event);
            }, required: true }))), index.h("div", { key: 'e55f5dea45e360941a1371c63a26ab4cf80febfc', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, index.h("label", { key: '6a306fb8b9a76d745b77c56129f1568be1035ac1', class: "p-0 m-0 margin3" }, locales_store.locales.entries.Lcz_LastName), index.h("div", { key: '9597438c7f30aba70b3ea391cd841ae986850f0d', class: "p-0 m-0  controlContainer flex-fill" }, index.h("input", { key: '952046ef031f70b77d232695a98cf0d31f5f2467', class: `form-control ${this.isButtonPressed && this.bookedByData.lastName === '' && 'border-danger'}`, type: "text", placeholder: locales_store.locales.entries.Lcz_LastName, id: v4.v4(), value: this.bookedByData.lastName, onInput: event => this.handleDataChange('lastName', event) }))), index.h("div", { key: '712da329b2762a7fa46fc4697473fc524fda85ba', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, index.h("label", { key: '22448c546fab98e31b06c19a3ace6b90a054b9ef', class: "p-0 m-0 margin3" }, locales_store.locales.entries.Lcz_Country), index.h("div", { key: '67f03efe07f99983c3495b970db5f35da4887870', class: "p-0 m-0  controlContainer flex-fill" }, index.h("select", { key: '095a5d30871099b950bcd1b56c0488841b756a8d', class: `form-control input-sm pr-0`, id: v4.v4(), onChange: event => this.handleDataChange('countryId', event) }, index.h("option", { key: '19460a3a586ceb0ebb2e398597c2ab1d676d5bab', value: "", selected: this.bookedByData.countryId === '' }, locales_store.locales.entries.Lcz_Select), this.countryNodeList.map(countryNode => (index.h("option", { value: countryNode.id, selected: this.bookedByData.countryId === countryNode.id }, countryNode.name)))))), index.h("div", { key: 'e97d087c2da97b84e0126fdaf487e4ee149d8fca', class: "form-group p-0 d-flex flex-column flex-md-row align-items-md-center" }, index.h("label", { key: 'e13f2998a76a9f847609bd4c349a70412f1958e0', class: "p-0 m-0 margin3" }, locales_store.locales.entries.Lcz_MobilePhone), index.h("div", { key: '6bc5c2c9f09bfd86397921c4cb2c80aa25c4a87d', class: "p-0 m-0 controlContainer flex-fill" }, index.h("ir-phone-input", { key: '4b87f97de9743190032f1157389d32eb736b6d1b', language: this.language,
            // label={locales.entries.Lcz_MobilePhone}
            value: this.bookedByData.contactNumber, phone_prefix: this.bookedByData.isdCode, default_country: this.bookedByData.countryId, onTextChange: e => {
                this.handleDataChange('isdCode', { target: { value: e.detail.phone_prefix } });
                this.handleDataChange('contactNumber', { target: { value: e.detail.mobile } });
            } }))), index.h("div", { key: 'fed6284dd0c46f9ee9b3050535e41f762dd50ad3', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, index.h("label", { key: 'd913cba16daf39f7cafce31233041721b11bef39', class: "p-0 m-0 margin3" }, locales_store.locales.entries.Lcz_YourArrivalTime), index.h("div", { key: '414c4d8eb841ce72e64352486630168f0bb8611c', class: "p-0 m-0  controlContainer flex-fill" }, index.h("select", { key: '40c6943a849dee3075d8ec7806dad4f841ae1e06', class: `form-control input-sm pr-0 ${this.isButtonPressed && this.bookedByData.selectedArrivalTime.code === '' && 'border-danger'}`, id: v4.v4(), onChange: event => this.handleDataChange('selectedArrivalTime', event) }, this.arrivalTimeList.map(time => (index.h("option", { value: time.CODE_NAME, selected: this.bookedByData.selectedArrivalTime.code === time.CODE_NAME }, time.CODE_VALUE_EN))))))), index.h("div", { key: '47a43af0222c34d470967a6fd8c7bafd82010967', class: "p-0 flex-fill  ml-md-3" }, index.h("div", { key: '2d53213f6a7f5a2cfa789a9e1f2811719f6d99df', class: "  p-0 d-flex flex-column flex-md-row align-items-md-center " }, index.h("label", { key: '1f3e44701cc963be493febc29302cc44acea5d14', class: "p-0 m-0 margin3" }, locales_store.locales.entries.Lcz_AnyMessageForUs), index.h("div", { key: '078dd8a5a9260fe19a5f24ac35b2c877dd225d0b', class: "p-0 m-0  controlContainer flex-fill " }, index.h("textarea", { key: 'e064c0fd6fb4727c1f6a99f00baef22dabcece16', id: v4.v4(), rows: 4, class: "form-control ", name: "message", value: this.bookedByData.message, onInput: event => this.handleDataChange('message', event) }))), this.showPaymentDetails && (index.h(index.Fragment, { key: 'c9e1297b207ff1eead8e56e4a08cdccc771c3ae6' }, index.h("div", { key: '3a06e17f7880ea51b9d913d120ba5119abeead9f', class: "form-group mt-md-1  p-0 d-flex flex-column flex-md-row align-items-md-center" }, index.h("label", { key: 'f8626d6cf82cb425de03b41e37ab2b74d48d0802', class: "p-0 m-0 margin3" }, locales_store.locales.entries.Lcz_CardNumber), index.h("div", { key: '6281f0ee5252633ce2f26e6f2009c264cab1d1dd', class: "p-0 m-0  controlContainer flex-fill" }, index.h("input", { key: 'e796ab9c33fe952627c1e61b171956b4baad1973', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4.v4(), value: this.bookedByData.cardNumber, onInput: event => this.handleNumberInput('cardNumber', event) }))), index.h("div", { key: '5f78ca4ae5d5dd1ee56c8235c8b1f6bd0ddd756c', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, index.h("label", { key: '429d78c11237ce5e61cf4d0e695cbef6c0a3e1bd', class: "p-0 m-0 margin3" }, locales_store.locales.entries.Lcz_CardHolderName), index.h("div", { key: '6c25f189d193ddf624ba50e7eeee75ea67d388bc', class: "p-0 m-0  controlContainer flex-fill" }, index.h("input", { key: 'f9565ca09aac535dc51b11a1ed624a1960f9e6c3', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4.v4(), value: this.bookedByData.cardHolderName, onInput: event => this.handleDataChange('cardHolderName', event) }))), index.h("div", { key: '84d2c9dc5fbee442b6288160fa92a258442b7def', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, index.h("label", { key: '15f0b88d8b9ce03385999f566ba21c5a9907af56', class: "p-0 m-0 margin3" }, locales_store.locales.entries.Lcz_ExpiryDate), index.h("div", { key: '07c64fa0b81fcdb9cc73d4bf0e789a5d3948a438', class: "p-0 m-0 row  controlContainer flex-fill" }, index.h("div", { key: '8e58d9ff16ca1291e09f3ec5eed60a3845714fdf', class: "p-0 m-0" }, index.h("select", { key: '65d99e517864cd5da11ef8585b5e8106caf387b3', class: "form-control input-sm pr-0", id: v4.v4(), onChange: event => this.handleDataChange('expiryMonth', event) }, this.expiryMonths.map(month => (index.h("option", { value: month, selected: month === this.bookedByData.expiryMonth }, month))))), index.h("div", { key: '7b075064159f1fe27530ac23495184ed38479acf', class: "p-0 m-0 ml-1" }, index.h("select", { key: '8c58add107af01920a9ad7a1415b0c760543b43a', class: "form-control input-sm pr-0", id: v4.v4(), onChange: event => this.handleDataChange('expiryYear', event) }, this.expiryYears.map((year, index$1) => (index.h("option", { value: year, selected: index$1 === this.bookedByData.expiryYear }, year))))))))), index.h("div", { key: 'eda253df0692faf1e6e53482c77d977d2c812af7', class: "form-group mt-1 p-0 d-flex flex-row align-items-center" }, index.h("label", { key: '841c4f4a7e7cfa66b6bd16072c0d674888e24a85', class: "p-0 m-0", htmlFor: 'emailTheGuestId' }, locales_store.locales.entries.Lcz_EmailTheGuest), index.h("div", { key: '100bbe2e59838eaac5d577eca81bf18d0aabef9d', class: "p-0 m-0  controlContainer flex-fill checkBoxContainer" }, index.h("input", { key: '25f2ce9a4e28b4319f7a254054685629431ebb3f', class: "form-control", type: "checkbox", checked: this.bookedByData.emailGuest, id: 'emailTheGuestId', onChange: event => this.handleDataChange('emailGuest', event) }))))))));
    }
};
IglPropertyBookedBy.style = IglPropertyBookedByStyle0;

const iglRatePlanCss = ".sc-igl-rate-plan-h{display:block;margin-bottom:0.5rem}.currency.sc-igl-rate-plan{display:block;position:absolute;margin:0;padding:0;height:auto;left:10px}.rate-input.sc-igl-rate-plan{font-size:14px;line-height:0;padding:0;height:0;border-left:0}.rate-input-container.sc-igl-rate-plan{display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;flex:1}.new-currency.sc-igl-rate-plan{color:#3b4781;border:1px solid #cacfe7;font-size:0.975rem;height:2rem;background:white;border-right:0;border-top-right-radius:0;border-bottom-right-radius:0;transition:border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}.input-group-prepend.sc-igl-rate-plan span[data-state='focus'].sc-igl-rate-plan{border-color:var(--blue)}.input-group-prepend.sc-igl-rate-plan span[data-disabled].sc-igl-rate-plan{background-color:#eceff1;border-color:rgba(118, 118, 118, 0.3)}.non-ref-span.sc-igl-rate-plan{font-size:12px;color:var(--green)}@media only screen and (min-width: 1200px){.rateplan-name-container.sc-igl-rate-plan{width:40%}.rateplan-container.sc-igl-rate-plan{width:40%}}@media only screen and (min-width: 991px){.max-w-300.sc-igl-rate-plan{max-width:200px}.rate-input-container.sc-igl-rate-plan{max-width:150px}}@media only screen and (min-width: 991px) and (max-width: 1300px){.rateplan-name-container.sc-igl-rate-plan{width:20%}}@media only screen and (max-width: 768px){.booking-btn.sc-igl-rate-plan{width:100%}}.total-nights-container.sc-igl-rate-plan{width:max-content}.nightBorder.sc-igl-rate-plan{border-left-width:0;border-top-right-radius:3px !important;border-bottom-right-radius:3px !important}";
const IglRatePlanStyle0 = iglRatePlanCss;

const IglRatePlan = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.gotoSplitPageTwoEvent = index.createEvent(this, "gotoSplitPageTwoEvent", 7);
        this.ratePlan = undefined;
        this.roomTypeId = undefined;
        this.ratePricingMode = [];
        this.currency = undefined;
        this.shouldBeDisabled = undefined;
        this.bookingType = 'PLUS_BOOKING';
        this.isBookDisabled = false;
        this.visibleInventory = undefined;
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
        const currentSelections = booking_service.booking_store.ratePlanSelections;
        booking_service.booking_store.ratePlanSelections = Object.assign(Object.assign({}, currentSelections), { [roomTypeId]: Object.assign(Object.assign({}, currentSelections[roomTypeId]), { [ratePlan.id]: Object.assign(Object.assign({}, currentSelections[roomTypeId][ratePlan.id]), props) }) });
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
        this.handleDataChange('totalRooms', { target: { value: '1' } });
        this.gotoSplitPageTwoEvent.emit({ key: 'gotoSplitPage', data: '' });
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
        const amount = view_mode === '001' ? selected_variation === null || selected_variation === void 0 ? void 0 : selected_variation.discounted_gross_amount : selected_variation === null || selected_variation === void 0 ? void 0 : selected_variation.amount_per_night_gross;
        return (amount === null || amount === void 0 ? void 0 : amount.toString()) || '';
    }
    // Format variation for display
    formatVariation(variation) {
        var _a, _b, _c, _d;
        if (!variation)
            return '';
        const adults = `${variation.adult_nbr} ${variation.adult_nbr === 1 ? (_a = locales_store.locales.entries['Lcz_Adult']) === null || _a === void 0 ? void 0 : _a.toLowerCase() : (_b = locales_store.locales.entries['Lcz_Adults']) === null || _b === void 0 ? void 0 : _b.toLowerCase()}`;
        const children = variation.child_nbr > 0
            ? `${variation.child_nbr} ${variation.child_nbr > 1 ? (_c = locales_store.locales.entries['Lcz_Children']) === null || _c === void 0 ? void 0 : _c.toLowerCase() : (_d = locales_store.locales.entries['Lcz_Child']) === null || _d === void 0 ? void 0 : _d.toLowerCase()}`
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
        booking_service.updateRoomParams({
            params: { selected_variation: selectedVariation },
            ratePlanId: ratePlan.id,
            roomTypeId,
        });
    }
    // Reset reserved rooms in the booking store
    resetReserved() {
        const updatedSelections = Object.entries(booking_service.booking_store.ratePlanSelections).reduce((acc, [roomTypeId, ratePlans]) => {
            acc[roomTypeId] = Object.entries(ratePlans).reduce((rpAcc, [ratePlanId, ratePlan]) => {
                rpAcc[ratePlanId] = Object.assign(Object.assign({}, ratePlan), { reserved: 0 });
                return rpAcc;
            }, {});
            return acc;
        }, {});
        booking_service.booking_store.ratePlanSelections = updatedSelections;
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
        return (index.h(index.Host, { key: '5a00d42fd07d59011a155848cc366b3bb93afb14' }, index.h("div", { key: '36a6699856237d9b717c927088dd4ff4f807df99', class: `d-flex m-0 p-0 ${isAvailableToBook ? 'flex-column flex-lg-row align-items-lg-center justify-content-lg-between' : 'align-items-center justify-content-between'}` }, index.h("div", { key: '22779a94227719a24f77e69d263949a20e79e638', class: "rateplan-name-container d-flex align-items-center", style: { gap: '0.5rem' } }, bookingType === 'BAR_BOOKING' ? (index.h(index.Fragment, null, index.h("span", { class: "font-weight-bold" }, ratePlan.name.split('/')[0]), index.h("span", null, "/", ratePlan.name.split('/')[1]))) : (index.h("span", null, ratePlan.short_name, " ", ratePlan.is_non_refundable && index.h("span", { class: "non-ref-span" }, "Non Refundable"))), isAvailableToBook && index.h("ir-tooltip", { key: '9ab57bc12a04f02252e9dbfcbe41bf0b88c9cbb9', message: this.getTooltipMessages() })), isAvailableToBook ? (index.h("div", { class: "d-md-flex justify-content-md-end align-items-md-center flex-fill rateplan-container" }, index.h("div", { class: "mt-1 mt-md-0 flex-fill max-w-300" }, index.h("fieldset", { class: "position-relative" }, index.h("select", { disabled: disableForm, class: "form-control input-sm", id: v4.v4(), onChange: evt => this.handleDataChange('adult_child_offering', evt) }, formattedVariations === null || formattedVariations === void 0 ? void 0 : formattedVariations.map(variation => (index.h("option", { value: variation, selected: this.formatVariation(selectedVariation) === variation }, variation)))))), index.h("div", { class: "m-0 p-0 mt-1 mt-md-0 d-flex justify-content-between align-items-md-center ml-md-1" }, index.h("div", { class: "d-flex m-0 p-0 rate-total-night-view mt-0" }, index.h("ir-price-input", { disabled: disableForm, onTextChange: e => this.updateRateplanSelection({
                is_amount_modified: true,
                rp_amount: Number(e.detail),
            }), "aria-label": `${(_c = (_b = this.visibleInventory) === null || _b === void 0 ? void 0 : _b.roomtype) === null || _c === void 0 ? void 0 : _c.name} ${this.ratePlan.short_name}'s rate`, "aria-describedby": `${this.ratePlan.short_name}'s rate`, class: "ir-br-input-none", currency: currency.symbol, value: this.renderRate(), placeholder: locales_store.locales.entries.Lcz_Rate || 'Rate' }), index.h("fieldset", { class: "position-relative m-0 total-nights-container p-0" }, index.h("select", { disabled: disableForm, class: "form-control input-sm m-0 nightBorder rounded-0 py-0", id: v4.v4(), onChange: evt => this.updateRateplanSelection({
                view_mode: evt.target.value,
            }) }, ratePricingMode.map(data => (index.h("option", { value: data.CODE_NAME, selected: (visibleInventory === null || visibleInventory === void 0 ? void 0 : visibleInventory.view_mode) === data.CODE_NAME }, data.CODE_VALUE_EN)))))), (bookingType === 'PLUS_BOOKING' || bookingType === 'ADD_ROOM') && (index.h("div", { class: "flex-fill mt-lg-0 ml-1 m-0 mt-md-0 p-0" }, index.h("fieldset", { class: "position-relative" }, index.h("select", { disabled: visibleInventory.visibleInventory === 0, class: "form-control input-sm", id: v4.v4(), onChange: evt => this.handleDataChange('totalRooms', evt) }, Array.from({ length: (visibleInventory.visibleInventory || 0) + 1 }, (_, i) => i).map(i => (index.h("option", { value: i, selected: visibleInventory.reserved === i }, i)))))))), bookingType === 'EDIT_BOOKING' && (index.h(index.Fragment, null, index.h("div", { class: "m-0 p-0 mt-lg-0 ml-md-1 mt-md-1 d-none d-md-block" }, index.h("fieldset", { class: "position-relative" }, index.h("input", { disabled: disableForm, type: "radio", name: "ratePlanGroup", value: "1", onChange: () => {
                this.resetReserved();
                booking_service.reserveRooms({
                    roomTypeId: this.roomTypeId,
                    ratePlanId: this.ratePlan.id,
                    rooms: 1,
                    guest: [
                        {
                            name: booking_service.booking_store.guest.name,
                            unit: null,
                            bed_preference: this.visibleInventory.roomtype.is_bed_configuration_enabled ? booking_service.booking_store.guest.bed_preference : null,
                            infant_nbr: this.visibleInventory.selected_variation.child_nbr > 0 ? booking_service.booking_store.guest.infant_nbr : null,
                        },
                    ],
                });
            }, checked: visibleInventory.reserved === 1 }))), index.h("button", { disabled: disableForm, type: "button", class: "btn btn-primary booking-btn mt-lg-0 btn-sm ml-md-1 mt-1 d-md-none", onClick: () => {
                this.resetReserved();
                booking_service.reserveRooms({
                    roomTypeId: this.roomTypeId,
                    ratePlanId: this.ratePlan.id,
                    rooms: 1,
                    guest: [
                        {
                            name: booking_service.booking_store.guest.name,
                            unit: null,
                            bed_preference: this.visibleInventory.roomtype.is_bed_configuration_enabled ? booking_service.booking_store.guest.bed_preference : null,
                            infant_nbr: this.visibleInventory.selected_variation.child_nbr > 0 ? booking_service.booking_store.guest.infant_nbr : null,
                        },
                    ],
                });
                this.bookProperty();
            } }, visibleInventory.reserved === 1 ? locales_store.locales.entries.Lcz_Current : locales_store.locales.entries.Lcz_Select))), (bookingType === 'BAR_BOOKING' || bookingType === 'SPLIT_BOOKING') && (index.h("button", { disabled: disableForm || (bookingType === 'SPLIT_BOOKING' && this.isBookDisabled), type: "button", class: "btn btn-primary booking-btn mt-lg-0 btn-sm ml-md-1 mt-1", onClick: () => this.bookProperty() }, locales_store.locales.entries.Lcz_Book)))) : (index.h("p", { class: "text-danger m-0 p-0" }, locales_store.locales.entries['Lcz_NotAvailable'] || 'Not available')))));
    }
};
IglRatePlan.style = IglRatePlanStyle0;

const iglRoomTypeCss = ".sc-igl-room-type-h{display:block}.margin-bottom-8.sc-igl-room-type{margin-bottom:8px !important}";
const IglRoomTypeStyle0 = iglRoomTypeCss;

const IglRoomType = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.dataUpdateEvent = index.createEvent(this, "dataUpdateEvent", 7);
        this.validBookingTypes = ['PLUS_BOOKING', 'ADD_ROOM', 'EDIT_BOOKING', 'SPLIT_BOOKING'];
        this.roomType = undefined;
        this.bookingType = 'PLUS_BOOKING';
        this.dateDifference = undefined;
        this.ratePricingMode = [];
        this.roomInfoId = null;
        this.currency = undefined;
        this.initialRoomIds = undefined;
        this.isBookDisabled = undefined;
        this.selectedRooms = [];
        this.totalRooms = undefined;
        this.roomsDistributions = [];
    }
    render() {
        var _a, _b;
        const isValidBookingType = this.validBookingTypes.includes(this.bookingType);
        return (index.h(index.Host, { key: '742e5d22de4746f2c334c5929f1e528ba7ad6e5a' }, isValidBookingType && ((_a = this.roomType.rateplans) === null || _a === void 0 ? void 0 : _a.length) > 0 && index.h("div", { key: 'beac5558ecaef5e07b533a5e270a6cfedc5048ce', class: "font-weight-bold font-medium-1 margin-bottom-8 " }, this.roomType.name), (_b = this.roomType.rateplans) === null || _b === void 0 ? void 0 :
            _b.map(ratePlan => {
                if (!!ratePlan.variations) {
                    let shouldBeDisabled = this.roomInfoId && this.roomInfoId === this.roomType.id;
                    // let roomId = -1;
                    // if (shouldBeDisabled && this.initialRoomIds) {
                    //   roomId = this.initialRoomIds.roomId;
                    // }
                    const visibleInventory = booking_service.getVisibleInventory(this.roomType.id, ratePlan.id);
                    console.log(visibleInventory);
                    return (index.h("igl-rate-plan", {
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

const iglTbaBookingViewCss = ".sc-igl-tba-booking-view-h{display:block}.guestTitle.sc-igl-tba-booking-view{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:2px;margin-bottom:5px;margin-top:5px;padding-left:5px;padding-right:5px}.guestTitle.selectedOrder.sc-igl-tba-booking-view{background-color:#f9f9c9}.pointer.sc-igl-tba-booking-view{cursor:pointer}hr.sc-igl-tba-booking-view{margin-top:8px;margin-bottom:0px}.bookingContainer.sc-igl-tba-booking-view{background-color:#ececec}.actionsContainer.sc-igl-tba-booking-view{display:flex;align-items:center;padding:5px !important;width:100%;gap:16px}.room-select.sc-igl-tba-booking-view{flex:1}.selectContainer.sc-igl-tba-booking-view{width:195px;margin-right:8px}.buttonsContainer.sc-igl-tba-booking-view{box-sizing:border-box}.btn-secondary.sc-igl-tba-booking-view{margin-right:8px !important}";
const IglTbaBookingViewStyle0 = iglTbaBookingViewCss;

const IglTbaBookingView = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.highlightToBeAssignedBookingEvent = index.createEvent(this, "highlightToBeAssignedBookingEvent", 7);
        this.addToBeAssignedEvent = index.createEvent(this, "addToBeAssignedEvent", 7);
        this.scrollPageToRoom = index.createEvent(this, "scrollPageToRoom", 7);
        this.assignRoomEvent = index.createEvent(this, "assignRoomEvent", 7);
        this.highlightSection = false;
        this.allRoomsList = [];
        this.toBeAssignedService = new ToBeAssignedService();
        this.calendarData = undefined;
        this.selectedDate = undefined;
        this.eventData = {};
        this.categoriesData = {};
        this.categoryId = undefined;
        this.categoryIndex = undefined;
        this.eventIndex = undefined;
        this.renderAgain = false;
        this.selectedRoom = -1;
    }
    onSelectRoom(evt) {
        if (evt.stopImmediatePropagation) {
            evt.stopImmediatePropagation();
            evt.stopPropagation();
        }
        this.selectedRoom = parseInt(evt.target.value);
    }
    // componentDidLoad(){
    //   this.initializeToolTips();
    // }
    componentShouldUpdate(newValue, oldValue, propName) {
        if (propName === 'selectedDate' && newValue !== oldValue) {
            this.highlightSection = false;
            this.selectedRoom = -1;
            return true; // Prevent update for a specific prop value
        }
        else if (propName === 'eventData' && newValue !== oldValue) {
            this.selectedRoom = -1;
            return true;
        }
        return true;
    }
    componentWillLoad() {
        if (this.categoryIndex === 0 && this.eventIndex === 0) {
            setTimeout(() => {
                this.handleHighlightAvailability();
            }, 100);
        }
    }
    async handleAssignUnit(event) {
        try {
            event.stopImmediatePropagation();
            event.stopPropagation();
            if (this.selectedRoom) {
                await this.toBeAssignedService.assignUnit(this.eventData.BOOKING_NUMBER, this.eventData.ID, this.selectedRoom);
                // //let assignEvent = transformNewBooking(result);
                // const newEvent = { ...this.eventData, ID: this.eventData.ID };
                // //this.calendarData.bookingEvents.push(newEvent);
                // //console.log(newEvent);
                // this.addToBeAssignedEvent.emit({
                //   key: 'tobeAssignedEvents',
                //   //data: [assignEvent[0]],
                // });
                //this.assignRoomEvent.emit({ key: 'assignRoom', data: newEvent });
                let assignEvent = Object.assign(Object.assign({}, this.eventData), { PR_ID: this.selectedRoom });
                this.addToBeAssignedEvent.emit({
                    key: 'tobeAssignedEvents',
                    data: [assignEvent],
                });
                this.assignRoomEvent.emit({ key: 'assignRoom', data: assignEvent });
            }
        }
        catch (error) {
            //   toastr.error(error);
        }
    }
    handleHighlightAvailability() {
        this.highlightToBeAssignedBookingEvent.emit({
            key: 'highlightBookingId',
            data: { bookingId: this.eventData.ID, fromDate: this.eventData.FROM_DATE },
        });
        if (!this.selectedDate) {
            return;
        }
        let filteredEvents = [];
        let allRoomsList = [];
        filteredEvents = this.eventData.availableRooms.map(room => {
            allRoomsList.push({
                calendar_cell: null,
                id: room.PR_ID,
                name: room.roomName,
            });
            return Object.assign(Object.assign({}, room), { defaultDateRange: this.eventData.defaultDateRange, identifier: this.eventData.identifier });
        });
        this.allRoomsList = allRoomsList;
        this.addToBeAssignedEvent.emit({
            key: 'tobeAssignedEvents',
            data: filteredEvents,
        });
        this.scrollPageToRoom.emit({
            key: 'scrollPageToRoom',
            id: this.categoryId,
            refClass: 'category_' + this.categoryId,
        });
        // ID: "NEW_TEMP_EVENT",
        // STATUS: "PENDING_CONFIRMATION"
        this.renderView();
    }
    handleCloseAssignment(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.highlightSection = false;
        this.highlightToBeAssignedBookingEvent.emit({
            key: 'highlightBookingId',
            data: { bookingId: '----' },
        });
        this.onSelectRoom({ target: { value: '' } });
        this.selectedRoom = -1;
        this.addToBeAssignedEvent.emit({ key: 'tobeAssignedEvents', data: [] });
        this.renderView();
    }
    highlightBookingEvent(event) {
        let data = event.detail.data;
        if (data.bookingId != this.eventData.ID) {
            this.highlightSection = false;
            this.selectedRoom = -1;
            this.renderView();
        }
        else {
            this.highlightSection = true;
            this.renderView();
        }
    }
    renderView() {
        this.renderAgain = !this.renderAgain;
        // this.initializeToolTips();
    }
    render() {
        return (index.h(index.Host, { key: '7a1116e919d514d370d136662b96c3e8b523ec3b' }, index.h("div", { key: '1401953c331541b2d00f66d3c8d79ec35a940bc1', class: "bookingContainer", onClick: () => this.handleHighlightAvailability() }, index.h("div", { key: '514d3baa9dcbbf0d69ab87d8d9e594559200f817', class: `guestTitle ${this.highlightSection ? 'selectedOrder' : ''} pointer font-small-3`, "data-toggle": "tooltip", "data-placement": "top", "data-original-title": "Click to assign unit" }, `Book# ${this.eventData.BOOKING_NUMBER} - ${this.eventData.NAME}`), index.h("div", { key: '68824a86364170567615a7ddfe87c353e70f0d33', class: "row m-0 p-0 actionsContainer" }, index.h("select", { key: '06119bd90afc3e411ec689fac725d66bc87eaac1', class: "form-control input-sm room-select", id: v4.v4(), onChange: evt => this.onSelectRoom(evt) }, index.h("option", { key: 'c3b2135429f65ae15c6e6adf9c03c84ffcc29c16', value: "", selected: this.selectedRoom == -1 }, locales_store.locales.entries.Lcz_AssignUnit), this.allRoomsList.map(room => (index.h("option", { value: room.id, selected: this.selectedRoom == room.id }, room.name)))), this.highlightSection ? (index.h("div", { class: "d-flex buttonsContainer" }, index.h("button", { type: "button", class: "btn btn-secondary btn-sm", onClick: evt => this.handleCloseAssignment(evt) }, index.h("svg", { class: "m-0 p-0", xmlns: "http://www.w3.org/2000/svg", height: "12", width: "9", viewBox: "0 0 384 512" }, index.h("path", { fill: "currentColor", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" }))), index.h("ir-button", { isLoading: irInterceptor_store.isRequestPending('/Assign_Exposed_Room'), size: "sm", text: locales_store.locales.entries.Lcz_Assign, onClickHandler: evt => this.handleAssignUnit(evt), btn_disabled: this.selectedRoom === -1 }))) : null), index.h("hr", { key: '8694270935d27233334992664320d502fdd89137' }))));
    }
};
IglTbaBookingView.style = IglTbaBookingViewStyle0;

const iglTbaCategoryViewCss = ".sc-igl-tba-category-view-h{display:block}";
const IglTbaCategoryViewStyle0 = iglTbaCategoryViewCss;

const IglTbaCategoryView = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.assignUnitEvent = index.createEvent(this, "assignUnitEvent", 7);
        this.calendarData = undefined;
        this.selectedDate = undefined;
        this.categoriesData = {};
        this.categoryId = undefined;
        this.eventDatas = undefined;
        this.categoryIndex = undefined;
        this.renderAgain = false;
    }
    // private localEventDatas;
    componentWillLoad() {
        // this.localEventDatas = this.eventDatas;
    }
    handleAssignRoomEvent(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const opt = event.detail;
        this.eventDatas = this.eventDatas.filter((eventData) => eventData.ID != opt.data.ID);
        this.calendarData.bookingEvents.push(opt.data);
        this.assignUnitEvent.emit({
            key: "assignUnit",
            data: {
                RT_ID: this.categoryId,
                selectedDate: this.selectedDate,
                assignEvent: opt.data,
                calendarData: this.calendarData,
            },
        });
        // if(this.localEventDatas.length){
        this.renderView();
        // }
    }
    getEventView(categoryId, eventDatas) {
        return eventDatas.map((eventData, ind) => (index.h("igl-tba-booking-view", { calendarData: this.calendarData, selectedDate: this.selectedDate, eventData: eventData, categoriesData: this.categoriesData, categoryId: categoryId, categoryIndex: this.categoryIndex, eventIndex: ind, onAssignRoomEvent: (evt) => this.handleAssignRoomEvent(evt) })));
    }
    renderView() {
        this.renderAgain = !this.renderAgain;
    }
    render() {
        return (index.h(index.Host, { key: 'c19d805a7b472f5d1ed42cfd5a19f48a154e5033' }, index.h("div", { key: '664a036293b0d4dc7bc523fbb97a0b152b5af7b4', class: "sectionContainer" }, index.h("div", { key: '44d3ed1e0a770c532ab5e3827e92d1d8500e071b', class: "font-weight-bold mt-1 font-small-3" }, this.categoriesData[this.categoryId].name), this.getEventView(this.categoryId, this.eventDatas))));
    }
};
IglTbaCategoryView.style = IglTbaCategoryViewStyle0;

const iglToBeAssignedCss = ".sc-igl-to-be-assigned-h{display:block}.custom-dropdown.sc-igl-to-be-assigned{cursor:pointer;padding:5px 10px;width:min-content;margin-left:auto;margin-right:auto}.dropdown-toggle.sc-igl-to-be-assigned{all:unset;display:flex;width:max-content;align-items:center;gap:10px}.close_btn_style.sc-igl-to-be-assigned{padding:0.4rem}.close_btn_style.sc-igl-to-be-assigned:hover{background-color:#f6f6f6}.dropdown-menu.sc-igl-to-be-assigned{max-height:250px;overflow-y:auto}.tobeAssignedHeader.sc-igl-to-be-assigned{font-weight:500;letter-spacing:0.05rem;font-size:1.12rem;padding:0;margin:0}.assignment_header.sc-igl-to-be-assigned{display:flex;align-items:center;justify-content:space-between;padding-top:5px;margin-bottom:1rem}.dropdown-toggle.sc-igl-to-be-assigned::after{content:none;display:none}.dropdown-toggle.sc-igl-to-be-assigned .caret-icon.sc-igl-to-be-assigned{transition:transform 0.2s ease}.show.sc-igl-to-be-assigned .caret-icon.sc-igl-to-be-assigned{transform:rotate(-180deg)}.stickyHeader.sc-igl-to-be-assigned{position:-webkit-sticky;position:sticky;top:0;background-color:#ffffff;z-index:1}.pointer.sc-igl-to-be-assigned{cursor:pointer}.dots.sc-igl-to-be-assigned{display:flex;align-items:center;justify-content:center;margin:0 3px;padding:0}.dot.sc-igl-to-be-assigned{width:5px;height:5px;margin:5px 4px 0;background-color:#6b6f82;border-radius:50%;animation:dotFlashing 1s infinite linear alternate}.dot.sc-igl-to-be-assigned:nth-child(2){animation-delay:0.2s}.dot.sc-igl-to-be-assigned:nth-child(3){animation-delay:0.4s}@keyframes dotFlashing{0%{opacity:0}50%,100%{opacity:1}}";
const IglToBeAssignedStyle0 = iglToBeAssignedCss;

const IglToBeAssigned = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.optionEvent = index.createEvent(this, "optionEvent", 7);
        this.reduceAvailableUnitEvent = index.createEvent(this, "reduceAvailableUnitEvent", 7);
        this.showBookingPopup = index.createEvent(this, "showBookingPopup", 7);
        this.addToBeAssignedEvent = index.createEvent(this, "addToBeAssignedEvent", 7);
        this.highlightToBeAssignedBookingEvent = index.createEvent(this, "highlightToBeAssignedBookingEvent", 7);
        this.isGotoToBeAssignedDate = false;
        this.isLoading = true;
        this.selectedDate = null;
        this.data = {};
        this.today = new Date();
        this.categoriesData = {};
        this.toBeAssignedService = new ToBeAssignedService();
        this.unassignedDatesProp = undefined;
        this.propertyid = undefined;
        this.from_date = undefined;
        this.to_date = undefined;
        this.calendarData = undefined;
        this.loadingMessage = undefined;
        this.showDatesList = false;
        this.renderAgain = false;
        this.orderedDatesList = [];
        this.noScroll = false;
    }
    componentWillLoad() {
        this.reArrangeData();
        this.loadingMessage = locales_store.locales.entries.Lcz_FetchingUnAssignedUnits;
    }
    handleUnassignedDatesToBeAssignedChange(newValue) {
        const { fromDate, toDate, data } = newValue;
        let dt = new Date(fromDate);
        dt.setHours(0);
        dt.setMinutes(0);
        dt.setSeconds(0);
        let endDate = dt.getTime();
        while (endDate <= new Date(toDate).getTime()) {
            if (data && !data[endDate] && this.unassignedDates.hasOwnProperty(endDate)) {
                delete this.unassignedDates[endDate];
            }
            else if (data && data[endDate]) {
                this.unassignedDates[endDate] = data[endDate];
            }
            endDate = moment.hooks(endDate).add(1, 'days').toDate().getTime();
        }
        this.data = Object.assign({}, this.unassignedDates);
        this.orderedDatesList = Object.keys(this.data).sort((a, b) => parseInt(a) - parseInt(b));
        if (this.orderedDatesList.length) {
            if (!this.data.hasOwnProperty(this.selectedDate)) {
                this.selectedDate = this.orderedDatesList.length ? this.orderedDatesList[0] : null;
            }
            this.showForDate(this.selectedDate, false);
            this.renderView();
        }
        else {
            this.selectedDate = null;
        }
    }
    handleAssignUnit(event) {
        const opt = event.detail;
        const data = opt.data;
        event.stopImmediatePropagation();
        event.stopPropagation();
        if (opt.key === 'assignUnit') {
            if (Object.keys(this.data[data.selectedDate].categories).length === 1) {
                this.isLoading = true;
                this.noScroll = true;
            }
            this.data[data.selectedDate].categories[data.RT_ID] = this.data[data.selectedDate].categories[data.RT_ID].filter(eventData => eventData.ID != data.assignEvent.ID);
            this.calendarData = data.calendarData;
            // this.calendarData.bookingEvents.push(data.assignEvent);
            // if (!this.data[data.selectedDate].categories[data.RT_ID].length) {
            //   delete this.data[data.selectedDate].categories[data.RT_ID];
            //   if (!Object.keys(this.data[data.selectedDate].categories).length) {
            //     delete this.data[data.selectedDate];
            //     //this.orderedDatesList = this.orderedDatesList.filter(dateStamp => dateStamp != data.selectedDate);
            //     //this.selectedDate = this.orderedDatesList.length ? this.orderedDatesList[0] : null;
            //   }
            // }
            this.renderView();
            // this.reduceAvailableUnitEvent.emit({key: "reduceAvailableDays", data: {selectedDate: data.selectedDate}});
        }
    }
    async updateCategories(key, calendarData) {
        try {
            //console.log("called")
            let categorisedRooms = {};
            const result = await this.toBeAssignedService.getUnassignedRooms({ from_date: calendarData.from_date, to_date: calendarData.to_date }, this.propertyid, utils.dateToFormattedString(new Date(+key)), calendarData.roomsInfo, calendarData.formattedLegendData);
            result.forEach(room => {
                if (!categorisedRooms.hasOwnProperty(room.RT_ID)) {
                    categorisedRooms[room.RT_ID] = [room];
                }
                else {
                    categorisedRooms[room.RT_ID].push(room);
                }
            });
            this.unassignedDates[key].categories = categorisedRooms;
        }
        catch (error) {
            //  toastr.error(error);
        }
    }
    async reArrangeData() {
        try {
            this.today.setHours(0, 0, 0, 0);
            this.calendarData.roomsInfo.forEach(category => {
                this.categoriesData[category.id] = {
                    name: category.name,
                    roomsList: category.physicalrooms,
                    roomIds: category.physicalrooms.map(room => {
                        return room.id;
                    }),
                };
            });
            this.selectedDate = null;
            //this.unassignedDates = await this.toBeAssignedService.getUnassignedDates(this.propertyid, dateToFormattedString(new Date()), this.to_date);
            this.unassignedDates = getUnassignedDates();
            console.log(this.unassignedDates);
            this.data = this.unassignedDates;
            this.orderedDatesList = Object.keys(this.data).sort((a, b) => parseInt(a) - parseInt(b));
            if (!this.selectedDate && this.orderedDatesList.length) {
                this.selectedDate = this.orderedDatesList[0];
            }
        }
        catch (error) {
            console.error('Error fetching unassigned dates:', error);
            //  toastr.error(error);
        }
    }
    async componentDidLoad() {
        setTimeout(() => {
            if (!this.isGotoToBeAssignedDate && Object.keys(this.unassignedDates).length > 0) {
                //console.log(this.isGotoToBeAssignedDate);
                const firstKey = Object.keys(this.unassignedDates)[0];
                this.showForDate(firstKey);
            }
        }, 100);
    }
    async gotoDate(event) {
        this.isGotoToBeAssignedDate = true;
        this.showForDate(event.detail.data);
        this.showDatesList = false;
        this.renderView();
    }
    handleToBeAssignedDate(e) {
        this.showBookingPopup.emit({
            key: 'calendar',
            data: new Date(e.detail.data.fromDate).getTime() - 86400000,
            noScroll: false,
        });
    }
    async showForDate(dateStamp, withLoading = true) {
        try {
            if (withLoading) {
                this.isLoading = true;
            }
            if (this.showDatesList) {
                this.showUnassignedDate();
            }
            await this.updateCategories(dateStamp, this.calendarData);
            this.addToBeAssignedEvent.emit({ key: 'tobeAssignedEvents', data: [] });
            this.showBookingPopup.emit({
                key: 'calendar',
                data: parseInt(dateStamp) - 86400000,
                noScroll: this.noScroll,
            });
            if (this.isGotoToBeAssignedDate) {
                this.isGotoToBeAssignedDate = false;
            }
            this.isLoading = false;
            this.selectedDate = dateStamp;
            this.renderView();
        }
        catch (error) {
            // toastr.error(error);
        }
    }
    getDay(dt) {
        const currentDate = new Date(dt);
        const locale = 'default'; //'en-US';
        const dayOfWeek = this.getLocalizedDayOfWeek(currentDate, locale);
        // const monthName = currentDate.toLocaleString("default", { month: 'short' })
        return dayOfWeek + ' ' + currentDate.getDate() + ', ' + currentDate.getFullYear();
    }
    getLocalizedDayOfWeek(date, locale) {
        const options = { weekday: 'short' };
        return date.toLocaleDateString(locale, options);
    }
    handleOptionEvent(key, data = '') {
        this.highlightToBeAssignedBookingEvent.emit({
            key: 'highlightBookingId',
            data: { bookingId: '----' },
        });
        this.addToBeAssignedEvent.emit({ key: 'tobeAssignedEvents', data: [] });
        this.optionEvent.emit({ key, data });
    }
    showUnassignedDate() {
        this.showDatesList = !this.showDatesList;
    }
    getToBeAssignedEntities() {
        // toBeAssignedEvents
    }
    getCategoryView() {
        if (this.orderedDatesList.length && this.selectedDate && this.data[this.selectedDate]) {
            return Object.entries(this.data[this.selectedDate].categories).map(([id, eventDatas], ind) => (index.h("igl-tba-category-view", { calendarData: this.calendarData, selectedDate: this.selectedDate, categoryId: id, categoryIndex: ind, categoriesData: this.categoriesData, eventDatas: eventDatas, onAssignUnitEvent: evt => this.handleAssignUnit(evt) })));
        }
        else {
            return null;
        }
    }
    renderView() {
        this.renderAgain = !this.renderAgain;
    }
    render() {
        var _a;
        return (index.h(index.Host, { key: 'd569f1a5af566b1af74a59b2a5c42e978bce6802', class: "tobeAssignedContainer pr-1 text-left" }, index.h("div", { key: '1f0f351f3cb23cc94993df2593a854ff47833e9b' }, index.h("div", { key: 'e43ccb787e67598fc54e7ee2293df63b40abb49c' }, index.h("div", { key: '5f4a180e4bb46a4036cf962467abe20e658bdca5', class: "stickyHeader pt-1" }, index.h("div", { key: '7e1d33943b24bc3fbc381b19163f03e5146516da', class: 'assignment_header' }, index.h("p", { key: 'f35ef1df6f30c32f5b1efc8422036d3bcd63d559', class: "tobeAssignedHeader " }, locales_store.locales.entries.Lcz_Assignments), index.h("ir-button", { key: '21d6e98889fa3cbffea9ad07dafc906ddef6b02a', class: "close_btn", variant: "icon", btn_styles: "close_btn_style", icon_name: "double_caret_left", style: colorVariants.secondary, onClickHandler: () => this.handleOptionEvent('closeSideMenu'), visibleBackgroundOnHover: true })), index.h("hr", { key: '638ff9739b3ca0aa47fd97c0fab70e2f14228419' }), Object.keys(this.data).length === 0 ? (index.h("p", null, locales_store.locales.entries.Lcz_AllBookingsAreAssigned)) : this.isLoading ? (index.h("p", { class: "d-flex align-items-center" }, index.h("span", { class: "p-0" }, this.loadingMessage), index.h("div", { class: "dots" }, index.h("div", { class: "dot" }), index.h("div", { class: "dot" }), index.h("div", { class: "dot" })))) : (index.h(index.Fragment, null, this.orderedDatesList.length ? (index.h("div", { class: `custom-dropdown border border-light rounded text-center ` + (this.showDatesList ? 'show' : ''), id: "dropdownMenuButton", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" }, index.h("div", { class: 'dropdown-toggle' }, index.h("span", { class: "font-weight-bold" }, this.data[this.selectedDate].dateStr), index.h("svg", { class: 'caret-icon', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", height: 14, width: 14 }, index.h("path", { fill: "#6b6f82", d: "M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" }))), index.h("div", { class: "dropdown-menu dropdown-menu-right full-width", "aria-labelledby": "dropdownMenuButton" }, (_a = this.orderedDatesList) === null || _a === void 0 ? void 0 : _a.map(ordDate => (index.h("div", { class: "dropdown-item pointer", onClick: () => this.showForDate(ordDate) }, this.data[ordDate].dateStr)))))) : (locales_store.locales.entries.Lcz_AllBookingsAreAssigned)))), !this.isLoading && (index.h("div", { key: '5debb87f644dfde418da6c5f8ceed3abb738f8a1', class: "scrollabledArea" }, this.orderedDatesList.length ? (Object.keys(this.data[this.selectedDate].categories).length ? (this.getCategoryView()) : (index.h("div", { class: "mt-1" }, locales_store.locales.entries.Lcz_AllAssignForThisDay))) : null))))));
    }
    static get watchers() { return {
        "unassignedDatesProp": ["handleUnassignedDatesToBeAssignedChange"]
    }; }
};
IglToBeAssigned.style = IglToBeAssignedStyle0;

const PACKET_TYPES = Object.create(null); // no Map = no polyfill
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
const PACKET_TYPES_REVERSE = Object.create(null);
Object.keys(PACKET_TYPES).forEach((key) => {
    PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
const ERROR_PACKET = { type: "error", data: "parser error" };

const withNativeBlob$1 = typeof Blob === "function" ||
    (typeof Blob !== "undefined" &&
        Object.prototype.toString.call(Blob) === "[object BlobConstructor]");
const withNativeArrayBuffer$2 = typeof ArrayBuffer === "function";
// ArrayBuffer.isView method is not defined in IE10
const isView$1 = (obj) => {
    return typeof ArrayBuffer.isView === "function"
        ? ArrayBuffer.isView(obj)
        : obj && obj.buffer instanceof ArrayBuffer;
};
const encodePacket = ({ type, data }, supportsBinary, callback) => {
    if (withNativeBlob$1 && data instanceof Blob) {
        if (supportsBinary) {
            return callback(data);
        }
        else {
            return encodeBlobAsBase64(data, callback);
        }
    }
    else if (withNativeArrayBuffer$2 &&
        (data instanceof ArrayBuffer || isView$1(data))) {
        if (supportsBinary) {
            return callback(data);
        }
        else {
            return encodeBlobAsBase64(new Blob([data]), callback);
        }
    }
    // plain string
    return callback(PACKET_TYPES[type] + (data || ""));
};
const encodeBlobAsBase64 = (data, callback) => {
    const fileReader = new FileReader();
    fileReader.onload = function () {
        const content = fileReader.result.split(",")[1];
        callback("b" + (content || ""));
    };
    return fileReader.readAsDataURL(data);
};
function toArray(data) {
    if (data instanceof Uint8Array) {
        return data;
    }
    else if (data instanceof ArrayBuffer) {
        return new Uint8Array(data);
    }
    else {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
    }
}
let TEXT_ENCODER;
function encodePacketToBinary(packet, callback) {
    if (withNativeBlob$1 && packet.data instanceof Blob) {
        return packet.data.arrayBuffer().then(toArray).then(callback);
    }
    else if (withNativeArrayBuffer$2 &&
        (packet.data instanceof ArrayBuffer || isView$1(packet.data))) {
        return callback(toArray(packet.data));
    }
    encodePacket(packet, false, (encoded) => {
        if (!TEXT_ENCODER) {
            TEXT_ENCODER = new TextEncoder();
        }
        callback(TEXT_ENCODER.encode(encoded));
    });
}

// imported from https://github.com/socketio/base64-arraybuffer
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
// Use a lookup table to find the index.
const lookup$1 = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
for (let i = 0; i < chars.length; i++) {
    lookup$1[chars.charCodeAt(i)] = i;
}
const decode$1 = (base64) => {
    let bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
    if (base64[base64.length - 1] === '=') {
        bufferLength--;
        if (base64[base64.length - 2] === '=') {
            bufferLength--;
        }
    }
    const arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
    for (i = 0; i < len; i += 4) {
        encoded1 = lookup$1[base64.charCodeAt(i)];
        encoded2 = lookup$1[base64.charCodeAt(i + 1)];
        encoded3 = lookup$1[base64.charCodeAt(i + 2)];
        encoded4 = lookup$1[base64.charCodeAt(i + 3)];
        bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
        bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
        bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }
    return arraybuffer;
};

const withNativeArrayBuffer$1 = typeof ArrayBuffer === "function";
const decodePacket = (encodedPacket, binaryType) => {
    if (typeof encodedPacket !== "string") {
        return {
            type: "message",
            data: mapBinary(encodedPacket, binaryType),
        };
    }
    const type = encodedPacket.charAt(0);
    if (type === "b") {
        return {
            type: "message",
            data: decodeBase64Packet(encodedPacket.substring(1), binaryType),
        };
    }
    const packetType = PACKET_TYPES_REVERSE[type];
    if (!packetType) {
        return ERROR_PACKET;
    }
    return encodedPacket.length > 1
        ? {
            type: PACKET_TYPES_REVERSE[type],
            data: encodedPacket.substring(1),
        }
        : {
            type: PACKET_TYPES_REVERSE[type],
        };
};
const decodeBase64Packet = (data, binaryType) => {
    if (withNativeArrayBuffer$1) {
        const decoded = decode$1(data);
        return mapBinary(decoded, binaryType);
    }
    else {
        return { base64: true, data }; // fallback for old browsers
    }
};
const mapBinary = (data, binaryType) => {
    switch (binaryType) {
        case "blob":
            if (data instanceof Blob) {
                // from WebSocket + binaryType "blob"
                return data;
            }
            else {
                // from HTTP long-polling or WebTransport
                return new Blob([data]);
            }
        case "arraybuffer":
        default:
            if (data instanceof ArrayBuffer) {
                // from HTTP long-polling (base64) or WebSocket + binaryType "arraybuffer"
                return data;
            }
            else {
                // from WebTransport (Uint8Array)
                return data.buffer;
            }
    }
};

const SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text
const encodePayload = (packets, callback) => {
    // some packets may be added to the array while encoding, so the initial length must be saved
    const length = packets.length;
    const encodedPackets = new Array(length);
    let count = 0;
    packets.forEach((packet, i) => {
        // force base64 encoding for binary packets
        encodePacket(packet, false, (encodedPacket) => {
            encodedPackets[i] = encodedPacket;
            if (++count === length) {
                callback(encodedPackets.join(SEPARATOR));
            }
        });
    });
};
const decodePayload = (encodedPayload, binaryType) => {
    const encodedPackets = encodedPayload.split(SEPARATOR);
    const packets = [];
    for (let i = 0; i < encodedPackets.length; i++) {
        const decodedPacket = decodePacket(encodedPackets[i], binaryType);
        packets.push(decodedPacket);
        if (decodedPacket.type === "error") {
            break;
        }
    }
    return packets;
};
function createPacketEncoderStream() {
    return new TransformStream({
        transform(packet, controller) {
            encodePacketToBinary(packet, (encodedPacket) => {
                const payloadLength = encodedPacket.length;
                let header;
                // inspired by the WebSocket format: https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#decoding_payload_length
                if (payloadLength < 126) {
                    header = new Uint8Array(1);
                    new DataView(header.buffer).setUint8(0, payloadLength);
                }
                else if (payloadLength < 65536) {
                    header = new Uint8Array(3);
                    const view = new DataView(header.buffer);
                    view.setUint8(0, 126);
                    view.setUint16(1, payloadLength);
                }
                else {
                    header = new Uint8Array(9);
                    const view = new DataView(header.buffer);
                    view.setUint8(0, 127);
                    view.setBigUint64(1, BigInt(payloadLength));
                }
                // first bit indicates whether the payload is plain text (0) or binary (1)
                if (packet.data && typeof packet.data !== "string") {
                    header[0] |= 0x80;
                }
                controller.enqueue(header);
                controller.enqueue(encodedPacket);
            });
        },
    });
}
let TEXT_DECODER;
function totalLength(chunks) {
    return chunks.reduce((acc, chunk) => acc + chunk.length, 0);
}
function concatChunks(chunks, size) {
    if (chunks[0].length === size) {
        return chunks.shift();
    }
    const buffer = new Uint8Array(size);
    let j = 0;
    for (let i = 0; i < size; i++) {
        buffer[i] = chunks[0][j++];
        if (j === chunks[0].length) {
            chunks.shift();
            j = 0;
        }
    }
    if (chunks.length && j < chunks[0].length) {
        chunks[0] = chunks[0].slice(j);
    }
    return buffer;
}
function createPacketDecoderStream(maxPayload, binaryType) {
    if (!TEXT_DECODER) {
        TEXT_DECODER = new TextDecoder();
    }
    const chunks = [];
    let state = 0 /* State.READ_HEADER */;
    let expectedLength = -1;
    let isBinary = false;
    return new TransformStream({
        transform(chunk, controller) {
            chunks.push(chunk);
            while (true) {
                if (state === 0 /* State.READ_HEADER */) {
                    if (totalLength(chunks) < 1) {
                        break;
                    }
                    const header = concatChunks(chunks, 1);
                    isBinary = (header[0] & 0x80) === 0x80;
                    expectedLength = header[0] & 0x7f;
                    if (expectedLength < 126) {
                        state = 3 /* State.READ_PAYLOAD */;
                    }
                    else if (expectedLength === 126) {
                        state = 1 /* State.READ_EXTENDED_LENGTH_16 */;
                    }
                    else {
                        state = 2 /* State.READ_EXTENDED_LENGTH_64 */;
                    }
                }
                else if (state === 1 /* State.READ_EXTENDED_LENGTH_16 */) {
                    if (totalLength(chunks) < 2) {
                        break;
                    }
                    const headerArray = concatChunks(chunks, 2);
                    expectedLength = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length).getUint16(0);
                    state = 3 /* State.READ_PAYLOAD */;
                }
                else if (state === 2 /* State.READ_EXTENDED_LENGTH_64 */) {
                    if (totalLength(chunks) < 8) {
                        break;
                    }
                    const headerArray = concatChunks(chunks, 8);
                    const view = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length);
                    const n = view.getUint32(0);
                    if (n > Math.pow(2, 53 - 32) - 1) {
                        // the maximum safe integer in JavaScript is 2^53 - 1
                        controller.enqueue(ERROR_PACKET);
                        break;
                    }
                    expectedLength = n * Math.pow(2, 32) + view.getUint32(4);
                    state = 3 /* State.READ_PAYLOAD */;
                }
                else {
                    if (totalLength(chunks) < expectedLength) {
                        break;
                    }
                    const data = concatChunks(chunks, expectedLength);
                    controller.enqueue(decodePacket(isBinary ? data : TEXT_DECODER.decode(data), binaryType));
                    state = 0 /* State.READ_HEADER */;
                }
                if (expectedLength === 0 || expectedLength > maxPayload) {
                    controller.enqueue(ERROR_PACKET);
                    break;
                }
            }
        },
    });
}
const protocol$1 = 4;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
}

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }

  // Remove event specific arrays for event types that no
  // one is subscribed for to avoid memory leak.
  if (callbacks.length === 0) {
    delete this._callbacks['$' + event];
  }

  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};

  var args = new Array(arguments.length - 1)
    , callbacks = this._callbacks['$' + event];

  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

// alias used for reserved events (protected method)
Emitter.prototype.emitReserved = Emitter.prototype.emit;

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

const globalThisShim = (() => {
    if (typeof self !== "undefined") {
        return self;
    }
    else if (typeof window !== "undefined") {
        return window;
    }
    else {
        return Function("return this")();
    }
})();

function pick(obj, ...attr) {
    return attr.reduce((acc, k) => {
        if (obj.hasOwnProperty(k)) {
            acc[k] = obj[k];
        }
        return acc;
    }, {});
}
// Keep a reference to the real timeout functions so they can be used when overridden
const NATIVE_SET_TIMEOUT = globalThisShim.setTimeout;
const NATIVE_CLEAR_TIMEOUT = globalThisShim.clearTimeout;
function installTimerFunctions(obj, opts) {
    if (opts.useNativeTimers) {
        obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThisShim);
        obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThisShim);
    }
    else {
        obj.setTimeoutFn = globalThisShim.setTimeout.bind(globalThisShim);
        obj.clearTimeoutFn = globalThisShim.clearTimeout.bind(globalThisShim);
    }
}
// base64 encoded buffers are about 33% bigger (https://en.wikipedia.org/wiki/Base64)
const BASE64_OVERHEAD = 1.33;
// we could also have used `new Blob([obj]).size`, but it isn't supported in IE9
function byteLength(obj) {
    if (typeof obj === "string") {
        return utf8Length(obj);
    }
    // arraybuffer or blob
    return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
}
function utf8Length(str) {
    let c = 0, length = 0;
    for (let i = 0, l = str.length; i < l; i++) {
        c = str.charCodeAt(i);
        if (c < 0x80) {
            length += 1;
        }
        else if (c < 0x800) {
            length += 2;
        }
        else if (c < 0xd800 || c >= 0xe000) {
            length += 3;
        }
        else {
            i++;
            length += 4;
        }
    }
    return length;
}

// imported from https://github.com/galkn/querystring
/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */
function encode$1(obj) {
    let str = '';
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            if (str.length)
                str += '&';
            str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
        }
    }
    return str;
}
/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */
function decode(qs) {
    let qry = {};
    let pairs = qs.split('&');
    for (let i = 0, l = pairs.length; i < l; i++) {
        let pair = pairs[i].split('=');
        qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return qry;
}

class TransportError extends Error {
    constructor(reason, description, context) {
        super(reason);
        this.description = description;
        this.context = context;
        this.type = "TransportError";
    }
}
class Transport extends Emitter {
    /**
     * Transport abstract constructor.
     *
     * @param {Object} opts - options
     * @protected
     */
    constructor(opts) {
        super();
        this.writable = false;
        installTimerFunctions(this, opts);
        this.opts = opts;
        this.query = opts.query;
        this.socket = opts.socket;
    }
    /**
     * Emits an error.
     *
     * @param {String} reason
     * @param description
     * @param context - the error context
     * @return {Transport} for chaining
     * @protected
     */
    onError(reason, description, context) {
        super.emitReserved("error", new TransportError(reason, description, context));
        return this;
    }
    /**
     * Opens the transport.
     */
    open() {
        this.readyState = "opening";
        this.doOpen();
        return this;
    }
    /**
     * Closes the transport.
     */
    close() {
        if (this.readyState === "opening" || this.readyState === "open") {
            this.doClose();
            this.onClose();
        }
        return this;
    }
    /**
     * Sends multiple packets.
     *
     * @param {Array} packets
     */
    send(packets) {
        if (this.readyState === "open") {
            this.write(packets);
        }
    }
    /**
     * Called upon open
     *
     * @protected
     */
    onOpen() {
        this.readyState = "open";
        this.writable = true;
        super.emitReserved("open");
    }
    /**
     * Called with data.
     *
     * @param {String} data
     * @protected
     */
    onData(data) {
        const packet = decodePacket(data, this.socket.binaryType);
        this.onPacket(packet);
    }
    /**
     * Called with a decoded packet.
     *
     * @protected
     */
    onPacket(packet) {
        super.emitReserved("packet", packet);
    }
    /**
     * Called upon close.
     *
     * @protected
     */
    onClose(details) {
        this.readyState = "closed";
        super.emitReserved("close", details);
    }
    /**
     * Pauses the transport, in order not to lose packets during an upgrade.
     *
     * @param onPause
     */
    pause(onPause) { }
    createUri(schema, query = {}) {
        return (schema +
            "://" +
            this._hostname() +
            this._port() +
            this.opts.path +
            this._query(query));
    }
    _hostname() {
        const hostname = this.opts.hostname;
        return hostname.indexOf(":") === -1 ? hostname : "[" + hostname + "]";
    }
    _port() {
        if (this.opts.port &&
            ((this.opts.secure && Number(this.opts.port !== 443)) ||
                (!this.opts.secure && Number(this.opts.port) !== 80))) {
            return ":" + this.opts.port;
        }
        else {
            return "";
        }
    }
    _query(query) {
        const encodedQuery = encode$1(query);
        return encodedQuery.length ? "?" + encodedQuery : "";
    }
}

// imported from https://github.com/unshiftio/yeast
const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''), length = 64, map = {};
let seed = 0, i = 0, prev;
/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */
function encode(num) {
    let encoded = '';
    do {
        encoded = alphabet[num % length] + encoded;
        num = Math.floor(num / length);
    } while (num > 0);
    return encoded;
}
/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */
function yeast() {
    const now = encode(+new Date());
    if (now !== prev)
        return seed = 0, prev = now;
    return now + '.' + encode(seed++);
}
//
// Map each character to its index.
//
for (; i < length; i++)
    map[alphabet[i]] = i;

// imported from https://github.com/component/has-cors
let value = false;
try {
    value = typeof XMLHttpRequest !== 'undefined' &&
        'withCredentials' in new XMLHttpRequest();
}
catch (err) {
    // if XMLHttp support is disabled in IE then it will throw
    // when trying to create
}
const hasCORS = value;

// browser shim for xmlhttprequest module
function XHR(opts) {
    const xdomain = opts.xdomain;
    // XMLHttpRequest can be disabled on IE
    try {
        if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
            return new XMLHttpRequest();
        }
    }
    catch (e) { }
    if (!xdomain) {
        try {
            return new globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
        }
        catch (e) { }
    }
}
function createCookieJar() { }

function empty() { }
const hasXHR2 = (function () {
    const xhr = new XHR({
        xdomain: false,
    });
    return null != xhr.responseType;
})();
class Polling extends Transport {
    /**
     * XHR Polling constructor.
     *
     * @param {Object} opts
     * @package
     */
    constructor(opts) {
        super(opts);
        this.polling = false;
        if (typeof location !== "undefined") {
            const isSSL = "https:" === location.protocol;
            let port = location.port;
            // some user agents have empty `location.port`
            if (!port) {
                port = isSSL ? "443" : "80";
            }
            this.xd =
                (typeof location !== "undefined" &&
                    opts.hostname !== location.hostname) ||
                    port !== opts.port;
        }
        /**
         * XHR supports binary
         */
        const forceBase64 = opts && opts.forceBase64;
        this.supportsBinary = hasXHR2 && !forceBase64;
        if (this.opts.withCredentials) {
            this.cookieJar = createCookieJar();
        }
    }
    get name() {
        return "polling";
    }
    /**
     * Opens the socket (triggers polling). We write a PING message to determine
     * when the transport is open.
     *
     * @protected
     */
    doOpen() {
        this.poll();
    }
    /**
     * Pauses polling.
     *
     * @param {Function} onPause - callback upon buffers are flushed and transport is paused
     * @package
     */
    pause(onPause) {
        this.readyState = "pausing";
        const pause = () => {
            this.readyState = "paused";
            onPause();
        };
        if (this.polling || !this.writable) {
            let total = 0;
            if (this.polling) {
                total++;
                this.once("pollComplete", function () {
                    --total || pause();
                });
            }
            if (!this.writable) {
                total++;
                this.once("drain", function () {
                    --total || pause();
                });
            }
        }
        else {
            pause();
        }
    }
    /**
     * Starts polling cycle.
     *
     * @private
     */
    poll() {
        this.polling = true;
        this.doPoll();
        this.emitReserved("poll");
    }
    /**
     * Overloads onData to detect payloads.
     *
     * @protected
     */
    onData(data) {
        const callback = (packet) => {
            // if its the first message we consider the transport open
            if ("opening" === this.readyState && packet.type === "open") {
                this.onOpen();
            }
            // if its a close packet, we close the ongoing requests
            if ("close" === packet.type) {
                this.onClose({ description: "transport closed by the server" });
                return false;
            }
            // otherwise bypass onData and handle the message
            this.onPacket(packet);
        };
        // decode payload
        decodePayload(data, this.socket.binaryType).forEach(callback);
        // if an event did not trigger closing
        if ("closed" !== this.readyState) {
            // if we got data we're not polling
            this.polling = false;
            this.emitReserved("pollComplete");
            if ("open" === this.readyState) {
                this.poll();
            }
        }
    }
    /**
     * For polling, send a close packet.
     *
     * @protected
     */
    doClose() {
        const close = () => {
            this.write([{ type: "close" }]);
        };
        if ("open" === this.readyState) {
            close();
        }
        else {
            // in case we're trying to close while
            // handshaking is in progress (GH-164)
            this.once("open", close);
        }
    }
    /**
     * Writes a packets payload.
     *
     * @param {Array} packets - data packets
     * @protected
     */
    write(packets) {
        this.writable = false;
        encodePayload(packets, (data) => {
            this.doWrite(data, () => {
                this.writable = true;
                this.emitReserved("drain");
            });
        });
    }
    /**
     * Generates uri for connection.
     *
     * @private
     */
    uri() {
        const schema = this.opts.secure ? "https" : "http";
        const query = this.query || {};
        // cache busting is forced
        if (false !== this.opts.timestampRequests) {
            query[this.opts.timestampParam] = yeast();
        }
        if (!this.supportsBinary && !query.sid) {
            query.b64 = 1;
        }
        return this.createUri(schema, query);
    }
    /**
     * Creates a request.
     *
     * @param {String} method
     * @private
     */
    request(opts = {}) {
        Object.assign(opts, { xd: this.xd, cookieJar: this.cookieJar }, this.opts);
        return new Request(this.uri(), opts);
    }
    /**
     * Sends data.
     *
     * @param {String} data to send.
     * @param {Function} called upon flush.
     * @private
     */
    doWrite(data, fn) {
        const req = this.request({
            method: "POST",
            data: data,
        });
        req.on("success", fn);
        req.on("error", (xhrStatus, context) => {
            this.onError("xhr post error", xhrStatus, context);
        });
    }
    /**
     * Starts a poll cycle.
     *
     * @private
     */
    doPoll() {
        const req = this.request();
        req.on("data", this.onData.bind(this));
        req.on("error", (xhrStatus, context) => {
            this.onError("xhr poll error", xhrStatus, context);
        });
        this.pollXhr = req;
    }
}
class Request extends Emitter {
    /**
     * Request constructor
     *
     * @param {Object} options
     * @package
     */
    constructor(uri, opts) {
        super();
        installTimerFunctions(this, opts);
        this.opts = opts;
        this.method = opts.method || "GET";
        this.uri = uri;
        this.data = undefined !== opts.data ? opts.data : null;
        this.create();
    }
    /**
     * Creates the XHR object and sends the request.
     *
     * @private
     */
    create() {
        var _a;
        const opts = pick(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        opts.xdomain = !!this.opts.xd;
        const xhr = (this.xhr = new XHR(opts));
        try {
            xhr.open(this.method, this.uri, true);
            try {
                if (this.opts.extraHeaders) {
                    xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
                    for (let i in this.opts.extraHeaders) {
                        if (this.opts.extraHeaders.hasOwnProperty(i)) {
                            xhr.setRequestHeader(i, this.opts.extraHeaders[i]);
                        }
                    }
                }
            }
            catch (e) { }
            if ("POST" === this.method) {
                try {
                    xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
                }
                catch (e) { }
            }
            try {
                xhr.setRequestHeader("Accept", "*/*");
            }
            catch (e) { }
            (_a = this.opts.cookieJar) === null || _a === void 0 ? void 0 : _a.addCookies(xhr);
            // ie6 check
            if ("withCredentials" in xhr) {
                xhr.withCredentials = this.opts.withCredentials;
            }
            if (this.opts.requestTimeout) {
                xhr.timeout = this.opts.requestTimeout;
            }
            xhr.onreadystatechange = () => {
                var _a;
                if (xhr.readyState === 3) {
                    (_a = this.opts.cookieJar) === null || _a === void 0 ? void 0 : _a.parseCookies(xhr);
                }
                if (4 !== xhr.readyState)
                    return;
                if (200 === xhr.status || 1223 === xhr.status) {
                    this.onLoad();
                }
                else {
                    // make sure the `error` event handler that's user-set
                    // does not throw in the same tick and gets caught here
                    this.setTimeoutFn(() => {
                        this.onError(typeof xhr.status === "number" ? xhr.status : 0);
                    }, 0);
                }
            };
            xhr.send(this.data);
        }
        catch (e) {
            // Need to defer since .create() is called directly from the constructor
            // and thus the 'error' event can only be only bound *after* this exception
            // occurs.  Therefore, also, we cannot throw here at all.
            this.setTimeoutFn(() => {
                this.onError(e);
            }, 0);
            return;
        }
        if (typeof document !== "undefined") {
            this.index = Request.requestsCount++;
            Request.requests[this.index] = this;
        }
    }
    /**
     * Called upon error.
     *
     * @private
     */
    onError(err) {
        this.emitReserved("error", err, this.xhr);
        this.cleanup(true);
    }
    /**
     * Cleans up house.
     *
     * @private
     */
    cleanup(fromError) {
        if ("undefined" === typeof this.xhr || null === this.xhr) {
            return;
        }
        this.xhr.onreadystatechange = empty;
        if (fromError) {
            try {
                this.xhr.abort();
            }
            catch (e) { }
        }
        if (typeof document !== "undefined") {
            delete Request.requests[this.index];
        }
        this.xhr = null;
    }
    /**
     * Called upon load.
     *
     * @private
     */
    onLoad() {
        const data = this.xhr.responseText;
        if (data !== null) {
            this.emitReserved("data", data);
            this.emitReserved("success");
            this.cleanup();
        }
    }
    /**
     * Aborts the request.
     *
     * @package
     */
    abort() {
        this.cleanup();
    }
}
Request.requestsCount = 0;
Request.requests = {};
/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */
if (typeof document !== "undefined") {
    // @ts-ignore
    if (typeof attachEvent === "function") {
        // @ts-ignore
        attachEvent("onunload", unloadHandler);
    }
    else if (typeof addEventListener === "function") {
        const terminationEvent = "onpagehide" in globalThisShim ? "pagehide" : "unload";
        addEventListener(terminationEvent, unloadHandler, false);
    }
}
function unloadHandler() {
    for (let i in Request.requests) {
        if (Request.requests.hasOwnProperty(i)) {
            Request.requests[i].abort();
        }
    }
}

const nextTick = (() => {
    const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
    if (isPromiseAvailable) {
        return (cb) => Promise.resolve().then(cb);
    }
    else {
        return (cb, setTimeoutFn) => setTimeoutFn(cb, 0);
    }
})();
const WebSocket = globalThisShim.WebSocket || globalThisShim.MozWebSocket;
const defaultBinaryType = "arraybuffer";

// detect ReactNative environment
const isReactNative = typeof navigator !== "undefined" &&
    typeof navigator.product === "string" &&
    navigator.product.toLowerCase() === "reactnative";
class WS extends Transport {
    /**
     * WebSocket transport constructor.
     *
     * @param {Object} opts - connection options
     * @protected
     */
    constructor(opts) {
        super(opts);
        this.supportsBinary = !opts.forceBase64;
    }
    get name() {
        return "websocket";
    }
    doOpen() {
        if (!this.check()) {
            // let probe timeout
            return;
        }
        const uri = this.uri();
        const protocols = this.opts.protocols;
        // React Native only supports the 'headers' option, and will print a warning if anything else is passed
        const opts = isReactNative
            ? {}
            : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        if (this.opts.extraHeaders) {
            opts.headers = this.opts.extraHeaders;
        }
        try {
            this.ws =
                !isReactNative
                    ? protocols
                        ? new WebSocket(uri, protocols)
                        : new WebSocket(uri)
                    : new WebSocket(uri, protocols, opts);
        }
        catch (err) {
            return this.emitReserved("error", err);
        }
        this.ws.binaryType = this.socket.binaryType;
        this.addEventListeners();
    }
    /**
     * Adds event listeners to the socket
     *
     * @private
     */
    addEventListeners() {
        this.ws.onopen = () => {
            if (this.opts.autoUnref) {
                this.ws._socket.unref();
            }
            this.onOpen();
        };
        this.ws.onclose = (closeEvent) => this.onClose({
            description: "websocket connection closed",
            context: closeEvent,
        });
        this.ws.onmessage = (ev) => this.onData(ev.data);
        this.ws.onerror = (e) => this.onError("websocket error", e);
    }
    write(packets) {
        this.writable = false;
        // encodePacket efficient as it uses WS framing
        // no need for encodePayload
        for (let i = 0; i < packets.length; i++) {
            const packet = packets[i];
            const lastPacket = i === packets.length - 1;
            encodePacket(packet, this.supportsBinary, (data) => {
                // Sometimes the websocket has already been closed but the browser didn't
                // have a chance of informing us about it yet, in that case send will
                // throw an error
                try {
                    {
                        // TypeError is thrown when passing the second argument on Safari
                        this.ws.send(data);
                    }
                }
                catch (e) {
                }
                if (lastPacket) {
                    // fake drain
                    // defer to next tick to allow Socket to clear writeBuffer
                    nextTick(() => {
                        this.writable = true;
                        this.emitReserved("drain");
                    }, this.setTimeoutFn);
                }
            });
        }
    }
    doClose() {
        if (typeof this.ws !== "undefined") {
            this.ws.close();
            this.ws = null;
        }
    }
    /**
     * Generates uri for connection.
     *
     * @private
     */
    uri() {
        const schema = this.opts.secure ? "wss" : "ws";
        const query = this.query || {};
        // append timestamp to URI
        if (this.opts.timestampRequests) {
            query[this.opts.timestampParam] = yeast();
        }
        // communicate binary support capabilities
        if (!this.supportsBinary) {
            query.b64 = 1;
        }
        return this.createUri(schema, query);
    }
    /**
     * Feature detection for WebSocket.
     *
     * @return {Boolean} whether this transport is available.
     * @private
     */
    check() {
        return !!WebSocket;
    }
}

class WT extends Transport {
    get name() {
        return "webtransport";
    }
    doOpen() {
        // @ts-ignore
        if (typeof WebTransport !== "function") {
            return;
        }
        // @ts-ignore
        this.transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
        this.transport.closed
            .then(() => {
            this.onClose();
        })
            .catch((err) => {
            this.onError("webtransport error", err);
        });
        // note: we could have used async/await, but that would require some additional polyfills
        this.transport.ready.then(() => {
            this.transport.createBidirectionalStream().then((stream) => {
                const decoderStream = createPacketDecoderStream(Number.MAX_SAFE_INTEGER, this.socket.binaryType);
                const reader = stream.readable.pipeThrough(decoderStream).getReader();
                const encoderStream = createPacketEncoderStream();
                encoderStream.readable.pipeTo(stream.writable);
                this.writer = encoderStream.writable.getWriter();
                const read = () => {
                    reader
                        .read()
                        .then(({ done, value }) => {
                        if (done) {
                            return;
                        }
                        this.onPacket(value);
                        read();
                    })
                        .catch((err) => {
                    });
                };
                read();
                const packet = { type: "open" };
                if (this.query.sid) {
                    packet.data = `{"sid":"${this.query.sid}"}`;
                }
                this.writer.write(packet).then(() => this.onOpen());
            });
        });
    }
    write(packets) {
        this.writable = false;
        for (let i = 0; i < packets.length; i++) {
            const packet = packets[i];
            const lastPacket = i === packets.length - 1;
            this.writer.write(packet).then(() => {
                if (lastPacket) {
                    nextTick(() => {
                        this.writable = true;
                        this.emitReserved("drain");
                    }, this.setTimeoutFn);
                }
            });
        }
    }
    doClose() {
        var _a;
        (_a = this.transport) === null || _a === void 0 ? void 0 : _a.close();
    }
}

const transports = {
    websocket: WS,
    webtransport: WT,
    polling: Polling,
};

// imported from https://github.com/galkn/parseuri
/**
 * Parses a URI
 *
 * Note: we could also have used the built-in URL object, but it isn't supported on all platforms.
 *
 * See:
 * - https://developer.mozilla.org/en-US/docs/Web/API/URL
 * - https://caniuse.com/url
 * - https://www.rfc-editor.org/rfc/rfc3986#appendix-B
 *
 * History of the parse() method:
 * - first commit: https://github.com/socketio/socket.io-client/commit/4ee1d5d94b3906a9c052b459f1a818b15f38f91c
 * - export into its own module: https://github.com/socketio/engine.io-client/commit/de2c561e4564efeb78f1bdb1ba39ef81b2822cb3
 * - reimport: https://github.com/socketio/engine.io-client/commit/df32277c3f6d622eec5ed09f493cae3f3391d242
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */
const re = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
const parts = [
    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
];
function parse(str) {
    if (str.length > 2000) {
        throw "URI too long";
    }
    const src = str, b = str.indexOf('['), e = str.indexOf(']');
    if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }
    let m = re.exec(str || ''), uri = {}, i = 14;
    while (i--) {
        uri[parts[i]] = m[i] || '';
    }
    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
    }
    uri.pathNames = pathNames(uri, uri['path']);
    uri.queryKey = queryKey(uri, uri['query']);
    return uri;
}
function pathNames(obj, path) {
    const regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
    if (path.slice(0, 1) == '/' || path.length === 0) {
        names.splice(0, 1);
    }
    if (path.slice(-1) == '/') {
        names.splice(names.length - 1, 1);
    }
    return names;
}
function queryKey(uri, query) {
    const data = {};
    query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
        if ($1) {
            data[$1] = $2;
        }
    });
    return data;
}

class Socket$1 extends Emitter {
    /**
     * Socket constructor.
     *
     * @param {String|Object} uri - uri or options
     * @param {Object} opts - options
     */
    constructor(uri, opts = {}) {
        super();
        this.binaryType = defaultBinaryType;
        this.writeBuffer = [];
        if (uri && "object" === typeof uri) {
            opts = uri;
            uri = null;
        }
        if (uri) {
            uri = parse(uri);
            opts.hostname = uri.host;
            opts.secure = uri.protocol === "https" || uri.protocol === "wss";
            opts.port = uri.port;
            if (uri.query)
                opts.query = uri.query;
        }
        else if (opts.host) {
            opts.hostname = parse(opts.host).host;
        }
        installTimerFunctions(this, opts);
        this.secure =
            null != opts.secure
                ? opts.secure
                : typeof location !== "undefined" && "https:" === location.protocol;
        if (opts.hostname && !opts.port) {
            // if no port is specified manually, use the protocol default
            opts.port = this.secure ? "443" : "80";
        }
        this.hostname =
            opts.hostname ||
                (typeof location !== "undefined" ? location.hostname : "localhost");
        this.port =
            opts.port ||
                (typeof location !== "undefined" && location.port
                    ? location.port
                    : this.secure
                        ? "443"
                        : "80");
        this.transports = opts.transports || [
            "polling",
            "websocket",
            "webtransport",
        ];
        this.writeBuffer = [];
        this.prevBufferLen = 0;
        this.opts = Object.assign({
            path: "/engine.io",
            agent: false,
            withCredentials: false,
            upgrade: true,
            timestampParam: "t",
            rememberUpgrade: false,
            addTrailingSlash: true,
            rejectUnauthorized: true,
            perMessageDeflate: {
                threshold: 1024,
            },
            transportOptions: {},
            closeOnBeforeunload: false,
        }, opts);
        this.opts.path =
            this.opts.path.replace(/\/$/, "") +
                (this.opts.addTrailingSlash ? "/" : "");
        if (typeof this.opts.query === "string") {
            this.opts.query = decode(this.opts.query);
        }
        // set on handshake
        this.id = null;
        this.upgrades = null;
        this.pingInterval = null;
        this.pingTimeout = null;
        // set on heartbeat
        this.pingTimeoutTimer = null;
        if (typeof addEventListener === "function") {
            if (this.opts.closeOnBeforeunload) {
                // Firefox closes the connection when the "beforeunload" event is emitted but not Chrome. This event listener
                // ensures every browser behaves the same (no "disconnect" event at the Socket.IO level when the page is
                // closed/reloaded)
                this.beforeunloadEventListener = () => {
                    if (this.transport) {
                        // silently close the transport
                        this.transport.removeAllListeners();
                        this.transport.close();
                    }
                };
                addEventListener("beforeunload", this.beforeunloadEventListener, false);
            }
            if (this.hostname !== "localhost") {
                this.offlineEventListener = () => {
                    this.onClose("transport close", {
                        description: "network connection lost",
                    });
                };
                addEventListener("offline", this.offlineEventListener, false);
            }
        }
        this.open();
    }
    /**
     * Creates transport of the given type.
     *
     * @param {String} name - transport name
     * @return {Transport}
     * @private
     */
    createTransport(name) {
        const query = Object.assign({}, this.opts.query);
        // append engine.io protocol identifier
        query.EIO = protocol$1;
        // transport name
        query.transport = name;
        // session id if we already have one
        if (this.id)
            query.sid = this.id;
        const opts = Object.assign({}, this.opts, {
            query,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port,
        }, this.opts.transportOptions[name]);
        return new transports[name](opts);
    }
    /**
     * Initializes transport to use and starts probe.
     *
     * @private
     */
    open() {
        let transport;
        if (this.opts.rememberUpgrade &&
            Socket$1.priorWebsocketSuccess &&
            this.transports.indexOf("websocket") !== -1) {
            transport = "websocket";
        }
        else if (0 === this.transports.length) {
            // Emit error on next tick so it can be listened to
            this.setTimeoutFn(() => {
                this.emitReserved("error", "No transports available");
            }, 0);
            return;
        }
        else {
            transport = this.transports[0];
        }
        this.readyState = "opening";
        // Retry with the next transport if the transport is disabled (jsonp: false)
        try {
            transport = this.createTransport(transport);
        }
        catch (e) {
            this.transports.shift();
            this.open();
            return;
        }
        transport.open();
        this.setTransport(transport);
    }
    /**
     * Sets the current transport. Disables the existing one (if any).
     *
     * @private
     */
    setTransport(transport) {
        if (this.transport) {
            this.transport.removeAllListeners();
        }
        // set up transport
        this.transport = transport;
        // set up transport listeners
        transport
            .on("drain", this.onDrain.bind(this))
            .on("packet", this.onPacket.bind(this))
            .on("error", this.onError.bind(this))
            .on("close", (reason) => this.onClose("transport close", reason));
    }
    /**
     * Probes a transport.
     *
     * @param {String} name - transport name
     * @private
     */
    probe(name) {
        let transport = this.createTransport(name);
        let failed = false;
        Socket$1.priorWebsocketSuccess = false;
        const onTransportOpen = () => {
            if (failed)
                return;
            transport.send([{ type: "ping", data: "probe" }]);
            transport.once("packet", (msg) => {
                if (failed)
                    return;
                if ("pong" === msg.type && "probe" === msg.data) {
                    this.upgrading = true;
                    this.emitReserved("upgrading", transport);
                    if (!transport)
                        return;
                    Socket$1.priorWebsocketSuccess = "websocket" === transport.name;
                    this.transport.pause(() => {
                        if (failed)
                            return;
                        if ("closed" === this.readyState)
                            return;
                        cleanup();
                        this.setTransport(transport);
                        transport.send([{ type: "upgrade" }]);
                        this.emitReserved("upgrade", transport);
                        transport = null;
                        this.upgrading = false;
                        this.flush();
                    });
                }
                else {
                    const err = new Error("probe error");
                    // @ts-ignore
                    err.transport = transport.name;
                    this.emitReserved("upgradeError", err);
                }
            });
        };
        function freezeTransport() {
            if (failed)
                return;
            // Any callback called by transport should be ignored since now
            failed = true;
            cleanup();
            transport.close();
            transport = null;
        }
        // Handle any error that happens while probing
        const onerror = (err) => {
            const error = new Error("probe error: " + err);
            // @ts-ignore
            error.transport = transport.name;
            freezeTransport();
            this.emitReserved("upgradeError", error);
        };
        function onTransportClose() {
            onerror("transport closed");
        }
        // When the socket is closed while we're probing
        function onclose() {
            onerror("socket closed");
        }
        // When the socket is upgraded while we're probing
        function onupgrade(to) {
            if (transport && to.name !== transport.name) {
                freezeTransport();
            }
        }
        // Remove all listeners on the transport and on self
        const cleanup = () => {
            transport.removeListener("open", onTransportOpen);
            transport.removeListener("error", onerror);
            transport.removeListener("close", onTransportClose);
            this.off("close", onclose);
            this.off("upgrading", onupgrade);
        };
        transport.once("open", onTransportOpen);
        transport.once("error", onerror);
        transport.once("close", onTransportClose);
        this.once("close", onclose);
        this.once("upgrading", onupgrade);
        if (this.upgrades.indexOf("webtransport") !== -1 &&
            name !== "webtransport") {
            // favor WebTransport
            this.setTimeoutFn(() => {
                if (!failed) {
                    transport.open();
                }
            }, 200);
        }
        else {
            transport.open();
        }
    }
    /**
     * Called when connection is deemed open.
     *
     * @private
     */
    onOpen() {
        this.readyState = "open";
        Socket$1.priorWebsocketSuccess = "websocket" === this.transport.name;
        this.emitReserved("open");
        this.flush();
        // we check for `readyState` in case an `open`
        // listener already closed the socket
        if ("open" === this.readyState && this.opts.upgrade) {
            let i = 0;
            const l = this.upgrades.length;
            for (; i < l; i++) {
                this.probe(this.upgrades[i]);
            }
        }
    }
    /**
     * Handles a packet.
     *
     * @private
     */
    onPacket(packet) {
        if ("opening" === this.readyState ||
            "open" === this.readyState ||
            "closing" === this.readyState) {
            this.emitReserved("packet", packet);
            // Socket is live - any packet counts
            this.emitReserved("heartbeat");
            this.resetPingTimeout();
            switch (packet.type) {
                case "open":
                    this.onHandshake(JSON.parse(packet.data));
                    break;
                case "ping":
                    this.sendPacket("pong");
                    this.emitReserved("ping");
                    this.emitReserved("pong");
                    break;
                case "error":
                    const err = new Error("server error");
                    // @ts-ignore
                    err.code = packet.data;
                    this.onError(err);
                    break;
                case "message":
                    this.emitReserved("data", packet.data);
                    this.emitReserved("message", packet.data);
                    break;
            }
        }
    }
    /**
     * Called upon handshake completion.
     *
     * @param {Object} data - handshake obj
     * @private
     */
    onHandshake(data) {
        this.emitReserved("handshake", data);
        this.id = data.sid;
        this.transport.query.sid = data.sid;
        this.upgrades = this.filterUpgrades(data.upgrades);
        this.pingInterval = data.pingInterval;
        this.pingTimeout = data.pingTimeout;
        this.maxPayload = data.maxPayload;
        this.onOpen();
        // In case open handler closes socket
        if ("closed" === this.readyState)
            return;
        this.resetPingTimeout();
    }
    /**
     * Sets and resets ping timeout timer based on server pings.
     *
     * @private
     */
    resetPingTimeout() {
        this.clearTimeoutFn(this.pingTimeoutTimer);
        this.pingTimeoutTimer = this.setTimeoutFn(() => {
            this.onClose("ping timeout");
        }, this.pingInterval + this.pingTimeout);
        if (this.opts.autoUnref) {
            this.pingTimeoutTimer.unref();
        }
    }
    /**
     * Called on `drain` event
     *
     * @private
     */
    onDrain() {
        this.writeBuffer.splice(0, this.prevBufferLen);
        // setting prevBufferLen = 0 is very important
        // for example, when upgrading, upgrade packet is sent over,
        // and a nonzero prevBufferLen could cause problems on `drain`
        this.prevBufferLen = 0;
        if (0 === this.writeBuffer.length) {
            this.emitReserved("drain");
        }
        else {
            this.flush();
        }
    }
    /**
     * Flush write buffers.
     *
     * @private
     */
    flush() {
        if ("closed" !== this.readyState &&
            this.transport.writable &&
            !this.upgrading &&
            this.writeBuffer.length) {
            const packets = this.getWritablePackets();
            this.transport.send(packets);
            // keep track of current length of writeBuffer
            // splice writeBuffer and callbackBuffer on `drain`
            this.prevBufferLen = packets.length;
            this.emitReserved("flush");
        }
    }
    /**
     * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
     * long-polling)
     *
     * @private
     */
    getWritablePackets() {
        const shouldCheckPayloadSize = this.maxPayload &&
            this.transport.name === "polling" &&
            this.writeBuffer.length > 1;
        if (!shouldCheckPayloadSize) {
            return this.writeBuffer;
        }
        let payloadSize = 1; // first packet type
        for (let i = 0; i < this.writeBuffer.length; i++) {
            const data = this.writeBuffer[i].data;
            if (data) {
                payloadSize += byteLength(data);
            }
            if (i > 0 && payloadSize > this.maxPayload) {
                return this.writeBuffer.slice(0, i);
            }
            payloadSize += 2; // separator + packet type
        }
        return this.writeBuffer;
    }
    /**
     * Sends a message.
     *
     * @param {String} msg - message.
     * @param {Object} options.
     * @param {Function} callback function.
     * @return {Socket} for chaining.
     */
    write(msg, options, fn) {
        this.sendPacket("message", msg, options, fn);
        return this;
    }
    send(msg, options, fn) {
        this.sendPacket("message", msg, options, fn);
        return this;
    }
    /**
     * Sends a packet.
     *
     * @param {String} type: packet type.
     * @param {String} data.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @private
     */
    sendPacket(type, data, options, fn) {
        if ("function" === typeof data) {
            fn = data;
            data = undefined;
        }
        if ("function" === typeof options) {
            fn = options;
            options = null;
        }
        if ("closing" === this.readyState || "closed" === this.readyState) {
            return;
        }
        options = options || {};
        options.compress = false !== options.compress;
        const packet = {
            type: type,
            data: data,
            options: options,
        };
        this.emitReserved("packetCreate", packet);
        this.writeBuffer.push(packet);
        if (fn)
            this.once("flush", fn);
        this.flush();
    }
    /**
     * Closes the connection.
     */
    close() {
        const close = () => {
            this.onClose("forced close");
            this.transport.close();
        };
        const cleanupAndClose = () => {
            this.off("upgrade", cleanupAndClose);
            this.off("upgradeError", cleanupAndClose);
            close();
        };
        const waitForUpgrade = () => {
            // wait for upgrade to finish since we can't send packets while pausing a transport
            this.once("upgrade", cleanupAndClose);
            this.once("upgradeError", cleanupAndClose);
        };
        if ("opening" === this.readyState || "open" === this.readyState) {
            this.readyState = "closing";
            if (this.writeBuffer.length) {
                this.once("drain", () => {
                    if (this.upgrading) {
                        waitForUpgrade();
                    }
                    else {
                        close();
                    }
                });
            }
            else if (this.upgrading) {
                waitForUpgrade();
            }
            else {
                close();
            }
        }
        return this;
    }
    /**
     * Called upon transport error
     *
     * @private
     */
    onError(err) {
        Socket$1.priorWebsocketSuccess = false;
        this.emitReserved("error", err);
        this.onClose("transport error", err);
    }
    /**
     * Called upon transport close.
     *
     * @private
     */
    onClose(reason, description) {
        if ("opening" === this.readyState ||
            "open" === this.readyState ||
            "closing" === this.readyState) {
            // clear timers
            this.clearTimeoutFn(this.pingTimeoutTimer);
            // stop event from firing again for transport
            this.transport.removeAllListeners("close");
            // ensure transport won't stay open
            this.transport.close();
            // ignore further transport communication
            this.transport.removeAllListeners();
            if (typeof removeEventListener === "function") {
                removeEventListener("beforeunload", this.beforeunloadEventListener, false);
                removeEventListener("offline", this.offlineEventListener, false);
            }
            // set ready state
            this.readyState = "closed";
            // clear session id
            this.id = null;
            // emit close event
            this.emitReserved("close", reason, description);
            // clean buffers after, so users can still
            // grab the buffers on `close` event
            this.writeBuffer = [];
            this.prevBufferLen = 0;
        }
    }
    /**
     * Filters upgrades, returning only those matching client transports.
     *
     * @param {Array} upgrades - server upgrades
     * @private
     */
    filterUpgrades(upgrades) {
        const filteredUpgrades = [];
        let i = 0;
        const j = upgrades.length;
        for (; i < j; i++) {
            if (~this.transports.indexOf(upgrades[i]))
                filteredUpgrades.push(upgrades[i]);
        }
        return filteredUpgrades;
    }
}
Socket$1.protocol = protocol$1;

/**
 * URL parser.
 *
 * @param uri - url
 * @param path - the request path of the connection
 * @param loc - An object meant to mimic window.location.
 *        Defaults to window.location.
 * @public
 */
function url(uri, path = "", loc) {
    let obj = uri;
    // default to window.location
    loc = loc || (typeof location !== "undefined" && location);
    if (null == uri)
        uri = loc.protocol + "//" + loc.host;
    // relative path support
    if (typeof uri === "string") {
        if ("/" === uri.charAt(0)) {
            if ("/" === uri.charAt(1)) {
                uri = loc.protocol + uri;
            }
            else {
                uri = loc.host + uri;
            }
        }
        if (!/^(https?|wss?):\/\//.test(uri)) {
            if ("undefined" !== typeof loc) {
                uri = loc.protocol + "//" + uri;
            }
            else {
                uri = "https://" + uri;
            }
        }
        // parse
        obj = parse(uri);
    }
    // make sure we treat `localhost:80` and `localhost` equally
    if (!obj.port) {
        if (/^(http|ws)$/.test(obj.protocol)) {
            obj.port = "80";
        }
        else if (/^(http|ws)s$/.test(obj.protocol)) {
            obj.port = "443";
        }
    }
    obj.path = obj.path || "/";
    const ipv6 = obj.host.indexOf(":") !== -1;
    const host = ipv6 ? "[" + obj.host + "]" : obj.host;
    // define unique id
    obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
    // define href
    obj.href =
        obj.protocol +
            "://" +
            host +
            (loc && loc.port === obj.port ? "" : ":" + obj.port);
    return obj;
}

const withNativeArrayBuffer = typeof ArrayBuffer === "function";
const isView = (obj) => {
    return typeof ArrayBuffer.isView === "function"
        ? ArrayBuffer.isView(obj)
        : obj.buffer instanceof ArrayBuffer;
};
const toString = Object.prototype.toString;
const withNativeBlob = typeof Blob === "function" ||
    (typeof Blob !== "undefined" &&
        toString.call(Blob) === "[object BlobConstructor]");
const withNativeFile = typeof File === "function" ||
    (typeof File !== "undefined" &&
        toString.call(File) === "[object FileConstructor]");
/**
 * Returns true if obj is a Buffer, an ArrayBuffer, a Blob or a File.
 *
 * @private
 */
function isBinary(obj) {
    return ((withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj))) ||
        (withNativeBlob && obj instanceof Blob) ||
        (withNativeFile && obj instanceof File));
}
function hasBinary(obj, toJSON) {
    if (!obj || typeof obj !== "object") {
        return false;
    }
    if (Array.isArray(obj)) {
        for (let i = 0, l = obj.length; i < l; i++) {
            if (hasBinary(obj[i])) {
                return true;
            }
        }
        return false;
    }
    if (isBinary(obj)) {
        return true;
    }
    if (obj.toJSON &&
        typeof obj.toJSON === "function" &&
        arguments.length === 1) {
        return hasBinary(obj.toJSON(), true);
    }
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
            return true;
        }
    }
    return false;
}

/**
 * Replaces every Buffer | ArrayBuffer | Blob | File in packet with a numbered placeholder.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @public
 */
function deconstructPacket(packet) {
    const buffers = [];
    const packetData = packet.data;
    const pack = packet;
    pack.data = _deconstructPacket(packetData, buffers);
    pack.attachments = buffers.length; // number of binary 'attachments'
    return { packet: pack, buffers: buffers };
}
function _deconstructPacket(data, buffers) {
    if (!data)
        return data;
    if (isBinary(data)) {
        const placeholder = { _placeholder: true, num: buffers.length };
        buffers.push(data);
        return placeholder;
    }
    else if (Array.isArray(data)) {
        const newData = new Array(data.length);
        for (let i = 0; i < data.length; i++) {
            newData[i] = _deconstructPacket(data[i], buffers);
        }
        return newData;
    }
    else if (typeof data === "object" && !(data instanceof Date)) {
        const newData = {};
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                newData[key] = _deconstructPacket(data[key], buffers);
            }
        }
        return newData;
    }
    return data;
}
/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @public
 */
function reconstructPacket(packet, buffers) {
    packet.data = _reconstructPacket(packet.data, buffers);
    delete packet.attachments; // no longer useful
    return packet;
}
function _reconstructPacket(data, buffers) {
    if (!data)
        return data;
    if (data && data._placeholder === true) {
        const isIndexValid = typeof data.num === "number" &&
            data.num >= 0 &&
            data.num < buffers.length;
        if (isIndexValid) {
            return buffers[data.num]; // appropriate buffer (should be natural order anyway)
        }
        else {
            throw new Error("illegal attachments");
        }
    }
    else if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
            data[i] = _reconstructPacket(data[i], buffers);
        }
    }
    else if (typeof data === "object") {
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                data[key] = _reconstructPacket(data[key], buffers);
            }
        }
    }
    return data;
}

/**
 * These strings must not be used as event names, as they have a special meaning.
 */
const RESERVED_EVENTS$1 = [
    "connect",
    "connect_error",
    "disconnect",
    "disconnecting",
    "newListener",
    "removeListener", // used by the Node.js EventEmitter
];
/**
 * Protocol version.
 *
 * @public
 */
const protocol = 5;
var PacketType;
(function (PacketType) {
    PacketType[PacketType["CONNECT"] = 0] = "CONNECT";
    PacketType[PacketType["DISCONNECT"] = 1] = "DISCONNECT";
    PacketType[PacketType["EVENT"] = 2] = "EVENT";
    PacketType[PacketType["ACK"] = 3] = "ACK";
    PacketType[PacketType["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
    PacketType[PacketType["BINARY_EVENT"] = 5] = "BINARY_EVENT";
    PacketType[PacketType["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType || (PacketType = {}));
/**
 * A socket.io Encoder instance
 */
class Encoder {
    /**
     * Encoder constructor
     *
     * @param {function} replacer - custom replacer to pass down to JSON.parse
     */
    constructor(replacer) {
        this.replacer = replacer;
    }
    /**
     * Encode a packet as a single string if non-binary, or as a
     * buffer sequence, depending on packet type.
     *
     * @param {Object} obj - packet object
     */
    encode(obj) {
        if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
            if (hasBinary(obj)) {
                return this.encodeAsBinary({
                    type: obj.type === PacketType.EVENT
                        ? PacketType.BINARY_EVENT
                        : PacketType.BINARY_ACK,
                    nsp: obj.nsp,
                    data: obj.data,
                    id: obj.id,
                });
            }
        }
        return [this.encodeAsString(obj)];
    }
    /**
     * Encode packet as string.
     */
    encodeAsString(obj) {
        // first is type
        let str = "" + obj.type;
        // attachments if we have them
        if (obj.type === PacketType.BINARY_EVENT ||
            obj.type === PacketType.BINARY_ACK) {
            str += obj.attachments + "-";
        }
        // if we have a namespace other than `/`
        // we append it followed by a comma `,`
        if (obj.nsp && "/" !== obj.nsp) {
            str += obj.nsp + ",";
        }
        // immediately followed by the id
        if (null != obj.id) {
            str += obj.id;
        }
        // json data
        if (null != obj.data) {
            str += JSON.stringify(obj.data, this.replacer);
        }
        return str;
    }
    /**
     * Encode packet as 'buffer sequence' by removing blobs, and
     * deconstructing packet into object with placeholders and
     * a list of buffers.
     */
    encodeAsBinary(obj) {
        const deconstruction = deconstructPacket(obj);
        const pack = this.encodeAsString(deconstruction.packet);
        const buffers = deconstruction.buffers;
        buffers.unshift(pack); // add packet info to beginning of data list
        return buffers; // write all the buffers
    }
}
// see https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript
function isObject(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
}
/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 */
class Decoder extends Emitter {
    /**
     * Decoder constructor
     *
     * @param {function} reviver - custom reviver to pass down to JSON.stringify
     */
    constructor(reviver) {
        super();
        this.reviver = reviver;
    }
    /**
     * Decodes an encoded packet string into packet JSON.
     *
     * @param {String} obj - encoded packet
     */
    add(obj) {
        let packet;
        if (typeof obj === "string") {
            if (this.reconstructor) {
                throw new Error("got plaintext data when reconstructing a packet");
            }
            packet = this.decodeString(obj);
            const isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
            if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
                packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
                // binary packet's json
                this.reconstructor = new BinaryReconstructor(packet);
                // no attachments, labeled binary but no binary data to follow
                if (packet.attachments === 0) {
                    super.emitReserved("decoded", packet);
                }
            }
            else {
                // non-binary full packet
                super.emitReserved("decoded", packet);
            }
        }
        else if (isBinary(obj) || obj.base64) {
            // raw binary data
            if (!this.reconstructor) {
                throw new Error("got binary data when not reconstructing a packet");
            }
            else {
                packet = this.reconstructor.takeBinaryData(obj);
                if (packet) {
                    // received final buffer
                    this.reconstructor = null;
                    super.emitReserved("decoded", packet);
                }
            }
        }
        else {
            throw new Error("Unknown type: " + obj);
        }
    }
    /**
     * Decode a packet String (JSON data)
     *
     * @param {String} str
     * @return {Object} packet
     */
    decodeString(str) {
        let i = 0;
        // look up type
        const p = {
            type: Number(str.charAt(0)),
        };
        if (PacketType[p.type] === undefined) {
            throw new Error("unknown packet type " + p.type);
        }
        // look up attachments if type binary
        if (p.type === PacketType.BINARY_EVENT ||
            p.type === PacketType.BINARY_ACK) {
            const start = i + 1;
            while (str.charAt(++i) !== "-" && i != str.length) { }
            const buf = str.substring(start, i);
            if (buf != Number(buf) || str.charAt(i) !== "-") {
                throw new Error("Illegal attachments");
            }
            p.attachments = Number(buf);
        }
        // look up namespace (if any)
        if ("/" === str.charAt(i + 1)) {
            const start = i + 1;
            while (++i) {
                const c = str.charAt(i);
                if ("," === c)
                    break;
                if (i === str.length)
                    break;
            }
            p.nsp = str.substring(start, i);
        }
        else {
            p.nsp = "/";
        }
        // look up id
        const next = str.charAt(i + 1);
        if ("" !== next && Number(next) == next) {
            const start = i + 1;
            while (++i) {
                const c = str.charAt(i);
                if (null == c || Number(c) != c) {
                    --i;
                    break;
                }
                if (i === str.length)
                    break;
            }
            p.id = Number(str.substring(start, i + 1));
        }
        // look up json data
        if (str.charAt(++i)) {
            const payload = this.tryParse(str.substr(i));
            if (Decoder.isPayloadValid(p.type, payload)) {
                p.data = payload;
            }
            else {
                throw new Error("invalid payload");
            }
        }
        return p;
    }
    tryParse(str) {
        try {
            return JSON.parse(str, this.reviver);
        }
        catch (e) {
            return false;
        }
    }
    static isPayloadValid(type, payload) {
        switch (type) {
            case PacketType.CONNECT:
                return isObject(payload);
            case PacketType.DISCONNECT:
                return payload === undefined;
            case PacketType.CONNECT_ERROR:
                return typeof payload === "string" || isObject(payload);
            case PacketType.EVENT:
            case PacketType.BINARY_EVENT:
                return (Array.isArray(payload) &&
                    (typeof payload[0] === "number" ||
                        (typeof payload[0] === "string" &&
                            RESERVED_EVENTS$1.indexOf(payload[0]) === -1)));
            case PacketType.ACK:
            case PacketType.BINARY_ACK:
                return Array.isArray(payload);
        }
    }
    /**
     * Deallocates a parser's resources
     */
    destroy() {
        if (this.reconstructor) {
            this.reconstructor.finishedReconstruction();
            this.reconstructor = null;
        }
    }
}
/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 */
class BinaryReconstructor {
    constructor(packet) {
        this.packet = packet;
        this.buffers = [];
        this.reconPack = packet;
    }
    /**
     * Method to be called when binary data received from connection
     * after a BINARY_EVENT packet.
     *
     * @param {Buffer | ArrayBuffer} binData - the raw binary data received
     * @return {null | Object} returns null if more binary data is expected or
     *   a reconstructed packet object if all buffers have been received.
     */
    takeBinaryData(binData) {
        this.buffers.push(binData);
        if (this.buffers.length === this.reconPack.attachments) {
            // done with buffer list
            const packet = reconstructPacket(this.reconPack, this.buffers);
            this.finishedReconstruction();
            return packet;
        }
        return null;
    }
    /**
     * Cleans up binary packet reconstruction variables.
     */
    finishedReconstruction() {
        this.reconPack = null;
        this.buffers = [];
    }
}

const parser = /*#__PURE__*/Object.freeze({
    __proto__: null,
    protocol: protocol,
    get PacketType () { return PacketType; },
    Encoder: Encoder,
    Decoder: Decoder
});

function on(obj, ev, fn) {
    obj.on(ev, fn);
    return function subDestroy() {
        obj.off(ev, fn);
    };
}

/**
 * Internal events.
 * These events can't be emitted by the user.
 */
const RESERVED_EVENTS = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
    newListener: 1,
    removeListener: 1,
});
/**
 * A Socket is the fundamental class for interacting with the server.
 *
 * A Socket belongs to a certain Namespace (by default /) and uses an underlying {@link Manager} to communicate.
 *
 * @example
 * const socket = io();
 *
 * socket.on("connect", () => {
 *   console.log("connected");
 * });
 *
 * // send an event to the server
 * socket.emit("foo", "bar");
 *
 * socket.on("foobar", () => {
 *   // an event was received from the server
 * });
 *
 * // upon disconnection
 * socket.on("disconnect", (reason) => {
 *   console.log(`disconnected due to ${reason}`);
 * });
 */
class Socket extends Emitter {
    /**
     * `Socket` constructor.
     */
    constructor(io, nsp, opts) {
        super();
        /**
         * Whether the socket is currently connected to the server.
         *
         * @example
         * const socket = io();
         *
         * socket.on("connect", () => {
         *   console.log(socket.connected); // true
         * });
         *
         * socket.on("disconnect", () => {
         *   console.log(socket.connected); // false
         * });
         */
        this.connected = false;
        /**
         * Whether the connection state was recovered after a temporary disconnection. In that case, any missed packets will
         * be transmitted by the server.
         */
        this.recovered = false;
        /**
         * Buffer for packets received before the CONNECT packet
         */
        this.receiveBuffer = [];
        /**
         * Buffer for packets that will be sent once the socket is connected
         */
        this.sendBuffer = [];
        /**
         * The queue of packets to be sent with retry in case of failure.
         *
         * Packets are sent one by one, each waiting for the server acknowledgement, in order to guarantee the delivery order.
         * @private
         */
        this._queue = [];
        /**
         * A sequence to generate the ID of the {@link QueuedPacket}.
         * @private
         */
        this._queueSeq = 0;
        this.ids = 0;
        /**
         * A map containing acknowledgement handlers.
         *
         * The `withError` attribute is used to differentiate handlers that accept an error as first argument:
         *
         * - `socket.emit("test", (err, value) => { ... })` with `ackTimeout` option
         * - `socket.timeout(5000).emit("test", (err, value) => { ... })`
         * - `const value = await socket.emitWithAck("test")`
         *
         * From those that don't:
         *
         * - `socket.emit("test", (value) => { ... });`
         *
         * In the first case, the handlers will be called with an error when:
         *
         * - the timeout is reached
         * - the socket gets disconnected
         *
         * In the second case, the handlers will be simply discarded upon disconnection, since the client will never receive
         * an acknowledgement from the server.
         *
         * @private
         */
        this.acks = {};
        this.flags = {};
        this.io = io;
        this.nsp = nsp;
        if (opts && opts.auth) {
            this.auth = opts.auth;
        }
        this._opts = Object.assign({}, opts);
        if (this.io._autoConnect)
            this.open();
    }
    /**
     * Whether the socket is currently disconnected
     *
     * @example
     * const socket = io();
     *
     * socket.on("connect", () => {
     *   console.log(socket.disconnected); // false
     * });
     *
     * socket.on("disconnect", () => {
     *   console.log(socket.disconnected); // true
     * });
     */
    get disconnected() {
        return !this.connected;
    }
    /**
     * Subscribe to open, close and packet events
     *
     * @private
     */
    subEvents() {
        if (this.subs)
            return;
        const io = this.io;
        this.subs = [
            on(io, "open", this.onopen.bind(this)),
            on(io, "packet", this.onpacket.bind(this)),
            on(io, "error", this.onerror.bind(this)),
            on(io, "close", this.onclose.bind(this)),
        ];
    }
    /**
     * Whether the Socket will try to reconnect when its Manager connects or reconnects.
     *
     * @example
     * const socket = io();
     *
     * console.log(socket.active); // true
     *
     * socket.on("disconnect", (reason) => {
     *   if (reason === "io server disconnect") {
     *     // the disconnection was initiated by the server, you need to manually reconnect
     *     console.log(socket.active); // false
     *   }
     *   // else the socket will automatically try to reconnect
     *   console.log(socket.active); // true
     * });
     */
    get active() {
        return !!this.subs;
    }
    /**
     * "Opens" the socket.
     *
     * @example
     * const socket = io({
     *   autoConnect: false
     * });
     *
     * socket.connect();
     */
    connect() {
        if (this.connected)
            return this;
        this.subEvents();
        if (!this.io["_reconnecting"])
            this.io.open(); // ensure open
        if ("open" === this.io._readyState)
            this.onopen();
        return this;
    }
    /**
     * Alias for {@link connect()}.
     */
    open() {
        return this.connect();
    }
    /**
     * Sends a `message` event.
     *
     * This method mimics the WebSocket.send() method.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
     *
     * @example
     * socket.send("hello");
     *
     * // this is equivalent to
     * socket.emit("message", "hello");
     *
     * @return self
     */
    send(...args) {
        args.unshift("message");
        this.emit.apply(this, args);
        return this;
    }
    /**
     * Override `emit`.
     * If the event is in `events`, it's emitted normally.
     *
     * @example
     * socket.emit("hello", "world");
     *
     * // all serializable datastructures are supported (no need to call JSON.stringify)
     * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
     *
     * // with an acknowledgement from the server
     * socket.emit("hello", "world", (val) => {
     *   // ...
     * });
     *
     * @return self
     */
    emit(ev, ...args) {
        if (RESERVED_EVENTS.hasOwnProperty(ev)) {
            throw new Error('"' + ev.toString() + '" is a reserved event name');
        }
        args.unshift(ev);
        if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {
            this._addToQueue(args);
            return this;
        }
        const packet = {
            type: PacketType.EVENT,
            data: args,
        };
        packet.options = {};
        packet.options.compress = this.flags.compress !== false;
        // event ack callback
        if ("function" === typeof args[args.length - 1]) {
            const id = this.ids++;
            const ack = args.pop();
            this._registerAckCallback(id, ack);
            packet.id = id;
        }
        const isTransportWritable = this.io.engine &&
            this.io.engine.transport &&
            this.io.engine.transport.writable;
        const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);
        if (discardPacket) ;
        else if (this.connected) {
            this.notifyOutgoingListeners(packet);
            this.packet(packet);
        }
        else {
            this.sendBuffer.push(packet);
        }
        this.flags = {};
        return this;
    }
    /**
     * @private
     */
    _registerAckCallback(id, ack) {
        var _a;
        const timeout = (_a = this.flags.timeout) !== null && _a !== void 0 ? _a : this._opts.ackTimeout;
        if (timeout === undefined) {
            this.acks[id] = ack;
            return;
        }
        // @ts-ignore
        const timer = this.io.setTimeoutFn(() => {
            delete this.acks[id];
            for (let i = 0; i < this.sendBuffer.length; i++) {
                if (this.sendBuffer[i].id === id) {
                    this.sendBuffer.splice(i, 1);
                }
            }
            ack.call(this, new Error("operation has timed out"));
        }, timeout);
        const fn = (...args) => {
            // @ts-ignore
            this.io.clearTimeoutFn(timer);
            ack.apply(this, args);
        };
        fn.withError = true;
        this.acks[id] = fn;
    }
    /**
     * Emits an event and waits for an acknowledgement
     *
     * @example
     * // without timeout
     * const response = await socket.emitWithAck("hello", "world");
     *
     * // with a specific timeout
     * try {
     *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
     * } catch (err) {
     *   // the server did not acknowledge the event in the given delay
     * }
     *
     * @return a Promise that will be fulfilled when the server acknowledges the event
     */
    emitWithAck(ev, ...args) {
        return new Promise((resolve, reject) => {
            const fn = (arg1, arg2) => {
                return arg1 ? reject(arg1) : resolve(arg2);
            };
            fn.withError = true;
            args.push(fn);
            this.emit(ev, ...args);
        });
    }
    /**
     * Add the packet to the queue.
     * @param args
     * @private
     */
    _addToQueue(args) {
        let ack;
        if (typeof args[args.length - 1] === "function") {
            ack = args.pop();
        }
        const packet = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: false,
            args,
            flags: Object.assign({ fromQueue: true }, this.flags),
        };
        args.push((err, ...responseArgs) => {
            if (packet !== this._queue[0]) {
                // the packet has already been acknowledged
                return;
            }
            const hasError = err !== null;
            if (hasError) {
                if (packet.tryCount > this._opts.retries) {
                    this._queue.shift();
                    if (ack) {
                        ack(err);
                    }
                }
            }
            else {
                this._queue.shift();
                if (ack) {
                    ack(null, ...responseArgs);
                }
            }
            packet.pending = false;
            return this._drainQueue();
        });
        this._queue.push(packet);
        this._drainQueue();
    }
    /**
     * Send the first packet of the queue, and wait for an acknowledgement from the server.
     * @param force - whether to resend a packet that has not been acknowledged yet
     *
     * @private
     */
    _drainQueue(force = false) {
        if (!this.connected || this._queue.length === 0) {
            return;
        }
        const packet = this._queue[0];
        if (packet.pending && !force) {
            return;
        }
        packet.pending = true;
        packet.tryCount++;
        this.flags = packet.flags;
        this.emit.apply(this, packet.args);
    }
    /**
     * Sends a packet.
     *
     * @param packet
     * @private
     */
    packet(packet) {
        packet.nsp = this.nsp;
        this.io._packet(packet);
    }
    /**
     * Called upon engine `open`.
     *
     * @private
     */
    onopen() {
        if (typeof this.auth == "function") {
            this.auth((data) => {
                this._sendConnectPacket(data);
            });
        }
        else {
            this._sendConnectPacket(this.auth);
        }
    }
    /**
     * Sends a CONNECT packet to initiate the Socket.IO session.
     *
     * @param data
     * @private
     */
    _sendConnectPacket(data) {
        this.packet({
            type: PacketType.CONNECT,
            data: this._pid
                ? Object.assign({ pid: this._pid, offset: this._lastOffset }, data)
                : data,
        });
    }
    /**
     * Called upon engine or manager `error`.
     *
     * @param err
     * @private
     */
    onerror(err) {
        if (!this.connected) {
            this.emitReserved("connect_error", err);
        }
    }
    /**
     * Called upon engine `close`.
     *
     * @param reason
     * @param description
     * @private
     */
    onclose(reason, description) {
        this.connected = false;
        delete this.id;
        this.emitReserved("disconnect", reason, description);
        this._clearAcks();
    }
    /**
     * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
     * the server.
     *
     * @private
     */
    _clearAcks() {
        Object.keys(this.acks).forEach((id) => {
            const isBuffered = this.sendBuffer.some((packet) => String(packet.id) === id);
            if (!isBuffered) {
                // note: handlers that do not accept an error as first argument are ignored here
                const ack = this.acks[id];
                delete this.acks[id];
                if (ack.withError) {
                    ack.call(this, new Error("socket has been disconnected"));
                }
            }
        });
    }
    /**
     * Called with socket packet.
     *
     * @param packet
     * @private
     */
    onpacket(packet) {
        const sameNamespace = packet.nsp === this.nsp;
        if (!sameNamespace)
            return;
        switch (packet.type) {
            case PacketType.CONNECT:
                if (packet.data && packet.data.sid) {
                    this.onconnect(packet.data.sid, packet.data.pid);
                }
                else {
                    this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                }
                break;
            case PacketType.EVENT:
            case PacketType.BINARY_EVENT:
                this.onevent(packet);
                break;
            case PacketType.ACK:
            case PacketType.BINARY_ACK:
                this.onack(packet);
                break;
            case PacketType.DISCONNECT:
                this.ondisconnect();
                break;
            case PacketType.CONNECT_ERROR:
                this.destroy();
                const err = new Error(packet.data.message);
                // @ts-ignore
                err.data = packet.data.data;
                this.emitReserved("connect_error", err);
                break;
        }
    }
    /**
     * Called upon a server event.
     *
     * @param packet
     * @private
     */
    onevent(packet) {
        const args = packet.data || [];
        if (null != packet.id) {
            args.push(this.ack(packet.id));
        }
        if (this.connected) {
            this.emitEvent(args);
        }
        else {
            this.receiveBuffer.push(Object.freeze(args));
        }
    }
    emitEvent(args) {
        if (this._anyListeners && this._anyListeners.length) {
            const listeners = this._anyListeners.slice();
            for (const listener of listeners) {
                listener.apply(this, args);
            }
        }
        super.emit.apply(this, args);
        if (this._pid && args.length && typeof args[args.length - 1] === "string") {
            this._lastOffset = args[args.length - 1];
        }
    }
    /**
     * Produces an ack callback to emit with an event.
     *
     * @private
     */
    ack(id) {
        const self = this;
        let sent = false;
        return function (...args) {
            // prevent double callbacks
            if (sent)
                return;
            sent = true;
            self.packet({
                type: PacketType.ACK,
                id: id,
                data: args,
            });
        };
    }
    /**
     * Called upon a server acknowledgement.
     *
     * @param packet
     * @private
     */
    onack(packet) {
        const ack = this.acks[packet.id];
        if (typeof ack !== "function") {
            return;
        }
        delete this.acks[packet.id];
        // @ts-ignore FIXME ack is incorrectly inferred as 'never'
        if (ack.withError) {
            packet.data.unshift(null);
        }
        // @ts-ignore
        ack.apply(this, packet.data);
    }
    /**
     * Called upon server connect.
     *
     * @private
     */
    onconnect(id, pid) {
        this.id = id;
        this.recovered = pid && this._pid === pid;
        this._pid = pid; // defined only if connection state recovery is enabled
        this.connected = true;
        this.emitBuffered();
        this.emitReserved("connect");
        this._drainQueue(true);
    }
    /**
     * Emit buffered events (received and emitted).
     *
     * @private
     */
    emitBuffered() {
        this.receiveBuffer.forEach((args) => this.emitEvent(args));
        this.receiveBuffer = [];
        this.sendBuffer.forEach((packet) => {
            this.notifyOutgoingListeners(packet);
            this.packet(packet);
        });
        this.sendBuffer = [];
    }
    /**
     * Called upon server disconnect.
     *
     * @private
     */
    ondisconnect() {
        this.destroy();
        this.onclose("io server disconnect");
    }
    /**
     * Called upon forced client/server side disconnections,
     * this method ensures the manager stops tracking us and
     * that reconnections don't get triggered for this.
     *
     * @private
     */
    destroy() {
        if (this.subs) {
            // clean subscriptions to avoid reconnections
            this.subs.forEach((subDestroy) => subDestroy());
            this.subs = undefined;
        }
        this.io["_destroy"](this);
    }
    /**
     * Disconnects the socket manually. In that case, the socket will not try to reconnect.
     *
     * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
     *
     * @example
     * const socket = io();
     *
     * socket.on("disconnect", (reason) => {
     *   // console.log(reason); prints "io client disconnect"
     * });
     *
     * socket.disconnect();
     *
     * @return self
     */
    disconnect() {
        if (this.connected) {
            this.packet({ type: PacketType.DISCONNECT });
        }
        // remove socket from pool
        this.destroy();
        if (this.connected) {
            // fire events
            this.onclose("io client disconnect");
        }
        return this;
    }
    /**
     * Alias for {@link disconnect()}.
     *
     * @return self
     */
    close() {
        return this.disconnect();
    }
    /**
     * Sets the compress flag.
     *
     * @example
     * socket.compress(false).emit("hello");
     *
     * @param compress - if `true`, compresses the sending data
     * @return self
     */
    compress(compress) {
        this.flags.compress = compress;
        return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
     * ready to send messages.
     *
     * @example
     * socket.volatile.emit("hello"); // the server may or may not receive it
     *
     * @returns self
     */
    get volatile() {
        this.flags.volatile = true;
        return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
     * given number of milliseconds have elapsed without an acknowledgement from the server:
     *
     * @example
     * socket.timeout(5000).emit("my-event", (err) => {
     *   if (err) {
     *     // the server did not acknowledge the event in the given delay
     *   }
     * });
     *
     * @returns self
     */
    timeout(timeout) {
        this.flags.timeout = timeout;
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * @example
     * socket.onAny((event, ...args) => {
     *   console.log(`got ${event}`);
     * });
     *
     * @param listener
     */
    onAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.push(listener);
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * @example
     * socket.prependAny((event, ...args) => {
     *   console.log(`got event ${event}`);
     * });
     *
     * @param listener
     */
    prependAny(listener) {
        this._anyListeners = this._anyListeners || [];
        this._anyListeners.unshift(listener);
        return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @example
     * const catchAllListener = (event, ...args) => {
     *   console.log(`got event ${event}`);
     * }
     *
     * socket.onAny(catchAllListener);
     *
     * // remove a specific listener
     * socket.offAny(catchAllListener);
     *
     * // or remove all listeners
     * socket.offAny();
     *
     * @param listener
     */
    offAny(listener) {
        if (!this._anyListeners) {
            return this;
        }
        if (listener) {
            const listeners = this._anyListeners;
            for (let i = 0; i < listeners.length; i++) {
                if (listener === listeners[i]) {
                    listeners.splice(i, 1);
                    return this;
                }
            }
        }
        else {
            this._anyListeners = [];
        }
        return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */
    listenersAny() {
        return this._anyListeners || [];
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * Note: acknowledgements sent to the server are not included.
     *
     * @example
     * socket.onAnyOutgoing((event, ...args) => {
     *   console.log(`sent event ${event}`);
     * });
     *
     * @param listener
     */
    onAnyOutgoing(listener) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
        this._anyOutgoingListeners.push(listener);
        return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * Note: acknowledgements sent to the server are not included.
     *
     * @example
     * socket.prependAnyOutgoing((event, ...args) => {
     *   console.log(`sent event ${event}`);
     * });
     *
     * @param listener
     */
    prependAnyOutgoing(listener) {
        this._anyOutgoingListeners = this._anyOutgoingListeners || [];
        this._anyOutgoingListeners.unshift(listener);
        return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @example
     * const catchAllListener = (event, ...args) => {
     *   console.log(`sent event ${event}`);
     * }
     *
     * socket.onAnyOutgoing(catchAllListener);
     *
     * // remove a specific listener
     * socket.offAnyOutgoing(catchAllListener);
     *
     * // or remove all listeners
     * socket.offAnyOutgoing();
     *
     * @param [listener] - the catch-all listener (optional)
     */
    offAnyOutgoing(listener) {
        if (!this._anyOutgoingListeners) {
            return this;
        }
        if (listener) {
            const listeners = this._anyOutgoingListeners;
            for (let i = 0; i < listeners.length; i++) {
                if (listener === listeners[i]) {
                    listeners.splice(i, 1);
                    return this;
                }
            }
        }
        else {
            this._anyOutgoingListeners = [];
        }
        return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */
    listenersAnyOutgoing() {
        return this._anyOutgoingListeners || [];
    }
    /**
     * Notify the listeners for each packet sent
     *
     * @param packet
     *
     * @private
     */
    notifyOutgoingListeners(packet) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const listeners = this._anyOutgoingListeners.slice();
            for (const listener of listeners) {
                listener.apply(this, packet.data);
            }
        }
    }
}

/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */
function Backoff(opts) {
    opts = opts || {};
    this.ms = opts.min || 100;
    this.max = opts.max || 10000;
    this.factor = opts.factor || 2;
    this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
    this.attempts = 0;
}
/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */
Backoff.prototype.duration = function () {
    var ms = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var rand = Math.random();
        var deviation = Math.floor(rand * this.jitter * ms);
        ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
    }
    return Math.min(ms, this.max) | 0;
};
/**
 * Reset the number of attempts.
 *
 * @api public
 */
Backoff.prototype.reset = function () {
    this.attempts = 0;
};
/**
 * Set the minimum duration
 *
 * @api public
 */
Backoff.prototype.setMin = function (min) {
    this.ms = min;
};
/**
 * Set the maximum duration
 *
 * @api public
 */
Backoff.prototype.setMax = function (max) {
    this.max = max;
};
/**
 * Set the jitter
 *
 * @api public
 */
Backoff.prototype.setJitter = function (jitter) {
    this.jitter = jitter;
};

class Manager extends Emitter {
    constructor(uri, opts) {
        var _a;
        super();
        this.nsps = {};
        this.subs = [];
        if (uri && "object" === typeof uri) {
            opts = uri;
            uri = undefined;
        }
        opts = opts || {};
        opts.path = opts.path || "/socket.io";
        this.opts = opts;
        installTimerFunctions(this, opts);
        this.reconnection(opts.reconnection !== false);
        this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
        this.reconnectionDelay(opts.reconnectionDelay || 1000);
        this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
        this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
        this.backoff = new Backoff({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor(),
        });
        this.timeout(null == opts.timeout ? 20000 : opts.timeout);
        this._readyState = "closed";
        this.uri = uri;
        const _parser = opts.parser || parser;
        this.encoder = new _parser.Encoder();
        this.decoder = new _parser.Decoder();
        this._autoConnect = opts.autoConnect !== false;
        if (this._autoConnect)
            this.open();
    }
    reconnection(v) {
        if (!arguments.length)
            return this._reconnection;
        this._reconnection = !!v;
        return this;
    }
    reconnectionAttempts(v) {
        if (v === undefined)
            return this._reconnectionAttempts;
        this._reconnectionAttempts = v;
        return this;
    }
    reconnectionDelay(v) {
        var _a;
        if (v === undefined)
            return this._reconnectionDelay;
        this._reconnectionDelay = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
        return this;
    }
    randomizationFactor(v) {
        var _a;
        if (v === undefined)
            return this._randomizationFactor;
        this._randomizationFactor = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
        return this;
    }
    reconnectionDelayMax(v) {
        var _a;
        if (v === undefined)
            return this._reconnectionDelayMax;
        this._reconnectionDelayMax = v;
        (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
        return this;
    }
    timeout(v) {
        if (!arguments.length)
            return this._timeout;
        this._timeout = v;
        return this;
    }
    /**
     * Starts trying to reconnect if reconnection is enabled and we have not
     * started reconnecting yet
     *
     * @private
     */
    maybeReconnectOnOpen() {
        // Only try to reconnect if it's the first time we're connecting
        if (!this._reconnecting &&
            this._reconnection &&
            this.backoff.attempts === 0) {
            // keeps reconnection from firing twice for the same reconnection loop
            this.reconnect();
        }
    }
    /**
     * Sets the current transport `socket`.
     *
     * @param {Function} fn - optional, callback
     * @return self
     * @public
     */
    open(fn) {
        if (~this._readyState.indexOf("open"))
            return this;
        this.engine = new Socket$1(this.uri, this.opts);
        const socket = this.engine;
        const self = this;
        this._readyState = "opening";
        this.skipReconnect = false;
        // emit `open`
        const openSubDestroy = on(socket, "open", function () {
            self.onopen();
            fn && fn();
        });
        const onError = (err) => {
            this.cleanup();
            this._readyState = "closed";
            this.emitReserved("error", err);
            if (fn) {
                fn(err);
            }
            else {
                // Only do this if there is no fn to handle the error
                this.maybeReconnectOnOpen();
            }
        };
        // emit `error`
        const errorSub = on(socket, "error", onError);
        if (false !== this._timeout) {
            const timeout = this._timeout;
            // set timer
            const timer = this.setTimeoutFn(() => {
                openSubDestroy();
                onError(new Error("timeout"));
                socket.close();
            }, timeout);
            if (this.opts.autoUnref) {
                timer.unref();
            }
            this.subs.push(() => {
                this.clearTimeoutFn(timer);
            });
        }
        this.subs.push(openSubDestroy);
        this.subs.push(errorSub);
        return this;
    }
    /**
     * Alias for open()
     *
     * @return self
     * @public
     */
    connect(fn) {
        return this.open(fn);
    }
    /**
     * Called upon transport open.
     *
     * @private
     */
    onopen() {
        // clear old subs
        this.cleanup();
        // mark as open
        this._readyState = "open";
        this.emitReserved("open");
        // add new subs
        const socket = this.engine;
        this.subs.push(on(socket, "ping", this.onping.bind(this)), on(socket, "data", this.ondata.bind(this)), on(socket, "error", this.onerror.bind(this)), on(socket, "close", this.onclose.bind(this)), on(this.decoder, "decoded", this.ondecoded.bind(this)));
    }
    /**
     * Called upon a ping.
     *
     * @private
     */
    onping() {
        this.emitReserved("ping");
    }
    /**
     * Called with data.
     *
     * @private
     */
    ondata(data) {
        try {
            this.decoder.add(data);
        }
        catch (e) {
            this.onclose("parse error", e);
        }
    }
    /**
     * Called when parser fully decodes a packet.
     *
     * @private
     */
    ondecoded(packet) {
        // the nextTick call prevents an exception in a user-provided event listener from triggering a disconnection due to a "parse error"
        nextTick(() => {
            this.emitReserved("packet", packet);
        }, this.setTimeoutFn);
    }
    /**
     * Called upon socket error.
     *
     * @private
     */
    onerror(err) {
        this.emitReserved("error", err);
    }
    /**
     * Creates a new socket for the given `nsp`.
     *
     * @return {Socket}
     * @public
     */
    socket(nsp, opts) {
        let socket = this.nsps[nsp];
        if (!socket) {
            socket = new Socket(this, nsp, opts);
            this.nsps[nsp] = socket;
        }
        else if (this._autoConnect && !socket.active) {
            socket.connect();
        }
        return socket;
    }
    /**
     * Called upon a socket close.
     *
     * @param socket
     * @private
     */
    _destroy(socket) {
        const nsps = Object.keys(this.nsps);
        for (const nsp of nsps) {
            const socket = this.nsps[nsp];
            if (socket.active) {
                return;
            }
        }
        this._close();
    }
    /**
     * Writes a packet.
     *
     * @param packet
     * @private
     */
    _packet(packet) {
        const encodedPackets = this.encoder.encode(packet);
        for (let i = 0; i < encodedPackets.length; i++) {
            this.engine.write(encodedPackets[i], packet.options);
        }
    }
    /**
     * Clean up transport subscriptions and packet buffer.
     *
     * @private
     */
    cleanup() {
        this.subs.forEach((subDestroy) => subDestroy());
        this.subs.length = 0;
        this.decoder.destroy();
    }
    /**
     * Close the current socket.
     *
     * @private
     */
    _close() {
        this.skipReconnect = true;
        this._reconnecting = false;
        this.onclose("forced close");
        if (this.engine)
            this.engine.close();
    }
    /**
     * Alias for close()
     *
     * @private
     */
    disconnect() {
        return this._close();
    }
    /**
     * Called upon engine close.
     *
     * @private
     */
    onclose(reason, description) {
        this.cleanup();
        this.backoff.reset();
        this._readyState = "closed";
        this.emitReserved("close", reason, description);
        if (this._reconnection && !this.skipReconnect) {
            this.reconnect();
        }
    }
    /**
     * Attempt a reconnection.
     *
     * @private
     */
    reconnect() {
        if (this._reconnecting || this.skipReconnect)
            return this;
        const self = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) {
            this.backoff.reset();
            this.emitReserved("reconnect_failed");
            this._reconnecting = false;
        }
        else {
            const delay = this.backoff.duration();
            this._reconnecting = true;
            const timer = this.setTimeoutFn(() => {
                if (self.skipReconnect)
                    return;
                this.emitReserved("reconnect_attempt", self.backoff.attempts);
                // check again for the case socket closed in above events
                if (self.skipReconnect)
                    return;
                self.open((err) => {
                    if (err) {
                        self._reconnecting = false;
                        self.reconnect();
                        this.emitReserved("reconnect_error", err);
                    }
                    else {
                        self.onreconnect();
                    }
                });
            }, delay);
            if (this.opts.autoUnref) {
                timer.unref();
            }
            this.subs.push(() => {
                this.clearTimeoutFn(timer);
            });
        }
    }
    /**
     * Called upon successful reconnect.
     *
     * @private
     */
    onreconnect() {
        const attempt = this.backoff.attempts;
        this._reconnecting = false;
        this.backoff.reset();
        this.emitReserved("reconnect", attempt);
    }
}

/**
 * Managers cache.
 */
const cache = {};
function lookup(uri, opts) {
    if (typeof uri === "object") {
        opts = uri;
        uri = undefined;
    }
    opts = opts || {};
    const parsed = url(uri, opts.path || "/socket.io");
    const source = parsed.source;
    const id = parsed.id;
    const path = parsed.path;
    const sameNamespace = cache[id] && path in cache[id]["nsps"];
    const newConnection = opts.forceNew ||
        opts["force new connection"] ||
        false === opts.multiplex ||
        sameNamespace;
    let io;
    if (newConnection) {
        io = new Manager(source, opts);
    }
    else {
        if (!cache[id]) {
            cache[id] = new Manager(source, opts);
        }
        io = cache[id];
    }
    if (parsed.query && !opts.query) {
        opts.query = parsed.queryKey;
    }
    return io.socket(parsed.path, opts);
}
// so that "lookup" can be used both as a function (e.g. `io(...)`) and as a
// namespace (e.g. `io.connect(...)`), for backward compatibility
Object.assign(lookup, {
    Manager,
    Socket,
    io: lookup,
    connect: lookup,
});

const iglooCalendarCss = ".sc-igloo-calendar-h{display:block;position:relative;background-color:#ffffff;height:100%;text-align:center}.igl-calendar.sc-igloo-calendar{display:grid;grid-template-columns:1fr;height:100%}.calendarScrollContainer.sc-igloo-calendar{width:100%;height:100%;overflow:auto;position:relative;white-space:nowrap;border-left:2px solid grey}.showToBeAssigned.sc-igloo-calendar,.showLegend.sc-igloo-calendar{grid-template-columns:330px 1fr}#calendarContainer.sc-igloo-calendar{position:absolute}.legendContainer.sc-igloo-calendar,.tobeAssignedContainer.sc-igloo-calendar{display:none;height:100%;overflow-y:auto;padding-left:0.5em !important;padding-right:0.5em !important}.showToBeAssigned.sc-igloo-calendar .tobeAssignedContainer.sc-igloo-calendar{display:block}.showLegend.sc-igloo-calendar .legendContainer.sc-igloo-calendar{display:block}.tobeBooked.sc-igloo-calendar{padding-top:8px;padding-bottom:8px;text-align:left}";
const IglooCalendarStyle0 = iglooCalendarCss;

const IglooCalendar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.dragOverHighlightElement = index.createEvent(this, "dragOverHighlightElement", 7);
        this.moveBookingTo = index.createEvent(this, "moveBookingTo", 7);
        this.calculateUnassignedDates = index.createEvent(this, "calculateUnassignedDates", 7);
        this.reduceAvailableUnitEvent = index.createEvent(this, "reduceAvailableUnitEvent", 7);
        this.revertBooking = index.createEvent(this, "revertBooking", 7);
        this.bookingService = new booking_service.BookingService();
        this.roomService = new room_service.RoomService();
        this.eventsService = new EventsService();
        this.toBeAssignedService = new ToBeAssignedService();
        // private auth = new Auth();
        this.countryNodeList = [];
        this.visibleCalendarCells = { x: [], y: [] };
        this.today = '';
        this.reachedEndOfCalendar = false;
        this.token = new Token.Token();
        this.scrollViewDragPos = { top: 0, left: 0, x: 0, y: 0 };
        this.onScrollContentMoveHandler = (event) => {
            if (event.buttons !== 1) {
                return;
            }
            const dx = event.clientX - this.scrollViewDragPos.x;
            const dy = event.clientY - this.scrollViewDragPos.y;
            this.scrollContainer.scrollTop = this.scrollViewDragPos.top - dy;
            this.scrollContainer.scrollLeft = this.scrollViewDragPos.left - dx;
            if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
                this.scrollViewDragging = true;
            }
        };
        this.onScrollContentMoveEndHandler = () => {
            document.removeEventListener('mousemove', this.onScrollContentMoveHandler);
            document.removeEventListener('mouseup', this.onScrollContentMoveEndHandler);
        };
        this.propertyid = undefined;
        this.from_date = undefined;
        this.to_date = undefined;
        this.language = undefined;
        this.loadingMessage = undefined;
        this.currencyName = undefined;
        this.ticket = '';
        this.p = undefined;
        this.calendarData = new Object();
        this.property_id = undefined;
        this.days = new Array();
        this.scrollViewDragging = false;
        this.dialogData = null;
        this.bookingItem = null;
        this.editBookingItem = null;
        this.showLegend = false;
        this.showPaymentDetails = false;
        this.showToBeAssigned = false;
        this.unassignedDates = {};
        this.roomNightsData = null;
        this.renderAgain = false;
        this.showBookProperty = false;
        this.totalAvailabilityQueue = [];
        this.highlightedDate = undefined;
        this.calDates = undefined;
        this.isAuthenticated = false;
    }
    componentWillLoad() {
        this.init();
    }
    componentDidLoad() {
        this.scrollToElement(this.today);
    }
    async handleDeleteEvent(ev) {
        try {
            ev.stopImmediatePropagation();
            ev.preventDefault();
            await this.eventsService.deleteEvent(ev.detail);
        }
        catch (error) {
            //toastr.error(error);
        }
    }
    scrollPageToRoom(event) {
        let targetScrollClass = event.detail.refClass;
        this.scrollContainer = this.scrollContainer || this.element.querySelector('.calendarScrollContainer');
        const topLeftCell = this.element.querySelector('.topLeftCell');
        const gotoRoom = this.element.querySelector('.' + targetScrollClass);
        if (gotoRoom) {
            this.scrollContainer.scrollTo({ top: 0 });
            const gotoRect = gotoRoom.getBoundingClientRect();
            const containerRect = this.scrollContainer.getBoundingClientRect();
            const topLeftCellRect = topLeftCell.getBoundingClientRect();
            this.scrollContainer.scrollTo({
                top: gotoRect.top - containerRect.top - topLeftCellRect.height - gotoRect.height,
            });
        }
    }
    handleShowDialog(event) {
        this.dialogData = event.detail;
        let modal = this.element.querySelector('ir-modal');
        if (modal) {
            modal.openModal();
        }
    }
    handleShowRoomNightsDialog(event) {
        this.roomNightsData = event.detail;
    }
    handleBookingDatasChange(event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        let bookings = [...this.calendarData.bookingEvents];
        bookings = bookings.filter(bookingEvent => bookingEvent.ID !== 'NEW_TEMP_EVENT');
        bookings.push(...event.detail.filter(ev => ev.STATUS === 'PENDING-CONFIRMATION'));
        this.updateBookingEventsDateRange(event.detail);
        this.calendarData = Object.assign(Object.assign({}, this.calendarData), { bookingEvents: bookings });
    }
    handleUpdateBookingEvent(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        const newBookingEvent = e.detail;
        this.calendarData = Object.assign(Object.assign({}, this.calendarData), { bookingEvents: this.calendarData.bookingEvents.map(event => {
                if (newBookingEvent.ID === event.ID) {
                    return newBookingEvent;
                }
                return event;
            }) });
    }
    showBookingPopupEventDataHandler(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        this.onOptionSelect(event);
        //console.log("show booking event", event);
    }
    updateEventDataHandler(event) {
        let bookedData = this.calendarData.bookingEvents.find(bookedEvent => bookedEvent.id === event.detail.id);
        if (bookedData && event.detail && event.detail.data) {
            Object.entries(event.detail.data).forEach(([key, value]) => {
                bookedData[key] = value;
            });
        }
    }
    dragOverEventDataHandler(event) {
        if (event.detail.id === 'CALCULATE_DRAG_OVER_BOUNDS') {
            let topLeftCell = document.querySelector('igl-cal-header .topLeftCell');
            let containerDays = document.querySelectorAll('.headersContainer .headerCell');
            let containerRooms = document.querySelectorAll('.bodyContainer .roomRow .roomTitle');
            this.visibleCalendarCells = { x: [], y: [] };
            containerDays.forEach(element => {
                const htmlElement = element;
                this.visibleCalendarCells.x.push({
                    left: htmlElement.offsetLeft + topLeftCell.offsetWidth,
                    width: htmlElement.offsetWidth,
                    id: htmlElement.getAttribute('data-day'),
                });
            });
            containerRooms.forEach(element => {
                const htmlElement = element;
                this.visibleCalendarCells.y.push({
                    top: htmlElement.offsetTop,
                    height: htmlElement.offsetHeight,
                    id: htmlElement.getAttribute('data-room'),
                });
            });
            this.highlightDragOver(true, event.detail.data);
        }
        else if (event.detail.id === 'DRAG_OVER') {
            this.highlightDragOver(true, event.detail.data);
        }
        else if (event.detail.id === 'DRAG_OVER_END') {
            this.highlightDragOver(false, event.detail.data);
        }
        else if (event.detail.id === 'STRETCH_OVER_END') {
            this.highlightDragOver(false, event.detail.data);
        }
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        this.initializeApp();
    }
    init() {
        this.calDates = {
            from: this.from_date,
            to: this.to_date,
        };
        if (this.ticket !== '') {
            this.token.setToken(this.ticket);
            this.initializeApp();
        }
        this.calDates = {
            from: this.from_date,
            to: this.to_date,
        };
        handleUnAssignedDatesChange('unassigned_dates', newValue => {
            if (Object.keys(newValue).length === 0 && this.highlightedDate !== '') {
                this.highlightedDate = '';
            }
        });
    }
    setUpCalendarData(roomResp, bookingResp) {
        console.log(roomResp);
        this.calendarData.currency = roomResp['My_Result'].currency;
        this.calendarData.allowedBookingSources = roomResp['My_Result'].allowed_booking_sources;
        this.calendarData.adultChildConstraints = roomResp['My_Result'].adult_child_constraints;
        console.log(this.calendarData.allowedBookingSources);
        this.calendarData.legendData = this.getLegendData(roomResp);
        this.calendarData.is_vacation_rental = roomResp['My_Result'].is_vacation_rental;
        this.calendarData.from_date = bookingResp.My_Params_Get_Rooming_Data.FROM;
        this.calendarData.to_date = bookingResp.My_Params_Get_Rooming_Data.TO;
        this.calendarData.startingDate = new Date(bookingResp.My_Params_Get_Rooming_Data.FROM).getTime();
        this.calendarData.endingDate = new Date(bookingResp.My_Params_Get_Rooming_Data.TO).getTime();
        this.calendarData.formattedLegendData = utils.formatLegendColors(this.calendarData.legendData);
        let bookings = bookingResp.myBookings || [];
        bookings = bookings.filter(bookingEvent => {
            const toDate = moment.hooks(bookingEvent.TO_DATE, 'YYYY-MM-DD');
            const fromDate = moment.hooks(bookingEvent.FROM_DATE, 'YYYY-MM-DD');
            return !toDate.isSame(fromDate);
        });
        this.calendarData.bookingEvents = bookings;
        this.calendarData.toBeAssignedEvents = [];
    }
    async initializeApp() {
        try {
            let propertyId = this.propertyid;
            if (!this.propertyid && !this.p) {
                throw new Error('Property ID or username is required');
            }
            let roomResp = null;
            if (!propertyId) {
                console.log(propertyId);
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                });
                roomResp = propertyData;
                propertyId = propertyData.My_Result.id;
            }
            this.property_id = propertyId;
            const requests = [
                this.bookingService.getCalendarData(propertyId, this.from_date, this.to_date),
                this.bookingService.getCountries(this.language),
                this.roomService.fetchLanguage(this.language),
            ];
            if (this.propertyid) {
                requests.push(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: this.language,
                    is_backend: true,
                }));
            }
            const results = await Promise.all(requests);
            if (!roomResp) {
                roomResp = results[results.length - 1];
            }
            const [bookingResp, countryNodeList] = results;
            booking.calendar_dates.days = bookingResp.days;
            booking.calendar_dates.months = bookingResp.months;
            this.setRoomsData(roomResp);
            this.countryNodeList = countryNodeList;
            this.setUpCalendarData(roomResp, bookingResp);
            let paymentMethods = roomResp['My_Result']['allowed_payment_methods'];
            this.showPaymentDetails = paymentMethods.some(item => item.code === '001' || item.code === '004');
            this.updateBookingEventsDateRange(this.calendarData.bookingEvents);
            this.updateBookingEventsDateRange(this.calendarData.toBeAssignedEvents);
            this.today = this.transformDateForScroll(new Date());
            let startingDay = new Date(this.calendarData.startingDate);
            startingDay.setHours(0, 0, 0, 0);
            this.days = bookingResp.days;
            this.calendarData.days = this.days;
            this.calendarData.monthsInfo = bookingResp.months;
            booking.calendar_dates.fromDate = this.calendarData.from_date;
            booking.calendar_dates.toDate = this.calendarData.to_date;
            setTimeout(() => {
                this.scrollToElement(this.today);
            }, 200);
            if (!this.calendarData.is_vacation_rental) {
                const data = await this.toBeAssignedService.getUnassignedDates(this.property_id, utils.dateToFormattedString(new Date()), this.to_date);
                this.unassignedDates = { fromDate: this.from_date, toDate: this.to_date, data: Object.assign(Object.assign({}, this.unassignedDates), data) };
                this.calendarData = Object.assign(Object.assign({}, this.calendarData), { unassignedDates: data });
                addUnassignedDates(data);
            }
            this.socket = lookup('https://realtime.igloorooms.com/');
            this.socket.on('MSG', async (msg) => {
                await this.handleSocketMessage(msg);
            });
        }
        catch (error) {
            console.error('Initializing Calendar Error', error);
        }
    }
    async handleSocketMessage(msg) {
        const msgAsObject = JSON.parse(msg);
        if (!msgAsObject) {
            return;
        }
        const { REASON, KEY, PAYLOAD } = msgAsObject;
        if (KEY.toString() !== this.property_id.toString()) {
            return;
        }
        let result;
        if (['DELETE_CALENDAR_POOL', 'GET_UNASSIGNED_DATES'].includes(REASON)) {
            result = PAYLOAD;
        }
        else {
            result = JSON.parse(PAYLOAD);
        }
        const reasonHandlers = {
            DORESERVATION: this.handleDoReservation,
            BLOCK_EXPOSED_UNIT: this.handleBlockExposedUnit,
            ASSIGN_EXPOSED_ROOM: this.handleAssignExposedRoom,
            REALLOCATE_EXPOSED_ROOM_BLOCK: this.handleReallocateExposedRoomBlock,
            DELETE_CALENDAR_POOL: this.handleDeleteCalendarPool,
            GET_UNASSIGNED_DATES: this.handleGetUnassignedDates,
            UPDATE_CALENDAR_AVAILABILITY: this.handleUpdateCalendarAvailability,
            CHANGE_IN_DUE_AMOUNT: this.handleChangeInDueAmount,
            CHANGE_IN_BOOK_STATUS: this.handleChangeInBookStatus,
            NON_TECHNICAL_CHANGE_IN_BOOKING: this.handleNonTechnicalChangeInBooking,
        };
        const handler = reasonHandlers[REASON];
        if (handler) {
            await handler.call(this, result);
        }
        else {
            console.warn(`Unhandled REASON: ${REASON}`);
        }
    }
    async handleDoReservation(result) {
        const transformedBooking = booking.transformNewBooking(result);
        this.AddOrUpdateRoomBookings(transformedBooking);
    }
    async handleBlockExposedUnit(result) {
        const transformedBooking = [await booking.transformNewBLockedRooms(result)];
        this.AddOrUpdateRoomBookings(transformedBooking);
    }
    async handleAssignExposedRoom(result) {
        const transformedBooking = booking.transformNewBooking(result);
        this.AddOrUpdateRoomBookings(transformedBooking);
    }
    async handleReallocateExposedRoomBlock(result) {
        await this.handleBlockExposedUnit(result);
    }
    async handleDeleteCalendarPool(result) {
        console.log('delete calendar pool');
        this.calendarData = Object.assign(Object.assign({}, this.calendarData), { bookingEvents: this.calendarData.bookingEvents.filter(e => e.POOL !== result) });
    }
    async handleGetUnassignedDates(result) {
        const parsedResult = this.parseDateRange(result);
        if (!this.calendarData.is_vacation_rental &&
            new Date(parsedResult.FROM_DATE).getTime() >= this.calendarData.startingDate &&
            new Date(parsedResult.TO_DATE).getTime() <= this.calendarData.endingDate) {
            const data = await this.toBeAssignedService.getUnassignedDates(this.property_id, utils.dateToFormattedString(new Date(parsedResult.FROM_DATE)), utils.dateToFormattedString(new Date(parsedResult.TO_DATE)));
            addUnassignedDates(data);
            this.unassignedDates = {
                fromDate: utils.dateToFormattedString(new Date(parsedResult.FROM_DATE)),
                toDate: utils.dateToFormattedString(new Date(parsedResult.TO_DATE)),
                data,
            };
            if (Object.keys(data).length === 0) {
                removeUnassignedDates(utils.dateToFormattedString(new Date(parsedResult.FROM_DATE)), utils.dateToFormattedString(new Date(parsedResult.TO_DATE)));
                this.reduceAvailableUnitEvent.emit({
                    fromDate: utils.dateToFormattedString(new Date(parsedResult.FROM_DATE)),
                    toDate: utils.dateToFormattedString(new Date(parsedResult.TO_DATE)),
                });
            }
        }
    }
    parseDateRange(str) {
        const result = {};
        const pairs = str.split('|');
        pairs.forEach(pair => {
            const res = pair.split(':');
            result[res[0]] = res[1];
        });
        return result;
    }
    handleUpdateCalendarAvailability(result) {
        this.totalAvailabilityQueue.push(result);
        if (this.totalAvailabilityQueue.length > 0) {
            clearTimeout(this.availabilityTimeout);
        }
        this.availabilityTimeout = setTimeout(() => {
            this.updateTotalAvailability();
        }, 1000);
    }
    handleChangeInDueAmount(result) {
        this.calendarData = Object.assign(Object.assign({}, this.calendarData), { bookingEvents: this.calendarData.bookingEvents.map(event => {
                if (result.pools.includes(event.ID)) {
                    return Object.assign(Object.assign({}, event), { BALANCE: result.due_amount });
                }
                return event;
            }) });
    }
    handleChangeInBookStatus(result) {
        this.calendarData = Object.assign(Object.assign({}, this.calendarData), { bookingEvents: this.calendarData.bookingEvents.map(event => {
                if (result.pools.includes(event.ID)) {
                    return Object.assign(Object.assign({}, event), { STATUS: event.STATUS !== 'IN-HOUSE' ? booking.bookingStatus[result.status_code] : result.status_code === '001' ? booking.bookingStatus[result.status_code] : 'IN-HOUSE' });
                }
                return event;
            }) });
    }
    handleNonTechnicalChangeInBooking(result) {
        this.calendarData = Object.assign(Object.assign({}, this.calendarData), { bookingEvents: this.calendarData.bookingEvents.map(event => {
                if (event.BOOKING_NUMBER === result.booking_nbr) {
                    return Object.assign(Object.assign({}, event), { PRIVATE_NOTE: booking.getPrivateNote(result.extras) });
                }
                return event;
            }) });
    }
    checkBookingAvailability(data) {
        return this.calendarData.bookingEvents.some(booking => booking.ID === data.ID || (booking.FROM_DATE === data.FROM_DATE && booking.TO_DATE === data.TO_DATE && booking.PR_ID === data.PR_ID));
    }
    updateBookingEventsDateRange(eventData) {
        const now = moment.hooks();
        eventData.forEach(bookingEvent => {
            bookingEvent.legendData = this.calendarData.formattedLegendData;
            bookingEvent.defaultDateRange = {};
            bookingEvent.defaultDateRange.fromDate = new Date(bookingEvent.FROM_DATE + 'T00:00:00');
            bookingEvent.defaultDateRange.fromDateStr = this.getDateStr(bookingEvent.defaultDateRange.fromDate);
            bookingEvent.defaultDateRange.fromDateTimeStamp = bookingEvent.defaultDateRange.fromDate.getTime();
            bookingEvent.defaultDateRange.toDate = new Date(bookingEvent.TO_DATE + 'T00:00:00');
            bookingEvent.defaultDateRange.toDateStr = this.getDateStr(bookingEvent.defaultDateRange.toDate);
            bookingEvent.defaultDateRange.toDateTimeStamp = bookingEvent.defaultDateRange.toDate.getTime();
            bookingEvent.defaultDateRange.dateDifference = bookingEvent.NO_OF_DAYS;
            bookingEvent.roomsInfo = [...this.calendarData.roomsInfo];
            if (!utils.isBlockUnit(bookingEvent.STATUS_CODE)) {
                const toDate = moment.hooks(bookingEvent.TO_DATE, 'YYYY-MM-DD');
                const fromDate = moment.hooks(bookingEvent.FROM_DATE, 'YYYY-MM-DD');
                if (bookingEvent.STATUS !== 'PENDING') {
                    if (fromDate.isSame(now, 'day') && now.hour() >= 12) {
                        bookingEvent.STATUS = booking.bookingStatus['000'];
                    }
                    else if (now.isAfter(fromDate, 'day') && now.isBefore(toDate, 'day')) {
                        bookingEvent.STATUS = booking.bookingStatus['000'];
                    }
                    else if (toDate.isSame(now, 'day') && now.hour() < 12) {
                        bookingEvent.STATUS = booking.bookingStatus['000'];
                    }
                    else if ((toDate.isSame(now, 'day') && now.hour() >= 12) || toDate.isBefore(now, 'day')) {
                        bookingEvent.STATUS = booking.bookingStatus['003'];
                    }
                }
            }
        });
    }
    updateTotalAvailability() {
        let days = [...booking.calendar_dates.days];
        this.totalAvailabilityQueue.forEach(queue => {
            let selectedDate = new Date(queue.date);
            selectedDate.setMilliseconds(0);
            selectedDate.setSeconds(0);
            selectedDate.setMinutes(0);
            selectedDate.setHours(0);
            //find the selected day
            const index = days.findIndex(day => day.currentDate === selectedDate.getTime());
            if (index != -1) {
                //find room_type_id
                const room_type_index = days[index].rate.findIndex(room => room.id === queue.room_type_id);
                if (room_type_index != -1) {
                    days[index].rate[room_type_index].exposed_inventory.rts = queue.availability;
                }
            }
        });
        booking.calendar_dates.days = [...days];
    }
    setRoomsData(roomServiceResp) {
        var _a, _b;
        let roomsData = new Array();
        if ((_b = (_a = roomServiceResp.My_Result) === null || _a === void 0 ? void 0 : _a.roomtypes) === null || _b === void 0 ? void 0 : _b.length) {
            roomsData = roomServiceResp.My_Result.roomtypes;
            roomServiceResp.My_Result.roomtypes.forEach(roomCategory => {
                roomCategory.expanded = true;
            });
        }
        calendarData.calendar_data.roomsInfo = roomsData;
        this.calendarData.roomsInfo = roomsData;
    }
    getLegendData(aData) {
        return aData['My_Result'].calendar_legends;
    }
    getDateStr(date, locale = 'default') {
        return date.getDate() + ' ' + date.toLocaleString(locale, { month: 'short' }) + ' ' + date.getFullYear();
    }
    scrollToElement(goToDate) {
        this.scrollContainer = this.scrollContainer || this.element.querySelector('.calendarScrollContainer');
        const topLeftCell = this.element.querySelector('.topLeftCell');
        const gotoDay = this.element.querySelector('.day-' + goToDate);
        if (gotoDay) {
            this.scrollContainer.scrollTo({ left: 0 });
            const gotoRect = gotoDay.getBoundingClientRect();
            const containerRect = this.scrollContainer.getBoundingClientRect();
            const topLeftCellRect = topLeftCell.getBoundingClientRect();
            this.scrollContainer.scrollTo({
                left: gotoRect.left - containerRect.left - topLeftCellRect.width - gotoRect.width,
            });
        }
    }
    AddOrUpdateRoomBookings(data, pool = undefined) {
        let bookings = [...this.calendarData.bookingEvents];
        data.forEach(d => {
            if (!this.checkBookingAvailability(d)) {
                bookings = bookings.filter(booking => booking.ID !== d.ID);
            }
        });
        this.updateBookingEventsDateRange(data);
        if (pool) {
            bookings = bookings.filter(booking => booking.POOL === pool);
        }
        data.forEach(d => {
            if (!bookings.some(booking => booking.ID === d.ID)) {
                bookings.push(d);
            }
        });
        this.calendarData = Object.assign(Object.assign({}, this.calendarData), { bookingEvents: bookings });
    }
    transformDateForScroll(date) {
        return moment.hooks(date).format('D_M_YYYY');
    }
    shouldRenderCalendarView() {
        // console.log("rendering...")
        return this.calendarData && this.calendarData.days && this.calendarData.days.length;
    }
    onOptionSelect(event) {
        const opt = event.detail;
        const calendarElement = this.element.querySelector('#iglooCalendar');
        switch (opt.key) {
            case 'showAssigned':
                calendarElement.classList.remove('showLegend');
                calendarElement.classList.remove('showToBeAssigned');
                calendarElement.classList.toggle('showToBeAssigned');
                this.showLegend = false;
                this.showToBeAssigned = true;
                break;
            case 'showLegend':
                calendarElement.classList.remove('showToBeAssigned');
                calendarElement.classList.remove('showLegend');
                calendarElement.classList.toggle('showLegend');
                this.showLegend = true;
                this.showToBeAssigned = false;
                break;
            case 'calendar':
                let dt = new Date();
                if (opt.data.start !== undefined && opt.data.end !== undefined) {
                    dt = opt.data.start.toDate();
                    this.handleDateSearch(opt.data);
                }
                else {
                    //scroll to unassigned dates
                    dt = new Date(opt.data);
                    dt.setDate(dt.getDate() + 1);
                    if (!(opt === null || opt === void 0 ? void 0 : opt.noScroll)) {
                        this.scrollToElement(dt.getDate() + '_' + (dt.getMonth() + 1) + '_' + dt.getFullYear());
                    }
                }
                this.highlightedDate = this.transformDateForScroll(dt);
                break;
            case 'search':
                break;
            case 'add':
                //console.log('data:', opt.data);
                if (opt.data.event_type !== 'EDIT_BOOKING') {
                    this.bookingItem = opt.data;
                }
                else {
                    this.editBookingItem = opt.data;
                }
                break;
            case 'gotoToday':
                this.scrollToElement(this.today);
                break;
            case 'closeSideMenu':
                this.closeSideMenu();
                this.highlightedDate = '';
                this.showBookProperty = false;
                break;
        }
    }
    async addDatesToCalendar(fromDate, toDate) {
        const results = await this.bookingService.getCalendarData(this.property_id, fromDate, toDate);
        const newBookings = results.myBookings || [];
        this.updateBookingEventsDateRange(newBookings);
        if (new Date(fromDate).getTime() < new Date(this.calendarData.startingDate).getTime()) {
            this.calendarData.startingDate = new Date(fromDate).getTime();
            this.calendarData.from_date = fromDate;
            booking.calendar_dates.fromDate = this.calendarData.from_date;
            this.days = [...results.days, ...this.days];
            let newMonths = [...results.months];
            if (this.calendarData.monthsInfo[0].monthName === results.months[results.months.length - 1].monthName) {
                this.calendarData.monthsInfo[0].daysCount = this.calendarData.monthsInfo[0].daysCount + results.months[results.months.length - 1].daysCount;
                newMonths.pop();
            }
            let bookings = JSON.parse(JSON.stringify(newBookings));
            bookings = bookings.filter(newBooking => {
                const existingBookingIndex = this.calendarData.bookingEvents.findIndex(event => event.ID === newBooking.ID);
                if (existingBookingIndex !== -1) {
                    this.calendarData.bookingEvents[existingBookingIndex].FROM_DATE = newBooking.FROM_DATE;
                    this.calendarData.bookingEvents[existingBookingIndex].NO_OF_DAYS = booking.calculateDaysBetweenDates(newBooking.FROM_DATE, this.calendarData.bookingEvents[existingBookingIndex].TO_DATE);
                    return false;
                }
                return true;
            });
            booking.calendar_dates.days = this.days;
            this.calendarData = Object.assign(Object.assign({}, this.calendarData), { days: this.days, monthsInfo: [...newMonths, ...this.calendarData.monthsInfo], bookingEvents: [...this.calendarData.bookingEvents, ...bookings] });
        }
        else {
            this.calendarData.endingDate = new Date(toDate).getTime();
            this.calendarData.to_date = toDate;
            booking.calendar_dates.toDate = this.calendarData.to_date;
            let newMonths = [...results.months];
            this.days = [...this.days, ...results.days];
            if (this.calendarData.monthsInfo[this.calendarData.monthsInfo.length - 1].monthName === results.months[0].monthName) {
                this.calendarData.monthsInfo[this.calendarData.monthsInfo.length - 1].daysCount =
                    this.calendarData.monthsInfo[this.calendarData.monthsInfo.length - 1].daysCount + results.months[0].daysCount;
                newMonths.shift();
            }
            let bookings = JSON.parse(JSON.stringify(newBookings));
            bookings = bookings.filter(newBooking => {
                const existingBookingIndex = this.calendarData.bookingEvents.findIndex(event => event.ID === newBooking.ID);
                if (existingBookingIndex !== -1) {
                    this.calendarData.bookingEvents[existingBookingIndex].TO_DATE = newBooking.TO_DATE;
                    this.calendarData.bookingEvents[existingBookingIndex].NO_OF_DAYS = booking.calculateDaysBetweenDates(this.calendarData.bookingEvents[existingBookingIndex].FROM_DATE, newBooking.TO_DATE);
                    return false;
                }
                return true;
            });
            booking.calendar_dates.days = this.days;
            //calendar_dates.months = bookingResp.months;
            this.calendarData = Object.assign(Object.assign({}, this.calendarData), { days: this.days, monthsInfo: [...this.calendarData.monthsInfo, ...newMonths], bookingEvents: [...this.calendarData.bookingEvents, ...bookings] });
            const data = await this.toBeAssignedService.getUnassignedDates(this.property_id, fromDate, toDate);
            this.calendarData.unassignedDates = Object.assign(Object.assign({}, this.calendarData.unassignedDates), data);
            this.unassignedDates = {
                fromDate,
                toDate,
                data,
            };
            addUnassignedDates(data);
        }
    }
    async handleDateSearch(dates) {
        const startDate = moment.hooks(dates.start).toDate();
        const defaultFromDate = moment.hooks(this.calDates.from).toDate();
        const endDate = dates.end.toDate();
        const defaultToDate = this.calendarData.endingDate;
        if (startDate.getTime() < new Date(this.calDates.from).getTime()) {
            await this.addDatesToCalendar(moment.hooks(startDate).add(-1, 'days').format('YYYY-MM-DD'), moment.hooks(defaultFromDate).add(-1, 'days').format('YYYY-MM-DD'));
            this.calDates = Object.assign(Object.assign({}, this.calDates), { from: dates.start.add(-1, 'days').format('YYYY-MM-DD') });
            this.scrollToElement(this.transformDateForScroll(startDate));
        }
        else if (startDate.getTime() > defaultFromDate.getTime() && startDate.getTime() < defaultToDate && endDate.getTime() < defaultToDate) {
            this.scrollToElement(this.transformDateForScroll(startDate));
        }
        else if (startDate.getTime() > defaultToDate) {
            const nextDay = utils.getNextDay(new Date(this.calendarData.endingDate));
            await this.addDatesToCalendar(nextDay, moment.hooks(endDate).add(2, 'months').format('YYYY-MM-DD'));
            this.scrollToElement(this.transformDateForScroll(startDate));
        }
    }
    closeSideMenu() {
        const calendarElement = this.element.querySelector('#iglooCalendar');
        calendarElement.classList.remove('showToBeAssigned');
        calendarElement.classList.remove('showLegend');
        this.showLegend = false;
        this.showToBeAssigned = false;
    }
    dragScrollContent(event) {
        this.scrollViewDragging = false;
        let isPreventPageScroll = event && event.target ? this.hasAncestorWithClass(event.target, 'preventPageScroll') : false;
        if (!isPreventPageScroll && event.buttons === 1) {
            this.scrollViewDragPos = {
                left: this.scrollContainer.scrollLeft,
                top: this.scrollContainer.scrollTop,
                x: event.clientX,
                y: event.clientY,
            };
            document.addEventListener('mousemove', this.onScrollContentMoveHandler);
            document.addEventListener('mouseup', this.onScrollContentMoveEndHandler);
        }
    }
    calendarScrolling() {
        if (this.scrollContainer) {
            if (this.highlightedDate) {
                const highlightedElement = document.querySelector(`.day-${this.highlightedDate}`);
                if (highlightedElement) {
                    const { left, right } = highlightedElement.getBoundingClientRect();
                    const isVisible = left >= 0 && right <= window.innerWidth;
                    if (!isVisible) {
                        this.highlightedDate = '';
                    }
                }
            }
            const containerRect = this.scrollContainer.getBoundingClientRect();
            let leftSideMenuSize = 170;
            let maxWidth = containerRect.width - leftSideMenuSize;
            let leftX = containerRect.x + leftSideMenuSize;
            let rightX = containerRect.x + containerRect.width;
            let cells = Array.from(this.element.querySelectorAll('.monthCell'));
            if (cells.length) {
                cells.map(async (monthContainer) => {
                    let monthRect = monthContainer.getBoundingClientRect();
                    if (cells.indexOf(monthContainer) === cells.length - 1) {
                        if (monthRect.x + monthRect.width <= rightX && !this.reachedEndOfCalendar) {
                            this.reachedEndOfCalendar = true;
                            //await this.addNextTwoMonthsToCalendar();
                            const nextTwoMonths = utils.addTwoMonthToDate(new Date(this.calendarData.endingDate));
                            const nextDay = utils.getNextDay(new Date(this.calendarData.endingDate));
                            await this.addDatesToCalendar(nextDay, nextTwoMonths);
                            this.reachedEndOfCalendar = false;
                        }
                    }
                    if (monthRect.x + monthRect.width < leftX) ;
                    else if (monthRect.x > rightX) ;
                    else {
                        let titleElement = monthContainer.querySelector('.monthTitle');
                        let marginLeft = 0;
                        let monthWidth = monthRect.width;
                        if (monthRect.x < leftX) {
                            marginLeft = Math.abs(monthRect.x) - leftX;
                            marginLeft = monthRect.x < 0 ? Math.abs(monthRect.x) + leftX : Math.abs(marginLeft);
                            monthWidth = monthRect.x + monthRect.width > rightX ? maxWidth : monthRect.x + monthRect.width - leftX;
                        }
                        else {
                            monthWidth = maxWidth - monthWidth > monthWidth ? monthWidth : maxWidth - monthRect.x + leftX;
                        }
                        titleElement.style.marginLeft = marginLeft + 'px';
                        titleElement.style.width = monthWidth + 'px';
                    }
                });
            }
        }
    }
    hasAncestorWithClass(element, className) {
        let currentElement = element;
        while (currentElement !== null) {
            if (currentElement.matches(`.${className}`)) {
                return true;
            }
            currentElement = currentElement.parentElement;
        }
        return false;
    }
    async highlightDragOver(hightLightElement, currentPosition) {
        let xElement, yElement;
        if (currentPosition) {
            xElement = this.visibleCalendarCells.x.find(pos => pos.left < currentPosition.x && currentPosition.x <= pos.left + pos.width);
            yElement = this.visibleCalendarCells.y.find(pos => pos.top < currentPosition.y && currentPosition.y <= pos.top + pos.height);
        }
        // console.log(hightLightElement+":::"+yElement.id+"_"+xElement.id);
        if (hightLightElement && xElement && yElement) {
            this.dragOverHighlightElement.emit({
                dragOverElement: yElement.id + '_' + xElement.id,
            });
        }
        else {
            this.dragOverHighlightElement.emit({ dragOverElement: '' });
        }
        if (!hightLightElement) {
            this.moveBookingTo.emit({
                bookingId: currentPosition.id,
                fromRoomId: currentPosition.fromRoomId,
                toRoomId: (yElement && yElement.id) || 'revert',
                moveToDay: (xElement && xElement.id) || 'revert',
                pool: currentPosition.pool,
                from_date: utils.convertDMYToISO(xElement && xElement.id),
                to_date: utils.computeEndDate(xElement && xElement.id, currentPosition.nbOfDays),
            });
        }
    }
    handleModalConfirm() {
        const { pool, toRoomId, from_date, to_date } = this.dialogData;
        this.eventsService
            .reallocateEvent(pool, toRoomId, from_date, to_date)
            .then(() => {
            this.dialogData = null;
        })
            .catch(() => {
            this.revertBooking.emit(pool);
        });
    }
    handleModalCancel() {
        this.revertBooking.emit(this.dialogData.pool);
        this.dialogData = null;
    }
    handleRoomNightsDialogClose(e) {
        if (e.detail.type === 'cancel') {
            this.revertBooking.emit(this.roomNightsData.pool);
        }
        this.roomNightsData = null;
    }
    handleSideBarToggle(e) {
        if (e.detail) {
            if (this.editBookingItem) {
                this.editBookingItem = null;
            }
            if (this.roomNightsData) {
                this.revertBooking.emit(this.roomNightsData.pool);
                this.roomNightsData = null;
            }
            if (this.dialogData) {
                this.revertBooking.emit(this.dialogData.pool);
                this.dialogData = null;
            }
        }
    }
    handleCloseBookingWindow() {
        this.bookingItem = null;
    }
    render() {
        var _a, _b;
        // if (!this.isAuthenticated) {
        //   return <ir-login onAuthFinish={() => this.auth.setIsAuthenticated(true)}></ir-login>;
        // }
        return (index.h(index.Host, { key: 'e2acb464fc51699511b89d1d03c5d498886da06d' }, index.h("ir-toast", { key: '2293812d3f5d94350e73085a10a7084b284d42a0' }), index.h("ir-interceptor", { key: 'd54a46fbc3ed46cee946d19dfeffe52192157f95' }), index.h("div", { key: '1213041cca08f23f32b69d0e0afacee2fdb0ee50', id: "iglooCalendar", class: "igl-calendar" }, this.shouldRenderCalendarView() ? ([
            this.showToBeAssigned ? (index.h("igl-to-be-assigned", { unassignedDatesProp: this.unassignedDates, to_date: this.to_date, from_date: this.from_date, propertyid: this.property_id, class: "tobeAssignedContainer", calendarData: this.calendarData, onOptionEvent: evt => this.onOptionSelect(evt) })) : null,
            this.showLegend ? (index.h("igl-legends", { class: "legendContainer", legendData: this.calendarData.legendData, onOptionEvent: evt => this.onOptionSelect(evt) })) : null,
            index.h("div", { class: "calendarScrollContainer", onMouseDown: event => this.dragScrollContent(event), onScroll: () => this.calendarScrolling() }, index.h("div", { id: "calendarContainer" }, index.h("igl-cal-header", { unassignedDates: this.unassignedDates, to_date: this.to_date, propertyid: this.property_id, today: this.today, calendarData: this.calendarData, highlightedDate: this.highlightedDate, onOptionEvent: evt => this.onOptionSelect(evt) }), index.h("igl-cal-body", { language: this.language, countryNodeList: this.countryNodeList, currency: this.calendarData.currency, today: this.today, highlightedDate: this.highlightedDate, isScrollViewDragging: this.scrollViewDragging, calendarData: this.calendarData }), index.h("igl-cal-footer", { highlightedDate: this.highlightedDate, today: this.today, calendarData: this.calendarData, onOptionEvent: evt => this.onOptionSelect(evt) }))),
        ]) : (index.h("ir-loading-screen", { message: "Preparing Calendar Data" }))), this.bookingItem && (index.h("igl-book-property", { key: '5fa32190e02834857b5f3d41cbc068edd5aa3518', allowedBookingSources: this.calendarData.allowedBookingSources, adultChildConstraints: this.calendarData.adultChildConstraints, showPaymentDetails: this.showPaymentDetails, countryNodeList: this.countryNodeList, currency: this.calendarData.currency, language: this.language, propertyid: this.property_id, bookingData: this.bookingItem, onCloseBookingWindow: () => this.handleCloseBookingWindow() })), index.h("ir-sidebar", { key: 'c4af1310c05a3bb11cda99a561fd6182cc9c7849', onIrSidebarToggle: this.handleSideBarToggle.bind(this), open: this.roomNightsData !== null || (this.editBookingItem && this.editBookingItem.event_type === 'EDIT_BOOKING'), showCloseButton: false, sidebarStyles: { width: this.editBookingItem ? '80rem' : 'var(--sidebar-width,40rem)', background: this.roomNightsData ? 'white' : '#F2F3F8' } }, this.roomNightsData && (index.h("ir-room-nights", { key: '76a7b6071b8814f1128d647db36e8fb36111e8f9', slot: "sidebar-body", pool: this.roomNightsData.pool, onCloseRoomNightsDialog: this.handleRoomNightsDialogClose.bind(this), language: this.language, bookingNumber: this.roomNightsData.bookingNumber, identifier: this.roomNightsData.identifier, toDate: this.roomNightsData.to_date, fromDate: this.roomNightsData.from_date, defaultDates: this.roomNightsData.defaultDates, ticket: this.ticket, propertyId: this.property_id })), this.editBookingItem && this.editBookingItem.event_type === 'EDIT_BOOKING' && (index.h("ir-booking-details", { key: '7d0a59f6f1752bc3f9b13fe6c8889125c5a96d85', slot: "sidebar-body", hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: () => (this.editBookingItem = null), is_from_front_desk: true, propertyid: this.property_id, hasRoomEdit: true, hasRoomDelete: true, bookingNumber: this.editBookingItem.BOOKING_NUMBER, ticket: this.ticket, language: this.language, hasRoomAdd: true }))), index.h("ir-modal", { key: '3b6041d63d8e4cc2e9a2e21cc7a206c6592ccda0', modalTitle: '', rightBtnActive: this.dialogData ? !this.dialogData.hideConfirmButton : true, leftBtnText: (_a = locales_store.locales === null || locales_store.locales === void 0 ? void 0 : locales_store.locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Cancel, rightBtnText: (_b = locales_store.locales === null || locales_store.locales === void 0 ? void 0 : locales_store.locales.entries) === null || _b === void 0 ? void 0 : _b.Lcz_Confirm, modalBody: this.dialogData ? this.dialogData.description : '', onConfirmModal: this.handleModalConfirm.bind(this), onCancelModal: this.handleModalCancel.bind(this) })));
    }
    get element() { return index.getElement(this); }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IglooCalendar.style = IglooCalendarStyle0;

const irAutocompleteCss = ".sc-ir-autocomplete-h{display:block;position:relative}.selected.sc-ir-autocomplete{color:#fff;text-decoration:none;background-color:#666ee8}input.sc-ir-autocomplete{width:100%;position:relative;border-top-left-radius:0px !important;border-left:0 !important;border-bottom-left-radius:0px !important}label.sc-ir-autocomplete{margin:0;border-top-right-radius:0px !important;border-right:0 !important;border-bottom-right-radius:0px !important;width:fit-content;display:flex;align-items:center;padding-right:3px !important;justify-content:center;transition:border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}label[data-state='focused'].sc-ir-autocomplete{border-color:var(--blue)}.combobox.sc-ir-autocomplete{margin:0;top:30px;min-width:100%;width:max-content;display:block;z-index:10000;padding:1px;background:white;box-shadow:0px 8px 16px 0px rgba(0, 0, 0, 0.2);padding:5px 0;max-height:250px;overflow-y:auto}.dropdown-item.sc-ir-autocomplete{cursor:pointer}button.sc-ir-autocomplete{all:unset;right:4px}.combobox.sc-ir-autocomplete p.sc-ir-autocomplete,span.sc-ir-autocomplete,loader-container.sc-ir-autocomplete{padding:5px 16px;margin:0px;margin-top:2px;width:100%}.combobox.sc-ir-autocomplete p.sc-ir-autocomplete{cursor:pointer}.combobox.sc-ir-autocomplete p.sc-ir-autocomplete:hover{background:#f4f5fa}.combobox.sc-ir-autocomplete p[data-selected].sc-ir-autocomplete,.combobox.sc-ir-autocomplete p[data-selected].sc-ir-autocomplete:hover{color:#fff;text-decoration:none;background-color:#666ee8}.loader.sc-ir-autocomplete{width:14px;height:14px;border:2px solid #0f0f0f;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
const IrAutocompleteStyle0 = irAutocompleteCss;

const IrAutocomplete = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.comboboxValue = index.createEvent(this, "comboboxValue", 7);
        this.inputCleared = index.createEvent(this, "inputCleared", 7);
        this.toast = index.createEvent(this, "toast", 7);
        this.bookingService = new booking_service.BookingService();
        this.no_result_found = '';
        this.duration = 300;
        this.placeholder = '';
        this.propertyId = undefined;
        this.isSplitBooking = false;
        this.type = 'text';
        this.name = '';
        this.inputId = v4.v4();
        this.required = false;
        this.disabled = false;
        this.value = undefined;
        this.from_date = '';
        this.to_date = '';
        this.danger_border = undefined;
        this.inputValue = '';
        this.data = [];
        this.selectedIndex = -1;
        this.isComboBoxVisible = false;
        this.isLoading = true;
        this.isItemSelected = undefined;
        this.inputFocused = false;
    }
    componentWillLoad() {
        this.no_result_found = locales_store.locales.entries.Lcz_NoResultsFound;
    }
    handleKeyDown(event) {
        var _a;
        const dataSize = this.data.length;
        const itemHeight = this.getHeightOfPElement();
        if (dataSize > 0) {
            switch (event.key) {
                case 'ArrowUp':
                    event.preventDefault();
                    this.selectedIndex = (this.selectedIndex - 1 + dataSize) % dataSize;
                    this.adjustScrollPosition(itemHeight);
                    break;
                case 'ArrowDown':
                    event.preventDefault();
                    this.selectedIndex = (this.selectedIndex + 1) % dataSize;
                    this.adjustScrollPosition(itemHeight);
                    break;
                case 'Enter':
                case ' ':
                case 'ArrowRight':
                    event.preventDefault();
                    this.selectItem(this.selectedIndex);
                    break;
                case 'Escape':
                    (_a = this.inputRef) === null || _a === void 0 ? void 0 : _a.blur();
                    this.isComboBoxVisible = false;
                    break;
            }
        }
    }
    getHeightOfPElement() {
        const combobox = this.el.querySelector('.combobox');
        if (combobox) {
            const pItem = combobox.querySelector('p');
            return pItem ? pItem.offsetHeight : 0;
        }
        return 0;
    }
    adjustScrollPosition(itemHeight, visibleHeight = 250) {
        const combobox = this.el.querySelector('.combobox');
        if (combobox) {
            const margin = 2;
            const itemTotalHeight = itemHeight + margin;
            const selectedPosition = itemTotalHeight * this.selectedIndex;
            let newScrollTop = selectedPosition - visibleHeight / 2 + itemHeight / 2;
            newScrollTop = Math.max(0, Math.min(newScrollTop, combobox.scrollHeight - visibleHeight));
            combobox.scrollTo({
                top: newScrollTop,
                behavior: 'auto',
            });
        }
    }
    selectItem(index) {
        if (this.data[index]) {
            this.isItemSelected = true;
            this.comboboxValue.emit({ key: 'select', data: this.data[index] });
            this.inputValue = '';
            this.resetCombobox();
        }
    }
    debounceFetchData() {
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(() => {
            this.fetchData();
        }, this.duration);
    }
    async fetchData() {
        try {
            this.isLoading = true;
            let data = [];
            if (!this.isSplitBooking) {
                data = await this.bookingService.fetchExposedGuest(this.inputValue, this.propertyId);
            }
            else {
                if (this.inputValue.split(' ').length === 1) {
                    data = await this.bookingService.fetchExposedBookings(this.inputValue, this.propertyId, this.from_date, this.to_date);
                }
            }
            this.data = data;
            if (!this.isComboBoxVisible) {
                this.isComboBoxVisible = true;
            }
        }
        catch (error) {
            console.log('error', error);
        }
        finally {
            this.isLoading = false;
        }
    }
    handleInputChange(event) {
        this.inputValue = event.target.value;
        if (this.inputValue) {
            this.debounceFetchData();
        }
        else {
            clearTimeout(this.debounceTimer);
            this.resetCombobox(false);
        }
    }
    handleDocumentClick(event) {
        const target = event.target;
        if (!this.el.contains(target)) {
            this.isComboBoxVisible = false;
        }
    }
    handleBlur() {
        this.inputFocused = false;
        setTimeout(() => {
            if (this.isDropdownItem(document.activeElement)) {
                return;
            }
            if (this.isSplitBooking) {
                if (!this.isItemSelected) {
                    if (this.data.length > 0) {
                        this.comboboxValue.emit({ key: 'blur', data: this.inputValue });
                    }
                    else {
                        if (this.inputValue !== '') {
                            this.toast.emit({
                                type: 'error',
                                description: '',
                                title: `The Booking #${this.inputValue} is not Available`,
                                position: 'top-right',
                            });
                            this.inputCleared.emit();
                        }
                    }
                    this.inputValue = '';
                    this.resetCombobox();
                }
                else {
                    this.isItemSelected = false;
                }
            }
            else {
                if (!this.isItemSelected) {
                    this.comboboxValue.emit({ key: 'blur', data: this.inputValue });
                    this.inputValue = '';
                    this.resetCombobox();
                }
                else {
                    this.isItemSelected = false;
                }
            }
        }, 200);
    }
    isDropdownItem(element) {
        return element && element.closest('.combobox');
    }
    disconnectedCallback() {
        var _a, _b, _c, _d;
        clearTimeout(this.debounceTimer);
        (_a = this.inputRef) === null || _a === void 0 ? void 0 : _a.removeEventListener('blur', this.handleBlur);
        (_b = this.inputRef) === null || _b === void 0 ? void 0 : _b.removeEventListener('click', this.selectItem);
        (_c = this.inputRef) === null || _c === void 0 ? void 0 : _c.removeEventListener('keydown', this.handleKeyDown);
        (_d = this.inputRef) === null || _d === void 0 ? void 0 : _d.removeEventListener('focus', this.handleFocus);
    }
    handleItemKeyDown(event, index) {
        var _a;
        if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowRight') {
            this.selectItem(index);
            event.preventDefault();
        }
        else if (event.key === 'Escape') {
            this.isComboBoxVisible = false;
            (_a = this.inputRef) === null || _a === void 0 ? void 0 : _a.blur();
            event.preventDefault();
        }
        else {
            return;
        }
    }
    renderDropdown() {
        var _a;
        if (this.inputValue !== '') {
            return (index.h("div", { class: `position-absolute border rounded combobox` }, (_a = this.data) === null || _a === void 0 ? void 0 :
                _a.map((d, index$1) => (index.h("p", { role: "button", onKeyDown: e => this.handleItemKeyDown(e, index$1), "data-selected": this.selectedIndex === index$1, tabIndex: 0, onClick: () => this.selectItem(index$1) }, this.isSplitBooking ? (index.h(index.Fragment, null, `${d.booking_nbr} ${d.guest.first_name} ${d.guest.last_name}`)) : (index.h("div", { class: 'd-flex align-items-center flex-fill' }, index.h("p", { class: 'p-0 m-0' }, `${d.email}`, " ", index.h("span", { class: 'p-0 m-0' }, ` - ${d.first_name} ${d.last_name}`))))))), this.isLoading && (index.h("div", { class: "loader-container d-flex align-items-center justify-content-center" }, index.h("div", { class: "loader" }))), this.data.length === 0 && !this.isLoading && index.h("span", { class: 'text-center' }, this.no_result_found)));
        }
    }
    handleFocus() {
        this.isComboBoxVisible = true;
        this.inputFocused = true;
    }
    clearInput() {
        this.inputValue = '';
        this.resetCombobox();
        this.inputCleared.emit(null);
    }
    resetCombobox(withblur = true) {
        var _a;
        if (withblur) {
            (_a = this.inputRef) === null || _a === void 0 ? void 0 : _a.blur();
        }
        this.data = [];
        this.selectedIndex = -1;
        this.isComboBoxVisible = false;
    }
    render() {
        return (index.h(index.Host, { key: 'c5af6053628f0580bfe780985f823c62c63902a1' }, index.h("div", { key: '24af5dc1746490cbdb4b68d5798f785e8988de9b', class: 'd-flex align-items-center ' }, index.h("label", { key: '9c317eb72327f028ed98898034bcabb519a2d8d0', "data-state": this.inputFocused ? 'focused' : 'blured', htmlFor: this.inputId, class: `form-control input-sm ${this.danger_border && 'border-danger'}` }, index.h("svg", { key: '18cb9104d0df6a8cdd3c455c9b6f45b35ca46c83', xmlns: "http://www.w3.org/2000/svg", height: "12", width: "12", viewBox: "0 0 512 512" }, index.h("path", { key: '94457491eb02122d72fd196d70dc688d3b57de1e', fill: "currentColor", d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }))), index.h("input", { key: '4ace6aa51af01de7bebb1c8ad0562afc49145592', required: this.required, disabled: this.disabled, id: this.inputId, onKeyDown: this.handleKeyDown.bind(this), class: `form-control input-sm flex-full ${this.danger_border && 'border-danger'}`, type: this.type, name: this.name, value: this.value || this.inputValue, placeholder: this.placeholder, onBlur: this.handleBlur.bind(this), autoComplete: "none", onInput: this.handleInputChange.bind(this), onFocus: this.handleFocus.bind(this), ref: el => (this.inputRef = el) }), this.inputValue && (index.h("button", { key: '0426dd885dd4c39535c55ad0b28fa3521690e184', type: "button", class: 'position-absolute d-flex align-items-center justify-content-center ', onClick: this.clearInput.bind(this) }, index.h("p", { key: '93f395236693763f96d7e9a1e3511f7581870dd3', class: 'sr-only' }, "clear input"), index.h("svg", { key: 'd681794ce64f75d943967ab232e635b41f85bf69', width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, index.h("path", { key: '3db2cb46d6242870f86a9293b8d7229f65378895', d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" }))))), this.isComboBoxVisible && this.renderDropdown()));
    }
    get el() { return index.getElement(this); }
};
IrAutocomplete.style = IrAutocompleteStyle0;

const irBookingDetailsCss = ".sc-ir-booking-details-h{overflow-x:hidden;--ir-dialog-max-width:20rem}.sc-ir-booking-details-h *.sc-ir-booking-details{font-family:inherit !important}.font-medium.sc-ir-booking-details{font-weight:600}.sc-ir-booking-details-h th.sc-ir-booking-details{font-weight:600}.h-28.sc-ir-booking-details{height:2rem}.mx-01.sc-ir-booking-details{--m:5px;margin-right:var(--m) !important;margin-left:var(--m) !important}.date-margin.sc-ir-booking-details{margin-right:5px}.pickup-margin.sc-ir-booking-details{margin-bottom:7px !important}.header-date.sc-ir-booking-details{padding-left:5px !important}.pointer.sc-ir-booking-details{cursor:pointer}.sc-ir-booking-details:root{--sidebar-width:50rem}.loading-container.sc-ir-booking-details{height:100%;width:100%;display:flex;justify-content:center;align-items:center;margin:0;padding:0}.sm-padding-right.sc-ir-booking-details{padding-right:0.2rem}.sm-padding-left.sc-ir-booking-details{padding-left:0.2rem}.sm-padding-top.sc-ir-booking-details{padding-top:0.2rem}.sm-padding-bottom.sc-ir-booking-details{padding-bottom:0.2rem}.info-notes.sc-ir-booking-details{list-style:none;padding-left:0}.light-blue-bg.sc-ir-booking-details{background-color:#acecff;padding:0.2rem 0.3rem}.iframeHeight.sc-ir-booking-details{height:17.5rem}.dialog-title.sc-ir-booking-details{width:fit-content}";
const IrBookingDetailsStyle0 = irBookingDetailsCss;

const IrBookingDetails = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.toast = index.createEvent(this, "toast", 7);
        this.bookingChanged = index.createEvent(this, "bookingChanged", 7);
        this.closeSidebar = index.createEvent(this, "closeSidebar", 7);
        this.bookingService = new booking_service.BookingService();
        this.roomService = new room_service.RoomService();
        this.paymentService = new payment_service.PaymentService();
        this.token = new Token.Token();
        this.printingBaseUrl = 'https://gateway.igloorooms.com/PrintBooking/%1/printing?id=%2';
        this.language = '';
        this.ticket = '';
        this.bookingNumber = '';
        this.propertyid = undefined;
        this.is_from_front_desk = false;
        this.p = undefined;
        this.hasPrint = false;
        this.hasReceipt = false;
        this.hasDelete = false;
        this.hasMenu = false;
        this.hasRoomEdit = false;
        this.hasRoomDelete = false;
        this.hasRoomAdd = false;
        this.hasCheckIn = false;
        this.hasCheckOut = false;
        this.hasCloseButton = false;
        this.bookingItem = null;
        this.statusData = [];
        this.showPaymentDetails = undefined;
        this.booking = undefined;
        this.countryNodeList = undefined;
        this.calendarData = {};
        this.guestData = null;
        this.rerenderFlag = false;
        this.sidebarState = null;
        this.isUpdateClicked = false;
        this.pms_status = undefined;
        this.isPMSLogLoading = false;
        this.paymentActions = undefined;
        this.property_id = undefined;
        this.selectedService = undefined;
        this.bedPreference = undefined;
    }
    componentWillLoad() {
        if (this.ticket !== '') {
            this.token.setToken(this.ticket);
            this.initializeApp();
        }
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        this.initializeApp();
    }
    handleSideBarEvents(e) {
        this.sidebarState = e.detail.type;
    }
    handleIconClick(e) {
        const target = e.target;
        switch (target.id) {
            case 'pickup':
                this.sidebarState = 'pickup';
                return;
            case 'close':
                this.closeSidebar.emit(null);
                return;
            case 'print':
                this.openPrintingScreen();
                return;
            case 'receipt':
                this.openPrintingScreen('invoice');
                return;
            case 'book-delete':
                return;
            case 'menu':
                window.location.href = 'https://x.igloorooms.com/manage/acbookinglist.aspx';
                return;
            case 'room-add':
                this.bookingItem = {
                    ID: '',
                    NAME: this.booking.guest.last_name,
                    EMAIL: this.booking.guest.email,
                    PHONE: this.booking.guest.mobile,
                    REFERENCE_TYPE: '',
                    FROM_DATE: this.booking.from_date,
                    ARRIVAL: this.booking.arrival,
                    TO_DATE: this.booking.to_date,
                    TITLE: `${locales_store.locales.entries.Lcz_AddingUnitToBooking}# ${this.booking.booking_nbr}`,
                    defaultDateRange: {
                        fromDate: new Date(this.booking.from_date),
                        fromDateStr: '',
                        toDate: new Date(this.booking.to_date),
                        toDateStr: '',
                        dateDifference: 0,
                        message: '',
                    },
                    event_type: 'ADD_ROOM',
                    booking: this.booking,
                    BOOKING_NUMBER: this.booking.booking_nbr,
                    ADD_ROOM_TO_BOOKING: this.booking.booking_nbr,
                    GUEST: this.booking.guest,
                    message: this.booking.remark,
                    SOURCE: this.booking.source,
                    ROOMS: this.booking.rooms,
                };
                return;
            case 'extra_service_btn':
                this.sidebarState = 'extra_service';
                return;
            case 'add-payment':
                return;
        }
    }
    async handleResetExposedCancellationDueAmount(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        //TODO: Payment action
        const paymentActions = await this.paymentService.GetExposedCancellationDueAmount({ booking_nbr: this.booking.booking_nbr, currency_id: this.booking.currency.id });
        this.paymentActions = [...paymentActions];
    }
    handleEditInitiated(e) {
        this.bookingItem = e.detail;
    }
    async handleResetBooking(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        if (e.detail) {
            return (this.booking = e.detail);
        }
        await this.resetBooking();
    }
    handleEditExtraService(e) {
        this.selectedService = e.detail;
        this.sidebarState = 'extra_service';
    }
    setRoomsData(roomServiceResp) {
        var _a, _b;
        let roomsData = new Array();
        if ((_b = (_a = roomServiceResp.My_Result) === null || _a === void 0 ? void 0 : _a.roomtypes) === null || _b === void 0 ? void 0 : _b.length) {
            roomsData = roomServiceResp.My_Result.roomtypes;
            roomServiceResp.My_Result.roomtypes.forEach(roomCategory => {
                roomCategory.expanded = true;
            });
        }
        this.calendarData.roomsInfo = roomsData;
    }
    async initializeApp() {
        var _a, _b;
        try {
            const [roomResponse, languageTexts, countriesList, bookingDetails, bedPreference] = await Promise.all([
                this.roomService.getExposedProperty({ id: this.propertyid || 0, language: this.language, aname: this.p }),
                this.roomService.fetchLanguage(this.language),
                this.bookingService.getCountries(this.language),
                this.bookingService.getExposedBooking(this.bookingNumber, this.language),
                this.bookingService.getBedPreferences(),
            ]);
            this.property_id = (_a = roomResponse === null || roomResponse === void 0 ? void 0 : roomResponse.My_Result) === null || _a === void 0 ? void 0 : _a.id;
            this.bedPreference = bedPreference;
            if ((bookingDetails === null || bookingDetails === void 0 ? void 0 : bookingDetails.booking_nbr) && ((_b = bookingDetails === null || bookingDetails === void 0 ? void 0 : bookingDetails.currency) === null || _b === void 0 ? void 0 : _b.id) && bookingDetails.is_direct) {
                this.paymentService
                    .GetExposedCancellationDueAmount({
                    booking_nbr: bookingDetails.booking_nbr,
                    currency_id: bookingDetails.currency.id,
                })
                    .then(res => {
                    this.paymentActions = res;
                });
            }
            if (!(locales_store.locales === null || locales_store.locales === void 0 ? void 0 : locales_store.locales.entries)) {
                locales_store.locales.entries = languageTexts.entries;
                locales_store.locales.direction = languageTexts.direction;
            }
            this.countryNodeList = countriesList;
            const myResult = roomResponse === null || roomResponse === void 0 ? void 0 : roomResponse.My_Result;
            if (myResult) {
                const { allowed_payment_methods: paymentMethods, currency, allowed_booking_sources, adult_child_constraints, calendar_legends, aname } = myResult;
                this.printingBaseUrl = this.printingBaseUrl.replace('%1', aname).replace('%2', this.bookingNumber);
                this.calendarData = {
                    currency,
                    allowed_booking_sources,
                    adult_child_constraints,
                    legendData: calendar_legends,
                };
                this.setRoomsData(roomResponse);
                const paymentCodesToShow = ['001', '004'];
                this.showPaymentDetails = paymentMethods === null || paymentMethods === void 0 ? void 0 : paymentMethods.some(method => paymentCodesToShow.includes(method.code));
            }
            else {
                console.warn("Room response is missing 'My_Result'.");
            }
            // Set guest and booking data
            this.guestData = bookingDetails.guest;
            this.booking = bookingDetails;
        }
        catch (error) {
            console.error('Error initializing app:', error);
        }
    }
    async openPrintingScreen(mode = 'print', version = 'new') {
        if (version === 'old') {
            if (mode === 'invoice') {
                return window.open(`https://x.igloorooms.com/manage/AcBookingEdit.aspx?IRID=${this.booking.system_id}&&PM=I&TK=${this.ticket}`);
            }
            return window.open(`https://x.igloorooms.com/manage/AcBookingEdit.aspx?IRID=${this.booking.system_id}&&PM=B&TK=${this.ticket}`);
        }
        let url = this.printingBaseUrl;
        if (mode === 'invoice') {
            url = url + '&mode=invoice';
        }
        const { data } = await axios.axios.post(`Get_ShortLiving_Token`);
        if (!data.ExceptionMsg) {
            url = url + `&token=${data.My_Result}`;
        }
        window.open(url);
    }
    handleCloseBookingWindow() {
        this.bookingItem = null;
    }
    handleDeleteFinish(e) {
        this.booking = Object.assign(Object.assign({}, this.booking), { rooms: this.booking.rooms.filter(room => room.identifier !== e.detail) });
    }
    async resetBooking() {
        try {
            const booking = await this.bookingService.getExposedBooking(this.bookingNumber, this.language);
            this.booking = Object.assign({}, booking);
            this.bookingChanged.emit(this.booking);
        }
        catch (error) {
            console.log(error);
        }
    }
    renderSidebarContent() {
        var _a;
        const handleClose = () => {
            this.sidebarState = null;
        };
        switch (this.sidebarState) {
            case 'guest':
                return (index.h("ir-guest-info", { headerShown: true, slot: "sidebar-body", booking_nbr: this.bookingNumber, email: (_a = this.booking) === null || _a === void 0 ? void 0 : _a.guest.email, language: this.language, onCloseSideBar: handleClose }));
            case 'pickup':
                return (index.h("ir-pickup", { bookingDates: { from: this.booking.from_date, to: this.booking.to_date }, slot: "sidebar-body", defaultPickupData: this.booking.pickup_info, bookingNumber: this.booking.booking_nbr, numberOfPersons: this.booking.occupancy.adult_nbr + this.booking.occupancy.children_nbr, onCloseModal: handleClose }));
            case 'extra_note':
                return index.h("ir-booking-extra-note", { slot: "sidebar-body", booking: this.booking, onCloseModal: () => (this.sidebarState = null) });
            case 'extra_service':
                return (index.h("ir-extra-service-config", { service: this.selectedService, booking: { from_date: this.booking.from_date, to_date: this.booking.to_date, booking_nbr: this.booking.booking_nbr, currency: this.booking.currency }, slot: "sidebar-body", onCloseModal: () => {
                        handleClose();
                        if (this.selectedService) {
                            this.selectedService = null;
                        }
                    } }));
            default:
                return null;
        }
    }
    render() {
        if (!this.booking) {
            return (index.h("div", { class: 'loading-container' }, index.h("ir-spinner", null)));
        }
        return [
            index.h(index.Fragment, null, !this.is_from_front_desk && (index.h(index.Fragment, null, index.h("ir-toast", null), index.h("ir-interceptor", null)))),
            index.h("ir-booking-header", { booking: this.booking, hasCloseButton: this.hasCloseButton, hasDelete: this.hasDelete, hasMenu: this.hasMenu, hasPrint: this.hasPrint, hasReceipt: this.hasReceipt }),
            index.h("div", { class: "fluid-container p-1 text-left mx-0" }, index.h("div", { class: "row m-0" }, index.h("div", { class: "col-12 p-0 mx-0 pr-lg-1 col-lg-6" }, index.h("ir-reservation-information", { countries: this.countryNodeList, booking: this.booking }), index.h("div", { class: "font-size-large d-flex justify-content-between align-items-center mb-1" }, index.h("ir-date-view", { from_date: this.booking.from_date, to_date: this.booking.to_date }), this.hasRoomAdd && this.booking.is_direct && this.booking.is_editable && (index.h("ir-button", { id: "room-add", icon_name: "square_plus", variant: "icon", style: { '--icon-size': '1.5rem' } }))), index.h("div", { class: "card p-0 mx-0" }, this.booking.rooms.map((room, index$1) => {
                return [
                    index.h("ir-room", { language: this.language, bedPreferences: this.bedPreference, isEditable: this.booking.is_editable, legendData: this.calendarData.legendData, roomsInfo: this.calendarData.roomsInfo, myRoomTypeFoodCat: room.roomtype.name, mealCodeName: room.rateplan.short_name, currency: this.booking.currency.symbol, hasRoomEdit: this.hasRoomEdit && this.booking.status.code !== '003' && this.booking.is_direct, hasRoomDelete: this.hasRoomDelete && this.booking.status.code !== '003' && this.booking.is_direct, hasCheckIn: this.hasCheckIn, hasCheckOut: this.hasCheckOut, bookingEvent: this.booking, bookingIndex: index$1, onDeleteFinished: this.handleDeleteFinish.bind(this) }),
                    index$1 !== this.booking.rooms.length - 1 && index.h("hr", { class: "mr-2 ml-2 my-0 p-0" }),
                ];
            })), index.h("ir-pickup-view", { booking: this.booking }), index.h("section", null, index.h("div", { class: "font-size-large d-flex justify-content-between align-items-center mb-1" }, index.h("p", { class: 'font-size-large p-0 m-0 ' }, locales_store.locales.entries.Lcz_ExtraServices), index.h("ir-button", { id: "extra_service_btn", icon_name: "square_plus", variant: "icon", style: { '--icon-size': '1.5rem' } })), index.h("ir-extra-services", { booking: { booking_nbr: this.booking.booking_nbr, currency: this.booking.currency, extra_services: this.booking.extra_services } }))), index.h("div", { class: "col-12 p-0 m-0 pl-lg-1 col-lg-6" }, index.h("ir-payment-details", { paymentActions: this.paymentActions, bookingDetails: this.booking })))),
            index.h("ir-sidebar", { open: this.sidebarState !== null, side: 'right', id: "editGuestInfo", onIrSidebarToggle: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.sidebarState = null;
                }, showCloseButton: false }, this.renderSidebarContent()),
            index.h(index.Fragment, null, this.bookingItem && (index.h("igl-book-property", { allowedBookingSources: this.calendarData.allowed_booking_sources, adultChildConstraints: this.calendarData.adult_child_constraints, showPaymentDetails: this.showPaymentDetails, countryNodeList: this.countryNodeList, currency: this.calendarData.currency, language: this.language, propertyid: this.property_id, bookingData: this.bookingItem, onCloseBookingWindow: () => this.handleCloseBookingWindow() }))),
        ];
    }
    get element() { return index.getElement(this); }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrBookingDetails.style = IrBookingDetailsStyle0;

const irBookingExtraNoteCss = ".sc-ir-booking-extra-note-h{display:block}";
const IrBookingExtraNoteStyle0 = irBookingExtraNoteCss;

const IrBookingExtraNote = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeModal = index.createEvent(this, "closeModal", 7);
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt", 7);
        this.bookingService = new booking_service.BookingService();
        this.booking = undefined;
        this.isLoading = false;
        this.note = '';
    }
    componentWillLoad() {
        if (this.booking.extras) {
            this.setNote(booking.getPrivateNote(this.booking.extras));
        }
    }
    setNote(value) {
        this.note = value;
    }
    async savePrivateNote() {
        try {
            this.isLoading = true;
            let prevExtras = this.booking.extras || [];
            const newExtraObj = { key: 'private_note', value: this.note };
            if (prevExtras.length === 0) {
                prevExtras.push(newExtraObj);
            }
            else {
                const oldPrivateNoteIndex = prevExtras.findIndex(e => e.key === 'private_note');
                if (oldPrivateNoteIndex === -1) {
                    prevExtras.push(newExtraObj);
                }
                else {
                    prevExtras[oldPrivateNoteIndex] = newExtraObj;
                }
            }
            const res = await this.bookingService.doReservation({
                assign_units: true,
                is_pms: true,
                is_direct: true,
                is_in_loyalty_mode: false,
                promo_key: null,
                booking: this.booking,
                Is_Non_Technical_Change: true,
                extras: prevExtras,
            });
            this.resetBookingEvt.emit(res);
            this.closeModal.emit(null);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        return (index.h(index.Host, { key: '785c1b5c3e0e333da6f6cdcbeb6daec8129b9a7a', class: 'px-0' }, index.h("ir-title", { key: '06bf19533430bdd76dbba1af8f2dd59cbe332aa7', class: "px-1", onCloseSideBar: () => this.closeModal.emit(null), label: locales_store.locales.entries.Lcz_PrivateNote, displayContext: "sidebar" }), index.h("form", { key: '7d6918f116af730ffa31d5e28aee16e912161736', class: 'px-1', onSubmit: e => {
                e.preventDefault();
                this.savePrivateNote();
            } }, index.h("ir-textarea", { key: 'd10c9dc60afe789c5c04706ca9bf9bf084ca2660', placeholder: locales_store.locales.entries.Lcz_PrivateNote_MaxChar, label: "", value: this.note, maxLength: 150, onTextChange: e => this.setNote(e.detail) }), index.h("div", { key: '57159117f5a76719f1795f1b12564acaa5f2940c', class: 'd-flex flex-column flex-sm-row mt-3' }, index.h("ir-button", { key: '38c75789799a53172984178813657e7057ecf3cb', onClickHandler: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `mb-1 mb-sm-0 flex-fill  mr-sm-1'}`, icon: "", text: locales_store.locales.entries.Lcz_Cancel, btn_color: "secondary" }), index.h("ir-button", { key: 'b1afbfbecc0a111459ecbdc9204e0d9e33faa4e2', btn_styles: "justify-content-center align-items-center", class: 'm-0 flex-fill text-center ml-sm-1', icon: "", isLoading: this.isLoading, text: locales_store.locales.entries.Lcz_Save, btn_color: "primary", btn_type: "submit" })))));
    }
};
IrBookingExtraNote.style = IrBookingExtraNoteStyle0;

const irBookingHeaderCss = ".sc-ir-booking-header-h{display:block}.confirmed.sc-ir-booking-header{color:#fff;display:flex;align-items:center}.bg-ir-green.sc-ir-booking-header{background:#629a4c;padding:0.2rem 0.3rem}.bg-ir-red.sc-ir-booking-header{background:#ff4961;padding:0.2rem 0.3rem}.bg-ir-orange.sc-ir-booking-header{background:#ff9149;padding:0.2rem 0.3rem}";
const IrBookingHeaderStyle0 = irBookingHeaderCss;

const IrBookingHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.toast = index.createEvent(this, "toast", 7);
        this.closeSidebar = index.createEvent(this, "closeSidebar", 7);
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt", 7);
        this.openSidebar = index.createEvent(this, "openSidebar", 7);
        this.confirmationBG = {
            '001': 'bg-ir-orange',
            '002': 'bg-ir-green',
            '003': 'bg-ir-red',
            '004': 'bg-ir-red',
        };
        this.bookingService = new booking_service.BookingService();
        this.booking = undefined;
        this.hasReceipt = undefined;
        this.hasPrint = undefined;
        this.hasDelete = undefined;
        this.hasMenu = undefined;
        this.hasCloseButton = undefined;
        this.bookingStatus = null;
        this.currentDialogStatus = undefined;
    }
    handleSelectChange(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        const target = e.target;
        this.bookingStatus = target.selectedValue;
    }
    async updateStatus() {
        if (!this.bookingStatus || this.bookingStatus === '-1') {
            this.toast.emit({
                type: 'error',
                description: '',
                title: locales_store.locales.entries.Lcz_SelectStatus,
                position: 'top-right',
            });
            return;
        }
        try {
            await this.bookingService.changeExposedBookingStatus({
                book_nbr: this.booking.booking_nbr,
                status: this.bookingStatus,
            });
            this.toast.emit({
                type: 'success',
                description: '',
                title: locales_store.locales.entries.Lcz_StatusUpdatedSuccessfully,
                position: 'top-right',
            });
            this.bookingStatus = null;
            this.resetBookingEvt.emit(null);
        }
        catch (error) {
            console.log(error);
        }
    }
    openDialog(e) {
        const { type } = e;
        this.currentDialogStatus = type;
        this.dialogRef.openModal();
    }
    renderDialogBody() {
        switch (this.currentDialogStatus) {
            case 'pms':
                return index.h("ir-pms-logs", { slot: "modal-body", bookingNumber: this.booking.booking_nbr });
            case 'events-log':
                return index.h("ir-events-log", { slot: "modal-body", bookingNumber: this.booking.booking_nbr });
        }
    }
    render() {
        return (index.h("div", { key: '849dfc6d1c81aadb60cb31781e6ed534d69bf838', class: "fluid-container px-1" }, index.h("div", { key: '37020a3f543bdca1aa26a41b7a67b5d29f0ea54e', class: "d-flex flex-column p-0 mx-0 flex-lg-row align-items-md-center justify-content-between mt-1" }, index.h("div", { key: '96c3d60559a64a585019b6b9dedbd3d4409c49f9', class: "m-0 p-0 mb-1 mb-lg-0 mt-md-0" }, index.h("p", { key: '7665d84daebd07d17427bb832178ad683aa8c212', class: "font-size-large m-0 p-0" }, `${locales_store.locales.entries.Lcz_Booking}#${this.booking.booking_nbr}`), index.h("p", { key: '207bb130912e9fa710e9d4e3eda211c73dd80491', class: "m-0 p-0" }, !this.booking.is_direct && index.h("span", { key: '1994821cfd2df71538a18dfb088e06946f68089c', class: "mr-1 m-0" }, this.booking.channel_booking_nbr))), index.h("div", { key: '7791efc8d672a9ff77c7a6dc62f26ad7d1639cc8', class: "d-flex justify-content-end align-items-center", style: { gap: '1rem', flexWrap: 'wrap' } }, index.h("span", { key: '58093669de10fae15bbed8c5ca86bd321886dac9', class: `confirmed btn-sm m-0  ${this.confirmationBG[this.booking.status.code]}` }, this.booking.status.description), this.booking.allowed_actions.length > 0 && this.booking.is_editable && (index.h("div", { key: 'fa3af7aa36e661f7ff89bf54bc066f9c958306c4', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.25rem' } }, index.h("ir-select", { key: 'aaf5c85656353dc8e2e54fa152723f450506e5e3', selectContainerStyle: "h-28", selectStyles: "d-flex status-select align-items-center h-28", firstOption: locales_store.locales.entries.Lcz_Select, id: "update-status", size: "sm", "label-available": "false", data: this.booking.allowed_actions.map(b => ({ text: b.description, value: b.code })), textSize: "sm", class: "sm-padding-right m-0 ", selectedValue: this.bookingStatus }), index.h("ir-button", { key: 'd7959c9f22c6329a945d7dc1480950ec7c216f0a', onClickHandler: this.updateStatus.bind(this), btn_styles: "h-28", isLoading: irInterceptor_store.isRequestPending('/Change_Exposed_Booking_Status'), btn_disabled: irInterceptor_store.isRequestPending('/Change_Exposed_Booking_Status'), id: "update-status-btn", size: "sm", text: "Update" }))), index.h("ir-button", { key: 'f5b7fd0ebfc46e1c701a503e8a1a2230e1443511', size: "sm", btn_color: "outline", text: locales_store.locales.entries.Lcz_EventsLog, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'events-log' });
            } }), calendarData.calendar_data.is_pms_enabled && (index.h("ir-button", { key: '4582be34df0d64d162c15e45b86adb7b433ea255', size: "sm", btn_color: "outline", text: locales_store.locales.entries.Lcz_pms, onClick: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'pms' });
            } })), this.hasReceipt && index.h("ir-button", { key: '872bd9507411787f94fb44f1077214b9bff7e0ac', variant: "icon", id: "receipt", icon_name: "reciept", class: "", style: { '--icon-size': '1.65rem' } }), this.hasPrint && index.h("ir-button", { key: '7c8e8b0c195bc1314b1a81ec300e55558cc2a942', variant: "icon", id: "print", icon_name: "print", class: "", style: { '--icon-size': '1.65rem' } }), this.hasDelete && index.h("ir-button", { key: 'ae71ba964ab54b132d183dbea7df7a387e8a792b', variant: "icon", id: "book-delete", icon_name: "trash", class: "", style: Object.assign(Object.assign({}, colorVariants.danger), { '--icon-size': '1.65rem' }) }), this.hasMenu && index.h("ir-button", { key: 'dfd26d89af6a18eae7d995bd2dabc08c101b3921', variant: "icon", class: "mr-1", id: "menu", icon_name: "menu_list", style: { '--icon-size': '1.65rem' } }), this.hasCloseButton && (index.h("ir-button", { key: '36bc1cc7bf74721738979dac4af01c3480229cff', id: "close", variant: "icon", style: { '--icon-size': '1.65rem' }, icon_name: "xmark", class: "ml-2", onClickHandler: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.closeSidebar.emit(null);
            } })))), index.h("ir-dialog", { key: '09ca0b5657de4255d21845ac15d95a7c70a93713', onOpenChange: e => {
                if (!e.detail) {
                    this.currentDialogStatus = null;
                }
            }, style: this.currentDialogStatus === 'events-log' && { '--ir-dialog-max-width': '400px' }, ref: el => (this.dialogRef = el) }, this.renderDialogBody())));
    }
};
IrBookingHeader.style = IrBookingHeaderStyle0;

const irButtonCss = ".sc-ir-button-h{--icon-button-color:#6b6f82;--icon-button-hover-color:#104064}.button-icon.sc-ir-button{padding:0;margin-top:0}.button-icon[data-state='loading'].sc-ir-button{display:none}.button-text.sc-ir-button{padding:0 5px}.bounce-3.sc-ir-button{animation:bounce 1s 1}.btn-link.sc-ir-button{color:var(--blue, #1e9ff2)}.ir-button-class.sc-ir-button{display:inline-flex !important;justify-content:center;align-items:center;box-sizing:border-box}.btn-outline.sc-ir-button{background:transparent;border:1px solid #104064;color:#104064}.btn-outline.sc-ir-button:hover,.btn-outline.sc-ir-button:active{background:#104064;color:white}.icon-button.sc-ir-button{all:unset;box-sizing:border-box;border-radius:0.25rem;display:inline-flex;align-items:center;justify-content:center;color:var(--icon-button-color);padding:0.2rem;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}.icon-button.sc-ir-button:hover{color:var(--icon-button-hover-color)}.icon-button.sc-ir-button:hover.hovered_bg{background:var('--ir-icon-bg-hover', #f6f6f6)}.icon-button.sc-ir-button:disabled{pointer-events:none}.icon-loader.sc-ir-button{margin:0;padding:0;width:var(--icon-size, 1.25rem);height:var(--icon-size, 1.25rem);border-radius:50%;background:radial-gradient(farthest-side, var(--icon-button-color) 94%, #0000) top/2px 2px no-repeat, conic-gradient(#0000 30%, var(--icon-button-color));-webkit-mask:radial-gradient(farthest-side, #0000 calc(100% - 2px), var(--icon-button-color) 0);mask:radial-gradient(farthest-side, #0000 calc(100% - 2px), var(--icon-button-color) 0);animation:l13 1s infinite linear}.btn_loader.sc-ir-button{width:15px;height:10px;--c:no-repeat linear-gradient(#ffffff 0 0);background:var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;background-size:20% 100%;animation:l1 1s infinite linear}@keyframes l13{100%{transform:rotate(1turn)}}@keyframes l1{0%{background-size:20% 100%, 20% 100%, 20% 100%}33%{background-size:20% 10%, 20% 100%, 20% 100%}50%{background-size:20% 100%, 20% 10%, 20% 100%}66%{background-size:20% 100%, 20% 100%, 20% 10%}100%{background-size:20% 100%, 20% 100%, 20% 100%}}@keyframes bounce{0%,100%{transform:scale(1);animation-timing-function:cubic-bezier(0.8, 0, 1, 1)}50%{transform:scale(1.2);animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}}@keyframes ping{75%,100%{transform:scale(1.2)}}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
const IrButtonStyle0 = irButtonCss;

const IrButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.clickHandler = index.createEvent(this, "clickHandler", 7);
        this.name = undefined;
        this.text = undefined;
        this.icon = 'ft-save';
        this.btn_color = 'primary';
        this.size = 'md';
        this.textSize = 'md';
        this.btn_block = true;
        this.btn_disabled = false;
        this.btn_type = 'button';
        this.isLoading = false;
        this.btn_styles = undefined;
        this.btn_id = v4.v4();
        this.variant = 'default';
        this.icon_name = undefined;
        this.visibleBackgroundOnHover = false;
        this.iconPosition = 'left';
        this.icon_style = undefined;
        this.btnStyle = undefined;
        this.labelStyle = undefined;
        this.renderContentAsHtml = false;
    }
    handleButtonAnimation(e) {
        if (!this.buttonEl || e.detail !== this.btn_id) {
            return;
        }
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.buttonEl.classList.remove('bounce-3');
        this.buttonEl.classList.add('bounce-3');
    }
    render() {
        if (this.variant === 'icon') {
            return (index.h("button", { id: this.btn_id, class: `icon-button ${this.btn_styles} ${this.visibleBackgroundOnHover ? 'hovered_bg' : ''}`, ref: el => (this.buttonEl = el), onClick: () => this.clickHandler.emit(), type: this.btn_type, disabled: this.btn_disabled }, this.isLoading ? index.h("span", { class: "icon-loader" }) : index.h("ir-icons", { class: 'm-0 p-0', name: this.icon_name })));
        }
        let blockClass = this.btn_block ? 'btn-block' : '';
        return (index.h("button", { id: this.btn_id, ref: el => (this.buttonEl = el), onClick: () => this.clickHandler.emit(), class: `btn btn-${this.btn_color} ${this.btn_styles} ir-button-class  btn-${this.size} text-${this.textSize} ${blockClass}`, type: this.btn_type, style: this.btnStyle, disabled: this.btn_disabled || this.isLoading }, this.icon_name && this.iconPosition === 'left' && index.h("ir-icons", { name: this.icon_name, style: this.icon_style }), this.text &&
            (this.renderContentAsHtml ? (index.h("span", { class: "button-text m-0", innerHTML: this.text, style: this.labelStyle })) : (index.h("span", { style: this.labelStyle, class: "button-text m-0" }, this.text))), this.isLoading ? index.h("div", { class: "btn_loader m-0 p-0" }) : this.iconPosition === 'right' && index.h("ir-icons", { style: this.icon_style, name: this.icon_name })));
    }
};
IrButton.style = IrButtonStyle0;

const irComboboxCss = ".sc-ir-combobox-h{display:block;position:relative;padding:0;margin:0}ul.sc-ir-combobox{position:absolute;margin:0;margin-top:2px;width:max-content;max-height:80px;border-radius:0.21rem;z-index:10000;padding:1px;background:white;box-shadow:0px 8px 16px 0px rgba(0, 0, 0, 0.2);padding:5px 0;max-height:250px;overflow-y:auto;min-width:100%}ul[data-position='bottom-right'].sc-ir-combobox{right:0}.list-item-image.sc-ir-combobox{height:1rem;aspect-ratio:4/3;border-radius:4px;margin-right:10px}.dropdown-item.sc-ir-combobox{cursor:pointer}ul.sc-ir-combobox li.sc-ir-combobox,span.sc-ir-combobox,loader-container.sc-ir-combobox{padding:0px 16px;margin:0px;margin-top:2px;width:100%;border-radius:2px}ul.sc-ir-combobox li.sc-ir-combobox{cursor:pointer}ul.sc-ir-combobox li.sc-ir-combobox{display:flex;align-items:center;flex-wrap:wrap;gap:3px}ul.sc-ir-combobox li.sc-ir-combobox p.sc-ir-combobox{margin:0;padding:0}ul.sc-ir-combobox li.sc-ir-combobox:hover{background:#f4f5fa}ul.sc-ir-combobox li[data-selected].sc-ir-combobox,ul.sc-ir-combobox li[data-selected].sc-ir-combobox:hover{color:#fff;text-decoration:none;background-color:#666ee8}";
const IrComboboxStyle0 = irComboboxCss;

const IrCombobox = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.comboboxValueChange = index.createEvent(this, "comboboxValueChange", 7);
        this.inputCleared = index.createEvent(this, "inputCleared", 7);
        this.toast = index.createEvent(this, "toast", 7);
        this.data = [];
        this.duration = 300;
        this.placeholder = undefined;
        this.value = undefined;
        this.disabled = false;
        this.autoFocus = false;
        this.input_id = v4.v4();
        this.selectedIndex = -1;
        this.actualIndex = -1;
        this.isComboBoxVisible = false;
        this.isLoading = true;
        this.isItemSelected = undefined;
        this.inputValue = '';
        this.filteredData = [];
        this.componentShouldAutoFocus = false;
    }
    componentWillLoad() {
        this.filteredData = this.data;
    }
    componentDidLoad() {
        if (this.autoFocus) {
            this.focusInput();
        }
    }
    watchHandler(newValue, oldValue) {
        if (newValue !== oldValue && newValue === true) {
            this.focusInput();
        }
    }
    handleKeyDown(event) {
        var _a;
        const dataSize = this.filteredData.length;
        if (dataSize > 0) {
            switch (event.key) {
                case 'ArrowUp':
                    event.preventDefault();
                    this.selectedIndex = (this.selectedIndex - 1 + dataSize) % dataSize;
                    this.adjustScrollPosition();
                    break;
                case 'ArrowDown':
                    event.preventDefault();
                    this.selectedIndex = (this.selectedIndex + 1) % dataSize;
                    this.adjustScrollPosition();
                    break;
                // case 'Enter':
                // case ' ':
                // case 'ArrowRight':
                //   event.preventDefault();
                //   this.selectItem(this.selectedIndex);
                //   break;
                case 'Escape':
                    (_a = this.inputRef) === null || _a === void 0 ? void 0 : _a.blur();
                    this.isComboBoxVisible = false;
                    break;
            }
        }
    }
    focusInput() {
        requestAnimationFrame(() => {
            var _a;
            (_a = this.inputRef) === null || _a === void 0 ? void 0 : _a.focus();
        });
    }
    adjustScrollPosition() {
        var _a;
        const selectedItem = (_a = this.el) === null || _a === void 0 ? void 0 : _a.querySelector(`[data-selected]`);
        if (!selectedItem)
            return;
        selectedItem.scrollIntoView({
            block: 'center',
        });
    }
    selectItem(index) {
        if (this.filteredData[index]) {
            this.isItemSelected = true;
            this.comboboxValueChange.emit({ key: 'select', data: this.filteredData[index].id });
            this.inputValue = '';
            this.resetCombobox();
            if (this.autoFocus) {
                this.focusInput();
            }
        }
    }
    debounceFetchData() {
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(() => {
            this.fetchData();
        }, this.duration);
    }
    handleFocus() {
        this.isComboBoxVisible = true;
    }
    clearInput() {
        this.inputValue = '';
        this.resetCombobox();
        this.inputCleared.emit(null);
    }
    resetCombobox(withblur = true) {
        var _a;
        if (withblur) {
            (_a = this.inputRef) === null || _a === void 0 ? void 0 : _a.blur();
        }
        this.selectedIndex = -1;
        this.isComboBoxVisible = false;
    }
    async fetchData() {
        try {
            this.isLoading = true;
            this.filteredData = this.data.filter(d => d.name.toLowerCase().startsWith(this.inputValue));
            this.selectedIndex = -1;
        }
        catch (error) {
            console.log('error', error);
        }
        finally {
            this.isLoading = false;
        }
    }
    handleInputChange(event) {
        this.inputValue = event.target.value;
        if (this.inputValue) {
            this.debounceFetchData();
        }
        else {
            this.filteredData = this.data;
        }
    }
    handleDocumentClick(event) {
        const target = event.target;
        if (!this.el.contains(target)) {
            this.isComboBoxVisible = false;
        }
    }
    handleBlur() {
        this.blurTimout = setTimeout(() => {
            if (!this.isItemSelected) {
                this.inputValue = '';
                this.resetCombobox();
            }
            else {
                this.isItemSelected = false;
            }
        }, 300);
    }
    isDropdownItem(element) {
        return element && element.closest('.combobox');
    }
    disconnectedCallback() {
        var _a, _b, _c, _d;
        clearTimeout(this.debounceTimer);
        clearTimeout(this.blurTimout);
        (_a = this.inputRef) === null || _a === void 0 ? void 0 : _a.removeEventListener('blur', this.handleBlur);
        (_b = this.inputRef) === null || _b === void 0 ? void 0 : _b.removeEventListener('click', this.selectItem);
        (_c = this.inputRef) === null || _c === void 0 ? void 0 : _c.removeEventListener('keydown', this.handleKeyDown);
        (_d = this.inputRef) === null || _d === void 0 ? void 0 : _d.removeEventListener('focus', this.handleFocus);
    }
    handleItemKeyDown(event, index) {
        var _a;
        if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowRight') {
            this.selectItem(index);
            event.preventDefault();
        }
        else if (event.key === 'Escape') {
            this.isComboBoxVisible = false;
            (_a = this.inputRef) === null || _a === void 0 ? void 0 : _a.blur();
            event.preventDefault();
        }
    }
    renderDropdown() {
        var _a;
        if (!this.isComboBoxVisible) {
            return null;
        }
        return (index.h("ul", { "data-position": this.filteredData.length > 0 && this.filteredData[0].occupancy ? 'bottom-right' : 'bottom-left' }, (_a = this.filteredData) === null || _a === void 0 ? void 0 :
            _a.map((d, index$1) => (index.h("li", { onMouseEnter: () => (this.selectedIndex = index$1), role: "button", key: d.id, onKeyDown: e => this.handleItemKeyDown(e, index$1), "data-selected": this.selectedIndex === index$1, tabIndex: 0, onClick: () => this.selectItem(index$1) }, d.image && index.h("img", { src: d.image, class: 'list-item-image' }), index.h("p", null, d.name), d.occupancy && (index.h(index.Fragment, null, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, index.h("path", { fill: 'currentColor', d: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" })), index.h("p", null, d.occupancy)))))), this.filteredData.length === 0 && !this.isLoading && index.h("span", { class: 'text-center' }, locales_store.locales.entries.Lcz_NoResultsFound)));
    }
    handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('object');
        if (!this.filteredData.length) {
            return;
        }
        this.selectItem(this.selectedIndex === -1 ? 0 : this.selectedIndex);
    }
    render() {
        return (index.h("form", { key: '957d7f92dbdb85ef0135671f4c7c6316025f0a29', onSubmit: this.handleSubmit.bind(this), class: "m-0 p-0" }, index.h("input", { key: 'c3196f75dfdc023503853c2b7e231ebaa511d13a', type: "text", class: "form-control bg-white", id: this.input_id, ref: el => (this.inputRef = el), disabled: this.disabled, value: this.value, placeholder: this.placeholder, onKeyDown: this.handleKeyDown.bind(this), onBlur: this.handleBlur.bind(this), onInput: this.handleInputChange.bind(this), onFocus: this.handleFocus.bind(this), autoFocus: this.autoFocus }), this.renderDropdown()));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "isComboBoxVisible": ["watchHandler"]
    }; }
};
IrCombobox.style = IrComboboxStyle0;

const onlineResources = [
    // {
    //   isJS: true,
    //   link: "https://x.igloorooms.com/manage/micro/app-assets/required/assets/scripts/jquery.min.js",
    // },
    {
        isCSS: true,
        link: 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i%7CQuicksand:300,400,500,700',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/bootstrap.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/bootstrap-extended.css',
    },
    { isCSS: true, link: 'https://x.igloorooms.com/app-assets/css/colors.css' },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/core/menu/menu-types/horizontal-menu.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/core/colors/palette-gradient.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/components.css',
    },
    { isCSS: true, link: 'https://x.igloorooms.com/assets/css/style.css' },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/vendors/css/forms/icheck/icheck.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/vendors/css/forms/icheck/custom.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/pages/login-register.css',
    },
    // {
    //   isCSS: true,
    //   link: 'https://x.igloorooms.com/manage/micro/app-assets/required/assets/scripts/daterangepicker/daterangepicker.css',
    // },
    // {
    //   isJS: true,
    //   link: "https://x.igloorooms.com/manage/micro/app-assets/required/assets/scripts/daterangepicker/moment.min.js",
    // },
    // {
    //   isJS: true,
    //   link: "https://x.igloorooms.com/manage/micro/app-assets/required/assets/scripts/daterangepicker/daterangepicker.js",
    // },
];

const IrCommon = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.extraResources = '';
        this.resources = onlineResources;
    }
    componentWillLoad() {
        this.parseRefs();
    }
    componentDidLoad() {
        this.initializeStyles();
    }
    hrefsChanged() {
        this.parseRefs();
        this.initializeStyles();
    }
    parseRefs() {
        if (this.extraResources !== '')
            this.resources.push(JSON.parse(this.extraResources));
    }
    appendTag(tagName, attributes) {
        const tag = document.createElement(tagName);
        const selectorParts = [];
        Object.keys(attributes).forEach(attr => {
            tag.setAttribute(attr, attributes[attr]);
            selectorParts.push(`[${attr}="${attributes[attr]}"]`);
        });
        const selector = `${tagName}${selectorParts.join('')}`;
        const existingTag = document.querySelector(selector);
        if (!existingTag) {
            document.head.appendChild(tag);
        }
    }
    initializeStyles() {
        this.resources.forEach(res => {
            if (res.isCSS) {
                this.appendTag('link', {
                    href: res.link,
                    rel: 'stylesheet',
                    type: 'text/css',
                });
            }
            if (res.isJS) {
                this.appendTag('script', {
                    src: res.link,
                });
            }
        });
    }
    render() {
        return (index.h(index.Host, { key: '49d3d77f9d17130f30d48f92905eec33626be1ba' }, index.h("slot", { key: '6f18363ce2da97ca71cf96a89b21622cf507339c' })));
    }
    static get watchers() { return {
        "extraResources": ["hrefsChanged"]
    }; }
};

var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


const applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect$2,
  requires: ['computeStyles']
};

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

var max = Math.max;
var min = Math.min;
var round = Math.round;

function getUAString() {
  var uaData = navigator.userAgentData;

  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function (item) {
      return item.brand + "/" + item.version;
    }).join(' ');
  }

  return navigator.userAgent;
}

function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }

  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }

  var _ref = isElement(element) ? getWindow(element) : window,
      visualViewport = _ref.visualViewport;

  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width: width,
    height: height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x: x,
    y: y
  };
}

// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min, value, max) {
  var v = within(min, value, max);
  return v > max ? max : v;
}

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect$1(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


const arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect$1,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};

function getVariation(placement) {
  return placement.split('-')[1];
}

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x,
      y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets,
      isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x,
      x = _offsets$x === void 0 ? 0 : _offsets$x,
      _offsets$y = offsets.y,
      y = _offsets$y === void 0 ? 0 : _offsets$y;

  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
      offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
      offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x,
    y: y
  }, getWindow(popper)) : {
    x: x,
    y: y
  };

  x = _ref4.x;
  y = _ref4.y;

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref5) {
  var state = _ref5.state,
      options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration,
    isFixed: state.options.strategy === 'fixed'
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


const computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


const eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
};

var hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash$1[matched];
  });
}

var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();

    if (layoutViewport || !layoutViewport && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}

function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === 'fixed');
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
    }
  }

  return offsets;
}

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$strategy = _options.strategy,
      strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


const flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


const hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


const offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


const popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var _offsetModifierState$;

    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min$1 = offset + overflow[mainSide];
    var max$1 = offset - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _offsetModifierState$2;

    var _mainSide = mainAxis === 'x' ? top : left;

    var _altSide = mainAxis === 'x' ? bottom : right;

    var _offset = popperOffsets[altAxis];

    var _len = altAxis === 'y' ? 'height' : 'width';

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;

    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


const preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref) {
        var name = _ref.name,
            _ref$options = _ref.options,
            options = _ref$options === void 0 ? {} : _ref$options,
            effect = _ref.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

var airDatepicker = {exports: {}};

(function (module, exports) {
!function(e,t){module.exports=t();}(_commonjsHelpers.commonjsGlobal,(function(){return function(){var e={d:function(t,i){for(var s in i)e.o(i,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:i[s]});},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t={};e.d(t,{default:function(){return R}});var i={days:"days",months:"months",years:"years",day:"day",month:"month",year:"year",eventChangeViewDate:"changeViewDate",eventChangeCurrentView:"changeCurrentView",eventChangeFocusDate:"changeFocusDate",eventChangeSelectedDate:"changeSelectedDate",eventChangeTime:"changeTime",eventChangeLastSelectedDate:"changeLastSelectedDate",actionSelectDate:"selectDate",actionUnselectDate:"unselectDate",cssClassWeekend:"-weekend-"},s={classes:"",inline:!1,locale:{days:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],daysShort:["Вос","Пон","Вто","Сре","Чет","Пят","Суб"],daysMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],monthsShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],today:"Сегодня",clear:"Очистить",dateFormat:"dd.MM.yyyy",timeFormat:"HH:mm",firstDay:1},startDate:new Date,firstDay:"",weekends:[6,0],dateFormat:"",altField:"",altFieldDateFormat:"T",toggleSelected:!0,keyboardNav:!0,selectedDates:!1,container:"",isMobile:!1,visible:!1,position:"bottom left",offset:12,view:i.days,minView:i.days,showOtherMonths:!0,selectOtherMonths:!0,moveToOtherMonthsOnSelect:!0,showOtherYears:!0,selectOtherYears:!0,moveToOtherYearsOnSelect:!0,minDate:"",maxDate:"",disableNavWhenOutOfRange:!0,multipleDates:!1,multipleDatesSeparator:", ",range:!1,dynamicRange:!0,buttons:!1,monthsField:"monthsShort",showEvent:"focus",autoClose:!1,fixedHeight:!1,prevHtml:'<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',nextHtml:'<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',navTitles:{days:"MMMM, <i>yyyy</i>",months:"yyyy",years:"yyyy1 - yyyy2"},timepicker:!1,onlyTimepicker:!1,dateTimeSeparator:" ",timeFormat:"",minHours:0,maxHours:24,minMinutes:0,maxMinutes:59,hoursStep:1,minutesStep:1,onSelect:!1,onChangeViewDate:!1,onChangeView:!1,onRenderCell:!1,onShow:!1,onHide:!1,onClickDayName:!1};function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return "string"==typeof e?t.querySelector(e):e}function n(){let{tagName:e="div",className:t="",innerHtml:i="",id:s="",attrs:a={}}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=document.createElement(e);return t&&n.classList.add(...t.split(" ")),s&&(n.id=s),i&&(n.innerHTML=i),a&&r(n,a),n}function r(e,t){for(let[i,s]of Object.entries(t))void 0!==s&&e.setAttribute(i,s);return e}function o(e){return new Date(e.getFullYear(),e.getMonth()+1,0).getDate()}function h(e){let t=e.getHours(),{hours:i,dayPeriod:s}=l(t);return {year:e.getFullYear(),month:e.getMonth(),fullMonth:e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1,date:e.getDate(),fullDate:e.getDate()<10?"0"+e.getDate():e.getDate(),day:e.getDay(),hours:t,fullHours:d(t),hours12:i,dayPeriod:s,fullHours12:d(i),minutes:e.getMinutes(),fullMinutes:e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes()}}function l(e){return {dayPeriod:e>11?"pm":"am",hours:e%12==0?12:e%12}}function d(e){return e<10?"0"+e:e}function c(e){let t=10*Math.floor(e.getFullYear()/10);return [t,t+9]}function u(){let e=[];for(var t=arguments.length,i=new Array(t),s=0;s<t;s++)i[s]=arguments[s];return i.forEach((t=>{if("object"==typeof t)for(let i in t)t[i]&&e.push(i);else t&&e.push(t);})),e.join(" ")}function p(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i.days;if(!e||!t)return !1;let a=h(e),n=h(t);return {[i.days]:a.date===n.date&&a.month===n.month&&a.year===n.year,[i.months]:a.month===n.month&&a.year===n.year,[i.years]:a.year===n.year}[s]}function m(e,t,i){let s=g(e,!1).getTime(),a=g(t,!1).getTime();return i?s>=a:s>a}function v(e,t){return !m(e,t,!0)}function g(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=new Date(e.getTime());return "boolean"!=typeof t||t||function(e){e.setHours(0,0,0,0);}(i),i}function D(e,t,i){e.length?e.forEach((e=>{e.addEventListener(t,i);})):e.addEventListener(t,i);}function y(e,t){return !(!e||e===document||e instanceof DocumentFragment)&&(e.matches(t)?e:y(e.parentNode,t))}function f(e,t,i){return e>i?i:e<t?t:e}function w(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];return i.filter((e=>e)).forEach((t=>{for(let[i,s]of Object.entries(t))if(void 0!==s&&"[object Object]"===s.toString()){let t=void 0!==e[i]?e[i].toString():void 0,a=s.toString(),n=Array.isArray(s)?[]:{};e[i]=e[i]?t!==a?n:e[i]:n,w(e[i],s);}else e[i]=s;})),e}function b(e){let t=e;return e instanceof Date||("string"==typeof e&&/^\d{4}-\d{2}-\d{2}$/.test(e)&&(e+="T00:00:00"),t=new Date(e)),isNaN(t.getTime())&&(console.log(`Unable to convert value "${e}" to Date object`),t=!1),t}function k(e){let t="\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";return new RegExp("(^|>|"+t+")("+e+")($|<|"+t+")","g")}function $(e,t,i){return (t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,"string");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return "symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class C{constructor(){let{type:e,date:t,dp:i,opts:s,body:a}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};$(this,"focus",(()=>{this.$cell.classList.add("-focus-"),this.focused=!0;})),$(this,"removeFocus",(()=>{this.$cell.classList.remove("-focus-"),this.focused=!1;})),$(this,"select",(()=>{this.$cell.classList.add("-selected-"),this.selected=!0;})),$(this,"removeSelect",(()=>{this.$cell.classList.remove("-selected-","-range-from-","-range-to-"),this.selected=!1;})),$(this,"onChangeSelectedDate",(()=>{this.isDisabled||(this._handleSelectedStatus(),this.opts.range&&this._handleRangeStatus());})),$(this,"onChangeFocusDate",(e=>{if(!e)return void(this.focused&&this.removeFocus());let t=p(e,this.date,this.type);t?this.focus():!t&&this.focused&&this.removeFocus(),this.opts.range&&this._handleRangeStatus();})),$(this,"render",(()=>(this.$cell.innerHTML=this._getHtml(),this._handleClasses(),this.$cell))),this.type=e,this.singleType=this.type.slice(0,-1),this.date=t,this.dp=i,this.opts=s,this.body=a,this.customData=!1,this.init();}init(){var e;let{onRenderCell:t}=this.opts;t&&(this.customData=t({date:this.date,cellType:this.singleType,datepicker:this.dp})),this._createElement(),this._bindDatepickerEvents(),null!==(e=this.customData)&&void 0!==e&&e.disabled&&this.dp.disableDate(this.date);}_bindDatepickerEvents(){this.dp.on(i.eventChangeSelectedDate,this.onChangeSelectedDate),this.dp.on(i.eventChangeFocusDate,this.onChangeFocusDate);}unbindDatepickerEvents(){this.dp.off(i.eventChangeSelectedDate,this.onChangeSelectedDate),this.dp.off(i.eventChangeFocusDate,this.onChangeFocusDate);}_createElement(){var e;let{year:t,month:i,date:s}=h(this.date),a=(null===(e=this.customData)||void 0===e?void 0:e.attrs)||{};this.$cell=n({attrs:{"data-year":t,"data-month":i,"data-date":s,...a}}),this.$cell.adpCell=this;}_getClassName(){var e;let t=new Date,{selectOtherMonths:s,selectOtherYears:a}=this.opts,{minDate:n,maxDate:r,isDateDisabled:o}=this.dp,{day:l}=h(this.date),d=this._isOutOfMinMaxRange(),c=o(this.date),m=u("air-datepicker-cell",`-${this.singleType}-`,{"-current-":p(t,this.date,this.type),"-min-date-":n&&p(n,this.date,this.type),"-max-date-":r&&p(r,this.date,this.type)}),v="";switch(this.type){case i.days:v=u({"-weekend-":this.dp.isWeekend(l),"-other-month-":this.isOtherMonth,"-disabled-":this.isOtherMonth&&!s||d||c});break;case i.months:v=u({"-disabled-":d});break;case i.years:v=u({"-other-decade-":this.isOtherDecade,"-disabled-":d||this.isOtherDecade&&!a});}return u(m,v,null===(e=this.customData)||void 0===e?void 0:e.classes).split(" ")}_getHtml(){var e;let{year:t,month:s,date:a}=h(this.date),{showOtherMonths:n,showOtherYears:r}=this.opts;if(null!==(e=this.customData)&&void 0!==e&&e.html)return this.customData.html;switch(this.type){case i.days:return !n&&this.isOtherMonth?"":a;case i.months:return this.dp.locale[this.opts.monthsField][s];case i.years:return !r&&this.isOtherDecade?"":t}}_isOutOfMinMaxRange(){let{minDate:e,maxDate:t}=this.dp,{type:s,date:a}=this,{month:n,year:r,date:o}=h(a),l=s===i.days,d=s===i.years,c=!!e&&new Date(r,d?e.getMonth():n,l?o:e.getDate()),u=!!t&&new Date(r,d?t.getMonth():n,l?o:t.getDate());return e&&t?v(c,e)||m(u,t):e?v(c,e):t?m(u,t):void 0}destroy(){this.unbindDatepickerEvents();}_handleRangeStatus(){const{selectedDates:e,focusDate:t,rangeDateTo:i,rangeDateFrom:s}=this.dp,a=e.length;if(!a)return;let n=s,r=i;if(1===a&&t){const i=m(t,e[0]);n=i?e[0]:t,r=i?t:e[0];}let o=u({"-in-range-":n&&r&&(h=this.date,l=n,d=r,m(h,l)&&v(h,d)),"-range-from-":n&&p(this.date,n,this.type),"-range-to-":r&&p(this.date,r,this.type)});var h,l,d;this.$cell.classList.remove("-range-from-","-range-to-","-in-range-"),o&&this.$cell.classList.add(...o.split(" "));}_handleSelectedStatus(){let e=this.dp._checkIfDateIsSelected(this.date,this.type);e?this.select():!e&&this.selected&&this.removeSelect();}_handleInitialFocusStatus(){p(this.dp.focusDate,this.date,this.type)&&this.focus();}_handleClasses(){this.$cell.setAttribute("class",""),this._handleInitialFocusStatus(),this.dp.hasSelectedDates&&(this._handleSelectedStatus(),this.dp.opts.range&&this._handleRangeStatus()),this.$cell.classList.add(...this._getClassName());}get isDisabled(){return this.$cell.matches(".-disabled-")}get isOtherMonth(){return this.dp.isOtherMonth(this.date)}get isOtherDecade(){return this.dp.isOtherDecade(this.date)}}function _(e,t,i){return (t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,"string");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return "symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}let M={[i.days]:`<div class="air-datepicker-body--day-names"></div><div class="air-datepicker-body--cells -${i.days}-"></div>`,[i.months]:`<div class="air-datepicker-body--cells -${i.months}-"></div>`,[i.years]:`<div class="air-datepicker-body--cells -${i.years}-"></div>`};const S=".air-datepicker-cell";class T{constructor(e){let{dp:t,type:s,opts:a}=e;_(this,"handleClick",(e=>{let t=e.target.closest(S).adpCell;if(t.isDisabled)return;if(!this.dp.isMinViewReached)return void this.dp.down();let i=this.dp._checkIfDateIsSelected(t.date,t.type);i?this.dp._handleAlreadySelectedDates(i,t.date):this.dp.selectDate(t.date);})),_(this,"handleDayNameClick",(e=>{let t=e.target.getAttribute("data-day-index");this.opts.onClickDayName({dayIndex:Number(t),datepicker:this.dp});})),_(this,"onChangeCurrentView",(e=>{e!==this.type?this.hide():(this.show(),this.render());})),_(this,"onMouseOverCell",(e=>{let t=y(e.target,S);this.dp.setFocusDate(!!t&&t.adpCell.date);})),_(this,"onMouseOutCell",(()=>{this.dp.setFocusDate(!1);})),_(this,"onClickBody",(e=>{let{onClickDayName:t}=this.opts,i=e.target;i.closest(S)&&this.handleClick(e),t&&i.closest(".air-datepicker-body--day-name")&&this.handleDayNameClick(e);})),_(this,"onMouseDown",(e=>{this.pressed=!0;let t=y(e.target,S),i=t&&t.adpCell;p(i.date,this.dp.rangeDateFrom)&&(this.rangeFromFocused=!0),p(i.date,this.dp.rangeDateTo)&&(this.rangeToFocused=!0);})),_(this,"onMouseMove",(e=>{if(!this.pressed||!this.dp.isMinViewReached)return;e.preventDefault();let t=y(e.target,S),i=t&&t.adpCell,{selectedDates:s,rangeDateTo:a,rangeDateFrom:n}=this.dp;if(!i||i.isDisabled)return;let{date:r}=i;if(2===s.length){if(this.rangeFromFocused&&!m(r,a)){let{hours:e,minutes:t}=h(n);r.setHours(e),r.setMinutes(t),this.dp.rangeDateFrom=r,this.dp.replaceDate(n,r);}if(this.rangeToFocused&&!v(r,n)){let{hours:e,minutes:t}=h(a);r.setHours(e),r.setMinutes(t),this.dp.rangeDateTo=r,this.dp.replaceDate(a,r);}}})),_(this,"onMouseUp",(()=>{this.pressed=!1,this.rangeFromFocused=!1,this.rangeToFocused=!1;})),_(this,"onChangeViewDate",((e,t)=>{if(!this.isVisible)return;let s=c(e),a=c(t);switch(this.dp.currentView){case i.days:if(p(e,t,i.months))return;break;case i.months:if(p(e,t,i.years))return;break;case i.years:if(s[0]===a[0]&&s[1]===a[1])return}this.render();})),_(this,"render",(()=>{this.destroyCells(),this._generateCells(),this.cells.forEach((e=>{this.$cells.appendChild(e.render());}));})),this.dp=t,this.type=s,this.opts=a,this.cells=[],this.$el="",this.pressed=!1,this.isVisible=!0,this.init();}init(){this._buildBaseHtml(),this.type===i.days&&this.renderDayNames(),this.render(),this._bindEvents(),this._bindDatepickerEvents();}_bindEvents(){let{range:e,dynamicRange:t}=this.opts;D(this.$el,"mouseover",this.onMouseOverCell),D(this.$el,"mouseout",this.onMouseOutCell),D(this.$el,"click",this.onClickBody),e&&t&&(D(this.$el,"mousedown",this.onMouseDown),D(this.$el,"mousemove",this.onMouseMove),D(window.document,"mouseup",this.onMouseUp));}_bindDatepickerEvents(){this.dp.on(i.eventChangeViewDate,this.onChangeViewDate),this.dp.on(i.eventChangeCurrentView,this.onChangeCurrentView);}_buildBaseHtml(){this.$el=n({className:`air-datepicker-body -${this.type}-`,innerHtml:M[this.type]}),this.$names=a(".air-datepicker-body--day-names",this.$el),this.$cells=a(".air-datepicker-body--cells",this.$el);}_getDayNamesHtml(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.dp.locale.firstDay,t="",s=this.dp.isWeekend,{onClickDayName:a}=this.opts,n=e,r=0;for(;r<7;){let e=n%7;t+=`<div class="${u("air-datepicker-body--day-name",{[i.cssClassWeekend]:s(e),"-clickable-":!!a})}" data-day-index='${e}'>${this.dp.locale.daysMin[e]}</div>`,r++,n++;}return t}renderDayNames(){this.$names.innerHTML=this._getDayNamesHtml();}_generateCell(e){let{type:t,dp:i,opts:s}=this;return new C({type:t,dp:i,opts:s,date:e,body:this})}_generateCells(){T.getDatesFunction(this.type)(this.dp,(e=>{this.cells.push(this._generateCell(e));}));}show(){this.isVisible=!0,this.$el.classList.remove("-hidden-");}hide(){this.isVisible=!1,this.$el.classList.add("-hidden-");}destroyCells(){this.cells.forEach((e=>e.destroy())),this.cells=[],this.$cells.innerHTML="";}destroy(){this.destroyCells(),this.dp.off(i.eventChangeViewDate,this.onChangeViewDate),this.dp.off(i.eventChangeCurrentView,this.onChangeCurrentView);}static getDaysDates(e,t){let{viewDate:i,opts:{fixedHeight:s},locale:{firstDay:a}}=e,n=o(i),{year:r,month:l}=h(i),d=new Date(r,l,1),c=new Date(r,l,n),u=d.getDay()-a,p=6-c.getDay()+a;u=u<0?u+7:u,p=p>6?p-7:p;let m=function(e,t){let{year:i,month:s,date:a}=h(e);return new Date(i,s,a-t)}(d,u),v=n+u+p,g=m.getDate(),{year:D,month:y}=h(m),f=0;s&&(v=42);const w=[];for(;f<v;){let e=new Date(D,y,g+f);t&&t(e),w.push(e),f++;}return w}static getMonthsDates(e,t){let{year:i}=e.parsedViewDate,s=0,a=[];for(;s<12;){const e=new Date(i,s);a.push(e),t&&t(e),s++;}return a}static getYearsDates(e,t){let i=c(e.viewDate),s=i[0]-1,a=i[1]+1,n=s,r=[];for(;n<=a;){const e=new Date(n,0);r.push(e),t&&t(e),n++;}return r}static getDatesFunction(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.days;return {[i.days]:T.getDaysDates,[i.months]:T.getMonthsDates,[i.years]:T.getYearsDates}[e]}}function F(e,t,i){return (t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,"string");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return "symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class V{constructor(e){let{dp:t,opts:i}=e;F(this,"onClickNav",(e=>{let t=y(e.target,".air-datepicker-nav--action");if(!t)return;let i=t.dataset.action;this.dp[i]();})),F(this,"onChangeViewDate",(()=>{this.render(),this._resetNavStatus(),this.handleNavStatus();})),F(this,"onChangeCurrentView",(()=>{this.render(),this._resetNavStatus(),this.handleNavStatus();})),F(this,"onClickNavTitle",(()=>{this.dp.isFinalView||this.dp.up();})),F(this,"update",(()=>{let{prevHtml:e,nextHtml:t}=this.opts;this.$prev.innerHTML=e,this.$next.innerHTML=t,this._resetNavStatus(),this.render(),this.handleNavStatus();})),F(this,"renderDelay",(()=>{setTimeout(this.render);})),F(this,"render",(()=>{this.$title.innerHTML=this._getTitle(),function(e,t){for(let i in t)t[i]?e.classList.add(i):e.classList.remove(i);}(this.$title,{"-disabled-":this.dp.isFinalView});})),this.dp=t,this.opts=i,this.init();}init(){this._createElement(),this._buildBaseHtml(),this._defineDOM(),this.render(),this.handleNavStatus(),this._bindEvents(),this._bindDatepickerEvents();}_defineDOM(){this.$title=a(".air-datepicker-nav--title",this.$el),this.$prev=a('[data-action="prev"]',this.$el),this.$next=a('[data-action="next"]',this.$el);}_bindEvents(){this.$el.addEventListener("click",this.onClickNav),this.$title.addEventListener("click",this.onClickNavTitle);}_bindDatepickerEvents(){this.dp.on(i.eventChangeViewDate,this.onChangeViewDate),this.dp.on(i.eventChangeCurrentView,this.onChangeCurrentView),this.isNavIsFunction&&(this.dp.on(i.eventChangeSelectedDate,this.renderDelay),this.dp.opts.timepicker&&this.dp.on(i.eventChangeTime,this.render));}destroy(){this.dp.off(i.eventChangeViewDate,this.onChangeViewDate),this.dp.off(i.eventChangeCurrentView,this.onChangeCurrentView),this.isNavIsFunction&&(this.dp.off(i.eventChangeSelectedDate,this.renderDelay),this.dp.opts.timepicker&&this.dp.off(i.eventChangeTime,this.render));}_createElement(){this.$el=n({tagName:"nav",className:"air-datepicker-nav"});}_getTitle(){let{dp:e,opts:t}=this,i=t.navTitles[e.currentView];return "function"==typeof i?i(e):e.formatDate(e.viewDate,i)}handleNavStatus(){let{disableNavWhenOutOfRange:e}=this.opts,{minDate:t,maxDate:s}=this.dp;if(!t&&!s||!e)return;let{year:a,month:n}=this.dp.parsedViewDate,r=!!t&&h(t),o=!!s&&h(s);switch(this.dp.currentView){case i.days:t&&r.month>=n&&r.year>=a&&this._disableNav("prev"),s&&o.month<=n&&o.year<=a&&this._disableNav("next");break;case i.months:t&&r.year>=a&&this._disableNav("prev"),s&&o.year<=a&&this._disableNav("next");break;case i.years:{let e=c(this.dp.viewDate);t&&r.year>=e[0]&&this._disableNav("prev"),s&&o.year<=e[1]&&this._disableNav("next");break}}}_disableNav(e){a('[data-action="'+e+'"]',this.$el).classList.add("-disabled-");}_resetNavStatus(){!function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];e.length?e.forEach((e=>{e.classList.remove(...i);})):e.classList.remove(...i);}(this.$el.querySelectorAll(".air-datepicker-nav--action"),"-disabled-");}_buildBaseHtml(){let{prevHtml:e,nextHtml:t}=this.opts;this.$el.innerHTML=`<div class="air-datepicker-nav--action" data-action="prev">${e}</div><div class="air-datepicker-nav--title"></div><div class="air-datepicker-nav--action" data-action="next">${t}</div>`;}get isNavIsFunction(){let{navTitles:e}=this.opts;return Object.keys(e).find((t=>"function"==typeof e[t]))}}var x={today:{content:e=>e.locale.today,onClick:e=>e.setViewDate(new Date)},clear:{content:e=>e.locale.clear,onClick:e=>e.clear()}};class H{constructor(e){let{dp:t,opts:i}=e;this.dp=t,this.opts=i,this.init();}init(){this.createElement(),this.render();}createElement(){this.$el=n({className:"air-datepicker-buttons"});}destroy(){this.$el.parentNode.removeChild(this.$el);}clearHtml(){return this.$el.innerHTML="",this}generateButtons(){let{buttons:e}=this.opts;Array.isArray(e)||(e=[e]),e.forEach((e=>{let t=e;"string"==typeof e&&x[e]&&(t=x[e]);let i=this.createButton(t);t.onClick&&this.attachEventToButton(i,t.onClick),this.$el.appendChild(i);}));}attachEventToButton(e,t){e.addEventListener("click",(()=>{t(this.dp);}));}createButton(e){let{content:t,className:i,tagName:s="button",attrs:a={}}=e;return n({tagName:s,innerHtml:`<span tabindex='-1'>${"function"==typeof t?t(this.dp):t}</span>`,className:u("air-datepicker-button",i),attrs:a})}render(){this.generateButtons();}}function E(e,t,i){return (t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,"string");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return "symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class L{constructor(){let{opts:e,dp:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};E(this,"toggleTimepickerIsActive",(e=>{this.dp.timepickerIsActive=e;})),E(this,"onChangeSelectedDate",(e=>{let{date:t,updateTime:i=!1}=e;t&&(this.setMinMaxTime(t),this.setCurrentTime(!!i&&t),this.addTimeToDate(t));})),E(this,"onChangeLastSelectedDate",(e=>{e&&(this.setTime(e),this.render());})),E(this,"onChangeInputRange",(e=>{let t=e.target;this[t.getAttribute("name")]=t.value,this.updateText(),this.dp.trigger(i.eventChangeTime,{hours:this.hours,minutes:this.minutes});})),E(this,"onMouseEnterLeave",(e=>{let t=e.target.getAttribute("name"),i=this.$minutesText;"hours"===t&&(i=this.$hoursText),i.classList.toggle("-focus-");})),E(this,"onFocus",(()=>{this.toggleTimepickerIsActive(!0);})),E(this,"onBlur",(()=>{this.toggleTimepickerIsActive(!1);})),this.opts=e,this.dp=t;let{timeFormat:s}=this.dp.locale;s&&(s.match(k("h"))||s.match(k("hh")))&&(this.ampm=!0),this.init();}init(){this.setTime(this.dp.lastSelectedDate||this.dp.viewDate),this.createElement(),this.buildHtml(),this.defineDOM(),this.render(),this.bindDatepickerEvents(),this.bindDOMEvents();}bindDatepickerEvents(){this.dp.on(i.eventChangeSelectedDate,this.onChangeSelectedDate),this.dp.on(i.eventChangeLastSelectedDate,this.onChangeLastSelectedDate);}bindDOMEvents(){let e="input";navigator.userAgent.match(/trident/gi)&&(e="change"),D(this.$ranges,e,this.onChangeInputRange),D(this.$ranges,"mouseenter",this.onMouseEnterLeave),D(this.$ranges,"mouseleave",this.onMouseEnterLeave),D(this.$ranges,"focus",this.onFocus),D(this.$ranges,"mousedown",this.onFocus),D(this.$ranges,"blur",this.onBlur);}createElement(){this.$el=n({className:u("air-datepicker-time",{"-am-pm-":this.dp.ampm})});}destroy(){this.dp.off(i.eventChangeSelectedDate,this.onChangeSelectedDate),this.dp.off(i.eventChangeLastSelectedDate,this.onChangeLastSelectedDate),this.$el.parentNode.removeChild(this.$el);}buildHtml(){let{ampm:e,hours:t,displayHours:i,minutes:s,minHours:a,minMinutes:n,maxHours:r,maxMinutes:o,dayPeriod:h,opts:{hoursStep:l,minutesStep:c}}=this;this.$el.innerHTML=`<div class="air-datepicker-time--current">   <span class="air-datepicker-time--current-hours">${d(i)}</span>   <span class="air-datepicker-time--current-colon">:</span>   <span class="air-datepicker-time--current-minutes">${d(s)}</span>   `+(e?`<span class='air-datepicker-time--current-ampm'>${h}</span>`:"")+'</div><div class="air-datepicker-time--sliders">   <div class="air-datepicker-time--row">'+`      <input type="range" name="hours" value="${t}" min="${a}" max="${r}" step="${l}"/>   </div>   <div class="air-datepicker-time--row">`+`      <input type="range" name="minutes" value="${s}" min="${n}" max="${o}" step="${c}"/>   </div></div>`;}defineDOM(){let e=e=>a(e,this.$el);this.$ranges=this.$el.querySelectorAll('[type="range"]'),this.$hours=e('[name="hours"]'),this.$minutes=e('[name="minutes"]'),this.$hoursText=e(".air-datepicker-time--current-hours"),this.$minutesText=e(".air-datepicker-time--current-minutes"),this.$ampm=e(".air-datepicker-time--current-ampm");}setTime(e){this.setMinMaxTime(e),this.setCurrentTime(e);}addTimeToDate(e){e&&(e.setHours(this.hours),e.setMinutes(this.minutes));}setMinMaxTime(e){if(this.setMinMaxTimeFromOptions(),e){let{minDate:t,maxDate:i}=this.dp;t&&p(e,t)&&this.setMinTimeFromMinDate(t),i&&p(e,i)&&this.setMaxTimeFromMaxDate(i);}}setCurrentTime(e){let{hours:t,minutes:i}=e?h(e):this;this.hours=f(t,this.minHours,this.maxHours),this.minutes=f(i,this.minMinutes,this.maxMinutes);}setMinMaxTimeFromOptions(){let{minHours:e,minMinutes:t,maxHours:i,maxMinutes:s}=this.opts;this.minHours=f(e,0,23),this.minMinutes=f(t,0,59),this.maxHours=f(i,0,23),this.maxMinutes=f(s,0,59);}setMinTimeFromMinDate(e){let{lastSelectedDate:t}=this.dp;this.minHours=e.getHours(),t&&t.getHours()>e.getHours()?this.minMinutes=this.opts.minMinutes:this.minMinutes=e.getMinutes();}setMaxTimeFromMaxDate(e){let{lastSelectedDate:t}=this.dp;this.maxHours=e.getHours(),t&&t.getHours()<e.getHours()?this.maxMinutes=this.opts.maxMinutes:this.maxMinutes=e.getMinutes();}updateSliders(){r(this.$hours,{min:this.minHours,max:this.maxHours}).value=this.hours,r(this.$minutes,{min:this.minMinutes,max:this.maxMinutes}).value=this.minutes;}updateText(){this.$hoursText.innerHTML=d(this.displayHours),this.$minutesText.innerHTML=d(this.minutes),this.ampm&&(this.$ampm.innerHTML=this.dayPeriod);}set hours(e){this._hours=e;let{hours:t,dayPeriod:i}=l(e);this.displayHours=this.ampm?t:e,this.dayPeriod=i;}get hours(){return this._hours}render(){this.updateSliders(),this.updateText();}}function O(e,t,i){return (t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,"string");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return "symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class A{constructor(e){let{dp:t,opts:i}=e;O(this,"pressedKeys",new Set),O(this,"hotKeys",new Map([[[["Control","ArrowRight"],["Control","ArrowUp"]],e=>e.month++],[[["Control","ArrowLeft"],["Control","ArrowDown"]],e=>e.month--],[[["Shift","ArrowRight"],["Shift","ArrowUp"]],e=>e.year++],[[["Shift","ArrowLeft"],["Shift","ArrowDown"]],e=>e.year--],[[["Alt","ArrowRight"],["Alt","ArrowUp"]],e=>e.year+=10],[[["Alt","ArrowLeft"],["Alt","ArrowDown"]],e=>e.year-=10],[["Control","Shift","ArrowUp"],(e,t)=>t.up()]])),O(this,"handleHotKey",(e=>{let t=this.hotKeys.get(e),i=h(this.getInitialFocusDate());t(i,this.dp);let{year:s,month:a,date:n}=i,r=o(new Date(s,a));r<n&&(n=r);let l=this.dp.getClampedDate(new Date(s,a,n));this.dp.setFocusDate(l,{viewDateTransition:!0});})),O(this,"isHotKeyPressed",(()=>{let e=!1,t=this.pressedKeys.size,i=e=>this.pressedKeys.has(e);for(let[s]of this.hotKeys){if(e)break;if(Array.isArray(s[0]))s.forEach((a=>{e||t!==a.length||(e=a.every(i)&&s);}));else {if(t!==s.length)continue;e=s.every(i)&&s;}}return e})),O(this,"isArrow",(e=>e>=37&&e<=40)),O(this,"onKeyDown",(e=>{let{key:t,which:i}=e,{dp:s,dp:{focusDate:a},opts:n}=this;this.registerKey(t);let r=this.isHotKeyPressed();if(r)return e.preventDefault(),void this.handleHotKey(r);if(this.isArrow(i))return e.preventDefault(),void this.focusNextCell(t);if("Enter"===t){if(s.currentView!==n.minView)return void s.down();if(a){let e=s._checkIfDateIsSelected(a);return void(e?s._handleAlreadySelectedDates(e,a):s.selectDate(a))}}"Escape"===t&&this.dp.hide();})),O(this,"onKeyUp",(e=>{this.removeKey(e.key);})),this.dp=t,this.opts=i,this.init();}init(){this.bindKeyboardEvents();}bindKeyboardEvents(){let{$el:e}=this.dp;e.addEventListener("keydown",this.onKeyDown),e.addEventListener("keyup",this.onKeyUp);}destroy(){let{$el:e}=this.dp;e.removeEventListener("keydown",this.onKeyDown),e.removeEventListener("keyup",this.onKeyUp),this.hotKeys=null,this.pressedKeys=null;}getInitialFocusDate(){let{focusDate:e,currentView:t,selectedDates:s,parsedViewDate:{year:a,month:n}}=this.dp,r=e||s[s.length-1];if(!r)switch(t){case i.days:r=new Date(a,n,(new Date).getDate());break;case i.months:r=new Date(a,n,1);break;case i.years:r=new Date(a,0,1);}return r}focusNextCell(e){let t=this.getInitialFocusDate(),{currentView:s}=this.dp,{days:a,months:n,years:r}=i,o=h(t),l=o.year,d=o.month,c=o.date;switch(e){case"ArrowLeft":s===a&&(c-=1),s===n&&(d-=1),s===r&&(l-=1);break;case"ArrowUp":s===a&&(c-=7),s===n&&(d-=3),s===r&&(l-=4);break;case"ArrowRight":s===a&&(c+=1),s===n&&(d+=1),s===r&&(l+=1);break;case"ArrowDown":s===a&&(c+=7),s===n&&(d+=3),s===r&&(l+=4);}let u=this.dp.getClampedDate(new Date(l,d,c));this.dp.setFocusDate(u,{viewDateTransition:!0});}registerKey(e){this.pressedKeys.add(e);}removeKey(e){this.pressedKeys.delete(e);}}let N={on(e,t){this.__events||(this.__events={}),this.__events[e]?this.__events[e].push(t):this.__events[e]=[t];},off(e,t){this.__events&&this.__events[e]&&(this.__events[e]=this.__events[e].filter((e=>e!==t)));},removeAllEvents(){this.__events={};},trigger(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];this.__events&&this.__events[e]&&this.__events[e].forEach((e=>{e(...i);}));}};function I(e,t,i){return (t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,"string");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return "symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}let P="",j="",B=!1;class R{static buildGlobalContainer(e){B=!0,P=n({className:e,id:e}),a("body").appendChild(P);}constructor(e,t){var r=this;if(I(this,"viewIndexes",[i.days,i.months,i.years]),I(this,"next",(()=>{let{year:e,month:t}=this.parsedViewDate;switch(this.currentView){case i.days:this.setViewDate(new Date(e,t+1,1));break;case i.months:this.setViewDate(new Date(e+1,t,1));break;case i.years:this.setViewDate(new Date(e+10,0,1));}})),I(this,"prev",(()=>{let{year:e,month:t}=this.parsedViewDate;switch(this.currentView){case i.days:this.setViewDate(new Date(e,t-1,1));break;case i.months:this.setViewDate(new Date(e-1,t,1));break;case i.years:this.setViewDate(new Date(e-10,0,1));}})),I(this,"_finishHide",(()=>{this.hideAnimation=!1,this._destroyComponents(),this.$container.removeChild(this.$datepicker);})),I(this,"setPosition",(function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("function"==typeof(e=e||r.opts.position))return void(r.customHide=e({$datepicker:r.$datepicker,$target:r.$el,$pointer:r.$pointer,isViewChange:t,done:r._finishHide}));let i,s,{isMobile:a}=r.opts,n=r.$el.getBoundingClientRect(),o=r.$el.getBoundingClientRect(),h=r.$datepicker.offsetParent,l=r.$el.offsetParent,d=r.$datepicker.getBoundingClientRect(),c=e.split(" "),u=window.scrollY,p=window.scrollX,m=r.opts.offset,v=c[0],g=c[1];if(a)r.$datepicker.style.cssText="left: 50%; top: 50%";else {if(h===l&&h!==document.body&&(o={top:r.$el.offsetTop,left:r.$el.offsetLeft,width:n.width,height:r.$el.offsetHeight},u=0,p=0),h!==l&&h!==document.body){let e=h.getBoundingClientRect();o={top:n.top-e.top,left:n.left-e.left,width:n.width,height:n.height},u=0,p=0;}switch(v){case"top":i=o.top-d.height-m;break;case"right":s=o.left+o.width+m;break;case"bottom":i=o.top+o.height+m;break;case"left":s=o.left-d.width-m;}switch(g){case"top":i=o.top;break;case"right":s=o.left+o.width-d.width;break;case"bottom":i=o.top+o.height-d.height;break;case"left":s=o.left;break;case"center":/left|right/.test(v)?i=o.top+o.height/2-d.height/2:s=o.left+o.width/2-d.width/2;}r.$datepicker.style.cssText=`left: ${s+p}px; top: ${i+u}px`;}})),I(this,"_setInputValue",(()=>{let{opts:e,$altField:t,locale:{dateFormat:i}}=this,{altFieldDateFormat:s,altField:a}=e;a&&t&&(t.value=this._getInputValue(s)),this.$el.value=this._getInputValue(i);})),I(this,"_getInputValue",(e=>{let{selectedDates:t,opts:i}=this,{multipleDates:s,multipleDatesSeparator:a}=i;if(!t.length)return "";let n="function"==typeof e,r=n?e(s?t:t[0]):t.map((t=>this.formatDate(t,e)));return r=n?r:r.join(a),r})),I(this,"_checkIfDateIsSelected",(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.days,s=!1;return r.selectedDates.some((i=>{let a=p(e,i,t);return s=a&&i,a})),s})),I(this,"_scheduleCallAfterTransition",(e=>{this._cancelScheduledCall(),e&&e(!1),this._onTransitionEnd=()=>{e&&e(!0);},this.$datepicker.addEventListener("transitionend",this._onTransitionEnd,{once:!0});})),I(this,"_cancelScheduledCall",(()=>{this.$datepicker.removeEventListener("transitionend",this._onTransitionEnd);})),I(this,"setViewDate",(e=>{if(!((e=b(e))instanceof Date))return;if(p(e,this.viewDate))return;let t=this.viewDate;this.viewDate=e;let{onChangeViewDate:s}=this.opts;if(s){let{month:e,year:t}=this.parsedViewDate;s({month:e,year:t,decade:this.curDecade});}this.trigger(i.eventChangeViewDate,e,t);})),I(this,"setFocusDate",(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(!e||(e=b(e))instanceof Date)&&(r.focusDate=e,r.trigger(i.eventChangeFocusDate,e,t));})),I(this,"setCurrentView",(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(r.viewIndexes.includes(e)){if(r.currentView=e,r.elIsInput&&r.visible&&r.setPosition(void 0,!0),r.trigger(i.eventChangeCurrentView,e),!r.views[e]){let t=r.views[e]=new T({dp:r,opts:r.opts,type:e});r.shouldUpdateDOM&&r.$content.appendChild(t.$el);}r.opts.onChangeView&&!t.silent&&r.opts.onChangeView(e);}})),I(this,"_updateLastSelectedDate",(e=>{this.lastSelectedDate=e,this.trigger(i.eventChangeLastSelectedDate,e);})),I(this,"destroy",(()=>{if(this.isDestroyed)return;let{showEvent:e,isMobile:t}=this.opts,i=this.$datepicker.parentNode;i&&i.removeChild(this.$datepicker),this.$el.removeEventListener(e,this._onFocus),this.$el.removeEventListener("blur",this._onBlur),window.removeEventListener("resize",this._onResize),t&&this._removeMobileAttributes(),this.keyboardNav&&this.keyboardNav.destroy(),this.views=null,this.nav=null,this.$datepicker=null,this.opts={},this.$customContainer=null,this.viewDate=null,this.focusDate=null,this.selectedDates=[],this.rangeDateFrom=null,this.rangeDateTo=null,this.isDestroyed=!0;})),I(this,"update",(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=w({},r.opts),{silent:a}=t;w(r.opts,e);let{timepicker:n,buttons:o,range:h,selectedDates:l,isMobile:d}=r.opts,c=r.visible||r.treatAsInline;r._createMinMaxDates(),r._limitViewDateByMaxMinDates(),r._handleLocale(),l&&(r.selectedDates=[],r.selectDate(l,{silent:a})),e.view&&r.setCurrentView(e.view,{silent:a}),r._setInputValue(),s.range&&!h?(r.rangeDateTo=!1,r.rangeDateFrom=!1):!s.range&&h&&r.selectedDates.length&&(r.rangeDateFrom=r.selectedDates[0],r.rangeDateTo=r.selectedDates[1]),s.timepicker&&!n?(c&&r.timepicker.destroy(),r.timepicker=!1,r.$timepicker.parentNode.removeChild(r.$timepicker)):!s.timepicker&&n&&r._addTimepicker(),!s.buttons&&o?r._addButtons():s.buttons&&!o?(r.buttons.destroy(),r.$buttons.parentNode.removeChild(r.$buttons)):c&&s.buttons&&o&&r.buttons.clearHtml().render(),!s.isMobile&&d?(r.treatAsInline||j||r._createMobileOverlay(),r._addMobileAttributes(),r.visible&&r._showMobileOverlay()):s.isMobile&&!d&&(r._removeMobileAttributes(),r.visible&&(j.classList.remove("-active-"),"function"!=typeof r.opts.position&&r.setPosition())),c&&(r.nav.update(),r.views[r.currentView].render(),r.currentView===i.days&&r.views[r.currentView].renderDayNames());})),I(this,"disableDate",((e,t)=>{(Array.isArray(e)?e:[e]).forEach((e=>{let i=b(e);if(!i)return;let s=t?"delete":"add";this.disabledDates[s](this.formatDate(i,"yyyy-MM-dd"));let a=this.getCell(i,this.currentViewSingular);a&&a.adpCell.render();}),[]);})),I(this,"enableDate",(e=>{this.disableDate(e,!0);})),I(this,"isDateDisabled",(e=>{let t=b(e);return this.disabledDates.has(this.formatDate(t,"yyyy-MM-dd"))})),I(this,"isOtherMonth",(e=>{let{month:t}=h(e);return t!==this.parsedViewDate.month})),I(this,"isOtherYear",(e=>{let{year:t}=h(e);return t!==this.parsedViewDate.year})),I(this,"isOtherDecade",(e=>{let{year:t}=h(e),[i,s]=c(this.viewDate);return t<i||t>s})),I(this,"_onChangeSelectedDate",(e=>{let{silent:t}=e;setTimeout((()=>{this._setInputValue(),this.opts.onSelect&&!t&&this._triggerOnSelect();}));})),I(this,"_onChangeFocusedDate",(function(e){let{viewDateTransition:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e)return;let i=!1;t&&(i=r.isOtherMonth(e)||r.isOtherYear(e)||r.isOtherDecade(e)),i&&r.setViewDate(e),r.opts.onFocus&&r.opts.onFocus({datepicker:r,date:e});})),I(this,"_onChangeTime",(e=>{let{hours:t,minutes:i}=e,s=new Date,{lastSelectedDate:a,opts:{onSelect:n}}=this,r=a;a||(r=s);let o=this.getCell(r,this.currentViewSingular),h=o&&o.adpCell;h&&h.isDisabled||(r.setHours(t),r.setMinutes(i),a?(this._setInputValue(),n&&this._triggerOnSelect()):this.selectDate(r));})),I(this,"_onFocus",(e=>{this.visible||this.show();})),I(this,"_onBlur",(e=>{this.inFocus||!this.visible||this.opts.isMobile||this.hide();})),I(this,"_onMouseDown",(e=>{this.inFocus=!0;})),I(this,"_onMouseUp",(e=>{this.inFocus=!1,this.$el.focus();})),I(this,"_onResize",(()=>{this.visible&&"function"!=typeof this.opts.position&&this.setPosition();})),I(this,"_onClickOverlay",(()=>{this.visible&&this.hide();})),I(this,"getViewDates",(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.days;return T.getDatesFunction(e)(r)})),I(this,"isWeekend",(e=>this.opts.weekends.includes(e))),I(this,"getClampedDate",(e=>{let{minDate:t,maxDate:i}=this,s=e;return i&&m(e,i)?s=i:t&&v(e,t)&&(s=t),s})),this.$el=a(e),!this.$el)return;this.$datepicker=n({className:"air-datepicker"}),this.opts=w({},s,t),this.$customContainer=!!this.opts.container&&a(this.opts.container),this.$altField=a(this.opts.altField||!1);let{view:o,startDate:l}=this.opts;l||(this.opts.startDate=new Date),"INPUT"===this.$el.nodeName&&(this.elIsInput=!0),this.inited=!1,this.visible=!1,this.viewDate=b(this.opts.startDate),this.focusDate=!1,this.initialReadonly=this.$el.getAttribute("readonly"),this.customHide=!1,this.currentView=o,this.selectedDates=[],this.disabledDates=new Set,this.isDestroyed=!1,this.views={},this.keys=[],this.rangeDateFrom="",this.rangeDateTo="",this.timepickerIsActive=!1,this.treatAsInline=this.opts.inline||!this.elIsInput,this.init();}init(){let{opts:e,treatAsInline:t,opts:{inline:i,isMobile:s,selectedDates:n,keyboardNav:r,onlyTimepicker:o}}=this,h=a("body");(!B||B&&P&&!h.contains(P))&&!i&&this.elIsInput&&!this.$customContainer&&R.buildGlobalContainer(R.defaultGlobalContainerId),!s||j||t||this._createMobileOverlay(),this._handleLocale(),this._bindSubEvents(),this._createMinMaxDates(),this._limitViewDateByMaxMinDates(),this.elIsInput&&(i||this._bindEvents(),r&&!o&&(this.keyboardNav=new A({dp:this,opts:e}))),n&&this.selectDate(n,{silent:!0}),this.opts.visible&&!t&&this.show(),s&&!t&&this.$el.setAttribute("readonly",!0),t&&this._createComponents();}_createMobileOverlay(){j=n({className:"air-datepicker-overlay"}),P.appendChild(j);}_createComponents(){let{opts:e,treatAsInline:t,opts:{inline:i,buttons:s,timepicker:a,position:n,classes:r,onlyTimepicker:o,isMobile:h}}=this;this._buildBaseHtml(),this.elIsInput&&(i||this._setPositionClasses(n)),!i&&this.elIsInput||this.$datepicker.classList.add("-inline-"),r&&this.$datepicker.classList.add(...r.split(" ")),o&&this.$datepicker.classList.add("-only-timepicker-"),h&&!t&&this._addMobileAttributes(),this.views[this.currentView]=new T({dp:this,type:this.currentView,opts:e}),this.nav=new V({dp:this,opts:e}),a&&this._addTimepicker(),s&&this._addButtons(),this.$content.appendChild(this.views[this.currentView].$el),this.$nav.appendChild(this.nav.$el);}_destroyComponents(){for(let e in this.views)this.views[e].destroy();this.views={},this.nav.destroy(),this.timepicker&&this.timepicker.destroy();}_addMobileAttributes(){j.addEventListener("click",this._onClickOverlay),this.$datepicker.classList.add("-is-mobile-"),this.$el.setAttribute("readonly",!0);}_removeMobileAttributes(){j.removeEventListener("click",this._onClickOverlay),this.$datepicker.classList.remove("-is-mobile-"),this.initialReadonly||""===this.initialReadonly||this.$el.removeAttribute("readonly");}_createMinMaxDates(){let{minDate:e,maxDate:t}=this.opts;this.minDate=!!e&&b(e),this.maxDate=!!t&&b(t);}_addTimepicker(){this.$timepicker=n({className:"air-datepicker--time"}),this.$datepicker.appendChild(this.$timepicker),this.timepicker=new L({dp:this,opts:this.opts}),this.$timepicker.appendChild(this.timepicker.$el);}_addButtons(){this.$buttons=n({className:"air-datepicker--buttons"}),this.$datepicker.appendChild(this.$buttons),this.buttons=new H({dp:this,opts:this.opts}),this.$buttons.appendChild(this.buttons.$el);}_bindSubEvents(){this.on(i.eventChangeSelectedDate,this._onChangeSelectedDate),this.on(i.eventChangeFocusDate,this._onChangeFocusedDate),this.on(i.eventChangeTime,this._onChangeTime);}_buildBaseHtml(){let{inline:e}=this.opts;var t,i;this.elIsInput?e?(t=this.$datepicker,(i=this.$el).parentNode.insertBefore(t,i.nextSibling)):this.$container.appendChild(this.$datepicker):this.$el.appendChild(this.$datepicker),this.$datepicker.innerHTML='<i class="air-datepicker--pointer"></i><div class="air-datepicker--navigation"></div><div class="air-datepicker--content"></div>',this.$content=a(".air-datepicker--content",this.$datepicker),this.$pointer=a(".air-datepicker--pointer",this.$datepicker),this.$nav=a(".air-datepicker--navigation",this.$datepicker);}_handleLocale(){let{locale:e,dateFormat:t,firstDay:i,timepicker:s,onlyTimepicker:a,timeFormat:n,dateTimeSeparator:r}=this.opts;var o;this.locale=(o=e,JSON.parse(JSON.stringify(o))),t&&(this.locale.dateFormat=t),void 0!==n&&""!==n&&(this.locale.timeFormat=n);let{timeFormat:h}=this.locale;if(""!==i&&(this.locale.firstDay=i),s&&"function"!=typeof t){let e=h?r:"";this.locale.dateFormat=[this.locale.dateFormat,h||""].join(e);}a&&"function"!=typeof t&&(this.locale.dateFormat=this.locale.timeFormat);}_setPositionClasses(e){if("function"==typeof e)return void this.$datepicker.classList.add("-custom-position-");let t=(e=e.split(" "))[0],i=`air-datepicker -${t}-${e[1]}- -from-${t}-`;this.$datepicker.classList.add(...i.split(" "));}_bindEvents(){this.$el.addEventListener(this.opts.showEvent,this._onFocus),this.$el.addEventListener("blur",this._onBlur),this.$datepicker.addEventListener("mousedown",this._onMouseDown),this.$datepicker.addEventListener("mouseup",this._onMouseUp),window.addEventListener("resize",this._onResize);}_limitViewDateByMaxMinDates(){let{viewDate:e,minDate:t,maxDate:i}=this;i&&m(e,i)&&this.setViewDate(i),t&&v(e,t)&&this.setViewDate(t);}formatDate(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.viewDate,t=arguments.length>1?arguments[1]:void 0;if(e=b(e),!(e instanceof Date))return;let i=t,s=this.locale,a=h(e),n=a.dayPeriod,r=c(e),o=R.replacer,l={T:e.getTime(),m:a.minutes,mm:a.fullMinutes,h:a.hours12,hh:a.fullHours12,H:a.hours,HH:a.fullHours,aa:n,AA:n.toUpperCase(),E:s.daysShort[a.day],EEEE:s.days[a.day],d:a.date,dd:a.fullDate,M:a.month+1,MM:a.fullMonth,MMM:s.monthsShort[a.month],MMMM:s.months[a.month],yy:a.year.toString().slice(-2),yyyy:a.year,yyyy1:r[0],yyyy2:r[1]};for(let[e,t]of Object.entries(l))i=o(i,k(e),t);return i}down(e){this._handleUpDownActions(e,"down");}up(e){this._handleUpDownActions(e,"up");}selectDate(e){let t,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{currentView:a,parsedViewDate:n,selectedDates:r}=this,{updateTime:o}=s,{moveToOtherMonthsOnSelect:h,moveToOtherYearsOnSelect:l,multipleDates:d,range:c,autoClose:u,onBeforeSelect:p}=this.opts,v=r.length;if(Array.isArray(e))return e.forEach((e=>{this.selectDate(e,s);})),new Promise((e=>{setTimeout(e);}));if((e=b(e))instanceof Date){if(p&&!p({date:e,datepicker:this}))return Promise.resolve();if(a===i.days&&e.getMonth()!==n.month&&h&&(t=new Date(e.getFullYear(),e.getMonth(),1)),a===i.years&&e.getFullYear()!==n.year&&l&&(t=new Date(e.getFullYear(),0,1)),t&&this.setViewDate(t),d&&!c){if(v===d)return;this._checkIfDateIsSelected(e)||r.push(e);}else if(c)switch(v){case 1:r.push(e),this.rangeDateTo||(this.rangeDateTo=e),m(this.rangeDateFrom,this.rangeDateTo)&&(this.rangeDateTo=this.rangeDateFrom,this.rangeDateFrom=e),this.selectedDates=[this.rangeDateFrom,this.rangeDateTo];break;case 2:this.selectedDates=[e],this.rangeDateFrom=e,this.rangeDateTo="";break;default:this.selectedDates=[e],this.rangeDateFrom=e;}else this.selectedDates=[e];return this.trigger(i.eventChangeSelectedDate,{action:i.actionSelectDate,silent:null==s?void 0:s.silent,date:e,updateTime:o}),this._updateLastSelectedDate(e),u&&!this.timepickerIsActive&&this.visible&&(d||c?c&&1===v&&this.hide():this.hide()),new Promise((e=>{setTimeout(e);}))}}unselectDate(e){let t=this.selectedDates,s=this;if((e=b(e))instanceof Date)return t.some(((a,n)=>{if(p(a,e))return t.splice(n,1),s.selectedDates.length?(s.rangeDateTo="",s.rangeDateFrom=t[0],s._updateLastSelectedDate(s.selectedDates[s.selectedDates.length-1])):(s.rangeDateFrom="",s.rangeDateTo="",s._updateLastSelectedDate(!1)),this.trigger(i.eventChangeSelectedDate,{action:i.actionUnselectDate,date:e}),!0}))}replaceDate(e,t){let s=this.selectedDates.find((t=>p(t,e,this.currentView))),a=this.selectedDates.indexOf(s);a<0||p(this.selectedDates[a],t,this.currentView)||(this.selectedDates[a]=t,this.trigger(i.eventChangeSelectedDate,{action:i.actionSelectDate,date:t,updateTime:!0}),this._updateLastSelectedDate(t));}clear(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.selectedDates=[],this.rangeDateFrom=!1,this.rangeDateTo=!1,this.lastSelectedDate=!1,this.trigger(i.eventChangeSelectedDate,{action:i.actionUnselectDate,silent:e.silent}),new Promise((e=>{setTimeout(e);}))}show(){let{onShow:e,isMobile:t}=this.opts;this._cancelScheduledCall(),this.visible||this.hideAnimation||this._createComponents(),this.setPosition(this.opts.position),this.$datepicker.classList.add("-active-"),this.visible=!0,e&&this._scheduleCallAfterTransition(e),t&&this._showMobileOverlay();}hide(){let{onHide:e,isMobile:t}=this.opts,i=this._hasTransition();this.visible=!1,this.hideAnimation=!0,this.$datepicker.classList.remove("-active-"),this.customHide&&this.customHide(),this.elIsInput&&this.$el.blur(),this._scheduleCallAfterTransition((t=>{!this.customHide&&(t&&i||!t&&!i)&&this._finishHide(),e&&e(t);})),t&&j.classList.remove("-active-");}_triggerOnSelect(){let e=[],t=[],{selectedDates:i,locale:s,opts:{onSelect:a,multipleDates:n,range:r}}=this,o=n||r,h="function"==typeof s.dateFormat;i.length&&(e=i.map(g),t=h?n?s.dateFormat(e):e.map((e=>s.dateFormat(e))):e.map((e=>this.formatDate(e,s.dateFormat)))),a({date:o?e:e[0],formattedDate:o?t:t[0],datepicker:this});}_handleAlreadySelectedDates(e,t){let{selectedDates:i,rangeDateFrom:s,rangeDateTo:a}=this,{range:n,toggleSelected:r}=this.opts,o=i.length,h="function"==typeof r?r({datepicker:this,date:t}):r,l=Boolean(n&&1===o&&e),d=l?g(t):t;n&&!h&&(2!==o&&this.selectDate(d),2===o&&p(s,a))||(h?this.unselectDate(d):this._updateLastSelectedDate(l?d:e));}_handleUpDownActions(e,t){if(!((e=b(e||this.focusDate||this.viewDate))instanceof Date))return;let i="up"===t?this.viewIndex+1:this.viewIndex-1;i>2&&(i=2),i<0&&(i=0),this.setViewDate(new Date(e.getFullYear(),e.getMonth(),1)),this.setCurrentView(this.viewIndexes[i]);}getCell(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.day;if(!((e=b(e))instanceof Date))return;let{year:s,month:a,date:n}=h(e),r=`[data-year="${s}"]`,o=`[data-month="${a}"]`,l={[i.day]:`${r}${o}[data-date="${n}"]`,[i.month]:`${r}${o}`,[i.year]:`${r}`};return this.views[this.currentView]?this.views[this.currentView].$el.querySelector(l[t]):void 0}_showMobileOverlay(){j.classList.add("-active-");}_hasTransition(){return window.getComputedStyle(this.$datepicker).getPropertyValue("transition-duration").split(", ").reduce(((e,t)=>parseFloat(t)+e),0)>0}get shouldUpdateDOM(){return this.visible||this.treatAsInline}get parsedViewDate(){return h(this.viewDate)}get currentViewSingular(){return this.currentView.slice(0,-1)}get curDecade(){return c(this.viewDate)}get viewIndex(){return this.viewIndexes.indexOf(this.currentView)}get isFinalView(){return this.currentView===i.years}get hasSelectedDates(){return this.selectedDates.length>0}get isMinViewReached(){return this.currentView===this.opts.minView||this.currentView===i.days}get $container(){return this.$customContainer||P}static replacer(e,t,i){return e.replace(t,(function(e,t,s,a){return t+i+a}))}}var K;return I(R,"defaults",s),I(R,"version","3.5.3"),I(R,"defaultGlobalContainerId","air-datepicker-global-container"),K=R.prototype,Object.assign(K,N),t.default}()}));
}(airDatepicker));

const AirDatepicker = airDatepicker.exports;

var en = {};

Object.defineProperty(en, "__esModule", {
  value: true
});
var default_1 = en.default = void 0;
var _default = {
  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  today: 'Today',
  clear: 'Clear',
  dateFormat: 'MM/dd/yyyy',
  timeFormat: 'hh:mm aa',
  firstDay: 0
};
default_1 = en.default = _default;

const irDatePickerCss = ".air-datepicker-cell.-year-.-other-decade-,.air-datepicker-cell.-day-.-other-month-{color:var(--adp-color-other-month)}.air-datepicker-cell.-year-.-other-decade-:hover,.air-datepicker-cell.-day-.-other-month-:hover{color:var(--adp-color-other-month-hover)}.-disabled-.-focus-.air-datepicker-cell.-year-.-other-decade-,.-disabled-.-focus-.air-datepicker-cell.-day-.-other-month-{color:var(--adp-color-other-month)}.-selected-.air-datepicker-cell.-year-.-other-decade-,.-selected-.air-datepicker-cell.-day-.-other-month-{color:#fff;background:var(--adp-background-color-selected-other-month)}.-selected-.-focus-.air-datepicker-cell.-year-.-other-decade-,.-selected-.-focus-.air-datepicker-cell.-day-.-other-month-{background:var(--adp-background-color-selected-other-month-focused)}.-in-range-.air-datepicker-cell.-year-.-other-decade-,.-in-range-.air-datepicker-cell.-day-.-other-month-{background-color:var(--adp-background-color-in-range);color:var(--adp-color)}.-in-range-.-focus-.air-datepicker-cell.-year-.-other-decade-,.-in-range-.-focus-.air-datepicker-cell.-day-.-other-month-{background-color:var(--adp-background-color-in-range-focused)}.air-datepicker-cell.-year-.-other-decade-:empty,.air-datepicker-cell.-day-.-other-month-:empty{background:none;border:none}.air-datepicker-cell{border-radius:var(--adp-cell-border-radius);box-sizing:border-box;cursor:pointer;display:flex;position:relative;align-items:center;justify-content:center;z-index:1}.air-datepicker-cell.-focus-{background:var(--adp-cell-background-color-hover)}.air-datepicker-cell.-current-{color:var(--adp-color-current-date)}.air-datepicker-cell.-current-.-focus-{color:var(--adp-color)}.air-datepicker-cell.-current-.-in-range-{color:var(--adp-color-current-date)}.air-datepicker-cell.-disabled-{cursor:default;color:var(--adp-color-disabled)}.air-datepicker-cell.-disabled-.-focus-{color:var(--adp-color-disabled)}.air-datepicker-cell.-disabled-.-in-range-{color:var(--adp-color-disabled-in-range)}.air-datepicker-cell.-disabled-.-current-.-focus-{color:var(--adp-color-disabled)}.air-datepicker-cell.-in-range-{background:var(--adp-cell-background-color-in-range);border-radius:0}.air-datepicker-cell.-in-range-:hover,.air-datepicker-cell.-in-range-.-focus-{background:var(--adp-cell-background-color-in-range-hover)}.air-datepicker-cell.-range-from-{border:1px solid var(--adp-cell-border-color-in-range);background-color:var(--adp-cell-background-color-in-range);border-radius:var(--adp-cell-border-radius) 0 0 var(--adp-cell-border-radius)}.air-datepicker-cell.-range-to-{border:1px solid var(--adp-cell-border-color-in-range);background-color:var(--adp-cell-background-color-in-range);border-radius:0 var(--adp-cell-border-radius) var(--adp-cell-border-radius) 0}.air-datepicker-cell.-range-to-.-range-from-{border-radius:var(--adp-cell-border-radius)}.air-datepicker-cell.-selected-{color:#fff;border:none;background:var(--adp-cell-background-color-selected)}.air-datepicker-cell.-selected-.-current-{color:#fff;background:var(--adp-cell-background-color-selected)}.air-datepicker-cell.-selected-.-focus-{background:var(--adp-cell-background-color-selected-hover)}.air-datepicker-body{transition:all var(--adp-transition-duration) var(--adp-transition-ease)}.air-datepicker-body.-hidden-{display:none}.air-datepicker-body--day-names{display:grid;grid-template-columns:repeat(7, var(--adp-day-cell-width));margin:8px 0 3px}.air-datepicker-body--day-name{color:var(--adp-day-name-color);display:flex;align-items:center;justify-content:center;flex:1;text-align:center;text-transform:uppercase;font-size:.8em}.air-datepicker-body--day-name.-clickable-{cursor:pointer}.air-datepicker-body--day-name.-clickable-:hover{color:var(--adp-day-name-color-hover)}.air-datepicker-body--cells{display:grid}.air-datepicker-body--cells.-days-{grid-template-columns:repeat(7, var(--adp-day-cell-width));grid-auto-rows:var(--adp-day-cell-height)}.air-datepicker-body--cells.-months-{grid-template-columns:repeat(3, 1fr);grid-auto-rows:var(--adp-month-cell-height)}.air-datepicker-body--cells.-years-{grid-template-columns:repeat(4, 1fr);grid-auto-rows:var(--adp-year-cell-height)}.air-datepicker-nav{display:flex;justify-content:space-between;border-bottom:1px solid var(--adp-border-color-inner);min-height:var(--adp-nav-height);padding:var(--adp-padding);box-sizing:content-box}.-only-timepicker- .air-datepicker-nav{display:none}.air-datepicker-nav--title,.air-datepicker-nav--action{display:flex;cursor:pointer;align-items:center;justify-content:center}.air-datepicker-nav--action{width:var(--adp-nav-action-size);border-radius:var(--adp-border-radius);-webkit-user-select:none;-moz-user-select:none;user-select:none}.air-datepicker-nav--action:hover{background:var(--adp-background-color-hover)}.air-datepicker-nav--action:active{background:var(--adp-background-color-active)}.air-datepicker-nav--action.-disabled-{visibility:hidden}.air-datepicker-nav--action svg{width:32px;height:32px}.air-datepicker-nav--action path{fill:none;stroke:var(--adp-nav-arrow-color);stroke-width:2px}.air-datepicker-nav--title{border-radius:var(--adp-border-radius);padding:0 8px}.air-datepicker-nav--title i{font-style:normal;color:var(--adp-nav-color-secondary);margin-left:.3em}.air-datepicker-nav--title:hover{background:var(--adp-background-color-hover)}.air-datepicker-nav--title:active{background:var(--adp-background-color-active)}.air-datepicker-nav--title.-disabled-{cursor:default;background:none}.air-datepicker-buttons{display:grid;grid-auto-columns:1fr;grid-auto-flow:column}.air-datepicker-button{display:inline-flex;color:var(--adp-btn-color);border-radius:var(--adp-btn-border-radius);cursor:pointer;height:var(--adp-btn-height);border:none;background:rgba(255,255,255,0)}.air-datepicker-button:hover{color:var(--adp-btn-color-hover);background:var(--adp-btn-background-color-hover)}.air-datepicker-button:focus{color:var(--adp-btn-color-hover);background:var(--adp-btn-background-color-hover);outline:none}.air-datepicker-button:active{background:var(--adp-btn-background-color-active)}.air-datepicker-button span{outline:none;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.air-datepicker-time{display:grid;grid-template-columns:max-content 1fr;grid-column-gap:12px;align-items:center;position:relative;padding:0 var(--adp-time-padding-inner)}.-only-timepicker- .air-datepicker-time{border-top:none}.air-datepicker-time--current{display:flex;align-items:center;flex:1;font-size:14px;text-align:center}.air-datepicker-time--current-colon{margin:0 2px 3px;line-height:1}.air-datepicker-time--current-hours,.air-datepicker-time--current-minutes{line-height:1;font-size:19px;font-family:\"Century Gothic\",CenturyGothic,AppleGothic,sans-serif;position:relative;z-index:1}.air-datepicker-time--current-hours:after,.air-datepicker-time--current-minutes:after{content:\"\";background:var(--adp-background-color-hover);border-radius:var(--adp-border-radius);position:absolute;left:-2px;top:-3px;right:-2px;bottom:-2px;z-index:-1;opacity:0}.air-datepicker-time--current-hours.-focus-:after,.air-datepicker-time--current-minutes.-focus-:after{opacity:1}.air-datepicker-time--current-ampm{text-transform:uppercase;align-self:flex-end;color:var(--adp-time-day-period-color);margin-left:6px;font-size:11px;margin-bottom:1px}.air-datepicker-time--row{display:flex;align-items:center;font-size:11px;height:17px;background:linear-gradient(to right, var(--adp-time-track-color), var(--adp-time-track-color)) left 50%/100% var(--adp-time-track-height) no-repeat}.air-datepicker-time--row:first-child{margin-bottom:4px}.air-datepicker-time--row input[type=range]{background:none;cursor:pointer;flex:1;height:100%;width:100%;padding:0;margin:0;-webkit-appearance:none}.air-datepicker-time--row input[type=range]::-webkit-slider-thumb{-webkit-appearance:none}.air-datepicker-time--row input[type=range]::-ms-tooltip{display:none}.air-datepicker-time--row input[type=range]:hover::-webkit-slider-thumb{border-color:var(--adp-time-track-color-hover)}.air-datepicker-time--row input[type=range]:hover::-moz-range-thumb{border-color:var(--adp-time-track-color-hover)}.air-datepicker-time--row input[type=range]:hover::-ms-thumb{border-color:var(--adp-time-track-color-hover)}.air-datepicker-time--row input[type=range]:focus{outline:none}.air-datepicker-time--row input[type=range]:focus::-webkit-slider-thumb{background:var(--adp-cell-background-color-selected);border-color:var(--adp-cell-background-color-selected)}.air-datepicker-time--row input[type=range]:focus::-moz-range-thumb{background:var(--adp-cell-background-color-selected);border-color:var(--adp-cell-background-color-selected)}.air-datepicker-time--row input[type=range]:focus::-ms-thumb{background:var(--adp-cell-background-color-selected);border-color:var(--adp-cell-background-color-selected)}.air-datepicker-time--row input[type=range]::-webkit-slider-thumb{box-sizing:border-box;height:12px;width:12px;border-radius:3px;border:1px solid var(--adp-time-track-color);background:#fff;cursor:pointer;-webkit-transition:background var(--adp-transition-duration);transition:background var(--adp-transition-duration)}.air-datepicker-time--row input[type=range]::-moz-range-thumb{box-sizing:border-box;height:12px;width:12px;border-radius:3px;border:1px solid var(--adp-time-track-color);background:#fff;cursor:pointer;-moz-transition:background var(--adp-transition-duration);transition:background var(--adp-transition-duration)}.air-datepicker-time--row input[type=range]::-ms-thumb{box-sizing:border-box;height:12px;width:12px;border-radius:3px;border:1px solid var(--adp-time-track-color);background:#fff;cursor:pointer;-ms-transition:background var(--adp-transition-duration);transition:background var(--adp-transition-duration)}.air-datepicker-time--row input[type=range]::-webkit-slider-thumb{margin-top:calc(var(--adp-time-thumb-size)/2*-1)}.air-datepicker-time--row input[type=range]::-webkit-slider-runnable-track{border:none;height:var(--adp-time-track-height);cursor:pointer;color:rgba(0,0,0,0);background:rgba(0,0,0,0)}.air-datepicker-time--row input[type=range]::-moz-range-track{border:none;height:var(--adp-time-track-height);cursor:pointer;color:rgba(0,0,0,0);background:rgba(0,0,0,0)}.air-datepicker-time--row input[type=range]::-ms-track{border:none;height:var(--adp-time-track-height);cursor:pointer;color:rgba(0,0,0,0);background:rgba(0,0,0,0)}.air-datepicker-time--row input[type=range]::-ms-fill-lower{background:rgba(0,0,0,0)}.air-datepicker-time--row input[type=range]::-ms-fill-upper{background:rgba(0,0,0,0)}.air-datepicker{--adp-font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";--adp-font-size:14px;--adp-width:246px;--adp-z-index:100;--adp-padding:4px;--adp-grid-areas:\"nav\" \"body\" \"timepicker\" \"buttons\";--adp-transition-duration:.3s;--adp-transition-ease:ease-out;--adp-transition-offset:8px;--adp-background-color:#fff;--adp-background-color-hover:#f0f0f0;--adp-background-color-active:#eaeaea;--adp-background-color-in-range:rgba(92, 196, 239, .1);--adp-background-color-in-range-focused:rgba(92, 196, 239, .2);--adp-background-color-selected-other-month-focused:#8ad5f4;--adp-background-color-selected-other-month:#a2ddf6;--adp-color:#4a4a4a;--adp-color-secondary:#9c9c9c;--adp-accent-color:#4eb5e6;--adp-color-current-date:var(--adp-accent-color);--adp-color-other-month:#dedede;--adp-color-disabled:#aeaeae;--adp-color-disabled-in-range:#939393;--adp-color-other-month-hover:#c5c5c5;--adp-border-color:#dbdbdb;--adp-border-color-inner:#efefef;--adp-border-radius:4px;--adp-border-color-inline:#d7d7d7;--adp-nav-height:32px;--adp-nav-arrow-color:var(--adp-color-secondary);--adp-nav-action-size:32px;--adp-nav-color-secondary:var(--adp-color-secondary);--adp-day-name-color:#ff9a19;--adp-day-name-color-hover:#8ad5f4;--adp-day-cell-width:1fr;--adp-day-cell-height:32px;--adp-month-cell-height:42px;--adp-year-cell-height:56px;--adp-pointer-size:10px;--adp-poiner-border-radius:2px;--adp-pointer-offset:14px;--adp-cell-border-radius:4px;--adp-cell-background-color-hover:var(--adp-background-color-hover);--adp-cell-background-color-selected:#5cc4ef;--adp-cell-background-color-selected-hover:#45bced;--adp-cell-background-color-in-range:rgba(92, 196, 239, 0.1);--adp-cell-background-color-in-range-hover:rgba(92, 196, 239, 0.2);--adp-cell-border-color-in-range:var(--adp-cell-background-color-selected);--adp-btn-height:32px;--adp-btn-color:var(--adp-accent-color);--adp-btn-color-hover:var(--adp-color);--adp-btn-border-radius:var(--adp-border-radius);--adp-btn-background-color-hover:var(--adp-background-color-hover);--adp-btn-background-color-active:var(--adp-background-color-active);--adp-time-track-height:1px;--adp-time-track-color:#dedede;--adp-time-track-color-hover:#b1b1b1;--adp-time-thumb-size:12px;--adp-time-padding-inner:10px;--adp-time-day-period-color:var(--adp-color-secondary);--adp-mobile-font-size:16px;--adp-mobile-nav-height:40px;--adp-mobile-width:320px;--adp-mobile-day-cell-height:38px;--adp-mobile-month-cell-height:48px;--adp-mobile-year-cell-height:64px}.air-datepicker-overlay{--adp-overlay-background-color:rgba(0, 0, 0, .3);--adp-overlay-transition-duration:.3s;--adp-overlay-transition-ease:ease-out;--adp-overlay-z-index:99}.air-datepicker{background:var(--adp-background-color);border:1px solid var(--adp-border-color);box-shadow:0 4px 12px rgba(0,0,0,.15);border-radius:var(--adp-border-radius);box-sizing:content-box;display:grid;grid-template-columns:1fr;grid-template-rows:repeat(4, max-content);grid-template-areas:var(--adp-grid-areas);font-family:var(--adp-font-family),sans-serif;font-size:var(--adp-font-size);color:var(--adp-color);width:var(--adp-width);position:absolute;transition:opacity var(--adp-transition-duration) var(--adp-transition-ease),transform var(--adp-transition-duration) var(--adp-transition-ease);z-index:var(--adp-z-index)}.air-datepicker:not(.-custom-position-){opacity:0}.air-datepicker.-from-top-{transform:translateY(calc(var(--adp-transition-offset) * -1))}.air-datepicker.-from-right-{transform:translateX(var(--adp-transition-offset))}.air-datepicker.-from-bottom-{transform:translateY(var(--adp-transition-offset))}.air-datepicker.-from-left-{transform:translateX(calc(var(--adp-transition-offset) * -1))}.air-datepicker.-active-:not(.-custom-position-){transform:translate(0, 0);opacity:1}.air-datepicker.-active-.-custom-position-{transition:none}.air-datepicker.-inline-{border-color:var(--adp-border-color-inline);box-shadow:none;position:static;left:auto;right:auto;opacity:1;transform:none}.air-datepicker.-inline- .air-datepicker--pointer{display:none}.air-datepicker.-is-mobile-{--adp-font-size:var(--adp-mobile-font-size);--adp-day-cell-height:var(--adp-mobile-day-cell-height);--adp-month-cell-height:var(--adp-mobile-month-cell-height);--adp-year-cell-height:var(--adp-mobile-year-cell-height);--adp-nav-height:var(--adp-mobile-nav-height);--adp-nav-action-size:var(--adp-mobile-nav-height);position:fixed;width:var(--adp-mobile-width);border:none}.air-datepicker.-is-mobile- *{-webkit-tap-highlight-color:rgba(0,0,0,0)}.air-datepicker.-is-mobile- .air-datepicker--pointer{display:none}.air-datepicker.-is-mobile-:not(.-custom-position-){transform:translate(-50%, calc(-50% + var(--adp-transition-offset)))}.air-datepicker.-is-mobile-.-active-:not(.-custom-position-){transform:translate(-50%, -50%)}.air-datepicker.-custom-position-{transition:none}.air-datepicker-global-container{position:absolute;left:0;top:0}.air-datepicker--pointer{--pointer-half-size:calc(var(--adp-pointer-size) / 2);position:absolute;width:var(--adp-pointer-size);height:var(--adp-pointer-size);z-index:-1}.air-datepicker--pointer:after{content:\"\";position:absolute;background:#fff;border-top:1px solid var(--adp-border-color-inline);border-right:1px solid var(--adp-border-color-inline);border-top-right-radius:var(--adp-poiner-border-radius);width:var(--adp-pointer-size);height:var(--adp-pointer-size);box-sizing:border-box}.-top-left- .air-datepicker--pointer,.-top-center- .air-datepicker--pointer,.-top-right- .air-datepicker--pointer,[data-popper-placement^=top] .air-datepicker--pointer{top:calc(100% - var(--pointer-half-size) + 1px)}.-top-left- .air-datepicker--pointer:after,.-top-center- .air-datepicker--pointer:after,.-top-right- .air-datepicker--pointer:after,[data-popper-placement^=top] .air-datepicker--pointer:after{transform:rotate(135deg)}.-right-top- .air-datepicker--pointer,.-right-center- .air-datepicker--pointer,.-right-bottom- .air-datepicker--pointer,[data-popper-placement^=right] .air-datepicker--pointer{right:calc(100% - var(--pointer-half-size) + 1px)}.-right-top- .air-datepicker--pointer:after,.-right-center- .air-datepicker--pointer:after,.-right-bottom- .air-datepicker--pointer:after,[data-popper-placement^=right] .air-datepicker--pointer:after{transform:rotate(225deg)}.-bottom-left- .air-datepicker--pointer,.-bottom-center- .air-datepicker--pointer,.-bottom-right- .air-datepicker--pointer,[data-popper-placement^=bottom] .air-datepicker--pointer{bottom:calc(100% - var(--pointer-half-size) + 1px)}.-bottom-left- .air-datepicker--pointer:after,.-bottom-center- .air-datepicker--pointer:after,.-bottom-right- .air-datepicker--pointer:after,[data-popper-placement^=bottom] .air-datepicker--pointer:after{transform:rotate(315deg)}.-left-top- .air-datepicker--pointer,.-left-center- .air-datepicker--pointer,.-left-bottom- .air-datepicker--pointer,[data-popper-placement^=left] .air-datepicker--pointer{left:calc(100% - var(--pointer-half-size) + 1px)}.-left-top- .air-datepicker--pointer:after,.-left-center- .air-datepicker--pointer:after,.-left-bottom- .air-datepicker--pointer:after,[data-popper-placement^=left] .air-datepicker--pointer:after{transform:rotate(45deg)}.-top-left- .air-datepicker--pointer,.-bottom-left- .air-datepicker--pointer{left:var(--adp-pointer-offset)}.-top-right- .air-datepicker--pointer,.-bottom-right- .air-datepicker--pointer{right:var(--adp-pointer-offset)}.-top-center- .air-datepicker--pointer,.-bottom-center- .air-datepicker--pointer{left:calc(50% - var(--adp-pointer-size)/2)}.-left-top- .air-datepicker--pointer,.-right-top- .air-datepicker--pointer{top:var(--adp-pointer-offset)}.-left-bottom- .air-datepicker--pointer,.-right-bottom- .air-datepicker--pointer{bottom:var(--adp-pointer-offset)}.-left-center- .air-datepicker--pointer,.-right-center- .air-datepicker--pointer{top:calc(50% - var(--adp-pointer-size)/2)}.air-datepicker--navigation{grid-area:nav}.air-datepicker--content{box-sizing:content-box;padding:var(--adp-padding);grid-area:body}.-only-timepicker- .air-datepicker--content{display:none}.air-datepicker--time{grid-area:timepicker}.air-datepicker--buttons{grid-area:buttons}.air-datepicker--buttons,.air-datepicker--time{padding:var(--adp-padding);border-top:1px solid var(--adp-border-color-inner)}.air-datepicker-overlay{position:fixed;background:var(--adp-overlay-background-color);left:0;top:0;width:0;height:0;opacity:0;transition:opacity var(--adp-overlay-transition-duration) var(--adp-overlay-transition-ease),left 0s,height 0s,width 0s;transition-delay:0s,var(--adp-overlay-transition-duration),var(--adp-overlay-transition-duration),var(--adp-overlay-transition-duration);z-index:var(--adp-overlay-z-index)}.air-datepicker-overlay.-active-{opacity:1;width:100%;height:100%;transition:opacity var(--adp-overlay-transition-duration) var(--adp-overlay-transition-ease),height 0s,width 0s}:host{display:block}.air-datepicker{font-size:auto}.air-datepicker-body--day-name{color:#000;font-weight:700}.air-datepicker-cell.-selected-,.air-datepicker-cell.-selected-.-focus-,.air-datepicker-cell.-selected-.-current-{background:#1e9ff2}.air-datepicker-cell.-disabled-{text-decoration:line-through}.air-datepicker-cell.-current-{color:#1e9ff2}.ir-date-picker-trigger{position:relative;box-sizing:border-box;width:fit-content;height:fit-content}.ir-date-picker-element{position:absolute;inset:0;opacity:0}";
const IrDatePickerStyle0 = irDatePickerCss;

const IrDatePicker = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.dateChanged = index.createEvent(this, "dateChanged", 7);
        this.inline = false;
        this.date = null;
        this.multipleDates = false;
        this.range = false;
        this.dateFormat = 'yyyy-MM-dd';
        this.timepicker = false;
        this.minDate = undefined;
        this.maxDate = undefined;
        this.disabled = false;
        this.autoClose = true;
        this.showOtherMonths = true;
        this.selectOtherMonths = true;
        this.customPicker = true;
        this.container = undefined;
        this.forceDestroyOnUpdate = false;
        this.emitEmptyDate = false;
        this.currentDate = null;
    }
    componentWillLoad() {
        // Sync initial @Prop to internal state
        if (this.date) {
            this.currentDate = this.toValidDate(this.date);
        }
    }
    componentDidLoad() {
        this.initializeDatepicker();
    }
    datePropChanged(newDate, oldDate) {
        if (this.isSameDates(newDate, oldDate)) {
            return;
        }
        this.updatePickerDate(newDate);
    }
    minDatePropChanged(newVal, oldVal) {
        var _a;
        if (!this.datePicker) {
            return;
        }
        if (!this.isSameDates(newVal, oldVal)) {
            (_a = this.datePicker) === null || _a === void 0 ? void 0 : _a.update({ minDate: this.toValidDate(newVal) });
        }
    }
    maxDatePropChanged(newVal, oldVal) {
        var _a;
        if (!this.isSameDates(newVal, oldVal)) {
            (_a = this.datePicker) === null || _a === void 0 ? void 0 : _a.update({ maxDate: this.toValidDate(newVal) });
        }
    }
    async openDatePicker() {
        // small delay to let the input mount if needed
        this.openDatePickerTimeout = setTimeout(() => {
            this.pickerRef.focus();
        }, 20);
    }
    async clearDatePicker() {
        var _a;
        (_a = this.datePicker) === null || _a === void 0 ? void 0 : _a.clear();
    }
    isSameDates(d1, d2) {
        if (!d1 && !d2)
            return true;
        if (!d1 || !d2)
            return false;
        return moment.hooks(d1).isSame(moment.hooks(d2), 'day');
    }
    toValidDate(value) {
        if (!value)
            return null;
        const d = new Date(value);
        return isNaN(d.getTime()) ? null : d;
    }
    updatePickerDate(newDate) {
        var _a, _b;
        const valid = this.toValidDate(newDate);
        if (!valid) {
            // If invalid or null, just clear
            (_a = this.datePicker) === null || _a === void 0 ? void 0 : _a.clear();
            this.currentDate = null;
            return;
        }
        // If it’s a truly new date, select it
        if (!this.isSameDates(this.currentDate, valid)) {
            this.currentDate = valid;
            if (this.forceDestroyOnUpdate) {
                this.datePicker.destroy();
                this.datePicker = null;
                this.initializeDatepicker();
            }
            else {
                (_b = this.datePicker) === null || _b === void 0 ? void 0 : _b.selectDate(valid);
            }
        }
    }
    initializeDatepicker() {
        if (this.datePicker)
            return;
        this.datePicker = new AirDatepicker(this.pickerRef, {
            container: this.container,
            inline: this.inline,
            selectedDates: this.date ? [this.date] : [],
            multipleDates: this.multipleDates,
            range: this.range,
            dateFormat: this.dateFormat,
            timepicker: this.timepicker,
            minDate: this.minDate,
            maxDate: this.maxDate,
            autoClose: this.autoClose,
            locale: default_1,
            showOtherMonths: this.showOtherMonths,
            selectOtherMonths: this.selectOtherMonths,
            onSelect: ({ date }) => {
                if (!date || !(date instanceof Date)) {
                    if (this.emitEmptyDate) {
                        this.dateChanged.emit({
                            start: null,
                            end: null,
                        });
                    }
                    return;
                }
                this.currentDate = date;
                this.date = date;
                this.dateChanged.emit({
                    start: moment.hooks(date),
                    end: moment.hooks(date),
                });
            },
            position({ $datepicker, $target, $pointer, done }) {
                let popper = createPopper($target, $datepicker, {
                    placement: 'top',
                    modifiers: [
                        {
                            name: 'flip',
                            options: { padding: { top: 0 } },
                        },
                        {
                            name: 'offset',
                            options: { offset: [0, 10] },
                        },
                        {
                            name: 'arrow',
                            options: { element: $pointer },
                        },
                    ],
                });
                return function completeHide() {
                    popper.destroy();
                    done();
                };
            },
        });
    }
    disconnectedCallback() {
        var _a, _b;
        if (this.openDatePickerTimeout) {
            clearTimeout(this.openDatePickerTimeout);
        }
        (_b = (_a = this.datePicker) === null || _a === void 0 ? void 0 : _a.destroy) === null || _b === void 0 ? void 0 : _b.call(_a);
    }
    render() {
        return (index.h("div", { key: 'd46f7fd64680a5c700f6f85c33c4253049c3987f', class: "ir-date-picker-trigger" }, this.customPicker && index.h("slot", { key: '52cd67181b11856a4bbc0ad3a8c0b0a4c37c224a', name: "trigger" }), index.h("input", { key: 'ad5659d62988b7be75a40e69c74429f3069c6fa3', type: "button", disabled: this.disabled, class: this.customPicker ? 'ir-date-picker-element' : 'form-control input-sm', ref: el => (this.pickerRef = el) })));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "date": ["datePropChanged"],
        "minDate": ["minDatePropChanged"],
        "maxDate": ["maxDatePropChanged"]
    }; }
};
IrDatePicker.style = IrDatePickerStyle0;

const irDateRangeCss = ".sc-ir-date-range-h{display:block}";
const IrDateRangeStyle0 = irDateRangeCss;

const IrDateRange = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.dateChanged = index.createEvent(this, "dateChanged", 7);
        this.fromDate = undefined;
        this.toDate = undefined;
        this.date = undefined;
        this.opens = undefined;
        this.autoApply = undefined;
        this.firstDay = 1;
        this.monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
        this.format = 'MMM DD, YYYY';
        this.separator = ' - ';
        this.applyLabel = 'Apply';
        this.cancelLabel = 'Cancel';
        this.fromLabel = 'Form';
        this.toLabel = 'To';
        this.customRangeLabel = 'Custom';
        this.weekLabel = 'W';
        this.disabled = false;
        this.singleDatePicker = false;
        this.minDate = undefined;
        this.maxDate = undefined;
        this.maxSpan = {
            days: 240,
        };
    }
    handleMinDateChange() {
        $(this.dateRangeInput).data('daterangepicker').remove();
        this.initializeDateRangePicker();
    }
    datePropChanged() {
        this.updateDateRangePickerDates();
    }
    async openDatePicker() {
        this.openDatePickerTimeout = setTimeout(() => {
            this.dateRangeInput.click();
        }, 20);
    }
    updateDateRangePickerDates() {
        const picker = $(this.dateRangeInput).data('daterangepicker');
        if (!picker) {
            console.error('Date range picker not initialized.');
            return;
        }
        // Adjust how dates are set based on whether it's a single date picker or range picker.
        if (this.singleDatePicker) {
            const newDate = this.date ? moment.hooks(this.date) : moment.hooks();
            picker.setStartDate(newDate);
            picker.setEndDate(newDate); // For single date picker, start and end date might be the same.
        }
        else {
            const newStartDate = this.fromDate ? moment.hooks(this.fromDate) : moment.hooks();
            const newEndDate = this.toDate ? moment.hooks(this.toDate) : newStartDate.clone().add(1, 'days');
            picker.setStartDate(newStartDate);
            picker.setEndDate(newEndDate);
        }
    }
    componentWillLoad() {
        if (!document.getElementById('ir-daterangepicker-style')) {
            const style = document.createElement('style');
            style.id = 'ir-daterangepicker-style';
            style.textContent = `
        .daterangepicker {
          margin-top: 14px;
        }
      `;
            document.head.appendChild(style);
        }
    }
    componentDidLoad() {
        this.dateRangeInput = this.element.querySelector('.date-range-input');
        this.initializeDateRangePicker();
        this.updateDateRangePickerDates();
    }
    initializeDateRangePicker() {
        $(this.dateRangeInput).daterangepicker({
            singleDatePicker: this.singleDatePicker,
            opens: this.opens,
            startDate: moment.hooks(this.fromDate),
            endDate: moment.hooks(this.toDate),
            minDate: moment.hooks(this.minDate || moment.hooks(new Date()).format('YYYY-MM-DD')),
            maxDate: this.maxDate ? moment.hooks(this.maxDate) : undefined,
            maxSpan: this.maxSpan,
            autoApply: this.autoApply,
            locale: {
                format: this.format,
                separator: this.separator,
                applyLabel: this.applyLabel,
                cancelLabel: this.cancelLabel,
                fromLabel: this.fromLabel,
                toLabel: this.toLabel,
                customRangeLabel: this.customRangeLabel,
                weekLabel: this.weekLabel,
                daysOfWeek: this.daysOfWeek,
                monthNames: this.monthNames,
                firstDay: this.firstDay,
            },
        }, (start, end) => {
            this.dateChanged.emit({ start, end });
        });
    }
    disconnectedCallback() {
        if (this.openDatePickerTimeout) {
            clearTimeout(this.openDatePickerTimeout);
        }
        $(this.dateRangeInput).data('daterangepicker').remove();
    }
    render() {
        return (index.h(index.Host, { key: '2de4e4d2c4e8962fd36b6e097e00bee842a9f7c7' }, index.h("input", { key: '9a3359fae46cb87f56a9aabcba32f1e7c9c250ee', class: "date-range-input", type: "text", disabled: this.disabled })));
    }
    get element() { return index.getElement(this); }
    static get watchers() { return {
        "minDate": ["handleMinDateChange"],
        "date": ["datePropChanged"]
    }; }
};
IrDateRange.style = IrDateRangeStyle0;

const irDateViewCss = ".sc-ir-date-view-h{display:block;font-size:13.65px !important;width:100%}.mx-01.sc-ir-date-view{--m:5px;margin-right:var(--m) !important;margin-left:var(--m) !important}";
const IrDateViewStyle0 = irDateViewCss;

const IrDateView = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.from_date = undefined;
        this.to_date = undefined;
        this.showDateDifference = true;
        this.dateOption = 'YYYY-MM-DD';
        this.dates = undefined;
    }
    componentWillLoad() {
        this.initializeDates();
    }
    handleFromDateChange(newVal, oldVal) {
        if (newVal !== oldVal) {
            this.initializeDates();
        }
    }
    handleToDateChange(newVal, oldVal) {
        if (newVal !== oldVal) {
            this.initializeDates();
        }
    }
    initializeDates() {
        this.convertDate('from_date', this.from_date);
        this.convertDate('to_date', this.to_date);
        const fromDate = moment.hooks(this.dates.from_date, 'MMM DD, YYYY').format('YYYY-MM-DD');
        const toDate = moment.hooks(this.dates.to_date, 'MMM DD, YYYY').format('YYYY-MM-DD');
        this.dates.date_diffrence = booking.calculateDaysBetweenDates(fromDate, toDate);
    }
    convertDate(key, date) {
        this.dates = this.dates || {
            from_date: '',
            to_date: '',
            date_diffrence: 0,
        };
        if (!date) {
            return;
        }
        if (typeof date === 'string') {
            this.dates[key] = moment.hooks(date, this.dateOption).format('MMM DD, YYYY');
        }
        else if (date instanceof Date) {
            this.dates[key] = moment.hooks(date).format('MMM DD, YYYY');
        }
        else if (moment.hooks.isMoment(date)) {
            this.dates[key] = date.format('MMM DD, YYYY');
        }
        else {
            console.error('Unsupported date type');
        }
    }
    render() {
        return (index.h(index.Host, { key: 'a3f50a9247b466dd21b599639cc4d284fc232888', class: "d-flex align-items-center" }, index.h("span", { key: '6ab3d9892600ccbbf7fd9c3fffc8bb6050ecea00' }, this.dates.from_date), ' ', index.h("svg", { key: 'b2d7e32e81b1d9808ee28d2c0d5e802895356e11', xmlns: "http://www.w3.org/2000/svg", class: "mx-01", height: "14", width: "14", viewBox: "0 0 512 512" }, index.h("path", { key: '6a489c23f72afb10ed1b050a19424ea5926ec6d5', fill: "currentColor", d: "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" })), index.h("span", { key: 'e2dcc3055a457d55552a54ca632baee0e22cfb40' }, this.dates.to_date, ' ', this.showDateDifference && (index.h("span", { key: '1ae4f22159b3ca2848a0858b290f39d7c4e1c9fe', class: "mx-01" }, this.dates.date_diffrence, '   ', this.dates.date_diffrence > 1 ? ` ${locales_store.locales.entries.Lcz_Nights}` : ` ${locales_store.locales.entries.Lcz_Night}`)))));
    }
    static get watchers() { return {
        "from_date": ["handleFromDateChange"],
        "to_date": ["handleToDateChange"]
    }; }
};
IrDateView.style = IrDateViewStyle0;

const irDialogCss = ":host{display:block;margin:0;padding:0;box-sizing:border-box}.backdrop{opacity:0;background:rgba(0, 0, 0, 0.2);position:fixed;inset:0;z-index:99999998}.backdrop[data-state='opened']{animation:overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards}.backdrop[data-state='closed']{opacity:0;pointer-events:none}.modal-container{box-sizing:border-box;margin:0;box-shadow:hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;position:fixed;z-index:99999999;overflow-y:auto;top:50%;left:50%;background:white;transform:translate(-50%, -50%);width:90%;min-height:fit-content;height:fit-content;max-width:var(--ir-dialog-max-width, 40rem);max-height:85vh;border-radius:8px;padding:0;animation:contentShow 300ms cubic-bezier(0.16, 1, 0.3, 1)}.modal-footer ::slotted(*){flex-direction:row;align-items:center;justify-content:end;gap:8px;--ir-btn-width:inherit}.modal-footer{--ir-btn-width:100%}.modal-title ::slotted(*){font-size:18px;font-weight:600;color:#101828;margin-bottom:8px}.modal-body ::slotted(*){font-size:14px;font-weight:400;color:#475467;padding:0;margin:0}@keyframes overlayShow{from{opacity:0}to{opacity:1}}@keyframes contentShow{from{opacity:0;transform:translate(-50%, -48%) scale(0.96)}to{opacity:1;transform:translate(-50%, -50%) scale(1)}}.dialog-close-button{position:absolute;top:15px;right:15px}";
const IrDialogStyle0 = irDialogCss;

const IrDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.openChange = index.createEvent(this, "openChange", 7);
        this.open = false;
        this.isOpen = false;
    }
    componentWillLoad() {
        if (this.open) {
            this.openModal();
        }
    }
    componentDidLoad() {
        this.prepareFocusTrap();
    }
    async openModal() {
        this.isOpen = true;
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            this.prepareFocusTrap();
        }, 10);
        this.openChange.emit(this.isOpen);
    }
    async closeModal() {
        console.log('close');
        if (!this.isOpen) {
            return;
        }
        document.body.style.overflow = 'visible';
        this.isOpen = false;
        this.openChange.emit(this.isOpen);
    }
    handleOpenChange() {
        if (this.open) {
            this.openModal();
        }
        else {
            this.closeModal();
        }
    }
    prepareFocusTrap() {
        const focusableElements = 'button,ir-dropdown ,[href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        const focusableContent = this.el.shadowRoot.querySelectorAll(focusableElements);
        // console.log(focusableContent);
        if (focusableContent.length === 0)
            return;
        this.firstFocusableElement = focusableContent[0];
        this.lastFocusableElement = focusableContent[focusableContent.length - 1];
        this.firstFocusableElement.focus();
    }
    handleKeyDown(ev) {
        if (!this.isOpen) {
            return;
        }
        let isTabPressed = ev.key === 'Tab';
        if (ev.key === 'Escape' && this.isOpen) {
            this.closeModal();
        }
        if (!isTabPressed) {
            return;
        }
        // If focus is about to leave the last focusable element, redirect it to the first.
        if (!ev.shiftKey && document.activeElement === this.lastFocusableElement) {
            this.firstFocusableElement.focus();
            ev.preventDefault();
        }
        // If focus is about to leave the first focusable element, redirect it to the last.
        if (ev.shiftKey && document.activeElement === this.firstFocusableElement) {
            this.lastFocusableElement.focus();
            ev.preventDefault();
        }
    }
    disconnectedCallback() {
        document.body.style.overflow = 'visible';
    }
    render() {
        return (index.h(index.Host, { key: 'b64a148fe6d6eacab8c4da7f2fb1d61ec5b2abf1' }, index.h("div", { key: 'b0619145a332095e853d83dbc652aa6e10254061', class: "backdrop", "data-state": this.isOpen ? 'opened' : 'closed', onClick: () => this.closeModal() }), this.isOpen && (index.h("div", { key: '89e5a9956aaef1014ed8a2271d94d1b129354224', class: "modal-container", tabIndex: -1, role: "dialog", "aria-labelledby": "dialog1Title", "aria-describedby": "dialog1Desc" }, index.h("ir-icon", { key: '820640347ac494375297804aefc327ff651a7d7a', id: "close", class: "dialog-close-button", onIconClickHandler: () => this.closeModal() }, index.h("svg", { key: 'd4dcaebd7e682b0c2ad31ac4a8d51af1d0d1d37d', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 18, width: 18 }, index.h("path", { key: 'd6712033c7ab5d313510bff212d21d8ab156ecdf', fill: "#104064", class: "currentColor", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" }))), index.h("div", { key: '915cc0dd777a70b57ec7c669bb8712935db8f334', class: 'modal-title', id: "dialog1Title" }, index.h("slot", { key: 'ba4c68088328e36dd45399b38bdc1b1315ff1003', name: "modal-title" })), index.h("div", { key: 'b472312d3b985e7efe76e6329898596721b87835', class: "modal-body", id: "dialog1Desc" }, index.h("slot", { key: '492699536eb383a4dbcd6fda5b8241dc0078c0ad', name: "modal-body" })), index.h("div", { key: '02ae3da4aa54ea140dc2258563f01c5480a78088', class: "modal-footer" }, index.h("slot", { key: '49a2bf5a5a0d191b5e396a767f7ae2d01eb5631b', name: "modal-footer" }))))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "open": ["handleOpenChange"]
    }; }
};
IrDialog.style = IrDialogStyle0;

const irEventsLogCss = ".sc-ir-events-log-h{display:block}.beta.sc-ir-events-log{background:var(--red);color:white;padding:0.2rem 0.3rem;font-size:12px;border-radius:4px;margin:0}.event-row.sc-ir-events-log{padding-bottom:0.5rem}.list-title.sc-ir-events-log{margin:0;padding:0;font-size:14px;font-weight:bold;width:fit-content}.list-item.sc-ir-events-log{margin:0;padding:0;font-size:14px;margin-left:5px;width:fit-content}.list-item.green.sc-ir-events-log{color:#629a4c;font-weight:600}.list-item.red.sc-ir-events-log{color:#ff4961;font-weight:600}.dates-row.sc-ir-events-log{display:flex;align-items:center;gap:0.875rem}";
const IrEventsLogStyle0 = irEventsLogCss;

const IrEventsLog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bookingService = new booking_service.BookingService();
        this.bookingNumber = undefined;
        this.bookingEvents = undefined;
    }
    componentWillLoad() {
        this.init();
    }
    async init() {
        try {
            this.bookingEvents = await this.bookingService.getExposedBookingEvents(this.bookingNumber);
        }
        catch (error) {
            console.error(error);
        }
    }
    render() {
        var _a;
        return (index.h("div", { key: '4448651237cb591d47306795cc20dfce7a304038', class: "p-1" }, index.h("div", { key: 'd185d270121c56d32e5fb808e2666aec6f51e01c', class: "d-flex  align-items-center", style: { gap: '0.5rem' } }, index.h("h3", { key: '24274211c340a4e294e3e9cc4ecf2065dd69bb05', class: " text-left p-0 m-0  dialog-title " }, locales_store.locales.entries.Lcz_EventsLog)), irInterceptor_store.isRequestPending('/Get_Exposed_Booking_Events') ? (index.h("div", { class: 'd-flex align-items-center justify-content-center dialog-container-height' }, index.h("ir-spinner", null))) : (index.h(index.Fragment, null, index.h("table", { class: " dialog-container-height" }, index.h("thead", { style: { opacity: '0' } }, index.h("tr", null, index.h("th", null, "date"), index.h("th", null, "user"), index.h("th", null, "status"))), index.h("tbody", null, (_a = this.bookingEvents) === null || _a === void 0 ? void 0 : _a.map(e => (index.h("tr", { key: e.id, class: "pb-1" }, index.h("td", { class: "event-row dates-row" }, index.h("span", null, e.date), index.h("span", null, String(e.hour).padStart(2, '0'), ":", String(e.minute).padStart(2, '0'), ":", String(e.second).padStart(2, '0'))), index.h("td", { class: "pl-3 event-row " }, e.type), index.h("td", { class: "pl-1 event-row " }, e.user))))))))));
    }
};
IrEventsLog.style = IrEventsLogStyle0;

const irExtraServiceCss = ".sc-ir-extra-service-h{display:block}.extra-service-container.sc-ir-extra-service{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.extra-service-container.sc-ir-extra-service *.sc-ir-extra-service{padding:0;margin:0;box-sizing:border-box}.extra-service-actions.sc-ir-extra-service{display:flex;align-items:center;gap:0.5rem}.extra-service-conditional-date.sc-ir-extra-service{margin-top:0.5rem}";
const IrExtraServiceStyle0 = irExtraServiceCss;

const IrExtraService = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.editExtraService = index.createEvent(this, "editExtraService", 7);
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt", 7);
        this.bookingService = new booking_service.BookingService();
        this.service = undefined;
        this.bookingNumber = undefined;
        this.currencySymbol = undefined;
    }
    async deleteService() {
        try {
            await this.bookingService.doBookingExtraService({
                service: this.service,
                is_remove: true,
                booking_nbr: this.bookingNumber,
            });
            this.resetBookingEvt.emit(null);
        }
        catch (error) {
            console.log(error);
        }
    }
    render() {
        return (index.h(index.Host, { key: 'dad1fe1f4e948b5b929083455b3b53304904a14e' }, index.h("div", { key: '0617cc94d515cd5fd6a1b7e97ad36b21ee451e89', class: "p-1" }, index.h("div", { key: 'f66bfb8d5c8188efed10e117fd049cf9d2bcabf2', class: 'extra-service-container' }, index.h("p", { key: 'caf0647874fc01078600b8372ecf1f8bebdc3122', class: "extra-service-description" }, this.service.description), index.h("div", { key: '1392b975f0e748960162622f621d4d248e68da4d', class: "extra-service-actions" }, this.service.price && index.h("p", { key: '017adcbd4444c615741b085c49f0dbc99dadcc07', class: "extra-service-price p-0 m-0 font-weight-bold" }, utils.formatAmount(this.currencySymbol, this.service.price)), index.h("ir-button", { key: '351f7427b9b059d1f97d5eb0dea63e807aa8b354', id: `serviceEdit-${this.service.booking_system_id}`, class: "extra-service-edit-btn m-0 p-0", variant: "icon", icon_name: "edit", style: colorVariants.secondary, onClickHandler: () => this.editExtraService.emit(this.service) }), index.h("ir-button", { key: '110c66e9c24eccd9b5c0d420b1249f370a6aef1d', class: "extra-service-delete-btn m-0 p-0", variant: "icon", onClickHandler: () => this.irModalRef.openModal(), id: `roomDelete-${this.service.booking_system_id}`, icon_name: "trash", style: colorVariants.danger }))), index.h("div", { key: '9ba9125488640e354ef40ab1a6fa1f7bb2d95512', class: "extra-service-conditional-date" }, this.service.start_date && this.service.end_date ? (index.h("ir-date-view", { class: "extra-service-date-view mr-1", from_date: this.service.start_date, to_date: this.service.end_date, showDateDifference: false })) : (this.service.start_date && index.h("p", { class: "extra-service-date-view" }, moment.hooks(new Date(this.service.start_date)).format('MMM DD, YYYY'))))), index.h("ir-modal", { key: '35ec6d35c1e970894e66a6397e1954ff8e439476', autoClose: false, ref: el => (this.irModalRef = el), isLoading: irInterceptor_store.isRequestPending('/Do_Booking_Extra_Service'), onConfirmModal: this.deleteService.bind(this), iconAvailable: true, icon: "ft-alert-triangle danger h1", leftBtnText: locales_store.locales.entries.Lcz_Cancel, rightBtnText: locales_store.locales.entries.Lcz_Delete, leftBtnColor: "secondary", rightBtnColor: "danger", modalTitle: locales_store.locales.entries.Lcz_Confirmation, modalBody: `${locales_store.locales.entries['Lcz_AreYouSureDoYouWantToRemove ']} ${locales_store.locales.entries.Lcz_ThisService} ${locales_store.locales.entries.Lcz_FromThisBooking}` })));
    }
};
IrExtraService.style = IrExtraServiceStyle0;

const ExtraServiceSchema = utils.z.object({
    booking_system_id: utils.z.number().optional(),
    cost: utils.z.coerce.number().nullable(),
    currency_id: utils.z.number().min(1),
    description: utils.z.string().min(1),
    end_date: utils.z.string().nullable(),
    price: utils.z.coerce.number(),
    start_date: utils.z.string().nullable(),
    system_id: utils.z.number().optional(),
});

const irExtraServiceConfigCss = ".sc-ir-extra-service-config-h{display:block;--ir-input-border-color:#cacfe7}.sc-ir-extra-service-config-h .input-group-text.sc-ir-extra-service-config{border-color:var(--ir-input-border-color)}.currency-ph.sc-ir-extra-service-config{padding:0;margin:0;color:#3b4781;display:flex;align-items:center;justify-content:center;padding:0 0 0 0.25rem;border-top:1px solid var(--ir-input-border-color);border-bottom:1px solid var(--ir-input-border-color);border-left:1px solid transparent;transition:border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;transition:border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}.service-description-input.sc-ir-extra-service-config{height:70px !important}.service-description.sc-ir-extra-service-config .input-group-prepend.sc-ir-extra-service-config{background-color:#f4f5fa;border:1px solid var(--ir-input-border-color);border-top-left-radius:0.25rem;border-bottom-left-radius:0.25rem}.service-date-container.sc-ir-extra-service-config{padding:0;margin:0;display:flex;align-items:center;position:relative;width:100%;justify-content:center}.service-date-container.sc-ir-extra-service-config .btn-container.sc-ir-extra-service-config{position:absolute;right:5px;margin:0;display:flex;align-items:center;justify-content:center;padding:0}.service-description.sc-ir-extra-service-config .input-group-text.sc-ir-extra-service-config{height:fit-content;border:0;padding-top:0.75rem !important}.price-input-group.sc-ir-extra-service-config:focus-within .currency-ph.sc-ir-extra-service-config,.cost-input-group.sc-ir-extra-service-config:focus-within .currency-ph.sc-ir-extra-service-config{border-top:1px solid #1e9ff2;border-bottom:1px solid #1e9ff2;border-left:1px solid #1e9ff2}.currency-ph[data-state='error'].sc-ir-extra-service-config{border-color:var(--red, #ff4961)}.price-input.sc-ir-extra-service-config:focus{border-right-width:1px !important}.is-invalid.sc-ir-extra-service-config{background-image:none !important}.price-input.sc-ir-extra-service-config,.cost-input.sc-ir-extra-service-config{border-left:0}.row-group.sc-ir-extra-service-config{display:flex;flex-direction:column;gap:0.5rem}@media (min-width: 640px){.row-group.sc-ir-extra-service-config{flex-direction:row;align-items:center;gap:0}.cost-label.sc-ir-extra-service-config{border-top-left-radius:0;border-bottom-left-radius:0;border-left:0}.until-prepend.sc-ir-extra-service-config,.cost-input-placeholder.sc-ir-extra-service-config{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}.date-from.sc-ir-extra-service-config,.price-input.sc-ir-extra-service-config{border-right-width:0 !important;border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}}";
const IrExtraServiceConfigStyle0 = irExtraServiceConfigCss;

const IrExtraServiceConfig = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeModal = index.createEvent(this, "closeModal", 7);
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt", 7);
        this.bookingService = new booking_service.BookingService();
        this.booking = undefined;
        this.service = undefined;
        this.s_service = undefined;
        this.error = undefined;
        this.fromDateClicked = undefined;
        this.toDateClicked = undefined;
    }
    componentWillLoad() {
        if (this.service) {
            this.s_service = Object.assign({}, this.service);
        }
    }
    async saveAmenity() {
        try {
            ExtraServiceSchema.parse(this.s_service);
            await this.bookingService.doBookingExtraService({
                service: this.s_service,
                booking_nbr: this.booking.booking_nbr,
                is_remove: false,
            });
            this.resetBookingEvt.emit(null);
            this.closeModal.emit(null);
        }
        catch (error) {
            if (error instanceof utils.ZodError) {
                this.error = true;
            }
            console.error(error);
        }
    }
    updateService(params) {
        let prevService = this.s_service;
        if (!prevService) {
            prevService = {
                cost: null,
                description: null,
                end_date: null,
                start_date: null,
                price: null,
                currency_id: this.booking.currency.id,
            };
        }
        this.s_service = Object.assign(Object.assign({}, prevService), params);
    }
    validatePrice() {
        var _a, _b, _c, _d;
        if (((_a = this.s_service) === null || _a === void 0 ? void 0 : _a.price) === undefined || ((_c = (_b = this.s_service) === null || _b === void 0 ? void 0 : _b.price) === null || _c === void 0 ? void 0 : _c.toString()) === '') {
            return false;
        }
        const priceSchema = ExtraServiceSchema.pick({ price: true });
        const result = priceSchema.safeParse({ price: (_d = this.s_service) === null || _d === void 0 ? void 0 : _d.price });
        return result.success;
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        return (index.h(index.Host, { key: '502b91242959a1d096d76cc7f79050f1430f5cf5', class: 'p-0' }, index.h("ir-title", { key: '932131117dc95212aa8511c74b551ebda8667305', class: "px-1", onCloseSideBar: () => this.closeModal.emit(null), label: locales_store.locales.entries.Lcz_ExtraServices, displayContext: "sidebar" }), index.h("section", { key: 'd32c6c02cf6889a2dd2fc212372095935e632210', class: 'px-1' }, index.h("fieldset", { key: '6d707ce2de3a3ca4fd225379857327c8ce0b18b0', class: "input-group mb-1 mt-3 service-description" }, index.h("div", { key: 'aeae4c5b06248bb78a147cf79f8ce1f0a4795d9c', class: "input-group-prepend" }, index.h("span", { key: 'e9c02ed59d90f25462dc7cf87990f54c08411efa', class: "input-group-text" }, locales_store.locales.entries.Lcz_Description)), index.h("textarea", { key: 'bc164b4063aa575a1d0cfa6bae90e50162c36971', value: (_a = this.s_service) === null || _a === void 0 ? void 0 : _a.description, class: `form-control service-description-input ${this.error && !((_b = this.s_service) === null || _b === void 0 ? void 0 : _b.description) ? 'is-invalid' : ''}`, style: { height: '7rem' }, maxLength: 250, onChange: e => this.updateService({ description: e.target.value }), "aria-label": "Amenity description" })), index.h("div", { key: 'df5b4f7cc4c644af479e1fa92fc05e5731b455a2', class: 'row-group mb-1' }, index.h("div", { key: 'fd498f02a1814ef508f8835ed6716dbd88bf2e10', class: "input-group" }, index.h("div", { key: 'deae5e6d0ae4d2f0e267de1072750a92474b8f6f', class: "input-group-prepend" }, index.h("span", { key: 'cca8a1cde898a7124a3d3c21e64abcf2b2b09712', class: "input-group-text", id: "basic-addon1" }, locales_store.locales.entries.Lcz_DatesOn)), index.h("div", { key: '9dbda1cd14b3f1513bf3dba7884f3c259805a630', class: "form-control p-0 m-0 d-flex align-items-center justify-content-center date-from" }, index.h("div", { key: 'c56dfba14d2e3d9be9c1b0fe8c2cd8c12afb10e4', class: "service-date-container" }, index.h("ir-date-picker", { key: 'b650a5df393ae1087e2439af055d617e41e3e50b', emitEmptyDate: true, date: (_c = this.s_service) === null || _c === void 0 ? void 0 : _c.start_date, minDate: this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => { var _a; return this.updateService({ start_date: (_a = e.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD') }); } }, index.h("input", { key: '861321608ee1e7fdadafe138519ee8304ebc366a', slot: "trigger", value: ((_d = this.s_service) === null || _d === void 0 ? void 0 : _d.start_date) ? functions._formatDate(this.s_service.start_date) : null, style: { borderLeftWidth: '0', borderRightWidth: '0', width: '100%' }, class: "text-center form-control input-sm" })), ((_e = this.s_service) === null || _e === void 0 ? void 0 : _e.start_date) && (index.h("div", { key: 'a6f0bdcaa84d2a0a264a2fd604bde4570f95f79e', class: "btn-container" }, index.h("ir-button", { key: '0f8acdab83aa4255e61f2809ea7b62b6dc80de13', title: "clear", id: "close", variant: "icon", style: { '--icon-size': '0.875rem' }, icon_name: "xmark-fill", class: "ml-2", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateService({ start_date: null });
            } })))))), index.h("div", { key: '8b0ce81bb295b731f49fc96f1d1da001c522b0b7', class: "input-group" }, index.h("div", { key: 'c12fbfbc1647b06bfbf3898bca92046ae1b7c80b', class: "input-group-prepend " }, index.h("span", { key: 'ccad0182d54b6a7dcaba1186a2e361b0e184b9c3', class: "input-group-text until-prepend", id: "basic-addon1" }, locales_store.locales.entries.Lcz_TillAndIncluding)), index.h("div", { key: 'b4e8c6af8fa0ee6d664eaba0ffb66048f53be924', class: "form-control p-0 m-0 d-flex align-items-center justify-content-center" }, index.h("div", { key: '93174bdbdbc03a4580e6c63ae6bf7b10d01c7db1', class: "service-date-container" }, index.h("ir-date-picker", { key: '9a681a85287e0af957e5d2a6ae87318485f0adb8', emitEmptyDate: true, date: (_f = this.s_service) === null || _f === void 0 ? void 0 : _f.end_date, minDate: (_h = (_g = this.s_service) === null || _g === void 0 ? void 0 : _g.start_date) !== null && _h !== void 0 ? _h : this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => {
                var _a;
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateService({ end_date: (_a = e.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD') });
            } }, index.h("input", { key: '472eb0373e2f2edde58033d68981ef073a3ebeef', slot: "trigger", value: ((_j = this.s_service) === null || _j === void 0 ? void 0 : _j.end_date) ? functions._formatDate(this.s_service.end_date) : null, style: { borderLeftWidth: '0', borderRightWidth: '0', width: '100%' }, class: "text-center form-control input-sm" })), ((_k = this.s_service) === null || _k === void 0 ? void 0 : _k.end_date) && (index.h("div", { key: '7018b7e5334b73280b6c3be02d91b8c9af216b32', class: "btn-container" }, index.h("ir-button", { key: '421a77838199cb9bb0afb5e793095ba13bfc4824', title: "clear", id: "close", variant: "icon", style: { '--icon-size': '0.875rem' }, icon_name: "xmark-fill", class: "ml-2", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateService({ end_date: null });
            } }))))))), index.h("div", { key: '0b076d534170467ed0151a0620cb044ab08466fc', class: 'row-group' }, index.h("ir-price-input", { key: 'd6d8c984d9de422cca9f72a42bc6eeeec152ccbb', label: "Price", currency: this.booking.currency.symbol, class: "ir-br-input-none", value: (_m = (_l = this.s_service) === null || _l === void 0 ? void 0 : _l.price) === null || _m === void 0 ? void 0 : _m.toString(), zod: ExtraServiceSchema.pick({ price: true }), "aria-label": locales_store.locales.entries.Lcz_Price, wrapKey: "price", "aria-describedby": "service price", autoValidate: false, "data-state": this.error && !this.validatePrice() ? 'error' : '', onTextChange: e => this.updateService({ price: parseFloat(e.detail) }) }), index.h("ir-price-input", { key: '2b4dc1081ab2b0cc57d2bb270d29b3bd1dc65cbf', autoValidate: false, label: locales_store.locales.entries.Lcz_Cost, labelStyle: "cost-label", currency: this.booking.currency.symbol,
            // class="ir-bl-lbl-none ir-bl-none"
            value: (_p = (_o = this.s_service) === null || _o === void 0 ? void 0 : _o.cost) === null || _p === void 0 ? void 0 : _p.toString(), zod: ExtraServiceSchema.pick({ cost: true }), onTextChange: e => this.updateService({ cost: parseFloat(e.detail) }), wrapKey: "cost", "aria-label": "Cost", "aria-describedby": "service cost" })), index.h("div", { key: '0f7bda1759ec1c61e9c0105ae3a57f6f3ec534f2', class: 'd-flex flex-column flex-sm-row mt-3' }, index.h("ir-button", { key: 'c8cf4d1283b35210412a6dd28e8538dcc1be1473', onClick: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `mb-1 mb-sm-0 flex-fill mr-sm-1`, icon: "", text: locales_store.locales.entries.Lcz_Cancel, btn_color: "secondary" }), index.h("ir-button", { key: '74e26fd137a88ce4fb2e552ac1f385c61766e9da', btn_styles: "justify-content-center align-items-center", class: 'm-0 flex-fill text-center', icon: "", isLoading: irInterceptor_store.isRequestPending('/Do_Booking_Extra_Service'), text: locales_store.locales.entries.Lcz_Save, btn_color: "primary", onClick: this.saveAmenity.bind(this) })))));
    }
};
IrExtraServiceConfig.style = IrExtraServiceConfigStyle0;

const irExtraServicesCss = ".sc-ir-extra-services-h{display:block}";
const IrExtraServicesStyle0 = irExtraServicesCss;

const IrExtraServices = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.booking = undefined;
    }
    render() {
        var _a;
        return (index.h(index.Host, { key: '2c13c5e0d17c70776fb892ed7239753c451e2e39', class: 'card p-0 ' }, (_a = this.booking.extra_services) === null || _a === void 0 ? void 0 : _a.map((service, index$1) => (index.h(index.Fragment, null, index.h("ir-extra-service", { bookingNumber: this.booking.booking_nbr, currencySymbol: this.booking.currency.symbol, key: service.booking_system_id, service: service }), index$1 !== this.booking.extra_services.length - 1 && index.h("hr", { class: "mr-2 ml-2 my-0 p-0" }))))));
    }
};
IrExtraServices.style = IrExtraServicesStyle0;

const irGuestInfoCss = ".input-group-text.sc-ir-guest-info{min-width:10rem;text-align:left}.mobilePrefixSelect.sc-ir-guest-info{border-right-width:0;border-top-right-radius:0;border-bottom-right-radius:0}.mobilePrefixInput.sc-ir-guest-info{border-top-left-radius:0;border-bottom-left-radius:0}.check-container.sc-ir-guest-info{position:relative;cursor:pointer;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex;align-items:center}.check-container.sc-ir-guest-info input.sc-ir-guest-info{position:relative;opacity:0;cursor:pointer;height:0;width:0}.check-container.sc-ir-guest-info .checkmark.sc-ir-guest-info{position:relative;top:0;left:0;height:20px;width:20px;border:1px solid #cacfe7;border-radius:4px;transition:all 0.3s ease}.check-container.sc-ir-guest-info input.sc-ir-guest-info:checked~.checkmark.sc-ir-guest-info{background-color:#1e9ff2;border-color:#1e9ff2}.checkmark.sc-ir-guest-info:after{content:'';position:absolute;display:none}.check-container.sc-ir-guest-info input.sc-ir-guest-info:checked~.checkmark.sc-ir-guest-info:after{display:block}.check-label.sc-ir-guest-info{margin-left:10px !important}.check-container.sc-ir-guest-info .checkmark.sc-ir-guest-info:after{left:6px;top:3px;width:6px;height:10px;border:solid white;border-width:0 2px 2px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.ir-card-header.sc-ir-guest-info{width:100%;border-bottom:1px solid #e4e5ec}.close-icon.sc-ir-guest-info{margin:0}.border-theme.sc-ir-guest-info{border:1px solid #cacfe7}";
const IrGuestInfoStyle0 = irGuestInfoCss;

const GuestInfo = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeSideBar = index.createEvent(this, "closeSideBar", 7);
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt", 7);
        this.bookingService = new booking_service.BookingService();
        this.roomService = new room_service.RoomService();
        this.token = new Token.Token();
        this.language = undefined;
        this.headerShown = undefined;
        this.email = undefined;
        this.booking_nbr = undefined;
        this.ticket = undefined;
        this.countries = undefined;
        this.submit = false;
        this.guest = null;
        this.isLoading = false;
    }
    async componentWillLoad() {
        if (this.ticket) {
            this.token.setToken(this.ticket);
        }
        if (!!this.token.getToken())
            await this.init();
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        this.init();
    }
    // async init() {
    //   try {
    //     const [guest, countries] = await Promise.all([this.bookingService.fetchGuest(this.email), this.bookingService.getCountries(this.language)]);
    //     this.countries = countries;
    //     this.guest = guest;
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    async init() {
        try {
            const [guest, countries, fetchedLocales] = await Promise.all([
                this.bookingService.fetchGuest(this.email),
                this.bookingService.getCountries(this.language),
                !locales_store.locales || !locales_store.locales.entries || Object.keys(locales_store.locales.entries).length === 0 ? this.roomService.fetchLanguage(this.language) : Promise.resolve(null), // Skip fetching if locales are already set
            ]);
            // Set the fetched locales if they were fetched
            if (fetchedLocales) {
                locales_store.locales.entries = fetchedLocales.entries;
                locales_store.locales.direction = fetchedLocales.direction;
            }
            // Assign the fetched guest and countries
            this.countries = countries;
            this.guest = Object.assign(Object.assign({}, guest), { mobile: guest.mobile_without_prefix });
        }
        catch (error) {
            console.log(error);
        }
    }
    handleInputChange(params) {
        this.guest = Object.assign(Object.assign({}, this.guest), params);
    }
    async editGuest() {
        var _a;
        try {
            this.isLoading = true;
            await this.bookingService.editExposedGuest(this.guest, (_a = this.booking_nbr) !== null && _a !== void 0 ? _a : null);
            this.closeSideBar.emit(null);
            this.resetBookingEvt.emit(null);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = false;
            console.log('done');
        }
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        if (!this.guest) {
            return null;
        }
        return [
            index.h("div", { class: "p-0" }, this.headerShown && (index.h("div", { class: "position-sticky mb-1 shadow-none p-0" }, index.h("div", { class: "d-flex align-items-center justify-content-between ir-card-header py-1 p-0" }, index.h("h3", { class: "card-title text-left font-medium-2 px-1 my-0" }, locales_store.locales.entries.Lcz_GuestDetails), index.h("ir-icon", { class: "close close-icon px-1", onIconClickHandler: () => {
                    this.closeSideBar.emit(null);
                } }, index.h("svg", { slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, index.h("path", { d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))))), index.h("div", { class: "card-content collapse show" }, index.h("div", { class: this.headerShown ? 'card-body px-1' : 'pt-0' }, index.h("ir-input-text", { placeholder: "", label: locales_store.locales.entries.Lcz_FirstName, name: "firstName", submited: this.submit, value: (_a = this.guest) === null || _a === void 0 ? void 0 : _a.first_name, required: true, onTextChange: e => this.handleInputChange({ first_name: e.detail }) }), index.h("ir-input-text", { placeholder: "", label: locales_store.locales.entries.Lcz_LastName, name: "lastName", submited: this.submit, value: (_b = this.guest) === null || _b === void 0 ? void 0 : _b.last_name, required: true, onTextChange: e => this.handleInputChange({ last_name: e.detail }) }), index.h("ir-input-text", { placeholder: "", label: locales_store.locales.entries.Lcz_Email, name: "email", submited: this.submit, value: (_c = this.guest) === null || _c === void 0 ? void 0 : _c.email, required: true, onTextChange: e => this.handleInputChange({ email: e.detail }) }), index.h("ir-input-text", { placeholder: "", label: locales_store.locales.entries.Lcz_AlternativeEmail, name: "altEmail", value: (_d = this.guest) === null || _d === void 0 ? void 0 : _d.alternative_email, onTextChange: e => this.handleInputChange({ alternative_email: e.detail }) }), index.h("ir-select", { selectContainerStyle: "mb-1", required: true, name: "country", submited: this.submit, label: locales_store.locales.entries.Lcz_Country, selectedValue: (_f = (_e = this.guest.country_id) === null || _e === void 0 ? void 0 : _e.toString()) !== null && _f !== void 0 ? _f : '', data: this.countries.map(item => {
                    return {
                        value: item.id.toString(),
                        text: item.name,
                    };
                }), firstOption: '...', onSelectChange: e => this.handleInputChange({ country_id: e.detail }) }), index.h("ir-phone-input", { onTextChange: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    const { mobile, phone_prefix } = e.detail;
                    if (mobile !== this.guest.mobile) {
                        this.handleInputChange({ mobile });
                    }
                    if (phone_prefix !== this.guest.country_phone_prefix)
                        this.handleInputChange({ country_phone_prefix: phone_prefix });
                }, phone_prefix: this.guest.country_phone_prefix, value: this.guest.mobile, language: this.language, label: locales_store.locales.entries.Lcz_MobilePhone, countries: this.countries }), index.h("div", { class: "mb-2" }, index.h("ir-textarea", { variant: "prepend", onTextChange: e => this.handleInputChange({ notes: e.detail }), value: (_g = this.guest) === null || _g === void 0 ? void 0 : _g.notes, label: locales_store.locales.entries.Lcz_PrivateNote })), index.h("div", { class: 'p-0 m-0' }, index.h("label", { class: `check-container m-0 p-0` }, index.h("input", { class: 'm-0 p-0', type: "checkbox", name: "newsletter", checked: this.guest.subscribe_to_news_letter, onInput: e => this.handleInputChange({ subscribe_to_news_letter: e.target.checked }) }), index.h("span", { class: "checkmark m-0 p-0" }), index.h("span", { class: 'm-0 p-0  check-label' }, locales_store.locales.entries.Lcz_Newsletter))), index.h("hr", null), index.h("ir-button", { isLoading: this.isLoading, btn_disabled: this.isLoading, btn_styles: "d-flex align-items-center justify-content-center", text: locales_store.locales.entries.Lcz_Save, onClickHandler: this.editGuest.bind(this), color: "btn-primary" })))),
        ];
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
GuestInfo.style = IrGuestInfoStyle0;

const irIconCss = ".sc-ir-icon-h{margin:0;padding:0}.icon-button.sc-ir-icon{all:unset;margin:0;padding:0;color:#6b6f82}.icon-button.sc-ir-icon:hover{cursor:pointer;color:#104064}";
const IrIconStyle0 = irIconCss;

const IrIcon = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.iconClickHandler = index.createEvent(this, "iconClickHandler", 7);
        this.icon = 'ft-check';
    }
    render() {
        return (index.h("button", { key: 'ad709966d6cd64c8a39a21ac43bf8fb31fce1df3', class: "icon-button", onClick: () => this.iconClickHandler.emit() }, index.h("slot", { key: '8ffa3ef26eb7ab34bd734c91465aa91210666310', name: "icon" })));
    }
};
IrIcon.style = IrIconStyle0;

const irIconsCss = ".sc-ir-icons-h{display:block;box-sizing:border-box;margin:0;padding:0}.icon.sc-ir-icons{height:var(--icon-size, 1.25rem);width:var(--icon-size, 1.25rem);margin:0;padding:0}";
const IrIconsStyle0 = irIconsCss;

const IrIcons = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.name = undefined;
        this.svgClassName = undefined;
        this.color = undefined;
    }
    render() {
        const svgPath = icons[this.name] || null;
        if (!svgPath) {
            return null;
        }
        return (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", color: this.color, viewBox: svgPath.viewBox, class: `icon ${this.svgClassName}` }, index.h("path", { fill: "currentColor", d: svgPath.d })));
    }
};
IrIcons.style = IrIconsStyle0;

const irInputTextCss = ".sc-ir-input-text-h{margin:0;padding:0}.border-theme.sc-ir-input-text{border:1px solid #cacfe7}.icon-container.sc-ir-input-text{color:#3b4781;border:1px solid #cacfe7;font-size:0.975rem;height:2rem;background:rgb(255, 255, 255);padding-right:0 !important;border-right:0;border-top-right-radius:0;border-bottom-right-radius:0;transition:border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}input.sc-ir-input-text:focus{border-color:#1e9ff2 !important}.input-container.sc-ir-input-text{display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;flex:1}.input-container.sc-ir-input-text input.sc-ir-input-text{padding-left:5px !important;padding-right:5px !important;border-left:0;border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}.icon-container[data-state='focus'].sc-ir-input-text{border-color:var(--blue)}.icon-container[data-disabled].sc-ir-input-text{background-color:#eceff1;border-color:rgba(118, 118, 118, 0.3)}.danger-border.sc-ir-input-text{border-color:var(--red)}";
const IrInputTextStyle0 = irInputTextCss;

const IrInputText = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.textChange = index.createEvent(this, "textChange", 7);
        this.inputBlur = index.createEvent(this, "inputBlur", 7);
        this.name = undefined;
        this.value = undefined;
        this.label = '<label>';
        this.placeholder = '<placeholder>';
        this.inputStyles = '';
        this.required = undefined;
        this.LabelAvailable = true;
        this.readonly = false;
        this.type = 'text';
        this.submited = false;
        this.inputStyle = true;
        this.size = 'md';
        this.textSize = 'md';
        this.labelPosition = 'left';
        this.labelBackground = null;
        this.labelColor = 'dark';
        this.labelBorder = 'theme';
        this.labelWidth = 3;
        this.variant = 'default';
        this.disabled = false;
        this.error = false;
        this.valid = undefined;
        this.initial = true;
        this.inputFocused = false;
        this.isError = false;
    }
    connectedCallback() { }
    disconnectedCallback() { }
    watchHandler(newValue) {
        if (newValue !== '' && this.required) {
            this.valid = true;
        }
    }
    watchHandler2(newValue) {
        if (newValue && this.required) {
            this.initial = false;
        }
    }
    handleAriaInvalidChange(newValue) {
        if (newValue === 'true') {
            this.isError = true;
        }
        else {
            this.isError = false;
        }
    }
    handleInputChange(event) {
        this.initial = false;
        if (this.required) {
            this.valid = event.target.checkValidity();
            const value = event.target.value;
            this.textChange.emit(value);
        }
        else {
            this.textChange.emit(event.target.value);
        }
    }
    render() {
        const id = v4.v4();
        if (this.variant === 'icon') {
            return (index.h("fieldset", { class: "position-relative has-icon-left input-container" }, index.h("label", { htmlFor: id, class: "input-group-prepend bg-white m-0" }, index.h("span", { "data-disabled": this.disabled, "data-state": this.inputFocused ? 'focus' : '', class: `input-group-text icon-container bg-white ${(this.error || this.isError) && 'danger-border'}`, id: "basic-addon1" }, index.h("slot", { name: "icon" }))), index.h("input", { type: this.type, onFocus: () => (this.inputFocused = true), required: this.required, onBlur: e => {
                    this.inputFocused = false;
                    this.inputBlur.emit(e);
                }, disabled: this.disabled, class: `form-control bg-white pl-0 input-sm rate-input py-0 m-0 rateInputBorder ${(this.error || this.isError) && 'danger-border'}`, id: id, value: this.value, placeholder: this.placeholder, onInput: this.handleInputChange.bind(this) })));
        }
        let className = 'form-control';
        let label = (index.h("div", { class: `input-group-prepend col-${this.labelWidth} p-0 text-${this.labelColor}` }, index.h("label", { class: `input-group-text ${this.labelPosition === 'right' ? 'justify-content-end' : this.labelPosition === 'center' ? 'justify-content-center' : ''} ${this.labelBackground ? 'bg-' + this.labelBackground : ''} flex-grow-1 text-${this.labelColor} border-${this.labelBorder === 'none' ? 0 : this.labelBorder} ` }, this.label, this.required ? '*' : '')));
        if (!this.LabelAvailable) {
            label = '';
        }
        if (this.inputStyle === false) {
            className = '';
        }
        if (this.required && !this.valid && !this.initial) {
            className = `${className} border-danger`;
        }
        return (index.h("div", { class: "form-group" }, index.h("div", { class: "input-group row m-0" }, label, index.h("input", { readOnly: this.readonly, type: this.type, class: `${className} ${this.error || this.isError ? 'border-danger' : ''} form-control-${this.size} text-${this.textSize} col-${this.LabelAvailable ? 12 - this.labelWidth : 12} ${this.readonly && 'bg-white'} ${this.inputStyles}`, onBlur: e => this.inputBlur.emit(e), placeholder: this.placeholder, value: this.value, onInput: this.handleInputChange.bind(this), required: this.required, disabled: this.disabled }))));
    }
    static get watchers() { return {
        "value": ["watchHandler"],
        "submited": ["watchHandler2"],
        "aria-invalid": ["handleAriaInvalidChange"]
    }; }
};
IrInputText.style = IrInputTextStyle0;

const irInterceptorCss = ".page-loader.sc-ir-interceptor{width:1.25rem;height:1.25rem;border:2.5px solid #3f3f3f;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}.loaderContainer.sc-ir-interceptor{padding:20px;display:flex;align-items:center;justify-content:center;border-radius:5px;background:white}.loadingScreenContainer.sc-ir-interceptor{position:fixed;top:0;left:0;height:100vh;width:100vw;z-index:100000;background:rgba(0, 0, 0, 0.2);pointer-events:all;display:flex;align-items:center;justify-content:center}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
const IrInterceptorStyle0 = irInterceptorCss;

const IrInterceptor = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.toast = index.createEvent(this, "toast", 7);
        this.isShown = false;
        this.isLoading = false;
        this.isUnassignedUnit = false;
        this.endpointsCount = 0;
        this.isPageLoadingStoped = null;
        this.handledEndpoints = ['/Get_Exposed_Calendar', '/ReAllocate_Exposed_Room', '/Get_Exposed_Bookings'];
    }
    handleStopPageLoading(e) {
        this.isLoading = false;
        this.isPageLoadingStoped = e.detail;
    }
    componentWillLoad() {
        this.setupAxiosInterceptors();
    }
    setupAxiosInterceptors() {
        axios.axios.interceptors.request.use(this.handleRequest.bind(this), this.handleError.bind(this));
        axios.axios.interceptors.response.use(this.handleResponse.bind(this), this.handleError.bind(this));
    }
    extractEndpoint(url) {
        return url.split('?')[0];
    }
    isHandledEndpoint(url) {
        return this.handledEndpoints.includes(url);
    }
    handleRequest(config) {
        const extractedUrl = this.extractEndpoint(config.url);
        irInterceptor_store.interceptor_requests[extractedUrl] = 'pending';
        config.params = config.params || {};
        // if (this.ticket) {
        //   config.params.Ticket = this.ticket;
        // }
        if (this.isHandledEndpoint(extractedUrl) && this.isPageLoadingStoped !== extractedUrl) {
            if (extractedUrl !== '/Get_Exposed_Calendar') {
                this.isLoading = true;
            }
            else {
                if (this.endpointsCount > 0) {
                    this.isLoading = true;
                }
            }
        }
        if (extractedUrl === '/Get_Exposed_Calendar') {
            this.endpointsCount = this.endpointsCount + 1;
        }
        return config;
    }
    handleResponse(response) {
        var _a;
        const extractedUrl = this.extractEndpoint(response.config.url);
        if (this.isHandledEndpoint(extractedUrl)) {
            this.isLoading = false;
            this.isPageLoadingStoped = null;
        }
        irInterceptor_store.interceptor_requests[extractedUrl] = 'done';
        if ((_a = response.data.ExceptionMsg) === null || _a === void 0 ? void 0 : _a.trim()) {
            this.handleError(response.data.ExceptionMsg);
            throw new Error(response.data.ExceptionMsg);
        }
        return response;
    }
    handleError(error) {
        this.toast.emit({
            type: 'error',
            title: error,
            description: '',
            position: 'top-right',
        });
        return Promise.reject(error);
    }
    render() {
        return (index.h(index.Host, { key: '254779a7c8f395bb0d8c38847db207f30b450575' }, this.isLoading && !this.isPageLoadingStoped && (index.h("div", { key: '80cabf2a8225666a8912dc52c36ff9a05f88b26f', class: "loadingScreenContainer" }, index.h("div", { key: 'f60b9330de9086506a76ab4beb37228c5de6aaf6', class: "loaderContainer" }, index.h("span", { key: '59f54f0ca1862fc912ab35e7218f08afb89a2ba6', class: "page-loader" }))))));
    }
};
IrInterceptor.style = IrInterceptorStyle0;

const irLabelCss = ".logo.sc-ir-label{height:1.5rem;width:1.5rem}.sc-ir-label-h{display:flex;gap:5px;align-items:center}.icon.sc-ir-label{margin-left:3px;padding:0;margin-top:0;display:flex;align-items:center}.label_message.sc-ir-label{margin:0 3px;padding:0}.label_title.sc-ir-label{min-width:max-content;padding:0;margin:0;font-weight:600}.label_placeholder.sc-ir-label{color:#cacfe7;padding:0 !important;margin:0 !important}.icon-container.sc-ir-label{margin:0;padding:0}.country.sc-ir-label{height:16px;width:23px;border-radius:3px}svg.sc-ir-label{margin:0;padding:0}.label_wrapper_inline.sc-ir-label{display:inline;max-width:100%;gap:5px;margin-bottom:5px}.label_wrapper_flex.sc-ir-label{display:flex;align-items:center;gap:5px;max-width:100%;margin-bottom:5px}.label_title.sc-ir-label{font-weight:600;white-space:nowrap;display:inline}.label_message.sc-ir-label{display:inline;white-space:normal;word-break:break-word}";
const IrLabelStyle0 = irLabelCss;

const IrLabel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.labelText = undefined;
        this.content = undefined;
        this.display = 'flex';
        this.renderContentAsHtml = false;
        this.image = null;
        this.isCountryImage = false;
        this.imageStyle = '';
        this.ignoreEmptyContent = false;
        this.placeholder = undefined;
        this.containerStyle = undefined;
    }
    render() {
        var _a, _b, _c;
        // If we have no content and no placeholder, and we are NOT ignoring the empty content, return null.
        if (!this.placeholder && !this.content && !this.ignoreEmptyContent) {
            return null;
        }
        return (index.h(index.Host, { class: this.image ? 'align-items-center' : '' }, index.h("div", { class: `${this.display === 'inline' ? 'label_wrapper_inline' : 'label_wrapper_flex'} `, style: this.containerStyle }, this.labelText && index.h("p", { class: "label_title" }, this.labelText), index.h("slot", { name: "prefix" }), this.image && (index.h("img", { src: this.image.src, alt: (_a = this.image.alt) !== null && _a !== void 0 ? _a : this.image.src, class: `p-0 m-0 ${this.isCountryImage ? 'country' : 'logo'} ${(_b = this.image.style) !== null && _b !== void 0 ? _b : ''} ${(_c = this.imageStyle) !== null && _c !== void 0 ? _c : ''}` })), this.content ? (this.renderContentAsHtml ? (index.h("p", { class: "label_message", innerHTML: this.content })) : (index.h("p", { class: "label_message" }, this.content))) : (index.h("p", { class: "label_placeholder" }, this.placeholder)), index.h("slot", null), index.h("slot", { name: "suffix" }))));
    }
};
IrLabel.style = IrLabelStyle0;

const irLoadingScreenCss = ".sc-ir-loading-screen-h{display:fixed;height:100vh;width:100vw;z-index:1000;top:0;left:0;display:flex;align-items:center;justify-content:center;background:white}.loader.sc-ir-loading-screen{width:1.25rem;height:1.25rem;border:2.5px solid #3f3f3f;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}.loaderContainer.sc-ir-loading-screen{position:absolute;z-index:100001;padding:20px;top:50%;left:50%;transform:translate(-50%, -50%);background:white;display:flex;align-items:center;justify-content:center;gap:20px;border-radius:5px}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
const IrLoadingScreenStyle0 = irLoadingScreenCss;

const IrLoadingScreen = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.message = '';
    }
    render() {
        return (index.h(index.Host, { key: '0aa04519e399e19e7d336304b29646efa47d0dc2' }, index.h("span", { key: 'd0789c7c8e362976888325f10dced288004b66ac', class: "loader" })));
    }
};
IrLoadingScreen.style = IrLoadingScreenStyle0;

const irModalCss = ".backdropModal.sc-ir-modal{background-color:rgba(0, 0, 0, 0.5);z-index:1000;position:fixed;top:0;left:0;height:100vh;width:100%;opacity:0;transition:opacity 0.3s ease-in-out;pointer-events:none}.backdropModal.active.sc-ir-modal{cursor:pointer;opacity:1 !important;pointer-events:all}.ir-modal[data-state='opened'].sc-ir-modal{opacity:1;visibility:visible;pointer-events:all;transition:all 0.3s ease-in-out}.ir-alert-content.sc-ir-modal{padding:10px;background:white;border-radius:5px}.modal.sc-ir-modal{z-index:1001 !important}.modal-dialog.sc-ir-modal{height:100vh;display:flex;align-items:center}.ir-alert-footer.sc-ir-modal{gap:10px}.ir-modal.sc-ir-modal{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);z-index:1050;width:90%;max-width:32rem;overflow:hidden;outline:0;opacity:0;transition:transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;visibility:hidden;pointer-events:none}.ir-modal.active.sc-ir-modal{opacity:1;transform:translate(-50%, 0);visibility:visible;pointer-events:all;transition:all 0.3s ease-in-out}";
const IrModalStyle0 = irModalCss;

const IrModal = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.confirmModal = index.createEvent(this, "confirmModal", 7);
        this.cancelModal = index.createEvent(this, "cancelModal", 7);
        this.modalTitle = 'Modal Title';
        this.modalBody = 'Modal Body';
        this.rightBtnActive = true;
        this.leftBtnActive = true;
        this.rightBtnText = 'Confirm';
        this.leftBtnText = 'Close';
        this.isLoading = false;
        this.autoClose = true;
        this.rightBtnColor = 'primary';
        this.leftBtnColor = 'secondary';
        this.btnPosition = 'right';
        this.iconAvailable = false;
        this.icon = '';
        this.isOpen = false;
        this.item = {};
    }
    async closeModal() {
        this.isOpen = false;
    }
    async openModal() {
        this.isOpen = true;
    }
    btnClickHandler(event) {
        let target = event.target;
        let name = target.name;
        if (name === this.leftBtnText) {
            this.cancelModal.emit();
            this.item = {};
            this.closeModal();
        }
        else if (name === this.rightBtnText) {
            this.confirmModal.emit(this.item);
            this.item = {};
            if (this.autoClose) {
                this.closeModal();
            }
        }
    }
    render() {
        return [
            index.h("div", { key: '07d05bfb9ad42b17e2a54cf921dddce2e5632286', class: `backdropModal ${this.isOpen ? 'active' : ''}`, onClick: () => {
                    this.cancelModal.emit();
                    if (this.autoClose && !this.isLoading) {
                        this.closeModal();
                    }
                } }),
            index.h("div", { key: '8d1a50dccd4795393b3848b4817bfc2982f4c16d', "data-state": this.isOpen ? 'opened' : 'closed', class: `ir-modal`, tabindex: "-1" }, index.h("div", { key: '962c22365002ee7086211a4db12d378b7dfb888e', class: `ir-alert-content p-2` }, index.h("div", { key: '9252bd23a4c0169313d1a389812957ae953ebf6f', class: `ir-alert-header align-items-center border-0 py-0 m-0 ` }), index.h("div", { key: '37430830d0071b4dfc45d8608f53e516c6a18c2b', class: "modal-body text-left p-0 mb-2" }, index.h("div", { key: '6a0a0aa1e0ee25eb20ec7f42b3e98aa456cb6052' }, this.modalBody)), index.h("div", { key: 'cb055d332296d4c5faacc510d8e78e1507db71b0', class: `ir-alert-footer border-0  d-flex justify-content-${this.btnPosition === 'center' ? 'center' : this.btnPosition === 'left' ? 'start' : 'end'}` }, this.leftBtnActive && (index.h("ir-button", { key: '7f83df9b7ea79d9ba6e7215d5b1fa83ed378c63b', btn_disabled: this.isLoading, icon: '', btn_color: this.leftBtnColor, btn_block: true, text: this.leftBtnText, name: this.leftBtnText })), this.rightBtnActive && (index.h("ir-button", { key: '2ab608c351e2dee5462b32e3f541560655a6e101', icon: '', btn_color: this.rightBtnColor, btn_disabled: this.isLoading, isLoading: this.isLoading, btn_block: true, text: this.rightBtnText, name: this.rightBtnText }))))),
        ];
    }
};
IrModal.style = IrModalStyle0;

const irPaymentActionsCss = ".sc-ir-payment-actions-h{display:block}.sc-ir-payment-actions-h p.sc-ir-payment-actions,.sc-ir-payment-actions-h div.sc-ir-payment-actions,.sc-ir-payment-actions-h span.sc-ir-payment-actions,.sc-ir-payment-actions-h ir-icons.sc-ir-payment-actions{box-sizing:border-box;padding:0;margin:0}.action-container.sc-ir-payment-actions td.sc-ir-payment-actions{padding:0px 0.5rem;padding-bottom:0.5rem}.action-container.sc-ir-payment-actions .amount_action.sc-ir-payment-actions{padding-inline-start:0}.overdue_action.sc-ir-payment-actions{color:#ff4961;border-radius:0.25rem;display:flex;align-items:center;gap:0.5rem}.future_action.sc-ir-payment-actions{border-radius:0.25rem;color:#1e9ff2;display:flex;align-items:center;justify-content:start;gap:0.5rem}.date_action.sc-ir-payment-actions{font-weight:500}.amount_action.sc-ir-payment-actions{font-weight:600}";
const IrPaymentActionsStyle0 = irPaymentActionsCss;

const IrPaymentActions = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.generatePayment = index.createEvent(this, "generatePayment", 7);
        this.booking = undefined;
        this.paymentAction = undefined;
    }
    render() {
        var _a, _b;
        if (((_a = this.paymentAction) === null || _a === void 0 ? void 0 : _a.filter(pa => pa.amount !== 0).length) == 0) {
            return null;
        }
        return (index.h(index.Host, null, index.h("div", { class: 'my-1' }, index.h("span", { class: 'font-medium' }, "Payment actions")), index.h("table", null, index.h("thead", null, index.h("th", null, index.h("p", { class: "sr-only" }, "Amount")), index.h("th", null, index.h("p", { class: 'sr-only' }, "Due date")), index.h("th", null, index.h("p", { class: 'sr-only' }, "Pay")), index.h("th", null, index.h("p", { class: 'sr-only' }, "Status"))), index.h("tbody", null, (_b = this.paymentAction) === null || _b === void 0 ? void 0 : _b.map(pa => {
            if (!pa.due_on) {
                return null;
            }
            return (index.h("tr", { class: 'action-container' }, index.h("td", { class: 'amount_action' }, utils.formatAmount(pa.currency.symbol, pa.amount)), index.h("td", { class: 'date_action' }, moment.hooks(new Date(pa.due_on)).format('ddd, DD MMM YYYY')), pa.amount > 0 && (index.h("td", null, index.h("ir-button", { btn_color: "outline", text: 'Pay', size: "sm", onClickHandler: () => this.generatePayment.emit(pa) }))), pa.type === 'overdue' && pa.amount > 0 && (index.h("td", null, index.h("div", { class: 'overdue_action' }, index.h("svg", { height: 16, width: 16, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, index.h("path", { fill: "currentColor", d: "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" })), index.h("span", null, "Overdue")))), pa.type === 'future' && pa.amount > 0 && (index.h("td", null, index.h("div", { class: 'future_action ' }, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", height: 16, width: 16, viewBox: "0 0 512 512" }, index.h("path", { fill: "currentColor", d: "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" })), index.h("span", null, moment.hooks(new Date(pa.due_on)).isSame(new Date()) ? 'Today' : 'Future'))))));
        })))));
    }
};
IrPaymentActions.style = IrPaymentActionsStyle0;

const irPaymentDetailsCss = ".sm-margin-right.sc-ir-payment-details{margin-right:5px !important;background:#000}.action_icons.sc-ir-payment-details{width:60px}.w-60.sc-ir-payment-details{width:100px;padding:0 5px}.payments-height.sc-ir-payment-details{height:30px}.payment_date.sc-ir-payment-details{width:100px}.iframeHeight.sc-ir-payment-details{height:max-content;height:22.5rem}.designation.sc-ir-payment-details{width:120px}.total-cost-container.sc-ir-payment-details{background:#7cbebe;color:white;padding:0.5rem;border-radius:5px}.payment-actions.sc-ir-payment-details{display:flex;align-items:center;justify-content:center;height:100%;gap:0.5rem}.payment_action_beta_container.sc-ir-payment-details{border:1px solid var(--red);position:relative;padding:4px;box-sizing:border-box;border-radius:4px}.beta.sc-ir-payment-details{position:absolute;top:4px;background:var(--red);color:white;padding:0.2rem 0.3rem;font-size:12px;border-radius:4px;right:4px;margin:0}";
const IrPaymentDetailsStyle0 = irPaymentDetailsCss;

const IrPaymentDetails = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt", 7);
        this.resetExposedCancelationDueAmount = index.createEvent(this, "resetExposedCancelationDueAmount", 7);
        this.toast = index.createEvent(this, "toast", 7);
        this.paymentService = new payment_service.PaymentService();
        this.bookingService = new booking_service.BookingService();
        this.paymentBackground = 'white';
        this.bookingDetails = undefined;
        this.paymentActions = undefined;
        this.newTableRow = false;
        this.collapsedPayment = false;
        this.collapsedGuarantee = false;
        this.flag = false;
        this.confirmModal = false;
        this.toBeDeletedItem = undefined;
        this.paymentDetailsUrl = '';
        this.paymentExceptionMessage = '';
        this.modal_mode = null;
        this.itemToBeAdded = undefined;
    }
    handlePaymentGeneration(e) {
        const value = e.detail;
        this.newTableRow = true;
        this.itemToBeAdded = Object.assign(Object.assign({}, this.itemToBeAdded), { amount: value.amount, date: value.due_on });
        this.paymentBackground = 'rgba(250, 253, 174)';
    }
    async componentWillLoad() {
        try {
            this.initializeItemToBeAdded();
        }
        catch (error) {
            if (this.bookingDetails.guest.cci) {
                return;
            }
            if (!this.bookingDetails.is_direct && this.bookingDetails.channel_booking_nbr) {
                this.paymentExceptionMessage = error;
            }
        }
    }
    initializeItemToBeAdded() {
        this.itemToBeAdded = {
            id: -1,
            date: moment.hooks().format('YYYY-MM-DD'),
            amount: null,
            currency: this.bookingDetails.currency,
            designation: '',
            reference: '',
        };
        this.paymentBackground = 'white';
    }
    async _processPaymentSave() {
        if (this.itemToBeAdded.amount === null) {
            this.toast.emit({
                type: 'error',
                title: locales_store.locales.entries.Lcz_EnterAmount,
                description: '',
                position: 'top-right',
            });
            return;
        }
        if (Number(this.itemToBeAdded.amount) > Number(this.bookingDetails.financial.due_amount)) {
            this.modal_mode = 'save';
            this.openModal();
            return;
        }
        this._handleSave();
    }
    async _handleSave() {
        this.paymentBackground = 'white';
        try {
            await this.paymentService.AddPayment(this.itemToBeAdded, this.bookingDetails.booking_nbr);
            this.initializeItemToBeAdded();
            this.resetBookingEvt.emit(null);
            this.resetExposedCancelationDueAmount.emit(null);
        }
        catch (error) {
            console.log(error);
        }
    }
    handlePaymentInputChange(key, value, event) {
        this.paymentBackground = 'white';
        if (key === 'amount') {
            if (!isNaN(value) || value === '') {
                if (value === '') {
                    this.itemToBeAdded = Object.assign(Object.assign({}, this.itemToBeAdded), { [key]: null });
                }
                else {
                    this.itemToBeAdded = Object.assign(Object.assign({}, this.itemToBeAdded), { [key]: parseFloat(value) });
                }
            }
            else if (event && event.target) {
                let inputElement = event.target;
                let inputValue = inputElement.value;
                inputValue = inputValue.replace(/[^\d-]|(?<!^)-/g, '');
                inputElement.value = inputValue;
            }
        }
        else {
            this.itemToBeAdded = Object.assign(Object.assign({}, this.itemToBeAdded), { [key]: value });
        }
    }
    async cancelPayment() {
        try {
            await this.paymentService.CancelPayment(this.toBeDeletedItem.id);
            const newPaymentArray = this.bookingDetails.financial.payments.filter((item) => item.id !== this.toBeDeletedItem.id);
            this.bookingDetails = Object.assign(Object.assign({}, this.bookingDetails), { financial: Object.assign(Object.assign({}, this.bookingDetails.financial), { payments: newPaymentArray }) });
            this.confirmModal = !this.confirmModal;
            this.resetBookingEvt.emit(null);
            this.resetExposedCancelationDueAmount.emit(null);
            this.toBeDeletedItem = null;
            this.modal_mode = null;
        }
        catch (error) {
            console.log(error);
        }
    }
    async handleConfirmModal(e) {
        this.paymentBackground = 'white';
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (this.modal_mode === 'delete') {
            await this.cancelPayment();
        }
        else {
            await this._handleSave();
        }
    }
    openModal() {
        const modal = document.querySelector('.delete-record-modal');
        modal.openModal();
    }
    async handleCancelModal(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        try {
            this.paymentBackground = 'white';
            if (this.modal_mode === 'save') {
                this.initializeItemToBeAdded();
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    handleBookingDetails() {
        if (this.newTableRow) {
            this.newTableRow = false;
        }
    }
    handleDateChange(e) {
        this.handlePaymentInputChange('date', e.detail.end.format('YYYY-MM-DD'));
    }
    _renderTableRow(item, rowMode = 'normal') {
        var _a, _b, _c;
        return (index.h(index.Fragment, null, index.h("tr", null, index.h("td", { class: 'border payments-height border-light border-bottom-0 text-center' }, rowMode === 'normal' ? (index.h("span", { class: "sm-padding-left" }, functions._formatDate(item.date))) : (index.h("ir-date-picker", { date: ((_a = this.itemToBeAdded) === null || _a === void 0 ? void 0 : _a.date) ? new Date(this.itemToBeAdded.date) : new Date(), minDate: moment.hooks().add(-2, 'months').startOf('month').format('YYYY-MM-DD'),
            // singleDatePicker
            // autoApply
            class: "d-flex justify-content-center", onDateChanged: this.handleDateChange.bind(this) }, index.h("input", { type: "text", slot: "trigger", value: functions._formatDate((_b = this.itemToBeAdded) === null || _b === void 0 ? void 0 : _b.date), class: "text-center  form-control flex-grow-1 w-100", style: { border: '0', marginLeft: 'auto', marginRight: 'auto', width: '100%' } })))), index.h("td", { class: 'border payments-height border-light border-bottom-0 text-center ' }, rowMode === 'normal' ? (index.h("span", { class: "sm-padding-right" }, utils.formatAmount(this.bookingDetails.currency.symbol, item.amount))) : (index.h("input", { type: "text", class: "border-0 text-center form-control py-0 m-0 w-100", value: this.itemToBeAdded.amount, onBlur: e => {
                e.target.value = Number(this.itemToBeAdded.amount).toFixed(2);
            }, onInput: event => this.handlePaymentInputChange('amount', +event.target.value, event) }))), index.h("td", { class: 'border payments-height border-light border-bottom-0 text-center' }, rowMode === 'normal' ? (index.h("span", { class: "sm-padding-left" }, item.designation)) : (index.h("input", { class: "border-0 w-100 form-control py-0 m-0", onInput: event => this.handlePaymentInputChange('designation', event.target.value), type: "text" }))), index.h("td", { rowSpan: 2, class: 'border payments-height border-light border-bottom-0 text-center' }, index.h("div", { class: 'payment-actions' }, rowMode === 'add' && (index.h("ir-button", { variant: "icon", icon_name: "save", style: colorVariants.secondary, isLoading: rowMode === 'add' && irInterceptor_store.isRequestPending('/Do_Payment'), class: 'm-0', onClickHandler: () => {
                this._processPaymentSave();
            } })), index.h("ir-button", { variant: "icon", icon_name: "trash", style: colorVariants.danger, isLoading: ((_c = this.toBeDeletedItem) === null || _c === void 0 ? void 0 : _c.id) === (item === null || item === void 0 ? void 0 : item.id) && irInterceptor_store.isRequestPending('/Cancel_Payment'), onClickHandler: rowMode === 'add'
                ? () => {
                    this.newTableRow = false;
                    this.initializeItemToBeAdded();
                }
                : () => {
                    this.modal_mode = 'delete';
                    this.toBeDeletedItem = item;
                    this.openModal();
                } })))), index.h("tr", null, index.h("td", { colSpan: 3, class: 'border border-light payments-height border-bottom-0 text-center' }, rowMode === 'normal' ? (index.h("span", { class: "sm-padding-left " }, item.reference)) : (index.h("input", { class: "border-0 w-100  form-control py-0 m-0", onKeyPress: event => {
                if (event.key === 'Enter') {
                    this.newTableRow = false;
                    this._handleSave();
                }
            }, onInput: event => this.handlePaymentInputChange('reference', event.target.value), type: "text" }))))));
    }
    bookingGuarantee() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3;
        const paymentMethod = this.bookingDetails.is_direct ? this.getPaymentMethod() : null;
        if (this.bookingDetails.is_direct && !paymentMethod && !this.bookingDetails.guest.cci) {
            return null;
        }
        return (index.h("div", { class: "mb-1" }, index.h("div", { class: "d-flex align-items-center" }, index.h("span", { class: "mr-1 font-medium" }, locales_store.locales.entries.Lcz_BookingGuarantee, !!paymentMethod && index.h("span", null, ": ", paymentMethod)), (!this.bookingDetails.is_direct || (this.bookingDetails.is_direct && this.bookingDetails.guest.cci)) && (index.h("ir-button", { id: "drawer-icon", "data-toggle": "collapse", "data-target": `.guarrantee`, "aria-expanded": this.collapsedGuarantee ? 'true' : 'false', "aria-controls": "myCollapse", class: "sm-padding-right pointer", variant: "icon", icon_name: "credit_card", onClickHandler: async () => {
                if (!this.bookingDetails.is_direct && this.bookingDetails.channel_booking_nbr && !this.bookingDetails.guest.cci) {
                    this.paymentDetailsUrl = await this.bookingService.getPCICardInfoURL(this.bookingDetails.booking_nbr);
                }
                this.collapsedGuarantee = !this.collapsedGuarantee;
            } }))), index.h("div", { class: "collapse guarrantee " }, this.bookingDetails.guest.cci ? ([
            index.h("div", null, ((_b = (_a = this.bookingDetails) === null || _a === void 0 ? void 0 : _a.guest) === null || _b === void 0 ? void 0 : _b.cci) && 'Card:', " ", index.h("span", null, ((_e = (_d = (_c = this.bookingDetails) === null || _c === void 0 ? void 0 : _c.guest) === null || _d === void 0 ? void 0 : _d.cci) === null || _e === void 0 ? void 0 : _e.nbr) || ''), " ", ((_h = (_g = (_f = this.bookingDetails) === null || _f === void 0 ? void 0 : _f.guest) === null || _g === void 0 ? void 0 : _g.cci) === null || _h === void 0 ? void 0 : _h.expiry_month) && 'Expiry: ', index.h("span", null, ' ', ((_l = (_k = (_j = this.bookingDetails) === null || _j === void 0 ? void 0 : _j.guest) === null || _k === void 0 ? void 0 : _k.cci) === null || _l === void 0 ? void 0 : _l.expiry_month) || '', " ", ((_p = (_o = (_m = this.bookingDetails) === null || _m === void 0 ? void 0 : _m.guest) === null || _o === void 0 ? void 0 : _o.cci) === null || _p === void 0 ? void 0 : _p.expiry_year) && '/' + ((_s = (_r = (_q = this.bookingDetails) === null || _q === void 0 ? void 0 : _q.guest) === null || _r === void 0 ? void 0 : _r.cci) === null || _s === void 0 ? void 0 : _s.expiry_year))),
            index.h("div", null, ((_u = (_t = this.bookingDetails) === null || _t === void 0 ? void 0 : _t.guest) === null || _u === void 0 ? void 0 : _u.cci.holder_name) && 'Name:', " ", index.h("span", null, ((_x = (_w = (_v = this.bookingDetails) === null || _v === void 0 ? void 0 : _v.guest) === null || _w === void 0 ? void 0 : _w.cci) === null || _x === void 0 ? void 0 : _x.holder_name) || ''), ' ', ((_0 = (_z = (_y = this.bookingDetails) === null || _y === void 0 ? void 0 : _y.guest) === null || _z === void 0 ? void 0 : _z.cci) === null || _0 === void 0 ? void 0 : _0.cvc) && '- CVC:', " ", index.h("span", null, " ", ((_3 = (_2 = (_1 = this.bookingDetails) === null || _1 === void 0 ? void 0 : _1.guest) === null || _2 === void 0 ? void 0 : _2.cci) === null || _3 === void 0 ? void 0 : _3.cvc) || '')),
        ]) : this.paymentDetailsUrl ? (index.h("iframe", { src: this.paymentDetailsUrl, width: "100%", class: "iframeHeight", frameborder: "0", name: "payment" })) : (index.h("div", { class: "text-center" }, this.paymentExceptionMessage)))));
    }
    checkPaymentCode(value) {
        var _a, _b, _c;
        console.log(calendarData.calendar_data.allowed_payment_methods);
        return (_c = (_b = (_a = calendarData.calendar_data.allowed_payment_methods) === null || _a === void 0 ? void 0 : _a.find(pm => pm.code === value)) === null || _b === void 0 ? void 0 : _b.description) !== null && _c !== void 0 ? _c : null;
    }
    getPaymentMethod() {
        var _a, _b, _c, _d;
        let paymentMethod = null;
        const payment_code = (_b = (_a = this.bookingDetails) === null || _a === void 0 ? void 0 : _a.extras) === null || _b === void 0 ? void 0 : _b.find(e => e.key === 'payment_code');
        if (this.bookingDetails.agent) {
            const code = (_d = (_c = this.bookingDetails) === null || _c === void 0 ? void 0 : _c.extras) === null || _d === void 0 ? void 0 : _d.find(e => e.key === 'agent_payment_mode');
            if (code) {
                paymentMethod = code.value === '001' ? locales_store.locales.entries.Lcz_OnCredit : payment_code ? this.checkPaymentCode(payment_code.value) : null;
            }
        }
        else {
            if (payment_code) {
                paymentMethod = this.checkPaymentCode(payment_code.value);
            }
        }
        return paymentMethod;
    }
    _renderDueDate(item) {
        return (index.h("tr", null, index.h("td", { class: 'pr-1' }, functions._formatDate(item.date)), index.h("td", { class: 'pr-1' }, utils.formatAmount(this.bookingDetails.currency.symbol, item.amount)), index.h("td", { class: 'pr-1' }, item.description), index.h("td", { class: "collapse font-size-small roomName" }, item.room)));
    }
    render() {
        var _a, _b;
        if (!this.bookingDetails.financial) {
            return null;
        }
        return [
            index.h("div", { class: "card m-0" }, index.h("div", { class: "p-1" }, this.bookingDetails.financial.gross_cost > 0 && this.bookingDetails.financial.gross_cost !== null && (index.h("div", { class: "mb-2 h4 total-cost-container" }, locales_store.locales.entries.Lcz_TotalCost, ": ", index.h("span", null, utils.formatAmount(this.bookingDetails.currency.symbol, this.bookingDetails.financial.gross_cost)))), index.h("div", { class: " h4" }, "Balance: ", index.h("span", { class: "danger font-weight-bold" }, utils.formatAmount(this.bookingDetails.currency.symbol, this.bookingDetails.financial.due_amount))), index.h("div", { class: "mb-2 h4" }, "Collected:", ' ', index.h("span", { class: "" }, utils.formatAmount(this.bookingDetails.currency.symbol, this.bookingDetails.financial.payments ? this.bookingDetails.financial.payments.reduce((prev, curr) => prev + curr.amount, 0) : 0))), this.bookingGuarantee(), ((_a = this.paymentActions) === null || _a === void 0 ? void 0 : _a.filter(pa => pa.amount !== 0).length) > 0 && this.bookingDetails.is_direct && (index.h("div", { class: "payment_action_beta_container" }, index.h("p", { class: "beta" }, "Beta"), index.h("ir-payment-actions", { paymentAction: this.paymentActions, booking: this.bookingDetails }))), index.h("div", { class: "mt-2 d-flex  flex-column rounded payment-container" }, index.h("div", { class: "d-flex align-items-center justify-content-between" }, index.h("span", { class: 'font-medium' }, locales_store.locales.entries.Lcz_Payments, " history"), index.h("ir-button", { id: "add-payment", variant: "icon", icon_name: "square_plus", style: { '--icon-size': '1.5rem' }, onClickHandler: () => {
                    this.newTableRow = true;
                } })), index.h("table", { class: "mt-1", style: { backgroundColor: this.paymentBackground } }, index.h("thead", null, index.h("tr", null, index.h("th", { class: 'border border-light border-bottom-0 text-center payment_date' }, locales_store.locales.entries.Lcz_Dates), index.h("th", { class: 'border border-light border-bottom-0 text-center w-60' }, locales_store.locales.entries.Lcz_Amount), index.h("th", { class: 'border border-light border-bottom-0 text-center designation' }, locales_store.locales.entries.Lcz_Designation), index.h("th", { class: 'border border-light border-bottom-0 text-center action_icons' }, index.h("span", { class: 'sr-only' }, "payment actions")))), index.h("tbody", null, (_b = this.bookingDetails.financial.payments) === null || _b === void 0 ? void 0 :
                _b.map((item) => this._renderTableRow(item)), this.newTableRow ? this._renderTableRow(null, 'add') : null))))),
            index.h("ir-modal", { item: this.toBeDeletedItem, class: 'delete-record-modal', modalTitle: locales_store.locales.entries.Lcz_Confirmation, modalBody: this.modal_mode === 'delete' ? locales_store.locales.entries.Lcz_IfDeletedPermantlyLost : locales_store.locales.entries.Lcz_EnteringAmountGreaterThanDue, iconAvailable: true, icon: "ft-alert-triangle danger h1", leftBtnText: locales_store.locales.entries.Lcz_Cancel, rightBtnText: this.modal_mode === 'delete' ? locales_store.locales.entries.Lcz_Delete : locales_store.locales.entries.Lcz_Confirm, leftBtnColor: "secondary", rightBtnColor: this.modal_mode === 'delete' ? 'danger' : 'primary', onConfirmModal: this.handleConfirmModal.bind(this), onCancelModal: this.handleCancelModal.bind(this) }),
        ];
    }
    static get watchers() { return {
        "bookingDetails": ["handleBookingDetails"]
    }; }
};
IrPaymentDetails.style = IrPaymentDetailsStyle0;

const irPhoneInputCss = ".sc-ir-phone-input-h{display:block}.input-container.sc-ir-phone-input{display:flex;align-items:center;padding:0 !important}.input-container.sc-ir-phone-input:focus-within{border-color:#1e9ff2}.border-theme.sc-ir-phone-input{border-color:#cacfe7}.input-container.sc-ir-phone-input input.sc-ir-phone-input{flex:1;border:0}.input-container.sc-ir-phone-input input.sc-ir-phone-input:focus{outline:none}.dropdown-trigger.sc-ir-phone-input{display:flex;align-items:center;gap:8px;background:white;border:0;border-right:1px solid #cacfe7}.ir-dropdown-container.sc-ir-phone-input{position:absolute;z-index:1000;bottom:-30px;width:100%;left:0;background:white}.input-container.sc-ir-phone-input label.sc-ir-phone-input{display:flex;align-items:center;justify-content:center;margin:0;padding:0 5px}.flag.sc-ir-phone-input{height:1rem;aspect-ratio:4/3;border-radius:3px}.is-invalid.sc-ir-phone-input{border-color:#ff4961}.phone_prefix_label.sc-ir-phone-input{padding:0 0.5rem;margin:0}";
const IrPhoneInputStyle0 = irPhoneInputCss;

const IrPhoneInput = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.textChange = index.createEvent(this, "textChange", 7);
        // private cmp_countries: ICountry[] = [];
        this.bookingService = new booking_service.BookingService();
        this.label = undefined;
        this.value = '';
        this.disabled = false;
        this.error = false;
        this.token = undefined;
        this.language = undefined;
        this.default_country = null;
        this.phone_prefix = null;
        this.placeholder = undefined;
        this.countries = [];
        this.inputValue = '';
        this.isDropdownVisible = false;
        this.currentCountry = undefined;
    }
    async componentWillLoad() {
        if (this.countries.length === 0) {
            const countries = await this.bookingService.getCountries(this.language);
            this.countries = countries;
        }
        if (this.phone_prefix) {
            this.setCountryFromPhonePrefix();
        }
        else {
            if (this.default_country) {
                this.setCurrentCountry(this.default_country);
            }
        }
        this.inputValue = this.value;
    }
    handleValueChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.inputValue = newValue;
        }
    }
    handlePhoneChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.setCountryFromPhonePrefix();
        }
    }
    handleDocumentClick(event) {
        const target = event.target;
        if (!this.el.contains(target)) {
            this.isDropdownVisible = false;
        }
    }
    handleInputChange(e) {
        var _a;
        let inputElement = e.target;
        let inputValue = inputElement.value;
        inputValue = inputValue.replace(/[^+\d]+/g, '');
        inputElement.value = inputValue;
        this.inputValue = inputValue;
        this.textChange.emit({ phone_prefix: (_a = this.currentCountry) === null || _a === void 0 ? void 0 : _a.phone_prefix, mobile: this.inputValue });
    }
    setCountryFromPhonePrefix() {
        var _a;
        console.log(this.phone_prefix);
        let country = this.countries.find(country => country.phone_prefix === this.phone_prefix);
        if (!country) {
            country = this.countries.find(c => c.id.toString() === this.phone_prefix);
            if (!country) {
                return;
            }
        }
        console.log(country);
        this.currentCountry = Object.assign({}, country);
        this.textChange.emit({ phone_prefix: (_a = this.currentCountry) === null || _a === void 0 ? void 0 : _a.phone_prefix, mobile: this.value });
    }
    setCurrentCountry(id) {
        var _a;
        const country = this.countries.find(country => country.id === id);
        if (!country) {
            throw new Error('Invalid country id');
        }
        this.currentCountry = Object.assign({}, country);
        this.textChange.emit({ phone_prefix: (_a = this.currentCountry) === null || _a === void 0 ? void 0 : _a.phone_prefix, mobile: this.value });
    }
    render() {
        var _a, _b;
        return (index.h(index.Host, { key: '4b914adf0db141c6bd8e3968015d5551d6070d94' }, index.h("div", { key: 'd291f4aee07a9016804016320b99a6df4b4eec20', class: "form-group mr-0" }, index.h("div", { key: '3f144444e39cc4e4c91d8c2d6cc580be0a30915b', class: "input-group row m-0 p-0 position-relative" }, this.label && (index.h("div", { key: 'a81b4c3c2ee820d3153e0456f427d9d2ab69a23f', class: `input-group-prepend col-3 p-0 text-dark border-none` }, index.h("label", { key: 'bb37fb47a88533522ea8f7517aecbd88f15a3cbe', class: `input-group-text  border-theme flex-grow-1 text-dark  ` }, this.label))), index.h("div", { key: '2285e98bd7b4b15cb302b59bc7e4b9a5018355e3', class: 'form-control  input-container  flex-fill' + (this.error ? ' is-invalid' : '') }, index.h("button", { key: '105c6e4cf7efaca00732ffa26b8c97c9520d3ead', onClick: () => (this.isDropdownVisible = !this.isDropdownVisible), class: "dropdown-trigger" }, this.currentCountry ? index.h("img", { src: (_a = this.currentCountry) === null || _a === void 0 ? void 0 : _a.flag, class: "flag" }) : index.h("p", { class: "p-0 m-0 " }, locales_store.locales.entries.Lcz_Select), index.h("svg", { key: '828911fc3e566ef798156dbfaac60906286eadbf', xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, index.h("path", { key: '7f3bc881f62e91a417167600a29106eaf4153977', d: "M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" }))), index.h("p", { key: '48be87111dd58f3a413043a5a5057194074e4baa', class: 'phone_prefix_label' }, (_b = this.currentCountry) === null || _b === void 0 ? void 0 : _b.phone_prefix), index.h("input", { key: '69fa7a00ae7d97e7ac8c2a52b4c0c8fbd09af9b5', type: "text", placeholder: this.placeholder, required: true, value: this.inputValue, disabled: this.disabled, onInput: e => this.handleInputChange(e) })), ' ', this.isDropdownVisible && (index.h("div", { key: '128b493f5545699372c1c93b9053f1da01a57947', class: "ir-dropdown-container" }, index.h("ir-combobox", { key: 'e9f6102f57bc87a0e7f8467683413c1e3e3bf830', onComboboxValueChange: e => {
                this.setCurrentCountry(+e.detail.data);
                this.isDropdownVisible = false;
            }, class: "bg-white", autoFocus: true, placeholder: "Search country", data: this.countries.map(c => ({
                id: c.id.toString(),
                name: `${c.name} (${c.phone_prefix})`,
                image: c.flag,
            })) })))))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "value": ["handleValueChange"],
        "phone_prefix": ["handlePhoneChange"]
    }; }
};
IrPhoneInput.style = IrPhoneInputStyle0;

class PickupService {
    async savePickup(params, booking_nbr, is_remove) {
        try {
            const splitTime = params.arrival_time.split(':');
            await axios.axios.post(`/Do_Pickup`, {
                booking_nbr,
                is_remove,
                currency: params.currency,
                date: params.arrival_date,
                details: params.flight_details,
                hour: splitTime[0],
                minute: splitTime[1],
                nbr_of_units: params.number_of_vehicles,
                selected_option: params.selected_option,
                total: +params.due_upon_booking,
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    transformDefaultPickupData(data) {
        const arrival_time = data.hour && data.minute ? utils.renderTime(data.hour) + ':' + utils.renderTime(data.minute) : '';
        return {
            arrival_date: data.date,
            arrival_time,
            currency: data.currency,
            due_upon_booking: data.total.toFixed(2),
            flight_details: data.details,
            location: data.selected_option.location.id,
            number_of_vehicles: data.nbr_of_units,
            selected_option: data.selected_option,
            vehicle_type_code: data.selected_option.vehicle.code,
        };
    }
    getAvailableLocations(message) {
        let locations = [];
        calendarData.calendar_data.pickup_service.allowed_options.forEach(option => {
            if (locations.filter(location => location.value === option.location.id).length === 0) {
                locations.push({
                    text: message + ' ' + option.location.description,
                    value: option.location.id,
                });
            }
        });
        return locations;
    }
    validateForm(params) {
        if (params.arrival_time.split(':').length !== 2) {
            return {
                error: true,
                cause: 'arrival_time',
            };
        }
        if (params.flight_details === '') {
            return {
                error: true,
                cause: 'flight_details',
            };
        }
        if (params.vehicle_type_code === '') {
            return {
                error: true,
                cause: 'vehicle_type_code',
            };
        }
        if (params.number_of_vehicles === 0) {
            return {
                error: true,
                cause: 'number_of_vehicles',
            };
        }
        return { error: false };
    }
    getNumberOfVehicles(capacity, numberOfPersons) {
        let total_number_of_vehicles = Math.ceil(numberOfPersons / capacity);
        let startNumber = total_number_of_vehicles > 1 ? total_number_of_vehicles : 1;
        let bonus_number = total_number_of_vehicles > 1 ? 2 : 3;
        return Array.from({ length: total_number_of_vehicles + bonus_number }, (_, i) => startNumber + i);
    }
    getPickUpPersonStatus(code) {
        const getCodeDescription = calendarData.calendar_data.pickup_service.allowed_pricing_models.find(model => model.code === code);
        if (!getCodeDescription) {
            return null;
        }
        return getCodeDescription.description;
    }
    updateDue(params) {
        const getCodeDescription = this.getPickUpPersonStatus(params.code);
        if (!getCodeDescription) {
            return;
        }
        if (getCodeDescription === 'Person') {
            return params.amount * params.numberOfPersons;
        }
        else {
            return params.amount * params.number_of_vehicles;
        }
    }
}

const irPickupCss = ".sc-ir-pickup-h{display:block}.custom-card-container.sc-ir-pickup{display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #e4e5ec}.card-title.sc-ir-pickup{flex:1}.border-theme.sc-ir-pickup{border:1px solid #cacfe7}";
const IrPickupStyle0 = irPickupCss;

const IrPickup = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeModal = index.createEvent(this, "closeModal", 7);
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt", 7);
        this.pickupService = new PickupService();
        this.defaultPickupData = undefined;
        this.numberOfPersons = 0;
        this.bookingNumber = undefined;
        this.bookingDates = undefined;
        this.isLoading = false;
        this.allowedOptionsByLocation = [];
        this.pickupData = {
            location: -1,
            flight_details: '',
            due_upon_booking: '',
            number_of_vehicles: 1,
            vehicle_type_code: '',
            currency: undefined,
            arrival_time: '',
            arrival_date: moment.hooks().format('YYYY-MM-DD'),
            selected_option: undefined,
        };
        this.vehicleCapacity = [];
        this.cause = null;
    }
    componentWillLoad() {
        if (this.defaultPickupData) {
            const transformedData = this.pickupService.transformDefaultPickupData(this.defaultPickupData);
            this.vehicleCapacity = this.pickupService.getNumberOfVehicles(transformedData.selected_option.vehicle.capacity, this.numberOfPersons);
            this.allowedOptionsByLocation = calendarData.calendar_data.pickup_service.allowed_options.filter(option => option.location.id === transformedData.location);
            this.pickupData = Object.assign({}, transformedData);
        }
    }
    handleLocationChange(event) {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const value = event.detail;
        if (value === '') {
            this.updatePickupData('location', -1);
        }
        if (value !== '') {
            this.allowedOptionsByLocation = calendarData.calendar_data.pickup_service.allowed_options.filter(option => option.location.id.toString() === value);
            let locationChoice = this.allowedOptionsByLocation[0];
            if (!locationChoice) {
                return;
            }
            this.vehicleCapacity = this.pickupService.getNumberOfVehicles(locationChoice.vehicle.capacity, this.numberOfPersons);
            this.pickupData = Object.assign(Object.assign({}, this.pickupData), { location: value, selected_option: locationChoice, number_of_vehicles: this.vehicleCapacity[0], due_upon_booking: this.pickupService
                    .updateDue({
                    amount: locationChoice.amount,
                    code: locationChoice.pricing_model.code,
                    numberOfPersons: this.numberOfPersons,
                    number_of_vehicles: this.vehicleCapacity[0],
                })
                    .toFixed(2), vehicle_type_code: locationChoice.vehicle.code, currency: locationChoice.currency });
            const input = this.el.querySelector('#pickup-time');
            if (!input) {
                setTimeout(() => {
                    this.initializeInputMask();
                }, 100);
            }
        }
    }
    initializeInputMask() {
        const input = this.el.querySelector('#pickup-time');
        // if (this.pickupData) {
        //   (input as HTMLInputElement).value = this.pickupData.arrival_time;
        // }
        if (input) {
            Inputmask('Hh:Mm', {
                placeholder: 'HH:mm',
                definitions: {
                    H: {
                        validator: '[0-2]',
                    },
                    h: {
                        validator: function (ch, maskset, pos) {
                            var firstDigit = maskset.buffer[pos - 1];
                            if (firstDigit === '2') {
                                return /[0-3]/.test(ch);
                            }
                            else {
                                return /[0-9]/.test(ch);
                            }
                        },
                    },
                    M: {
                        validator: '[0-5]',
                    },
                    m: {
                        validator: '[0-9]',
                    },
                },
                insertMode: true,
                showMaskOnHover: false,
                inputmode: 'numeric',
                alias: 'datetime',
                oncomplete: () => {
                    this.updatePickupData('arrival_time', input.value);
                },
                oncleared: () => {
                    this.updatePickupData('arrival_time', '');
                },
                onincomplete: () => {
                    this.updatePickupData('arrival_time', input.value);
                },
            }).mask(input);
        }
    }
    handleVehicleQuantityChange(e) {
        if (e.detail === '') {
            return;
        }
        const value = +e.detail;
        this.pickupData = Object.assign(Object.assign({}, this.pickupData), { number_of_vehicles: value, due_upon_booking: this.pickupService
                .updateDue({
                amount: this.pickupData.selected_option.amount,
                code: this.pickupData.selected_option.pricing_model.code,
                numberOfPersons: this.numberOfPersons,
                number_of_vehicles: value,
            })
                .toFixed(2) });
    }
    componentDidLoad() {
        if (this.defaultPickupData) {
            this.initializeInputMask();
        }
    }
    handleVehicleTypeChange(e) {
        if (e.detail === '') {
            this.pickupData = Object.assign(Object.assign({}, this.pickupData), { due_upon_booking: '', vehicle_type_code: '' });
            return;
        }
        let locationChoice = calendarData.calendar_data.pickup_service.allowed_options.find(option => option.location.id === +this.pickupData.location && option.vehicle.code === e.detail);
        if (!locationChoice) {
            return;
        }
        this.vehicleCapacity = [...this.pickupService.getNumberOfVehicles(locationChoice.vehicle.capacity, this.numberOfPersons)];
        this.pickupData = Object.assign(Object.assign({}, this.pickupData), { selected_option: locationChoice, number_of_vehicles: this.vehicleCapacity[0], due_upon_booking: this.pickupService
                .updateDue({
                amount: locationChoice.amount,
                code: locationChoice.pricing_model.code,
                numberOfPersons: this.numberOfPersons,
                number_of_vehicles: this.vehicleCapacity[0],
            })
                .toFixed(2), vehicle_type_code: locationChoice.vehicle.code });
    }
    updatePickupData(key, value) {
        this.pickupData = Object.assign(Object.assign({}, this.pickupData), { [key]: value });
    }
    async savePickup() {
        try {
            this.isLoading = true;
            const isValid = this.pickupService.validateForm(this.pickupData);
            if (isValid.error) {
                this.cause = isValid.cause;
                return;
            }
            if (this.cause) {
                this.cause = null;
            }
            await this.pickupService.savePickup(this.pickupData, this.bookingNumber, this.defaultPickupData !== null && this.pickupData.location === -1);
            this.resetBookingEvt.emit(null);
            this.closeModal.emit(null);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        var _a;
        return (index.h(index.Host, { key: '432f6491ff01f7612b85bf25365dea550f1d0814', class: 'p-0' }, index.h("ir-title", { key: '49969d48ba1114c1004a61d514272b4cf3639ee6', class: "px-1", onCloseSideBar: () => this.closeModal.emit(null), label: locales_store.locales.entries.Lcz_Pickup, displayContext: "sidebar" }), index.h("section", { key: 'c4964dfd0c2426a8040c31d59bf988ab2f49adac', class: 'px-1' }, index.h("ir-select", { key: 'a109044c545d7012e4534a0b34ff6323aa9a415b', selectedValue: this.pickupData.location, selectContainerStyle: "mb-1", onSelectChange: this.handleLocationChange.bind(this), firstOption: locales_store.locales.entries.Lcz_Pickup_NoThankYou, class: 'm-0 mb-1', LabelAvailable: false, data: this.pickupService.getAvailableLocations(locales_store.locales.entries.Lcz_Pickup_YesFrom) }), this.pickupData.location > 0 && (index.h(index.Fragment, { key: '4018227536b9f1ddc5b99363fad406894d86eba0' }, index.h("div", { key: '0d58e53f79d04c0fc4a536dda5e0b7508dcfd139', class: 'd-flex' }, index.h("div", { key: '39becc97495e5a1c1315ad5a86afd87dbbfd52ec', class: "form-group  mr-1" }, index.h("div", { key: '62bd41984f06398bb67b43bc218d143f12a7eaf5', class: "input-group row m-0" }, index.h("div", { key: '582c25763d33aa0e9d669e96c0f06172ae1bc854', class: `input-group-prepend col-5 p-0 text-dark border-0` }, index.h("label", { key: '81c77f68071aa02ae571f0b3c7563f6517b15461', class: `input-group-text  flex-grow-1 text-dark border-theme ` }, locales_store.locales.entries.Lcz_ArrivalDate)), index.h("div", { key: 'ad0efb529a7f72e66ed307631753735c9f24b29a', class: "form-control form-control-md col-7 d-flex align-items-center pl-0" }, index.h("ir-date-picker", { key: '717af8bd0c312d05370579ee4b71579ea6459a1f', date: this.pickupData.arrival_date, maxDate: (_a = this.bookingDates) === null || _a === void 0 ? void 0 : _a.to, minDate: moment.hooks().format('YYYY-MM-DD'),
            // customPicker={false}
            // autoApply
            // format="ddd, DD M YYYY"
            // singleDatePicker
            onDateChanged: evt => {
                var _a;
                this.updatePickupData('arrival_date', (_a = evt.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD'));
            } }, index.h("input", { key: 'c988b243bbc21e5580bbde8bc728f9e8ff35947a', type: "text", slot: "trigger", value: moment.hooks(this.pickupData.arrival_date).format('MMM DD, YYYY'), class: "form-control input-sm text-center", style: { borderLeftWidth: '0', borderRightWidth: '0', width: '100%' } }))))), index.h("div", { key: '6e99c0084dedb210255dd89f94077092f914d36e', class: "form-group" }, index.h("div", { key: 'c419f490e92ec41a6a0e5a690ed7b95e339a49c9', class: "input-group  row m-0" }, index.h("div", { key: '1da37af022b49657b8cbc76689c665107d35f4ee', class: `input-group-prepend col-4 col-sm-3 p-0 text-dark border-0` }, index.h("label", { key: '863ea62433b823ef48db00ce5cc7f2e46483d78d', htmlFor: "pickup", class: `input-group-text flex-grow-1 text-dark border-theme` }, locales_store.locales.entries.Lcz_Time)), index.h("input", { key: '312dd8e42dfc380cb6b1a4ee8ebb52b1c9fe191c', type: "text", value: this.pickupData.arrival_time, id: "pickup-time", class: `form-control col-8 col-sm-4 ${this.cause === 'arrival_time' && 'border-danger'}` })))), index.h("ir-input-text", { key: 'ebbba1b7674c3865b0babf0dd59ea40c34dad6d9', value: this.pickupData.flight_details, label: locales_store.locales.entries.Lcz_FlightDetails, onTextChange: e => this.updatePickupData('flight_details', e.detail), placeholder: "", inputStyles: this.cause === 'flight_details' ? 'border-danger' : '' }), index.h("ir-select", { key: '2a58637fa927e49e6ab10fa30a1b4a3c20d085d7', selectContainerStyle: "mb-1", selectStyles: this.cause === 'vehicle_type_code' ? 'border-danger' : '', onSelectChange: this.handleVehicleTypeChange.bind(this), firstOption: locales_store.locales.entries.Lcz_Select, selectedValue: this.pickupData.vehicle_type_code, class: 'm-0', LabelAvailable: false, data: this.allowedOptionsByLocation.map(option => ({
                text: option.vehicle.description,
                value: option.vehicle.code,
            })) }), index.h("div", { key: '181690df32412dacdc93a55f777f28e75a3c9cf6', class: 'd-flex flex-column flex-md-row' }, index.h("ir-select", { key: '42c814c57cda972b33ca3803a0fb355871e4b270', labelBorder: "theme", selectContainerStyle: "mb-1", onSelectChange: this.handleVehicleQuantityChange.bind(this), selectStyles: this.cause === 'number_of_vehicles' ? 'border-danger' : '', selectedValue: this.pickupData.number_of_vehicles, labelWidth: 7, class: 'm-0  mb-md-0 mr-md-1 flex-fill', label: locales_store.locales.entries.Lcz_NbrOfVehicles, data: this.vehicleCapacity.map(i => ({
                text: i,
                value: i,
            })) }), index.h("ir-input-text", { key: '34ae90b31b264b599f1ead807112e4a3ad1b6b5a', labelBorder: "theme", readonly: true, value: this.pickupData.due_upon_booking, labelWidth: 7, label: `${locales_store.locales.entries.Lcz_DueUponBooking}  ${this.pickupData.currency.symbol}`, placeholder: "", class: "" })))), index.h("div", { key: 'ad76825dcb6ea8c9cc6433e9734419ca79e3bd4c', class: 'd-flex flex-column flex-sm-row mt-3' }, index.h("ir-button", { key: '71c21e8f72cb4d34c5b2e3c49efd37d8c0a57ec7', onClick: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `mb-1 mb-sm-0 flex-fill  ${this.defaultPickupData || this.pickupData.location !== -1 ? 'mr-sm-1' : ''}`, icon: "", text: locales_store.locales.entries.Lcz_Cancel, btn_color: "secondary" }), (this.defaultPickupData || this.pickupData.location !== -1) && (index.h("ir-button", { key: 'f91505d76d69f017304045248436f8d19b82dbd9', btn_styles: "justify-content-center align-items-center", class: 'm-0 flex-fill text-center', icon: "", isLoading: this.isLoading, text: locales_store.locales.entries.Lcz_Save, btn_color: "primary", onClick: this.savePickup.bind(this) }))))));
    }
    get el() { return index.getElement(this); }
};
IrPickup.style = IrPickupStyle0;

const irPickupViewCss = ".sc-ir-pickup-view-h{display:block}";
const IrPickupViewStyle0 = irPickupViewCss;

const IrPickupView = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.booking = undefined;
    }
    render() {
        if (!calendarData.calendar_data.pickup_service.is_enabled || !this.booking.is_editable) {
            return null;
        }
        return (index.h(index.Host, null, index.h("div", { class: "mb-1" }, index.h("div", { class: 'd-flex w-100 mb-1 align-items-center justify-content-between' }, index.h("p", { class: 'font-size-large p-0 m-0 ' }, locales_store.locales.entries.Lcz_Pickup), index.h("ir-button", { id: "pickup", variant: "icon", icon_name: "edit", style: Object.assign(Object.assign({}, colorVariants.secondary), { '--icon-size': '1.5rem' }) })), this.booking.pickup_info && (index.h("div", { class: 'card' }, index.h("div", { class: 'p-1' }, index.h("div", { class: 'd-flex align-items-center py-0 my-0 pickup-margin' }, index.h("p", { class: 'font-weight-bold mr-1 py-0 my-0' }, locales_store.locales.entries.Lcz_Date, ": ", index.h("span", { class: 'font-weight-normal' }, moment.hooks(this.booking.pickup_info.date, 'YYYY-MM-DD').format('MMM DD, YYYY'))), this.booking.pickup_info.hour && this.booking.pickup_info.minute && (index.h("p", { class: 'font-weight-bold flex-fill py-0 my-0' }, locales_store.locales.entries.Lcz_Time, ":", index.h("span", { class: 'font-weight-normal' }, " ", functions._formatTime(this.booking.pickup_info.hour.toString(), this.booking.pickup_info.minute.toString())))), index.h("p", { class: 'font-weight-bold py-0 my-0' }, locales_store.locales.entries.Lcz_DueUponBooking, ":", ' ', index.h("span", { class: 'font-weight-normal' }, this.booking.pickup_info.currency.symbol, this.booking.pickup_info.total))), index.h("p", { class: 'font-weight-bold py-0 my-0' }, locales_store.locales.entries.Lcz_FlightDetails, ":", index.h("span", { class: 'font-weight-normal' }, " ", `${this.booking.pickup_info.details}`)), index.h("p", { class: 'py-0 my-0 pickup-margin' }, `${this.booking.pickup_info.selected_option.vehicle.description}`), index.h("p", { class: 'font-weight-bold py-0 my-0 pickup-margin' }, locales_store.locales.entries.Lcz_NbrOfVehicles, ":", index.h("span", { class: 'font-weight-normal' }, " ", `${this.booking.pickup_info.nbr_of_units}`)), index.h("p", { class: 'small py-0 my-0 pickup-margin' }, calendarData.calendar_data.pickup_service.pickup_instruction.description, calendarData.calendar_data.pickup_service.pickup_cancelation_prepayment.description)))))));
    }
};
IrPickupView.style = IrPickupViewStyle0;

const irPmsLogsCss = ".sc-ir-pms-logs-h{display:block}.dialog-container-height.sc-ir-pms-logs{height:4rem}.list-title.sc-ir-pms-logs{margin:0;padding:0;font-size:14px;font-weight:bold;width:fit-content}.list-item.sc-ir-pms-logs{margin:0;padding:0;font-size:14px;margin-left:5px;width:fit-content}.list-item.green.sc-ir-pms-logs{color:#629a4c;font-weight:600}.list-item.red.sc-ir-pms-logs{color:#ff4961;font-weight:600}";
const IrPmsLogsStyle0 = irPmsLogsCss;

const IrPmsLogs = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bookingService = new booking_service.BookingService();
        this.bookingNumber = undefined;
        this.pmsLogs = undefined;
    }
    componentWillLoad() {
        this.init();
    }
    async init() {
        try {
            this.pmsLogs = await this.bookingService.fetchPMSLogs(this.bookingNumber);
        }
        catch (error) {
            console.error(error);
        }
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return (index.h("div", { key: '5f1a94b6b166b4a68f3fed9beafc7a44631ecf45', class: "p-1" }, index.h("h3", { key: 'f678affbca72a175c7e7ef38c9c2b55f52d40f9b', class: " text-left mb-1 dialog-title " }, locales_store.locales.entries.Lcz_PMS_Logs), irInterceptor_store.isRequestPending('/Get_Exposed_PMS_Logs') ? (index.h("div", { class: 'd-flex align-items-center justify-content-center dialog-container-height' }, index.h("ir-spinner", null))) : (index.h("div", { class: 'dialog-container-height' }, index.h("div", { class: "d-flex align-items-center ", style: { paddingBottom: '0.5rem' } }, index.h("p", { class: "list-title p-0 m-0" }, locales_store.locales.entries.Lcz_SentAt), ((_a = this.pmsLogs) === null || _a === void 0 ? void 0 : _a.sent_date) ? (index.h("p", { class: "list-item" }, (_b = this.pmsLogs) === null || _b === void 0 ? void 0 :
            _b.sent_date, " ", functions._formatTime((_c = this.pmsLogs) === null || _c === void 0 ? void 0 : _c.sent_hour.toString(), (_d = this.pmsLogs) === null || _d === void 0 ? void 0 : _d.sent_minute.toString()))) : (index.h("p", { class: `list-item ${((_e = this.pmsLogs) === null || _e === void 0 ? void 0 : _e.sent_date) ? 'green' : 'red'}` }, ((_f = this.pmsLogs) === null || _f === void 0 ? void 0 : _f.is_acknowledged) ? locales_store.locales.entries.Lcz_YES : locales_store.locales.entries.Lcz_NO))), index.h("div", { class: "d-flex align-items-center p-0 m-0" }, index.h("h4", { class: "list-title p-0 m-0" }, locales_store.locales.entries.Lcz_Acknowledged), index.h("p", { class: `list-item  ${((_g = this.pmsLogs) === null || _g === void 0 ? void 0 : _g.is_acknowledged) ? 'green' : 'red'}` }, ((_h = this.pmsLogs) === null || _h === void 0 ? void 0 : _h.is_acknowledged) ? locales_store.locales.entries.Lcz_YES : locales_store.locales.entries.Lcz_NO))))));
    }
};
IrPmsLogs.style = IrPmsLogsStyle0;

const irPopoverCss = ".sc-ir-popover-h{display:block;width:100%}*.sc-ir-popover{box-sizing:border-box}.popover-title.sc-ir-popover{position:relative;width:100%;height:100%;margin:0;padding:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;z-index:10;left:0}.popover-container.sc-ir-popover{position:absolute;bottom:0px;left:var(--ir-popover-left, 10px);background:rgb(0, 0, 0);color:white;min-width:100%;box-shadow:rgba(0, 0, 0, 0.2) 0px 2px 10px;z-index:9999;padding:3.5px 7px;border-radius:5px;pointer-events:none;opacity:0;transition:all 100ms ease;font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;font-style:normal;font-weight:400;line-height:1.45;text-decoration:none;text-shadow:none;font-size:0.875rem}.popover-container[data-state='show'].sc-ir-popover{opacity:1}";
const IrPopoverStyle0 = irPopoverCss;

const IrPopover = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.handleMouseEnter = () => {
            if (!this.showPopover) {
                return;
            }
            if (this.showPopover) {
                this.isHovered = true;
            }
        };
        this.handleMouseLeave = () => {
            if (!this.showPopover) {
                return;
            }
            this.isHovered = false;
        };
        this.popoverTitle = undefined;
        this.isHovered = false;
        this.showPopover = false;
        this.irPopoverLeft = '10px';
    }
    componentWillLoad() {
        this.checkTitleWidth();
    }
    checkTitleWidth() {
        requestAnimationFrame(() => {
            const titleElement = this.el.querySelector('.popover-title');
            if (titleElement) {
                const width = titleElement.scrollWidth;
                this.showPopover = width > 150; // Show popover if title width exceeds 170px
            }
        });
    }
    render() {
        return (index.h(index.Host, { key: 'ed57a3d202065b781afb7c54ce730383e85381ce', style: { '--ir-popover-left': this.irPopoverLeft } }, index.h("p", { key: '349e70ad39b47128d97e1c698a05433122204d67', class: "popover-title", onMouseLeave: this.handleMouseLeave, onMouseEnter: this.handleMouseEnter }, this.popoverTitle), this.showPopover && this.isHovered && (index.h("div", { key: '1bdd8cbec2e627e97b4f3ac7b70a629ac1b6d74a', "data-state": "show", class: "popover-container" }, this.popoverTitle))));
    }
    get el() { return index.getElement(this); }
};
IrPopover.style = IrPopoverStyle0;

const irPriceInputCss = ".sc-ir-price-input-h{display:block;--ir-input-border-color:#cacfe7;flex:1 1 0%}.sc-ir-price-input-h .input-group-text.sc-ir-price-input{border-color:var(--ir-input-border-color)}.sc-ir-price-input-h .form-control.sc-ir-price-input,.currency-label.sc-ir-price-input{font-size:14px !important}.ir-bl-lbl-none.sc-ir-price-input,.ir-bl-input-none.sc-ir-price-input{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}.ir-br-lbl-none.sc-ir-price-input,.ir-br-input-none.sc-ir-price-input{border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}.ir-br-none.sc-ir-price-input{border-right:none}.ir-bl-none.sc-ir-price-input{border-left:none}.rate-input-container.sc-ir-price-input{display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;flex:1;padding:0 !important}[class='special-style'].sc-ir-price-input-h .rate-input.sc-ir-price-input{background:black !important}.rate-input.sc-ir-price-input{font-size:0.875rem;line-height:0;padding:0;height:0;box-sizing:border-box;border-left:0;padding-left:0px !important;border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}.currency-label.with-label.sc-ir-price-input{border-radius:0}.currency-label.sc-ir-price-input{box-sizing:border-box;color:#3b4781;border:1px solid #cacfe7;font-size:0.875rem;height:2rem;background:white;border-right:0;border-top-right-radius:0;border-bottom-right-radius:0;pointer-events:none;transition:border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}.currency-label.disabled.sc-ir-price-input,.rate-input.sc-ir-price-input:disabled{background-color:#eceff1;border-color:rgba(118, 118, 118, 0.3)}.price-input-group.sc-ir-price-input:focus-within .currency-label.sc-ir-price-input{border-top:1px solid #1e9ff2;border-bottom:1px solid #1e9ff2;border-left:1px solid #1e9ff2}[data-state='error'].sc-ir-price-input-h .currency-label.sc-ir-price-input,[data-state='error'].sc-ir-price-input-h .rate-input.sc-ir-price-input,.error.sc-ir-price-input{border-color:var(--red, #ff4961) !important}.price-input.sc-ir-price-input:focus{border-right-width:1px !important}.is-invalid.sc-ir-price-input{background-image:none !important}";
const IrPriceInputStyle0 = irPriceInputCss;

const IrPriceInput = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.textChange = index.createEvent(this, "textChange", 7);
        this.inputBlur = index.createEvent(this, "inputBlur", 7);
        this.inputFocus = index.createEvent(this, "inputFocus", 7);
        this.handleInputChange = (event) => {
            const target = event.target;
            this.value = target.value;
            // Emit the change event
            this.textChange.emit(this.value);
        };
        this.handleBlur = () => {
            this.validateInput(this.value);
            // Emit the blur event
            if (this.value) {
                this.value = parseFloat(this.value).toFixed(2);
            }
            this.inputBlur.emit(this.value);
        };
        this.handleFocus = () => {
            // Emit the focus event
            this.inputFocus.emit();
        };
        this.label = undefined;
        this.inputStyle = undefined;
        this.labelStyle = undefined;
        this.disabled = undefined;
        this.currency = undefined;
        this.autoValidate = true;
        this.wrapKey = undefined;
        this.zod = undefined;
        this.placeholder = '';
        this.value = '';
        this.required = false;
        this.minValue = undefined;
        this.maxValue = undefined;
        this.error = undefined;
    }
    componentWillLoad() {
        if (this.el.id) {
            this.id = this.el.id;
        }
        else {
            this.id = v4.v4();
        }
    }
    hasSpecialClass(className) {
        return this.el.classList.contains(className);
    }
    validateInput(value) {
        if (!this.autoValidate) {
            return;
        }
        if (this.zod) {
            try {
                this.zod.parse(this.wrapKey ? { [this.wrapKey]: value } : value); // Validate the value using the Zod schema
                this.error = false; // Clear the error if valid
            }
            catch (error) {
                console.log(error);
                this.error = true; // Set the error message
            }
        }
    }
    render() {
        var _a, _b;
        return (index.h("fieldset", { key: '4d65b00e007f99811a0a54cdab2c483ae8ccc115', class: "input-group price-input-group m-0 p-0" }, this.label && (index.h("div", { key: 'dee73737d388877602030923e5f6d8616facdf64', class: "input-group-prepend" }, index.h("span", { key: '461785de6d327e2441aae9f3dcebf26df023581f', class: `input-group-text 
                ${this.labelStyle}
              ${this.hasSpecialClass('ir-bl-lbl-none') ? 'ir-bl-lbl-none' : ''}
              ${this.hasSpecialClass('ir-br-lbl-none') ? 'ir-br-lbl-none' : ''}
              ${this.hasSpecialClass('ir-br-none') ? 'ir-br-none' : ''} 
              ${this.hasSpecialClass('ir-bl-none') ? 'ir-bl-none' : ''} 
              ` }, index.h("label", { key: '66b09dbdccaeeba4d5f8ad3ef2ec85c36a64b8b4', class: 'p-0 m-0 ', htmlFor: this.id }, this.label)))), index.h("div", { key: 'e6e5bbe0d9e9ed199873cd447ff2ba3171fdc18b', class: "position-relative has-icon-left rate-input-container" }, this.currency && (index.h("div", { key: '5fbfac3895bc2faaf70c87aecea32d4b37382583', class: `input-group-prepend` }, index.h("span", { key: '546b9bb4f89d71a39d1ffe74d4b3f2d7c11646d6', class: `input-group-text ${this.disabled ? 'disabled' : ''} currency-label ${this.error ? 'error' : ''} ${this.label ? 'with-label' : ''}` }, this.currency))), index.h("input", { key: '18489c0165b2c3c2c3851279cd8cd5a262f84d47', disabled: this.disabled, id: this.id, class: `form-control input-sm rate-input 
              ${this.inputStyle}
              ${this.hasSpecialClass('ir-br-input-none') ? 'ir-br-input-none' : ''} 
              ${this.hasSpecialClass('ir-bl-input-none') ? 'ir-bl-input-none' : ''} 
              ${this.error ? 'error' : ''} py-0 m-0 ${this.currency ? 'ir-bl-none' : ''}`, onInput: this.handleInputChange, onBlur: this.handleBlur, onFocus: this.handleFocus, type: "number", step: "0.01", "aria-label": (_a = this.el.ariaLabel) !== null && _a !== void 0 ? _a : 'price-input', "aria-describedby": (_b = this.el.ariaDescription) !== null && _b !== void 0 ? _b : 'price-input', value: this.value }))));
    }
    get el() { return index.getElement(this); }
};
IrPriceInput.style = IrPriceInputStyle0;

const irReservationInformationCss = ".sc-ir-reservation-information-h{display:block}";
const IrReservationInformationStyle0 = irReservationInformationCss;

const IrReservationInformation = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.openSidebar = index.createEvent(this, "openSidebar", 7);
        this.booking = undefined;
        this.countries = undefined;
        this.userCountry = null;
    }
    componentWillLoad() {
        var _a, _b, _c;
        const guestCountryId = (_b = (_a = this.booking) === null || _a === void 0 ? void 0 : _a.guest) === null || _b === void 0 ? void 0 : _b.country_id;
        this.userCountry = guestCountryId ? ((_c = this.countries) === null || _c === void 0 ? void 0 : _c.find(country => country.id === guestCountryId)) || null : null;
    }
    handleEditClick(e, type) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.openSidebar.emit({ type });
    }
    renderPhoneNumber() {
        const { mobile_without_prefix, country_phone_prefix, country_id } = this.booking.guest;
        if (!mobile_without_prefix) {
            return null;
        }
        if (country_phone_prefix) {
            return country_phone_prefix + ' ' + mobile_without_prefix;
        }
        if (country_id) {
            const selectedCountry = this.countries.find(c => c.id === country_id);
            if (!selectedCountry) {
                throw new Error('Invalid country id');
            }
            return selectedCountry.phone_prefix + ' ' + mobile_without_prefix;
        }
        return mobile_without_prefix;
        // const { mobile, country_phone_prefix, country_id } = this.booking.guest;
        // if (!mobile) {
        //   return null;
        // }
        // if (this.booking.is_direct) {
        //   if (country_phone_prefix) {
        //     return country_phone_prefix + ' ' + mobile;
        //   }
        //   if (country_id) {
        //     const selectedCountry = this.countries.find(c => c.id === country_id);
        //     if (!selectedCountry) {
        //       throw new Error('Invalid country id');
        //     }
        //     return selectedCountry.phone_prefix + ' ' + mobile;
        //   }
        // }
        // return mobile;
    }
    render() {
        var _a, _b, _c, _d, _e, _f;
        const privateNote = booking.getPrivateNote(this.booking.extras);
        return (index.h("div", { key: '2852c02672891b6bdb34c8af704e19d6293944d5', class: "card" }, index.h("div", { key: '3774c9160d15747589aebcd0eeb04499a5defbe9', class: "p-1" }, index.h("p", { key: 'd082adf58b140de98ebea87344a959086bf25e1d' }, this.booking.property.name || ''), index.h("ir-label", { key: 'd044208bbe9836c110fc7a220e4e7c01ff725d51', labelText: `${locales_store.locales.entries.Lcz_Source}:`, content: this.booking.origin.Label, image: { src: this.booking.origin.Icon, alt: this.booking.origin.Label } }), index.h("ir-label", { key: '00b9327c4b994ef6f0760a9c64ecf8a5a668d3be', renderContentAsHtml: true, labelText: `${locales_store.locales.entries.Lcz_BookedOn}:`, content: `${functions._formatDate(this.booking.booked_on.date)}&nbsp&nbsp&nbsp&nbsp${functions._formatTime(this.booking.booked_on.hour.toString(), this.booking.booked_on.minute.toString())}` }), index.h("ir-label", { key: '7a56114482a2c5b9a341a88644386494b6d1cc0b', labelText: `${locales_store.locales.entries.Lcz_BookedBy}:`, content: `${this.booking.guest.first_name} ${this.booking.guest.last_name}` }, ((_a = this.booking.guest) === null || _a === void 0 ? void 0 : _a.nbr_confirmed_bookings) > 1 && !this.booking.agent && (index.h("div", { key: '3ee54aae9d2f83bbdad72c3ceb1b63ed1d5fc012', class: 'm-0 p-0', slot: "prefix" }, index.h("ir-tooltip", { key: 'f7c0e7c73dc710d4ed441beb96b21623ba81f0ef', message: `${locales_store.locales.entries.Lcz_BookingsNbr}`.replace('%1', this.booking.guest.nbr_confirmed_bookings.toString()), customSlot: true }, index.h("div", { key: '37e123ef65ea30f178d0f69d9ead742d61dac70f', class: "d-flex align-items-center m-0 p-0", slot: "tooltip-trigger", style: { gap: '0.25rem' } }, index.h("p", { key: '9d2866ec81840b65729b2c0db3b443e120d8b3aa', class: 'p-0 m-0', style: { color: '#FB0AAD' } }, this.booking.guest.nbr_confirmed_bookings), index.h("ir-icons", { key: '239c9c26162bb26c0b2732f1d2edc7e0b2f7997e', style: { '--icon-size': '1rem' }, color: "#FB0AAD", name: "heart-fill" }))))), index.h("ir-button", { key: '57d49f1e5075dca8afc940b8c13fb6f476ef3da7', slot: "suffix", variant: "icon", icon_name: 'edit', style: Object.assign(Object.assign({}, colorVariants.secondary), { '--icon-size': '1.1rem' }), onClickHandler: e => this.handleEditClick(e, 'guest') })), this.booking.guest.mobile && index.h("ir-label", { key: '755063cd873bbbcbbe2903d84c02fb460de718d7', labelText: `${locales_store.locales.entries.Lcz_Phone}:`, content: this.renderPhoneNumber() }), !this.booking.agent && index.h("ir-label", { key: '6f829d5e67a11d06fa8493dcb37d12a0b5db1c79', labelText: `${locales_store.locales.entries.Lcz_Email}:`, content: this.booking.guest.email }), this.booking.guest.alternative_email && index.h("ir-label", { key: '106f7f1f62faafca50b6b9b793734278399bcc4b', labelText: `${locales_store.locales.entries.Lcz_AlternativeEmail}:`, content: this.booking.guest.alternative_email }), ((_c = (_b = this.booking) === null || _b === void 0 ? void 0 : _b.guest) === null || _c === void 0 ? void 0 : _c.address) && index.h("ir-label", { key: 'cb07a1fc3c43ea9f0d0eb6180ad3501db4e127d4', labelText: `${locales_store.locales.entries.Lcz_Address}:`, content: this.booking.guest.address }), this.userCountry && (index.h("ir-label", { key: 'cfb738b59bf93a94427c279aac3035ddcba1c7d2', labelText: `${locales_store.locales.entries.Lcz_Country}:`, isCountryImage: true, content: this.userCountry.name, image: { src: this.userCountry.flag, alt: this.userCountry.name } })), ((_d = this.booking.guest) === null || _d === void 0 ? void 0 : _d.notes) && index.h("ir-label", { key: '0bb08923cee2765438112477f17269e0359a48b6', display: "inline", labelText: `${locales_store.locales.entries.Lcz_GuestPrivateNote}:`, content: (_e = this.booking.guest) === null || _e === void 0 ? void 0 : _e.notes }), this.booking.is_direct && index.h("ir-label", { key: '78fa17cb9a6c6ea8a53dcef4bced73153ff02dae', labelText: `${locales_store.locales.entries.Lcz_ArrivalTime}:`, content: this.booking.arrival.description }), this.booking.promo_key && index.h("ir-label", { key: '437f8dc3ce62b44ab8b2bf7fe2bb88d1c634a927', labelText: `${locales_store.locales.entries.Lcz_Coupon}:`, content: this.booking.promo_key }), this.booking.is_in_loyalty_mode && !this.booking.promo_key && (index.h("div", { key: 'edd0ef05537573b689fcd119227ba46b679883cb', class: "d-flex align-items-center" }, index.h("svg", { key: '3d4bc14f2c3f7fa9723156c20c5f310e5d782f8c', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: '900d397b7da18b7f5d97805a353b45ee2638a0f3', fill: "#fc6c85", d: "M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" })), index.h("p", { key: '085ab09ef3a32ffe4074b27cb419d720ecfe37fc', class: "m-0 p-0 ml-1" }, locales_store.locales.entries.Lcz_LoyaltyDiscountApplied))), this.booking.is_direct ? (index.h("ir-label", { labelText: `${locales_store.locales.entries.Lcz_GuestRemark}:`, display: "inline", content: this.booking.remark })) : (index.h("ota-label", { class: 'm-0 p-0', label: `${locales_store.locales.entries.Lcz_ChannelNotes || 'Channel notes'}:`, remarks: this.booking.ota_notes, maxVisibleItems: (_f = this.booking.ota_notes) === null || _f === void 0 ? void 0 : _f.length })), index.h("div", { key: '085dcdc805cf43d22cf96de65edf3c0e8faeefdc', class: "d-flex align-items-center justify-content-between" }, index.h("ir-label", { key: '2383e355b65605a265e989e5891d0606fb75942b', labelText: `${locales_store.locales.entries.Lcz_BookingPrivateNote}:`, placeholder: locales_store.locales.entries.Lcz_VisibleToHotelOnly, content: privateNote, display: privateNote ? 'inline' : 'flex' }), index.h("ir-button", { key: '37433faa2b70d0755321a4542731e8676d65f68c', variant: "icon", icon_name: "edit", style: colorVariants.secondary, onClickHandler: e => this.handleEditClick(e, 'extra_note') })))));
    }
};
IrReservationInformation.style = IrReservationInformationStyle0;

const irRoomCss = ".light-blue-bg.sc-ir-room{background:#acecff;padding:0.1rem 0.3rem;border-radius:5px}.room_statements.sc-ir-room{display:block;width:100%}.room_statements.sc-ir-room span.sc-ir-room{display:inline;white-space:normal;line-height:1.5;word-break:break-word}.room_statements.sc-ir-room b.sc-ir-room{display:inline;margin-right:5px}.payment-container.sc-ir-room{position:absolute;right:1rem;height:fit-content}.sc-ir-room-h{position:relative}.sm-mr.sc-ir-room{margin-right:3px}.subtotal_row.sc-ir-room{padding-top:8px;font-weight:600}.room_actions_btns.sc-ir-room{gap:0.5rem}.night-cost.sc-ir-room{color:#7cbebe}.mx-0-5.sc-ir-room{margin-left:2px !important;margin-right:2px !important}.tax-width.sc-ir-room{font-size:10px}.sm-mb-1.sc-ir-room{margin-bottom:5px !important}.sm-mt-1.sc-ir-room{margin-top:5px !important}.mx-01.sc-ir-room{--m:5px;margin-right:var(--m) !important;margin-left:var(--m) !important}";
const IrRoomStyle0 = irRoomCss;

const IrRoom = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.deleteFinished = index.createEvent(this, "deleteFinished", 7);
        this.pressCheckIn = index.createEvent(this, "pressCheckIn", 7);
        this.pressCheckOut = index.createEvent(this, "pressCheckOut", 7);
        this.editInitiated = index.createEvent(this, "editInitiated", 7);
        this.bookingEvent = undefined;
        this.bookingIndex = undefined;
        this.isEditable = undefined;
        this.mealCodeName = undefined;
        this.myRoomTypeFoodCat = undefined;
        this.currency = 'USD';
        this.language = 'en';
        this.legendData = undefined;
        this.roomsInfo = undefined;
        this.bedPreferences = undefined;
        this.hasRoomEdit = false;
        this.hasRoomDelete = false;
        this.hasRoomAdd = false;
        this.hasCheckIn = false;
        this.hasCheckOut = false;
        this.collapsed = false;
        this.item = undefined;
        this.isLoading = false;
        this.isModelOpen = false;
    }
    componentWillLoad() {
        if (this.bookingEvent) {
            this.item = this.bookingEvent.rooms[this.bookingIndex];
        }
    }
    handleBookingEventChange() {
        this.item = this.bookingEvent.rooms[this.bookingIndex];
    }
    handleClick(e) {
        let target = e.target;
        if (target.id == 'checkin') {
            this.pressCheckIn.emit(this.item);
        }
        else if (target.id == 'checkout') {
            this.pressCheckOut.emit(this.item);
        }
    }
    getDateStr(date, locale = 'default') {
        return date.getDate() + ' ' + date.toLocaleString(locale, { month: 'short' }) + ' ' + date.getFullYear();
    }
    handleEditClick() {
        var _a, _b, _c, _d, _e, _f;
        this.editInitiated.emit({
            event_type: 'EDIT_BOOKING',
            ID: this.item['assigned_units_pool'],
            NAME: booking.formatName(this.item.guest.first_name, this.item.guest.last_name),
            EMAIL: this.bookingEvent.guest.email,
            PHONE: this.bookingEvent.guest.mobile,
            REFERENCE_TYPE: '',
            FROM_DATE: this.bookingEvent.from_date,
            TO_DATE: this.bookingEvent.to_date,
            TITLE: `${locales_store.locales.entries.Lcz_EditBookingFor} ${(_b = (_a = this.item) === null || _a === void 0 ? void 0 : _a.roomtype) === null || _b === void 0 ? void 0 : _b.name} ${((_d = (_c = this.item) === null || _c === void 0 ? void 0 : _c.unit) === null || _d === void 0 ? void 0 : _d.name) || ''}`,
            defaultDateRange: {
                dateDifference: this.item.days.length,
                fromDate: new Date(this.item.from_date + 'T00:00:00'),
                fromDateStr: this.getDateStr(new Date(this.item.from_date + 'T00:00:00')),
                toDate: new Date(this.item.to_date + 'T00:00:00'),
                toDateStr: this.getDateStr(new Date(this.item.to_date + 'T00:00:00')),
                message: '',
            },
            bed_preference: this.item.bed_preference,
            adult_child_offering: this.item.rateplan.selected_variation.adult_child_offering,
            ADULTS_COUNT: this.item.rateplan.selected_variation.adult_nbr,
            ARRIVAL: this.bookingEvent.arrival,
            ARRIVAL_TIME: this.bookingEvent.arrival.description,
            BOOKING_NUMBER: this.bookingEvent.booking_nbr,
            cancelation: this.item.rateplan.cancelation,
            channel_booking_nbr: this.bookingEvent.channel_booking_nbr,
            CHILDREN_COUNT: this.item.rateplan.selected_variation.child_nbr,
            COUNTRY: this.bookingEvent.guest.country_id,
            ENTRY_DATE: this.bookingEvent.from_date,
            FROM_DATE_STR: this.bookingEvent.format.from_date,
            guarantee: this.item.rateplan.guarantee,
            GUEST: this.bookingEvent.guest,
            IDENTIFIER: this.item.identifier,
            is_direct: this.bookingEvent.is_direct,
            IS_EDITABLE: this.bookingEvent.is_editable,
            NO_OF_DAYS: this.item.days.length,
            NOTES: this.bookingEvent.remark,
            origin: this.bookingEvent.origin,
            POOL: this.item['assigned_units_pool'],
            PR_ID: (_e = this.item.unit) === null || _e === void 0 ? void 0 : _e.id,
            RATE: this.item.total,
            RATE_PLAN: this.item.rateplan.name,
            RATE_PLAN_ID: this.item.rateplan.id,
            RATE_TYPE: this.item.roomtype.id,
            ROOMS: this.bookingEvent.rooms,
            SOURCE: this.bookingEvent.source,
            SPLIT_BOOKING: false,
            STATUS: 'IN-HOUSE',
            TO_DATE_STR: this.bookingEvent.format.to_date,
            TOTAL_PRICE: this.bookingEvent.total,
            legendData: this.legendData,
            roomsInfo: this.roomsInfo,
            roomName: ((_f = this.item.unit) === null || _f === void 0 ? void 0 : _f.name) || '',
            PICKUP_INFO: this.bookingEvent.pickup_info,
            booking: this.bookingEvent,
            currentRoomType: this.item,
        });
    }
    handleDeleteClick() {
        this.modal.openModal();
    }
    async deleteRoom() {
        try {
            this.isLoading = true;
            let oldRooms = [...this.bookingEvent.rooms];
            oldRooms = oldRooms.filter(room => room.identifier !== this.item.identifier);
            const body = {
                assign_units: true,
                check_in: true,
                is_pms: true,
                is_direct: true,
                booking: {
                    booking_nbr: this.bookingEvent.booking_nbr,
                    from_date: this.bookingEvent.from_date,
                    to_date: this.bookingEvent.to_date,
                    remark: this.bookingEvent.remark,
                    property: this.bookingEvent.property,
                    source: this.bookingEvent.source,
                    currency: this.bookingEvent.currency,
                    arrival: this.bookingEvent.arrival,
                    guest: this.bookingEvent.guest,
                    rooms: oldRooms,
                },
            };
            console.log('body:', body);
            const { data } = await axios.axios.post(`/DoReservation`, body);
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            this.modal.closeModal();
            this.deleteFinished.emit(this.item.identifier);
        }
        catch (error) {
        }
        finally {
            this.isLoading = false;
        }
    }
    formatVariation({ adult_nbr, child_nbr }, { infant_nbr }) {
        // Adjust child number based on infants
        const adjustedChildNbr = child_nbr;
        // Define labels based on singular/plural rules
        const adultLabel = adult_nbr > 1 ? locales_store.locales.entries.Lcz_Adults.toLowerCase() : locales_store.locales.entries.Lcz_Adult.toLowerCase();
        const childLabel = adjustedChildNbr > 1 ? locales_store.locales.entries.Lcz_Children.toLowerCase() : locales_store.locales.entries.Lcz_Child.toLowerCase();
        const infantLabel = infant_nbr > 1 ? locales_store.locales.entries.Lcz_Infants.toLowerCase() : locales_store.locales.entries.Lcz_Infant.toLowerCase();
        // Construct parts with the updated child number
        const parts = [`${adult_nbr} ${adultLabel}`, adjustedChildNbr ? `${adjustedChildNbr} ${childLabel}` : '', infant_nbr ? `${infant_nbr} ${infantLabel}` : ''];
        // Join non-empty parts with spaces
        return parts.filter(Boolean).join('&nbsp&nbsp&nbsp&nbsp');
    }
    getBedName() {
        var _a;
        const bed = this.bedPreferences.find(p => p.CODE_NAME === this.item.bed_preference.toString());
        if (!bed) {
            throw new Error(`bed with code ${this.item.bed_preference} not found`);
        }
        return (_a = bed[`CODE_VALUE_${this.language}`]) !== null && _a !== void 0 ? _a : bed.CODE_VALUE_EN;
    }
    render() {
        var _a, _b;
        return (index.h(index.Host, { key: '56591ff6f36ba202075d5343d3f9cd6372a4cc70', class: "p-1 d-flex m-0" }, index.h("ir-button", { key: '82020f350b874a892482d4775acae626b43ce552', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": `#roomCollapse-${(_a = this.item.identifier) === null || _a === void 0 ? void 0 : _a.split(' ').join('')}`, "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "myCollapse", class: "mr-1", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } }), index.h("div", { key: '9d1548fa3b0486d284679e993aa345a01b19f19b', class: "flex-fill m-0 " }, index.h("div", { key: '04fb6a9c406798c15e6d607282f0dd7326c72901', class: "d-flex align-items-start justify-content-between sm-mb-1" }, index.h("p", { key: '4035110dee2e463aea290b544058db9085d510c9', class: "m-0 p-0" }, index.h("span", { key: '3a91cc977803a1411befe0cb1a8f702226cb4e9a', class: "m-0 p-0", style: { fontWeight: '600' } }, this.myRoomTypeFoodCat || '', ' '), ' ', this.mealCodeName, " ", this.item.rateplan.is_non_refundable && ` - ${locales_store.locales.entries.Lcz_NonRefundable}`, ' '), index.h("div", { key: '3d65013d072635d0af768253f86f4292957e936c', class: "d-flex m-0 p-0 align-items-center room_actions_btns" }, index.h("span", { key: '2ad7afb34798a1a962b33cc6aa4ac3a559f082d1', class: "p-0 m-0 font-weight-bold" }, utils.formatAmount(this.currency, this.item['gross_total'])), this.hasRoomEdit && this.isEditable && (index.h("ir-button", { key: 'fdbb24cdf7597aaef834f02cc135acec77373bbb', id: `roomEdit-${this.item.identifier}`, variant: "icon", icon_name: "edit",
            // class="mx-1"
            style: colorVariants.secondary, onClickHandler: this.handleEditClick.bind(this) })), this.hasRoomDelete && this.isEditable && (index.h("ir-button", { key: '3b77d9014d2849522e9e14dc3ae15f5141d5659d', variant: "icon", onClickHandler: this.handleDeleteClick.bind(this), id: `roomDelete-${this.item.identifier}`, icon_name: "trash", style: colorVariants.danger })))), index.h("div", { key: '3ae6ee74d89d173ec3b81989a5f29dfa2b04d9b6', class: "d-flex align-items-center sm-mb-1" }, index.h("ir-date-view", { key: '1fd6195ec42b396ab0c6cf34bd4a254a867e9471', class: "mr-1", from_date: this.item.from_date, to_date: this.item.to_date, showDateDifference: false }), this.hasCheckIn && index.h("ir-button", { key: '6c3294b0361dd76b4c185ea2f9aa598862c81f84', id: "checkin", icon: "", class: "mr-1", btn_color: "info", size: "sm", text: "Check in" }), this.hasCheckOut && index.h("ir-button", { key: '4f1d2c968447a2edc8e81bdcbb92683a959acb06', id: "checkout", icon: "", btn_color: "info", size: "sm", text: "Check out" })), !calendarData.isSingleUnit(this.item.roomtype.id) && calendarData.calendar_data.is_frontdesk_enabled && this.item.unit && (index.h("div", { key: 'a39dbc185edfb04869d346cb1b0007ee072b1789', class: 'd-flex justify-content-end' }, index.h("span", { key: '2446198e516479025565f843ef09bf3f827a482d', class: `light-blue-bg ${this.hasCheckIn || this.hasCheckOut ? 'mr-2' : ''} ` }, this.item.unit.name))), index.h("div", { key: '1f964d2eaf9028ed515cb1c45b9d570df79abb9c' }, index.h("span", { key: 'ce271384d18d5de5a830401bdd62e257fbb9f3fc', class: "mr-1" }, `${this.item.guest.first_name || ''} ${this.item.guest.last_name || ''}`), this.item.rateplan.selected_variation.adult_nbr > 0 && (index.h("span", { key: '018270f5f4d2c9e77b6135a982c2f7fe1d507e97', class: "mr-1", innerHTML: this.formatVariation(this.item.rateplan.selected_variation, this.item.occupancy) }, ' ')), this.item.bed_preference && index.h("span", { key: '76ed989f2134aaf8428e5ccb96ab4b99832bf35f' }, "(", this.getBedName(), ")")), index.h("div", { key: '9588c53851eba78ccf38d836c7bb26eb51930620', class: "collapse", id: `roomCollapse-${(_b = this.item.identifier) === null || _b === void 0 ? void 0 : _b.split(' ').join('')}` }, index.h("div", { key: 'e77305e0278891bbdaabf0679b3d3dc225cc299e', class: "d-flex sm-mb-1 sm-mt-1" }, index.h("div", { key: '5d97bb9aa2bae2f1a214f3ed09e0e9a8c3737819', class: " sm-padding-top" }, index.h("p", { key: '60ef1894837f22bb3ae1790cbf447342c65d1263', class: "sm-padding-right", style: { fontWeight: '600' } }, `${locales_store.locales.entries.Lcz_Breakdown}:`)), index.h("div", { key: '501ced9cea6aad5097e5dc9c4cb5bd23f4b56b67', class: 'flex-fill' }, index.h("table", { key: '78319a34e48782546c7ed4108a9f813f5ec32266' }, this.item.days.length > 0 &&
            this.item.days.map(item => {
                return (index.h("tr", null, index.h("td", { class: 'pr-2 text-right' }, functions._getDay(item.date)), index.h("td", { class: "text-right" }, utils.formatAmount(this.currency, item.amount)), item.cost > 0 && item.cost !== null && index.h("td", { class: "pl-2 text-left night-cost" }, utils.formatAmount(this.currency, item.cost))));
            }), index.h("tr", { key: 'e8df4d101a9b111ba38d962e2bc62199f393f6ce', class: '' }, index.h("th", { key: 'a0882d7e88e046ecbbcadf5359702e123e5c63d3', class: "text-right pr-2 subtotal_row" }, locales_store.locales.entries.Lcz_SubTotal), index.h("th", { key: '0beafb0cc7f8ec44611229d18106eeac341d82b7', class: "text-right subtotal_row" }, utils.formatAmount(this.currency, this.item.total)), this.item.gross_cost > 0 && this.item.gross_cost !== null && index.h("th", { key: 'd263b69d2323c76567a5c168a8d322d36cb8aafb', class: "pl-2 text-right night-cost" }, utils.formatAmount(this.currency, this.item.cost))), this.bookingEvent.is_direct ? (index.h(index.Fragment, null, (() => {
            const filtered_data = calendarData.calendar_data.taxes.filter(tx => tx.pct > 0);
            return filtered_data.map(d => {
                return (index.h("tr", null, index.h("td", { class: "text-right pr-2" }, d.is_exlusive ? locales_store.locales.entries.Lcz_Excluding : locales_store.locales.entries.Lcz_Including, " ", d.name, " (", d.pct, "%)"), index.h("td", { class: "text-right" }, utils.formatAmount(this.currency, (this.item.total * d.pct) / 100)), this.item.gross_cost > 0 && this.item.gross_cost !== null && (index.h("td", { class: "pl-2 text-right night-cost" }, utils.formatAmount(this.currency, (this.item.cost * d.pct) / 100)))));
            });
        })())) : (index.h(index.Fragment, null, (() => {
            const filtered_data = this.item.ota_taxes.filter(tx => tx.amount > 0);
            return filtered_data.map(d => {
                return (index.h("tr", null, index.h("td", { class: "text-right pr-2" }, d.is_exlusive ? locales_store.locales.entries.Lcz_Excluding : locales_store.locales.entries.Lcz_Including, " ", d.name), index.h("td", { class: "text-right" }, d.currency.symbol, d.amount)));
            });
        })()))))), this.bookingEvent.is_direct && (index.h(index.Fragment, { key: '85186d3f79a284f997c8bc02eeb1692521d9a418' }, this.item.rateplan.cancelation && (index.h("ir-label", { key: 'ac79ed109ad3f0f4818147d085d640f2a470be42', labelText: `${locales_store.locales.entries.Lcz_Cancellation}:`, display: "inline", content: this.item.rateplan.cancelation || '', renderContentAsHtml: true })), this.item.rateplan.guarantee && (index.h("ir-label", { key: '60a03f05eefec3dc971e3ac9ef8d8d96a1f037e3', labelText: `${locales_store.locales.entries.Lcz_Guarantee}:`, display: "inline", content: this.item.rateplan.guarantee || '', renderContentAsHtml: true })))))), index.h("ir-modal", { key: '1fd22f10f66f5eaa3293ab59c6f2c96a4c4514af', autoClose: false, ref: el => (this.modal = el), isLoading: this.isLoading, onConfirmModal: this.deleteRoom.bind(this), iconAvailable: true, icon: "ft-alert-triangle danger h1", leftBtnText: locales_store.locales.entries.Lcz_Cancel, rightBtnText: locales_store.locales.entries.Lcz_Delete, leftBtnColor: "secondary", rightBtnColor: "danger", modalTitle: locales_store.locales.entries.Lcz_Confirmation, modalBody: `${locales_store.locales.entries['Lcz_AreYouSureDoYouWantToRemove ']} ${this.item.roomtype.name} ${this.item.unit ? this.item.unit.name : ''} ${locales_store.locales.entries.Lcz_FromThisBooking}` })));
    }
    get element() { return index.getElement(this); }
    static get watchers() { return {
        "bookingEvent": ["handleBookingEventChange"]
    }; }
};
IrRoom.style = IrRoomStyle0;

const irRoomNightsCss = ".sc-ir-room-nights-h{display:block;box-sizing:border-box;margin:0;position:relative}.loading-container.sc-ir-room-nights{position:relative;height:100%;width:100%;display:flex;align-items:center;justify-content:center}.close-icon.sc-ir-room-nights{position:absolute;top:18px;right:33px;outline:none}.close.sc-ir-room-nights{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:0.5;padding:0;background-color:transparent;border:0;appearance:none}.card.sc-ir-room-nights{top:0;z-index:1000}.card-title.sc-ir-room-nights{border-bottom:1px solid #e4e5ec;width:100%}.irfontgreen.sc-ir-room-nights{color:#0e930e}.currency.sc-ir-room-nights{display:block;position:absolute;margin:0;padding:0;height:auto;left:10px}.rate-input.sc-ir-room-nights{font-size:14px;line-height:0;padding:0;height:0;border-left:0;border-radius:0.25rem !important}.rate-input-container.sc-ir-room-nights{display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;flex:1}.new-currency.sc-ir-room-nights{color:#3b4781;border:1px solid #cacfe7;font-size:0.975rem;height:2rem;background:rgb(255, 255, 255);padding-right:0 !important;border-right:0;border-top-right-radius:0;border-bottom-right-radius:0;transition:border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}.input-group-prepend.sc-ir-room-nights span[data-state='focus'].sc-ir-room-nights{border-color:var(--blue)}.input-group-prepend.sc-ir-room-nights span[data-disabled].sc-ir-room-nights{background-color:#eceff1;border-color:rgba(118, 118, 118, 0.3)}.rateInputBorder.sc-ir-room-nights{padding-left:5px !important;padding-right:5px !important;border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}";
const IrRoomNightsStyle0 = irRoomNightsCss;

const IrRoomNights = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeRoomNightsDialog = index.createEvent(this, "closeRoomNightsDialog", 7);
        this.bookingService = new booking_service.BookingService();
        this.bookingNumber = undefined;
        this.propertyId = undefined;
        this.language = undefined;
        this.identifier = undefined;
        this.toDate = undefined;
        this.fromDate = undefined;
        this.pool = undefined;
        this.ticket = undefined;
        this.defaultDates = undefined;
        this.bookingEvent = undefined;
        this.selectedRoom = undefined;
        this.rates = [];
        this.isLoading = false;
        this.initialLoading = false;
        this.inventory = null;
        this.isEndDateBeforeFromDate = false;
        this.defaultTotalNights = 0;
        this.isInputFocused = -1;
        this.dates = { from_date: new Date(), to_date: new Date() };
    }
    componentWillLoad() {
        this.dates = { from_date: new Date(this.fromDate), to_date: new Date(this.toDate) };
        this.init();
    }
    isButtonDisabled() {
        return this.isLoading || this.rates.some(rate => rate.amount === -1) || this.inventory === 0 || this.inventory === null;
    }
    async init() {
        var _a;
        try {
            const { from_date } = this.defaultDates;
            if (moment.hooks(from_date, 'YYYY-MM-DD').isBefore(moment.hooks(this.fromDate, 'YYYY-MM-DD'))) {
                this.dates.from_date = new Date(from_date);
            }
            else {
                this.dates.from_date = new Date(this.fromDate);
            }
            this.dates.to_date = new Date(this.toDate);
            this.bookingEvent = await this.bookingService.getExposedBooking(this.bookingNumber, this.language);
            if (this.bookingEvent) {
                const filteredRooms = this.bookingEvent.rooms.filter(room => room.identifier === this.identifier);
                this.selectedRoom = filteredRooms[0];
                const lastDay = (_a = this.selectedRoom) === null || _a === void 0 ? void 0 : _a.days[this.selectedRoom.days.length - 1];
                //let first_rate = this.selectedRoom.days[0].amount;
                if (moment.hooks(this.toDate).add(-1, 'days').isSame(moment.hooks(lastDay.date))) {
                    console.log('here1');
                    const amount = await this.fetchBookingAvailability(this.fromDate, this.selectedRoom.days[0].date, this.selectedRoom.rateplan.id);
                    const newDatesArr = utils.getDaysArray(this.selectedRoom.days[0].date, this.fromDate);
                    this.isEndDateBeforeFromDate = true;
                    this.rates = [
                        ...newDatesArr.map(day => ({
                            amount: amount / newDatesArr.length,
                            date: day,
                            cost: null,
                        })),
                        ...this.selectedRoom.days,
                    ];
                    this.defaultTotalNights = this.rates.length - this.selectedRoom.days.length;
                }
                else {
                    console.log('here2');
                    console.log(lastDay);
                    const amount = await this.fetchBookingAvailability(this.bookingEvent.to_date, moment.hooks(this.toDate, 'YYYY-MM-DD').format('YYYY-MM-DD'), this.selectedRoom.rateplan.id);
                    const newDatesArr = utils.getDaysArray(lastDay.date, this.toDate);
                    this.rates = [
                        ...this.selectedRoom.days,
                        ...newDatesArr.map(day => ({
                            amount: amount / newDatesArr.length,
                            date: day,
                            cost: null,
                        })),
                    ];
                }
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    handleInput(event, index) {
        let inputValue = event;
        let days = [...this.rates];
        inputValue = inputValue.replace(/[^0-9.]/g, '');
        if (inputValue === '') {
            days[index].amount = -1;
        }
        else {
            if (!isNaN(Number(inputValue))) {
                days[index].amount = Number(inputValue);
            }
        }
        this.rates = days;
    }
    async fetchBookingAvailability(from_date, to_date, rate_plan_id) {
        var _a;
        try {
            this.initialLoading = true;
            const bookingAvailability = await this.bookingService.getBookingAvailability({
                from_date,
                to_date,
                propertyid: this.propertyId,
                adultChildCount: {
                    adult: this.selectedRoom.rateplan.selected_variation.adult_nbr,
                    child: this.selectedRoom.rateplan.selected_variation.child_nbr,
                },
                language: this.language,
                currency: this.bookingEvent.currency,
                room_type_ids: [this.selectedRoom.roomtype.id],
                rate_plan_ids: [rate_plan_id],
            });
            console.log(bookingAvailability[0], rate_plan_id);
            this.inventory = bookingAvailability[0].inventory;
            const rate_plan = bookingAvailability[0].rateplans.find(rate => rate.id === rate_plan_id);
            if (!rate_plan || !rate_plan.variations) {
                this.inventory = null;
                return null;
            }
            const selected_variation = (_a = rate_plan.variations) === null || _a === void 0 ? void 0 : _a.find(variation => variation.adult_nbr === this.selectedRoom.rateplan.selected_variation.adult_nbr && variation.child_nbr === this.selectedRoom.rateplan.selected_variation.child_nbr);
            if (!selected_variation) {
                return null;
            }
            return selected_variation.discounted_gross_amount;
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.initialLoading = false;
        }
    }
    renderInputField(index$1, currency_symbol, day) {
        return (index.h("div", { class: "col-3 ml-1 position-relative  m-0 p-0 rate-input-container" }, index.h("ir-price-input", { value: day.amount > 0 ? day.amount.toString() : '', disabled: this.inventory === 0 || this.inventory === null, currency: currency_symbol, "aria-label": "rate", "aria-describedby": "rate cost", onTextChange: e => this.handleInput(e.detail, index$1) })));
    }
    renderReadOnlyField(currency_symbol, day) {
        return index.h("p", { class: "col-9 ml-1 m-0 p-0" }, `${currency_symbol}${Number(day.amount).toFixed(2)}`);
    }
    renderRateFields(index, currency_symbol, day) {
        if (this.isEndDateBeforeFromDate) {
            if (index < this.defaultTotalNights) {
                return this.renderInputField(index, currency_symbol, day);
            }
            else {
                return this.renderReadOnlyField(currency_symbol, day);
            }
        }
        else {
            return index < this.selectedRoom.days.length ? this.renderReadOnlyField(currency_symbol, day) : this.renderInputField(index, currency_symbol, day);
        }
    }
    renderDates() {
        var _a;
        const currency_symbol = this.bookingEvent.currency.symbol;
        // const currency_symbol = getCurrencySymbol(this.bookingEvent.currency.code);
        return (index.h("div", { class: 'mt-2 m-0' }, (_a = this.rates) === null || _a === void 0 ? void 0 : _a.map((day, index$1) => (index.h("div", { class: 'row m-0 mt-1 align-items-center' }, index.h("p", { class: 'col-2 m-0 p-0' }, utils.convertDatePrice(day.date)), this.renderRateFields(index$1, currency_symbol, day))))));
    }
    async handleRoomConfirmation() {
        try {
            this.isLoading = true;
            let oldRooms = [...this.bookingEvent.rooms];
            let selectedRoomIndex = oldRooms.findIndex(room => room.identifier === this.identifier);
            if (selectedRoomIndex === -1) {
                throw new Error('Invalid Pool');
            }
            oldRooms[selectedRoomIndex] = Object.assign(Object.assign({}, oldRooms[selectedRoomIndex]), { days: this.rates, to_date: moment.hooks(this.dates.to_date).format('YYYY-MM-DD'), from_date: moment.hooks(this.dates.from_date).format('YYYY-MM-DD') });
            const body = {
                assign_units: true,
                check_in: true,
                is_pms: true,
                is_direct: true,
                pickup_info: this.bookingEvent.pickup_info,
                extra_services: this.bookingEvent.extra_services,
                booking: {
                    booking_nbr: this.bookingNumber,
                    from_date: moment.hooks(this.dates.from_date).format('YYYY-MM-DD'),
                    to_date: moment.hooks(this.dates.to_date).format('YYYY-MM-DD'),
                    remark: this.bookingEvent.remark,
                    property: this.bookingEvent.property,
                    source: this.bookingEvent.source,
                    currency: this.bookingEvent.currency,
                    arrival: this.bookingEvent.arrival,
                    guest: this.bookingEvent.guest,
                    rooms: oldRooms,
                },
            };
            await this.bookingService.doReservation(body);
            this.closeRoomNightsDialog.emit({ type: 'confirm', pool: this.pool });
        }
        catch (error) {
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        var _a, _b, _c;
        if (!this.bookingEvent) {
            return (index.h("div", { class: "loading-container" }, index.h("ir-loading-screen", null)));
        }
        console.log(this.inventory);
        return (index.h(index.Host, null, index.h("div", { class: "card position-sticky mb-0 shadow-none p-0 " }, index.h("div", { class: "d-flex mt-2 align-items-center justify-content-between " }, index.h("h3", { class: "card-title text-left pb-1 font-medium-2 px-2" }, locales_store.locales.entries.Lcz_AddingRoomNightsTo, " ", (_b = (_a = this.selectedRoom) === null || _a === void 0 ? void 0 : _a.roomtype) === null || _b === void 0 ? void 0 :
            _b.name, " ", ((_c = this.selectedRoom) === null || _c === void 0 ? void 0 : _c.unit).name), index.h("button", { type: "button", class: "close close-icon", onClick: () => this.closeRoomNightsDialog.emit({ type: 'cancel', pool: this.pool }) }, index.h("ir-icon", { icon: "ft-x", class: 'm-0' })))), index.h("section", { class: 'text-left px-2' }, index.h("p", { class: 'font-medium-1' }, `${locales_store.locales.entries.Lcz_Booking}#`, " ", this.bookingNumber), this.initialLoading ? (index.h("p", { class: 'mt-2 text-secondary' }, locales_store.locales.entries['Lcz_CheckingRoomAvailability '])) : (index.h(index.Fragment, null, index.h("p", { class: 'font-weight-bold font-medium-1' }, `${utils.formatDate(moment.hooks(this.dates.from_date).format('YYYY-MM-DD'), 'YYYY-MM-DD')} - ${utils.formatDate(moment.hooks(this.dates.to_date).format('YYYY-MM-DD'), 'YYYY-MM-DD')}`), index.h("p", { class: 'font-medium-1 mb-0' }, `${this.selectedRoom.rateplan.name}`, " ", this.selectedRoom.rateplan.is_non_refundable && index.h("span", { class: 'irfontgreen' }, locales_store.locales.entries.Lcz_NonRefundable)), (this.inventory === 0 || this.inventory === null) && index.h("p", { class: "font-medium-1 text danger" }, locales_store.locales.entries.Lcz_NoAvailabilityForAdditionalNights), this.selectedRoom.rateplan.custom_text && index.h("p", { class: 'text-secondary mt-0' }, this.selectedRoom.rateplan.custom_text), this.renderDates()))), index.h("section", { class: 'd-flex align-items-center mt-2 px-2' }, index.h("ir-button", { btn_color: "secondary", btn_disabled: this.isLoading, text: locales_store.locales === null || locales_store.locales === void 0 ? void 0 : locales_store.locales.entries.Lcz_Cancel, class: "full-width", btn_styles: "justify-content-center", onClickHandler: () => this.closeRoomNightsDialog.emit({ type: 'cancel', pool: this.pool }) }), this.inventory > 0 && this.inventory !== null && (index.h("ir-button", { isLoading: this.isLoading, text: locales_store.locales === null || locales_store.locales === void 0 ? void 0 : locales_store.locales.entries.Lcz_Confirm, btn_disabled: this.isButtonDisabled(), class: "ml-1 full-width", btn_styles: "justify-content-center", onClickHandler: this.handleRoomConfirmation.bind(this) })))));
    }
};
IrRoomNights.style = IrRoomNightsStyle0;

const irSelectCss = ".border-theme.sc-ir-select{border:1px solid #cacfe7}@keyframes bounce{0%,100%{transform:scale(1);animation-timing-function:cubic-bezier(0.8, 0, 1, 1)}50%{transform:scale(1.2);animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}}.bounce-3.sc-ir-select{animation:bounce 1s 1}";
const IrSelectStyle0 = irSelectCss;

const IrSelect = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.selectChange = index.createEvent(this, "selectChange", 7);
        this.count = 0;
        this.name = undefined;
        this.data = undefined;
        this.label = '<label>';
        this.selectStyles = undefined;
        this.selectContainerStyle = undefined;
        this.selectedValue = null;
        this.required = undefined;
        this.LabelAvailable = true;
        this.firstOption = 'Select';
        this.selectStyle = true;
        this.showFirstOption = true;
        this.submited = false;
        this.size = 'md';
        this.textSize = 'md';
        this.labelPosition = 'left';
        this.labelBackground = null;
        this.labelColor = 'dark';
        this.labelBorder = 'theme';
        this.labelWidth = 3;
        this.select_id = v4.v4();
        this.initial = true;
        this.valid = false;
    }
    watchHandler(newValue) {
        if (newValue !== null && this.required) {
            this.valid = true;
        }
    }
    watchHandler2(newValue) {
        if (newValue && this.required) {
            this.initial = false;
        }
    }
    handleButtonAnimation(e) {
        console.log(e.detail, this.select_id, e.detail === this.select_id);
        if (!this.selectEl || e.detail !== this.select_id) {
            return;
        }
        console.log('first1');
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.selectEl.classList.add('border-danger');
    }
    componentwillload() { }
    disconnectedCallback() { }
    handleSelectChange(event) {
        this.selectEl.classList.remove('border-danger');
        if (this.required) {
            this.initial = false;
            this.valid = event.target.checkValidity();
            this.selectedValue = event.target.value;
            this.selectChange.emit(this.selectedValue);
        }
        else {
            this.selectedValue = event.target.value;
            this.selectChange.emit(this.selectedValue);
        }
    }
    render() {
        let className = 'form-control';
        let label = (index.h("div", { key: 'fb729cbf454cc787f0cadad7bbe735f2e4fea448', class: `input-group-prepend col-${this.labelWidth} p-0 text-${this.labelColor}` }, index.h("label", { key: 'e7c42a3748059bfa9e610562bffe1f6ddc72bdd2', htmlFor: this.select_id, class: `input-group-text ${this.labelPosition === 'right' ? 'justify-content-end' : this.labelPosition === 'center' ? 'justify-content-center' : ''} ${this.labelBackground ? 'bg-' + this.labelBackground : ''} flex-grow-1 text-${this.labelColor} border-${this.labelBorder === 'none' ? 0 : this.labelBorder} ` }, this.label, this.required ? '*' : '')));
        if (this.selectStyle === false) {
            className = '';
        }
        if (this.required && !this.valid && !this.initial) {
            className = `${className} border-danger`;
        }
        if (!this.LabelAvailable) {
            label = '';
        }
        return (index.h("div", { key: '3335c35e23f2bcbcbc3c0580a1337bd1baab756c', class: `form-group m-0 ${this.selectContainerStyle}` }, index.h("div", { key: '462962f87c736fa764e30e8abad2b59772054f4b', class: "input-group row m-0" }, label, index.h("select", { key: '9be4f8cbb921e7d62517bcb06cdf90bc368730fa', ref: el => (this.selectEl = el), id: this.select_id, class: `${this.selectStyles} ${className} form-control-${this.size} text-${this.textSize} col-${this.LabelAvailable ? 12 - this.labelWidth : 12}`, onInput: this.handleSelectChange.bind(this), required: this.required }, this.showFirstOption && index.h("option", { key: '374a4f78aa187eeab255ccf930962264528956e7', value: '' }, this.firstOption), this.data.map(item => {
            if (this.selectedValue === item.value) {
                return (index.h("option", { selected: true, value: item.value }, item.text));
            }
            else {
                return index.h("option", { value: item.value }, item.text);
            }
        })))));
    }
    static get watchers() { return {
        "selectedValue": ["watchHandler"],
        "submited": ["watchHandler2"]
    }; }
};
IrSelect.style = IrSelectStyle0;

const irSidebarCss = ".backdrop{position:fixed;top:0;left:0;width:100%;height:100vh;cursor:pointer;background:rgba(0, 0, 0, 0.5);z-index:99;transition:all 0.5s;opacity:0;pointer-events:none;transition:all 0.5s}.backdrop.active{opacity:1;pointer-events:all}.sidebar-right{position:fixed;top:0;right:-120%;bottom:0;width:var(--sidebar-width, 40rem);max-width:100%;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);transition:all 0.5s;z-index:100;overflow-y:hidden;color:var(--sidebar-color, #000);background-color:var(--sidebar-backgound, #fff);padding:var(--ir-sidebar-padding, 0.5rem 0)}.sidebar-right.active{right:0;overflow-y:auto}.sidebar-left{position:fixed;top:0;left:-100%;bottom:0;width:var(--sidebar-width, 30rem);max-width:100%;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);transition:all 0.5s;z-index:200;overflow-y:hidden;color:var(--sidebar-color, #000);background:var(--sidebar-backgound, #fff);padding:var(--ir-sidebar-padding, 0.5rem 0)}.sidebar-title{display:flex;align-items:center;justify-content:space-between;padding:0 1rem;border-bottom:1px solid #e4e5ec}.sidebar-title p{font-weight:500;font-size:1.2rem}.sidebar-left.active{left:0;overflow-y:scroll}.close{position:absolute;top:0.5rem;right:1rem;width:1rem;height:1rem;cursor:pointer}";
const IrSidebarStyle0 = irSidebarCss;

const IrSidebar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.irSidebarToggle = index.createEvent(this, "irSidebarToggle", 7);
        this.name = undefined;
        this.side = 'right';
        this.showCloseButton = true;
        this.open = false;
        this.sidebarStyles = undefined;
        this.label = undefined;
    }
    applyStyles() {
        for (const property in this.sidebarStyles) {
            if (this.sidebarStyles.hasOwnProperty(property)) {
                this.sidebarRef.style[property] = this.sidebarStyles[property];
            }
        }
    }
    handleSidebarStylesChange() {
        this.applyStyles();
    }
    componentWillLoad() {
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    componentDidLoad() {
        // If esc key is pressed, close the modal
        this.applyStyles();
        document.addEventListener('keydown', this.handleKeyDown);
    }
    handleKeyDown(e) {
        if (e.key === 'Escape') {
            return this.toggleSidebar();
        }
        else {
            return;
        }
    }
    // Unsubscribe to the event when the component is removed from the DOM
    disconnectedCallback() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }
    async toggleSidebar() {
        this.irSidebarToggle.emit(this.open);
    }
    render() {
        let className = '';
        if (this.open) {
            className = 'active';
        }
        else {
            className = '';
        }
        return [
            index.h("div", { key: 'a727c11f4a7d23d532934e4756fc46386d05acbd', class: `backdrop ${className}`, onClick: () => {
                    this.toggleSidebar();
                } }),
            index.h("div", { key: '692b006e263e66e1f766980c6fe02624e271129e', ref: el => (this.sidebarRef = el), class: `sidebar-${this.side} ${className}` }, this.showCloseButton && (index.h("div", { key: '2fae3bb453dc3f189bf9a117525e64d8ed60a963', class: 'sidebar-title' }, index.h("p", { key: '63cd03c797409ca2c56eaf8fb7a0706365539e10', class: 'p-0 m-0' }, this.label), index.h("div", { key: 'd3cc0e844c8042961a0f0e5a0e19a424555aab4c', class: 'p-0 m-0 sidebar-icon-container' }, index.h("ir-icon", { key: 'ffb620e087e40326f14d90a96737b77e779a6e41', class: "", onIconClickHandler: () => {
                    this.toggleSidebar();
                } }, index.h("svg", { key: '5a5b56e605bcd1174152d0acee14b5f21f580077', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, index.h("path", { key: 'f5380367238235f038484a19a796cafa83c46d30', fill: "#6b6f82", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))))), index.h("slot", { key: '161a8f60e4ed46d538cfab6060630ab7058a86e9', name: "sidebar-body" })),
        ];
    }
    static get watchers() { return {
        "sidebarStyles": ["handleSidebarStylesChange"]
    }; }
};
IrSidebar.style = IrSidebarStyle0;

const irSpinnerCss = ":host{width:var(--ir-spinner-size, 1.25rem);height:var(--ir-spinner-size, 1.25rem);border:var(--ir-spinner-border-width, 2.5px) solid var(--ir-spinner-color, #3f3f3f);border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
const IrSpinnerStyle0 = irSpinnerCss;

const IrSpinner = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.size = undefined;
        this.borderWidth = undefined;
        this.unit = 'rem';
        this.color = undefined;
    }
    componentWillLoad() {
        this.initStyles();
    }
    handleSpinnerSizeChange() {
        this.initStyles();
    }
    handleSpinnerBorderWidthChange() {
        this.initStyles();
    }
    handleSpinnerUnitChange() {
        this.initStyles();
    }
    handleSpinnerColorChange() {
        this.initStyles();
    }
    initStyles() {
        if (this.size) {
            this.applyCssElement(`${this.size}${this.unit}`, '--ir-spinner-size');
        }
        if (this.borderWidth) {
            this.applyCssElement(`${this.borderWidth}${this.unit}`, '--ir-spinner-size');
        }
        if (this.color) {
            this.applyCssElement(`${this.color}`, '--ir-spinner-color');
        }
    }
    applyCssElement(value, key) {
        this.el.style.setProperty(key, value);
    }
    render() {
        return index.h(index.Host, { key: 'b7f24518b4e8d3abc743f9cebf236c9707f3d218' });
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "size": ["handleSpinnerSizeChange"],
        "borderWidth": ["handleSpinnerBorderWidthChange"],
        "unit": ["handleSpinnerUnitChange"],
        "color": ["handleSpinnerColorChange"]
    }; }
};
IrSpinner.style = IrSpinnerStyle0;

const irTextareaCss = ".prepend-textarea.sc-ir-textarea{padding:0 !important}.ta-prepend-text.sc-ir-textarea{width:100%}";
const IrTextareaStyle0 = irTextareaCss;

const IrTextArea = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.textChange = index.createEvent(this, "textChange", 7);
        this.rows = 3;
        this.cols = 5;
        this.text = '';
        this.label = '<label>';
        this.placeholder = '<placeholder>';
        this.value = '';
        this.maxLength = 250;
        this.textareaClassname = undefined;
        this.variant = 'default';
        this.labelWidth = 3;
        this.error = false;
    }
    handleAriaInvalidChange(newValue) {
        this.error = newValue === 'true';
    }
    connectedCallback() { }
    disconnectedCallback() { }
    render() {
        if (this.variant === 'prepend') {
            return (index.h("fieldset", { class: "input-group" }, index.h("div", { class: `input-group-prepend col-${this.labelWidth} prepend-textarea` }, index.h("span", { class: "input-group-text ta-prepend-text" }, this.label)), index.h("textarea", { value: this.value, class: `form-control`, style: { height: '7rem' }, maxLength: this.maxLength, onChange: e => this.textChange.emit(e.target.value), "aria-label": this.label })));
        }
        return (index.h("div", { class: 'form-group' }, index.h("label", null, this.label), index.h("textarea", { maxLength: this.maxLength, rows: this.rows, value: this.value, class: `form-control ${this.textareaClassname} ${this.error ? 'border-danger' : ''}`, placeholder: this.placeholder, onInput: e => this.textChange.emit(e.target.value) })));
    }
    static get watchers() { return {
        "aria-invalid": ["handleAriaInvalidChange"]
    }; }
};
IrTextArea.style = IrTextareaStyle0;

const irTitleCss = ".sc-ir-title-h{padding:0px 0;margin-bottom:20px;display:flex;align-items:center;width:100%}[display-context='sidebar'].sc-ir-title-h{padding:15px 0;justify-content:space-between !important;width:100% !important;border-bottom:1px solid #e4e5ec !important;border-color:#e4e5ec !important}.title-body.sc-ir-title{margin:0;padding:0}@media only screen and (max-width: 641px){.sc-ir-title-h{flex-direction:column;gap:8px;align-items:flex-start}[display-context='sidebar'].sc-ir-title-h{flex-direction:row}}";
const IrTitleStyle0 = irTitleCss;

const IrTitle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeSideBar = index.createEvent(this, "closeSideBar", 7);
        this.label = undefined;
        this.displayContext = 'default';
        this.justifyContent = 'start';
    }
    componentDidLoad() {
        this.el.style.justifyContent = this.justifyContent;
    }
    handleJustifyContentChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.el.style.justifyContent = newValue;
        }
    }
    render() {
        return (index.h(index.Host, { key: 'e1297ecec78af390426bbbca1375d1f8ce9edc78' }, index.h("h4", { key: 'cddb7ea247d9c00915af2c4797ed50ba13d532ad', class: "text-left font-medium-2 py-0 my-0" }, this.label), this.displayContext === 'sidebar' && (index.h("ir-icon", { key: '3be4b719f4880888255625c957243861bfaa52da', class: 'close', onIconClickHandler: () => {
                this.closeSideBar.emit(null);
            } }, index.h("svg", { key: '6206497f19ac3a7e3832c4d0c8dc106b72b9edcd', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, index.h("path", { key: '898334469eb59827b033faeb16dfa24f4c175473', d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), this.displayContext !== 'sidebar' && (index.h("div", { key: 'fe9ba3d1a40bdf4f1a9477e1457a8a3d5554b5dd', class: 'title-body' }, index.h("slot", { key: '48079f28fecd1216618a20dee03cf2a358797ee8', name: "title-body" })))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "justifyContent": ["handleJustifyContentChange"]
    }; }
};
IrTitle.style = IrTitleStyle0;

const irToastCss = "button.sc-ir-toast,p.sc-ir-toast,h3.sc-ir-toast,div.sc-ir-toast{all:unset}.sc-ir-toast-h{--rd-viewport-padding:25px;--rd-success:#2b9a66;position:fixed;bottom:0;right:0;display:flex;flex-direction:column;padding:var(--rd-viewport-padding);gap:10px;max-width:100vw;margin:0;list-style:none;z-index:2147483647;outline:none;pointer-events:none;-webkit-user-select:none;user-select:none}@media (prefers-color-scheme: dark){.sc-ir-toast-h{--rd-success:#33b074}}p.sc-ir-toast{color:hsla(222.2, 84%, 4.9%, 0.8);font-size:13px;line-height:1.3}h1.sc-ir-toast,h2.sc-ir-toast,h3.sc-ir-toast,h4.sc-ir-toast,h5.sc-ir-toast,h6.sc-ir-toast{font-weight:500;color:hsl(222.2, 84%, 4.9%);font-size:15px}[position='top-left'].sc-ir-toast-h{top:0;left:0}[position='top-right'].sc-ir-toast-h{top:0;right:0}[position='bottom-left'].sc-ir-toast-h{bottom:0;left:0}[position='bottom-right'].sc-ir-toast-h{bottom:0;right:0}.icon-container.sc-ir-toast{height:25px;width:25px;border-radius:25px;display:flex;align-items:center;justify-content:center;padding:0;margin:0}.icon-container.sc-ir-toast>svg.sc-ir-toast{margin:0;color:white;stroke-width:5px}.success.sc-ir-toast{background-color:var(--rd-success)}.error.sc-ir-toast{background-color:red}.ToastRoot.sc-ir-toast{background-color:hsl(0, 0%, 100%);border-radius:0.5rem;box-shadow:hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;padding:15px;display:grid;grid-template-areas:'title action' 'description action';grid-template-columns:auto max-content;column-gap:15px;align-items:center;pointer-events:none;opacity:0;border:1px solid hsl(214.3, 31.8%, 91.4%);position:relative}.ToastRoot[data-state='open'].sc-ir-toast{pointer-events:all;animation:slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)}.ToastRoot[data-state='closed'].sc-ir-toast{pointer-events:none;animation:hide 100ms ease-in}@-webkit-keyframes slideIn{from{transform:translateX(var(--rd-offset-width))}to{transform:translateX(0)}}@keyframes slideIn{from{transform:translateX(var(--rd-offset-width))}to{transform:translateX(0)}}.ToastTitle.sc-ir-toast{grid-area:title;font-weight:500;color:hsl(222.2, 84%, 4.9%);font-size:15px}.ToastDescription.sc-ir-toast{grid-area:description;margin:0;margin-top:5px;color:hsla(222.2, 84%, 4.9%, 0.8);font-size:13px;line-height:1.3;overflow:hidden;text-overflow:ellipsis}.ToastAction.sc-ir-toast{grid-area:action}";
const IrToastStyle0 = irToastCss;

const IrToast = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.position = 'bottom-left';
        this.toasts = [];
    }
    onToast(event) {
        const toast = event.detail;
        this.showToast(toast);
    }
    showToast(toast) {
        const toastrOptions = {
            positionClass: 'toast-top-right',
            closeButton: true,
            timeOut: toast.duration || 5000,
        };
        switch (toast.type) {
            case 'success':
                toastr.success(toast.title, '', toastrOptions);
                break;
            case 'error':
                toastr.error(toast.title, '', toastrOptions);
                break;
        }
    }
    render() {
        return index.h(index.Host, { key: 'b7b4b02d8a3b6475f187f032d9a56d673bde8a2f' });
    }
    get element() { return index.getElement(this); }
};
IrToast.style = IrToastStyle0;

const irTooltipCss = ".sc-ir-tooltip-h{position:relative}.tooltip-icon.sc-ir-tooltip{margin:0 5px;padding:0}.tooltip-inner-custom.sc-ir-tooltip{min-width:max-content !important}";
const IrTooltipStyle0 = irTooltipCss;

const IrTooltip = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.message = undefined;
        this.withHtml = true;
        this.customSlot = false;
        this.open = undefined;
    }
    toggleOpen(shouldOpen) {
        if (this.tooltipTimeout) {
            clearTimeout(this.tooltipTimeout);
        }
        if (shouldOpen) {
            this.tooltipTimeout = setTimeout(() => {
                this.open = true;
            }, 300);
        }
        else {
            this.open = false;
        }
    }
    render() {
        return (index.h(index.Host, { key: '807df8d14b69aca83794f106d6e90264e17815bf', class: "m-0 p-0" }, index.h("span", { key: 'd0a76f1e8b94b5496e6357663e29cc65fb78a44d', class: 'm-0 p-0 d-flex align-items-center justify-content-center', onMouseEnter: () => this.toggleOpen(true), onMouseLeave: () => this.toggleOpen(false) }, !this.customSlot ? (
        // <svg data-toggle="tooltip" data-placement="top" xmlns="http://www.w3.org/2000/svg" height="16" width="16" class="tooltip-icon" viewBox="0 0 512 512">
        //   <path
        //     fill="#6b6f82"
        //     d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
        //   />
        // </svg>
        index.h("svg", { xmlns: "http://www.w3.org/2000/svg", class: 'm-0 p-0', height: "16", width: "16", viewBox: "0 0 512 512" }, index.h("path", { fill: "#6b6f82", d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" }))) : (index.h("slot", { name: "tooltip-trigger" }))), this.open && (index.h("div", { key: 'a8abccc4a8d6579fe095ea050c67af81329efd32', class: "tooltip bottom show position-absolute", role: "tooltip" }, index.h("div", { key: '9fe9d1383e8713a73c34732f130e03b041ecd2ef', class: "tooltip-arrow" }), index.h("div", { key: '4f33f089b7d3d92e5dbfbe1c52699f4576271f68', class: `tooltip-inner fit ${this.customSlot && 'tooltip-inner-custom'}` }, index.h("span", { key: '241cd06dff89e2e7a7a9bcbc6cfde3e3ca8a0e2d', innerHTML: this.message }))))));
    }
};
IrTooltip.style = IrTooltipStyle0;

const otaLabelCss = "*.sc-ota-label{margin:0;padding:0}.sc-ota-label-h{display:flex;margin-bottom:5px;gap:5px;width:100%}.label_title.sc-ota-label{min-width:max-content;padding:0;margin:0;font-weight:600}ul.sc-ota-label{margin:0 3px;padding:0;list-style:none;overflow:hidden;width:100%;word-wrap:break-word !important;overflow-wrap:break-word !important}li.sc-ota-label{width:100%;line-height:1.5;margin:0;padding:0;word-wrap:break-word !important;overflow-wrap:break-word !important}button.sc-ota-label{background:white;color:var(--blue);padding:0;margin:0;margin-left:3px;font-size:12px;border:0}button.sc-ota-label:hover{color:#355270}";
const OtaLabelStyle0 = otaLabelCss;

const OtaLabel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.toggleShowAll = () => {
            this.showAll = !this.showAll;
        };
        this.label = undefined;
        this.remarks = undefined;
        this.maxVisibleItems = 3;
        this.showAll = false;
    }
    render() {
        if (!this.remarks) {
            return null;
        }
        const displayedRemarks = this.showAll ? this.remarks : this.remarks.slice(0, this.maxVisibleItems);
        return (index.h(index.Host, null, index.h("p", { class: 'label_title' }, this.label), index.h("ul", null, displayedRemarks.map((remark, index$1) => (index.h("li", { key: v4.v4() }, "- ", remark.statement, ' ', this.remarks.length > this.maxVisibleItems && index$1 === displayedRemarks.length - 1 && (index.h("button", { onClick: this.toggleShowAll }, this.showAll ? locales_store.locales.entries.Lcz_ShowLess : locales_store.locales.entries.Lcz_ShowMore))))))));
    }
};
OtaLabel.style = OtaLabelStyle0;

exports.igl_application_info = IglApplicationInfo;
exports.igl_block_dates_view = IglBlockDatesView;
exports.igl_book_property = IglBookProperty;
exports.igl_book_property_footer = IglBookPropertyFooter;
exports.igl_book_property_header = IglBookPropertyHeader;
exports.igl_booking_event = IglBookingEvent;
exports.igl_booking_event_hover = IglBookingEventHover;
exports.igl_booking_form = IglBookingForm;
exports.igl_booking_overview_page = IglBookingOverviewPage;
exports.igl_cal_body = IglCalBody;
exports.igl_cal_footer = IglCalFooter;
exports.igl_cal_header = IglCalHeader;
exports.igl_date_range = IglDateRange;
exports.igl_legends = IglLegends;
exports.igl_property_booked_by = IglPropertyBookedBy;
exports.igl_rate_plan = IglRatePlan;
exports.igl_room_type = IglRoomType;
exports.igl_tba_booking_view = IglTbaBookingView;
exports.igl_tba_category_view = IglTbaCategoryView;
exports.igl_to_be_assigned = IglToBeAssigned;
exports.igloo_calendar = IglooCalendar;
exports.ir_autocomplete = IrAutocomplete;
exports.ir_booking_details = IrBookingDetails;
exports.ir_booking_extra_note = IrBookingExtraNote;
exports.ir_booking_header = IrBookingHeader;
exports.ir_button = IrButton;
exports.ir_combobox = IrCombobox;
exports.ir_common = IrCommon;
exports.ir_date_picker = IrDatePicker;
exports.ir_date_range = IrDateRange;
exports.ir_date_view = IrDateView;
exports.ir_dialog = IrDialog;
exports.ir_events_log = IrEventsLog;
exports.ir_extra_service = IrExtraService;
exports.ir_extra_service_config = IrExtraServiceConfig;
exports.ir_extra_services = IrExtraServices;
exports.ir_guest_info = GuestInfo;
exports.ir_icon = IrIcon;
exports.ir_icons = IrIcons;
exports.ir_input_text = IrInputText;
exports.ir_interceptor = IrInterceptor;
exports.ir_label = IrLabel;
exports.ir_loading_screen = IrLoadingScreen;
exports.ir_modal = IrModal;
exports.ir_payment_actions = IrPaymentActions;
exports.ir_payment_details = IrPaymentDetails;
exports.ir_phone_input = IrPhoneInput;
exports.ir_pickup = IrPickup;
exports.ir_pickup_view = IrPickupView;
exports.ir_pms_logs = IrPmsLogs;
exports.ir_popover = IrPopover;
exports.ir_price_input = IrPriceInput;
exports.ir_reservation_information = IrReservationInformation;
exports.ir_room = IrRoom;
exports.ir_room_nights = IrRoomNights;
exports.ir_select = IrSelect;
exports.ir_sidebar = IrSidebar;
exports.ir_spinner = IrSpinner;
exports.ir_textarea = IrTextArea;
exports.ir_title = IrTitle;
exports.ir_toast = IrToast;
exports.ir_tooltip = IrTooltip;
exports.ota_label = OtaLabel;

//# sourceMappingURL=igl-application-info_63.cjs.entry.js.map