import { h } from "@stencil/core";
import { addMonths, eachDayOfInterval, endOfMonth, endOfWeek, format, isSameMonth, startOfMonth, startOfWeek, addDays, isSameDay, isBefore, isAfter, addYears, isToday, } from "date-fns";
import { enUS } from "date-fns/locale";
import { getAbbreviatedWeekdays } from "../../../utils/utils";
export class IrCalendar {
    constructor() {
        this.handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                this.decrementDate();
            }
            else if (e.key === 'ArrowRight') {
                this.incrementDate();
            }
            else if (e.key === 'ArrowUp') {
                this.selectedDate = addDays(new Date(this.selectedDate), -7);
            }
            else if (e.key === 'ArrowDown') {
                this.selectedDate = addDays(new Date(this.selectedDate), 7);
            }
            else if (e.key === ' ' || e.key === 'Enter') {
                this.selectDay(this.selectedDate);
            }
        };
        this.fromDate = null;
        this.toDate = null;
        this.minDate = addYears(new Date(), -24);
        this.maxDate = addYears(new Date(), 24);
        this.dateModifiers = undefined;
        this.maxSpanDays = 90;
        this.showPrice = false;
        this.locale = enUS;
        this.selectedDate = null;
        this.displayedDays = undefined;
        this.hoveredDate = null;
        this.weekdays = [];
    }
    componentWillLoad() {
        var _a;
        this.weekdays = getAbbreviatedWeekdays(this.locale);
        this.resetHours();
        const currentMonth = (_a = this.fromDate) !== null && _a !== void 0 ? _a : new Date();
        this.displayedDays = Object.assign({}, this.getMonthDays(currentMonth));
    }
    handleLocale(newValue, oldLocale) {
        if (newValue !== oldLocale) {
            this.weekdays = getAbbreviatedWeekdays(newValue);
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
        if (this.selectedDate) {
            this.selectedDate = addDays(new Date(this.selectedDate), -1);
        }
    }
    incrementDate() {
        if (this.selectedDate) {
            this.selectedDate = addDays(new Date(this.selectedDate), 1);
        }
    }
    goToNextMonth(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        const currentSecondMonth = this.displayedDays.month;
        const newSecondMonth = addMonths(currentSecondMonth, 1);
        if (isBefore(endOfMonth(newSecondMonth), this.minDate) || isAfter(startOfMonth(newSecondMonth), this.maxDate)) {
            return;
        }
        this.displayedDays = Object.assign({}, this.getMonthDays(newSecondMonth));
    }
    goToPreviousMonth(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        const currentFirstMonth = this.displayedDays.month;
        const newFirstMonth = addMonths(currentFirstMonth, -1);
        if (isBefore(endOfMonth(newFirstMonth), this.minDate) || isAfter(startOfMonth(newFirstMonth), this.maxDate)) {
            return;
        }
        this.displayedDays = Object.assign({}, this.getMonthDays(newFirstMonth));
    }
    selectDay(day) {
        this.selectedDate = day;
        this.dateChange.emit(this.selectedDate);
    }
    resetHours() {
        this.minDate.setHours(0, 0, 0, 0);
        this.maxDate.setHours(0, 0, 0, 0);
        if (this.fromDate) {
            this.toDate.setHours(0, 0, 0, 0);
        }
        if (this.toDate) {
            this.fromDate.setHours(0, 0, 0, 0);
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
        const start = new Date((_a = this.selectedDate) !== null && _a !== void 0 ? _a : new Date());
        start.setHours(0, 0, 0, 0);
        return isSameDay(date, start);
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
        const { month, days } = this.displayedDays;
        return (h("div", { key: 'aeef8137b2005760796dd6e65c998cb2bb5845c8', class: 'date-picker' }, h("table", { key: 'b7bf7e7cf5ca8fe66afe373efc5299ca21c43fe7', class: "calendar ", role: "grid" }, h("thead", { key: 'd0f6460f7ec948486a7f421e8f9b851189a8acba' }, h("tr", { key: '72e72c7ee5c17a661a52f54ccf186c0bbd6c3762', class: "calendar-header" }, h("th", { key: 'ff6613867ac0ea77a84f653e8ed15a287e60a39c', colSpan: 7 }, h("div", { key: '9a9aa06bd6d79f063aa324221b0b4406a26b218e', class: "month-navigation" }, h("button", { key: 'c18de555f38448af8659a2182573793425ce60a8', name: "previous month", class: "navigation-buttons", type: "button", onClick: this.goToPreviousMonth.bind(this) }, h("p", { key: '2a212617aaddcb54b8af35d7951d5a0da7c5ff24', class: "sr-only" }, "previous month"), h("svg", { key: '337bdf6cd2f025db97b590424d5f667f9ed346ba', xmlns: "http://www.w3.org/2000/svg", height: "16", width: "25.6", viewBox: "0 0 320 512" }, h("path", { key: '8a0a35354002f1fc84751338d9e1ba55706e9cd5', fill: "currentColor", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" }))), h("span", { key: '0262979fe3949230e9d2b1b93fecdfa5ecf44d45' }, format(month, 'MMMM yyyy', { locale: this.locale })), h("button", { key: '60c38eb3d54277e934cfbc106df59b9e5b5a47a3', name: "next month", class: "navigation-buttons", type: "button", onClick: this.goToNextMonth.bind(this) }, h("p", { key: '1313723ee5ae8d0d3e70928c07dd684c55fc0382', class: "sr-only " }, "next month"), h("svg", { key: '7c55a897dc8b93efb9de7bc9c69e32b5d9faa9a8', xmlns: "http://www.w3.org/2000/svg", height: "16", width: "25.6", viewBox: "0 0 320 512" }, h("path", { key: 'df2163978d712148d92c65f76c2b679f489ae045', fill: "currentColor", d: "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" })))))), h("tr", { key: 'ad995fb4925bb27c2ff5fdb823e3f687f509a15e', class: "weekday-header", role: "row" }, this.weekdays.map(weekday => (h("th", { class: "weekday-name", key: weekday }, weekday))))), h("tbody", { key: '444a9d545f47426779f060ac1a00ee21f0efbcd7', class: "days-grid" }, days
            .reduce((acc, day, index) => {
            const weekIndex = Math.floor(index / 7);
            if (!acc[weekIndex]) {
                acc[weekIndex] = [];
            }
            acc[weekIndex].push(day);
            return acc;
        }, [])
            .map(week => (h("tr", { class: "week-row", role: "row" }, week.map((day) => {
            day.setHours(0, 0, 0, 0);
            const checkedDate = this.checkDatePresence(day);
            return (h("td", { class: "day-cell", key: format(day, 'yyyy-MM-dd'), role: "gridcell" }, isSameMonth(day, month) && (h("button", { disabled: isBefore(day, this.minDate) || isAfter(day, this.maxDate) || (checkedDate === null || checkedDate === void 0 ? void 0 : checkedDate.disabled), onMouseEnter: () => this.handleMouseEnter(day), onMouseLeave: () => this.handleMouseLeave(),
                // onKeyDown={this.handleKeyDown.bind(this)}
                onClick: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.selectDay(day);
                }, "aria-label": `${format(day, 'EEEE, MMMM do yyyy', { locale: this.locale })} ${isBefore(day, this.minDate) || isAfter(day, this.maxDate) ? 'Not available' : ''}`, "aria-disabled": isBefore(day, this.minDate) || isAfter(day, this.maxDate) || (checkedDate === null || checkedDate === void 0 ? void 0 : checkedDate.disabled) ? 'true' : 'false', "aria-selected": this.isDaySelected(day), class: `day-button` }, h("p", { class: `day ${isToday(day) ? 'current-date' : ''}` }, format(day, 'd', { locale: this.locale })), this.showPrice && h("p", { class: "price" }, (checkedDate === null || checkedDate === void 0 ? void 0 : checkedDate.withPrice.price) ? '_' : checkedDate.withPrice.price)))));
        }))))))));
    }
    static get is() { return "ir-calendar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-calendar.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-calendar.css"]
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
                            "path": "../ir-date-range/ir-date-range.types",
                            "id": "src/components/ui/ir-date-range/ir-date-range.types.ts::IDateModifiers"
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
                            "id": ""
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "defaultValue": "enUS"
            }
        };
    }
    static get states() {
        return {
            "selectedDate": {},
            "displayedDays": {},
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
                    "original": "Date",
                    "resolved": "Date",
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
            }];
    }
}
//# sourceMappingURL=ir-calendar.js.map
