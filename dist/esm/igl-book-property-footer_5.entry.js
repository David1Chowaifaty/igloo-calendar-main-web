import { r as registerInstance, c as createEvent, h, F as Fragment, H as Host } from './index-BYqrdgY9.js';
import { l as locales } from './locales.store-C9qsbKR0.js';
import { c as calendar_data } from './calendar-data-BebdClG4.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { i as isRequestPending } from './ir-interceptor.store-CyWfUv6a.js';
import { B as BookingService, b as booking_store, s as setBookingDraft, m as modifyBookingStore, f as setBookedByGuestManualEditState } from './booking.store-7NO3urZm.js';
import { l as libExports } from './index-DeW5X45W.js';
import { d as showToast, w as validateEmail } from './utils-h4Y9o8Os.js';
import { f as formatDate } from './ir-date-VwsP30iT.js';
import { a as formatBookingNumber, f as formatAmount } from './number-BZWB3cYi.js';
import './booking.dto-DpE31yhG.js';
import { I as IMask } from './index-BQB1ooJC.js';
import { B as BookingGuestSchema } from './types-C7GI5X38.js';
import { v as v4 } from './v4-CK3_k8jD.js';
import './index-CimhgHoX.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './IBooking-xt_aVEnI.js';
import './booking-D-2iB90i.js';
import './functions-DZw5tp3g.js';
import './commonSchemas-ByEkDTMV.js';
import './type-D7rOPtKA.js';

const iglBookPropertyFooterCss = () => `.sc-igl-book-property-footer-h{width:100% !important;background:#000}`;

const IglBookPropertyFooter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.buttonClicked = createEvent(this, "buttonClicked");
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
        return (h("div", { class: this.shouldRenderTwoButtons() ? ` ${this.editNext(label)}` : 'flex-fill' }, h("ir-custom-button", { type: type, form: form, size: 'm', loading: isLoading, appearance: appearance, variant: variant, disabled: disabled, onClickHandler: () => {
                this.buttonClicked.emit({ key: value });
            }, class: "full-width" }, label)));
    }
    shouldRenderTwoButtons() {
        return this.isEventType('PLUS_BOOKING') || this.isEventType('ADD_ROOM') || this.isEventType('EDIT_BOOKING');
    }
    render() {
        if (this.page === 'page_one') {
            return (h(Host, null, this.isEventType('EDIT_BOOKING') ? (h(Fragment, null, this.renderButton({ value: 'cancel', label: locales.entries.Lcz_Cancel, appearance: 'filled', variant: 'neutral' }), this.shouldRenderTwoButtons() &&
                this.renderButton({
                    value: 'next',
                    label: `${locales.entries.Lcz_Next}`,
                    icon_name: 'angles_right',
                    variant: 'brand',
                    appearance: 'accent',
                }))) : (h(Fragment, null, this.renderButton({ value: 'cancel', label: locales.entries.Lcz_Cancel, appearance: 'filled', variant: 'neutral' }), this.shouldRenderTwoButtons() &&
                this.renderButton({ value: 'next', label: `${locales.entries.Lcz_Next}`, icon_name: 'angles_right', variant: 'brand', appearance: 'accent' })))));
        }
        const showBookAndCheckin = calendar_data.checkin_enabled && hooks(new Date(this.dateRangeData?.fromDate)).isSame(new Date(), 'day');
        return (h(Fragment, null, this.isEditOrAddRoomEvent ? (h(Fragment, null, this.renderButton({ value: 'back', icon_position: 'left', label: locales.entries.Lcz_Back, icon_name: 'angles_left', appearance: 'filled', variant: 'neutral' }), this.renderButton({ value: 'save', label: locales.entries.Lcz_Save, isLoading: this.isLoading === 'save', variant: 'brand', appearance: 'accent' }))) : (h(Fragment, null, this.renderButton({ value: 'back', icon_position: 'left', label: locales.entries.Lcz_Back, icon_name: 'angles_left', appearance: 'filled', variant: 'neutral' }), this.renderButton({
            value: 'book',
            type: 'submit',
            form: 'new_booking_form',
            label: locales.entries.Lcz_Book,
            isLoading: this.isLoading === 'book',
            variant: 'brand',
            appearance: showBookAndCheckin ? 'outlined' : 'accent',
        }), showBookAndCheckin &&
            this.renderButton({
                type: 'submit',
                form: 'new_booking_form',
                value: 'bookAndCheckIn',
                label: locales.entries.Lcz_BookAndChekcIn,
                isLoading: this.isLoading === 'bookAndCheckIn',
                variant: 'brand',
                appearance: 'accent',
            })))));
    }
};
IglBookPropertyFooter.style = iglBookPropertyFooterCss();

