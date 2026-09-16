'use strict';

var index = require('./index-CQkpA5n3.js');
var moment = require('./moment-CdViwxPQ.js');
var t = require('./t-CyRK1btk.js');
var calendarData = require('./calendar-data-UPPAEVR_.js');
require('./locales.store-BMTss6fG.js');

const irFinancialFiltersCss = () => `.sc-ir-financial-filters-h{display:block}.financial-filter__date-picker-icon.sc-ir-financial-filters{position:absolute;inset:0;inset-inline-start:0.75rem;display:flex;align-items:center;width:fit-content;transform:translateY(-0.15rem)}.sc-ir-financial-filters-h{display:block;height:100%}@media (min-width: 768px){.sc-ir-financial-filters-h{width:300px}.collapse-btn.sc-ir-financial-filters{display:none}#financialFilterCollapse.collapse.sc-ir-financial-filters:not(.show){display:block}}.ir-me-1.sc-ir-financial-filters{margin-inline-end:0.25rem}.ir-text-start.sc-ir-financial-filters{text-align:start}`;

const IrFinancialFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.fetchNewReports = index.createEvent(this, "fetchNewReports");
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
        return (index.h("div", { key: '08e8b1c9adea571ec362c757704ca37013264346', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, index.h("div", { key: '2c5dc0e82ffc05d96c370fc5d30918c8c49ab90b', class: "d-flex align-items-center justify-content-between sales-filters-header" }, index.h("div", { key: '780c3b1eec307f82fef95ae409d4aa850ef66941', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: 'ae6377798931a0bea187c91724ceda226c09f32c', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: 'd2d4138765aeea1612b569368bae0b7975943665', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: '927ae95555ad79e736ad6e2588da49a30db2d6c6', class: "m-0 p-0 flex-grow-1" }, t.t('Lcz_Filters', { fallback: 'Filters' }))), index.h("ir-button", { key: 'c76e0cece03ba1ec23ef12be7527c09ecc949dbc', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "ir-me-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), index.h("div", { key: 'f38d38b2a01b1cfb2a7b891000570a58506451d2', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, index.h("div", { key: '29b6be2fc5f05639e36ea2d20f46fdec43047b18', class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("fieldset", { key: '80b5875502b625262c742150aa3a95a54bfad569', class: "pt-1 filter-group" }, index.h("label", { key: 'b6c3bb216493ea5484ae07db1f90132d4b07d671', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, t.t('Lcz_SelectADate', { fallback: 'Select a date' })), index.h("div", { key: 'b4557e055766dfaaf13a2afd61899ce6dd45674b', class: "w-100 d-flex" }, index.h("style", { key: 'edd1aa8d0bd8a68b567c17c5cc470f2056dfdb49' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), index.h("ir-date-picker", { key: '4871fc2e50bb3feac05a6416705ab3162c15a128', "data-testid": "pickup_date", date: this.filters?.date, class: "w-100", emitEmptyDate: true, maxDate: moment.hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: evt.detail.start?.format('YYYY-MM-DD') });
            } }, index.h("input", { key: 'f7289bcb80185613642b4e9c12152427ed5398cc', slot: "trigger", type: "text", value: this?.filters?.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  ir-text-start`, style: { width: '100%' } })))), index.h("fieldset", { key: '3b5b6dac98b0a4842ef32b114299b9b054299138', class: " filter-group" }, index.h("label", { key: '6d4f5d11fcf95899d2edcda862bf0e4054cb363a', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, t.t('Lcz_Users', { fallback: 'Users' })), index.h("ir-select", { key: '3dc0d097131d1556387f6a342d9e6c82be41ce2c', selectedValue: this.filters?.sourceCode, selectId: "rooms", firstOption: "All", onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), index.h("div", { key: '3e0ad8fc5800615e8f2530f036af3404c736c069', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, index.h("ir-button", { key: '96af2f70b575e00bc7d9208583d2636d2229e679', btn_type: "button", "data-testid": "reset", text: t.t('Lcz_Reset', { fallback: 'Reset' }), size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: '0d5e0fe607ed770197359d55122cbe9561d1d08d', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: t.t('Lcz_Apply', { fallback: 'Apply' }), size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
};
IrFinancialFilters.style = irFinancialFiltersCss();

const irFinancialTableCss = () => `.sc-ir-financial-table-h{display:block}.ir-text-end.sc-ir-financial-table{text-align:end}`;

const tableCss = () => `.sc-ir-financial-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-financial-table{overflow-x:auto}.table--container.sc-ir-financial-table,.data-table.sc-ir-financial-table{height:100%}.ir-table-row.sc-ir-financial-table td.sc-ir-financial-table{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-financial-table td.sc-ir-financial-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-financial-table tbody.sc-ir-financial-table tr.sc-ir-financial-table:last-child>td.sc-ir-financial-table{border-bottom:0 !important}.cell--align-start.sc-ir-financial-table{text-align:start !important}.cell--align-center.sc-ir-financial-table{text-align:center !important}.cell--align-end.sc-ir-financial-table{text-align:end !important}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sc-ir-financial-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-financial-table thead.sc-ir-financial-table th.sc-ir-financial-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-financial-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-financial-table,.ir-table-row.sc-ir-financial-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-financial-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sortable.sc-ir-financial-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sortable.sc-ir-financial-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sortable.sc-ir-financial-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-financial-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-financial-table svg.sc-ir-financial-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-financial-table:hover td.sc-ir-financial-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-financial-table:hover td.sc-ir-financial-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-financial-table:active td.sc-ir-financial-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-financial-table td.sc-ir-financial-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-financial-table:hover td.sc-ir-financial-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-financial-table:active td.sc-ir-financial-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-financial-table .empty-row.sc-ir-financial-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-financial-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-financial-table{position:sticky !important;inset-inline-end:0;background-color:var(--wa-color-surface-default, white)}`;

const IrFinancialTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.financialActionsOpenSidebar = index.createEvent(this, "financialActionsOpenSidebar");
    }
    financialActionsOpenSidebar;
    render() {
        return (index.h("div", { key: '151820ea41b9410199ff8030720a77c2fa72449e', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, index.h("table", { key: '312ce4e69009fc52a24aaa72665fd00c69c4c4d0', class: "table", "data-testid": "hk_tasks_table" }, index.h("thead", { key: '6ab6b4e95f3a8d4cf1d3ebda680559d802d9baae', class: "table-header" }, index.h("tr", { key: '495e2611a59f4e456688e33d8d7914222ce2159e' }, index.h("th", { key: '98f165aafabdfb8d8a04669aef0ebae3cc206617', class: "text-center" }, t.t('Lcz_DateLabel', { fallback: 'Date' })), index.h("th", { key: 'd0c2daec2a471b258eb9ac0c65f4b04f0a518433', class: "text-center" }, "Booking"), index.h("th", { key: 'f397e35ee298e7cbb5fc20dbe2ab44bc0ff83ce9', class: "text-center" }, t.t('Lcz_ByDirect', { fallback: 'By direct' })), index.h("th", { key: '789ef85268d78a9384876b4404c6fc8c8617c211', class: "ir-text-end" }, t.t('Lcz_Amount', { fallback: 'Amount' })), index.h("th", { key: '66cf0590c34a8463741f2d609d6cec051c26698a', class: "text-center" }))), index.h("tbody", { key: 'd0a915423178e7248a721fe5b5beb7ac2ff54adc' }, index.h("tr", { key: 'b80e78d780d43a7d22040040269f616bc8eb3ccb', class: "ir-table-row" }, index.h("td", { key: '756a7e3a6cf3cc102c74c1a7d194ca3e9b137f57', class: "text-center" }, "1"), index.h("td", { key: '7d13eb5776f652b36dd119af2242ab4a7f30ebbe', class: "text-center" }, index.h("ir-button", { key: 'bf6e2c55f6c386930c9eca8ec4792143ac863479', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), index.h("td", { key: '4b834f5d3a892b441f775d6b868698fb2979f8bf', class: "text-center" }, "1"), index.h("td", { key: 'a4790bae7e9eb9dc1bac4a2294d42ebc093267bc', class: "ir-text-end" }, "1"), index.h("td", { key: '5a86031b4bcb95876322214058d888d92c80d6a0' }, index.h("ir-button", { key: '301dd52f515618304afead461aa2c47a91e67d55', size: "sm", text: t.t('Lcz_Pay', { fallback: 'Pay' }), onClickHandler: () => {
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
                        booking: null,
                    },
                });
            } })))))));
    }
};
IrFinancialTable.style = irFinancialTableCss() + tableCss();

exports.ir_financial_filters = IrFinancialFilters;
exports.ir_financial_table = IrFinancialTable;
