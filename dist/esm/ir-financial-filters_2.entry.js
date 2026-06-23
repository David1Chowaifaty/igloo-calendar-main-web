import { r as registerInstance, c as createEvent, h } from './index-D7D7fhZS.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { l as locales } from './locales.store-C0aS6UDK.js';
import { c as calendar_data } from './calendar-data-15-64PrB.js';
import './index-TzZ5wfUy.js';

const irFinancialFiltersCss = () => `.sc-ir-financial-filters-h{display:block}.financial-filter__date-picker-icon.sc-ir-financial-filters{position:absolute;inset:0;left:0.75rem;display:flex;align-items:center;width:fit-content;transform:translateY(-0.15rem)}.sc-ir-financial-filters-h{display:block;height:100%}@media (min-width: 768px){.sc-ir-financial-filters-h{width:300px}.collapse-btn.sc-ir-financial-filters{display:none}#financialFilterCollapse.collapse.sc-ir-financial-filters:not(.show){display:block}}`;

const IrFinancialFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.fetchNewReports = createEvent(this, "fetchNewReports");
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
        return (h("div", { key: 'eec483fa926e498234c72d509f14383caaa5d4b2', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: 'dd2709ae11af10a576cec85e4f5ea6e6eba0f2ac', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '0f0faf8cfb5fc923a21190ea99102ec86abc112a', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '04191afd35191e3776b41dd4284cb4e2493f3f58', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '43cc014342c4cd0cef81b5c9da9633a32402ba5b', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '1eeb2a43d3215b2f68395822a2e9bba84715c4e3', class: "m-0 p-0 flex-grow-1" }, locales.entries?.Lcz_Filters)), h("ir-button", { key: '832e325abc64fe9876414b7a591a98dd1cd6ed54', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: 'a518eb9a5a9e73b304e5c19848185ec3faa077ef', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, h("div", { key: '510ff36b46ea6e16321e04b15016ebb61b5b1ff7', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '4590f8f5bf426df388a806d06aee2ac9747676fe', class: "pt-1 filter-group" }, h("label", { key: 'd196543646932c9b3b1369953c0c9da070ab1d82', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), h("div", { key: '1069690250227b86d25cd238c2ce9a32700de6bd', class: "w-100 d-flex" }, h("style", { key: '365ff075a1320a045609ab053a6974cc8648932f' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), h("ir-date-picker", { key: '7a0b4db571b6fb624b6c144a8b1087bf56a5b92c', "data-testid": "pickup_date", date: this.filters?.date, class: "w-100", emitEmptyDate: true, maxDate: hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: evt.detail.start?.format('YYYY-MM-DD') });
            } }, h("input", { key: 'b62bba18b19002fdf3605903b561365cb2304dbc', slot: "trigger", type: "text", value: this?.filters?.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), h("fieldset", { key: 'f752f35c90652219612f578c6801d867337f5bdc', class: " filter-group" }, h("label", { key: 'c0ac397fbf435ffe0c3fdadd864730e4e631aa96', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Users"), h("ir-select", { key: '9407a30ff3ffc6b000317dd12789eee880e6629b', selectedValue: this.filters?.sourceCode, selectId: "rooms", firstOption: "All", onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), h("div", { key: 'aa71516cbc55c458af19d3ce69df93d1e4690bca', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '9aa5efb704a835b70c9adf399605e3aafb7dd607', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '3beb5c928e80d078ed8ce665ca765075401954a5', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
};
IrFinancialFilters.style = irFinancialFiltersCss();

const irFinancialTableCss = () => `.sc-ir-financial-table-h{display:block}`;

const tableCss = () => `.sc-ir-financial-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-financial-table{overflow-x:auto}.table--container.sc-ir-financial-table,.data-table.sc-ir-financial-table{height:100%}.ir-table-row.sc-ir-financial-table td.sc-ir-financial-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-financial-table td.sc-ir-financial-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-financial-table tbody.sc-ir-financial-table tr.sc-ir-financial-table:last-child>td.sc-ir-financial-table{border-bottom:0 !important}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sc-ir-financial-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-financial-table thead.sc-ir-financial-table th.sc-ir-financial-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-financial-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-financial-table,.ir-table-row.sc-ir-financial-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-financial-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sortable.sc-ir-financial-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sortable.sc-ir-financial-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sortable.sc-ir-financial-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-financial-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-financial-table svg.sc-ir-financial-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-financial-table:hover td.sc-ir-financial-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-financial-table:hover td.sc-ir-financial-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-financial-table:active td.sc-ir-financial-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-financial-table td.sc-ir-financial-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-financial-table:hover td.sc-ir-financial-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-financial-table:active td.sc-ir-financial-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-financial-table .empty-row.sc-ir-financial-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-financial-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-financial-table{position:sticky !important;right:0;background-color:white}`;

const IrFinancialTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.financialActionsOpenSidebar = createEvent(this, "financialActionsOpenSidebar");
    }
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '9586e13ba8613dbc885eca622b1edc41ed013b3d', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '34bd1778515630238ff3bab10620862f7c7ac754', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'e5d39abb2694c4955b071662be55470d5c195003', class: "table-header" }, h("tr", { key: 'f4fbd5549ecc86a58e5996254c5efc6532056dde' }, h("th", { key: 'e98a06446363c71fac7886f73f40dc0b82798816', class: "text-center" }, "Date"), h("th", { key: 'ca2122fd99326fd334e4828b5bac4abbde112486', class: "text-center" }, "Booking"), h("th", { key: 'a2db654a05eeaf1156fc4528366e9a3e4bf3443a', class: "text-center" }, "By direct"), h("th", { key: '6dd7b933d8c02e600a39b12c57a7b61b4a087f8f', class: "text-right" }, "Amount"), h("th", { key: '62033f3ca3c899566f90e07f8dbeff72e20d0534', class: "text-center" }))), h("tbody", { key: '0667ad47fb194aaff12f81f404902cdbd51781db' }, h("tr", { key: '1bd9cda0f789fa9822e32478fd38df47a236240b', class: "ir-table-row" }, h("td", { key: 'f13e5ffd3c142850895a4d835c5203cc7430d19e', class: "text-center" }, "1"), h("td", { key: 'e33764409a5ecdbd9bf24927e60ef3d8ca8df376', class: "text-center" }, h("ir-button", { key: '1d665e532001f59899ece896d0087f1ba08f9583', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '97e117415b4d023d618d1ad8ceef67b260b16fed', class: "text-center" }, "1"), h("td", { key: '0d0fb099f1780cb7cb35796d5f4cf842c50f45e0', class: "text-right" }, "1"), h("td", { key: '223294774594d0b55d10d652feef186cf874ccff' }, h("ir-button", { key: '1430c73f3371c8d558fe41a7d63341beaaf0823a', size: "sm", text: "Pay", onClickHandler: () => {
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
                        booking: null,
                    },
                });
            } })))))));
    }
};
IrFinancialTable.style = irFinancialTableCss() + tableCss();

export { IrFinancialFilters as ir_financial_filters, IrFinancialTable as ir_financial_table };
