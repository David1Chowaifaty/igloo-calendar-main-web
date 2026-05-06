import { r as registerInstance, c as createEvent, h } from './index-7e96440e.js';
import { h as hooks } from './moment-ab846cee.js';
import { l as locales } from './locales.store-cb784e95.js';
import { c as calendar_data } from './calendar-data-b1f645da.js';
import './index-f100e9d2.js';

const irFinancialFiltersCss = ".sc-ir-financial-filters-h{display:block}.financial-filter__date-picker-icon.sc-ir-financial-filters{position:absolute;inset:0;left:0.75rem;display:flex;align-items:center;width:fit-content;transform:translateY(-0.15rem)}.sc-ir-financial-filters-h{display:block;height:100%}@media (min-width: 768px){.sc-ir-financial-filters-h{width:300px}.collapse-btn.sc-ir-financial-filters{display:none}#financialFilterCollapse.collapse.sc-ir-financial-filters:not(.show){display:block}}";
const IrFinancialFiltersStyle0 = irFinancialFiltersCss;

const IrFinancialFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.fetchNewReports = createEvent(this, "fetchNewReports", 7);
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
        return (h("div", { key: '979c347b7d70fda212dbf1f540d11639bff9ac47', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '4888ada6dac98b5e65207aeb7b8221e3650dfef5', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '46ce3f54fd3bb064b635a916b5664bbff4dc2ab6', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '2f93cf780f24120bd60bb38af00033964f47e91d', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '285921a9a0c63cf7c333e4afa250416f3bbc115a', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '44cf07cc8dbdabccb794d6a529bee1698fd96ad7', class: "m-0 p-0 flex-grow-1" }, locales.entries?.Lcz_Filters)), h("ir-button", { key: 'debe90659fb3f32d80a9eaa85ed983febf8addc1', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '1c83d64c41893bb405b5f459e084525b93897086', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, h("div", { key: 'e7806a0fe516e489c5f3b62746745b7b1c36c216', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: 'bd27c70b5aa40cc5e695b61ada0682151f804e38', class: "pt-1 filter-group" }, h("label", { key: '8671a0c56ddabcfc1a227cbd80c0587f9dd7a145', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), h("div", { key: 'a9122cd4604a7757df4769baaaf2a5b53af5b521', class: "w-100 d-flex" }, h("style", { key: '2368f2a027da20f3d443d2e6da3966d04a1d256e' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), h("ir-date-picker", { key: '7d7400a4a5193bcf5d17a7bef35baa0b8e84da53', "data-testid": "pickup_date", date: this.filters?.date, class: "w-100", emitEmptyDate: true, maxDate: hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: evt.detail.start?.format('YYYY-MM-DD') });
            } }, h("input", { key: '05eba0303666d70d0fd2e9d97355ca3cfe892b4b', slot: "trigger", type: "text", value: this?.filters?.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), h("fieldset", { key: '9b10b870753937704e2402672e6048d5e8573aac', class: " filter-group" }, h("label", { key: '0f9c02b2159ee4ac0f1b91bc4feedbbb11bb09f5', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Users"), h("ir-select", { key: 'ac5947a2a109fbc5a747ced92068b07a77c86a59', selectedValue: this.filters?.sourceCode, selectId: "rooms", firstOption: "All", onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), h("div", { key: 'b332c5662a295ab2bbf72998eb0482abd340a9df', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: 'f5a1302f25cca9fe88f46a0f79dee46f7d757a0b', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '49053aaacd3db110b8748c2e46433c6241cf8e35', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
};
IrFinancialFilters.style = IrFinancialFiltersStyle0;

const irFinancialTableCss = ".sc-ir-financial-table-h{display:block}";
const IrFinancialTableStyle0 = irFinancialTableCss;

const tableCss = ".sc-ir-financial-table-h{--ir-cell-padding:0.5rem 1rem}.ir-table-row.sc-ir-financial-table td.sc-ir-financial-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-financial-table{overflow-x:auto}.table.sc-ir-financial-table td.sc-ir-financial-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.table.sc-ir-financial-table tbody.sc-ir-financial-table tr.sc-ir-financial-table:last-child>td.sc-ir-financial-table{border-bottom:0 !important}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sc-ir-financial-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-financial-table thead.sc-ir-financial-table th.sc-ir-financial-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-financial-table .empty-row.sc-ir-financial-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-financial-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-financial-table td.sc-ir-financial-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-brand-fill-normal) !important}.selected.sc-ir-financial-table td.sc-ir-financial-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-financial-table,.ir-table-row.sc-ir-financial-table{transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-financial-table{text-transform:capitalize;cursor:pointer}.ir-table-row.sc-ir-financial-table td.sc-ir-financial-table{transition-duration:var(--wa-transition-fast)}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sortable.sc-ir-financial-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sortable.sc-ir-financial-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sortable.sc-ir-financial-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.ir-table-row.sc-ir-financial-table:hover td.sc-ir-financial-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-financial-table:hover td.sc-ir-financial-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-financial-table:active td.sc-ir-financial-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.ir-table-row.sc-ir-financial-table:hover td.sc-ir-financial-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-financial-table:active td.sc-ir-financial-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-financial-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-financial-table svg.sc-ir-financial-table{color:var(--wa-color-brand-fill-loud)}.sticky-column.sc-ir-financial-table{position:sticky !important;right:0;background-color:white}.table--container.sc-ir-financial-table,.data-table.sc-ir-financial-table{height:100%}";
const IrFinancialTableStyle1 = tableCss;

const IrFinancialTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.financialActionsOpenSidebar = createEvent(this, "financialActionsOpenSidebar", 7);
    }
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: 'ea178ceed621746bdb19b46aa271ffc37cb5fcb3', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'bf4f6732e657b3cf46779946a5a88c0dddb25bb1', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '668d2de680e10d73c6b48f6187c083f00180255b', class: "table-header" }, h("tr", { key: '2224d25b4fe972686cb84066c6f05a4937c91748' }, h("th", { key: '1db01deace2067c01a0d4442b5d2315e69bcf8ec', class: "text-center" }, "Date"), h("th", { key: '3146cec57c27912c9f43e5c3678bab81e0333e65', class: "text-center" }, "Booking"), h("th", { key: 'd401ea44838f54fda0ec3911cb4c0b5ad28cfeb3', class: "text-center" }, "By direct"), h("th", { key: '0e3e3d4e1bc78a9dd7f6064c01c7280b8dca2fe9', class: "text-right" }, "Amount"), h("th", { key: '362e2448171fd0392d217dc50ffceba8e8c6e78c', class: "text-center" }))), h("tbody", { key: '3bd382df9614bf36bdaed79ecb53a9c978b80a7b' }, h("tr", { key: '72169065a9b77b20ac0baa10139dc9ff3a1fb378', class: "ir-table-row" }, h("td", { key: 'c2312bbfef1ca90c69a0b1b98b3cc2a91dfd72ac', class: "text-center" }, "1"), h("td", { key: 'e25f5d8f3b90dbd57ecdbcd38159ed611e11fa47', class: "text-center" }, h("ir-button", { key: 'f9023e8b0cb1cac7f74a0bfc2fc65ddfd2347abf', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '3acb81b027de1770dc1a6967ee3054eaaaf38cad', class: "text-center" }, "1"), h("td", { key: '04289d4af3fc5c25db564abc6ce20fa365501b94', class: "text-right" }, "1"), h("td", { key: '5ceaa6c9150bdfa752b91a672b80f63bfa7477f5' }, h("ir-button", { key: '893ac4a7698589dab0975c3b971c0fa9baa0b24a', size: "sm", text: "Pay", onClickHandler: () => {
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
IrFinancialTable.style = IrFinancialTableStyle0 + IrFinancialTableStyle1;

export { IrFinancialFilters as ir_financial_filters, IrFinancialTable as ir_financial_table };

//# sourceMappingURL=ir-financial-filters_2.entry.js.map