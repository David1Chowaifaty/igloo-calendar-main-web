import { r as registerInstance, a as createEvent, h } from './index-7b3961ed.js';
import { h as hooks } from './moment-ab846cee.js';
import { l as locales } from './locales.store-daef23cc.js';
import './index-17663a35.js';

const irFinancialFiltersCss = ".sc-ir-financial-filters-h{display:block}.financial-filter__date-picker-icon.sc-ir-financial-filters{position:absolute;inset:0;left:0.75rem;display:flex;align-items:center;width:fit-content;transform:translateY(-0.15rem)}.sc-ir-financial-filters-h{display:block;height:100%}@media (min-width: 768px){.sc-ir-financial-filters-h{width:300px}.collapse-btn.sc-ir-financial-filters{display:none}#financialFilterCollapse.collapse.sc-ir-financial-filters:not(.show){display:block}}";

const IrFinancialFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("div", { key: '8ca2d16820183b1a7fcb37f2269d116583c9d049', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: 'f36bdbcdaa84f38036618fb099c432d423d6dfa0', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '6f26741fbb84408c5c85588fb377a9df7f5b838b', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '52766bed7312334fb61c34c65d906277dad9833b', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'd6a310fa5082ea9989390966f6b8853a609a41de', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '524275a08e4173d3919815d278b00f4f000ce599', class: "m-0 p-0 flex-grow-1" }, locales.entries?.Lcz_Filters)), h("ir-button", { key: '832e8697a727bfc1dd9af07ccaf4e4aeb6458372', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '284fb42b268a361bd58ccec653ee3a85378eda77', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, h("div", { key: 'eee24508d0660cb11326678724fdcabfca59f03d', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: 'e9dfbc92da420f4775a993c65557eef4640e7b5c', class: "pt-1 filter-group" }, h("label", { key: '2b29b5bb9d1632c0799def458b812d666bc54455', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), h("div", { key: '66749328a8535dceaa8b8fe1f05e4efd3cddf592', class: "w-100 d-flex" }, h("style", { key: '03210ffb630a054b0f261062082dcb421d6444f3' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), h("ir-date-picker", { key: 'c25891a27c67fdc7862b19a1a53448a05671dcb6', "data-testid": "pickup_date", date: this.filters?.date, class: "w-100", emitEmptyDate: true, maxDate: hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: evt.detail.start?.format('YYYY-MM-DD') });
            } }, h("input", { key: '7f2d7ab80b83541950472278fc9445c40634412e', slot: "trigger", type: "text", value: this?.filters?.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), h("fieldset", { key: '3897a0885a9891483928348486c98008328080bc', class: " filter-group" }, h("label", { key: 'f52f89dbe549d29a2d3e299278630d23a731f7a5', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Users"), h("ir-select", { key: '1fc4e6fbd775ef4f4e0a0eb496d17dfb2ab42615', selectedValue: this.filters?.sourceCode, selectId: "rooms", firstOption: "All", onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), h("div", { key: 'ee1c75044a1b5603df2a387d8f6bcdcecd1ca2b8', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '1f4b9dc78fe76d4ae70a6eabb8e1054199543dd9', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '7a0779e0a7ff0f197a08c5a7e0fe94a38cfb5568', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
};
IrFinancialFilters.style = irFinancialFiltersCss;

export { IrFinancialFilters as ir_financial_filters };

//# sourceMappingURL=ir-financial-filters.entry.js.map