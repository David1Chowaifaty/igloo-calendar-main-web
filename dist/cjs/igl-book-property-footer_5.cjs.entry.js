'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const locales_store = require('./locales.store-32782582.js');
const calendarData = require('./calendar-data-0598de26.js');
const moment = require('./moment-1780b03a.js');
const irInterceptor_store = require('./ir-interceptor.store-d60f5a34.js');
const booking_service = require('./booking.service-4b732a09.js');
const index$1 = require('./index-8bb117a0.js');
const utils = require('./utils-dc8cc4b1.js');
const index$2 = require('./index-e9a28e3e.js');
const types = require('./types-234b9df3.js');
const v4 = require('./v4-9b297151.js');
require('./index-fbf1fe1d.js');
require('./axios-6e678d52.js');
require('./booking-77542ea5.js');
require('./type-393ac773.js');

const iglBookPropertyFooterCss = ".sc-igl-book-property-footer-h{width:100% !important;background:#000}";
const IglBookPropertyFooterStyle0 = iglBookPropertyFooterCss;

const IglBookPropertyFooter = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.buttonClicked = index.createEvent(this, "buttonClicked", 7);
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
    renderButton({ label, type = 'button', disabled = false, 
    // icon_name,
    isLoading, appearance, variant, value, form, }) {
        return (index.h("div", { class: this.shouldRenderTwoButtons() ? ` ${this.editNext(label)}` : 'flex-fill' }, index.h("ir-custom-button", { type: type, form: form, size: 'medium', loading: isLoading, appearance: appearance, variant: variant, disabled: disabled, onClickHandler: () => {
                this.buttonClicked.emit({ key: value });
            }, class: "full-width" }, label)));
    }
    shouldRenderTwoButtons() {
        return this.isEventType('PLUS_BOOKING') || this.isEventType('ADD_ROOM') || this.isEventType('EDIT_BOOKING');
    }
    render() {
        if (this.page === 'page_one') {
            return (index.h(index.Host, null, this.isEventType('EDIT_BOOKING') ? (index.h(index.Fragment, null, this.renderButton({ value: 'cancel', label: locales_store.locales.entries.Lcz_Cancel, appearance: 'filled', variant: 'neutral' }), this.shouldRenderTwoButtons() &&
                this.renderButton({
                    value: 'next',
                    label: `${locales_store.locales.entries.Lcz_Next}`,
                    icon_name: 'angles_right',
                    variant: 'brand',
                    appearance: 'accent',
                }))) : (index.h(index.Fragment, null, this.renderButton({ value: 'cancel', label: locales_store.locales.entries.Lcz_Cancel, appearance: 'filled', variant: 'neutral' }), this.shouldRenderTwoButtons() &&
                this.renderButton({ value: 'next', label: `${locales_store.locales.entries.Lcz_Next}`, icon_name: 'angles_right', variant: 'brand', appearance: 'accent' })))));
        }
        const showBookAndCheckin = calendarData.calendar_data.checkin_enabled && moment.hooks(new Date(this.dateRangeData?.fromDate)).isSame(new Date(), 'day');
        return (index.h(index.Fragment, null, this.isEditOrAddRoomEvent ? (index.h(index.Fragment, null, this.renderButton({ value: 'back', icon_position: 'left', label: locales_store.locales.entries.Lcz_Back, icon_name: 'angles_left', appearance: 'filled', variant: 'neutral' }), this.renderButton({ value: 'save', label: locales_store.locales.entries.Lcz_Save, isLoading: this.isLoading === 'save', variant: 'brand', appearance: 'accent' }))) : (index.h(index.Fragment, null, this.renderButton({ value: 'back', icon_position: 'left', label: locales_store.locales.entries.Lcz_Back, icon_name: 'angles_left', appearance: 'filled', variant: 'neutral' }), this.renderButton({
            value: 'book',
            type: 'submit',
            form: 'new_booking_form',
            label: locales_store.locales.entries.Lcz_Book,
            isLoading: this.isLoading === 'book',
            variant: 'brand',
            appearance: showBookAndCheckin ? 'outlined' : 'accent',
        }), showBookAndCheckin &&
            this.renderButton({
                type: 'submit',
                form: 'new_booking_form',
                value: 'bookAndCheckIn',
                label: locales_store.locales.entries.Lcz_BookAndChekcIn,
                isLoading: this.isLoading === 'bookAndCheckIn',
                variant: 'brand',
                appearance: 'accent',
            })))));
    }
};
IglBookPropertyFooter.style = IglBookPropertyFooterStyle0;

