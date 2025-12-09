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
        return (index.h("div", { key: '5edae6d4e3d9d2135e422fa321233888870cbcaf', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, index.h("div", { key: '3b6c530df98ef79983695247578d7bde5fb50366', class: "d-flex align-items-center justify-content-between sales-filters-header" }, index.h("div", { key: 'c0cabc167956d844b5dcab082d9d0918a8b9348a', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: '51ed5bf840d1b23be31bd14927fa95f8ebc2738f', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: 'd21f2eaa4e4aa6e65e8451b60536484ac9f76767', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: 'a857add8183d53a56bcc07317feaaaf48d2117ed', class: "m-0 p-0 flex-grow-1" }, locales_store.locales.entries?.Lcz_Filters)), index.h("ir-button", { key: '94d7ce8f4532ea0c6af0b155e846594e3171bf52', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), index.h("div", { key: '1520b3c5c3b272d3d81d223b1aafa797af5c4e54', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, index.h("div", { key: '9406b9ac0392ec4a2d286c3071e8596d823ee7ee', class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("fieldset", { key: 'dea83f61edbe1d15c6edb83a19f8226c48470bc1', class: "pt-1 filter-group" }, index.h("label", { key: 'a305a29a6e0977cecc50f0eb6a6de36e874197cf', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), index.h("div", { key: '96098309001abd65d8fa0ca080568bf6e2df0821', class: "w-100 d-flex" }, index.h("style", { key: '47881986ee6e7ba082f91fdb4fcace1b22e6f205' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), index.h("ir-date-picker", { key: '087c87d6a61103aebaf8785daf6abef8092b31d4', "data-testid": "pickup_date", date: this.filters?.date, class: "w-100", emitEmptyDate: true, maxDate: moment.hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: evt.detail.start?.format('YYYY-MM-DD') });
            } }, index.h("input", { key: 'c785595e92e95479082813663bc9fa7f425adacb', slot: "trigger", type: "text", value: this?.filters?.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), index.h("fieldset", { key: '8a98629fcd5c6580768b52cfe3d0daf13b4fe8e4', class: " filter-group" }, index.h("label", { key: 'ad2e922b381e59df6341cffdbf4199148f62f72f', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Users"), index.h("ir-select", { key: 'a5faaf76552a025d7b514e23acfb23a8dcb9b643', selectedValue: this.filters?.sourceCode, selectId: "rooms", firstOption: "All", onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), index.h("div", { key: '43468211671745fc1d926a0e1a6807e2df837696', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, index.h("ir-button", { key: 'c71fcd3b0755cd70879d6828f1751b36e32bbcdb', btn_type: "button", "data-testid": "reset", text: locales_store.locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: '3c9b6dbdf530e72e0f8e1bf7ed5d3009a8c40249', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales_store.locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
        return (index.h("div", { key: '1be891e8c65a888017c3be120a34ef9415ae8de6', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, index.h("table", { key: '21a8a2c494151bbe2fb3847cbef34e00bffbfac4', class: "table", "data-testid": "hk_tasks_table" }, index.h("thead", { key: '8f186a1e46f3ac28ebe031b240740bb92d95a974', class: "table-header" }, index.h("tr", { key: '834f698d9625d53c5592795d7ac77ea270332f88' }, index.h("th", { key: '98567bd694642459f803306671e94f141dab42c4', class: "text-center" }, "Date"), index.h("th", { key: '636f5c95f2f544db2806665298a19915962b3043', class: "text-center" }, "Booking"), index.h("th", { key: '7ab8eed37e09a6b481e24e6c7f4cf472c34420ed', class: "text-center" }, "By direct"), index.h("th", { key: '4b62d72d41782b6c679b39a7f7e09384e97e4ed2', class: "text-right" }, "Amount"), index.h("th", { key: 'b50d3c64bfb7a659a8cf45301598830b76b468a1', class: "text-center" }))), index.h("tbody", { key: '2885c20e1c2beeb2e932a34532d6cec66f8bff18' }, index.h("tr", { key: '93ec67f343fa940b65f3953a281379c7d1f680d0', class: "ir-table-row" }, index.h("td", { key: 'b5b45af8a249617fe1a887b53f80c28be9cef10d', class: "text-center" }, "1"), index.h("td", { key: 'd5cb48120169180e877df9f44920d21377fe6249', class: "text-center" }, index.h("ir-button", { key: '0680f79af5d85dc49639c8add5c022b1ec2e2e0b', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), index.h("td", { key: 'd947358d36ad240082811151b11300fcf446aac9', class: "text-center" }, "1"), index.h("td", { key: 'aa84067a22b15532768445315984187f653c631b', class: "text-right" }, "1"), index.h("td", { key: '089de0e3484a95642cb0cd85537b9ae18352c529' }, index.h("ir-button", { key: '9e9c59fc230e97a9da2af9f52f02421179e6b7b8', size: "sm", text: "Pay", onClickHandler: () => {
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