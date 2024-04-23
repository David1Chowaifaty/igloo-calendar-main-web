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
        return (h("div", { key: '3d4f1cc317cdb2c76eab969e665f7af366eeb06d', class: 'date-picker' }, h("table", { key: '3cffa75a82ef88812af90c8c9a62f8718ebc306b', class: "calendar ", role: "grid" }, h("thead", { key: '77c096a0069d0e9087d08786aaa4b6f2b536bd63' }, h("tr", { key: '601a99fadbbcd8f76d741d058071d0fcfed5eb4d', class: "calendar-header" }, h("th", { key: 'a8dc3e05d0e3ccc2979f72cfcda9c0777a5e7ea0', colSpan: 7 }, h("div", { key: 'ee7d4b95e0b9698cfd30305d3a5e8bbddd673e41', class: "month-navigation" }, h("button", { key: '6756d34d40061e159522241d4133a833bc22e9f4', name: "previous month", class: "navigation-buttons", type: "button", onClick: this.goToPreviousMonth.bind(this) }, h("p", { key: '4febbf5967c3f906a7ee5c9c97633064c4c664d7', class: "sr-only" }, "previous month"), h("svg", { key: 'd21867bb01423ac0b4bd1914a429d36c67d0d5bb', xmlns: "http://www.w3.org/2000/svg", height: "16", width: "25.6", viewBox: "0 0 320 512" }, h("path", { key: '526642d51c992de9ac6224dd71927f004dd63f69', fill: "currentColor", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" }))), h("span", { key: '1e523715404e16841147ceee2935b5fd39a18d0f' }, format(month, 'MMMM yyyy', { locale: this.locale })), h("button", { key: 'a709ca243930b278ddb908d3e6d09414b8a6e79f', name: "next month", class: "navigation-buttons", type: "button", onClick: this.goToNextMonth.bind(this) }, h("p", { key: '29ff384805e4531e4da914b811a8d351f44bd1ae', class: "sr-only " }, "next month"), h("svg", { key: 'cbf6a8f009a4073b74d956bdb00e1a4b9fcda761', xmlns: "http://www.w3.org/2000/svg", height: "16", width: "25.6", viewBox: "0 0 320 512" }, h("path", { key: '7786fb57a5de51968949f92eabe21360eb740a35', fill: "currentColor", d: "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" })))))), h("tr", { key: 'fd7f8c16486e37e83d289c7c9142bf7e59d56e7d', class: "weekday-header", role: "row" }, this.weekdays.map(weekday => (h("th", { class: "weekday-name", key: weekday }, weekday))))), h("tbody", { key: '08c38fa6128e0e3197ccce4c66cb3c8e6e8a96ca', class: "days-grid" }, days
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
                            "path": "@/components/ir-date-range/ir-date-range.types",
                            "id": "src/components/ir-date-range/ir-date-range.types.ts::IDateModifiers"
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