const iglBookPropertyHeaderCss = ".sc-igl-book-property-header-h{display:flex;flex-direction:column;text-align:start;gap:1rem}.sourceContainer.sc-igl-book-property-header{max-width:350px}.message-label.sc-igl-book-property-header{font-size:80%}.fd-book-property__constraints-container.sc-igl-book-property-header,.fd-book-property__header-container.sc-igl-book-property-header{display:flex;flex-direction:column;gap:0.5rem;flex-wrap:wrap}@media (min-width: 768px){.fd-book-property__constraints-container.sc-igl-book-property-header,.fd-book-property__header-container.sc-igl-book-property-header{flex-direction:row;align-items:center}.fd-book-property__adults-select.sc-igl-book-property-header{width:100px}.fd-book-property__children-select.sc-igl-book-property-header{width:170px}}";
const IglBookPropertyHeaderStyle0 = iglBookPropertyHeaderCss;

const IglBookPropertyHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.splitBookingDropDownChange = index.createEvent(this, "splitBookingDropDownChange", 7);
        this.checkClicked = index.createEvent(this, "checkClicked", 7);
        this.buttonClicked = index.createEvent(this, "buttonClicked", 7);
        this.toast = index.createEvent(this, "toast", 7);
        this.spiltBookingSelected = index.createEvent(this, "spiltBookingSelected", 7);
        this.animateIrSelect = index.createEvent(this, "animateIrSelect", 7);
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
    toast;
    spiltBookingSelected;
    animateIrSelect;
    autoValidate;
    bookingService = new booking_service.BookingService();
    adultAnimationContainer;
    async fetchExposedBookings(value) {
        this.isLoading = true;
        this.bookings = await this.bookingService.fetchExposedBookings(value, this.propertyId, moment.hooks(this.bookingDataDefaultDateRange.fromDate).format('YYYY-MM-DD'), moment.hooks(this.bookingDataDefaultDateRange.toDate).format('YYYY-MM-DD'));
        this.isLoading = false;
    }
    getSplitBookingList() {
        return (index.h("ir-picker", { mode: "select-async", class: "sourceContainer", debounce: 300, "onText-change": e => {
                this.fetchExposedBookings(e.detail);
            }, defaultValue: Object.keys(this.bookedByInfoData).length > 1 ? this.bookedByInfoData.bookingNumber?.toString() : '', value: Object.keys(this.bookedByInfoData).length > 1 ? this.bookedByInfoData.bookingNumber?.toString() : '', label: `${locales_store.locales.entries.Lcz_Tobooking}#`, placeholder: locales_store.locales.entries.Lcz_BookingNumber, loading: this.isLoading, "onCombobox-select": e => {
                const booking = this.bookings?.find(b => b.booking_nbr?.toString() === e.detail.item.value);
                this.spiltBookingSelected.emit({ key: 'select', data: booking });
            } }, this.bookings?.map(b => {
            const label = `${b.booking_nbr} ${b.guest.first_name} ${b.guest.last_name}`;
            return (index.h("ir-picker-item", { value: b.booking_nbr?.toString(), label: label }, label));
        })));
    }
    getSourceNode() {
        const { sources } = booking_service.booking_store.selects;
        return (index.h("wa-select", { size: "small", placeholder: locales_store.locales.entries.Lcz_Source, value: booking_service.booking_store.bookingDraft.source?.id?.toString(), defaultValue: booking_service.booking_store.bookingDraft.source?.id, id: "xSmallSelect", "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: evt => {
                booking_service.setBookingDraft({ source: sources.find(s => s.id === evt.target.value) });
            } }, sources.map(option => {
            if (option.type === 'LABEL') {
                return index.h("small", null, option.description);
            }
            return index.h("wa-option", { value: option.id?.toString() }, option.description);
        })));
    }
    getAdultChildConstraints() {
        const { adults, children } = booking_service.booking_store.bookingDraft.occupancy;
        return (index.h(index.Fragment, null, index.h("ir-validator", { value: adults, schema: index$1.z.number().min(1), autovalidate: this.autoValidate }, index.h("wa-select", { class: "fd-book-property__adults-select", "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: e => {
                booking_service.setBookingDraft({
                    occupancy: {
                        children,
                        adults: Number(e.target.value),
                    },
                });
            }, value: adults?.toString(), defaultValue: adults?.toString(), placeholder: locales_store.locales.entries.Lcz_AdultsCaption, size: "small" }, Array.from(Array(this.adultChildConstraints.adult_max_nbr), (_, i) => i + 1).map(option => (index.h("wa-option", { value: option?.toString() }, option))))), this.adultChildConstraints.child_max_nbr > 0 && (index.h("wa-select", { class: "fd-book-property__children-select", "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: e => booking_service.setBookingDraft({
                occupancy: {
                    adults,
                    children: Number(e.target.value),
                },
            }), defaultValue: children?.toString(), value: children?.toString(), placeholder: this.renderChildCaption(), size: "small" }, Array.from(Array(this.adultChildConstraints.child_max_nbr), (_, i) => i + 1).map(option => (index.h("wa-option", { value: option?.toString() }, option)))))));
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
        const { occupancy } = booking_service.booking_store.bookingDraft;
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
            else if (Number(occupancy.adults) === 0) {
                this.toast.emit({ type: 'error', title: locales_store.locales.entries.Lcz_PlzSelectNumberOfGuests, description: '', position: 'top-right' });
                // this.adultAnimationContainer.play = true;
                this.autoValidate = true;
            }
            else {
                this.buttonClicked.emit({ key: 'check' });
            }
        }
        // else if (this.minDate && new Date(this.dateRangeData.fromDate).getTime() > new Date(this.bookedByInfoData.to_date || this.defaultDaterange.to_date).getTime()) {
        //   this.toast.emit({
        //     type: 'error',
        //     title: `${locales.entries.Lcz_CheckInDateShouldBeMAx.replace(
        //       '%1',
        //       moment(new Date(this.bookedByInfoData.from_date || this.defaultDaterange.from_date)).format('ddd, DD MMM YYYY'),
        //     ).replace('%2', moment(new Date(this.bookedByInfoData.to_date || this.defaultDaterange.to_date)).format('ddd, DD MMM YYYY'))}  `,
        //     description: '',
        //     position: 'top-right',
        //   });
        // }
        else if (Number(occupancy.adults) === 0) {
            // this.adultAnimationContainer.play = true;
            this.autoValidate = true;
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
        return (index.h(index.Host, { key: 'd8bb494b876340a0d1c6a1fa8436377ec3ee5299' }, this.isEventType('SPLIT_BOOKING') && this.getSplitBookingList(), index.h("div", { key: '460f4b905fc8a2ed29714f65e3d66d4fbe30e120', class: `fd-book-property__header-container` }, showSourceNode && this.getSourceNode(), index.h("igl-date-range", { key: 'd82970ada05d630c2b96b61e6ac8b9bd459f09d7', "data-testid": "date_picker", variant: "booking", dateLabel: locales_store.locales.entries.Lcz_Dates, maxDate: this.getMaxDate(), minDate: this.getMinDate(), disabled: (this.isEventType('BAR_BOOKING') && !this.wasBlockedUnit) || this.isEventType('SPLIT_BOOKING'), defaultData: this.bookingDataDefaultDateRange }), !this.isEventType('EDIT_BOOKING') && this.getAdultChildConstraints(), index.h("ir-custom-button", { key: '072ab2265b5ca70ce8cc917f6cf75fcda505b716', loading: irInterceptor_store.isRequestPending('/Check_Availability'), variant: "brand", onClickHandler: () => this.handleButtonClicked() }, locales_store.locales.entries.Lcz_Check)), index.h("p", { key: '1d2335f5a31fc7d46d3d710f180b5feec6a776d9', class: "text-right message-label" }, calendarData.calendar_data.tax_statement)));
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
        return (index.h("form", { key: '5ef77a815c711da37284ceba0ecb3df04eccf0f8', class: "d-flex flex-column h-100", id: "new_booking_form", autoComplete: "off", onSubmit: e => {
                e.preventDefault();
            } }, index.h("div", { key: '524d3b6e9f7b15262ea3d837362184f8c2c4a57a', class: "d-flex flex-wrap" }, index.h("ir-date-view", { key: '8a0e1fd2bb70c3c6b3cb34a515abbf39ee83681d', class: "mr-1 flex-fill font-weight-bold font-medium-1", from_date: new Date(this.dateRangeData.fromDate), to_date: new Date(this.dateRangeData.toDate), dateOption: "DD MMM YYYY" }), this.guestData.length > 1 && (index.h("div", { key: '0ba763058ca5b2f429a7dda5988619c731513b0f', class: "mt-1 mt-md-0 text-right" }, locales_store.locales.entries.Lcz_TotalPrice, " ", index.h("span", { key: 'f2a75ebd50262c1d2cb703213cfd394995a3d524', class: "font-weight-bold font-medium-1" }, utils.formatAmount(this.currency.symbol, this.bookingData.TOTAL_PRICE || '0'))))), Object.values(booking_service.booking_store.ratePlanSelections).map(val => Object.values(val).map(ratePlan => {
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
        return (index.h(index.Host, { key: 'ac67807fbd6e01cb7ec2c2d42285b67a8c21f8c8' }, index.h("igl-book-property-header", { key: 'e91a71fc45d02e95d16ac3ca6f0de253d574c5e7', wasBlockedUnit: this.wasBlockedUnit, bookedByInfoData: this.bookedByInfoData, defaultDaterange: this.defaultDaterange, dateRangeData: this.dateRangeData, minDate: this.setMinDate(),
            // minDate={this.isEventType('ADD_ROOM') || this.isEventType('SPLIT_BOOKING') ? this.bookedByInfoData.from_date || this.bookingData.FROM_DATE : undefined}
            splitBookingId: this.showSplitBookingOption, bookingData: this.bookingData, message: this.message, bookingDataDefaultDateRange: this.bookingData.defaultDateRange, showSplitBookingOption: this.showSplitBookingOption, adultChildConstraints: this.adultChildConstraints, splitBookings: this.getSplitBookings(), propertyId: this.propertyId }), index.h("div", { key: 'cdd50dda3afde20612639f6b14b76b1697b70db0', class: " text-left" }, irInterceptor_store.isRequestPending('/Check_Availability') && this.isEventType('EDIT_BOOKING') ? (index.h("div", { class: "loading-container" }, index.h("div", { class: "loader" }))) : (index.h(index.Fragment, null, booking_service.booking_store.roomTypes?.map(roomType => (index.h("igl-room-type", {
            // initialRoomIds={this.initialRoomIds}
            isBookDisabled: Object.keys(this.bookedByInfoData).length <= 1, key: `room-type-${roomType.id}`, currency: this.currency, ratePricingMode: this.ratePricingMode,
            // dateDifference={this.dateRangeData.dateDifference}
            bookingType: this.bookingData.event_type, roomType: roomType, class: "mt-2 mb-1 p-0", "data-testid": `room_type_${roomType.id}`, id: roomType.id.toString(), roomTypeId: this.selectedRooms.has(`c_${roomType.id}`) ? roomType.id : null
        }))))))));
    }
};
IglBookingOverviewPage.style = IglBookingOverviewPageStyle0;

const iglPropertyBookedByCss = ".sc-igl-property-booked-by-h{display:block}.bookedByEmailContainer.sc-igl-property-booked-by{flex:auto;max-width:350px}.bookedDetailsForm.sc-igl-property-booked-by label.sc-igl-property-booked-by{min-width:125px;max-width:125px}.row.sc-igl-booking-form.sc-igl-property-booked-by{padding:0 !important}.bookedDetailsForm.sc-igl-property-booked-by .form-group.sc-igl-property-booked-by{margin-bottom:10px !important}.bookedDetailsForm.sc-igl-property-booked-by .checkBoxContainer.sc-igl-property-booked-by input.sc-igl-property-booked-by{height:1.2rem !important;width:30px}.property-booked-by__money-transfer-description.sc-igl-property-booked-by *.sc-igl-property-booked-by{margin:0 !important;margin-bottom:0 !important;margin-top:0 !important}.property-booked-by__money-transfer-description.sc-igl-property-booked-by,.property-booked-by__money-transfer-description.sc-igl-property-booked-by .sc-igl-property-booked-by:where(*,*.sc-igl-property-booked-by::before,*.sc-igl-property-booked-by::after){margin:0.5rem !important}.controlContainer.sc-igl-property-booked-by textarea.sc-igl-property-booked-by{height:60px !important}.margin3.sc-igl-property-booked-by{margin-bottom:5px !important}@media (min-width: 768px){.bookedByEmailContainer.sc-igl-property-booked-by{margin-left:37px}}.fd-property-booked-by__guest-form.sc-igl-property-booked-by{display:grid;padding:0;box-sizing:border-box;gap:0.5rem;width:100%;flex:1 1 0%}";
const IglPropertyBookedByStyle0 = iglPropertyBookedByCss;

const IglPropertyBookedBy = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.dataUpdateEvent = index.createEvent(this, "dataUpdateEvent", 7);
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
    bookingService = new booking_service.BookingService();
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
            booking_service.modifyBookingStore('selectedPaymentMethod', { code: this.paymentMethods[0].code });
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
            booking_service.setBookedByGuestManualEditState(true);
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
        booking_service.modifyBookingStore('checkout_guest', { ...(booking_service.booking_store.checkout_guest ?? {}), ...props });
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
        booking_service.setBookedByGuestManualEditState(false);
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
        return (index.h(index.Host, { key: '6825e06c93452607cb52b68e9d2063bab10f3bf3' }, index.h("div", { key: 'cee72144d3c9202153ef1db457dbb9d22f9902ff', class: "text-left mt-3" }, index.h("div", { key: 'de2cc4c041484403e1dcf26f11ffca2db6907b48', class: "d-flex", style: { alignItems: 'flex-end', gap: '0.5rem' } }, index.h("ir-picker", { key: '46ebae1a256de5836a946d9092a3eb35402baf07', class: "bookedByEmailContainer m-0 p-0", label: locales_store.locales.entries.Lcz_BookedBy, value: this.bookedByData.email, ref: el => (this.pickerRef = el), "aria-invalid": String(Boolean(this.isButtonPressed && this.bookedByData.email !== '' && utils.validateEmail(this.bookedByData.email))), withClear: true, "onText-change": event => this.fetchGuests(event.detail), debounce: 300, "onInput-picker-blurred": e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                const email = this.typedEmail;
                if (this.bookedByData.email) {
                    return;
                }
                if (this.guests.length === 0) {
                    if (index$1.z.string().email().safeParse(email).success) {
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
            }, loading: irInterceptor_store.isRequestPending('/Fetch_Exposed_Guests'), placeholder: locales_store.locales.entries.Lcz_FindEmailAddress, mode: "select-async", "onCombobox-select": this.handleComboboxSelect.bind(this) }, this.guests?.map(guest => {
            const label = `${guest.email} - ${guest.first_name} ${guest.last_name}`;
            return (index.h("ir-picker-item", { label: label, value: guest.id?.toString(), key: guest.id }, label));
        })), index.h("div", { key: '323e9ae37a136d03a8a4ada54fa23b1e1307a141', style: { paddingBottom: '0.5rem' } }, index.h("wa-tooltip", { key: '0b9fa1003add887ce52df2b7f0c25b69252f6070', for: `main_guest-search-tooltip` }, "Leave empty if email is unavailable"), index.h("wa-icon", { key: 'b3f2389b891bbcf0443105d49fc458206190c80a', name: "circle-info", id: `main_guest-search-tooltip` })))), index.h("div", { key: '5f48dd5c2de1f6f528fe890f2ab8faadfd11f75a', class: "bookedDetailsForm text-left mt-2 font-small-3 " }, index.h("div", { key: '3b2948067f017f10266e15652aeaa9cce4f0272e', class: "d-flex flex-column flex-md-row  justify-content-md-between ", style: { gap: '1rem' } }, index.h("div", { key: '3bac51c9a2b35cd5901c6bbb0464237d86801a26', class: "fd-property-booked-by__guest-form " }, index.h("ir-validator", { key: '4e4fcf3e34a3ef3030855d241a2677b0025a9b5d', value: this.bookedByData.firstName, schema: types.BookingGuestSchema.shape.first_name }, index.h("ir-input", { key: '9d174a59a17134f875951e8a8e5cb3e314487021', "onText-change": event => {
                this.updateGuest({ first_name: event.detail });
                this.handleDataChange('firstName', { target: { value: event.detail.trim() } });
            }, defaultValue: this.bookedByData.firstName, value: this.bookedByData.firstName, label: locales_store.locales.entries.Lcz_FirstName, placeholder: locales_store.locales.entries.Lcz_FirstName, required: true, name: "last_name_custom", autocomplete: "family-name" })), index.h("ir-validator", { key: '8ac2e5a7ea22449e00e72e3e7295625c770b56f5', value: this.bookedByData.lastName, schema: types.BookingGuestSchema.shape.last_name }, index.h("ir-input", { key: '77d6229f9c2f3fe403ec290e9580bebedf19c9d6', "onText-change": event => {
                this.updateGuest({ last_name: event.detail });
                this.handleDataChange('lastName', { target: { value: event.detail.trim() } });
            }, name: "first_name_custom", autocomplete: "given-name", defaultValue: this.bookedByData.lastName, value: this.bookedByData.lastName, label: locales_store.locales.entries.Lcz_LastName, placeholder: locales_store.locales.entries.Lcz_LastName, required: true })), index.h("ir-country-picker", { key: '0bdb95bd4cb687f6b8ce4f546ef7e787c8228641', label: locales_store.locales.entries.Lcz_Country, variant: "modern", testId: "main_guest_country", class: "flex-grow-1 m-0", onCountryChange: e => this.handleCountryChange(e.detail.id), countries: this.countries, country: this.countries.find(c => c.id === this.bookedByData.countryId) }), index.h("ir-mobile-input", { key: '51c9cfea02c5912db2d1e4dbbd1d5198adb1f0cb', size: "small", "onMobile-input-change": e => {
                this.handleDataChange('contactNumber', { target: { value: e.detail.formattedValue } });
            }, "onMobile-input-country-change": e => this.handleDataChange('isdCode', { target: { value: e.detail.phone_prefix } }), value: this.bookedByData.contactNumber,
            // required
            countryCode: this.countries.find(c => c.phone_prefix === this.bookedByData.isdCode)?.code, countries: this.countries }), index.h("wa-select", { key: '2125b0599c83e86cdbd442d409f384c7542eb330', size: "small", label: locales_store.locales.entries.Lcz_YourArrivalTime, "data-testid": "arrival_time", "aria-disabled": String(Boolean(this.isButtonPressed && this.bookedByData.selectedArrivalTime.code === '')), id: v4.v4(), defaultValue: this.arrivalTimeList[0].CODE_NAME, value: this.bookedByData.selectedArrivalTime.code, onchange: event => this.handleDataChange('selectedArrivalTime', event) }, this.arrivalTimeList.map(time => (index.h("wa-option", { value: time.CODE_NAME, selected: this.bookedByData.selectedArrivalTime.code === time.CODE_NAME }, time.CODE_VALUE_EN))))), index.h("div", { key: '11228e49625482d95b218dffe6a8e8818071f103', class: "p-0 flex-fill  ml-md-3 d-flex flex-column", style: { gap: '0.5rem' } }, index.h("wa-textarea", { key: 'b261f17f188e04c5b40057fac097c71355ccfd40', onchange: event => this.handleDataChange('message', event), size: "small", value: this.bookedByData.message, defaultValue: this.bookedByData.message, label: locales_store.locales.entries.Lcz_AnyMessageForUs, rows: 4 }), this.paymentMethods.length > 1 && (index.h("wa-select", { key: '954c05d50592413b6b22efbc0f0a9796c81311e7', label: 'Payment Method', size: "small", value: booking_service.booking_store?.selectedPaymentMethod?.code, onchange: e => booking_service.modifyBookingStore('selectedPaymentMethod', {
                code: e.target.value,
            }) }, this.paymentMethods.map(p => (index.h("wa-option", { value: p.code }, p.description))))), booking_service.booking_store.selectedPaymentMethod?.code === '001' && (index.h(index.Fragment, { key: 'a377a8ca9689b2da005f19d3e0f3a78b5002d755' }, index.h("ir-input", { key: '4a4c96dc02724e8869d15cc7789f5407851b9506', value: this.bookedByData.cardNumber, defaultValue: this.bookedByData.cardNumber, "onText-change": e => this.handleCreditCardDataChange('cardNumber', e.detail.trim()), label: locales_store.locales.entries.Lcz_CardNumber }), index.h("ir-input", { key: '106e36564bcf1317492a2f60c9ecfae72f8e19dc', value: this.bookedByData.cardHolderName, defaultValue: this.bookedByData.cardHolderName, "onText-change": e => this.handleCreditCardDataChange('cardHolderName', e.detail.trim()), label: locales_store.locales.entries.Lcz_CardHolderName }), index.h("ir-input", { key: '699691a70f9d43ed3cb76b2d49d61331173e6e0f', "onText-change": e => {
                const [month, year] = e.detail.split('/');
                this.handleCreditCardDataChange('expiryYear', month ?? '');
                this.handleCreditCardDataChange('expiryMonth', year ?? '');
            }, value: this.expiryDate, mask: {
                mask: 'MM/YY',
                placeholderChar: '_',
                blocks: {
                    MM: {
                        mask: index$2.IMask.MaskedRange,
                        from: 1,
                        to: 12,
                        maxLength: 2,
                    },
                    YY: {
                        mask: index$2.IMask.MaskedRange,
                        from: new Date().getFullYear() % 100,
                        to: (new Date().getFullYear() % 100) + 20,
                        maxLength: 2,
                    },
                },
            }, label: locales_store.locales.entries.Lcz_ExpiryDate }))), booking_service.booking_store.selectedPaymentMethod?.code === '005' && (index.h("div", { key: '46d624a36791c72b8192b43c61c1930d170edaf4', class: "form-group mt-md-1 mt-1 p-0 d-flex flex-column flex-md-row align-items-md-center" }, index.h("label", { key: '459cc87c5ebedc30c3a982829c8080ee72012fe4', class: "p-0 m-0 margin3" }), index.h("div", { key: '9993d8cadb42472acd828d489f06fefb334526bb', class: "p-0 m-0  controlContainer flex-fill" }, index.h("div", { key: 'b3bffa90aaa224b27b49a3f90798ef4e0b9728de', class: "property-booked-by__money-transfer-description", innerHTML: this.paymentMethods.find(p => p.code === '005')?.localizables.find(l => l.language.code.toLowerCase() === 'en')?.description })))), index.h("wa-checkbox", { key: 'f67205559984d8034874892b6b171e41248dbe33', checked: this.bookedByData.emailGuest, onchange: event => this.handleDataChange('emailGuest', event) }, locales_store.locales.entries.Lcz_EmailTheGuest))))));
    }
};
IglPropertyBookedBy.style = IglPropertyBookedByStyle0;

exports.igl_book_property_footer = IglBookPropertyFooter;
exports.igl_book_property_header = IglBookPropertyHeader;
exports.igl_booking_form = IglBookingForm;
exports.igl_booking_overview_page = IglBookingOverviewPage;
exports.igl_property_booked_by = IglPropertyBookedBy;

//# sourceMappingURL=igl-book-property-footer_5.cjs.entry.js.map