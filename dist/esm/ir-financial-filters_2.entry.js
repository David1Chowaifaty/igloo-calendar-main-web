import { r as registerInstance, c as createEvent, h } from './index-CaNXuIlM.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { l as locales } from './locales.store-VrM8jHuM.js';
import { c as calendar_data } from './calendar-data-DyW8sCZ4.js';
import './index-Cn49IR5D.js';

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
        return (h("div", { key: 'a5e842b56100e01445f6c7d43a4894184cf988f7', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: 'bfc7f90b2e470de1b9a8afefc3f40cc62c1843a4', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: 'd7400c835ecfe8425e9df50d2d33702e1c53aed0', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '41ba78733ccb69fba523b027f0e528f9dac6b9ca', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '625e68d46497fd9b849c69e31ee5437d569b72c1', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '6fdd2fcdb024ca10988898d068537b0307bb39a8', class: "m-0 p-0 flex-grow-1" }, locales.entries?.Lcz_Filters)), h("ir-button", { key: 'ee7fecbc1b5fa7bed34f60720e047ce03b7e1f6a', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: 'de01aabc9003b628169c9dac34118ac2043297d4', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, h("div", { key: '63e1511d7d850d904cbc3eeaa318b9770c033950', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '0b4799c27c44e7ea281ba70ee4f3f5bc82bc1313', class: "pt-1 filter-group" }, h("label", { key: '9b93271602e625662b180da979373324c7bebcb7', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), h("div", { key: 'f953cbda9945f90409879505011c619a205178d3', class: "w-100 d-flex" }, h("style", { key: '51203df89d57b2a7e0c655c0658eab111147191c' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), h("ir-date-picker", { key: '186d599527f32817ea49542e81c9f9877d2eeb6b', "data-testid": "pickup_date", date: this.filters?.date, class: "w-100", emitEmptyDate: true, maxDate: hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: evt.detail.start?.format('YYYY-MM-DD') });
            } }, h("input", { key: '534458190eb4f0117dee12e0d147aefe2412ef6c', slot: "trigger", type: "text", value: this?.filters?.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), h("fieldset", { key: 'f4c17c8ac1bf6e53b2e7ebb33a02687245063ec7', class: " filter-group" }, h("label", { key: 'f7456b60312b1c3f58ed3d6f118832905f36dc1e', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Users"), h("ir-select", { key: '79bf00f06a0c3d6288dab88dd8c6dc0953b06e5e', selectedValue: this.filters?.sourceCode, selectId: "rooms", firstOption: "All", onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), h("div", { key: 'dd1e46e74d471214e66f40a3cb76dbbd4c804307', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: 'ec6667b155c7f39de574ba1bbadc8c970f3546ea', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '67f9859b3513d2191cb857a9826e1c4c12a65c48', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
};
IrFinancialFilters.style = irFinancialFiltersCss();

const irFinancialTableCss = () => `.sc-ir-financial-table-h{display:block}`;

const tableCss = () => `.sc-ir-financial-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-financial-table{overflow-x:auto}.table--container.sc-ir-financial-table,.data-table.sc-ir-financial-table{height:100%}.ir-table-row.sc-ir-financial-table td.sc-ir-financial-table{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-financial-table td.sc-ir-financial-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-financial-table tbody.sc-ir-financial-table tr.sc-ir-financial-table:last-child>td.sc-ir-financial-table{border-bottom:0 !important}.cell--align-start.sc-ir-financial-table{text-align:start !important}.cell--align-center.sc-ir-financial-table{text-align:center !important}.cell--align-end.sc-ir-financial-table{text-align:end !important}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sc-ir-financial-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-financial-table thead.sc-ir-financial-table th.sc-ir-financial-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-financial-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-financial-table,.ir-table-row.sc-ir-financial-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-financial-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sortable.sc-ir-financial-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sortable.sc-ir-financial-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sortable.sc-ir-financial-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-financial-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-financial-table svg.sc-ir-financial-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-financial-table:hover td.sc-ir-financial-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-financial-table:hover td.sc-ir-financial-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-financial-table:active td.sc-ir-financial-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-financial-table td.sc-ir-financial-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-financial-table:hover td.sc-ir-financial-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-financial-table:active td.sc-ir-financial-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-financial-table .empty-row.sc-ir-financial-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-financial-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-financial-table{position:sticky !important;right:0;background-color:white}`;

const IrFinancialTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.financialActionsOpenSidebar = createEvent(this, "financialActionsOpenSidebar");
    }
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '4106595845503e9f162407ccf23eb67aed28499d', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '528200ae8c04738266f55bcde9b3f57584be272d', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'bacabbf90f84e3f473f956d34f0a4052be95b746', class: "table-header" }, h("tr", { key: '001a70712e34b1ed34a3e092447d02bdc40f3ff6' }, h("th", { key: 'b02dbcf8bb25f5b1706f3783c2d149e5c895f4ad', class: "text-center" }, "Date"), h("th", { key: '2cbddb02961792ab5ee8f8b2b4108a6eab094b7b', class: "text-center" }, "Booking"), h("th", { key: '7ce8c8f442e91167d8c6487f913b934fc7239bf5', class: "text-center" }, "By direct"), h("th", { key: '3f2616839684abac0b49fd8c9030a85d5ba3e73a', class: "text-right" }, "Amount"), h("th", { key: '7372303b0eac92bc1d5f08f2751f4fd056f9ab13', class: "text-center" }))), h("tbody", { key: '2061501f0008d265e9285386de6013037e140e69' }, h("tr", { key: 'd45d082a5439a8b014c2a5c41e6b4a58d1de6f2c', class: "ir-table-row" }, h("td", { key: 'a026bad5f245ee4f972b21d0b09487262f46582e', class: "text-center" }, "1"), h("td", { key: '797f126d4ab29bcda02ac71f2dce95d1a3b8698e', class: "text-center" }, h("ir-button", { key: '37a546dd841554b3a396fa0ff64cfdd5873131aa', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '8a2cf56b323bc32c99082af14396f00973930242', class: "text-center" }, "1"), h("td", { key: '82d6100138b7bb87bd141dfdafa557d933b9c0c5', class: "text-right" }, "1"), h("td", { key: 'fc7a764725bfef9aad8cc5cc946c9208a95ce1de' }, h("ir-button", { key: '726267418f5d1a642fe98f623ec43b68f13eddbd', size: "sm", text: "Pay", onClickHandler: () => {
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
