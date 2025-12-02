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
        return (h("div", { key: '156f752456285e174a2bedd3e31b6302e98406b1', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '5581c1f0d2fff158dcf4081e7b4153c32cabeb61', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: 'cce098e02b7765868c6427cddce37047808cc580', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '7f94b012fbf613e85b88d9b5c68e42981db57e1f', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '2c7792f0e6661b7db0fb464264120742a8d75889', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '2628bc51bbc34a46b8bca134b62b5a58c35918cc', class: "m-0 p-0 flex-grow-1" }, locales.entries?.Lcz_Filters)), h("ir-button", { key: 'd0652fe3f43c90dea5b00bf7134bed825d5d12a3', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '574452c7b635f64569a38ee919f19e09e8e26235', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, h("div", { key: '437d95a3d2aa3779237567c5e964e898d7a7aad4', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '3ffccfdc430d65e1a34dfd9805fdd8f24d4669d9', class: "pt-1 filter-group" }, h("label", { key: '498dd6dbeec482ffb35f238eb54ce46b3ada8643', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), h("div", { key: '2f681c0aea4726e4a55db5a01b4c704aef129edc', class: "w-100 d-flex" }, h("style", { key: '7c3fb5e3a4a2fbbe809ad7cddbb89d66a7a477fb' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), h("ir-date-picker", { key: '085d3c87022ef7a017bcdc6cc20f8e7681151af3', "data-testid": "pickup_date", date: this.filters?.date, class: "w-100", emitEmptyDate: true, maxDate: hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: evt.detail.start?.format('YYYY-MM-DD') });
            } }, h("input", { key: 'eb5e7979bf1386ac0d6ec159b68b12e4c0478c1e', slot: "trigger", type: "text", value: this?.filters?.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), h("fieldset", { key: '04a504308dffba1ecef1895965d543443435e3f9', class: " filter-group" }, h("label", { key: 'f25313a081d6421327d31e9a574a3f292e6af6be', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Users"), h("ir-select", { key: '570ec84cc45352ca4ad45aeaf45cd7d549559733', selectedValue: this.filters?.sourceCode, selectId: "rooms", firstOption: "All", onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), h("div", { key: 'a6ae8d5f32e9552da892cb7dd15313aab8966ddf', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '1780d6a8e7eff0a84242eb62378b2d4436a36bea', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '134458134ed0f6ba452fd8399cfa3627f4731e23', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
};
IrFinancialFilters.style = IrFinancialFiltersStyle0;

const irFinancialTableCss = ".sc-ir-financial-table-h{display:block}";
const IrFinancialTableStyle0 = irFinancialTableCss;

const tableCss = ".ir-table-row.sc-ir-financial-table td.sc-ir-financial-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:white;white-space:nowrap}.table.sc-ir-financial-table td.sc-ir-financial-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-financial-table tbody.sc-ir-financial-table tr.sc-ir-financial-table:last-child>td.sc-ir-financial-table{border-bottom:0 !important}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sc-ir-financial-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-financial-table thead.sc-ir-financial-table th.sc-ir-financial-table{background:rgb(255, 255, 255) !important;padding-top:1rem !important;padding-bottom:1rem !important;border-bottom:1px solid var(--wa-color-neutral-70) !important}.data-table.sc-ir-financial-table .empty-row.sc-ir-financial-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-financial-table{padding:0.5rem 1rem;position:sticky;bottom:0;border-top:1px solid var(--wa-color-neutral-70)}.selected.sc-ir-financial-table td.sc-ir-financial-table{background:#e3f3fa !important}.selected.sc-ir-financial-table td.sc-ir-financial-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-financial-table,.ir-table-row.sc-ir-financial-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-financial-table{text-transform:capitalize}.sortable.sc-ir-financial-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-financial-table:hover td.sc-ir-financial-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.sortable.sc-ir-financial-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-financial-table svg.sc-ir-financial-table{color:var(--blue)}.sticky-column.sc-ir-financial-table{position:sticky !important;right:0;background-color:white}";
const IrFinancialTableStyle1 = tableCss;

const IrFinancialTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.financialActionsOpenSidebar = createEvent(this, "financialActionsOpenSidebar", 7);
    }
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: 'cb728529abf30b3ac4dfac2c8ab7a30106d468e2', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '5777202c09a262e0f8bf76a70ce24ed22671c94a', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'cddcd6397a5996c83a65517a0f64e56ac108525b', class: "table-header" }, h("tr", { key: 'dd4f3bf4690bb91e54b0fff91eca6abc555e57a2' }, h("th", { key: 'f6e6727331da815a6999b3519b87c49f51d3bb2b', class: "text-center" }, "Date"), h("th", { key: '4a4ff6ed7976a6a3e0b64408732ce9c363491dea', class: "text-center" }, "Booking"), h("th", { key: '1c1ca96efd06ae457b2dd3d20b75cfe020a85323', class: "text-center" }, "By direct"), h("th", { key: '90b7f9ed1628f77c173d67792fdd359cb7a89d2f', class: "text-right" }, "Amount"), h("th", { key: '64c1114dc23a43ca7852c9244018809e39e18e80', class: "text-center" }))), h("tbody", { key: '8b68305f59404416193227af98de8a662ed7d828' }, h("tr", { key: '3a1ceec31d9cd4b7796f96dd12ea40236a2cd3da', class: "ir-table-row" }, h("td", { key: 'df39eb7375869177e89134bfaf1630cfd8125273', class: "text-center" }, "1"), h("td", { key: '908fe01c3bf747cce24cacb234a34f4d6c3e74c7', class: "text-center" }, h("ir-button", { key: '8a5a80220e2e96ef0c6d51333f38ab65395cfb4c', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '020a5f00de41307fcf79b412de7175b0fccf09bc', class: "text-center" }, "1"), h("td", { key: '2d9cd774e1aa7611d5951b85b1e386accb30c0c9', class: "text-right" }, "1"), h("td", { key: '6556cd3f72914b61b3903adec686c19b2be02f04' }, h("ir-button", { key: 'f899196eac7654c894de88e10bb05ac15bb57876', size: "sm", text: "Pay", onClickHandler: () => {
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