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
        return (h(Host, { key: '7a154d9e6860066ead3410246792545d67f2b94d' }, h("div", { key: '779ed592871af93710e30fee19ed1cb1c67131f3', class: "stickyCell align-items-center topLeftCell preventPageScroll" }, h("div", { key: '7d2ed0c5016f446e86b99743ccbccdd2aa404022', class: "header__fd-actions" }, h("div", { key: '432076ef500dc1494b1e3f27d7809279c904f9ee', class: "row justify-content-around no-gutters", style: { gap: '0' } }, !this.calendarData.is_vacation_rental && (h(Fragment, { key: 'd8232a1c7f2ba9d11836f3189b3b02c41ef11c9d' }, h("wa-tooltip", { key: '0a3d09e00150326a15095b53f68bd9c27979b94e', for: "fd-unassigned-dates_btn" }, locales.entries.Lcz_UnassignedUnitsTooltip), h("ir-custom-button", { key: '9cb22ccf6daf91f67a79fa2666cb6022a1165dde', id: "fd-unassigned-dates_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleOptionEvent('showAssigned') }, h("wa-icon", { key: 'af808158647829869fe54bfb80a4c68d98d34b1a', style: { fontSize: '1.5rem' }, name: "server", label: locales.entries.Lcz_UnassignedUnitsTooltip, "aria-label": locales.entries.Lcz_UnassignedUnitsTooltip })))), h("wa-tooltip", { key: 'f642e9ded1902b06563c184004a9d61063b5cc63', for: "fd-dates-navigation_btn" }, locales.entries.Lcz_Navigate), h("ir-date-select", { key: '4137b223c42567055f00a954ae4ed6ee41d38d46', minDate: hooks().add(-2, 'months').startOf('month').format('YYYY-MM-DD'), onDateChanged: evt => {
                console.log('evt', evt);
                this.handleDateSelect(evt);
            }, ref: el => (this.dateSelectRef = el) }, h("ir-custom-button", { key: 'dc99cfc31ed357989d8c10b303a6aa98bf4bf33c', slot: "trigger", id: "fd-dates-navigation_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleOptionEvent('calendar') }, h("wa-icon", { key: '07deb53ae620a538664f9b1a8250acbb51285f80', style: { fontSize: '1.5rem' }, name: "calendar", variant: "regular", label: locales.entries.Lcz_Navigate, "aria-label": locales.entries.Lcz_Navigate })), h("div", { key: 'fc53ff2b35c66814ce297a38426363f1ffa5be49', class: "fd-dates__actions" }, h("wa-divider", { key: '71f7b226cb61a48065765d6b267b3ad9950487ff' }), h("ir-custom-button", { key: '5535ac9c1c744782ebbf952e5dc77a29dfb99952', variant: "neutral", appearance: "outlined", onClickHandler: () => {
                this.handleOptionEvent('gotoToday');
                this.dateSelectRef.hide();
            } }, "Today"))), h(Fragment, { key: '1cbe82130b0b5440cd04e8bee4074d7a8ca9b68f' }, h("wa-tooltip", { key: 'd7fd76219f2cb5cae5b62f89baca9392ae337751', for: "fd-new-booking_btn" }, locales.entries.Lcz_CreateNewBooking), h("ir-custom-button", { key: 'ca69b056aefd667229541f2af204510e0d065f92', slot: "trigger", id: "fd-new-booking_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleOptionEvent('add', this.getNewBookingModel()) }, h("wa-icon", { key: 'ddb00463212ef53e64fb92f322fb2c6982752a32', style: { fontSize: '1.5rem' }, name: "plus", label: locales.entries.Lcz_CreateNewBooking, "aria-label": locales.entries.Lcz_CreateNewBooking }))), h(Fragment, { key: 'd0ba93705a92061adbaece4202c4b89ef0fe74c3' }, h("wa-tooltip", { key: 'b26e036a6daabc937be44e27c78841a9372c2100', for: "fd-stop-open-sale_btn" }, locales.entries.Lcz_StopOpenSale), h("ir-custom-button", { key: '6186570406a52309f33ca095a402c9f5d55d133f', slot: "trigger", id: "fd-stop-open-sale_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleOptionEvent('bulk', this.getNewBookingModel()) }, h("wa-icon", { key: '9ec4074f889b954f443e1da4d64d29a10013774b', variant: "regular", style: { fontSize: '1.5rem' }, name: "calendar-xmark", label: locales.entries.Lcz_StopOpenSale, "aria-label": locales.entries.Lcz_StopOpenSale })))), h("div", { key: 'f419c903a3b0986346ea220b4afe0d4b2e0e904c', class: "searchContiner" }, h("ir-picker", { key: '7f6380ea5d33610ee7baf2ebb06a62c2d75a918e', size: "small", "onCombobox-select": e => {
                this.handleScrollToRoom(Number(e.detail.item.value));
            } }, this.roomsList.map(room => (h("ir-picker-item", { label: room.name, value: room.id }, room.name))))))), h("div", { key: 'be696baa2b3b9e94280abd902b94e0b8b4992d00', class: "stickyCell headersContainer" }, h("div", { key: '18ba2d5c010657799dfcf9b2ac000a97b604e234', class: "monthsContainer" }, this.calendarData.monthsInfo.map(monthInfo => (h("div", { class: "monthCell", style: { width: monthInfo.daysCount * 58 + 'px' } }, h("div", { class: "monthTitle" }, monthInfo.monthName))))), this.calendarData.days.map(dayInfo => {
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