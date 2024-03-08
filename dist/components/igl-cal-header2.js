import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { T as ToBeAssignedService } from './toBeAssigned.service.js';
import { d as dateToFormattedString } from './utils.js';
import { h as hooks } from './moment.js';
import { l as locales } from './locales.store.js';
import { c as calendar_data } from './calendar-data.js';
import { h as handleUnAssignedDatesChange } from './unassigned_dates.store.js';
import { d as defineCustomElement$1 } from './ir-date-picker2.js';

const iglCalHeaderCss = ".sc-igl-cal-header-h{display:block;position:absolute;top:0;height:100%}.svg-icon.sc-igl-cal-header{height:20px;width:20px}.darkGrey.sc-igl-cal-header{background:#ececec}.btn.sc-igl-cal-header{pointer-events:auto}.stickyCell.sc-igl-cal-header{display:-ms-inline-grid;display:-moz-inline-grid;display:inline-grid;position:-webkit-sticky;position:sticky;top:0px;height:82px;display:inline-block;vertical-align:top;z-index:2}.headersContainer.sc-igl-cal-header{background-color:#ffffff}.headerCell.sc-igl-cal-header{display:inline-grid;width:58px;height:58px;vertical-align:top;background-color:#ffffff;border-bottom:1px solid #e0e0e0}.datePickerHidden.sc-igl-cal-header{position:absolute;top:0;left:0;width:100%;opacity:0}.monthsContainer.sc-igl-cal-header{height:20px;background-color:#ffffff;margin-bottom:0.2em}.monthCell.sc-igl-cal-header{display:inline-grid;height:20px;background-color:#ececec;border-right:1px solid #c7c7c7;vertical-align:top}.monthCell.sc-igl-cal-header:nth-child(odd){background-color:#dddddd}.monthTitle.sc-igl-cal-header{overflow:hidden;text-overflow:ellipsis;font-size:0.9em;text-transform:uppercase;font-weight:bold;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.topLeftCell.sc-igl-cal-header{left:0px;z-index:3;width:170px;background-color:#ffffff;display:-ms-inline-grid;display:-moz-inline-grid;display:inline-grid}.caledarBtns.sc-igl-cal-header{position:relative;cursor:pointer;font-size:1.75em;line-height:1em;padding:0.4rem;display:flex;align-items:center;justify-content:center}.caledarBtns.sc-igl-cal-header .la.sc-igl-cal-header{font-size:1.1em}.caledarBtns.sc-igl-cal-header:hover{background-color:#f6f6f6}.dayTitle.sc-igl-cal-header{font-size:0.8em;font-weight:600;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.currentDay.sc-igl-cal-header .dayTitle.sc-igl-cal-header{font-weight:bold}.currentDay.sc-igl-cal-header{background-color:#e3f3fa}.dayCapacityPercent.sc-igl-cal-header{font-size:0.75em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.badge-pill.sc-igl-cal-header{padding:3px 1em;font-size:0.8em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.pointer.sc-igl-cal-header{cursor:pointer}.searchContiner.sc-igl-cal-header{padding-left:10px;padding-right:10px}.searchListContainer.sc-igl-cal-header{background:#fff;border:1px solid #ccc;border-bottom:none}.searchListItem.sc-igl-cal-header{background:white;border-bottom:1px solid #ccc;padding-left:8px}.badge-light.sc-igl-cal-header{background-color:#999999;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.min-width-full.sc-igl-cal-header{min-width:100%}";
const IglCalHeaderStyle0 = iglCalHeaderCss;

