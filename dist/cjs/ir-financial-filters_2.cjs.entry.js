'use strict';

var index = require('./index-CQkpA5n3.js');
var moment = require('./moment-CdViwxPQ.js');
var t = require('./t-wyGILxEL.js');
var calendarData = require('./calendar-data-Br2L_0sg.js');
require('./locale-scope-C7rmpwuA.js');

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
        return (index.h("div", { key: '77bf1db3ef618a1def04b9180054b9d275eed1c4', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, index.h("div", { key: 'f0670314c286d8b4e4bc799160fe0434c98e4a2b', class: "d-flex align-items-center justify-content-between sales-filters-header" }, index.h("div", { key: '4b18610f0cb3f0ead8e71c4bfb03452b0dd80c84', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: 'df317cd8ce277d91cda448ddc1a6ab1dd58a5df3', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: 'd0067dccc943efb976f90e5015bdbd3ee7247d06', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: 'cfab87c721f29eed811c8eae89739f5135758b0a', class: "m-0 p-0 flex-grow-1" }, t.t('Lcz_Filters', { fallback: 'Filters' }))), index.h("ir-button", { key: '28afe76d8c8695aeae22a7fdbfe0b3f2c47b946a', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "ir-me-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), index.h("div", { key: 'aa2177cad1fa3d0a36cec0d92a29660283ea7805', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, index.h("div", { key: '1e314eefbd40565ebe10c14b0019d75c41cd9079', class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("fieldset", { key: '2867b84bfd729d4b5ffca036df6ef940c4cd305e', class: "pt-1 filter-group" }, index.h("label", { key: '9eb33b4abb6778d61bf756ae2437fb1ddb762015', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, t.t('Lcz_SelectADate', { fallback: 'Select a date' })), index.h("div", { key: '3f7eb77d4ee4a68bcefe7a91752a721a36a45bc5', class: "w-100 d-flex" }, index.h("style", { key: '5d51e079700c63835dc386862aa85c200502bdcf' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), index.h("ir-date-picker", { key: '0c3d0ba4f2f9f8ab23a60644eadc86f01a77a193', "data-testid": "pickup_date", date: this.filters?.date, class: "w-100", emitEmptyDate: true, maxDate: moment.hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: evt.detail.start?.format('YYYY-MM-DD') });
            } }, index.h("input", { key: '7bb06f616670f142d535f5a9a73213942bd9d2ec', slot: "trigger", type: "text", value: this?.filters?.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  ir-text-start`, style: { width: '100%' } })))), index.h("fieldset", { key: '4273e836fa27e64e55a0da9f47e5af21ee1e17f9', class: " filter-group" }, index.h("label", { key: 'e76a274c3e7c4b773a61b8d1d47209a80bf44671', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, t.t('Lcz_Users', { fallback: 'Users' })), index.h("ir-select", { key: '9801c45bacaeb6e47892a35853cc2f7a1d6a37d0', selectedValue: this.filters?.sourceCode, selectId: "rooms", firstOption: t.t('Lcz_All', { fallback: 'All' }), onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), index.h("div", { key: '53712c7d5c35b07a62176c174e5d4a80897e1002', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, index.h("ir-button", { key: 'cde9dbb3afb2272e3d9cb97e38ab00aaf73da3af', btn_type: "button", "data-testid": "reset", text: t.t('Lcz_Reset', { fallback: 'Reset' }), size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: 'afad8b65d699e6b85aa724e1bb9d29764497c63e', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: t.t('Lcz_Apply', { fallback: 'Apply' }), size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
        return (index.h("div", { key: '9cfa1a491fa9a53b30234f762f022ab5f6435825', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, index.h("table", { key: 'a485fe3681a9f3936e8cad4a2207073d6e793e5a', class: "table", "data-testid": "hk_tasks_table" }, index.h("thead", { key: '55359853f163113f748eb885df89f11e76a396bf', class: "table-header" }, index.h("tr", { key: '762e874395f0920c510fabc9acb2edfe8fcf07c1' }, index.h("th", { key: 'c4c47eabbc8225a8962edab4c6e439f73aaa1bef', class: "text-center" }, t.t('Lcz_DateLabel', { fallback: 'Date' })), index.h("th", { key: '7014d3f29653ca2c6aa6b69e26dc934d6788205b', class: "text-center" }, t.t('Lcz_Booking', { fallback: 'Booking' })), index.h("th", { key: '31ceb88a655affbee106e4524ec7e25dd2cc1463', class: "text-center" }, t.t('Lcz_ByDirect', { fallback: 'By direct' })), index.h("th", { key: '16ef83edadd4c048bdb54ff1084cddbb7ecce8ac', class: "ir-text-end" }, t.t('Lcz_Amount', { fallback: 'Amount' })), index.h("th", { key: '32da9e3fd9a776714441490e22df442922d8b569', class: "text-center" }))), index.h("tbody", { key: '95d1f512d105bdf0b2887197d4ae3f55566e0b02' }, index.h("tr", { key: 'ce48522be07b02dd776f59c53f7b42db6596eb61', class: "ir-table-row" }, index.h("td", { key: '98165bae1603ed942b34d05f853e4c8109a7d6ea', class: "text-center" }, "1"), index.h("td", { key: '6759de4d65208a0f64bd4052f8d6d973c60539ae', class: "text-center" }, index.h("ir-button", { key: '7c23cf26d9cd0eeaec28a0997e8bd2a6c02f2754', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), index.h("td", { key: '136c9ae8db76f4aac199d759304a7630c6f5c63f', class: "text-center" }, "1"), index.h("td", { key: '50612b8b8714d3fea399ef8a342773c040bcf182', class: "ir-text-end" }, "1"), index.h("td", { key: '89041cfc4a774b14ae1dab66e48197fa5f2215a2' }, index.h("ir-button", { key: '31fcc60846ac7a746ee88aa203c1f3b5e3227292', size: "sm", text: t.t('Lcz_Pay', { fallback: 'Pay' }), onClickHandler: () => {
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
