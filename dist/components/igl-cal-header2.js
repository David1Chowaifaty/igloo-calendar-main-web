import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';
import { T as ToBeAssignedService } from './toBeAssigned.service.js';
import { d as dateToFormattedString, u as isWeekend } from './utils.js';
import { h as hooks } from './moment.js';
import { l as locales } from './locales.store.js';
import { h as handleUnAssignedDatesChange } from './unassigned_dates.store.js';
import { d as defineCustomElement$4 } from './ir-custom-button2.js';
import { d as defineCustomElement$3 } from './ir-date-picker2.js';
import { d as defineCustomElement$2 } from './ir-picker2.js';
import { d as defineCustomElement$1 } from './ir-picker-item2.js';

const iglCalHeaderCss = ".sc-igl-cal-header-h{display:block;position:absolute;top:0;height:100%;color:var(--wa-color-text-quiet)}.svg-icon.sc-igl-cal-header{height:20px;width:20px}.darkGrey.sc-igl-cal-header{background:#ececec}.btn.sc-igl-cal-header{pointer-events:auto}.dayTitle.weekend.sc-igl-cal-header{font-weight:bold;color:var(--wa-color-text-normal)}.cellData.sc-igl-cal-header{background-color:var(--wa-color-surface-default)}.stickyCell.sc-igl-cal-header{display:-ms-inline-grid;display:-moz-inline-grid;display:inline-grid;position:-webkit-sticky;position:sticky;top:0px;height:82px;display:inline-block;vertical-align:top;z-index:2}.headersContainer.sc-igl-cal-header{background-color:var(--wa-color-surface-default)}.headerCell.sc-igl-cal-header{display:inline-grid;width:58px;height:58px;vertical-align:top;background-color:var(--wa-color-surface-default);border-bottom:1px solid var(--wa-color-surface-border)}.monthsContainer.sc-igl-cal-header{height:20px;background-color:var(--wa-color-surface-default);margin-bottom:0.2em}.monthCell.sc-igl-cal-header{display:inline-grid;height:20px;background-color:var(--wa-color-overlay-inline);border-right:1px solid var(--wa-color-surface-border);color:var(--wa-color-neutral-on-quiet);vertical-align:top}.monthCell.sc-igl-cal-header:nth-child(odd){background:var(--wa-color-neutral-fill-normal);color:var(--wa-color-neutral-on-normal)}.monthTitle.sc-igl-cal-header{overflow:hidden;text-overflow:ellipsis;font-size:0.9em;text-transform:uppercase;font-weight:bold;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.topLeftCell.sc-igl-cal-header{left:0px;z-index:3;width:170px;background-color:var(--wa-color-surface-default);display:-ms-inline-grid;display:-moz-inline-grid;display:inline-grid}.datePickerHidden.sc-igl-cal-header{position:absolute;height:100%;width:100%;opacity:0;cursor:pointer;z-index:1}.date_btn.sc-igl-cal-header{cursor:pointer;display:flex;align-items:center;justify-content:center;position:relative}.date_btn.sc-igl-cal-header:hover{background:#f6f6f6;border-radius:0.3rem}.caledarBtns.sc-igl-cal-header{position:relative;cursor:pointer;padding:0.4rem}.caledarBtns.sc-igl-cal-header:hover{background-color:#f6f6f6}.dayTitle.sc-igl-cal-header{font-size:0.8em;font-weight:600;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.currentDay.sc-igl-cal-header .dayTitle.sc-igl-cal-header{font-weight:bold}.currentDay.sc-igl-cal-header{background-color:var(--wa-color-brand-fill-quiet)}.dayCapacityPercent.sc-igl-cal-header{font-size:0.75em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.badge-pill.sc-igl-cal-header{padding:3px 1em;font-size:0.8em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.pointer.sc-igl-cal-header{cursor:pointer}.searchContiner.sc-igl-cal-header{padding-left:10px;padding-right:10px}.searchListContainer.sc-igl-cal-header{background:var(--wa-color-surface-default);border:1px solid var(--wa-color-surface-border);border-bottom:none}.fd-header__badge-btn.sc-igl-cal-header{all:unset;cursor:pointer}.fd-header__badge-btn.sc-igl-cal-header:hover .fd-header__badge.sc-igl-cal-header{background-color:color-mix(in oklab, var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)), var(--wa-color-mix-hover))}.searchListItem.sc-igl-cal-header{background:var(--wa-color-surface-default);border-bottom:1px solid var(--wa-color-surface-border);padding-left:8px}.header__fd-actions.sc-igl-cal-header{color:var(--wa-color-text-normal);border-inline-end:1px solid var(--wa-color-surface-border)}.badge-light.sc-igl-cal-header{background-color:#999999;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.min-width-full.sc-igl-cal-header{min-width:100%}.header__fd-actions.sc-igl-cal-header{display:flex;width:170px;box-sizing:border-box;gap:0.875rem;color:var(--wa-color-text-normal);flex-direction:column}";
const IglCalHeaderStyle0 = iglCalHeaderCss;

