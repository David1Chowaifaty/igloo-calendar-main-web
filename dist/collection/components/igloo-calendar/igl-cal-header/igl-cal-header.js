import { Host, h } from "@stencil/core";
import { ToBeAssignedService } from "../../../services/toBeAssigned.service";
import { dateToFormattedString } from "../../../utils/utils";
import moment from "moment";
import locales from "../../../stores/locales.store";
import calendar_data from "../../../stores/calendar-data";
import { handleUnAssignedDatesChange } from "../../../stores/unassigned_dates.store";
export class IglCalHeader {
    constructor() {
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
                const selectedDate = moment(endDate).format('D_M_YYYY');
                if (data[endDate]) {
                    const result = await this.toBeAssignedService.getUnassignedRooms(this.propertyid, dateToFormattedString(new Date(endDate)), this.calendarData.roomsInfo, this.calendarData.formattedLegendData);
                    this.unassignedRoomsNumber[selectedDate] = result.length;
                }
                else if (this.unassignedRoomsNumber[selectedDate]) {
                    const res = this.unassignedRoomsNumber[selectedDate] - 1;
                    this.unassignedRoomsNumber[selectedDate] = res < 0 ? 0 : res;
                }
                endDate = moment(endDate).add(1, 'days').toDate().getTime();
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
        return (h(Host, { key: '4b18691dde3992c38a93f4f6cb56362c9cda33b4' }, h("div", { key: '725cd3a8b0380e11f2ee240bb9281a34b148e085', class: "stickyCell align-items-center topLeftCell preventPageScroll" }, h("div", { key: 'c497c8c9f0466d4075cc90fad2fa2c74977696e2', class: "row justify-content-around no-gutters" }, !this.calendarData.is_vacation_rental && (h("div", { class: "caledarBtns", onClick: () => this.handleOptionEvent('showAssigned'), "data-toggle": "tooltip", "data-placement": "bottom", title: locales.entries.Lcz_UnassignedUnitsTooltip }, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", class: "svg-icon" }, h("path", { fill: "#6b6f82", d: "M448 160H320V128H448v32zM48 64C21.5 64 0 85.5 0 112v64c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zM448 352v32H192V352H448zM48 288c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V336c0-26.5-21.5-48-48-48H48z" })))), h("div", { key: '47ff519b76e73f4bf387c31c17223247126caee8', class: "caledarBtns", onClick: () => this.handleOptionEvent('calendar'), "data-toggle": "tooltip", "data-placement": "bottom", title: locales.entries.Lcz_Navigate }, h("svg", { key: 'a74ee92d5520a631d73b2d3af7ff9ce0e77221eb', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", class: 'svg-icon' }, h("path", { key: '378f270bf232b73e74a55055a5a631f2c0cfb466', fill: "#6b6f82", d: "M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" })), h("ir-date-picker", { key: '6c038c62f3cd01e780c842e620edfbc969233308', minDate: moment().add(-2, 'months').startOf('month').format('YYYY-MM-DD'), autoApply: true, singleDatePicker: true, onDateChanged: evt => {
                console.log('evt', evt);
                this.handleDateSelect(evt);
            }, class: "datePickerHidden" })), h("div", { key: 'b6f677baf6d72293cb86aae0bddc1e66ed4bd4d8', class: "caledarBtns", onClick: () => this.handleOptionEvent('gotoToday'), "data-toggle": "tooltip", "data-placement": "bottom", title: locales.entries.Lcz_Today }, h("svg", { key: 'cfbca7678f7025dbca7b6246961b1ef2b6b38729', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", class: "svg-icon" }, h("path", { key: 'bcac5258c80ba56792064d47eb3fc0c6af0fc677', fill: "#6b6f82", d: "M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" }))), h("div", { key: 'a76b5452bf5976799a40ea343c314b5c49d24c72', class: "caledarBtns", onClick: () => this.handleOptionEvent('add', this.getNewBookingModel()), "data-toggle": "tooltip", "data-placement": "bottom", title: locales.entries.Lcz_CreateNewBooking }, h("svg", { key: 'df33a5106b558132ee13c2f573aa547b2b518c25', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", class: "svg-icon" }, h("path", { key: '6be8239908fe65006eecd7cf66175fa777520a28', fill: "#6b6f82", d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" })))), h("div", { key: '52a57091046eb2bc9ba9af770ea481c6954fb8a2', class: "row justify-content-around no-gutters searchContiner" }, h("fieldset", { key: 'fbf34190c52fe4dd501dbf3077d8c4ec7d0d0d12', class: `form-group position-relative ${this.searchValue != '' ? 'show' : ''}` }, h("input", { key: '447b92387198ee66e631e2ed3dd0885dc093d359', type: "text", class: "form-control form-control-sm input-sm", id: "iconLeft7", value: this.searchValue, placeholder: locales.entries.Lcz_FindUnit, onInput: event => this.handleFilterRooms(event) }), this.searchValue !== '' ? (h("div", { class: "form-control-position pointer", onClick: () => this.handleClearSearch(), "data-toggle": "tooltip", "data-placement": "top", "data-original-title": "Clear Selection" }, h("i", { class: "la la-close font-small-4" }))) : null, this.searchList.length ? (h("div", { class: "position-absolute searchListContainer dropdown-menu dropdown-menu-left min-width-full" }, this.searchList.map(room => (h("div", { class: "searchListItem1 dropdown-item px-1 text-left pointer", onClick: () => this.handleScrollToRoom(room.id) }, room.name))))) : null))), h("div", { key: '9770cd22d366494ee30d80f8f57db52480201551', class: "stickyCell headersContainer" }, h("div", { key: '931d649970740f12815ed4d26fd01914203f6851', class: "monthsContainer" }, this.calendarData.monthsInfo.map(monthInfo => (h("div", { class: "monthCell", style: { width: monthInfo.daysCount * 70 + 'px' } }, h("div", { class: "monthTitle" }, monthInfo.monthName))))), this.calendarData.days.map(dayInfo => (h("div", { class: `headerCell align-items-center ${'day-' + dayInfo.day} ${dayInfo.day === this.today || dayInfo.day === this.highlightedDate ? 'currentDay' : ''}`, "data-day": dayInfo.day }, !this.calendarData.is_vacation_rental && (h("div", { class: "preventPageScroll" }, h("span", { class: `badge badge-${this.unassignedRoomsNumber[dayInfo.day] || dayInfo.unassigned_units_nbr !== 0 ? 'info pointer' : 'light'} badge-pill`, onClick: () => this.showToBeAssigned(dayInfo) }, this.unassignedRoomsNumber[dayInfo.day] || dayInfo.unassigned_units_nbr))), h("div", { class: "dayTitle" }, dayInfo.dayDisplayName), h("div", { class: "dayCapacityPercent" }, dayInfo.occupancy, "%")))))));
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
                }
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
                }
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
                    "original": "{\r\n    [key: string]: any;\r\n  }",
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
                    "original": "{\r\n    [key: string]: any;\r\n  }",
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
