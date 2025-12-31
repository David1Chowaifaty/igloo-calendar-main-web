import { Host, h, Fragment } from "@stencil/core";
import { ToBeAssignedService } from "../../../services/toBeAssigned.service";
import { dateToFormattedString } from "../../../utils/utils";
import moment from "moment";
import locales from "../../../stores/locales.store";
import { getUnassignedDates } from "../../../stores/unassigned_dates.store";
import { colorVariants } from "../../ui/ir-icons/icons";
//import { updateCategories } from '@/utils/events.utils';
export class IglToBeAssigned {
    unassignedDatesProp;
    propertyid;
    from_date;
    to_date;
    calendarData;
    loadingMessage;
    showDatesList = false;
    renderAgain = false;
    orderedDatesList = [];
    noScroll = false;
    selectedDateDisplay = '';
    optionEvent;
    reduceAvailableUnitEvent;
    showBookingPopup;
    addToBeAssignedEvent;
    highlightToBeAssignedBookingEvent;
    isGotoToBeAssignedDate = false;
    isLoading = true;
    selectedDate = null;
    data = {};
    today = new Date();
    categoriesData = {};
    toBeAssignedService = new ToBeAssignedService();
    unassignedDates;
    componentWillLoad() {
        this.reArrangeData();
        this.loadingMessage = locales.entries.Lcz_FetchingUnAssignedUnits;
    }
    handleUnassignedDatesToBeAssignedChange(newValue) {
        const { fromDate, toDate, data } = newValue;
        let dt = new Date(fromDate);
        dt.setHours(0);
        dt.setMinutes(0);
        dt.setSeconds(0);
        let endDate = dt.getTime();
        while (endDate <= new Date(toDate).getTime()) {
            if (data && !data[endDate] && this.unassignedDates.hasOwnProperty(endDate)) {
                delete this.unassignedDates[endDate];
            }
            else if (data && data[endDate]) {
                this.unassignedDates[endDate] = data[endDate];
            }
            endDate = moment(endDate).add(1, 'days').toDate().getTime();
        }
        this.data = { ...this.unassignedDates };
        this.orderedDatesList = Object.keys(this.data).sort((a, b) => parseInt(a) - parseInt(b));
        if (this.orderedDatesList.length) {
            if (this.selectedDate === null) {
                this.selectedDate = this.orderedDatesList[0];
            }
            if (this.selectedDate && this.data[this.selectedDate]) {
                this.selectedDateDisplay = this.data[this.selectedDate]?.dateStr || this.selectedDateDisplay;
                this.showForDate(this.selectedDate, false);
            }
            else {
                this.isLoading = false;
                this.renderView();
            }
        }
        else {
            this.selectedDate = null;
            this.selectedDateDisplay = '';
            this.isLoading = false;
            this.renderView();
        }
    }
    handleAssignUnit(event) {
        const opt = event.detail;
        const data = opt.data;
        event.stopImmediatePropagation();
        event.stopPropagation();
        if (opt?.key === 'assignUnit' && this.data) {
            // Verify data.selectedDate exists in this.data
            if (data?.selectedDate && this.data[data.selectedDate]) {
                // Check if categories exist and there's only one category
                if (this.data[data.selectedDate]?.categories && Object.keys(this.data[data.selectedDate]?.categories || {})?.length === 1) {
                    this.isLoading = true;
                    this.noScroll = true;
                }
                // Make sure all required properties exist before filtering
                if (data?.RT_ID &&
                    this.data[data.selectedDate]?.categories &&
                    this.data[data.selectedDate].categories[data.RT_ID] &&
                    Array.isArray(this.data[data.selectedDate].categories[data.RT_ID]) &&
                    data?.assignEvent?.ID) {
                    this.data[data.selectedDate].categories[data.RT_ID] = this.data[data.selectedDate].categories[data.RT_ID].filter(eventData => eventData && eventData.ID !== data.assignEvent.ID);
                }
                // Only update calendarData if it exists in the data
                if (data?.calendarData) {
                    this.calendarData = data.calendarData;
                }
                this.renderView();
            }
        }
    }
    async updateCategories(key, calendarData) {
        try {
            //console.log("called")
            let categorisedRooms = {};
            const result = await this.toBeAssignedService.getUnassignedRooms({ from_date: calendarData.from_date, to_date: calendarData.to_date }, this.propertyid, dateToFormattedString(new Date(+key)), calendarData.roomsInfo, calendarData.formattedLegendData);
            result.forEach(room => {
                if (!categorisedRooms.hasOwnProperty(room.RT_ID)) {
                    categorisedRooms[room.RT_ID] = [room];
                }
                else {
                    categorisedRooms[room.RT_ID].push(room);
                }
            });
            this.unassignedDates[key].categories = categorisedRooms;
        }
        catch (error) {
            //  toastr.error(error);
        }
    }
    async reArrangeData() {
        try {
            this.today.setHours(0, 0, 0, 0);
            this.calendarData.roomsInfo.forEach(category => {
                this.categoriesData[category.id] = {
                    name: category.name,
                    roomsList: category.physicalrooms,
                    roomIds: category.physicalrooms.map(room => {
                        return room.id;
                    }),
                };
            });
            this.selectedDate = null;
            //this.unassignedDates = await this.toBeAssignedService.getUnassignedDates(this.propertyid, dateToFormattedString(new Date()), this.to_date);
            this.unassignedDates = getUnassignedDates();
            console.log(this.unassignedDates);
            this.data = this.unassignedDates;
            this.orderedDatesList = Object.keys(this.data).sort((a, b) => parseInt(a) - parseInt(b));
            if (!this.selectedDate && this.orderedDatesList.length) {
                this.selectedDate = this.orderedDatesList[0];
                this.selectedDateDisplay = this.data[this.selectedDate]?.dateStr || '';
            }
            else if (!this.orderedDatesList.length) {
                this.selectedDateDisplay = '';
            }
        }
        catch (error) {
            console.error('Error fetching unassigned dates:', error);
            //  toastr.error(error);
        }
    }
    async componentDidLoad() {
        setTimeout(() => {
            if (!this.isGotoToBeAssignedDate && Object.keys(this.unassignedDates).length > 0) {
                //console.log(this.isGotoToBeAssignedDate);
                const firstKey = Object.keys(this.unassignedDates)[0];
                this.showForDate(firstKey);
            }
        }, 100);
    }
    async gotoDate(event) {
        this.isGotoToBeAssignedDate = true;
        this.showForDate(event.detail.data);
        this.showDatesList = false;
        this.renderView();
    }
    handleToBeAssignedDate(e) {
        this.showBookingPopup.emit({
            key: 'calendar',
            data: new Date(e.detail.data.fromDate).getTime() - 86400000,
            noScroll: false,
        });
    }
    async showForDate(dateStamp, withLoading = true) {
        try {
            if (withLoading) {
                this.isLoading = true;
            }
            if (this.showDatesList) {
                this.showUnassignedDate();
            }
            await this.updateCategories(dateStamp, this.calendarData);
            this.addToBeAssignedEvent.emit({ key: 'tobeAssignedEvents', data: [] });
            this.showBookingPopup.emit({
                key: 'calendar',
                data: parseInt(dateStamp) - 86400000,
                noScroll: this.noScroll,
            });
            if (this.isGotoToBeAssignedDate) {
                this.isGotoToBeAssignedDate = false;
            }
            this.isLoading = false;
            this.selectedDate = dateStamp;
            this.selectedDateDisplay = this.data[dateStamp]?.dateStr || this.selectedDateDisplay;
            this.renderView();
        }
        catch (error) {
            // toastr.error(error);
        }
    }
    getDay(dt) {
        const currentDate = new Date(dt);
        const locale = 'default'; //'en-US';
        const dayOfWeek = this.getLocalizedDayOfWeek(currentDate, locale);
        // const monthName = currentDate.toLocaleString("default", { month: 'short' })
        return dayOfWeek + ' ' + currentDate.getDate() + ', ' + currentDate.getFullYear();
    }
    getLocalizedDayOfWeek(date, locale) {
        const options = { weekday: 'short' };
        return date.toLocaleDateString(locale, options);
    }
    handleOptionEvent(key, data = '') {
        this.highlightToBeAssignedBookingEvent.emit({
            key: 'highlightBookingId',
            data: { bookingId: '----' },
        });
        this.addToBeAssignedEvent.emit({ key: 'tobeAssignedEvents', data: [] });
        this.optionEvent.emit({ key, data });
    }
    showUnassignedDate() {
        this.showDatesList = !this.showDatesList;
    }
    getToBeAssignedEntities() {
        // toBeAssignedEvents
    }
    getCategoryView() {
        if (this.orderedDatesList.length && this.selectedDate && this.data[this.selectedDate]) {
            return Object.entries(this.data[this.selectedDate].categories).map(([id, eventDatas], ind) => (h("igl-tba-category-view", { calendarData: this.calendarData, selectedDate: this.selectedDate, categoryId: id, categoryIndex: ind, categoriesData: this.categoriesData, eventDatas: eventDatas, onAssignUnitEvent: evt => this.handleAssignUnit(evt) })));
        }
        else {
            return null;
        }
    }
    renderView() {
        this.renderAgain = !this.renderAgain;
    }
    render() {
        const selectedDateData = this.selectedDate ? this.data[this.selectedDate] : null;
        return (h(Host, { key: '6f6f653a4d95b48a7da5fbf6a2a096f64b603bfa', class: "tobeAssignedContainer pr-1 text-left" }, h("div", { key: 'e54c5d0554eccfae52738eeb258ec2469a2896b7' }, h("div", { key: '3e4982860778d5bb6c59d7447e76aff654361d0b' }, h("div", { key: '16269d5160e8ae8addd2111730179fba462a5822', class: "stickyHeader pt-1" }, h("div", { key: '1698ff232239176850a1955236301bbc7b7fef74', class: 'assignment_header' }, h("p", { key: '6521fd19febeba2871251531277aafdcb490b291', class: "tobeAssignedHeader " }, locales.entries.Lcz_Assignments), h("ir-button", { key: '47a2b6be923a5808dfb8456e9934be0c669556ff', class: "close_btn", variant: "icon", btn_styles: "close_btn_style", icon_name: "double_caret_left", style: colorVariants.secondary, onClickHandler: () => this.handleOptionEvent('closeSideMenu'), visibleBackgroundOnHover: true })), h("hr", { key: '31d3d6eb87005b93c7818f0bfea60f7c3da908b9' }), Object.keys(this.data).length === 0 ? (h("p", null, locales.entries.Lcz_AllBookingsAreAssigned)) : this.isLoading ? (h("p", { class: "d-flex align-items-center" }, h("span", { class: "p-0" }, this.loadingMessage), h("div", { class: "dots" }, h("div", { class: "dot" }), h("div", { class: "dot" }), h("div", { class: "dot" })))) : (h(Fragment, null, this.orderedDatesList.length ? (h("div", { class: `custom-dropdown border border-light rounded text-center ` + (this.showDatesList ? 'show' : ''), id: "dropdownMenuButton", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" }, h("div", { class: 'dropdown-toggle' }, h("span", { class: "font-weight-bold" }, selectedDateData?.dateStr || this.selectedDateDisplay), h("svg", { class: 'caret-icon', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", height: 14, width: 14 }, h("path", { fill: "#6b6f82", d: "M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" }))), h("div", { class: "dropdown-menu dropdown-menu-right full-width", "aria-labelledby": "dropdownMenuButton" }, this.orderedDatesList?.map(ordDate => (h("div", { class: "dropdown-item pointer", onClick: () => this.showForDate(ordDate) }, this.data[ordDate].dateStr)))))) : (locales.entries.Lcz_AllBookingsAreAssigned)))), !this.isLoading && (h("div", { key: '3831b691dea1602168d02272c2f57976d0b96790', class: "scrollabledArea" }, this.selectedDate ? (selectedDateData && Object.keys(selectedDateData.categories).length ? (this.getCategoryView()) : (h("div", { class: "mt-1" }, locales.entries.Lcz_AllAssignForThisDay))) : null))))));
    }
    static get is() { return "igl-to-be-assigned"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["igl-to-be-assigned.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["igl-to-be-assigned.css"]
        };
    }
    static get properties() {
        return {
            "unassignedDatesProp": {
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
                "attribute": "unassigned-dates-prop",
                "reflect": false
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
            "from_date": {
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
                "attribute": "from_date",
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
            "calendarData": {
                "type": "unknown",
                "mutable": true,
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
            }
        };
    }
    static get states() {
        return {
            "loadingMessage": {},
            "showDatesList": {},
            "renderAgain": {},
            "orderedDatesList": {},
            "noScroll": {},
            "selectedDateDisplay": {}
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
                "method": "reduceAvailableUnitEvent",
                "name": "reduceAvailableUnitEvent",
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
                "method": "showBookingPopup",
                "name": "showBookingPopup",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "addToBeAssignedEvent",
                "name": "addToBeAssignedEvent",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "highlightToBeAssignedBookingEvent",
                "name": "highlightToBeAssignedBookingEvent",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "unassignedDatesProp",
                "methodName": "handleUnassignedDatesToBeAssignedChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "gotoToBeAssignedDate",
                "method": "gotoDate",
                "target": "window",
                "capture": false,
                "passive": false
            }, {
                "name": "highlightToBeAssignedBookingEvent",
                "method": "handleToBeAssignedDate",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=igl-to-be-assigned.js.map
