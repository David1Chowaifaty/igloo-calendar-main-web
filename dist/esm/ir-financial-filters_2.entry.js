import { r as registerInstance, c as createEvent, h } from './index-b3dce66a.js';
import { h as hooks } from './moment-ab846cee.js';
import { l as locales } from './locales.store-f4150353.js';
import { c as calendar_data } from './calendar-data-8a36a1b2.js';
import './index-a124d225.js';

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
        return (h("div", { key: 'c839211ba350175968fbb657ac372468960c9638', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '022501a2b05a1f355de3a228765fc08c927c7795', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: 'bbb4ece8f7e26bff3fbe91b70a81c6b4a0028112', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: 'b29fc25e131795614142ab229189701794236913', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '16794c9bc2830296c8dc4bd6dcc6cc305fff0b62', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '26aee2bb08a0382a6179d3938d604f8e926cfbda', class: "m-0 p-0 flex-grow-1" }, locales.entries?.Lcz_Filters)), h("ir-button", { key: 'e2145a41cbec64b13856d017dea6c2d69f7cab2f', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: 'be30ce097bd5c1915c13cecd4ace787e3a8918e4', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, h("div", { key: '3e8195cdc01836578cc9627ceb9cf11469f31d30', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: 'fdf2af08570c346a0822d241ad6967c12612a9e6', class: "pt-1 filter-group" }, h("label", { key: '96451afec316ac40cc69bfdcafa0a4962f0c2577', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), h("div", { key: '37efc4c802bc1ff0cedc7d9ee518d9ca1611084c', class: "w-100 d-flex" }, h("style", { key: '5d4c10db25b56c0e5e158b7217c3de2668e91d38' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), h("ir-date-picker", { key: 'f83786c2855b600cb3b87b17b335a93b2cd96ea0', "data-testid": "pickup_date", date: this.filters?.date, class: "w-100", emitEmptyDate: true, maxDate: hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: evt.detail.start?.format('YYYY-MM-DD') });
            } }, h("input", { key: 'bc2419f75f7cdbc35832457a00fff4d5549240db', slot: "trigger", type: "text", value: this?.filters?.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), h("fieldset", { key: '9acd2dde7d88301462c8320be16acefefd78e7ca', class: " filter-group" }, h("label", { key: '4aa5e3ce90cf938ebd5bc3438eb25e353403ed9e', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Users"), h("ir-select", { key: '099f4f0add4afd36815f330e0ab9b30b2e9d3172', selectedValue: this.filters?.sourceCode, selectId: "rooms", firstOption: "All", onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), h("div", { key: 'f44792a94cfd8fab8d4abb48aadf5eee3c9275f5', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '98c34e06cce1febfec9726635d4b254df82c5206', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '809e7b124e8855752c7b1d374e8282e9e42a924f', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
};
IrFinancialFilters.style = IrFinancialFiltersStyle0;

const irFinancialTableCss = ".sc-ir-financial-table-h{display:block}";
const IrFinancialTableStyle0 = irFinancialTableCss;

const tableCss = ".ir-table-row.sc-ir-financial-table td.sc-ir-financial-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table.sc-ir-financial-table td.sc-ir-financial-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-financial-table tbody.sc-ir-financial-table tr.sc-ir-financial-table:last-child>td.sc-ir-financial-table{border-bottom:0 !important}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sc-ir-financial-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-financial-table thead.sc-ir-financial-table th.sc-ir-financial-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-financial-table .empty-row.sc-ir-financial-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-financial-table{padding:0.5rem 1rem;position:sticky;bottom:0;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-financial-table td.sc-ir-financial-table{background:#e3f3fa !important}.selected.sc-ir-financial-table td.sc-ir-financial-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-financial-table,.ir-table-row.sc-ir-financial-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-financial-table{text-transform:capitalize}.sortable.sc-ir-financial-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-financial-table:hover td.sc-ir-financial-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.sortable.sc-ir-financial-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-financial-table svg.sc-ir-financial-table{color:var(--blue)}.sticky-column.sc-ir-financial-table{position:sticky !important;right:0;background-color:white}";
const IrFinancialTableStyle1 = tableCss;

const IrFinancialTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.financialActionsOpenSidebar = createEvent(this, "financialActionsOpenSidebar", 7);
    }
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: '60970b8819abb38ddefed6398a4dddec47c27d32', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '5126eb60f7453e4655ef113e27fb17e09c79bef5', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'bdaf58bbdafa2dbf4e68a58fcf927ad7208672c2', class: "table-header" }, h("tr", { key: '79d1353689e38ffbbd7dd09487949171e52859ea' }, h("th", { key: 'c4062beda069e0c9f5badc50b897e5c2f41a4df7', class: "text-center" }, "Date"), h("th", { key: '82dc505a5796038597ace40713527ac433e4f6c0', class: "text-center" }, "Booking"), h("th", { key: '154c90293ad8a7a217ac46e4ddb63ae532b0c415', class: "text-center" }, "By direct"), h("th", { key: '89a05640ac46afd1321f0dc49ae71a4fad3acd9c', class: "text-right" }, "Amount"), h("th", { key: 'c0d3f1b39d17dc7f0749026a6a76d20ce72c689e', class: "text-center" }))), h("tbody", { key: '1c2806780044a8761101ad85aa59c1680cc4f8ae' }, h("tr", { key: '2f0368bacd1a8d01ce971e4e79c98b2e1ee7a5fe', class: "ir-table-row" }, h("td", { key: '647b403a4002a5a5ea90fd47649c46d111e3d660', class: "text-center" }, "1"), h("td", { key: '76299d75c99fb1c90b2e9a2635dd7b64ba6510b8', class: "text-center" }, h("ir-button", { key: 'aecfc02b38a64b273eb43519e2c26884d4389d82', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '5504f862733a4aa571bf5e4b002d4414551c0b46', class: "text-center" }, "1"), h("td", { key: '6c1df79e1e0bdec63751afe33a591cf833296a0a', class: "text-right" }, "1"), h("td", { key: '0edae792204cb4f77ed297761373d558de89153d' }, h("ir-button", { key: 'f8f891775c14b501f30c307f628b3821a4776479', size: "sm", text: "Pay", onClickHandler: () => {
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
                    },
                });
            } })))))));
    }
};
IrFinancialTable.style = IrFinancialTableStyle0 + IrFinancialTableStyle1;

export { IrFinancialFilters as ir_financial_filters, IrFinancialTable as ir_financial_table };

//# sourceMappingURL=ir-financial-filters_2.entry.js.map