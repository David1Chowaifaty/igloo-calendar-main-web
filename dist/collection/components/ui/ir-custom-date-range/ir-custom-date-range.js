import { h } from "@stencil/core";
import moment from "moment/min/moment-with-locales";
import { getAbbreviatedWeekdays } from "./utils";
/**
 * @component ir-custom-date-range
 * @description A two-month inline calendar for selecting a date range.
 * Emits `dateChange` whenever the user clicks a day.
 *
 * @csspart base           - The root wrapper div.
 * @csspart calendar       - Each month `<table>` element.
 * @csspart calendar-header - The `<tr>` that contains the month navigation row.
 * @csspart month-navigation - The `<div>` holding prev/next buttons and the month label.
 * @csspart nav-prev       - The previous-month `<button>`.
 * @csspart nav-next       - The next-month `<button>` (both months).
 * @csspart month-label    - The `<span>` showing the current month and year.
 * @csspart weekday-row    - The `<tr>` containing weekday abbreviation headers.
 * @csspart weekday        - Each `<th>` weekday abbreviation cell.
 * @csspart days-grid      - The `<tbody>` containing all week rows.
 * @csspart week-row       - Each `<tr>` representing one week.
 * @csspart day-cell       - Each `<td>` grid cell.
 * @csspart day-button     - The `<button>` rendered for each visible day.
 */
