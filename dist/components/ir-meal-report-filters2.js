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
        return (h("div", { key: '3cae49999bd3752d7926c5102b2e28007c3fc744', class: "ir-meal-report-filters__container", onKeyDown: (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    e.stopPropagation();
                }
            } }, h("div", { key: '4d225a57ecd2571543448bb6e6fa535158eb5170', class: "ir-meal-report-filters__header" }, h("div", { key: 'c7a2d2788aa4028a3e08df4de60f5237499f9d87', class: "ir-meal-report-filters__header-content" }, h("svg", { key: '5f48d43301187c5ffd14ed16abbde9a9a0d2912c', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'b70de4974ac7b76bd4a9b5e56ce0d94494f6ce57', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '1413fadb1ec8a36251d0f59d88d425864d886885', class: "ir-meal-report-filters__title" }, this.lcz.Lcz_Filters || 'Filters'))), h("div", { key: '65f521227b29c751221ee90e25ca35b5454efac0', class: "ir-meal-report-filters__body" }, h("fieldset", { key: '68cbc0baa92943978b3adc3909db0d8bf8fd46f6', class: "ir-meal-report-filters__group" }, h("label", { key: '1b87210887c035588d5c67b22b8182a86cf442c7', class: "ir-meal-report-filters__label" }, "Report type"), h("wa-radio-group", { key: '3ec5074046dd479585859e59356c132d97fd80a1', value: this.reportType, onchange: e => {
                this.reportTypeChange.emit(e.target.value);
            } }, h("wa-radio", { key: '335216d1044264c3f89c08400e5015bbb253cf88', value: "GUEST_LIST" }, "Guest list"), h("wa-radio", { key: 'a9653b5f1e6bfc6d43ffdc59f8f578a5013a27c8', value: "MEAL_COUNT" }, "Meal count"))), h("fieldset", { key: 'bc2b756856c7b7e87bbff59f1b0bbb9cecb2163d', class: "ir-meal-report-filters__group" }, h("label", { key: 'db167ec31bc8674b490550a201f12b57e952301c', class: "ir-meal-report-filters__label" }, "Stay date"), this.reportType === 'GUEST_LIST' ? (h("div", { class: "ir-meal-report-filters__date-presets" }, h("ir-custom-button", { type: "button", size: "small", variant: this.fromDate === hooks().format('YYYY-MM-DD') ? 'brand' : 'neutral', appearance: this.fromDate === hooks().format('YYYY-MM-DD') ? 'filled' : 'outlined', onClickHandler: (e) => {
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
            }, withOverlay: false })))), this.reportType === 'GUEST_LIST' && (h("fieldset", { key: 'bef3bb19996193c4fe847f06dcafe99b14780b93', class: "ir-meal-report-filters__group" }, h("label", { key: '5bc05de687bf9e612f6718e1e0aee37e961a5711', class: "ir-meal-report-filters__label" }, "Meal type"), mealTypes.length > 0 ? (h("div", { class: "ir-meal-report-filters__meal-types" }, mealTypes.map(type => (h("ir-custom-button", { type: "button", size: "small", variant: this.mealType === type.CODE_NAME ? 'brand' : 'neutral', appearance: this.mealType === type.CODE_NAME ? 'filled' : 'outlined', onClickHandler: async (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.mealTypeChange.emit(type.CODE_NAME);
            }, class: "ir-meal-report-filters__meal-btn" }, type.CODE_VALUE_EN))))) : (h("div", { class: "ir-meal-report-filters__warning" }, "No meal types found.")))), h("div", { key: 'dd0687f3676666a89d5e6f0b6cfc20cd42cb2984', class: "ir-meal-report-filters__footer" }, h("ir-custom-button", { key: '3aa43417c1d790432dc107cbfaec47218268d974', type: "button", size: "small", variant: "neutral", appearance: "filled", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, class: "ir-meal-report-filters__reset-btn" }, this.lcz.Lcz_Reset || 'Reset'), h("ir-custom-button", { key: '696a001624d1cc521435d31906eb91005a6f93e7', type: "button", size: "small", variant: "brand", loading: this.isLoading, onClickHandler: (e) => {
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