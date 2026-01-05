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
        return (h("div", { key: '8b1caee2c3583f9eb56afe4fdb52ae9e0bb18974', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '8f7b27d0b6dfa35e60ddec2d64cbf3ab454c17c4', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: 'ec36335f9e4baf41ac1d649331e166eec67bfb1a', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '588c83b274d35db4d016771f943c25e8ac660cb3', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '3cb68f97513adc83492ec6f0f7d4079f01963fd4', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: 'a55ba00f3f0568c2774aec4e28a58833f4ed2008', class: "m-0 p-0 flex-grow-1" }, locales.entries.Lcz_Filters)), h("ir-button", { key: 'afc6a443d608dacd09cd6c231461f38dade71c70', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#salesFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "salesFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: 'cc221fdc370017851140226ac40d886aae10df33', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, h("div", { key: '49aefac263f345d2e51affd1ae37e47b75834de9', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '821ab262520327b3628d5f8b604cb08e7d355506', class: "pt-1 filter-group" }, h("label", { key: 'b42f4757166b4e97f286ffbd65496bb6e577e83d', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Rooms"), h("ir-select", { key: 'c12e7ef7d1b358edff1c6aaf5d8dbc6f01def3ae', selectedValue: this.filters?.BOOK_CASE, selectId: "rooms", showFirstOption: false, onSelectChange: e => this.updateFilter({
                BOOK_CASE: e.detail,
            }), data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), h("fieldset", { key: '8325fd2bcb1e19611fc3ab525e4f9accef610cc1', class: "pt-1 filter-group" }, h("label", { key: '6414f9ae5dd0e4f4a64c3b9be2cff3391be3dc6f', htmlFor: "period", class: "px-0 m-0", style: { paddingBottom: '0.25rem' } }, "Selected period"), h("div", { key: 'f06803b6fba56652e3b2aa563993e6fb3eb1702b', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, h("ir-select", { key: '48246fb977ae6b556a60ebb69f7fd22dbbd4a375', selectedValue: this.window, onSelectChange: e => {
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
            ] }), h("p", { key: '788d445d4a7eff6251ec9f2bf255590d82177de6', class: "m-0 p-0 text-center" }, "Or"), h("ir-range-picker", { key: 'c2c3852f4c5daaea6be92db72035ec787df02001', onDateRangeChanged: e => {
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
            }, fromDate: hooks(this.filters.FROM_DATE, 'YYYY-MM-DD'), toDate: hooks(this.filters.TO_DATE, 'YYYY-MM-DD'), maxDate: hooks().format('YYYY-MM-DD'), withOverlay: false }))), h("div", { key: 'e02d12b77791b5101a0593b3eea93d8afd420789', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, h("label", { key: '07b0b16578b02be655b8ca123ea50fddad68aba3', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), h("ir-checkbox", { key: '6d27403b6cb5483bed7201a2fd116a691817d1a9', checked: this.filters?.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } })), h("div", { key: 'f08f4db833edcf0b37c53b9a17c50d83b4389694', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '66b9c96c382a0ad4625fd5e946c445aa75a61d82', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: 'aab57b0893676d90e12b2aafa75425fd591c183d', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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