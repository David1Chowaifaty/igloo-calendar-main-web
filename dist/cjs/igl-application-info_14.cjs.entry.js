'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4fe8bc8a.js');
const booking_store = require('./booking.store-59ea623c.js');
const locales_store = require('./locales.store-0cac7e5d.js');
const calendarData = require('./calendar-data-004d3283.js');
const utils = require('./utils-44bb8561.js');
const variation_service = require('./variation.service-791a6fad.js');
const v4 = require('./v4-9b297151.js');
const booking_service = require('./booking.service-08b2e7ab.js');
const moment = require('./moment-1780b03a.js');
const irInterceptor_store = require('./ir-interceptor.store-77ca6836.js');
const booking_service$1 = require('./booking.service-08b2e7ab2.js');
require('./calendar-dates.store-1cc2d53b.js');
require('./index-467172e1.js');
require('./axios-6e678d52.js');

const iglApplicationInfoCss = ".sc-igl-application-info-h{display:block}.rate_amount.sc-igl-application-info{display:none;padding:0;margin:0}.booking-header.sc-igl-application-info{display:flex;align-items:center;justify-content:space-between;margin-bottom:0.5rem;gap:0.5rem}.non-ref-span.sc-igl-application-info{font-size:12px;color:var(--green)}.booking-roomtype-title.sc-igl-application-info{font-size:1.25rem;margin-right:0.5rem;margin:0;padding:0}.booking-details-container.sc-igl-application-info{display:flex;align-items:center;justify-content:space-between;padding:0;margin:0}.booking-rateplan.sc-igl-application-info{display:flex;align-items:center;gap:0.5rem;margin:0;padding:0}.booking-rateplan-name.sc-igl-application-info{font-weight:bold;margin:0;padding:0}.booking-tooltip.sc-igl-application-info{margin-right:0.5rem;margin:0;padding:0}.booking-variation.sc-igl-application-info{margin:0;padding:0}.booking-price.sc-igl-application-info{margin:0;padding:0}.booking-footer.sc-igl-application-info{display:flex;align-items:center;justify-content:space-between;padding:0;margin-bottom:0.5rem}.booking-details-container.sc-igl-application-info{display:none}@media (min-width: 768px){.booking-header.sc-igl-application-info{justify-content:flex-start}.booking-footer.sc-igl-application-info,.booking-price.sc-igl-application-info{display:none}.booking-details-container.sc-igl-application-info,.rate_amount.sc-igl-application-info{display:inline-flex;gap:0.5rem}}@media only screen and (min-width: 908px){.aplicationInfoContainer.sc-igl-application-info{max-width:100%}.guest-info-container.sc-igl-application-info,.bed-preference-container.sc-igl-application-info,.unit-select-container.sc-igl-application-info{max-width:250px}}";
const IglApplicationInfoStyle0 = iglApplicationInfoCss;

