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
        return (index.h("div", { key: 'f66711099fa4382b670eda56c27a7e4112b6afcf', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, index.h("div", { key: 'c05d2acb0742a237190c3a4ad9abc8d653f87675', class: "d-flex align-items-center justify-content-between sales-filters-header" }, index.h("div", { key: '7cdc9f6bca9e979ace6eae2ad5fc5eb06a876991', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: '3ba3f459defbf707a0aae96c155e12c1223c5879', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: 'd024b517b9c12edcf715e13dd2cf706175892894', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: 'ee5632fc617948caf3270cd45c8dd193053ea6c0', class: "m-0 p-0 flex-grow-1" }, locales_store.locales.entries?.Lcz_Filters)), index.h("ir-button", { key: '8769689eee58135447653cbb10c3e01f9ad6cfd1', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), index.h("div", { key: 'd36f3cbdde3416f59e34424cd60310caa1b2386d', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, index.h("div", { key: '8d7f6137dd98ce53fa03ecd38354bfcae04b89ff', class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("fieldset", { key: '0ef4def5e8662e06174486520e4e2bcd4f963410', class: "pt-1 filter-group" }, index.h("label", { key: '6e97b95ed45135f63c90467cd9a444572cf1b050', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), index.h("div", { key: 'acbce11703f01a044e1cc27c81c00dd7dad8dd98', class: "w-100 d-flex" }, index.h("style", { key: 'cf7f383cd4c92961eacca85af61feb1920594798' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), index.h("ir-date-picker", { key: '8b2a6efb432148be49feb0626fd3d0be2f96bf9d', "data-testid": "pickup_date", date: this.filters?.date, class: "w-100", emitEmptyDate: true, maxDate: moment.hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: evt.detail.start?.format('YYYY-MM-DD') });
            } }, index.h("input", { key: '5a03e118dc5df2f07a8a7eb8c1973b143b5f45c2', slot: "trigger", type: "text", value: this?.filters?.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), index.h("fieldset", { key: '8d315fc36b57ba1cfa9c9605d0d58e99c4931041', class: " filter-group" }, index.h("label", { key: 'bcf5c607a3119decf32c8a75176d23214bc0fe22', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Users"), index.h("ir-select", { key: 'f695cfd5fd47de369ab876709c14c7769281adce', selectedValue: this.filters?.sourceCode, selectId: "rooms", firstOption: "All", onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), index.h("div", { key: '9e4874bf8614365cc809caed123c403f68061eb4', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, index.h("ir-button", { key: '01d83edbf579fd09b85f84f584c1695f3fc0b60f', btn_type: "button", "data-testid": "reset", text: locales_store.locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: '2591d846c87212ad00f24d7c1eee52fcc75b1a60', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales_store.locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
        return (index.h("div", { key: 'b2eef5f93315eb1e317bbde6a41a58ff4dfa370c', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, index.h("table", { key: 'cea7364efd28604a94fcb4e71d05bd1437ec195e', class: "table", "data-testid": "hk_tasks_table" }, index.h("thead", { key: '05cd45d8e8089b7b8ce0774a66a1540d75e2c367', class: "table-header" }, index.h("tr", { key: '3306c72a3a5bc0427d5fd6e93db6466420b9b39a' }, index.h("th", { key: '62683edd998b0b7125c4993feeec47491ab3b21a', class: "text-center" }, "Date"), index.h("th", { key: 'b147c29319775f7ec871bff78d73cee0ad68acb3', class: "text-center" }, "Booking"), index.h("th", { key: '52de2ef3dea61023e44ff9b1be03be1d960c3235', class: "text-center" }, "By direct"), index.h("th", { key: '51cd4df7c25c24fa0d1121b3d7111ddc33add471', class: "text-right" }, "Amount"), index.h("th", { key: 'd6d3f7a082aaaf1445fa5641debdaa72e1ce1009', class: "text-center" }))), index.h("tbody", { key: '62ac3265bf25091b898d654a65650f02ede7f6ab' }, index.h("tr", { key: '8d2aa411481dc58b7d516384916b994c2f68fa82', class: "ir-table-row" }, index.h("td", { key: '6d3f036580e577a97171eefae51c54219816bf1e', class: "text-center" }, "1"), index.h("td", { key: 'bc0d119dd77b57908a539c1d6977910456b3b6d2', class: "text-center" }, index.h("ir-button", { key: '43d0671a622b245f94b0f7cb8c7a84bc272833a1', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), index.h("td", { key: '2de1c850b7be1e8c76d31790f650e5473a608a52', class: "text-center" }, "1"), index.h("td", { key: 'f9c27dc683946f4f9495650c2f57539183e22ddc', class: "text-right" }, "1"), index.h("td", { key: 'c621706083cf3dd162b09eeb9a4d8bbbfa8c8a0f' }, index.h("ir-button", { key: '22fb3f305fa11bafe550e6b6889f70f9491840f8', size: "sm", text: "Pay", onClickHandler: () => {
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