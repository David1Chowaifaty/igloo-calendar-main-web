import { r as registerInstance, c as createEvent, h } from './index-0Di74WDd.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { l as locales } from './locales.store-CPGnSUGJ.js';
import { c as calendar_data } from './calendar-data-wrvThdm8.js';
import './index-D9zfa7Bx.js';

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
        return (h("div", { key: 'dc1e7b4e034e045920dbaad48176b0f58b7df53d', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: 'da74c8d7c3672a2304ffb5c1e6508295273398f8', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '9bdf00ec106770917073bc887a2948a5d13baba2', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '98b405703465f045acca051e15b7e9601ace3a5d', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'ec8a4b8d8eb711fd26c3973a5c4ef6d75da70b9d', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '1342762017c0dcb251281773a5908542747e51e8', class: "m-0 p-0 flex-grow-1" }, locales.entries?.Lcz_Filters)), h("ir-button", { key: 'e67d5f3c735f75e9946605354e03a030d6b1fb8f', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: 'c8b8420b4b95577eecd41d98ce91cfa0dae1a723', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, h("div", { key: '70fb4ae3ba5b86df4f54973850c3287eb442d8b7', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: 'c9073099d94be8344f5f8df69ef1e496e511e71e', class: "pt-1 filter-group" }, h("label", { key: '206d40f846fab1e48821b3b4a8447567b8b2bc8e', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), h("div", { key: 'ec5b3c8fec580db60bfb5d43f58382ef28ac8b06', class: "w-100 d-flex" }, h("style", { key: 'eb4065fb9ed2b33dad3a9e3ed835cc17b84c2ea6' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), h("ir-date-picker", { key: 'f6d0ffd83b4a7daf116810d6d73e67538f053e72', "data-testid": "pickup_date", date: this.filters?.date, class: "w-100", emitEmptyDate: true, maxDate: hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: evt.detail.start?.format('YYYY-MM-DD') });
            } }, h("input", { key: '4c4b1f2e4bb1cd2014c17c4a10dd069f873a894f', slot: "trigger", type: "text", value: this?.filters?.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), h("fieldset", { key: '3a5e45485a8613fea91e292fb115a2d86a5a5133', class: " filter-group" }, h("label", { key: '3e9761042380797767ec8b937b82a46d1dca007c', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Users"), h("ir-select", { key: '6fe171058907c81d3a7e7dd5ab452aa6ea9d6cf7', selectedValue: this.filters?.sourceCode, selectId: "rooms", firstOption: "All", onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), h("div", { key: '5b958ba702cd418bf933080567ce94eafc63d2f9', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '5035bbe443edc48a9cbb4bc53bbf261a76d78dba', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '132b1ba0e411b2e717cd632ec28fb949f317f26f', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
};
IrFinancialFilters.style = irFinancialFiltersCss();

const irFinancialTableCss = () => `.sc-ir-financial-table-h{display:block}`;

const tableCss = () => `.sc-ir-financial-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-financial-table{overflow-x:auto}.table--container.sc-ir-financial-table,.data-table.sc-ir-financial-table{height:100%}.ir-table-row.sc-ir-financial-table td.sc-ir-financial-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-financial-table td.sc-ir-financial-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,      background-color 0.15s ease-in-out,      border-color 0.15s ease-in-out,      box-shadow 0.15s ease-in-out}.table.sc-ir-financial-table tbody.sc-ir-financial-table tr.sc-ir-financial-table:last-child>td.sc-ir-financial-table{border-bottom:0 !important}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sc-ir-financial-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-financial-table thead.sc-ir-financial-table th.sc-ir-financial-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-financial-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-financial-table,.ir-table-row.sc-ir-financial-table{transition:color 0.15s ease-in-out,      background-color 0.15s ease-in-out,      border-color 0.15s ease-in-out,      box-shadow 0.15s ease-in-out}.sortable.sc-ir-financial-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sortable.sc-ir-financial-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sortable.sc-ir-financial-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sortable.sc-ir-financial-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-financial-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-financial-table svg.sc-ir-financial-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-financial-table:hover td.sc-ir-financial-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-financial-table:hover td.sc-ir-financial-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-financial-table:active td.sc-ir-financial-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-financial-table td.sc-ir-financial-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,      background-color 0.15s ease-in-out,      border-color 0.15s ease-in-out,      box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-financial-table:hover td.sc-ir-financial-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-financial-table:active td.sc-ir-financial-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-financial-table .empty-row.sc-ir-financial-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-financial-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-financial-table{position:sticky !important;right:0;background-color:white}`;

const IrFinancialTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.financialActionsOpenSidebar = createEvent(this, "financialActionsOpenSidebar");
    }
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '82d59e4d64e55891dcf2f7a61daf11096874f787', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'd38a8a9f3c9681b616182ecc6093903b48ec93ea', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '3f4ed873a9595f35481c1536302dac980d446152', class: "table-header" }, h("tr", { key: 'b96e6209624b0fb54992110adece74c38fcfd763' }, h("th", { key: '345300b642bd48952a859dbbd62ed38f8f9f6b60', class: "text-center" }, "Date"), h("th", { key: '808a8c7a2963ae65b07084a2c0533ea20e2666cb', class: "text-center" }, "Booking"), h("th", { key: '1f93a7ef903d765eacf7f9e85d5e7f59f20b7c7a', class: "text-center" }, "By direct"), h("th", { key: 'cf04b1453f2d6409786a7bc118bb785ac73c5b21', class: "text-right" }, "Amount"), h("th", { key: '83ec8c1edc2d14df200d57cd7e502e052856d481', class: "text-center" }))), h("tbody", { key: 'aee1ff7039ecc0f3d627cb1cfcd48582bc26fc54' }, h("tr", { key: '714cb5797eb11ab3fd95a08188f18d48a86e89a1', class: "ir-table-row" }, h("td", { key: '6d0d4696cfc24b200fda0df6ad721d28e2ab7d8c', class: "text-center" }, "1"), h("td", { key: '5575fec1b81ecc5de66d22c7b2ab839cbdb17d78', class: "text-center" }, h("ir-button", { key: 'ffaa1472a7535d34bef5566e9681252685e45e2f', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '73fe570808b53c45573cc43324b144681eda974d', class: "text-center" }, "1"), h("td", { key: '352536f4b5e0c13731b0f04ea20d4809d9be04d8', class: "text-right" }, "1"), h("td", { key: '94e1f06e0e7efd237b0aac5a3b8c4fb9c97379d7' }, h("ir-button", { key: '073ea5d6b7726c84085d4066e0b4d3680d613941', size: "sm", text: "Pay", onClickHandler: () => {
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
