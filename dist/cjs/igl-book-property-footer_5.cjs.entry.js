'use strict';

var index = require('./index-CQkpA5n3.js');
var calendarData = require('./calendar-data-HgC39-BR.js');
var moment = require('./moment-CdViwxPQ.js');
var t = require('./t-CyRK1btk.js');
var irInterceptor_store = require('./ir-interceptor.store-moMB-JCs.js');
var booking_store = require('./booking.store-DDthytEL.js');
var utils = require('./utils-C5I0LkiV.js');
var irDate = require('./ir-date-BZLsqCOc.js');
var number = require('./number-D7i5wAQq.js');
var types = require('./types-BlCoz3jZ.js');
require('./booking.dto-DxxzsxJC.js');
require('./locales.store-BMTss6fG.js');
var index$1 = require('./index-BquCITYD.js');
var types$1 = require('./types-C-4XDWBD.js');
var utils$1 = require('./utils-CQGL0l4_.js');
var v4 = require('./v4-_2BfiRUa.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./IBooking-C1lok6Tq.js');
require('./booking-CQEjAIov.js');
require('./functions-CsGCS8vQ.js');
require('./commonSchemas-BFzTbV-r.js');
require('./language-observer-DKp37LIu.js');
require('./type-BRhg-bzd.js');

const iglBookPropertyFooterCss = () => `.sc-igl-book-property-footer-h{width:100% !important;background:#000}`;

const IglBookPropertyFooter = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.buttonClicked = index.createEvent(this, "buttonClicked");
    }
    eventType;
    page;
    isEditOrAddRoomEvent;
    dateRangeData;
    isLoading;
    buttonClicked;
    isEventType(event) {
        return event === this.eventType;
    }
    editNext(value) {
        if (this.isEventType('EDIT_BOOKING')) {
            if (value === 'cancel') {
                return 'flex-fill';
            }
            else {
                return 'd-none d-md-block  flex-fill';
            }
        }
        return 'flex-fill';
    }
    renderButton({ label, type = 'button', disabled = false, 
    // icon_name,
    isLoading, appearance, variant, value, form, }) {
        return (index.h("div", { class: this.shouldRenderTwoButtons() ? ` ${this.editNext(value)}` : 'flex-fill' }, index.h("ir-custom-button", { type: type, form: form, size: 'm', loading: isLoading, appearance: appearance, variant: variant, disabled: disabled, onClickHandler: () => {
                this.buttonClicked.emit({ key: value });
            }, class: "full-width" }, label)));
    }
    shouldRenderTwoButtons() {
        return this.isEventType('PLUS_BOOKING') || this.isEventType('ADD_ROOM') || this.isEventType('EDIT_BOOKING');
    }
    render() {
        if (this.page === 'page_one') {
            return (index.h(index.Host, null, this.isEventType('EDIT_BOOKING') ? (index.h(index.Fragment, null, this.renderButton({ value: 'cancel', label: t.t('Lcz_Cancel', { fallback: 'Cancel' }), appearance: 'filled', variant: 'neutral' }), this.shouldRenderTwoButtons() &&
                this.renderButton({
                    value: 'next',
                    label: `${t.t('Lcz_Next', { fallback: 'Next' })}`,
                    icon_name: 'angles_right',
                    variant: 'brand',
                    appearance: 'accent',
                }))) : (index.h(index.Fragment, null, this.renderButton({ value: 'cancel', label: t.t('Lcz_Cancel', { fallback: 'Cancel' }), appearance: 'filled', variant: 'neutral' }), this.shouldRenderTwoButtons() &&
                this.renderButton({ value: 'next', label: `${t.t('Lcz_Next', { fallback: 'Next' })}`, icon_name: 'angles_right', variant: 'brand', appearance: 'accent' })))));
        }
        const showBookAndCheckin = calendarData.calendar_data.checkin_enabled && moment.hooks(new Date(this.dateRangeData?.fromDate)).isSame(new Date(), 'day');
        return (index.h(index.Fragment, null, this.isEditOrAddRoomEvent ? (index.h(index.Fragment, null, this.renderButton({
            value: 'back',
            icon_position: 'left',
            label: t.t('Lcz_Back', { fallback: 'Back' }),
            icon_name: 'angles_left',
            appearance: 'filled',
            variant: 'neutral',
        }), this.renderButton({ value: 'save', label: t.t('Lcz_Save', { fallback: 'Save' }), isLoading: this.isLoading === 'save', variant: 'brand', appearance: 'accent' }))) : (index.h(index.Fragment, null, this.renderButton({
            value: 'back',
            icon_position: 'left',
            label: t.t('Lcz_Back', { fallback: 'Back' }),
            icon_name: 'angles_left',
            appearance: 'filled',
            variant: 'neutral',
        }), this.renderButton({
            value: 'book',
            type: 'submit',
            form: 'new_booking_form',
            label: t.t('Lcz_Book', { fallback: 'Book' }),
            isLoading: this.isLoading === 'book',
            variant: 'brand',
            appearance: showBookAndCheckin ? 'outlined' : 'accent',
        }), showBookAndCheckin &&
            this.renderButton({
                type: 'submit',
                form: 'new_booking_form',
                value: 'bookAndCheckIn',
                label: t.t('Lcz_BookAndChekcIn', { fallback: 'Book & check In' }),
                isLoading: this.isLoading === 'bookAndCheckIn',
                variant: 'brand',
                appearance: 'accent',
            })))));
    }
};
IglBookPropertyFooter.style = iglBookPropertyFooterCss();

