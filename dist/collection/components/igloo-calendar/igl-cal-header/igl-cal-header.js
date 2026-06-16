import { Host, h, Fragment } from "@stencil/core";
import { ToBeAssignedService } from "../../../services/toBeAssigned.service";
import { dateToFormattedString, isWeekend } from "../../../utils/utils";
import moment from "moment";
import locales from "../../../stores/locales.store";
import { handleUnAssignedDatesChange } from "../../../stores/unassigned_dates.store";
export class IglCalHeader {
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
                const selectedDate = moment(endDate).format('D_M_YYYY');
                if (data[endDate]) {
                    const result = await this.toBeAssignedService.getUnassignedRooms({ from_date: this.calendarData.from_date, to_date: this.calendarData.to_date }, this.propertyid, dateToFormattedString(new Date(endDate)), this.calendarData.roomsInfo, this.calendarData.formattedLegendData);
                    this.unassignedRoomsNumber[selectedDate] = result.length;
                }
                else if (this.unassignedRoomsNumber[selectedDate]) {
                    const res = this.unassignedRoomsNumber[selectedDate] - 1;
                    this.unassignedRoomsNumber[selectedDate] = res < 0 ? 0 : res;
                }
                const newEndDate = moment(endDate).add(1, 'days').toDate();
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
            const selectedDate = moment(endDate).format('D_M_YYYY');
            this.unassignedRoomsNumber[selectedDate] = this.unassignedRoomsNumber[selectedDate] - 1;
            endDate = moment(endDate).add(1, 'days').toDate().getTime();
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
        else {
            // do nothing as the value is 0;
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
        else {
            // this.searchList = this.roomsList.filter(room => room.name.toLocaleLowerCase().indexOf(value) != -1);
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
        return (h(Host, { key: '7a154d9e6860066ead3410246792545d67f2b94d' }, h("div", { key: '779ed592871af93710e30fee19ed1cb1c67131f3', class: "stickyCell align-items-center topLeftCell preventPageScroll" }, h("div", { key: '7d2ed0c5016f446e86b99743ccbccdd2aa404022', class: "header__fd-actions" }, h("div", { key: '432076ef500dc1494b1e3f27d7809279c904f9ee', class: "row justify-content-around no-gutters", style: { gap: '0' } }, !this.calendarData.is_vacation_rental && (h(Fragment, { key: 'd8232a1c7f2ba9d11836f3189b3b02c41ef11c9d' }, h("wa-tooltip", { key: '0a3d09e00150326a15095b53f68bd9c27979b94e', for: "fd-unassigned-dates_btn" }, locales.entries.Lcz_UnassignedUnitsTooltip), h("ir-custom-button", { key: '9cb22ccf6daf91f67a79fa2666cb6022a1165dde', id: "fd-unassigned-dates_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleOptionEvent('showAssigned') }, h("wa-icon", { key: 'af808158647829869fe54bfb80a4c68d98d34b1a', style: { fontSize: '1.5rem' }, name: "server", label: locales.entries.Lcz_UnassignedUnitsTooltip, "aria-label": locales.entries.Lcz_UnassignedUnitsTooltip })))), h("wa-tooltip", { key: 'f642e9ded1902b06563c184004a9d61063b5cc63', for: "fd-dates-navigation_btn" }, locales.entries.Lcz_Navigate), h("ir-date-select", { key: '4137b223c42567055f00a954ae4ed6ee41d38d46', minDate: moment().add(-2, 'months').startOf('month').format('YYYY-MM-DD'), onDateChanged: evt => {
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
    static get is() { return "igl-cal-header"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-cal-header.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-cal-header.css"]
        };
    }
    static get properties() {
        return {
            "calendarData": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ [key: string]: any }",
                    "resolved": "{ [key: string]: any; }",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "today": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "String",
                    "resolved": "String",
                    "references": {
                        "String": {
                            "location": "global",
                            "id": "global::String"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "propertyid": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "propertyid",
                "reflect": false
            },
            "unassignedDates": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "unassigned-dates",
                "reflect": false
            },
            "to_date": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "to_date",
                "reflect": false
            },
            "highlightedDate": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "highlighted-date",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "renderAgain": {},
            "unassignedRoomsNumber": {}
        };
    }
    static get events() {
        return [{
                "method": "optionEvent",
                "name": "optionEvent",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ [key: string]: any }",
                    "resolved": "{ [key: string]: any; }",
                    "references": {}
                }
            }, {
                "method": "gotoRoomEvent",
                "name": "gotoRoomEvent",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{\n    [key: string]: any;\n  }",
                    "resolved": "{ [key: string]: any; }",
                    "references": {}
                }
            }, {
                "method": "gotoToBeAssignedDate",
                "name": "gotoToBeAssignedDate",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{\n    [key: string]: any;\n  }",
                    "resolved": "{ [key: string]: any; }",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "unassignedDates",
                "methodName": "handleCalendarDataChanged"
            }];
    }
    static get listeners() {
        return [{
                "name": "reduceAvailableUnitEvent",
                "method": "handleReduceAvailableUnitEvent",
                "target": "window",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=igl-cal-header.js.map
