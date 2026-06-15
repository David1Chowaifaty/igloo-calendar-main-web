import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$6 } from './ir-air-date-picker2.js';
import { d as defineCustomElement$5 } from './ir-custom-button2.js';
import { d as defineCustomElement$4 } from './ir-date-range-filter2.js';
import { d as defineCustomElement$3 } from './ir-date-select2.js';
import { d as defineCustomElement$2 } from './ir-filter-card2.js';
import { d as defineCustomElement$1 } from './ir-input2.js';

const irMealReportFiltersCss = ".sc-ir-meal-report-filters-h{display:block}.ir-meal-report-filters__warning.sc-ir-meal-report-filters{padding:var(--wa-space-xs);border:1px solid var(--wa-color-warning-200);border-radius:var(--wa-border-radius-m);background:var(--wa-color-warning-50);color:var(--wa-color-warning-700);font-size:var(--wa-font-size-x-small)}";
const IrMealReportFiltersStyle0 = irMealReportFiltersCss;

const IrMealReportFilters = /*@__PURE__*/ proxyCustomElement(class IrMealReportFilters extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.reportTypeChange = createEvent(this, "reportTypeChange", 7);
        this.dateChange = createEvent(this, "dateChange", 7);
        this.mealTypeChange = createEvent(this, "mealTypeChange", 7);
        this.filterApply = createEvent(this, "filterApply", 7);
        this.filterReset = createEvent(this, "filterReset", 7);
        this.presetDate = createEvent(this, "presetDate", 7);
    }
    reportType = 'GUEST_LIST';
    fromDate;
    toDate;
    mealType = null;
    setupEntries;
    isLoading = false;
    lcz = {};
    reportTypeChange;
    dateChange;
    mealTypeChange;
    filterApply;
    filterReset;
    presetDate;
    render() {
        const mealTypes = this.setupEntries?.meal_type || [];
        const todayDate = hooks().format('YYYY-MM-DD');
        const tomorrowDate = hooks().add(1, 'day').format('YYYY-MM-DD');
        // Reflect which preset (Today/Tomorrow) is currently active based on the selected fromDate.
        const selectedPreset = this.fromDate === todayDate ? 'today' : this.fromDate === tomorrowDate ? 'tomorrow' : '';
        return (h("ir-filter-card", { key: 'f29dc7c305630ec44caf7a4557917d155923f0d0' }, h("wa-radio-group", { key: 'fc3b1a069e24c5eed92cf8a043ae3afd78144bc3', label: "Report type", size: "small", orientation: "horizontal", value: this.reportType, onchange: e => {
                this.reportTypeChange.emit(e.target.value);
            } }, h("wa-radio", { key: '5726e20dd2b13a69b403aa2aee08512cdc6d604d', style: { flex: '1' }, appearance: "button", value: "GUEST_LIST" }, "Guest list"), h("wa-radio", { key: 'f417d9f56a206f284bb08c899fa0bc248b2cdcb7', style: { flex: '1' }, appearance: "button", value: "MEAL_COUNT" }, "Meal count")), this.reportType === 'GUEST_LIST' ? (h("wa-radio-group", { label: "Stay date", size: "small", orientation: "horizontal", value: selectedPreset, onchange: e => {
                this.presetDate.emit(e.target.value);
            } }, h("wa-radio", { style: { flex: '1' }, appearance: "button", value: "today" }, "Today"), h("wa-radio", { style: { flex: '1' }, appearance: "button", value: "tomorrow" }, "Tomorrow"))) : (h("div", null, h("ir-date-range-filter", { label: "Stay date", fromDate: this.fromDate, showQuickActions: false, toDate: this.toDate, minDate: hooks().format('YYYY-MM-DD'), maxDate: hooks().add(14, 'days').format('YYYY-MM-DD'), onDatesChanged: e => {
                const { from, to } = e.detail;
                this.dateChange.emit({
                    from,
                    to,
                });
            }, withClear: false, selectionMode: "auto" }))), this.reportType === 'GUEST_LIST' &&
            (mealTypes.length > 0 ? (h("wa-radio-group", { defaultValue: this.mealType, label: "Meal type", size: "small", orientation: "horizontal", value: this.mealType, style: { width: '100%' }, onchange: e => {
                    this.mealTypeChange.emit(e.target.value);
                } }, mealTypes.map(type => (h("wa-radio", { style: { flex: '1' }, appearance: "button", value: type.CODE_NAME }, type.CODE_VALUE_EN))))) : (h("div", { class: "ir-meal-report-filters__warning" }, "No meal types found."))), h("div", { key: 'f8b581f162673ac5690a0abf13bfe7a642a891c9', slot: "footer" }, h("ir-custom-button", { key: '68e308cd987bd9d696ca295d492cf15800133d40', type: "button", size: "small", variant: "neutral", appearance: "filled", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            } }, this.lcz.Lcz_Reset || 'Reset'), h("ir-custom-button", { key: 'a0d6a001959b8ee79c026221edbdfe43350b691d', type: "button", size: "small", variant: "brand", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, this.lcz.Lcz_Apply || 'Apply'))));
    }
    static get style() { return IrMealReportFiltersStyle0; }
}, [2, "ir-meal-report-filters", {
        "reportType": [1, "report-type"],
        "fromDate": [1, "from-date"],
        "toDate": [1, "to-date"],
        "mealType": [1, "meal-type"],
        "setupEntries": [16],
        "isLoading": [4, "is-loading"],
        "lcz": [8]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-meal-report-filters", "ir-air-date-picker", "ir-custom-button", "ir-date-range-filter", "ir-date-select", "ir-filter-card", "ir-input"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-meal-report-filters":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrMealReportFilters);
            }
            break;
        case "ir-air-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-date-range-filter":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-date-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-filter-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrMealReportFilters as I, defineCustomElement as d };

//# sourceMappingURL=ir-meal-report-filters2.js.map