import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { l as locales } from './locales.store.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { c as calendar_data } from './calendar-data.js';
import { m as modifyBookingStore } from './booking.store.js';
import { B as BookingService } from './booking.service.js';
import { d as defineCustomElement$5 } from './igl-date-range2.js';
import { d as defineCustomElement$4 } from './ir-custom-button2.js';
import { d as defineCustomElement$3 } from './ir-date-range2.js';
import { d as defineCustomElement$2 } from './ir-picker2.js';
import { d as defineCustomElement$1 } from './ir-picker-item2.js';

const iglBookPropertyHeaderCss = ".sc-igl-book-property-header-h{display:flex;flex-direction:column;text-align:start;gap:1rem}.sourceContainer.sc-igl-book-property-header{max-width:350px}.message-label.sc-igl-book-property-header{font-size:80%}.fd-book-property__constraints-container.sc-igl-book-property-header,.fd-book-property__header-container.sc-igl-book-property-header{display:flex;flex-direction:column;gap:0.5rem;flex-wrap:wrap}@media (min-width: 768px){.fd-book-property__constraints-container.sc-igl-book-property-header,.fd-book-property__header-container.sc-igl-book-property-header{flex-direction:row;align-items:center}.fd-book-property__adults-select.sc-igl-book-property-header{width:100px}.fd-book-property__children-select.sc-igl-book-property-header{width:170px}}";
const IglBookPropertyHeaderStyle0 = iglBookPropertyHeaderCss;

