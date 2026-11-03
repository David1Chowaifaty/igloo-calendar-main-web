'use strict';

var index = require('./index-IDeZZwEK.js');
var moment = require('./moment-CdViwxPQ.js');
var t = require('./t-CqJPQrfm.js');
var calendarData = require('./calendar-data-ShS6b-Ns.js');
require('./locale-scope-Cch-vf1R.js');

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
        return (index.h("div", { key: '1826d18c524d923ece56846d949aca7b28d3f408', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, index.h("div", { key: '690e63a6065189aa77e8c2fc7fdc3461eb294172', class: "d-flex align-items-center justify-content-between sales-filters-header" }, index.h("div", { key: '65e568472097bd060f22160619d4a8c15baa53d8', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: '98ba3c6699055125e8b0b02eeb4270902a47f498', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: '8c8cb322c7f61c4a589542d0a226baa11b1e9162', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: '31db07adf1ea3fa4d00d25f71dedd56b345b1b24', class: "m-0 p-0 flex-grow-1" }, t.t('Lcz_Filters', { fallback: 'Filters' }))), index.h("ir-button", { key: '4481ec33fba8bf55a7645f90842e96233b90675b', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "ir-me-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), index.h("div", { key: '78d3e2bc7be31b5bb9e0564b840b79a5ddf473e1', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, index.h("div", { key: '783794f2fcffd9805bb4f0eff2813622bb25e99c', class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("fieldset", { key: '16c3490ee29cc0e491e339e45a5de8253b3b6e1a', class: "pt-1 filter-group" }, index.h("label", { key: '99ee6271700d1483d16b6e5576df22fd0bbb26db', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, t.t('Lcz_SelectADate', { fallback: 'Select a date' })), index.h("div", { key: '7a9c27b757ee10db322d77f3419325abec9e5827', class: "w-100 d-flex" }, index.h("style", { key: 'c8cc8c975ae6e4dad09e6d75fa651ca3f34aca88' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), index.h("ir-date-picker", { key: '54f61124bd5359d3f1861b71254093cadfd3f947', "data-testid": "pickup_date", date: this.filters?.date, class: "w-100", emitEmptyDate: true, maxDate: moment.hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: evt.detail.start?.format('YYYY-MM-DD') });
            } }, index.h("input", { key: '5cffdb041bcf185c23b9d4efb51ae93a2eccd7e9', slot: "trigger", type: "text", value: this?.filters?.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  ir-text-start`, style: { width: '100%' } })))), index.h("fieldset", { key: 'cb085f418c7f9e514bbcc7ebd08859d12375b3c4', class: " filter-group" }, index.h("label", { key: 'b150102470b5f173700cb2756bb927b70cfa4e64', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, t.t('Lcz_Users', { fallback: 'Users' })), index.h("ir-select", { key: '6540476084a090e8179615a6e2baab9a7aa7f33e', selectedValue: this.filters?.sourceCode, selectId: "rooms", firstOption: t.t('Lcz_All', { fallback: 'All' }), onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), index.h("div", { key: 'a4f094f16436573e3c6aee0a4f2375a3639661ea', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, index.h("ir-button", { key: 'e42dd175078b913b4bf7dab647a80f325557daa0', btn_type: "button", "data-testid": "reset", text: t.t('Lcz_Reset', { fallback: 'Reset' }), size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: '6618a11e28eed7e7d107147734b0fef262cdefae', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: t.t('Lcz_Apply', { fallback: 'Apply' }), size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
        return (index.h("div", { key: '9770a5966cb2c525712f5d1910b9186448d9d27e', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, index.h("table", { key: 'cf74d0bfc9dced13f6fe4e56c132f063af44ae60', class: "table", "data-testid": "hk_tasks_table" }, index.h("thead", { key: 'd71a8ca6d1fbe3ce102022afd317457628f7f25d', class: "table-header" }, index.h("tr", { key: '7d52f0378ca6f563353b951545171b0c627851fc' }, index.h("th", { key: 'ddad351abea4bdcaf2efe60bec0952dd0d11d4bc', class: "text-center" }, t.t('Lcz_DateLabel', { fallback: 'Date' })), index.h("th", { key: 'e6531e37639528efd32e5f9e39caf2e61b263151', class: "text-center" }, t.t('Lcz_Booking', { fallback: 'Booking' })), index.h("th", { key: 'e60701cc129aa48cb6ea305d41c29a3ac92f08c7', class: "text-center" }, t.t('Lcz_ByDirect', { fallback: 'By direct' })), index.h("th", { key: '9dd99dba3cdd24ce3d214122bba37b83692538df', class: "ir-text-end" }, t.t('Lcz_Amount', { fallback: 'Amount' })), index.h("th", { key: 'ac4f868332bc2ca6f82f174092d93d2314060417', class: "text-center" }))), index.h("tbody", { key: '1d33291a72455ada97306c48fac7dda78e06b504' }, index.h("tr", { key: '3b136b61694e48dbe8ecb412b09f21c17f9ab952', class: "ir-table-row" }, index.h("td", { key: 'ff281ec84ee10ff32fbb1a27278e364242cf49a2', class: "text-center" }, "1"), index.h("td", { key: '69dc2fb96a5e9b00c3f338353f2217ab7c53b567', class: "text-center" }, index.h("ir-button", { key: '973f22e7bc96fb2be87fc2ff4c1fef871ef71463', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), index.h("td", { key: '0f564895d06ec310df38a129651eee3f7fda9e89', class: "text-center" }, "1"), index.h("td", { key: '9fd21aee23a44f68cacb4b1769caf58fe9ef3b1b', class: "ir-text-end" }, "1"), index.h("td", { key: 'd113c64e8b8a67b019f249a70e3eefeed57728ac' }, index.h("ir-button", { key: '7964a03cf2332742949ec72a701269c549a8359d', size: "sm", text: t.t('Lcz_Pay', { fallback: 'Pay' }), onClickHandler: () => {
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