const iglBookPropertyHeaderCss = () => `.sc-igl-book-property-header-h{display:flex;flex-direction:column;text-align:start;gap:1rem}.sourceContainer.sc-igl-book-property-header{max-width:350px}.message-label.sc-igl-book-property-header{font-size:80%}.fd-book-property__constraints-container.sc-igl-book-property-header,.fd-book-property__header-container.sc-igl-book-property-header{display:flex;flex-direction:column;gap:0.5rem;flex-wrap:wrap}@media (min-width: 768px){.fd-book-property__constraints-container.sc-igl-book-property-header,.fd-book-property__header-container.sc-igl-book-property-header{flex-direction:row;align-items:center}.fd-book-property__adults-select.sc-igl-book-property-header{width:100px}.fd-book-property__children-select.sc-igl-book-property-header{width:170px}}.ir-text-end.sc-igl-book-property-header{text-align:end}`;

const IglBookPropertyHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.splitBookingDropDownChange = createEvent(this, "splitBookingDropDownChange");
        this.checkClicked = createEvent(this, "checkClicked");
        this.buttonClicked = createEvent(this, "buttonClicked");
        this.spiltBookingSelected = createEvent(this, "spiltBookingSelected");
        this.animateIrSelect = createEvent(this, "animateIrSelect");
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
    bookingService = new BookingService();
    adultAnimationContainer;
    async fetchExposedBookings(value) {
        this.isLoading = true;
        this.bookings = await this.bookingService.fetchExposedBookings(value, this.propertyId, hooks(this.bookingDataDefaultDateRange.fromDate).format('YYYY-MM-DD'), hooks(this.bookingDataDefaultDateRange.toDate).format('YYYY-MM-DD'));
        this.isLoading = false;
    }
    getSplitBookingList() {
        return (h("ir-picker", { mode: "select-async", class: "sourceContainer", debounce: 300, "onText-change": e => {
                this.fetchExposedBookings(e.detail);
            }, defaultValue: Object.keys(this.bookedByInfoData).length > 1 ? this.bookedByInfoData.bookingNumber?.toString() : '', value: Object.keys(this.bookedByInfoData).length > 1 ? this.bookedByInfoData.bookingNumber?.toString() : '', label: `${locales.entries.Lcz_Tobooking}#`, placeholder: locales.entries.Lcz_BookingNumber, loading: this.isLoading, "onCombobox-select": e => {
                const booking = this.bookings?.find(b => b.booking_nbr?.toString() === e.detail.item.value);
                this.spiltBookingSelected.emit({ key: 'select', data: booking });
            } }, this.bookings?.map(b => {
            const label = `${b.booking_nbr} ${b.guest.first_name} ${b.guest.last_name}`;
            return (h("ir-picker-item", { value: b.booking_nbr?.toString(), label: label }, `${formatBookingNumber(b.booking_nbr)} ${b.guest.first_name} ${b.guest.last_name}`));
        })));
    }
    getSourceNode() {
        const { sources } = booking_store.selects;
        return (h("wa-select", { size: "s", placeholder: locales.entries.Lcz_Source, value: booking_store.bookingDraft.source?.id?.toString(), defaultValue: booking_store.bookingDraft.source?.id, id: "xSmallSelect", "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: evt => {
                setBookingDraft({ source: sources.find(s => s.id === evt.target.value) });
            } }, sources.map(option => {
            if (option.type === 'LABEL') {
                return h("small", null, option.description);
            }
            return h("wa-option", { value: option.id?.toString() }, option.description);
        })));
    }
    getAdultChildConstraints() {
        const { adults, children } = booking_store.bookingDraft.occupancy;
        return (h(Fragment, null, h("ir-validator", { value: adults, schema: libExports.z.number().min(1), autovalidate: this.autoValidate }, h("wa-select", { class: "fd-book-property__adults-select", "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: e => {
                setBookingDraft({
                    occupancy: {
                        children,
                        adults: Number(e.target.value),
                    },
                });
            }, value: adults?.toString(), defaultValue: adults?.toString(), placeholder: locales.entries.Lcz_AdultsCaption, size: "s" }, Array.from(Array(this.adultChildConstraints.adult_max_nbr), (_, i) => i + 1).map(option => (h("wa-option", { value: option?.toString() }, option))))), this.adultChildConstraints.child_max_nbr > 0 && (h("wa-select", { class: "fd-book-property__children-select", "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: e => setBookingDraft({
                occupancy: {
                    adults,
                    children: Number(e.target.value),
                },
            }), defaultValue: children?.toString(), value: children?.toString(), placeholder: this.renderChildCaption(), size: "s" }, Array.from(Array(this.adultChildConstraints.child_max_nbr), (_, i) => i + 1).map(option => (h("wa-option", { value: option?.toString() }, option)))))));
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
        const { occupancy } = booking_store.bookingDraft;
        if (this.isEventType('SPLIT_BOOKING') && Object.keys(this.bookedByInfoData).length <= 1) {
            showToast({
                type: 'error',
                title: locales.entries.Lcz_ChooseBookingNumber,
            });
        }
        else if (this.isEventType('ADD_ROOM') || this.isEventType('SPLIT_BOOKING')) {
            const initialToDate = hooks(new Date(this.bookedByInfoData.to_date || this.defaultDaterange.to_date));
            const initialFromDate = hooks(new Date(this.bookedByInfoData.from_date || this.defaultDaterange.from_date));
            const selectedFromDate = hooks(new Date(this.dateRangeData.fromDate));
            const selectedToDate = hooks(new Date(this.dateRangeData.toDate));
            if (selectedToDate.isBefore(initialFromDate) || selectedFromDate.isAfter(initialToDate)) {
                showToast({
                    type: 'error',
                    title: `${locales.entries.Lcz_CheckInDateShouldBeMAx.replace('%1', formatDate(new Date(this.bookedByInfoData.from_date || this.defaultDaterange.from_date), 'ddd, DD MMM YYYY')).replace('%2', formatDate(new Date(this.bookedByInfoData.to_date || this.defaultDaterange.to_date), 'ddd, DD MMM YYYY'))}  `,
                });
                return;
            }
            else if (Number(occupancy.adults) === 0) {
                showToast({ type: 'error', title: locales.entries.Lcz_PlzSelectNumberOfGuests });
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
        //     title: `${locales.entries.Lcz_CheckInDateShouldBeMAx.replace(
        //       '%1',
        //       formatDate(new Date(this.bookedByInfoData.from_date || this.defaultDaterange.from_date), 'ddd, DD MMM YYYY'),
        //     ).replace('%2', formatDate(new Date(this.bookedByInfoData.to_date || this.defaultDaterange.to_date), 'ddd, DD MMM YYYY'))}  `,
        //     description: '',
        //   });
        // }
        else if (Number(occupancy.adults) === 0) {
            // this.adultAnimationContainer.play = true;
            this.autoValidate = true;
            showToast({ type: 'error', title: locales.entries.Lcz_PlzSelectNumberOfGuests, description: '' });
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
            return hooks().add(-1, 'months').startOf('month').format('YYYY-MM-DD');
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
        return (h(Host, { key: '187de4a8816dab2703efaaa0e91307d38771213f' }, this.isEventType('SPLIT_BOOKING') && this.getSplitBookingList(), h("div", { key: 'c64e51d2acd427c5e0bc532e29570cb2cac0c37f', class: `fd-book-property__header-container` }, showSourceNode && this.getSourceNode(), h("ir-date-range", { key: 'ba2651082ec262065b920d0557fef1046dd0f427', "data-testid": "date_picker", variant: "booking", dateLabel: locales.entries.Lcz_Dates, maxDate: this.getMaxDate(), minDate: this.getMinDate(), disabled: (this.isEventType('BAR_BOOKING') && !this.wasBlockedUnit) || this.isEventType('SPLIT_BOOKING'), defaultData: this.bookingDataDefaultDateRange }), !this.isEventType('EDIT_BOOKING') && this.getAdultChildConstraints(), h("ir-custom-button", { key: '62135ec0cd59eaa5c68b8d18faa98de8afee443b', loading: isRequestPending('/Check_Availability'), variant: "brand", onClickHandler: () => this.handleButtonClicked() }, locales.entries.Lcz_Check)), h("p", { key: '8b2a17781399cbcbb80414128c06dc067d3fafa8', class: "ir-text-end message-label" }, calendar_data.tax_statement)));
    }
};
IglBookPropertyHeader.style = iglBookPropertyHeaderCss();

const iglBookingFormCss = () => `.sc-igl-booking-form-h{display:flex;flex-direction:column}.ir-me-1.sc-igl-booking-form{margin-inline-end:0.25rem}.ir-text-end.sc-igl-booking-form{text-align:end}`;

const IglBookingForm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dataUpdateEvent = createEvent(this, "dataUpdateEvent");
        this.buttonClicked = createEvent(this, "buttonClicked");
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
        return (h("form", { key: '203137c3cac2f4b24dea75a436103d04d24de5ae', class: "d-flex flex-column h-100", id: "new_booking_form", autoComplete: "off", onSubmit: e => {
                e.preventDefault();
            } }, h("div", { key: 'f5f0588325bf35cdae03a32c3d55e7998028cd39', class: "d-flex flex-wrap" }, h("ir-date-view", { key: '5b7efe9b5f55006dd0663731a218f540c4a319a4', class: "ir-me-1 flex-fill font-weight-bold font-medium-1", from_date: new Date(this.dateRangeData.fromDate), to_date: new Date(this.dateRangeData.toDate) }), this.guestData.length > 1 && (h("div", { key: 'f8d3323985816b0fa5d6203b70bcb214cec9ea65', class: "mt-1 mt-md-0 ir-text-end" }, locales.entries.Lcz_TotalPrice, " ", h("span", { key: '1e7f2af2d5d3b103d98e1b781c6ee221d1537b19', class: "font-weight-bold font-medium-1" }, formatAmount(this.currency.symbol, this.bookingData.TOTAL_PRICE || '0'))))), Object.values(booking_store.ratePlanSelections).map(val => Object.values(val).map(ratePlan => {
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
            } }))));
    }
};
IglBookingForm.style = iglBookingFormCss();

