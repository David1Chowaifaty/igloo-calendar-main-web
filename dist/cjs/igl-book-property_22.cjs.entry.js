'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4fe8bc8a.js');
const booking_service = require('./booking.service-73cd7592.js');
const utils = require('./utils-50be1245.js');
const variation_service = require('./variation.service-791a6fad.js');
const locales_store = require('./locales.store-0cac7e5d.js');
const irInterceptor_store = require('./ir-interceptor.store-77ca6836.js');
const calendarData = require('./calendar-data-99f4dccd.js');
const axios = require('./axios-6e678d52.js');
const room_service = require('./room.service-5878ce13.js');
const payment_service = require('./payment.service-3c37bbce.js');
const Token = require('./Token-3d0cc874.js');
const icons = require('./icons-c507b6f0.js');
const index$1 = require('./index-db8b30d9.js');
const functions = require('./functions-a8982e1b.js');
const index$2 = require('./index-e9a28e3e.js');
const v4 = require('./v4-9b297151.js');
require('./index-467172e1.js');

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
                this.variationService = new variation_service.VariationService();
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
                                children_nbr: rateplan.selected_variation.child_nbr - Math.max(rateplan.guest[i].infant_nbr, 0),
                                infant_nbr: rateplan.guest[i].infant_nbr,
                            },
                            bed_preference: rateplan.guest[i].bed_preference,
                            from_date: utils.hooks(check_in).format('YYYY-MM-DD'),
                            to_date: utils.hooks(check_out).format('YYYY-MM-DD'),
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
                    console.log(booking);
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
                            from_date: utils.hooks(fromDate).format('YYYY-MM-DD'),
                            to_date: utils.hooks(toDate).format('YYYY-MM-DD'),
                            remark: bookedByInfoData.message || null,
                            booking_nbr: '',
                            property: {
                                id: context.propertyid,
                            },
                            booked_on: {
                                date: utils.hooks().format('YYYY-MM-DD'),
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

const sheetCss$5 = ".sc-igl-book-property-h{height:100%}.sheet-container.sc-igl-book-property{display:flex !important;flex-direction:column !important;background:white;height:100vh;height:100dvh;gap:1rem;z-index:1000}.sheet-container.sc-igl-book-property{height:-webkit-fill-available;height:100vh}.sheet-footer.sc-igl-book-property{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-igl-book-property{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-igl-book-property{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-igl-book-property{flex-direction:row;align-items:center}}";
const IglBookPropertyStyle1 = sheetCss$5;

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
        booking_service.resetBookingStore();
        const from_date = utils.hooks(this.dateRangeData.fromDate).format('YYYY-MM-DD');
        const to_date = utils.hooks(this.dateRangeData.toDate).format('YYYY-MM-DD');
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
        const original_from_date = utils.hooks(this.defaultData.block_exposed_unit_props.from_date, 'YYYY-MM-DD');
        const current_from_date = utils.hooks(serviceParams.booking.from_date, 'YYYY-MM-DD');
        const original_to_date = utils.hooks(this.defaultData.block_exposed_unit_props.to_date, 'YYYY-MM-DD');
        const current_to_date = utils.hooks(serviceParams.booking.to_date, 'YYYY-MM-DD');
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
        return (index.h(index.Host, { key: '19d8aa01a397128472a17555bbf27b03364a7ff3', "data-testid": "book_property_sheet h-100" }, index.h("div", { key: '4a5845dbed0277a2fcc177643bb3dbeb63bd9b9e', class: "background-overlay", onClick: () => this.closeWindow() }), index.h("div", { key: '25e88bea09b8b1173a49ba15caeb0770931f1ba0', class: 'sideWindow sheet-container ' + (this.getCurrentPage('page_block_date') ? 'block-date' : '') }, irInterceptor_store.isRequestPending('/Get_Setup_Entries_By_TBL_NAME_MULTI') ? (index.h("div", { class: 'loading-container' }, index.h("ir-spinner", null))) : (index.h(index.Fragment, null, index.h("div", { class: "sheet-header" }, index.h("div", { class: "card-header-container mb-2" }, index.h("h3", { class: "text-left font-medium-2 px-2" }, this.getCurrentPage('page_block_date') ? this.defaultData.BLOCK_DATES_TITLE : this.defaultData.TITLE), index.h("ir-icon", { class: 'px-2', onIconClickHandler: () => {
                this.closeWindow();
            } }, index.h("svg", { slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, index.h("path", { fill: "currentColor", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" }))))), index.h("div", { class: "px-2 sheet-body" }, this.getCurrentPage('page_one') && (index.h("igl-booking-overview-page", { wasBlockedUnit: this.wasBlockedUnit, initialRoomIds: this.initialRoomIds, defaultDaterange: this.defaultDateRange, eventType: this.defaultData.event_type, selectedRooms: this.selectedUnits, currency: this.currency, showSplitBookingOption: this.showSplitBookingOption, ratePricingMode: this.ratePricingMode, dateRangeData: this.dateRangeData, bookingData: this.defaultData, adultChildCount: this.adultChildCount, bookedByInfoData: this.bookedByInfoData, adultChildConstraints: this.adultChildConstraints, sourceOptions: this.sourceOptions, propertyId: this.propertyid })), this.getCurrentPage('page_two') && (index.h("igl-booking-form", { currency: this.currency, propertyId: this.propertyid, showPaymentDetails: this.showPaymentDetails, selectedGuestData: this.guestData, countries: this.countries, isLoading: this.isLoading, selectedRooms: this.selectedUnits, bedPreferenceType: this.bedPreferenceType, dateRangeData: this.dateRangeData, bookingData: this.defaultData, showSplitBookingOption: this.showSplitBookingOption, language: this.language, bookedByInfoData: this.bookedByInfoData, defaultGuestData: this.defaultData, isEditOrAddRoomEvent: this.isEventType('EDIT_BOOKING') || this.isEventType('ADD_ROOM'), onDataUpdateEvent: event => this.handlePageTwoDataUpdateEvent(event) })), this.getCurrentPage('page_block_date') ? this.getPageBlockDatesView() : null), this.getCurrentPage('page_block_date') ? (index.h("div", { class: "sheet-footer" }, index.h("ir-button", { text: locales_store.locales.entries.Lcz_Cancel, btn_color: "secondary", class: "flex-fill", onClick: () => this.closeWindow() }), index.h("ir-button", { text: locales_store.locales.entries.Lcz_Blockdates, isLoading: irInterceptor_store.isRequestPending('/Block_Exposed_Unit'), class: "flex-fill", onClick: () => this.handleBlockDate() }))) : (index.h("igl-book-property-footer", { page: this.page, dateRangeData: this.dateRangeData, isEditOrAddRoomEvent: this.isEventType('EDIT_BOOKING') || this.isEventType('ADD_ROOM'), isLoading: this.isLoading, class: 'sheet-footer', eventType: this.bookingData.event_type })))))));
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
        const showBookAndCheckin = calendarData.calendar_data.checkin_enabled && utils.hooks(new Date((_a = this.dateRangeData) === null || _a === void 0 ? void 0 : _a.fromDate)).isSame(new Date(), 'day');
        return (index.h(index.Fragment, null, this.isEditOrAddRoomEvent ? (index.h(index.Fragment, null, this.renderButton({ type: 'back', icon_position: 'left', label: locales_store.locales.entries.Lcz_Back, icon_name: 'angles_left' }), this.renderButton({ type: 'save', label: locales_store.locales.entries.Lcz_Save, isLoading: this.isLoading === 'save' }))) : (index.h(index.Fragment, null, this.renderButton({ type: 'back', icon_position: 'left', label: locales_store.locales.entries.Lcz_Back, icon_name: 'angles_left' }), this.renderButton({ type: 'book', label: locales_store.locales.entries.Lcz_Book, isLoading: this.isLoading === 'book' }), showBookAndCheckin && this.renderButton({ type: 'bookAndCheckIn', label: locales_store.locales.entries.Lcz_BookAndChekcIn, isLoading: this.isLoading === 'bookAndCheckIn' })))));
    }
};
IglBookPropertyFooter.style = IglBookPropertyFooterStyle0;

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
        return (index.h("div", { key: '21389937e2dfd0904e61facae2dcc4a61c6e1eb3', class: "d-flex flex-column h-100" }, index.h("div", { key: '790cda9dee063c859a5938b01516614ef9d09128', class: "d-flex flex-wrap" }, index.h("ir-date-view", { key: '10fcea72a777af157ea078c3243c82071cb5de2b', class: "mr-1 flex-fill font-weight-bold font-medium-1", from_date: new Date(this.dateRangeData.fromDate), to_date: new Date(this.dateRangeData.toDate), dateOption: "DD MMM YYYY" }), this.guestData.length > 1 && (index.h("div", { key: '5ea6899c903bc797c41a91aff77e26af19070c8c', class: "mt-1 mt-md-0 text-right" }, locales_store.locales.entries.Lcz_TotalPrice, " ", index.h("span", { key: '15f90ad6a79a527e18090afb008cd55c36fc5a21', class: "font-weight-bold font-medium-1" }, utils.formatAmount(this.currency.symbol, this.bookingData.TOTAL_PRICE || '0'))))), Object.values(booking_service.booking_store.ratePlanSelections).map(val => Object.values(val).map(ratePlan => {
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
        const from_date = utils.hooks(this.bookingData.FROM_DATE, 'YYYY-MM-DD');
        const today = utils.hooks();
        if (from_date.isAfter(today)) {
            return today.add(-2, 'weeks').format('YYYY-MM-DD');
        }
        return from_date.add(-2, 'weeks').format('YYYY-MM-DD');
    }
    render() {
        var _a;
        return (index.h(index.Host, { key: '768b8d38ff5c8c2d2ed65e18e06b1337f4e4e718' }, index.h("igl-book-property-header", { key: '6d42e4a9e3382584bf154ee71fa8448c088e063a', wasBlockedUnit: this.wasBlockedUnit, bookedByInfoData: this.bookedByInfoData, defaultDaterange: this.defaultDaterange, dateRangeData: this.dateRangeData, minDate: this.setMinDate(),
            // minDate={this.isEventType('ADD_ROOM') || this.isEventType('SPLIT_BOOKING') ? this.bookedByInfoData.from_date || this.bookingData.FROM_DATE : undefined}
            adultChildCount: this.adultChildCount, splitBookingId: this.showSplitBookingOption, bookingData: this.bookingData, sourceOptions: this.sourceOptions, message: this.message, bookingDataDefaultDateRange: this.bookingData.defaultDateRange, showSplitBookingOption: this.showSplitBookingOption, adultChildConstraints: this.adultChildConstraints, splitBookings: this.getSplitBookings(), propertyId: this.propertyId }), index.h("div", { key: '64cb0c4ca1a6361419face9b03053cbde61517f9', class: " text-left" }, irInterceptor_store.isRequestPending('/Check_Availability') && this.isEventType('EDIT_BOOKING') ? (index.h("div", { class: "loading-container" }, index.h("div", { class: "loader" }))) : (index.h(index.Fragment, null, (_a = booking_service.booking_store.roomTypes) === null || _a === void 0 ? void 0 : _a.map(roomType => (index.h("igl-room-type", { initialRoomIds: this.initialRoomIds, isBookDisabled: Object.keys(this.bookedByInfoData).length <= 1, key: `room-type-${roomType.id}`, currency: this.currency, ratePricingMode: this.ratePricingMode, dateDifference: this.dateRangeData.dateDifference, bookingType: this.bookingData.event_type, roomType: roomType, class: "mt-2 mb-1 p-0", "data-testid": `room_type_${roomType.id}`, id: roomType.id.toString(), roomInfoId: this.selectedRooms.has(`c_${roomType.id}`) ? roomType.id : null, onDataUpdateEvent: evt => this.roomsDataUpdate.emit(evt.detail) }))))))));
    }
};
IglBookingOverviewPage.style = IglBookingOverviewPageStyle0;

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
                this.bookingService.getSetupEntriesByTableName('_BED_PREFERENCE_TYPE'),
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
            default:
                return null;
        }
    }
    render() {
        var _a, _b, _c;
        if (!this.booking) {
            return (index.h("div", { class: 'loading-container' }, index.h("ir-spinner", null)));
        }
        return [
            index.h(index.Fragment, null, !this.is_from_front_desk && (index.h(index.Fragment, null, index.h("ir-toast", null), index.h("ir-interceptor", null)))),
            index.h("ir-booking-header", { booking: this.booking, hasCloseButton: this.hasCloseButton, hasDelete: this.hasDelete, hasMenu: this.hasMenu, hasPrint: this.hasPrint, hasReceipt: this.hasReceipt, hasEmail: ['001', '002'].includes((_b = (_a = this.booking) === null || _a === void 0 ? void 0 : _a.status) === null || _b === void 0 ? void 0 : _b.code) }),
            index.h("div", { class: "fluid-container p-1 text-left mx-0" }, index.h("div", { class: "row m-0" }, index.h("div", { class: "col-12 p-0 mx-0 pr-lg-1 col-lg-6" }, index.h("ir-reservation-information", { countries: this.countries, booking: this.booking }), index.h("div", { class: "font-size-large d-flex justify-content-between align-items-center mb-1" }, index.h("ir-date-view", { from_date: this.booking.from_date, to_date: this.booking.to_date }), this.hasRoomAdd && this.booking.is_direct && this.booking.is_editable && (index.h("ir-button", { id: "room-add", icon_name: "square_plus", variant: "icon", style: { '--icon-size': '1.5rem' } }))), index.h("div", { class: "card p-0 mx-0" }, this.booking.rooms.map((room, index$1) => {
                const showCheckin = this.handleRoomCheckin(room);
                const showCheckout = this.handleRoomCheckout(room);
                return [
                    index.h("ir-room", { room: room, language: this.language, bedPreferences: this.bedPreference, isEditable: this.booking.is_editable, legendData: this.calendarData.legendData, roomsInfo: this.calendarData.roomsInfo, myRoomTypeFoodCat: room.roomtype.name, mealCodeName: room.rateplan.short_name, currency: this.booking.currency.symbol, hasRoomEdit: this.hasRoomEdit && this.booking.status.code !== '003' && this.booking.is_direct, hasRoomDelete: this.hasRoomDelete && this.booking.status.code !== '003' && this.booking.is_direct, hasCheckIn: showCheckin, hasCheckOut: showCheckout, booking: this.booking, bookingIndex: index$1, onDeleteFinished: this.handleDeleteFinish.bind(this) }),
                    index$1 !== this.booking.rooms.length - 1 && index.h("hr", { class: "mr-2 ml-2 my-0 p-0" }),
                ];
            })), index.h("ir-pickup-view", { booking: this.booking }), index.h("section", null, index.h("div", { class: "font-size-large d-flex justify-content-between align-items-center mb-1" }, index.h("p", { class: 'font-size-large p-0 m-0 ' }, locales_store.locales.entries.Lcz_ExtraServices), index.h("ir-button", { id: "extra_service_btn", icon_name: "square_plus", variant: "icon", style: { '--icon-size': '1.5rem' } })), index.h("ir-extra-services", { booking: { booking_nbr: this.booking.booking_nbr, currency: this.booking.currency, extra_services: this.booking.extra_services } }))), index.h("div", { class: "col-12 p-0 m-0 pl-lg-1 col-lg-6" }, index.h("ir-payment-details", { paymentActions: this.paymentActions, bookingDetails: this.booking })))),
            index.h("ir-modal", { modalBody: (_c = this.modalState) === null || _c === void 0 ? void 0 : _c.message, leftBtnText: locales_store.locales.entries.Lcz_Cancel, rightBtnText: locales_store.locales.entries.Lcz_Confirm, autoClose: false, isLoading: irInterceptor_store.isRequestPending('/Send_Booking_Confirmation_Email'), ref: el => (this.modalRef = el), onConfirmModal: e => {
                    this.handleModalConfirm(e);
                }, onCancelModal: () => {
                    this.modalRef.closeModal();
                } }),
            index.h("ir-sidebar", { open: this.sidebarState !== null, side: 'right', id: "editGuestInfo", style: { '--sidebar-width': this.sidebarState === 'room-guest' ? '60rem' : undefined }, onIrSidebarToggle: e => {
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
        if (utils.hooks(new Date()).isSameOrAfter(new Date(room.from_date), 'days') && utils.hooks(new Date()).isBefore(new Date(room.to_date), 'days')) {
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

const sheetCss$4 = ".sc-ir-booking-extra-note-h{height:100%}.sheet-container.sc-ir-booking-extra-note{display:flex !important;flex-direction:column !important;background:white;height:100vh;height:100dvh;gap:1rem;z-index:1000}.sheet-container.sc-ir-booking-extra-note{height:-webkit-fill-available;height:100vh}.sheet-footer.sc-ir-booking-extra-note{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-booking-extra-note{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-booking-extra-note{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-booking-extra-note{flex-direction:row;align-items:center}}";
const IrBookingExtraNoteStyle1 = sheetCss$4;

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
        return (index.h("form", { key: '8ad702a17bed9006ccc17bf8f42c26492c6ce5c2', class: 'sheet-container h-100', onSubmit: e => {
                e.preventDefault();
                this.savePrivateNote();
            } }, index.h("ir-title", { key: 'e98cc433b10fe26e4af610812b49ef06f55df6e8', class: "px-1 sheet-header", onCloseSideBar: () => this.closeModal.emit(null), label: locales_store.locales.entries.Lcz_PrivateNote, displayContext: "sidebar" }), index.h("div", { key: '53b10461a2d8608c66e9a3e4fbcb4790040db3f4', class: "sheet-body px-1" }, index.h("ir-textarea", { key: 'a6e039053a0840b4cf35487bd74f2f2146757589', placeholder: locales_store.locales.entries.Lcz_PrivateNote_MaxChar, label: "", value: this.note, maxLength: 150, onTextChange: e => this.setNote(e.detail) })), index.h("div", { key: '7499b1730b2daba70595e3ea59c95ed8701bbdf8', class: 'sheet-footer' }, index.h("ir-button", { key: 'a98a7755a90d299d7bdd8e1ee0146d656fdfec85', onClickHandler: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `mb-1 mb-sm-0 flex-fill  mr-sm-1'}`, text: locales_store.locales.entries.Lcz_Cancel, btn_color: "secondary" }), index.h("ir-button", { key: '84b307b9aa2d4c89f3471b73bcf317d317167c47', btn_styles: "justify-content-center align-items-center", class: 'm-0 flex-fill text-center ml-sm-1', isLoading: this.isLoading, text: locales_store.locales.entries.Lcz_Save, btn_color: "primary", btn_type: "submit" }))));
    }
};
IrBookingExtraNote.style = IrBookingExtraNoteStyle0 + IrBookingExtraNoteStyle1;

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
        return (index.h("div", { key: 'b25c98073012ed54fab8f73c72f154dbed36a0be', class: "fluid-container px-1" }, index.h("div", { key: 'b3b9f4032207dac70a894dab45f5ee44423256e9', class: "d-flex flex-column p-0 mx-0 flex-lg-row align-items-md-center justify-content-between mt-1" }, index.h("div", { key: 'eefbc1368576bf9db0bec7b7fda0426735e76c7d', class: "m-0 p-0 mb-1 mb-lg-0 mt-md-0" }, index.h("p", { key: 'ec73c7a30a7b03bd0c2d49c402c867dbcf125264', class: "font-size-large m-0 p-0" }, `${locales_store.locales.entries.Lcz_Booking}#${this.booking.booking_nbr}`), index.h("p", { key: 'f6edf9e1cb5189b0d46dbbb7c3c6c69917eb87ce', class: "m-0 p-0" }, !this.booking.is_direct && index.h("span", { key: 'e60711d0b58de037c180a014db39894748547902', class: "mr-1 m-0" }, this.booking.channel_booking_nbr))), index.h("div", { key: 'd4a5350e5f80619b8185dbe063250b7252ddfed2', class: "d-flex justify-content-end align-items-center", style: { gap: '1rem', flexWrap: 'wrap' } }, index.h("span", { key: 'f36d7cb54dbdf365c3fd9e91fcb2900a63189d53', class: `confirmed btn-sm m-0  ${this.confirmationBG[this.booking.is_requested_to_cancel ? '003' : this.booking.status.code]}` }, this.booking.is_requested_to_cancel ? locales_store.locales.entries.Lcz_CancellationRequested : this.booking.status.description), this.booking.allowed_actions.length > 0 && this.booking.is_editable && (index.h("div", { key: 'f878efb2c0ad3dbb5002ea5e831c4851f1ce9e7f', class: "m-0 p-0 d-flex align-items-center", style: { gap: '0.25rem' } }, index.h("ir-select", { key: 'fb8ae50e82471ead947848ea268fc0bdf7152180', selectContainerStyle: "h-28", selectStyles: "d-flex status-select align-items-center h-28", firstOption: locales_store.locales.entries.Lcz_Select, id: "update-status", size: "sm", "label-available": "false", data: this.booking.allowed_actions.map(b => ({ text: b.description, value: b.code })), textSize: "sm", class: "sm-padding-right m-0 ", selectedValue: this.bookingStatus }), index.h("ir-button", { key: '5224ac44af5b02535f573d8355bd56e4c9004a19', onClickHandler: this.updateStatus.bind(this), btn_styles: "h-28", isLoading: irInterceptor_store.isRequestPending('/Change_Exposed_Booking_Status'), btn_disabled: irInterceptor_store.isRequestPending('/Change_Exposed_Booking_Status'), id: "update-status-btn", size: "sm", text: "Update" }))), index.h("ir-button", { key: '41415f671177f3aae80c86ad76c517a61430011c', size: "sm", btn_color: "outline", text: locales_store.locales.entries.Lcz_EventsLog, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'events-log' });
            } }), calendarData.calendar_data.is_pms_enabled && (index.h("ir-button", { key: '5f1fef717caf63a01b10cd219b8fa8c480ffc136', size: "sm", btn_color: "outline", text: locales_store.locales.entries.Lcz_pms, onClick: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.openDialog({ type: 'pms' });
            } })), this.hasReceipt && index.h("ir-button", { key: '3e0e649c808e038d843de1dfc0ddbac560b1aa0e', variant: "icon", id: "receipt", icon_name: "reciept", class: "", style: { '--icon-size': '1.65rem' } }), this.hasPrint && index.h("ir-button", { key: '167671d7ddeb07a32c391a72f0d0077a2699b2d2', variant: "icon", id: "print", icon_name: "print", class: "", style: { '--icon-size': '1.65rem' } }), this.hasEmail && index.h("ir-button", { key: '80a880fefa51a69f10378e0f8d7a49a820f0f0c2', variant: "icon", id: "email", title: "Email this booking", icon_name: "email", class: "", style: { '--icon-size': '1.65rem' } }), this.hasDelete && index.h("ir-button", { key: '2a4ef4fcefe2ecc1357796822bb7bc47f7147a21', variant: "icon", id: "book-delete", icon_name: "trash", class: "", style: Object.assign(Object.assign({}, icons.colorVariants.danger), { '--icon-size': '1.65rem' }) }), this.hasMenu && index.h("ir-button", { key: '662f942fe4ff3cf47a26fd177ef5792fa536777f', variant: "icon", class: "mr-1", id: "menu", icon_name: "menu_list", style: { '--icon-size': '1.65rem' } }), this.hasCloseButton && (index.h("ir-button", { key: '323837b6a0570eaf08e3481cdc02267a51702feb', id: "close", variant: "icon", style: { '--icon-size': '1.65rem' }, icon_name: "xmark", class: "ml-2", onClickHandler: e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.closeSidebar.emit(null);
            } })))), index.h("ir-dialog", { key: '1eff0564a4ed2e40e41b39dd0e013fbcd8f0872a', onOpenChange: e => {
                if (!e.detail) {
                    this.currentDialogStatus = null;
                }
            }, style: this.currentDialogStatus === 'events-log' && { '--ir-dialog-max-width': '400px' }, ref: el => (this.dialogRef = el) }, this.renderDialogBody())));
    }
};
IrBookingHeader.style = IrBookingHeaderStyle0;

const irDialogCss = ":host{display:block;margin:0;padding:0;box-sizing:border-box}.backdrop{opacity:0;background:rgba(0, 0, 0, 0.2);position:fixed;inset:0;z-index:99999998}.backdrop[data-state='opened']{animation:overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards}.backdrop[data-state='closed']{opacity:0;pointer-events:none}.modal-container{box-sizing:border-box;margin:0;box-shadow:hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;position:fixed;z-index:99999999;overflow-y:auto;top:50%;left:50%;background:white;transform:translate(-50%, -50%);width:90%;min-height:fit-content;height:fit-content;max-width:var(--ir-dialog-max-width, 40rem);max-height:85vh;border-radius:8px;padding:0;animation:contentShow 300ms cubic-bezier(0.16, 1, 0.3, 1)}.modal-footer ::slotted(*){flex-direction:row;align-items:center;justify-content:end;gap:8px;--ir-btn-width:inherit}.modal-footer{--ir-btn-width:100%}.modal-title ::slotted(*){font-size:18px;font-weight:600;color:#101828;margin-bottom:8px}.modal-body ::slotted(*){font-size:14px;font-weight:400;color:#475467;padding:0;margin:0}@keyframes overlayShow{from{opacity:0}to{opacity:1}}@keyframes contentShow{from{opacity:0;transform:translate(-50%, -48%) scale(0.96)}to{opacity:1;transform:translate(-50%, -50%) scale(1)}}.dialog-close-button{position:absolute;top:15px;right:15px}";
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
        return (index.h(index.Host, { key: '0d24a805f73563b86789c3dd9849949e29358700' }, index.h("div", { key: 'ed02982741a6b56a3298961a1f16659f13001a5d', class: "backdrop", "data-state": this.isOpen ? 'opened' : 'closed', onClick: () => this.closeModal() }), this.isOpen && (index.h("div", { key: 'e83cf12c138e433f5b92187a3f03b56b67216728', class: "modal-container", tabIndex: -1, role: "dialog", "aria-labelledby": "dialog1Title", "aria-describedby": "dialog1Desc" }, index.h("ir-icon", { key: 'ec0a121f38453ede107a25f6ed80e98246a7b2eb', id: "close", class: "dialog-close-button", onIconClickHandler: () => this.closeModal() }, index.h("svg", { key: '56761b6f3b6421cc5fce5c40543d96e43d50490c', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 18, width: 18 }, index.h("path", { key: '0c3c8fe8366e314b10f041daa11d85bc178dec04', fill: "#104064", class: "currentColor", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" }))), index.h("div", { key: 'fdce4cc5b6467ef770678e941b51bfd65167efdd', class: 'modal-title', id: "dialog1Title" }, index.h("slot", { key: '8eeffcc9bb9d0e9ed3760bfe918dc744c17eb655', name: "modal-title" })), index.h("div", { key: 'ea5579427593be25fdf9b209e8f67bf0abd2cdd1', class: "modal-body", id: "dialog1Desc" }, index.h("slot", { key: 'd7e23ae036a9ea5c7f4d247eafadbddb075d6ba6', name: "modal-body" })), index.h("div", { key: 'f40cfe96e45f6030272840fe477fbdb79bee0bc2', class: "modal-footer" }, index.h("slot", { key: 'd56ff813732533438fb4429a59b5faeefab18e5e', name: "modal-footer" }))))));
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
        return (index.h("div", { key: '723629af9f3a0174d19280eb2cb73dcbb2a5c264', class: "p-1" }, index.h("div", { key: 'e4ce4219f5b2b307e236a98b466b0f42ab99f8cd', class: "d-flex  align-items-center", style: { gap: '0.5rem' } }, index.h("h3", { key: 'bf4d4fa0e31d8d6966bb8fdd5a21af8babade69b', class: " text-left p-0 m-0  dialog-title " }, locales_store.locales.entries.Lcz_EventsLog)), irInterceptor_store.isRequestPending('/Get_Exposed_Booking_Events') ? (index.h("div", { class: 'd-flex align-items-center justify-content-center dialog-container-height' }, index.h("ir-spinner", null))) : (index.h(index.Fragment, null, index.h("table", { class: " dialog-container-height" }, index.h("thead", { style: { opacity: '0' } }, index.h("tr", null, index.h("th", null, "date"), index.h("th", null, "user"), index.h("th", null, "status"))), index.h("tbody", null, (_a = this.bookingEvents) === null || _a === void 0 ? void 0 : _a.map(e => (index.h("tr", { key: e.id, class: "pb-1" }, index.h("td", { class: "event-row dates-row" }, index.h("span", null, e.date), index.h("span", null, String(e.hour).padStart(2, '0'), ":", String(e.minute).padStart(2, '0'), ":", String(e.second).padStart(2, '0'))), index.h("td", { class: "pl-3 event-row " }, e.type), index.h("td", { class: "pl-1 event-row " }, e.user))))))))));
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
        return (index.h(index.Host, { key: 'ee2482c695c22f309073def3f5f92535243341b3' }, index.h("div", { key: '5b4094c520c8cd7f25c39784cce046852aa4f978', class: "p-1" }, index.h("div", { key: '7d1ede3cc3053939d40473d2853427318e7f07be', class: 'extra-service-container' }, index.h("p", { key: '7c692d44fd6995540c0254b4587d1ecae6c4399d', class: "extra-service-description" }, this.service.description), index.h("div", { key: '4a1eeda4b5345729a3c2f16b72aa8d9fdf07f481', class: "extra-service-actions" }, this.service.price && index.h("p", { key: '024d33d67d6f7435124860df0ce99e3990208503', class: "extra-service-price p-0 m-0 font-weight-bold" }, utils.formatAmount(this.currencySymbol, this.service.price)), index.h("ir-button", { key: '1836a79cfd9bb0ed0fde09ef773009078f710dcf', id: `serviceEdit-${this.service.booking_system_id}`, class: "extra-service-edit-btn m-0 p-0", variant: "icon", icon_name: "edit", style: icons.colorVariants.secondary, onClickHandler: () => this.editExtraService.emit(this.service) }), index.h("ir-button", { key: '90d7a3597f39881a4c421ffe3a7e269f1d1f5c9f', class: "extra-service-delete-btn m-0 p-0", variant: "icon", onClickHandler: () => this.irModalRef.openModal(), id: `roomDelete-${this.service.booking_system_id}`, icon_name: "trash", style: icons.colorVariants.danger }))), index.h("div", { key: '958256c48c3d337bd42307b62af1cd4155b3a4fc', class: "extra-service-conditional-date" }, this.service.start_date && this.service.end_date ? (index.h("ir-date-view", { class: "extra-service-date-view mr-1", from_date: this.service.start_date, to_date: this.service.end_date, showDateDifference: false })) : (this.service.start_date && index.h("p", { class: "extra-service-date-view" }, utils.hooks(new Date(this.service.start_date)).format('MMM DD, YYYY'))))), index.h("ir-modal", { key: 'c779105fdfb17464ef985427ad7d08aaef22ac00', autoClose: false, ref: el => (this.irModalRef = el), isLoading: irInterceptor_store.isRequestPending('/Do_Booking_Extra_Service'), onConfirmModal: this.deleteService.bind(this), iconAvailable: true, icon: "ft-alert-triangle danger h1", leftBtnText: locales_store.locales.entries.Lcz_Cancel, rightBtnText: locales_store.locales.entries.Lcz_Delete, leftBtnColor: "secondary", rightBtnColor: "danger", modalTitle: locales_store.locales.entries.Lcz_Confirmation, modalBody: `${locales_store.locales.entries['Lcz_AreYouSureDoYouWantToRemove ']} ${locales_store.locales.entries.Lcz_ThisService} ${locales_store.locales.entries.Lcz_FromThisBooking}` })));
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
        .optional(),
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
    last_name: index$1.z
        .union([
        index$1.z.string().min(2), // if provided and non-empty, must have min length 2
        index$1.z.literal(''), // or it can be empty string
    ])
        .optional(),
    country_id: index$1.z.coerce
        .number()
        .min(0) // if provided, must be >= 0
        .optional(),
    dob: index$1.z
        .string()
        .nullable()
        .optional()
        .refine(value => value === undefined || utils.hooks(value, 'DD/MM/YYYY', true).isValid() || value === '' || value === null, 'Invalid date format')
        .transform(value => {
        if (value === undefined || value === '' || value === null)
            return null;
        const isDDMMYYYY = utils.hooks(value, 'DD/MM/YYYY', true).isValid();
        return isDDMMYYYY ? null : utils.hooks(value, 'DD/MM/YYYY').format('YYYY-MM-DD');
    }),
    id_info: ZIdInfo.optional(),
});
const ZSharedPersons = index$1.z.array(ZSharedPerson);
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

const sheetCss$3 = ".sc-ir-extra-service-config-h{height:100%}.sheet-container.sc-ir-extra-service-config{display:flex !important;flex-direction:column !important;background:white;height:100vh;height:100dvh;gap:1rem;z-index:1000}.sheet-container.sc-ir-extra-service-config{height:-webkit-fill-available;height:100vh}.sheet-footer.sc-ir-extra-service-config{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-extra-service-config{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-extra-service-config{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-extra-service-config{flex-direction:row;align-items:center}}";
const IrExtraServiceConfigStyle1 = sheetCss$3;

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
        return (index.h("form", { key: 'bef68a4cd7f088ca688b625fc3ce33780279652b', class: 'sheet-container', onSubmit: async (e) => {
                e.preventDefault();
                await this.saveAmenity();
            } }, index.h("ir-title", { key: '8c4643cb9b9c6ae3d670ca46d9f1b65947e82ede', class: "px-1 sheet-header", onCloseSideBar: () => this.closeModal.emit(null), label: locales_store.locales.entries.Lcz_ExtraServices, displayContext: "sidebar" }), index.h("section", { key: '0d6c6f7e070a806361e9b5138c5cb76cf5a32bdd', class: 'px-1 sheet-body' }, index.h("fieldset", { key: 'ba416d63f97b31b30daa9c203703bfc8f3d287e4', class: "input-group mb-1 service-description" }, index.h("div", { key: '3d476136bfb8de2cf294899c3c952a4348791ca0', class: "input-group-prepend" }, index.h("span", { key: '8ecadeb755376ff9aa14a93b992fb850c747b702', class: "input-group-text" }, locales_store.locales.entries.Lcz_Description)), index.h("textarea", { key: 'f8789eebadc0a37c01c3cc6edb5e2ce97e5383d6', value: (_a = this.s_service) === null || _a === void 0 ? void 0 : _a.description, class: `form-control service-description-input ${this.error && !((_b = this.s_service) === null || _b === void 0 ? void 0 : _b.description) ? 'is-invalid' : ''}`, style: { height: '7rem' }, maxLength: 250, onChange: e => this.updateService({ description: e.target.value }), "aria-label": "Amenity description" })), index.h("div", { key: '6e9a92d41141f66129ec4475d166be3ebd11c747', class: 'row-group mb-1' }, index.h("div", { key: 'f774c4dc4ecd0fe47a05486381926a0ae8cf32fe', class: "input-group" }, index.h("div", { key: '3bd20267bc79846fbe4c9c5c8af8964863326234', class: "input-group-prepend" }, index.h("span", { key: 'e1699ac72d5700822825b3443f29d6e93839eb70', class: "input-group-text", id: "basic-addon1" }, locales_store.locales.entries.Lcz_DatesOn)), index.h("div", { key: '41b033afeacb55fc385473136a0d61f46d3681dc',
            // ref={el => (this.d1_0 = el)}
            class: "form-control p-0 m-0 d-flex align-items-center justify-content-center date-from" }, index.h("div", { key: '9cda2a0161cdaff8a73c07f2226bfae67f942743', class: "service-date-container" }, index.h("ir-date-picker", { key: 'fb3a7de9c16f051684572a97c5a42274d89e25a1',
            // onDatePickerFocus={() => {
            //   this.d1?.classList.add('date-focused');
            //   this.d1_0?.classList.add('date-focused');
            // }}
            // onDatePickerBlur={() => {
            //   this.d1?.classList.remove('date-focused');
            //   this.d1_0?.classList.remove('date-focused');
            // }}
            // customPicker
            emitEmptyDate: true, date: (_c = this.s_service) === null || _c === void 0 ? void 0 : _c.start_date, minDate: this.booking.from_date, maxDate: this.booking.to_date, onDateChanged: e => { var _a; return this.updateService({ start_date: (_a = e.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD') }); } }, index.h("input", { key: 'fcf04c3f26b4e2b09b1ec2a610d6087a1089971c',
            // ref={el => (this.d1 = el)}
            type: "text", slot: "trigger", value: ((_d = this.s_service) === null || _d === void 0 ? void 0 : _d.start_date) ? functions._formatDate(this.s_service.start_date) : null, style: { borderLeftWidth: '0', borderRightWidth: '0', width: '100%', borderRadius: '0' }, class: "text-center w-100 form-control input-sm" })), ((_e = this.s_service) === null || _e === void 0 ? void 0 : _e.start_date) && (index.h("div", { key: 'e3fae9d9f80c1a64b542c9bcce6b8d7b2c1d2e5d', class: "btn-container" }, index.h("ir-button", { key: 'e6517dd2c385d247e95bf9127138bf88546bea5e', title: "clear", id: "close", variant: "icon", style: { '--icon-size': '0.875rem' }, icon_name: "xmark-fill", class: "ml-2", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateService({ start_date: null });
            } })))))), index.h("div", { key: '46c1d68d0680ed57777a21171df3061e818f8375', class: "input-group" }, index.h("div", { key: '25800474030e2cb1c70242aad53e358b10d99873', class: "input-group-prepend " }, index.h("span", { key: '7e9c2660fe045c3772e290449c92896673358922', class: "input-group-text until-prepend", id: "basic-addon1" }, locales_store.locales.entries.Lcz_TillAndIncluding)), index.h("div", { key: '9a5726a62e7e71690c4265820fd3e8f758abde25',
            // ref={el => (this.d2_0 = el)}
            class: "form-control p-0 m-0 d-flex align-items-center justify-content-center" }, index.h("div", { key: 'd6d1f818f0e02ef3fb4a93acabc43b7e30c04926', class: "service-date-container" }, index.h("ir-date-picker", { key: '66abc95f56c4c8d304180eb13e3d5069bdd7fb08',
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
            } }, index.h("input", { key: '964a3a6c1b64770bf8a623a99ecd6c401d134c61',
            // ref={el => (this.d2 = el)}
            slot: "trigger", value: ((_j = this.s_service) === null || _j === void 0 ? void 0 : _j.end_date) ? functions._formatDate(this.s_service.end_date) : null, style: { borderLeftWidth: '0', borderRightWidth: '0', width: '100%' }, class: "text-center form-control input-sm" })), ((_k = this.s_service) === null || _k === void 0 ? void 0 : _k.end_date) && (index.h("div", { key: '5eb4606f5b0904fb2eab9cbe8e5b9d6860d059e6', class: "btn-container" }, index.h("ir-button", { key: 'd5d7423ee3ac9b1ba933841b2eae1c70fb6833db', title: "clear", id: "close", variant: "icon", style: { '--icon-size': '0.875rem' }, icon_name: "xmark-fill", class: "ml-2", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateService({ end_date: null });
            } }))))))), index.h("div", { key: '51033c1dfb51d8b39b835eec4d4fb9f2cff380d3', class: 'row-group' }, index.h("ir-price-input", { key: 'ab45fa838c01fcf9cb6ee7c020c99d96e188acb7', label: "Price", currency: this.booking.currency.symbol, class: "ir-br-input-none", value: (_m = (_l = this.s_service) === null || _l === void 0 ? void 0 : _l.price) === null || _m === void 0 ? void 0 : _m.toString(), zod: ExtraServiceSchema.pick({ price: true }), "aria-label": locales_store.locales.entries.Lcz_Price, wrapKey: "price", "aria-describedby": "service price", autoValidate: false, "data-state": this.error && !this.validatePrice() ? 'error' : '', onTextChange: e => this.updateService({ price: parseFloat(e.detail) }) }), index.h("ir-price-input", { key: '26ab4b2286dc702a087422629c98ede4e58b9189', autoValidate: false, label: locales_store.locales.entries.Lcz_Cost, labelStyle: "rounded-0 border-left-0", currency: this.booking.currency.symbol,
            // class="ir-bl-lbl-none ir-bl-none"
            value: (_p = (_o = this.s_service) === null || _o === void 0 ? void 0 : _o.cost) === null || _p === void 0 ? void 0 : _p.toString(), zod: ExtraServiceSchema.pick({ cost: true }), onTextChange: e => this.updateService({ cost: parseFloat(e.detail) }), wrapKey: "cost", "aria-label": "Cost", "aria-describedby": "service cost" }))), index.h("div", { key: '7c5913855b87a4e5e499cc3556aec80c13da7eee', class: 'sheet-footer' }, index.h("ir-button", { key: 'ad215f96a02f2feec54aecc567ddb8804c1422df', onClick: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `flex-fill`, text: locales_store.locales.entries.Lcz_Cancel, btn_color: "secondary" }), index.h("ir-button", { key: '0a88e07538ecc4b4c157f8be20f06bf4a599ebc9', btn_styles: "justify-content-center align-items-center", class: 'flex-fill', btn_type: "submit", isLoading: irInterceptor_store.isRequestPending('/Do_Booking_Extra_Service'), text: locales_store.locales.entries.Lcz_Save, btn_color: "primary" }))));
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
        return (index.h(index.Host, { key: '12aa9e191380ef0181d0eacf7ae0e72b2eed75ed', class: 'card p-0 ' }, (_a = this.booking.extra_services) === null || _a === void 0 ? void 0 : _a.map((service, index$1) => (index.h(index.Fragment, null, index.h("ir-extra-service", { bookingNumber: this.booking.booking_nbr, currencySymbol: this.booking.currency.symbol, key: service.booking_system_id, service: service }), index$1 !== this.booking.extra_services.length - 1 && index.h("hr", { class: "mr-2 ml-2 my-0 p-0" }))))));
    }
};
IrExtraServices.style = IrExtraServicesStyle0;

const irGuestInfoCss = ".input-group-text.sc-ir-guest-info{min-width:10rem;text-align:left}.mobilePrefixSelect.sc-ir-guest-info{border-right-width:0;border-top-right-radius:0;border-bottom-right-radius:0}.mobilePrefixInput.sc-ir-guest-info{border-top-left-radius:0;border-bottom-left-radius:0}.check-container.sc-ir-guest-info{position:relative;cursor:pointer;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex;align-items:center}.check-container.sc-ir-guest-info input.sc-ir-guest-info{position:relative;opacity:0;cursor:pointer;height:0;width:0}.check-container.sc-ir-guest-info .checkmark.sc-ir-guest-info{position:relative;top:0;left:0;height:20px;width:20px;border:1px solid #cacfe7;border-radius:4px;transition:all 0.3s ease}.check-container.sc-ir-guest-info input.sc-ir-guest-info:checked~.checkmark.sc-ir-guest-info{background-color:#1e9ff2;border-color:#1e9ff2}.checkmark.sc-ir-guest-info:after{content:'';position:absolute;display:none}.check-container.sc-ir-guest-info input.sc-ir-guest-info:checked~.checkmark.sc-ir-guest-info:after{display:block}.check-label.sc-ir-guest-info{margin-left:10px !important}.check-container.sc-ir-guest-info .checkmark.sc-ir-guest-info:after{left:6px;top:3px;width:6px;height:10px;border:solid white;border-width:0 2px 2px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.ir-card-header.sc-ir-guest-info{width:100%;border-bottom:1px solid #e4e5ec}.close-icon.sc-ir-guest-info{margin:0}.border-theme.sc-ir-guest-info{border:1px solid #cacfe7}.loading-container.sc-ir-guest-info{height:100%;width:100%;display:flex;justify-content:center;align-items:center;margin:0;padding:0}";
const IrGuestInfoStyle0 = irGuestInfoCss;

const sheetCss$2 = ".sc-ir-guest-info-h{height:100%}.sheet-container.sc-ir-guest-info{display:flex !important;flex-direction:column !important;background:white;height:100vh;height:100dvh;gap:1rem;z-index:1000}.sheet-container.sc-ir-guest-info{height:-webkit-fill-available;height:100vh}.sheet-footer.sc-ir-guest-info{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-guest-info{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-guest-info{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-guest-info{flex-direction:row;align-items:center}}";
const IrGuestInfoStyle1 = sheetCss$2;

const GuestInfo = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeSideBar = index.createEvent(this, "closeSideBar", 7);
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt", 7);
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
            } }, this.headerShown && index.h("ir-title", { class: "px-1 sheet-header", displayContext: "sidebar", label: locales_store.locales.entries.Lcz_GuestDetails }), index.h("div", { class: this.isInSideBar ? 'sheet-body' : 'card-content collapse show ' }, index.h("div", { class: this.headerShown ? 'card-body px-1 pt-0' : 'pt-0' }, index.h("ir-input-text", { autoValidate: this.autoValidate, label: (_a = locales_store.locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_FirstName, name: "firstName",
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
            }, phone_prefix: this.guest.country_phone_prefix, value: this.guest.mobile, language: this.language, label: (_k = locales_store.locales.entries) === null || _k === void 0 ? void 0 : _k.Lcz_MobilePhone, countries: this.countries }), index.h("div", { class: "mb-2" }, index.h("ir-textarea", { variant: "prepend", onTextChange: e => this.handleInputChange({ notes: e.detail }), value: (_l = this.guest) === null || _l === void 0 ? void 0 : _l.notes, label: (_m = locales_store.locales.entries) === null || _m === void 0 ? void 0 : _m.Lcz_PrivateNote })), index.h("div", { class: 'p-0 m-0' }, index.h("label", { class: `check-container m-0 p-0` }, index.h("input", { class: 'm-0 p-0', type: "checkbox", name: "newsletter", checked: this.guest.subscribe_to_news_letter, onInput: e => this.handleInputChange({ subscribe_to_news_letter: e.target.checked }) }), index.h("span", { class: "checkmark m-0 p-0" }), index.h("span", { class: 'm-0 p-0  check-label' }, locales_store.locales.entries.Lcz_Newsletter)), !this.isInSideBar && (index.h(index.Fragment, null, index.h("hr", null), index.h("ir-button", { isLoading: this.isLoading, btn_disabled: this.isLoading, btn_styles: "d-flex align-items-center justify-content-center", text: locales_store.locales.entries.Lcz_Save, onClickHandler: this.editGuest.bind(this), color: "btn-primary" })))))), this.isInSideBar && (index.h("div", { class: 'sheet-footer' }, index.h("ir-button", { "data-testid": "cancel", onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill m-0 p-0", btn_styles: "w-100 m-0  justify-content-center align-items-center", btn_color: "secondary", text: locales_store.locales.entries.Lcz_Cancel }), index.h("ir-button", { "data-testid": "save", isLoading: irInterceptor_store.isRequestPending('/Edit_Exposed_Guest'), btn_disabled: this.isLoading, class: "flex-fill m-0", btn_type: "submit", btn_styles: "w-100 m-0  justify-content-center align-items-center", text: locales_store.locales.entries.Lcz_Save })))));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
GuestInfo.style = IrGuestInfoStyle0 + IrGuestInfoStyle1;

const irPaymentActionsCss = ".sc-ir-payment-actions-h{display:block}.sc-ir-payment-actions-h p.sc-ir-payment-actions,.sc-ir-payment-actions-h div.sc-ir-payment-actions,.sc-ir-payment-actions-h span.sc-ir-payment-actions,.sc-ir-payment-actions-h ir-icons.sc-ir-payment-actions{box-sizing:border-box;padding:0;margin:0}.action-container.sc-ir-payment-actions td.sc-ir-payment-actions{padding:0px 0.5rem;padding-bottom:0.5rem}.action-container.sc-ir-payment-actions .amount_action.sc-ir-payment-actions{padding-inline-start:0}.overdue_action.sc-ir-payment-actions{color:#ff4961;border-radius:0.25rem;display:flex;align-items:center;gap:0.5rem}.future_action.sc-ir-payment-actions{border-radius:0.25rem;color:#1e9ff2;display:flex;align-items:center;justify-content:start;gap:0.5rem}.date_action.sc-ir-payment-actions{font-weight:500}.amount_action.sc-ir-payment-actions{font-weight:600}";
const IrPaymentActionsStyle0 = irPaymentActionsCss;

const IrPaymentActions = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.generatePayment = index.createEvent(this, "generatePayment", 7);
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
            return (index.h("tr", { class: 'action-container' }, index.h("td", { class: 'amount_action' }, utils.formatAmount(pa.currency.symbol, pa.amount)), index.h("td", { class: 'date_action' }, utils.hooks(new Date(pa.due_on)).format('ddd, DD MMM YYYY')), pa.amount > 0 && (index.h("td", null, index.h("ir-button", { btn_color: "outline", text: 'Pay', size: "sm", onClickHandler: () => this.generatePayment.emit(pa) }))), pa.type === 'overdue' && pa.amount > 0 && (index.h("td", null, index.h("div", { class: 'overdue_action' }, index.h("svg", { height: 16, width: 16, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, index.h("path", { fill: "currentColor", d: "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" })), index.h("span", null, "Overdue")))), pa.type === 'future' && pa.amount > 0 && (index.h("td", null, index.h("div", { class: 'future_action ' }, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", height: 16, width: 16, viewBox: "0 0 512 512" }, index.h("path", { fill: "currentColor", d: "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" })), index.h("span", null, utils.hooks(new Date(pa.due_on)).isSame(new Date()) ? 'Today' : 'Future'))))));
        })))));
    }
};
IrPaymentActions.style = IrPaymentActionsStyle0;

const irPaymentDetailsCss = ".sc-ir-payment-details-h{font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}.sc-ir-payment-details-h *.sc-ir-payment-details{font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}.sm-margin-right.sc-ir-payment-details{margin-right:5px !important;background:#000}.action_icons.sc-ir-payment-details{width:60px}.w-60.sc-ir-payment-details{width:100px;padding:0 5px}.payments-height.sc-ir-payment-details{height:30px}.payment_date.sc-ir-payment-details{width:100px}.iframeHeight.sc-ir-payment-details{height:max-content;height:22.5rem}.designation.sc-ir-payment-details{width:120px}.total-cost-container.sc-ir-payment-details{background:#7cbebe;color:white;padding:0.5rem;border-radius:5px}.payment-actions.sc-ir-payment-details{display:flex;align-items:center;justify-content:center;height:100%;gap:0.5rem}.payment_action_beta_container.sc-ir-payment-details{border:1px solid var(--red);position:relative;padding:4px;box-sizing:border-box;border-radius:4px}.beta.sc-ir-payment-details{position:absolute;top:4px;background:var(--red);color:white;padding:0.2rem 0.3rem;font-size:12px;border-radius:4px;right:4px;margin:0}";
const IrPaymentDetailsStyle0 = irPaymentDetailsCss;

const IrPaymentDetails = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.resetBookingEvt = index.createEvent(this, "resetBookingEvt", 7);
        this.resetExposedCancelationDueAmount = index.createEvent(this, "resetExposedCancelationDueAmount", 7);
        this.toast = index.createEvent(this, "toast", 7);
        this.newTableRow = false;
        this.collapsedPayment = false;
        this.collapsedGuarantee = false;
        this.flag = false;
        this.confirmModal = false;
        this.paymentDetailsUrl = '';
        this.paymentExceptionMessage = '';
        this.modal_mode = null;
        this.paymentService = new payment_service.PaymentService();
        this.bookingService = new booking_service.BookingService();
        this.paymentBackground = 'white';
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
            date: utils.hooks().format('YYYY-MM-DD'),
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
        var _a, _b, _c, _d;
        return (index.h(index.Fragment, null, index.h("tr", null, index.h("td", { class: 'border payments-height border-light border-bottom-0 text-center' }, rowMode === 'normal' ? (index.h("span", { class: "sm-padding-left" }, functions._formatDate(item.date))) : (index.h("ir-date-picker", { date: ((_a = this.itemToBeAdded) === null || _a === void 0 ? void 0 : _a.date) ? new Date(this.itemToBeAdded.date) : new Date(), minDate: utils.hooks().add(-2, 'months').startOf('month').format('YYYY-MM-DD'),
            // singleDatePicker
            // autoApply
            class: "d-flex justify-content-center", onDateChanged: this.handleDateChange.bind(this) }, index.h("input", { type: "text", slot: "trigger", value: functions._formatDate((_b = this.itemToBeAdded) === null || _b === void 0 ? void 0 : _b.date), class: "text-center  form-control flex-grow-1 w-100", style: { border: '0', marginLeft: 'auto', marginRight: 'auto', width: '100%' } })))), index.h("td", { class: 'border payments-height border-light border-bottom-0 text-center ' }, rowMode === 'normal' ? (index.h("span", { class: "sm-padding-right" }, utils.formatAmount(this.bookingDetails.currency.symbol, item.amount))) : (
        // <input
        //   type="text"
        //   class="border-0 text-center form-control py-0 m-0 w-100"
        //   value={this.itemToBeAdded.amount}
        //   onBlur={e => {
        //     (e.target as HTMLInputElement).value = Number(this.itemToBeAdded.amount).toFixed(2);
        //   }}
        //   onInput={event => this.handlePaymentInputChange('amount', +(event.target as HTMLInputElement).value, event)}
        // ></input>
        index.h("ir-price-input", { value: (_c = this.itemToBeAdded.amount) === null || _c === void 0 ? void 0 : _c.toString(), onTextChange: e => this.handlePaymentInputChange('amount', Number(e.detail), e), inputStyle: "border-0 rounded-0 text-center py-0 m-0 w-100" }))), index.h("td", { class: 'border payments-height border-light border-bottom-0 text-center' }, rowMode === 'normal' ? (index.h("span", { class: "sm-padding-left" }, item.designation)) : (index.h("input", { class: "border-0 w-100 form-control py-0 m-0", onInput: event => this.handlePaymentInputChange('designation', event.target.value), type: "text" }))), index.h("td", { rowSpan: 2, class: 'border payments-height border-light border-bottom-0 text-center' }, index.h("div", { class: 'payment-actions' }, rowMode === 'add' && (index.h("ir-button", { variant: "icon", icon_name: "save", style: icons.colorVariants.secondary, isLoading: rowMode === 'add' && irInterceptor_store.isRequestPending('/Do_Payment'), class: 'm-0', onClickHandler: () => {
                this._processPaymentSave();
            } })), index.h("ir-button", { variant: "icon", icon_name: "trash", style: icons.colorVariants.danger, isLoading: ((_d = this.toBeDeletedItem) === null || _d === void 0 ? void 0 : _d.id) === (item === null || item === void 0 ? void 0 : item.id) && irInterceptor_store.isRequestPending('/Cancel_Payment'), onClickHandler: rowMode === 'add'
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
    formatCurrency(amount, currency, locale = 'en-US') {
        if (!currency) {
            return;
        }
        if (amount >= 0) {
            return new Intl.NumberFormat(locale, {
                style: 'currency',
                currency,
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            }).format(amount);
        }
        return;
    }
    bookingGuarantee() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13;
        const paymentMethod = this.bookingDetails.is_direct ? this.getPaymentMethod() : null;
        if (this.bookingDetails.is_direct && !paymentMethod && !this.bookingDetails.guest.cci) {
            return null;
        }
        return (index.h("div", { class: "mb-1" }, index.h("div", { class: "d-flex align-items-center" }, index.h("span", { class: "mr-1 font-medium" }, locales_store.locales.entries.Lcz_BookingGuarantee, !!paymentMethod && index.h("span", null, ": ", paymentMethod)), (!this.bookingDetails.is_direct || (this.bookingDetails.is_direct && this.bookingDetails.guest.cci)) && (index.h("ir-button", { id: "drawer-icon", "data-toggle": "collapse", "data-target": `.guarrantee`, "aria-expanded": this.collapsedGuarantee ? 'true' : 'false', "aria-controls": "myCollapse", class: "sm-padding-right pointer", variant: "icon", icon_name: "credit_card", onClickHandler: async () => {
                if (!this.bookingDetails.is_direct && this.bookingDetails.channel_booking_nbr && !this.bookingDetails.guest.cci && !this.collapsedGuarantee) {
                    this.paymentDetailsUrl = await this.bookingService.getPCICardInfoURL(this.bookingDetails.booking_nbr);
                }
                this.collapsedGuarantee = !this.collapsedGuarantee;
            } }))), index.h("div", { class: "collapse guarrantee " }, this.bookingDetails.guest.cci ? ([
            index.h("div", null, ((_b = (_a = this.bookingDetails) === null || _a === void 0 ? void 0 : _a.guest) === null || _b === void 0 ? void 0 : _b.cci) && 'Card:', " ", index.h("span", null, ((_e = (_d = (_c = this.bookingDetails) === null || _c === void 0 ? void 0 : _c.guest) === null || _d === void 0 ? void 0 : _d.cci) === null || _e === void 0 ? void 0 : _e.nbr) || ''), " ", ((_h = (_g = (_f = this.bookingDetails) === null || _f === void 0 ? void 0 : _f.guest) === null || _g === void 0 ? void 0 : _g.cci) === null || _h === void 0 ? void 0 : _h.expiry_month) && 'Expiry: ', index.h("span", null, ' ', ((_l = (_k = (_j = this.bookingDetails) === null || _j === void 0 ? void 0 : _j.guest) === null || _k === void 0 ? void 0 : _k.cci) === null || _l === void 0 ? void 0 : _l.expiry_month) || '', " ", ((_p = (_o = (_m = this.bookingDetails) === null || _m === void 0 ? void 0 : _m.guest) === null || _o === void 0 ? void 0 : _o.cci) === null || _p === void 0 ? void 0 : _p.expiry_year) && '/' + ((_s = (_r = (_q = this.bookingDetails) === null || _q === void 0 ? void 0 : _q.guest) === null || _r === void 0 ? void 0 : _r.cci) === null || _s === void 0 ? void 0 : _s.expiry_year))),
            index.h("div", null, ((_u = (_t = this.bookingDetails) === null || _t === void 0 ? void 0 : _t.guest) === null || _u === void 0 ? void 0 : _u.cci.holder_name) && 'Name:', " ", index.h("span", null, ((_x = (_w = (_v = this.bookingDetails) === null || _v === void 0 ? void 0 : _v.guest) === null || _w === void 0 ? void 0 : _w.cci) === null || _x === void 0 ? void 0 : _x.holder_name) || ''), ' ', ((_0 = (_z = (_y = this.bookingDetails) === null || _y === void 0 ? void 0 : _y.guest) === null || _z === void 0 ? void 0 : _z.cci) === null || _0 === void 0 ? void 0 : _0.cvc) && '- CVC:', " ", index.h("span", null, " ", ((_3 = (_2 = (_1 = this.bookingDetails) === null || _1 === void 0 ? void 0 : _1.guest) === null || _2 === void 0 ? void 0 : _2.cci) === null || _3 === void 0 ? void 0 : _3.cvc) || '')),
        ]) : this.paymentDetailsUrl ? (index.h("iframe", { src: this.paymentDetailsUrl, width: "100%", class: "iframeHeight", frameborder: "0", name: "payment" })) : (index.h("div", { class: "text-center" }, this.paymentExceptionMessage))), !this.bookingDetails.is_direct && this.bookingDetails.ota_guarante && (index.h("div", null, index.h("ir-label", { content: ((_4 = this.bookingDetails.ota_guarante) === null || _4 === void 0 ? void 0 : _4.card_type) + `${((_5 = this.bookingDetails.ota_guarante) === null || _5 === void 0 ? void 0 : _5.is_virtual) ? ' (virtual)' : ''}`, labelText: `${locales_store.locales.entries.Lcz_CardType}:` }), index.h("ir-label", { content: (_6 = this.bookingDetails.ota_guarante) === null || _6 === void 0 ? void 0 : _6.cardholder_name, labelText: `${locales_store.locales.entries.Lcz_CardHolderName}:` }), index.h("ir-label", { content: (_7 = this.bookingDetails.ota_guarante) === null || _7 === void 0 ? void 0 : _7.card_number, labelText: `${locales_store.locales.entries.Lcz_CardNumber}:` }), index.h("ir-label", { content: this.formatCurrency(utils.toFloat(Number((_9 = (_8 = this.bookingDetails.ota_guarante) === null || _8 === void 0 ? void 0 : _8.meta) === null || _9 === void 0 ? void 0 : _9.virtual_card_current_balance), Number((_11 = (_10 = this.bookingDetails.ota_guarante) === null || _10 === void 0 ? void 0 : _10.meta) === null || _11 === void 0 ? void 0 : _11.virtual_card_decimal_places)), (_13 = (_12 = this.bookingDetails.ota_guarante) === null || _12 === void 0 ? void 0 : _12.meta) === null || _13 === void 0 ? void 0 : _13.virtual_card_currency_code), labelText: `${locales_store.locales.entries.Lcz_CardBalance}:` })))));
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
            index.h("div", { class: "card m-0" }, index.h("div", { class: "p-1" }, this.bookingDetails.financial.gross_cost > 0 && this.bookingDetails.financial.gross_cost !== null && (index.h("div", { class: "mb-2 h4 total-cost-container" }, locales_store.locales.entries.Lcz_TotalCost, ": ", index.h("span", null, utils.formatAmount(this.bookingDetails.currency.symbol, this.bookingDetails.financial.gross_cost)))), index.h("div", { class: " h4" }, locales_store.locales.entries.Lcz_Balance, ":", ' ', index.h("span", { class: "danger font-weight-bold" }, utils.formatAmount(this.bookingDetails.currency.symbol, this.bookingDetails.financial.due_amount))), index.h("div", { class: "mb-2 h4" }, locales_store.locales.entries.Lcz_Collected, ":", ' ', index.h("span", { class: "" }, utils.formatAmount(this.bookingDetails.currency.symbol, this.bookingDetails.financial.payments ? this.bookingDetails.financial.payments.reduce((prev, curr) => prev + curr.amount, 0) : 0))), this.bookingGuarantee(), ((_a = this.paymentActions) === null || _a === void 0 ? void 0 : _a.filter(pa => pa.amount !== 0).length) > 0 && this.bookingDetails.is_direct && (index.h("div", { class: "payment_action_beta_container" }, index.h("p", { class: "beta" }, "Beta"), index.h("ir-payment-actions", { paymentAction: this.paymentActions, booking: this.bookingDetails }))), index.h("div", { class: "mt-2 d-flex  flex-column rounded payment-container" }, index.h("div", { class: "d-flex align-items-center justify-content-between" }, index.h("span", { class: 'font-medium' }, locales_store.locales.entries.Lcz_Payments, " history"), index.h("ir-button", { id: "add-payment", variant: "icon", icon_name: "square_plus", style: { '--icon-size': '1.5rem' }, onClickHandler: () => {
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
                const date = utils.hooks(dateStr, 'YYYY-MM-DD', true);
                const min = utils.hooks(minDate, 'YYYY-MM-DD', true);
                const max = utils.hooks(maxDate, 'YYYY-MM-DD', true);
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

const sheetCss$1 = ".sc-ir-pickup-h{height:100%}.sheet-container.sc-ir-pickup{display:flex !important;flex-direction:column !important;background:white;height:100vh;height:100dvh;gap:1rem;z-index:1000}.sheet-container.sc-ir-pickup{height:-webkit-fill-available;height:100vh}.sheet-footer.sc-ir-pickup{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-pickup{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-pickup{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-pickup{flex-direction:row;align-items:center}}";
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
        return (index.h("form", { key: 'e97d337b9a21f2e711f6a977f520036b36366b8f', class: 'sheet-container', onSubmit: async (e) => {
                e.preventDefault();
                await this.savePickup();
            } }, index.h("ir-title", { key: 'c0a3f204883851be6f497a5ad819cc6ded7619f9', class: "px-1 sheet-header", onCloseSideBar: () => this.closeModal.emit(null), label: locales_store.locales.entries.Lcz_Pickup, displayContext: "sidebar" }), index.h("section", { key: '6c895c20060c9d6ed1b4104d5f9cdff69143e953', class: 'px-1 sheet-body' }, index.h("ir-select", { key: '3e681bdbcdedc720d01adf50e121019ee2fed9c0', testId: "pickup_location", selectedValue: this.pickupData.location, selectContainerStyle: "mb-1", onSelectChange: this.handleLocationChange.bind(this), firstOption: locales_store.locales.entries.Lcz_Pickup_NoThankYou, class: 'm-0 mb-1', LabelAvailable: false, data: this.pickupService.getAvailableLocations(locales_store.locales.entries.Lcz_Pickup_YesFrom) }), this.pickupData.location > 0 && (index.h("div", { key: '7dc91ed82e321eb618c2bfdfb51ed30c730a8c64', class: "m-0 p-0", "data-testid": "pickup_body" }, index.h("div", { key: 'bab235516bd0f52f5dd1dcec28c05c3f63b1f4cd', class: 'd-flex' }, index.h("div", { key: 'd7b3639627d7b4c69d98a96e50b08588a552c45b', class: "form-group  mr-1" }, index.h("div", { key: 'ee48067dc5bdea1aa3c741f7481ab276ad68e359', class: "input-group row m-0" }, index.h("div", { key: '7d676169869b485e74aa4a1c90c12e69e29efab9', class: `input-group-prepend col-5 p-0 text-dark border-0` }, index.h("label", { key: '2dec3d49a845b60f27e682e1af7d53f8683f0543', class: `input-group-text  flex-grow-1 text-dark border-theme ` }, locales_store.locales.entries.Lcz_ArrivalDate)), index.h("div", { key: '27cd44f4e6d64cce217f4057ee2dd09bdf34a038', class: "form-control  form-control-md col-7 d-flex align-items-center px-0 mx-0", style: { border: '0' } }, index.h("ir-date-picker", { key: '98c6eca97b1148df1fcde173f4dc6ca1bb6cbd8f', "data-testid": "pickup_arrival_date", date: this.pickupData.arrival_date, minDate: this.bookingDates.from, maxDate: (_a = this.bookingDates) === null || _a === void 0 ? void 0 : _a.to, emitEmptyDate: true, "aria-invalid": ((_b = this.errors) === null || _b === void 0 ? void 0 : _b.arrival_date) && !this.pickupData.arrival_date ? 'true' : 'false', onDateChanged: evt => {
                var _a;
                this.updatePickupData('arrival_date', (_a = evt.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD'));
            } }, index.h("input", { key: 'f74e1a71e0535b0e8355927d3e2d26a27d141a96', type: "text", slot: "trigger", value: this.pickupData.arrival_date ? utils.hooks(this.pickupData.arrival_date).format('MMM DD, YYYY') : null, class: `form-control input-sm ${((_c = this.errors) === null || _c === void 0 ? void 0 : _c.arrival_date) && !this.pickupData.arrival_date ? 'border-danger' : ''} text-center`, style: { borderTopLeftRadius: '0', borderBottomLeftRadius: '0', width: '100%' } }))))), index.h("ir-input-text", { key: '9730b0336326f20ebd827758e18d29091a2b4719', autoValidate: this.autoValidate, wrapKey: "arrival_time", testId: "pickup_arrival_time", error: (_d = this.errors) === null || _d === void 0 ? void 0 : _d.arrival_time, value: this.pickupData.arrival_time, zod: this.pickupSchema.pick({ arrival_time: true }), label: locales_store.locales.entries.Lcz_Time, inputStyles: "col-sm-4", "data-state": this.cause === 'arrival_time' ? 'error' : '', mask: this.arrival_time_mask, onTextChange: e => this.updatePickupData('arrival_time', e.detail) })), index.h("ir-input-text", { key: '81649cbe9cfd80e75aab44f26099cc8629560088', wrapKey: "flight_details", zod: this.pickupSchema.pick({ flight_details: true }), autoValidate: this.autoValidate, testId: "pickup_flight_details", value: this.pickupData.flight_details, label: locales_store.locales.entries.Lcz_FlightDetails, onTextChange: e => this.updatePickupData('flight_details', e.detail), placeholder: "", error: (_e = this.errors) === null || _e === void 0 ? void 0 : _e.flight_details }), index.h("ir-select", { key: '7826ed9135e1bf29b65cd5d5e70a4f2d2d986345', testId: "pickup_vehicle_type_code", selectContainerStyle: "mb-1", error: this.cause === 'vehicle_type_code', onSelectChange: this.handleVehicleTypeChange.bind(this), firstOption: locales_store.locales.entries.Lcz_Select, selectedValue: this.pickupData.vehicle_type_code, class: 'm-0', LabelAvailable: false, data: this.allowedOptionsByLocation.map(option => ({
                text: option.vehicle.description,
                value: option.vehicle.code,
            })) }), index.h("div", { key: '0464b7f147d30912c855ec592dffad16d584159d', class: 'd-flex flex-column flex-md-row' }, index.h("ir-select", { key: '37db97af19f6b7039403a7414e3bf59700c57425', showFirstOption: false, testId: "pickup_number_of_vehicles", labelBorder: "theme", selectContainerStyle: "mb-1", onSelectChange: this.handleVehicleQuantityChange.bind(this), selectedValue: this.pickupData.number_of_vehicles, error: this.cause === 'number_of_vehicles', labelWidth: 7, class: 'm-0  mb-md-0 mr-md-1 flex-fill', label: locales_store.locales.entries.Lcz_NbrOfVehicles, data: this.vehicleCapacity.map(i => ({
                text: i,
                value: i,
            })) }), index.h("div", { key: '2660fc9876293a95c70175929c6becdfd763c055', class: "price-input-container" }, index.h("ir-price-input", { key: '90ac971d4643253871a82927ef6fc7d48701e719', readOnly: true, label: `${locales_store.locales.entries.Lcz_DueUponBooking}`, value: this.pickupData.due_upon_booking, currency: this.pickupData.currency.symbol })))))), index.h("div", { key: '4752763f92bfcd247d7f1eea9172f0c359d9d899', class: 'sheet-footer' }, index.h("ir-button", { key: 'd3113f7ad6be750e5257224532a5dfd5e57bea44', onClick: () => this.closeModal.emit(null), btn_styles: "justify-content-center", class: `flex-fill`, text: locales_store.locales.entries.Lcz_Cancel, btn_color: "secondary" }), (this.defaultPickupData || this.pickupData.location !== -1) && (index.h("ir-button", { key: '7aa1d870e2fbe1d787c02eacfec98adac020e297', btn_styles: "justify-content-center align-items-center", class: 'flex-fill', isLoading: this.isLoading, text: locales_store.locales.entries.Lcz_Save, btn_color: "primary", btn_type: "submit" })))));
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
        return (index.h(index.Host, null, index.h("div", { class: "mb-1" }, index.h("div", { class: 'd-flex w-100 mb-1 align-items-center justify-content-between' }, index.h("p", { class: 'font-size-large p-0 m-0 ' }, locales_store.locales.entries.Lcz_Pickup), index.h("ir-button", { id: "pickup", "data-testid": "new_pickup_btn", variant: "icon", icon_name: "edit", style: Object.assign(Object.assign({}, icons.colorVariants.secondary), { '--icon-size': '1.5rem' }) })), this.booking.pickup_info && (index.h("div", { class: 'card' }, index.h("div", { class: 'p-1' }, index.h("div", { class: 'd-flex align-items-center py-0 my-0 pickup-margin' }, index.h("p", { class: 'font-weight-bold mr-1 py-0 my-0' }, locales_store.locales.entries.Lcz_Date, ": ", index.h("span", { class: 'font-weight-normal' }, utils.hooks(this.booking.pickup_info.date, 'YYYY-MM-DD').format('MMM DD, YYYY'))), this.booking.pickup_info.hour && this.booking.pickup_info.minute && (index.h("p", { class: 'font-weight-bold flex-fill py-0 my-0' }, locales_store.locales.entries.Lcz_Time, ":", index.h("span", { class: 'font-weight-normal' }, " ", functions._formatTime(this.booking.pickup_info.hour.toString(), this.booking.pickup_info.minute.toString())))), index.h("p", { class: 'font-weight-bold py-0 my-0' }, locales_store.locales.entries.Lcz_DueUponBooking, ":", ' ', index.h("span", { class: 'font-weight-normal' }, this.booking.pickup_info.currency.symbol, this.booking.pickup_info.total))), index.h("p", { class: 'font-weight-bold py-0 my-0' }, locales_store.locales.entries.Lcz_FlightDetails, ":", index.h("span", { class: 'font-weight-normal' }, " ", `${this.booking.pickup_info.details}`)), index.h("p", { class: 'py-0 my-0 pickup-margin' }, `${this.booking.pickup_info.selected_option.vehicle.description}`), index.h("p", { class: 'font-weight-bold py-0 my-0 pickup-margin' }, locales_store.locales.entries.Lcz_NbrOfVehicles, ":", index.h("span", { class: 'font-weight-normal' }, " ", `${this.booking.pickup_info.nbr_of_units}`)), index.h("p", { class: 'small py-0 my-0 pickup-margin' }, calendarData.calendar_data.pickup_service.pickup_instruction.description, calendarData.calendar_data.pickup_service.pickup_cancelation_prepayment.description)))))));
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
        return (index.h("div", { key: '098ee9687a1e9d01d799ccf2a4e3c0e9b0941f53', class: "p-1" }, index.h("h3", { key: '03699b465ba147fb69e6ad7ba94ff02c8f06f55d', class: " text-left mb-1 dialog-title " }, locales_store.locales.entries.Lcz_PMS_Logs), irInterceptor_store.isRequestPending('/Get_Exposed_PMS_Logs') ? (index.h("div", { class: 'd-flex align-items-center justify-content-center dialog-container-height' }, index.h("ir-spinner", null))) : (index.h("div", { class: 'dialog-container-height' }, index.h("div", { class: "d-flex align-items-center ", style: { paddingBottom: '0.5rem' } }, index.h("p", { class: "list-title p-0 m-0" }, locales_store.locales.entries.Lcz_SentAt), ((_a = this.pmsLogs) === null || _a === void 0 ? void 0 : _a.sent_date) ? (index.h("p", { class: "list-item" }, (_b = this.pmsLogs) === null || _b === void 0 ? void 0 :
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
        return (index.h("div", { key: '0b05b7ab21509929338b68966b3ab2ec505f2487', class: "card" }, index.h("div", { key: 'a1a8e4214a5ff3b8ce516fb651d3c7076b804c25', class: "p-1" }, index.h("p", { key: '9af68fdb483d3c0bcf137b5b37b147d94b8442d8' }, this.booking.property.name || ''), index.h("ir-label", { key: '777ae4cd6a12b6c82490bdc73c0899e90ed0005f', labelText: `${locales_store.locales.entries.Lcz_Source}:`, content: this.booking.origin.Label, image: { src: this.booking.origin.Icon, alt: this.booking.origin.Label } }), index.h("ir-label", { key: 'f75815818fad76425652e036952f544e67610c7f', renderContentAsHtml: true, labelText: `${locales_store.locales.entries.Lcz_BookedOn}:`, content: `${functions._formatDate(this.booking.booked_on.date)}&nbsp&nbsp&nbsp&nbsp${functions._formatTime(this.booking.booked_on.hour.toString(), this.booking.booked_on.minute.toString())}` }), index.h("ir-label", { key: '24bf5e246335d6bc68e4fe6ddefba6a41195f1cf', labelText: `${locales_store.locales.entries.Lcz_BookedBy}:`, content: `${this.booking.guest.first_name} ${this.booking.guest.last_name}` }, ((_a = this.booking.guest) === null || _a === void 0 ? void 0 : _a.nbr_confirmed_bookings) > 1 && !this.booking.agent && (index.h("div", { key: '8f95ee2392e43c663f80d26a657d7e486d1bf6e1', class: 'm-0 p-0', slot: "prefix" }, index.h("ir-tooltip", { key: '164e823047cf03b97acfcefc6025e3747255e0ae', message: `${locales_store.locales.entries.Lcz_BookingsNbr}`.replace('%1', this.booking.guest.nbr_confirmed_bookings.toString()), customSlot: true }, index.h("div", { key: '61f090b34af81dbcf181cb1f2138188fe0b72819', class: "d-flex align-items-center m-0 p-0", slot: "tooltip-trigger", style: { gap: '0.25rem' } }, index.h("p", { key: 'b1afe01d322526abe5eeb828088edb43634710cc', class: 'p-0 m-0', style: { color: '#FB0AAD' } }, this.booking.guest.nbr_confirmed_bookings), index.h("ir-icons", { key: 'c8082b2af5e1b1512d2fef5a39d0da4d3bf828b8', style: { '--icon-size': '1rem' }, color: "#FB0AAD", name: "heart-fill" }))))), index.h("ir-button", { key: '6a30adc3cb73e05ccbbc3e3928f12d7dd1175548', slot: "suffix", variant: "icon", icon_name: 'edit', style: Object.assign(Object.assign({}, icons.colorVariants.secondary), { '--icon-size': '1.1rem' }), onClickHandler: e => this.handleEditClick(e, 'guest') })), this.booking.guest.mobile && index.h("ir-label", { key: '30e7fdbb43f201c82dfde85657db1dc78e3e1bd6', labelText: `${locales_store.locales.entries.Lcz_Phone}:`, content: this.renderPhoneNumber() }), !this.booking.agent && index.h("ir-label", { key: 'ad8d01effd359a16a906bcb45d536f98012e4d44', labelText: `${locales_store.locales.entries.Lcz_Email}:`, content: this.booking.guest.email }), this.booking.guest.alternative_email && index.h("ir-label", { key: 'e3f7afc3853aa5c282974531e6e8736e94f8bd43', labelText: `${locales_store.locales.entries.Lcz_AlternativeEmail}:`, content: this.booking.guest.alternative_email }), ((_c = (_b = this.booking) === null || _b === void 0 ? void 0 : _b.guest) === null || _c === void 0 ? void 0 : _c.address) && index.h("ir-label", { key: 'cc366cda9b7cf1ea7310ffd4cb508bdb900b2888', labelText: `${locales_store.locales.entries.Lcz_Address}:`, content: this.booking.guest.address }), this.userCountry && (index.h("ir-label", { key: '27e276c78b53ed1f9d3e7cb609cb67a1479330a9', labelText: `${locales_store.locales.entries.Lcz_Country}:`, isCountryImage: true, content: this.userCountry.name, image: { src: this.userCountry.flag, alt: this.userCountry.name } })), ((_d = this.booking.guest) === null || _d === void 0 ? void 0 : _d.notes) && index.h("ir-label", { key: 'f02178be26efa96c77214a217b2214e921bc873c', display: "inline", labelText: `${locales_store.locales.entries.Lcz_GuestPrivateNote}:`, content: (_e = this.booking.guest) === null || _e === void 0 ? void 0 : _e.notes }), this.booking.is_direct && index.h("ir-label", { key: '23277c04ebc4f7439aec500786198b2fa8fa24f4', labelText: `${locales_store.locales.entries.Lcz_ArrivalTime}:`, content: this.booking.arrival.description }), this.booking.promo_key && index.h("ir-label", { key: 'a8e6b199934e7ac32fba182b77af3d9f75b6c8f7', labelText: `${locales_store.locales.entries.Lcz_Coupon}:`, content: this.booking.promo_key }), this.booking.is_in_loyalty_mode && !this.booking.promo_key && (index.h("div", { key: 'a2f6f6d557f37e5b511b539134b121ac91079a27', class: "d-flex align-items-center" }, index.h("svg", { key: 'e0f40acd2382539245a0ecd6ae35bb855b52ffbe', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: '7997a8f6020748157d606fa4316e6e31ae926e9f', fill: "#fc6c85", d: "M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" })), index.h("p", { key: '7dfdbb2686c01ca0d07689c4369981f160144573', class: "m-0 p-0 ml-1" }, locales_store.locales.entries.Lcz_LoyaltyDiscountApplied))), this.booking.is_direct ? (index.h("ir-label", { labelText: `${locales_store.locales.entries.Lcz_GuestRemark}:`, display: "inline", content: this.booking.remark })) : (index.h("ota-label", { class: 'm-0 p-0', label: `${locales_store.locales.entries.Lcz_ChannelNotes || 'Channel notes'}:`, remarks: this.booking.ota_notes, maxVisibleItems: (_f = this.booking.ota_notes) === null || _f === void 0 ? void 0 : _f.length })), index.h("div", { key: '840bc48c9b3f68ba620f327793efdf46804747e3', class: "d-flex align-items-center justify-content-between" }, index.h("ir-label", { key: 'ebcd4094f75bfd807312ba1c000388e639bc0ff7', labelText: `${locales_store.locales.entries.Lcz_BookingPrivateNote}:`, placeholder: locales_store.locales.entries.Lcz_VisibleToHotelOnly, content: privateNote, display: privateNote ? 'inline' : 'flex' }), index.h("ir-button", { key: 'ad73db2f5a02ce6a6c0a3eaef0f7643d29714338', variant: "icon", icon_name: "edit", style: icons.colorVariants.secondary, onClickHandler: e => this.handleEditClick(e, 'extra_note') })))));
    }
};
IrReservationInformation.style = IrReservationInformationStyle0;

const irRoomCss = ".light-blue-bg.sc-ir-room{background:#acecff;padding:0.1rem 0.3rem;border-radius:5px;display:block;max-width:100px;box-sizing:border-box;display:inline-block;overflow:hidden;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:default}.room_statements.sc-ir-room{display:block;width:100%}.room_statements.sc-ir-room{display:block;width:100%}.room_statements.sc-ir-room span.sc-ir-room{display:inline;white-space:normal;line-height:1.5;word-break:break-word}.room_statements.sc-ir-room b.sc-ir-room{display:inline;margin-right:5px}.payment-container.sc-ir-room{position:absolute;right:1rem;height:fit-content}.sc-ir-room-h{position:relative}.sm-mr.sc-ir-room{margin-right:3px}.subtotal_row.sc-ir-room{padding-top:8px;font-weight:600}.room_actions_btns.sc-ir-room{gap:0.5rem}.night-cost.sc-ir-room{color:#7cbebe}.room_actions_btns.sc-ir-room{white-space:nowrap;width:max-content}.room_actions_btns.sc-ir-room{flex:1 1 0%;display:flex;justify-content:flex-end}.mx-0-5.sc-ir-room{margin-left:2px !important;margin-right:2px !important}.tax-width.sc-ir-room{font-size:10px}.sm-mb-1.sc-ir-room{margin-bottom:5px !important}.sm-mt-1.sc-ir-room{margin-top:5px !important}.mx-01.sc-ir-room{--m:5px;margin-right:var(--m) !important;margin-left:var(--m) !important}";
const IrRoomStyle0 = irRoomCss;

const IrRoom = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.deleteFinished = index.createEvent(this, "deleteFinished", 7);
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
    formatVariation({ adult_nbr, child_nbr }, { infant_nbr }) {
        const adultCount = adult_nbr > 0 ? adult_nbr : 0;
        const childCount = child_nbr > 0 ? child_nbr : 0;
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
        var _a, _b;
        const bed = this.getBedName();
        return (index.h(index.Host, { key: 'da262b842f324eaf501fd4e9119db50468d9cd2a', class: "p-1 d-flex m-0" }, index.h("ir-button", { key: '5f187fd6b8a285d4a745e8cc31626609df3e2e3c', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": `#roomCollapse-${(_a = this.room.identifier) === null || _a === void 0 ? void 0 : _a.split(' ').join('')}`, "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "myCollapse", class: "mr-1", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } }), index.h("div", { key: '4c293c0d05bf4b04dfc1d81d525fa1380e5552b0', class: "flex-fill m-0 " }, index.h("div", { key: 'f6ec2c84a9860a02568473796d6f05424fcb9329', class: "d-flex align-items-start justify-content-between sm-mb-1" }, index.h("p", { key: '8da2abe30f1ad10420aee1b5ea3a5ec6d1c7af46', class: "m-0 p-0" }, index.h("span", { key: '7c8143818126717f12faee55ba9bb88a1026fcad', class: "m-0 p-0", style: { fontWeight: '600' } }, this.myRoomTypeFoodCat || '', ' '), ' ', this.mealCodeName, " ", this.room.rateplan.is_non_refundable && ` - ${locales_store.locales.entries.Lcz_NonRefundable}`, ' '), index.h("div", { key: 'a08398890dea99827576809fb5275ed1a241353a', class: "d-flex m-0 p-0 align-items-center room_actions_btns" }, index.h("span", { key: '8ad4122b6ef9e4cf53a1834815b9675be2a7d267', class: "p-0 m-0 font-weight-bold" }, utils.formatAmount(this.currency, this.room['gross_total'])), this.hasRoomEdit && this.isEditable && (index.h("ir-button", { key: '61c44b5093a6344c1b9f29f2b4babe3b92adb382', id: `roomEdit-${this.room.identifier}`, variant: "icon", icon_name: "edit",
            // class="mx-1"
            style: icons.colorVariants.secondary, onClickHandler: this.handleEditClick.bind(this) })), this.hasRoomDelete && this.isEditable && (index.h("ir-button", { key: '8068a86bf319e442fba22480cb9505cba7ba7995', variant: "icon", onClickHandler: this.openModal.bind(this, 'delete'), id: `roomDelete-${this.room.identifier}`, icon_name: "trash", style: icons.colorVariants.danger })))), index.h("div", { key: '77884b05adfbd4ae38c2cdbd813423a64e9a89e3', class: "d-flex align-items-center sm-mb-1" }, index.h("ir-date-view", { key: '5dc657017219cf8da9e96b0111e95a4d93a2b071', class: "mr-1  flex-grow-1", style: { width: 'fit-content' }, from_date: this.room.from_date, to_date: this.room.to_date, showDateDifference: false }), !calendarData.isSingleUnit(this.room.roomtype.id) && calendarData.calendar_data.is_frontdesk_enabled && this.room.unit && (index.h("div", { key: '310187d095ce1bd4e583ae2d1d805876ffe53c02', class: 'd-flex justify-content-center align-items-center' }, index.h("ir-tooltip", { key: '7e4bb0d02fd4e5711cdff337190a3668875e46a8', message: this.room.unit.name, customSlot: true }, index.h("span", { key: '21272597eda23aa9b798657ee34978b8dbc1a97c', slot: "tooltip-trigger", class: `light-blue-bg  ${this.hasCheckIn || this.hasCheckOut ? 'mr-2' : ''} ` }, this.room.unit.name)))), this.hasCheckIn && (index.h("ir-button", { key: '0f949b7ec16a5e633988afef0f0be3f84ec61d5c', onClickHandler: this.handleCheckIn.bind(this), id: "checkin", btn_color: "outline", size: "sm", text: locales_store.locales.entries.Lcz_CheckIn })), this.hasCheckOut && (index.h("ir-button", { key: '64e3ba1b8cde9e572af3b1ce5117de1775869bf7', onClickHandler: this.openModal.bind(this, 'checkout'), id: "checkout", btn_color: "outline", size: "sm", text: locales_store.locales.entries.Lcz_CheckOut }))), index.h("div", { key: '84d59525b1326dd02b072fd0d7927806ae5f25aa', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("p", { key: '4d76be0cf436ae211ab2a43ec8d8e7435bf442c2', class: "m-0 p-0" }, `${this.mainGuest.first_name || ''} ${this.mainGuest.last_name || ''}`), this.room.rateplan.selected_variation.adult_nbr > 0 &&
            (this.room.unit ? (index.h("ir-tooltip", { message: 'View guests', class: "m-0 p-0", customSlot: true }, index.h("ir-button", { class: "m-0 p-0", slot: "tooltip-trigger", btn_color: "link", renderContentAsHtml: true, onClickHandler: () => this.showGuestModal(), size: "sm", btnStyle: { width: 'fit-content', margin: '0', padding: '0', fontSize: 'inherit', textAlign: 'center', lineHeight: '1.2' }, text: this.formatVariation(this.room.rateplan.selected_variation, this.room.occupancy) }))) : (index.h("span", { innerHTML: this.formatVariation(this.room.rateplan.selected_variation, this.room.occupancy) }))), bed && index.h("p", { key: '4713032c948ee87c69f6fdd7cbff3aca21bb8d3b', class: "m-0 p-0" }, "(", bed, ")")), index.h("div", { key: '7276c10a8e6c1f5540a6be66e1380a262211c625', class: "collapse", id: `roomCollapse-${(_b = this.room.identifier) === null || _b === void 0 ? void 0 : _b.split(' ').join('')}` }, index.h("div", { key: '2af978fd982314147475a467ac31ffdce3f24d80', class: "d-flex sm-mb-1 sm-mt-1" }, index.h("div", { key: 'd708904f34670e44e0e30c62dd6e5b33f59f23c7', class: " sm-padding-top" }, index.h("p", { key: 'd5d9ea3da033e2c9246bdbb02b93b1997758a55b', class: "sm-padding-right", style: { fontWeight: '600' } }, `${locales_store.locales.entries.Lcz_Breakdown}:`)), index.h("div", { key: '6b745105f38783d474d9a35eea8998052c28af43', class: 'flex-fill' }, index.h("table", { key: 'c829d5401281c29f5c2860013275b11437860222' }, this.room.days.length > 0 &&
            this.room.days.map(room => {
                return (index.h("tr", null, index.h("td", { class: 'pr-2 text-right' }, functions._getDay(room.date)), index.h("td", { class: "text-right" }, utils.formatAmount(this.currency, room.amount)), room.cost > 0 && room.cost !== null && index.h("td", { class: "pl-2 text-left night-cost" }, utils.formatAmount(this.currency, room.cost))));
            }), index.h("tr", { key: '1c61084e488c7a4b6e78a264d625d7f678229d32', class: '' }, index.h("th", { key: '5ded8f64da517cd8192fbaebf0f2208362004939', class: "text-right pr-2 subtotal_row" }, locales_store.locales.entries.Lcz_SubTotal), index.h("th", { key: '578965431ad1ae7d979896996aada079caff873b', class: "text-right subtotal_row" }, utils.formatAmount(this.currency, this.room.total)), this.room.gross_cost > 0 && this.room.gross_cost !== null && index.h("th", { key: '8ff9e8cf488d985e534b9cbec6275eb30d5afb0c', class: "pl-2 text-right night-cost" }, utils.formatAmount(this.currency, this.room.cost))), this.booking.is_direct ? (index.h(index.Fragment, null, (() => {
            const filtered_data = calendarData.calendar_data.taxes.filter(tx => tx.pct > 0);
            return filtered_data.map(d => {
                return (index.h("tr", null, index.h("td", { class: "text-right pr-2" }, d.is_exlusive ? locales_store.locales.entries.Lcz_Excluding : locales_store.locales.entries.Lcz_Including, " ", d.name, " (", d.pct, "%)"), index.h("td", { class: "text-right" }, utils.formatAmount(this.currency, (this.room.total * d.pct) / 100)), this.room.gross_cost > 0 && this.room.gross_cost !== null && (index.h("td", { class: "pl-2 text-right night-cost" }, utils.formatAmount(this.currency, (this.room.cost * d.pct) / 100)))));
            });
        })())) : (index.h(index.Fragment, null, (() => {
            const filtered_data = this.room.ota_taxes.filter(tx => tx.amount > 0);
            return filtered_data.map(d => {
                return (index.h("tr", null, index.h("td", { class: "text-right pr-2" }, d.is_exlusive ? locales_store.locales.entries.Lcz_Excluding : locales_store.locales.entries.Lcz_Including, " ", d.name), index.h("td", { class: "text-right" }, d.currency.symbol, d.amount)));
            });
        })()))))), index.h("ir-label", { key: 'e1ada6547e8bf1c80e997225aa5d4f78e8f50679', labelText: `${locales_store.locales.entries.Lcz_SmokingOptions}:`, display: "inline", content: this.getSmokingLabel() }), this.booking.is_direct && (index.h(index.Fragment, { key: 'f5967959b13be950032e5450c03a51f05d198df3' }, this.room.rateplan.cancelation && (index.h("ir-label", { key: '9640c5245ab71346d9afb6176f48e24dc3f94e84', labelText: `${locales_store.locales.entries.Lcz_Cancellation}:`, display: "inline", content: this.room.rateplan.cancelation || '', renderContentAsHtml: true })), this.room.rateplan.guarantee && (index.h("ir-label", { key: '290c465b2d3207ba3667ed0a86c2be87da16f40c', labelText: `${locales_store.locales.entries.Lcz_Guarantee}:`, display: "inline", content: this.room.rateplan.guarantee || '', renderContentAsHtml: true })))), this.room.ota_meta && (index.h("div", { key: 'ea90aa9831b1afeb88b896842eb872001d7be8d0' }, index.h("ir-label", { key: '0be47d4e79af0d5fbfee5d4a97be79478540e1cf', labelText: `${locales_store.locales.entries.Lcz_MealPlan}:`, display: "inline", content: this.room.ota_meta.meal_plan }), index.h("ir-label", { key: 'd0a782aebfdb91997f249938865d609f83b931d9', labelText: `${locales_store.locales.entries.Lcz_Policies}:`, display: "inline", content: this.room.ota_meta.policies }))))), index.h("ir-modal", { key: '28055ec7913c63130bc43dfce504d4829b105177', autoClose: false, ref: el => (this.modal = el), isLoading: this.isLoading, onConfirmModal: this.handleModalConfirmation.bind(this), iconAvailable: true, icon: "ft-alert-triangle danger h1", leftBtnText: locales_store.locales.entries.Lcz_Cancel, rightBtnText: this.modalReason === 'delete' ? locales_store.locales.entries.Lcz_Delete : locales_store.locales.entries.Lcz_Confirm, leftBtnColor: "secondary", rightBtnColor: this.modalReason === 'delete' ? 'danger' : 'primary', modalTitle: locales_store.locales.entries.Lcz_Confirmation, modalBody: this.renderModalMessage() })));
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
    format: date => utils.hooks(date).format('DD/MM/YYYY'),
    parse: str => utils.hooks(str, 'DD/MM/YYYY').toDate(),
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

const sheetCss = ".sc-ir-room-guests-h{height:100%}.sheet-container.sc-ir-room-guests{display:flex !important;flex-direction:column !important;background:white;height:100vh;height:100dvh;gap:1rem;z-index:1000}.sheet-container.sc-ir-room-guests{height:-webkit-fill-available;height:100vh}.sheet-footer.sc-ir-room-guests{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-room-guests{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-room-guests{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-room-guests{flex-direction:row;align-items:center}}";
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
        this.guests = guests.map(g => (Object.assign(Object.assign({}, g), { dob: g.dob ? utils.hooks(new Date(g.dob)).format('DD/MM/YYYY') : '', country_id: g.country ? g.country.id : null })));
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
            ZSharedPersons.parse(this.guests);
            await this.bookingService.handleExposedRoomGuests({
                booking_nbr: this.bookingNumber,
                identifier: this.identifier,
                guests: this.guests.map(g => (Object.assign(Object.assign({}, g), { dob: g.dob ? utils.hooks(g.dob, 'DD/MM/YYYY').format('YYYY-MM-DD') : null }))),
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
                    errors[e.path[1]] = true;
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
            return (index.h(index.Fragment, null, idx === 1 && (index.h("div", { class: "d-flex mx-0 px-0" }, index.h("h5", { class: "mx-0 px-0 sharing_persons_heading" }, locales_store.locales.entries.Lcz_PersonsSharingRoom), index.h("p", { class: "mx-0 px-0 sharing_persons_label" }, locales_store.locales.entries.Lcz_PersonsSharingRoom))), index.h("div", { key: idx, class: "guest-grid" }, index.h("div", { class: 'm-0 p-0 d-flex align-items-center h-100' }, index.h("p", { class: "guest_label" }, "First name"), index.h("ir-input-text", { class: "flex-grow-1 h-100", id: `first_name_${idx}`, zod: ZSharedPerson.pick({ first_name: true }), error: !!this.error['first_name'], autoValidate: this.autoValidate, wrapKey: "first_name", placeholder: "First name", onTextChange: e => this.updateGuestInfo(idx, { first_name: e.detail }), value: guest.first_name, maxLength: 40 })), index.h("div", { class: 'm-0 p-0 d-flex align-items-center h-100' }, index.h("p", { class: "guest_label" }, "Last name"), index.h("ir-input-text", { maxLength: 40, class: "flex-grow-1 h-100", id: `last_name_${idx}`, zod: ZSharedPerson.pick({ last_name: true }), error: !!this.error['last_name'], autoValidate: this.autoValidate, wrapKey: "last_name", placeholder: "Last name", onTextChange: e => this.updateGuestInfo(idx, { last_name: e.detail }), value: guest.last_name })), index.h("div", { class: "flex-grow-0 m-0 p-0 h-100 d-flex align-items-center" }, index.h("p", { class: "guest_label" }, locales_store.locales.entries.Lcz_DOB), index.h("ir-input-text", { class: "flex-grow-1 h-100", id: `dob_${idx}`, zod: ZSharedPerson.pick({ dob: true }), error: !!this.error['dob'], autoValidate: this.autoValidate, wrapKey: "dob", mask: dateMask, placeholder: "", onTextChange: e => {
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
                }, selectedValue: guest.id_info.type.code, LabelAvailable: false, showFirstOption: false, data: (_b = this.idTypes) === null || _b === void 0 ? void 0 : _b.map(t => { var _a; return ({ text: (_a = t[`CODE_VALUE_${this.language.toUpperCase()}`]) !== null && _a !== void 0 ? _a : t[`CODE_VALUE_EN`], value: t.CODE_NAME }); }) }), index.h("ir-input-text", { autoValidate: this.autoValidate, maxLength: 18, placeholder: "12345", class: "flex-grow-1 guest_document", type: "text", inputForcedStyle: { borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px' }, value: guest.id_info.number, zod: ZIdInfo.pick({ number: true }), error: !!this.error['number'], wrapKey: "number", inputStyles: "form-control", onTextChange: e => this.updateGuestInfo(idx, {
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

exports.igl_book_property = IglBookProperty;
exports.igl_book_property_footer = IglBookPropertyFooter;
exports.igl_booking_form = IglBookingForm;
exports.igl_booking_overview_page = IglBookingOverviewPage;
exports.ir_booking_details = IrBookingDetails;
exports.ir_booking_extra_note = IrBookingExtraNote;
exports.ir_booking_header = IrBookingHeader;
exports.ir_dialog = IrDialog;
exports.ir_events_log = IrEventsLog;
exports.ir_extra_service = IrExtraService;
exports.ir_extra_service_config = IrExtraServiceConfig;
exports.ir_extra_services = IrExtraServices;
exports.ir_guest_info = GuestInfo;
exports.ir_payment_actions = IrPaymentActions;
exports.ir_payment_details = IrPaymentDetails;
exports.ir_pickup = IrPickup;
exports.ir_pickup_view = IrPickupView;
exports.ir_pms_logs = IrPmsLogs;
exports.ir_reservation_information = IrReservationInformation;
exports.ir_room = IrRoom;
exports.ir_room_guests = IrRoomGuests;
exports.ota_label = OtaLabel;

//# sourceMappingURL=igl-book-property_22.cjs.entry.js.map