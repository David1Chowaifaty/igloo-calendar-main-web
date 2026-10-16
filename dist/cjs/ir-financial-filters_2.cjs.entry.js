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
        return (index.h("div", { key: 'e9f7b98cc860df102083c98c075be9e690d99068', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, index.h("div", { key: 'b369a4c993679c03c0c2b8b40e364bd52461f4a6', class: "d-flex align-items-center justify-content-between sales-filters-header" }, index.h("div", { key: '8993dca6f53fef093576d82b2f3f265dd26b866e', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: 'ce3e81a5a9410c06577b19fdf989a5e4a33ecbdc', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: '053ed9e375aaedd7472f333fe3b6d94855b43cfd', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: '5f00fdd482c41e9b9e270dfe5713b20eb8da3db7', class: "m-0 p-0 flex-grow-1" }, t.t('Lcz_Filters', { fallback: 'Filters' }))), index.h("ir-button", { key: 'ef4975e8d62db0e15d3af9cf9ee5efa82bcdabee', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "ir-me-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), index.h("div", { key: '6ab6fb178649009648b5c710bb9325bb18ab8fba', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, index.h("div", { key: 'd8d0c9fc37c66ce29fa1c1b5464ab5ee08053c59', class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("fieldset", { key: '40e3a5fbceb5f6e8654012cd581e8ba0dbf289c1', class: "pt-1 filter-group" }, index.h("label", { key: '4107c710bdb85add193a2df4288a3c535e2ee58b', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, t.t('Lcz_SelectADate', { fallback: 'Select a date' })), index.h("div", { key: '43314c7eb4d0e928ffa7b9f6642f101f2a635686', class: "w-100 d-flex" }, index.h("style", { key: '8a8b6edadc46a846b900ea37ef478b7189756abf' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), index.h("ir-date-picker", { key: '832e88d16c6fc49e698ab24d24588096c494279e', "data-testid": "pickup_date", date: this.filters?.date, class: "w-100", emitEmptyDate: true, maxDate: moment.hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: evt.detail.start?.format('YYYY-MM-DD') });
            } }, index.h("input", { key: '4ec3f524264781a169dd296b268db38d90621f1d', slot: "trigger", type: "text", value: this?.filters?.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  ir-text-start`, style: { width: '100%' } })))), index.h("fieldset", { key: '45ac7c739067fa50957e1628e3cab7044383cae0', class: " filter-group" }, index.h("label", { key: '1c0b6d9ad63694e673f1803c29f68259c452aced', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, t.t('Lcz_Users', { fallback: 'Users' })), index.h("ir-select", { key: '61beaa6d02d706ddbce5eb741854ce233b31658b', selectedValue: this.filters?.sourceCode, selectId: "rooms", firstOption: t.t('Lcz_All', { fallback: 'All' }), onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), index.h("div", { key: '508bc66e790967734e9bc409247a93f8734af49a', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, index.h("ir-button", { key: '8234de58e272d22c2e94194b4c53edc044d5a108', btn_type: "button", "data-testid": "reset", text: t.t('Lcz_Reset', { fallback: 'Reset' }), size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: '3920d3f096308c28e7530af1b8c9d451174c634f', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: t.t('Lcz_Apply', { fallback: 'Apply' }), size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
        return (index.h("div", { key: 'd9de4b8eae3ba405ca1b3dca978c1b6a1153159d', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, index.h("table", { key: '5857c3f5709c89936d42a81a9a1cb413b1902563', class: "table", "data-testid": "hk_tasks_table" }, index.h("thead", { key: '23ecca1c870ac480b3fa7d2e4bcf081a6b5a51cc', class: "table-header" }, index.h("tr", { key: 'f3fc0ee572a1653ac49cc5e6f88d7973f070fa48' }, index.h("th", { key: 'ed949e57145722c1baad766d86771db233a95208', class: "text-center" }, t.t('Lcz_DateLabel', { fallback: 'Date' })), index.h("th", { key: 'b8b4122f0376d88be2abf0751e4ba063da538dba', class: "text-center" }, t.t('Lcz_Booking', { fallback: 'Booking' })), index.h("th", { key: '29fbf42e56b0be2b686044b31f0dc7b485d40022', class: "text-center" }, t.t('Lcz_ByDirect', { fallback: 'By direct' })), index.h("th", { key: 'ef80fb6834e33e4be888ff51222b170e388c4029', class: "ir-text-end" }, t.t('Lcz_Amount', { fallback: 'Amount' })), index.h("th", { key: '445fc3f2204a8e5a1b4fa77e7bbd3a94f99a689d', class: "text-center" }))), index.h("tbody", { key: '8927209b1d879088254783772112deee75dce54c' }, index.h("tr", { key: 'a698ed0c998eef2f484271fda89526161fc27ed3', class: "ir-table-row" }, index.h("td", { key: '0a978390ec33b76b290c98247682355f4fc92445', class: "text-center" }, "1"), index.h("td", { key: '3c8671aee9269791dc7b41193e46f99323273144', class: "text-center" }, index.h("ir-button", { key: '62f902b38f173a7631d0c7939090fb832df2d8e1', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), index.h("td", { key: '3d27ad7fec1fd3b46b78e33d0c3c275bb1c2c6f9', class: "text-center" }, "1"), index.h("td", { key: '231102ac6e3e1165d6a802c7fc3b7d184e5eea12', class: "ir-text-end" }, "1"), index.h("td", { key: '35e0cdfd2b31553ab2c47a8fbae5f24aad16b952' }, index.h("ir-button", { key: '9a15090df2111781ca1ef440d892b0f06745d706', size: "sm", text: t.t('Lcz_Pay', { fallback: 'Pay' }), onClickHandler: () => {
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