const IglBookPropertyHeader = /*@__PURE__*/ proxyCustomElement(class IglBookPropertyHeader extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.splitBookingDropDownChange = createEvent(this, "splitBookingDropDownChange", 7);
        this.sourceDropDownChange = createEvent(this, "sourceDropDownChange", 7);
        this.adultChild = createEvent(this, "adultChild", 7);
        this.checkClicked = createEvent(this, "checkClicked", 7);
        this.buttonClicked = createEvent(this, "buttonClicked", 7);
        this.toast = createEvent(this, "toast", 7);
        this.spiltBookingSelected = createEvent(this, "spiltBookingSelected", 7);
        this.animateIrSelect = createEvent(this, "animateIrSelect", 7);
    }
    splitBookingId = '';
    bookingData = '';
    minDate;
    sourceOptions = [];
    message;
    bookingDataDefaultDateRange;
    showSplitBookingOption = false;
    adultChildConstraints;
    splitBookings;
    adultChildCount;
    dateRangeData;
    bookedByInfoData;
    defaultDaterange;
    propertyId;
    wasBlockedUnit;
    isLoading;
    bookings = [];
    splitBookingDropDownChange;
    sourceDropDownChange;
    adultChild;
    checkClicked;
    buttonClicked;
    toast;
    spiltBookingSelected;
    animateIrSelect;
    bookingService = new BookingService();
    sourceOption = {
        code: '',
        description: '',
        tag: '',
        id: '',
        type: '',
    };
    adultAnimationContainer;
    async fetchExposedBookings(value) {
        this.isLoading = true;
        this.bookings = await this.bookingService.fetchExposedBookings(value, this.propertyId, hooks(this.bookingDataDefaultDateRange.fromDate).format('YYYY-MM-DD'), hooks(this.bookingDataDefaultDateRange.toDate).format('YYYY-MM-DD'));
        this.isLoading = false;
    }
    getSplitBookingList() {
        return (h("ir-picker", { mode: "select", class: "sourceContainer", debounce: 300, "onText-change": e => {
                this.fetchExposedBookings(e.detail);
            }, defaultValue: Object.keys(this.bookedByInfoData).length > 1 ? this.bookedByInfoData.bookingNumber?.toString() : '', value: Object.keys(this.bookedByInfoData).length > 1 ? this.bookedByInfoData.bookingNumber?.toString() : '', label: `${locales.entries.Lcz_Tobooking}#`, placeholder: locales.entries.Lcz_BookingNumber, loading: this.isLoading, "onCombobox-select": e => {
                const booking = this.bookings?.find(b => b.booking_nbr?.toString() === e.detail.item.value);
                this.spiltBookingSelected.emit({ key: 'select', data: booking });
            } }, this.bookings?.map(b => {
            const label = `${b.booking_nbr} ${b.guest.first_name} ${b.guest.last_name}`;
            return (h("ir-picker-item", { value: b.booking_nbr?.toString(), label: label }, label));
        })));
    }
    getSourceNode() {
        return (h("wa-select", { size: "small", placeholder: locales.entries.Lcz_Source, value: this.sourceOption.code?.toString(), defaultValue: this.sourceOptions[0]?.id, id: "xSmallSelect", "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: evt => this.sourceDropDownChange.emit(evt.target.value) }, this.sourceOptions.map(option => {
            if (option.type === 'LABEL') {
                return h("small", null, option.value);
            }
            return (h("wa-option", { value: option.id?.toString(), selected: this.sourceOption.code === option.id }, option.value));
        })));
    }
    handleAdultChildChange(key, value) {
        //const value = (event.target as HTMLSelectElement).value;
        let obj = {};
        if (value === '') {
            obj = {
                ...this.adultChildCount,
                [key]: 0,
            };
        }
        else {
            obj = {
                ...this.adultChildCount,
                [key]: value,
            };
        }
        modifyBookingStore('bookingAvailabilityParams', {
            from_date: this.bookingDataDefaultDateRange.fromDate,
            to_date: this.bookingDataDefaultDateRange.toDate,
            adult_nbr: obj?.['adult'] ?? 0,
            child_nbr: obj?.['child'] ?? 0,
        });
        this.adultChild.emit(obj);
    }
    getAdultChildConstraints() {
        return (h("div", { class: 'fd-book-property__constraints-container' }, h("wa-animation", { iterations: 2, name: "bounce", easing: "ease-in-out", duration: 2000, ref: el => (this.adultAnimationContainer = el) }, h("wa-select", { class: "fd-book-property__adults-select", "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: e => this.handleAdultChildChange('adult', e.target.value), value: this.adultChildCount?.adult?.toString(), placeholder: locales.entries.Lcz_AdultsCaption, size: "small" }, Array.from(Array(this.adultChildConstraints.adult_max_nbr), (_, i) => i + 1).map(option => (h("wa-option", { value: option?.toString() }, option))))), this.adultChildConstraints.child_max_nbr > 0 && (h("wa-select", { class: "fd-book-property__children-select", "onwa-hide": e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, onchange: e => this.handleAdultChildChange('child', e.target.value), value: this.adultChildCount?.child?.toString(), placeholder: this.renderChildCaption(), size: "small" }, Array.from(Array(this.adultChildConstraints.child_max_nbr), (_, i) => i + 1).map(option => (h("wa-option", { value: option?.toString() }, option))))), h("ir-custom-button", { loading: isRequestPending('/Check_Availability'), variant: "brand", onClickHandler: () => this.handleButtonClicked() }, locales.entries.Lcz_Check)));
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
                this.adultAnimationContainer.play = true;
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
            this.adultAnimationContainer.play = true;
            this.toast.emit({ type: 'error', title: locales.entries.Lcz_PlzSelectNumberOfGuests, description: '', position: 'top-right' });
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
            return undefined;
        }
        return this.bookingData?.block_exposed_unit_props.to_date;
    }
    render() {
        const showSourceNode = this.showSplitBookingOption ? this.getSplitBookingList() : this.isEventType('EDIT_BOOKING') || this.isEventType('ADD_ROOM') ? false : true;
        return (h(Host, { key: '3de78533ad53dcec42ceb94b669c51b908f57889' }, this.isEventType('SPLIT_BOOKING') && this.getSplitBookingList(), h("div", { key: 'd7e0897c03f7c697b83771da61d39871cf726cc4', class: `fd-book-property__header-container` }, showSourceNode && this.getSourceNode(), h("igl-date-range", { key: 'd94542ab04d5703d43de2dc9e409e3210bc98f44', "data-testid": "date_picker", variant: "booking", dateLabel: locales.entries.Lcz_Dates, maxDate: this.getMaxDate(), minDate: this.getMinDate(), disabled: (this.isEventType('BAR_BOOKING') && !this.wasBlockedUnit) || this.isEventType('SPLIT_BOOKING'), defaultData: this.bookingDataDefaultDateRange }), !this.isEventType('EDIT_BOOKING') && this.getAdultChildConstraints()), h("p", { key: 'c6dfae105f64586e2bbb0c14bc27ff9d86701e25', class: "text-right message-label" }, calendar_data.tax_statement)));
    }
    static get style() { return IglBookPropertyHeaderStyle0; }
}, [2, "igl-book-property-header", {
        "splitBookingId": [8, "split-booking-id"],
        "bookingData": [8, "booking-data"],
        "minDate": [1, "min-date"],
        "sourceOptions": [16],
        "message": [1],
        "bookingDataDefaultDateRange": [16],
        "showSplitBookingOption": [4, "show-split-booking-option"],
        "adultChildConstraints": [16],
        "splitBookings": [16],
        "adultChildCount": [16],
        "dateRangeData": [8, "date-range-data"],
        "bookedByInfoData": [8, "booked-by-info-data"],
        "defaultDaterange": [16],
        "propertyId": [2, "property-id"],
        "wasBlockedUnit": [4, "was-blocked-unit"],
        "isLoading": [32],
        "bookings": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["igl-book-property-header", "igl-date-range", "ir-custom-button", "ir-date-range", "ir-picker", "ir-picker-item"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-book-property-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglBookPropertyHeader);
            }
            break;
        case "igl-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-picker-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IglBookPropertyHeader as I, defineCustomElement as d };

//# sourceMappingURL=igl-book-property-header2.js.map