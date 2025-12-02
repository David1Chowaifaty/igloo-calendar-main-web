'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3978a3f8.js');
const moment = require('./moment-1780b03a.js');
const locales_store = require('./locales.store-4eb57996.js');
const calendarData = require('./calendar-data-e7cdcfec.js');
require('./index-6299b0f7.js');

const irFinancialFiltersCss = ".sc-ir-financial-filters-h{display:block}.financial-filter__date-picker-icon.sc-ir-financial-filters{position:absolute;inset:0;left:0.75rem;display:flex;align-items:center;width:fit-content;transform:translateY(-0.15rem)}.sc-ir-financial-filters-h{display:block;height:100%}@media (min-width: 768px){.sc-ir-financial-filters-h{width:300px}.collapse-btn.sc-ir-financial-filters{display:none}#financialFilterCollapse.collapse.sc-ir-financial-filters:not(.show){display:block}}";
const IrFinancialFiltersStyle0 = irFinancialFiltersCss;

const IrFinancialFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.fetchNewReports = index.createEvent(this, "fetchNewReports", 7);
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
        return (index.h("div", { key: '161a7451cc4a372fb3735f99456dccff4b326d8e', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, index.h("div", { key: '732e126d0bb9f4e9458faaba10ee149588f6193d', class: "d-flex align-items-center justify-content-between sales-filters-header" }, index.h("div", { key: 'e1ff0b75bfb9f2e51283be642b18d3f520af9671', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: '0a31c45313aa093f26b3c9974383097c405aff93', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: '7a2f7f0dfe474818e60eefe095f9dfa0182274b0', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: 'c01e95797651bada3f961bf4f071f2e0228188dc', class: "m-0 p-0 flex-grow-1" }, locales_store.locales.entries?.Lcz_Filters)), index.h("ir-button", { key: 'efb5492dbe6e2b456c787cdf32491a41ad4d528f', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), index.h("div", { key: 'e393511b63d3235fcfacc291ef6ab9436a95c1a1', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, index.h("div", { key: 'f1bfcf64f86c04a365cbecd08a4cba0281f5e23c', class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("fieldset", { key: '8c4a93ce56840a3e802f20193cae75f7373ae59d', class: "pt-1 filter-group" }, index.h("label", { key: '87ddd9a64015fce73dca2d76e4deef13d3ccfeca', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), index.h("div", { key: '366686e723f58a7757823442a40d83994d74f25d', class: "w-100 d-flex" }, index.h("style", { key: '90ad25e5868c18f4f7fd44965047f3614933f0be' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), index.h("ir-date-picker", { key: '41ae6510c3720e2ec8134a44e855a2d52275057e', "data-testid": "pickup_date", date: this.filters?.date, class: "w-100", emitEmptyDate: true, maxDate: moment.hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: evt.detail.start?.format('YYYY-MM-DD') });
            } }, index.h("input", { key: '6b30e69ef82b211694eccd72b8740248d570e10b', slot: "trigger", type: "text", value: this?.filters?.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), index.h("fieldset", { key: '5e0ee36a871453af8cbd8ea39d5c09f2370c0c06', class: " filter-group" }, index.h("label", { key: '3fefbb53935e46856ee46c7bc7fde56bd0b4b406', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Users"), index.h("ir-select", { key: '3ea17a6e6859120874b376f708915ba9c7926781', selectedValue: this.filters?.sourceCode, selectId: "rooms", firstOption: "All", onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), index.h("div", { key: '4e9724b9600cbf777ee63409780fa49eebe0155c', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, index.h("ir-button", { key: 'b70f708869a2c879278d167a9b5e4a989a9e36af', btn_type: "button", "data-testid": "reset", text: locales_store.locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: '98533191fd670a52cef284181171ecd5c22071dc', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales_store.locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
};
IrFinancialFilters.style = IrFinancialFiltersStyle0;

const irFinancialTableCss = ".sc-ir-financial-table-h{display:block}";
const IrFinancialTableStyle0 = irFinancialTableCss;

const tableCss = ".ir-table-row.sc-ir-financial-table td.sc-ir-financial-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table.sc-ir-financial-table td.sc-ir-financial-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-financial-table tbody.sc-ir-financial-table tr.sc-ir-financial-table:last-child>td.sc-ir-financial-table{border-bottom:0 !important}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sc-ir-financial-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-financial-table thead.sc-ir-financial-table th.sc-ir-financial-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-financial-table .empty-row.sc-ir-financial-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-financial-table{padding:0.5rem 1rem;position:sticky;bottom:0;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-financial-table td.sc-ir-financial-table{background:#e3f3fa !important}.selected.sc-ir-financial-table td.sc-ir-financial-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-financial-table,.ir-table-row.sc-ir-financial-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-financial-table{text-transform:capitalize}.sortable.sc-ir-financial-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-financial-table:hover td.sc-ir-financial-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.sortable.sc-ir-financial-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-financial-table svg.sc-ir-financial-table{color:var(--blue)}.sticky-column.sc-ir-financial-table{position:sticky !important;right:0;background-color:white}";
const IrFinancialTableStyle1 = tableCss;

const IrFinancialTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.financialActionsOpenSidebar = index.createEvent(this, "financialActionsOpenSidebar", 7);
    }
    financialActionsOpenSidebar;
    render() {
        return (index.h("div", { key: 'b18ded20da72087f7c9e43674895daac9b920330', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, index.h("table", { key: 'f32685acb4eadbdb940cde3a523203be365c6b48', class: "table", "data-testid": "hk_tasks_table" }, index.h("thead", { key: '37942f295c3a3a5080b6ce1c8750073636712e44', class: "table-header" }, index.h("tr", { key: 'bd55fc55213b57136f942cf93818967d18ef45fb' }, index.h("th", { key: 'e883ebdccd8b4269c5467488948c1d8237d5ec5a', class: "text-center" }, "Date"), index.h("th", { key: '646a4549a249c1d803ca1694268f568f560b44e0', class: "text-center" }, "Booking"), index.h("th", { key: 'edffc134e98da3f827b8d71c49b544a7bb09f221', class: "text-center" }, "By direct"), index.h("th", { key: 'ee489c4306418cb64854343f5c1156127324ef04', class: "text-right" }, "Amount"), index.h("th", { key: '530911b0aefe0138bd7751c4f335c6743f15f045', class: "text-center" }))), index.h("tbody", { key: '77a92c7899f0df8d111659fbce8dd606011c79d8' }, index.h("tr", { key: '9a056ccc47f9faa25b2b1a7df90d4cc005f5d512', class: "ir-table-row" }, index.h("td", { key: '9437e3837eaf9c1e10675a17b9e2b704d1872a05', class: "text-center" }, "1"), index.h("td", { key: '190c3e66424d4f95c9ac5dff17a33baae4fb6ccf', class: "text-center" }, index.h("ir-button", { key: '8b8a539a92e2f9bccac472a8197dc215f146da67', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), index.h("td", { key: '4d1f157bec54b13cf5c646e6f8a74bdb0cc9a26b', class: "text-center" }, "1"), index.h("td", { key: 'f45eece6ef10c7ca9d9214fb899e597eb1facbb7', class: "text-right" }, "1"), index.h("td", { key: 'ba83648248c846cb1bf491857de6044f932fb3d1' }, index.h("ir-button", { key: '37e29f9a09d6742276e7ede7bd0449d2b8df643f', size: "sm", text: "Pay", onClickHandler: () => {
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
                    },
                });
            } })))))));
    }
};
IrFinancialTable.style = IrFinancialTableStyle0 + IrFinancialTableStyle1;

exports.ir_financial_filters = IrFinancialFilters;
exports.ir_financial_table = IrFinancialTable;

//# sourceMappingURL=ir-financial-filters_2.cjs.entry.js.map