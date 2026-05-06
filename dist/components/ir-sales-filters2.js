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
        return (h("div", { key: '3a454d8c00a798f9eefc3773d090eef0eda078cb', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: 'f21ae394ea25ae550cc2a7a5e2804d6ac86f4eef', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '4962e56a527008ec085b59143065d8ce39aacc60', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: 'ad92db66df775eda8262882e7857cd77f11cdc0a', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '40510e2e012ab4cf3734db6c819fd806d9145b52', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '765882bacfa92e83099274a57273725734c6fe40', class: "m-0 p-0 flex-grow-1" }, locales.entries.Lcz_Filters)), h("ir-button", { key: '6af5c408c4c5a2a06c8149727af7935c78c2656d', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#salesFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "salesFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '9a450b8147c853eaaa348626cccc5794520e8465', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, h("div", { key: '03efb5405438605a8b614d3f5b1d5e1ec3193f9f', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '7df7c453dfae2d0e955f94b062c65e6b3134b642', class: "pt-1 filter-group" }, h("label", { key: '7a03eefca737f3eeac8ff2e3d78907c7ae6d764b', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Rooms"), h("ir-select", { key: '239b7f3927f943695ec13eca4b6c9d4f4f5032d3', selectedValue: this.filters?.BOOK_CASE, selectId: "rooms", showFirstOption: false, onSelectChange: e => this.updateFilter({
                BOOK_CASE: e.detail,
            }), data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), h("fieldset", { key: '31e22f04e5288141695791a0b2b5c7782666f22d', class: "pt-1 filter-group" }, h("label", { key: '324498a6a4951011aeb42147934a6f20de0102d7', htmlFor: "period", class: "px-0 m-0", style: { paddingBottom: '0.25rem' } }, "Selected period"), h("div", { key: '021dc539652320a0b3022939880f09d906c46748', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, h("ir-select", { key: '55ef75a8da7c7334c2f2f44a7199c3795dcd9226', selectedValue: this.window, onSelectChange: e => {
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
            ] }), h("p", { key: '0a593cf3029533c0627dd411c6b0dbe4e2352be2', class: "m-0 p-0 text-center" }, "Or"), h("ir-range-picker", { key: '4123be0ce6fe83ece6fdae510a06e3731b1da52b', onDateRangeChanged: e => {
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
            }, fromDate: hooks(this.filters.FROM_DATE, 'YYYY-MM-DD'), toDate: hooks(this.filters.TO_DATE, 'YYYY-MM-DD'), maxDate: hooks().format('YYYY-MM-DD'), withOverlay: false }))), h("div", { key: '06b29198a29081f0e111931931b4e546888cb4d4', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, h("label", { key: 'ecd316c97d531ca05d386be03cd567e7b3474bc5', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), h("ir-checkbox", { key: 'df26f2dfdc72d2ab612c6917545ef8856091b2a0', checked: this.filters?.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } })), h("div", { key: '688b89fb7f36a7ed60c0576e86fa1d77c8d2ff9d', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '8b17230ecc112393b28078e24ba39362d42209c0', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: 'd97eb642a33042331794c32eae3db73490f6fdbf', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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