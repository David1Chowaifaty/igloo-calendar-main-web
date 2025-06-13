import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { l as locales } from './locales.store.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { c as calendar_data } from './calendar-data.js';
import { m as modifyBookingStore } from './booking.store.js';
import { d as defineCustomElement$6 } from './igl-date-range2.js';
import { d as defineCustomElement$5 } from './ir-autocomplete2.js';
import { d as defineCustomElement$4 } from './ir-button2.js';
import { d as defineCustomElement$3 } from './ir-date-range2.js';
import { d as defineCustomElement$2 } from './ir-icons2.js';
import { d as defineCustomElement$1 } from './ir-select2.js';

const iglBookPropertyHeaderCss = ".sc-igl-book-property-header-h{display:block}.sourceContainer.sc-igl-book-property-header{max-width:350px}.message-label.sc-igl-book-property-header{font-size:80%}";
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
        var _a, _b;
        //const value = (event.target as HTMLSelectElement).value;
        let obj = {};
        if (value === '') {
            obj = Object.assign(Object.assign({}, this.adultChildCount), { [key]: 0 });
        }
        else {
            obj = Object.assign(Object.assign({}, this.adultChildCount), { [key]: value });
        }
        modifyBookingStore('bookingAvailabilityParams', {
            from_date: this.bookingDataDefaultDateRange.fromDate,
            to_date: this.bookingDataDefaultDateRange.toDate,
            adult_nbr: (_a = obj === null || obj === void 0 ? void 0 : obj['adult']) !== null && _a !== void 0 ? _a : 0,
            child_nbr: (_b = obj === null || obj === void 0 ? void 0 : obj['child']) !== null && _b !== void 0 ? _b : 0,
        });
        this.adultChild.emit(obj);
    }
    getAdultChildConstraints() {
        var _a, _b, _c, _d;
        return (h("div", { class: 'mt-1 mt-lg-0 d-flex flex-column text-left' }, h("div", { class: "form-group  my-lg-0 text-left d-flex align-items-center justify-content-between justify-content-sm-start" }, h("fieldset", null, h("div", { class: "btn-group ml-0" }, h("ir-select", { testId: "adult_number", class: 'm-0', selectedValue: (_b = (_a = this.adultChildCount) === null || _a === void 0 ? void 0 : _a.adult) === null || _b === void 0 ? void 0 : _b.toString(), onSelectChange: e => this.handleAdultChildChange('adult', e.detail), select_id: "adult_select", firstOption: locales.entries.Lcz_AdultsCaption, LabelAvailable: false, data: Array.from(Array(this.adultChildConstraints.adult_max_nbr), (_, i) => i + 1).map(option => ({
                text: option.toString(),
                value: option.toString(),
            })) }))), this.adultChildConstraints.child_max_nbr > 0 && (h("fieldset", null, h("div", { class: "btn-group ml-1 p-0" }, h("ir-select", { selectedValue: (_d = (_c = this.adultChildCount) === null || _c === void 0 ? void 0 : _c.child) === null || _d === void 0 ? void 0 : _d.toString(), testId: "child_number", onSelectChange: e => this.handleAdultChildChange('child', e.detail), select_id: "child_select", firstOption: this.renderChildCaption(), LabelAvailable: false, data: Array.from(Array(this.adultChildConstraints.child_max_nbr), (_, i) => i + 1).map(option => ({
                text: option.toString(),
                value: option.toString(),
            })) })))), h("ir-button", { btn_id: "check_availability", isLoading: isRequestPending('/Check_Availability'), size: "sm", class: "ml-2", text: locales.entries.Lcz_Check, onClickHandler: () => this.handleButtonClicked() }))));
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
    getMinDate() {
        var _a;
        if (this.isEventType('PLUS_BOOKING')) {
            return hooks().add(-1, 'months').startOf('month').format('YYYY-MM-DD');
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
        return (h(Host, { key: '9f510434ce265bc7afa56c7b5df8212caaa22da4' }, this.isEventType('SPLIT_BOOKING') && this.getSplitBookingList(), showSourceNode && this.getSourceNode(), h("div", { key: 'b5a15a0789c1e5066031da2a87ea96d3b76f3971', class: `d-flex flex-column flex-lg-row align-items-lg-center ${showSourceNode ? 'mt-1' : ''}` }, h("fieldset", { key: 'fd004193a91c9f4d5057c5223afb050b2db27b9b', class: "mt-lg-0 mr-1 " }, h("igl-date-range", { key: '671ba6c411330eca8b188b125cdc742f93e1a1be', "data-testid": "date_picker", variant: "booking", dateLabel: locales.entries.Lcz_Dates, maxDate: this.getMaxDate(), minDate: this.getMinDate(), disabled: (this.isEventType('BAR_BOOKING') && !this.wasBlockedUnit) || this.isEventType('SPLIT_BOOKING'), defaultData: this.bookingDataDefaultDateRange })), !this.isEventType('EDIT_BOOKING') && this.getAdultChildConstraints()), h("p", { key: '0bffce779a8803b98efc1f1daff697a79aea2931', class: "text-right mt-1 message-label" }, calendar_data.tax_statement)));
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
        "wasBlockedUnit": [4, "was-blocked-unit"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["igl-book-property-header", "igl-date-range", "ir-autocomplete", "ir-button", "ir-date-range", "ir-icons", "ir-select"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-book-property-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglBookPropertyHeader);
            }
            break;
        case "igl-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-autocomplete":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IglBookPropertyHeader as I, defineCustomElement as d };

//# sourceMappingURL=igl-book-property-header2.js.map