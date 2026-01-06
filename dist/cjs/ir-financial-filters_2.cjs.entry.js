'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const moment = require('./moment-1780b03a.js');
const locales_store = require('./locales.store-32782582.js');
const calendarData = require('./calendar-data-0598de26.js');
require('./index-fbf1fe1d.js');

const irFinancialFiltersCss = ".sc-ir-financial-filters-h{display:block}.financial-filter__date-picker-icon.sc-ir-financial-filters{position:absolute;inset:0;left:0.75rem;display:flex;align-items:center;width:fit-content;transform:translateY(-0.15rem)}.sc-ir-financial-filters-h{display:block;height:100%}@media (min-width: 768px){.sc-ir-financial-filters-h{width:300px}.collapse-btn.sc-ir-financial-filters{display:none}#financialFilterCollapse.collapse.sc-ir-financial-filters:not(.show){display:block}}";
const IrFinancialFiltersStyle0 = irFinancialFiltersCss;

const IrFinancialFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.fetchNewReports = index.createEvent(this, "fetchNewReports", 7);
    }
    isLoading;
    collapsed = false;
    filters;
    baseFilters = {
        date: moment.hooks().format('YYYY-MM-DD'),
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
        return (index.h("div", { key: 'd425af5b744803bf9e635c18952bc66f80e0142d', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, index.h("div", { key: '80d6f34b3ba7142f4ac641b5dc7faca3dfac88f8', class: "d-flex align-items-center justify-content-between sales-filters-header" }, index.h("div", { key: 'aa2723d53b5e2327928ff971f036c55fcb9fca8d', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: 'a998e101b9d49ca3bd0d9006ae63725cf3c5fb7e', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: 'b3c51d15b0628bbf5964a6f577388b48bf048901', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: '0b3ebdb844bb54b3061606e42d4fc516efff0c25', class: "m-0 p-0 flex-grow-1" }, locales_store.locales.entries?.Lcz_Filters)), index.h("ir-button", { key: '893eed614c5fdfdd37bf7221154ee377e4ccb281', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), index.h("div", { key: '26f9824ca018c844a390d27108609e0d2c046a77', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, index.h("div", { key: '17fb97dd7a0d2b357f3e19ba21eeb07e52a73c96', class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("fieldset", { key: '6ea3b4ea3c6b0c5f5cbc96e1f1b306bae5c5e971', class: "pt-1 filter-group" }, index.h("label", { key: '95902742d217229ed44b0ef0e09f9108854930b5', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), index.h("div", { key: 'eee226feec07ae7fd6c4cee56094d2aa202c4a69', class: "w-100 d-flex" }, index.h("style", { key: '916dd8cd5f9cea70d9f51dac1b5ace6a4ceedfda' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), index.h("ir-date-picker", { key: '32c2ce9d0fd3d73c6004183dd3d4884552cd9ecd', "data-testid": "pickup_date", date: this.filters?.date, class: "w-100", emitEmptyDate: true, maxDate: moment.hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: evt.detail.start?.format('YYYY-MM-DD') });
            } }, index.h("input", { key: '6bcc695a023865b5b95389e861b9672a5e51dbdd', slot: "trigger", type: "text", value: this?.filters?.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), index.h("fieldset", { key: '93547d3a6dfa1dd29b5974928bd51829067bf0ef', class: " filter-group" }, index.h("label", { key: '201cef3bac1c80abbbaa87f4b004f3892c0aa3ba', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Users"), index.h("ir-select", { key: '4af6ccce2a3aa287862f8dd789453144f04334b2', selectedValue: this.filters?.sourceCode, selectId: "rooms", firstOption: "All", onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), index.h("div", { key: '42813501ebb308119a498d53fcaef7125023dd0a', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, index.h("ir-button", { key: 'af8a8933cc10ade089dac22d336ec979a0c46532', btn_type: "button", "data-testid": "reset", text: locales_store.locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: 'db37b82ad51b183acbcf005501a5a354787cdf71', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales_store.locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
};
IrFinancialFilters.style = IrFinancialFiltersStyle0;

const irFinancialTableCss = ".sc-ir-financial-table-h{display:block}";
const IrFinancialTableStyle0 = irFinancialTableCss;

const tableCss = ".ir-table-row.sc-ir-financial-table td.sc-ir-financial-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-financial-table{overflow-x:auto}.table.sc-ir-financial-table td.sc-ir-financial-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-financial-table tbody.sc-ir-financial-table tr.sc-ir-financial-table:last-child>td.sc-ir-financial-table{border-bottom:0 !important}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sc-ir-financial-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-financial-table thead.sc-ir-financial-table th.sc-ir-financial-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-financial-table .empty-row.sc-ir-financial-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-financial-table{padding:0.5rem 1rem;position:sticky;bottom:0;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-financial-table td.sc-ir-financial-table{background:#e3f3fa !important}.selected.sc-ir-financial-table td.sc-ir-financial-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-financial-table,.ir-table-row.sc-ir-financial-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-financial-table{text-transform:capitalize}.sortable.sc-ir-financial-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-financial-table:hover td.sc-ir-financial-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.sortable.sc-ir-financial-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-financial-table svg.sc-ir-financial-table{color:var(--blue)}.sticky-column.sc-ir-financial-table{position:sticky !important;right:0;background-color:white}.table--container.sc-ir-financial-table,.data-table.sc-ir-financial-table{height:100%}";
const IrFinancialTableStyle1 = tableCss;

const IrFinancialTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.financialActionsOpenSidebar = index.createEvent(this, "financialActionsOpenSidebar", 7);
    }
    financialActionsOpenSidebar;
    render() {
        return (index.h("div", { key: '5e7179f5e89b0130e990f544c799ddb8cdb2558d', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, index.h("table", { key: 'c5eb21bf6eebcf31a181099d639a584d55f05bf0', class: "table", "data-testid": "hk_tasks_table" }, index.h("thead", { key: '5f6e1233b0967febe4b09ed8eff4027328c5ee20', class: "table-header" }, index.h("tr", { key: '3fee11a612fe3b0d5443f98cdc8217158bf006f5' }, index.h("th", { key: '9540a74d4bceaa0d573c04ddb0232aa6b1dd483b', class: "text-center" }, "Date"), index.h("th", { key: 'f334c746f5e1db0d531312bc461337745f41e454', class: "text-center" }, "Booking"), index.h("th", { key: 'bb3b8e3b7162d8636e02e562df555a3af3ae8839', class: "text-center" }, "By direct"), index.h("th", { key: 'fc4867be6a1826778fee0f716500e83646160b3d', class: "text-right" }, "Amount"), index.h("th", { key: 'bb9ff77e65505afa267d66d36df4804df97dd164', class: "text-center" }))), index.h("tbody", { key: '1362179e97f8e1708c0b787866270b1e87d35dfd' }, index.h("tr", { key: '80d48f7780d0ef8f658e5f49ce24e4d1338336ea', class: "ir-table-row" }, index.h("td", { key: 'ad2837e635555b6ba99ac79a03c62116456af3bd', class: "text-center" }, "1"), index.h("td", { key: 'ca5db66a16f9af056dd32b44995d5582bd6877bf', class: "text-center" }, index.h("ir-button", { key: 'b4b7d9179986658bc925c1ff2d94385721d96f55', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), index.h("td", { key: '2c364cb43647054c4afb8c245661b052e13cf6ae', class: "text-center" }, "1"), index.h("td", { key: 'bfb1d2a6dad08ab7f0b7aeeb10abc91449056b2a', class: "text-right" }, "1"), index.h("td", { key: '5cab846c0b2e866e4544ecb81321c72b1aac6d77' }, index.h("ir-button", { key: '274f1269f92df564a46488384baab617567c8db5', size: "sm", text: "Pay", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'payment',
                    payload: {
                        payment: {
                            id: -1,
                            date: moment.hooks().format('YYYY-MM-DD'),
                            amount: 120,
                            currency: calendarData.calendar_data.currency,
                            designation: '',
                            reference: '',
                        },
                        bookingNumber: 31203720277,
                    },
                });
            } })))))));
    }
};
IrFinancialTable.style = IrFinancialTableStyle0 + IrFinancialTableStyle1;

exports.ir_financial_filters = IrFinancialFilters;
exports.ir_financial_table = IrFinancialTable;

//# sourceMappingURL=ir-financial-filters_2.cjs.entry.js.map