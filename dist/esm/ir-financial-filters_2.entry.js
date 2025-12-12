import { r as registerInstance, c as createEvent, h } from './index-b3dce66a.js';
import { h as hooks } from './moment-ab846cee.js';
import { l as locales } from './locales.store-f4150353.js';
import { c as calendar_data } from './calendar-data-8a36a1b2.js';
import './index-a124d225.js';

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
        return (h("div", { key: '13b3f92ec185d60cce9e8d804da5547c943a953b', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '050a26df3afe80900ed89b94e5baa5d57357ba99', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '28707a6424635e9d88f42b69221c9d0a99a97f24', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '252a77c07f33b0e27e200986692a80c3d17c99b5', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'ba284f6dec3e0ef7e0b9a022b4f58568f54c7ad1', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: 'c8ff069588e8eb645ca690bd3d183c57416507f3', class: "m-0 p-0 flex-grow-1" }, locales.entries?.Lcz_Filters)), h("ir-button", { key: '7cd2c5c4809d2a55bbb8803d5cabf4f5fb95d0c1', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: 'cef7a80f8a88e1275e038661c089aa214eb77029', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, h("div", { key: '7ffaac7997a4b7e43b6cba948886892bbb43d891', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: 'a1be1669a3b8df064224080f0c8726bb63f67e02', class: "pt-1 filter-group" }, h("label", { key: '294daf3413fb0d65ff554369558677794151a14e', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), h("div", { key: '61427ca83aa6295d14d864346c0eaf86c1732195', class: "w-100 d-flex" }, h("style", { key: '8aa7af0a36340c8b8de111988ecaf8668258b98b' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), h("ir-date-picker", { key: '60844524eeb9b1f078b3569ee28032d8a12102de', "data-testid": "pickup_date", date: this.filters?.date, class: "w-100", emitEmptyDate: true, maxDate: hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: evt.detail.start?.format('YYYY-MM-DD') });
            } }, h("input", { key: '151f4b9e7c68761de28f593887300bcc50c5572c', slot: "trigger", type: "text", value: this?.filters?.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), h("fieldset", { key: '2afb7604981d4fa30ceef2ae72a1b4929816a8b6', class: " filter-group" }, h("label", { key: '27c2376c6d59baf8546ba9ee4ddea891ddcf99e1', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Users"), h("ir-select", { key: 'bd072cd8a7aa82e048365426e175dee725bc33b4', selectedValue: this.filters?.sourceCode, selectId: "rooms", firstOption: "All", onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), h("div", { key: 'ac9f21b9f75e31fd68b02ecb308cfda5954ac2f6', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: 'f890db7563008121822110476dd0c04d583c03c4', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '02f3afa76cfaaba1444181757eeb267fd9e4b979', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
};
IrFinancialFilters.style = IrFinancialFiltersStyle0;

const irFinancialTableCss = ".sc-ir-financial-table-h{display:block}";
const IrFinancialTableStyle0 = irFinancialTableCss;

const tableCss = ".ir-table-row.sc-ir-financial-table td.sc-ir-financial-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-financial-table{flex:1 1 0%}.table--container.sc-ir-financial-table{overflow-x:auto}.table.sc-ir-financial-table td.sc-ir-financial-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-financial-table tbody.sc-ir-financial-table tr.sc-ir-financial-table:last-child>td.sc-ir-financial-table{border-bottom:0 !important}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sc-ir-financial-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-financial-table thead.sc-ir-financial-table th.sc-ir-financial-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-financial-table .empty-row.sc-ir-financial-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-financial-table{padding:0.5rem 1rem;position:sticky;bottom:0;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-financial-table td.sc-ir-financial-table{background:#e3f3fa !important}.selected.sc-ir-financial-table td.sc-ir-financial-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-financial-table,.ir-table-row.sc-ir-financial-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-financial-table{text-transform:capitalize}.sortable.sc-ir-financial-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-financial-table:hover td.sc-ir-financial-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.sortable.sc-ir-financial-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-financial-table svg.sc-ir-financial-table{color:var(--blue)}.sticky-column.sc-ir-financial-table{position:sticky !important;right:0;background-color:white}";
const IrFinancialTableStyle1 = tableCss;

const IrFinancialTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.financialActionsOpenSidebar = createEvent(this, "financialActionsOpenSidebar", 7);
    }
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: 'b192d941aa6e78ff2e950656ae780e6bc655ea47', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '384c952ab67da543e1d0b4505c6badb07f5d28f7', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'a602590df5c1deb2d62694aaa982ac84c3025c2f', class: "table-header" }, h("tr", { key: '9f8b6ab04a8dbdf47e1662d1880e99176ac94558' }, h("th", { key: 'cca9d6cbc4c85187e96d6b063d23ca5a21d31e6a', class: "text-center" }, "Date"), h("th", { key: '7a678286b679b0f3d9a1920b388517504a846947', class: "text-center" }, "Booking"), h("th", { key: 'e9cfd87a35408890aa63fa6faf13dd6ade7276dc', class: "text-center" }, "By direct"), h("th", { key: '8ad0b55f1c46a29f57c7258356ee9d6948732a60', class: "text-right" }, "Amount"), h("th", { key: '28d58bfb7bd5f83934213fe27bba55fa44e95081', class: "text-center" }))), h("tbody", { key: '86911c69f263c41e53fd3a0732a674882d1fece7' }, h("tr", { key: 'fc81182e12ed74e327dff2a84b7660682cb019f3', class: "ir-table-row" }, h("td", { key: 'd3b47bed6288e7c4bfd696bb89a174e9ab53fc07', class: "text-center" }, "1"), h("td", { key: 'a947153a29fee5e0c021f78bfe5fe743eecb55c7', class: "text-center" }, h("ir-button", { key: '0d90fbd5ef688fa2f1c175f1b9ffcfb0fd8c1c73', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: 'b2010963153cb3bff2ad618397e09d50613804ac', class: "text-center" }, "1"), h("td", { key: '35f37204b1d2d9722b13a00fa161f698cce86453', class: "text-right" }, "1"), h("td", { key: 'bc79b9d9b2e9873afd5ad2cc28a23c03c0cec8ac' }, h("ir-button", { key: 'f7b3aa9036387f7027657ed77b6fdae39887cf21', size: "sm", text: "Pay", onClickHandler: () => {
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