const iglBookPropertyHeaderCss = () => `.sc-igl-book-property-header-h{display:flex;flex-direction:column;text-align:start;gap:1rem}.sourceContainer.sc-igl-book-property-header{max-width:350px}.message-label.sc-igl-book-property-header{font-size:80%}.fd-book-property__adults-select.sc-igl-book-property-header::part(display-input),.fd-book-property__adults-select.sc-igl-book-property-header [part~="display-input"]{text-transform:capitalize}.fd-book-property__constraints-container.sc-igl-book-property-header,.fd-book-property__header-container.sc-igl-book-property-header{display:flex;flex-direction:column;gap:0.5rem;flex-wrap:wrap}@media (min-width: 768px){.fd-book-property__constraints-container.sc-igl-book-property-header,.fd-book-property__header-container.sc-igl-book-property-header{flex-direction:row;align-items:center}.fd-book-property__adults-select.sc-igl-book-property-header{width:100px}.fd-book-property__children-select.sc-igl-book-property-header{width:170px}}.ir-text-end.sc-igl-book-property-header{text-align:end}`;

const IglBookPropertyHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.splitBookingDropDownChange = index.createEvent(this, "splitBookingDropDownChange");
        this.checkClicked = index.createEvent(this, "checkClicked");
        this.buttonClicked = index.createEvent(this, "buttonClicked");
        this.spiltBookingSelected = index.createEvent(this, "spiltBookingSelected");
        this.animateIrSelect = index.createEvent(this, "animateIrSelect");
    }
    splitBookingId = '';
    bookingData = '';
    minDate;
    message;
    bookingDataDefaultDateRange;
    showSplitBookingOption = false;
    adultChildConstraints;
    splitBookings;
    dateRangeData;
    bookedByInfoData;
    defaultDaterange;
    propertyId;
    wasBlockedUnit;
    isLoading;
    bookings = [];
    splitBookingDropDownChange;
    checkClicked;
    buttonClicked;
    spiltBookingSelected;
    animateIrSelect;
    autoValidate;
    bookingService = new booking_store.BookingService();
    adultAnimationContainer;
    async fetchExposedBookings(value) {
        this.isLoading = true;
        this.bookings = await this.bookingService.fetchExposedBookings(value, this.propertyId, moment.hooks(this.bookingDataDefaultDateRange.fromDate).format('YYYY-MM-DD'), moment.hooks(this.bookingDataDefaultDateRange.toDate).format('YYYY-MM-DD'));
        this.isLoading = false;
    }
    getSplitBookingList() {
        return (index.h("ir-picker", { mode: "select-async", class: "sourceContainer", debounce: 300, "onText-change": e => {
                this.fetchExposedBookings(e.detail);
            }, defaultValue: Object.keys(this.bookedByInfoData).length > 1 ? this.bookedByInfoData.bookingNumber?.toString() : '', value: Object.keys(this.bookedByInfoData).length > 1 ? this.bookedByInfoData.bookingNumber?.toString() : '', label: `${t.t('Lcz_Tobooking', { fallback: 'To booking' })}#`, placeholder: t.t('Lcz_BookingNumber', { fallback: 'Booking number' }), loading: this.isLoading, "onCombobox-select": e => {
                const booking = this.bookings?.find(b => b.booking_nbr?.toString() === e.detail.item.value);
                this.spiltBookingSelected.emit({ key: 'select', data: booking });
            } }, this.bookings?.map(b => {
            const label = `${b.booking_nbr} ${b.guest.first_name} ${b.guest.last_name}`;
            return (index.h("ir-picker-item", { value: b.booking_nbr?.toString(), label: label }, `${number.formatBookingNumber(b.booking_nbr)} ${b.guest.first_name} ${b.guest.last_name}`));
        })));
    }
    getSourceNode() {
        const { sources } = booking_store.booking_store.selects;
        return (index.h("wa-select", { size: "s", placeholder: t.t('Lcz_Source', { fallback: 'Source' }), value: booking_store.booking_store.bookingDraft.source?.id?.toString(), defaultValue: booking_store.booking_store.bookingDraft.source?.id, id: "xSmallSelect", "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: evt => {
                booking_store.setBookingDraft({ source: sources.find(s => s.id === evt.target.value) });
            } }, sources.map(option => {
            if (option.type === 'LABEL') {
                return index.h("small", null, option.description);
            }
            return index.h("wa-option", { value: option.id?.toString() }, option.description);
        })));
    }
    getAdultChildConstraints() {
        const { adults, children } = booking_store.booking_store.bookingDraft.occupancy;
        return (index.h(index.Fragment, null, index.h("ir-validator", { value: adults, schema: types.numberType().min(1), autovalidate: this.autoValidate }, index.h("wa-select", { class: "fd-book-property__adults-select", "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: e => {
                booking_store.setBookingDraft({
                    occupancy: {
                        children,
                        adults: Number(e.target.value),
                    },
                });
            }, value: adults?.toString(), defaultValue: adults?.toString(), placeholder: t.t('Lcz_Adults', { fallback: 'adults' }), size: "s" }, Array.from(Array(this.adultChildConstraints.adult_max_nbr), (_, i) => i + 1).map(option => (index.h("wa-option", { value: option?.toString() }, number.formatCount(option)))))), this.adultChildConstraints.child_max_nbr > 0 && (index.h("wa-select", { class: "fd-book-property__children-select", "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: e => booking_store.setBookingDraft({
                occupancy: {
                    adults,
                    children: Number(e.target.value),
                },
            }), defaultValue: children?.toString(), value: children?.toString(), placeholder: this.renderChildCaption(), size: "s" }, Array.from(Array(this.adultChildConstraints.child_max_nbr), (_, i) => i + 1).map(option => (index.h("wa-option", { value: option?.toString() }, number.formatCount(option))))))));
    }
    renderChildCaption() {
        const maxAge = this.adultChildConstraints.child_max_age;
        let years = t.t('Lcz_Years', { fallback: 'years' });
        if (maxAge === 1) {
            years = t.t('Lcz_Year', { fallback: 'year' });
        }
        return `${t.t('Lcz_ChildCaption', { fallback: 'Child.' })} ${number.formatCount(0)} - ${number.formatCount(this.adultChildConstraints.child_max_age)} ${years}`;
    }
    handleButtonClicked() {
        const { occupancy } = booking_store.booking_store.bookingDraft;
        if (this.isEventType('SPLIT_BOOKING') && Object.keys(this.bookedByInfoData).length <= 1) {
            utils.showToast({
                type: 'error',
                title: t.t('Lcz_ChooseBookingNumber', { fallback: 'Choose a booking number' }),
            });
        }
        else if (this.isEventType('ADD_ROOM') || this.isEventType('SPLIT_BOOKING')) {
            const initialToDate = moment.hooks(new Date(this.bookedByInfoData.to_date || this.defaultDaterange.to_date));
            const initialFromDate = moment.hooks(new Date(this.bookedByInfoData.from_date || this.defaultDaterange.from_date));
            const selectedFromDate = moment.hooks(new Date(this.dateRangeData.fromDate));
            const selectedToDate = moment.hooks(new Date(this.dateRangeData.toDate));
            if (selectedToDate.isBefore(initialFromDate) || selectedFromDate.isAfter(initialToDate)) {
                utils.showToast({
                    type: 'error',
                    title: `${t.t('Lcz_CheckInDateShouldBeMAx', { fallback: 'The check-in or check-out must fall within %1 and %2.', params: [irDate.formatDate(new Date(this.bookedByInfoData.from_date || this.defaultDaterange.from_date), 'ddd, DD MMM YYYY'), irDate.formatDate(new Date(this.bookedByInfoData.to_date || this.defaultDaterange.to_date), 'ddd, DD MMM YYYY')] })}  `,
                });
                return;
            }
            else if (Number(occupancy.adults) === 0) {
                utils.showToast({ type: 'error', title: t.t('Lcz_PlzSelectNumberOfGuests', { fallback: 'Please select the number of guests' }) });
                // this.adultAnimationContainer.play = true;
                this.autoValidate = true;
            }
            else {
                this.buttonClicked.emit({ key: 'check' });
            }
        }
        // else if (this.minDate && new Date(this.dateRangeData.fromDate).getTime() > new Date(this.bookedByInfoData.to_date || this.defaultDaterange.to_date).getTime()) {
        //   showToast({
        //     type: 'error',
        //     title: `${t('Lcz_CheckInDateShouldBeMAx', { fallback: 'The check-in or check-out must fall within %1 and %2.' }).replace(
        //       '%1',
        //       formatDate(new Date(this.bookedByInfoData.from_date || this.defaultDaterange.from_date), 'ddd, DD MMM YYYY'),
        //     ).replace('%2', formatDate(new Date(this.bookedByInfoData.to_date || this.defaultDaterange.to_date), 'ddd, DD MMM YYYY'))}  `,
        //     description: '',
        //   });
        // }
        else if (Number(occupancy.adults) === 0) {
            // this.adultAnimationContainer.play = true;
            this.autoValidate = true;
            utils.showToast({ type: 'error', title: t.t('Lcz_PlzSelectNumberOfGuests', { fallback: 'Please select the number of guests' }), description: '' });
        }
        else {
            this.buttonClicked.emit({ key: 'check' });
        }
    }
    isEventType(key) {
        return this.bookingData.event_type === key;
    }
    getMinDate() {
        if (this.isEventType('PLUS_BOOKING')) {
            return moment.hooks().add(-1, 'months').startOf('month').format('YYYY-MM-DD');
        }
        if (this.wasBlockedUnit) {
            return this.bookingData?.block_exposed_unit_props.from_date;
        }
        return this.minDate;
    }
    getMaxDate() {
        if (!this.bookingData?.block_exposed_unit_props) {
            // if (this.isEventType('PLUS_BOOKING')) {
            //   return moment().add(60, 'days').format('YYYY-MM-DD');
            // }
            return undefined;
        }
        return this.bookingData?.block_exposed_unit_props.to_date;
    }
    render() {
        console.log(this.bookingData.event_type);
        const showSourceNode = this.showSplitBookingOption ? this.getSplitBookingList() : this.isEventType('EDIT_BOOKING') || this.isEventType('ADD_ROOM') ? false : true;
        return (index.h(index.Host, { key: 'b47bfbb711c72a0b13c8c2963e221e75b9a03b21' }, this.isEventType('SPLIT_BOOKING') && this.getSplitBookingList(), index.h("div", { key: 'c86b79a38fcb615395eb7d755d4c396f93c02255', class: `fd-book-property__header-container` }, showSourceNode && this.getSourceNode(), index.h("ir-date-range", { key: '3bd944508a8ac4e9a59afc2702769bc18fbcecb9', "data-testid": "date_picker", variant: "booking", dateLabel: t.t('Lcz_Dates', { fallback: 'Dates' }), maxDate: this.getMaxDate(), minDate: this.getMinDate(), disabled: (this.isEventType('BAR_BOOKING') && !this.wasBlockedUnit) || this.isEventType('SPLIT_BOOKING'), defaultData: this.bookingDataDefaultDateRange }), !this.isEventType('EDIT_BOOKING') && this.getAdultChildConstraints(), index.h("ir-custom-button", { key: '1b9dda389313d2058a9ea8cfe74f17d2311f6c1f', loading: irInterceptor_store.isRequestPending('/Check_Availability'), variant: "brand", onClickHandler: () => this.handleButtonClicked() }, t.t('Lcz_Check', { fallback: 'Check' }))), index.h("p", { key: '2e3d45bc1b590e9a1f7ab01e07a6b66c4eccda0b', class: "ir-text-end message-label" }, calendarData.calendar_data.tax_statement)));
    }
};
IglBookPropertyHeader.style = iglBookPropertyHeaderCss();

