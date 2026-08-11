'use strict';

var index = require('./index-jMqrfjaT.js');
var moment = require('./moment-CdViwxPQ.js');
var locales_store = require('./locales.store-EkxfQjEN.js');
var calendarData = require('./calendar-data-UNmh_Xjg.js');
require('./index-BXsYsiHK.js');

const irFinancialFiltersCss = () => `.sc-ir-financial-filters-h{display:block}.financial-filter__date-picker-icon.sc-ir-financial-filters{position:absolute;inset:0;left:0.75rem;display:flex;align-items:center;width:fit-content;transform:translateY(-0.15rem)}.sc-ir-financial-filters-h{display:block;height:100%}@media (min-width: 768px){.sc-ir-financial-filters-h{width:300px}.collapse-btn.sc-ir-financial-filters{display:none}#financialFilterCollapse.collapse.sc-ir-financial-filters:not(.show){display:block}}`;

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
        return (index.h("div", { key: 'b53dbcc8cb337a419de3ff5e44db2b2a6f1fab39', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, index.h("div", { key: '777705a4f05f1e0e7e5e3afd270d236693b55bed', class: "d-flex align-items-center justify-content-between sales-filters-header" }, index.h("div", { key: 'cdafb9cb23b58943f720cdda970cae67b3a5b88a', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: 'ce17c14de383e8cbeaa85023d0f34ade92e75071', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: '27993bfbc5f91df6438a166c1ba24c7fbcecabcc', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: '12f6ad90c2aa23ecc8245366df61e782d65391c0', class: "m-0 p-0 flex-grow-1" }, locales_store.locales.entries?.Lcz_Filters)), index.h("ir-button", { key: '504502a522b292560806c5daa27033d497d0305a', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), index.h("div", { key: 'd9507a165fea8218bbad167231a7bbbb1f63350c', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, index.h("div", { key: 'add4baf3b2e5dbfc13a924dcda362f5c15976e54', class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("fieldset", { key: '423f5b1d221f90c0c91cf79e006ece1370ef7898', class: "pt-1 filter-group" }, index.h("label", { key: 'fcd50612c6e3111f839c71ad27147e482ea1a96f', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), index.h("div", { key: 'a2ac03418c1b9c7fdbacb289d134b966f73a40d0', class: "w-100 d-flex" }, index.h("style", { key: 'b7237c4b3fa778940193644cfb3a369f9cfe4215' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), index.h("ir-date-picker", { key: '3eb267a45f9530d4f1325c9d67997500d61cd7f3', "data-testid": "pickup_date", date: this.filters?.date, class: "w-100", emitEmptyDate: true, maxDate: moment.hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: evt.detail.start?.format('YYYY-MM-DD') });
            } }, index.h("input", { key: '2336eab5cfb7beac5afc2ae556884d8b2b7a302b', slot: "trigger", type: "text", value: this?.filters?.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), index.h("fieldset", { key: 'ac5f224572edffcb8c95097aa9f591a3d4844249', class: " filter-group" }, index.h("label", { key: 'cc1a8395b5fa001ccf16e531036e81893ab4e39a', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Users"), index.h("ir-select", { key: '172845a0dc6c7dab1ebb09d36849b9fb0720dfde', selectedValue: this.filters?.sourceCode, selectId: "rooms", firstOption: "All", onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), index.h("div", { key: '831a883bf565441e93b1d0acd3192545f6cb58bc', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, index.h("ir-button", { key: '22a721e20d9d0d819e351c4b3da2d23c14cd1d74', btn_type: "button", "data-testid": "reset", text: locales_store.locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: '9e530455734df6be9d423dcba8ffbc2ae3f52606', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales_store.locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
};
IrFinancialFilters.style = irFinancialFiltersCss();

const irFinancialTableCss = () => `.sc-ir-financial-table-h{display:block}`;

const tableCss = () => `.sc-ir-financial-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-financial-table{overflow-x:auto}.table--container.sc-ir-financial-table,.data-table.sc-ir-financial-table{height:100%}.ir-table-row.sc-ir-financial-table td.sc-ir-financial-table{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-financial-table td.sc-ir-financial-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-financial-table tbody.sc-ir-financial-table tr.sc-ir-financial-table:last-child>td.sc-ir-financial-table{border-bottom:0 !important}.cell--align-start.sc-ir-financial-table{text-align:start !important}.cell--align-center.sc-ir-financial-table{text-align:center !important}.cell--align-end.sc-ir-financial-table{text-align:end !important}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sc-ir-financial-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-financial-table thead.sc-ir-financial-table th.sc-ir-financial-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-financial-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-financial-table,.ir-table-row.sc-ir-financial-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-financial-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sortable.sc-ir-financial-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sortable.sc-ir-financial-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sortable.sc-ir-financial-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-financial-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-financial-table svg.sc-ir-financial-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-financial-table:hover td.sc-ir-financial-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-financial-table:hover td.sc-ir-financial-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-financial-table:active td.sc-ir-financial-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-financial-table td.sc-ir-financial-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-financial-table:hover td.sc-ir-financial-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-financial-table:active td.sc-ir-financial-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-financial-table .empty-row.sc-ir-financial-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-financial-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-financial-table{position:sticky !important;right:0;background-color:white}`;

const IrFinancialTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.financialActionsOpenSidebar = index.createEvent(this, "financialActionsOpenSidebar");
    }
    financialActionsOpenSidebar;
    render() {
        return (index.h("div", { key: 'd029ddf092de84973dda7be1b0ef1558cb2d2fe2', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, index.h("table", { key: 'ee8020cb7597516fbdfe4abd5a6124e9c623524c', class: "table", "data-testid": "hk_tasks_table" }, index.h("thead", { key: '37cf2d7cd30bc02b55ec0d071cf41babf1899710', class: "table-header" }, index.h("tr", { key: '0f0ffa3d38160dc4ad595e241997e80a9fceca41' }, index.h("th", { key: '3b3b9eed9f2ac5646b46de5fb6c96c05f00c925f', class: "text-center" }, "Date"), index.h("th", { key: '3db95b6873ddfdca136ed95be7f04c67d2ce4369', class: "text-center" }, "Booking"), index.h("th", { key: 'ba1c87aaccc26ee17077c37341f05ec745f6737f', class: "text-center" }, "By direct"), index.h("th", { key: '103867aff7a4f9551d1771d8416dd1af865dda25', class: "text-right" }, "Amount"), index.h("th", { key: '1beb038ac1218942c427c72660a565456a788a38', class: "text-center" }))), index.h("tbody", { key: '2c557e45a9601d0bdd46fbed667e72928c66b88e' }, index.h("tr", { key: '70d6f58070a5da9c624697201b87ba55244d1a30', class: "ir-table-row" }, index.h("td", { key: 'bf47d5f93d95d1edf704d082b326c75b15dd099e', class: "text-center" }, "1"), index.h("td", { key: '2f28be491cb9e4820b8812260bf7eb48944a8daf', class: "text-center" }, index.h("ir-button", { key: '4f35c1c4ef26e2f8a2f12885b047b58efc12113d', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), index.h("td", { key: '1f9c187a0c7e2468d59fb353ce552a60cc92ea26', class: "text-center" }, "1"), index.h("td", { key: '3d226cb6d5650f62968699558fece56b5decc23c', class: "text-right" }, "1"), index.h("td", { key: '1553fc3a63e3bf88670b2311cf3d67101ffee634' }, index.h("ir-button", { key: 'c084172464367258ee9e042e344b9086f2217e76', size: "sm", text: "Pay", onClickHandler: () => {
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
