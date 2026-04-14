import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';
import { T as ToBeAssignedService } from './toBeAssigned.service.js';
import { d as dateToFormattedString, n as isWeekend } from './utils.js';
import { h as hooks } from './moment.js';
import { l as locales } from './locales.store.js';
import { h as handleUnAssignedDatesChange } from './unassigned_dates.store.js';
import { d as defineCustomElement$6 } from './ir-air-date-picker2.js';
import { d as defineCustomElement$5 } from './ir-custom-button2.js';
import { d as defineCustomElement$4 } from './ir-date-select2.js';
import { d as defineCustomElement$3 } from './ir-input2.js';
import { d as defineCustomElement$2 } from './ir-picker2.js';
import { d as defineCustomElement$1 } from './ir-picker-item2.js';

const iglCalHeaderCss = ".sc-igl-cal-header-h{display:block;position:absolute;top:0;height:100%;color:var(--wa-color-text-quiet)}.svg-icon.sc-igl-cal-header{height:20px;width:20px}.darkGrey.sc-igl-cal-header{background:#ececec}.topLeftCell.sc-igl-cal-header{border-inline-end:1px solid var(--wa-color-surface-border)}.btn.sc-igl-cal-header{pointer-events:auto}.dayTitle.weekend.sc-igl-cal-header{font-weight:bold;color:var(--wa-color-text-normal)}.cellData.sc-igl-cal-header{background-color:var(--wa-color-surface-default)}.stickyCell.sc-igl-cal-header{display:-ms-inline-grid;display:-moz-inline-grid;display:inline-grid;position:-webkit-sticky;position:sticky;top:0px;height:82px;display:inline-block;vertical-align:top;z-index:2}.headersContainer.sc-igl-cal-header{background-color:var(--wa-color-surface-default)}.headerCell.sc-igl-cal-header{display:inline-grid;width:58px;height:58px;vertical-align:top;background-color:var(--wa-color-surface-default);border-bottom:1px solid var(--wa-color-surface-border)}.monthsContainer.sc-igl-cal-header{height:20px;background-color:var(--wa-color-surface-default);margin-bottom:0.2em}.monthCell.sc-igl-cal-header{display:inline-grid;height:20px;background-color:var(--wa-color-overlay-inline);border-right:1px solid var(--wa-color-surface-border);color:var(--wa-color-neutral-on-quiet);vertical-align:top}.monthCell.sc-igl-cal-header:nth-child(odd){background:var(--wa-color-neutral-fill-normal);color:var(--wa-color-neutral-on-normal)}.monthTitle.sc-igl-cal-header{overflow:hidden;text-overflow:ellipsis;font-size:0.9em;text-transform:uppercase;font-weight:bold;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.topLeftCell.sc-igl-cal-header{left:0px;z-index:3;width:170px;background-color:var(--wa-color-surface-default);display:-ms-inline-grid;display:-moz-inline-grid;display:inline-grid}.datePickerHidden.sc-igl-cal-header{position:absolute;height:100%;width:100%;opacity:0;cursor:pointer;z-index:1}.date_btn.sc-igl-cal-header{cursor:pointer;display:flex;align-items:center;justify-content:center;position:relative}.date_btn.sc-igl-cal-header:hover{background:#f6f6f6;border-radius:0.3rem}.caledarBtns.sc-igl-cal-header{position:relative;cursor:pointer;padding:0.4rem}.caledarBtns.sc-igl-cal-header:hover{background-color:#f6f6f6}.dayTitle.sc-igl-cal-header{font-size:0.8em;font-weight:600;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.currentDay.sc-igl-cal-header .dayTitle.sc-igl-cal-header{font-weight:bold}.currentDay.sc-igl-cal-header{background-color:var(--wa-color-brand-fill-quiet)}.dayCapacityPercent.sc-igl-cal-header{font-size:0.75em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.badge-pill.sc-igl-cal-header{padding:3px 1em;font-size:0.8em;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.pointer.sc-igl-cal-header{cursor:pointer}.searchContiner.sc-igl-cal-header{padding-left:10px;padding-right:10px}.searchListContainer.sc-igl-cal-header{background:var(--wa-color-surface-default);border:1px solid var(--wa-color-surface-border);border-bottom:none}.fd-header__badge-btn.sc-igl-cal-header{all:unset;cursor:pointer}.fd-header__badge-btn.sc-igl-cal-header:hover .fd-header__badge.sc-igl-cal-header{background-color:color-mix(in oklab, var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)), var(--wa-color-mix-hover))}.searchListItem.sc-igl-cal-header{background:var(--wa-color-surface-default);border-bottom:1px solid var(--wa-color-surface-border);padding-left:8px}.header__fd-actions.sc-igl-cal-header{color:var(--wa-color-text-normal);border-inline-end:1px solid var(--wa-color-surface-border)}.badge-light.sc-igl-cal-header{background-color:#999999;-webkit-user-select:none;user-select:none;-webkit-user-drag:none}.min-width-full.sc-igl-cal-header{min-width:100%}.header__fd-actions.sc-igl-cal-header{display:flex;width:170px;box-sizing:border-box;gap:0.875rem;color:var(--wa-color-text-normal);flex-direction:column}";
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
    dateSelectRef;
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
        return (h(Host, { key: 'a9c4c29c4036fba59857a535d846704db76545ba' }, h("div", { key: '7afb72a686a60b469fcec6e16f96059f879f4c7d', class: "stickyCell align-items-center topLeftCell preventPageScroll" }, h("div", { key: '1f7f03cc13a2e63af81ca95bfa1f34ec776e3f4a', class: "header__fd-actions" }, h("div", { key: 'b19e10f3a999723dbaae978c3c3ad08da74aca9d', class: "row justify-content-around no-gutters", style: { gap: '0' } }, !this.calendarData.is_vacation_rental && (h(Fragment, { key: '12d9a5dd6a225f34f76e9adb07ad6fe62e334047' }, h("wa-tooltip", { key: '1aa17b0f665aff0c9b524115b2266d1e4f28a445', for: "fd-unassigned-dates_btn" }, locales.entries.Lcz_UnassignedUnitsTooltip), h("ir-custom-button", { key: '0215242e13d867c20b7f789bfde75d82f96b9003', id: "fd-unassigned-dates_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleOptionEvent('showAssigned') }, h("wa-icon", { key: '73753363382474e4afb73325a43cbf1b409d9339', style: { fontSize: '1.5rem' }, name: "server", label: locales.entries.Lcz_UnassignedUnitsTooltip, "aria-label": locales.entries.Lcz_UnassignedUnitsTooltip })))), h("wa-tooltip", { key: '9d89a3441f4c445788aaff22babf3ce134c71e70', for: "fd-dates-navigation_btn" }, locales.entries.Lcz_Navigate), h("ir-date-select", { key: '5945cfdcd0e8f8b1be6950b56add152354b17381', minDate: hooks().add(-2, 'months').startOf('month').format('YYYY-MM-DD'), onDateChanged: evt => {
                console.log('evt', evt);
                this.handleDateSelect(evt);
            }, ref: el => (this.dateSelectRef = el) }, h("ir-custom-button", { key: 'b032946185ecd76f4ef3de4eac5a6f485f4d3be1', slot: "trigger", id: "fd-dates-navigation_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleOptionEvent('calendar') }, h("wa-icon", { key: '59c2648b0bb9a10da1eedfed05d4297008a66048', style: { fontSize: '1.5rem' }, name: "calendar", variant: "regular", label: locales.entries.Lcz_Navigate, "aria-label": locales.entries.Lcz_Navigate })), h("div", { key: '941e459aece580190977ad4cc473622a23acebf9', class: "fd-dates__actions" }, h("wa-divider", { key: '15159fba3bf5a092b6542374f9861534d2a01240' }), h("ir-custom-button", { key: '799aa8f8e1556e95e672c6869518200e97e282f8', variant: "neutral", appearance: "outlined", onClickHandler: () => {
                this.handleOptionEvent('gotoToday');
                this.dateSelectRef.closeDatePicker();
            } }, "Today"))), h(Fragment, { key: '9de9b98c1345ac117015e8492da0181cf8e691ee' }, h("wa-tooltip", { key: '2da294eba7c15216af0417bc0e6f271074facfb8', for: "fd-new-booking_btn" }, locales.entries.Lcz_CreateNewBooking), h("ir-custom-button", { key: '080a3b5d8e249bb5eeee5f35f29ecb856bd920d6', slot: "trigger", id: "fd-new-booking_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleOptionEvent('add', this.getNewBookingModel()) }, h("wa-icon", { key: '8ca380da5f4602bd7da6cfa5b6c92d547106da98', style: { fontSize: '1.5rem' }, name: "plus", label: locales.entries.Lcz_CreateNewBooking, "aria-label": locales.entries.Lcz_CreateNewBooking }))), h(Fragment, { key: '585c29df4867411170ee8f76519188e1dfc6b3d9' }, h("wa-tooltip", { key: '8bd9fedf6569f8d142f369fdc643d5a12b043a06', for: "fd-stop-open-sale_btn" }, locales.entries.Lcz_StopOpenSale), h("ir-custom-button", { key: 'd5ccfbf3eac41963011de84f0ab20507bfe021b3', slot: "trigger", id: "fd-stop-open-sale_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleOptionEvent('bulk', this.getNewBookingModel()) }, h("wa-icon", { key: 'e7d026ee5020638da037856781321b2cea93a9e3', variant: "regular", style: { fontSize: '1.5rem' }, name: "calendar-xmark", label: locales.entries.Lcz_StopOpenSale, "aria-label": locales.entries.Lcz_StopOpenSale })))), h("div", { key: '4ed6c49bd5dbe910bc231f3696fc726b8c758ff8', class: "searchContiner" }, h("ir-picker", { key: '086d53c2dae4b4162306085d9d9cb538b64190aa', size: "small", "onCombobox-select": e => {
                this.handleScrollToRoom(Number(e.detail.item.value));
            } }, this.roomsList.map(room => (h("ir-picker-item", { label: room.name, value: room.id }, room.name))))))), h("div", { key: '3935c52d96652b036f75e25ce5b8742eabbb30e5', class: "stickyCell headersContainer" }, h("div", { key: '1a4fd83ca0b4b8c356ae5ba53afb35ab7e0be4c2', class: "monthsContainer" }, this.calendarData.monthsInfo.map(monthInfo => (h("div", { class: "monthCell", style: { width: monthInfo.daysCount * 58 + 'px' } }, h("div", { class: "monthTitle" }, monthInfo.monthName))))), this.calendarData.days.map(dayInfo => {
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
    const components = ["igl-cal-header", "ir-air-date-picker", "ir-custom-button", "ir-date-select", "ir-input", "ir-picker", "ir-picker-item"];
    components.forEach(tagName => { switch (tagName) {
        case "igl-cal-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IglCalHeader);
            }
            break;
        case "ir-air-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-date-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-input":
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