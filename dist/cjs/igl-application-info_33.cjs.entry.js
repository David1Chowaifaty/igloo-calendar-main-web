'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7a66eda1.js');
const booking_service = require('./booking.service-13cab367.js');
const locales_store = require('./locales.store-a1ac5174.js');
const calendarData = require('./calendar-data-960b69ba.js');
const utils = require('./utils-bf9b1b25.js');
const v4 = require('./v4-9b297151.js');
const moment = require('./moment-1780b03a.js');
const irInterceptor_store = require('./ir-interceptor.store-33c3ba11.js');
const index$1 = require('./index-63734c32.js');
const axios = require('./axios-6e678d52.js');
const room_service = require('./room.service-e031b11c.js');
const payment_service = require('./payment.service-3c37bbce.js');
const Token = require('./Token-3d0cc874.js');
const icons = require('./icons-751623e9.js');
const functions = require('./functions-1d46da3c.js');
const global_variables = require('./global.variables-108c9c1e.js');
const index$2 = require('./index-e9a28e3e.js');
require('./index-7564ffa1.js');

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

const iglApplicationInfoCss = ".sc-igl-application-info-h{display:block}.rate_amount.sc-igl-application-info{display:none;padding:0;margin:0}.booking-header.sc-igl-application-info{display:flex;align-items:center;justify-content:space-between;margin-bottom:0.5rem;gap:0.5rem}.non-ref-span.sc-igl-application-info{font-size:12px;color:var(--green)}.booking-roomtype-title.sc-igl-application-info{font-size:1.25rem;margin-right:0.5rem;margin:0;padding:0}.booking-details-container.sc-igl-application-info{display:flex;align-items:center;justify-content:space-between;padding:0;margin:0}.booking-rateplan.sc-igl-application-info{display:flex;align-items:center;gap:0.5rem;margin:0;padding:0}.booking-rateplan-name.sc-igl-application-info{font-weight:bold;margin:0;padding:0}.booking-tooltip.sc-igl-application-info{margin-right:0.5rem;margin:0;padding:0}.booking-variation.sc-igl-application-info{margin:0;padding:0}.booking-price.sc-igl-application-info{margin:0;padding:0}.booking-footer.sc-igl-application-info{display:flex;align-items:center;justify-content:space-between;padding:0;margin-bottom:0.5rem}.booking-details-container.sc-igl-application-info{display:none}@media (min-width: 768px){.booking-header.sc-igl-application-info{justify-content:flex-start}.booking-footer.sc-igl-application-info,.booking-price.sc-igl-application-info{display:none}.booking-details-container.sc-igl-application-info,.rate_amount.sc-igl-application-info{display:inline-flex;gap:0.5rem}}@media only screen and (min-width: 908px){.aplicationInfoContainer.sc-igl-application-info{max-width:100%}.guest-info-container.sc-igl-application-info,.bed-preference-container.sc-igl-application-info,.unit-select-container.sc-igl-application-info{max-width:250px}}";
const IglApplicationInfoStyle0 = iglApplicationInfoCss;

