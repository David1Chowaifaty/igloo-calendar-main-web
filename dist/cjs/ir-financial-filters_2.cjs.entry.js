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
        return (index.h("div", { key: '70d02592998098f818833ce8f99127d0b7a9a452', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, index.h("div", { key: '9c91d28ff5bcf76f4ee52d91e008cc4a539240a1', class: "d-flex align-items-center justify-content-between sales-filters-header" }, index.h("div", { key: '07e3d1ce8f4285de19a8565ad9bfcb5e3a8bf70b', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: '29a4b5c45d0777e95fa8798bcb1d70a6c98e8e13', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: 'd6a61c57f661087acbfef76e226d924e51dbf353', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: '0051ec7360bffa52ced1a0725d06111ca1304cc0', class: "m-0 p-0 flex-grow-1" }, locales_store.locales.entries?.Lcz_Filters)), index.h("ir-button", { key: '0e20f036de55e45e6b87d646ea58c2796fb4df28', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), index.h("div", { key: '5c6395c9eb37ebc3143f2002c3e4500606e918f6', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, index.h("div", { key: 'ad19e1155a3f1a3ad8128e1424a22a7da729bbfa', class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("fieldset", { key: '06d0312ee6be5533a8055a6c52b5df8b4c7c3dfe', class: "pt-1 filter-group" }, index.h("label", { key: '5e17be78767ec45832a673ee85328146e15128bc', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), index.h("div", { key: 'b7ee7a3a70e9aed74d869dc0068f5dc008a77870', class: "w-100 d-flex" }, index.h("style", { key: '719ddb0f2d7a2731b3f29a1395672b5fea878570' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), index.h("ir-date-picker", { key: 'c49a339010d0fc884cc05a85ff5f2b1543965621', "data-testid": "pickup_date", date: this.filters?.date, class: "w-100", emitEmptyDate: true, maxDate: moment.hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: evt.detail.start?.format('YYYY-MM-DD') });
            } }, index.h("input", { key: 'eb8906786149952c228043dd752e9c09a64c8100', slot: "trigger", type: "text", value: this?.filters?.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), index.h("fieldset", { key: '17d171ccf621b9b4fbb2e68a416f27dfa3a25188', class: " filter-group" }, index.h("label", { key: '65b14e75c0179945721026e63a6ad6ce11e36c0c', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Users"), index.h("ir-select", { key: '4e5e180a36bac8a83383bf19f21044b64544b7d1', selectedValue: this.filters?.sourceCode, selectId: "rooms", firstOption: "All", onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), index.h("div", { key: '0688c3a85d1b3784ad6310412d73ea39dfda9204', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, index.h("ir-button", { key: '2e851e41e9c08ddf139c301c51d9a67171aefffc', btn_type: "button", "data-testid": "reset", text: locales_store.locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: 'd0d397c47ca40f42652d2d640dd41acae391590c', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales_store.locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
};
IrFinancialFilters.style = IrFinancialFiltersStyle0;

const irFinancialTableCss = ".sc-ir-financial-table-h{display:block}";
const IrFinancialTableStyle0 = irFinancialTableCss;

const tableCss = ".sc-ir-financial-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-financial-table{overflow-x:auto}.table--container.sc-ir-financial-table,.data-table.sc-ir-financial-table{height:100%}.ir-table-row.sc-ir-financial-table td.sc-ir-financial-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-financial-table td.sc-ir-financial-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.table.sc-ir-financial-table tbody.sc-ir-financial-table tr.sc-ir-financial-table:last-child>td.sc-ir-financial-table{border-bottom:0 !important}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sc-ir-financial-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-financial-table thead.sc-ir-financial-table th.sc-ir-financial-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-financial-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-financial-table,.ir-table-row.sc-ir-financial-table{transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-financial-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sortable.sc-ir-financial-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sortable.sc-ir-financial-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sortable.sc-ir-financial-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-financial-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-financial-table svg.sc-ir-financial-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-financial-table:hover td.sc-ir-financial-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-financial-table:hover td.sc-ir-financial-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-financial-table:active td.sc-ir-financial-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-financial-table td.sc-ir-financial-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-financial-table:hover td.sc-ir-financial-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-financial-table:active td.sc-ir-financial-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-financial-table .empty-row.sc-ir-financial-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-financial-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-financial-table{position:sticky !important;right:0;background-color:white}";
const IrFinancialTableStyle1 = tableCss;

const IrFinancialTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.financialActionsOpenSidebar = index.createEvent(this, "financialActionsOpenSidebar", 7);
    }
    financialActionsOpenSidebar;
    render() {
        return (index.h("div", { key: '383d965283e245c41886af732dbeaa7335be8fa0', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, index.h("table", { key: '186d23a2ef7d04eed3db1da8bf891dd8aed828a4', class: "table", "data-testid": "hk_tasks_table" }, index.h("thead", { key: '99cab22191f4a021eeb22daa417e85ff1fcc8fea', class: "table-header" }, index.h("tr", { key: '98054bf2079a01ff59b3a3c3f3f244097afccfa6' }, index.h("th", { key: '42bc9853319ed33ac43a4620c9df5f3ed0c9a585', class: "text-center" }, "Date"), index.h("th", { key: 'fcf9b06b815aa4154e34167c8051184fca5a10f1', class: "text-center" }, "Booking"), index.h("th", { key: '5ffbd6a3d7261fdf5a5332270857d9ac85552a70', class: "text-center" }, "By direct"), index.h("th", { key: '3b7a000647cac77745712973e8367b633618700d', class: "text-right" }, "Amount"), index.h("th", { key: '6118f8725537eee39749662a7ba0ccefe451d15a', class: "text-center" }))), index.h("tbody", { key: '147c95126506f7f06044a3221734061d41f86f14' }, index.h("tr", { key: '5d6a311ff2804c074e0b0b157dfa22cf9cddd569', class: "ir-table-row" }, index.h("td", { key: '55017c8a6303c3ac6ebbf0f60728b09289a8aa17', class: "text-center" }, "1"), index.h("td", { key: '3460a866929616208b6af8b2c7f7b671f977cac3', class: "text-center" }, index.h("ir-button", { key: 'ab0ee5d4e6196a623ef67290665cb2e62950ee64', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), index.h("td", { key: '801bdbc2fd2089b7ada11b1071fd6d1219b49370', class: "text-center" }, "1"), index.h("td", { key: '41c69560ce9deefe511091c3725cb00fd76996e8', class: "text-right" }, "1"), index.h("td", { key: '3b3331512203d009f4ba7242a6b1826a9d770ee7' }, index.h("ir-button", { key: '976d326ac1038fc07224c83fae4a32472c8586c0', size: "sm", text: "Pay", onClickHandler: () => {
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