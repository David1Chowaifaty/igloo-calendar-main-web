import { h } from "@stencil/core";
import { addMonths, eachDayOfInterval, endOfMonth, endOfWeek, format, isSameMonth, startOfMonth, startOfWeek, addDays, isSameDay, isBefore, isAfter, addYears, isToday, } from "date-fns";
import { enUS } from "date-fns/locale";
import { getAbbreviatedWeekdays } from "../../../utils/utils";
import localizedWords from "../../../stores/localization.store";
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
        this.date = new Date();
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
        console.log('currentMonth', currentMonth);
        this.displayedDays = Object.assign({}, this.getMonthDays(currentMonth));
        this.selectedDate = this.date;
    }
    handleDateChange(newDate, oldDate) {
        if (!isSameDay(newDate, oldDate)) {
            this.selectedDate = newDate;
        }
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
        return (h("div", { key: 'f7f1f83d170cee56a2576871a34a1f347bfe33d9', class: 'date-picker' }, h("table", { key: 'a8ac9bd4db75538cbaa37f5df58f4f2cb62ef6c6', class: "calendar ", role: "grid" }, h("thead", { key: 'f0e9103166002fc24131d86d4af187c0e343de35' }, h("tr", { key: 'e77a87e7e129fd304b0c2c8f59204c7afa75dfb9', class: "calendar-header" }, h("th", { key: '485e7aaa3da483b3c3a34c1201d72705ead7cfde', colSpan: 7 }, h("div", { key: 'eba62dba665359f8d9b781909354febd9fcb2317', class: "month-navigation" }, h("button", { key: 'a2edef95dc40e0678e99ebd9155e849edf3ef766', name: "previous month", class: "navigation-buttons", type: "button", onClick: this.goToPreviousMonth.bind(this) }, h("p", { key: '81da4840ee3804b59ac76db92e5927bba1ffaf86', class: "sr-only" }, "previous month"), h("svg", { key: '9d1d3981034aef01466f3d9186fcf9ca89b02d4a', xmlns: "http://www.w3.org/2000/svg", height: "16", width: "25.6", viewBox: "0 0 320 512" }, h("path", { key: 'c8570a599e40434c70e009f977affe4f8657921c', fill: "currentColor", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" }))), h("span", { key: '623997e5e337d55987a6a761e53e0433b5716ab6' }, format(month, 'MMMM yyyy', { locale: this.locale })), h("button", { key: '3d5102663e33d8e7a02419aca4e96f98c7d7845b', name: "next month", class: "navigation-buttons", type: "button", onClick: this.goToNextMonth.bind(this) }, h("p", { key: 'afe733b5e020e8d88d8e149d15b32d1d08077d88', class: "sr-only " }, "next month"), h("svg", { key: 'bac5d1ef85db569df25e36ef297b5b34a14d952f', xmlns: "http://www.w3.org/2000/svg", height: "16", width: "25.6", viewBox: "0 0 320 512" }, h("path", { key: '7874947523136da0497071ac2bcf8fd3164b26c2', fill: "currentColor", d: "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" })))))), h("tr", { key: 'e2688aa2e531a49111d42d6f38b883df5401e932', class: "weekday-header", role: "row" }, this.weekdays.map(weekday => (h("th", { class: "weekday-name", key: weekday }, weekday))))), h("tbody", { key: '47d91285041f0e62c66356385310f3fe4c1604ab', class: "days-grid" }, days
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
                }, "aria-label": `${format(day, 'EEEE, MMMM do yyyy', { locale: this.locale })} ${isBefore(day, this.minDate) || isAfter(day, this.maxDate) ? localizedWords.entries.Lcz_NotAvailable : ''}`, "aria-disabled": isBefore(day, this.minDate) || isAfter(day, this.maxDate) || (checkedDate === null || checkedDate === void 0 ? void 0 : checkedDate.disabled) ? 'true' : 'false', "aria-selected": this.isDaySelected(day), class: `day-button` }, h("p", { class: `day ${isToday(day) ? 'current-date' : ''}` }, format(day, 'd', { locale: this.locale })), this.showPrice && h("p", { class: "price" }, (checkedDate === null || checkedDate === void 0 ? void 0 : checkedDate.withPrice.price) ? '_' : checkedDate.withPrice.price)))));
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
            },
            "date": {
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
                "defaultValue": "new Date()"
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
                "propName": "date",
                "methodName": "handleDateChange"
            }, {
                "propName": "locale",
                "methodName": "handleLocale"
            }];
    }
}
//# sourceMappingURL=ir-calendar.js.map