const IglApplicationInfo = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bedPreferenceType = [];
        this.bookingType = 'PLUS_BOOKING';
        this.totalNights = 1;
        this.isButtonPressed = false;
        this.variationService = new variation_service.VariationService();
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
        booking_store.booking_store.ratePlanSelections = Object.assign(Object.assign({}, booking_store.booking_store.ratePlanSelections), { [roomTypeId]: Object.assign(Object.assign({}, booking_store.booking_store.ratePlanSelections[roomTypeId]), { [ratePlanId]: Object.assign(Object.assign({}, this.rateplanSelection), { guest: [...prevGuest] }) }) });
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        const filteredRoomList = this.filterRooms();
        const formattedVariation = this.variationService.formatVariationBasedOnInfants({
            baseVariation: this.rateplanSelection.selected_variation,
            infants: this.guestInfo.infant_nbr,
            variations: this.rateplanSelection.ratePlan.variations,
        });
        return (index.h(index.Host, { key: '5c722b7d31373181d37c5341c5e1d757c134cb6c', class: 'my-2', "data-testid": `room_info_${this.rateplanSelection.ratePlan.id}` }, index.h("div", { key: '3d944c11883ef58329c047a01e4cc8cccf5d55d8', class: "booking-header" }, (this.bookingType === 'PLUS_BOOKING' || this.bookingType === 'ADD_ROOM' || this.bookingType === 'EDIT_BOOKING') && (index.h("span", { key: '85f88245d65bef88f0006f0c13ad61096cee9abc', class: "booking-roomtype-title" }, this.rateplanSelection.roomtype.name)), index.h("div", { key: '39258cf2fe49b71887a94c49f4e63226af76ddcf', class: "booking-details-container" }, index.h("div", { key: '829b48931ff008051f3ca572e827a589e03c2c33', class: "booking-rateplan" }, index.h("p", { key: '771f7e91fe99e357ea0c3bb05a31df84e659c8d6', class: "booking-rateplan-name" }, this.rateplanSelection.ratePlan.short_name, " ", this.rateplanSelection.ratePlan.is_non_refundable && index.h("span", { key: '5abf10b45f01f4d5e3e65152528b2b085665521f', class: 'non-ref-span' }, "Non Refundable")), index.h("ir-tooltip", { key: '584621ebb66125d490027f592ff29156c5948adf', class: "booking-tooltip", message: this.getTooltipMessages() })), index.h("p", { key: '24c2117ee74356ada31a2fd80dcc436d25655d92', class: "booking-variation", innerHTML: formattedVariation })), index.h("p", { key: '5d74579c524e60d6ccdb510efb0f514db993731d', class: "booking-price" }, utils.formatAmount((_a = this.currency) === null || _a === void 0 ? void 0 : _a.symbol, this.getAmount()), "/", locales_store.locales.entries.Lcz_Stay)), index.h("div", { key: '1c1e9bb18c9c77c4eae6143635a23f5025996531', class: "booking-footer" }, index.h("div", { key: 'aea3b7431acfcc8140019e7d8eccda3f9259fc8b', class: "booking-rateplan" }, index.h("p", { key: 'dc06b0943b8dd6e8ca749592e7ce1ab98c244391', class: "booking-rateplan-name" }, this.rateplanSelection.ratePlan.short_name), index.h("ir-tooltip", { key: 'aa85cdc6d41b7a676373670e262b879315a433ba', class: "booking-tooltip", message: this.getTooltipMessages() })), index.h("p", { key: 'e2efb7dbae4d1627c9eb61f3687e9ff3807c17ae', class: "booking-variation", innerHTML: formattedVariation })), index.h("div", { key: '8ced5a8368caea236aa5f4649eee1876b63073cb', class: "d-flex flex-column flex-md-row  p-0 align-items-md-center aplicationInfoContainer" }, index.h("div", { key: '5ff583f6d1dc9d25f45244ba108ce556ec6a8113', class: "mr-md-1 mb-1 mb-md-0 flex-fill guest-info-container" }, index.h("input", { key: 'ba2292aaa4e310bb67c4602fe6d84d8594d8db48', id: v4.v4(), type: "text", "data-testid": "guest_first_name", class: `form-control ${this.isButtonPressed && ((_b = this.guestInfo) === null || _b === void 0 ? void 0 : _b.first_name) === '' && 'border-danger'}`, placeholder: (_c = locales_store.locales.entries['Lcz_GuestFirstname']) !== null && _c !== void 0 ? _c : 'Guest first name', name: "guestFirstName", onInput: event => {
                const name = event.target.value;
                this.updateGuest({ first_name: name });
                if (booking_store.booking_store.event_type.type === 'EDIT_BOOKING') {
                    booking_store.modifyBookingStore('guest', Object.assign(Object.assign({}, booking_store.booking_store.guest), { name }));
                }
            }, required: true, value: (_d = this.guestInfo) === null || _d === void 0 ? void 0 : _d.first_name })), index.h("div", { key: 'd8ebd6dae887141a4d2b83f25f9b3f3edf73ee1a', class: "mr-md-1 flex-fill guest-info-container" }, index.h("input", { key: '21d433897915e988a6f6af0f3069493e31c2fece', id: v4.v4(), type: "text", class: `form-control ${this.isButtonPressed && ((_e = this.guestInfo) === null || _e === void 0 ? void 0 : _e.last_name) === '' && 'border-danger'}`, placeholder: (_f = locales_store.locales.entries['Lcz_GuestLastname']) !== null && _f !== void 0 ? _f : 'Guest last name', name: "guestLastName", "data-testid": "guest_last_name", onInput: event => {
                const name = event.target.value;
                this.updateGuest({ last_name: name });
                if (booking_store.booking_store.event_type.type === 'EDIT_BOOKING') {
                    booking_store.modifyBookingStore('guest', Object.assign(Object.assign({}, booking_store.booking_store.guest), { name }));
                }
            }, required: true, value: (_g = this.guestInfo) === null || _g === void 0 ? void 0 : _g.last_name })), calendarData.calendar_data.is_frontdesk_enabled &&
            !calendarData.isSingleUnit(this.rateplanSelection.roomtype.id) &&
            (this.bookingType === 'PLUS_BOOKING' || this.bookingType === 'ADD_ROOM' || this.bookingType === 'EDIT_BOOKING') && (index.h("div", { key: '8c34b7b49e987ce910e30b93c77b516e463e6e05', class: "mt-1 mt-md-0 d-flex align-items-center flex-fill" }, index.h("div", { key: '42e114a3757f79e36c34ccd79fee757fe3b277a3', class: "mr-md-1 p-0 flex-fill preference-select-container" }, index.h("select", { key: 'f4c59a5f2bc7afe705efc96e29294be22724c350', "data-testid": "unit", class: "form-control input-sm pr-0", id: v4.v4(), onChange: event => this.updateGuest({ unit: event.target.value }) }, index.h("option", { key: '538bc6ea80e00a9f5a36de601161b79edd033dfe', value: "", selected: ((_h = this.guestInfo) === null || _h === void 0 ? void 0 : _h.unit) === '' }, locales_store.locales.entries.Lcz_Assignunits), filteredRoomList === null || filteredRoomList === void 0 ? void 0 :
            filteredRoomList.map(room => {
                var _a;
                return (index.h("option", { value: room.id, selected: ((_a = this.guestInfo) === null || _a === void 0 ? void 0 : _a.unit) === room.id.toString() }, room.name));
            }))))), this.rateplanSelection.roomtype.is_bed_configuration_enabled && (index.h("div", { key: '293752dc4246ac53d69aced53c61e342936d086c', class: "mt-1 mt-md-0 mr-md-1 flex-fill" }, index.h("select", { key: 'b6cfe009062a081e4ce9af2d80d1ad0bec640086', "data-testid": "bed_configuration", class: `form-control input-sm ${this.isButtonPressed && ((_j = this.guestInfo) === null || _j === void 0 ? void 0 : _j.bed_preference) === '' && 'border-danger'}`, id: v4.v4(), onChange: event => this.updateGuest({ bed_preference: event.target.value }) }, index.h("option", { key: '3457b2ee57bf8596c650dfc3bda3806d4ab2e9c8', value: "", selected: ((_k = this.guestInfo) === null || _k === void 0 ? void 0 : _k.bed_preference) === '' }, locales_store.locales.entries.Lcz_BedConfiguration), this.bedPreferenceType.map(data => {
            var _a;
            return (index.h("option", { value: data.CODE_NAME, selected: ((_a = this.guestInfo) === null || _a === void 0 ? void 0 : _a.bed_preference) === data.CODE_NAME }, data.CODE_VALUE_EN));
        })))), index.h("p", { key: '05b2da2434b88db00a4770ac261f1dc3104e6dec', class: "rate_amount" }, utils.formatAmount((_l = this.currency) === null || _l === void 0 ? void 0 : _l.symbol, this.getAmount()), "/", locales_store.locales.entries.Lcz_Stay)), this.rateplanSelection.selected_variation.child_nbr > 0 && (index.h("div", { key: 'a97dbaf825724b44f8427ca514df0f4e9a868d4f', style: { gap: '0.5rem', marginTop: '0.5rem' }, class: "d-flex  flex-row  p-0 align-items-center aplicationInfoContainer" }, index.h("p", { key: '7421e7c52a07b7d8701407b3b1b2d24b49220e18', class: 'm-0 p-0 text-danger' }, "Any of the children below 3 years?"), index.h("div", { key: 'bd91642023316a092363b411355756935a3e8c03', class: "mr-1 flex-fill" }, index.h("select", { key: '6f70355a28b52757e54e255e0bba6da03b68ce10', class: `form-control input-sm ${this.isButtonPressed && ((_m = this.guestInfo) === null || _m === void 0 ? void 0 : _m.bed_preference) === '' && 'border-danger'}`, id: v4.v4(), style: { width: 'max-content' }, onChange: event => this.updateGuest({ infant_nbr: Number(event.target.value) }) }, index.h("option", { key: '6fb83d4c4333de78b706a8148ecd0976d5cc8ccd', value: "", selected: Number((_o = this.guestInfo) === null || _o === void 0 ? void 0 : _o.infant_nbr) === 0 }, locales_store.locales.entries['No'] || 'No'), Array.from({ length: this.rateplanSelection.selected_variation.child_nbr }, (_, i) => i + 1).map(item => {
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
        this.isEventHover = false;
        this.renderAgain = false;
        this.blockDatesData = {
            RELEASE_AFTER_HOURS: 0,
            OPTIONAL_REASON: '',
            OUT_OF_SERVICE: false,
        }; // Change of property name might require updates in booking-event-hover
        this.releaseList = [];
        this.bookingService = new booking_service.BookingService();
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
        return (index.h(index.Host, { key: 'f48073fd5bfb65ac88a92d3a9a157fa3c9a4a5d3' }, index.h("div", { key: 'b889ef0fc47bb2733e7d97a7525ba7b4f5f4703c', class: `m-0 p-0 mb-1` }, index.h("div", { key: 'bf684bc298a384c7abdde3e85aaff3662b1b9d97', class: "text-left p-0" }, index.h("ir-date-view", { key: '859f0b0fdcdee5e0b85158b7b2e4a7820df15b8c', from_date: this.fromDate, dateOption: "YYYY-MM-DD", showDateDifference: false, to_date: this.toDate }))), index.h("div", { key: '641128318a5017c2588709d394acc75a1b2eeb23', class: ` mb-1 text-left ${this.isEventHover && 'p-0'}` }, index.h("div", { key: 'd9312e193afba76eb9499e6163632b7fe7005f3a', class: "mb-1 " }, index.h("label", { key: '2b821a15d57a344babf7f40982e641054f737a83', class: "p-0 text-bold-700 font-medium-1 m-0 align-middle" }, locales_store.locales.entries.Lcz_Reason, ":"), index.h("div", { key: 'c4b1b11bc73e2f5876ba511077741669a67bdc6d', class: "p-0 m-0 pr-1  controlContainer checkBoxContainer d-inline-block align-middle" }, index.h("input", { key: '375612dc8889a2631fa7717817d31d2d3f8cae40', class: "form-control", type: "checkbox", checked: this.blockDatesData.OUT_OF_SERVICE, id: "userinput6", onChange: event => this.handleOutOfService(event) })), index.h("span", { key: 'ebfe98fbd213541a20eee4592883d617d71f05ed', class: "align-middle out-of-service-label" }, locales_store.locales.entries.Lcz_OutOfservice)), !this.blockDatesData.OUT_OF_SERVICE ? (index.h("div", null, index.h("div", { class: "mb-1 d-flex  align-items-center" }, index.h("span", { class: "align-middle" }, locales_store.locales.entries.Lcz_Or, " "), index.h("div", { class: "d-inline-flex col pr-0 align-middle" }, index.h("input", { class: "form-control", type: "text", placeholder: locales_store.locales.entries.Lcz_OptionalReason, id: "optReason", value: this.blockDatesData.OPTIONAL_REASON, onInput: event => this.handleOptionalReason(event) }))), index.h("div", { class: "mb-1 w-100 pr-0 " }, index.h("span", { class: "text-bold-700 font-medium-1" }, locales_store.locales.entries.Lcz_AutomaticReleaseIn, ": "), index.h("div", { class: "d-inline-block" }, index.h("select", { class: "form-control input-sm", id: "zSmallSelect", onChange: evt => this.handleReleaseAfterChange(evt) }, this.releaseList.map(releaseItem => (index.h("option", { value: +releaseItem.CODE_NAME, selected: Number(this.blockDatesData.RELEASE_AFTER_HOURS) == Number(releaseItem.CODE_NAME) }, releaseItem.CODE_VALUE_EN))))), this.blockDatesData.RELEASE_AFTER_HOURS ? (index.h("div", { class: "d-inline-block releaseTime" }, index.h("em", null, locales_store.locales.entries.Lcz_On, " ", this.getReleaseHoursString()))) : null))) : null)));
    }
};
IglBlockDatesView.style = IglBlockDatesViewStyle0;

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
        var _a, _b;
        //const value = (event.target as HTMLSelectElement).value;
        let obj = {};
        if (value === '') {
            obj = Object.assign(Object.assign({}, this.adultChildCount), { [key]: 0 });
        }
        else {
            obj = Object.assign(Object.assign({}, this.adultChildCount), { [key]: value });
        }
        booking_store.modifyBookingStore('bookingAvailabilityParams', {
            from_date: this.bookingDataDefaultDateRange.fromDate,
            to_date: this.bookingDataDefaultDateRange.toDate,
            adult_nbr: (_a = obj === null || obj === void 0 ? void 0 : obj['adult']) !== null && _a !== void 0 ? _a : 0,
            child_nbr: (_b = obj === null || obj === void 0 ? void 0 : obj['child']) !== null && _b !== void 0 ? _b : 0,
        });
        this.adultChild.emit(obj);
    }
    getAdultChildConstraints() {
        var _a, _b, _c, _d;
        return (index.h("div", { class: 'mt-1 mt-lg-0 d-flex flex-column text-left' }, index.h("div", { class: "form-group  my-lg-0 text-left d-flex align-items-center justify-content-between justify-content-sm-start" }, index.h("fieldset", null, index.h("div", { class: "btn-group ml-0" }, index.h("ir-select", { testId: "adult_number", class: 'm-0', selectedValue: (_b = (_a = this.adultChildCount) === null || _a === void 0 ? void 0 : _a.adult) === null || _b === void 0 ? void 0 : _b.toString(), onSelectChange: e => this.handleAdultChildChange('adult', e.detail), select_id: "adult_select", firstOption: locales_store.locales.entries.Lcz_AdultsCaption, LabelAvailable: false, data: Array.from(Array(this.adultChildConstraints.adult_max_nbr), (_, i) => i + 1).map(option => ({
                text: option.toString(),
                value: option.toString(),
            })) }))), this.adultChildConstraints.child_max_nbr > 0 && (index.h("fieldset", null, index.h("div", { class: "btn-group ml-1 p-0" }, index.h("ir-select", { selectedValue: (_d = (_c = this.adultChildCount) === null || _c === void 0 ? void 0 : _c.child) === null || _d === void 0 ? void 0 : _d.toString(), testId: "child_number", onSelectChange: e => this.handleAdultChildChange('child', e.detail), select_id: "child_select", firstOption: this.renderChildCaption(), LabelAvailable: false, data: Array.from(Array(this.adultChildConstraints.child_max_nbr), (_, i) => i + 1).map(option => ({
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
        return (index.h(index.Host, { key: 'db7dea08ab58a1249e8dc78ae66a6b3bf2a5a30d' }, this.isEventType('SPLIT_BOOKING') && this.getSplitBookingList(), showSourceNode && this.getSourceNode(), index.h("div", { key: '58f5746a4a800c492569f845d14f8f81ff4b5904', class: `d-flex flex-column flex-lg-row align-items-lg-center ${showSourceNode ? 'mt-1' : ''}` }, index.h("fieldset", { key: '28820513dc41c8c5adfe805e7057097f37a5594f', class: "mt-lg-0 mr-1 " }, index.h("igl-date-range", { key: '22ecb26cc57e1147cd7f97601915ab9d56b805e1', "data-testid": "date_picker", variant: "booking", dateLabel: locales_store.locales.entries.Lcz_Dates, minDate: this.isEventType('PLUS_BOOKING') ? moment.hooks().add(-1, 'months').startOf('month').format('YYYY-MM-DD') : this.minDate, disabled: this.isEventType('BAR_BOOKING') || this.isEventType('SPLIT_BOOKING'), defaultData: this.bookingDataDefaultDateRange })), !this.isEventType('EDIT_BOOKING') && this.getAdultChildConstraints()), index.h("p", { key: '904385c6704a14ab7a8c5a589307e8de4f11b85b', class: "text-right mt-1 message-label" }, calendarData.calendar_data.tax_statement)));
    }
};
IglBookPropertyHeader.style = IglBookPropertyHeaderStyle0;

const iglDateRangeCss = ".sc-igl-date-range-h{display:flex;align-items:center !important;font-size:14px !important}.date-range-input.sc-igl-date-range{margin:0;padding:0;display:flex;flex:1;cursor:pointer;width:100%;user-select:none;font-size:14px !important}.iglRangeNights.sc-igl-date-range{margin:0;padding:0}.date-view.sc-igl-date-range{position:absolute;background:white;pointer-events:none;cursor:pointer;display:block;margin-left:14px;margin-right:14px;font-size:13.65px !important;display:flex;align-items:center;inset:0}.date-view.sc-igl-date-range svg.sc-igl-date-range{padding:0 !important;margin:0;margin-right:10px}.calendarPickerContainer.sc-igl-date-range{display:flex !important;position:relative !important;text-align:left;align-items:center !important;padding:0 !important;margin:0;border:1px solid var(--ir-date-range-border, #379ff2);width:var(--ir-date-range-width, 245px);transition:border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}.calendarPickerContainer.sc-igl-date-range:focus-within{border-color:#379ff2}.calendarPickerContainer[data-state='disabled'].sc-igl-date-range{border:0px;width:280px}.date-view[data-state='disabled'].sc-igl-date-range,.date-range-input[data-state='disabled'].sc-igl-date-range{margin:0;cursor:default}.date-range-container-cn.sc-igl-date-range{position:relative;width:fit-content}.date-range-container-cn.sc-igl-date-range:focus-within .date-range-container.sc-igl-date-range{border:1px solid #379ff2}.date-range-container.sc-igl-date-range{position:relative;gap:1rem;font-size:0.975rem;line-height:1.45;border-radius:0.21rem;border:1px solid #cacfe7;color:#3b4781;padding:0.75rem 1rem;box-sizing:border-box !important;font-weight:400;background-color:#fff;background-clip:padding-box;height:2rem;pointer-events:none;transition:border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}.date-range-container-cn.sc-igl-date-range .date-range-input.sc-igl-date-range{position:absolute;width:100% !important;inset:0;cursor:pointer}.date-range-container.disabled.sc-igl-date-range{border:none;padding-left:0;padding-right:0}.date-range-input[data-state='disabled'].sc-igl-date-range{cursor:default}";
const IglDateRangeStyle0 = iglDateRangeCss;

const IglDateRange = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.dateSelectEvent = index.createEvent(this, "dateSelectEvent", 7);
        this.toast = index.createEvent(this, "toast", 7);
        this.disabled = false;
        this.withDateDifference = true;
        this.variant = 'default';
        this.renderAgain = false;
        this.totalNights = 0;
        this.fromDateStr = 'from';
        this.toDateStr = 'to';
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
        this.totalNights = utils.calculateDaysBetweenDates(moment.hooks(this.fromDate).format('YYYY-MM-DD'), moment.hooks(this.toDate).format('YYYY-MM-DD'));
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
        return (index.h(index.Host, null, index.h("div", { class: `p-0 m-0 date-range-container-cn` }, index.h("ir-date-range", { maxDate: this.maxDate, class: 'date-range-input', disabled: this.disabled, fromDate: this.fromDate, toDate: this.toDate, minDate: this.minDate, autoApply: true, "data-state": this.disabled ? 'disabled' : 'active', onDateChanged: evt => {
                this.handleDateChange(evt);
            } }), index.h("div", { class: `d-flex align-items-center m-0  date-range-container ${this.disabled ? 'disabled' : ''}` }, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", class: "m-0 p-0", height: "14", width: "14", viewBox: "0 0 448 512" }, index.h("path", { fill: "currentColor", d: "M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" })), index.h("span", null, moment.hooks(this.fromDate).format('MMM DD, YYYY')), index.h("svg", { xmlns: "http://www.w3.org/2000/svg", class: "m-0 p-0", height: "14", width: "14", viewBox: "0 0 512 512" }, index.h("path", { fill: "currentColor", d: "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" })), index.h("span", null, moment.hooks(this.toDate).format('MMM DD, YYYY'))))));
    }
    static get watchers() { return {
        "defaultData": ["handleDataChange"]
    }; }
};
IglDateRange.style = IglDateRangeStyle0;

const iglPropertyBookedByCss = ".sc-igl-property-booked-by-h{display:block}.bookedByEmailContainer.sc-igl-property-booked-by{flex:auto;max-width:350px}.bookedDetailsForm.sc-igl-property-booked-by label.sc-igl-property-booked-by{min-width:125px;max-width:125px}.row.sc-igl-booking-form.sc-igl-property-booked-by{padding:0 !important}.bookedDetailsForm.sc-igl-property-booked-by .form-group.sc-igl-property-booked-by{margin-bottom:10px !important}.bookedDetailsForm.sc-igl-property-booked-by .checkBoxContainer.sc-igl-property-booked-by input.sc-igl-property-booked-by{height:1.2rem !important;width:30px}.controlContainer.sc-igl-property-booked-by textarea.sc-igl-property-booked-by{height:60px !important}.margin3.sc-igl-property-booked-by{margin-bottom:5px !important}@media (min-width: 768px){.bookedByEmailContainer.sc-igl-property-booked-by{margin-left:37px}}";
const IglPropertyBookedByStyle0 = iglPropertyBookedByCss;

const IglPropertyBookedBy = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.dataUpdateEvent = index.createEvent(this, "dataUpdateEvent", 7);
        this.showPaymentDetails = false;
        this.countries = [];
        this.isButtonPressed = false;
        this.bookingService = new booking_service.BookingService();
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
        booking_store.modifyBookingStore('checkout_guest', Object.assign(Object.assign({}, ((_a = booking_store.booking_store.checkout_guest) !== null && _a !== void 0 ? _a : {})), props));
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
        return (index.h(index.Host, { key: '8cf0b2fdc993137a74ea6b75b7804b68181c047b' }, index.h("div", { key: 'ec9a2a43700db17bc5e7b61cd052b80ee348bd1c', class: "text-left mt-3" }, index.h("div", { key: '83c553b3c9c4f7bed9b96082928ead74be6d8aea', class: "form-group d-flex flex-column flex-md-row align-items-md-center text-left " }, index.h("label", { key: '46c5b91c710f789536ec04659ba1a8f5e7ff12c9', class: "p-0 m-0 label-control mr-1 font-weight-bold" }, locales_store.locales.entries.Lcz_BookedBy), index.h("div", { key: 'd19ecec72070cd33117e7cdcdee6c9d21aacc485', class: "bookedByEmailContainer mt-1 mt-md-0 d-flex align-items-center" }, index.h("ir-autocomplete", { key: '9fa7db7d066c5a484dc49b89049f1731d7e26c47', testId: 'main_guest_email', onComboboxValue: this.handleComboboxChange.bind(this), propertyId: this.propertyId, type: "text", value: this.bookedByData.email, required: true, class: 'flex-fill', placeholder: locales_store.locales.entries.Lcz_FindEmailAddress, onInputCleared: () => this.clearEvent(), danger_border: this.isButtonPressed && this.bookedByData.email !== '' && utils.validateEmail(this.bookedByData.email) }), index.h("ir-tooltip", { key: 'e7fc886385637a7c3c78a7789704cac68fb9fc98', class: 'ml-1', message: "Leave empty if email is unavailable" })))), index.h("div", { key: '411904254fa842ca654f51a7ad34ab70c2fb13d3', class: "bookedDetailsForm text-left mt-2 font-small-3 " }, index.h("div", { key: '62b9e267be460574edb6480fccb76317777218b7', class: "d-flex flex-column flex-md-row  justify-content-md-between " }, index.h("div", { key: 'da7d038bc789af125aa269bf12726903e64b01ff', class: "p-0 flex-fill " }, index.h("div", { key: 'b677baf3239ec7e533b7618c1933ba86d8f0dcea', class: "form-group d-flex flex-column flex-md-row align-items-md-center p-0 flex-fill " }, index.h("label", { key: '725fdb6f684af2e90cf187446a90dccbdea05794', class: "p-0 m-0 margin3" }, locales_store.locales.entries.Lcz_FirstName), index.h("div", { key: '68b0b281bbfe6985c09b7965d578150206db703a', class: "p-0 m-0  controlContainer flex-fill  " }, index.h("input", { key: '55a6376c3f9154a1fe801a2679b9b2430c71e39b', "data-testid": "main_guest_first_name", class: `form-control flex-fill ${this.isButtonPressed && this.bookedByData.firstName === '' && 'border-danger'}`, type: "text", placeholder: locales_store.locales.entries.Lcz_FirstName, id: v4.v4(), value: this.bookedByData.firstName, onInput: event => {
                this.updateGuest({ first_name: event.target.value });
                this.handleDataChange('firstName', event);
            }, required: true }))), index.h("div", { key: 'f641849f740e27d6dc1c669b8ce0dfa7a754b890', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, index.h("label", { key: '5f63c47eaec0bf8f2fbc1b7e231247e7991cbdba', class: "p-0 m-0 margin3" }, locales_store.locales.entries.Lcz_LastName), index.h("div", { key: '2b3c8e249858864bcc6b752fe0c50ff3d09610c6', class: "p-0 m-0  controlContainer flex-fill" }, index.h("input", { key: '6283e8a57ab928de7cd4ac4066d76a24e44fd103', "data-testid": "main_guest_last_name", class: `form-control ${this.isButtonPressed && this.bookedByData.lastName === '' && 'border-danger'}`, type: "text", placeholder: locales_store.locales.entries.Lcz_LastName, id: v4.v4(), value: this.bookedByData.lastName, onInput: event => this.handleDataChange('lastName', event) }))), index.h("div", { key: '2bbb4f7f86753b00d51785f5ea1efe32c137ca05', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, index.h("label", { key: 'd8bad507e2fc691e6e081d1334a3d61011e75ce2', class: "p-0 m-0 margin3" }, locales_store.locales.entries.Lcz_Country), index.h("ir-country-picker", { key: 'c5da14b5714bd4f31e11e3cc2d7346b79a767149', testId: "main_guest_country", class: "flex-grow-1 m-0", onCountryChange: e => this.handleCountryChange(e.detail.id), countries: this.countries, country: this.countries.find(c => c.id === this.bookedByData.countryId) })), index.h("div", { key: 'd62c749109d00898c2236800c6908a14dcf104fb', class: "form-group p-0 d-flex flex-column flex-md-row align-items-md-center" }, index.h("label", { key: '4a81d2493ded25d187af042b653027e3a4b60748', class: "p-0 m-0 margin3" }, locales_store.locales.entries.Lcz_MobilePhone), index.h("div", { key: '418e758e2837911cf31ef27b5f7694a441e08807', class: "p-0 m-0 controlContainer flex-fill" }, index.h("ir-phone-input", { key: '634fdb4e1bbd03cc33752dd2e89aedc5e07f10a4', testId: "main_guest_phone", language: this.language,
            // label={locales.entries.Lcz_MobilePhone}
            value: this.bookedByData.contactNumber, phone_prefix: this.bookedByData.isdCode, default_country: this.bookedByData.countryId, onTextChange: e => {
                this.handleDataChange('isdCode', { target: { value: e.detail.phone_prefix } });
                this.handleDataChange('contactNumber', { target: { value: e.detail.mobile } });
            } }))), index.h("div", { key: '7c8ac1b17d05fa770a55b3f33cdb946436a68279', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, index.h("label", { key: '8c8c5b53486cb9c8d16fba13ad272bf8297e7ecf', class: "p-0 m-0 margin3" }, locales_store.locales.entries.Lcz_YourArrivalTime), index.h("div", { key: '650dec4691058ac87650ef2aed6cb36a3df1970c', class: "p-0 m-0  controlContainer flex-fill" }, index.h("select", { key: 'caf97b497d8c13d1d5bf4d91bf16a6261486bc7d', "data-testid": "arrival_time", class: `form-control input-sm pr-0 ${this.isButtonPressed && this.bookedByData.selectedArrivalTime.code === '' && 'border-danger'}`, id: v4.v4(), onChange: event => this.handleDataChange('selectedArrivalTime', event) }, this.arrivalTimeList.map(time => (index.h("option", { value: time.CODE_NAME, selected: this.bookedByData.selectedArrivalTime.code === time.CODE_NAME }, time.CODE_VALUE_EN))))))), index.h("div", { key: 'a28e01db22a434a0c43b687e8c9166595e14afda', class: "p-0 flex-fill  ml-md-3" }, index.h("div", { key: '36dd39addfbbd61c56ed53dda4aa7844b6c33281', class: "  p-0 d-flex flex-column flex-md-row align-items-md-center " }, index.h("label", { key: '725ee66800510f959fbc55c3425884f2afb65f18', class: "p-0 m-0 margin3" }, locales_store.locales.entries.Lcz_AnyMessageForUs), index.h("div", { key: '7aca5f735aa0b1d0e7159d27fb48f3d8cb816734', class: "p-0 m-0  controlContainer flex-fill " }, index.h("textarea", { key: '482cbca825773dce014b08cd23bfe9232428ba2f', "data-testid": "note", id: v4.v4(), rows: 4, class: "form-control ", name: "message", value: this.bookedByData.message, onInput: event => this.handleDataChange('message', event) }))), this.showPaymentDetails && (index.h(index.Fragment, { key: 'd96850ff860ef54c4ac564429244f69fb9dcdfe7' }, index.h("div", { key: '3d45aecfaf1dc50098310fe6553fb87a9a129dab', class: "form-group mt-md-1  p-0 d-flex flex-column flex-md-row align-items-md-center" }, index.h("label", { key: '8066135f6a81979ddad6f5082d6d1103a6fa4cbb', class: "p-0 m-0 margin3" }, locales_store.locales.entries.Lcz_CardNumber), index.h("div", { key: 'dbb8316066d6ad5665e21d3a0a99df41f9a99c58', class: "p-0 m-0  controlContainer flex-fill" }, index.h("input", { key: '42dab071588a4ff2efdcdd10b7d8894c539e9fa0', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4.v4(), value: this.bookedByData.cardNumber, onInput: event => this.handleNumberInput('cardNumber', event) }))), index.h("div", { key: '596e503cedd0628806a6d5c58de6118a0b0b537e', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, index.h("label", { key: '5da7df6a488b59c94aa44a1c1468b57757ac88d8', class: "p-0 m-0 margin3" }, locales_store.locales.entries.Lcz_CardHolderName), index.h("div", { key: '0514a3e8e3cf3565850c0493450d761273826f25', class: "p-0 m-0  controlContainer flex-fill" }, index.h("input", { key: '04138306b9a02a74d8422c9753a380dec7d30590', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4.v4(), value: this.bookedByData.cardHolderName, onInput: event => this.handleDataChange('cardHolderName', event) }))), index.h("div", { key: 'a1245597574403937672c5569ec06aa5347b2da5', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, index.h("label", { key: '134192e78650d190fa8417f80f8dae066aecfcdc', class: "p-0 m-0 margin3" }, locales_store.locales.entries.Lcz_ExpiryDate), index.h("div", { key: 'c7933dc0c8dc3f4862112eee9c22854edc827234', class: "p-0 m-0 row  controlContainer flex-fill" }, index.h("div", { key: 'ea0755a671722668cd525af3effbea736258f088', class: "p-0 m-0" }, index.h("select", { key: '71129a4e8e3110345b8eea654e92ff3f8153f57e', class: "form-control input-sm pr-0", id: v4.v4(), onChange: event => this.handleDataChange('expiryMonth', event) }, this.expiryMonths.map(month => (index.h("option", { value: month, selected: month === this.bookedByData.expiryMonth }, month))))), index.h("div", { key: '0fe2c85ebd590d069a39dcd9f54fa9721c513f4a', class: "p-0 m-0 ml-1" }, index.h("select", { key: '5a4f22f302f1e30ac88112a5eb605b109652e78c', class: "form-control input-sm pr-0", id: v4.v4(), onChange: event => this.handleDataChange('expiryYear', event) }, this.expiryYears.map((year, index$1) => (index.h("option", { value: year, selected: index$1 === this.bookedByData.expiryYear }, year))))))))), index.h("div", { key: '03cdc3ebccd6c2afcc3af4b24b3133baeb274410', class: "form-group mt-1 p-0 d-flex flex-row align-items-center" }, index.h("label", { key: 'da656ddeb68bbb1b77604ef31313bf7e3d5bd064', class: "p-0 m-0", htmlFor: 'emailTheGuestId' }, locales_store.locales.entries.Lcz_EmailTheGuest), index.h("div", { key: '85089b97d7131455f93e5c419d249d1579bb8302', class: "p-0 m-0  controlContainer flex-fill checkBoxContainer" }, index.h("input", { key: 'bba8db360cfeba1e653c98f726532e364dadb703', class: "form-control", type: "checkbox", checked: this.bookedByData.emailGuest, id: 'emailTheGuestId', onChange: event => this.handleDataChange('emailGuest', event) }))))))));
    }
};
IglPropertyBookedBy.style = IglPropertyBookedByStyle0;

const iglRatePlanCss = ".sc-igl-rate-plan-h{display:block;margin-bottom:0.5rem}.currency.sc-igl-rate-plan{display:block;position:absolute;margin:0;padding:0;height:auto;left:10px}.rate-input.sc-igl-rate-plan{font-size:14px;line-height:0;padding:0;height:0;border-left:0}.rate-input-container.sc-igl-rate-plan{display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;flex:1}.new-currency.sc-igl-rate-plan{color:#3b4781;border:1px solid #cacfe7;font-size:0.975rem;height:2rem;background:white;border-right:0;border-top-right-radius:0;border-bottom-right-radius:0;transition:border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}.input-group-prepend.sc-igl-rate-plan span[data-state='focus'].sc-igl-rate-plan{border-color:var(--blue)}.input-group-prepend.sc-igl-rate-plan span[data-disabled].sc-igl-rate-plan{background-color:#eceff1;border-color:rgba(118, 118, 118, 0.3)}.non-ref-span.sc-igl-rate-plan{font-size:12px;color:var(--green)}.rateplan-name-container.sc-igl-rate-plan{margin-bottom:0.5rem !important}.rateplan-container.sc-igl-rate-plan{margin-top:0.5rem}@media only screen and (min-width: 1200px){.rateplan-name-container.sc-igl-rate-plan{width:40%;margin-top:0}.rateplan-container.sc-igl-rate-plan{width:40%}}@media only screen and (min-width: 991px){.max-w-300.sc-igl-rate-plan{max-width:200px}.rate-input-container.sc-igl-rate-plan{max-width:50px}.rateplan-name-container.sc-igl-rate-plan{margin-bottom:0 !important}}@media only screen and (min-width: 991px) and (max-width: 1300px){.rateplan-name-container.sc-igl-rate-plan{width:40%}.price-amount.sc-igl-rate-plan{max-width:150px !important}}@media only screen and (max-width: 768px){.booking-btn.sc-igl-rate-plan{width:100%}}.total-nights-container.sc-igl-rate-plan{width:max-content}.nightBorder.sc-igl-rate-plan{border-left-width:0;border-top-right-radius:3px !important;border-bottom-right-radius:3px !important}";
const IglRatePlanStyle0 = iglRatePlanCss;

const IglRatePlan = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.buttonClicked = index.createEvent(this, "buttonClicked", 7);
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
        const currentSelections = booking_store.booking_store.ratePlanSelections;
        booking_store.booking_store.ratePlanSelections = Object.assign(Object.assign({}, currentSelections), { [roomTypeId]: Object.assign(Object.assign({}, currentSelections[roomTypeId]), { [ratePlan.id]: Object.assign(Object.assign({}, currentSelections[roomTypeId][ratePlan.id]), props) }) });
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
            booking_store.reserveRooms({
                roomTypeId: this.roomTypeId,
                ratePlanId: this.ratePlan.id,
                rooms: Number(value),
            });
        }
    }
    // Navigate to the next page for booking
    bookProperty() {
        if (this.bookingType === 'BAR_BOOKING') {
            booking_store.resetReserved();
        }
        this.reserveRoom();
        this.buttonClicked.emit({ key: 'next' });
    }
    reserveRoom() {
        var _a, _b, _c, _d, _e, _f, _g;
        booking_store.reserveRooms({
            roomTypeId: this.roomTypeId,
            ratePlanId: this.ratePlan.id,
            rooms: 1,
            guest: [
                {
                    last_name: (_a = booking_store.booking_store.guest) === null || _a === void 0 ? void 0 : _a.last_name,
                    first_name: (_b = booking_store.booking_store.guest) === null || _b === void 0 ? void 0 : _b.first_name,
                    unit: this.roomTypeId === ((_c = booking_store.booking_store.guest) === null || _c === void 0 ? void 0 : _c.roomtype_id) ? (_d = booking_store.booking_store.guest) === null || _d === void 0 ? void 0 : _d.unit : null,
                    bed_preference: this.visibleInventory.roomtype.is_bed_configuration_enabled ? (_e = booking_store.booking_store.guest) === null || _e === void 0 ? void 0 : _e.bed_preference : null,
                    infant_nbr: ((_f = this.visibleInventory.selected_variation) === null || _f === void 0 ? void 0 : _f.child_nbr) > 0 ? (_g = booking_store.booking_store.guest) === null || _g === void 0 ? void 0 : _g.infant_nbr : null,
                },
            ],
        });
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
        booking_store.updateRoomParams({
            params: { selected_variation: selectedVariation },
            ratePlanId: ratePlan.id,
            roomTypeId,
        });
    }
    // Reset reserved rooms in the booking store
    render() {
        var _a, _b, _c;
        const { ratePlan, bookingType, currency, ratePricingMode, visibleInventory } = this;
        const isAvailableToBook = ratePlan.is_available_to_book;
        const disableForm = this.disableForm();
        const selectedVariation = visibleInventory === null || visibleInventory === void 0 ? void 0 : visibleInventory.selected_variation;
        const formattedVariations = (_a = ratePlan.variations) === null || _a === void 0 ? void 0 : _a.map(v => this.formatVariation(v));
        // if (!this.visibleInventory) {
        //   return null;
        // }
        return (index.h(index.Host, { key: '86489e44beedddfa4c2e6d004274180484d48c04', "data-testid": `rp-${this.ratePlan.id}` }, index.h("div", { key: '93eff1d5f1153990435a11c1c5427ac50b87d0a7', class: `d-flex mt-1  p-0 ${isAvailableToBook ? 'flex-column flex-lg-row align-items-lg-center justify-content-lg-between' : 'align-items-center justify-content-between'}` }, index.h("div", { key: '213f9a7e87fdd7b15a19be2c84740269b08d9f0f', "data-testid": 'rp_name', class: "rateplan-name-container m-0 p-0  d-flex align-items-center", style: { gap: '0.5rem' } }, bookingType === 'BAR_BOOKING' ? (index.h("p", { class: "m-0 p-0" }, index.h("span", null, ratePlan.name.split('/')[1], " ", ratePlan.is_non_refundable && index.h("span", { class: "non-ref-span" }, "Non Refundable")))) : (index.h("span", null, ratePlan.short_name, " ", ratePlan.is_non_refundable && index.h("span", { class: "non-ref-span" }, "Non Refundable"))), isAvailableToBook && index.h("ir-tooltip", { key: 'fda468d98771583b360ba74062a206bebff8e26d', message: this.getTooltipMessages() })), isAvailableToBook ? (index.h("div", { class: "d-md-flex m-md-0  justify-content-md-end align-items-md-center flex-fill rateplan-container" }, index.h("div", { class: "flex-fill max-w-300 flex-grow-1" }, index.h("fieldset", { class: "position-relative flex-grow-1 w-100" }, index.h("select", { disabled: disableForm, "data-testid": "adult-child-offering", class: "form-control input-sm flex-grow-1 w-100", id: v4.v4(), onChange: evt => this.handleDataChange('adult_child_offering', evt) }, formattedVariations === null || formattedVariations === void 0 ? void 0 : formattedVariations.map(variation => (index.h("option", { value: variation, selected: this.formatVariation(selectedVariation) === variation }, variation)))))), index.h("div", { class: "m-0 p-0 mt-1 mt-md-0 d-flex justify-content-between align-items-md-center ml-md-1" }, index.h("div", { class: "d-flex m-0 p-0 rate-total-night-view mt-0 flex-grow-1" }, index.h("ir-price-input", { testId: 'amount_input', disabled: disableForm, onTextChange: e => this.updateRateplanSelection({
                is_amount_modified: true,
                rp_amount: Number(e.detail),
            }), "aria-label": `${(_c = (_b = this.visibleInventory) === null || _b === void 0 ? void 0 : _b.roomtype) === null || _c === void 0 ? void 0 : _c.name} ${this.ratePlan.short_name}'s rate`, "aria-describedby": `${this.ratePlan.short_name}'s rate`, class: "ir-br-input-none price-amount w-100 flex-grow-1", currency: currency.symbol, value: this.renderRate(), placeholder: locales_store.locales.entries.Lcz_Rate || 'Rate' }), index.h("fieldset", { class: "position-relative m-0 total-nights-container p-0" }, index.h("select", { "data-testid": 'nigh_stay_select', disabled: disableForm, class: "form-control input-sm m-0 nightBorder rounded-0 py-0", id: v4.v4(), onChange: evt => this.updateRateplanSelection({
                view_mode: evt.target.value,
            }) }, ratePricingMode.map(data => (index.h("option", { value: data.CODE_NAME, selected: (visibleInventory === null || visibleInventory === void 0 ? void 0 : visibleInventory.view_mode) === data.CODE_NAME }, data.CODE_VALUE_EN)))))), (bookingType === 'PLUS_BOOKING' || bookingType === 'ADD_ROOM') && (index.h("div", { class: "flex-fill mt-0 ml-1 m-0 mt-md-0 p-0" }, index.h("fieldset", { class: "position-relative" }, index.h("select", { "data-testid": 'inventory_select', disabled: visibleInventory.visibleInventory === 0, class: "form-control input-sm", id: v4.v4(), onChange: evt => this.handleDataChange('totalRooms', evt) }, Array.from({ length: (visibleInventory.visibleInventory || 0) + 1 }, (_, i) => i).map(i => (index.h("option", { value: i, selected: visibleInventory.reserved === i }, i)))))))), bookingType === 'EDIT_BOOKING' && (index.h(index.Fragment, null, index.h("div", { class: "m-0 p-0 ml-md-1 mt-md-0 d-none d-md-block" }, index.h("fieldset", { class: "position-relative" }, index.h("input", { "data-testid": 'inventory_radio', disabled: disableForm, type: "radio", name: "ratePlanGroup", value: "1", onChange: () => {
                booking_store.resetReserved();
                this.reserveRoom();
            }, checked: visibleInventory.reserved === 1 }))), index.h("button", { "data-testid": "book_property", disabled: disableForm, type: "button", class: "btn btn-primary booking-btn mt-lg-0 btn-sm ml-md-1 mt-1 d-md-none", onClick: () => {
                booking_store.resetReserved();
                this.reserveRoom();
                this.bookProperty();
            } }, visibleInventory.reserved === 1 ? locales_store.locales.entries.Lcz_Current : locales_store.locales.entries.Lcz_Select))), (bookingType === 'BAR_BOOKING' || bookingType === 'SPLIT_BOOKING') && (index.h("button", { "data-testid": "book", disabled: disableForm || (bookingType === 'SPLIT_BOOKING' && this.isBookDisabled), type: "button", class: "btn btn-primary booking-btn mt-md-0 btn-sm ml-md-1 mt-1", onClick: () => this.bookProperty() }, locales_store.locales.entries.Lcz_Book)))) : (index.h("p", { class: "text-danger m-0 p-0" }, locales_store.locales.entries['Lcz_NotAvailable'] || 'Not available')))));
    }
};
IglRatePlan.style = IglRatePlanStyle0;

const iglRoomTypeCss = ".sc-igl-room-type-h{display:block}.margin-bottom-8.sc-igl-room-type{margin-bottom:8px !important}";
const IglRoomTypeStyle0 = iglRoomTypeCss;

const IglRoomType = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.dataUpdateEvent = index.createEvent(this, "dataUpdateEvent", 7);
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
        return (index.h(index.Host, { key: '28c74e9cb07b1d3eb09765653d20f3c723958d97' }, isValidBookingType && ((_a = this.roomType.rateplans) === null || _a === void 0 ? void 0 : _a.length) > 0 && index.h("div", { key: '7acf7b917a87d3c6ce27515b5576aa3d5d500c61', class: "font-weight-bold font-medium-1 margin-bottom-8 " }, this.roomType.name), (_b = this.roomType.rateplans) === null || _b === void 0 ? void 0 :
            _b.map(ratePlan => {
                if (!!ratePlan.variations) {
                    let shouldBeDisabled = this.roomInfoId && this.roomInfoId === this.roomType.id;
                    // let roomId = -1;
                    // if (shouldBeDisabled && this.initialRoomIds) {
                    //   roomId = this.initialRoomIds.roomId;
                    // }
                    const visibleInventory = booking_store.getVisibleInventory(this.roomType.id, ratePlan.id);
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

const irAutocompleteCss = ".sc-ir-autocomplete-h{display:block;position:relative}.selected.sc-ir-autocomplete{color:#fff;text-decoration:none;background-color:#666ee8}input.sc-ir-autocomplete{width:100%;position:relative;border-top-left-radius:0px !important;border-left:0 !important;border-bottom-left-radius:0px !important}label.sc-ir-autocomplete{margin:0;border-top-right-radius:0px !important;border-right:0 !important;border-bottom-right-radius:0px !important;width:fit-content;display:flex;align-items:center;padding-right:3px !important;justify-content:center;transition:border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}label[data-state='focused'].sc-ir-autocomplete{border-color:var(--blue)}.combobox.sc-ir-autocomplete{margin:0;top:30px;min-width:100%;width:max-content;display:block;z-index:10000;padding:1px;background:white;box-shadow:0px 8px 16px 0px rgba(0, 0, 0, 0.2);padding:5px 0;max-height:250px;overflow-y:auto}.dropdown-item.sc-ir-autocomplete{cursor:pointer}button.sc-ir-autocomplete{all:unset;right:4px}.combobox.sc-ir-autocomplete p.sc-ir-autocomplete,span.sc-ir-autocomplete,loader-container.sc-ir-autocomplete{padding:5px 16px;margin:0px;margin-top:2px;width:100%}.combobox.sc-ir-autocomplete p.sc-ir-autocomplete{cursor:pointer}.combobox.sc-ir-autocomplete p.sc-ir-autocomplete:hover{background:#f4f5fa}.combobox.sc-ir-autocomplete p[data-selected].sc-ir-autocomplete,.combobox.sc-ir-autocomplete p[data-selected].sc-ir-autocomplete:hover{color:#fff;text-decoration:none;background-color:#666ee8}.loader.sc-ir-autocomplete{width:14px;height:14px;border:2px solid #0f0f0f;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
const IrAutocompleteStyle0 = irAutocompleteCss;

const IrAutocomplete = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.comboboxValue = index.createEvent(this, "comboboxValue", 7);
        this.inputCleared = index.createEvent(this, "inputCleared", 7);
        this.toast = index.createEvent(this, "toast", 7);
        this.duration = 300;
        this.placeholder = '';
        this.isSplitBooking = false;
        this.type = 'text';
        this.name = '';
        this.inputId = v4.v4();
        this.required = false;
        this.disabled = false;
        this.from_date = '';
        this.to_date = '';
        this.inputValue = '';
        this.data = [];
        this.selectedIndex = -1;
        this.isComboBoxVisible = false;
        this.isLoading = true;
        this.inputFocused = false;
        this.bookingService = new booking_service$1.BookingService();
        this.no_result_found = '';
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
            return (index.h("div", { class: `position-absolute dropdown-menu  rounded combobox` }, (_a = this.data) === null || _a === void 0 ? void 0 :
                _a.map((d, index$1) => (index.h("p", { role: "button", class: "dropdown-item", onKeyDown: e => this.handleItemKeyDown(e, index$1), "data-selected": this.selectedIndex === index$1, tabIndex: 0, onClick: () => this.selectItem(index$1) }, this.isSplitBooking ? (index.h(index.Fragment, null, `${d.booking_nbr} ${d.guest.first_name} ${d.guest.last_name}`)) : (index.h("div", { class: 'd-flex align-items-center flex-fill' }, index.h("p", { class: 'p-0 m-0' }, `${d.email}`, " ", index.h("span", { class: 'p-0 m-0' }, ` - ${d.first_name} ${d.last_name}`))))))), this.isLoading && (index.h("div", { class: "loader-container d-flex align-items-center justify-content-center" }, index.h("div", { class: "loader" }))), this.data.length === 0 && !this.isLoading && index.h("span", { class: 'text-center' }, this.no_result_found)));
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
        return (index.h(index.Host, { key: '0393360eef8d5d59a7656779fe8b0e20900ca0ea' }, index.h("div", { key: '3835fcb824d0a0e838db6d2f65da03b0d8f91c51', class: 'd-flex align-items-center ' }, index.h("label", { key: 'b6b07dd6801c807ef09f40791be91b5fa5d0406f', "data-state": this.inputFocused ? 'focused' : 'blured', htmlFor: this.inputId, class: `form-control input-sm ${this.danger_border && 'border-danger'}` }, index.h("svg", { key: '86c3a84c931b37e631cde7a4096b0def2b425908', xmlns: "http://www.w3.org/2000/svg", height: "12", width: "12", viewBox: "0 0 512 512" }, index.h("path", { key: 'c24ccbaaa0012da5a782e71c3d37831b9fc1920d', fill: "currentColor", d: "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" }))), index.h("input", { key: 'a27305265bc1867b21cace36675aedc2d11e15fa', "data-testid": this.testId, required: this.required, disabled: this.disabled, id: this.inputId, onKeyDown: this.handleKeyDown.bind(this), class: `form-control input-sm flex-full ${this.danger_border && 'border-danger'}`, type: this.type, name: this.name, value: this.value || this.inputValue, placeholder: this.placeholder, onBlur: this.handleBlur.bind(this), autoComplete: "none", onInput: this.handleInputChange.bind(this), onFocus: this.handleFocus.bind(this), ref: el => (this.inputRef = el) }), this.inputValue && (index.h("button", { key: 'ac40b8ebf97e5db29e3e26d12a66b71b28e24323', type: "button", class: 'position-absolute d-flex align-items-center justify-content-center ', onClick: this.clearInput.bind(this) }, index.h("p", { key: '4d6bce23d89ea17315c8fe6dc7eb3500f75d8d09', class: 'sr-only' }, "clear input"), index.h("svg", { key: 'b124619c25e13cb5582e0c0974e580913a8ea1e3', width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, index.h("path", { key: 'e179cd4f16032e9af7308f29f1ac77378905a5b7', d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" }))))), this.isComboBoxVisible && this.renderDropdown()));
    }
    get el() { return index.getElement(this); }
};
IrAutocomplete.style = IrAutocompleteStyle0;

const irCountryPickerCss = ".sc-ir-country-picker-h{display:block;margin:0;padding:0;box-sizing:border-box}.combobox-menu.sc-ir-country-picker{max-height:200px;overflow:auto}";
const IrCountryPickerStyle0 = irCountryPickerCss;

const IrCountryPicker = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.countryChange = index.createEvent(this, "countryChange", 7);
        this.countries = [];
        this.autoValidate = false;
        this.filteredCountries = [];
        this.searching = false;
    }
    componentWillLoad() {
        this.filteredCountries = [...this.countries];
        if (this.country) {
            this.inputValue = this.country.name;
            this.selectedCountry = this.country;
        }
    }
    handleCountryChange(newCountry, oldCountry) {
        var _a;
        if ((newCountry === null || newCountry === void 0 ? void 0 : newCountry.id) !== (oldCountry === null || oldCountry === void 0 ? void 0 : oldCountry.id)) {
            this.inputValue = (_a = this.country) === null || _a === void 0 ? void 0 : _a.name;
            this.selectedCountry = newCountry;
        }
    }
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
    selectCountry(c) {
        this.selectedCountry = c;
        this.inputValue = c === null || c === void 0 ? void 0 : c.name;
        this.filteredCountries = [...this.countries];
        this.countryChange.emit(c);
    }
    scrollToSelected() {
        setTimeout(() => {
            const dropdownItem = document.querySelector(`.dropdown-item.active`);
            if (dropdownItem) {
                dropdownItem.scrollIntoView({ behavior: 'instant', block: 'center' });
            }
        }, 100);
    }
    render() {
        var _a, _b, _c;
        const shouldShowPropertyCountry = this.filteredCountries.length > 0 && this.propertyCountry && (!this.searching || (this.searching && this.inputValue === ''));
        return (index.h("form", { key: '25fb22699068de867dd1647a8636c7fd6af300ab', class: "dropdown m-0 p-0" }, index.h("ir-input-text", { key: '0e96a3006f1401eea2a4cd8df5675c802b3f70aa', onTextChange: e => {
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
            } }), index.h("div", { key: 'cefd736c97234ae9e5b2fa609f74b845cd116efc', class: "dropdown-menu combobox-menu", "aria-labelledby": "dropdownMenuCombobox" }, shouldShowPropertyCountry && (index.h(index.Fragment, { key: '9a0513b545b3ade8d3b6d9c8efb6e44608af654d' }, index.h("button", { key: 'f81bdb2fb4563a69907f7a3a7a4ef5e7154128ff', type: "button", class: `dropdown-item d-flex align-items-center ${((_a = this.selectedCountry) === null || _a === void 0 ? void 0 : _a.id) === this.propertyCountry.id ? 'active' : ''}`, onClick: () => {
                this.selectCountry(this.propertyCountry);
            } }, index.h("img", { key: '1ebdc7ead13d3018d57b18f34142b0935b7053b4', src: this.propertyCountry.flag, alt: this.propertyCountry.name, style: { aspectRatio: '1', height: '15px', borderRadius: '4px' } }), index.h("p", { key: '77877cd84313d38f012d85092fb065219d65d2ce', class: "pl-1 m-0" }, this.propertyCountry.name)), index.h("div", { key: 'cd70cb22bd36b7a277dba12a68c175165582ad78', class: "dropdown-divider" }))), (_b = this.filteredCountries) === null || _b === void 0 ? void 0 :
            _b.map(c => {
                var _a;
                return (index.h("button", { key: c.id, type: "button", class: `dropdown-item d-flex align-items-center ${((_a = this.selectedCountry) === null || _a === void 0 ? void 0 : _a.id) === c.id ? 'active' : ''}`, onClick: () => {
                        this.selectCountry(c);
                    } }, index.h("img", { src: c.flag, alt: c.name, style: { aspectRatio: '1', height: '15px', borderRadius: '4px' } }), index.h("p", { class: "pl-1 m-0" }, c.name)));
            }), ((_c = this.filteredCountries) === null || _c === void 0 ? void 0 : _c.length) === 0 && index.h("p", { key: '9bd3944ccf9a38feba6b6dd31d2a48537bf489c9', class: "dropdown-item-text" }, "Invalid Country"))));
    }
    static get watchers() { return {
        "country": ["handleCountryChange"]
    }; }
};
IrCountryPicker.style = IrCountryPickerStyle0;

const irDateRangeCss = ".sc-ir-date-range-h{display:block;width:100%}.date-range-input.sc-ir-date-range{width:100%}";
const IrDateRangeStyle0 = irDateRangeCss;

const IrDateRange = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.dateChanged = index.createEvent(this, "dateChanged", 7);
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
        return (index.h(index.Host, { key: '1588c8926f00742fcd15ec7d124fc09836b736a7' }, index.h("input", { key: 'a627bcc67392126922d4d804f76184075c349eb3', class: "date-range-input", type: "button", disabled: this.disabled })));
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
        this.showDateDifference = true;
        this.dateOption = 'YYYY-MM-DD';
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
        this.dates.date_difference = utils.calculateDaysBetweenDates(fromDate, toDate);
    }
    convertDate(key, date) {
        this.dates = this.dates || {
            from_date: '',
            to_date: '',
            date_difference: 0,
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
        return (index.h(index.Host, { key: '9da1175261155caaa9d7972817e804153902cb30', class: "d-flex align-items-center" }, index.h("span", { key: '6606e181cbb532b3e796d5af74ec3dca7078b276' }, this.dates.from_date), ' ', index.h("svg", { key: '7bc5921e45b84060f9510fccdb726fe251769ef2', xmlns: "http://www.w3.org/2000/svg", class: "mx-01", height: "14", width: "14", viewBox: "0 0 512 512" }, index.h("path", { key: 'b1ff6bd0dc11309794edac0ca4afbb62537abab5', fill: "currentColor", d: "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" })), index.h("span", { key: '0449ac04005f0f12b216d5e2a013a9d497ab6a8b' }, this.dates.to_date, ' ', this.showDateDifference && (index.h("span", { key: '007f3e4797d8ebb28ff78d4a5a70ea8e3ca9d86e', class: "mx-01" }, this.dates.date_difference, '   ', this.dates.date_difference > 1 ? ` ${locales_store.locales.entries.Lcz_Nights}` : ` ${locales_store.locales.entries.Lcz_Night}`)))));
    }
    static get watchers() { return {
        "from_date": ["handleFromDateChange"],
        "to_date": ["handleToDateChange"]
    }; }
};
IrDateView.style = IrDateViewStyle0;

const irPhoneInputCss = ".sc-ir-phone-input-h{display:block}.input-container.sc-ir-phone-input{display:flex;align-items:center;padding:0 !important}.input-container.sc-ir-phone-input:focus-within{border-color:#1e9ff2}.border-theme.sc-ir-phone-input{border-color:#cacfe7}.input-container.sc-ir-phone-input input.sc-ir-phone-input{flex:1;border:0}.input-container.sc-ir-phone-input input.sc-ir-phone-input:focus{outline:none}.dropdown-trigger.sc-ir-phone-input{display:flex;align-items:center;gap:8px;background:white;border:0;border-right:1px solid #cacfe7}.ir-dropdown-container.sc-ir-phone-input{position:absolute;z-index:1000;bottom:-30px;width:100%;left:0;background:white}.input-container.sc-ir-phone-input label.sc-ir-phone-input{display:flex;align-items:center;justify-content:center;margin:0;padding:0 5px}.flag.sc-ir-phone-input{height:1rem;aspect-ratio:4/3;border-radius:3px}.is-invalid.sc-ir-phone-input{border-color:#ff4961}.phone_prefix_label.sc-ir-phone-input{padding:0 0.5rem;margin:0}";
const IrPhoneInputStyle0 = irPhoneInputCss;

const IrPhoneInput = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.textChange = index.createEvent(this, "textChange", 7);
        this.value = '';
        this.disabled = false;
        this.error = false;
        this.default_country = null;
        this.phone_prefix = null;
        this.countries = [];
        this.inputValue = '';
        this.isDropdownVisible = false;
        // private cmp_countries: ICountry[] = [];
        this.bookingService = new booking_service.BookingService();
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
        let country = this.countries.find(country => country.phone_prefix === this.phone_prefix);
        if (!country) {
            country = this.countries.find(c => c.id.toString() === this.phone_prefix);
            if (!country) {
                return;
            }
        }
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
        return (index.h(index.Host, { key: '0375ed6e348a3e751970d17a87cc2d3e3fd514d4' }, index.h("div", { key: 'b22d1ae9388e492a8735cb69965d23e90e430e52', class: "form-group mr-0" }, index.h("div", { key: 'bc9b7920a89b9c70d411ee8a2769de480c171d23', class: "input-group row m-0 p-0 position-relative" }, this.label && (index.h("div", { key: '6f07b21ceecfd16243b29c1ea10da7cc6bf3676c', class: `input-group-prepend col-3 p-0 text-dark border-none` }, index.h("label", { key: 'c776bf0d402fd22a1d4a2319143da2da3eedafce', class: `input-group-text  border-theme flex-grow-1 text-dark  ` }, this.label))), index.h("div", { key: '2fd8fc579bb7abf40b9fc114fae4e2049415fe68', class: 'form-control  input-container  flex-fill' + (this.error ? ' is-invalid' : '') }, index.h("button", { key: '71bc4eaf4c9fdf99918aa8195d4cde2185368b8e', type: "button", onClick: () => (this.isDropdownVisible = !this.isDropdownVisible), class: "dropdown-trigger" }, this.currentCountry ? index.h("img", { src: (_a = this.currentCountry) === null || _a === void 0 ? void 0 : _a.flag, class: "flag" }) : index.h("p", { class: "p-0 m-0 " }, locales_store.locales.entries.Lcz_Select), index.h("svg", { key: '30119417aa7f000edad36aae49109b1819a32927', xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, index.h("path", { key: '080dbcf4dd980b1e4f2f8de3abb60af0baba29b7', d: "M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" }))), index.h("p", { key: '7b1699ffd53342028d35a3b2e3a3c455387b33dd', class: 'phone_prefix_label' }, (_b = this.currentCountry) === null || _b === void 0 ? void 0 : _b.phone_prefix), index.h("input", { key: '2a1a7d12b2a27f6a0e63dccdbd0ff214c1bc98af', "data-testid": this.testId, maxLength: 14, type: "text", placeholder: this.placeholder, required: true, value: this.inputValue, disabled: this.disabled, onInput: e => this.handleInputChange(e) })), this.isDropdownVisible && (index.h("div", { key: '8b24df034cafb4acd3b398d6ccc0ee8fe4a29a37', class: "ir-dropdown-container" }, index.h("ir-combobox", { key: '56f492e7d503f4d9f626d400158940f8d351ddea', onComboboxValueChange: e => {
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

const irSpinnerCss = ":host{width:var(--ir-spinner-size, 1.25rem);height:var(--ir-spinner-size, 1.25rem);border:var(--ir-spinner-border-width, 2.5px) solid var(--ir-spinner-color, #3f3f3f);border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
const IrSpinnerStyle0 = irSpinnerCss;

const IrSpinner = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.unit = 'rem';
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
        return index.h(index.Host, { key: 'bf237b494f538124935ae2f0473bb40f6bd4b36b' });
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

const irTooltipCss = ".sc-ir-tooltip-h{position:relative}.tooltip-icon.sc-ir-tooltip{margin:0 5px;padding:0}.tooltip-inner-custom.sc-ir-tooltip{min-width:max-content !important}";
const IrTooltipStyle0 = irTooltipCss;

const IrTooltip = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.withHtml = true;
        this.customSlot = false;
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
        return (index.h(index.Host, { key: '8d50642d0789a95708a83662e16057b8506a9a29', class: "m-0 p-0" }, index.h("span", { key: '516a91770b199d8efbe8b75e4086522eb8bc1956', style: this.containerStyle, class: 'm-0 p-0 d-flex align-items-center justify-content-center', onMouseEnter: () => this.toggleOpen(true), onMouseLeave: () => this.toggleOpen(false) }, !this.customSlot ? (
        // <svg data-toggle="tooltip" data-placement="top" xmlns="http://www.w3.org/2000/svg" height="16" width="16" class="tooltip-icon" viewBox="0 0 512 512">
        //   <path
        //     fill="#6b6f82"
        //     d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
        //   />
        // </svg>
        index.h("svg", { xmlns: "http://www.w3.org/2000/svg", class: 'm-0 p-0', height: "16", width: "16", viewBox: "0 0 512 512" }, index.h("path", { fill: "#6b6f82", d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" }))) : (index.h("slot", { name: "tooltip-trigger" }))), this.open && (index.h("div", { key: 'c8501d18511ef82a3b55116577d79d07f337a817', class: "tooltip bottom show position-absolute", role: "tooltip" }, index.h("div", { key: '0e3afcb20e663126e1de4456c915e9278a4cd650', class: "tooltip-arrow" }), index.h("div", { key: '67adebe45fa3bc023e360e4ede6407710307c62a', class: `tooltip-inner fit ${this.customSlot && 'tooltip-inner-custom'}` }, index.h("span", { key: '2601f31935ee4c931d9ce80153f06d195d35ef1a', innerHTML: this.message }))))));
    }
};
IrTooltip.style = IrTooltipStyle0;

exports.igl_application_info = IglApplicationInfo;
exports.igl_block_dates_view = IglBlockDatesView;
exports.igl_book_property_header = IglBookPropertyHeader;
exports.igl_date_range = IglDateRange;
exports.igl_property_booked_by = IglPropertyBookedBy;
exports.igl_rate_plan = IglRatePlan;
exports.igl_room_type = IglRoomType;
exports.ir_autocomplete = IrAutocomplete;
exports.ir_country_picker = IrCountryPicker;
exports.ir_date_range = IrDateRange;
exports.ir_date_view = IrDateView;
exports.ir_phone_input = IrPhoneInput;
exports.ir_spinner = IrSpinner;
exports.ir_tooltip = IrTooltip;

//# sourceMappingURL=igl-application-info_14.cjs.entry.js.map