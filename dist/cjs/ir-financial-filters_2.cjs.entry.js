'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const moment = require('./moment-1780b03a.js');
const locales_store = require('./locales.store-32782582.js');
const calendarData = require('./calendar-data-70bc3b4b.js');
require('./index-fbf1fe1d.js');

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
        return (index.h("div", { key: 'db8884f1d1ef9283f99f24418676c6c9be6c6217', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, index.h("div", { key: 'f35aca4cf44d31a028a1e0500217aa4caf32eddc', class: "d-flex align-items-center justify-content-between sales-filters-header" }, index.h("div", { key: '9975c5586b360966145595590769d646293b1a91', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: '977e6d6338d63036680dbad70429996ec89cc824', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: '5751fd71033ee6e2dd5364cd69ed548b9d21db7c', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: 'fafeff8cc6b097b4aba35d557b4ebc26d35729d6', class: "m-0 p-0 flex-grow-1" }, locales_store.locales.entries?.Lcz_Filters)), index.h("ir-button", { key: 'a9b84311e8fa56a7271a2d9e52923b97c398114c', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), index.h("div", { key: '998d6e7aa912ec8409dfcec16e365b65d77083fa', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, index.h("div", { key: 'a01844f606153d286002684ba9cfc279535ed47b', class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("fieldset", { key: 'f3fbb4c35d2b536fae9634bffcc4f341eac32ec9', class: "pt-1 filter-group" }, index.h("label", { key: '11e569ee3f4cdcf8c03501726e0dda810d02f858', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), index.h("div", { key: 'a0fb0f362bd41616b2ceaef31a07539527761c75', class: "w-100 d-flex" }, index.h("style", { key: '71cc73c8b112a06d58661b412a508076c9d1327a' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), index.h("ir-date-picker", { key: '5b614447c446d0826a91f57bd56a59ba7512de01', "data-testid": "pickup_date", date: this.filters?.date, class: "w-100", emitEmptyDate: true, maxDate: moment.hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: evt.detail.start?.format('YYYY-MM-DD') });
            } }, index.h("input", { key: '2346b1c3bc54cc13446b9319f0d223a6641cce7f', slot: "trigger", type: "text", value: this?.filters?.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), index.h("fieldset", { key: 'c7b180ad23821bc1cde90a88170db0a7fd6783bf', class: " filter-group" }, index.h("label", { key: 'a61879da0bf6b534dbfcb89f36519d9766da3223', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Users"), index.h("ir-select", { key: 'efb569c7f6cccde87d5bdd17c74a681b353c3feb', selectedValue: this.filters?.sourceCode, selectId: "rooms", firstOption: "All", onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), index.h("div", { key: '402b588322bc3b32e5dd2d89b3c7c9f45e4933a3', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, index.h("ir-button", { key: '56076bce7adcf47aa2f5dd56cebed130dace2dc8', btn_type: "button", "data-testid": "reset", text: locales_store.locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: 'c950650a41e7bd1e5fbc7f68d4d1455b5c862002', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales_store.locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
};
IrFinancialFilters.style = IrFinancialFiltersStyle0;

const irFinancialTableCss = ".sc-ir-financial-table-h{display:block}";
const IrFinancialTableStyle0 = irFinancialTableCss;

const tableCss = ".sc-ir-financial-table-h{--ir-cell-padding:0.5rem 1rem}.ir-table-row.sc-ir-financial-table td.sc-ir-financial-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-financial-table{overflow-x:auto}.table.sc-ir-financial-table td.sc-ir-financial-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.table.sc-ir-financial-table tbody.sc-ir-financial-table tr.sc-ir-financial-table:last-child>td.sc-ir-financial-table{border-bottom:0 !important}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sc-ir-financial-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-financial-table thead.sc-ir-financial-table th.sc-ir-financial-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-fill-normal) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-financial-table .empty-row.sc-ir-financial-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-financial-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-financial-table td.sc-ir-financial-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-brand-fill-normal) !important}.selected.sc-ir-financial-table td.sc-ir-financial-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-financial-table,.ir-table-row.sc-ir-financial-table{transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-financial-table{text-transform:capitalize;cursor:pointer}.ir-table-row.sc-ir-financial-table td.sc-ir-financial-table{transition-duration:var(--wa-transition-fast)}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sortable.sc-ir-financial-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sortable.sc-ir-financial-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sortable.sc-ir-financial-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.ir-table-row.sc-ir-financial-table:hover td.sc-ir-financial-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-financial-table:hover td.sc-ir-financial-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-financial-table:active td.sc-ir-financial-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.ir-table-row.sc-ir-financial-table:hover td.sc-ir-financial-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-financial-table:active td.sc-ir-financial-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-financial-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-financial-table svg.sc-ir-financial-table{color:var(--wa-color-brand-fill-loud)}.sticky-column.sc-ir-financial-table{position:sticky !important;right:0;background-color:white}.table--container.sc-ir-financial-table,.data-table.sc-ir-financial-table{height:100%}";
const IrFinancialTableStyle1 = tableCss;

const IrFinancialTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.financialActionsOpenSidebar = index.createEvent(this, "financialActionsOpenSidebar", 7);
    }
    financialActionsOpenSidebar;
    render() {
        return (index.h("div", { key: '5e97c01b3ea1f8273d83f041773eaec4efb15fcc', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, index.h("table", { key: 'aa5f80dd0f0bf4be7b060e202ff1f83f03a87ea3', class: "table", "data-testid": "hk_tasks_table" }, index.h("thead", { key: '4c26bc43a0c657d407630bf601ef7bd5d648d6be', class: "table-header" }, index.h("tr", { key: '3184783ae576300caabbf6efe6e8385296eb0eb5' }, index.h("th", { key: 'c14dd6b6f45f167cc10f154038b975355452bc59', class: "text-center" }, "Date"), index.h("th", { key: 'e0968507b728070178f68794081007427b44740d', class: "text-center" }, "Booking"), index.h("th", { key: '1c085d5aa62550ab201745b8bff1b17105b336d3', class: "text-center" }, "By direct"), index.h("th", { key: 'f2871075a86359de7f0393c1a55a5dfff5683473', class: "text-right" }, "Amount"), index.h("th", { key: '3e21e08e37d1b362b7d3669eec4afcbd536fac9a', class: "text-center" }))), index.h("tbody", { key: 'a9e15c950a0e6240e0a50e139e7b277373ad06df' }, index.h("tr", { key: '44bcc12d571c18a634bfe2f7d03ec026debb8ac5', class: "ir-table-row" }, index.h("td", { key: 'ae0442eddb451fe89d2cfe1e4688ef5e0a96c3e1', class: "text-center" }, "1"), index.h("td", { key: '4df8fd79531dcf15e2396ccb01d0db66b9a098d0', class: "text-center" }, index.h("ir-button", { key: '779d81c36fdbe031539837c0b3460818f6fea8d9', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), index.h("td", { key: '178a23b6320c809bdac8bedf53626c0e0d1472df', class: "text-center" }, "1"), index.h("td", { key: 'ccb7644107ab08fad22bfe32ef7ec29ef4b51ac1', class: "text-right" }, "1"), index.h("td", { key: 'd22741649c2d191ec27b213cc08562f59165bbaf' }, index.h("ir-button", { key: 'a2ded668faefb144b59b164a00c5bafbd5199f8f', size: "sm", text: "Pay", onClickHandler: () => {
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
IrFinancialTable.style = IrFinancialTableStyle0 + IrFinancialTableStyle1;

exports.ir_financial_filters = IrFinancialFilters;
exports.ir_financial_table = IrFinancialTable;

//# sourceMappingURL=ir-financial-filters_2.cjs.entry.js.map