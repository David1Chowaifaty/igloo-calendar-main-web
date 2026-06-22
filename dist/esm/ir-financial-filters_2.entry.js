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
        return (h("div", { key: '8bccb75108b2218ea6189b960885235696c4e4af', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '7df6ab1fd48c344edcda380e547f657ee39b33ff', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '269839ddb556450808e87785d2a4d49fbb04120e', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '0afd64ddaf0b60d7a513aa1868e33d6504ec825b', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '75fedd1211bbc2cec1e593aa4caee6b42b57b816', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '27dd0d9914970c95c569cd9a231b9f2a3315aecf', class: "m-0 p-0 flex-grow-1" }, locales.entries?.Lcz_Filters)), h("ir-button", { key: '0bed6753d569d152a9809ceb9edefebe309eab9b', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: 'a871d4da92dbb09bfccf06cbe9356c7e08230898', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, h("div", { key: 'f927a16c8e51d580610cc6d59715fe5e75be8dbd', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '725f272c8fdecbe3e636c805f921be3eabeae308', class: "pt-1 filter-group" }, h("label", { key: 'a76f26a46c3fda702ae7e2b7b486b7f6ac98156e', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), h("div", { key: '137ac59f59ea678a0d85e7184082053b8ef8c3e2', class: "w-100 d-flex" }, h("style", { key: '879b3d438005808527969c47456b9a6845d6dd22' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), h("ir-date-picker", { key: '90839ca425e2db98dff37175c54bceadc1264f06', "data-testid": "pickup_date", date: this.filters?.date, class: "w-100", emitEmptyDate: true, maxDate: hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: evt.detail.start?.format('YYYY-MM-DD') });
            } }, h("input", { key: 'ccba2099e89388e25d3c39f0a6155ac0ff03a185', slot: "trigger", type: "text", value: this?.filters?.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), h("fieldset", { key: 'd367db4d8bc26ed0607bf720c102735d3bd5fd72', class: " filter-group" }, h("label", { key: '10a78c9cde58f24329370dfbefd417426f59359f', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Users"), h("ir-select", { key: '749568dbc2f4f2cca00b7ae4096e8986c4c0a5b2', selectedValue: this.filters?.sourceCode, selectId: "rooms", firstOption: "All", onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), h("div", { key: 'c8a4634714a44a304a352ae64e18fb9069b84830', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '7df090d52184e3db2dfe7f515d6e57eb92686cfd', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '115524b19df977d6d53d418a6dfe61d296189fea', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
        return (h("div", { key: 'f6ff09399a6bcda642df1bbf3adfd00fe3d3b1ad', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '37d421e3768679db22b976d32d62625902f70a8b', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'ce776ace6e45cf79ea8515f5a6b731015f506f64', class: "table-header" }, h("tr", { key: 'e1465a543b2bd97d1f6713885e95168e059b5141' }, h("th", { key: 'bc9897cda843d6c2fccd5c59cab8227f01812310', class: "text-center" }, "Date"), h("th", { key: '8c365724ceb4496847296653427dd4bf57afed6b', class: "text-center" }, "Booking"), h("th", { key: '5f20d4cf534c1f21b8f691ae4628f40e60908391', class: "text-center" }, "By direct"), h("th", { key: '92e2ba877b8364fd5ce9bb9aa4f71f6ef14593a2', class: "text-right" }, "Amount"), h("th", { key: '196021fae2d5c72a1728747964a4d9de5a7ae9a7', class: "text-center" }))), h("tbody", { key: 'd631cb6d246839192168a0dd6f7aee4fefdf0dba' }, h("tr", { key: 'd585d11c9f5967efe166b82dc1d8cf0fbe81c970', class: "ir-table-row" }, h("td", { key: '807014ae75db617632edc28920907331c3e0fa77', class: "text-center" }, "1"), h("td", { key: 'd6ad9399cdc44fe62b07a6f2e4cb3f92c039f0cf', class: "text-center" }, h("ir-button", { key: 'aabb7eca0a1d258f5c67fa70a9dbd0a07e205d7d', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: 'c59f2e58b6c14a0b810824f41950ab17c6a7ba41', class: "text-center" }, "1"), h("td", { key: '3ea276dbc5e134f80825ff0804c168b574eec51e', class: "text-right" }, "1"), h("td", { key: 'fa31e39690e6f77ccacb4ece073e59dc2c8dc1b2' }, h("ir-button", { key: '2090203c9c1cbde4e5170fa63f61061c65679fc3', size: "sm", text: "Pay", onClickHandler: () => {
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
