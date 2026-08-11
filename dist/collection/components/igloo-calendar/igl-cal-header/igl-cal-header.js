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
    dayUseBookings = [];
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
    // private getTotalUnits() {
    //   return calendar_data.property?.roomtypes?.reduce((prev, curr: RoomType) => {
    //     if (!curr.is_active) {
    //       return prev;
    //     }
    //     const activePhysicalRooms = curr.physicalrooms?.filter(r => r.is_active) ?? [];
    //     return activePhysicalRooms.length > 0 ? activePhysicalRooms.length + prev : prev;
    //   }, 0);
    // }
    render() {
        return (h(Host, { key: '24cbacab8975ab58d49c8dc2b76fe3e2c203aca5' }, h("div", { key: '76079becf4b213888223c18901d19a345da5ed30', class: "stickyCell align-items-center topLeftCell preventPageScroll" }, h("div", { key: '27308c70eebff71a903cdceb6bae4d32e37974ac', class: "header__fd-actions" }, h("div", { key: '047def8e605fded4d30ee0eb155b9426f0852cfe', class: "row justify-content-around no-gutters", style: { gap: '0' } }, !this.calendarData.is_vacation_rental && (h(Fragment, { key: '2eb02b86745479dd86ca7802b04750ece9f4da15' }, h("wa-tooltip", { key: '4f4a5ce58a8bdc26ed15ff2b6fb8d746dec557c2', trigger: "hover", for: "fd-unassigned-dates_btn" }, locales.entries.Lcz_UnassignedUnitsTooltip), h("ir-custom-button", { key: '08163458588fa30e128689f501b4c0fa69c461db', id: "fd-unassigned-dates_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleOptionEvent('showAssigned') }, h("wa-icon", { key: '68b00c3724f76524662aa42f23f872022cddb16c', style: { fontSize: '1.3rem' }, name: "list-ol", label: locales.entries.Lcz_UnassignedUnitsTooltip, "aria-label": locales.entries.Lcz_UnassignedUnitsTooltip })))), !this.calendarData.is_vacation_rental && this.dayUseBookings?.length > 0 && (h(Fragment, { key: '2da96ac14e8544d29bf198630704fe0a51abfba5' }, h("wa-tooltip", { key: '55a32886210ceccc82b456960b4af5f85471e5a4', trigger: "hover", for: "fd-day-use-bookings_btn" }, 'Day use bookings'), h("ir-custom-button", { key: '6b6f7ce03ac28d66b8723f9e48b8fef69a7973f7', id: "fd-day-use-bookings_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleOptionEvent('showDayUseBookings') }, h("wa-icon", { key: 'dbb049cd78675c35b4510974885bd236bb7adc17', style: { fontSize: '1.3rem' }, name: "sun", label: 'Day use', "aria-label": 'Day use' })))), h("wa-tooltip", { key: '014e6ec2d61f3495840022af57c19057ec66b14e', trigger: "hover", for: "fd-dates-navigation_btn" }, locales.entries.Lcz_Navigate), h("ir-date-select", { key: '5cd1034250b60451f595dd8e421104a9e42fcffe', minDate: moment().add(-2, 'months').startOf('month').format('YYYY-MM-DD'), onDateChanged: evt => {
                console.log('evt', evt);
                this.handleDateSelect(evt);
            }, ref: el => (this.dateSelectRef = el) }, h("ir-custom-button", { key: 'eeea454c6752f2e2c2f7dc4619d6f7fcb30bfc99', slot: "trigger", id: "fd-dates-navigation_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleOptionEvent('calendar') }, h("wa-icon", { key: '97b3705a9a5f4c980ccd4d6d42c2fa8411e785d4', style: { fontSize: '1.3rem' }, name: "calendar-days", variant: "regular", label: locales.entries.Lcz_Navigate, "aria-label": locales.entries.Lcz_Navigate })), h("div", { key: '0d4d5ad72881e6cb2aee555e6bb9dc1bffb6e2ea', class: "fd-dates__actions" }, h("wa-divider", { key: '8f13ef81a0c57bfdb98d34c820240e2dbc5f387e' }), h("ir-custom-button", { key: '1444f6fa14f065068c07277ff14dc05a75736740', variant: "neutral", appearance: "outlined", onClickHandler: () => {
                this.handleOptionEvent('gotoToday');
                this.dateSelectRef.hide();
            } }, "Today"))), h("wa-tooltip", { key: 'dfc50b6e4598c8f298d5b94a8cf9279f56c1f575', trigger: "hover", for: "fd-rectifier" }, "Rectify or open availability"), h("ir-custom-button", { key: '85a08c0f63d06c8252a2bd1b58fe34b4d472f2c4', id: "fd-rectifier", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleOptionEvent('rectify') }, h("wa-icon", { key: 'c53ac4e7c983c37df0de870c8a78854c57c44769', style: { fontSize: '1.3rem' }, name: "circle-check", variant: "regular", label: 'Rectify or open availability', "aria-label": 'Rectify or open availability' })), h(Fragment, { key: '57d928fa449aa197b298f9f1b0eb128a7203dee6' }, h("wa-tooltip", { key: '5c5350f1876205273974c0c7c34464c33d7521e8', trigger: "hover", for: "fd-stop-open-sale_btn" }, locales.entries.Lcz_StopOpenSale), h("ir-custom-button", { key: '786cdb12458bdac0420fc8a95529bbf4ec985702', id: "fd-stop-open-sale_btn", variant: "neutral", appearance: "plain", onClickHandler: () => this.handleOptionEvent('bulk', this.getNewBookingModel()) }, h("wa-icon", { key: '7d697ee26bae15babf24a19b344b1eb2c548572d',
            // variant="regular"
            style: { fontSize: '1.3rem' }, name: "xmarks-lines", label: locales.entries.Lcz_StopOpenSale, "aria-label": locales.entries.Lcz_StopOpenSale })))), this.roomsList.length >= 20 && (h("div", { key: '634a88615237d63ffefa8e7dc3f1934866ffa721', class: "searchContiner" }, h("ir-picker", { key: 'e38d50dce5789eb0397dedb36594ade112170204', size: "s", "onCombobox-select": e => {
                this.handleScrollToRoom(Number(e.detail.item.value));
            } }, this.roomsList.map(room => (h("ir-picker-item", { label: room.name, value: room.id }, room.name)))))))), h("div", { key: 'bb8423fc40d54c779ee00bca9e2388194094e43f', class: "stickyCell headersContainer" }, h("div", { key: '3be39ab7038298d3daef0425daa8710bd7e429de', class: "monthsContainer" }, this.calendarData.monthsInfo.map(monthInfo => (h("div", { class: "monthCell", style: { width: monthInfo.daysCount * 58 + 'px' } }, h("div", { class: "monthTitle" }, monthInfo.monthName))))), this.calendarData.days.map(dayInfo => {
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
                "reflect": false,
                "attribute": "propertyid"
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
                "reflect": false,
                "attribute": "unassigned-dates"
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
                "reflect": false,
                "attribute": "to_date"
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
                "reflect": false,
                "attribute": "highlighted-date"
            },
            "dayUseBookings": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "DayUseBookings[]",
                    "resolved": "DayUseBookings[]",
                    "references": {
                        "DayUseBookings": {
                            "location": "import",
                            "path": "@/components",
                            "id": "src/components.d.ts::DayUseBookings",
                            "referenceLocation": "DayUseBookings"
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
                "setter": false,
                "defaultValue": "[]"
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
