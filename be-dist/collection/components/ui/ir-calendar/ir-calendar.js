import { h } from "@stencil/core";
import moment from "moment/min/moment-with-locales";
import { getAbbreviatedWeekdays } from "../../../utils/utils";
import localizedWords from "../../../stores/localization.store";
export class IrCalendar {
    constructor() {
        this.fromDate = null;
        this.toDate = null;
        this.minDate = moment().add(-24, 'years');
        this.maxDate = moment().add(24, 'years');
        this.maxSpanDays = 90;
        this.showPrice = false;
        this.locale = 'en';
        this.date = moment();
        this.selectedDate = null;
        this.hoveredDate = null;
        this.weekdays = [];
        this.handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                this.decrementDate();
            }
            else if (e.key === 'ArrowRight') {
                this.incrementDate();
            }
            else if (e.key === 'ArrowUp') {
                this.selectedDate = this.selectedDate.clone().add(-7, 'days');
            }
            else if (e.key === 'ArrowDown') {
                this.selectedDate = this.selectedDate.clone().add(7, 'days');
            }
            else if (e.key === ' ' || e.key === 'Enter') {
                this.selectDay(this.selectedDate);
            }
        };
    }
    componentWillLoad() {
        var _a;
        this.weekdays = getAbbreviatedWeekdays(this.locale);
        this.resetHours();
        const currentMonth = (_a = this.fromDate) !== null && _a !== void 0 ? _a : moment();
        this.displayedDays = Object.assign({}, this.getMonthDays(currentMonth));
        this.selectedDate = this.date;
        moment.locale(this.locale);
    }
    handleDateChange(newDate, oldDate) {
        if (!newDate.isSame(oldDate, 'day')) {
            this.selectedDate = newDate;
        }
    }
    handleLocale(newValue, oldLocale) {
        if (newValue !== oldLocale) {
            moment.locale(this.locale);
            this.weekdays = getAbbreviatedWeekdays(newValue);
        }
    }
    getMonthDays(month) {
        const startDate = month.clone().startOf('month').startOf('week').add(1, 'day');
        const endDate = month.clone().endOf('month').endOf('week').add(1, 'day');
        const days = [];
        let day = startDate.clone();
        while (day.isBefore(endDate)) {
            days.push(day.clone());
            day = day.clone().add(1, 'day');
        }
        return {
            month,
            days,
        };
    }
    decrementDate() {
        if (this.selectedDate) {
            this.selectedDate = this.selectedDate.clone().add(-1, 'days');
        }
    }
    incrementDate() {
        if (this.selectedDate) {
            this.selectedDate = this.selectedDate.clone().add(1, 'days');
        }
    }
    goToNextMonth(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        const currentMonth = this.displayedDays.month;
        const newMonth = currentMonth.clone().add(1, 'month');
        if (newMonth.endOf('month').isBefore(this.minDate) || newMonth.startOf('month').isAfter(this.maxDate)) {
            return;
        }
        this.displayedDays = Object.assign({}, this.getMonthDays(newMonth));
    }
    goToPreviousMonth(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        const currentMonth = this.displayedDays.month;
        const newMonth = currentMonth.clone().add(-1, 'month');
        if (newMonth.endOf('month').isBefore(this.minDate) || newMonth.startOf('month').isAfter(this.maxDate)) {
            return;
        }
        this.displayedDays = Object.assign({}, this.getMonthDays(newMonth));
    }
    selectDay(day) {
        this.selectedDate = day;
        this.dateChange.emit(this.selectedDate);
    }
    resetHours() {
        this.minDate = this.minDate.clone().startOf('day');
        this.maxDate = this.maxDate.clone().startOf('day');
        if (this.fromDate) {
            this.fromDate = this.fromDate.clone().startOf('day');
        }
        if (this.toDate) {
            this.toDate = this.toDate.clone().startOf('day');
        }
    }
    handleMouseEnter(day) {
        this.hoveredDate = day;
    }
    handleMouseLeave() {
        this.hoveredDate = null;
    }
    isDaySelected(day) {
        return day.isSame(this.selectedDate, 'day');
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
        const { month, days } = this.displayedDays;
        return (h("div", { key: 'e8a9e196aad7e8395e0509a8562973d763d06e1f', class: 'date-picker' }, h("table", { key: '3872454867f498d42a7cc0a7c525deca1276fecc', class: "calendar ", role: "grid" }, h("thead", { key: 'eea75968cf867ed2c0ddcd7710e00a10d1049f8a' }, h("tr", { key: '9a22aa955989dd39f1fe09b3d804b3d1a797daed', class: "calendar-header" }, h("th", { key: '2956e1df0a9afeba83ddd21d070faac938ea19a8', colSpan: 7 }, h("div", { key: 'e10e3d160853501d57846e3cc6efb8ff294e1913', class: "month-navigation" }, h("button", { key: '814321355e618c1137893f8999b0244d9d85c59d', name: "previous month", class: "navigation-buttons", type: "button", onClick: this.goToPreviousMonth.bind(this) }, h("p", { key: '4dc3406ce4027ea8a0517eee9998a577a7158e46', class: "sr-only" }, "previous month"), h("svg", { key: '33946179ffbdbf3fd30a0ac1a221e3d9beb26475', xmlns: "http://www.w3.org/2000/svg", height: "16", width: "25.6", viewBox: "0 0 320 512" }, h("path", { key: '33c778403bc5a0e71f98f8c5a4d87433c1ac2113', fill: "currentColor", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" }))), h("span", { key: 'f1e977a916730eff7c289c8d6e213ae0a576cd0c' }, month.locale(this.locale).format('MMMM YYYY')), h("button", { key: '07f3388ed0129954b9fd97ec092b9d06be60ef95', name: "next month", class: "navigation-buttons", type: "button", onClick: this.goToNextMonth.bind(this) }, h("p", { key: '8088c32c72f50102a11f89c0997ca7ec57681c3c', class: "sr-only " }, "next month"), h("svg", { key: '9dd6e9d7aead9af2404e40ac5db6259a3143fe59', xmlns: "http://www.w3.org/2000/svg", height: "16", width: "25.6", viewBox: "0 0 320 512" }, h("path", { key: '9acfebc54bda5fc769eb49d87048048ab66df0f0', fill: "currentColor", d: "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" })))))), h("tr", { key: 'a0058a2f69f239eff9b0048fdf9d7dee430901a9', class: "weekday-header", role: "row" }, this.weekdays.map(weekday => (h("th", { class: "weekday-name", key: weekday }, weekday))))), h("tbody", { key: '2221d89d808dd3287d7bbfae5aa32c564f2b8ff6', class: "days-grid" }, days
            .reduce((acc, day, index) => {
            const weekIndex = Math.floor(index / 7);
            if (!acc[weekIndex]) {
                acc[weekIndex] = [];
            }
            acc[weekIndex].push(day);
            return acc;
        }, [])
            .map(week => (h("tr", { class: "week-row", role: "row" }, week.map((day) => {
            const checkedDate = this.checkDatePresence(day);
            return (h("td", { class: "day-cell", key: day.format('YYYY-MM-DD'), role: "gridcell" }, day.isSame(month, 'month') && (h("button", { disabled: day.isBefore(this.minDate) || day.isAfter(this.maxDate) || (checkedDate === null || checkedDate === void 0 ? void 0 : checkedDate.disabled), onMouseEnter: () => this.handleMouseEnter(day), onMouseLeave: () => this.handleMouseLeave(), onClick: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.selectDay(day);
                }, "aria-label": `${day.locale(this.locale).format('dddd, MMMM Do YYYY')} ${day.isBefore(this.minDate) || day.isAfter(this.maxDate) ? localizedWords.entries.Lcz_NotAvailable : ''}`, "aria-disabled": day.isBefore(this.minDate) || day.isAfter(this.maxDate) || (checkedDate === null || checkedDate === void 0 ? void 0 : checkedDate.disabled) ? 'true' : 'false', "aria-selected": this.isDaySelected(day), class: `day-button` }, h("p", { class: `day ${day.isSame(moment(), 'day') ? 'current-date' : ''}` }, day.format('D')), this.showPrice && h("p", { class: "price" }, (checkedDate === null || checkedDate === void 0 ? void 0 : checkedDate.withPrice.price) ? '_' : checkedDate.withPrice.price)))));
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
                "mutable": true,
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
                "mutable": true,
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
                "mutable": true,
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
                "mutable": true,
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
            },
            "date": {
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
                "defaultValue": "moment()"
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
                    "original": "Moment",
                    "resolved": "Moment",
                    "references": {
                        "Moment": {
                            "location": "import",
                            "path": "moment/min/moment-with-locales",
                            "id": "node_modules::Moment"
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
