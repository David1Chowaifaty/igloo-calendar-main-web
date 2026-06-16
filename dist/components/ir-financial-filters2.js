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
        return (h("div", { key: '70d02592998098f818833ce8f99127d0b7a9a452', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '9c91d28ff5bcf76f4ee52d91e008cc4a539240a1', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '07e3d1ce8f4285de19a8565ad9bfcb5e3a8bf70b', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '29a4b5c45d0777e95fa8798bcb1d70a6c98e8e13', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'd6a61c57f661087acbfef76e226d924e51dbf353', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '0051ec7360bffa52ced1a0725d06111ca1304cc0', class: "m-0 p-0 flex-grow-1" }, locales.entries?.Lcz_Filters)), h("ir-button", { key: '0e20f036de55e45e6b87d646ea58c2796fb4df28', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '5c6395c9eb37ebc3143f2002c3e4500606e918f6', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, h("div", { key: 'ad19e1155a3f1a3ad8128e1424a22a7da729bbfa', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '06d0312ee6be5533a8055a6c52b5df8b4c7c3dfe', class: "pt-1 filter-group" }, h("label", { key: '5e17be78767ec45832a673ee85328146e15128bc', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), h("div", { key: 'b7ee7a3a70e9aed74d869dc0068f5dc008a77870', class: "w-100 d-flex" }, h("style", { key: '719ddb0f2d7a2731b3f29a1395672b5fea878570' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), h("ir-date-picker", { key: 'c49a339010d0fc884cc05a85ff5f2b1543965621', "data-testid": "pickup_date", date: this.filters?.date, class: "w-100", emitEmptyDate: true, maxDate: hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: evt.detail.start?.format('YYYY-MM-DD') });
            } }, h("input", { key: 'eb8906786149952c228043dd752e9c09a64c8100', slot: "trigger", type: "text", value: this?.filters?.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), h("fieldset", { key: '17d171ccf621b9b4fbb2e68a416f27dfa3a25188', class: " filter-group" }, h("label", { key: '65b14e75c0179945721026e63a6ad6ce11e36c0c', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Users"), h("ir-select", { key: '4e5e180a36bac8a83383bf19f21044b64544b7d1', selectedValue: this.filters?.sourceCode, selectId: "rooms", firstOption: "All", onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), h("div", { key: '0688c3a85d1b3784ad6310412d73ea39dfda9204', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '2e851e41e9c08ddf139c301c51d9a67171aefffc', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: 'd0d397c47ca40f42652d2d640dd41acae391590c', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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