const iglBookingOverviewPageCss = () => `.sc-igl-booking-overview-page-h{display:block}.sc-igl-booking-overview-page-h>*.sc-igl-booking-overview-page{margin:0;padding:auto}.scrollContent.sc-igl-booking-overview-page{height:calc(100% - 79px);overflow:auto;position:relative}.loading-container.sc-igl-booking-overview-page{display:flex;align-items:center;justify-content:center;height:100%;background:white;position:absolute;inset:0;z-index:100}.loader.sc-igl-booking-overview-page{width:1.25rem;height:1.25rem;border:2.5px solid #3f3f3f;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}.ir-text-start.sc-igl-booking-overview-page{text-align:start}`;

const IglBookingOverviewPage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.roomsDataUpdate = createEvent(this, "roomsDataUpdate");
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
            return hooks().format('YYYY-MM-DD');
        }
        const from_date = hooks(this.bookingData.FROM_DATE, 'YYYY-MM-DD');
        const today = hooks();
        if (from_date.isAfter(today)) {
            return today.add(-2, 'weeks').format('YYYY-MM-DD');
        }
        return from_date.add(-2, 'weeks').format('YYYY-MM-DD');
    }
    render() {
        return (h(Host, { key: '448fea63285acefe3391dcf1110a2036fa50ca6f' }, h("igl-book-property-header", { key: 'c88456dde44ab6aba7c4d165ba4a92a4875c4e93', wasBlockedUnit: this.wasBlockedUnit, bookedByInfoData: this.bookedByInfoData, defaultDaterange: this.defaultDaterange, dateRangeData: this.dateRangeData, minDate: this.setMinDate(),
            // minDate={this.isEventType('ADD_ROOM') || this.isEventType('SPLIT_BOOKING') ? this.bookedByInfoData.from_date || this.bookingData.FROM_DATE : undefined}
            splitBookingId: this.showSplitBookingOption, bookingData: this.bookingData, message: this.message, bookingDataDefaultDateRange: this.bookingData.defaultDateRange, showSplitBookingOption: this.showSplitBookingOption, adultChildConstraints: this.adultChildConstraints, splitBookings: this.getSplitBookings(), propertyId: this.propertyId }), h("div", { key: 'a4cd8fa92d905f241838abfd20607c5c98f38e5b', class: " ir-text-start" }, isRequestPending('/Check_Availability') && this.isEventType('EDIT_BOOKING') ? (h("div", { class: "loading-container" }, h("div", { class: "loader" }))) : (h(Fragment, null, booking_store.roomTypes?.map(roomType => (h("igl-room-type", {
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
        registerInstance(this, hostRef);
        this.dataUpdateEvent = createEvent(this, "dataUpdateEvent");
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
    bookingService = new BookingService();
    arrivalTimeList = [];
    currentMonth = '01';
    country;
    paymentMethods = [];
    pickerRef;
    componentWillLoad() {
        this.assignCountryCode();
        this.initializeDateData();
        this.populateBookedByData();
        this.paymentMethods = calendar_data.property.allowed_payment_methods.filter(p => p.is_active && !p.is_payment_gateway);
        if (this.paymentMethods.length > 0) {
            modifyBookingStore('selectedPaymentMethod', { code: this.paymentMethods[0].code });
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
            setBookedByGuestManualEditState(true);
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
        modifyBookingStore('checkout_guest', { ...(booking_store.checkout_guest ?? {}), ...props });
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
        setBookedByGuestManualEditState(false);
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
        return (h(Host, { key: 'a4febe47821dba02721b101b6d860db6b9f42722' }, h("div", { key: '3539eeb5e93d3e8e38d58e7e9b0d94949ab46c58', class: "ir-text-start mt-3" }, h("div", { key: '545323f71cb770c3e14dce3a7257d68b83a0aafd', class: "d-flex", style: { alignItems: 'flex-end', gap: '0.5rem' } }, h("ir-picker", { key: 'a06c7448bba9b8c17f310d7f6c904b1cfefb83d5', class: "bookedByEmailContainer m-0 p-0", label: locales.entries.Lcz_BookedBy, value: this.bookedByData.email, ref: el => (this.pickerRef = el), "aria-invalid": String(Boolean(this.isButtonPressed && this.bookedByData.email !== '' && validateEmail(this.bookedByData.email))), withClear: true, "onText-change": event => this.fetchGuests(event.detail), debounce: 300, "onInput-picker-blurred": e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                const email = this.typedEmail;
                if (this.bookedByData.email) {
                    return;
                }
                if (this.guests.length === 0) {
                    if (libExports.z.string().email().safeParse(email).success) {
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
            }, loading: isRequestPending('/Fetch_Exposed_Guests'), placeholder: locales.entries.Lcz_FindEmailAddress, mode: "select-async", "onCombobox-select": this.handleComboboxSelect.bind(this) }, this.guests?.map(guest => {
            const label = `${guest.email} - ${guest.first_name} ${guest.last_name}`;
            return (h("ir-picker-item", { label: label, value: guest.id?.toString(), key: guest.id }, label));
        })), h("div", { key: 'a256f463bfd053e084ab6e63e4cb313469225835', style: { paddingBottom: '0.5rem' } }, h("wa-tooltip", { key: '06dda24e643c26cccf65203cfe632e2bd93969b6', for: `main_guest-search-tooltip` }, "Leave empty if email is unavailable"), h("wa-icon", { key: '4af660d810226e632bcddb7086d187f2b6740dba', name: "circle-info", id: `main_guest-search-tooltip` })))), h("div", { key: '2d06f9bfe3528516409a5fefcfbb9e5c900a766c', class: "bookedDetailsForm ir-text-start mt-2 font-small-3 " }, h("div", { key: '1045df27b919391e220989b1f229badb30d14801', class: "d-flex flex-column flex-md-row  justify-content-md-between ", style: { gap: '1rem' } }, h("div", { key: '99b329c06a5f01ac9cf7b8ebf4de97046c9cb026', class: "fd-property-booked-by__guest-form " }, h("ir-validator", { key: '2d9776436b5e31f44b2e6ed4c85acb39b5feff7e', value: this.bookedByData.firstName, schema: BookingGuestSchema.shape.first_name }, h("ir-input", { key: '57dac1a0a7a4aaef328372e13b8cc1ac09a3e605', "onText-change": event => {
                this.updateGuest({ first_name: event.detail });
                this.handleDataChange('firstName', { target: { value: event.detail.trim() } });
            }, defaultValue: this.bookedByData.firstName, value: this.bookedByData.firstName, label: locales.entries.Lcz_FirstName, placeholder: locales.entries.Lcz_FirstName, required: true, name: "last_name_custom", autocomplete: "family-name" })), h("ir-validator", { key: 'b7504819cc4cd49b15290c92e3f1e8336f7b221f', value: this.bookedByData.lastName, schema: BookingGuestSchema.shape.last_name }, h("ir-input", { key: 'cd9c5df083d4eb018f27f10cb03720805fc79d7c', "onText-change": event => {
                this.updateGuest({ last_name: event.detail });
                this.handleDataChange('lastName', { target: { value: event.detail.trim() } });
            }, name: "first_name_custom", autocomplete: "given-name", defaultValue: this.bookedByData.lastName, value: this.bookedByData.lastName, label: locales.entries.Lcz_LastName, placeholder: locales.entries.Lcz_LastName, required: true })), h("ir-country-picker", { key: '72510afdaa646af1d40319aa83630fdb443d7bc3', label: locales.entries.Lcz_Country, variant: "modern", testId: "main_guest_country", class: "flex-grow-1 m-0", onCountryChange: e => this.handleCountryChange(e.detail.id), countries: this.countries, country: this.countries.find(c => c.id === this.bookedByData.countryId) }), h("ir-mobile-input", { key: '521ed16e266a0adde2ce1d86b7c372034f1268bd', size: "s", "onMobile-input-change": e => {
                this.handleDataChange('contactNumber', { target: { value: e.detail.formattedValue } });
            }, "onMobile-input-country-change": e => this.handleDataChange('isdCode', { target: { value: e.detail.phone_prefix } }), value: this.bookedByData.contactNumber,
            // required
            countryCode: this.countries.find(c => c.phone_prefix === this.bookedByData.isdCode)?.code, countries: this.countries }), h("wa-select", { key: 'c7e732f9b26d0c60d5139ddaa3a5ae783185d26b', size: "s", label: locales.entries.Lcz_YourArrivalTime, "data-testid": "arrival_time", "aria-disabled": String(Boolean(this.isButtonPressed && this.bookedByData.selectedArrivalTime.code === '')), id: v4(), defaultValue: this.arrivalTimeList[0].CODE_NAME, value: this.bookedByData.selectedArrivalTime.code, onchange: event => this.handleDataChange('selectedArrivalTime', event) }, this.arrivalTimeList.map(time => (h("wa-option", { value: time.CODE_NAME, selected: this.bookedByData.selectedArrivalTime.code === time.CODE_NAME }, time.CODE_VALUE_EN))))), h("div", { key: '831333d02c3b0afc9872131934722de28c5e8358', class: "p-0 flex-fill  ml-md-3 d-flex flex-column", style: { gap: '0.5rem' } }, h("wa-textarea", { key: '99677555592aa458f3c3d8613b27f52bef6f684d', onchange: event => this.handleDataChange('message', event), size: "s", value: this.bookedByData.message, defaultValue: this.bookedByData.message, label: locales.entries.Lcz_AnyMessageForUs, rows: 4 }), this.paymentMethods.length > 1 && (h("wa-select", { key: '3fb7ec3dff03cb7bd863be5d9aaebd5dcda54873', label: 'Payment Method', size: "s", value: booking_store?.selectedPaymentMethod?.code, onchange: e => modifyBookingStore('selectedPaymentMethod', {
                code: e.target.value,
            }) }, this.paymentMethods.map(p => (h("wa-option", { value: p.code }, p.description))))), booking_store.selectedPaymentMethod?.code === '001' && (h(Fragment, { key: '85ad1e4d7df0782478b2b5536a950bf61f0d0205' }, h("ir-input", { key: '7a32e575de072cf832b9da46e4fb4dd90d75e753', value: this.bookedByData.cardNumber, defaultValue: this.bookedByData.cardNumber, "onText-change": e => this.handleCreditCardDataChange('cardNumber', e.detail.trim()), label: locales.entries.Lcz_CardNumber }), h("ir-input", { key: 'e7f313b02094437aa36bf984bf9b7cd38b98fecf', value: this.bookedByData.cardHolderName, defaultValue: this.bookedByData.cardHolderName, "onText-change": e => this.handleCreditCardDataChange('cardHolderName', e.detail.trim()), label: locales.entries.Lcz_CardHolderName }), h("ir-input", { key: 'c77cbd3bc5a0f6712dcdce4dce26d97b40048ae6', "onText-change": e => {
                const [month, year] = e.detail.split('/');
                this.handleCreditCardDataChange('expiryYear', month ?? '');
                this.handleCreditCardDataChange('expiryMonth', year ?? '');
            }, value: this.expiryDate, mask: {
                mask: 'MM/YY',
                placeholderChar: '_',
                blocks: {
                    MM: {
                        mask: IMask.MaskedRange,
                        from: 1,
                        to: 12,
                        maxLength: 2,
                    },
                    YY: {
                        mask: IMask.MaskedRange,
                        from: new Date().getFullYear() % 100,
                        to: (new Date().getFullYear() % 100) + 20,
                        maxLength: 2,
                    },
                },
            }, label: locales.entries.Lcz_ExpiryDate }))), booking_store.selectedPaymentMethod?.code === '005' && (h("div", { key: '1f427d9ade0cb1a49bc089760efe732bdd92c36a', class: "form-group mt-md-1 mt-1 p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: '7340e7be3532d538b79ddc9790480d2b7cc30495', class: "p-0 m-0 margin3" }), h("div", { key: '9a89c330c71cd1cfebed24e7b8a38917535d4ff9', class: "p-0 m-0  controlContainer flex-fill" }, h("div", { key: 'edcc257c1cbecfc714d20633ac2f48ecea348b23', class: "property-booked-by__money-transfer-description", innerHTML: this.paymentMethods.find(p => p.code === '005')?.localizables.find(l => l.language.code.toLowerCase() === 'en')?.description })))), h("wa-checkbox", { key: 'ed65cfb7d08276abdc4dc75456dd9849ed3180c7', checked: this.bookedByData.emailGuest, onchange: event => this.handleDataChange('emailGuest', event) }, locales.entries.Lcz_EmailTheGuest))))));
    }
};
IglPropertyBookedBy.style = iglPropertyBookedByCss();

export { IglBookPropertyFooter as igl_book_property_footer, IglBookPropertyHeader as igl_book_property_header, IglBookingForm as igl_booking_form, IglBookingOverviewPage as igl_booking_overview_page, IglPropertyBookedBy as igl_property_booked_by };
