import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as dateFns, g as getAbbreviatedWeekdays } from './utils.js';
import { l as locale } from './locale.js';

const irDateRangeCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;box-sizing:border-box;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.collapse{visibility:collapse}.absolute{position:absolute}.relative{position:relative}.flex{display:flex}.table{display:table}.hidden{display:none}.border-collapse{border-collapse:collapse}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.border{border-width:1px}.date-picker{background:var(--backgroud,#fff);box-sizing:border-box;color:var(--gray-800,#1d2939);display:flex;flex-direction:column;gap:10px;padding:0;position:relative;width:100%;z-index:999}.navigation-buttons:dir(rtl) svg{transform:rotate(180deg)}.month-navigation span{color:var(--gray-800,#1d2939);flex:1;font-size:16px;line-height:0;padding:0}.current-date{color:hsl(var(--brand-600,215,87%,51%))}.day-button:hover:after{background:var(--gray-200,#eaecf0);border-radius:var(--radius,8px);content:\"\";inset:0;position:absolute;z-index:-1}.navigation-buttons{align-items:center;background:var(--backgroud,#fff);border:0;border-radius:var(--radius,8px);box-sizing:border-box;color:var(--gray-800,#1d2939);cursor:pointer;display:flex;height:var(--cal-button-size,30px);justify-content:center;margin:0;padding:0;width:var(--cal-button-size,30px)}.navigation-buttons:hover{background:var(--gray-200,#eaecf0)}.day-button:focus-visible{outline-color:hsl(var(--brand-600,215,87%,51%))}.day-button:disabled{cursor:default;opacity:.3}.day-button:disabled .day{text-decoration:line-through}.day-button:disabled:hover:after{content:none}.day-button .day,.price{margin:0;padding:0}.day-button .price{color:var(--gray-600);font-size:10px}.month-navigation{align-items:center;box-sizing:border-box;display:flex}.margin-right{margin-right:0}.margin-left{margin-left:0}.margin-horizontal:dir(ltr){margin-left:var(--cal-button-size,30px)}.margin-horizontal:dir(rtl){margin-right:var(--cal-button-size,30px)}.weekday-name{color:var(--gray-800,#1d2939);font-size:14px;font-weight:400;text-align:center}td,th{border:none;padding:0}th{box-sizing:border-box;font-size:.875rem;height:var(--cal-button-size,40px);line-height:1.25rem;margin:0!important;width:var(--cal-button-size,40px)}td{text-align:center}.day-button,td{box-sizing:border-box;margin:0}.day-button{background:none;border:0;border-radius:8px;color:var(--gray-800);cursor:pointer;font-size:.875rem;height:var(--cal-button-size,40px);padding:0;position:relative;width:var(--cal-button-size,40px)}.month-container{align-items:center;box-sizing:border-box;display:flex;font-size:.875rem;line-height:1.25rem}.month-container span{flex:1;text-align:center}.day-range-end,.day-range-end .current-date,.day-range-start,.day-range-start .current-date{color:#fff}.day-range-end .price,.day-range-start .price{color:var(--gray-200,#eaecf0)}.day-button:hover.day-range-end:after,.day-button:hover.day-range-start:after,.day-range-end:after,.day-range-start:after{background:hsl(var(--brand-600,215,87%,51%));border-radius:8px;content:\"\";inset:0;position:absolute;z-index:-1}.day-button:hover.day-range-start:dir(ltr):after,.day-range-start:dir(ltr):after{border-bottom-right-radius:0;border-top-right-radius:0}.day-button:hover.day-range-end:dir(ltr):after,.day-range-end:dir(ltr):after{border-bottom-left-radius:0;border-top-left-radius:0}.day-button:hover.day-range-start:dir(rtl):after,.day-range-start:dir(rtl):after{border-bottom-left-radius:0;border-top-left-radius:0}.day-button:hover.day-range-end:dir(rtl):after,.day-range-end:dir(rtl):after{border-bottom-right-radius:0;border-top-right-radius:0}.day-button:hover.highlight:after{border-radius:0}.highlight:after{background:var(--gray-100,#f2f4f7);border-radius:0;content:\"\";inset:0;position:absolute;z-index:-1}.button-next-main{display:none}@media only screen and (min-width:640px){.date-picker{flex-direction:row}.button-next-main{display:flex}.button-next{display:none}}@media only screen and (min-width:740px){.day-button,.navigation-buttons,th{height:var(--cal-button-size,45px);width:var(--cal-button-size,45px)}.margin-horizontal:dir(ltr){margin-left:var(--cal-button-size,45px)}.margin-horizontal:dir(rtl){margin-right:var(--cal-button-size,45px)}.margin-right:dir(rtl){margin-left:var(--cal-button-size,45px)}.margin-right:dir(ltr){margin-right:var(--cal-button-size,45px)}.margin-left:dir(ltr){margin-left:var(--cal-button-size,45px)}.margin-left:dir(rtl){margin-right:var(--cal-button-size,45px)}}.static{position:static}.w-full{width:100%}.max-w-96{max-width:24rem}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.gap-4{gap:1rem}.rounded-\\[var\\(--radius\\2c 8px\\)\\]{border-radius:var(--radius,8px)}.rounded-md{border-radius:.375rem}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.bg-red-500{--tw-bg-opacity:1;background-color:rgb(239 68 68/var(--tw-bg-opacity))}.p-2{padding:.5rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}@media (min-width:640px){.sm\\:w-auto{width:auto}.sm\\:w-fit{width:fit-content}.sm\\:flex-row{flex-direction:row}.sm\\:flex-wrap{flex-wrap:wrap}.sm\\:justify-center{justify-content:center}}@media (min-width:1024px){.lg\\:mr-10{margin-right:2.5rem}}.grid{display:grid}.h-5{height:1.25rem}.h-full{height:100%}.w-3{width:.75rem}.w-5{width:1.25rem}.items-end{align-items:flex-end}.gap-8{gap:2rem}.border-0{border-width:0}.text-slate-500{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity))}.shadow,.shadow-none{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}@media (min-width:640px){.sm\\:border{border-width:1px}.sm\\:shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}}@media (min-width:768px){.md\\:w-3{width:.75rem}.md\\:p-4{padding:1rem}}@media (min-width:640px){.sm\\:p-4{padding:1rem}}.resize{resize:both}@media (min-width:640px){.sm\\:block{display:block}}@media (min-width:768px){.md\\:hidden{display:none}}.sticky{position:sticky}.bottom-0{bottom:0}.top-0{top:0}.z-40{z-index:40}.z-50{z-index:50}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.mb-5{margin-bottom:1.25rem}.line-clamp-3{-webkit-box-orient:vertical;-webkit-line-clamp:3;display:-webkit-box;overflow:hidden}.size-4{height:1rem;width:1rem}.w-40{width:10rem}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-10{gap:2.5rem}.gap-2{gap:.5rem}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-bottom-width:calc(1px*var(--tw-divide-y-reverse));border-top-width:calc(1px*(1 - var(--tw-divide-y-reverse)))}.overflow-hidden{overflow:hidden}.rounded-b-none{border-bottom-left-radius:0;border-bottom-right-radius:0}.bg-gray-50{--tw-bg-opacity:1;background-color:rgb(249 250 251/var(--tw-bg-opacity))}.bg-gray-700\\/80{background-color:rgba(55,65,81,.8)}.px-4{padding-left:1rem;padding-right:1rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.text-gray-200{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity))}.text-green-500{--tw-text-opacity:1;color:rgb(34 197 94/var(--tw-text-opacity))}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}.text-slate-700{--tw-text-opacity:1;color:rgb(51 65 85/var(--tw-text-opacity))}.text-slate-900{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity))}.line-through{text-decoration-line:line-through}@media (min-width:768px){.md\\:block{display:block}.md\\:flex{display:flex}.md\\:w-fit{width:fit-content}.md\\:flex-row{flex-direction:row}.md\\:items-center{align-items:center}.md\\:justify-start{justify-content:flex-start}.md\\:space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.md\\:space-y-0>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(0px*var(--tw-space-y-reverse));margin-top:calc(0px*(1 - var(--tw-space-y-reverse)))}}@media (min-width:1024px){.lg\\:max-w-md{max-width:28rem}.lg\\:flex-row{flex-direction:row}.lg\\:justify-end{justify-content:flex-end}.lg\\:size-7{height:1.75rem;width:1.75rem}}.fixed{position:fixed}.right-0{right:0}.right-4{right:1rem}.top-4{top:1rem}.mt-8{margin-top:2rem}.h-6{height:1.5rem}.h-screen{height:100vh}.w-6{width:1.5rem}.min-w-\\[70\\%\\]{min-width:70%}.max-w-full{max-width:100%}.translate-x-0{--tw-translate-x:0px}.translate-x-0,.translate-x-\\[100\\%\\]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\]{--tw-translate-x:100%}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.shadow,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed]{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed],.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{--tw-translate-x:0px}";
const IrDateRangeStyle0 = irDateRangeCss;

const IrDateRange = /*@__PURE__*/ proxyCustomElement(class IrDateRange extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.dateChange = createEvent(this, "dateChange", 7);
        this.handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                this.decrementDate();
            }
            else if (e.key === 'ArrowRight') {
                this.incrementDate();
            }
        };
        this.fromDate = null;
        this.toDate = null;
        this.minDate = dateFns.addYears(new Date(), -24);
        this.maxDate = dateFns.addYears(new Date(), 24);
        this.dateModifiers = undefined;
        this.maxSpanDays = 90;
        this.showPrice = false;
        this.locale = locale.enUS;
        this.selectedDates = { start: new Date(), end: new Date() };
        this.displayedDaysArr = [];
        this.hoveredDate = null;
        this.weekdays = [];
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
        const nextMonth = dateFns.addMonths(currentMonth, 1);
        this.displayedDaysArr = [this.getMonthDays(currentMonth), this.getMonthDays(nextMonth)];
    }
    handleLocale(newValue, oldLocale) {
        if (newValue !== oldLocale) {
            this.weekdays = getAbbreviatedWeekdays(newValue);
            console.log(this.weekdays);
        }
    }
    getMonthDays(month) {
        return {
            month,
            days: dateFns.eachDayOfInterval({
                start: dateFns.startOfWeek(dateFns.startOfMonth(month), { weekStartsOn: 1, locale: this.locale }),
                end: dateFns.endOfWeek(dateFns.endOfMonth(month), { weekStartsOn: 1, locale: this.locale }),
            }),
        };
    }
    decrementDate() {
        if (this.selectedDates.start && this.selectedDates.end) {
            this.selectedDates = {
                start: dateFns.addDays(new Date(this.selectedDates.start), -1),
                end: new Date(this.selectedDates.end),
            };
        }
    }
    incrementDate() {
        if (this.selectedDates.start && this.selectedDates.end) {
            this.selectedDates = {
                start: new Date(this.selectedDates.start),
                end: dateFns.addDays(new Date(this.selectedDates.end), 1),
            };
        }
    }
    goToNextMonth(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        const currentSecondMonth = this.displayedDaysArr[1].month;
        const newSecondMonth = dateFns.addMonths(currentSecondMonth, 1);
        if (dateFns.isBefore(dateFns.endOfMonth(newSecondMonth), this.minDate) || dateFns.isAfter(dateFns.startOfMonth(newSecondMonth), this.maxDate)) {
            return;
        }
        this.displayedDaysArr = [this.displayedDaysArr[1], this.getMonthDays(newSecondMonth)];
    }
    goToPreviousMonth(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        const currentFirstMonth = this.displayedDaysArr[0].month;
        const newFirstMonth = dateFns.addMonths(currentFirstMonth, -1);
        if (dateFns.isBefore(dateFns.endOfMonth(newFirstMonth), this.minDate) || dateFns.isAfter(dateFns.startOfMonth(newFirstMonth), this.maxDate)) {
            return;
        }
        this.displayedDaysArr = [this.getMonthDays(newFirstMonth), this.displayedDaysArr[0]];
    }
    selectDay(day) {
        if (dateFns.isSameDay(new Date(this.selectedDates.start), new Date(day)) || dateFns.isSameDay(new Date(this.selectedDates.end), new Date(day))) {
            this.selectedDates = { start: day, end: null };
        }
        else {
            if (this.selectedDates.start === null) {
                this.selectedDates = { start: day, end: null };
            }
            else {
                if (this.selectedDates.end === null) {
                    if (dateFns.isBefore(day, this.selectedDates.start)) {
                        this.selectedDates = { start: day, end: null };
                    }
                    else {
                        this.selectedDates = Object.assign(Object.assign({}, this.selectedDates), { end: day });
                    }
                }
                else {
                    this.selectedDates = { start: day, end: null };
                }
            }
        }
        this.dateChange.emit(this.selectedDates);
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
        const start = new Date((_a = this.selectedDates.start) !== null && _a !== void 0 ? _a : new Date());
        start.setHours(0, 0, 0, 0);
        const end = this.selectedDates.end ? new Date(this.selectedDates.end) : this.hoveredDate;
        end === null || end === void 0 ? void 0 : end.setHours(0, 0, 0, 0);
        if (this.selectedDates.start && !this.selectedDates.end && this.hoveredDate && dateFns.isAfter(this.hoveredDate, start)) {
            if (dateFns.isAfter(date, start) && dateFns.isBefore(date, end)) {
                return true;
            }
        }
        else if (dateFns.isAfter(date, start) && this.selectedDates.end && dateFns.isBefore(date, end)) {
            return true;
        }
        return false;
    }
    getMonthStyles(index) {
        if (index === 0) {
            if (!dateFns.isAfter(dateFns.startOfMonth(this.displayedDaysArr[0].month), this.minDate)) {
                return 'margin-horizontal';
            }
            return 'margin-right';
        }
        else {
            if (!dateFns.isBefore(dateFns.endOfMonth(this.displayedDaysArr[1].month), this.maxDate)) {
                return 'margin-right margin-left';
            }
            return 'margin-left';
        }
    }
    checkDatePresence(day) {
        if (!this.dateModifiers) {
            return;
        }
        const formatedDate = dateFns.format(day, 'yyyy-MM-dd');
        const result = this.dateModifiers[formatedDate];
        if (result) {
            return result;
        }
        return;
    }
    render() {
        return (h("div", { key: '77130b8b562bf52466ec306118206cd18c85dacc', class: 'date-picker' }, this.displayedDaysArr.map((month, index) => (h("table", { class: "calendar ", role: "grid" }, h("thead", null, h("tr", { class: "calendar-header" }, h("th", { colSpan: 7 }, h("div", { class: "month-navigation" }, index === 0 && dateFns.isAfter(dateFns.startOfMonth(this.displayedDaysArr[0].month), this.minDate) && (h("button", { name: "previous month", class: "navigation-buttons", type: "button", onClick: this.goToPreviousMonth.bind(this) }, h("p", { class: "sr-only" }, "previous month"), h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "16", width: "25.6", viewBox: "0 0 320 512" }, h("path", { fill: "currentColor", d: "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" })))), h("span", { class: this.getMonthStyles(index) }, dateFns.format(month.month, 'MMMM yyyy', { locale: this.locale })), index === 0 && (h("button", { name: "next month", class: "navigation-buttons button-next", type: "button", onClick: this.goToNextMonth.bind(this) }, h("p", { slot: "icon", class: "sr-only" }, "next month"), h("svg", { slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "16", width: "25.6", viewBox: "0 0 320 512" }, h("path", { d: "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" })))), index === 1 && dateFns.isBefore(dateFns.endOfMonth(this.displayedDaysArr[1].month), this.maxDate) && (h("button", { name: "next month", class: "navigation-buttons button-next-main", type: "button", onClick: this.goToNextMonth.bind(this) }, h("p", { class: "sr-only " }, "next month"), h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "16", width: "25.6", viewBox: "0 0 320 512" }, h("path", { fill: "currentColor", d: "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" }))))))), h("tr", { class: "weekday-header", role: "row" }, this.weekdays.map(weekday => (h("th", { class: "weekday-name", key: weekday }, weekday))))), h("tbody", { class: "days-grid" }, month.days
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
            day.setHours(0, 0, 0, 0);
            const checkedDate = this.checkDatePresence(day);
            return (h("td", { class: "day-cell", key: dateFns.format(day, 'yyyy-MM-dd'), role: "gridcell" }, dateFns.isSameMonth(day, month.month) && (h("button", { disabled: dateFns.isBefore(day, this.minDate) || dateFns.isAfter(day, this.maxDate) || (checkedDate === null || checkedDate === void 0 ? void 0 : checkedDate.disabled), onMouseEnter: () => this.handleMouseEnter(day), onMouseLeave: () => this.handleMouseLeave(), onClick: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.selectDay(day);
                }, "aria-label": `${dateFns.format(day, 'EEEE, MMMM do yyyy', { locale: this.locale })} ${dateFns.isBefore(day, this.minDate) || dateFns.isAfter(day, this.maxDate) ? 'Not available' : ''}`, "aria-disabled": dateFns.isBefore(day, this.minDate) || dateFns.isAfter(day, this.maxDate) || (checkedDate === null || checkedDate === void 0 ? void 0 : checkedDate.disabled) ? 'true' : 'false', "aria-selected": (this.selectedDates.start && dateFns.isSameDay(new Date(this.selectedDates.start), new Date(day))) ||
                    this.isDaySelected(day) ||
                    (this.selectedDates.end && dateFns.isSameDay(new Date((_a = this.selectedDates.end) !== null && _a !== void 0 ? _a : new Date()), new Date(day))), class: `day-button  ${this.selectedDates.start && dateFns.isSameDay(new Date(this.selectedDates.start), new Date(day)) ? 'day-range-start' : ''}
                          ${this.selectedDates.end && dateFns.isSameDay(new Date((_b = this.selectedDates.end) !== null && _b !== void 0 ? _b : new Date()), new Date(day)) ? 'day-range-end' : ''}  
                            ${this.isDaySelected(day) ? 'highlight' : ''}
                            ` }, h("p", { class: `day ${dateFns.isToday(day) ? 'current-date' : ''}` }, dateFns.format(day, 'd', { locale: this.locale })), this.showPrice && h("p", { class: "price" }, (checkedDate === null || checkedDate === void 0 ? void 0 : checkedDate.withPrice.price) ? '_' : checkedDate.withPrice.price)))));
        }))))))))));
    }
    static get watchers() { return {
        "locale": ["handleLocale"]
    }; }
    static get style() { return IrDateRangeStyle0; }
}, [1, "ir-date-range", {
        "fromDate": [16],
        "toDate": [16],
        "minDate": [16],
        "maxDate": [16],
        "dateModifiers": [16],
        "maxSpanDays": [2, "max-span-days"],
        "showPrice": [4, "show-price"],
        "locale": [16],
        "selectedDates": [32],
        "displayedDaysArr": [32],
        "hoveredDate": [32],
        "weekdays": [32]
    }, undefined, {
        "locale": ["handleLocale"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-date-range"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-date-range":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrDateRange);
            }
            break;
    } });
}

export { IrDateRange as I, defineCustomElement as d };

//# sourceMappingURL=ir-date-range2.js.map