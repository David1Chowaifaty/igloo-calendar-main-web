import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { l as locales } from './locales.store.js';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$6 } from './ir-button2.js';
import { d as defineCustomElement$5 } from './ir-checkbox2.js';
import { d as defineCustomElement$4 } from './ir-date-picker2.js';
import { d as defineCustomElement$3 } from './ir-icons2.js';
import { d as defineCustomElement$2 } from './ir-range-picker2.js';
import { d as defineCustomElement$1 } from './ir-select2.js';

const irSalesFiltersCss = ".sc-ir-sales-filters-h{display:block;height:100%;flex:1 1 0%}@media (min-width: 768px){.collapse-btn.sc-ir-sales-filters{display:none}#salesFiltersCollapse.collapse.sc-ir-sales-filters:not(.show){display:block}}";
const IrSalesFiltersStyle0 = irSalesFiltersCss;

const IrSalesFilters = /*@__PURE__*/ proxyCustomElement(class IrSalesFilters extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.applyFilters = createEvent(this, "applyFilters", 7);
    }
    isLoading;
    baseFilters;
    filters;
    collapsed = false;
    window;
    applyFilters;
    componentWillLoad() {
        this.filters = this.baseFilters;
        this.window = this.baseFilters.WINDOW.toString();
    }
    updateFilter(params) {
        this.filters = { ...this.filters, ...params };
    }
    applyFiltersEvt(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.applyFilters.emit(this.filters);
    }
    resetFilters(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.filters = this.baseFilters;
        this.applyFilters.emit(this.filters);
    }
    render() {
        return (h("div", { key: 'a11e6265298f8bdc80fb285fd225c749c03f0156', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '166bfb58b241aa4d15cc4ac6fd0a4faa86374f4c', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '68b843971039d72604a3a39215d0cb30eb5c3a81', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '8a30f40868baa4189585a741e44d1e676d97ab1c', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '95caf8dd0908e26cd367c5c5920032a51a4b9d0d', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '46b5dcebea3465a74fe169da8b4b53b1f7c2895c', class: "m-0 p-0 flex-grow-1" }, locales.entries.Lcz_Filters)), h("ir-button", { key: 'f885da64cd2360d3893449aa711eb98eec143829', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#salesFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "salesFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '1ce181f9927db0b0e3a8b58f1e43ed2c582ddf5f', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, h("div", { key: '0911517cb4225723c18a47ca31dd73734a0f7eeb', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: 'fbcb905440a7fd07b606942a2d6fde1b2561c3d9', class: "pt-1 filter-group" }, h("label", { key: 'a2b913d88501ce0f85d75c579f6c2b48093c456a', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Rooms"), h("ir-select", { key: 'c94184e60012352ccf0eee0f682eafd46072d59e', selectedValue: this.filters?.BOOK_CASE, selectId: "rooms", showFirstOption: false, onSelectChange: e => this.updateFilter({
                BOOK_CASE: e.detail,
            }), data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), h("fieldset", { key: '5e3b369ecc7bced0836dd01548dd2162d9fdeaeb', class: "pt-1 filter-group" }, h("label", { key: '9898e2332532217f5198c1d402227c2649e46742', htmlFor: "period", class: "px-0 m-0", style: { paddingBottom: '0.25rem' } }, "Selected period"), h("div", { key: 'c6ed3c484eb3a3345c5fb04516d7d6a72743f039', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, h("ir-select", { key: '5613f62a6eda0ef3cf0be8f9c58a6e068d677a32', selectedValue: this.window, onSelectChange: e => {
                const dateDiff = Number(e.detail);
                const today = hooks();
                this.updateFilter({
                    WINDOW: dateDiff,
                    TO_DATE: today.format('YYYY-MM-DD'),
                    FROM_DATE: today.add(-dateDiff, 'days').format('YYYY-MM-DD'),
                });
                this.window = e.detail;
            }, selectId: "period",
            // showFirstOption={false}
            firstOption: "...", data: [
                { text: 'For the past 7 days', value: '7' },
                { text: 'For the past 14 days', value: '14' },
                { text: 'For the past 30 days', value: '30' },
                { text: 'For the past 60 days', value: '60' },
                { text: 'For the past 90 days', value: '90' },
                { text: 'For the past 365 days', value: '365' },
            ] }), h("p", { key: '3b784dc94ca78a2ee6513868668833221dbf0514', class: "m-0 p-0 text-center" }, "Or"), h("ir-range-picker", { key: '3125fe26e6ce83c902c70d3e1ba58aaece568e5c', onDateRangeChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { fromDate, toDate, wasFocused } = e.detail;
                this.updateFilter({
                    FROM_DATE: fromDate.format('YYYY-MM-DD'),
                    TO_DATE: toDate.format('YYYY-MM-DD'),
                });
                if (wasFocused)
                    this.window = '';
                // this.dates = { from: fromDate, to: toDate };
            }, fromDate: hooks(this.filters.FROM_DATE, 'YYYY-MM-DD'), toDate: hooks(this.filters.TO_DATE, 'YYYY-MM-DD'), maxDate: hooks().format('YYYY-MM-DD'), withOverlay: false }))), h("div", { key: '0d229d363b928a09e8df5cc7dc4191c477134081', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, h("label", { key: '9d938a0fe1ca3b4836dec6dee50fc285b7c9a743', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), h("ir-checkbox", { key: 'cf54e8a8d282aed65ea3ff717fc1615e5377c2b7', checked: this.filters?.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } })), h("div", { key: 'c1ce554ebb0e73afd0523884182eedb2ba0c4b90', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: 'f4f74a25b133fe3d08f018a800429583ef2b3a55', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '91a4e43fcfd7c7572cba070a9e46d2d7b19a7c18', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
    static get style() { return IrSalesFiltersStyle0; }
}, [2, "ir-sales-filters", {
        "isLoading": [4, "is-loading"],
        "baseFilters": [16],
        "filters": [32],
        "collapsed": [32],
        "window": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-sales-filters", "ir-button", "ir-checkbox", "ir-date-picker", "ir-icons", "ir-range-picker", "ir-select"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-sales-filters":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrSalesFilters);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-range-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrSalesFilters as I, defineCustomElement as d };

//# sourceMappingURL=ir-sales-filters2.js.map