export class IrCustomDateRange {
    /** The currently selected check-in date. */
    fromDate = null;
    /** The currently selected check-out date. */
    toDate = null;
    /** The earliest selectable date. Defaults to 24 years in the past. */
    minDate = moment().add(-24, 'years');
    /** The latest selectable date. Defaults to 24 years in the future. */
    maxDate = moment().add(24, 'years');
    /**
     * An optional map of `YYYY-MM-DD` → `IDateModifierOptions` used to
     * mark specific dates as unavailable or attach pricing data.
     */
    dateModifiers;
    /** Maximum number of nights that can be selected in one span. */
    maxSpanDays = 90;
    /** When `true`, displays a price line inside each day button (requires `dateModifiers`). */
    showPrice = false;
    /**
     * BCP-47 locale tag used to localise day names and month formatting.
     * @reflect
     */
    locale = 'en';
    selectedDates = { start: moment(), end: moment() };
    displayedDaysArr = [];
    hoveredDate = null;
    weekdays = [];
    /**
     * Emits the selected start and end dates as native `Date` objects.
     * `end` is `null` when the user has only picked the first date.
     */
    dateChange;
    componentWillLoad() {
        this.weekdays = getAbbreviatedWeekdays(this.locale);
        this.resetHours();
        this.selectedDates = { start: this.fromDate, end: this.toDate };
        const currentMonth = this.fromDate ? this.fromDate.clone() : moment();
        const nextMonth = currentMonth.clone().add(1, 'month');
        this.displayedDaysArr = [this.getMonthDays(currentMonth), this.getMonthDays(nextMonth)];
    }
    /** Re-localises weekday names when the locale changes. */
    handleLocale(newValue, oldLocale) {
        if (newValue !== oldLocale) {
            moment.locale(newValue);
            this.weekdays = getAbbreviatedWeekdays(newValue);
        }
    }
    /** Syncs the internal selection start when `fromDate` prop changes. */
    handleFromDateChange(newValue, oldValue) {
        if (!(newValue ?? moment()).isSame(oldValue ?? moment(), 'days')) {
            this.selectedDates = { ...this.selectedDates, start: newValue };
        }
    }
    /** Syncs the internal selection end when `toDate` prop changes. */
    handleToDateChange(newValue, oldValue) {
        if (!(newValue ?? moment()).isSame(oldValue ?? moment(), 'days')) {
            this.selectedDates = { ...this.selectedDates, end: newValue };
        }
    }
    getMonthDays(month) {
        const startDate = moment(month).startOf('month').startOf('week');
        const endDate = moment(month).endOf('month').endOf('week');
        const days = [];
        let day = startDate.clone();
        while (day.isSameOrBefore(endDate)) {
            days.push(day.clone());
            day.add(1, 'day');
        }
        return { month, days };
    }
    goToNextMonth(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        const newSecondMonth = this.displayedDaysArr[1].month.clone().add(1, 'months');
        if (newSecondMonth.endOf('month').isBefore(this.minDate) || newSecondMonth.startOf('month').isAfter(this.maxDate)) {
            return;
        }
        this.displayedDaysArr = [this.displayedDaysArr[1], this.getMonthDays(newSecondMonth)];
    }
    goToPreviousMonth(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        const newFirstMonth = this.displayedDaysArr[0].month.clone().add(-1, 'month');
        if (newFirstMonth.endOf('month').isBefore(this.minDate) || newFirstMonth.startOf('month').isAfter(this.maxDate)) {
            return;
        }
        this.displayedDaysArr = [this.getMonthDays(newFirstMonth), this.displayedDaysArr[0]];
    }
    // private handleMonthChange(e: Event, index: number) {
    //   e.stopPropagation();
    //   e.stopImmediatePropagation();
    //   const newMonth = parseInt((e.target as HTMLSelectElement).value);
    //   const current = this.displayedDaysArr[index].month.clone().month(newMonth);
    //   if (index === 0) {
    //     this.displayedDaysArr = [this.getMonthDays(current), this.getMonthDays(current.clone().add(1, 'month'))];
    //   } else {
    //     this.displayedDaysArr = [this.getMonthDays(current.clone().subtract(1, 'month')), this.getMonthDays(current)];
    //   }
    // }
    // private handleYearChange(e: Event, index: number) {
    //   e.stopPropagation();
    //   e.stopImmediatePropagation();
    //   const newYear = parseInt((e.target as HTMLSelectElement).value);
    //   const current = this.displayedDaysArr[index].month.clone().year(newYear);
    //   if (index === 0) {
    //     this.displayedDaysArr = [this.getMonthDays(current), this.getMonthDays(current.clone().add(1, 'month'))];
    //   } else {
    //     this.displayedDaysArr = [this.getMonthDays(current.clone().subtract(1, 'month')), this.getMonthDays(current)];
    //   }
    // }
    // private getYearRange(): number[] {
    //   const start = this.minDate.year();
    //   const end = this.maxDate.year();
    //   const years: number[] = [];
    //   for (let y = start; y <= end; y++) {
    //     years.push(y);
    //   }
    //   return years;
    // }
    selectDay(day) {
        let isDateDisabled = false;
        if (this.dateModifiers) {
            isDateDisabled = !!this.dateModifiers[day.format('YYYY-MM-DD')];
        }
        if (isDateDisabled && !this.selectedDates.start) {
            return;
        }
        if ((this.selectedDates.start && day.isSame(this.selectedDates.start, 'day')) || (this.selectedDates.end && day.isSame(this.selectedDates.end, 'day'))) {
            this.selectedDates = { start: day.clone(), end: null };
        }
        else {
            if (this.selectedDates.start === null) {
                this.selectedDates = { start: day.clone(), end: null };
            }
            else {
                if (this.selectedDates.end === null) {
                    if (day.isBefore(this.selectedDates.start)) {
                        if (isDateDisabled) {
                            return;
                        }
                        this.selectedDates = { start: day.clone(), end: null };
                    }
                    else {
                        this.selectedDates = { start: this.selectedDates.start.clone(), end: day.clone() };
                    }
                }
                else {
                    if (!isDateDisabled) {
                        this.selectedDates = { start: day.clone(), end: null };
                    }
                }
            }
        }
        const startDate = this.selectedDates.start ? this.selectedDates.start.toDate() : null;
        const endDate = this.selectedDates.end ? this.selectedDates.end.toDate() : null;
        this.dateChange.emit({ start: startDate, end: endDate });
    }
    resetHours() {
        this.minDate.set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
        this.maxDate.set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
        if (this.fromDate) {
            this.fromDate.set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
        }
        if (this.toDate) {
            this.toDate.set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
        }
    }
    handleMouseEnter(day) {
        this.hoveredDate = day.clone();
    }
    handleMouseLeave() {
        this.hoveredDate = null;
    }
    isDaySelected(day) {
        const date = day.clone();
        const start = this.selectedDates.start ? this.selectedDates.start.clone() : moment();
        const end = this.selectedDates.end ? this.selectedDates.end.clone() : this.hoveredDate;
        if (this.selectedDates.start && !this.selectedDates.end && this.hoveredDate && this.hoveredDate.isAfter(start, 'day')) {
            if (date.isAfter(start, 'day') && date.isBefore(end, 'day')) {
                return true;
            }
        }
        else if (date.isAfter(start) && this.selectedDates.end && date.isBefore(end, 'day')) {
            return true;
        }
        return false;
    }
    checkDatePresence(day) {
        if (!this.dateModifiers) {
            return;
        }
        return this.dateModifiers[day.format('YYYY-MM-DD')];
    }
    render() {
        const maxSpanDays = this.selectedDates.start ? this.selectedDates.start.clone().add(this.maxSpanDays, 'days') : null;
        return (h("div", { key: '563c9a20d817431e199d670d74aa5c4655881bc1', part: "base", class: "date-picker" }, this.displayedDaysArr.map((month, index) => (h("table", { part: "calendar", class: "calendar", role: "grid" }, h("thead", null, h("tr", { part: "calendar-header", class: "calendar-header" }, h("th", { colSpan: 7 }, h("div", { part: "month-navigation", class: "month-navigation" }, index === 0 && this.displayedDaysArr[0].month.clone().startOf('month').isAfter(this.minDate) && (h("button", { part: "nav-prev", name: "previous month", class: "navigation-buttons previous-month", type: "button", onClick: this.goToPreviousMonth.bind(this) }, h("p", { class: "sr-only" }, "previous month"), h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "16", width: "25.6", viewBox: "0 0 320 512" }, h("path", { fill: "currentColor", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" })))), h("span", { part: "month-label", class: "month-year-label" }, month.month.locale(this.locale ?? 'en').format('MMMM YYYY')), index === 0 && (h("button", { part: "nav-next", name: "next month", class: "navigation-buttons button-next", type: "button", onClick: this.goToNextMonth.bind(this) }, h("p", { class: "sr-only" }, "next month"), h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "16", width: "25.6", viewBox: "0 0 320 512" }, h("path", { d: "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" })))), index === 1 && this.displayedDaysArr[1].month.clone().endOf('month').isBefore(this.maxDate) && (h("button", { part: "nav-next", name: "next month", class: "navigation-buttons button-next-main", type: "button", onClick: this.goToNextMonth.bind(this) }, h("p", { class: "sr-only" }, "next month"), h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "16", width: "25.6", viewBox: "0 0 320 512" }, h("path", { fill: "currentColor", d: "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" }))))))), h("tr", { part: "weekday-row", class: "weekday-header", role: "row" }, this.weekdays.map(weekday => (h("th", { part: "weekday", class: "weekday-name", key: weekday }, weekday.replace('.', '')))))), h("tbody", { part: "days-grid", class: "days-grid" }, month.days
            .reduce((acc, day, i) => {
            const weekIndex = Math.floor(i / 7);
            if (!acc[weekIndex]) {
                acc[weekIndex] = [];
            }
            acc[weekIndex].push(day);
            return acc;
        }, [])
            .map(week => (h("tr", { part: "week-row", class: "week-row", role: "row" }, week.map((day) => {
            const checkedDate = this.checkDatePresence(day);
            const isDaySelected = this.isDaySelected(day);
            const isDaySameEnd = day.isSame(this.selectedDates.end, 'day');
            const isDaySameStart = day.isSame(this.selectedDates.start, 'day');
            const isDayAfterMaxDate = day.isAfter(this.maxDate, 'day');
            const isDayBeforeMinDate = day.isBefore(this.minDate, 'day');
            return (h("td", { part: "day-cell", class: "day-cell", key: day.format('YYYY-MM-DD'), role: "gridcell" }, day.isSame(month.month, 'month') && (h("button", { part: "day-button", disabled: isDayBeforeMinDate || isDayAfterMaxDate || (this.selectedDates.start && maxSpanDays && day.isAfter(maxSpanDays) && !this.selectedDates.end), onMouseEnter: () => this.handleMouseEnter(day), onMouseLeave: () => this.handleMouseLeave(), onClick: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.selectDay(day);
                }, style: checkedDate?.disabled && this.selectedDates.start && { cursor: 'pointer' }, title: checkedDate?.disabled ? 'No availability' : '', "aria-unavailable": checkedDate?.disabled ? 'true' : 'false', "aria-label": `${day.format('dddd, MMMM Do YYYY')} ${isDayBeforeMinDate || isDayAfterMaxDate ? 'Not available' : ''}`, "aria-disabled": isDayBeforeMinDate || isDayAfterMaxDate || checkedDate?.disabled ? 'true' : 'false', "aria-selected": (this.selectedDates.start && isDaySameStart) || isDaySelected || (this.selectedDates.end && isDaySameEnd), class: {
                    'day-button': true,
                    'day-range-start': this.selectedDates.start && isDaySameStart,
                    'day-range-end': this.selectedDates.end && isDaySameEnd,
                    'highlight': isDaySelected && !isDaySameStart,
                } }, h("p", { class: `day ${day.isSame(moment(), 'day') ? 'current-date' : ''}` }, day.locale(this.locale).format('D')), this.showPrice && h("p", { class: "price" }, checkedDate?.withPrice.price ? '_' : checkedDate.withPrice.price)))));
        }))))))))));
    }
    static get is() { return "ir-custom-date-range"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-custom-date-range.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-custom-date-range.css"]
        };
    }
    static get properties() {
        return {
            "fromDate": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Moment | null",
                    "resolved": "Moment",
                    "references": {
                        "Moment": {
                            "location": "import",
                            "path": "moment/min/moment-with-locales",
                            "id": "node_modules::Moment",
                            "referenceLocation": "Moment"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The currently selected check-in date."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "null"
            },
            "toDate": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Moment | null",
                    "resolved": "Moment",
                    "references": {
                        "Moment": {
                            "location": "import",
                            "path": "moment/min/moment-with-locales",
                            "id": "node_modules::Moment",
                            "referenceLocation": "Moment"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The currently selected check-out date."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "null"
            },
            "minDate": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Moment",
                    "resolved": "Moment",
                    "references": {
                        "Moment": {
                            "location": "import",
                            "path": "moment/min/moment-with-locales",
                            "id": "node_modules::Moment",
                            "referenceLocation": "Moment"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The earliest selectable date. Defaults to 24 years in the past."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "moment().add(-24, 'years')"
            },
            "maxDate": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Moment",
                    "resolved": "Moment",
                    "references": {
                        "Moment": {
                            "location": "import",
                            "path": "moment/min/moment-with-locales",
                            "id": "node_modules::Moment",
                            "referenceLocation": "Moment"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The latest selectable date. Defaults to 24 years in the future."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "moment().add(24, 'years')"
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
                            "path": "./ir-custom-date-range.types",
                            "id": "src/components/ui/ir-custom-date-range/ir-custom-date-range.types.ts::IDateModifiers",
                            "referenceLocation": "IDateModifiers"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "An optional map of `YYYY-MM-DD` \u2192 `IDateModifierOptions` used to\nmark specific dates as unavailable or attach pricing data."
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
                    "text": "Maximum number of nights that can be selected in one span."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max-span-days",
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
                    "text": "When `true`, displays a price line inside each day button (requires `dateModifiers`)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-price",
                "defaultValue": "false"
            },
            "locale": {
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
                    "tags": [{
                            "name": "reflect",
                            "text": undefined
                        }],
                    "text": "BCP-47 locale tag used to localise day names and month formatting."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "locale",
                "defaultValue": "'en'"
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
                    "text": "Emits the selected start and end dates as native `Date` objects.\n`end` is `null` when the user has only picked the first date."
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
