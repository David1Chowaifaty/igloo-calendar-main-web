'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7a66eda1.js');
const moment = require('./moment-1780b03a.js');
const locales_store = require('./locales.store-a1ac5174.js');
const calendarData = require('./calendar-data-d2bec4fe.js');
require('./index-7564ffa1.js');

const irFinancialFiltersCss = ".sc-ir-financial-filters-h{display:block}.financial-filter__date-picker-icon.sc-ir-financial-filters{position:absolute;inset:0;left:0.75rem;display:flex;align-items:center;width:fit-content;transform:translateY(-0.15rem)}.sc-ir-financial-filters-h{display:block;height:100%}@media (min-width: 768px){.sc-ir-financial-filters-h{width:300px}.collapse-btn.sc-ir-financial-filters{display:none}#financialFilterCollapse.collapse.sc-ir-financial-filters:not(.show){display:block}}";
const IrFinancialFiltersStyle0 = irFinancialFiltersCss;

const IrFinancialFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.fetchNewReports = index.createEvent(this, "fetchNewReports", 7);
        this.collapsed = false;
        this.baseFilters = {
            date: moment.hooks().format('YYYY-MM-DD'),
            sourceCode: '001',
        };
    }
    componentWillLoad() {
        this.filters = Object.assign({}, this.baseFilters);
    }
    applyFiltersEvt(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.fetchNewReports.emit(this.filters);
    }
    resetFilters(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.filters = Object.assign({}, this.baseFilters);
        this.fetchNewReports.emit(this.filters);
    }
    updateFilter(params) {
        this.filters = Object.assign(Object.assign({}, this.filters), params);
    }
    render() {
        var _a, _b, _c, _d;
        return (index.h("div", { key: '99bd67d379d63019c2517d63574e69095aa3d8f1', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, index.h("div", { key: '5881d949f1db4ed0f2ddbb30f557c9279d3989cb', class: "d-flex align-items-center justify-content-between sales-filters-header" }, index.h("div", { key: '8d300a5efb208efb2eac21550a47ca0d0609a8cb', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: '92b184089a0c47cf3af1ca771b008f6da84545dc', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: '996409ed7a50cd6d075933a07465f045a59c0147', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: '83aaf4e541704af0e9fb958c8c026653a15f034f', class: "m-0 p-0 flex-grow-1" }, (_a = locales_store.locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Filters)), index.h("ir-button", { key: '0a9582bb16d6a0a3e472c538db32c2bbfcb3d5b1', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), index.h("div", { key: 'ff1afa5025cd46d6bf063a36dff70d03755776d6', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, index.h("div", { key: '0d4b4127f1390cc91d88498efbc5af591d9097e1', class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("fieldset", { key: '4b93288c0ec9912322f90fa6478f1b01212b1fa1', class: "pt-1 filter-group" }, index.h("label", { key: '559cc9d266a2949c144c83a9da5a75d5c08bdee1', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), index.h("div", { key: '23d8afea98cf123471435d55ce737941a0391d8a', class: "w-100 d-flex" }, index.h("style", { key: 'd2712907f2bf67b50704089824527c74ffe43ad7' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), index.h("ir-date-picker", { key: '233b4d9cc1e36dfc7a5dff69edb41b23a2f60ae7', "data-testid": "pickup_date", date: (_b = this.filters) === null || _b === void 0 ? void 0 : _b.date, class: "w-100", emitEmptyDate: true, maxDate: moment.hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                var _a;
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: (_a = evt.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD') });
            } }, index.h("input", { key: '00c56565cc196b4cf3bb9ae173ebc252aa57b7b8', slot: "trigger", type: "text", value: (_c = this === null || this === void 0 ? void 0 : this.filters) === null || _c === void 0 ? void 0 : _c.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), index.h("fieldset", { key: 'ab7beef2cc4de3c57bcadb4a678484c74dbe489e', class: " filter-group" }, index.h("label", { key: 'ae5d2cc7f13545553348e02f058733e624ff3d2a', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Users"), index.h("ir-select", { key: '3eb64a04739093f0c6aba8f1bd5fd5148cd5ce14', selectedValue: (_d = this.filters) === null || _d === void 0 ? void 0 : _d.sourceCode, selectId: "rooms", firstOption: "All", onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), index.h("div", { key: 'cc03e6c4f3fc60e7368ed0f557bf7e18352a3116', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, index.h("ir-button", { key: '39bb631045d63932d2af57f43d56f60dc2cae629', btn_type: "button", "data-testid": "reset", text: locales_store.locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: '93307b0d62bb0238a8a5f1a53a4d14a75e54051a', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales_store.locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
};
IrFinancialFilters.style = IrFinancialFiltersStyle0;

const irFinancialTableCss = ".sc-ir-financial-table-h{display:block}";
const IrFinancialTableStyle0 = irFinancialTableCss;

const tableCss = ".ir-table-row.sc-ir-financial-table td.sc-ir-financial-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:white;white-space:nowrap}.table.sc-ir-financial-table td.sc-ir-financial-table{border-top:0;border-bottom:1px solid #e3ebf3;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sc-ir-financial-table{border:none !important;background:#ececec;color:#374151;padding:0.5rem 1rem !important;text-align:left}.selected.sc-ir-financial-table td.sc-ir-financial-table{background:#e3f3fa !important}.selected.sc-ir-financial-table td.sc-ir-financial-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-financial-table,.ir-table-row.sc-ir-financial-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-financial-table{text-transform:capitalize}.sortable.sc-ir-financial-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-financial-table:hover td.sc-ir-financial-table{background:#e2e6ea3f !important}.sortable.sc-ir-financial-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-financial-table svg.sc-ir-financial-table{color:var(--blue)}";
const IrFinancialTableStyle1 = tableCss;

const IrFinancialTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.financialActionsOpenSidebar = index.createEvent(this, "financialActionsOpenSidebar", 7);
    }
    render() {
        return (index.h("div", { key: '5d3efe691f2f531a06d8f3dc827e7ba7b7aae2a6', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, index.h("table", { key: 'de432bff22e92bd1ec54f2aca6a8585f5fd36b11', class: "table", "data-testid": "hk_tasks_table" }, index.h("thead", { key: '083af26b99708ff83285fc308b86dff45efa255e', class: "table-header" }, index.h("tr", { key: '602f9c42bdc312a011a951297ca34f043608351b' }, index.h("th", { key: 'e95f3e98a2797c29630400275989faad860de3d5', class: "text-center" }, "Date"), index.h("th", { key: '9fdc91fd1785b0623d0782b811c5ebda324be7e4', class: "text-center" }, "Booking"), index.h("th", { key: 'e11950c08d37a0be164e2ab63b7bdd7f77b23e1a', class: "text-center" }, "By direct"), index.h("th", { key: '3237fa82fb65f658c80418540d2c16d510a1f194', class: "text-right" }, "Amount"), index.h("th", { key: 'dc5ec3236fc8cba96f96273e0336638dc6027b03', class: "text-center" }))), index.h("tbody", { key: '65f0eb73ed309524b1b5bc5834d7704e460c3731' }, index.h("tr", { key: '09f4857a4971f04464e4454bda5d273e4d38839c', class: "ir-table-row" }, index.h("td", { key: '65ed263efc8168002da09204a2898a3d15dc5c9b', class: "text-center" }, "1"), index.h("td", { key: 'e1910619ad37db6432fad352fc4082d0a2da96b7', class: "text-center" }, index.h("ir-button", { key: 'c74ff06d1bc26ae808632e213e5daa8caccbfa84', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), index.h("td", { key: '9e13a2ff75b9bde55562708965a99741fc736933', class: "text-center" }, "1"), index.h("td", { key: 'dca27412822520285d8fd3b9350cbc0669008808', class: "text-right" }, "1"), index.h("td", { key: '7de216452f4afa98f878d773e92b03110ddbdf25' }, index.h("ir-button", { key: '52317b83f8ad4b9a726903f64154115601d18029', size: "sm", text: "Pay", onClickHandler: () => {
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