const IglApplicationInfo = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bedPreferenceType = [];
        this.bookingType = 'PLUS_BOOKING';
        this.totalNights = 1;
        this.isButtonPressed = false;
        this.variationService = new VariationService();
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        const filteredRoomList = this.filterRooms();
        const formattedVariation = this.variationService.formatVariationBasedOnInfants({
            baseVariation: this.rateplanSelection.selected_variation,
            infants: this.guestInfo.infant_nbr,
            variations: this.rateplanSelection.ratePlan.variations,
        });
        return (index.h(index.Host, { key: '270e3dc0949b4139e00170e997aa66d31177b8cd', class: 'my-2', "data-testid": `room_info_${this.rateplanSelection.ratePlan.id}` }, index.h("div", { key: 'bfca340a2e33ea209bb780fc1d7a577ad38fdbd1', class: "booking-header" }, (this.bookingType === 'PLUS_BOOKING' || this.bookingType === 'ADD_ROOM' || this.bookingType === 'EDIT_BOOKING') && (index.h("span", { key: 'aa19eb861f285cf72cbf8e8a56ca573f1498f945', class: "booking-roomtype-title" }, this.rateplanSelection.roomtype.name)), index.h("div", { key: '3087b8da03cd2cf3b53304d3079350520f11d821', class: "booking-details-container" }, index.h("div", { key: 'b6babfe4fe365bdaf0b2e6e5b472d96ccfc1c7e9', class: "booking-rateplan" }, index.h("p", { key: '7211e672a094a94c07bfa9c7da6dfd9f90e18e07', class: "booking-rateplan-name" }, this.rateplanSelection.ratePlan.short_name, " ", this.rateplanSelection.ratePlan.is_non_refundable && index.h("span", { key: '48f7cd820ec1b01c6241e0c4585dfb8498017bc6', class: 'non-ref-span' }, "Non Refundable")), index.h("ir-tooltip", { key: 'a68de9a3b9bd03c3f9fd4984b7868c9989be265f', class: "booking-tooltip", message: this.getTooltipMessages() })), index.h("p", { key: '5fe49ff41a3972d24041f1aabc59e3555bc255a5', class: "booking-variation", innerHTML: formattedVariation })), index.h("p", { key: '62a54cb87856de6a10436bc6c2a26954d407dda5', class: "booking-price" }, utils.formatAmount((_a = this.currency) === null || _a === void 0 ? void 0 : _a.symbol, this.getAmount()), "/", locales_store.locales.entries.Lcz_Stay)), index.h("div", { key: 'f746accf240b6bc7f0e6aa3b54286268d6699405', class: "booking-footer" }, index.h("div", { key: 'ed2b5e8379eaa3d3f9debffc64e63c6b3a3da90a', class: "booking-rateplan" }, index.h("p", { key: 'dd93b4e7753a9fff02d11b5e924148796ccc4da5', class: "booking-rateplan-name" }, this.rateplanSelection.ratePlan.short_name), index.h("ir-tooltip", { key: '27ccd413a9b2b89315fb291827c900a06097c7ec', class: "booking-tooltip", message: this.getTooltipMessages() })), index.h("p", { key: '8fed6aedf45fdd43f60e5be6243d26c43b9da328', class: "booking-variation", innerHTML: formattedVariation })), index.h("div", { key: 'cc6cb8d49f456c07af4484931031d5439c2648f7', class: "d-flex flex-column flex-md-row  p-0 align-items-md-center aplicationInfoContainer" }, index.h("div", { key: '4b30adda679ccdf9cdf30d97c5dc9aeeb7d2bd56', class: "mr-md-1 mb-1 mb-md-0 flex-fill guest-info-container" }, index.h("input", { key: 'ab764e2d79bff44061644ccb8354d2e3c11423b4', id: v4.v4(), type: "text", "data-testid": "guest_first_name", class: `form-control ${this.isButtonPressed && ((_b = this.guestInfo) === null || _b === void 0 ? void 0 : _b.first_name) === '' && 'border-danger'}`, placeholder: (_c = locales_store.locales.entries['Lcz_GuestFirstname']) !== null && _c !== void 0 ? _c : 'Guest first name', name: "guestFirstName", onInput: event => {
                const name = event.target.value;
                this.updateGuest({ first_name: name });
                if (booking_service.booking_store.event_type.type === 'EDIT_BOOKING') {
                    booking_service.modifyBookingStore('guest', Object.assign(Object.assign({}, booking_service.booking_store.guest), { name }));
                }
            }, required: true, value: (_d = this.guestInfo) === null || _d === void 0 ? void 0 : _d.first_name })), index.h("div", { key: '7504c9306bf9e7264952a334eba9748e67052472', class: "mr-md-1 flex-fill guest-info-container" }, index.h("input", { key: '0b0e165c2c91b5db8132702a612eb928e47fd0f2', id: v4.v4(), type: "text", class: `form-control ${this.isButtonPressed && ((_e = this.guestInfo) === null || _e === void 0 ? void 0 : _e.last_name) === '' && 'border-danger'}`, placeholder: (_f = locales_store.locales.entries['Lcz_GuestLastname']) !== null && _f !== void 0 ? _f : 'Guest last name', name: "guestLastName", "data-testid": "guest_last_name", onInput: event => {
                const name = event.target.value;
                this.updateGuest({ last_name: name });
                if (booking_service.booking_store.event_type.type === 'EDIT_BOOKING') {
                    booking_service.modifyBookingStore('guest', Object.assign(Object.assign({}, booking_service.booking_store.guest), { name }));
                }
            }, required: true, value: (_g = this.guestInfo) === null || _g === void 0 ? void 0 : _g.last_name })), calendarData.calendar_data.is_frontdesk_enabled &&
            !calendarData.isSingleUnit(this.rateplanSelection.roomtype.id) &&
            (this.bookingType === 'PLUS_BOOKING' || this.bookingType === 'ADD_ROOM' || this.bookingType === 'EDIT_BOOKING') && (index.h("div", { key: '957af199cf8c402a2de35173742f800fdf31cb20', class: "mt-1 mt-md-0 d-flex align-items-center flex-fill" }, index.h("div", { key: 'd1e3e370a2ed9e2b3d69884c77cea18b42b8b959', class: "mr-md-1 p-0 flex-fill preference-select-container" }, index.h("select", { key: '371a3b8673b7be48e1921e0fc434c144d52aa10d', "data-testid": "unit", class: "form-control input-sm pr-0", id: v4.v4(), onChange: event => this.updateGuest({ unit: event.target.value }) }, index.h("option", { key: '04e8109ba52eb1191cdbcdcaaa77b3b83b8baba1', value: "", selected: ((_h = this.guestInfo) === null || _h === void 0 ? void 0 : _h.unit) === '' }, locales_store.locales.entries.Lcz_Assignunits), filteredRoomList === null || filteredRoomList === void 0 ? void 0 :
            filteredRoomList.map(room => {
                var _a;
                return (index.h("option", { value: room.id, selected: ((_a = this.guestInfo) === null || _a === void 0 ? void 0 : _a.unit) === room.id.toString() }, room.name));
            }))))), this.rateplanSelection.roomtype.is_bed_configuration_enabled && (index.h("div", { key: '0e6de40478ee85bc99b9bd94df5ef639191cafa0', class: "mt-1 mt-md-0 mr-md-1 flex-fill" }, index.h("select", { key: '76bd075744f1021e63a9f445b0f41af1036fd309', "data-testid": "bed_configuration", class: `form-control input-sm ${this.isButtonPressed && ((_j = this.guestInfo) === null || _j === void 0 ? void 0 : _j.bed_preference) === '' && 'border-danger'}`, id: v4.v4(), onChange: event => this.updateGuest({ bed_preference: event.target.value }) }, index.h("option", { key: 'e14a3e622f12b8012151275c4e346064f9469970', value: "", selected: ((_k = this.guestInfo) === null || _k === void 0 ? void 0 : _k.bed_preference) === '' }, locales_store.locales.entries.Lcz_BedConfiguration), this.bedPreferenceType.map(data => {
            var _a;
            return (index.h("option", { value: data.CODE_NAME, selected: ((_a = this.guestInfo) === null || _a === void 0 ? void 0 : _a.bed_preference) === data.CODE_NAME }, data.CODE_VALUE_EN));
        })))), index.h("p", { key: 'ad77cc7de624bbb0ec4d981323c3fe8e7ed66b9c', class: "rate_amount" }, utils.formatAmount((_l = this.currency) === null || _l === void 0 ? void 0 : _l.symbol, this.getAmount()), "/", locales_store.locales.entries.Lcz_Stay)), this.rateplanSelection.selected_variation.child_nbr > 0 && (index.h("div", { key: '06d302f33d90c4439e2d626ac5522c48eab0ec88', style: { gap: '0.5rem', marginTop: '0.5rem' }, class: "d-flex  flex-row  p-0 align-items-center aplicationInfoContainer" }, index.h("p", { key: '36338e61b71d69389a5ad2d43563a9309fbbbeed', class: 'm-0 p-0 text-danger' }, "Any of the children below 3 years?"), index.h("div", { key: 'cd3a92cd2f3473eaecf2f3412bfecacd49d7bb5e', class: "mr-1 flex-fill" }, index.h("select", { key: '43c120521784dcf8539a71fc8ecee074deebc3d2', class: `form-control input-sm ${this.isButtonPressed && ((_m = this.guestInfo) === null || _m === void 0 ? void 0 : _m.bed_preference) === '' && 'border-danger'}`, id: v4.v4(), style: { width: 'max-content' }, onChange: event => this.updateGuest({ infant_nbr: Number(event.target.value) }) }, index.h("option", { key: '47484dc2d40f4d78d53b58fcf246b6c964970d2e', value: "", selected: Number((_o = this.guestInfo) === null || _o === void 0 ? void 0 : _o.infant_nbr) === 0 }, locales_store.locales.entries['No'] || 'No'), Array.from({ length: this.rateplanSelection.selected_variation.child_nbr }, (_, i) => i + 1).map(item => {
            var _a;
            return (index.h("option", { value: item, selected: ((_a = this.guestInfo) === null || _a === void 0 ? void 0 : _a.infant_nbr) === item }, item));
        })))))));
    }
};
IglApplicationInfo.style = IglApplicationInfoStyle0;

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
    calculateAmount({ is_amount_modified, selected_variation, view_mode, rp_amount }) {
        const total_days = selected_variation.nights.length;
        if (is_amount_modified) {
            return view_mode === '002' ? rp_amount : rp_amount / total_days;
        }
    }
    generateDailyRates(rate_plan, i) {
        let variation = rate_plan.selected_variation;
        const amount = rate_plan.is_amount_modified ? this.calculateAmount(rate_plan) : null;
        if (rate_plan.guest[i].infant_nbr > 0 && !rate_plan.is_amount_modified) {
            if (!this.variationService) {
                this.variationService = new VariationService();
            }
            variation = this.variationService.getVariationBasedOnInfants({
                variations: rate_plan.ratePlan.variations,
                baseVariation: rate_plan.selected_variation,
                infants: rate_plan.guest[i].infant_nbr,
            });
        }
        return variation.nights.map(n => ({
            date: n.night,
            amount: amount !== null && amount !== void 0 ? amount : n.discounted_amount,
            cost: null,
        }));
    }
    // private extractFirstNameAndLastName(name: string) {
    //   const names = name.split(' ');
    //   return { first_name: names[0] || null, last_name: names[1] || null };
    // }
    getBookedRooms({ check_in, check_out, notes, identifier, override_unit, unit, auto_check_in, }) {
        var _a, _b;
        const rooms = [];
        for (const roomTypeId in booking_service.booking_store.ratePlanSelections) {
            const roomtype = booking_service.booking_store.ratePlanSelections[roomTypeId];
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
                                children_nbr: Number((_a = rateplan.selected_variation.child_nbr) !== null && _a !== void 0 ? _a : 0) - Math.max(Number((_b = rateplan.guest[i].infant_nbr) !== null && _b !== void 0 ? _b : 0), 0),
                                infant_nbr: rateplan.guest[i].infant_nbr,
                            },
                            bed_preference: rateplan.guest[i].bed_preference,
                            from_date: moment.hooks(check_in).format('YYYY-MM-DD'),
                            to_date: moment.hooks(check_out).format('YYYY-MM-DD'),
                            notes,
                            check_in: auto_check_in,
                            days: this.generateDailyRates(rateplan, i),
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
                    is_backend: true,
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
                    const { booking, ROOMS } = context.defaultData;
                    // console.log(booking);
                    if (!booking) {
                        throw new Error('Missing booking');
                    }
                    const newRooms = generateNewRooms();
                    const previousRooms = context.defaultData.event_type === 'ADD_ROOM' ? ROOMS !== null && ROOMS !== void 0 ? ROOMS : [] : booking === null || booking === void 0 ? void 0 : booking.rooms;
                    newBooking = modifyBookingDetails(booking, [...previousRooms, ...newRooms]);
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
                        is_backend: true,
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

const iglBookPropertyCss = ".sc-igl-book-property-h{position:fixed;top:0;right:0;width:100vw;min-height:100vh;z-index:99;overflow:hidden}.card-title.sc-igl-book-property{border-bottom:1px solid #e4e5ec;width:100%}.card-header-container.sc-igl-book-property{border-bottom:1px solid #e4e5ec;width:100%;display:flex;align-items:center;box-sizing:border-box;padding:1rem 0;justify-content:space-between}.loading-container.sc-igl-book-property{height:100%;width:100%;display:flex;justify-content:center;align-items:center;margin:0;padding:0}.card-header-container.sc-igl-book-property h3.sc-igl-book-property{padding:0;margin:0}.background-overlay.sc-igl-book-property{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.25)}.formContainer.sc-igl-book-property{height:calc(100% - 79px);overflow:auto}.gap-30.sc-igl-book-property{gap:30px}.block-date.sc-igl-book-property{width:100%}.sideWindow.sc-igl-book-property{position:absolute;inset:0;left:unset;background-color:#ffffff;width:100%;overflow:auto;animation:slideInFromRight 0.5s}.card.sc-igl-book-property{top:0;z-index:1000}.close.sc-igl-book-property{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:0.5;padding:0;background-color:transparent;border:0;appearance:none}.close-icon.sc-igl-book-property{position:absolute;top:18px;right:33px;outline:none}button.sc-igl-book-property:not(:disabled),[type='button'].sc-igl-book-property:not(:disabled){cursor:pointer}.sheet-footer.sc-igl-book-property{width:100%}@media only screen and (min-width: 1200px){.sideWindow.sc-igl-book-property{max-width:70%}}@media only screen and (min-width: 2000px){.sideWindow.sc-igl-book-property{max-width:40%}}@media only screen and (min-width: 768px) and (max-width: 1200px){.sideWindow.sc-igl-book-property{max-width:90%}}@media only screen and (min-width: 600px) and (max-width: 768px){.sideWindow.sc-igl-book-property{max-width:75%}}@media only screen and (min-width: 641px){.block-date.sc-igl-book-property{max-width:450px;padding-bottom:0 !important}}@keyframes slideInFromRight{from{transform:translateX(120%)}to{transform:translateX(0)}}@keyframes slideOutToRight{from{transform:translateX(0)}to{transform:translateX(120%)}}.sideWindow--exit.sc-igl-book-property{animation:slideOutToRight 0.5s forwards}";
const IglBookPropertyStyle0 = iglBookPropertyCss;

const sheetCss$6 = ".sc-igl-book-property-h{height:100%}.sheet-container.sc-igl-book-property{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-igl-book-property{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-igl-book-property{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-igl-book-property{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-igl-book-property{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-igl-book-property{flex-direction:row;align-items:center}}";
const IglBookPropertyStyle1 = sheetCss$6;

const IglBookProperty = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeBookingWindow = index.createEvent(this, "closeBookingWindow", 7);
        this.blockedCreated = index.createEvent(this, "blockedCreated", 7);
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt", 7);
        this.animateIrButton = index.createEvent(this, "animateIrButton", 7);
        this.animateIrSelect = index.createEvent(this, "animateIrSelect", 7);
        this.toast = index.createEvent(this, "toast", 7);
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
        this.bookingService = new booking_service.BookingService();
        this.bookPropertyService = new IglBookPropertyService();
        this.updatedBooking = false;
        this.MAX_HISTORY_LENGTH = 2;
    }
    async componentWillLoad() {
        console.log('<==>roomtypes<==>', booking_service.booking_store === null || booking_service.booking_store === void 0 ? void 0 : booking_service.booking_store.roomTypes);
        if (booking_service.booking_store.roomTypes) {
            booking_service.modifyBookingStore('roomTypes', []);
            booking_service.modifyBookingStore('ratePlanSelections', {});
        }
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.initializeDefaultDateRange();
        if (!this.bookingData.defaultDateRange) {
            return;
        }
        // console.log(this.bookingData);
        this.initializeDefaultData();
        this.wasBlockedUnit = this.defaultData.hasOwnProperty('block_exposed_unit_props');
        booking_service.modifyBookingStore('event_type', { type: this.defaultData.event_type });
        this.fetchSetupEntriesAndInitialize();
    }
    componentDidLoad() {
        document.addEventListener('keydown', this.handleKeyDown);
        utils.handleBodyOverflow(true);
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
                if (this.isEventType('BAR_BOOKING')) {
                    booking_service.resetReserved();
                }
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
            this.initializeEventData();
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
        booking_service.modifyBookingStore('guest', {
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
        for (const roomtypeId in booking_service.booking_store.ratePlanSelections) {
            const roomtype = booking_service.booking_store.ratePlanSelections[roomtypeId];
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
        this._sourceOptions = this.isEventType('BAR_BOOKING') ? this.getFilteredSourceOptions() : this.sourceOptions;
        if (this.isEventType('EDIT_BOOKING')) {
            this.sourceOption = Object.assign({}, this.defaultData.SOURCE);
        }
        else {
            //get first source option not tag
            let option = this._sourceOptions.find(o => o.type !== 'LABEL');
            console.log({ option });
            this.sourceOption = {
                code: option.code,
                description: option.description,
                tag: option.tag,
                type: option.type,
                id: option.id,
            };
        }
    }
    getFilteredSourceOptions() {
        var _a, _b, _c, _d;
        const agentIds = new Set();
        const hasAgentOnlyRoomType = (_c = (_b = (_a = this.bookingData) === null || _a === void 0 ? void 0 : _a.roomsInfo) === null || _b === void 0 ? void 0 : _b.some((rt) => {
            var _a;
            const rps = (_a = rt === null || rt === void 0 ? void 0 : rt.rateplans) !== null && _a !== void 0 ? _a : [];
            if (rps.length === 0)
                return false;
            const isForAgentOnly = rps.every((rp) => { var _a, _b; return ((_b = (_a = rp === null || rp === void 0 ? void 0 : rp.agents) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) > 0; });
            if (isForAgentOnly) {
                rps.forEach((rp) => {
                    var _a;
                    ((_a = rp === null || rp === void 0 ? void 0 : rp.agents) !== null && _a !== void 0 ? _a : []).forEach((ag) => { var _a; return agentIds.add((_a = ag === null || ag === void 0 ? void 0 : ag.id) === null || _a === void 0 ? void 0 : _a.toString()); });
                });
            }
            return isForAgentOnly;
        })) !== null && _c !== void 0 ? _c : false;
        if (!hasAgentOnlyRoomType) {
            return this.sourceOptions;
        }
        return ((_d = this.sourceOptions) !== null && _d !== void 0 ? _d : []).filter((opt) => {
            if ((opt === null || opt === void 0 ? void 0 : opt.type) === 'LABEL')
                return true;
            const candidate = opt === null || opt === void 0 ? void 0 : opt.tag;
            const matchesId = candidate != null && agentIds.has(candidate);
            return matchesId;
        });
    }
    setOtherProperties(res) {
        this.ratePricingMode = res === null || res === void 0 ? void 0 : res.ratePricingMode;
        this.bookedByInfoData.arrivalTime = res.arrivalTime;
        this.bedPreferenceType = res.bedPreferenceType;
    }
    async checkBookingAvailability() {
        booking_service.resetBookingStore();
        const from_date = moment.hooks(this.dateRangeData.fromDate).format('YYYY-MM-DD');
        const to_date = moment.hooks(this.dateRangeData.toDate).format('YYYY-MM-DD');
        console.log({ sourceOption: this.sourceOption });
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
            const guest = {
                bed_preference: (_a = currentRoomType.bed_preference) === null || _a === void 0 ? void 0 : _a.toString(),
                infant_nbr: currentRoomType.occupancy.infant_nbr,
                last_name: GUEST.last_name,
                first_name: GUEST.first_name,
                unit: (_c = (_b = currentRoomType.unit) === null || _b === void 0 ? void 0 : _b.id) === null || _c === void 0 ? void 0 : _c.toString(),
                roomtype_id: currentRoomType.roomtype.id,
            };
            booking_service.modifyBookingStore('guest', guest);
            booking_service.reserveRooms({
                roomTypeId: roomtypeId,
                ratePlanId: rateplanId,
                rooms: 1,
                guest: [guest],
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
            const isAvailable = booking_service.booking_store.roomTypes.every(rt => {
                if (rt.is_available_to_book) {
                    return true;
                }
                return rt.inventory > 0 && rt['not_available_reason'] === 'ALL-RATES-PLAN-NOT-BOOKABLE';
            });
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
        utils.handleBodyOverflow(false);
        if (this.wasBlockedUnit && !this.didReservation) {
            await this.checkAndBlockDate();
        }
        const el = document.querySelector('.sideWindow');
        if (!el)
            return;
        el.classList.add('sideWindow--exit');
        setTimeout(() => {
            this.closeBookingWindow.emit();
            document.removeEventListener('keydown', this.handleKeyDown);
        }, 300);
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
            if (this.isEventType('BAR_BOOKING') || this.wasBlockedUnit || this.isEventType('SPLIT_BOOKING')) {
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
        return (index.h(index.Fragment, null, index.h("igl-block-dates-view", { fromDate: this.defaultData.FROM_DATE, toDate: this.defaultData.TO_DATE, entryDate: this.defaultData.ENTRY_DATE, onDataUpdateEvent: event => this.handleBlockDateUpdate(event) })));
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
        // const blockedUnit = await transformNewBLockedRooms(result);
        await this.bookingService.blockUnit(props);
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
            await this.adjustBlockedDatesAfterReservation(serviceParams);
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
    async adjustBlockedDatesAfterReservation(serviceParams) {
        if (!this.wasBlockedUnit) {
            return;
        }
        const original_from_date = moment.hooks(this.defaultData.block_exposed_unit_props.from_date, 'YYYY-MM-DD');
        const current_from_date = moment.hooks(serviceParams.booking.from_date, 'YYYY-MM-DD');
        const original_to_date = moment.hooks(this.defaultData.block_exposed_unit_props.to_date, 'YYYY-MM-DD');
        const current_to_date = moment.hooks(serviceParams.booking.to_date, 'YYYY-MM-DD');
        if (current_to_date.isBefore(original_to_date, 'days')) {
            const props = Object.assign(Object.assign({}, this.defaultData.block_exposed_unit_props), { from_date: current_to_date.format('YYYY-MM-DD') });
            await this.bookingService.blockUnit(props);
        }
        if (current_from_date.isAfter(original_from_date, 'days')) {
            const props = Object.assign(Object.assign({}, this.defaultData.block_exposed_unit_props), { to_date: current_from_date.format('YYYY-MM-DD') });
            await this.bookingService.blockUnit(props);
        }
        return;
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
        return (index.h(index.Host, { key: '369ed3e0f4202ec04b69bea53effd363e10d85a2', "data-testid": "book_property_sheet h-100" }, index.h("div", { key: 'be32cb1439d810e50c22d74a5fba1832216caa8e', class: "background-overlay", onClick: () => this.closeWindow() }), index.h("div", { key: '601e36e67a2c75d2b0d05747dea0850626e0906a', class: 'sideWindow sheet-container ' + (this.getCurrentPage('page_block_date') ? 'block-date' : '') }, irInterceptor_store.isRequestPending('/Get_Setup_Entries_By_TBL_NAME_MULTI') ? (index.h("div", { class: 'loading-container' }, index.h("ir-spinner", null))) : (index.h(index.Fragment, null, index.h("div", { class: "sheet-header" }, index.h("div", { class: "card-header-container mb-2" }, index.h("h3", { class: "text-left font-medium-2 px-2" }, this.getCurrentPage('page_block_date') ? this.defaultData.BLOCK_DATES_TITLE : this.defaultData.TITLE), index.h("ir-icon", { class: 'px-2', onIconClickHandler: () => {
                this.closeWindow();
            } }, index.h("svg", { slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, index.h("path", { fill: "currentColor", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" }))))), index.h("div", { class: "px-2 sheet-body" }, this.getCurrentPage('page_one') && (index.h("igl-booking-overview-page", { wasBlockedUnit: this.wasBlockedUnit, initialRoomIds: this.initialRoomIds, defaultDaterange: this.defaultDateRange, eventType: this.defaultData.event_type, selectedRooms: this.selectedUnits, currency: this.currency, showSplitBookingOption: this.showSplitBookingOption, ratePricingMode: this.ratePricingMode, dateRangeData: this.dateRangeData, bookingData: this.defaultData, adultChildCount: this.adultChildCount, bookedByInfoData: this.bookedByInfoData, adultChildConstraints: this.adultChildConstraints, sourceOptions: this._sourceOptions, propertyId: this.propertyid })), this.getCurrentPage('page_two') && (index.h("igl-booking-form", { currency: this.currency, propertyId: this.propertyid, showPaymentDetails: this.showPaymentDetails, selectedGuestData: this.guestData, countries: this.countries, isLoading: this.isLoading, selectedRooms: this.selectedUnits, bedPreferenceType: this.bedPreferenceType, dateRangeData: this.dateRangeData, bookingData: this.defaultData, showSplitBookingOption: this.showSplitBookingOption, language: this.language, bookedByInfoData: this.bookedByInfoData, defaultGuestData: this.defaultData, isEditOrAddRoomEvent: this.isEventType('EDIT_BOOKING') || this.isEventType('ADD_ROOM'), onDataUpdateEvent: event => this.handlePageTwoDataUpdateEvent(event) })), this.getCurrentPage('page_block_date') ? this.getPageBlockDatesView() : null), this.getCurrentPage('page_block_date') ? (index.h("div", { class: "sheet-footer" }, index.h("ir-button", { text: locales_store.locales.entries.Lcz_Cancel, btn_color: "secondary", class: "flex-fill", onClick: () => this.closeWindow() }), index.h("ir-button", { text: locales_store.locales.entries.Lcz_Blockdates, isLoading: irInterceptor_store.isRequestPending('/Block_Exposed_Unit'), class: "flex-fill", onClick: () => this.handleBlockDate() }))) : (index.h("igl-book-property-footer", { page: this.page, dateRangeData: this.dateRangeData, isEditOrAddRoomEvent: this.isEventType('EDIT_BOOKING') || this.isEventType('ADD_ROOM'), isLoading: this.isLoading, class: 'sheet-footer', eventType: this.bookingData.event_type })))))));
    }
};
IglBookProperty.style = IglBookPropertyStyle0 + IglBookPropertyStyle1;

const iglBookPropertyFooterCss = ".sc-igl-book-property-footer-h{width:100% !important;background:#000}";
const IglBookPropertyFooterStyle0 = iglBookPropertyFooterCss;

const IglBookPropertyFooter = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.buttonClicked = index.createEvent(this, "buttonClicked", 7);
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
    renderButton({ label, type, disabled, icon_name, isLoading, icon_position = 'right', }) {
        return (index.h("div", { class: this.shouldRenderTwoButtons() ? ` ${this.editNext(label)}` : 'flex-fill' }, index.h("ir-button", { isLoading: isLoading, btn_color: type === 'cancel' || type === 'back' ? 'secondary' : 'primary', text: label, btn_disabled: disabled, onClickHandler: () => {
                this.buttonClicked.emit({ key: type });
            }, class: "full-width", btn_styles: "justify-content-center", icon_name: icon_name, iconPosition: icon_position, style: { '--icon-size': '1rem' }, icon_style: { paddingBottom: '1.9px' } })));
    }
    shouldRenderTwoButtons() {
        return this.isEventType('PLUS_BOOKING') || this.isEventType('ADD_ROOM') || this.isEventType('EDIT_BOOKING');
    }
    render() {
        var _a;
        if (this.page === 'page_one') {
            return (index.h(index.Host, null, this.isEventType('EDIT_BOOKING') ? (index.h(index.Fragment, null, this.renderButton({ type: 'cancel', label: locales_store.locales.entries.Lcz_Cancel }), this.shouldRenderTwoButtons() &&
                this.renderButton({
                    type: 'next',
                    label: `${locales_store.locales.entries.Lcz_Next}`,
                    disabled: irInterceptor_store.isRequestPending('/Get_Exposed_Booking_Availability'),
                    icon_name: 'angles_right',
                }))) : (index.h(index.Fragment, null, this.renderButton({ type: 'cancel', label: locales_store.locales.entries.Lcz_Cancel }), this.shouldRenderTwoButtons() && this.renderButton({ type: 'next', label: `${locales_store.locales.entries.Lcz_Next}`, icon_name: 'angles_right' })))));
        }
        const showBookAndCheckin = calendarData.calendar_data.checkin_enabled && moment.hooks(new Date((_a = this.dateRangeData) === null || _a === void 0 ? void 0 : _a.fromDate)).isSame(new Date(), 'day');
        return (index.h(index.Fragment, null, this.isEditOrAddRoomEvent ? (index.h(index.Fragment, null, this.renderButton({ type: 'back', icon_position: 'left', label: locales_store.locales.entries.Lcz_Back, icon_name: 'angles_left' }), this.renderButton({ type: 'save', label: locales_store.locales.entries.Lcz_Save, isLoading: this.isLoading === 'save' }))) : (index.h(index.Fragment, null, this.renderButton({ type: 'back', icon_position: 'left', label: locales_store.locales.entries.Lcz_Back, icon_name: 'angles_left' }), this.renderButton({ type: 'book', label: locales_store.locales.entries.Lcz_Book, isLoading: this.isLoading === 'book' }), showBookAndCheckin && this.renderButton({ type: 'bookAndCheckIn', label: locales_store.locales.entries.Lcz_BookAndChekcIn, isLoading: this.isLoading === 'bookAndCheckIn' })))));
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
        booking_service.modifyBookingStore('bookingAvailabilityParams', {
            from_date: this.bookingDataDefaultDateRange.fromDate,
            to_date: this.bookingDataDefaultDateRange.toDate,
            adult_nbr: (_a = obj === null || obj === void 0 ? void 0 : obj['adult']) !== null && _a !== void 0 ? _a : 0,
            child_nbr: (_b = obj === null || obj === void 0 ? void 0 : obj['child']) !== null && _b !== void 0 ? _b : 0,
        });
        this.adultChild.emit(obj);
    }
    getAdultChildConstraints() {
        var _a, _b, _c, _d;
        return (index.h("div", { class: 'mt-1 mt-lg-0 d-flex flex-column text-left' }, index.h("div", { class: "form-group  my-lg-0 text-left d-flex align-items-center justify-content-between justify-content-sm-start" }, index.h("fieldset", null, index.h("div", { class: "btn-group ml-0" }, index.h("ir-select", { testId: "adult_number", class: 'm-0', selectedValue: (_b = (_a = this.adultChildCount) === null || _a === void 0 ? void 0 : _a.adult) === null || _b === void 0 ? void 0 : _b.toString(), onSelectChange: e => this.handleAdultChildChange('adult', e.detail), selectId: "adult_select", firstOption: locales_store.locales.entries.Lcz_AdultsCaption, data: Array.from(Array(this.adultChildConstraints.adult_max_nbr), (_, i) => i + 1).map(option => ({
                text: option.toString(),
                value: option.toString(),
            })) }))), this.adultChildConstraints.child_max_nbr > 0 && (index.h("fieldset", null, index.h("div", { class: "btn-group ml-1 p-0" }, index.h("ir-select", { selectedValue: (_d = (_c = this.adultChildCount) === null || _c === void 0 ? void 0 : _c.child) === null || _d === void 0 ? void 0 : _d.toString(), testId: "child_number", onSelectChange: e => this.handleAdultChildChange('child', e.detail), selectId: "child_select", firstOption: this.renderChildCaption(), data: Array.from(Array(this.adultChildConstraints.child_max_nbr), (_, i) => i + 1).map(option => ({
                text: option.toString(),
                value: option.toString(),
            })) })))), index.h("ir-button", { btn_id: "check_availability", isLoading: irInterceptor_store.isRequestPending('/Check_Availability'), size: "sm", class: "ml-2", text: locales_store.locales.entries.Lcz_Check, onClickHandler: () => this.handleButtonClicked() }))));
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
    getMinDate() {
        var _a;
        if (this.isEventType('PLUS_BOOKING')) {
            return moment.hooks().add(-1, 'months').startOf('month').format('YYYY-MM-DD');
        }
        if (this.wasBlockedUnit) {
            return (_a = this.bookingData) === null || _a === void 0 ? void 0 : _a.block_exposed_unit_props.from_date;
        }
        return this.minDate;
    }
    getMaxDate() {
        var _a, _b;
        if (!((_a = this.bookingData) === null || _a === void 0 ? void 0 : _a.block_exposed_unit_props)) {
            return undefined;
        }
        return (_b = this.bookingData) === null || _b === void 0 ? void 0 : _b.block_exposed_unit_props.to_date;
    }
    render() {
        const showSourceNode = this.showSplitBookingOption ? this.getSplitBookingList() : this.isEventType('EDIT_BOOKING') || this.isEventType('ADD_ROOM') ? false : true;
        return (index.h(index.Host, { key: '64aec62e31e4b302a6f8758f5d73e5f64c11fd8e' }, this.isEventType('SPLIT_BOOKING') && this.getSplitBookingList(), showSourceNode && this.getSourceNode(), index.h("div", { key: '1836a74c2a7e6fc96d47c77eac74bab630ed3214', class: `d-flex flex-column flex-lg-row align-items-lg-center ${showSourceNode ? 'mt-1' : ''}` }, index.h("fieldset", { key: '2216950da07e1ef324cc439b134f529638529029', class: "mt-lg-0 mr-1 " }, index.h("igl-date-range", { key: 'd2329c21758e8f28839ad8e822fba6b8eafc2693', "data-testid": "date_picker", variant: "booking", dateLabel: locales_store.locales.entries.Lcz_Dates, maxDate: this.getMaxDate(), minDate: this.getMinDate(), disabled: (this.isEventType('BAR_BOOKING') && !this.wasBlockedUnit) || this.isEventType('SPLIT_BOOKING'), defaultData: this.bookingDataDefaultDateRange })), !this.isEventType('EDIT_BOOKING') && this.getAdultChildConstraints()), index.h("p", { key: '8427bca07bdf81b9e060684bd54f59659a1eb91f', class: "text-right mt-1 message-label" }, calendarData.calendar_data.tax_statement)));
    }
};
IglBookPropertyHeader.style = IglBookPropertyHeaderStyle0;

const iglBookingFormCss = ".sc-igl-booking-form-h{display:flex;flex-direction:column}";
const IglBookingFormStyle0 = iglBookingFormCss;

const IglBookingForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.dataUpdateEvent = index.createEvent(this, "dataUpdateEvent", 7);
        this.buttonClicked = index.createEvent(this, "buttonClicked", 7);
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
        return (index.h("div", { key: 'e326420f127c97d2032604c58aa6ff1c4777ff8f', class: "d-flex flex-column h-100" }, index.h("div", { key: 'feef108a586c2f94a67cbb26c41b9a563c325fed', class: "d-flex flex-wrap" }, index.h("ir-date-view", { key: '74d2ea0068da7b04c35896a4d69438287ebe0fbb', class: "mr-1 flex-fill font-weight-bold font-medium-1", from_date: new Date(this.dateRangeData.fromDate), to_date: new Date(this.dateRangeData.toDate), dateOption: "DD MMM YYYY" }), this.guestData.length > 1 && (index.h("div", { key: '1d57c3f8e4e3dc3e8341af35dca172622989022d', class: "mt-1 mt-md-0 text-right" }, locales_store.locales.entries.Lcz_TotalPrice, " ", index.h("span", { key: 'df4cbcc51fefec735c0f9bee50b69793aeb88952', class: "font-weight-bold font-medium-1" }, utils.formatAmount(this.currency.symbol, this.bookingData.TOTAL_PRICE || '0'))))), Object.values(booking_service.booking_store.ratePlanSelections).map(val => Object.values(val).map(ratePlan => {
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
        })), this.isEditOrAddRoomEvent || this.showSplitBookingOption ? null : (index.h("igl-property-booked-by", { propertyId: this.propertyId, countries: this.countries, language: this.language, showPaymentDetails: this.showPaymentDetails, defaultData: this.bookedByInfoData, onDataUpdateEvent: event => {
                this.handleEventData(event, 'propertyBookedBy', 0);
            } }))));
    }
};
IglBookingForm.style = IglBookingFormStyle0;

const iglBookingOverviewPageCss = ".sc-igl-booking-overview-page-h{display:block}.sc-igl-booking-overview-page-h>*.sc-igl-booking-overview-page{margin:0;padding:auto}.scrollContent.sc-igl-booking-overview-page{height:calc(100% - 79px);overflow:auto;position:relative}.loading-container.sc-igl-booking-overview-page{display:flex;align-items:center;justify-content:center;height:100%;background:white;position:absolute;inset:0;z-index:100}.loader.sc-igl-booking-overview-page{width:1.25rem;height:1.25rem;border:2.5px solid #3f3f3f;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}";
const IglBookingOverviewPageStyle0 = iglBookingOverviewPageCss;

const IglBookingOverviewPage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.roomsDataUpdate = index.createEvent(this, "roomsDataUpdate", 7);
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
        return (index.h(index.Host, { key: 'faf7b0fc05351cf3d063857d8fcb5ca7a8bc4af7' }, index.h("igl-book-property-header", { key: 'd54c5b1502b528eb63b9dc6c61a6e35ac3e76924', wasBlockedUnit: this.wasBlockedUnit, bookedByInfoData: this.bookedByInfoData, defaultDaterange: this.defaultDaterange, dateRangeData: this.dateRangeData, minDate: this.setMinDate(),
            // minDate={this.isEventType('ADD_ROOM') || this.isEventType('SPLIT_BOOKING') ? this.bookedByInfoData.from_date || this.bookingData.FROM_DATE : undefined}
            adultChildCount: this.adultChildCount, splitBookingId: this.showSplitBookingOption, bookingData: this.bookingData, sourceOptions: this.sourceOptions, message: this.message, bookingDataDefaultDateRange: this.bookingData.defaultDateRange, showSplitBookingOption: this.showSplitBookingOption, adultChildConstraints: this.adultChildConstraints, splitBookings: this.getSplitBookings(), propertyId: this.propertyId }), index.h("div", { key: '610d2268e8b252dfab4b18a9c660dfe945fcc00e', class: " text-left" }, irInterceptor_store.isRequestPending('/Check_Availability') && this.isEventType('EDIT_BOOKING') ? (index.h("div", { class: "loading-container" }, index.h("div", { class: "loader" }))) : (index.h(index.Fragment, null, (_a = booking_service.booking_store.roomTypes) === null || _a === void 0 ? void 0 : _a.map(roomType => (index.h("igl-room-type", { initialRoomIds: this.initialRoomIds, isBookDisabled: Object.keys(this.bookedByInfoData).length <= 1, key: `room-type-${roomType.id}`, currency: this.currency, ratePricingMode: this.ratePricingMode, dateDifference: this.dateRangeData.dateDifference, bookingType: this.bookingData.event_type, roomType: roomType, class: "mt-2 mb-1 p-0", "data-testid": `room_type_${roomType.id}`, id: roomType.id.toString(), roomInfoId: this.selectedRooms.has(`c_${roomType.id}`) ? roomType.id : null, onDataUpdateEvent: evt => this.roomsDataUpdate.emit(evt.detail) }))))))));
    }
};
IglBookingOverviewPage.style = IglBookingOverviewPageStyle0;

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
        this.expiryYears = Array.from({ length: 12 }, (_, index) => (currentYear + index).toString());
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
            if (index$1.z.string().email().safeParse(email).success) {
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
            if (index$1.z.string().email().safeParse(data).success) {
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
        return (index.h(index.Host, { key: '56d03c34a8d68605580a779b105416133e4af2a0' }, index.h("div", { key: '4cde2eb95f618af1d9f88596249428993db04433', class: "text-left mt-3" }, index.h("div", { key: '00d4e983493d0fd382b5f1ae18067fc9a59157a0', class: "form-group d-flex flex-column flex-md-row align-items-md-center text-left " }, index.h("label", { key: '36a4248c076b051f58afc4caa237ea0a19752900', class: "p-0 m-0 label-control mr-1 font-weight-bold" }, locales_store.locales.entries.Lcz_BookedBy), index.h("div", { key: 'fcf91ce891d6a3a7dd3fa25a5a39c4bad8bb32ef', class: "bookedByEmailContainer mt-1 mt-md-0 d-flex align-items-center" }, index.h("ir-autocomplete", { key: '128ec4041d7013568f7045e0e8d70eb85dd139f6', testId: 'main_guest_email', onComboboxValue: this.handleComboboxChange.bind(this), propertyId: this.propertyId, type: "text", value: this.bookedByData.email, required: true, class: 'flex-fill', placeholder: locales_store.locales.entries.Lcz_FindEmailAddress, onInputCleared: () => this.clearEvent(), danger_border: this.isButtonPressed && this.bookedByData.email !== '' && utils.validateEmail(this.bookedByData.email) }), index.h("ir-tooltip", { key: 'b316bc1d0e7face8094b49e63308e9be991d596b', class: 'ml-1', message: "Leave empty if email is unavailable" })))), index.h("div", { key: '0f594d6979727e23be62921cc6963045965e6562', class: "bookedDetailsForm text-left mt-2 font-small-3 " }, index.h("div", { key: 'bc246fcbace157eb5e1649ba54a936f9151cbbde', class: "d-flex flex-column flex-md-row  justify-content-md-between " }, index.h("div", { key: '4169183255e1c91f115ea8cca8ff0d9b7be4b274', class: "p-0 flex-fill " }, index.h("div", { key: 'de43776b663359a8d60c8261ec60028734caf191', class: "form-group d-flex flex-column flex-md-row align-items-md-center p-0 flex-fill " }, index.h("label", { key: '473af2f963068e470417e2de4ef0c273679108ab', class: "p-0 m-0 margin3" }, locales_store.locales.entries.Lcz_FirstName), index.h("div", { key: 'f6658eda7ee6c0bc65ce3df44efe93b0494d6fd6', class: "p-0 m-0  controlContainer flex-fill  " }, index.h("input", { key: 'e79bcf6c0da299b88e7451e3c7f4a129351d22b4', "data-testid": "main_guest_first_name", class: `form-control flex-fill ${this.isButtonPressed && this.bookedByData.firstName === '' && 'border-danger'}`, type: "text", placeholder: locales_store.locales.entries.Lcz_FirstName, id: v4.v4(), value: this.bookedByData.firstName, onInput: event => {
                this.updateGuest({ first_name: event.target.value });
                this.handleDataChange('firstName', event);
            }, required: true }))), index.h("div", { key: '5a81ea54f2010be43cc46d896bf21dc2bbf597b7', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, index.h("label", { key: '2e109c10f3f10863093da9ca851ca7cd15e9b117', class: "p-0 m-0 margin3" }, locales_store.locales.entries.Lcz_LastName), index.h("div", { key: '6f04568f3a68d76074b96025efbd2557f0d77c48', class: "p-0 m-0  controlContainer flex-fill" }, index.h("input", { key: 'de1920ac664aa264ff87abece83c10c4cd0b780b', "data-testid": "main_guest_last_name", class: `form-control ${this.isButtonPressed && this.bookedByData.lastName === '' && 'border-danger'}`, type: "text", placeholder: locales_store.locales.entries.Lcz_LastName, id: v4.v4(), value: this.bookedByData.lastName, onInput: event => this.handleDataChange('lastName', event) }))), index.h("div", { key: '3ffbed1f5cf5d1e0e3bbf7120f4d3dfb15472e47', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, index.h("label", { key: 'ad0b9de2cb6bcdaa3d072294cebcf24d4d3373e3', class: "p-0 m-0 margin3" }, locales_store.locales.entries.Lcz_Country), index.h("ir-country-picker", { key: 'd3f24d73389502f386ad5b764963896705f7c4ce', testId: "main_guest_country", class: "flex-grow-1 m-0", onCountryChange: e => this.handleCountryChange(e.detail.id), countries: this.countries, country: this.countries.find(c => c.id === this.bookedByData.countryId) })), index.h("div", { key: '53268b9a382ed5036bbec9529365f87288250bf3', class: "form-group p-0 d-flex flex-column flex-md-row align-items-md-center" }, index.h("label", { key: '48f0e45980f303e85f7fc3c8d8c24d60edb60d80', class: "p-0 m-0 margin3" }, locales_store.locales.entries.Lcz_MobilePhone), index.h("div", { key: '1ea212dd72b1f7a473fe028060e106f5b662ff4c', class: "p-0 m-0 controlContainer flex-fill" }, index.h("ir-phone-input", { key: '3af93ae6157cb553e7ccf0c9fd1bc0cac1e9eff4', testId: "main_guest_phone", language: this.language,
            // label={locales.entries.Lcz_MobilePhone}
            value: this.bookedByData.contactNumber, phone_prefix: this.bookedByData.isdCode, default_country: this.bookedByData.countryId, onTextChange: e => {
                this.handleDataChange('isdCode', { target: { value: e.detail.phone_prefix } });
                this.handleDataChange('contactNumber', { target: { value: e.detail.mobile } });
            } }))), index.h("div", { key: '7638601fa8d83b8e30014529e8ffceb634106d04', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, index.h("label", { key: '64ef627494b58e51fb1699ffbb900d6194eec1ed', class: "p-0 m-0 margin3" }, locales_store.locales.entries.Lcz_YourArrivalTime), index.h("div", { key: '258fa7eb5a19bd6d73b96999567b2e1c2d29b673', class: "p-0 m-0  controlContainer flex-fill" }, index.h("select", { key: '4a398787760f885da6c8969ba03f78419b38e9f8', "data-testid": "arrival_time", class: `form-control input-sm pr-0 ${this.isButtonPressed && this.bookedByData.selectedArrivalTime.code === '' && 'border-danger'}`, id: v4.v4(), onChange: event => this.handleDataChange('selectedArrivalTime', event) }, this.arrivalTimeList.map(time => (index.h("option", { value: time.CODE_NAME, selected: this.bookedByData.selectedArrivalTime.code === time.CODE_NAME }, time.CODE_VALUE_EN))))))), index.h("div", { key: 'eb5aedd7bd1850adcef4862f1d3587988a29155b', class: "p-0 flex-fill  ml-md-3" }, index.h("div", { key: '0f6d453cb0782b3e568d890aca4ab35d8a26f1b0', class: "  p-0 d-flex flex-column flex-md-row align-items-md-center " }, index.h("label", { key: 'fd7073839da1e16ceaa1b9a394688dde6c1b29e1', class: "p-0 m-0 margin3" }, locales_store.locales.entries.Lcz_AnyMessageForUs), index.h("div", { key: '5da33f4970aa74e93f94fb51742714ac09e6815a', class: "p-0 m-0  controlContainer flex-fill " }, index.h("textarea", { key: '8ab82cb1861b9ac1601714856bd1688aef8380d1', "data-testid": "note", id: v4.v4(), rows: 4, class: "form-control ", name: "message", value: this.bookedByData.message, onInput: event => this.handleDataChange('message', event) }))), this.showPaymentDetails && (index.h(index.Fragment, { key: '3fbc8e3914201beb6d0b664a5f52b1eee977db36' }, index.h("div", { key: '01f89243e981c07f16e19928393c9b2c5335a647', class: "form-group mt-md-1  p-0 d-flex flex-column flex-md-row align-items-md-center" }, index.h("label", { key: 'f3851dcdda354540891fbf64c1cab262e6a6f781', class: "p-0 m-0 margin3" }, locales_store.locales.entries.Lcz_CardNumber), index.h("div", { key: 'f5a56009b476ba15c0d51178d63d98c4b57b2e47', class: "p-0 m-0  controlContainer flex-fill" }, index.h("input", { key: '4c04f93af66eb39931040a4dbeab55417ddaf591', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4.v4(), value: this.bookedByData.cardNumber, onInput: event => this.handleNumberInput('cardNumber', event) }))), index.h("div", { key: '984afe63735e10707f4b6a62d17711521e766f96', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, index.h("label", { key: '5ea7df570bc0de813cc9e1918a0d9565223d80be', class: "p-0 m-0 margin3" }, locales_store.locales.entries.Lcz_CardHolderName), index.h("div", { key: '3f91b3c296fd354378d8aeefe5472889d516f2c4', class: "p-0 m-0  controlContainer flex-fill" }, index.h("input", { key: '576d74107517f3b4be840e3698e018eb175c5ac2', class: "form-control", type: "text", placeholder: "", pattern: "0-9 ", id: v4.v4(), value: this.bookedByData.cardHolderName, onInput: event => this.handleDataChange('cardHolderName', event) }))), index.h("div", { key: '90389cf23a4a7fe8e759e99ff5c75f3371875cd4', class: "form-group  p-0 d-flex flex-column flex-md-row align-items-md-center" }, index.h("label", { key: '669a01bd3ce8135145d07319c34b9fb20525d333', class: "p-0 m-0 margin3" }, locales_store.locales.entries.Lcz_ExpiryDate), index.h("div", { key: 'e9cac859412c6db99a640f6589d61834c66c460e', class: "p-0 m-0 row  controlContainer flex-fill" }, index.h("div", { key: 'b801b11ba2172ab6168b3e44e2ddbd24af4a1bb5', class: "p-0 m-0" }, index.h("select", { key: '4abec4d40763887d3c306691bf14f6fb09aa26ab', class: "form-control input-sm pr-0", id: v4.v4(), onChange: event => this.handleDataChange('expiryMonth', event) }, this.expiryMonths.map(month => (index.h("option", { value: month, selected: month === this.bookedByData.expiryMonth }, month))))), index.h("div", { key: '6f5a9a0dd862491c04c84c40f88d40f5284cbb68', class: "p-0 m-0 ml-1" }, index.h("select", { key: 'c5294b81e0c0062039bd595c08cd2e84373b338d', class: "form-control input-sm pr-0", id: v4.v4(), onChange: event => this.handleDataChange('expiryYear', event) }, this.expiryYears.map((year, index$1) => (index.h("option", { value: year, selected: index$1 === this.bookedByData.expiryYear }, year))))))))), index.h("div", { key: 'a0f11dabe721eb032c96d542e285cc0c4ad646cb', class: "form-group mt-1 p-0 d-flex flex-row align-items-center" }, index.h("label", { key: '50290f433ff19f9f24a681251c9377ff5d3ceeb7', class: "p-0 m-0", htmlFor: 'emailTheGuestId' }, locales_store.locales.entries.Lcz_EmailTheGuest), index.h("div", { key: '73cf700f0db31359c18da7db3ed040104e9ec52b', class: "p-0 m-0  controlContainer flex-fill checkBoxContainer" }, index.h("input", { key: 'a3e349a18460621f1547ac421bceabf708132a14', class: "form-control", type: "checkbox", checked: this.bookedByData.emailGuest, id: 'emailTheGuestId', onChange: event => this.handleDataChange('emailGuest', event) }))))))));
    }
};
IglPropertyBookedBy.style = IglPropertyBookedByStyle0;

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
        return (index.h(index.Host, { key: '049461fe1d079f056f3ac1aaf76e0b415f45386e' }, isValidBookingType && ((_a = this.roomType.rateplans) === null || _a === void 0 ? void 0 : _a.length) > 0 && index.h("div", { key: 'c45bc2cf0078464274876af9904340e7a507bb78', class: "font-weight-bold font-medium-1 margin-bottom-8 " }, this.roomType.name), (_b = this.roomType.rateplans) === null || _b === void 0 ? void 0 :
            _b.map(ratePlan => {
                if (!!ratePlan.variations) {
                    let shouldBeDisabled = this.roomInfoId && this.roomInfoId === this.roomType.id;
                    // let roomId = -1;
                    // if (shouldBeDisabled && this.initialRoomIds) {
                    //   roomId = this.initialRoomIds.roomId;
                    // }
                    const visibleInventory = booking_service.getVisibleInventory(this.roomType.id, ratePlan.id);
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

// HelpDocButton.tsx
const HelpDocButton = ({ message, href, class: wrapperClass }) => (index.h("div", { class: wrapperClass },
    index.h("style", null, `.documentation-btn{
          display:flex;
          align-items:center;
          justify-content:center;
          height:1rem;
          width:1rem;
          border:1px solid #6b6f82;
          color:#6b6f82;
          padding:0.1rem;
          border-radius:0.5rem;
          background:transparent;
        }
        .documentation-btn:hover{
          border-color:#104064;
          background:transparent;
          color:#104064 !important;
        }`),
    index.h("ir-tooltip", { customSlot: true, message: message },
        index.h("a", { slot: "tooltip-trigger", class: "documentation-btn", target: "_blank", rel: "noopener", href: href, "aria-label": message },
            index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" },
                index.h("path", { fill: "currentColor", d: "M224 224C224 171 267 128 320 128C373 128 416 171 416 224C416 266.7 388.1 302.9 349.5 315.4C321.1 324.6 288 350.7 288 392L288 416C288 433.7 302.3 448 320 448C337.7 448 352 433.7 352 416L352 392C352 390.3 352.6 387.9 355.5 384.7C358.5 381.4 363.4 378.2 369.2 376.3C433.5 355.6 480 295.3 480 224C480 135.6 408.4 64 320 64C231.6 64 160 135.6 160 224C160 241.7 174.3 256 192 256C209.7 256 224 241.7 224 224zM320 576C342.1 576 360 558.1 360 536C360 513.9 342.1 496 320 496C297.9 496 280 513.9 280 536C280 558.1 297.9 576 320 576z" }))))));

const irApplicablePoliciesCss = ".sc-ir-applicable-policies-h{display:flex;flex-direction:column;gap:1rem}.applicable-policies__container.sc-ir-applicable-policies{display:flex;align-items:center;gap:1rem;flex-wrap:wrap;margin-bottom:1rem}.applicable-policies__title.sc-ir-applicable-policies{font-size:1rem;font-weight:700;padding:0;margin:0}.applicable-policies__no-penalty.sc-ir-applicable-policies{padding:0;margin:0;font-size:0.875rem}.applicable-policies__statements.sc-ir-applicable-policies{display:flex;flex-direction:column;gap:0.5rem;background:rgb(30, 159, 242, 5%);padding:0.5rem 1rem;border:1px solid rgba(30, 159, 242, 40%);border-radius:0.25rem;max-height:200px;overflow-y:auto}.applicable-policies__highlighted-bracket.sc-ir-applicable-policies{color:rgba(30, 159, 242, 100%)}.applicable-policies__statement.sc-ir-applicable-policies{display:flex;flex-direction:column;border-bottom:1px solid #e5e7eb;padding-bottom:0.5rem}.applicable-policies__statement.sc-ir-applicable-policies:last-child{border-bottom:0;padding-bottom:0}.applicable-policies__room.sc-ir-applicable-policies{padding:0;margin:0;padding-bottom:0.5rem}.applicable-policies__bracket.sc-ir-applicable-policies{display:grid;grid-template-columns:repeat(2, 1fr);gap:0.25rem;font-size:0.875rem;padding-bottom:0.5rem}.applicable-policies__bracket-dates.sc-ir-applicable-policies{display:flex;align-items:center;gap:0.5rem;padding:0;margin:0}.applicable-policies__amount.sc-ir-applicable-policies{text-align:right;padding:0;margin:0;font-weight:600}.applicable-policies__statement-text.sc-ir-applicable-policies{padding:0;margin:0}.applicable-policies__brackets-table.sc-ir-applicable-policies{display:none}.applicable-policies__guarantee.sc-ir-applicable-policies{display:flex;justify-content:space-between;align-items:center;padding:0.5rem 1rem;border:1px solid rgba(255, 73, 97, 40%);border-radius:6px;background-color:rgba(255, 73, 97, 10%);margin-bottom:0.5rem;font-size:0.875rem}.applicable-policies__guarantee-info.sc-ir-applicable-policies{display:flex;align-items:center;gap:0.5rem}.applicable-policies__guarantee-date.sc-ir-applicable-policies{color:var(--text-muted, #666);padding:0;margin:0}.applicable-policies__guarantee-amount.sc-ir-applicable-policies{font-weight:600;color:var(--text-strong, #222);padding:0;margin:0}.applicable-policies__guarantee-label.sc-ir-applicable-policies{color:red;font-weight:700;padding:0;margin:0}.applicable-policies__guarantee-action.sc-ir-applicable-policies{width:fit-content}@media (min-width: 768px){.applicable-policies__brackets.sc-ir-applicable-policies{display:none}.applicable-policies__brackets-table.sc-ir-applicable-policies{display:block;width:100%;font-size:0.875rem}.applicable-policies__brackets-table.sc-ir-applicable-policies table.sc-ir-applicable-policies{width:100%}.applicable-policies__amount.sc-ir-applicable-policies,.applicable-policies__bracket-dates.sc-ir-applicable-policies{white-space:nowrap}.applicable-policies__statement-text.sc-ir-applicable-policies{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}}";
const IrApplicablePoliciesStyle0 = irApplicablePoliciesCss;

const IrApplicablePolicies = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.generatePayment = index.createEvent(this, "generatePayment", 7);
        this.language = 'en';
        this.cancellationStatements = [];
        this.isLoading = false;
        this.shouldShowCancellationBrackets = true;
    }
    componentWillLoad() {
        this.loadApplicablePolicies();
    }
    handleBookingChange() {
        this.loadApplicablePolicies();
    }
    async loadApplicablePolicies() {
        this.isLoading = true;
        try {
            const getPoliciesByType = (policies, type) => {
                return policies.find(p => p.type === type);
            };
            const statements = [];
            let total = 0;
            this.booking.rooms.forEach(room => {
                var _a, _b;
                const cancellationPolicy = getPoliciesByType(room.applicable_policies, 'cancelation');
                const guaranteePolicy = getPoliciesByType(room.applicable_policies, 'guarantee');
                if (cancellationPolicy) {
                    let brackets = [
                        ...cancellationPolicy.brackets
                            .map((bracket, index) => {
                            var _a;
                            if (bracket.amount > 0) {
                                return bracket;
                            }
                            if (index < (cancellationPolicy === null || cancellationPolicy === void 0 ? void 0 : cancellationPolicy.brackets.length) - 1 && ((_a = cancellationPolicy.brackets[index + 1]) === null || _a === void 0 ? void 0 : _a.amount) > 0) {
                                return bracket;
                            }
                        })
                            .filter(Boolean),
                    ];
                    statements.push(Object.assign(Object.assign({}, cancellationPolicy), { roomType: room.roomtype, ratePlan: room.rateplan, brackets, checkInDate: room.from_date, grossTotal: room.gross_total }));
                }
                if (guaranteePolicy) {
                    total += (_b = (_a = this.getCurrentBracket(guaranteePolicy.brackets)) === null || _a === void 0 ? void 0 : _a.gross_amount) !== null && _b !== void 0 ? _b : 0;
                }
            });
            this.guaranteeAmount = total;
            this.cancellationStatements = [...statements];
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    formatPreviousBracketDueOn(d1, d2) {
        if (d1.isSame(d2, 'year')) {
            return d1.format('MMM DD');
        }
        return d1.format('MMM DD, YYYY');
    }
    getBracketLabelsAndArrowState({ bracket, index, brackets, checkInDate }) {
        // Validate inputs
        if (!bracket || !brackets || index < 0 || index >= brackets.length) {
            return { leftLabel: null, rightLabel: null, showArrow: false };
        }
        // Parse dates with validation
        const bookedOnDate = moment.hooks(this.booking.booked_on.date, 'YYYY-MM-DD');
        const bracketDueDate = moment.hooks(bracket.due_on, 'YYYY-MM-DD');
        if (!bookedOnDate.isValid() || !bracketDueDate.isValid()) {
            console.warn('Invalid date encountered in getBracketLabelsAndArrowState');
            return { leftLabel: null, rightLabel: null, showArrow: false };
        }
        // Single bracket case
        if (brackets.length === 1) {
            return this.handleSingleBracket(bracketDueDate, checkInDate);
        }
        // Multiple brackets case
        return this.handleMultipleBrackets(bracket, index, brackets, checkInDate);
    }
    handleSingleBracket(bracketDueDate, checkInDate) {
        return {
            leftLabel: bracketDueDate.format('MMM DD'),
            showArrow: true,
            rightLabel: moment.hooks(checkInDate, 'YYYY-MM-DD').format('MMM DD, YYYY'),
        };
    }
    handleMultipleBrackets(bracket, index, brackets, checkInDate) {
        const bracketDueDate = moment.hooks(bracket.due_on, 'YYYY-MM-DD');
        // First bracket
        if (index === 0) {
            const nextBracket = brackets[index + 1];
            if (!nextBracket) {
                return { leftLabel: null, rightLabel: null, showArrow: false };
            }
            let nextBracketDueDate = moment.hooks(nextBracket.due_on, 'YYYY-MM-DD');
            if (!nextBracketDueDate.isValid()) {
                return { leftLabel: null, rightLabel: null, showArrow: false };
            }
            if (bracket.amount === 0) {
                nextBracketDueDate = nextBracketDueDate.clone().add(-1, 'days');
            }
            return {
                leftLabel: 'Until',
                showArrow: false,
                rightLabel: nextBracketDueDate.format('MMM DD, YYYY'),
            };
        }
        // Last bracket
        if (index === brackets.length - 1) {
            return {
                leftLabel: bracketDueDate.clone().format('MMM DD'),
                showArrow: true,
                rightLabel: moment.hooks(checkInDate).format('MMM DD, YYYY'),
            };
        }
        // Middle brackets
        const nextBracket = brackets[index + 1];
        if (!nextBracket) {
            return { leftLabel: null, rightLabel: null, showArrow: false };
        }
        const nextBracketDueDate = moment.hooks(nextBracket.due_on, 'YYYY-MM-DD');
        if (!nextBracketDueDate.isValid()) {
            return { leftLabel: null, rightLabel: null, showArrow: false };
        }
        // Calculate the end of current bracket period (day before next bracket starts)
        const periodEndDate = nextBracketDueDate.clone();
        return {
            leftLabel: this.formatPreviousBracketDueOn(bracketDueDate, periodEndDate),
            showArrow: true,
            rightLabel: periodEndDate.format('MMM DD, YYYY'),
        };
    }
    getCurrentBracket(brackets) {
        const today = moment.hooks();
        for (const bracket of brackets) {
            if (today.isSameOrAfter(moment.hooks(bracket.due_on, 'YYYY-MM-DD'), 'days')) {
                return bracket;
            }
        }
        return null;
    }
    generateCancellationStatement() {
        const label = 'if cancelled today';
        const { cancelation_penality_as_if_today } = this.booking.financial;
        if (cancelation_penality_as_if_today === 0) {
            if (this.booking.financial.collected > 0) {
                return `No refund ${label}`;
            }
            return `No payment required ${label}`;
        }
        return `${cancelation_penality_as_if_today < 0 ? 'Refund' : 'Charge'} ${utils.formatAmount(calendarData.calendar_data.currency.symbol, Math.abs(cancelation_penality_as_if_today))} ${label}`;
    }
    _getCurrentBracket(brackets) {
        if (!Array.isArray(brackets) || brackets.length === 0)
            return null;
        const today = moment.hooks().startOf('day');
        // Parse + validate + sort ascending by due_on
        const parsed = brackets
            .map(b => ({ b, date: moment.hooks(b.due_on, 'YYYY-MM-DD', true).startOf('day') }))
            .filter(x => x.date.isValid())
            .sort((a, b) => a.date.valueOf() - b.date.valueOf());
        if (parsed.length === 0)
            return null;
        // If today is before the first due date → return first bracket (closest upcoming)
        if (today.isBefore(parsed[0].date, 'day')) {
            return parsed[0].date;
        }
        // Find i such that date[i] <= today < date[i+1] → return date[i]
        for (let i = 0; i < parsed.length - 1; i++) {
            const cur = parsed[i].date;
            const next = parsed[i + 1].date;
            if (today.isSameOrAfter(cur, 'day') && today.isBefore(next, 'day')) {
                return cur;
            }
        }
        // If today is on/after the last due date → return last bracket
        return parsed[parsed.length - 1].date;
    }
    render() {
        var _a, _b;
        if (this.isLoading) {
            return null;
        }
        const remainingGuaranteeAmount = this.booking.financial.collected - this.guaranteeAmount;
        return (index.h(index.Host, null, this.guaranteeAmount !== 0 && (index.h("section", null, index.h("div", { class: "applicable-policies__guarantee" }, index.h("div", { class: "applicable-policies__guarantee-info" }, index.h("p", { class: "applicable-policies__guarantee-date" }, moment.hooks(this.booking.booked_on.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), index.h("p", { class: "applicable-policies__guarantee-amount" }, index.h("span", { class: "px-1" }, utils.formatAmount(calendarData.calendar_data.currency.symbol, remainingGuaranteeAmount < 0 ? Math.abs(remainingGuaranteeAmount) : this.guaranteeAmount))), index.h("p", { class: "applicable-policies__guarantee-label" }, "Guarantee ", remainingGuaranteeAmount < 0 ? 'balance' : '')), remainingGuaranteeAmount < 0 && (index.h("div", { class: "applicable-policies__guarantee-action" }, index.h("ir-button", { btn_color: "dark", text: "Pay", size: "sm", onClickHandler: () => {
                this.generatePayment.emit({
                    amount: Math.abs(remainingGuaranteeAmount),
                    currency: calendarData.calendar_data.currency,
                    due_on: moment.hooks().format('YYYY-MM-DD'),
                    pay_type_code: null,
                    reason: '',
                    type: 'OVERDUE',
                });
            } })))))), index.h("section", null, index.h("div", { class: "applicable-policies__container" }, index.h("div", { class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("p", { class: "applicable-policies__title font-size-large p-0 m-0" }, "Cancellation Schedule"), index.h(HelpDocButton, { message: "Help", href: "https://help.igloorooms.com/extranet/booking-details/guarantee-and-cancellation" })), index.h("p", { class: "applicable-policies__no-penalty" }, this.generateCancellationStatement())), ((_a = this.cancellationStatements) === null || _a === void 0 ? void 0 : _a.length) > 0 && this.shouldShowCancellationBrackets && (index.h("div", { class: "applicable-policies__statements" }, (_b = this.cancellationStatements) === null || _b === void 0 ? void 0 : _b.map(statement => {
            const currentBracket = this._getCurrentBracket(statement.brackets);
            const isTodaySameOrAfterCheckInDate = moment.hooks().isSameOrAfter(moment.hooks(statement.checkInDate, 'YYYY-MM-DD').add(1, 'days'));
            return (index.h("div", { class: "applicable-policies__statement" }, this.cancellationStatements.length > 1 && (index.h("p", { class: "applicable-policies__room" }, index.h("b", null, statement.roomType.name), " ", statement.ratePlan['short_name'], " ", statement.ratePlan.is_non_refundable ? ` - ${locales_store.locales.entries.Lcz_NonRefundable}` : '')), index.h("div", { class: "applicable-policies__brackets" }, statement.brackets.map((bracket, idx) => {
                const { leftLabel, rightLabel, showArrow } = this.getBracketLabelsAndArrowState({
                    index: idx,
                    bracket,
                    brackets: statement.brackets,
                    checkInDate: statement.checkInDate,
                });
                const isInCurrentBracket = moment.hooks(bracket.due_on, 'YYYY-MM-DD').isSame(currentBracket, 'date');
                return (index.h("div", { class: { 'applicable-policies__bracket': true, 'applicable-policies__highlighted-bracket': isInCurrentBracket } }, index.h("p", { class: "applicable-policies__bracket-dates" }, leftLabel, " ", showArrow && index.h("ir-icons", { name: "arrow_right", class: "applicable-policies__icon", style: { '--icon-size': '0.875rem' } }), ' ', rightLabel), index.h("p", { class: "applicable-policies__amount" }, utils.formatAmount(calendarData.calendar_data.currency.symbol, bracket.gross_amount)), index.h("p", { class: "applicable-policies__statement-text" }, bracket.amount === 0 ? 'No penalty' : bracket.statement)));
            })), index.h("div", { class: "applicable-policies__brackets-table" }, index.h("table", null, index.h("tbody", null, statement.brackets.map((bracket, idx) => {
                const { leftLabel, rightLabel, showArrow } = this.getBracketLabelsAndArrowState({
                    index: idx,
                    bracket,
                    brackets: statement.brackets,
                    checkInDate: statement.checkInDate,
                });
                const isInCurrentBracket = isTodaySameOrAfterCheckInDate ? false : moment.hooks(bracket.due_on, 'YYYY-MM-DD').isSame(currentBracket, 'date');
                return (index.h("tr", { class: { 'applicable-policies__highlighted-bracket': isInCurrentBracket } }, index.h("td", { class: "applicable-policies__bracket-dates" }, leftLabel, " ", showArrow && index.h("ir-icons", { name: "arrow_right", class: "applicable-policies__icon", style: { '--icon-size': '0.875rem' } }), ' ', rightLabel), index.h("td", { class: "applicable-policies__amount px-1" }, utils.formatAmount(calendarData.calendar_data.currency.symbol, bracket.gross_amount)), index.h("td", { class: "applicable-policies__statement-text" }, bracket.amount === 0 ? 'No penalty' : bracket.statement)));
            }), isTodaySameOrAfterCheckInDate && (index.h("tr", { class: { 'applicable-policies__highlighted-bracket': true } }, index.h("td", { class: "applicable-policies__bracket-dates" }, moment.hooks(statement.checkInDate, 'YYYY-MM-DD').add(1, 'days').format('MMM DD'), " onwards"), index.h("td", { class: "applicable-policies__amount px-1" }, utils.formatAmount(calendarData.calendar_data.currency.symbol, statement.grossTotal)), index.h("td", { class: "applicable-policies__statement-text" }, "100% of the total price"))))))));
        }))))));
    }
    static get watchers() { return {
        "booking": ["handleBookingChange"]
    }; }
};
IrApplicablePolicies.style = IrApplicablePoliciesStyle0;

const irBookingDetailsCss = ".sc-ir-booking-details-h{overflow-x:hidden;--ir-dialog-max-width:20rem;font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}.sc-ir-booking-details-h *.sc-ir-booking-details{font-family:inherit !important;font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}.font-medium.sc-ir-booking-details{font-weight:600}.sc-ir-booking-details-h th.sc-ir-booking-details{font-weight:600}.h-28.sc-ir-booking-details{height:2rem}.mx-01.sc-ir-booking-details{--m:5px;margin-right:var(--m) !important;margin-left:var(--m) !important}.date-margin.sc-ir-booking-details{margin-right:5px}.pickup-margin.sc-ir-booking-details{margin-bottom:7px !important}.header-date.sc-ir-booking-details{padding-left:5px !important}.pointer.sc-ir-booking-details{cursor:pointer}.sc-ir-booking-details:root{--sidebar-width:50rem}.loading-container.sc-ir-booking-details{height:100%;width:100%;display:flex;justify-content:center;align-items:center;margin:0;padding:0}.sm-padding-right.sc-ir-booking-details{padding-right:0.2rem}.sm-padding-left.sc-ir-booking-details{padding-left:0.2rem}.sm-padding-top.sc-ir-booking-details{padding-top:0.2rem}.sm-padding-bottom.sc-ir-booking-details{padding-bottom:0.2rem}.info-notes.sc-ir-booking-details{list-style:none;padding-left:0}.light-blue-bg.sc-ir-booking-details{background-color:#acecff;padding:0.2rem 0.3rem}.iframeHeight.sc-ir-booking-details{height:17.5rem}.dialog-title.sc-ir-booking-details{width:fit-content}";
const IrBookingDetailsStyle0 = irBookingDetailsCss;

const IrBookingDetails = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.toast = index.createEvent(this, "toast", 7);
        this.bookingChanged = index.createEvent(this, "bookingChanged", 7);
        this.closeSidebar = index.createEvent(this, "closeSidebar", 7);
        // Setup Data
        this.language = 'en';
        this.ticket = '';
        this.bookingNumber = '';
        this.is_from_front_desk = false;
        // Booleans Conditions
        this.hasPrint = false;
        this.hasReceipt = false;
        this.hasDelete = false;
        this.hasMenu = false;
        // Room Booleans
        this.hasRoomEdit = false;
        this.hasRoomDelete = false;
        this.hasRoomAdd = false;
        this.hasCheckIn = false;
        this.hasCheckOut = false;
        this.hasCloseButton = false;
        this.bookingItem = null;
        this.statusData = [];
        this.calendarData = {};
        // Guest Data
        this.guestData = null;
        // Rerender Flag
        this.rerenderFlag = false;
        this.sidebarState = null;
        this.isUpdateClicked = false;
        this.isPMSLogLoading = false;
        this.modalState = null;
        this.bookingService = new booking_service.BookingService();
        this.roomService = new room_service.RoomService();
        this.paymentService = new payment_service.PaymentService();
        this.token = new Token.Token();
        this.printingBaseUrl = 'https://gateway.igloorooms.com/PrintBooking/%1/printing?id=%2';
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
        this.sidebarPayload = e.detail.payload;
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
            case 'email':
                this.modalState = {
                    type: 'email',
                    message: locales_store.locales.entries.Lcz_EmailBookingto.replace('%1', this.booking.guest.email),
                    loading: irInterceptor_store.isRequestPending('/Send_Booking_Confirmation_Email'),
                };
                this.modalRef.openModal();
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
    handleRoomGuestsUpdate(e) {
        const { identifier, guests } = e.detail;
        const rooms = [...this.booking.rooms];
        let currentRoomIndex = rooms.findIndex(r => r.identifier === identifier);
        if (currentRoomIndex === -1) {
            return;
        }
        const currentRoom = rooms[currentRoomIndex];
        const updatedRoom = Object.assign(Object.assign({}, currentRoom), { sharing_persons: guests });
        rooms[currentRoomIndex] = updatedRoom;
        this.booking = Object.assign(Object.assign({}, this.booking), { rooms: [...rooms] });
    }
    async handleResetBooking(e) {
        // e.stopPropagation();
        // e.stopImmediatePropagation();
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
    // private shouldFetchCancellationPenalty(): boolean {
    //   return this.booking.is_requested_to_cancel || this.booking.status.code === '003';
    // }
    async initializeApp() {
        var _a, _b;
        try {
            const [roomResponse, languageTexts, countriesList, bookingDetails, setupEntries] = await Promise.all([
                this.roomService.getExposedProperty({ id: this.propertyid || 0, language: this.language, aname: this.p }),
                this.roomService.fetchLanguage(this.language),
                this.bookingService.getCountries(this.language),
                this.bookingService.getExposedBooking(this.bookingNumber, this.language),
                this.bookingService.getSetupEntriesByTableNameMulti(['_BED_PREFERENCE_TYPE', '_DEPARTURE_TIME', '_PAY_TYPE', '_PAY_TYPE_GROUP', '_PAY_METHOD']),
            ]);
            this.property_id = (_a = roomResponse === null || roomResponse === void 0 ? void 0 : roomResponse.My_Result) === null || _a === void 0 ? void 0 : _a.id;
            const { bed_preference_type, departure_time, pay_type, pay_type_group, pay_method } = this.bookingService.groupEntryTablesResult(setupEntries);
            this.bedPreference = bed_preference_type;
            this.departureTime = departure_time;
            this.paymentEntries = { types: pay_type, groups: pay_type_group, methods: pay_method };
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
            this.countries = countriesList;
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
    async handleModalConfirm(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        switch (this.modalState.type) {
            case 'email':
                await this.bookingService.sendBookingConfirmationEmail(this.booking.booking_nbr, this.language);
                break;
        }
        this.modalState = null;
        this.modalRef.closeModal();
    }
    renderSidebarContent() {
        var _a, _b, _c, _d, _e, _f;
        const handleClose = () => {
            this.sidebarState = null;
        };
        switch (this.sidebarState) {
            case 'guest':
                return (index.h("ir-guest-info", { isInSideBar: true, headerShown: true, slot: "sidebar-body", booking_nbr: this.bookingNumber, email: (_a = this.booking) === null || _a === void 0 ? void 0 : _a.guest.email, language: this.language, onCloseSideBar: handleClose }));
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
            case 'room-guest':
                return (index.h("ir-room-guests", { countries: this.countries, language: this.language, identifier: (_b = this.sidebarPayload) === null || _b === void 0 ? void 0 : _b.identifier, bookingNumber: this.booking.booking_nbr, roomName: (_c = this.sidebarPayload) === null || _c === void 0 ? void 0 : _c.roomName, totalGuests: (_d = this.sidebarPayload) === null || _d === void 0 ? void 0 : _d.totalGuests, sharedPersons: (_e = this.sidebarPayload) === null || _e === void 0 ? void 0 : _e.sharing_persons, slot: "sidebar-body", checkIn: (_f = this.sidebarPayload) === null || _f === void 0 ? void 0 : _f.checkin, onCloseModal: handleClose }));
            case 'payment-folio':
                return (index.h("ir-payment-folio", { bookingNumber: this.booking.booking_nbr, paymentEntries: this.paymentEntries, slot: "sidebar-body", payment: this.sidebarPayload.payment, mode: this.sidebarPayload.mode, onCloseModal: handleClose }));
            default:
                return null;
        }
    }
    render() {
        var _a, _b, _c, _d, _e;
        console.log((_b = (_a = this.booking) === null || _a === void 0 ? void 0 : _a.financial) === null || _b === void 0 ? void 0 : _b.gross_total_with_extras);
        if (!this.booking) {
            return (index.h("div", { class: 'loading-container' }, index.h("ir-spinner", null)));
        }
        return [
            index.h(index.Fragment, null, !this.is_from_front_desk && (index.h(index.Fragment, null, index.h("ir-toast", null), index.h("ir-interceptor", null)))),
            index.h("ir-booking-header", { booking: this.booking, hasCloseButton: this.hasCloseButton, hasDelete: this.hasDelete, hasMenu: this.hasMenu, hasPrint: this.hasPrint, hasReceipt: this.hasReceipt, hasEmail: ['001', '002'].includes((_d = (_c = this.booking) === null || _c === void 0 ? void 0 : _c.status) === null || _d === void 0 ? void 0 : _d.code) }),
            index.h("div", { class: "fluid-container p-1 text-left mx-0" }, index.h("div", { class: "row m-0" }, index.h("div", { class: "col-12 p-0 mx-0 pr-lg-1 col-lg-6" }, index.h("ir-reservation-information", { countries: this.countries, booking: this.booking }), index.h("div", { class: "font-size-large d-flex justify-content-between align-items-center mb-1" }, index.h("ir-date-view", { from_date: this.booking.from_date, to_date: this.booking.to_date }), 
            // this.hasRoomAdd && this.booking.is_direct && this.booking.is_editable && (
            this.hasRoomAdd && this.booking.is_editable && index.h("ir-button", { id: "room-add", icon_name: "square_plus", variant: "icon", style: { '--icon-size': '1.5rem' } })), index.h("div", { class: "card p-0 mx-0" }, this.booking.rooms.map((room, index$1) => {
                const showCheckin = this.handleRoomCheckin(room);
                const showCheckout = this.handleRoomCheckout(room);
                return [
                    index.h("ir-room", { room: room, property_id: this.property_id, language: this.language, departureTime: this.departureTime, bedPreferences: this.bedPreference, isEditable: this.booking.is_editable, legendData: this.calendarData.legendData, roomsInfo: this.calendarData.roomsInfo, myRoomTypeFoodCat: room.roomtype.name, mealCodeName: room.rateplan.short_name, currency: this.booking.currency.symbol, hasRoomEdit: this.hasRoomEdit && this.booking.status.code !== '003' && this.booking.is_direct, hasRoomDelete: this.hasRoomDelete && this.booking.status.code !== '003' && this.booking.is_direct, hasCheckIn: showCheckin, hasCheckOut: showCheckout, booking: this.booking, bookingIndex: index$1, onDeleteFinished: this.handleDeleteFinish.bind(this) }),
                    index$1 !== this.booking.rooms.length - 1 && index.h("hr", { class: "mr-2 ml-2 my-0 p-0" }),
                ];
            })), index.h("ir-pickup-view", { booking: this.booking }), index.h("section", null, index.h("div", { class: "font-size-large d-flex justify-content-between align-items-center mb-1" }, index.h("p", { class: 'font-size-large p-0 m-0 ' }, locales_store.locales.entries.Lcz_ExtraServices), index.h("ir-button", { id: "extra_service_btn", icon_name: "square_plus", variant: "icon", style: { '--icon-size': '1.5rem' } })), index.h("ir-extra-services", { booking: { booking_nbr: this.booking.booking_nbr, currency: this.booking.currency, extra_services: this.booking.extra_services } }))), index.h("div", { class: "col-12 p-0 m-0 pl-lg-1 col-lg-6" }, index.h("ir-payment-details", { propertyId: this.property_id, paymentEntries: this.paymentEntries, paymentActions: this.paymentActions, booking: this.booking })))),
            index.h("ir-modal", { modalBody: (_e = this.modalState) === null || _e === void 0 ? void 0 : _e.message, leftBtnText: locales_store.locales.entries.Lcz_Cancel, rightBtnText: locales_store.locales.entries.Lcz_Confirm, autoClose: false, isLoading: irInterceptor_store.isRequestPending('/Send_Booking_Confirmation_Email'), ref: el => (this.modalRef = el), onConfirmModal: e => {
                    this.handleModalConfirm(e);
                }, onCancelModal: () => {
                    this.modalRef.closeModal();
                } }),
            index.h("ir-sidebar", { open: this.sidebarState !== null && this.sidebarState !== 'payment-folio', side: 'right', id: "editGuestInfo", style: { '--sidebar-width': this.sidebarState === 'room-guest' ? '60rem' : undefined }, onIrSidebarToggle: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.sidebarState = null;
                }, showCloseButton: false }, this.renderSidebarContent()),
            index.h("ir-sidebar", { open: this.sidebarState === 'payment-folio', side: 'left', id: "folioSidebar", onIrSidebarToggle: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.sidebarState = null;
                }, showCloseButton: false }, this.renderSidebarContent()),
            index.h(index.Fragment, null, this.bookingItem && (index.h("igl-book-property", { allowedBookingSources: this.calendarData.allowed_booking_sources, adultChildConstraints: this.calendarData.adult_child_constraints, showPaymentDetails: this.showPaymentDetails, countries: this.countries, currency: this.calendarData.currency, language: this.language, propertyid: this.property_id, bookingData: this.bookingItem, onCloseBookingWindow: () => this.handleCloseBookingWindow() }))),
        ];
    }
    handleRoomCheckout(room) {
        if (!calendarData.calendar_data.checkin_enabled || calendarData.calendar_data.is_automatic_check_in_out) {
            return false;
        }
        return room.in_out.code === '001';
    }
    handleRoomCheckin(room) {
        if (!calendarData.calendar_data.checkin_enabled || calendarData.calendar_data.is_automatic_check_in_out) {
            return false;
        }
        if (!room.unit) {
            return false;
        }
        if (room.in_out && room.in_out.code !== '000') {
            return false;
        }
        if (moment.hooks().isSameOrAfter(moment.hooks(room.from_date, 'YYYY-MM-DD'), 'days') && moment.hooks().isBefore(moment.hooks(room.to_date, 'YYYY-MM-DD'), 'days')) {
            return true;
        }
        return false;
    }
    get element() { return index.getElement(this); }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrBookingDetails.style = IrBookingDetailsStyle0;

const irBookingExtraNoteCss = ".sc-ir-booking-extra-note-h{display:block}";
const IrBookingExtraNoteStyle0 = irBookingExtraNoteCss;

const sheetCss$5 = ".sc-ir-booking-extra-note-h{height:100%}.sheet-container.sc-ir-booking-extra-note{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-ir-booking-extra-note{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-ir-booking-extra-note{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-booking-extra-note{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-booking-extra-note{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-booking-extra-note{flex-direction:row;align-items:center}}";
const IrBookingExtraNoteStyle1 = sheetCss$5;

const IrBookingExtraNote = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeModal = index.createEvent(this, "closeModal", 7);
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt", 7);
        this.isLoading = false;
        this.note = '';
        this.bookingService = new booking_service.BookingService();
    }
    componentWillLoad() {
        if (this.booking.extras) {
            this.setNote(utils.getPrivateNote(this.booking.extras));
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
        return (index.h("form", { key: '102c307fa4cde38c7f4ba91dc9a5fa8735097b09', class: 'sheet-container h-100', onSubmit: e => {
                e.preventDefault();
                this.savePrivateNote();
            } }, index.h("ir-title", { key: '3f782610a879434699c9ebb3b23cb3d6cd1b2e53', class: "px-1 sheet-header", onCloseSideBar: () => this.closeModal.emit(null), label: locales_store.locales.entries.Lcz_PrivateNote, displayContext: "sidebar" }), index.h("div", { key: '6949926b1deb312ed33c825f529038dfd7bc9b27', class: "sheet-body px-1" }, index.h("ir-textarea", { key: 'e64dd33ac84eb6d71ab0c363cdc524c9d336314f', placeholder: locales_store.locales.entries.Lcz_PrivateNote_MaxChar, label: "", value: this.note, maxLength: 150, onTextChange: e => this.setNote(e.detail) })), index.h("div", { key: 'b8c2233c042dff0e6749257abb4f7c642206efd7', class: 'sheet-footer' }, index.h("ir-button", { key: '3cd692a29b35917dc21d5e2ca2a354b64d5d770f', onClickHandler: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `mb-1 mb-sm-0 flex-fill  mr-sm-1'}`, text: locales_store.locales.entries.Lcz_Cancel, btn_color: "secondary" }), index.h("ir-button", { key: '4428660d719e92ae8dbf2714ccba94f73fd64e0f', btn_styles: "justify-content-center align-items-center", class: 'm-0 flex-fill text-center ml-sm-1', isLoading: this.isLoading, text: locales_store.locales.entries.Lcz_Save, btn_color: "primary", btn_type: "submit" }))));
    }
};
IrBookingExtraNote.style = IrBookingExtraNoteStyle0 + IrBookingExtraNoteStyle1;

const irBookingGuaranteeCss = ".sc-ir-booking-guarantee-h{display:block}.sc-ir-booking-guarantee-h{font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}.sc-ir-booking-guarantee-h *.sc-ir-booking-guarantee{font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}.iframeHeight.sc-ir-booking-guarantee{height:max-content;height:22.5rem}";
const IrBookingGuaranteeStyle0 = irBookingGuaranteeCss;

const IrBookingGuarantee = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.collapsed = false;
        this.paymentDetailsUrl = '';
        this.paymentExceptionMessage = '';
    }
    async componentWillLoad() {
    }
    formatCurrency(amount, currency, locale = 'en-US') {
        if (!currency || amount < 0) {
            return '';
        }
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(amount);
    }
    checkPaymentCode(value) {
        var _a, _b, _c;
        return (_c = (_b = (_a = calendarData.calendar_data.allowed_payment_methods) === null || _a === void 0 ? void 0 : _a.find(pm => pm.code === value)) === null || _b === void 0 ? void 0 : _b.description) !== null && _c !== void 0 ? _c : null;
    }
    getPaymentMethod() {
        var _a, _b, _c, _d;
        let paymentMethod = null;
        const payment_code = (_b = (_a = this.booking) === null || _a === void 0 ? void 0 : _a.extras) === null || _b === void 0 ? void 0 : _b.find(e => e.key === 'payment_code');
        if (this.booking.agent) {
            const code = (_d = (_c = this.booking) === null || _c === void 0 ? void 0 : _c.extras) === null || _d === void 0 ? void 0 : _d.find(e => e.key === 'agent_payment_mode');
            if (code) {
                paymentMethod = code.value === '001' ? locales_store.locales.entries.Lcz_OnCredit : payment_code ? this.checkPaymentCode(payment_code.value) : null;
            }
        }
        else if (payment_code) {
            paymentMethod = payment_code.value === '000' ? 'No card info required upon booking' : this.checkPaymentCode(payment_code.value);
        }
        return paymentMethod;
    }
    async handleToggleCollapse() {
        if (!this.booking.is_direct && this.booking.channel_booking_nbr && !this.booking.guest.cci && !this.collapsed) {
            this.paymentDetailsUrl = await this.bookingService.getPCICardInfoURL(this.booking.booking_nbr);
        }
        this.collapsed = !this.collapsed;
    }
    shouldShowGuarantee() {
        const paymentMethod = this.booking.is_direct ? this.getPaymentMethod() : null;
        return this.booking.is_direct ? Boolean(paymentMethod || this.booking.guest.cci) : true;
    }
    shouldShowToggleButton() {
        return !this.booking.is_direct || (this.booking.is_direct && this.booking.guest.cci);
    }
    renderCreditCardInfo() {
        const { cci } = this.booking.guest;
        if (!cci)
            return null;
        return [
            index.h("div", null, cci && 'Card:', " ", index.h("span", null, cci.nbr || ''), cci.expiry_month && ' Expiry: ', index.h("span", null, cci.expiry_month || '', cci.expiry_year && '/' + cci.expiry_year)),
            index.h("div", null, cci.holder_name && 'Name:', " ", index.h("span", null, cci.holder_name || ''), cci.cvc && ' - CVC:', " ", index.h("span", null, cci.cvc || '')),
        ];
    }
    renderCollapsedContent() {
        if (this.booking.guest.cci) {
            return this.renderCreditCardInfo();
        }
        if (this.paymentDetailsUrl) {
            return index.h("iframe", { src: this.paymentDetailsUrl, width: "100%", class: "iframeHeight", frameborder: "0", name: "payment" });
        }
        return index.h("div", { class: "text-center" }, this.paymentExceptionMessage);
    }
    renderOtaGuarantee() {
        var _a, _b, _c;
        const { ota_guarante } = this.booking;
        if (!ota_guarante || this.booking.is_direct)
            return null;
        return (index.h("div", null, index.h("ir-label", { content: ota_guarante.card_type + `${ota_guarante.is_virtual ? ' (virtual)' : ''}`, labelText: `${locales_store.locales.entries.Lcz_CardType}:` }), index.h("ir-label", { content: ota_guarante.cardholder_name, labelText: `${locales_store.locales.entries.Lcz_CardHolderName}:` }), index.h("ir-label", { content: ota_guarante.card_number, labelText: `${locales_store.locales.entries.Lcz_CardNumber}:` }), index.h("ir-label", { content: this.formatCurrency(utils.toFloat(Number((_a = ota_guarante.meta) === null || _a === void 0 ? void 0 : _a.virtual_card_current_balance), Number((_b = ota_guarante.meta) === null || _b === void 0 ? void 0 : _b.virtual_card_decimal_places)), (_c = ota_guarante.meta) === null || _c === void 0 ? void 0 : _c.virtual_card_currency_code), labelText: `${locales_store.locales.entries.Lcz_CardBalance}:` })));
    }
    render() {
        if (!this.shouldShowGuarantee()) {
            return null;
        }
        const paymentMethod = this.booking.is_direct ? this.getPaymentMethod() : null;
        return (index.h("div", { class: "mb-1" }, index.h("div", { class: "d-flex align-items-center" }, index.h("span", { class: "mr-1 font-medium" }, locales_store.locales.entries.Lcz_BookingGuarantee, paymentMethod && index.h("span", null, ": ", paymentMethod)), this.shouldShowToggleButton() && (index.h("ir-button", { id: "drawer-icon", "data-toggle": "collapse", "data-target": ".guarrantee", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "myCollapse", class: "sm-padding-right pointer", variant: "icon", icon_name: "credit_card", onClickHandler: this.handleToggleCollapse.bind(this) }))), index.h("div", { class: "collapse guarrantee" }, this.renderCollapsedContent()), this.renderOtaGuarantee()));
    }
};
IrBookingGuarantee.style = IrBookingGuaranteeStyle0;

const irBookingHeaderCss = ".sc-ir-booking-header-h{display:block}.confirmed.sc-ir-booking-header{color:#fff;display:flex;align-items:center}.bg-ir-green.sc-ir-booking-header{background:#629a4c;padding:0.2rem 0.3rem}.bg-ir-red.sc-ir-booking-header{background:#ff4961;padding:0.2rem 0.3rem}.bg-ir-orange.sc-ir-booking-header{background:#ff9149;padding:0.2rem 0.3rem}";
const IrBookingHeaderStyle0 = irBookingHeaderCss;

const IrBookingHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.toast = index.createEvent(this, "toast", 7);
        this.closeSidebar = index.createEvent(this, "closeSidebar", 7);
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt", 7);
        this.openSidebar = index.createEvent(this, "openSidebar", 7);
        this.hasEmail = true;
        this.bookingStatus = null;
        this.confirmationBG = {
            '001': 'bg-ir-orange',
            '002': 'bg-ir-green',
            '003': 'bg-ir-red',
            '004': 'bg-ir-red',
        };
        this.bookingService = new booking_service.BookingService();
        this.alertMessage = `ALERT! Modifying an OTA booking will create a discrepancy between igloorooms and the source. Future guest modifications on the OTA may require manual adjustments of the booking.`;
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
                return index.h("ir-events-log", { booking: this.booking, slot: "modal-body", bookingNumber: this.booking.booking_nbr });
        }
    }
    render() {
        var _a, _b;
        const lastManipulation = this.booking.ota_manipulations ? this.booking.ota_manipulations[this.booking.ota_manipulations.length - 1] : null;
        return (index.h("div", { key: '30ddd492ce59575592f5d80d997679acde455740', class: "fluid-container px-1" }, index.h("div", { key: '5a7a4812b37736ae388f559827423a3ea29acf0a', class: "d-flex flex-column p-0 mx-0 flex-lg-row align-items-md-center justify-content-between mt-1" }, index.h("div", { key: '53b1f01da142328fd4082af388ce7d88e057f5e2', class: "m-0 p-0 mb-1 mb-lg-0 mt-md-0" }, index.h("p", { key: '6873463ecb14a3e222aeb0a6f8e4bea4462900cc', class: "font-size-large m-0 p-0" }, `${locales_store.locales.entries.Lcz_Booking}#${this.booking.booking_nbr}`), index.h("p", { key: '768be3c66846fd5565687a5bda398e6f48fccb58', class: "m-0 p-0" }, !this.booking.is_direct && index.h("span", { key: 'c60255b5394ccf51a9603d2dc92693eeec9f3c4f', class: "mr-1 m-0" }, this.booking.channel_booking_nbr))), index.h("div", { key: '8814531a2bb9e4bec62a3f01a7a14942b2bf8a06', class: "d-flex justify-content-end align-items-center", style: { gap: '1rem', flexWrap: 'wrap' } }, index.h("div", { key: 'fa66f51ca5ae1c4c81b975e14ba74aaf7b16dce7', class: "d-flex flex-column align-items-center" }, index.h("span", { key: '6ecac89fb523d42123a2d6b92462335fa0380dd4', class: `confirmed btn-sm m-0  ${this.confirmationBG[this.booking.is_requested_to_cancel ? '003' : this.booking.status.code]}` }, this.booking.is_requested_to_cancel ? locales_store.locales.entries.Lcz_CancellationRequested : this.booking.status.description), lastManipulation && (index.h("ir-popover", { key: '19fb0cba89b0b5c0eec81db45cf35e9e8940520b', trigger: "hover", renderContentAsHtml: true, content: `<div><p>Modified by ${lastManipulation.user} at ${lastManipulation.date} ${lastManipulation.hour}:${lastManipulation.minute}.</p>
                <p>${this.alertMessage}</p></div>` }, index.h("p", { key: 'ee5811df2c03cdcf38a01488a6e8f6be883849bb', class: "mx-0 p-0 small text-danger", style: { marginTop: '0.25rem', marginBottom: '0' } }, index.h("b", { key: 'ca4fdf0e7f33573eedc856f946a4279dfc13367c' }, "Modified"))))), this.booking.allowed_actions.length > 0 && this.booking.is_editable && (index.h("div", { key: '9020e7a7ef42b83f6323d00d91526456880fb2ab', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.25rem' } }, index.h("ir-select", { key: '30b857194f2a2885060fa990de9d4b0ea793473a', selectContainerStyle: "h-28", selectStyles: "d-flex status-select align-items-center h-28", firstOption: locales_store.locales.entries.Lcz_Select, id: "update-status", size: "sm", "label-available": "false", data: this.booking.allowed_actions.map(b => ({ text: b.description, value: b.code })), textSize: "sm", class: "sm-padding-right m-0 ", selectedValue: this.bookingStatus }), index.h("ir-button", { key: '8ccb7d2ff690c6a05e1f629994c0bc6109836295', onClickHandler: () => {
                if (!this.booking.is_direct) {
                    this.modalEl.openModal();
                    return;
                }
                this.updateStatus();
            }, btn_styles: "h-28", isLoading: irInterceptor_store.isRequestPending('/Change_Exposed_Booking_Status'), btn_disabled: irInterceptor_store.isRequestPending('/Change_Exposed_Booking_Status'), id: "update-status-btn", size: "sm", text: "Update" }))), index.h("ir-button", { key: '9505dbdf5da862241afa8eff254c6e4f31c2a3a0', size: "sm", btn_color: "outline", text: locales_store.locales.entries.Lcz_EventsLog, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'events-log' });
            } }), calendarData.calendar_data.is_pms_enabled && (index.h("ir-button", { key: '59072d6b196a98625a1f824e42fa192f88dcff25', size: "sm", btn_color: "outline", text: locales_store.locales.entries.Lcz_pms, onClick: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'pms' });
            } })), this.hasReceipt && index.h("ir-button", { key: 'bd433e96319b59153bdc7934e0b6b67d2813a247', variant: "icon", id: "receipt", icon_name: "reciept", class: "", style: { '--icon-size': '1.65rem' } }), this.hasPrint && index.h("ir-button", { key: '0b529fc81cd818d0c75d9fe069e323c3a95078e8', variant: "icon", id: "print", icon_name: "print", class: "", style: { '--icon-size': '1.65rem' } }), this.hasEmail && index.h("ir-button", { key: 'a9c3853c979b295cf0c000ffae1bea8da368fd18', variant: "icon", id: "email", title: "Email this booking", icon_name: "email", class: "", style: { '--icon-size': '1.65rem' } }), this.hasDelete && index.h("ir-button", { key: '4f8976307db16e480ba6d78897a4d811f818efb2', variant: "icon", id: "book-delete", icon_name: "trash", class: "", style: Object.assign(Object.assign({}, icons.colorVariants.danger), { '--icon-size': '1.65rem' }) }), this.hasMenu && index.h("ir-button", { key: '48a67eedd8ac9c0491bb1cbb04fb3fdc515bb1b6', variant: "icon", class: "mr-1", id: "menu", icon_name: "menu_list", style: { '--icon-size': '1.65rem' } }), this.hasCloseButton && (index.h("ir-button", { key: 'be1a63dcdcc3d1f9dc7e57e1c0075be46dabf933', id: "close", variant: "icon", style: { '--icon-size': '1.65rem' }, icon_name: "xmark", class: "ml-2", onClickHandler: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.closeSidebar.emit(null);
            } })))), index.h("ir-dialog", { key: '51e552d046ff5d0675b066b0432b18efc3968522', onOpenChange: e => {
                if (!e.detail) {
                    this.currentDialogStatus = null;
                }
            }, style: this.currentDialogStatus === 'events-log' && { '--ir-dialog-max-width': 'max-content' }, ref: el => (this.dialogRef = el) }, this.renderDialogBody()), index.h("ir-modal", { key: '7c9681b34b38c0cf261c5c2e20f00728f54219ff', ref: el => (this.modalEl = el), modalTitle: '', leftBtnText: (_a = locales_store.locales === null || locales_store.locales === void 0 ? void 0 : locales_store.locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Cancel, rightBtnText: (_b = locales_store.locales === null || locales_store.locales === void 0 ? void 0 : locales_store.locales.entries) === null || _b === void 0 ? void 0 : _b.Lcz_Confirm, modalBody: locales_store.locales.entries.Lcz_OTA_Modification_Alter, isLoading: irInterceptor_store.isRequestPending('/Change_Exposed_Booking_Status'), onConfirmModal: this.updateStatus.bind(this) })));
    }
};
IrBookingHeader.style = IrBookingHeaderStyle0;

const irDialogCss = ":host{display:block;margin:0;padding:0;box-sizing:border-box}.backdrop{opacity:0;background:rgba(0, 0, 0, 0.2);position:fixed;inset:0;z-index:99999998}.backdrop[data-state='opened']{animation:overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards}.backdrop[data-state='closed']{opacity:0;pointer-events:none}.modal-container{box-sizing:border-box;margin:0;box-shadow:hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;position:fixed;z-index:99999999;overflow-y:auto;top:50%;left:50%;background:white;transform:translate(-50%, -50%);width:90%;min-height:fit-content;height:fit-content;max-width:var(--ir-dialog-max-width, 40rem);min-width:var(--ir-dialog-min-width);max-height:85vh;border-radius:8px;padding:0;animation:contentShow 300ms cubic-bezier(0.16, 1, 0.3, 1)}.modal-footer ::slotted(*){flex-direction:row;align-items:center;justify-content:end;gap:8px;--ir-btn-width:inherit}.modal-footer{--ir-btn-width:100%}.modal-title ::slotted(*){font-size:18px;font-weight:600;color:#101828;margin-bottom:8px}.modal-body ::slotted(*){font-size:14px;font-weight:400;color:#475467;padding:0;margin:0}@keyframes overlayShow{from{opacity:0}to{opacity:1}}@keyframes contentShow{from{opacity:0;transform:translate(-50%, -48%) scale(0.96)}to{opacity:1;transform:translate(-50%, -50%) scale(1)}}.dialog-close-button{position:absolute;top:15px;right:15px}";
const IrDialogStyle0 = irDialogCss;

const IrDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.openChange = index.createEvent(this, "openChange", 7);
        /**
         * Controls whether the dialog should be opened.
         * Can be updated externally and watched internally.
         */
        this.open = false;
        /**
         * Internal open state, driven by `open` prop or internal logic.
         */
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
    /**
     * Opens the modal dialog programmatically.
     * Applies `overflow: hidden` to the `body`.
     *
     * Example:
     * ```ts
     * const dialog = document.querySelector('ir-dialog');
     * await dialog.openModal();
     * ```
     */
    async openModal() {
        this.isOpen = true;
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            this.prepareFocusTrap();
        }, 10);
        this.openChange.emit(this.isOpen);
    }
    /**
     * Closes the modal dialog programmatically.
     * Reverts body scroll and emits `openChange`.
     */
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
    /**
     * Finds and traps focus within modal content for accessibility.
     */
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
    render() {
        return (index.h(index.Host, { key: '3055663f9994e7d0c24804c1e53975fe2af203e7' }, index.h("div", { key: 'd67f5edd911f7a24177833164068e9db23e9c140', class: "backdrop", "data-state": this.isOpen ? 'opened' : 'closed', onClick: () => this.closeModal() }), this.isOpen && (index.h("div", { key: 'e464aa9dfdb621b2b6c9da1f08b2c712d4d75904', class: "modal-container", tabIndex: -1, role: "dialog", "aria-labelledby": "dialog1Title", "aria-describedby": "dialog1Desc" }, index.h("ir-icon", { key: 'cd07b63a4ef908c9cc5c716ed6825f53d9a426c3', id: "close", class: "dialog-close-button", onIconClickHandler: () => this.closeModal() }, index.h("svg", { key: 'ed8d717cd852c72119fc405862f0748f60a42d68', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 18, width: 18 }, index.h("path", { key: 'ffe59f99db43e7a33fbeef768029d21bda8af0c3', fill: "#104064", class: "currentColor", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" }))), index.h("div", { key: 'a0bce8b06d3ca81c4195b2b233edbf253e09f475', class: 'modal-title', id: "dialog1Title" }, index.h("slot", { key: 'd35dbe8ac3210da4db9628ec04b23739c39436d6', name: "modal-title" })), index.h("div", { key: '41c634b11e5e3aba49b5574393c61e9ba3e3b2fc', class: "modal-body", id: "dialog1Desc" }, index.h("slot", { key: 'bf22a5b1331529df729dafd8b9d44b8de4ed74a0', name: "modal-body" })), index.h("div", { key: '575215ddccfe342401107cc6de431526fa0ff90e', class: "modal-footer" }, index.h("slot", { key: '6bf9c14870cdfa2e3271f9ab41878afc891c3b6b', name: "modal-footer" }))))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "open": ["handleOpenChange"]
    }; }
};
IrDialog.style = IrDialogStyle0;

const irDropdownCss = ".dropdown-menu.sc-ir-dropdown{z-index:1000;width:100%;max-height:300px;overflow-y:auto}.dropdown.nav-item.show.sc-ir-dropdown .dropdown-menu.sc-ir-dropdown{display:block}.caret-icon.sc-ir-dropdown{position:absolute;top:50%;transform:translateY(-55%);right:0.25rem;z-index:99999}.dropdown-trigger.sc-ir-dropdown{position:relative}.caret-icon.disabled.sc-ir-dropdown{opacity:0.5 !important;pointer-events:none !important;cursor:not-allowed !important}";
const IrDropdownStyle0 = irDropdownCss;

const IrDropdown = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.optionChange = index.createEvent(this, "optionChange", 7);
        this.disabled = false;
        this.isOpen = false;
        this.focusedIndex = -1;
        this.itemChildren = [];
        this.mo = null;
        this.isComponentConnected = true;
        this.updateQueued = false;
        this.handleDocumentClick = (event) => {
            if (!this.isComponentConnected || !this.el.contains(event.target)) {
                this.closeDropdown();
            }
        };
        this.handleKeyDown = (event) => {
            if (!this.isComponentConnected || this.disabled)
                return;
            const maxIndex = this.itemChildren.length - 1;
            switch (event.key) {
                case 'ArrowDown':
                    event.preventDefault();
                    if (!this.isOpen) {
                        this.openDropdown();
                        // After opening, if we have a selection, start from next item
                        if (this.focusedIndex >= 0 && this.focusedIndex < maxIndex) {
                            this.focusedIndex++;
                            this.focusItemElement(this.focusedIndex);
                        }
                        else if (this.focusedIndex === -1) {
                            // No selection, start from first item
                            this.focusedIndex = 0;
                            this.focusItemElement(this.focusedIndex);
                        }
                        else if (this.focusedIndex === maxIndex) {
                            // At last item, wrap to first
                            this.focusedIndex = 0;
                            this.focusItemElement(this.focusedIndex);
                        }
                    }
                    else if (maxIndex >= 0) {
                        this.focusedIndex = this.focusedIndex < maxIndex ? this.focusedIndex + 1 : 0;
                        this.focusItemElement(this.focusedIndex);
                    }
                    break;
                case 'ArrowUp':
                    event.preventDefault();
                    if (!this.isOpen) {
                        this.openDropdown();
                        // After opening, if we have a selection, start from previous item
                        if (this.focusedIndex > 0) {
                            this.focusedIndex--;
                            this.focusItemElement(this.focusedIndex);
                        }
                        else if (this.focusedIndex === -1) {
                            // No selection, start from last item
                            this.focusedIndex = maxIndex;
                            this.focusItemElement(this.focusedIndex);
                        }
                        else if (this.focusedIndex === 0) {
                            // At first item, wrap to last
                            this.focusedIndex = maxIndex;
                            this.focusItemElement(this.focusedIndex);
                        }
                    }
                    else if (maxIndex >= 0) {
                        this.focusedIndex = this.focusedIndex > 0 ? this.focusedIndex - 1 : maxIndex;
                        this.focusItemElement(this.focusedIndex);
                    }
                    break;
                case 'Enter':
                    event.preventDefault();
                    if (this.isOpen && this.focusedIndex >= 0) {
                        this.selectItemElement(this.focusedIndex);
                    }
                    else if (!this.isOpen) {
                        this.openDropdown();
                    }
                    break;
                case 'Escape':
                    event.preventDefault();
                    this.closeDropdown();
                    break;
                case 'Tab':
                    if (this.isOpen) {
                        this.closeDropdown();
                    }
                    break;
            }
        };
    }
    componentWillLoad() {
        this.selectedOption = this.value;
        this.documentClickHandler = this.handleDocumentClick.bind(this);
        this.collectItemChildren();
        // Optimized mutation observer with debouncing
        this.mo = new MutationObserver(() => {
            if (!this.updateQueued) {
                this.updateQueued = true;
                requestAnimationFrame(() => {
                    if (this.isComponentConnected) {
                        this.collectItemChildren();
                        this.updateQueued = false;
                    }
                });
            }
        });
        this.mo.observe(this.el, { childList: true, subtree: true });
    }
    componentDidLoad() {
        document.addEventListener('click', this.documentClickHandler, { passive: true });
        // Single RAF call instead of multiple setTimeouts
        requestAnimationFrame(() => {
            if (this.isComponentConnected) {
                this.updateItemElements();
                if (this.value) {
                    this.updateDropdownItemValue(this.value);
                }
            }
        });
    }
    disconnectedCallback() {
        var _a;
        this.isComponentConnected = false;
        document.removeEventListener('click', this.documentClickHandler);
        (_a = this.mo) === null || _a === void 0 ? void 0 : _a.disconnect();
        this.mo = null;
    }
    handleDocumentKeyDown(event) {
        if (!this.isOpen || !this.isComponentConnected)
            return;
        if (event.key === 'Escape') {
            this.closeDropdown();
        }
    }
    handleDropdownItemSelect(ev) {
        if (!this.isComponentConnected)
            return;
        ev.stopPropagation();
        this.selectOption(ev.detail);
        ev.target.setAttribute('aria-selected', 'true');
    }
    handleDropdownItemRegister() {
        if (!this.isComponentConnected)
            return;
        this.collectItemChildren();
    }
    handleDropdownItemUnregister() {
        if (!this.isComponentConnected)
            return;
        this.collectItemChildren();
    }
    handleValueChange(newValue, oldValue) {
        if (newValue !== oldValue && this.isComponentConnected) {
            this.updateDropdownItemValue(newValue);
        }
    }
    updateDropdownItemValue(value) {
        // Clear previous selections immediately
        this.itemChildren.forEach(el => el.removeAttribute('aria-selected'));
        // Set new selection
        const el = this.itemChildren.find(el => el.value === value);
        if (el) {
            el.setAttribute('aria-selected', 'true');
        }
    }
    getSelectedItemIndex() {
        if (!this.value)
            return -1;
        return this.itemChildren.findIndex(item => item.value === this.value);
    }
    openDropdown() {
        try {
            this.isOpen = true;
            // Initialize focus to the currently selected item
            this.focusedIndex = this.getSelectedItemIndex();
            // Immediate update instead of setTimeout
            this.updateItemElements();
            // Auto-scroll to selected item if it exists
            if (this.focusedIndex >= 0) {
                requestAnimationFrame(() => {
                    this.scrollToSelectedItem();
                });
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    closeDropdown() {
        this.isOpen = false;
        this.focusedIndex = -1;
        this.removeItemFocus();
    }
    collectItemChildren() {
        if (!this.isComponentConnected)
            return;
        const items = Array.from(this.el.querySelectorAll('ir-dropdown-item'));
        this.itemChildren = items;
        // Immediate update instead of setTimeout
        this.updateItemElements();
    }
    updateItemElements() {
        if (!this.isComponentConnected)
            return;
        // Use the collected item children directly
        this.itemChildren.forEach((el, index) => {
            el.setAttribute('data-slot-index', String(index));
            el.setAttribute('role', 'option');
            el.setAttribute('tabindex', '-1');
        });
    }
    removeItemFocus() {
        this.itemChildren.forEach(element => {
            element.classList.remove('focused', 'active');
            // Don't remove aria-selected as it indicates selection, not focus
        });
    }
    focusItemElement(index) {
        this.removeItemFocus();
        if (index >= 0 && index < this.itemChildren.length) {
            const element = this.itemChildren[index];
            element.classList.add('focused');
            element.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
    }
    selectItemElement(index) {
        if (index >= 0 && index < this.itemChildren.length) {
            const element = this.itemChildren[index];
            element.click();
        }
    }
    scrollToSelectedItem() {
        if (this.focusedIndex >= 0 && this.focusedIndex < this.itemChildren.length) {
            const selectedElement = this.itemChildren[this.focusedIndex];
            if (selectedElement) {
                selectedElement.scrollIntoView({
                    block: 'nearest',
                    behavior: 'smooth',
                    inline: 'nearest',
                });
            }
        }
    }
    selectOption(option) {
        this.selectedOption = option;
        this.value = option;
        this.optionChange.emit(option);
        this.closeDropdown();
    }
    render() {
        return (index.h(index.Host, { key: '2dc85a1a0c3e18e5d7ad95d73b65191ab4d6517f', class: `dropdown ${this.isOpen ? 'show' : ''}` }, index.h("div", { key: '27ea00249469c1b2b87549a14335488a388a93e3', onClick: () => {
                if (this.disabled)
                    return;
                if (this.isOpen) {
                    this.closeDropdown();
                }
                else {
                    this.openDropdown();
                }
            }, "aria-disabled": String(this.disabled), class: `dropdown-trigger ${this.disabled ? 'disabled' : ''}`, onKeyDown: this.handleKeyDown, tabindex: "0" }, index.h("slot", { key: '1da437861821b8d6ce88268074964c7769848992', name: "trigger" }), index.h("div", { key: '180d0d26598c5892fb6422c4f145e5f03601f8e7', class: `caret-icon ${this.disabled ? 'disabled' : ''}` }, index.h("ir-icons", { key: '768ff0d27e0dd698f700b17fb823ebbcf8ae7362', name: !this.isOpen ? 'angle-down' : 'angle-up' }))), index.h("div", { key: '72c5479acbc9a3f6163e30c0634ae52e19816433', class: "dropdown-menu", role: "listbox", "aria-expanded": this.isOpen.toString() }, index.h("slot", { key: '87327ce54ba63e3ee7fa304e7a7566bfef14447f' }))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "value": ["handleValueChange"]
    }; }
};
IrDropdown.style = IrDropdownStyle0;

const irDropdownItemCss = ".sc-ir-dropdown-item-h{display:block;cursor:pointer}[hidden].sc-ir-dropdown-item-h{display:none !important}.focused.sc-ir-dropdown-item-h{background:#f4f5fa !important}.active.sc-ir-dropdown-item-h,[aria-selected='true'].sc-ir-dropdown-item-h,.sc-ir-dropdown-item-h:active{outline:none;background-color:var(--blue, #1e9ff2) !important;color:white !important}.dropdown-item.sc-ir-dropdown-item-h{padding:0.25rem 1rem !important;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}";
const IrDropdownItemStyle0 = irDropdownItemCss;

const IrDropdownItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.dropdownItemSelect = index.createEvent(this, "dropdownItemSelect", 7);
        this.dropdownItemRegister = index.createEvent(this, "dropdownItemRegister", 7);
        this.dropdownItemUnregister = index.createEvent(this, "dropdownItemUnregister", 7);
        this.isComponentConnected = true;
        this.hasRegistered = false;
        /**
         * When true, visually hide the item (used for filtering).
         */
        this.hidden = false;
        this.handleClick = (event) => {
            event.stopPropagation();
            if (!this.isComponentConnected)
                return;
            this.dropdownItemSelect.emit(this.value);
        };
    }
    componentDidLoad() {
        if (this.isComponentConnected && !this.hasRegistered) {
            this.hasRegistered = true;
            // Use RAF to ensure parent is ready
            requestAnimationFrame(() => {
                if (this.isComponentConnected) {
                    this.dropdownItemRegister.emit();
                }
            });
        }
    }
    disconnectedCallback() {
        this.isComponentConnected = false;
        // Only emit unregister if we previously registered and parent might still be connected
        if (this.hasRegistered && this.el.parentElement) {
            // Check if parent dropdown still exists in DOM
            const parentDropdown = this.el.closest('ir-dropdown');
            if (parentDropdown && document.contains(parentDropdown)) {
                this.dropdownItemUnregister.emit();
            }
        }
        this.hasRegistered = false;
    }
    async matchesQuery(query) {
        var _a, _b;
        if (!this.isComponentConnected)
            return false;
        const q = query.toLowerCase();
        const hay = ((_b = (_a = this.label) !== null && _a !== void 0 ? _a : this.el.textContent) !== null && _b !== void 0 ? _b : '').toLowerCase();
        return hay.includes(q);
    }
    async setHidden(next) {
        if (this.isComponentConnected) {
            this.hidden = next;
        }
    }
    render() {
        return (index.h(index.Host, { key: '41d02b45a57e2796537b3ac433e0e02dba17d9fb', role: "option", tabindex: "-1", "aria-selected": "false", class: { 'dropdown-item': true, 'hidden': this.hidden }, onClick: this.handleClick, "data-value": this.value }, this.html_content ? index.h("span", { innerHTML: this.html_content }) : index.h("slot", null)));
    }
    get el() { return index.getElement(this); }
};
IrDropdownItem.style = IrDropdownItemStyle0;

const irEventsLogCss = ".sc-ir-events-log-h{display:block}.beta.sc-ir-events-log{background:var(--red);color:white;padding:0.2rem 0.3rem;font-size:12px;border-radius:4px;margin:0}.event-row.sc-ir-events-log{padding-bottom:0.5rem}.list-title.sc-ir-events-log{margin:0;padding:0;font-size:14px;font-weight:bold;width:fit-content}.list-item.sc-ir-events-log{margin:0;padding:0;font-size:14px;margin-left:5px;width:fit-content}.list-item.green.sc-ir-events-log{color:#629a4c;font-weight:600}.list-item.red.sc-ir-events-log{color:#ff4961;font-weight:600}.dates-row.sc-ir-events-log{display:flex;align-items:center;gap:0.875rem}";
const IrEventsLogStyle0 = irEventsLogCss;

const IrEventsLog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    componentWillLoad() {
        this.init();
    }
    async init() {
        try {
            this.bookingEvents = this.booking.events;
        }
        catch (error) {
            console.error(error);
        }
    }
    render() {
        var _a;
        return (index.h("div", { key: '08cbb954abf646045af6d0abe392d916bdb63160', class: "p-1" }, index.h("div", { key: '7a9132b0ca420d4db6677a2ebcbcfa01f62551ce', class: "d-flex  align-items-center", style: { gap: '0.5rem' } }, index.h("h3", { key: '8b7612f1fabe26a9450bdd3810fb011161306c33', class: " text-left p-0 m-0  dialog-title " }, locales_store.locales.entries.Lcz_EventsLog)), irInterceptor_store.isRequestPending('/Get_Exposed_Booking_Events') ? (index.h("div", { class: 'd-flex align-items-center justify-content-center dialog-container-height' }, index.h("ir-spinner", null))) : (index.h(index.Fragment, null, index.h("table", { class: " dialog-container-height" }, index.h("thead", { style: { opacity: '0' } }, index.h("tr", null, index.h("th", null, "date"), index.h("th", null, "user"), index.h("th", null, "status"))), index.h("tbody", null, (_a = this.bookingEvents) === null || _a === void 0 ? void 0 : _a.map(e => (index.h("tr", { key: e.id, class: "pb-1" }, index.h("td", { class: "event-row dates-row" }, index.h("span", null, e.date), index.h("span", null, String(e.hour).padStart(2, '0'), ":", String(e.minute).padStart(2, '0'), ":", String(e.second).padStart(2, '0'))), index.h("td", { class: "pl-3 event-row " }, e.type), index.h("td", { class: "pl-1 event-row " }, e.user))))))))));
    }
};
IrEventsLog.style = IrEventsLogStyle0;

const irExtraServiceCss = ".sc-ir-extra-service-h{display:block}.extra-service-container.sc-ir-extra-service{display:flex;align-items:start;justify-content:space-between;gap:0.5rem}.extra-service-container.sc-ir-extra-service *.sc-ir-extra-service{padding:0;margin:0;box-sizing:border-box}.extra-service-actions.sc-ir-extra-service{display:flex;align-items:center;gap:0.5rem}.extra-service-conditional-date.sc-ir-extra-service{margin-top:0.5rem}.extra-service-price.sc-ir-extra-service{white-space:nowrap}.extra-service-description.sc-ir-extra-service{word-break:break-all}";
const IrExtraServiceStyle0 = irExtraServiceCss;

const IrExtraService = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.editExtraService = index.createEvent(this, "editExtraService", 7);
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt", 7);
        this.bookingService = new booking_service.BookingService();
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
        return (index.h(index.Host, { key: 'c27d94a1710cf991ceab294598e76ea9784bab82' }, index.h("div", { key: '61ef29b41f73782c13db9f8a42fbe74820218bbd', class: "p-1" }, index.h("div", { key: '8b0608696bfc853e6945b4ec90e1823a327aa5af', class: 'extra-service-container' }, index.h("p", { key: '4447c2d5743610f9994678d4986712856087a86c', class: "extra-service-description" }, this.service.description), index.h("div", { key: 'ce95afcbe3c2729d43ad1295379929250126a5a8', class: "extra-service-actions" }, !!this.service.price && this.service.price > 0 && (index.h("p", { key: '074934359a8db0b6dbd9f69dc670ae4e04b83f01', class: "extra-service-price p-0 m-0 font-weight-bold" }, utils.formatAmount(this.currencySymbol, this.service.price))), index.h("ir-button", { key: 'daad82b348c141f60ec4306737080d75d8e0d913', id: `serviceEdit-${this.service.booking_system_id}`, class: "extra-service-edit-btn m-0 p-0", variant: "icon", icon_name: "edit", style: icons.colorVariants.secondary, onClickHandler: () => this.editExtraService.emit(this.service) }), index.h("ir-button", { key: '29d9431c1334c3121e27620148bba06683a8bace', class: "extra-service-delete-btn m-0 p-0", variant: "icon", onClickHandler: () => this.irModalRef.openModal(), id: `roomDelete-${this.service.booking_system_id}`, icon_name: "trash", style: icons.colorVariants.danger }))), index.h("div", { key: 'e2d9db6b2a244fafe9914c58c5cff3d40899e651', class: "extra-service-conditional-date" }, this.service.start_date && this.service.end_date ? (index.h("ir-date-view", { class: "extra-service-date-view mr-1", from_date: this.service.start_date, to_date: this.service.end_date, showDateDifference: false })) : (this.service.start_date && index.h("p", { class: "extra-service-date-view" }, moment.hooks(new Date(this.service.start_date)).format('MMM DD, YYYY'))))), index.h("ir-modal", { key: '5511cf100769738fdc9a3e163c0479e6aa493cf3', autoClose: false, ref: el => (this.irModalRef = el), isLoading: irInterceptor_store.isRequestPending('/Do_Booking_Extra_Service'), onConfirmModal: this.deleteService.bind(this), iconAvailable: true, icon: "ft-alert-triangle danger h1", leftBtnText: locales_store.locales.entries.Lcz_Cancel, rightBtnText: locales_store.locales.entries.Lcz_Delete, leftBtnColor: "secondary", rightBtnColor: "danger", modalTitle: locales_store.locales.entries.Lcz_Confirmation, modalBody: `${locales_store.locales.entries['Lcz_AreYouSureDoYouWantToRemove ']} ${locales_store.locales.entries.Lcz_ThisService} ${locales_store.locales.entries.Lcz_FromThisBooking}` })));
    }
};
IrExtraService.style = IrExtraServiceStyle0;

// export const ZIdInfo = z.object({
//   type: z.object({
//     code: z.string().min(3),
//     description: z.string(),
//   }),
//   number: z.string().min(2),
// });
// export const ZSharedPerson = z.object({
//   id: z.number(),
//   full_name: z.string().min(2),
//   country_id: z.coerce.number().min(0),
//   dob: z.coerce.date().transform(date => moment(date).format('YYYY-MM-DD')),
//   id_info: ZIdInfo,
// });
/**
 * ZIdInfo schema:
 * - `type.code`: Validates a non-empty string must be at least 3 chars.
 *   If empty string or not provided, validation is skipped.
 * - `type.description`: Same pattern for description (but no min length).
 * - `number`: Validates if non-empty string it should be at least 2 chars.
 */
const ZIdInfo = index$1.z.object({
    type: index$1.z.object({
        code: index$1.z
            .union([
            // If provided and non-empty, must have at least 3 chars
            index$1.z.string().min(3),
            // or it can be an empty string
            index$1.z.literal(''),
        ])
            .optional(), // or undefined
        description: index$1.z
            .union([
            // If provided and non-empty, no special min
            index$1.z.string(),
            // or it can be empty string
            index$1.z.literal(''),
        ])
            .optional(),
    }),
    number: index$1.z
        .union([
        // If provided and non-empty, must have at least 2 chars
        index$1.z.string().min(2),
        // or it can be empty string
        index$1.z.literal(''),
    ])
        .optional()
        .nullable(),
});
/**
 * ZSharedPerson schema:
 * - `id`: Optional numeric field.
 * - `full_name`: If provided and non-empty, must be at least 2 chars.
 * - `country_id`: If provided, coerced to number, must be >= 0.
 * - `dob`: If provided, coerced to Date and formatted. Otherwise skipped.
 * - `id_info`: The nested object above; can also be omitted entirely.
 */
const ZSharedPerson = index$1.z.object({
    id: index$1.z.number().optional(),
    // full_name: z
    //   .union([
    //     z.string().min(2), // if provided and non-empty, must have min length 2
    //     z.literal(''), // or it can be empty string
    //   ])
    //   .optional(),
    first_name: index$1.z
        .union([
        index$1.z.string().min(2), // if provided and non-empty, must have min length 2
        index$1.z.literal(''), // or it can be empty string
    ])
        .optional(),
    // .nullable(),
    last_name: index$1.z
        .union([
        index$1.z.string().min(2), // if provided and non-empty, must have min length 2
        index$1.z.literal(''), // or it can be empty string
    ])
        .optional(),
    // .nullable(),
    country_id: index$1.z.coerce
        .number()
        .min(0) // if provided, must be >= 0
        .optional(),
    dob: index$1.z
        .string()
        .nullable()
        .optional()
        .refine(value => value === undefined || moment.hooks(value, 'DD/MM/YYYY', true).isValid() || value === '' || value === null, 'Invalid date format')
        .transform(value => {
        if (value === undefined || value === '' || value === null)
            return null;
        const isDDMMYYYY = moment.hooks(value, 'DD/MM/YYYY', true).isValid();
        return isDDMMYYYY ? null : moment.hooks(value, 'DD/MM/YYYY').format('YYYY-MM-DD');
    }),
    id_info: ZIdInfo.optional(),
    is_main: index$1.z.boolean().default(false),
});
// export const ZSharedPersons = z.array(ZSharedPerson).superRefine((data, ctx) => {
//   for (const d of data) {
//     validateSharedPerson(d, ctx);
//   }
// });
function validateSharedPerson(data) {
    var _a;
    ZSharedPerson.parse(data);
    const hasValue = (field) => {
        return field !== null && field !== undefined && field.trim() !== '';
    };
    const ctx = [];
    if (data.is_main) {
        if (!hasValue(data.first_name)) {
            ctx.push({
                path: ['first_name'],
                code: index$1.ZodIssueCode.custom,
                message: 'First name is required for main guest',
            });
        }
        if (!hasValue(data.last_name)) {
            ctx.push({
                path: ['last_name'],
                code: index$1.ZodIssueCode.custom,
                message: 'Last name is required for main guest',
            });
        }
    }
    // For non-main guests: check if ANY field has data
    const hasAnyFieldData = hasValue(data.first_name) ||
        hasValue(data.last_name) ||
        hasValue(data.dob) ||
        (data.country_id !== null && data.country_id !== undefined && data.country_id > 0) ||
        hasValue((_a = data.id_info) === null || _a === void 0 ? void 0 : _a.number);
    // If any field has data, then first_name and last_name become required
    if (hasAnyFieldData) {
        if (!hasValue(data.first_name)) {
            ctx.push({
                path: ['first_name'],
                code: index$1.ZodIssueCode.custom,
                message: 'First name is required when other guest information is provided',
            });
        }
        if (!hasValue(data.last_name)) {
            ctx.push({
                path: ['last_name'],
                code: index$1.ZodIssueCode.custom,
                message: 'Last name is required when other guest information is provided',
            });
        }
    }
    if (ctx.length >= 1) {
        throw new index$1.ZodError(ctx);
    }
}
const ExtraServiceSchema = index$1.z.object({
    booking_system_id: index$1.z.number().optional(),
    cost: index$1.z.coerce.number().nullable(),
    currency_id: index$1.z.number().min(1),
    description: index$1.z.string().min(1),
    end_date: index$1.z.string().nullable(),
    price: index$1.z.coerce.number(),
    start_date: index$1.z.string().nullable(),
    system_id: index$1.z.number().optional(),
});

const irExtraServiceConfigCss = ".sc-ir-extra-service-config-h{display:block;--ir-input-border-color:#cacfe7}.sc-ir-extra-service-config-h .input-group-text.sc-ir-extra-service-config{border-color:var(--ir-input-border-color)}.currency-ph.sc-ir-extra-service-config{padding:0;margin:0;color:#3b4781;display:flex;align-items:center;justify-content:center;padding:0 0 0 0.25rem;border-top:1px solid var(--ir-input-border-color);border-bottom:1px solid var(--ir-input-border-color);border-left:1px solid transparent;transition:border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;transition:border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}.service-description-input.sc-ir-extra-service-config{height:70px !important}.service-description.sc-ir-extra-service-config .input-group-prepend.sc-ir-extra-service-config{background-color:#f4f5fa;border:1px solid var(--ir-input-border-color);border-top-left-radius:0.25rem;border-bottom-left-radius:0.25rem}.service-date-container.sc-ir-extra-service-config{padding:0;margin:0;display:flex;align-items:center;position:relative;width:100%;justify-content:center}.service-date-container.sc-ir-extra-service-config .btn-container.sc-ir-extra-service-config{position:absolute;right:5px;margin:0;display:flex;align-items:center;justify-content:center;padding:0}.service-description.sc-ir-extra-service-config .input-group-text.sc-ir-extra-service-config{height:fit-content;border:0;padding-top:0.75rem !important}.price-input-group.sc-ir-extra-service-config:focus-within .currency-ph.sc-ir-extra-service-config,.cost-input-group.sc-ir-extra-service-config:focus-within .currency-ph.sc-ir-extra-service-config{border-top:1px solid #1e9ff2;border-bottom:1px solid #1e9ff2;border-left:1px solid #1e9ff2}.currency-ph[data-state='error'].sc-ir-extra-service-config{border-color:var(--red, #ff4961)}.price-input.sc-ir-extra-service-config:focus{border-right-width:1px !important}.is-invalid.sc-ir-extra-service-config{background-image:none !important}.price-input.sc-ir-extra-service-config,.cost-input.sc-ir-extra-service-config{border-left:0}.row-group.sc-ir-extra-service-config{display:flex;flex-direction:column;gap:0.5rem}@media (min-width: 640px){.row-group.sc-ir-extra-service-config{flex-direction:row;align-items:center;gap:0}.cost-label.sc-ir-extra-service-config{border-top-left-radius:0;border-bottom-left-radius:0;border-left:0}.until-prepend.sc-ir-extra-service-config,.cost-input-placeholder.sc-ir-extra-service-config{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}.date-from.sc-ir-extra-service-config,.price-input.sc-ir-extra-service-config{border-right-width:0 !important;border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}}.date-focused.sc-ir-extra-service-config{border-color:#1e9ff2}";
const IrExtraServiceConfigStyle0 = irExtraServiceConfigCss;

const sheetCss$4 = ".sc-ir-extra-service-config-h{height:100%}.sheet-container.sc-ir-extra-service-config{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-ir-extra-service-config{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-ir-extra-service-config{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-extra-service-config{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-extra-service-config{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-extra-service-config{flex-direction:row;align-items:center}}";
const IrExtraServiceConfigStyle1 = sheetCss$4;

const IrExtraServiceConfig = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeModal = index.createEvent(this, "closeModal", 7);
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt", 7);
        this.bookingService = new booking_service.BookingService();
    }
    // private d1: HTMLDivElement;
    // private d1_0: HTMLDivElement;
    // private d2_0: HTMLDivElement;
    // private d2: HTMLInputElement;
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
            if (error instanceof index$1.ZodError) {
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
        return (index.h("form", { key: 'f8bd9a5202fd899facfe900128c8d56bf4a8e7ef', class: 'sheet-container', onSubmit: async (e) => {
                e.preventDefault();
                await this.saveAmenity();
            } }, index.h("ir-title", { key: 'c6afac1577b2deff5f61dc24415469638b986174', class: "px-1 sheet-header", onCloseSideBar: () => this.closeModal.emit(null), label: locales_store.locales.entries.Lcz_ExtraServices, displayContext: "sidebar" }), index.h("section", { key: '8d6aab346073f4039c7b68c0156e86933976c012', class: 'px-1 sheet-body' }, index.h("fieldset", { key: '03334d806aaba87a73554ad2d45b70fae7736bfc', class: "input-group mb-1 service-description" }, index.h("div", { key: '530fc4331dd39e457dd7717e4502755b13d4ed39', class: "input-group-prepend" }, index.h("span", { key: 'cd755a1955705a9913b49fbd22e755415beaa47e', class: "input-group-text" }, locales_store.locales.entries.Lcz_Description)), index.h("textarea", { key: '2786e785a2cb7da4c1e25a7d637bb9b7c50b8b91', value: (_a = this.s_service) === null || _a === void 0 ? void 0 : _a.description, class: `form-control service-description-input ${this.error && !((_b = this.s_service) === null || _b === void 0 ? void 0 : _b.description) ? 'is-invalid' : ''}`, style: { height: '7rem' }, maxLength: 250, onChange: e => this.updateService({ description: e.target.value }), "aria-label": "Amenity description" })), index.h("div", { key: 'c735e26a8d877817a9dce04e79e2051d9c9112cb', class: 'row-group mb-1' }, index.h("div", { key: '6ebf0053bb2844c1d9ecc9c81a64d82f760248af', class: "input-group" }, index.h("div", { key: 'c83ca3bd6b8b5178d2a4f6307f84acb1a433fc78', class: "input-group-prepend" }, index.h("span", { key: '39bef9d2ea5a77de5aea08b0f360b1189ca8f0c1', class: "input-group-text", id: "basic-addon1" }, locales_store.locales.entries.Lcz_DatesOn)), index.h("div", { key: 'ead019a28cc9f69cc6c868f2db368b2245117b88',
            // ref={el => (this.d1_0 = el)}
            class: "form-control p-0 m-0 d-flex align-items-center justify-content-center date-from" }, index.h("div", { key: 'ea266e480a2ce5c64fec3370958dc6107c0b19f7', class: "service-date-container" }, index.h("ir-date-picker", { key: 'ba7215b64215012e426f7dd7770c771a2474b5f9',
            // onDatePickerFocus={() => {
            //   this.d1?.classList.add('date-focused');
            //   this.d1_0?.classList.add('date-focused');
            // }}
            // onDatePickerBlur={() => {
            //   this.d1?.classList.remove('date-focused');
            //   this.d1_0?.classList.remove('date-focused');
            // }}
            // customPicker
            emitEmptyDate: true, date: (_c = this.s_service) === null || _c === void 0 ? void 0 : _c.start_date, minDate: this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => { var _a; return this.updateService({ start_date: (_a = e.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD') }); } }, index.h("input", { key: 'd8e9b44a995f9be5b6414a9a9b0e90aa3d40daaa',
            // ref={el => (this.d1 = el)}
            type: "text", slot: "trigger", value: ((_d = this.s_service) === null || _d === void 0 ? void 0 : _d.start_date) ? functions._formatDate(this.s_service.start_date) : null, style: { borderLeftWidth: '0', borderRightWidth: '0', width: '100%', borderRadius: '0' }, class: "text-center w-100 form-control input-sm" })), ((_e = this.s_service) === null || _e === void 0 ? void 0 : _e.start_date) && (index.h("div", { key: 'fd7ed32e7db65d8539e1c0c1a3aa260122a407bf', class: "btn-container" }, index.h("ir-button", { key: 'f9bb8d6dd692d44ae8a3ca7f58d69011db214b31', title: "clear", id: "close", variant: "icon", style: { '--icon-size': '0.875rem' }, icon_name: "xmark-fill", class: "ml-2", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateService({ start_date: null });
            } })))))), index.h("div", { key: '92d36dd21ef90cad79510061a9b2e456183a2bf3', class: "input-group" }, index.h("div", { key: '8bc2d8ba8a732a02c0d91f5bdd1b0d2bd41f57f4', class: "input-group-prepend " }, index.h("span", { key: 'c8b76aca071ac48e4408561a94c9c2be6570cd88', class: "input-group-text until-prepend", id: "basic-addon1" }, locales_store.locales.entries.Lcz_TillAndIncluding)), index.h("div", { key: '3f45d7c79699ee3e2d0b569c109da35adeafa030',
            // ref={el => (this.d2_0 = el)}
            class: "form-control p-0 m-0 d-flex align-items-center justify-content-center" }, index.h("div", { key: 'd42640d39101bec44f6ae3cd8e6323c193d5907c', class: "service-date-container" }, index.h("ir-date-picker", { key: '5d1166d56045532d692ab5cace1b03c76fa01bdd',
            // onDatePickerFocus={() => {
            //   this.d2?.classList.add('date-focused');
            //   this.d2_0?.classList.add('date-focused');
            // }}
            // onDatePickerBlur={() => {
            //   this.d2?.classList.remove('date-focused');
            //   this.d2_0?.classList.remove('date-focused');
            // }}
            emitEmptyDate: true, date: (_f = this.s_service) === null || _f === void 0 ? void 0 : _f.end_date, minDate: (_h = (_g = this.s_service) === null || _g === void 0 ? void 0 : _g.start_date) !== null && _h !== void 0 ? _h : this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => {
                var _a;
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateService({ end_date: (_a = e.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD') });
            } }, index.h("input", { key: '3eac663f700edf775cd07f7e89f8bcb56879ce5c',
            // ref={el => (this.d2 = el)}
            slot: "trigger", value: ((_j = this.s_service) === null || _j === void 0 ? void 0 : _j.end_date) ? functions._formatDate(this.s_service.end_date) : null, style: { borderLeftWidth: '0', borderRightWidth: '0', width: '100%' }, class: "text-center form-control input-sm" })), ((_k = this.s_service) === null || _k === void 0 ? void 0 : _k.end_date) && (index.h("div", { key: 'a3810aeeb7477651502d412e755f01d76e48c3d8', class: "btn-container" }, index.h("ir-button", { key: '957b91a01649813d95dda8d14f3b8dd23b7cd0dd', title: "clear", id: "close", variant: "icon", style: { '--icon-size': '0.875rem' }, icon_name: "xmark-fill", class: "ml-2", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateService({ end_date: null });
            } }))))))), index.h("div", { key: '4a09784366b0462d7973d5d3e276ab59b020c55e', class: 'row-group' }, index.h("ir-price-input", { key: '89bcecd47b8150e1caa77d2a05565eb1a9bbf4de', label: "Price", currency: this.booking.currency.symbol, class: "ir-br-input-none", value: (_m = (_l = this.s_service) === null || _l === void 0 ? void 0 : _l.price) === null || _m === void 0 ? void 0 : _m.toString(), zod: ExtraServiceSchema.pick({ price: true }), "aria-label": locales_store.locales.entries.Lcz_Price, wrapKey: "price", "aria-describedby": "service price", autoValidate: false, "data-state": this.error && !this.validatePrice() ? 'error' : '', onTextChange: e => this.updateService({ price: parseFloat(e.detail) }) }), index.h("ir-price-input", { key: 'bc3c1feea67c2bf43c22c58cc76ec8f1aae56afd', autoValidate: false, label: locales_store.locales.entries.Lcz_Cost, labelStyle: "rounded-0 border-left-0", currency: this.booking.currency.symbol,
            // class="ir-bl-lbl-none ir-bl-none"
            value: (_p = (_o = this.s_service) === null || _o === void 0 ? void 0 : _o.cost) === null || _p === void 0 ? void 0 : _p.toString(), zod: ExtraServiceSchema.pick({ cost: true }), onTextChange: e => this.updateService({ cost: parseFloat(e.detail) }), wrapKey: "cost", "aria-label": "Cost", "aria-describedby": "service cost" }))), index.h("div", { key: 'f9395cf9b4698fc91d28c130c0cd26386bd2288a', class: 'sheet-footer' }, index.h("ir-button", { key: '2c60bacd835cceff319d8d5034e66f22043c1e3c', onClick: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `flex-fill`, text: locales_store.locales.entries.Lcz_Cancel, btn_color: "secondary" }), index.h("ir-button", { key: 'b60099bd600e6ebca0cb38448c8fda123c389009', btn_styles: "justify-content-center align-items-center", class: 'flex-fill', btn_type: "submit", isLoading: irInterceptor_store.isRequestPending('/Do_Booking_Extra_Service'), text: locales_store.locales.entries.Lcz_Save, btn_color: "primary" }))));
    }
};
IrExtraServiceConfig.style = IrExtraServiceConfigStyle0 + IrExtraServiceConfigStyle1;

const irExtraServicesCss = ".sc-ir-extra-services-h{display:block}";
const IrExtraServicesStyle0 = irExtraServicesCss;

const IrExtraServices = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        var _a;
        return (index.h(index.Host, { key: '7dcb2166f8c3df55e0ccda040d84406ac44e34cc', class: 'card p-0 ' }, (_a = this.booking.extra_services) === null || _a === void 0 ? void 0 : _a.map((service, index$1) => (index.h(index.Fragment, null, index.h("ir-extra-service", { bookingNumber: this.booking.booking_nbr, currencySymbol: this.booking.currency.symbol, key: service.booking_system_id, service: service }), index$1 !== this.booking.extra_services.length - 1 && index.h("hr", { class: "mr-2 ml-2 my-0 p-0" }))))));
    }
};
IrExtraServices.style = IrExtraServicesStyle0;

const irGuestInfoCss = ".input-group-text.sc-ir-guest-info{min-width:10rem;text-align:left}.mobilePrefixSelect.sc-ir-guest-info{border-right-width:0;border-top-right-radius:0;border-bottom-right-radius:0}.mobilePrefixInput.sc-ir-guest-info{border-top-left-radius:0;border-bottom-left-radius:0}.check-container.sc-ir-guest-info{position:relative;cursor:pointer;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex;align-items:center}.check-container.sc-ir-guest-info input.sc-ir-guest-info{position:relative;opacity:0;cursor:pointer;height:0;width:0}.check-container.sc-ir-guest-info .checkmark.sc-ir-guest-info{position:relative;top:0;left:0;height:20px;width:20px;border:1px solid #cacfe7;border-radius:4px;transition:all 0.3s ease}.check-container.sc-ir-guest-info input.sc-ir-guest-info:checked~.checkmark.sc-ir-guest-info{background-color:#1e9ff2;border-color:#1e9ff2}.checkmark.sc-ir-guest-info:after{content:'';position:absolute;display:none}.check-container.sc-ir-guest-info input.sc-ir-guest-info:checked~.checkmark.sc-ir-guest-info:after{display:block}.check-label.sc-ir-guest-info{margin-left:10px !important}.check-container.sc-ir-guest-info .checkmark.sc-ir-guest-info:after{left:6px;top:3px;width:6px;height:10px;border:solid white;border-width:0 2px 2px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.ir-card-header.sc-ir-guest-info{width:100%;border-bottom:1px solid #e4e5ec}.close-icon.sc-ir-guest-info{margin:0}.border-theme.sc-ir-guest-info{border:1px solid #cacfe7}.loading-container.sc-ir-guest-info{height:100%;width:100%;display:flex;justify-content:center;align-items:center;margin:0;padding:0}";
const IrGuestInfoStyle0 = irGuestInfoCss;

const sheetCss$3 = ".sc-ir-guest-info-h{height:100%}.sheet-container.sc-ir-guest-info{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-ir-guest-info{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-ir-guest-info{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-guest-info{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-guest-info{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-guest-info{flex-direction:row;align-items:center}}";
const IrGuestInfoStyle1 = sheetCss$3;

const GuestInfo = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeSideBar = index.createEvent(this, "closeSideBar", 7);
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt", 7);
        this.toast = index.createEvent(this, "toast", 7);
        // @State() submit: boolean = false;
        this.guest = null;
        this.isLoading = true;
        this.autoValidate = false;
        this.bookingService = new booking_service.BookingService();
        this.roomService = new room_service.RoomService();
        this.token = new Token.Token();
    }
    async componentWillLoad() {
        if (this.ticket) {
            this.token.setToken(this.ticket);
        }
        if (!!this.token.getToken())
            this.init();
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        this.init();
    }
    async init() {
        try {
            console.log('first');
            this.isLoading = true;
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
        finally {
            this.isLoading = false;
        }
    }
    handleInputChange(params) {
        this.guest = Object.assign(Object.assign({}, this.guest), params);
    }
    async editGuest() {
        var _a;
        try {
            this.autoValidate = true;
            await this.bookingService.editExposedGuest(this.guest, (_a = this.booking_nbr) !== null && _a !== void 0 ? _a : null);
            this.toast.emit({
                type: 'success',
                description: '',
                title: 'Saved Successfully',
                position: 'top-right',
            });
            this.closeSideBar.emit(null);
            this.resetBookingEvt.emit(null);
        }
        catch (error) {
            console.log(error);
        }
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        if (this.isLoading && this.isInSideBar) {
            index.h("div", { class: 'loading-container' }, index.h("ir-spinner", null));
        }
        if (this.isLoading) {
            return null;
        }
        return (index.h("form", { class: 'p-0 sheet-container', onSubmit: async (e) => {
                e.preventDefault();
                await this.editGuest();
            } }, !this.isInSideBar && [index.h("ir-toast", null), index.h("ir-interceptor", null)], this.headerShown && index.h("ir-title", { class: "px-1 sheet-header", displayContext: "sidebar", label: locales_store.locales.entries.Lcz_GuestDetails }), index.h("div", { class: this.isInSideBar ? 'sheet-body' : 'card-content collapse show ' }, index.h("div", { class: this.headerShown ? 'card-body px-1 pt-0' : 'pt-0' }, index.h("ir-input-text", { autoValidate: this.autoValidate, label: (_a = locales_store.locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_FirstName, name: "firstName",
            // submitted={this.submit}
            value: (_b = this.guest) === null || _b === void 0 ? void 0 : _b.first_name, required: true, onTextChange: e => this.handleInputChange({ first_name: e.detail }) }), index.h("ir-input-text", { autoValidate: this.autoValidate, label: (_c = locales_store.locales.entries) === null || _c === void 0 ? void 0 : _c.Lcz_LastName, name: "lastName",
            // submitted={this.submit}
            value: (_d = this.guest) === null || _d === void 0 ? void 0 : _d.last_name, required: true, onTextChange: e => this.handleInputChange({ last_name: e.detail }) }), index.h("ir-input-text", { label: (_e = locales_store.locales.entries) === null || _e === void 0 ? void 0 : _e.Lcz_Email, name: "email",
            // submitted={this.submit}
            value: (_f = this.guest) === null || _f === void 0 ? void 0 : _f.email, required: true, onTextChange: e => this.handleInputChange({ email: e.detail }) }), index.h("ir-input-text", { label: (_g = locales_store.locales.entries) === null || _g === void 0 ? void 0 : _g.Lcz_AlternativeEmail, name: "altEmail", value: (_h = this.guest) === null || _h === void 0 ? void 0 : _h.alternative_email, onTextChange: e => this.handleInputChange({ alternative_email: e.detail }) }), index.h("ir-country-picker", {
            // error={this.submit && !this.guest.country_id}
            country: this.countries.find(c => c.id === this.guest.country_id), label: (_j = locales_store.locales.entries) === null || _j === void 0 ? void 0 : _j.Lcz_Country, onCountryChange: e => this.handleInputChange({ country_id: e.detail.id }), countries: this.countries
        }), index.h("ir-phone-input", { onTextChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { mobile, phone_prefix } = e.detail;
                if (mobile !== this.guest.mobile) {
                    this.handleInputChange({ mobile });
                }
                if (phone_prefix !== this.guest.country_phone_prefix)
                    this.handleInputChange({ country_phone_prefix: phone_prefix });
            }, phone_prefix: this.guest.country_phone_prefix, value: this.guest.mobile, language: this.language, label: (_k = locales_store.locales.entries) === null || _k === void 0 ? void 0 : _k.Lcz_MobilePhone, countries: this.countries }), index.h("div", { class: "mb-2" }, index.h("ir-textarea", { variant: "prepend", onTextChange: e => this.handleInputChange({ notes: e.detail }), value: (_l = this.guest) === null || _l === void 0 ? void 0 : _l.notes, label: (_m = locales_store.locales.entries) === null || _m === void 0 ? void 0 : _m.Lcz_PrivateNote })), index.h("div", { class: 'p-0 m-0' }, index.h("label", { class: `check-container m-0 p-0` }, index.h("input", { class: 'm-0 p-0', type: "checkbox", name: "newsletter", checked: this.guest.subscribe_to_news_letter, onInput: e => this.handleInputChange({ subscribe_to_news_letter: e.target.checked }) }), index.h("span", { class: "checkmark m-0 p-0" }), index.h("span", { class: 'm-0 p-0  check-label' }, locales_store.locales.entries.Lcz_Newsletter)), !this.isInSideBar && (index.h(index.Fragment, null, index.h("hr", null), index.h("ir-button", { btn_styles: "d-flex align-items-center justify-content-center", text: locales_store.locales.entries.Lcz_Save, onClickHandler: this.editGuest.bind(this), isLoading: irInterceptor_store.isRequestPending('/Edit_Exposed_Guest'), color: "btn-primary" })))))), this.isInSideBar && (index.h("div", { class: 'sheet-footer' }, index.h("ir-button", { "data-testid": "cancel", onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill m-0 p-0", btn_styles: "w-100 m-0  justify-content-center align-items-center", btn_color: "secondary", text: locales_store.locales.entries.Lcz_Cancel }), index.h("ir-button", { "data-testid": "save", isLoading: irInterceptor_store.isRequestPending('/Edit_Exposed_Guest'), btn_disabled: this.isLoading, class: "flex-fill m-0", btn_type: "submit", btn_styles: "w-100 m-0  justify-content-center align-items-center", text: locales_store.locales.entries.Lcz_Save })))));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
GuestInfo.style = IrGuestInfoStyle0 + IrGuestInfoStyle1;

const irPaymentDetailsCss = ".sc-ir-payment-details-h{font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}.sc-ir-payment-details-h *.sc-ir-payment-details{font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}.sm-margin-right.sc-ir-payment-details{margin-right:5px !important;background:#000}.action_icons.sc-ir-payment-details{width:60px}.w-60.sc-ir-payment-details{width:100px;padding:0 5px}.payments-height.sc-ir-payment-details{height:30px}.payment_date.sc-ir-payment-details{width:100px}.iframeHeight.sc-ir-payment-details{height:max-content;height:22.5rem}.designation.sc-ir-payment-details{width:120px}.total-cost-container.sc-ir-payment-details{background:#7cbebe;color:white;padding:0.5rem;border-radius:5px}";
const IrPaymentDetailsStyle0 = irPaymentDetailsCss;

const IrPaymentDetails = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt", 7);
        this.resetExposedCancellationDueAmount = index.createEvent(this, "resetExposedCancellationDueAmount", 7);
        this.toast = index.createEvent(this, "toast", 7);
        this.openSidebar = index.createEvent(this, "openSidebar", 7);
        this.confirmModal = false;
        this.toBeDeletedItem = null;
        this.modalMode = null;
        this.paymentService = new payment_service.PaymentService();
        this.bookingService = new booking_service.BookingService();
        this.handleAddPayment = (props) => {
            let payment = {
                id: -1,
                date: moment.hooks().format('YYYY-MM-DD'),
                amount: null,
                currency: calendarData.calendar_data.currency,
                designation: null,
                reference: null,
            };
            if (props) {
                const { amount, type } = props;
                const cashMethod = this.paymentEntries.methods.find(pt => pt.CODE_NAME === '001');
                const payment_method = {
                    code: cashMethod.CODE_NAME,
                    description: cashMethod.CODE_VALUE_EN,
                    operation: cashMethod.NOTES,
                };
                const paymentType = this.paymentEntries.types.find(pt => pt.CODE_NAME === (type === 'cancellation-penalty' ? '001' : '010'));
                payment = Object.assign(Object.assign({}, payment), { amount: amount, designation: paymentType.CODE_VALUE_EN, payment_type: {
                        code: paymentType.CODE_NAME,
                        description: paymentType.CODE_VALUE_EN,
                        operation: paymentType.NOTES,
                    }, payment_method: type === 'refund' ? undefined : payment_method });
                this.openSidebar.emit({
                    type: 'payment-folio',
                    payload: {
                        payment,
                        mode: 'payment-action',
                    },
                });
                return;
            }
            this.openSidebar.emit({
                type: 'payment-folio',
                payload: {
                    payment,
                    mode: 'new',
                },
            });
        };
        this.handleEditPayment = (payment) => {
            this.openSidebar.emit({
                type: 'payment-folio',
                payload: { payment, mode: 'edit' },
            });
        };
        this.handleDeletePayment = (payment) => {
            this.modalMode = 'delete';
            this.toBeDeletedItem = payment;
            this.openModal();
        };
        this.handleConfirmModal = async (e) => {
            e.stopImmediatePropagation();
            e.stopPropagation();
            if (this.modalMode === 'delete') {
                await this.cancelPayment();
            }
        };
        this.handleCancelModal = (e) => {
            e.stopImmediatePropagation();
            e.stopPropagation();
            this.modalMode = null;
            this.toBeDeletedItem = null;
        };
    }
    handlePaymentGeneration(e) {
        var _a, _b, _c;
        const value = e.detail;
        const paymentType = (_b = (_a = this.paymentEntries) === null || _a === void 0 ? void 0 : _a.types) === null || _b === void 0 ? void 0 : _b.find(p => p.CODE_NAME === (this.booking.status.code === '003' ? value.pay_type_code : '001'));
        this.openSidebar.emit({
            type: 'payment-folio',
            payload: {
                payment: Object.assign(Object.assign({}, value), { date: moment.hooks().format('YYYY-MM-DD'), id: -1, amount: value.amount, payment_type: paymentType
                        ? {
                            code: paymentType.CODE_NAME,
                            description: paymentType.CODE_VALUE_EN,
                            operation: paymentType.NOTES,
                        }
                        : null, designation: (_c = paymentType === null || paymentType === void 0 ? void 0 : paymentType.CODE_VALUE_EN) !== null && _c !== void 0 ? _c : null }),
                mode: 'payment-action',
            },
        });
    }
    async cancelPayment() {
        try {
            await this.paymentService.CancelPayment(this.toBeDeletedItem.id);
            const newPaymentArray = this.booking.financial.payments.filter((item) => item.id !== this.toBeDeletedItem.id);
            this.booking = Object.assign(Object.assign({}, this.booking), { financial: Object.assign(Object.assign({}, this.booking.financial), { payments: newPaymentArray }) });
            this.confirmModal = false;
            this.resetBookingEvt.emit(null);
            this.resetExposedCancellationDueAmount.emit(null);
            this.toBeDeletedItem = null;
            this.modalMode = null;
        }
        catch (error) {
            console.error('Error canceling payment:', error);
            this.toast.emit({
                type: 'error',
                title: 'Error',
                description: 'Failed to cancel payment. Please try again.',
                position: 'top-right',
            });
        }
    }
    openModal() {
        const modal = document.querySelector('.delete-record-modal');
        modal === null || modal === void 0 ? void 0 : modal.openModal();
    }
    hasValidFinancialData() {
        var _a;
        return Boolean((_a = this.booking) === null || _a === void 0 ? void 0 : _a.financial);
    }
    // private shouldShowPaymentActions(): boolean {
    //   return Boolean(this.paymentActions?.filter(pa => pa.amount !== 0).length > 0 && this.booking.is_direct);
    // }
    shouldShowRefundButton() {
        if (this.booking.financial.due_amount === 0) {
            return false;
        }
        if (this.booking.is_requested_to_cancel || ['003', '004'].includes(this.booking.status.code)) {
            return this.booking.financial.cancelation_penality_as_if_today < 0;
        }
        return false;
    }
    shouldCancellationButton() {
        if (this.booking.financial.due_amount === 0) {
            return false;
        }
        if (['003', '004'].includes(this.booking.status.code) && this.booking.financial.cancelation_penality_as_if_today > 0) {
            return true;
        }
        return false;
    }
    render() {
        if (!this.hasValidFinancialData()) {
            return null;
        }
        const { financial, currency } = this.booking;
        return [
            index.h("div", { class: "card p-1" }, index.h("ir-payment-summary", { isBookingCancelled: ['003', '004'].includes(this.booking.status.code), totalCost: financial.gross_cost, balance: financial.due_amount, collected: this.booking.financial.collected, currency: currency }), index.h("ir-booking-guarantee", { booking: this.booking, bookingService: this.bookingService }), !['003', '004'].includes(this.booking.status.code) && this.booking.is_direct && (index.h("ir-applicable-policies", { propertyId: this.propertyId, booking: this.booking })), this.shouldShowRefundButton() && (index.h("div", { class: "d-flex mt-1" }, index.h("ir-button", { btn_color: "outline", text: `Refund ${utils.formatAmount(currency.symbol, Math.abs(this.booking.financial.cancelation_penality_as_if_today))}`, size: "sm", onClickHandler: () => {
                    this.handleAddPayment({ type: 'refund', amount: Math.abs(this.booking.financial.cancelation_penality_as_if_today) });
                } }))), this.shouldCancellationButton() && (index.h("div", { class: "d-flex mt-1" }, index.h("ir-button", { btn_color: "outline", text: `Charge cancellation penalty ${utils.formatAmount(currency.symbol, this.booking.financial.cancelation_penality_as_if_today)}`, size: "sm", onClickHandler: () => {
                    this.handleAddPayment({ type: 'cancellation-penalty', amount: Math.abs(this.booking.financial.cancelation_penality_as_if_today) });
                } })))),
            index.h("ir-payments-folio", { payments: financial.payments || [], onAddPayment: () => this.handleAddPayment(), onEditPayment: e => this.handleEditPayment(e.detail), onDeletePayment: e => this.handleDeletePayment(e.detail) }),
            index.h("ir-modal", { item: this.toBeDeletedItem, class: "delete-record-modal", modalTitle: locales_store.locales.entries.Lcz_Confirmation, modalBody: this.modalMode === 'delete' ? locales_store.locales.entries.Lcz_IfDeletedPermantlyLost : locales_store.locales.entries.Lcz_EnteringAmountGreaterThanDue, iconAvailable: true, icon: "ft-alert-triangle danger h1", leftBtnText: locales_store.locales.entries.Lcz_Cancel, rightBtnText: this.modalMode === 'delete' ? locales_store.locales.entries.Lcz_Delete : locales_store.locales.entries.Lcz_Confirm, leftBtnColor: "secondary", rightBtnColor: this.modalMode === 'delete' ? 'danger' : 'primary', onConfirmModal: this.handleConfirmModal, onCancelModal: this.handleCancelModal }),
        ];
    }
};
IrPaymentDetails.style = IrPaymentDetailsStyle0;

const irPaymentFolioCss = ".sc-ir-payment-folio-h{display:block;--payment-type-badge-bg:#ff4961}.payment-type-badge.sc-ir-payment-folio{background:var(--payment-type-badge-bg);color:white;padding:0.2rem 0.3rem !important;font-size:12px;border-radius:4px;margin:0;text-transform:capitalize}.credit-badge.sc-ir-payment-folio{--payment-type-badge-bg:#629a4c}.debit-badge.sc-ir-payment-folio{--payment-type-badge-bg:#ff4961}.dropdown-item-payment.sc-ir-payment-folio{display:flex;align-items:center;gap:1rem;box-sizing:border-box;justify-content:space-between}.input-group-text.sc-ir-payment-folio{border-color:#cacfe7 !important}";
const IrPaymentFolioStyle0 = irPaymentFolioCss;

const sheetCss$2 = ".sc-ir-payment-folio-h{height:100%}.sheet-container.sc-ir-payment-folio{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-ir-payment-folio{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-ir-payment-folio{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-payment-folio{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-payment-folio{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-payment-folio{flex-direction:row;align-items:center}}";
const IrPaymentFolioStyle1 = sheetCss$2;

const IrPaymentFolio = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeModal = index.createEvent(this, "closeModal", 7);
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt", 7);
        this.resetExposedCancellationDueAmount = index.createEvent(this, "resetExposedCancellationDueAmount", 7);
        this.payment = {
            date: moment.hooks().format('YYYY-MM-DD'),
            amount: 0,
            designation: undefined,
            currency: null,
            reference: null,
            id: -1,
        };
        this.autoValidate = false;
        this._paymentTypes = {};
        this.paymentService = new payment_service.PaymentService();
    }
    componentWillLoad() {
        this.folioSchema = index$1.z.object({
            date: index$1.z
                .string()
                .regex(/^\d{4}-\d{2}-\d{2}$/)
                .refine(dateStr => {
                const date = moment.hooks(dateStr, 'YYYY-MM-DD', true);
                return date.isValid();
            }, { message: `Invalid date` }),
            amount: index$1.z.coerce.number().refine(a => a >= 0),
            reference: index$1.z.string().optional().nullable(),
            // designation: z.string().min(1),
            payment_type: index$1.z.object({
                code: index$1.z.string().min(3).max(4),
                description: index$1.z.string().min(1),
                operation: index$1.z.union([index$1.z.literal('CR'), index$1.z.literal('DB')]),
            }),
            payment_method: index$1.z.object({
                code: index$1.z.string().min(3).max(4),
                description: index$1.z.string().min(1),
            }),
        });
        if (this.payment) {
            this.folioData = Object.assign({}, this.payment);
        }
        this.getPaymentTypes();
    }
    handlePaymentChange(newValue, oldValue) {
        if (newValue !== oldValue && newValue) {
            this.folioData = Object.assign({}, newValue);
            this.getPaymentTypes();
        }
    }
    handlePaymentTypesChange(newValue, oldValue) {
        if (newValue !== oldValue && newValue) {
            this.getPaymentTypes();
        }
    }
    updateFolioData(params) {
        this.folioData = Object.assign(Object.assign({}, this.folioData), params);
    }
    async savePayment() {
        var _a, _b, _c;
        try {
            this.isLoading = true;
            this.autoValidate = true;
            if (this.errors) {
                this.errors = null;
            }
            this.folioSchema.parse((_a = this.folioData) !== null && _a !== void 0 ? _a : {});
            await this.paymentService.AddPayment(Object.assign(Object.assign({}, this.folioData), { currency: calendarData.calendar_data.currency, reference: (_b = this.folioData.reference) !== null && _b !== void 0 ? _b : '', designation: ((_c = this.folioData.payment_type) === null || _c === void 0 ? void 0 : _c.description) || '' }), this.bookingNumber);
            this.resetBookingEvt.emit(null);
            this.resetExposedCancellationDueAmount.emit(null);
            this.closeModal.emit(null);
        }
        catch (error) {
            const err = {};
            if (error instanceof index$1.ZodError) {
                error.issues.forEach(e => {
                    err[e.path[0]] = true;
                });
            }
            console.error(error);
            this.errors = err;
        }
        finally {
            this.isLoading = false;
        }
    }
    handleDropdownChange(e) {
        var _a;
        e.stopImmediatePropagation();
        e.stopPropagation();
        const value = e.detail.toString();
        console.log(value);
        this.updateFolioData({ designation: value });
        if (!e.detail) {
            this.updateFolioData({
                payment_type: null,
            });
        }
        else {
            const payment_type = (_a = this.paymentEntries) === null || _a === void 0 ? void 0 : _a.types.find(pt => pt.CODE_NAME === value);
            if (!payment_type) {
                console.warn(`Invalid payment type ${e.detail}`);
                this.updateFolioData({
                    payment_type: null,
                });
                return;
            }
            this.updateFolioData({
                payment_type: {
                    code: payment_type.CODE_NAME,
                    description: payment_type.CODE_VALUE_EN,
                    operation: payment_type.NOTES,
                },
                payment_method: global_variables.PAYMENT_TYPES_WITH_METHOD.includes(payment_type.CODE_NAME)
                    ? undefined
                    : {
                        code: this.paymentEntries.methods[0].CODE_NAME,
                        description: this.paymentEntries.methods[0].CODE_VALUE_EN,
                        operation: this.paymentEntries.methods[0].NOTES,
                    },
            });
        }
    }
    handlePaymentMethodDropdownChange(e) {
        var _a;
        e.stopImmediatePropagation();
        e.stopPropagation();
        const value = e.detail.toString();
        const payment_method = (_a = this.paymentEntries) === null || _a === void 0 ? void 0 : _a.methods.find(pt => pt.CODE_NAME === value);
        if (!payment_method) {
            console.warn(`Invalid payment method ${e.detail}`);
            this.updateFolioData({
                payment_type: null,
            });
            return;
        }
        this.updateFolioData({
            payment_method: {
                code: payment_method.CODE_NAME,
                description: payment_method.CODE_VALUE_EN,
                operation: payment_method.NOTES,
            },
        });
    }
    async getPaymentTypes() {
        var _a;
        const rec = booking_service.buildPaymentTypes(this.paymentEntries);
        if (this.mode === 'payment-action' && ((_a = this.payment.payment_type) === null || _a === void 0 ? void 0 : _a.code) === '001') {
            const { PAYMENTS, CANCELLATION } = rec;
            return (this._paymentTypes = {
                PAYMENTS,
                CANCELLATION,
            });
        }
        this._paymentTypes = rec;
    }
    renderDropdownItems() {
        return Object.values(this._paymentTypes).map((p, idx) => (index.h(index.Fragment, null, p.map(pt => (index.h("ir-dropdown-item", { value: pt.CODE_NAME, class: "dropdown-item-payment" }, index.h("span", null, pt.CODE_VALUE_EN), index.h("span", { class: `payment-type-badge ${pt.NOTES === 'CR' ? 'credit-badge' : 'debit-badge'}` }, pt.NOTES === 'CR' ? 'credit' : 'debit')))), idx !== Object.values(this._paymentTypes).length - 1 && index.h("div", { class: "dropdown-divider" }))));
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9;
        return (index.h("form", { key: 'e1c84c7890c7cfc2f5aa5078a047a816b0dd592b', class: 'sheet-container', onSubmit: async (e) => {
                e.preventDefault();
                this.savePayment();
            } }, index.h("ir-title", { key: 'd12ced634a02f963c91022adfcd737c041ecb597', class: "px-1 sheet-header", onCloseSideBar: () => this.closeModal.emit(null), label: this.mode === 'edit' ? 'Edit Folio Entry' : 'New Folio Entry', displayContext: "sidebar" }), index.h("section", { key: '97019f88e50f2eb3fc6ff1b415c7ad6474cc888c', class: 'px-1 sheet-body d-flex flex-column', style: { gap: '1rem' } }, index.h("div", { key: '0f287b496edd5fb7ccebd762a0b396b7f6e4e4b2', class: 'd-flex w-fill', style: { gap: '0.5rem' } }, index.h("div", { key: 'a375c6596b0af47f901712e9209e63ef83856207', class: "form-group  mb-0 flex-grow-1" }, index.h("div", { key: '7c6bfbbf19c0a23d2034ee252710d565d9346949', class: "input-group row m-0 flex-grow-1" }, index.h("div", { key: 'c367fbf25a334f8c0ac5d3d6edb0179f6285c729', class: `input-group-prepend col-4 col-md-3 p-0 text-dark border-0` }, index.h("label", { key: '96f2dd4f118625c983afdf2a2886b5388186a420', class: `input-group-text flex-grow-1 text-dark border-theme ` }, "Date")), index.h("div", { key: '378f0c52ff077f7a58caf5988830872c252911fb', class: "form-control  form-control-md col-10 flex-grow-1 d-flex align-items-center px-0 mx-0", style: { border: '0' } }, index.h("style", { key: '0cfa4e5d3a661b0211eecbcd832bf02edee848f3' }, `.ir-date-picker-trigger{
                    width:100%;}`), index.h("ir-date-picker", { key: 'c5600e8967b850b5586ea7d834fff7d5336c7b2b', "data-testid": "pickup_date", date: (_a = this.folioData) === null || _a === void 0 ? void 0 : _a.date, class: "w-100", emitEmptyDate: true, maxDate: moment.hooks().format('YYYY-MM-DD'), "aria-invalid": ((_b = this.errors) === null || _b === void 0 ? void 0 : _b.date) && !((_c = this.folioData) === null || _c === void 0 ? void 0 : _c.date) ? 'true' : 'false', onDateChanged: evt => {
                var _a;
                this.updateFolioData({ date: (_a = evt.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD') });
            } }, index.h("input", { key: '04765977c0fae1bce03c0d97c2f24b00ce7fa268', type: "text", slot: "trigger", value: ((_d = this.folioData) === null || _d === void 0 ? void 0 : _d.date) ? moment.hooks((_e = this.folioData) === null || _e === void 0 ? void 0 : _e.date).format('MMM DD, YYYY') : null, class: `form-control w-100 input-sm ${((_f = this.errors) === null || _f === void 0 ? void 0 : _f.date) && !((_g = this.folioData) === null || _g === void 0 ? void 0 : _g.date) ? 'border-danger' : ''} text-left`, style: { borderTopLeftRadius: '0', borderBottomLeftRadius: '0', width: '100%' } })))))), index.h("div", { key: 'dcb819771e7109fd19634f75fc965f3a1da870af' }, index.h("ir-price-input", { key: 'd86402c91b0749d837dca460539fb5937c0d78fa', containerClassname: "row", labelContainerClassname: "col-4 col-md-3 p-0 text-dark border-0", minValue: 0, autoValidate: this.autoValidate, zod: this.folioSchema.pick({ amount: true }), wrapKey: "amount", label: "Amount", labelStyle: 'flex-grow-1 text-dark  border-theme', error: ((_h = this.errors) === null || _h === void 0 ? void 0 : _h.amount) && !((_j = this.folioData) === null || _j === void 0 ? void 0 : _j.amount), value: (_l = (_k = this.folioData) === null || _k === void 0 ? void 0 : _k.amount) === null || _l === void 0 ? void 0 : _l.toString(), currency: calendarData.calendar_data.currency.symbol, onTextChange: e => this.updateFolioData({ amount: Number(e.detail) }) })), index.h("div", { key: 'c9bab864bd545302c002115dfee00eb895c1cb5e' }, index.h("ir-dropdown", { key: '8f01d0fc49bb0a592ccfe75de0a58421dc75ff36', value: (_o = (_m = this.folioData) === null || _m === void 0 ? void 0 : _m.payment_type) === null || _o === void 0 ? void 0 : _o.code, disabled: this.mode === 'payment-action', onOptionChange: this.handleDropdownChange.bind(this) }, index.h("div", { key: '98fc6d5c1a3c19aa430dc36e3b4b587362e742a3', slot: "trigger", class: 'input-group row m-0 ' }, index.h("div", { key: 'be8fcb6e52426b049b70e67f9f7a78752a4a2aac', class: `input-group-prepend col-4 col-md-3 p-0 text-dark border-0` }, index.h("label", { key: 'ae03a1021c22ac6951fa7074320e2faad13b606e', class: `input-group-text flex-grow-1 text-dark  border-theme` }, "Transaction type")), index.h("button", { key: '38a40da6cd9886de7e902fee793130241b101fbd', type: "button", disabled: this.mode === 'payment-action', class: `form-control  d-flex align-items-center cursor-pointer ${((_p = this.errors) === null || _p === void 0 ? void 0 : _p.payment_type) && !((_r = (_q = this.folioData) === null || _q === void 0 ? void 0 : _q.payment_type) === null || _r === void 0 ? void 0 : _r.code) ? 'border-danger' : ''}` }, ((_s = this.folioData) === null || _s === void 0 ? void 0 : _s.payment_type) ? index.h("span", null, (_t = this.folioData.payment_type) === null || _t === void 0 ? void 0 : _t.description) : index.h("span", null, "Select..."))), index.h("ir-dropdown-item", { key: 'e8936c2afa223956068c2805c18d1179125cb40f', value: "" }, "Select..."), this.renderDropdownItems())), global_variables.PAYMENT_TYPES_WITH_METHOD.includes((_v = (_u = this.folioData) === null || _u === void 0 ? void 0 : _u.payment_type) === null || _v === void 0 ? void 0 : _v.code) && (index.h("div", { key: '22937ac315e0b170827b8e2d97362abcb16ec75e' }, index.h("ir-dropdown", { key: 'b4e24815f6552f524dcfc162e1e8b3dee9c0d973', value: (_x = (_w = this.folioData) === null || _w === void 0 ? void 0 : _w.payment_method) === null || _x === void 0 ? void 0 : _x.code, onOptionChange: this.handlePaymentMethodDropdownChange.bind(this) }, index.h("button", { key: '68ba94542da9f244fd4f24a40768e66fefad9e8e', slot: "trigger", type: "button", class: `form-control d-flex align-items-center cursor-pointer ${((_y = this.errors) === null || _y === void 0 ? void 0 : _y.payment_method) && !((_0 = (_z = this.folioData) === null || _z === void 0 ? void 0 : _z.payment_method) === null || _0 === void 0 ? void 0 : _0.code) ? 'border-danger' : ''}` }, ((_1 = this.folioData) === null || _1 === void 0 ? void 0 : _1.payment_method) ? (index.h("span", null, (_2 = this.folioData.payment_method) === null || _2 === void 0 ? void 0 : _2.description)) : (index.h("span", null, "Select ", ((_4 = (_3 = this.folioData) === null || _3 === void 0 ? void 0 : _3.payment_type) === null || _4 === void 0 ? void 0 : _4.code) === '001' ? 'payment' : 'refund', " method..."))), index.h("ir-dropdown-item", { key: 'db5b774831893f8debde53818e740f4de5e8d9c2', value: "" }, "Select ", ((_5 = this.folioData.payment_type) === null || _5 === void 0 ? void 0 : _5.code) === '001' ? 'payment' : 'refund', " method..."), (_7 = (_6 = this.paymentEntries) === null || _6 === void 0 ? void 0 : _6.methods) === null || _7 === void 0 ? void 0 :
            _7.map(pt => {
                return (index.h("ir-dropdown-item", { value: pt.CODE_NAME, class: "dropdown-item-payment" }, index.h("span", null, pt.CODE_VALUE_EN)));
            })))), index.h("div", { key: '30413e9e5bbc1b5c8c30f752490be9ab136932a5' }, index.h("ir-input-text", { key: '1e9f4e43fde3252d0ecd084660766275608db352', value: (_8 = this.folioData) === null || _8 === void 0 ? void 0 : _8.reference, error: (_9 = this.errors) === null || _9 === void 0 ? void 0 : _9.reference_number, autoValidate: this.autoValidate, zod: this.folioSchema.pick({ reference: true }), label: "Reference", maxLength: 50, inputContainerStyle: {
                margin: '0',
            }, onTextChange: e => this.updateFolioData({ reference: e.detail }), labelWidth: 3, labelContainerClassname: 'col-4 col-md-3' }))), index.h("div", { key: '550aeba08fc8bc0e017f6425b0de416193b6b5de', class: 'sheet-footer' }, index.h("ir-button", { key: '89e3b207f9f1f9137da7d7d0547f015ca6af6bc9', onClick: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `flex-fill`, text: 'Cancel', btn_color: "secondary" }), index.h("ir-button", { key: 'a9756fc285fc03a67161638a23fcebae1a2ca9af', btn_styles: "justify-content-center align-items-center", class: 'flex-fill', isLoading: this.isLoading, text: 'Save', btn_color: "primary", btn_type: "submit" }))));
    }
    static get watchers() { return {
        "payment": ["handlePaymentChange"],
        "paymentTypes": ["handlePaymentTypesChange"]
    }; }
};
IrPaymentFolio.style = IrPaymentFolioStyle0 + IrPaymentFolioStyle1;

const irPaymentItemCss = ".payment-item__payment-item.sc-ir-payment-item{display:flex;flex-direction:column;padding:0.25rem 0.5rem;min-height:2.5rem}.payment-item__payment-item.sc-ir-payment-item p.sc-ir-payment-item{padding:0;margin:0;box-sizing:border-box}.payment-item__payment-body.sc-ir-payment-item{display:flex;flex-direction:column}.payment-item__payment-fields.sc-ir-payment-item{display:flex;align-items:center;justify-content:space-between}.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-reference.sc-ir-payment-item,.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-description.sc-ir-payment-item{display:none}.payment-item__payment-toolbar.sc-ir-payment-item{display:flex;align-items:center;justify-content:space-between}.payment-item__payment-toolbar.sc-ir-payment-item .payment-item__payment-amount.sc-ir-payment-item{display:none}.payment-item__action-button.sc-ir-payment-item{cursor:pointer}.payment-item__payment-amount.sc-ir-payment-item{font-weight:700;white-space:nowrap}.payment-item__payment-amount.is-credit.sc-ir-payment-item{color:#629a4c}.payment-item__payment-amount.is-debit.sc-ir-payment-item{color:#ff4961}.payment-item__payment-reference.sc-ir-payment-item{font-size:12px}@media (min-width: 640px){.payment-item__payment-item.sc-ir-payment-item{flex-direction:row;align-items:center;gap:1rem}.payment-item__payment-item.sc-ir-payment-item:hover{background:#f4f5fa}.payment-item__payment-item.sc-ir-payment-item:hover .payment-item__payment-actions.sc-ir-payment-item{display:inline-flex}.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-reference.sc-ir-payment-item,.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-description.sc-ir-payment-item,.payment-item__payment-item.sc-ir-payment-item .payment-item__payment-amount.sc-ir-payment-item{display:inline-flex}.payment-item__payment-fields.sc-ir-payment-item .payment-item__payment-amount.sc-ir-payment-item,.payment-item__payment-toolbar.sc-ir-payment-item .payment-item__payment-description.sc-ir-payment-item,.payment-item__payment-item.sc-ir-payment-item .payment-item__payment-reference.sc-ir-payment-item,.payment-item__payment-actions.sc-ir-payment-item{display:none}.payment-item__payment-description.sc-ir-payment-item{padding:0 0.5rem !important}.payment-item__payment-body.sc-ir-payment-item .payment-item__payment-reference.sc-ir-payment-item{display:inline-flex;align-items:center}.payment-item__payment-body.sc-ir-payment-item{flex:1 1 0%;justify-content:flex-start}.payment-item__payment-fields.sc-ir-payment-item{justify-content:flex-start;gap:0.5rem}.payment-item__payment-toolbar.sc-ir-payment-item{gap:0.5rem;align-items:center}}";
const IrPaymentItemStyle0 = irPaymentItemCss;

const IrPaymentItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.editPayment = index.createEvent(this, "editPayment", 7);
        this.deletePayment = index.createEvent(this, "deletePayment", 7);
    }
    render() {
        var _a, _b, _c, _d, _e;
        const isCredit = this.payment.payment_type.operation === 'CR';
        const paymentDescription = (_c = (global_variables.PAYMENT_TYPES_WITH_METHOD.includes((_a = this.payment.payment_type) === null || _a === void 0 ? void 0 : _a.code)
            ? `${(_b = this.payment.payment_type) === null || _b === void 0 ? void 0 : _b.description}: ${this.payment.payment_method.description}`
            : this.payment.payment_type.description)) !== null && _c !== void 0 ? _c : this.payment.designation;
        return (index.h("div", { key: '3fa8b9f9462eae6c5cd3522bfc6b2320c4f4f5f2', class: "payment-item__payment-item" }, index.h("div", { key: '59e7d25771ba722d1f6997af154ca498401b9de4', class: "payment-item__payment-body", part: "payment-body" }, index.h("div", { key: 'e9230a12d70881835bff61f2428a509bc83e497b', class: "payment-item__payment-fields", part: "payment-fields" }, index.h("p", { key: '1e746beb1d705d141c59e4de1b6065b6a188e048', class: "payment-item__payment-date" }, moment.hooks(this.payment.date, 'YYYY-MM-DD').format('MMM DD, YYYY')), index.h("p", { key: 'b4c9f060114d621a798cc1205b9578321316959d', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, utils.formatAmount(this.payment.currency.symbol, this.payment.amount)), index.h("p", { key: '81ffc241735a33450a82413fb48db35daa8c6120', class: "payment-item__payment-description" }, paymentDescription)), this.payment.reference && index.h("p", { key: '2417f0ca7f3f32466266f2a744028975477b7d0a', class: "payment-item__payment-reference" }, (_d = this.payment) === null || _d === void 0 ? void 0 : _d.reference)), index.h("div", { key: 'a73b3d75c910e415413176ac3f59dbf4f6a93006', class: "payment-item__payment-toolbar" }, index.h("p", { key: '9531b141ea6d8a581391beea59266b889a618577', class: `payment-item__payment-amount ${isCredit ? 'is-credit' : 'is-debit'}` }, utils.formatAmount(this.payment.currency.symbol, this.payment.amount)), index.h("p", { key: '7c440177ceeaba5420398c8acd76140b9830e95c', class: "payment-item__payment-description" }, paymentDescription), index.h("div", { key: '50034694da6108ecd9249db3f8f3d303a5ff0d86', class: "payment-item__payment-actions" }, index.h("div", { key: 'f1dc64a380e143f5fad9963417a2e52ffe5d87e3', class: "d-flex align-items-center" }, index.h("ir-popover", { key: 'a2369ac9cfefcbafc5fc9a090f401b8de25736c8', trigger: "hover", content: `User: ${this.payment.time_stamp.user}` }, index.h("ir-button", { key: 'e83b897680c16b86f9b3508fa3889310ee863fae', variant: "icon", style: { 'color': icons.colorVariants.secondary['--icon-button-color'], '--icon-size': '1.1rem' }, icon_name: "user" }))), index.h("ir-button", { key: '52efe94840266012c07f2e6a867cba5c5d155dbc', class: "payment-item__action-button", variant: "icon", onClickHandler: () => {
                this.editPayment.emit(this.payment);
            }, icon_name: "edit", style: icons.colorVariants.secondary }), index.h("ir-button", { key: 'ac9364ba7670720904fc80e818a235ab4a3919a8', class: "payment-item__action-button", onClickHandler: () => {
                this.deletePayment.emit(this.payment);
            }, variant: "icon", style: icons.colorVariants.danger, icon_name: "trash" }))), this.payment.reference && index.h("p", { key: '79536531f5d9cd5a1d35ba332f499a67c1af71d6', class: "payment-item__payment-reference" }, (_e = this.payment) === null || _e === void 0 ? void 0 : _e.reference)));
    }
};
IrPaymentItem.style = IrPaymentItemStyle0;

const irPaymentSummaryCss = ".sc-ir-payment-summary-h{display:block}.sc-ir-payment-summary-h{font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}.sc-ir-payment-summary-h *.sc-ir-payment-summary{font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}";
const IrPaymentSummaryStyle0 = irPaymentSummaryCss;

const IrPaymentSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    shouldShowTotalCost() {
        return this.totalCost > 0 && this.totalCost !== null;
    }
    render() {
        return (index.h("div", { key: 'f86713ff9cdb0fa886ca0ec4ac6eeb7a1596b6a2', class: " m-0" }, this.shouldShowTotalCost() && (index.h("div", { key: '947244db84d6b9dc614c19e7083071d4758daf4a', class: "mb-2 h4 total-cost-container" }, locales_store.locales.entries.Lcz_TotalCost, ":", index.h("span", { key: '3a8958959a19a7fe1d3c460c4b8d4bfba6c31203' }, utils.formatAmount(this.currency.symbol, this.totalCost)))), index.h("div", { key: 'f94792b22e3a5368f003dfea2f4138420949fbc9', class: "h4 d-flex align-items-center justify-content-between" }, index.h("span", { key: 'f8968ee8a24af89064ab863cd591633148eaf45e' }, locales_store.locales.entries.Lcz_Balance, ": "), index.h("span", { key: 'ab35c800af7bc34623335414e5a71e58bd282762', class: "danger font-weight-bold" }, utils.formatAmount(this.currency.symbol, this.balance))), !this.isBookingCancelled && (index.h("div", { key: '7f37de76520ad24615998e1b4874f2272a257e16', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, index.h("span", { key: '7030df15753e0391d9ebad4c83832af8e701fc14' }, locales_store.locales.entries.Lcz_Collected, ": "), index.h("span", { key: 'e938f0b07a90cdce4d5fff272d1fca35fa9ebf8d' }, utils.formatAmount(this.currency.symbol, this.collected))))));
    }
};
IrPaymentSummary.style = IrPaymentSummaryStyle0;

const irPaymentsFolioCss = ".sc-ir-payments-folio-h{display:block}";
const IrPaymentsFolioStyle0 = irPaymentsFolioCss;

const IrPaymentsFolio = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.addPayment = index.createEvent(this, "addPayment", 7);
        this.editPayment = index.createEvent(this, "editPayment", 7);
        this.deletePayment = index.createEvent(this, "deletePayment", 7);
        this.payments = [];
        this.handleAddPayment = () => {
            this.addPayment.emit();
        };
        this.handleEditPayment = (payment) => {
            this.editPayment.emit(payment);
        };
        this.handleDeletePayment = (payment) => {
            this.deletePayment.emit(payment);
        };
    }
    hasPayments() {
        return this.payments && this.payments.length > 0;
    }
    renderPaymentItem(payment, index$1) {
        return [
            index.h("ir-payment-item", { key: payment.id, payment: payment, onDeletePayment: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.handleDeletePayment(e.detail);
                }, onEditPayment: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.handleEditPayment(e.detail);
                } }),
            index$1 < this.payments.length - 1 && index.h("hr", { class: "p-0 m-0" }),
        ];
    }
    renderEmptyState() {
        return (index.h("div", { class: "text-center p-3" }, index.h("p", { class: "text-muted" }, "No payments recorded yet")));
    }
    render() {
        return (index.h("div", { key: 'e6a01e56988032972a6d864168cf4395ac655ab3', class: "mt-1" }, index.h("div", { key: '6f4875f689e1b92d2956df65087907b1ff150e02', class: "d-flex flex-column rounded payment-container" }, index.h("div", { key: '09444cdc1154ac579b6793198d5a88ff111d78a9', class: "d-flex align-items-center justify-content-between" }, index.h("div", { key: '47f5d0aaca4421bc0a7d64acf35c08d1884159a2', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("p", { key: 'e46b8605bd3177f6fcf84772c952c5f5d263b694', class: "font-size-large p-0 m-0" }, "Guest Folio"), index.h(HelpDocButton, { key: 'e28cd63ef6473dccb0e75750494edcc790d123e5', message: "Help", href: "https://help.igloorooms.com/extranet/booking-details/guest-folio" })), index.h("ir-button", { key: '1fb522402dd1516afd7a6dd426bae45ced2374a0', id: "add-payment", variant: "icon", icon_name: "square_plus", style: { '--icon-size': '1.5rem' }, onClickHandler: this.handleAddPayment })), index.h("div", { key: '9747909d9fbbabb4daf54371ead3b8cde0d4338b', class: "mt-1 card p-1 payments-container" }, this.hasPayments() ? this.payments.map((payment, index) => this.renderPaymentItem(payment, index)) : this.renderEmptyState()))));
    }
};
IrPaymentsFolio.style = IrPaymentsFolioStyle0;

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
    createPickupSchema(minDate, maxDate) {
        return index$1.z.object({
            arrival_date: index$1.z
                .string()
                .regex(/^\d{4}-\d{2}-\d{2}$/, { message: 'Invalid date format, expected YYYY-MM-DD' })
                .refine(dateStr => {
                const date = moment.hooks(dateStr, 'YYYY-MM-DD', true);
                const min = moment.hooks(minDate, 'YYYY-MM-DD', true);
                const max = moment.hooks(maxDate, 'YYYY-MM-DD', true);
                return date.isValid() && min.isValid() && max.isValid() && date.isBetween(min, max, undefined, '[]');
            }, { message: `arrival_date must be between ${minDate} and ${maxDate}` }),
            arrival_time: index$1.z
                .string()
                .regex(/^\d{2}:\d{2}$/, { message: 'Invalid time format. Expected HH:MM' })
                .refine(time => {
                const [hours, minutes] = time.split(':').map(Number);
                return hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59;
            }, { message: 'Time values are out of range' }),
            flight_details: index$1.z.string().nonempty({ message: 'Flight details cannot be empty' }),
            vehicle_type_code: index$1.z.string().nonempty({ message: 'Vehicle type code cannot be empty' }),
            number_of_vehicles: index$1.z.coerce.number().min(1, { message: 'At least one vehicle is required' }),
        });
    }
    validateForm(params, schema) {
        try {
            schema.parse(params);
            return null;
        }
        catch (error) {
            console.log(error);
            const err = {};
            if (error instanceof index$1.ZodError) {
                error.issues.forEach(e => {
                    err[e.path[0]] = true;
                });
                return err;
            }
        }
        // if (params.arrival_time.split(':').length !== 2) {
        //   return {
        //     error: true,
        //     cause: 'arrival_time',
        //   };
        // }
        // if (params.flight_details === '') {
        //   return {
        //     error: true,
        //     cause: 'flight_details',
        //   };
        // }
        // if (params.vehicle_type_code === '') {
        //   return {
        //     error: true,
        //     cause: 'vehicle_type_code',
        //   };
        // }
        // if (params.number_of_vehicles === 0) {
        //   return {
        //     error: true,
        //     cause: 'number_of_vehicles',
        //   };
        // }
        // return { error: false };
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

const irPickupCss = ".sc-ir-pickup-h{display:block}.custom-card-container.sc-ir-pickup{display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #e4e5ec}.card-title.sc-ir-pickup{flex:1}.border-theme.sc-ir-pickup{border:1px solid #cacfe7}@media (min-width: 768px){.price-input-container.sc-ir-pickup{max-width:290px}}";
const IrPickupStyle0 = irPickupCss;

const sheetCss$1 = ".sc-ir-pickup-h{height:100%}.sheet-container.sc-ir-pickup{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-ir-pickup{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-ir-pickup{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-pickup{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-pickup{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-pickup{flex-direction:row;align-items:center}}";
const IrPickupStyle1 = sheetCss$1;

const IrPickup = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeModal = index.createEvent(this, "closeModal", 7);
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt", 7);
        this.numberOfPersons = 0;
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
            arrival_date: null,
            selected_option: undefined,
        };
        this.vehicleCapacity = [];
        this.cause = null;
        this.autoValidate = false;
        this.pickupService = new PickupService();
        this.arrival_time_mask = {
            mask: 'HH:mm',
            blocks: {
                HH: {
                    mask: index$2.MaskedRange,
                    from: 0,
                    to: 23,
                    placeholderChar: 'H',
                },
                mm: {
                    mask: index$2.MaskedRange,
                    from: 0,
                    to: 59,
                    placeholderChar: 'm',
                },
            },
            lazy: false,
            placeholderChar: '_',
        };
    }
    componentWillLoad() {
        if (this.defaultPickupData) {
            const transformedData = this.pickupService.transformDefaultPickupData(this.defaultPickupData);
            this.vehicleCapacity = this.pickupService.getNumberOfVehicles(transformedData.selected_option.vehicle.capacity, this.numberOfPersons);
            this.allowedOptionsByLocation = calendarData.calendar_data.pickup_service.allowed_options.filter(option => option.location.id === transformedData.location);
            this.pickupData = Object.assign({}, transformedData);
        }
        this.pickupSchema = this.pickupService.createPickupSchema(this.bookingDates.from, this.bookingDates.to);
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
            this.autoValidate = true;
            if (this.errors) {
                this.errors = null;
            }
            this.errors = this.pickupService.validateForm(this.pickupData, this.pickupSchema);
            if (this.errors) {
                return;
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
        var _a, _b, _c, _d, _e;
        return (index.h("form", { key: '5a897b601c493f2aaefcc11df0c76dcf723984bc', class: 'sheet-container', onSubmit: async (e) => {
                e.preventDefault();
                await this.savePickup();
            } }, index.h("ir-title", { key: 'b42b446181e4d41f7bc643e8ba8eb99e989a472a', class: "px-1 sheet-header", onCloseSideBar: () => this.closeModal.emit(null), label: locales_store.locales.entries.Lcz_Pickup, displayContext: "sidebar" }), index.h("section", { key: '1fde67e45871532fea4ae806ac408f835e870674', class: 'px-1 sheet-body' }, index.h("ir-select", { key: '22b760dbebd1118161e9be395ca7aeb17488169e', testId: "pickup_location", selectedValue: this.pickupData.location, selectContainerStyle: "mb-1", onSelectChange: this.handleLocationChange.bind(this), firstOption: locales_store.locales.entries.Lcz_Pickup_NoThankYou, class: 'm-0 mb-1', data: this.pickupService.getAvailableLocations(locales_store.locales.entries.Lcz_Pickup_YesFrom) }), this.pickupData.location > 0 && (index.h("div", { key: 'c099ed65fa4e84533fc8129849ef6b21de2cc4ab', class: "m-0 p-0", "data-testid": "pickup_body" }, index.h("div", { key: 'b68f9134116b94bb8cf882213422e7a1e473ad32', class: 'd-flex' }, index.h("div", { key: 'c6a9030289d3d2165c53be68ed631ca7335a4557', class: "form-group  mr-1" }, index.h("div", { key: '199c867f4fa67cc23c6255a544e78f2d9951792f', class: "input-group row m-0" }, index.h("div", { key: 'c5208c01c4fa3efa102ec51eb0946c48912cc1bd', class: `input-group-prepend col-5 p-0 text-dark border-0` }, index.h("label", { key: '3330b6d37d72a6fb298ec4261e9c3b9e686ae739', class: `input-group-text  flex-grow-1 text-dark border-theme ` }, locales_store.locales.entries.Lcz_ArrivalDate)), index.h("div", { key: 'e861c3159bb9c74b2c68610aa1f74d84224aecb2', class: "form-control  form-control-md col-7 d-flex align-items-center px-0 mx-0", style: { border: '0' } }, index.h("ir-date-picker", { key: 'a4fd00f86ee2ee47467a4056a1cb22290ab5deb2', "data-testid": "pickup_arrival_date", date: this.pickupData.arrival_date, minDate: this.bookingDates.from, maxDate: (_a = this.bookingDates) === null || _a === void 0 ? void 0 : _a.to, emitEmptyDate: true, "aria-invalid": ((_b = this.errors) === null || _b === void 0 ? void 0 : _b.arrival_date) && !this.pickupData.arrival_date ? 'true' : 'false', onDateChanged: evt => {
                var _a;
                this.updatePickupData('arrival_date', (_a = evt.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD'));
            } }, index.h("input", { key: '5fa6d280f5f9d85e834540caaa303cdb977e4e52', type: "text", slot: "trigger", value: this.pickupData.arrival_date ? moment.hooks(this.pickupData.arrival_date).format('MMM DD, YYYY') : null, class: `form-control input-sm ${((_c = this.errors) === null || _c === void 0 ? void 0 : _c.arrival_date) && !this.pickupData.arrival_date ? 'border-danger' : ''} text-center`, style: { borderTopLeftRadius: '0', borderBottomLeftRadius: '0', width: '100%' } }))))), index.h("ir-input-text", { key: 'd874f1541a31f64022c5eb3f82575d6e7962f37c', autoValidate: this.autoValidate, wrapKey: "arrival_time", testId: "pickup_arrival_time", error: (_d = this.errors) === null || _d === void 0 ? void 0 : _d.arrival_time, value: this.pickupData.arrival_time, zod: this.pickupSchema.pick({ arrival_time: true }), label: locales_store.locales.entries.Lcz_Time, inputStyles: "col-sm-4", "data-state": this.cause === 'arrival_time' ? 'error' : '', mask: this.arrival_time_mask, onTextChange: e => this.updatePickupData('arrival_time', e.detail) })), index.h("ir-input-text", { key: 'e84df306853c6af351b52c370bb2c512bb97803e', wrapKey: "flight_details", zod: this.pickupSchema.pick({ flight_details: true }), autoValidate: this.autoValidate, testId: "pickup_flight_details", value: this.pickupData.flight_details, label: locales_store.locales.entries.Lcz_FlightDetails, onTextChange: e => this.updatePickupData('flight_details', e.detail), placeholder: "", error: (_e = this.errors) === null || _e === void 0 ? void 0 : _e.flight_details }), index.h("ir-select", { key: 'bd066b3b1d3ea1abf1da661e604d352610ba4c47', testId: "pickup_vehicle_type_code", selectContainerStyle: "mb-1", error: this.cause === 'vehicle_type_code', onSelectChange: this.handleVehicleTypeChange.bind(this), firstOption: locales_store.locales.entries.Lcz_Select, selectedValue: this.pickupData.vehicle_type_code, class: 'm-0', data: this.allowedOptionsByLocation.map(option => ({
                text: option.vehicle.description,
                value: option.vehicle.code,
            })) }), index.h("div", { key: 'eb44bfefe91f6c4296ee45922e5068a80e0c8805', class: 'd-flex flex-column flex-md-row' }, index.h("ir-select", { key: 'fcaee8bdc4356c301b7a148b1b53c9d778dff4d8', showFirstOption: false, testId: "pickup_number_of_vehicles", labelBorder: "theme", selectContainerStyle: "mb-1", onSelectChange: this.handleVehicleQuantityChange.bind(this), selectedValue: this.pickupData.number_of_vehicles, error: this.cause === 'number_of_vehicles', labelWidth: 7, class: 'm-0  mb-md-0 mr-md-1 flex-fill', label: locales_store.locales.entries.Lcz_NbrOfVehicles, data: this.vehicleCapacity.map(i => ({
                text: i,
                value: i,
            })) }), index.h("div", { key: '99ec5d377341754fa0bbadf3d2f48f98cee06868', class: "price-input-container" }, index.h("ir-price-input", { key: '83c922e4f336cf07610548d76e9512fc13099c46', readOnly: true, label: `${locales_store.locales.entries.Lcz_DueUponBooking}`, value: this.pickupData.due_upon_booking, currency: this.pickupData.currency.symbol })))))), index.h("div", { key: 'afbd3d07d2a8a07297badd2eca883842b266806b', class: 'sheet-footer' }, index.h("ir-button", { key: 'b7ef38badde5f2f9d2538b126e3870ee7c7b2a92', onClick: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `flex-fill`, text: locales_store.locales.entries.Lcz_Cancel, btn_color: "secondary" }), (this.defaultPickupData || this.pickupData.location !== -1) && (index.h("ir-button", { key: '054201b2f8113e90b8095ac32f9c209f67c2ca34', btn_styles: "justify-content-center align-items-center", class: 'flex-fill', isLoading: this.isLoading, text: locales_store.locales.entries.Lcz_Save, btn_color: "primary", btn_type: "submit" })))));
    }
    get el() { return index.getElement(this); }
};
IrPickup.style = IrPickupStyle0 + IrPickupStyle1;

const irPickupViewCss = ".sc-ir-pickup-view-h{display:block}";
const IrPickupViewStyle0 = irPickupViewCss;

const IrPickupView = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        if (!calendarData.calendar_data.pickup_service.is_enabled || !this.booking.is_editable) {
            return null;
        }
        return (index.h(index.Host, null, index.h("div", { class: "mb-1" }, index.h("div", { class: 'd-flex w-100 mb-1 align-items-center justify-content-between' }, index.h("p", { class: 'font-size-large p-0 m-0 ' }, locales_store.locales.entries.Lcz_Pickup), index.h("ir-button", { id: "pickup", "data-testid": "new_pickup_btn", variant: "icon", icon_name: "edit", style: Object.assign(Object.assign({}, icons.colorVariants.secondary), { '--icon-size': '1.5rem' }) })), this.booking.pickup_info && (index.h("div", { class: 'card' }, index.h("div", { class: 'p-1' }, index.h("div", { class: 'd-flex align-items-center py-0 my-0 pickup-margin' }, index.h("p", { class: 'font-weight-bold mr-1 py-0 my-0' }, locales_store.locales.entries.Lcz_Date, ": ", index.h("span", { class: 'font-weight-normal' }, moment.hooks(this.booking.pickup_info.date, 'YYYY-MM-DD').format('MMM DD, YYYY'))), this.booking.pickup_info.hour && this.booking.pickup_info.minute && (index.h("p", { class: 'font-weight-bold flex-fill py-0 my-0' }, locales_store.locales.entries.Lcz_Time, ":", index.h("span", { class: 'font-weight-normal' }, " ", functions._formatTime(this.booking.pickup_info.hour.toString(), this.booking.pickup_info.minute.toString())))), index.h("p", { class: 'font-weight-bold py-0 my-0' }, locales_store.locales.entries.Lcz_DueUponBooking, ":", ' ', index.h("span", { class: 'font-weight-normal' }, this.booking.pickup_info.currency.symbol, this.booking.pickup_info.total))), index.h("p", { class: 'font-weight-bold py-0 my-0' }, locales_store.locales.entries.Lcz_FlightDetails, ":", index.h("span", { class: 'font-weight-normal' }, " ", `${this.booking.pickup_info.details}`)), index.h("p", { class: 'py-0 my-0 pickup-margin' }, `${this.booking.pickup_info.selected_option.vehicle.description}`), index.h("p", { class: 'font-weight-bold py-0 my-0 pickup-margin' }, locales_store.locales.entries.Lcz_NbrOfVehicles, ":", index.h("span", { class: 'font-weight-normal' }, " ", `${this.booking.pickup_info.nbr_of_units}`)), index.h("p", { class: 'small py-0 my-0 pickup-margin' }, calendarData.calendar_data.pickup_service.pickup_instruction.description, calendarData.calendar_data.pickup_service.pickup_cancelation_prepayment.description)))))));
    }
};
IrPickupView.style = IrPickupViewStyle0;

const irPmsLogsCss = ".sc-ir-pms-logs-h{display:block}.dialog-container-height.sc-ir-pms-logs{height:4rem}.list-title.sc-ir-pms-logs{margin:0;padding:0;font-size:14px;font-weight:bold;width:fit-content}.list-item.sc-ir-pms-logs{margin:0;padding:0;font-size:14px;margin-left:5px;width:fit-content}.list-item.green.sc-ir-pms-logs{color:#629a4c;font-weight:600}.list-item.red.sc-ir-pms-logs{color:#ff4961;font-weight:600}";
const IrPmsLogsStyle0 = irPmsLogsCss;

const IrPmsLogs = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bookingService = new booking_service.BookingService();
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
        return (index.h("div", { key: '9ad8d543a7bccf49a45736615a1ce566de4792d3', class: "p-1" }, index.h("h3", { key: '079bdc4645a0a4a25518cf3b552583b3f71783e4', class: " text-left mb-1 dialog-title " }, locales_store.locales.entries.Lcz_PMS_Logs), irInterceptor_store.isRequestPending('/Get_Exposed_PMS_Logs') ? (index.h("div", { class: 'd-flex align-items-center justify-content-center dialog-container-height' }, index.h("ir-spinner", null))) : (index.h("div", { class: 'dialog-container-height' }, index.h("div", { class: "d-flex align-items-center ", style: { paddingBottom: '0.5rem' } }, index.h("p", { class: "list-title p-0 m-0" }, locales_store.locales.entries.Lcz_SentAt), ((_a = this.pmsLogs) === null || _a === void 0 ? void 0 : _a.sent_date) ? (index.h("p", { class: "list-item" }, (_b = this.pmsLogs) === null || _b === void 0 ? void 0 :
            _b.sent_date, " ", functions._formatTime((_c = this.pmsLogs) === null || _c === void 0 ? void 0 : _c.sent_hour.toString(), (_d = this.pmsLogs) === null || _d === void 0 ? void 0 : _d.sent_minute.toString()))) : (index.h("p", { class: `list-item ${((_e = this.pmsLogs) === null || _e === void 0 ? void 0 : _e.sent_date) ? 'green' : 'red'}` }, ((_f = this.pmsLogs) === null || _f === void 0 ? void 0 : _f.is_acknowledged) ? locales_store.locales.entries.Lcz_YES : locales_store.locales.entries.Lcz_NO))), index.h("div", { class: "d-flex align-items-center p-0 m-0" }, index.h("h4", { class: "list-title p-0 m-0" }, locales_store.locales.entries.Lcz_Acknowledged), index.h("p", { class: `list-item  ${((_g = this.pmsLogs) === null || _g === void 0 ? void 0 : _g.is_acknowledged) ? 'green' : 'red'}` }, ((_h = this.pmsLogs) === null || _h === void 0 ? void 0 : _h.is_acknowledged) ? locales_store.locales.entries.Lcz_YES : locales_store.locales.entries.Lcz_NO))))));
    }
};
IrPmsLogs.style = IrPmsLogsStyle0;

const irReservationInformationCss = ".sc-ir-reservation-information-h{display:block}";
const IrReservationInformationStyle0 = irReservationInformationCss;

const IrReservationInformation = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.openSidebar = index.createEvent(this, "openSidebar", 7);
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
        const privateNote = utils.getPrivateNote(this.booking.extras);
        return (index.h("div", { key: 'cf860ef3fc23f04ac537f87b1f77cffc94f13573', class: "card" }, index.h("div", { key: '03d481f687a73a1890bdf80b28284e0e3cf79976', class: "p-1" }, index.h("p", { key: '3fc1c00dc3fff3f19a87a2d887bd9b7d8e839046' }, this.booking.property.name || ''), index.h("ir-label", { key: '0bda7c5eeeb4c61eec920a923045a29cedfcc39c', labelText: `${locales_store.locales.entries.Lcz_Source}:`, content: this.booking.origin.Label, image: { src: this.booking.origin.Icon, alt: this.booking.origin.Label } }), index.h("ir-label", { key: '62cd298840e0b584872d029325818d043ff20148', renderContentAsHtml: true, labelText: `${locales_store.locales.entries.Lcz_BookedOn}:`, content: `${functions._formatDate(this.booking.booked_on.date)}&nbsp&nbsp&nbsp&nbsp${functions._formatTime(this.booking.booked_on.hour.toString(), this.booking.booked_on.minute.toString())}` }), index.h("ir-label", { key: '4fece3409267c35d01659caef2c4effae650624b', labelText: `${locales_store.locales.entries.Lcz_BookedBy}:`, content: `${this.booking.guest.first_name} ${this.booking.guest.last_name}` }, ((_a = this.booking.guest) === null || _a === void 0 ? void 0 : _a.nbr_confirmed_bookings) > 1 && !this.booking.agent && (index.h("div", { key: 'f0d400c38cd031184c04e070bbdf89772c6322a8', class: 'm-0 p-0', slot: "prefix" }, index.h("ir-tooltip", { key: '71a6c519da7ef967cd6ffcac154a93b03e8d85ce', message: `${locales_store.locales.entries.Lcz_BookingsNbr}`.replace('%1', this.booking.guest.nbr_confirmed_bookings.toString()), customSlot: true }, index.h("div", { key: 'bdd9061b9a4085a10eb939b2bb5a169aae33db3d', class: "d-flex align-items-center m-0 p-0", slot: "tooltip-trigger", style: { gap: '0.25rem' } }, index.h("p", { key: '00c81416a833bca4306631c2547ade6b2b4e3009', class: 'p-0 m-0', style: { color: '#FB0AAD' } }, this.booking.guest.nbr_confirmed_bookings), index.h("ir-icons", { key: '771329223441122d50672ed26408253b23638f05', style: { '--icon-size': '1rem' }, color: "#FB0AAD", name: "heart-fill" }))))), index.h("ir-button", { key: 'a3699da18ff910efa4cca7306785aa2aee052b68', slot: "suffix", variant: "icon", icon_name: 'edit', style: Object.assign(Object.assign({}, icons.colorVariants.secondary), { '--icon-size': '1.1rem' }), onClickHandler: e => this.handleEditClick(e, 'guest') })), this.booking.guest.mobile && index.h("ir-label", { key: 'c3d67a430b3645fa517088a357d047dd58e97b70', labelText: `${locales_store.locales.entries.Lcz_Phone}:`, content: this.renderPhoneNumber() }), !this.booking.agent && index.h("ir-label", { key: 'a8176d667ca823dcbd3146d0e31e57ca01b2b728', labelText: `${locales_store.locales.entries.Lcz_Email}:`, content: this.booking.guest.email }), this.booking.guest.alternative_email && index.h("ir-label", { key: '4fb21321438929e5a8288ddb6d7a9e5d56be459e', labelText: `${locales_store.locales.entries.Lcz_AlternativeEmail}:`, content: this.booking.guest.alternative_email }), ((_c = (_b = this.booking) === null || _b === void 0 ? void 0 : _b.guest) === null || _c === void 0 ? void 0 : _c.address) && index.h("ir-label", { key: 'ee697c501c9126a67ba973816b4136a7ab4c32c4', labelText: `${locales_store.locales.entries.Lcz_Address}:`, content: this.booking.guest.address }), this.userCountry && (index.h("ir-label", { key: '6f0388f4183ee67840f42d7f48a84810c7d0b8df', labelText: `${locales_store.locales.entries.Lcz_Country}:`, isCountryImage: true, content: this.userCountry.name, image: { src: this.userCountry.flag, alt: this.userCountry.name } })), ((_d = this.booking.guest) === null || _d === void 0 ? void 0 : _d.notes) && index.h("ir-label", { key: 'b019fbc58a282a52ba82da0898d6189ccf48feb4', display: "inline", labelText: `${locales_store.locales.entries.Lcz_GuestPrivateNote}:`, content: (_e = this.booking.guest) === null || _e === void 0 ? void 0 : _e.notes }), this.booking.is_direct && index.h("ir-label", { key: 'c653f122d9bd06ddd53989afc7f088f511465434', labelText: `${locales_store.locales.entries.Lcz_ArrivalTime}:`, content: this.booking.arrival.description }), this.booking.promo_key && index.h("ir-label", { key: '4f39d4146500ad55326dbbdca38e81b8daffca8f', labelText: `${locales_store.locales.entries.Lcz_Coupon}:`, content: this.booking.promo_key }), this.booking.is_in_loyalty_mode && !this.booking.promo_key && (index.h("div", { key: '834fc5abfedf8736d6f7e2a19f4d89adc7cacb0b', class: "d-flex align-items-center" }, index.h("svg", { key: '437ac56b5651ef63a1a09b00c80513f9256163ef', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: '5f2000a899c83ddbc12c1e37b8b30224693b8865', fill: "#fc6c85", d: "M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" })), index.h("p", { key: 'd64a74fb7b9adba8c5b4f3d9923a3778c47115d3', class: "m-0 p-0 ml-1" }, locales_store.locales.entries.Lcz_LoyaltyDiscountApplied))), this.booking.is_direct ? (index.h("ir-label", { labelText: `${locales_store.locales.entries.Lcz_GuestRemark}:`, display: "inline", content: this.booking.remark })) : (index.h("ota-label", { class: 'm-0 p-0', label: `${locales_store.locales.entries.Lcz_ChannelNotes || 'Channel notes'}:`, remarks: this.booking.ota_notes, maxVisibleItems: (_f = this.booking.ota_notes) === null || _f === void 0 ? void 0 : _f.length })), index.h("div", { key: '7bdd3f75f8291f295f3378c8f41c0f9d812d725b', class: "d-flex align-items-center justify-content-between" }, index.h("ir-label", { key: 'cab579b722cdcd3d17fd84caa69fac857916d6b4', labelText: `${locales_store.locales.entries.Lcz_BookingPrivateNote}:`, placeholder: locales_store.locales.entries.Lcz_VisibleToHotelOnly, content: privateNote, display: privateNote ? 'inline' : 'flex' }), index.h("ir-button", { key: '63c8f528ac80f8ae590d17cc6e6c9b59b8552d29', variant: "icon", icon_name: "edit", style: icons.colorVariants.secondary, onClickHandler: e => this.handleEditClick(e, 'extra_note') })))));
    }
};
IrReservationInformation.style = IrReservationInformationStyle0;

const irRoomCss = ".light-blue-bg.sc-ir-room{background:#acecff;padding:0.1rem 0.3rem;border-radius:5px;display:block;max-width:100px;box-sizing:border-box;display:inline-block;overflow:hidden;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:default}.room_statements.sc-ir-room{display:block;width:100%}.room_statements.sc-ir-room{display:block;width:100%}.room_statements.sc-ir-room span.sc-ir-room{display:inline;white-space:normal;line-height:1.5;word-break:break-word}.room_statements.sc-ir-room b.sc-ir-room{display:inline;margin-right:5px}.payment-container.sc-ir-room{position:absolute;right:1rem;height:fit-content}.sc-ir-room-h{position:relative}.sm-mr.sc-ir-room{margin-right:3px}.subtotal_row.sc-ir-room{padding-top:8px;font-weight:600}.room_actions_btns.sc-ir-room{gap:0.5rem}.night-cost.sc-ir-room{color:#7cbebe}.room_actions_btns.sc-ir-room{white-space:nowrap;width:max-content}.room_actions_btns.sc-ir-room{flex:1 1 0%;display:flex;justify-content:flex-end}.mx-0-5.sc-ir-room{margin-left:2px !important;margin-right:2px !important}.tax-width.sc-ir-room{font-size:10px}.sm-mb-1.sc-ir-room{margin-bottom:5px !important}.sm-mt-1.sc-ir-room{margin-top:5px !important}.mx-01.sc-ir-room{--m:5px;margin-right:var(--m) !important;margin-left:var(--m) !important}";
const IrRoomStyle0 = irRoomCss;

const IrRoom = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.deleteFinished = index.createEvent(this, "deleteFinished", 7);
        this.toast = index.createEvent(this, "toast", 7);
        this.pressCheckIn = index.createEvent(this, "pressCheckIn", 7);
        this.pressCheckOut = index.createEvent(this, "pressCheckOut", 7);
        this.editInitiated = index.createEvent(this, "editInitiated", 7);
        this.resetbooking = index.createEvent(this, "resetbooking", 7);
        this.openSidebar = index.createEvent(this, "openSidebar", 7);
        // Currency
        this.currency = 'USD';
        this.language = 'en';
        // Booleans Conditions
        this.hasRoomEdit = false;
        this.hasRoomDelete = false;
        this.hasRoomAdd = false;
        this.hasCheckIn = false;
        this.hasCheckOut = false;
        this.collapsed = false;
        this.isLoading = false;
        this.modalReason = null;
        this.isModelOpen = false;
        this.bookingService = new booking_service.BookingService();
    }
    componentWillLoad() {
        this.mainGuest = this.getMainGuest();
    }
    handleClick(e) {
        let target = e.target;
        if (target.id == 'checkin') {
            this.pressCheckIn.emit(this.room);
        }
        else if (target.id == 'checkout') {
            this.pressCheckOut.emit(this.room);
        }
    }
    handleRoomDataChange() {
        this.mainGuest = this.getMainGuest();
    }
    getDateStr(date, locale = 'default') {
        return date.getDate() + ' ' + date.toLocaleString(locale, { month: 'short' }) + ' ' + date.getFullYear();
    }
    handleEditClick() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.editInitiated.emit({
            event_type: 'EDIT_BOOKING',
            ID: this.room['assigned_units_pool'],
            NAME: utils.formatName((_a = this.mainGuest) === null || _a === void 0 ? void 0 : _a.first_name, (_b = this.mainGuest) === null || _b === void 0 ? void 0 : _b.last_name),
            EMAIL: this.booking.guest.email,
            PHONE: this.booking.guest.mobile,
            REFERENCE_TYPE: '',
            FROM_DATE: this.booking.from_date,
            TO_DATE: this.booking.to_date,
            TITLE: `${locales_store.locales.entries.Lcz_EditBookingFor} ${(_d = (_c = this.room) === null || _c === void 0 ? void 0 : _c.roomtype) === null || _d === void 0 ? void 0 : _d.name} ${((_f = (_e = this.room) === null || _e === void 0 ? void 0 : _e.unit) === null || _f === void 0 ? void 0 : _f.name) || ''}`,
            defaultDateRange: {
                dateDifference: this.room.days.length,
                fromDate: new Date(this.room.from_date + 'T00:00:00'),
                fromDateStr: this.getDateStr(new Date(this.room.from_date + 'T00:00:00')),
                toDate: new Date(this.room.to_date + 'T00:00:00'),
                toDateStr: this.getDateStr(new Date(this.room.to_date + 'T00:00:00')),
                message: '',
            },
            bed_preference: this.room.bed_preference,
            adult_child_offering: this.room.rateplan.selected_variation.adult_child_offering,
            ADULTS_COUNT: this.room.rateplan.selected_variation.adult_nbr,
            ARRIVAL: this.booking.arrival,
            ARRIVAL_TIME: this.booking.arrival.description,
            BOOKING_NUMBER: this.booking.booking_nbr,
            cancelation: this.room.rateplan.cancelation,
            channel_booking_nbr: this.booking.channel_booking_nbr,
            CHILDREN_COUNT: this.room.rateplan.selected_variation.child_nbr,
            COUNTRY: this.booking.guest.country_id,
            ENTRY_DATE: this.booking.from_date,
            FROM_DATE_STR: this.booking.format.from_date,
            guarantee: this.room.rateplan.guarantee,
            GUEST: this.mainGuest,
            IDENTIFIER: this.room.identifier,
            is_direct: this.booking.is_direct,
            IS_EDITABLE: this.booking.is_editable,
            NO_OF_DAYS: this.room.days.length,
            NOTES: this.booking.remark,
            origin: this.booking.origin,
            POOL: this.room['assigned_units_pool'],
            PR_ID: (_g = this.room.unit) === null || _g === void 0 ? void 0 : _g.id,
            RATE: this.room.total,
            RATE_PLAN: this.room.rateplan.name,
            RATE_PLAN_ID: this.room.rateplan.id,
            RATE_TYPE: this.room.roomtype.id,
            ROOMS: this.booking.rooms,
            SOURCE: this.booking.source,
            SPLIT_BOOKING: false,
            STATUS: 'IN-HOUSE',
            TO_DATE_STR: this.booking.format.to_date,
            TOTAL_PRICE: this.booking.total,
            legendData: this.legendData,
            roomsInfo: this.roomsInfo,
            roomName: ((_h = this.room.unit) === null || _h === void 0 ? void 0 : _h.name) || '',
            PICKUP_INFO: this.booking.pickup_info,
            booking: this.booking,
            currentRoomType: this.room,
        });
    }
    openModal(reason) {
        if (!reason) {
            return;
        }
        this.modalReason = reason;
        this.modal.openModal();
    }
    async handleModalConfirmation(e) {
        try {
            e.stopImmediatePropagation();
            e.stopPropagation();
            if (!this.modalReason) {
                return;
            }
            this.isLoading = true;
            switch (this.modalReason) {
                case 'delete':
                    await this.deleteRoom();
                    break;
                case 'checkin':
                case 'checkout':
                    await this.bookingService.handleExposedRoomInOut({
                        booking_nbr: this.booking.booking_nbr,
                        room_identifier: this.room.identifier,
                        status: this.modalReason === 'checkin' ? '001' : '002',
                    });
                    this.resetbooking.emit(null);
                    break;
            }
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = false;
            this.modalReason = null;
            this.modal.closeModal();
        }
    }
    async deleteRoom() {
        let oldRooms = [...this.booking.rooms];
        oldRooms = oldRooms.filter(room => room.identifier !== this.room.identifier);
        const body = {
            assign_units: true,
            check_in: true,
            is_pms: true,
            is_direct: true,
            booking: {
                booking_nbr: this.booking.booking_nbr,
                from_date: this.booking.from_date,
                to_date: this.booking.to_date,
                remark: this.booking.remark,
                property: this.booking.property,
                source: this.booking.source,
                currency: this.booking.currency,
                arrival: this.booking.arrival,
                guest: this.booking.guest,
                rooms: oldRooms,
            },
            extras: this.booking.extras,
            pickup_info: this.booking.pickup_info,
        };
        await this.bookingService.doReservation(body);
        this.deleteFinished.emit(this.room.identifier);
    }
    async updateDepartureTime(code) {
        try {
            await this.bookingService.setDepartureTime({
                property_id: this.property_id,
                code,
                room_identifier: this.room.identifier,
            });
            this.toast.emit({
                type: 'success',
                description: '',
                title: 'Saved Successfully',
                position: 'top-right',
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    formatVariation({ infant_nbr, adult_nbr, children_nbr }) {
        const adultCount = adult_nbr > 0 ? adult_nbr : 0;
        const childCount = children_nbr > 0 ? children_nbr : 0;
        const infantCount = infant_nbr > 0 ? infant_nbr : 0;
        const adultLabel = adultCount > 1 ? locales_store.locales.entries.Lcz_Adults.toLowerCase() : locales_store.locales.entries.Lcz_Adult.toLowerCase();
        const childLabel = childCount > 1 ? locales_store.locales.entries.Lcz_Children.toLowerCase() : locales_store.locales.entries.Lcz_Child.toLowerCase();
        const infantLabel = infantCount > 1 ? locales_store.locales.entries.Lcz_Infants.toLowerCase() : locales_store.locales.entries.Lcz_Infant.toLowerCase();
        const parts = [];
        if (adultCount > 0) {
            parts.push(`${adultCount} ${adultLabel}`);
        }
        if (childCount > 0) {
            parts.push(`${childCount} ${childLabel}`);
        }
        if (infantCount > 0) {
            parts.push(`${infantCount} ${infantLabel}`);
        }
        return parts.join('&nbsp&nbsp&nbsp&nbsp');
    }
    getSmokingLabel() {
        var _a, _b, _c;
        if (this.booking.is_direct) {
            if (!this.room.smoking_option) {
                return null;
            }
            const currRT = calendarData.calendar_data.roomsInfo.find(rt => rt.id === this.room.roomtype.id);
            if (currRT) {
                const smoking_option = (_a = currRT['smoking_option']) === null || _a === void 0 ? void 0 : _a.allowed_smoking_options;
                if (smoking_option) {
                    return (_b = smoking_option.find(s => s.code === this.room.smoking_option)) === null || _b === void 0 ? void 0 : _b.description;
                }
                return null;
            }
            return null;
        }
        return (_c = this.room.ota_meta) === null || _c === void 0 ? void 0 : _c.smoking_preferences;
    }
    getBedName() {
        var _a, _b;
        if (this.booking.is_direct) {
            const bed = this.bedPreferences.find(p => { var _a, _b; return p.CODE_NAME === ((_b = (_a = this.room) === null || _a === void 0 ? void 0 : _a.bed_preference) === null || _b === void 0 ? void 0 : _b.toString()); });
            if (!bed) {
                return;
            }
            return (_a = bed[`CODE_VALUE_${this.language}`]) !== null && _a !== void 0 ? _a : bed.CODE_VALUE_EN;
        }
        return (_b = this.room.ota_meta) === null || _b === void 0 ? void 0 : _b.bed_preferences;
    }
    renderModalMessage() {
        switch (this.modalReason) {
            case 'delete':
                return `${locales_store.locales.entries['Lcz_AreYouSureDoYouWantToRemove ']} ${this.room.roomtype.name} ${this.room.unit ? this.room.unit.name : ''} ${locales_store.locales.entries.Lcz_FromThisBooking}`;
            case 'checkin':
                return `Are you sure you want to Check In this unit?
`;
            case 'checkout':
                return `Are you sure you want to Check Out this unit?`;
            default:
                return '';
        }
    }
    handleCheckIn() {
        const { adult_nbr, children_nbr, infant_nbr } = this.room.occupancy;
        if (this.room.sharing_persons.length < adult_nbr + children_nbr + infant_nbr) {
            return this.showGuestModal();
        }
        return this.renderModalMessage();
    }
    getMainGuest() {
        var _a;
        return (_a = this.room.sharing_persons) === null || _a === void 0 ? void 0 : _a.find(p => p.is_main);
    }
    render() {
        var _a, _b, _c, _d;
        const bed = this.getBedName();
        return (index.h(index.Host, { key: 'cb14da3059abf100e1859e89976e7e294cbc7cf8', class: "p-1 d-flex m-0" }, index.h("ir-button", { key: 'fecfa96cf6371b5fa168ee2e9ce8f24aa70c6568', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": `#roomCollapse-${(_a = this.room.identifier) === null || _a === void 0 ? void 0 : _a.split(' ').join('')}`, "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "myCollapse", class: "mr-1", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } }), index.h("div", { key: '101778a136c61bea148c7e04f6dccf25b81ee9d7', class: "flex-fill m-0 " }, index.h("div", { key: '08f3176f920dec3f1b897941573085c6fc6c2d0f', class: "d-flex align-items-start justify-content-between sm-mb-1" }, index.h("p", { key: 'a31efa705b00319448ebd1f9445a35aa839452de', class: "m-0 p-0" }, index.h("span", { key: 'ebe54d310d52a2146a532dc05e33bfb3ea7e4760', class: "m-0 p-0", style: { fontWeight: '600' } }, this.myRoomTypeFoodCat || '', ' '), ' ', this.mealCodeName, " ", this.room.rateplan.is_non_refundable && ` - ${locales_store.locales.entries.Lcz_NonRefundable}`, ' '), index.h("div", { key: '46dee310d9c4c4ced731a4d209c49b33a897edb3', class: "d-flex m-0 p-0 align-items-center room_actions_btns" }, index.h("span", { key: 'ccd8a75bbf334fe701ccd41fa4ef95a9959a2089', class: "p-0 m-0 font-weight-bold" }, utils.formatAmount(this.currency, this.room['gross_total'])), this.hasRoomEdit && this.isEditable && (index.h("ir-button", { key: 'dcfea091f0701b11607d63573a20aa9c4d57f571', id: `roomEdit-${this.room.identifier}`, variant: "icon", icon_name: "edit",
            // class="mx-1"
            style: icons.colorVariants.secondary, onClickHandler: this.handleEditClick.bind(this) })), this.hasRoomDelete && this.isEditable && (index.h("ir-button", { key: 'e5b8d294f4629c73d0525a61a4619883367e3b7e', variant: "icon", onClickHandler: this.openModal.bind(this, 'delete'), id: `roomDelete-${this.room.identifier}`, icon_name: "trash", style: icons.colorVariants.danger })))), index.h("div", { key: 'e7b368c79f574e939b2997422ee8f51e1aa39db6', class: "d-flex align-items-center sm-mb-1" }, index.h("ir-date-view", { key: '22e3b16e140e8029f9158677e21119869b77dedd', class: "mr-1  flex-grow-1", style: { width: 'fit-content' }, from_date: this.room.from_date, to_date: this.room.to_date, showDateDifference: false }), !calendarData.isSingleUnit(this.room.roomtype.id) && calendarData.calendar_data.is_frontdesk_enabled && this.room.unit && (index.h("div", { key: 'ef30eef7d18988a3b526f6ee8958792552e117c3', class: 'd-flex justify-content-center align-items-center' }, index.h("ir-tooltip", { key: '3968a11df09a152661b6fd5e23219d9b7d345b03', message: this.room.unit.name, customSlot: true }, index.h("span", { key: 'ba8e7a4bff66dfdd40017a62db787cfaa3c2a617', slot: "tooltip-trigger", class: `light-blue-bg  ${this.hasCheckIn || this.hasCheckOut ? 'mr-2' : ''} ` }, this.room.unit.name)))), this.hasCheckIn && (index.h("ir-button", { key: 'e9ac536dea80afe9d18e4df42d44355bdb106142', onClickHandler: this.handleCheckIn.bind(this), id: "checkin", btn_color: "outline", size: "sm", text: locales_store.locales.entries.Lcz_CheckIn })), this.hasCheckOut && (index.h("ir-button", { key: '4f706128c2e5c7578e6a069ec86e252b2ba775e8', onClickHandler: this.openModal.bind(this, 'checkout'), id: "checkout", btn_color: "outline", size: "sm", text: locales_store.locales.entries.Lcz_CheckOut }))), index.h("div", { key: 'f9af73cb6e6dbffd62c2d5dc6514060e9715bdaa', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("p", { key: 'f30e213737a74b019a7a34722ec53f323a56773d', class: "m-0 p-0" }, `${this.mainGuest.first_name || ''} ${this.mainGuest.last_name || ''}`), this.room.rateplan.selected_variation.adult_nbr > 0 &&
            (this.room.unit ? (index.h("ir-tooltip", { message: 'View guests', class: "m-0 p-0", customSlot: true }, index.h("ir-button", { class: "m-0 p-0", slot: "tooltip-trigger", btn_color: "link", renderContentAsHtml: true, onClickHandler: () => this.showGuestModal(), size: "sm", btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' }, text: this.formatVariation(this.room.occupancy) }))) : (index.h("span", { innerHTML: this.formatVariation(this.room.occupancy) }))), bed && index.h("p", { key: '37a528948c6633fd38629456823c15d575e5ca4c', class: "m-0 p-0" }, "(", bed, ")")), index.h("div", { key: 'c7427917d35df9ac434debae2b39d2493966477c', class: "d-flex align-items-center", style: { marginTop: '0.5rem', marginBottom: '0.875rem', gap: '0.5rem' } }, index.h("p", { key: 'dfe2a1d908db3e1915844a7f1399a4e8a2419e6f', class: "m-0 p-0" }, "Expected departure time:"), index.h("ir-select", { key: '68fe914f982acf2027ae5c0cf737729ea715343e', selectedValue: (_b = this.room.departure_time) === null || _b === void 0 ? void 0 : _b.code, showFirstOption: false, onSelectChange: e => {
                this.updateDepartureTime(e.detail);
            }, data: (_c = this.departureTime) === null || _c === void 0 ? void 0 : _c.map(d => {
                var _a, _b;
                return ({
                    text: (_b = d[`CODE_VALUE_${(_a = this.language) === null || _a === void 0 ? void 0 : _a.toUpperCase()}`]) !== null && _b !== void 0 ? _b : d[`CODE_VALUE_EN`],
                    value: d.CODE_NAME,
                });
            }) })), index.h("div", { key: '0ddb9cff80b22e48b56dd354df5a1a177fb13552', class: "collapse", id: `roomCollapse-${(_d = this.room.identifier) === null || _d === void 0 ? void 0 : _d.split(' ').join('')}` }, index.h("div", { key: '994ffb5a3d8d0ddde80e8ffb0734ae7b7eeb7b59', class: "d-flex sm-mb-1 sm-mt-1" }, index.h("div", { key: '1f397fb8c62bef2c9e178a611e551ad960a09ae4', class: " sm-padding-top" }, index.h("p", { key: '4b532f97523d27044c182e1bf30f6aec661bc74d', class: "sm-padding-right", style: { fontWeight: '600' } }, `${locales_store.locales.entries.Lcz_Breakdown}:`)), index.h("div", { key: 'eb7fec24528ae93901370acbef1a598e2bd420eb', class: 'flex-fill' }, index.h("table", { key: '9402f793ebef4934f424209510d225247426df1b' }, this.room.days.length > 0 &&
            this.room.days.map(room => {
                return (index.h("tr", null, index.h("td", { class: 'pr-2 text-right' }, functions._getDay(room.date)), index.h("td", { class: "text-right" }, utils.formatAmount(this.currency, room.amount)), room.cost > 0 && room.cost !== null && index.h("td", { class: "pl-2 text-left night-cost" }, utils.formatAmount(this.currency, room.cost))));
            }), index.h("tr", { key: '18c3449498cbc9268e664ae72b817d34482c6875', class: '' }, index.h("th", { key: 'a32a74b191061d60665ff8f8a32d1c6587d720eb', class: "text-right pr-2 subtotal_row" }, locales_store.locales.entries.Lcz_SubTotal), index.h("th", { key: '1be11aecf99c958e86046fc29312d26f5cbbbe25', class: "text-right subtotal_row" }, utils.formatAmount(this.currency, this.room.total)), this.room.gross_cost > 0 && this.room.gross_cost !== null && index.h("th", { key: '1d3ccd3477d9c3f133a2e36fb146b4241d1115d5', class: "pl-2 text-right night-cost" }, utils.formatAmount(this.currency, this.room.cost))), this.booking.is_direct ? (index.h(index.Fragment, null, (() => {
            const filtered_data = calendarData.calendar_data.taxes.filter(tx => tx.pct > 0);
            return filtered_data.map(d => {
                return (index.h("tr", null, index.h("td", { class: "text-right pr-2" }, d.is_exlusive ? locales_store.locales.entries.Lcz_Excluding : locales_store.locales.entries.Lcz_Including, " ", d.name, " (", d.pct, "%)"), index.h("td", { class: "text-right" }, utils.formatAmount(this.currency, (this.room.total * d.pct) / 100)), this.room.gross_cost > 0 && this.room.gross_cost !== null && (index.h("td", { class: "pl-2 text-right night-cost" }, utils.formatAmount(this.currency, (this.room.cost * d.pct) / 100)))));
            });
        })())) : (index.h(index.Fragment, null, (() => {
            const filtered_data = this.room.ota_taxes.filter(tx => tx.amount > 0);
            return filtered_data.map(d => {
                return (index.h("tr", null, index.h("td", { class: "text-right pr-2" }, d.is_exlusive ? locales_store.locales.entries.Lcz_Excluding : locales_store.locales.entries.Lcz_Including, " ", d.name), index.h("td", { class: "text-right" }, d.currency.symbol, d.amount)));
            });
        })()))))), index.h("ir-label", { key: '5ff5ab3915c1d3c6d17dec424a64884044772f51', labelText: `${locales_store.locales.entries.Lcz_SmokingOptions}:`, display: "inline", content: this.getSmokingLabel() }), this.booking.is_direct && (index.h(index.Fragment, { key: '92d00b6331201a9e6c0e0554646d0374056f5f60' }, this.room.rateplan.cancelation && (index.h("ir-label", { key: 'f5581b3639754d28a6eda8048cf8f943c5aa2df4', labelText: `${locales_store.locales.entries.Lcz_Cancellation}:`, display: "inline", content: this.room.rateplan.cancelation || '', renderContentAsHtml: true })), this.room.rateplan.guarantee && (index.h("ir-label", { key: '97a207a2178cffa35dcf6afbe7ea4e95e571b38d', labelText: `${locales_store.locales.entries.Lcz_Guarantee}:`, display: "inline", content: this.room.rateplan.guarantee || '', renderContentAsHtml: true })))), this.room.ota_meta && (index.h("div", { key: '80c3f3cbf9bb76d2bb0ede3e99f7f8d4dc6b85a7' }, index.h("ir-label", { key: 'adac513013bff9225da5aa139945f422de2e607e', labelText: `${locales_store.locales.entries.Lcz_MealPlan}:`, display: "inline", content: this.room.ota_meta.meal_plan }), index.h("ir-label", { key: 'fd328eb3a8e073d10ab5dbbd26ddab0ae964df0d', labelText: `${locales_store.locales.entries.Lcz_Policies}:`, display: "inline", content: this.room.ota_meta.policies }))))), index.h("ir-modal", { key: '01ebd69b0fa710b05ecd9d44b736f196e58272b3', autoClose: false, ref: el => (this.modal = el), isLoading: this.isLoading, onConfirmModal: this.handleModalConfirmation.bind(this), iconAvailable: true, icon: "ft-alert-triangle danger h1", leftBtnText: locales_store.locales.entries.Lcz_Cancel, rightBtnText: this.modalReason === 'delete' ? locales_store.locales.entries.Lcz_Delete : locales_store.locales.entries.Lcz_Confirm, leftBtnColor: "secondary", rightBtnColor: this.modalReason === 'delete' ? 'danger' : 'primary', modalTitle: locales_store.locales.entries.Lcz_Confirmation, modalBody: this.renderModalMessage() })));
    }
    showGuestModal() {
        var _a;
        const { adult_nbr, children_nbr, infant_nbr } = this.room.occupancy;
        this.openSidebar.emit({
            type: 'room-guest',
            payload: {
                roomName: (_a = this.room.unit) === null || _a === void 0 ? void 0 : _a.name,
                sharing_persons: this.room.sharing_persons,
                totalGuests: adult_nbr + children_nbr + infant_nbr,
                checkin: this.hasCheckIn,
                identifier: this.room.identifier,
            },
        });
    }
    get element() { return index.getElement(this); }
    static get watchers() { return {
        "room": ["handleRoomDataChange"]
    }; }
};
IrRoom.style = IrRoomStyle0;

const defaultGuest = {
    id: -1,
    full_name: '',
    country_id: null,
    dob: '',
    id_info: {
        type: {
            code: null,
            description: null,
        },
        number: '',
    },
    address: null,
    alternative_email: null,
    cci: null,
    city: null,
    country: undefined,
    country_phone_prefix: null,
    email: null,
    first_name: '',
    last_name: '',
    mobile: null,
    nbr_confirmed_bookings: 0,
    notes: null,
    password: null,
    subscribe_to_news_letter: null,
};
/**Date of birth mask for room guests  with min */
const dateMask = {
    mask: Date,
    pattern: 'DD/MM/YYYY',
    lazy: false,
    min: new Date(1900, 0, 1),
    max: new Date(),
    format: date => moment.hooks(date).format('DD/MM/YYYY'),
    parse: str => moment.hooks(str, 'DD/MM/YYYY').toDate(),
    autofix: true,
    placeholderChar: '_',
    blocks: {
        YYYY: {
            mask: index$2.MaskedRange,
            from: 1970,
            to: new Date().getFullYear(),
            placeholderChar: 'Y',
        },
        MM: {
            mask: index$2.MaskedRange,
            from: 1,
            to: 12,
            placeholderChar: 'M',
        },
        DD: {
            mask: index$2.MaskedRange,
            from: 1,
            to: 31,
            placeholderChar: 'D',
        },
    },
};

const irRoomGuestsCss = ".sc-ir-room-guests-h{display:block;height:100%;position:relative;text-align:start !important}.id-select.sc-ir-room-guests{border-top-right-radius:0;border-bottom-right-radius:0;border-right-width:0}.sc-ir-room-guests-h{display:block;width:100%}.guest-grid.sc-ir-room-guests>*.sc-ir-room-guests{height:100%}.guests-labels.sc-ir-room-guests{display:none}.guest_label.sc-ir-room-guests{width:100px;color:#6b6f82}.sharing_persons_label.sc-ir-room-guests{display:none}.loading-container.sc-ir-room-guests{height:100%;width:100%;display:flex;justify-content:center;align-items:center;margin:0;padding:0}.guest_document.sc-ir-room-guests input.sc-ir-room-guests{border-top-left-radius:0;border-bottom-left-radius:0}.guests-labels.sc-ir-room-guests *.sc-ir-room-guests,.sharing_persons_label.sc-ir-room-guests{margin-bottom:0.5rem;padding-bottom:0}@media (min-width: 768px){.sharing_persons_label.sc-ir-room-guests{display:block}.guest_country_picker.sc-ir-room-guests{margin-bottom:3px}.guest-grid.sc-ir-room-guests{display:grid;grid-template-columns:2fr 2fr 2fr 2fr 5fr;gap:0.5rem;align-items:flex-start}.guest_label.sc-ir-room-guests,.sharing_persons_heading.sc-ir-room-guests,.main_guest_heading.sc-ir-room-guests{display:none}}";
const IrRoomGuestsStyle0 = irRoomGuestsCss;

const sheetCss = ".sc-ir-room-guests-h{height:100%}.sheet-container.sc-ir-room-guests{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-ir-room-guests{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-ir-room-guests{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-room-guests{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-room-guests{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-room-guests{flex-direction:row;align-items:center}}";
const IrRoomGuestsStyle1 = sheetCss;

const IrRoomGuests = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeModal = index.createEvent(this, "closeModal", 7);
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt", 7);
        this.updateRoomGuests = index.createEvent(this, "updateRoomGuests", 7);
        /**
         * An array of people sharing the room.
         * Contains information about the {locales.entries.Lcz_MainGuest} and additional guests, such as their name, date of birth, {locales.entries.Lcz_Nationality}, and ID details.
         */
        this.sharedPersons = [];
        /**
         * The total number of guests for the room.
         * Determines how many guest input forms to display in the UI.
         */
        this.totalGuests = 0;
        /**
         * The language used for displaying text content in the component.
         * Defaults to English ('en'), but can be set to other supported languages.
         */
        this.language = 'en';
        this.guests = [];
        this.idTypes = [];
        this.error = {};
        this.autoValidate = false;
        this.bookingService = new booking_service.BookingService();
    }
    componentWillLoad() {
        this.init();
        this.initializeGuests();
    }
    async init() {
        try {
            this.isLoading = true;
            const [country, idTypes] = await Promise.all([this.bookingService.getUserDefaultCountry(), this.bookingService.getSetupEntriesByTableName('_ID_TYPE')]);
            this.idTypes = idTypes;
            if (country) {
                this.propertyCountry = this.countries.find(c => c.id === country.COUNTRY_ID);
            }
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    initializeGuests() {
        var _a, _b;
        let guests = [];
        if (this.totalGuests > this.sharedPersons.length) {
            const defaultGuestsCount = this.totalGuests - this.sharedPersons.length;
            guests = [
                ...this.sharedPersons,
                ...Array(defaultGuestsCount).fill(Object.assign(Object.assign({}, defaultGuest), { id_info: Object.assign(Object.assign({}, defaultGuest.id_info), { type: {
                            code: ((_a = this.idTypes[0]) === null || _a === void 0 ? void 0 : _a.CODE_NAME) || '001',
                            description: ((_b = this.idTypes[0]) === null || _b === void 0 ? void 0 : _b.CODE_VALUE_EN) || '',
                        }, number: '' }) })),
            ];
        }
        else {
            guests = [...this.sharedPersons];
        }
        guests = guests.map(g => (Object.assign(Object.assign({}, g), { dob: new Date(g.dob).getFullYear() === 1900 ? null : g.dob })));
        this.guests = guests.map(g => (Object.assign(Object.assign({}, g), { dob: g.dob ? moment.hooks(new Date(g.dob)).format('DD/MM/YYYY') : '', country_id: g.country ? g.country.id : null })));
    }
    updateGuestInfo(index, params) {
        const tempGuests = [...this.guests];
        let tempGuest = tempGuests[index];
        tempGuest = Object.assign(Object.assign({}, tempGuest), params);
        tempGuests[index] = tempGuest;
        this.guests = [...tempGuests];
    }
    async saveGuests() {
        try {
            this.error = {};
            this.autoValidate = true;
            // ZSharedPersons.parse(this.guests);
            for (const guest of this.guests) {
                validateSharedPerson(guest);
            }
            await this.bookingService.handleExposedRoomGuests({
                booking_nbr: this.bookingNumber,
                identifier: this.identifier,
                guests: this.guests
                    .map(g => {
                    if (!g.first_name && g.id === -1) {
                        return null;
                    }
                    return Object.assign(Object.assign({}, g), { dob: g.dob ? moment.hooks(g.dob, 'DD/MM/YYYY').format('YYYY-MM-DD') : null });
                })
                    .filter(Boolean),
            });
            if (this.checkIn) {
                await this.bookingService.handleExposedRoomInOut({
                    booking_nbr: this.bookingNumber,
                    room_identifier: this.identifier,
                    status: '001',
                });
            }
            this.closeModal.emit(null);
            this.updateRoomGuests.emit({ identifier: this.identifier, guests: this.guests });
            this.resetBookingEvt.emit();
        }
        catch (error) {
            console.log(error);
            if (error instanceof index$1.ZodError) {
                let errors = {};
                error.issues.forEach(e => {
                    errors[e.path[e.path.length - 1]] = true;
                });
                this.error = Object.assign({}, errors);
            }
        }
    }
    render() {
        if (this.isLoading) {
            return (index.h("div", { class: 'loading-container' }, index.h("ir-spinner", null)));
        }
        return (index.h("form", { class: "sheet-container", style: { minWidth: '300px' }, onSubmit: e => {
                e.preventDefault();
                this.saveGuests();
            } }, index.h("ir-title", { class: "px-1 sheet-header", onCloseSideBar: () => this.closeModal.emit(null), label: `Room ${this.roomName}`, displayContext: "sidebar" }), index.h("section", { class: 'sheet-body px-1' }, index.h("div", { class: "" }, index.h("div", { class: "guest-grid guests-labels" }, index.h("p", { class: "" }, locales_store.locales.entries.Lcz_MainGuest), index.h("p", { class: "" }), index.h("p", { class: " " }, locales_store.locales.entries.Lcz_DOB), index.h("p", { class: "" }, locales_store.locales.entries.Lcz_Nationality), index.h("p", { class: " " }, locales_store.locales.entries.Lcz_Documents)), index.h("h5", { class: "main_guest_heading" }, locales_store.locales.entries.Lcz_MainGuest), this.guests.map((guest, idx) => {
            var _a, _b;
            let isRowValid = true;
            try {
                validateSharedPerson(guest);
            }
            catch (error) {
                isRowValid = false;
            }
            console.log(`row ${idx}=>${isRowValid}`);
            return (index.h(index.Fragment, null, idx === 1 && (index.h("div", { class: "d-flex mx-0 px-0" }, index.h("h5", { class: "mx-0 px-0 sharing_persons_heading" }, locales_store.locales.entries.Lcz_PersonsSharingRoom), index.h("p", { class: "mx-0 px-0 sharing_persons_label" }, locales_store.locales.entries.Lcz_PersonsSharingRoom))), index.h("div", { key: idx, class: "guest-grid" }, index.h("div", { class: 'm-0 p-0 d-flex align-items-center h-100' }, index.h("p", { class: "guest_label" }, "First name"), index.h("ir-input-text", { class: "flex-grow-1 h-100", id: `first_name_${idx}`, zod: ZSharedPerson.pick({ first_name: true }), error: !!this.error['first_name'] && !isRowValid, autoValidate: this.autoValidate, wrapKey: "first_name", placeholder: "First name", onTextChange: e => this.updateGuestInfo(idx, { first_name: e.detail }), value: guest.first_name, maxLength: 40 })), index.h("div", { class: 'm-0 p-0 d-flex align-items-center h-100' }, index.h("p", { class: "guest_label" }, "Last name"), index.h("ir-input-text", { maxLength: 40, class: "flex-grow-1 h-100", id: `last_name_${idx}`, zod: ZSharedPerson.pick({ last_name: true }), error: !!this.error['last_name'] && !isRowValid, autoValidate: this.autoValidate, wrapKey: "last_name", placeholder: "Last name", onTextChange: e => this.updateGuestInfo(idx, { last_name: e.detail }), value: guest.last_name })), index.h("div", { class: "flex-grow-0 m-0 p-0 h-100 d-flex align-items-center" }, index.h("p", { class: "guest_label" }, locales_store.locales.entries.Lcz_DOB), index.h("ir-input-text", { class: "flex-grow-1 h-100", id: `dob_${idx}`, zod: ZSharedPerson.pick({ dob: true }), error: !!this.error['dob'] && !isRowValid, autoValidate: this.autoValidate, wrapKey: "dob", mask: dateMask, placeholder: "", onTextChange: e => {
                    this.updateGuestInfo(idx, { dob: e.detail });
                }, value: guest.dob })), index.h("div", { class: " m-0 p-0 d-flex align-items-center" }, index.h("p", { class: "guest_label" }, locales_store.locales.entries.Lcz_Nationality), index.h("div", { class: "mx-0 flex-grow-1  h-100" }, index.h("ir-country-picker", { class: "h-100", propertyCountry: this.propertyCountry, id: `{locales.entries.Lcz_Nationality}_${idx}`, error: !!this.error['country_id'] && !guest.country_id, country: (_a = this.countries) === null || _a === void 0 ? void 0 : _a.find(c => { var _a, _b, _c; return ((_a = c.id) === null || _a === void 0 ? void 0 : _a.toString()) === ((_c = (_b = guest.country) === null || _b === void 0 ? void 0 : _b.id) === null || _c === void 0 ? void 0 : _c.toString()); }), onCountryChange: e => { var _a, _b, _c; return this.updateGuestInfo(idx, { country_id: (_c = (_b = (_a = e.detail) === null || _a === void 0 ? void 0 : _a.id) === null || _b === void 0 ? void 0 : _b.toString()) !== null && _c !== void 0 ? _c : null, country: e.detail }); }, countries: this.countries }))), index.h("div", { class: "flex-grow-1 m-0 p-0 d-flex align-items-center" }, index.h("p", { class: "guest_label" }, locales_store.locales.entries.Lcz_Documents), index.h("div", { class: ' d-flex m-0 flex-grow-1 h-100' }, index.h("ir-select", { selectForcedStyles: {
                    borderTopRightRadius: '0px',
                    borderBottomRightRadius: '0px',
                    borderRight: '0',
                }, selectStyles: 'rounded-top-0 rounded-bottom-0', onSelectChange: e => {
                    this.updateGuestInfo(idx, {
                        id_info: Object.assign(Object.assign({}, this.guests[idx].id_info), { type: {
                                code: e.detail,
                                description: '',
                            } }),
                    });
                }, selectedValue: guest.id_info.type.code, showFirstOption: false, data: (_b = this.idTypes) === null || _b === void 0 ? void 0 : _b.map(t => { var _a; return ({ text: (_a = t[`CODE_VALUE_${this.language.toUpperCase()}`]) !== null && _a !== void 0 ? _a : t[`CODE_VALUE_EN`], value: t.CODE_NAME }); }) }), index.h("ir-input-text", { autoValidate: this.autoValidate, maxLength: 18, placeholder: "12345", class: "flex-grow-1 guest_document", type: "text", inputForcedStyle: { borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px' }, value: guest.id_info.number, zod: ZIdInfo.pick({ number: true }), error: !!this.error['number'] && !isRowValid, wrapKey: "number", inputStyles: "form-control", onTextChange: e => this.updateGuestInfo(idx, {
                    id_info: Object.assign(Object.assign({}, this.guests[idx].id_info), { number: e.detail }),
                }) }))))));
        }))), index.h("div", { class: 'sheet-footer' }, index.h("ir-button", { onClick: () => this.closeModal.emit(null), class: `flex-fill`, text: locales_store.locales.entries.Lcz_Cancel, btn_color: "secondary" }), index.h("ir-button", { btn_type: "submit", class: 'flex-fill', isLoading: irInterceptor_store.isRequestPending('/Handle_Exposed_Room_Guests'), text: this.checkIn ? locales_store.locales.entries.Lcz_CheckIn : locales_store.locales.entries.Lcz_Save, btn_color: "primary" }))));
    }
};
IrRoomGuests.style = IrRoomGuestsStyle0 + IrRoomGuestsStyle1;

const otaLabelCss = "*.sc-ota-label{margin:0;padding:0}.sc-ota-label-h{display:flex;margin-bottom:5px;gap:5px}.label_title.sc-ota-label{min-width:max-content;padding:0;margin:0;font-weight:600}.ota-message-list.sc-ota-label{margin:0 3px;padding:0;overflow:hidden;width:100%;word-wrap:break-word !important;overflow-wrap:break-word !important}.ota-message-item.sc-ota-label{width:100%;line-height:1.5;margin:0;padding:0;word-wrap:break-word !important;overflow-wrap:break-word !important}.ota-message-item.sc-ota-label::before{content:'- ';margin-right:0.25rem}.ota-visibility-toggle.sc-ota-label{background:white;color:var(--blue);padding:0;margin:0;margin-left:3px;font-size:12px;border:0}.ota-visibility-toggle.sc-ota-label:hover{color:#355270}.ota-message-list.sc-ota-label{margin:0 3px;padding:0;overflow:hidden;width:100%;word-wrap:break-word !important;overflow-wrap:break-word !important;white-space:normal;list-style:none}.ota-message-item.sc-ota-label{width:100%;line-height:1.5;margin:0 0 0 1.2em;padding:0;word-wrap:break-word !important;overflow-wrap:break-word !important;white-space:normal;position:relative}";
const OtaLabelStyle0 = otaLabelCss;

const OtaLabel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Maximum number of remarks to display before showing the "Show More" button.
         */
        this.maxVisibleItems = 3;
        /**
         * Internal state that determines whether all remarks are shown or only the limited number.
         */
        this.showAll = false;
        /**
         * Toggles between showing all remarks or only a limited number.
         *
         * Example:
         * ```ts
         * this.toggleShowAll(); // flips showAll state
         * ```
         */
        this.toggleShowAll = () => {
            this.showAll = !this.showAll;
        };
    }
    render() {
        if (!this.remarks) {
            return null;
        }
        const displayedRemarks = this.showAll ? this.remarks : this.remarks.slice(0, this.maxVisibleItems);
        return (index.h(index.Host, null, index.h("p", { class: 'label_title' }, this.label), index.h("ul", { class: "ota-message-list" }, displayedRemarks.map((remark, index$1) => (index.h("li", { key: v4.v4(), class: "ota-message-item" }, remark.statement, ' ', this.remarks.length > this.maxVisibleItems && index$1 === displayedRemarks.length - 1 && (index.h("button", { class: "ota-visibility-toggle", onClick: this.toggleShowAll }, this.showAll ? locales_store.locales.entries.Lcz_ShowLess : locales_store.locales.entries.Lcz_ShowMore))))))));
    }
};
OtaLabel.style = OtaLabelStyle0;

exports.igl_application_info = IglApplicationInfo;
exports.igl_book_property = IglBookProperty;
exports.igl_book_property_footer = IglBookPropertyFooter;
exports.igl_book_property_header = IglBookPropertyHeader;
exports.igl_booking_form = IglBookingForm;
exports.igl_booking_overview_page = IglBookingOverviewPage;
exports.igl_property_booked_by = IglPropertyBookedBy;
exports.igl_room_type = IglRoomType;
exports.ir_applicable_policies = IrApplicablePolicies;
exports.ir_booking_details = IrBookingDetails;
exports.ir_booking_extra_note = IrBookingExtraNote;
exports.ir_booking_guarantee = IrBookingGuarantee;
exports.ir_booking_header = IrBookingHeader;
exports.ir_dialog = IrDialog;
exports.ir_dropdown = IrDropdown;
exports.ir_dropdown_item = IrDropdownItem;
exports.ir_events_log = IrEventsLog;
exports.ir_extra_service = IrExtraService;
exports.ir_extra_service_config = IrExtraServiceConfig;
exports.ir_extra_services = IrExtraServices;
exports.ir_guest_info = GuestInfo;
exports.ir_payment_details = IrPaymentDetails;
exports.ir_payment_folio = IrPaymentFolio;
exports.ir_payment_item = IrPaymentItem;
exports.ir_payment_summary = IrPaymentSummary;
exports.ir_payments_folio = IrPaymentsFolio;
exports.ir_pickup = IrPickup;
exports.ir_pickup_view = IrPickupView;
exports.ir_pms_logs = IrPmsLogs;
exports.ir_reservation_information = IrReservationInformation;
exports.ir_room = IrRoom;
exports.ir_room_guests = IrRoomGuests;
exports.ota_label = OtaLabel;

//# sourceMappingURL=igl-application-info_33.cjs.entry.js.map