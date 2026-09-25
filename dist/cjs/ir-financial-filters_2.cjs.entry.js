'use strict';

var index = require('./index-CQkpA5n3.js');
var moment = require('./moment-CdViwxPQ.js');
var t = require('./t-C54QV4_c.js');
var calendarData = require('./calendar-data-HgC39-BR.js');
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
        return (index.h("div", { key: '4096d42a593af86d482fa0fb083f12f6cebcc590', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, index.h("div", { key: 'e3b91dd624ce7327b6b188ae95b994c270a7a11b', class: "d-flex align-items-center justify-content-between sales-filters-header" }, index.h("div", { key: '2501cffc69e5c8eea2b3d4f8f2cddc90fc2ec36d', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: 'b03f9e65c3867b1740d3bd966ba13924b23e75be', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: 'e5aaee711a1b9beb12934164f4b928f8a9402f3d', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: '75b85c117be4688908d3fffa12cd50b696617695', class: "m-0 p-0 flex-grow-1" }, t.t('Lcz_Filters', { fallback: 'Filters' }))), index.h("ir-button", { key: '5fb59aa5ff16d9916cfda592f5fe44b6523a915b', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "ir-me-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), index.h("div", { key: '24badc04b748264ed9339ac3ddec5453bd8c135b', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, index.h("div", { key: '5001201ff9487888152ff724a2a3d05907e74a19', class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("fieldset", { key: 'df011de4e093284946897c72c099450283ebe1fa', class: "pt-1 filter-group" }, index.h("label", { key: 'aef9620c4465ee8d354018207b0467e5d9a22e80', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, t.t('Lcz_SelectADate', { fallback: 'Select a date' })), index.h("div", { key: '348e1f51dcad6d70b1fa9a89c845032c37a6604e', class: "w-100 d-flex" }, index.h("style", { key: 'c4fff0bc0dcfefa83f7bfd859d34447126779e02' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), index.h("ir-date-picker", { key: '1bd738d6f8d61235569ae318df4ddcd0ecda2c8c', "data-testid": "pickup_date", date: this.filters?.date, class: "w-100", emitEmptyDate: true, maxDate: moment.hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: evt.detail.start?.format('YYYY-MM-DD') });
            } }, index.h("input", { key: '3bbd561558869f91544f5dc5ab40ad3a6ae06e44', slot: "trigger", type: "text", value: this?.filters?.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  ir-text-start`, style: { width: '100%' } })))), index.h("fieldset", { key: '940db636e405695e48228fa01bf4f19712b1f80c', class: " filter-group" }, index.h("label", { key: 'fc15081f32ac085f9d9cd5f80bb10503e35e27c7', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, t.t('Lcz_Users', { fallback: 'Users' })), index.h("ir-select", { key: '6edbec880971f127a62632d78041ee3443a24ecf', selectedValue: this.filters?.sourceCode, selectId: "rooms", firstOption: "All", onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), index.h("div", { key: '8cd106e50306a6193dc72b69986562618f0ff0e8', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, index.h("ir-button", { key: '49d5b2f92beb820b130ff4ba935a7936d2b39336', btn_type: "button", "data-testid": "reset", text: t.t('Lcz_Reset', { fallback: 'Reset' }), size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: 'd1d339c650ca24d59de0ce155783259e6686306f', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: t.t('Lcz_Apply', { fallback: 'Apply' }), size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
        return (index.h("div", { key: '72c1735b721c145dc63c700f9dc4d7be89384950', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, index.h("table", { key: '0f74e7bfdaa49bd26ce23fdd307ebef58bf36485', class: "table", "data-testid": "hk_tasks_table" }, index.h("thead", { key: 'e2852bc5df2885192e642d997eb954d0b079d347', class: "table-header" }, index.h("tr", { key: '8876162a67dead8b7a708524a07497783ef31aa7' }, index.h("th", { key: '89d1767590e9f4e8f407221c3029d6fd28feaf2c', class: "text-center" }, t.t('Lcz_DateLabel', { fallback: 'Date' })), index.h("th", { key: 'c625bd0cd5a0983ce036037b47e1829e0bd425fe', class: "text-center" }, "Booking"), index.h("th", { key: '2bfc96c4678e83efb5efb7b0f8c3fe68f89451e7', class: "text-center" }, t.t('Lcz_ByDirect', { fallback: 'By direct' })), index.h("th", { key: '88d402c4da6f47b6f09d221baefe22682e5bdcdf', class: "ir-text-end" }, t.t('Lcz_Amount', { fallback: 'Amount' })), index.h("th", { key: 'eea8f4b6e697f16453fb413589212795680edb1c', class: "text-center" }))), index.h("tbody", { key: 'cad2a70dab7c2b246d3c4fb37321163395d508f5' }, index.h("tr", { key: '2e69b14c46a84fa91c328a58e7220b5f109de428', class: "ir-table-row" }, index.h("td", { key: '2e9ddb92e01b6bb7f4acf5384721f024edbd3076', class: "text-center" }, "1"), index.h("td", { key: '496cba6293a09b854f57ce41007d84be7f46996e', class: "text-center" }, index.h("ir-button", { key: 'c6e924f2db9629adf844b6310e55a81b33f08a58', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), index.h("td", { key: '1b365c9dc3fd5482b5eb44b1b37830b106534097', class: "text-center" }, "1"), index.h("td", { key: 'e590b4dfb2e52bf79464180d3371fd8d9a18d0df', class: "ir-text-end" }, "1"), index.h("td", { key: 'effb5f9519777b06244044ddc5fe95a8472d0eba' }, index.h("ir-button", { key: 'f0bfd6eb445cb01919a006ba1fdbc8b8f0b8a5e8', size: "sm", text: t.t('Lcz_Pay', { fallback: 'Pay' }), onClickHandler: () => {
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
