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
        return (h("div", { key: '86fe33bf65b83450005978054465cf1fd8d9633e', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '2bc34d411d12548d62bf712b1a8533b7ebcf2187', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: 'd05d11d4014783edcb214fbcd6ec0f3d29d24e55', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: 'dd81172e4c7c429f7abdbe39cdbeb669a1bbc54d', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'e49c9c0ca114b1eeec7f798c7f6e9a6509b3451b', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '241635197a0407ce561ea75e5c75d42b773c64e0', class: "m-0 p-0 flex-grow-1" }, locales.entries.Lcz_Filters)), h("ir-button", { key: '673c3db96a25a4dce3d0929fcbf5638342032b5e', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#salesFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "salesFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: 'a646f34c5a9b6f5273fa3b52dd7952475f40dc93', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, h("div", { key: '10b6b353e4a46e3608dbcd2b82e54183c00b06d9', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: 'f2059031a593eef52a7fbd1459390137aafc90f9', class: "pt-1 filter-group" }, h("label", { key: '10d8b6b4c32ea8bd58bc8934cf3dc2908f14a592', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Rooms"), h("ir-select", { key: 'fd718ea53256062997cbbee041feb92f4131116c', selectedValue: this.filters?.BOOK_CASE, selectId: "rooms", showFirstOption: false, onSelectChange: e => this.updateFilter({
                BOOK_CASE: e.detail,
            }), data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), h("fieldset", { key: 'eaec08ba2cac5c9cbc855692e2a500e5b6e8d4d9', class: "pt-1 filter-group" }, h("label", { key: '71d2a8ccd1e50fc84d9b285f5dd85308ad4aaaf5', htmlFor: "period", class: "px-0 m-0", style: { paddingBottom: '0.25rem' } }, "Selected period"), h("div", { key: '3967d389ddd12b2f30a3dbc0c5adec36ea0eb7eb', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, h("ir-select", { key: '37b086f4e41ec79a0f9a42ad5d69dcf75d0c8f7f', selectedValue: this.window, onSelectChange: e => {
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
            ] }), h("p", { key: 'dc401fdc9102585794a0dbc8c2211c2408511d52', class: "m-0 p-0 text-center" }, "Or"), h("ir-range-picker", { key: 'c62c3c605afff74ec21fc5ae19a5198b017dde88', onDateRangeChanged: e => {
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
            }, fromDate: hooks(this.filters.FROM_DATE, 'YYYY-MM-DD'), toDate: hooks(this.filters.TO_DATE, 'YYYY-MM-DD'), maxDate: hooks().format('YYYY-MM-DD'), withOverlay: false }))), h("div", { key: '1b294c00c4721b31a1dc8997a58c5da2cd10552d', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, h("label", { key: '6e3f434a28c6894ace1601085aa9da6d0ac18b86', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), h("ir-checkbox", { key: 'b2a22775efb04dd41d1a7fe8b583c49efdc519ca', checked: this.filters?.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } })), h("div", { key: '1c09558d891c9cc724fbfab5b64dba6b22affb99', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: 'b865ac2bbcb1fd9c17c3bf125152477ee5850638', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '5080abe66628df5d0ca94754558e7a6f511b6238', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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