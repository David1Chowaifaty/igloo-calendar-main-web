'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7a66eda1.js');
const moment = require('./moment-1780b03a.js');
const locales_store = require('./locales.store-a1ac5174.js');
const calendarData = require('./calendar-data-960b69ba.js');
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
        return (index.h("div", { key: 'd233d46d9dacd1981629090566d020ece0bd2c82', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, index.h("div", { key: '472a34c8d8d25771ff483bc4f83a5a2b612b0c5e', class: "d-flex align-items-center justify-content-between sales-filters-header" }, index.h("div", { key: 'e31098df29223fe9fa920079045cac05b8a180e3', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: '1086d0a0500a06ef91ae7dfd9a1aeb1fc62e7484', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: '94d9617bb899d168a1587e89201b9a5ba7f9ddb1', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: 'aad60b1f754e9e990a344a3fcf3737ff0b0be5aa', class: "m-0 p-0 flex-grow-1" }, (_a = locales_store.locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Filters)), index.h("ir-button", { key: '1a162de357370bc873504e6073da79e045764e71', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), index.h("div", { key: 'ed685951457f028ce3a33e7fa32f2b2775f638e9', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, index.h("div", { key: '31742b34851cf6d994a0e1602d81c9720c9e28ab', class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("fieldset", { key: '830066b534a77ec286d563d6ab3deee15fbdaf93', class: "pt-1 filter-group" }, index.h("label", { key: '4d96c24311462f955bc5e6998806facb7451ed41', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), index.h("div", { key: '50190fecf0f9ba8a446856918f3dbf7711789314', class: "w-100 d-flex" }, index.h("style", { key: '4c95eef48d1dd1a9b104e8b58545d8f13a843b0d' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), index.h("ir-date-picker", { key: 'd1977b3c101841bb4cc1e6e182934aec9ea9e4e8', "data-testid": "pickup_date", date: (_b = this.filters) === null || _b === void 0 ? void 0 : _b.date, class: "w-100", emitEmptyDate: true, maxDate: moment.hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                var _a;
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: (_a = evt.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD') });
            } }, index.h("input", { key: '35cc351526bbc2522af1ab74add0baa667251e85', slot: "trigger", type: "text", value: (_c = this === null || this === void 0 ? void 0 : this.filters) === null || _c === void 0 ? void 0 : _c.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), index.h("fieldset", { key: '19f578f1312f69f8c8fb1352d1f1a36afb71688f', class: " filter-group" }, index.h("label", { key: '693ba5487290bfe6401d3676a8abb973c5542af1', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Users"), index.h("ir-select", { key: '8f56f3a80be4b37c4f6520fdb10a397b11278e20', selectedValue: (_d = this.filters) === null || _d === void 0 ? void 0 : _d.sourceCode, selectId: "rooms", firstOption: "All", onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), index.h("div", { key: 'c31f2ee1c034fbb689053f305c1ae5a6cfb6770d', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, index.h("ir-button", { key: '727c7398e0a935ad3d9a953f7eaf0f5db9c3c344', btn_type: "button", "data-testid": "reset", text: locales_store.locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: 'fe149c94d876d8b75d45de2d27752907002353e0', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales_store.locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
        return (index.h("div", { key: '13fd99b157e27662b634580231844b69eac8ce91', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, index.h("table", { key: '9f36a2831a032b3032ac2960ecad66b08a046aed', class: "table", "data-testid": "hk_tasks_table" }, index.h("thead", { key: '994326f594f94a1087a52886c345215543ca664e', class: "table-header" }, index.h("tr", { key: '2d10126156ed8e96f2f5d7ea5bc474ed571bcd31' }, index.h("th", { key: 'b8cc90edd211b590347eece5e9dfe27e1c20f38c', class: "text-center" }, "Date"), index.h("th", { key: 'd54bef2aa998981a4251a3ab4dac8dfe7d6bee1e', class: "text-center" }, "Booking"), index.h("th", { key: '28363a37e84f59f21bd9b5be73d6ba3932c9f318', class: "text-center" }, "By direct"), index.h("th", { key: '71bc48070b0e4a8d13fba6db4b2573e53106058f', class: "text-right" }, "Amount"), index.h("th", { key: '2213433e4b8d9b58c4d7b08a6135fd43030e82a0', class: "text-center" }))), index.h("tbody", { key: 'e14fc72b9b2699ce18dd601690ada35bf327ace7' }, index.h("tr", { key: '77e398febb669dc9862952231f7e11ef3338c832', class: "ir-table-row" }, index.h("td", { key: '78b5a65b3c594f691789c3960b458e906c7547c7', class: "text-center" }, "1"), index.h("td", { key: '1f78ed672d8aca8b2d534d6a4ee23814f591a9ea', class: "text-center" }, index.h("ir-button", { key: '7fcc02aa75a89b88b5d3f3a1467fdeb79c1e3a33', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), index.h("td", { key: '097d3495d1ac8e5deef1666946e73af172d07930', class: "text-center" }, "1"), index.h("td", { key: 'dd925c129b7583c34f07616cca08ba7cbf144116', class: "text-right" }, "1"), index.h("td", { key: '5f97d5116d2f5880a86af4f6bbcc84c063c67dd0' }, index.h("ir-button", { key: '58007dc8d3b070bb587b5c3db8a26aae2fc90a20', size: "sm", text: "Pay", onClickHandler: () => {
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