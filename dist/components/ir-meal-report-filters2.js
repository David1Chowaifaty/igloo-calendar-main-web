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
        return (h("div", { key: '00cf6fd072722c3b749159a38f6f25a1012aec6a', class: "ir-meal-report-filters__container", onKeyDown: (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    e.stopPropagation();
                }
            } }, h("div", { key: 'f622562fd0edc706f01b808fd36e373e825f87b7', class: "ir-meal-report-filters__header" }, h("div", { key: 'c752c0164edd187e08e29537aab7b9133688d864', class: "ir-meal-report-filters__header-content" }, h("svg", { key: '84f72de8971cd52c2de6c54a85ff79eaa1bac1e4', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '230c7d028a767e80e142eb98b573e3220909307a', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: 'b776080fc9069859151f46f1d61786c1eb9e5625', class: "ir-meal-report-filters__title" }, this.lcz.Lcz_Filters || 'Filters'))), h("div", { key: '75fef6943fc3cf15ad55a83f772659db969c90cd', class: "ir-meal-report-filters__body" }, h("fieldset", { key: '373c0682a09e3f2b288a21b71c25702e27235357', class: "ir-meal-report-filters__group" }, h("label", { key: '1229650975f32cda00c68dc682547f2a19dd48c4', class: "ir-meal-report-filters__label" }, "Report type"), h("wa-radio-group", { key: 'dc7e852311ec99d678d14ce86d75debb8a76080e', value: this.reportType, onchange: e => {
                this.reportTypeChange.emit(e.target.value);
            } }, h("wa-radio", { key: '016e1dd6d690511347194ef290d337cf2ce9660e', value: "GUEST_LIST" }, "Guest list"), h("wa-radio", { key: '907a281f1dece5a9ba0854848f596a1bb52edd88', value: "MEAL_COUNT" }, "Meal count"))), h("fieldset", { key: '19feb10c3fe57a6755ad9132f58524ee037b7be8', class: "ir-meal-report-filters__group" }, h("label", { key: '4daea0b9d38e04aba1041652fc66af4e4d56ab9a', class: "ir-meal-report-filters__label" }, "Stay date"), this.reportType === 'GUEST_LIST' ? (h("div", { class: "ir-meal-report-filters__date-presets" }, h("ir-custom-button", { type: "button", size: "small", variant: this.fromDate === hooks().format('YYYY-MM-DD') ? 'brand' : 'neutral', appearance: this.fromDate === hooks().format('YYYY-MM-DD') ? 'filled' : 'outlined', onClickHandler: (e) => {
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
            }, withOverlay: false })))), this.reportType === 'GUEST_LIST' && (h("fieldset", { key: '9089764140d153fd87f31e9a2e73bc39563360eb', class: "ir-meal-report-filters__group" }, h("label", { key: '9b425bb5b93556940800170a3938896cefa3ada9', class: "ir-meal-report-filters__label" }, "Meal type"), mealTypes.length > 0 ? (h("div", { class: "ir-meal-report-filters__meal-types" }, mealTypes.map(type => (h("ir-custom-button", { type: "button", size: "small", variant: this.mealType === type.CODE_NAME ? 'brand' : 'neutral', appearance: this.mealType === type.CODE_NAME ? 'filled' : 'outlined', onClickHandler: async (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.mealTypeChange.emit(type.CODE_NAME);
            }, class: "ir-meal-report-filters__meal-btn" }, type.CODE_VALUE_EN))))) : (h("div", { class: "ir-meal-report-filters__warning" }, "No meal types found.")))), h("div", { key: 'b948c2af224c94bddb963980e134296032a272e8', class: "ir-meal-report-filters__footer" }, h("ir-custom-button", { key: '7ed16bf79f8514213c66448478b5920e292f0cad', type: "button", size: "small", variant: "neutral", appearance: "filled", onClickHandler: (e) => {
                const ev = e.detail;
                if (ev && typeof ev.preventDefault === 'function') {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                this.filterReset.emit();
            }, class: "ir-meal-report-filters__reset-btn" }, this.lcz.Lcz_Reset || 'Reset'), h("ir-custom-button", { key: '76a57d02bc0efaafde31bf9f07c09bc7a69a8c8b', type: "button", size: "small", variant: "brand", loading: this.isLoading, onClickHandler: (e) => {
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