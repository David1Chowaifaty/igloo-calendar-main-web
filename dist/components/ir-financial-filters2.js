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
        return (h("div", { key: '13b3f92ec185d60cce9e8d804da5547c943a953b', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '050a26df3afe80900ed89b94e5baa5d57357ba99', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '28707a6424635e9d88f42b69221c9d0a99a97f24', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '252a77c07f33b0e27e200986692a80c3d17c99b5', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'ba284f6dec3e0ef7e0b9a022b4f58568f54c7ad1', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: 'c8ff069588e8eb645ca690bd3d183c57416507f3', class: "m-0 p-0 flex-grow-1" }, locales.entries?.Lcz_Filters)), h("ir-button", { key: '7cd2c5c4809d2a55bbb8803d5cabf4f5fb95d0c1', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: 'cef7a80f8a88e1275e038661c089aa214eb77029', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, h("div", { key: '7ffaac7997a4b7e43b6cba948886892bbb43d891', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: 'a1be1669a3b8df064224080f0c8726bb63f67e02', class: "pt-1 filter-group" }, h("label", { key: '294daf3413fb0d65ff554369558677794151a14e', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), h("div", { key: '61427ca83aa6295d14d864346c0eaf86c1732195', class: "w-100 d-flex" }, h("style", { key: '8aa7af0a36340c8b8de111988ecaf8668258b98b' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), h("ir-date-picker", { key: '60844524eeb9b1f078b3569ee28032d8a12102de', "data-testid": "pickup_date", date: this.filters?.date, class: "w-100", emitEmptyDate: true, maxDate: hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: evt.detail.start?.format('YYYY-MM-DD') });
            } }, h("input", { key: '151f4b9e7c68761de28f593887300bcc50c5572c', slot: "trigger", type: "text", value: this?.filters?.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), h("fieldset", { key: '2afb7604981d4fa30ceef2ae72a1b4929816a8b6', class: " filter-group" }, h("label", { key: '27c2376c6d59baf8546ba9ee4ddea891ddcf99e1', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Users"), h("ir-select", { key: 'bd072cd8a7aa82e048365426e175dee725bc33b4', selectedValue: this.filters?.sourceCode, selectId: "rooms", firstOption: "All", onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), h("div", { key: 'ac9f21b9f75e31fd68b02ecb308cfda5954ac2f6', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: 'f890db7563008121822110476dd0c04d583c03c4', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '02f3afa76cfaaba1444181757eeb267fd9e4b979', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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