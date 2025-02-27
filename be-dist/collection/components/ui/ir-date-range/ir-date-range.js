import { h } from "@stencil/core";
import { addMonths, eachDayOfInterval, endOfMonth, endOfWeek, format, isSameMonth, startOfMonth, startOfWeek, addDays, isSameDay, isBefore, isAfter, addYears, isToday, } from "date-fns";
import { enUS } from "date-fns/locale";
import { getAbbreviatedWeekdays } from "../../../utils/utils";
import localizedWords from "../../../stores/localization.store";
export class IrDateRange {
    constructor() {
        this.fromDate = null;
        this.toDate = null;
        this.minDate = addYears(new Date(), -24);
        this.maxDate = addYears(new Date(), 24);
        this.maxSpanDays = 90;
        this.showPrice = false;
        this.locale = enUS;
        this.selectedDates = { start: new Date(), end: new Date() };
        this.displayedDaysArr = [];
        this.hoveredDate = null;
        this.weekdays = [];
        this.handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                this.decrementDate();
            }
            else if (e.key === 'ArrowRight') {
                this.incrementDate();
            }
        };
    }
    componentWillLoad() {
        var _a;
        this.weekdays = getAbbreviatedWeekdays(this.locale);
        this.resetHours();
        this.selectedDates = {
            start: this.fromDate,
            end: this.toDate,
        };
        const currentMonth = (_a = this.fromDate) !== null && _a !== void 0 ? _a : new Date();
        const nextMonth = addMonths(currentMonth, 1);
        this.displayedDaysArr = [this.getMonthDays(currentMonth), this.getMonthDays(nextMonth)];
    }
    handleLocale(newValue, oldLocale) {
        if (newValue !== oldLocale) {
            this.weekdays = getAbbreviatedWeekdays(newValue);
        }
    }
    handleFromDateChange(newValue, oldValue) {
        if (!isSameDay(newValue || new Date(), oldValue || new Date())) {
            this.selectedDates = Object.assign(Object.assign({}, this.selectedDates), { start: newValue });
        }
    }
    handleToDateChange(newValue, oldValue) {
        if (!isSameDay(newValue || new Date(), oldValue || new Date())) {
            this.selectedDates = Object.assign(Object.assign({}, this.selectedDates), { end: newValue });
        }
    }
    getMonthDays(month) {
        return {
            month,
            days: eachDayOfInterval({
                start: startOfWeek(startOfMonth(month), { weekStartsOn: 1, locale: this.locale }),
                end: endOfWeek(endOfMonth(month), { weekStartsOn: 1, locale: this.locale }),
            }),
        };
    }
    decrementDate() {
        if (this.selectedDates.start && this.selectedDates.end) {
            this.selectedDates = {
                start: addDays(new Date(this.selectedDates.start), -1),
                end: new Date(this.selectedDates.end),
            };
        }
    }
    incrementDate() {
        if (this.selectedDates.start && this.selectedDates.end) {
            this.selectedDates = {
                start: new Date(this.selectedDates.start),
                end: addDays(new Date(this.selectedDates.end), 1),
            };
        }
    }
    goToNextMonth(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        const currentSecondMonth = this.displayedDaysArr[1].month;
        const newSecondMonth = addMonths(currentSecondMonth, 1);
        if (isBefore(endOfMonth(newSecondMonth), this.minDate) || isAfter(startOfMonth(newSecondMonth), this.maxDate)) {
            return;
        }
        this.displayedDaysArr = [this.displayedDaysArr[1], this.getMonthDays(newSecondMonth)];
    }
    goToPreviousMonth(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        const currentFirstMonth = this.displayedDaysArr[0].month;
        const newFirstMonth = addMonths(currentFirstMonth, -1);
        if (isBefore(endOfMonth(newFirstMonth), this.minDate) || isAfter(startOfMonth(newFirstMonth), this.maxDate)) {
            return;
        }
        this.displayedDaysArr = [this.getMonthDays(newFirstMonth), this.displayedDaysArr[0]];
    }
    selectDay(day) {
        let isDateDisabled = false;
        if (this.dateModifiers) {
            isDateDisabled = !!this.dateModifiers[format(day, 'yyyy-MM-dd')];
        }
        if (isDateDisabled && !this.selectedDates.start) {
            return;
        }
        if (isSameDay(new Date(this.selectedDates.start), new Date(day)) || isSameDay(new Date(this.selectedDates.end), new Date(day))) {
            this.selectedDates = { start: day, end: null };
        }
        else {
            if (this.selectedDates.start === null) {
                this.selectedDates = { start: day, end: null };
            }
            else {
                if (this.selectedDates.end === null) {
                    if (isBefore(day, this.selectedDates.start)) {
                        if (isDateDisabled) {
                            return;
                        }
                        this.selectedDates = { start: day, end: null };
                    }
                    else {
                        this.selectedDates = Object.assign(Object.assign({}, this.selectedDates), { end: day });
                    }
                }
                else {
                    if (!isDateDisabled) {
                        this.selectedDates = { start: day, end: null };
                    }
                }
            }
        }
        this.dateChange.emit(this.selectedDates);
    }
    resetHours() {
        this.minDate.setHours(0, 0, 0, 0);
        this.maxDate.setHours(0, 0, 0, 0);
        if (this.fromDate) {
            this.fromDate.setHours(0, 0, 0, 0);
        }
        if (this.toDate) {
            this.toDate.setHours(0, 0, 0, 0);
        }
    }
    handleMouseEnter(day) {
        this.hoveredDate = day;
    }
    handleMouseLeave() {
        this.hoveredDate = null;
    }
    isDaySelected(day) {
        var _a;
        const date = new Date(day);
        date.setHours(0, 0, 0, 0);
        const start = new Date((_a = this.selectedDates.start) !== null && _a !== void 0 ? _a : new Date());
        start.setHours(0, 0, 0, 0);
        const end = this.selectedDates.end ? new Date(this.selectedDates.end) : this.hoveredDate;
        end === null || end === void 0 ? void 0 : end.setHours(0, 0, 0, 0);
        if (this.selectedDates.start && !this.selectedDates.end && this.hoveredDate && isAfter(this.hoveredDate, start)) {
            if (isAfter(date, start) && isBefore(date, end)) {
                return true;
            }
        }
        else if (isAfter(date, start) && this.selectedDates.end && isBefore(date, end)) {
            return true;
        }
        return false;
    }
    getMonthStyles(index) {
        if (index === 0) {
            if (!isAfter(startOfMonth(this.displayedDaysArr[0].month), this.minDate)) {
                return 'margin-horizontal';
            }
            return 'margin-right';
        }
        else {
            if (!isBefore(endOfMonth(this.displayedDaysArr[1].month), this.maxDate)) {
                return 'margin-right margin-left';
            }
            return 'margin-left';
        }
    }
    checkDatePresence(day) {
        if (!this.dateModifiers) {
            return;
        }
        const formatedDate = format(day, 'yyyy-MM-dd');
        const result = this.dateModifiers[formatedDate];
        if (result) {
            return result;
        }
        return;
    }
    render() {
        const maxSpanDays = this.selectedDates.start && addDays(this.selectedDates.start, this.maxSpanDays);
        return (h("div", { key: '60fb0f42ea1239f84634c6afd659ef31c1f508d7', class: 'date-picker' }, this.displayedDaysArr.map((month, index) => (h("table", { class: "calendar ", role: "grid" }, h("thead", null, h("tr", { class: "calendar-header" }, h("th", { colSpan: 7 }, h("div", { class: "month-navigation" }, index === 0 && isAfter(startOfMonth(this.displayedDaysArr[0].month), this.minDate) && (h("button", { name: "previous month", class: "navigation-buttons previous-month", type: "button", onClick: this.goToPreviousMonth.bind(this) }, h("p", { class: "sr-only" }, "previous month"), h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "16", width: "25.6", viewBox: "0 0 320 512" }, h("path", { fill: "currentColor", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" })))), h("span", { class: 'capitalize' }, format(month.month, 'MMMM yyyy', { locale: this.locale })), index === 0 && (h("button", { name: "next month", class: "navigation-buttons button-next", type: "button", onClick: this.goToNextMonth.bind(this) }, h("p", { slot: "icon", class: "sr-only" }, "next month"), h("svg", { slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "16", width: "25.6", viewBox: "0 0 320 512" }, h("path", { d: "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" })))), index === 1 && isBefore(endOfMonth(this.displayedDaysArr[1].month), this.maxDate) && (h("button", { name: "next month", class: "navigation-buttons button-next-main", type: "button", onClick: this.goToNextMonth.bind(this) }, h("p", { class: "sr-only " }, "next month"), h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "16", width: "25.6", viewBox: "0 0 320 512" }, h("path", { fill: "currentColor", d: "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" }))))))), h("tr", { class: "weekday-header", role: "row" }, this.weekdays.map(weekday => (h("th", { class: "weekday-name", key: weekday }, weekday.replace('.', '')))))), h("tbody", { class: "days-grid" }, month.days
            .reduce((acc, day, index) => {
            const weekIndex = Math.floor(index / 7);
            if (!acc[weekIndex]) {
                acc[weekIndex] = [];
            }
            acc[weekIndex].push(day);
            return acc;
        }, [])
            .map(week => (h("tr", { class: "week-row", role: "row" }, week.map((day) => {
            var _a, _b, _c, _d;
            day.setHours(0, 0, 0, 0);
            const checkedDate = this.checkDatePresence(day);
            return (h("td", { class: "day-cell", key: format(day, 'yyyy-MM-dd'), role: "gridcell" }, isSameMonth(day, month.month) && (h("button", { disabled: isBefore(day, this.minDate) || isAfter(day, this.maxDate) || (this.selectedDates.start && isAfter(day, maxSpanDays) && !this.selectedDates.end), onMouseEnter: () => this.handleMouseEnter(day), onMouseLeave: () => this.handleMouseLeave(), onClick: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.selectDay(day);
                }, style: (checkedDate === null || checkedDate === void 0 ? void 0 : checkedDate.disabled) && this.selectedDates.start && { cursor: 'pointer' }, title: (checkedDate === null || checkedDate === void 0 ? void 0 : checkedDate.disabled) ? (_b = (_a = localizedWords === null || localizedWords === void 0 ? void 0 : localizedWords.entries) === null || _a === void 0 ? void 0 : _a.Lcz_NoAvailability) !== null && _b !== void 0 ? _b : 'No availability' : '', "aria-unavailable": (checkedDate === null || checkedDate === void 0 ? void 0 : checkedDate.disabled) ? 'true' : 'false', "aria-label": `${format(day, 'EEEE, MMMM do yyyy', { locale: this.locale })} ${isBefore(day, this.minDate) || isAfter(day, this.maxDate) ? localizedWords.entries.Lcz_NotAvailable : ''}`, "aria-disabled": isBefore(day, this.minDate) || isAfter(day, this.maxDate) || (checkedDate === null || checkedDate === void 0 ? void 0 : checkedDate.disabled) ? 'true' : 'false', "aria-selected": (this.selectedDates.start && isSameDay(new Date(this.selectedDates.start), new Date(day))) ||
                    this.isDaySelected(day) ||
                    (this.selectedDates.end && isSameDay(new Date((_c = this.selectedDates.end) !== null && _c !== void 0 ? _c : new Date()), new Date(day))), class: `day-button  ${this.selectedDates.start && isSameDay(new Date(this.selectedDates.start), new Date(day)) ? 'day-range-start' : ''}
                          ${this.selectedDates.end && isSameDay(new Date((_d = this.selectedDates.end) !== null && _d !== void 0 ? _d : new Date()), new Date(day)) ? 'day-range-end' : ''}  
                            ${this.isDaySelected(day) ? 'highlight' : ''}
                            ` }, h("p", { class: `day ${isToday(day) ? 'current-date' : ''}` }, format(day, 'd', { locale: this.locale })), this.showPrice && h("p", { class: "price" }, (checkedDate === null || checkedDate === void 0 ? void 0 : checkedDate.withPrice.price) ? '_' : checkedDate.withPrice.price)))));
        }))))))))));
    }
    static get is() { return "ir-date-range"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-date-range.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-date-range.css"]
        };
    }
    static get properties() {
        return {
            "fromDate": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Date | null",
                    "resolved": "Date",
                    "references": {
                        "Date": {
                            "location": "global",
                            "id": "global::Date"
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
                "defaultValue": "null"
            },
            "toDate": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Date | null",
                    "resolved": "Date",
                    "references": {
                        "Date": {
                            "location": "global",
                            "id": "global::Date"
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
                "defaultValue": "null"
            },
            "minDate": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Date",
                    "resolved": "Date",
                    "references": {
                        "Date": {
                            "location": "global",
                            "id": "global::Date"
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
                "defaultValue": "addYears(new Date(), -24)"
            },
            "maxDate": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Date",
                    "resolved": "Date",
                    "references": {
                        "Date": {
                            "location": "global",
                            "id": "global::Date"
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
                "defaultValue": "addYears(new Date(), 24)"
            },
            "dateModifiers": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IDateModifiers",
                    "resolved": "IDateModifiers",
                    "references": {
                        "IDateModifiers": {
                            "location": "import",
                            "path": "./ir-date-range.types",
                            "id": "src/components/ui/ir-date-range/ir-date-range.types.ts::IDateModifiers"
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
            "maxSpanDays": {
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
                "attribute": "max-span-days",
                "reflect": false,
                "defaultValue": "90"
            },
            "showPrice": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "attribute": "show-price",
                "reflect": false,
                "defaultValue": "false"
            },
            "locale": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Locale",
                    "resolved": "Locale",
                    "references": {
                        "Locale": {
                            "location": "import",
                            "path": "date-fns",
                            "id": "node_modules::Locale"
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
                "defaultValue": "enUS"
            }
        };
    }
    static get states() {
        return {
            "selectedDates": {},
            "displayedDaysArr": {},
            "hoveredDate": {},
            "weekdays": {}
        };
    }
    static get events() {
        return [{
                "method": "dateChange",
                "name": "dateChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ start: Date | null; end: Date | null }",
                    "resolved": "{ start: Date; end: Date; }",
                    "references": {
                        "Date": {
                            "location": "global",
                            "id": "global::Date"
                        }
                    }
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "locale",
                "methodName": "handleLocale"
            }, {
                "propName": "fromDate",
                "methodName": "handleFromDateChange"
            }, {
                "propName": "toDate",
                "methodName": "handleToDateChange"
            }];
    }
}
//# sourceMappingURL=ir-date-range.js.map
