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
        return (h("div", { key: 'd425af5b744803bf9e635c18952bc66f80e0142d', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '80d6f34b3ba7142f4ac641b5dc7faca3dfac88f8', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: 'aa2723d53b5e2327928ff971f036c55fcb9fca8d', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: 'a998e101b9d49ca3bd0d9006ae63725cf3c5fb7e', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'b3c51d15b0628bbf5964a6f577388b48bf048901', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '0b3ebdb844bb54b3061606e42d4fc516efff0c25', class: "m-0 p-0 flex-grow-1" }, locales.entries?.Lcz_Filters)), h("ir-button", { key: '893eed614c5fdfdd37bf7221154ee377e4ccb281', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '26f9824ca018c844a390d27108609e0d2c046a77', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, h("div", { key: '17fb97dd7a0d2b357f3e19ba21eeb07e52a73c96', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '6ea3b4ea3c6b0c5f5cbc96e1f1b306bae5c5e971', class: "pt-1 filter-group" }, h("label", { key: '95902742d217229ed44b0ef0e09f9108854930b5', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), h("div", { key: 'eee226feec07ae7fd6c4cee56094d2aa202c4a69', class: "w-100 d-flex" }, h("style", { key: '916dd8cd5f9cea70d9f51dac1b5ace6a4ceedfda' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), h("ir-date-picker", { key: '32c2ce9d0fd3d73c6004183dd3d4884552cd9ecd', "data-testid": "pickup_date", date: this.filters?.date, class: "w-100", emitEmptyDate: true, maxDate: hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: evt.detail.start?.format('YYYY-MM-DD') });
            } }, h("input", { key: '6bcc695a023865b5b95389e861b9672a5e51dbdd', slot: "trigger", type: "text", value: this?.filters?.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), h("fieldset", { key: '93547d3a6dfa1dd29b5974928bd51829067bf0ef', class: " filter-group" }, h("label", { key: '201cef3bac1c80abbbaa87f4b004f3892c0aa3ba', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Users"), h("ir-select", { key: '4af6ccce2a3aa287862f8dd789453144f04334b2', selectedValue: this.filters?.sourceCode, selectId: "rooms", firstOption: "All", onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), h("div", { key: '42813501ebb308119a498d53fcaef7125023dd0a', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: 'af8a8933cc10ade089dac22d336ec979a0c46532', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: 'db37b82ad51b183acbcf005501a5a354787cdf71', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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