const IglCalHeader = /*@__PURE__*/ proxyCustomElement(class IglCalHeader extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.optionEvent = createEvent(this, "optionEvent", 7);
        this.gotoRoomEvent = createEvent(this, "gotoRoomEvent", 7);
        this.gotoToBeAssignedDate = createEvent(this, "gotoToBeAssignedDate", 7);
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
        this.toBeAssignedService.setToken(calendar_data.token);
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
            dt.setHours(0);
            dt.setMinutes(0);
            dt.setSeconds(0);
            let endDate = dt.getTime();
            //console.log('unassigned Dates', this.unassignedDates);
            while (endDate <= new Date(toDate).getTime()) {
                //console.log('end date:', endDate);
                const selectedDate = hooks(endDate).format('D_M_YYYY');
                if (data[endDate]) {
                    const result = await this.toBeAssignedService.getUnassignedRooms(this.propertyid, dateToFormattedString(new Date(endDate)), this.calendarData.roomsInfo, this.calendarData.formattedLegendData);
                    this.unassignedRoomsNumber[selectedDate] = result.length;
                }
                else if (this.unassignedRoomsNumber[selectedDate]) {
                    const res = this.unassignedRoomsNumber[selectedDate] - 1;
                    this.unassignedRoomsNumber[selectedDate] = res < 0 ? 0 : res;
                }
                endDate = hooks(endDate).add(1, 'days').toDate().getTime();
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
            const selectedDate = hooks(endDate).format('D_M_YYYY');
            this.unassignedRoomsNumber[selectedDate] = this.unassignedRoomsNumber[selectedDate] - 1;
            endDate = hooks(endDate).add(1, 'days').toDate().getTime();
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
            TITLE: locales.entries.Lcz_NewBooking,
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
        return (h(Host, { key: '4f4a726e1522d7aef6a8947cc4a1b97296282888' }, h("div", { key: '450c93cff86440ff045d8954747d895c128d7e57', class: "stickyCell align-items-center topLeftCell preventPageScroll" }, h("div", { key: 'd0b099b3040da0842472a5b0cb88197c9cbfe4bd', class: "row justify-content-around no-gutters" }, !this.calendarData.is_vacation_rental && (h("div", { class: "caledarBtns", onClick: () => this.handleOptionEvent('showAssigned'), "data-toggle": "tooltip", "data-placement": "bottom", title: locales.entries.Lcz_UnassignedUnitsTooltip }, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", class: "svg-icon" }, h("path", { fill: "#6b6f82", d: "M448 160H320V128H448v32zM48 64C21.5 64 0 85.5 0 112v64c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zM448 352v32H192V352H448zM48 288c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V336c0-26.5-21.5-48-48-48H48z" })))), h("div", { key: 'ceb62d3ac92a7d62248d3fc9bb5d96a8599f1c82', class: "caledarBtns", onClick: () => this.handleOptionEvent('calendar'), "data-toggle": "tooltip", "data-placement": "bottom", title: locales.entries.Lcz_Navigate }, h("svg", { key: '2693cad538cb3a0d8558d9eec6d72fd5836a1d5d', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", class: 'svg-icon' }, h("path", { key: '8c45ef82a7a4c6be8bedabca8bcc2a1be7f5adb9', fill: "#6b6f82", d: "M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" })), h("ir-date-picker", { key: '4e688140c4fbb2f23e3c482d293dcf223985d4e9', minDate: hooks().add(-2, 'months').startOf('month').format('YYYY-MM-DD'), autoApply: true, singleDatePicker: true, onDateChanged: evt => {
                console.log('evt', evt);
                this.handleDateSelect(evt);
            }, class: "datePickerHidden" })), h("div", { key: 'c6d0c541721e2bc72dc07befb6b38244a08fd7d1', class: "caledarBtns", onClick: () => this.handleOptionEvent('gotoToday'), "data-toggle": "tooltip", "data-placement": "bottom", title: locales.entries.Lcz_Today }, h("svg", { key: '281fc8a562b43bfd5415025731faff56f165b648', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", class: "svg-icon" }, h("path", { key: '132b142fa805416acc8ea64325cd208e1f2b262c', fill: "#6b6f82", d: "M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" }))), h("div", { key: '36e7354c12a7b9f3ea83aba7dff8bf21358745b1', class: "caledarBtns", onClick: () => this.handleOptionEvent('add', this.getNewBookingModel()), "data-toggle": "tooltip", "data-placement": "bottom", title: locales.entries.Lcz_CreateNewBooking }, h("svg", { key: '2dfae86e391487b4854d0af51245ad28ccc65e59', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", class: "svg-icon" }, h("path", { key: 'd468ac33fbdfc673ddb6dd2fb144915b9d5af638', fill: "#6b6f82", d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" })))), h("div", { key: 'cf487a484cfd5ab9f6d3f8ac9e3cf2e6699d31c3', class: "row justify-content-around no-gutters searchContiner" }, h("fieldset", { key: '79740126388922e43594ad4b340d66c31c5c7aa0', class: `form-group position-relative ${this.searchValue != '' ? 'show' : ''}` }, h("input", { key: 'bdc5ee971284e9da4d909e6b2f0dee016280eb0e', type: "text", class: "form-control form-control-sm input-sm", id: "iconLeft7", value: this.searchValue, placeholder: locales.entries.Lcz_FindUnit, onInput: event => this.handleFilterRooms(event) }), this.searchValue !== '' ? (h("div", { class: "form-control-position pointer", onClick: () => this.handleClearSearch(), "data-toggle": "tooltip", "data-placement": "top", "data-original-title": "Clear Selection" }, h("i", { class: "la la-close font-small-4" }))) : null, this.searchList.length ? (h("div", { class: "position-absolute searchListContainer dropdown-menu dropdown-menu-left min-width-full" }, this.searchList.map(room => (h("div", { class: "searchListItem1 dropdown-item px-1 text-left pointer", onClick: () => this.handleScrollToRoom(room.id) }, room.name))))) : null))), h("div", { key: 'dc590e19d9fd4f73f69d4e795a148d7194d9e98e', class: "stickyCell headersContainer" }, h("div", { key: '3e51e2444fce29e042b5b811554f4a15e6e58f4d', class: "monthsContainer" }, this.calendarData.monthsInfo.map(monthInfo => (h("div", { class: "monthCell", style: { width: monthInfo.daysCount * 58 + 'px' } }, h("div", { class: "monthTitle" }, monthInfo.monthName))))), this.calendarData.days.map(dayInfo => (h("div", { class: `headerCell align-items-center ${'day-' + dayInfo.day} ${dayInfo.day === this.today || dayInfo.day === this.highlightedDate ? 'currentDay' : ''}`, "data-day": dayInfo.day }, !this.calendarData.is_vacation_rental && (h("div", { class: "preventPageScroll" }, h("span", { class: `badge badge-${this.unassignedRoomsNumber[dayInfo.day] || dayInfo.unassigned_units_nbr !== 0 ? 'info pointer' : 'light'} badge-pill`, onClick: () => this.showToBeAssigned(dayInfo) }, this.unassignedRoomsNumber[dayInfo.day] || dayInfo.unassigned_units_nbr))), h("div", { class: "dayTitle" }, dayInfo.dayDisplayName), h("div", { class: "dayCapacityPercent" }, dayInfo.occupancy, "%")))))));
    }
    static get watchers() { return {
        "unassignedDates": ["handleCalendarDataChanged"]
    }; }
    static get style() { return IglCalHeaderStyle0; }
}, [2, "igl-cal-header", {
        "calendarData": [16],
        "today": [16],
        "propertyid": [2],
        "unassignedDates": [8, "unassigned-dates"],
        "to_date": [1],
        "highlightedDate": [1, "highlighted-date"],
        "renderAgain": [32],
        "unassignedRoomsNumber": [32]
    }, [[8, "reduceAvailableUnitEvent", "handleReduceAvailableUnitEvent"]], {
        "unassignedDates": ["handleCalendarDataChanged"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["igl-cal-header", "ir-date-picker"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-cal-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglCalHeader);
            }
            break;
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IglCalHeader as I, defineCustomElement as d };

//# sourceMappingURL=igl-cal-header2.js.map