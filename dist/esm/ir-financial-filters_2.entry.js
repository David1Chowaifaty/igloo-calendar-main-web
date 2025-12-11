import { r as registerInstance, c as createEvent, h } from './index-b3dce66a.js';
import { h as hooks } from './moment-ab846cee.js';
import { l as locales } from './locales.store-9cde6711.js';
import { c as calendar_data } from './calendar-data-756b1a52.js';

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
        return (h("div", { key: '4ac1962da68359db077f39237dc2449b937009c2', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '7a0c62edd5fda200d4144fa3351d377f8943e12b', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: 'c387a7bd2d5fceef6d81e33cfab9c778ea0e8b94', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '6fba71370848b7d822e6142f04cc710c3d118e62', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '925bb9657d6149b7ab66e18188100fde4436f097', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: 'f77839df44edb60ad614c654a2a1723f705dde47', class: "m-0 p-0 flex-grow-1" }, locales.entries?.Lcz_Filters)), h("ir-button", { key: '24641c526aa2efb08ff12bd3d74502693b325a2b', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: 'daa305aafdc02664bdad4f29fcfd5b777c8eb607', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, h("div", { key: '58c9318e0adb714a8069333ee6331aab469a5179', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '8733d331135ed5e23b798e138fedcae0310232e5', class: "pt-1 filter-group" }, h("label", { key: 'd41ef0c58e949b453574a2680978b7a6a64c3a85', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), h("div", { key: '7fb33627db9d3c2ee0688f5b19a5da9630decddd', class: "w-100 d-flex" }, h("style", { key: 'd3eea63dd6946c79983a5a65c9891e0537e97a9c' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), h("ir-date-picker", { key: '3d2967c4e0d4e647aa2f2f8adb7b064d6d11dfe9', "data-testid": "pickup_date", date: this.filters?.date, class: "w-100", emitEmptyDate: true, maxDate: hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: evt.detail.start?.format('YYYY-MM-DD') });
            } }, h("input", { key: '0c1db14f1086b104f53bcb32c532beb5ba407fb5', slot: "trigger", type: "text", value: this?.filters?.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), h("fieldset", { key: '2432277fab8afd0245e9730f8c35400b0cd4a9e5', class: " filter-group" }, h("label", { key: 'ab52778626c772c6a43060eb8cba8ad62fbec827', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Users"), h("ir-select", { key: '690914b77e12ea76a8c2786b78e203b331fa1607', selectedValue: this.filters?.sourceCode, selectId: "rooms", firstOption: "All", onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), h("div", { key: '37997c851d258e4fd5d7d34966590d823d9acf3c', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '0362d403f758621b76e9b86a65ab6b8ad8abc716', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: 'b09785d864e5cad3313a8a01d0c046e96e245fca', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
        return (h("div", { key: 'ea40992b8e7fa72596a099a79720b920ed024f2b', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '65b696467a483e1a872939c970f4c4459caed5bc', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '693a135b018979312fbc968eceecbb0f8cdc0e87', class: "table-header" }, h("tr", { key: 'a1dbb2e7885a27d5dd5b9e1c4b93918a46649f61' }, h("th", { key: 'fa1f547fd0c858870306b8eb251b4ec1fad5f94b', class: "text-center" }, "Date"), h("th", { key: 'b9ac56aef8080d343c8ceb0d290db6f9982f902d', class: "text-center" }, "Booking"), h("th", { key: 'cc1d0cbc787437e1e5f0f5af047eb62caeabe1cd', class: "text-center" }, "By direct"), h("th", { key: '1f285e1e4671fc30fed68d36f3d708cac7ea995d', class: "text-right" }, "Amount"), h("th", { key: '3b474a7cdeaad757f79194916a31ed575e0e569a', class: "text-center" }))), h("tbody", { key: '6a77de4882499f5bfb03ffac80b8419fa68fa18a' }, h("tr", { key: '1e633d71dcc2d606df9adfab54b07fddd491f0c7', class: "ir-table-row" }, h("td", { key: 'c7a9f744f29fe25122bfb9947af3cec50ad69a0e', class: "text-center" }, "1"), h("td", { key: '2f9d8c683aab4a389ca1da6e43ebf4f3f103f2ae', class: "text-center" }, h("ir-button", { key: 'f262c9c0a64268454b3da64fb279ac95d6bf5fa2', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '8b744131e843a456c5b246683d397c49e07fe07a', class: "text-center" }, "1"), h("td", { key: '68993cb521ce35e42bf0736c5a13bb028aa53e40', class: "text-right" }, "1"), h("td", { key: 'a30113c162bac9b60acff5bb7da97103ab4b9f95' }, h("ir-button", { key: 'ffba1defdbef5786f310e66dc25db12970240be2', size: "sm", text: "Pay", onClickHandler: () => {
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