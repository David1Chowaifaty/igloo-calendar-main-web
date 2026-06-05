import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$3 } from './ir-custom-button2.js';
import { d as defineCustomElement$2 } from './ir-date-picker2.js';
import { d as defineCustomElement$1 } from './ir-range-picker2.js';

const irMealReportFiltersCss = ".sc-ir-meal-report-filters-h{display:block}.ir-meal-report-filters__container.sc-ir-meal-report-filters{width:300px;flex-shrink:0;background-color:#ffffff;border:1px solid #e2e8f0;border-radius:var(--wa-border-radius-m);box-shadow:var(--wa-shadow-s);display:flex;flex-direction:column}.ir-meal-report-filters__header.sc-ir-meal-report-filters{display:flex;align-items:center;justify-content:space-between;padding:var(--wa-space-s) var(--wa-space-m);border-bottom:1px solid var(--wa-color-neutral-200);margin-bottom:var(--wa-space-xs)}.ir-meal-report-filters__header-content.sc-ir-meal-report-filters{display:flex;align-items:center;gap:var(--wa-space-xs)}.ir-meal-report-filters__title.sc-ir-meal-report-filters{margin:0;padding:0;flex-grow:1;font-weight:var(--wa-font-weight-bold);font-size:13px}.ir-meal-report-filters__body.sc-ir-meal-report-filters{padding:var(--wa-space-s) var(--wa-space-m);display:flex;flex-direction:column;gap:var(--wa-space-m)}.ir-meal-report-filters__group.sc-ir-meal-report-filters{margin:0;padding:0;border:0}.ir-meal-report-filters__label.sc-ir-meal-report-filters{margin-bottom:var(--wa-space-xs);display:block;font-size:var(--wa-font-size-small);font-weight:var(--wa-font-weight-bold);color:var(--wa-color-neutral-900)}.ir-meal-report-filters__date-presets.sc-ir-meal-report-filters{display:flex;gap:var(--wa-space-xs)}.ir-meal-report-filters__preset-btn.sc-ir-meal-report-filters{flex:1}.ir-meal-report-filters__range-picker-wrapper.sc-ir-meal-report-filters{padding:0;display:flex;flex-direction:column}.ir-meal-report-filters__range-picker-wrapper.sc-ir-meal-report-filters ir-range-picker.sc-ir-meal-report-filters{width:100%}.ir-meal-report-filters__meal-types.sc-ir-meal-report-filters{display:flex;flex-wrap:wrap;gap:var(--wa-space-xs)}.ir-meal-report-filters__meal-btn.sc-ir-meal-report-filters{font-size:10px;--ir-button-padding:0.2rem 0.4rem}.ir-meal-report-filters__warning.sc-ir-meal-report-filters{padding:var(--wa-space-xs);border:1px solid var(--wa-color-warning-200);border-radius:var(--wa-border-radius-m);background:var(--wa-color-warning-50);color:var(--wa-color-warning-700);font-size:var(--wa-font-size-x-small)}.ir-meal-report-filters__footer.sc-ir-meal-report-filters{display:flex;align-items:center;justify-content:flex-end;gap:var(--wa-space-xs);padding-top:var(--wa-space-m);border-top:1px solid var(--wa-color-neutral-200)}.ir-meal-report-filters__reset-btn.sc-ir-meal-report-filters{margin-inline-end:var(--wa-space-m)}";
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
        return (h("div", { key: '9985647029d6e05b5dca1476e40d85c14dd1165f', class: "ir-meal-report-filters__container", onKeyDown: (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    e.stopPropagation();
                }
            } }, h("div", { key: '97f81ee81f50a3f5ebb1d52b49979e4a1405ddf3', class: "ir-meal-report-filters__header" }, h("div", { key: '2a063cc8dd89ebb725ab1fa5a225bbc1e98383f3', class: "ir-meal-report-filters__header-content" }, h("svg", { key: '2b1c30c8e117b515f0f2cb04f6678dc02ce01e85', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '4a58cbbcc52f1751ffbb9b239c6ed2fca4aa42b2', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '236fc99e87c681fc2830e8c8853256071bb744de', class: "ir-meal-report-filters__title" }, this.lcz.Lcz_Filters || 'Filters'))), h("div", { key: '47c87792edb2ab6789904ee413b138f671b09ff0', class: "ir-meal-report-filters__body" }, h("fieldset", { key: '73388ca6afc27addb8a79346a56fd3a860623645', class: "ir-meal-report-filters__group" }, h("label", { key: '89da050697f77fe20075f2887e18291d46e1cac6', class: "ir-meal-report-filters__label" }, "Report type"), h("wa-radio-group", { key: 'cb40800f39cb46407c443f0e0cf833a1a7070d3c', value: this.reportType, onchange: e => {
                this.reportTypeChange.emit(e.target.value);
            } }, h("wa-radio", { key: '1091aebaef199ebaca5d2a01801c6d5b5c4be31d', value: "GUEST_LIST" }, "Guest list"), h("wa-radio", { key: '1d45d12c65dbda8d94b85e28d734618ffc7da189', value: "MEAL_COUNT" }, "Meal count"))), h("fieldset", { key: 'bfe87465398d170e78676d8e67c01f78bfd56981', class: "ir-meal-report-filters__group" }, h("label", { key: '3ee952cd4a6d4250a1a5ad9df4d7f877ac7eb3ea', class: "ir-meal-report-filters__label" }, "Stay date"), this.reportType === 'GUEST_LIST' ? (h("div", { class: "ir-meal-report-filters__date-presets" }, h("ir-custom-button", { type: "button", size: "small", variant: this.fromDate === hooks().format('YYYY-MM-DD') ? 'brand' : 'neutral', appearance: this.fromDate === hooks().format('YYYY-MM-DD') ? 'filled' : 'outlined', onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.presetDate.emit('today');
            }, class: "ir-meal-report-filters__preset-btn" }, "Today"), h("ir-custom-button", { type: "button", size: "small", variant: this.fromDate === hooks().add(1, 'day').format('YYYY-MM-DD') ? 'brand' : 'neutral', appearance: this.fromDate === hooks().add(1, 'day').format('YYYY-MM-DD') ? 'filled' : 'outlined', onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.presetDate.emit('tomorrow');
            }, class: "ir-meal-report-filters__preset-btn" }, "Tomorrow"))) : (h("div", { class: "ir-meal-report-filters__range-picker-wrapper" }, h("ir-range-picker", { fromDate: hooks(this.fromDate, 'YYYY-MM-DD'), toDate: hooks(this.toDate, 'YYYY-MM-DD'), minDate: hooks().format('YYYY-MM-DD'), maxDate: hooks().add(14, 'days').format('YYYY-MM-DD'), onDateRangeChanged: e => {
                const { fromDate, toDate } = e.detail;
                this.dateChange.emit({
                    from: fromDate.format('YYYY-MM-DD'),
                    to: toDate.format('YYYY-MM-DD')
                });
            }, withOverlay: false })))), this.reportType === 'GUEST_LIST' && (h("fieldset", { key: '3941f8166fc83a627757fcfe7d6f2a56c0040dd6', class: "ir-meal-report-filters__group" }, h("label", { key: '60e51df74ae750af6e63145b5a35430939ef6bb4', class: "ir-meal-report-filters__label" }, "Meal type"), mealTypes.length > 0 ? (h("div", { class: "ir-meal-report-filters__meal-types" }, mealTypes.map(type => (h("ir-custom-button", { type: "button", size: "small", variant: this.mealType === type.CODE_NAME ? 'brand' : 'neutral', appearance: this.mealType === type.CODE_NAME ? 'filled' : 'outlined', onClickHandler: async (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.mealTypeChange.emit(type.CODE_NAME);
            }, class: "ir-meal-report-filters__meal-btn" }, type.CODE_VALUE_EN))))) : (h("div", { class: "ir-meal-report-filters__warning" }, "No meal types found.")))), h("div", { key: 'e066ea5a21df917bc1accdd8b283da08c319065c', class: "ir-meal-report-filters__footer" }, h("ir-custom-button", { key: '43f4fee3b18b059a0ea9585a2039b8e8cd05a30a', type: "button", size: "small", variant: "neutral", appearance: "filled", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, class: "ir-meal-report-filters__reset-btn" }, this.lcz.Lcz_Reset || 'Reset'), h("ir-custom-button", { key: 'b7d2725f2a27186b1583d0e89bc6218e39f62f54', type: "button", size: "small", variant: "brand", loading: this.isLoading, onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterApply.emit();
            } }, this.lcz.Lcz_Apply || 'Apply')))));
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
    const components = ["ir-meal-report-filters", "ir-custom-button", "ir-date-picker", "ir-range-picker"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-meal-report-filters":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrMealReportFilters);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-range-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrMealReportFilters as I, defineCustomElement as d };

//# sourceMappingURL=ir-meal-report-filters2.js.map