const IglCalHeader = /*@__PURE__*/ proxyCustomElement(class IglCalHeader extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.optionEvent = createEvent(this, "optionEvent", 7);
        this.gotoRoomEvent = createEvent(this, "gotoRoomEvent", 7);
        this.gotoToBeAssignedDate = createEvent(this, "gotoToBeAssignedDate", 7);
    }
    optionEvent;
    gotoRoomEvent;
    gotoToBeAssignedDate;
    calendarData;
    today;
    propertyid;
    unassignedDates;
    to_date;
    highlightedDate;
    renderAgain = false;
    unassignedRoomsNumber = {};
    // private searchValue: string = '';
    // private searchList: { [key: string]: any }[] = [];
    roomsList = [];
    toBeAssignedService = new ToBeAssignedService();
    dateRef;
    componentWillLoad() {
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
            dt.setHours(0, 0, 0, 0);
            let endDate = dt.getTime();
            while (endDate <= new Date(toDate).getTime()) {
                const selectedDate = hooks(endDate).format('D_M_YYYY');
                if (data[endDate]) {
                    const result = await this.toBeAssignedService.getUnassignedRooms({ from_date: this.calendarData.from_date, to_date: this.calendarData.to_date }, this.propertyid, dateToFormattedString(new Date(endDate)), this.calendarData.roomsInfo, this.calendarData.formattedLegendData);
                    this.unassignedRoomsNumber[selectedDate] = result.length;
                }
                else if (this.unassignedRoomsNumber[selectedDate]) {
                    const res = this.unassignedRoomsNumber[selectedDate] - 1;
                    this.unassignedRoomsNumber[selectedDate] = res < 0 ? 0 : res;
                }
                const newEndDate = hooks(endDate).add(1, 'days').toDate();
                newEndDate.setHours(0, 0, 0, 0);
                endDate = newEndDate.getTime();
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
        // this.searchValue = '';
        // this.searchList = [];
        this.renderView();
    }
    handleFilterRooms(event) {
        const inputElement = event.target;
        let value = inputElement.value.trim();
        // this.searchValue = value;
        value = value.toLowerCase();
        if (value === '') {
            this.handleClearSearch();
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
        return (h(Host, { key: 'b2a7eae4f5984ceb74f5a89bd90e05a14253abe1' }, h("div", { key: '7bf5b5f9873d454a80eda7aba0ed2090a1a88f51', class: "stickyCell align-items-center topLeftCell preventPageScroll" }, h("div", { key: 'e661a6927782053365770e0050c721d0f47b92f2', class: "header__fd-actions" }, h("div", { key: '4b1b89ea6ab282d4ec1c03659134b38091543b23', class: "row justify-content-around no-gutters", style: { gap: '0' } }, !this.calendarData.is_vacation_rental && (h(Fragment, { key: '639e4b1231140fb52578178072639167f207c07f' }, h("wa-tooltip", { key: '975dfe6eff72550b644a1827420e0abda95c60d9', for: "fd-unassigned-dates_btn" }, locales.entries.Lcz_UnassignedUnitsTooltip), h("ir-custom-button", { key: 'e1fc7449e83632266957fe2235ee55e36b2b08fd', id: "fd-unassigned-dates_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleOptionEvent('showAssigned') }, h("wa-icon", { key: '6b010203d93c58856cdc37adac57c02fd511493b', style: { fontSize: '1.5rem' }, name: "server", label: locales.entries.Lcz_UnassignedUnitsTooltip, "aria-label": locales.entries.Lcz_UnassignedUnitsTooltip })))), h("ir-date-picker", { key: 'a1ba77dd41668ea7b04ef8d2376f88a9777bb8a4', minDate: hooks().add(-2, 'months').startOf('month').format('YYYY-MM-DD'),
            // autoApply
            // singleDatePicker
            onDateChanged: evt => {
                console.log('evt', evt);
                this.handleDateSelect(evt);
            },
            // class="datePickerHidden"
            class: 'date_btn', title: locales.entries.Lcz_Navigate, "data-toggle": "tooltip", "data-placement": "bottom" }, h("ir-custom-button", { key: 'aa19c93fdd9c6bff56c277b1464d0b7453cff24c', slot: "trigger", id: "fd-dates-navigation_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleOptionEvent('calendar') }, h("wa-icon", { key: '7b3b84f3fb96fb5cccf7faf974e69880424a1812', style: { fontSize: '1.5rem' }, name: "calendar", variant: "regular", label: locales.entries.Lcz_Navigate, "aria-label": locales.entries.Lcz_Navigate }))), h("wa-tooltip", { key: '2a4de50eb55ab34ab2aa437a319d0ba2cae0d2cb', for: "fd-dates-navigation_btn" }, locales.entries.Lcz_Navigate), h(Fragment, { key: '40f5ca67fbf19922e1029138c070002b53a3f4bd' }, h("wa-tooltip", { key: 'a387cafc81058633a73ea772a652c4ef61fca148', for: "fd-today-navigation_btn" }, locales.entries.Lcz_Today), h("ir-custom-button", { key: '92f1457c63901ff46457d4e845507608d5b8f7a3', slot: "trigger", id: "fd-today-navigation_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleOptionEvent('gotoToday') }, h("wa-icon", { key: '9e9a00b74704826f879c9e337b34cd5be3ac5a42', style: { fontSize: '1.5rem' }, name: "clock", variant: "regular", label: locales.entries.Lcz_Today, "aria-label": locales.entries.Lcz_Today }))), h(Fragment, { key: 'd9462fc5e3496872aa97fbb67a264e86dadb7eeb' }, h("wa-tooltip", { key: '48934d77e584d2c1e3c6b217787cc46b8f72410c', for: "fd-new-booking_btn" }, locales.entries.Lcz_CreateNewBooking), h("ir-custom-button", { key: '26f214a011293c46c1e4bf54621997d4dd09a220', slot: "trigger", id: "fd-new-booking_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleOptionEvent('add', this.getNewBookingModel()) }, h("wa-icon", { key: '5de1a6c4aad738c0e5f5e890ae5381f28d11de22', style: { fontSize: '1.5rem' }, name: "plus", label: locales.entries.Lcz_CreateNewBooking, "aria-label": locales.entries.Lcz_CreateNewBooking }))), h(Fragment, { key: '3a773e1ef355c8a47b95d96c052135f898d991ab' }, h("wa-tooltip", { key: '912d3ba1bc2575d44f6bc70c38124616cc7b4511', for: "fd-stop-open-sale_btn" }, locales.entries.Lcz_StopOpenSale), h("ir-custom-button", { key: '6ee34894d5de6dd72091ba61311a2340cf753544', slot: "trigger", id: "fd-stop-open-sale_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleOptionEvent('bulk', this.getNewBookingModel()) }, h("wa-icon", { key: 'c4825c4fbbcf26427b2f5c431574ac04a599f94d', variant: "regular", style: { fontSize: '1.5rem' }, name: "calendar-xmark", label: locales.entries.Lcz_StopOpenSale, "aria-label": locales.entries.Lcz_StopOpenSale })))), h("div", { key: 'fa60d5e20ad5da009d6c30e85eb7ee0a325a8ba9', class: "searchContiner" }, h("ir-picker", { key: '7945139051dc47ba8450d1bb617a83e2805e645e', size: "small", "onCombobox-select": e => {
                this.handleScrollToRoom(Number(e.detail.item.value));
            } }, this.roomsList.map(room => (h("ir-picker-item", { label: room.name, value: room.id }, room.name))))))), h("div", { key: 'cfc8a87bf0b6584443d829732bbfe2e2d087d66b', class: "stickyCell headersContainer" }, h("div", { key: '9914d70658385cbab545b204909265e570e374bb', class: "monthsContainer" }, this.calendarData.monthsInfo.map(monthInfo => (h("div", { class: "monthCell", style: { width: monthInfo.daysCount * 58 + 'px' } }, h("div", { class: "monthTitle" }, monthInfo.monthName))))), this.calendarData.days.map(dayInfo => {
            return (h("div", { class: `headerCell align-items-center ${'day-' + dayInfo.day} ${dayInfo.day === this.today || dayInfo.day === this.highlightedDate ? 'currentDay' : ''}`, "data-day": dayInfo.day }, !this.calendarData.is_vacation_rental && (h("div", { class: "preventPageScroll", onClick: () => this.showToBeAssigned(dayInfo) }, this.unassignedRoomsNumber[dayInfo.day] || dayInfo.unassigned_units_nbr !== 0 ? (h("button", { class: 'fd-header__badge-btn' }, h("wa-badge", { class: "fd-header__badge", variant: 'brand', appearance: 'accent', pill: true }, this.unassignedRoomsNumber[dayInfo.day] || dayInfo.unassigned_units_nbr))) : (h("wa-badge", { variant: 'neutral', appearance: 'filled', pill: true }, ' ', this.unassignedRoomsNumber[dayInfo.day] || dayInfo.unassigned_units_nbr)))), h("div", { class: { dayTitle: true, weekend: isWeekend(dayInfo.value) } }, dayInfo.dayDisplayName), h("div", { class: "dayCapacityPercent" }, dayInfo.occupancy, "%")));
        }))));
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
    const components = ["igl-cal-header", "ir-custom-button", "ir-date-picker", "ir-picker", "ir-picker-item"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-cal-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglCalHeader);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-date-picker":
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

export { IglCalHeader as I, defineCustomElement as d };

//# sourceMappingURL=igl-cal-header2.js.map