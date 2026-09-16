import { r as registerInstance, c as createEvent, h, F as Fragment, H as Host } from './index-CeHdrJeH.js';
import { c as calendar_data } from './calendar-data-BZeaTRgj.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { t } from './t-Bk78Wumj.js';
import { i as isRequestPending } from './ir-interceptor.store-302gZvQv.js';
import { B as BookingService, b as booking_store, s as setBookingDraft, m as modifyBookingStore, f as setBookedByGuestManualEditState } from './booking.service-CMmse-Np.js';
import { h as showToast, v as validateEmail } from './utils-BtgW0txG.js';
import { f as formatDate } from './ir-date-DFR8GVLZ.js';
import { a as formatBookingNumber, b as formatCount, f as formatAmount } from './number-DegV2dS7.js';
import { n as numberType, s as stringType } from './types-BG9uwIsj.js';
import './booking.dto-FOZcMojD.js';
import './locales.store-CXJn6ls-.js';
import { I as IMask } from './index-BQB1ooJC.js';
import { B as BookingGuestSchema } from './types-BV-pT2kF.js';
import { v as v4 } from './v4-CK3_k8jD.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './IBooking-B-QQODPH.js';
import './booking-DuWdYels.js';
import './functions-D_076Gzf.js';
import './commonSchemas-DZl_Ygcg.js';
import './language-observer-CHgzsZkY.js';
import './type-DUaIPoJQ.js';

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
        return (h("div", { class: this.shouldRenderTwoButtons() ? ` ${this.editNext(value)}` : 'flex-fill' }, h("ir-custom-button", { type: type, form: form, size: 'm', loading: isLoading, appearance: appearance, variant: variant, disabled: disabled, onClickHandler: () => {
                this.buttonClicked.emit({ key: value });
            }, class: "full-width" }, label)));
    }
    shouldRenderTwoButtons() {
        return this.isEventType('PLUS_BOOKING') || this.isEventType('ADD_ROOM') || this.isEventType('EDIT_BOOKING');
    }
    render() {
        if (this.page === 'page_one') {
            return (h(Host, null, this.isEventType('EDIT_BOOKING') ? (h(Fragment, null, this.renderButton({ value: 'cancel', label: t('Lcz_Cancel', { fallback: 'Cancel' }), appearance: 'filled', variant: 'neutral' }), this.shouldRenderTwoButtons() &&
                this.renderButton({
                    value: 'next',
                    label: `${t('Lcz_Next', { fallback: 'Next' })}`,
                    icon_name: 'angles_right',
                    variant: 'brand',
                    appearance: 'accent',
                }))) : (h(Fragment, null, this.renderButton({ value: 'cancel', label: t('Lcz_Cancel', { fallback: 'Cancel' }), appearance: 'filled', variant: 'neutral' }), this.shouldRenderTwoButtons() &&
                this.renderButton({ value: 'next', label: `${t('Lcz_Next', { fallback: 'Next' })}`, icon_name: 'angles_right', variant: 'brand', appearance: 'accent' })))));
        }
        const showBookAndCheckin = calendar_data.checkin_enabled && hooks(new Date(this.dateRangeData?.fromDate)).isSame(new Date(), 'day');
        return (h(Fragment, null, this.isEditOrAddRoomEvent ? (h(Fragment, null, this.renderButton({
            value: 'back',
            icon_position: 'left',
            label: t('Lcz_Back', { fallback: 'Back' }),
            icon_name: 'angles_left',
            appearance: 'filled',
            variant: 'neutral',
        }), this.renderButton({ value: 'save', label: t('Lcz_Save', { fallback: 'Save' }), isLoading: this.isLoading === 'save', variant: 'brand', appearance: 'accent' }))) : (h(Fragment, null, this.renderButton({
            value: 'back',
            icon_position: 'left',
            label: t('Lcz_Back', { fallback: 'Back' }),
            icon_name: 'angles_left',
            appearance: 'filled',
            variant: 'neutral',
        }), this.renderButton({
            value: 'book',
            type: 'submit',
            form: 'new_booking_form',
            label: t('Lcz_Book', { fallback: 'Book' }),
            isLoading: this.isLoading === 'book',
            variant: 'brand',
            appearance: showBookAndCheckin ? 'outlined' : 'accent',
        }), showBookAndCheckin &&
            this.renderButton({
                type: 'submit',
                form: 'new_booking_form',
                value: 'bookAndCheckIn',
                label: t('Lcz_BookAndChekcIn', { fallback: 'Book & check In' }),
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
            }, defaultValue: Object.keys(this.bookedByInfoData).length > 1 ? this.bookedByInfoData.bookingNumber?.toString() : '', value: Object.keys(this.bookedByInfoData).length > 1 ? this.bookedByInfoData.bookingNumber?.toString() : '', label: `${t('Lcz_Tobooking', { fallback: 'To booking' })}#`, placeholder: t('Lcz_BookingNumber', { fallback: 'Booking number' }), loading: this.isLoading, "onCombobox-select": e => {
                const booking = this.bookings?.find(b => b.booking_nbr?.toString() === e.detail.item.value);
                this.spiltBookingSelected.emit({ key: 'select', data: booking });
            } }, this.bookings?.map(b => {
            const label = `${b.booking_nbr} ${b.guest.first_name} ${b.guest.last_name}`;
            return (h("ir-picker-item", { value: b.booking_nbr?.toString(), label: label }, `${formatBookingNumber(b.booking_nbr)} ${b.guest.first_name} ${b.guest.last_name}`));
        })));
    }
    getSourceNode() {
        const { sources } = booking_store.selects;
        return (h("wa-select", { size: "s", placeholder: t('Lcz_Source', { fallback: 'Source' }), value: booking_store.bookingDraft.source?.id?.toString(), defaultValue: booking_store.bookingDraft.source?.id, id: "xSmallSelect", "onwa-hide": e => {
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
        return (h(Fragment, null, h("ir-validator", { value: adults, schema: numberType().min(1), autovalidate: this.autoValidate }, h("wa-select", { class: "fd-book-property__adults-select", "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: e => {
                setBookingDraft({
                    occupancy: {
                        children,
                        adults: Number(e.target.value),
                    },
                });
            }, value: adults?.toString(), defaultValue: adults?.toString(), placeholder: t('Lcz_Adults', { fallback: 'adults' }), size: "s" }, Array.from(Array(this.adultChildConstraints.adult_max_nbr), (_, i) => i + 1).map(option => (h("wa-option", { value: option?.toString() }, formatCount(option)))))), this.adultChildConstraints.child_max_nbr > 0 && (h("wa-select", { class: "fd-book-property__children-select", "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: e => setBookingDraft({
                occupancy: {
                    adults,
                    children: Number(e.target.value),
                },
            }), defaultValue: children?.toString(), value: children?.toString(), placeholder: this.renderChildCaption(), size: "s" }, Array.from(Array(this.adultChildConstraints.child_max_nbr), (_, i) => i + 1).map(option => (h("wa-option", { value: option?.toString() }, formatCount(option))))))));
    }
    renderChildCaption() {
        const maxAge = this.adultChildConstraints.child_max_age;
        let years = t('Lcz_Years', { fallback: 'years' });
        if (maxAge === 1) {
            years = t('Lcz_Year', { fallback: 'year' });
        }
        return `${t('Lcz_ChildCaption', { fallback: 'Child.' })} ${formatCount(0)} - ${formatCount(this.adultChildConstraints.child_max_age)} ${years}`;
    }
    handleButtonClicked() {
        const { occupancy } = booking_store.bookingDraft;
        if (this.isEventType('SPLIT_BOOKING') && Object.keys(this.bookedByInfoData).length <= 1) {
            showToast({
                type: 'error',
                title: t('Lcz_ChooseBookingNumber', { fallback: 'Choose a booking number' }),
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
                    title: `${t('Lcz_CheckInDateShouldBeMAx', { fallback: 'The check-in or check-out must fall within %1 and %2.', params: [formatDate(new Date(this.bookedByInfoData.from_date || this.defaultDaterange.from_date), 'ddd, DD MMM YYYY'), formatDate(new Date(this.bookedByInfoData.to_date || this.defaultDaterange.to_date), 'ddd, DD MMM YYYY')] })}  `,
                });
                return;
            }
            else if (Number(occupancy.adults) === 0) {
                showToast({ type: 'error', title: t('Lcz_PlzSelectNumberOfGuests', { fallback: 'Please select the number of guests' }) });
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
            showToast({ type: 'error', title: t('Lcz_PlzSelectNumberOfGuests', { fallback: 'Please select the number of guests' }), description: '' });
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
        return (h(Host, { key: 'b47bfbb711c72a0b13c8c2963e221e75b9a03b21' }, this.isEventType('SPLIT_BOOKING') && this.getSplitBookingList(), h("div", { key: 'c86b79a38fcb615395eb7d755d4c396f93c02255', class: `fd-book-property__header-container` }, showSourceNode && this.getSourceNode(), h("ir-date-range", { key: '3bd944508a8ac4e9a59afc2702769bc18fbcecb9', "data-testid": "date_picker", variant: "booking", dateLabel: t('Lcz_Dates', { fallback: 'Dates' }), maxDate: this.getMaxDate(), minDate: this.getMinDate(), disabled: (this.isEventType('BAR_BOOKING') && !this.wasBlockedUnit) || this.isEventType('SPLIT_BOOKING'), defaultData: this.bookingDataDefaultDateRange }), !this.isEventType('EDIT_BOOKING') && this.getAdultChildConstraints(), h("ir-custom-button", { key: '1b9dda389313d2058a9ea8cfe74f17d2311f6c1f', loading: isRequestPending('/Check_Availability'), variant: "brand", onClickHandler: () => this.handleButtonClicked() }, t('Lcz_Check', { fallback: 'Check' }))), h("p", { key: '2e3d45bc1b590e9a1f7ab01e07a6b66c4eccda0b', class: "ir-text-end message-label" }, calendar_data.tax_statement)));
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
        return (h("form", { key: '216ca248eb0769949c859d7591b7cd3dc64a6617', class: "d-flex flex-column h-100", id: "new_booking_form", autoComplete: "off", onSubmit: e => {
                e.preventDefault();
            } }, h("div", { key: '1c4b116e92889edf272d15cd8e096ca805d7e38e', class: "d-flex flex-wrap" }, h("ir-date-view", { key: '60c6372ac1d8d129790971b5d17bba36009a8976', class: "ir-me-1 flex-fill font-weight-bold font-medium-1", from_date: new Date(this.dateRangeData.fromDate), to_date: new Date(this.dateRangeData.toDate) }), this.guestData.length > 1 && (h("div", { key: 'b16104f98b02b271fbecfc6eec51b9e636524c5d', class: "mt-1 mt-md-0 ir-text-end" }, t('Lcz_TotalPrice', { fallback: 'Total price' }), ' ', h("span", { key: '9b68e7ae6467d7067072d05770daf7b7271d9a72', class: "font-weight-bold font-medium-1" }, formatAmount(this.currency.symbol, this.bookingData.TOTAL_PRICE || '0'))))), Object.values(booking_store.ratePlanSelections).map(val => Object.values(val).map(ratePlan => {
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
        return (h(Host, { key: '1a1fed6bd2a8e24a902ef38b4224ac80ff6b3478' }, h("igl-book-property-header", { key: '432b59bdcfd866c9c136e1b559a342a98280a9ab', wasBlockedUnit: this.wasBlockedUnit, bookedByInfoData: this.bookedByInfoData, defaultDaterange: this.defaultDaterange, dateRangeData: this.dateRangeData, minDate: this.setMinDate(),
            // minDate={this.isEventType('ADD_ROOM') || this.isEventType('SPLIT_BOOKING') ? this.bookedByInfoData.from_date || this.bookingData.FROM_DATE : undefined}
            splitBookingId: this.showSplitBookingOption, bookingData: this.bookingData, message: this.message, bookingDataDefaultDateRange: this.bookingData.defaultDateRange, showSplitBookingOption: this.showSplitBookingOption, adultChildConstraints: this.adultChildConstraints, splitBookings: this.getSplitBookings(), propertyId: this.propertyId }), h("div", { key: 'acf12353c85204cee528f6f2b0d98057ef01dd20', class: " ir-text-start" }, isRequestPending('/Check_Availability') && this.isEventType('EDIT_BOOKING') ? (h("div", { class: "loading-container" }, h("div", { class: "loader" }))) : (h(Fragment, null, booking_store.roomTypes?.map(roomType => (h("igl-room-type", {
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
        return (h(Host, { key: '3ea7d4768f8df20375756db07eae93fe496dcdee' }, h("div", { key: '4718467976d487b55afe24d55617071168266fcd', class: "ir-text-start mt-3" }, h("div", { key: '97b52c0f077fe589164248a4feee7da2070b80dd', class: "d-flex", style: { alignItems: 'flex-end', gap: '0.5rem' } }, h("ir-picker", { key: 'df1254106a09c6dd842da657d1d7f16ffa53fe5b', class: "bookedByEmailContainer m-0 p-0", label: t('Lcz_BookedBy', { fallback: 'Booked by' }), value: this.bookedByData.email, ref: el => (this.pickerRef = el), "aria-invalid": String(Boolean(this.isButtonPressed && this.bookedByData.email !== '' && validateEmail(this.bookedByData.email))), withClear: true, "onText-change": event => this.fetchGuests(event.detail), debounce: 300, "onInput-picker-blurred": e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                const email = this.typedEmail;
                if (this.bookedByData.email) {
                    return;
                }
                if (this.guests.length === 0) {
                    if (stringType().email().safeParse(email).success) {
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
            }, loading: isRequestPending('/Fetch_Exposed_Guests'), placeholder: t('Lcz_FindEmailAddress', { fallback: 'Find email address or add new' }), mode: "select-async", "onCombobox-select": this.handleComboboxSelect.bind(this) }, this.guests?.map(guest => {
            const label = `${guest.email} - ${guest.first_name} ${guest.last_name}`;
            return (h("ir-picker-item", { label: label, value: guest.id?.toString(), key: guest.id }, label));
        })), h("div", { key: '355459aeea879a6900a14f9e10d664ae84631cd6', style: { paddingBottom: '0.5rem' } }, h("wa-tooltip", { key: 'b81f11c7d626962a5f9e46a30840b1beffd87a50', for: `main_guest-search-tooltip` }, t('Lcz_LeaveEmptyIfEmailUnavailable', { fallback: 'Leave empty if email is unavailable' })), h("wa-icon", { key: 'dc229d72dfdf38169234d37fe52125befe1fa08c', name: "circle-info", id: `main_guest-search-tooltip` })))), h("div", { key: '4cb90fb55efd391e25af65a0e2993a46c3884f5f', class: "bookedDetailsForm ir-text-start mt-2 font-small-3 " }, h("div", { key: '0607a979c36f8b6f63f07b53607f9ad6b45bb474', class: "d-flex flex-column flex-md-row  justify-content-md-between ", style: { gap: '1rem' } }, h("div", { key: '3d0eed00ee05784b0e08650b9d8f2de9e5704316', class: "fd-property-booked-by__guest-form " }, h("ir-validator", { key: 'd880d44e2227bd8a77f620d427ce3b7aa6e6146a', value: this.bookedByData.firstName, schema: BookingGuestSchema.shape.first_name }, h("ir-input", { key: 'b340aa8e3cfed44c785ce4e50e55d8f3c5b42bc9', "onText-change": event => {
                this.updateGuest({ first_name: event.detail });
                this.handleDataChange('firstName', { target: { value: event.detail.trim() } });
            }, defaultValue: this.bookedByData.firstName, value: this.bookedByData.firstName, label: t('Lcz_FirstName', { fallback: 'First name' }), placeholder: t('Lcz_FirstName', { fallback: 'First name' }), required: true, name: "last_name_custom", autocomplete: "family-name" })), h("ir-validator", { key: '076a819ed60ac29af614df46731613eae7fb3f3d', value: this.bookedByData.lastName, schema: BookingGuestSchema.shape.last_name }, h("ir-input", { key: '1752c2691df058848273174320a1062b5c0c3c95', "onText-change": event => {
                this.updateGuest({ last_name: event.detail });
                this.handleDataChange('lastName', { target: { value: event.detail.trim() } });
            }, name: "first_name_custom", autocomplete: "given-name", defaultValue: this.bookedByData.lastName, value: this.bookedByData.lastName, label: t('Lcz_LastName', { fallback: 'Last name' }), placeholder: t('Lcz_LastName', { fallback: 'Last name' }), required: true })), h("ir-country-picker", { key: 'ac678b0111fcb68a100c6d6ffba13182cbaa1090', label: t('Lcz_Country', { fallback: 'Country' }), variant: "modern", testId: "main_guest_country", class: "flex-grow-1 m-0", onCountryChange: e => this.handleCountryChange(e.detail.id), countries: this.countries, country: this.countries.find(c => c.id === this.bookedByData.countryId) }), h("ir-mobile-input", { key: '781c1881e10a78e0b08961d93afbd4ffa9a1d9b0', size: "s", "onMobile-input-change": e => {
                this.handleDataChange('contactNumber', { target: { value: e.detail.formattedValue } });
            }, "onMobile-input-country-change": e => this.handleDataChange('isdCode', { target: { value: e.detail.phone_prefix } }), value: this.bookedByData.contactNumber,
            // required
            countryCode: this.countries.find(c => c.phone_prefix === this.bookedByData.isdCode)?.code, countries: this.countries }), h("wa-select", { key: '654fd59027ada6d4e393bc534371fccdee3db553', size: "s", label: t('Lcz_YourArrivalTime', { fallback: 'Your arrival time' }), "data-testid": "arrival_time", "aria-disabled": String(Boolean(this.isButtonPressed && this.bookedByData.selectedArrivalTime.code === '')), id: v4(), defaultValue: this.arrivalTimeList[0].CODE_NAME, value: this.bookedByData.selectedArrivalTime.code, onchange: event => this.handleDataChange('selectedArrivalTime', event) }, this.arrivalTimeList.map(time => (h("wa-option", { value: time.CODE_NAME, selected: this.bookedByData.selectedArrivalTime.code === time.CODE_NAME }, time.CODE_VALUE_EN))))), h("div", { key: '82418624229f6eefa9ba4e436c7a258b3fee95d2', class: "p-0 flex-fill  ml-md-3 d-flex flex-column", style: { gap: '0.5rem' } }, h("wa-textarea", { key: '7af7d5d55809701e7c2a040a41c7cbcc060476ad', onchange: event => this.handleDataChange('message', event), size: "s", value: this.bookedByData.message, defaultValue: this.bookedByData.message, label: t('Lcz_AnyMessageForUs', { fallback: 'Any message for us' }), rows: 4 }), this.paymentMethods.length > 1 && (h("wa-select", { key: 'cc4ee57958942041e7591dc9b54d9543580d08bf', label: t('Lcz_PaymentMethod', { fallback: 'Payment Method' }), size: "s", value: booking_store?.selectedPaymentMethod?.code, onchange: e => modifyBookingStore('selectedPaymentMethod', {
                code: e.target.value,
            }) }, this.paymentMethods.map(p => (h("wa-option", { value: p.code }, p.description))))), booking_store.selectedPaymentMethod?.code === '001' && (h(Fragment, { key: '4b1f125fcd3aef1e5073a4cb31701de16858c750' }, h("ir-input", { key: '899060bce87af8856c09629ddaaa3438dc0a47e8', value: this.bookedByData.cardNumber, defaultValue: this.bookedByData.cardNumber, "onText-change": e => this.handleCreditCardDataChange('cardNumber', e.detail.trim()), label: t('Lcz_CardNumber', { fallback: 'Card number' }) }), h("ir-input", { key: '5da06e6661ee07b44f233dc85ba4e62d514890b1', value: this.bookedByData.cardHolderName, defaultValue: this.bookedByData.cardHolderName, "onText-change": e => this.handleCreditCardDataChange('cardHolderName', e.detail.trim()), label: t('Lcz_CardHolderName', { fallback: 'Card holder name' }) }), h("ir-input", { key: '5a0a1b41eb986848d0f6b55e3184b49da65c24fc', "onText-change": e => {
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
            }, label: t('Lcz_ExpiryDate', { fallback: 'Expiry date' }) }))), booking_store.selectedPaymentMethod?.code === '005' && (h("div", { key: 'c34ce13f9b43e60a8b9afbe201a464b9c3b56639', class: "form-group mt-md-1 mt-1 p-0 d-flex flex-column flex-md-row align-items-md-center" }, h("label", { key: 'bd7b1fecae346b45ca4d3bd4e514d1f6518d0b7b', class: "p-0 m-0 margin3" }), h("div", { key: '01cfe6b04d07a1e59c43b23e1724e32cc55ad3c8', class: "p-0 m-0  controlContainer flex-fill" }, h("div", { key: '9bbd5ddced813a9c0dc2ca17f7a5006394c1c6c3', class: "property-booked-by__money-transfer-description", innerHTML: this.paymentMethods.find(p => p.code === '005')?.localizables.find(l => l.language.code.toLowerCase() === 'en')?.description })))), h("wa-checkbox", { key: 'dafc2b7a1d9d8f8fa00eb8a96914d2794c2ff697', checked: this.bookedByData.emailGuest, onchange: event => this.handleDataChange('emailGuest', event) }, t('Lcz_EmailTheGuest', { fallback: 'Email the guest' })))))));
    }
};
IglPropertyBookedBy.style = iglPropertyBookedByCss();

export { IglBookPropertyFooter as igl_book_property_footer, IglBookPropertyHeader as igl_book_property_header, IglBookingForm as igl_booking_form, IglBookingOverviewPage as igl_booking_overview_page, IglPropertyBookedBy as igl_property_booked_by };
