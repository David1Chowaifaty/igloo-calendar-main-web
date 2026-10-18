import { r as registerInstance, c as createEvent, h } from './index-DKZeCK8T.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { t } from './t-Bvz1wS_D.js';
import { c as calendar_data } from './calendar-data-D4DbXAhg.js';
import './locale-scope-Jre4lb6k.js';

const irFinancialFiltersCss = () => `.sc-ir-financial-filters-h{display:block}.financial-filter__date-picker-icon.sc-ir-financial-filters{position:absolute;inset:0;inset-inline-start:0.75rem;display:flex;align-items:center;width:fit-content;transform:translateY(-0.15rem)}.sc-ir-financial-filters-h{display:block;height:100%}@media (min-width: 768px){.sc-ir-financial-filters-h{width:300px}.collapse-btn.sc-ir-financial-filters{display:none}#financialFilterCollapse.collapse.sc-ir-financial-filters:not(.show){display:block}}.ir-me-1.sc-ir-financial-filters{margin-inline-end:0.25rem}.ir-text-start.sc-ir-financial-filters{text-align:start}`;

const IrFinancialFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.fetchNewReports = createEvent(this, "fetchNewReports");
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
        return (h("div", { key: 'f9db50c6147927197c7ced919f99b5f9b4181a51', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: 'c7e727fced52ad9cceb2b039f68f96ca3e392948', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '75622459a1dec9cc51fe5f710ae122b9ad7428fa', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '3a703194327298a658625fc5d39f99bfef949302', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'f75c173978abc8e559611c4ac29898a9945bd016', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '43ece9556aeff07013f57ad4cc028f316d9916d9', class: "m-0 p-0 flex-grow-1" }, t('Lcz_Filters', { fallback: 'Filters' }))), h("ir-button", { key: '28c2e2447dd811728f7679f805a413d53482fb06', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "ir-me-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '4096a8300feb47288175baa499b48a856b02be32', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, h("div", { key: '5505480989f82e8595bdb1b472e8f1a34d9c8455', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: 'db412c5b32c3634484f83ef2570795e4dfc3de70', class: "pt-1 filter-group" }, h("label", { key: '865b229436918fb2e0576c5b409fc3992f883a7a', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, t('Lcz_SelectADate', { fallback: 'Select a date' })), h("div", { key: '8a3c57c82ed79030e930b9ce7c1e6c859c7c9ae9', class: "w-100 d-flex" }, h("style", { key: '6899391fc973ae5efd614c76d94f991d877b03ce' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), h("ir-date-picker", { key: 'bce5096eec19d64cb8c5e7c276ae6e8610539db8', "data-testid": "pickup_date", date: this.filters?.date, class: "w-100", emitEmptyDate: true, maxDate: hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: evt.detail.start?.format('YYYY-MM-DD') });
            } }, h("input", { key: 'ecd2e5bd3d836130f4c1707ab1c71f1f6b923c60', slot: "trigger", type: "text", value: this?.filters?.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  ir-text-start`, style: { width: '100%' } })))), h("fieldset", { key: 'c17a586de22b98cd288616f2c1db773ef02d5ac1', class: " filter-group" }, h("label", { key: '57ce6a21dac84cb65162c2806b7ec4ed0094fe1f', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, t('Lcz_Users', { fallback: 'Users' })), h("ir-select", { key: '3eb98b43612d2d412327e71bddeae8c193ffa2d7', selectedValue: this.filters?.sourceCode, selectId: "rooms", firstOption: t('Lcz_All', { fallback: 'All' }), onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), h("div", { key: '03c7d535c0bec7457f73adf20123816a3163f2cd', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '59aeabc1187671c6f2767f17fe161c5764d3d285', btn_type: "button", "data-testid": "reset", text: t('Lcz_Reset', { fallback: 'Reset' }), size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '11784abbf19356c54541b93afffab0a3a01ba5dc', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: t('Lcz_Apply', { fallback: 'Apply' }), size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
};
IrFinancialFilters.style = irFinancialFiltersCss();

const irFinancialTableCss = () => `.sc-ir-financial-table-h{display:block}.ir-text-end.sc-ir-financial-table{text-align:end}`;

const tableCss = () => `.sc-ir-financial-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-financial-table{overflow-x:auto}.table--container.sc-ir-financial-table,.data-table.sc-ir-financial-table{height:100%}.ir-table-row.sc-ir-financial-table td.sc-ir-financial-table{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-financial-table td.sc-ir-financial-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-financial-table tbody.sc-ir-financial-table tr.sc-ir-financial-table:last-child>td.sc-ir-financial-table{border-bottom:0 !important}.cell--align-start.sc-ir-financial-table{text-align:start !important}.cell--align-center.sc-ir-financial-table{text-align:center !important}.cell--align-end.sc-ir-financial-table{text-align:end !important}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sc-ir-financial-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-financial-table thead.sc-ir-financial-table th.sc-ir-financial-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-financial-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-financial-table,.ir-table-row.sc-ir-financial-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-financial-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sortable.sc-ir-financial-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sortable.sc-ir-financial-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sortable.sc-ir-financial-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-financial-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-financial-table svg.sc-ir-financial-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-financial-table:hover td.sc-ir-financial-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-financial-table:hover td.sc-ir-financial-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-financial-table:active td.sc-ir-financial-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-financial-table td.sc-ir-financial-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-financial-table:hover td.sc-ir-financial-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-financial-table:active td.sc-ir-financial-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-financial-table .empty-row.sc-ir-financial-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-financial-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-financial-table{position:sticky !important;inset-inline-end:0;background-color:var(--wa-color-surface-default, white)}`;

const IrFinancialTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.financialActionsOpenSidebar = createEvent(this, "financialActionsOpenSidebar");
    }
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '4db9047ebeea7da5932a3e132b7d3dc8192f5b2e', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '2503cae9847672d986435525193b5d2558b8e479', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'babafa5bd8abdb9f587a937cc484d5a65ea57bb0', class: "table-header" }, h("tr", { key: '623b4c59f5413c8958beb73bdb77e02d26667e6a' }, h("th", { key: '07ec1c8cbdeb2d91d7bede5f81f6dbb2f1c2fdb3', class: "text-center" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("th", { key: '85f89ba403fb97afbfe83941611b78d66baf22bc', class: "text-center" }, t('Lcz_Booking', { fallback: 'Booking' })), h("th", { key: 'ab612e42a002e1a1cd7a0289b25fc3956493410c', class: "text-center" }, t('Lcz_ByDirect', { fallback: 'By direct' })), h("th", { key: 'e08fa7156d4580b697dc32a07f7675c9213d49f6', class: "ir-text-end" }, t('Lcz_Amount', { fallback: 'Amount' })), h("th", { key: '751f75b995bc8d5f6f832b53c1e4a827f3f1f237', class: "text-center" }))), h("tbody", { key: '94b0f72ac592b28b754e560a5401e9566e8eec8d' }, h("tr", { key: 'a73f112dea98b014657ad1f48c0d545a957aa4ac', class: "ir-table-row" }, h("td", { key: 'd7289bd96e29406cac9211b45657c437e395e8d3', class: "text-center" }, "1"), h("td", { key: 'de512900211f8bc361049e7db57df1ad6b65901f', class: "text-center" }, h("ir-button", { key: '2826634771c48bcea99a3fc9dd826205de2c8e86', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '66d8ad53f84e984b75999fb24ce3f55f632c10b0', class: "text-center" }, "1"), h("td", { key: 'cd1d87635c9fdce9cf4ecdf3dc95756b8c83863c', class: "ir-text-end" }, "1"), h("td", { key: '4be5d9201f24d7b6fa245d7cdab21a1115f6f214' }, h("ir-button", { key: '793cbdcb54d410b2e3fe2515f35f2adaaed5274f', size: "sm", text: t('Lcz_Pay', { fallback: 'Pay' }), onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'payment',
                    payload: {
                        payment: {
                            id: -1,
                            date: hooks().format('YYYY-MM-DD'),
                            amount: 120,
                            currency: calendar_data.currency,
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

export { IrFinancialFilters as ir_financial_filters, IrFinancialTable as ir_financial_table };
