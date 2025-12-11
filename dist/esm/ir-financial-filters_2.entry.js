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
        return (h("div", { key: '32f13fe8acdb814257f3f8bb2a6d43c4b66ad5e6', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: 'ce998805e5a4eeaea97b7a490c7e0b9eb0205c95', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '531d0b80c1034ccffc363acbba508573154a5540', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: 'c083042d139ea37d1b9c13aa6020974599d49ac1', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'b0b4acc73d9009fb4215001bb27087ff1dd9dcdc', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '2218f4991deca17bb34c8669d2884784ed9a8517', class: "m-0 p-0 flex-grow-1" }, locales.entries?.Lcz_Filters)), h("ir-button", { key: 'af9bbf2071c3bd3a06383d290b5706cc15df50a4', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '42dc7c1598c0ad6316d1d6e9fb33248452151bf4', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, h("div", { key: '6bf5dcf0915f70ed89de9658a4bf5c5c480652bc', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '6fc319e298caeea92147399dd665f6c9e6ed3d4a', class: "pt-1 filter-group" }, h("label", { key: 'b660083aa98cc4bec58490832edb0dbb1ab077e2', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), h("div", { key: '0ee3e1d5e447a75e02617bfe2ae309c6aa7c0ec9', class: "w-100 d-flex" }, h("style", { key: 'd19a62e407ffba7d4beefbae1fa2831b7ebfe604' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), h("ir-date-picker", { key: 'db60f39117062c92c849654ab622c23fd31439e6', "data-testid": "pickup_date", date: this.filters?.date, class: "w-100", emitEmptyDate: true, maxDate: hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: evt.detail.start?.format('YYYY-MM-DD') });
            } }, h("input", { key: 'e004ffb11c2d5572333104d8cdda3b4f5258ea17', slot: "trigger", type: "text", value: this?.filters?.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), h("fieldset", { key: 'daa62a9ccdc5fb9608d8176887a4ea164025b233', class: " filter-group" }, h("label", { key: '75f2e8add1c3750f22908094e1e6a947658e070d', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Users"), h("ir-select", { key: 'a9bbfeeee02d7ed983cd17ff8c85507b32c66fe1', selectedValue: this.filters?.sourceCode, selectId: "rooms", firstOption: "All", onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), h("div", { key: '223c177710c70b5df29ac29f760d5289b90abf69', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '8d83dd4deed5769f1e7b464e12bf05bea2578364', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: 'c13a85ecaa6ffe01e7bf70a34c5d0c49dee68807', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
        return (h("div", { key: '4240f3c3dc3537019769cd8cc378beedbb97c068', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'a36bb12e1a986ac3a5113c1e015f8d85ba8ae0e7', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '8de74c05b86d8f1b0cd7e85c3b8ad9d73ebee2b2', class: "table-header" }, h("tr", { key: 'be9fe12d74e86dd17489b924ab40ad30029f301f' }, h("th", { key: '540c99a1c6c9782bc958c5aeb44e302b1f33d634', class: "text-center" }, "Date"), h("th", { key: 'fda5db2fb661b9ed81f4d18d93c216158707cc8b', class: "text-center" }, "Booking"), h("th", { key: '4bdada26ec16f70929610baf5679fc80fe63bcaa', class: "text-center" }, "By direct"), h("th", { key: '323c41a6e38994bf9d6659c605a58fd085ea0190', class: "text-right" }, "Amount"), h("th", { key: 'c27776b98870e4c5f309d1190556ef5f0d0daf92', class: "text-center" }))), h("tbody", { key: '294232ed69681c3874325703eccc85e3902c01c8' }, h("tr", { key: '4867a257e69b5ccea4b5d2c489653b1098c0ab71', class: "ir-table-row" }, h("td", { key: '354d837f8e66c279096b44e2280d4f8987f3c391', class: "text-center" }, "1"), h("td", { key: 'c25d95dc65b61c899b9bffd76e24e58752f09766', class: "text-center" }, h("ir-button", { key: 'c00c142f458ea3cb8d78749b91e78152c8535900', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '97853ecd22b9efb23aeaf9d238b2607e31d54717', class: "text-center" }, "1"), h("td", { key: '6f66be73d449cad7b9423ab2af1baffe882fcd55', class: "text-right" }, "1"), h("td", { key: '5e310c7cf0cbf57545221f34738e449ba1725e8c' }, h("ir-button", { key: 'd5b25e09720d73e7f018b65da05aa63d64882b9e', size: "sm", text: "Pay", onClickHandler: () => {
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