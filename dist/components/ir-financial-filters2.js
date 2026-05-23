import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { l as locales } from './locales.store.js';
import { d as defineCustomElement$4 } from './ir-button2.js';
import { d as defineCustomElement$3 } from './ir-date-picker2.js';
import { d as defineCustomElement$2 } from './ir-icons2.js';
import { d as defineCustomElement$1 } from './ir-select2.js';

const irFinancialFiltersCss = ".sc-ir-financial-filters-h{display:block}.financial-filter__date-picker-icon.sc-ir-financial-filters{position:absolute;inset:0;left:0.75rem;display:flex;align-items:center;width:fit-content;transform:translateY(-0.15rem)}.sc-ir-financial-filters-h{display:block;height:100%}@media (min-width: 768px){.sc-ir-financial-filters-h{width:300px}.collapse-btn.sc-ir-financial-filters{display:none}#financialFilterCollapse.collapse.sc-ir-financial-filters:not(.show){display:block}}";
const IrFinancialFiltersStyle0 = irFinancialFiltersCss;

const IrFinancialFilters = /*@__PURE__*/ proxyCustomElement(class IrFinancialFilters extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.fetchNewReports = createEvent(this, "fetchNewReports", 7);
    }
    isLoading;
    collapsed = false;
    filters;
    baseFilters = {
        date: hooks().format('YYYY-MM-DD'),
        sourceCode: '001',
    };
    fetchNewReports;
    componentWillLoad() {
        this.filters = { ...this.baseFilters };
    }
    applyFiltersEvt(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.fetchNewReports.emit(this.filters);
    }
    resetFilters(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.filters = { ...this.baseFilters };
        this.fetchNewReports.emit(this.filters);
    }
    updateFilter(params) {
        this.filters = { ...this.filters, ...params };
    }
    render() {
        return (h("div", { key: '54bcbce4fbd1c8f2deade9e829b227373b1d1aa7', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: 'ee65fdb5012bfb1fbeab542992e8e59283fce7a0', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '39753a3b3dcf4536ad19168b67bcbba4fbdec428', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: 'd902224a4f23bad7beb0916836c58cf8b4a1aec0', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '32235f054e3717c487c0af8782dcad9141ad9e79', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: 'd1d55ee928b8d30193532524e2a228dd250272a7', class: "m-0 p-0 flex-grow-1" }, locales.entries?.Lcz_Filters)), h("ir-button", { key: '1716a4adf538b72f2f27fee408e14f6433e46e37', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: 'ffa19074756f1851f3d9f97e65265f2c8729d97b', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, h("div", { key: 'ed90a6f741cfea807c0f4a089e594e9b7b84bf7f', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '2ce42c1eb26404687d0b2c7adc7f19258e2d2231', class: "pt-1 filter-group" }, h("label", { key: 'be00dd45e6a1aaa6f75dd9c8e1c9c14fe5329016', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), h("div", { key: 'fd9913a15a86541b89a93d28fa75ba141da78e47', class: "w-100 d-flex" }, h("style", { key: '639408a7a9acb2203248a6ad440bacccfff6deb1' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), h("ir-date-picker", { key: '7b7b5ad9167751e744b6eb2c5150b9027cf31a9a', "data-testid": "pickup_date", date: this.filters?.date, class: "w-100", emitEmptyDate: true, maxDate: hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: evt.detail.start?.format('YYYY-MM-DD') });
            } }, h("input", { key: '94c9aaedb69f9a9fc4af344bee6e6407a3a2a426', slot: "trigger", type: "text", value: this?.filters?.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), h("fieldset", { key: '670417fd42e38adea67b9cbed274be4c2bfd1804', class: " filter-group" }, h("label", { key: '219b6b58d123f9963f7535c32c88f2d217d039f5', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Users"), h("ir-select", { key: '2bf8b3cd35bffe79674dc4e36a68694c602229e9', selectedValue: this.filters?.sourceCode, selectId: "rooms", firstOption: "All", onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), h("div", { key: '4e32ba25a40939a9cf954871e19b21f5a9b2ce1e', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '664837551d99e4995046d697a6631716803556f2', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '2cdaa7205423b03cb044537303999fb38a95b80d', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
    static get style() { return IrFinancialFiltersStyle0; }
}, [2, "ir-financial-filters", {
        "isLoading": [4, "is-loading"],
        "collapsed": [32],
        "filters": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-financial-filters", "ir-button", "ir-date-picker", "ir-icons", "ir-select"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-financial-filters":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrFinancialFilters);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-icons":
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

export { IrFinancialFilters as I, defineCustomElement as d };

//# sourceMappingURL=ir-financial-filters2.js.map