const iglBookingFormCss = () => `.sc-igl-booking-form-h{display:flex;flex-direction:column}.ir-me-1.sc-igl-booking-form{margin-inline-end:0.25rem}.ir-text-end.sc-igl-booking-form{text-align:end}`;

const IglBookingForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.dataUpdateEvent = index.createEvent(this, "dataUpdateEvent");
        this.buttonClicked = index.createEvent(this, "buttonClicked");
    }
    showPaymentDetails;
    currency;
    isEditOrAddRoomEvent;
    dateRangeData;
    bookingData;
    showSplitBookingOption;
    language;
    bookedByInfoData;
    propertyId;
    bedPreferenceType;
    selectedRooms;
    isLoading;
    countries;
    selectedGuestData;
    defaultGuestData;
    selectedBookedByData;
    guestData;
    selectedUnits = {};
    dataUpdateEvent;
    buttonClicked;
    componentWillLoad() {
        this.initializeGuestData();
        this.selectedBookedByData = this.bookedByInfoData;
    }
    initializeGuestData() {
        let total = 0;
        const newSelectedUnits = { ...this.selectedUnits };
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
                    this.guestData.push({
                        guestName: '',
                        roomId: '',
                        preference: '',
                        ...rate_plan,
                    });
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
        this.selectedUnits = {
            ...this.selectedUnits,
            [categoryIdKey]: updatedUnits,
        };
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
        return (index.h("form", { key: '216ca248eb0769949c859d7591b7cd3dc64a6617', class: "d-flex flex-column h-100", id: "new_booking_form", autoComplete: "off", onSubmit: e => {
                e.preventDefault();
            } }, index.h("div", { key: '1c4b116e92889edf272d15cd8e096ca805d7e38e', class: "d-flex flex-wrap" }, index.h("ir-date-view", { key: '60c6372ac1d8d129790971b5d17bba36009a8976', class: "ir-me-1 flex-fill font-weight-bold font-medium-1", from_date: new Date(this.dateRangeData.fromDate), to_date: new Date(this.dateRangeData.toDate) }), this.guestData.length > 1 && (index.h("div", { key: 'b16104f98b02b271fbecfc6eec51b9e636524c5d', class: "mt-1 mt-md-0 ir-text-end" }, t.t('Lcz_TotalPrice', { fallback: 'Total price' }), ' ', index.h("span", { key: '9b68e7ae6467d7067072d05770daf7b7271d9a72', class: "font-weight-bold font-medium-1" }, number.formatAmount(this.currency.symbol, this.bookingData.TOTAL_PRICE || '0'))))), Object.values(booking_store.booking_store.ratePlanSelections).map(val => Object.values(val).map(ratePlan => {
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
IglBookingForm.style = iglBookingFormCss();

const iglBookingOverviewPageCss = () => `.sc-igl-booking-overview-page-h{display:block}.sc-igl-booking-overview-page-h>*.sc-igl-booking-overview-page{margin:0;padding:auto}.scrollContent.sc-igl-booking-overview-page{height:calc(100% - 79px);overflow:auto;position:relative}.loading-container.sc-igl-booking-overview-page{display:flex;align-items:center;justify-content:center;height:100%;background:white;position:absolute;inset:0;z-index:100}.loader.sc-igl-booking-overview-page{width:1.25rem;height:1.25rem;border:2.5px solid #3f3f3f;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}.ir-text-start.sc-igl-booking-overview-page{text-align:start}`;

const IglBookingOverviewPage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.roomsDataUpdate = index.createEvent(this, "roomsDataUpdate");
    }
    bookingData;
    propertyId;
    message;
    showSplitBookingOption;
    eventType;
    currency;
    adultChildConstraints;
    ratePricingMode;
    dateRangeData;
    defaultDaterange;
    selectedRooms;
    bookedByInfoData;
    initialRoomIds;
    wasBlockedUnit;
    roomsDataUpdate;
    getSplitBookings() {
        return (this.bookingData.hasOwnProperty('splitBookingEvents') && this.bookingData.splitBookingEvents) || [];
    }
    isEventType(event) {
        return event === this.eventType;
    }
    setMinDate() {
        if (!this.isEventType('EDIT_BOOKING')) {
            return moment.hooks().format('YYYY-MM-DD');
        }
        const from_date = moment.hooks(this.bookingData.FROM_DATE, 'YYYY-MM-DD');
        const today = moment.hooks();
        if (from_date.isAfter(today)) {
            return today.add(-2, 'weeks').format('YYYY-MM-DD');
        }
        return from_date.add(-2, 'weeks').format('YYYY-MM-DD');
    }
    render() {
        return (index.h(index.Host, { key: '1a1fed6bd2a8e24a902ef38b4224ac80ff6b3478' }, index.h("igl-book-property-header", { key: '432b59bdcfd866c9c136e1b559a342a98280a9ab', wasBlockedUnit: this.wasBlockedUnit, bookedByInfoData: this.bookedByInfoData, defaultDaterange: this.defaultDaterange, dateRangeData: this.dateRangeData, minDate: this.setMinDate(),
            // minDate={this.isEventType('ADD_ROOM') || this.isEventType('SPLIT_BOOKING') ? this.bookedByInfoData.from_date || this.bookingData.FROM_DATE : undefined}
            splitBookingId: this.showSplitBookingOption, bookingData: this.bookingData, message: this.message, bookingDataDefaultDateRange: this.bookingData.defaultDateRange, showSplitBookingOption: this.showSplitBookingOption, adultChildConstraints: this.adultChildConstraints, splitBookings: this.getSplitBookings(), propertyId: this.propertyId }), index.h("div", { key: 'acf12353c85204cee528f6f2b0d98057ef01dd20', class: " ir-text-start" }, irInterceptor_store.isRequestPending('/Check_Availability') && this.isEventType('EDIT_BOOKING') ? (index.h("div", { class: "loading-container" }, index.h("div", { class: "loader" }))) : (index.h(index.Fragment, null, booking_store.booking_store.roomTypes?.map(roomType => (index.h("igl-room-type", {
            // initialRoomIds={this.initialRoomIds}
            isBookDisabled: Object.keys(this.bookedByInfoData).length <= 1, key: `room-type-${roomType.id}`, currency: this.currency, ratePricingMode: this.ratePricingMode,
            // dateDifference={this.dateRangeData.dateDifference}
            bookingType: this.bookingData.event_type, roomType: roomType, class: "mt-2 mb-1 p-0", "data-testid": `room_type_${roomType.id}`, id: roomType.id.toString(), roomTypeId: this.selectedRooms.has(`c_${roomType.id}`) ? roomType.id : null
        }))))))));
    }
};
IglBookingOverviewPage.style = iglBookingOverviewPageCss();

const iglPropertyBookedByCss = () => `.sc-igl-property-booked-by-h{display:block}.bookedByEmailContainer.sc-igl-property-booked-by{flex:auto;max-width:350px}.bookedDetailsForm.sc-igl-property-booked-by label.sc-igl-property-booked-by{min-width:125px;max-width:125px}.row.sc-igl-booking-form.sc-igl-property-booked-by{padding:0 !important}.bookedDetailsForm.sc-igl-property-booked-by .form-group.sc-igl-property-booked-by{margin-bottom:10px !important}.bookedDetailsForm.sc-igl-property-booked-by .checkBoxContainer.sc-igl-property-booked-by input.sc-igl-property-booked-by{height:1.2rem !important;width:30px}.property-booked-by__money-transfer-description.sc-igl-property-booked-by *.sc-igl-property-booked-by{margin:0 !important;margin-bottom:0 !important;margin-top:0 !important}.property-booked-by__money-transfer-description.sc-igl-property-booked-by,.property-booked-by__money-transfer-description .sc-igl-property-booked-by:where(*,*.sc-igl-property-booked-by::before,*.sc-igl-property-booked-by::after){margin:0.5rem !important}.controlContainer.sc-igl-property-booked-by textarea.sc-igl-property-booked-by{height:60px !important}.margin3.sc-igl-property-booked-by{margin-bottom:5px !important}@media (min-width: 768px){.bookedByEmailContainer.sc-igl-property-booked-by{margin-inline-start:37px}}.fd-property-booked-by__guest-form.sc-igl-property-booked-by{display:grid;padding:0;box-sizing:border-box;gap:0.5rem;width:100%;flex:1 1 0%}.ir-text-start.sc-igl-property-booked-by{text-align:start}`;

const IglPropertyBookedBy = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.dataUpdateEvent = index.createEvent(this, "dataUpdateEvent");
    }
    language;
    showPaymentDetails = false;
    defaultData;
    countries = [];
    propertyId;
    isButtonPressed = false;
    bookedByData = {
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
    guests;
    typedEmail;
    dataUpdateEvent;
    bookingService = new booking_store.BookingService();
    arrivalTimeList = [];
    currentMonth = '01';
    country;
    paymentMethods = [];
    pickerRef;
    componentWillLoad() {
        this.assignCountryCode();
        this.initializeDateData();
        this.populateBookedByData();
        this.paymentMethods = calendarData.calendar_data.property.allowed_payment_methods.filter(p => p.is_active && !p.is_payment_gateway);
        if (this.paymentMethods.length > 0) {
            booking_store.modifyBookingStore('selectedPaymentMethod', { code: this.paymentMethods[0].code });
        }
    }
    handleButtonClicked(event) {
        switch (event.detail.key) {
            case 'book':
            case 'bookAndCheckIn':
                this.isButtonPressed = true;
                break;
        }
    }
    async assignCountryCode() {
        const country = await this.bookingService.getUserDefaultCountry();
        const countryId = country['COUNTRY_ID'];
        this.country = countryId;
        const _c = this.countries.find(c => c.id?.toString() === countryId?.toString());
        this.bookedByData = { ...this.bookedByData, isdCode: _c.phone_prefix.toString(), countryId };
    }
    initializeDateData() {
        const dt = new Date();
        const month = dt.getMonth() + 1;
        this.currentMonth = month < 10 ? `0${month}` : month.toString();
    }
    populateBookedByData() {
        this.bookedByData = this.defaultData ? { ...this.bookedByData, ...this.defaultData } : {};
        this.arrivalTimeList = this.defaultData?.arrivalTime || [];
        this.bookedByData = { ...this.bookedByData, selectedArrivalTime: this.arrivalTimeList[0].CODE_NAME };
        if (!this.bookedByData.expiryMonth) {
            this.bookedByData.expiryMonth = this.currentMonth;
        }
        if (!this.bookedByData.expiryYear) {
            this.bookedByData.expiryYear = new Date().getFullYear();
        }
    }
    handleDataChange(key, event) {
        this.bookedByData = { ...this.bookedByData, [key]: key === 'emailGuest' ? event.target.checked : event.target.value };
        this.dataUpdateEvent.emit({
            key: 'bookedByInfoUpdated',
            data: { ...this.bookedByData },
        });
        if (key === 'firstName' || key === 'lastName') {
            booking_store.setBookedByGuestManualEditState(true);
        }
        if (key === 'countryId') {
            this.bookedByData = {
                ...this.bookedByData,
                isdCode: event.target.value,
            };
        }
        // console.log(this.bookedByData);
    }
    handleCreditCardDataChange(key, value) {
        this.bookedByData[key] = value;
        this.dataUpdateEvent.emit({
            key: 'bookedByInfoUpdated',
            data: { ...this.bookedByData },
        });
        if (key === 'countryId') {
            this.bookedByData = {
                ...this.bookedByData,
                isdCode: value,
            };
        }
        // console.log(this.bookedByData);
    }
    handleCountryChange(value) {
        const country = this.countries?.find(country => country.id === value);
        this.bookedByData = {
            ...this.bookedByData,
            isdCode: this.bookedByData?.contactNumber ? this.bookedByData?.isdCode : country?.phone_prefix,
            countryId: value,
        };
        this.dataUpdateEvent.emit({
            key: 'bookedByInfoUpdated',
            data: { ...this.bookedByData },
        });
    }
    updateGuest(props) {
        booking_store.modifyBookingStore('checkout_guest', { ...(booking_store.booking_store.checkout_guest ?? {}), ...props });
    }
    handleComboboxSelect(e) {
        const guest = this.guests?.find(guest => guest.id?.toString() === e.detail.item.value);
        if (!guest) {
            console.warn(`guest not found with id ${e.detail.item.value}`);
            return;
        }
        this.bookedByData.email = guest.email;
        this.bookedByData = {
            ...this.bookedByData,
            id: guest.id,
            firstName: guest.first_name,
            lastName: guest.last_name,
            contactNumber: guest.mobile_without_prefix,
            countryId: guest.country_id,
            isdCode: guest['country_phone_prefix'] ?? guest?.country_id,
        };
        this.dataUpdateEvent.emit({
            key: 'bookedByInfoUpdated',
            data: this.bookedByData,
        });
    }
    clearEvent() {
        this.bookedByData = {
            ...this.bookedByData,
            id: '',
            firstName: '',
            lastName: '',
            contactNumber: '',
            email: '',
            isdCode: this.country.toString(),
            countryId: this.country,
        };
        booking_store.setBookedByGuestManualEditState(false);
        this.dataUpdateEvent.emit({
            key: 'bookedByInfoUpdated',
            data: { ...this.bookedByData },
        });
    }
    async fetchGuests(email) {
        this.typedEmail = email;
        this.guests = await this.bookingService.fetchExposedGuest(email, this.propertyId);
    }
    get expiryDate() {
        const { expiryMonth, expiryYear } = this.bookedByData;
        if (!expiryMonth || !expiryYear) {
            return '';
        }
        // Normalize year to YY
        const year = expiryYear.toString().length === 4 ? expiryYear.toString().slice(-2) : expiryYear.toString();
        return `${expiryMonth}/${year}`;
    }
    render() {
        return (index.h(index.Host, { key: '1eba165fcafab6413bf12f7233617c34abebd8b4' }, index.h("div", { key: '752d54c83c703adc10016f1b16e8a1421c107357', class: "ir-text-start mt-3" }, index.h("div", { key: 'd0b57aa57c3bb31dcb31a4608e512ef0251f2123', class: "d-flex", style: { alignItems: 'flex-end', gap: '0.5rem' } }, index.h("ir-picker", { key: 'd77e53ecaab3f12a88672d7da48bd84113f9512b', class: "bookedByEmailContainer m-0 p-0", label: t.t('Lcz_BookedBy', { fallback: 'Booked by' }), value: this.bookedByData.email, ref: el => (this.pickerRef = el), "aria-invalid": String(Boolean(this.isButtonPressed && this.bookedByData.email !== '' && utils.validateEmail(this.bookedByData.email))), withClear: true, "onText-change": event => this.fetchGuests(event.detail), debounce: 300, "onInput-picker-blurred": e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                const email = this.typedEmail;
                if (this.bookedByData.email) {
                    return;
                }
                if (this.guests.length === 0) {
                    if (types.stringType().email().safeParse(email).success) {
                        this.bookedByData = {
                            ...this.bookedByData,
                            email,
                        };
                    }
                    else {
                        this.clearEvent();
                        this.pickerRef.clearInput();
                    }
                }
            }, "onCombobox-clear": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.clearEvent();
            }, loading: irInterceptor_store.isRequestPending('/Fetch_Exposed_Guests'), placeholder: t.t('Lcz_FindEmailAddress', { fallback: 'Find email address or add new' }), mode: "select-async", "onCombobox-select": this.handleComboboxSelect.bind(this) }, this.guests?.map(guest => {
            const label = `${guest.email} - ${guest.first_name} ${guest.last_name}`;
            return (index.h("ir-picker-item", { label: label, value: guest.id?.toString(), key: guest.id }, label));
        })), index.h("div", { key: '42e72c681f7ee1a4bba9a17b2b54da2603d36da6', style: { paddingBottom: '0.5rem' } }, index.h("wa-tooltip", { key: 'ea8e858d462ea54131a8a58522c51a77c611a9f5', for: `main_guest-search-tooltip` }, t.t('Lcz_LeaveEmptyIfEmailUnavailable', { fallback: 'Leave empty if email is unavailable' })), index.h("wa-icon", { key: 'adb5b05033d4eac91e87ebb5b27f9e711105a5a6', name: "circle-info", id: `main_guest-search-tooltip` })))), index.h("div", { key: '99ea15d263ada9395095f058028082018c775f6d', class: "bookedDetailsForm ir-text-start mt-2 font-small-3 " }, index.h("div", { key: '8cafab5bb23ab1901707dd63aa00d58810086b6c', class: "d-flex flex-column flex-md-row  justify-content-md-between ", style: { gap: '1rem' } }, index.h("div", { key: '0ab6b828458031509329a244380076acebc9ffcc', class: "fd-property-booked-by__guest-form " }, index.h("ir-validator", { key: '780a8631fe22728ea0279a2860736879cf20d402', value: this.bookedByData.firstName, schema: types$1.BookingGuestSchema.shape.first_name }, index.h("ir-input", { key: 'c3b85ede223ba8025d5944aa748bf12067e74fb1', "onText-change": event => {
                this.updateGuest({ first_name: event.detail });
                this.handleDataChange('firstName', { target: { value: event.detail.trim() } });
            }, defaultValue: this.bookedByData.firstName, value: this.bookedByData.firstName, label: t.t('Lcz_FirstName', { fallback: 'First name' }), placeholder: t.t('Lcz_FirstName', { fallback: 'First name' }), required: true, name: "last_name_custom", autocomplete: "family-name" })), index.h("ir-validator", { key: 'e25fcd9e7002c03ab8ad4c8e3fc94fc5668b0cc4', value: this.bookedByData.lastName, schema: types$1.BookingGuestSchema.shape.last_name }, index.h("ir-input", { key: 'c357c19921781b65326dcb16f20a068dcefe3eef', "onText-change": event => {
                this.updateGuest({ last_name: event.detail });
                this.handleDataChange('lastName', { target: { value: event.detail.trim() } });
            }, name: "first_name_custom", autocomplete: "given-name", defaultValue: this.bookedByData.lastName, value: this.bookedByData.lastName, label: t.t('Lcz_LastName', { fallback: 'Last name' }), placeholder: t.t('Lcz_LastName', { fallback: 'Last name' }), required: true })), index.h("ir-country-picker", { key: 'ca55cde867d40ea4907306304e87d990e39dc43d', label: t.t('Lcz_Country', { fallback: 'Country' }), variant: "modern", testId: "main_guest_country", class: "flex-grow-1 m-0", onCountryChange: e => this.handleCountryChange(e.detail.id), countries: this.countries, country: this.countries.find(c => c.id === this.bookedByData.countryId) }), index.h("ir-mobile-input", { key: '6e33ca8dec4157b395060060ac957d8b97a9191f', size: "s", "onMobile-input-change": e => {
                this.handleDataChange('contactNumber', { target: { value: e.detail.formattedValue } });
            }, "onMobile-input-country-change": e => this.handleDataChange('isdCode', { target: { value: e.detail.phone_prefix } }), value: this.bookedByData.contactNumber,
            // required
            countryCode: this.countries.find(c => c.phone_prefix === this.bookedByData.isdCode)?.code, countries: this.countries }), index.h("wa-select", { key: '364b38d5f156b85d228c5fa22149ab53a5d04fb6', size: "s", label: t.t('Lcz_YourArrivalTime', { fallback: 'Your arrival time' }), "data-testid": "arrival_time", "aria-disabled": String(Boolean(this.isButtonPressed && this.bookedByData.selectedArrivalTime.code === '')), id: v4.v4(), defaultValue: this.arrivalTimeList[0].CODE_NAME, value: this.bookedByData.selectedArrivalTime.code, onchange: event => this.handleDataChange('selectedArrivalTime', event) }, this.arrivalTimeList.map(time => (index.h("wa-option", { value: time.CODE_NAME, selected: this.bookedByData.selectedArrivalTime.code === time.CODE_NAME }, utils$1.getSetupEntryLabel(time)))))), index.h("div", { key: '2ebcaed19dd9b61d02d566722c36b466bfef05e2', class: "p-0 flex-fill  ml-md-3 d-flex flex-column", style: { gap: '0.5rem' } }, index.h("wa-textarea", { key: '4c7723e733f9ba223ba9ab61e22a1cf2e8263300', onchange: event => this.handleDataChange('message', event), size: "s", value: this.bookedByData.message, defaultValue: this.bookedByData.message, label: t.t('Lcz_AnyMessageForUs', { fallback: 'Any message for us' }), rows: 4 }), this.paymentMethods.length > 1 && (index.h("wa-select", { key: 'c8d02dfb8c9b29cebb26ec3e1b71549ddd72a58b', label: t.t('Lcz_PaymentMethod', { fallback: 'Payment Method' }), size: "s", value: booking_store.booking_store?.selectedPaymentMethod?.code, onchange: e => booking_store.modifyBookingStore('selectedPaymentMethod', {
                code: e.target.value,
            }) }, this.paymentMethods.map(p => (index.h("wa-option", { value: p.code }, p.description))))), booking_store.booking_store.selectedPaymentMethod?.code === '001' && (index.h(index.Fragment, { key: '0a980aa43ceb952be36cb2b3f290113d7fc2cc4a' }, index.h("ir-input", { key: 'cab722d7049f81f30ad1a17457bccf7123eb842c', value: this.bookedByData.cardNumber, defaultValue: this.bookedByData.cardNumber, "onText-change": e => this.handleCreditCardDataChange('cardNumber', e.detail.trim()), label: t.t('Lcz_CardNumber', { fallback: 'Card number' }) }), index.h("ir-input", { key: 'd8817e889c1b500c75b3c926ec358ea8fae0c5be', value: this.bookedByData.cardHolderName, defaultValue: this.bookedByData.cardHolderName, "onText-change": e => this.handleCreditCardDataChange('cardHolderName', e.detail.trim()), label: t.t('Lcz_CardHolderName', { fallback: 'Card holder name' }) }), index.h("ir-input", { key: '48be1d55f515197fd06518cbcd7f732eb74562e0', "onText-change": e => {
                const [month, year] = e.detail.split('/');
                this.handleCreditCardDataChange('expiryYear', month ?? '');
                this.handleCreditCardDataChange('expiryMonth', year ?? '');
            }, value: this.expiryDate, mask: {
                mask: 'MM/YY',
                placeholderChar: '_',
                blocks: {
                    MM: {
                        mask: index$1.IMask.MaskedRange,
                        from: 1,
                        to: 12,
                        maxLength: 2,
                    },
                    YY: {
                        mask: index$1.IMask.MaskedRange,
                        from: new Date().getFullYear() % 100,
                        to: (new Date().getFullYear() % 100) + 20,
                        maxLength: 2,
                    },
                },
            }, label: t.t('Lcz_ExpiryDate', { fallback: 'Expiry date' }) }))), booking_store.booking_store.selectedPaymentMethod?.code === '005' && (index.h("div", { key: '00bfedd57f2156fb16f0b21d92d2c5ddff1af47d', class: "form-group mt-md-1 mt-1 p-0 d-flex flex-column flex-md-row align-items-md-center" }, index.h("label", { key: '0ffa3e6c0c92b4646eb03c81b337059f3a054534', class: "p-0 m-0 margin3" }), index.h("div", { key: '8f912e5db0c3cfceb71e708b9402d4c998867d59', class: "p-0 m-0  controlContainer flex-fill" }, index.h("div", { key: 'e4ac24ca55beec43cc615a03d1885530d456a1d8', class: "property-booked-by__money-transfer-description", innerHTML: this.paymentMethods.find(p => p.code === '005')?.localizables.find(l => l.language.code.toLowerCase() === 'en')?.description })))), index.h("wa-checkbox", { key: '312564fda27fc559d5045b4bb954e318ee81bbce', checked: this.bookedByData.emailGuest, onchange: event => this.handleDataChange('emailGuest', event) }, t.t('Lcz_EmailTheGuest', { fallback: 'Email the guest' })))))));
    }
};
IglPropertyBookedBy.style = iglPropertyBookedByCss();

exports.igl_book_property_footer = IglBookPropertyFooter;
exports.igl_book_property_header = IglBookPropertyHeader;
exports.igl_booking_form = IglBookingForm;
exports.igl_booking_overview_page = IglBookingOverviewPage;
exports.igl_property_booked_by = IglPropertyBookedBy;
