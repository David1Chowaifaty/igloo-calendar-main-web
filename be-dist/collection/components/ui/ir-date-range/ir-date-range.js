import { h } from "@stencil/core";
import moment from "moment/min/moment-with-locales";
import { getAbbreviatedWeekdays } from "../../../utils/utils";
import localizedWords from "../../../stores/localization.store";
export class IrDateRange {
    constructor() {
        this.fromDate = null;
        this.toDate = null;
        this.minDate = moment().add(-24, 'years');
        this.maxDate = moment().add(24, 'years');
        this.maxSpanDays = 90;
        this.showPrice = false;
        this.locale = 'en';
        this.selectedDates = { start: moment(), end: moment() };
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
        this.weekdays = getAbbreviatedWeekdays(this.locale);
        this.resetHours();
        this.selectedDates = { start: this.fromDate, end: this.toDate };
        const currentMonth = this.fromDate ? this.fromDate.clone() : moment();
        const nextMonth = currentMonth.clone().add(1, 'month');
        this.displayedDaysArr = [this.getMonthDays(currentMonth), this.getMonthDays(nextMonth)];
    }
    handleLocale(newValue, oldLocale) {
        if (newValue !== oldLocale) {
            moment.locale(newValue);
            this.weekdays = getAbbreviatedWeekdays(newValue);
        }
    }
    handleFromDateChange(newValue, oldValue) {
        if (!(newValue !== null && newValue !== void 0 ? newValue : moment()).isSame(oldValue !== null && oldValue !== void 0 ? oldValue : moment(), 'days')) {
            this.selectedDates = Object.assign(Object.assign({}, this.selectedDates), { start: newValue });
        }
    }
    handleToDateChange(newValue, oldValue) {
        if (!(newValue !== null && newValue !== void 0 ? newValue : moment()).isSame(oldValue !== null && oldValue !== void 0 ? oldValue : moment(), 'days')) {
            this.selectedDates = Object.assign(Object.assign({}, this.selectedDates), { end: newValue });
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
    decrementDate() {
        if (this.selectedDates.start && this.selectedDates.end) {
            this.selectedDates = { start: this.selectedDates.start.clone().add(-1, 'days'), end: this.selectedDates.end.clone() };
        }
    }
    incrementDate() {
        if (this.selectedDates.start && this.selectedDates.end) {
            this.selectedDates = { start: this.selectedDates.start.clone(), end: this.selectedDates.end.clone().add(1, 'days') };
        }
    }
    goToNextMonth(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        const currentSecondMonth = this.displayedDaysArr[1].month;
        const newSecondMonth = currentSecondMonth.clone().add(1, 'months');
        if (newSecondMonth.endOf('month').isBefore(this.minDate) || newSecondMonth.startOf('month').isAfter(this.maxDate)) {
            return;
        }
        this.displayedDaysArr = [this.displayedDaysArr[1], this.getMonthDays(newSecondMonth)];
    }
    goToPreviousMonth(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        const currentFirstMonth = this.displayedDaysArr[0].month;
        const newFirstMonth = currentFirstMonth.clone().add(-1, 'month');
        if (newFirstMonth.endOf('month').isBefore(this.minDate) || newFirstMonth.startOf('month').isAfter(this.maxDate)) {
            return;
        }
        this.displayedDaysArr = [this.getMonthDays(newFirstMonth), this.displayedDaysArr[0]];
    }
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
        // Convert Moment to Date for the event emission
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
    getMonthStyles(index) {
        if (index === 0) {
            if (!this.displayedDaysArr[0].month.clone().startOf('month').isAfter(this.minDate)) {
                return 'margin-horizontal';
            }
            return 'margin-right';
        }
        else {
            if (!this.displayedDaysArr[1].month.clone().endOf('month').isBefore(this.maxDate)) {
                return 'margin-right margin-left';
            }
            return 'margin-left';
        }
    }
    checkDatePresence(day) {
        if (!this.dateModifiers) {
            return;
        }
        const formatedDate = day.format('YYYY-MM-DD');
        const result = this.dateModifiers[formatedDate];
        if (result) {
            return result;
        }
        return;
    }
    render() {
        const maxSpanDays = this.selectedDates.start ? this.selectedDates.start.clone().add(this.maxSpanDays, 'days') : null;
        return (h("div", { key: '251d983aebefa1811b871ad6abc9193521ac9543', class: 'date-picker' }, this.displayedDaysArr.map((month, index) => {
            var _a;
            return (h("table", { class: "calendar ", role: "grid" }, h("thead", null, h("tr", { class: "calendar-header" }, h("th", { colSpan: 7 }, h("div", { class: "month-navigation" }, index === 0 && this.displayedDaysArr[0].month.clone().startOf('month').isAfter(this.minDate) && (h("button", { name: "previous month", class: "navigation-buttons previous-month", type: "button", onClick: this.goToPreviousMonth.bind(this) }, h("p", { class: "sr-only" }, "previous month"), h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "16", width: "25.6", viewBox: "0 0 320 512" }, h("path", { fill: "currentColor", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" })))), h("span", { class: 'capitalize' }, month.month.locale((_a = this.locale) !== null && _a !== void 0 ? _a : 'en').format('MMMM YYYY')), index === 0 && (h("button", { name: "next month", class: "navigation-buttons button-next", type: "button", onClick: this.goToNextMonth.bind(this) }, h("p", { slot: "icon", class: "sr-only" }, "next month"), h("svg", { slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "16", width: "25.6", viewBox: "0 0 320 512" }, h("path", { d: "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" })))), index === 1 && this.displayedDaysArr[1].month.clone().endOf('month').isBefore(this.maxDate) && (h("button", { name: "next month", class: "navigation-buttons button-next-main", type: "button", onClick: this.goToNextMonth.bind(this) }, h("p", { class: "sr-only " }, "next month"), h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "16", width: "25.6", viewBox: "0 0 320 512" }, h("path", { fill: "currentColor", d: "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" }))))))), h("tr", { class: "weekday-header", role: "row" }, this.weekdays.map(weekday => (h("th", { class: "weekday-name", key: weekday }, weekday.replace('.', '')))))), h("tbody", { class: "days-grid" }, month.days
                .reduce((acc, day, index) => {
                const weekIndex = Math.floor(index / 7);
                if (!acc[weekIndex]) {
                    acc[weekIndex] = [];
                }
                acc[weekIndex].push(day);
                return acc;
            }, [])
                .map(week => (h("tr", { class: "week-row", role: "row" }, week.map((day) => {
                var _a, _b;
                const checkedDate = this.checkDatePresence(day);
                const isDaySelected = this.isDaySelected(day);
                const isDaySameEnd = day.isSame(this.selectedDates.end, 'day');
                const isDaySameStart = day.isSame(this.selectedDates.start, 'day');
                const isDayAfterMaxDate = day.isAfter(this.maxDate, 'day');
                const isDayBeforeMinDate = day.isBefore(this.minDate, 'day');
                return (h("td", { class: "day-cell", key: day.format('YYYY-MM-DD'), role: "gridcell" }, day.isSame(month.month, 'month') && (h("button", { disabled: isDayBeforeMinDate || isDayAfterMaxDate || (this.selectedDates.start && maxSpanDays && day.isAfter(maxSpanDays) && !this.selectedDates.end), onMouseEnter: () => this.handleMouseEnter(day), onMouseLeave: () => this.handleMouseLeave(), onClick: e => {
                        e.stopImmediatePropagation();
                        e.stopPropagation();
                        this.selectDay(day);
                    }, style: (checkedDate === null || checkedDate === void 0 ? void 0 : checkedDate.disabled) && this.selectedDates.start && { cursor: 'pointer' }, title: (checkedDate === null || checkedDate === void 0 ? void 0 : checkedDate.disabled) ? ((_b = (_a = localizedWords === null || localizedWords === void 0 ? void 0 : localizedWords.entries) === null || _a === void 0 ? void 0 : _a.Lcz_NoAvailability) !== null && _b !== void 0 ? _b : 'No availability') : '', "aria-unavailable": (checkedDate === null || checkedDate === void 0 ? void 0 : checkedDate.disabled) ? 'true' : 'false', "aria-label": `${day.format('dddd, MMMM Do YYYY')} ${isDayBeforeMinDate || isDayAfterMaxDate ? localizedWords.entries.Lcz_NotAvailable : ''}`, "aria-disabled": isDayBeforeMinDate || isDayAfterMaxDate || (checkedDate === null || checkedDate === void 0 ? void 0 : checkedDate.disabled) ? 'true' : 'false', "aria-selected": (this.selectedDates.start && isDaySameStart) || isDaySelected || (this.selectedDates.end && isDaySameEnd), class: {
                        'day-button': true,
                        'day-range-start': this.selectedDates.start && isDaySameStart,
                        'day-range-end': this.selectedDates.end && isDaySameEnd,
                        'highlight': isDaySelected && !isDaySameStart,
                    } }, h("p", { class: `day ${day.isSame(moment(), 'day') ? 'current-date' : ''}` }, day.locale(this.locale).format('D')), this.showPrice && h("p", { class: "price" }, (checkedDate === null || checkedDate === void 0 ? void 0 : checkedDate.withPrice.price) ? '_' : checkedDate.withPrice.price)))));
            })))))));
        })));
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
                    "original": "Moment | null",
                    "resolved": "Moment",
                    "references": {
                        "Moment": {
                            "location": "import",
                            "path": "moment/min/moment-with-locales",
                            "id": "node_modules::Moment"
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
                    "original": "Moment | null",
                    "resolved": "Moment",
                    "references": {
                        "Moment": {
                            "location": "import",
                            "path": "moment/min/moment-with-locales",
                            "id": "node_modules::Moment"
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
                    "original": "Moment",
                    "resolved": "Moment",
                    "references": {
                        "Moment": {
                            "location": "import",
                            "path": "moment/min/moment-with-locales",
                            "id": "node_modules::Moment"
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
                            "id": "node_modules::Moment"
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
                "attribute": "locale",
                "reflect": true,
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
