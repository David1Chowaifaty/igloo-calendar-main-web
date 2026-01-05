import { r as registerInstance, c as createEvent, h } from './index-7e96440e.js';
import { h as hooks } from './moment-ab846cee.js';
import { l as locales } from './locales.store-cb784e95.js';
import { c as calendar_data } from './calendar-data-2ae53dc9.js';
import './index-f100e9d2.js';

const irFinancialFiltersCss = ".sc-ir-financial-filters-h{display:block}.financial-filter__date-picker-icon.sc-ir-financial-filters{position:absolute;inset:0;left:0.75rem;display:flex;align-items:center;width:fit-content;transform:translateY(-0.15rem)}.sc-ir-financial-filters-h{display:block;height:100%}@media (min-width: 768px){.sc-ir-financial-filters-h{width:300px}.collapse-btn.sc-ir-financial-filters{display:none}#financialFilterCollapse.collapse.sc-ir-financial-filters:not(.show){display:block}}";
const IrFinancialFiltersStyle0 = irFinancialFiltersCss;

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
        return (h("div", { key: '34866599fa947a6613a4cae54fbaf6d183d2c63c', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: 'c83508fb5f6270cbb5d89fa119444d939c36ca3a', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: 'e65075f797c2ce9e9458bb86639634e494ba3e2c', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '6536ba3125e54c964c019374f3a5000845236929', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '6fd3887fe0244c172d363ef19199869834049998', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: 'f28eaf35b95f388aced527edcc5739d151cb0c9c', class: "m-0 p-0 flex-grow-1" }, locales.entries?.Lcz_Filters)), h("ir-button", { key: 'a3c7fc1af617092fc496d2f5ca97f4c25c03b809', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: 'da76b70ad10465b1216f909ec5472de04960dc9c', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, h("div", { key: '09456af48f2a925eeac6047cb71cf7d81c9bcdf5', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '66d2ef2f53d548dff5f7eefcdf973b355f2d22f2', class: "pt-1 filter-group" }, h("label", { key: 'e3e032eb593f86f176d816257bc27ff78ac85f41', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), h("div", { key: 'd7a0278e1322de156ea214e2f07ea1a07bc9a973', class: "w-100 d-flex" }, h("style", { key: '8b23c1c3706eaa45b350ac7b262a397641ce3245' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), h("ir-date-picker", { key: '42a496597440f7293de35017b57f6d6c0858f7e0', "data-testid": "pickup_date", date: this.filters?.date, class: "w-100", emitEmptyDate: true, maxDate: hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: evt.detail.start?.format('YYYY-MM-DD') });
            } }, h("input", { key: '8284bae9e57a9febe50cf8e5db10926911731dc6', slot: "trigger", type: "text", value: this?.filters?.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), h("fieldset", { key: '0dee8b39895dd135826565c5712411484e94545a', class: " filter-group" }, h("label", { key: 'a2c84d806b2b55645796b113d6f62fbc0c29f432', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Users"), h("ir-select", { key: '765f5f4e11ae6589469b523fff8e6e2e5726af23', selectedValue: this.filters?.sourceCode, selectId: "rooms", firstOption: "All", onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), h("div", { key: '33da91f9420a5142ca4f7f6def1d18efcd453328', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: 'f53583092f65b4cb40c3c260587b078e6c3dcaee', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: 'b2165519cd241460a5ff10a6009718cc19534663', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
};
IrFinancialFilters.style = IrFinancialFiltersStyle0;

const irFinancialTableCss = ".sc-ir-financial-table-h{display:block}";
const IrFinancialTableStyle0 = irFinancialTableCss;

const tableCss = ".ir-table-row.sc-ir-financial-table td.sc-ir-financial-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-financial-table{overflow-x:auto}.table.sc-ir-financial-table td.sc-ir-financial-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-financial-table tbody.sc-ir-financial-table tr.sc-ir-financial-table:last-child>td.sc-ir-financial-table{border-bottom:0 !important}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sc-ir-financial-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-financial-table thead.sc-ir-financial-table th.sc-ir-financial-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-financial-table .empty-row.sc-ir-financial-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-financial-table{padding:0.5rem 1rem;position:sticky;bottom:0;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-financial-table td.sc-ir-financial-table{background:#e3f3fa !important}.selected.sc-ir-financial-table td.sc-ir-financial-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-financial-table,.ir-table-row.sc-ir-financial-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-financial-table{text-transform:capitalize}.sortable.sc-ir-financial-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-financial-table:hover td.sc-ir-financial-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.sortable.sc-ir-financial-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-financial-table svg.sc-ir-financial-table{color:var(--blue)}.sticky-column.sc-ir-financial-table{position:sticky !important;right:0;background-color:white}.table--container.sc-ir-financial-table,.data-table.sc-ir-financial-table{height:100%}";
const IrFinancialTableStyle1 = tableCss;

const IrFinancialTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.financialActionsOpenSidebar = createEvent(this, "financialActionsOpenSidebar", 7);
    }
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '86d04ef22104571e8a78346ebec305c80d3ec2ca', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'dd4ffda203248dae0f41e46859d23f02165ae02e', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '26405b7981796d8f7b2f7fe921f0791676a53b0b', class: "table-header" }, h("tr", { key: 'd4234e97870b2f93f8b012166dc902cf0be460a3' }, h("th", { key: '2287b53bbfc3689efefd0ca25d4965b4f7cf1639', class: "text-center" }, "Date"), h("th", { key: '85f3e8605b8c482f969f281f54a1573112324f47', class: "text-center" }, "Booking"), h("th", { key: '57d8116438b5f8785b6defbeb84e60fabda7a080', class: "text-center" }, "By direct"), h("th", { key: '404746ac828d5dd02165cd0efa7c42a922560933', class: "text-right" }, "Amount"), h("th", { key: 'a82029e2e15159e796a9c533aaa016baffdfa4d8', class: "text-center" }))), h("tbody", { key: '949a1d781f1114593f7129714b2511d14b31712b' }, h("tr", { key: '7cbcf8f9f7cac19fd09b7b5315e12a4aa4cc489c', class: "ir-table-row" }, h("td", { key: '785e8d0201270ecbb7440d154ca78fb5dcf24e64', class: "text-center" }, "1"), h("td", { key: '7388f4254314209719f8df975a6deebba6141c99', class: "text-center" }, h("ir-button", { key: '61e6129be4d71a7b27a8d46f3385fc19a727c0f3', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '0017d06ad8659b34c9959c7e7939b14e191d1f23', class: "text-center" }, "1"), h("td", { key: 'c9ec836a369fcfede7950eb701b8c4a481203e5c', class: "text-right" }, "1"), h("td", { key: 'bdbc11b61518bdeb235ea93610918d6fe2aaceb6' }, h("ir-button", { key: '5d46efb462cf674ae03fe05a872002a61a3bc577', size: "sm", text: "Pay", onClickHandler: () => {
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
                    },
                });
            } })))))));
    }
};
IrFinancialTable.style = IrFinancialTableStyle0 + IrFinancialTableStyle1;

export { IrFinancialFilters as ir_financial_filters, IrFinancialTable as ir_financial_table };

//# sourceMappingURL=ir-financial-filters_2.entry.js.map